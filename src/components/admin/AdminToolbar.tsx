import { useState, useRef, useEffect } from "react";
import { useAdminRole } from "@/hooks/useAdminRole";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Sparkles, Languages, Search, ChevronDown, ChevronUp,
  Loader2, X, Copy, Check, MessageSquare, Send, Bot, User, CheckSquare, Square, Play, Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { flagComponents } from "@/components/af/AfFlags";
import { detectVerticalFromPath } from "@/utils/verticalDetection";
import { validateAndFixClone } from "@/utils/cloneValidation";

const LANGUAGES = [
  { code: "en", label: "English" }, { code: "nl", label: "Nederlands" },
  { code: "de", label: "Deutsch" }, { code: "fr", label: "Français" },
  { code: "es", label: "Español" }, { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" }, { code: "pl", label: "Polski" },
  { code: "sv", label: "Svenska" }, { code: "da", label: "Dansk" },
  { code: "no", label: "Norsk" }, { code: "fi", label: "Suomi" },
  { code: "ro", label: "Română" }, { code: "bg", label: "Български" },
  { code: "cs", label: "Čeština" }, { code: "el", label: "Ελληνικά" },
  { code: "hu", label: "Magyar" }, { code: "hr", label: "Hrvatski" },
  { code: "sk", label: "Slovenčina" }, { code: "sl", label: "Slovenščina" },
  { code: "sr", label: "Srpski" }, { code: "uk", label: "Українська" },
  { code: "ru", label: "Русский" }, { code: "zh-CN", label: "中文" },
  { code: "ja", label: "日本語" }, { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" }, { code: "hi", label: "हिन्दी" },
  { code: "tr", label: "Türkçe" }, { code: "th", label: "ไทย" },
  { code: "vi", label: "Tiếng Việt" }, { code: "id", label: "Bahasa Indonesia" },
  { code: "et", label: "Eesti" }, { code: "lv", label: "Latviešu" },
  { code: "lt", label: "Lietuvių" }, { code: "is", label: "Íslenska" },
  { code: "sq", label: "Shqip" }, { code: "mk", label: "Македонски" },
  { code: "bs", label: "Bosanski" }, { code: "lb", label: "Lëtzebuergesch" },
  { code: "bn", label: "বাংলা" }, { code: "ms", label: "Bahasa Melayu" },
];

const AI_PROVIDER = "gemini";

type ActiveTool = "generate" | "translate" | "seo" | "chat" | "clone" | null;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const AdminToolbar = () => {
  const { user, loading } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [activeTool, setActiveTool] = useState<ActiveTool>(null);
  const [inputText, setInputText] = useState("");
  const [targetLang, setTargetLang] = useState("en");
  const [result, setResult] = useState("");
  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Bulk clone state
  const [selectedLangs, setSelectedLangs] = useState<Set<string>>(new Set());
  const [cloneProgress, setCloneProgress] = useState<Record<string, "pending" | "processing" | "done" | "error">>({});
  const [bulkRunning, setBulkRunning] = useState(false);

  // Chat state
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  if (loading || !user) return null;

  const handleAIAction = async (jobType: string, content: string, language?: string) => {
    if (!content.trim()) {
      toast.error("Please enter some content first");
      return;
    }
    setProcessing(true);
    setResult("");
    try {
      const { data, error } = await supabase.functions.invoke("ai-universal", {
        body: { jobType, content, language: language || "en", provider: AI_PROVIDER },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      const res = data?.result;
      setResult(typeof res === "string" ? res : JSON.stringify(res, null, 2));
      toast.success("AI completed successfully!");
    } catch (err: any) {
      console.error("AI action error:", err);
      toast.error(err.message || "AI request failed");
    } finally {
      setProcessing(false);
    }
  };

  const getPageContent = (asHtml = false) => {
    if (inputText.trim()) return inputText;
    const main = document.querySelector("main") || document.body;
    if (asHtml) {
      // Clone DOM, strip editor/framework attributes and empty decorative divs to reduce payload ~80%
      const clone = main.cloneNode(true) as HTMLElement;

      // Replace entire FAQ/accordion sections with a marker for AI to generate fresh FAQ
      const faqSections = clone.querySelectorAll("section");
      faqSections.forEach((section) => {
        const hasAccordion = section.querySelector("[data-radix-collection-item], [data-state], [role='region']");
        const textHint = (section.textContent || "").toLowerCase();
        const isFAQ = hasAccordion || textHint.includes("frequently asked") || textHint.includes("faq") || textHint.includes("veelgestelde") || textHint.includes("häufig") || textHint.includes("questions fréquemment");
        if (isFAQ) {
          // Extract existing questions as context for the AI
          const questions: string[] = [];
          section.querySelectorAll("button, h2, h3, [role='button']").forEach(el => {
            const t = (el.textContent || "").trim();
            if (t.length > 10 && t.length < 200 && !t.includes("[AI:")) questions.push(t);
          });
          const questionsHint = questions.length > 0 ? ` Original questions for reference: ${questions.join(" | ")}` : "";
          const marker = document.createElement("section");
          marker.className = section.className;
          marker.innerHTML = `<!-- GENERATE_FAQ: Generate 6 FAQ items as h2 (question) and h3 (answer) pairs about the page topic. Write detailed, helpful answers (2-3 sentences each). Use the same styling classes.${questionsHint} -->`;
          section.replaceWith(marker);
        }
      });

      clone.querySelectorAll("*").forEach((el) => {
        const attrs = Array.from(el.attributes);
        attrs.forEach((attr) => {
          if (
            attr.name.startsWith("data-lov-") ||
            attr.name.startsWith("data-component-") ||
            attr.name.startsWith("data-radix-") ||
            attr.name.startsWith("data-state") ||
            attr.name.startsWith("data-orientation") ||
            attr.name === "data-testid"
          ) {
            el.removeAttribute(attr.name);
          }
        });
      });
      // Remove purely decorative empty blur divs to cut size
      clone.querySelectorAll("div.absolute").forEach((el) => {
        if (!el.textContent?.trim() && el.children.length === 0 && el.className.includes("blur")) {
          el.remove();
        }
      });
      let html = clone.innerHTML || "";
      // Convert Vite-hashed asset URLs (e.g. /assets/nicole-working-abc123.png)
      // to stable public paths (e.g. /images/nicole-working.png) so cloned HTML works
      html = html.replace(/src="[^"]*\/assets\/([^"]*?)-[a-zA-Z0-9_-]{8,}\.(png|jpg|jpeg|svg|webp)"/gi, 
        (match, name, ext) => `src="/images/${name}.${ext}"`
      );
      // Also fix any /src/assets/ references that snuck through
      html = html.replace(/src="\/src\/assets\/([^"]*)"/gi, 'src="/images/$1"');
      // Collapse whitespace runs
      html = html.replace(/\n\s*\n/g, "\n").replace(/\s{2,}/g, " ");
      return html;
    }
    return main.innerText?.substring(0, 5000) || "";
  };

  const handleGenerate = () => handleAIAction("page_improve", getPageContent(), "en");
  const handleTranslate = () => handleAIAction("translate", getPageContent(), targetLang);
  const handleSEO = () => handleAIAction("meta_optimize", getPageContent(), "en");

  const toggleLangSelection = (code: string) => {
    setSelectedLangs((prev) => {
      const next = new Set(prev);
      if (next.has(code)) next.delete(code); else next.add(code);
      return next;
    });
  };

  const selectAllLangs = () => {
    if (selectedLangs.size === LANGUAGES.length) {
      setSelectedLangs(new Set());
    } else {
      setSelectedLangs(new Set(LANGUAGES.map((l) => l.code)));
    }
  };

  /** Register a translated page's flag in the DB so the switcher picks it up */
  const registerFlag = async (vertical: string, langCode: string, langName: string, path: string) => {
    try {
      const { error } = await supabase.from("vertical_language_routes" as any).upsert(
        { vertical, lang_code: langCode, lang_name: langName, path },
        { onConflict: "vertical,lang_code" }
      );
      if (error) throw error;
    } catch (err: any) {
      console.error("Flag register error:", err);
    }
  };

  /** Auto-detect vertical and register current page */
  const handleRegisterCurrentPage = async () => {
    const currentPath = window.location.pathname;
    const vertical = detectVerticalFromPath(currentPath);
    if (!vertical) {
      toast.error("Kan de vertical niet detecteren op deze pagina");
      return;
    }
    // Detect lang from URL
    const langMatch = currentPath.match(/^\/([a-z]{2})\//);
    const langCode = langMatch ? langMatch[1] : "en";
    const langEntry = LANGUAGES.find(l => l.code === langCode);
    const langName = langEntry?.label || langCode;

    await registerFlag(vertical, langCode, langName, currentPath);
    toast.success(`🏳️ Vlaggetje geregistreerd: ${langName} voor ${vertical}`);
  };

  const handleBulkCloneTranslate = async () => {
    const langs = Array.from(selectedLangs);
    if (langs.length === 0) {
      toast.error("Selecteer eerst minimaal één taal");
      return;
    }
    const pageContent = getPageContent(true);
    if (!pageContent.trim()) {
      toast.error("Geen pagina-inhoud gevonden");
      return;
    }

    const currentPath = window.location.pathname;
    const vertical = detectVerticalFromPath(currentPath);
    const currentTitle = document.title;

    setBulkRunning(true);
    setResult("");
    const progress: Record<string, "pending" | "processing" | "done" | "error"> = {};
    langs.forEach((l) => (progress[l] = "pending"));
    setCloneProgress({ ...progress });

    const results: string[] = [];
    const createdPages: string[] = [];

    // ─── STEP 1: Validate source HTML & split into sections ───
    results.push("🔍 STAP 1: Bronpagina valideren & opsplitsen...");
    setResult(results.join("\n"));

    const baseHtml = pageContent;
    const sourceStats = {
      links: (baseHtml.match(/<a\s/gi) || []).length,
      imgs: (baseHtml.match(/<img\s/gi) || []).length,
      stripe: (baseHtml.match(/stripe-buy-button/gi) || []).length,
    };
    
    // Split HTML into <section> chunks to avoid AI token limits
    const sectionRegex = /<section[\s\S]*?<\/section>/gi;
    const sections = baseHtml.match(sectionRegex) || [baseHtml];
    
    results.push(`📊 Bron: ${sourceStats.links} links, ${sourceStats.imgs} imgs, ${sourceStats.stripe} Stripe buttons`);
    results.push(`📦 Payload: ${Math.round(baseHtml.length / 1024)}KB → ${sections.length} secties`);
    results.push("");

    // ─── STEP 2: Translate each section per language ───
    results.push("🌐 STAP 2: Vertalen per sectie naar geselecteerde talen...");
    results.push("");
    setResult(results.join("\n"));

    for (const langCode of langs) {
      const langLabel = LANGUAGES.find((l) => l.code === langCode)?.label || langCode;
      progress[langCode] = "processing";
      setCloneProgress({ ...progress });

      try {
        // Translate each section separately to stay within token limits
        const translatedSections: string[] = [];
        for (let i = 0; i < sections.length; i++) {
          results.push(`  ⏳ ${langLabel}: sectie ${i + 1}/${sections.length}...`);
          setResult(results.join("\n"));
          
          const { data, error } = await supabase.functions.invoke("ai-universal", {
            body: { jobType: "translate", content: sections[i], language: langCode, provider: AI_PROVIDER },
          });
          if (error) throw error;
          if (data?.error) throw new Error(data.error);

          const rawResult = typeof data.result === "string" ? data.result : JSON.stringify(data.result);
          const cleaned = rawResult.replace(/^```(?:json|html)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();
          translatedSections.push(cleaned);
          
          // Delay between chunks to avoid rate limiting (2.5s for safety)
          if (i < sections.length - 1) {
            await new Promise(r => setTimeout(r, 2500));
          }
          
          // Remove progress line
          results.pop();
        }
        
        let htmlContent = translatedSections.join("\n");

        // Restore any image src paths that AI may have altered
        const sourceSrcs = baseHtml.match(/src="([^"]*?)"/gi) || [];
        const srcMap = new Map<string, string>();
        sourceSrcs.forEach(s => {
          const m = s.match(/src="([^"]*?)"/i);
          if (m) {
            const filename = m[1].split('/').pop() || '';
            srcMap.set(filename, m[1]);
          }
        });
        // Fix broken image paths by matching filenames
        htmlContent = htmlContent.replace(/src="([^"]*?)"/gi, (match, srcVal) => {
          const filename = srcVal.split('/').pop() || '';
          if (srcMap.has(filename)) return `src="${srcMap.get(filename)}"`;
          // Check if original src exists in source
          const origSrc = Array.from(srcMap.values()).find(s => srcVal.includes(s.split('/').pop() || '___'));
          if (origSrc) return `src="${origSrc}"`;
          return match;
        });

        // Ensure Stripe buy buttons are preserved from source
        const sourceStripeMatch = baseHtml.match(/<stripe-buy-button[^>]*>/gi) || [];
        const cloneHasStripe = htmlContent.includes('stripe-buy-button');
        if (sourceStripeMatch.length > 0 && !cloneHasStripe) {
          const stripeHtml = sourceStripeMatch.map(btn => 
            `<div class="flex justify-center py-8"><div class="[&_stripe-buy-button]:scale-125 [&_stripe-buy-button]:origin-center">${btn}</stripe-buy-button></div></div>`
          ).join('');
          const pricingSection = `<section id="pricing-payment" class="py-12 bg-gradient-to-br from-background via-primary/5 to-background"><div class="container mx-auto px-4"><div class="max-w-4xl mx-auto text-center">${stripeHtml}</div></div></section>`;
          htmlContent += '\n' + pricingSection;
          results.push(`  💳 ${langLabel}: Stripe betaalknop hersteld`);
        }

        // FAQ is now open Q&A (h2/div), no details/summary restoration needed

        // Post-translate validation
        const translateValidation = validateAndFixClone(baseHtml, htmlContent);
        if (translateValidation.autoFixed.length > 0) {
          htmlContent = translateValidation.fixedHtml;
          results.push(`  🔧 ${langLabel}: ${translateValidation.autoFixed.length} auto-fixes`);
        }

        // Extract translated H1 for page title
        const h1Match = htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
        const translatedTitle = h1Match 
          ? h1Match[1].replace(/<[^>]*>/g, '').trim()
          : `${currentTitle} (${langLabel})`;
        const pageTitle = translatedTitle || `${currentTitle} (${langLabel})`;
        
        // Translate slug: ask AI for a translated URL-safe slug
        const baseSlug = currentPath.split("/").pop() || "page";
        let translatedSlug = baseSlug;
        try {
          const { data: slugData } = await supabase.functions.invoke("ai-universal", {
            body: { 
              jobType: "translate", 
              content: `Translate this URL slug to ${langLabel}. Return ONLY the translated slug, lowercase, hyphens instead of spaces, no special characters, no accents (use ASCII equivalents), no explanation. Keep it SEO-friendly and under 80 characters. Original slug: ${baseSlug}`, 
              language: langCode, 
              provider: AI_PROVIDER 
            },
          });
          if (slugData?.result) {
            const rawSlug = (typeof slugData.result === "string" ? slugData.result : "")
              .trim()
              .toLowerCase()
              .replace(/[^a-z0-9-]/g, '-')
              .replace(/-+/g, '-')
              .replace(/^-|-$/g, '');
            if (rawSlug.length > 5) translatedSlug = rawSlug;
          }
        } catch (e) {
          console.warn("Slug translation failed, using original:", e);
        }
        const fullPath = `/${langCode}/${translatedSlug}`;

        // Save the translated page
        const { error: insertError } = await supabase.from("ai_generated_pages").insert({
          title: pageTitle,
          slug: fullPath,
          html_content: htmlContent,
          language: langCode,
          meta_title: pageTitle,
          meta_description: "",
          status: "published",
          user_id: user!.id,
          niche: vertical || "general",
          source_page_id: null,
          metadata: { vertical, sourcePath: currentPath, validated: true, autoFixes: translateValidation.autoFixed.length },
        });

        if (insertError) {
          if (insertError.code === "23505") {
            await supabase.from("ai_generated_pages")
              .update({ html_content: htmlContent, title: pageTitle, metadata: { vertical, sourcePath: currentPath, validated: true } })
              .eq("slug", fullPath)
              .eq("user_id", user!.id);
          }
        }

        progress[langCode] = "done";
        createdPages.push(fullPath);
        results.push(`✅ ${langLabel}: ${fullPath}`);

        if (vertical) {
          await registerFlag(vertical, langCode, langLabel, fullPath);
          results[results.length - 1] += " 🏳️";
        }
      } catch (err: any) {
        progress[langCode] = "error";
        results.push(`❌ ${langLabel}: ${err.message}`);
      }
      setCloneProgress({ ...progress });
      setResult(results.join("\n"));
    }

    // Summary
    if (createdPages.length > 0) {
      results.push("");
      results.push("📄 Vertaalde pagina's:");
      createdPages.forEach((p) => {
        results.push(`  → ${window.location.origin}${p}`);
      });
    }

    setResult(results.join("\n"));
    toast.success(`Clone & Translate voltooid: ${createdPages.length}/${langs.length} pagina's`);
    setBulkRunning(false);
  };

  const handleChatSend = async () => {
    if (!chatInput.trim() || processing) return;
    const userMsg: ChatMessage = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-universal", {
        body: { jobType: "workspace_chat", content: chatInput, language: "en", provider: AI_PROVIDER },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      const res = data?.result;
      const parsed = typeof res === "object" ? res : { explanation: res };
      const reply = parsed.explanation || (typeof res === "string" ? res : JSON.stringify(res, null, 2));
      setChatMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (err: any) {
      setChatMessages((prev) => [...prev, { role: "assistant", content: `❌ Error: ${err.message}` }]);
    } finally {
      setProcessing(false);
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleTool = (tool: ActiveTool) => {
    if (activeTool === tool) {
      setActiveTool(null);
    } else {
      setActiveTool(tool);
      setExpanded(true);
    }
    setResult("");
    setCloneProgress({});
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] print:hidden">
      {/* Collapsed bar */}
      <div className="bg-[hsl(var(--navy-dark))] text-white flex items-center gap-2 px-4 py-1.5 text-sm shadow-lg">
        <Sparkles className="h-4 w-4 text-[hsl(var(--secondary))]" />
        <span className="font-semibold mr-2">Admin AI</span>

        <Button size="sm" variant={activeTool === "generate" ? "secondary" : "ghost"} className="h-7 text-xs text-white hover:text-white" onClick={() => toggleTool("generate")}>
          <Sparkles className="h-3 w-3 mr-1" /> Generate
        </Button>
        <Button size="sm" variant={activeTool === "translate" ? "secondary" : "ghost"} className="h-7 text-xs text-white hover:text-white" onClick={() => toggleTool("translate")}>
          <Languages className="h-3 w-3 mr-1" /> Translate
        </Button>
        <Button size="sm" variant={activeTool === "seo" ? "secondary" : "ghost"} className="h-7 text-xs text-white hover:text-white" onClick={() => toggleTool("seo")}>
          <Search className="h-3 w-3 mr-1" /> SEO
        </Button>
        <Button size="sm" variant={activeTool === "clone" ? "secondary" : "ghost"} className="h-7 text-xs text-white hover:text-white" onClick={() => toggleTool("clone")}>
          <Copy className="h-3 w-3 mr-1" /> Clone & Translate
        </Button>
        <Button size="sm" variant={activeTool === "chat" ? "secondary" : "ghost"} className="h-7 text-xs text-white hover:text-white" onClick={() => toggleTool("chat")}>
          <MessageSquare className="h-3 w-3 mr-1" /> Chat
        </Button>
        <Button size="sm" variant="ghost" className="h-7 text-xs text-white hover:text-white" onClick={handleRegisterCurrentPage} title="Registreer het vlaggetje van deze pagina voor de language switcher">
          <Flag className="h-3 w-3 mr-1" /> Register Flag
        </Button>

        <div className="ml-auto">
          <Button size="sm" variant="ghost" className="h-7 text-xs text-white hover:text-white" onClick={() => { setExpanded(!expanded); if (!expanded) setActiveTool(null); }}>
            {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </Button>
        </div>
      </div>

      {/* Expanded panel */}
      {expanded && activeTool && (
        <div className="bg-[hsl(var(--navy))] text-white border-t border-white/10 p-4 shadow-xl max-h-[60vh] overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm">
                {activeTool === "generate" && "✨ AI Content Generation & Improvement"}
                {activeTool === "translate" && "🌐 AI Translation"}
                {activeTool === "seo" && "🔍 SEO Meta Optimization"}
                {activeTool === "clone" && "📄 Clone & Translate Page (Bulk)"}
                {activeTool === "chat" && "💬 AI Workspace Chat"}
              </h3>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-white" onClick={() => { setActiveTool(null); setExpanded(false); }}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Clone & Translate tool with bulk selection */}
            {activeTool === "clone" && (
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <p className="text-xs text-white/60 flex-1">Selecteer talen en klik Start om de huidige pagina te klonen & vertalen. Alles via Gemini AI.</p>
                  <Button size="sm" variant="ghost" className="h-7 text-xs text-white/70 hover:text-white" onClick={selectAllLangs}>
                    {selectedLangs.size === LANGUAGES.length ? <CheckSquare className="h-3 w-3 mr-1" /> : <Square className="h-3 w-3 mr-1" />}
                    {selectedLangs.size === LANGUAGES.length ? "Deselecteer alles" : "Selecteer alles"}
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  {LANGUAGES.map(({ code, label }) => {
                    const FlagComponent = flagComponents[code];
                    const isSelected = selectedLangs.has(code);
                    const status = cloneProgress[code];
                    return (
                      <button
                        key={code}
                        onClick={() => !bulkRunning && toggleLangSelection(code)}
                        disabled={bulkRunning}
                        className={`
                          relative w-9 h-7 rounded-sm overflow-hidden border transition-all duration-200 
                          hover:scale-110 hover:shadow-md p-0.5 cursor-pointer
                          ${isSelected
                            ? "border-[hsl(var(--secondary))] shadow-md shadow-[hsl(var(--secondary))]/30 scale-105 ring-1 ring-[hsl(var(--secondary))]/50"
                            : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/60"
                          }
                          ${bulkRunning ? "cursor-not-allowed" : ""}
                        `}
                        title={`${label}${isSelected ? " ✓" : ""}`}
                      >
                        {FlagComponent ? <FlagComponent /> : <span className="text-[10px]">{code}</span>}
                        {/* Status overlay */}
                        {status === "processing" && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Loader2 className="h-3 w-3 animate-spin text-white" />
                          </div>
                        )}
                        {status === "done" && (
                          <div className="absolute inset-0 bg-green-600/60 flex items-center justify-center">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        )}
                        {status === "error" && (
                          <div className="absolute inset-0 bg-red-600/60 flex items-center justify-center">
                            <X className="h-3 w-3 text-white" />
                          </div>
                        )}
                        {/* Selection checkmark */}
                        {isSelected && !status && (
                          <div className="absolute top-0 right-0 bg-[hsl(var(--secondary))] rounded-bl-sm">
                            <Check className="h-2.5 w-2.5 text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Progress bar */}
                {bulkRunning && selectedLangs.size > 0 && (() => {
                  const total = selectedLangs.size;
                  const done = Object.values(cloneProgress).filter((s) => s === "done" || s === "error").length;
                  const pct = Math.round((done / total) * 100);
                  return (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs text-white/60">
                        <span>{done} / {total} talen verwerkt</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[hsl(var(--secondary))] rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })()}

                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/50">{selectedLangs.size} talen geselecteerd</span>
                  <Button
                    size="sm"
                    className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] text-white h-8"
                    onClick={handleBulkCloneTranslate}
                    disabled={bulkRunning || selectedLangs.size === 0}
                  >
                    {bulkRunning ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : <Play className="h-3 w-3 mr-1" />}
                    Start Clone & Translate ({selectedLangs.size})
                  </Button>
                </div>

                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Optioneel: plak hier custom content (laat leeg om huidige pagina-inhoud te gebruiken)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm min-h-[60px]"
                />

                {result && (
                  <div className="relative bg-black/30 rounded-md p-3 text-sm whitespace-pre-wrap max-h-[30vh] overflow-y-auto">
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-6 text-xs text-white/70 hover:text-white" onClick={copyResult}>
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                    {result}
                  </div>
                )}
              </div>
            )}

            {/* Chat tool */}
            {activeTool === "chat" && (
              <div className="space-y-3">
                <div className="bg-black/30 rounded-md p-3 h-[250px] overflow-y-auto space-y-2">
                  {chatMessages.length === 0 && (
                    <div className="text-center text-white/40 py-10 text-xs">
                      <Bot className="h-8 w-8 mx-auto mb-2 opacity-30" />
                      <p>Geef een opdracht, bijv. "Maak een nieuwe pagina over SEO tips"</p>
                    </div>
                  )}
                  {chatMessages.map((msg, i) => (
                    <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                      {msg.role === "assistant" && <Bot className="h-5 w-5 text-[hsl(var(--secondary))] mt-0.5 shrink-0" />}
                      <div className={`max-w-[80%] rounded-lg px-3 py-2 text-xs ${msg.role === "user" ? "bg-[hsl(var(--secondary))]/80" : "bg-white/10"}`}>
                        <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                      </div>
                      {msg.role === "user" && <User className="h-5 w-5 text-white/50 mt-0.5 shrink-0" />}
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
                <div className="flex gap-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleChatSend()}
                    placeholder="Type een opdracht… bijv. 'Create 5 SEO pages for travel niche'"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm h-8"
                    disabled={processing}
                  />
                  <Button size="sm" className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] text-white h-8" onClick={handleChatSend} disabled={processing || !chatInput.trim()}>
                    {processing ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3 w-3" />}
                  </Button>
                </div>
              </div>
            )}

            {/* Existing tools: generate, translate, seo */}
            {(activeTool === "generate" || activeTool === "translate" || activeTool === "seo") && (
              <>
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste or type content here… (leave empty to use current page content)"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 text-sm min-h-[80px]"
                />
                <div className="flex items-center gap-3">
                  {activeTool === "translate" && (
                    <Select value={targetLang} onValueChange={setTargetLang}>
                      <SelectTrigger className="w-48 bg-white/10 border-white/20 text-white text-sm h-8">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {LANGUAGES.map((l) => (
                          <SelectItem key={l.code} value={l.code}>{l.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                  <Button
                    size="sm"
                    className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--accent))] text-white h-8"
                    onClick={activeTool === "generate" ? handleGenerate : activeTool === "translate" ? handleTranslate : handleSEO}
                    disabled={processing}
                  >
                    {processing ? <Loader2 className="h-3 w-3 animate-spin mr-1" /> : null}
                    {activeTool === "generate" ? "Improve Content" : activeTool === "translate" ? "Translate" : "Optimize SEO"}
                  </Button>
                </div>

                {result && (
                  <div className="relative bg-black/30 rounded-md p-3 text-sm whitespace-pre-wrap max-h-[30vh] overflow-y-auto">
                    <Button size="sm" variant="ghost" className="absolute top-2 right-2 h-6 text-xs text-white/70 hover:text-white" onClick={copyResult}>
                      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                    {result}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminToolbar;

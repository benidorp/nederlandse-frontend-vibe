import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Sparkles, Languages, Search, ChevronDown, ChevronUp,
  Loader2, X, Copy, Check, MessageSquare, Send, Bot, User
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
  const [cloneLang, setCloneLang] = useState<string | null>(null);

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
        body: { jobType, content, language: language || "en" },
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

  const getPageContent = () => {
    if (inputText.trim()) return inputText;
    const main = document.querySelector("main") || document.body;
    return main.innerText?.substring(0, 5000) || "";
  };

  const handleGenerate = () => handleAIAction("page_improve", getPageContent(), "en");
  const handleTranslate = () => handleAIAction("translate", getPageContent(), targetLang);
  const handleSEO = () => handleAIAction("meta_optimize", getPageContent(), "en");

  const handleCloneTranslate = async (langCode: string) => {
    setCloneLang(langCode);
    const langLabel = LANGUAGES.find(l => l.code === langCode)?.label || langCode;
    const pageContent = getPageContent();
    if (!pageContent.trim()) {
      toast.error("No page content found to clone");
      setCloneLang(null);
      return;
    }
    setProcessing(true);
    setResult("");
    try {
      const { data, error } = await supabase.functions.invoke("ai-universal", {
        body: { jobType: "clone_page", content: pageContent, language: langCode },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      const res = data?.result;
      setResult(typeof res === "string" ? res : JSON.stringify(res, null, 2));
      toast.success(`Page cloned & translated to ${langLabel}!`);
    } catch (err: any) {
      console.error("Clone error:", err);
      toast.error(err.message || "Clone & translate failed");
    } finally {
      setProcessing(false);
      setCloneLang(null);
    }
  };

  const handleChatSend = async () => {
    if (!chatInput.trim() || processing) return;
    const userMsg: ChatMessage = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput("");
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("ai-universal", {
        body: { jobType: "workspace_chat", content: chatInput, language: "en" },
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
                {activeTool === "clone" && "📄 Clone & Translate Page"}
                {activeTool === "chat" && "💬 AI Workspace Chat"}
              </h3>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-white" onClick={() => { setActiveTool(null); setExpanded(false); }}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Clone & Translate tool */}
            {activeTool === "clone" && (
              <div className="space-y-3">
                <p className="text-xs text-white/60">Klik op een vlag om de huidige pagina te klonen en vertalen naar die taal.</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {LANGUAGES.map(({ code, label }) => {
                    const FlagComponent = flagComponents[code];
                    const isProcessingThis = processing && cloneLang === code;
                    return (
                      <button
                        key={code}
                        onClick={() => !processing && handleCloneTranslate(code)}
                        disabled={processing}
                        className={`
                          relative w-9 h-7 rounded-sm overflow-hidden border transition-all duration-200 
                          hover:scale-110 hover:shadow-md p-0.5 cursor-pointer
                          ${isProcessingThis
                            ? "border-[hsl(var(--secondary))] shadow-md shadow-[hsl(var(--secondary))]/30 scale-105 ring-1 ring-[hsl(var(--secondary))]/50"
                            : "border-white/20 opacity-85 hover:opacity-100 hover:border-white/60"
                          }
                          ${processing && !isProcessingThis ? "opacity-40 cursor-not-allowed" : ""}
                        `}
                        title={`Clone & Translate → ${label}`}
                      >
                        {FlagComponent ? <FlagComponent /> : <span className="text-[10px]">{code}</span>}
                        {isProcessingThis && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Loader2 className="h-3 w-3 animate-spin text-white" />
                          </div>
                        )}
                      </button>
                    );
                  })}
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

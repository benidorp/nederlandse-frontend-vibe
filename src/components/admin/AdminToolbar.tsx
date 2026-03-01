import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  Sparkles, Languages, Search, ChevronDown, ChevronUp,
  Loader2, X, Copy, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  { code: "ru", label: "Русский" }, { code: "zh", label: "中文" },
  { code: "ja", label: "日本語" }, { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" }, { code: "hi", label: "हिन्दी" },
  { code: "tr", label: "Türkçe" },
];

type ActiveTool = "generate" | "translate" | "seo" | null;

const AdminToolbar = () => {
  const { user, loading } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [activeTool, setActiveTool] = useState<ActiveTool>(null);
  const [inputText, setInputText] = useState("");
  const [targetLang, setTargetLang] = useState("en");
  const [result, setResult] = useState("");
  const [processing, setProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Don't render for non-authenticated users
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
    // Grab visible page text as fallback
    const main = document.querySelector("main") || document.body;
    return main.innerText?.substring(0, 5000) || "";
  };

  const handleGenerate = () => handleAIAction("page_improve", getPageContent(), "en");
  const handleTranslate = () => handleAIAction("translate", getPageContent(), targetLang);
  const handleSEO = () => handleAIAction("meta_optimize", getPageContent(), "en");

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
        <span className="font-semibold mr-2">Admin AI Tools</span>

        <Button
          size="sm"
          variant={activeTool === "generate" ? "secondary" : "ghost"}
          className="h-7 text-xs text-white hover:text-white"
          onClick={() => toggleTool("generate")}
        >
          <Sparkles className="h-3 w-3 mr-1" /> Generate / Improve
        </Button>
        <Button
          size="sm"
          variant={activeTool === "translate" ? "secondary" : "ghost"}
          className="h-7 text-xs text-white hover:text-white"
          onClick={() => toggleTool("translate")}
        >
          <Languages className="h-3 w-3 mr-1" /> Translate
        </Button>
        <Button
          size="sm"
          variant={activeTool === "seo" ? "secondary" : "ghost"}
          className="h-7 text-xs text-white hover:text-white"
          onClick={() => toggleTool("seo")}
        >
          <Search className="h-3 w-3 mr-1" /> SEO Optimize
        </Button>

        <div className="ml-auto">
          <Button
            size="sm"
            variant="ghost"
            className="h-7 text-xs text-white hover:text-white"
            onClick={() => { setExpanded(!expanded); if (!expanded) setActiveTool(null); }}
          >
            {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </Button>
        </div>
      </div>

      {/* Expanded panel */}
      {expanded && activeTool && (
        <div className="bg-[hsl(var(--navy))] text-white border-t border-white/10 p-4 shadow-xl max-h-[60vh] overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-sm capitalize">
                {activeTool === "generate" && "✨ AI Content Generation & Improvement"}
                {activeTool === "translate" && "🌐 AI Translation"}
                {activeTool === "seo" && "🔍 SEO Meta Optimization"}
              </h3>
              <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-white" onClick={() => { setActiveTool(null); setExpanded(false); }}>
                <X className="h-4 w-4" />
              </Button>
            </div>

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
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-6 text-xs text-white/70 hover:text-white"
                  onClick={copyResult}
                >
                  {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                </Button>
                {result}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminToolbar;

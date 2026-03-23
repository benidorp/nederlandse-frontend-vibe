import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { Copy, Loader2, Languages, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LANGUAGES = [
  "nl","en","de","fr","es","it","pt","pl","ja","zh","ar","tr","hi",
  "sv","no","da","fi","cs","el","ru","ro","bg","uk","hr","sk","sr","sl","ko","hu",
];

const CloneTranslateTab = () => {
  const [html, setHtml] = useState("");
  const [targetLangs, setTargetLangs] = useState<string[]>(["de"]);
  const [results, setResults] = useState<any[]>([]);
  const { processAI, isLoading } = useUniversalAI();
  const { toast } = useToast();

  const toggleLang = (lang: string) => {
    setTargetLangs((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleClone = async () => {
    if (!html.trim() || targetLangs.length === 0) return;
    const newResults: any[] = [];

    for (const lang of targetLangs) {
      const res = await processAI("clone_page", html, lang);
      if (res?.result) {
        newResults.push({ language: lang, ...res.result, provider: res.provider, cost: res.usage.costUsd });
      }
    }
    setResults(newResults);
  };

  const copyResult = (content: string) => {
    navigator.clipboard.writeText(content);
    toast({ title: "Copied!" });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-primary" /> Multilingual Clone System
          </CardTitle>
          <CardDescription>Clone a page into multiple languages. AI preserves layout, headings, and optimizes keywords per language.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Source HTML/Content</Label>
            <Textarea value={html} onChange={(e) => setHtml(e.target.value)} placeholder="Paste your page HTML here..." className="min-h-[200px] font-mono text-xs" />
          </div>
          <div>
            <Label>Target Languages</Label>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {LANGUAGES.map((l) => (
                <button
                  key={l}
                  onClick={() => toggleLang(l)}
                  className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                    targetLangs.includes(l)
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">{targetLangs.length} languages selected</p>
          </div>
          <Button onClick={handleClone} disabled={isLoading || !html.trim() || targetLangs.length === 0} className="w-full">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Cloning {targetLangs.length} versions...</> : `Clone into ${targetLangs.length} languages`}
          </Button>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((r, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    {r.language.toUpperCase()} — {r.title || "Cloned Page"}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => copyResult(r.htmlContent || JSON.stringify(r))}>
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  via {r.provider} · ${r.cost?.toFixed(4)}
                </p>
              </CardHeader>
              <CardContent>
                <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-3 rounded max-h-[200px] overflow-auto">
                  {r.htmlContent || JSON.stringify(r, null, 2)}
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CloneTranslateTab;

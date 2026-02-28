import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAIProcess } from "@/hooks/useAIProcess";
import { Sparkles, Loader2 } from "lucide-react";

const PageImproverTab = () => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("en");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useAIProcess();

  const handleImprove = async () => {
    if (!content.trim()) return;
    const res = await processAI("page_improve", content, language);
    if (res?.result) setResult(res.result);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-pink-500" /> AI Page Improver
          </CardTitle>
          <CardDescription>Analyze & improve conversion copy, readability, keywords, CTAs. GPT-4.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Language</Label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {["en", "nl", "de", "fr", "es", "it", "pt"].map(l => (
                <option key={l} value={l}>{l.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Page Content</Label>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Paste your current page content..." className="min-h-[300px]" />
          </div>
          <Button onClick={handleImprove} disabled={isLoading || !content.trim()} className="w-full bg-gradient-to-r from-pink-500 to-rose-500">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Analyzing...</> : "Analyze & Improve"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-lg">Improvement Suggestions</CardTitle></CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-3">
              {typeof result === "object" ? (
                <>
                  {result.readabilityScore && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs font-medium text-blue-600">Readability Score</p>
                      <p className="text-2xl font-bold text-blue-700">{result.readabilityScore}/100</p>
                    </div>
                  )}
                  {result.keywordDensity && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-xs font-medium text-green-600">Keyword Density</p>
                      <p className="text-sm">{result.keywordDensity}</p>
                    </div>
                  )}
                  {result.suggestions?.map((s: any, i: number) => (
                    <div key={i} className="p-3 bg-muted/50 rounded-lg border-l-4 border-pink-400">
                      <p className="text-xs font-medium text-pink-600 uppercase">{s.type}</p>
                      {s.current && <p className="text-xs text-red-500 line-through mt-1">{s.current}</p>}
                      {s.improved && <p className="text-xs text-green-600 font-medium mt-1">{s.improved}</p>}
                      <p className="text-xs text-muted-foreground mt-1">{s.reason}</p>
                    </div>
                  ))}
                  {result.ctaImprovements?.map((c: any, i: number) => (
                    <div key={`cta-${i}`} className="p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                      <p className="text-xs font-medium text-orange-600">CTA Improvement</p>
                      <p className="text-xs text-red-500 line-through">{c.current}</p>
                      <p className="text-xs text-green-600 font-medium">{c.improved}</p>
                      <p className="text-xs text-muted-foreground">{c.reason}</p>
                    </div>
                  ))}
                </>
              ) : (
                <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-4 rounded-lg">{typeof result === "string" ? result : JSON.stringify(result, null, 2)}</pre>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-20">Improvement suggestions will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PageImproverTab;

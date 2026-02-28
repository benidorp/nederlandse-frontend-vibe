import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useAIProcess } from "@/hooks/useAIProcess";
import { Link2, Loader2 } from "lucide-react";

const InternalLinksTab = () => {
  const [content, setContent] = useState("");
  const [sitePages, setSitePages] = useState("");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useAIProcess();

  const handleAnalyze = async () => {
    if (!content.trim()) return;
    const prompt = `Analyze this page content and suggest contextual internal links.\n\nPage content:\n${content}\n\nAvailable site pages:\n${sitePages || "Auto-detect based on content topics"}`;
    const res = await processAI("internal_links", prompt);
    if (res?.result) setResult(res.result);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="h-5 w-5 text-cyan-500" /> Internal Linking Engine
          </CardTitle>
          <CardDescription>Analyze content and suggest contextual internal links. GPT-3.5.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Page Content</Label>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Paste the page content to analyze..." className="min-h-[200px]" />
          </div>
          <div>
            <Label>Available Pages/URLs (optional, one per line)</Label>
            <Textarea value={sitePages} onChange={(e) => setSitePages(e.target.value)} placeholder="/en/premium-domains&#10;/nl/fotografie-documenten&#10;/vat-calculator" className="min-h-[120px]" />
          </div>
          <Button onClick={handleAnalyze} disabled={isLoading || !content.trim()} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Analyzing...</> : "Analyze & Suggest Links"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-lg">Link Suggestions</CardTitle></CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-3">
              {typeof result === "object" && result.suggestions ? (
                result.suggestions.map((s: any, i: number) => (
                  <div key={i} className="p-3 bg-muted/50 rounded-lg border-l-4 border-cyan-400">
                    <p className="font-medium text-sm">"{s.anchorText}"</p>
                    <p className="text-xs text-blue-600 mt-1">→ {s.targetUrl}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.context}</p>
                    {s.relevanceScore && <p className="text-xs text-green-600 mt-1">Relevance: {s.relevanceScore}/10</p>}
                  </div>
                ))
              ) : (
                <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-4 rounded-lg">
                  {typeof result === "string" ? result : JSON.stringify(result, null, 2)}
                </pre>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-20">Link suggestions will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default InternalLinksTab;

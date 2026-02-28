import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { Search, Loader2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MetaOptimizerTab = () => {
  const [content, setContent] = useState("");
  const [language, setLanguage] = useState("en");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useUniversalAI();
  const { toast } = useToast();

  const handleOptimize = async () => {
    if (!content.trim()) return;
    const res = await processAI("meta_optimize", content, language);
    if (res?.result) setResult(res.result);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    toast({ title: "Copied!" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-green-500" /> SEO Meta Optimizer
          </CardTitle>
          <CardDescription>Generate title tags, meta descriptions, OG tags & Twitter cards. GPT-3.5.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Language</Label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {["en", "nl", "de", "fr", "es", "it", "pt", "pl", "ja", "zh", "ar", "tr", "hi"].map(l => (
                <option key={l} value={l}>{l.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Page Content</Label>
            <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Paste your page content..." className="min-h-[300px]" />
          </div>
          <Button onClick={handleOptimize} disabled={isLoading || !content.trim()} className="w-full bg-gradient-to-r from-green-500 to-teal-500">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Optimizing...</> : "Generate Meta Tags"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Optimized Meta Tags</CardTitle>
            {result && <Button variant="outline" size="sm" onClick={copyAll}><Copy className="h-4 w-4 mr-1" /> Copy All</Button>}
          </div>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-3">
              {typeof result === "object" ? (
                Object.entries(result).map(([key, value]) => (
                  <div key={key} className="p-3 bg-muted/50 rounded-lg">
                    <p className="text-xs font-medium text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                    <p className="text-sm mt-1">{Array.isArray(value) ? (value as string[]).join(", ") : String(value)}</p>
                  </div>
                ))
              ) : (
                <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-4 rounded-lg">{typeof result === "string" ? result : JSON.stringify(result, null, 2)}</pre>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-20">Meta tags will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MetaOptimizerTab;

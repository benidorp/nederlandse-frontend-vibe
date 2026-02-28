import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { FileText, Loader2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BlogGeneratorTab = () => {
  const [keyword, setKeyword] = useState("");
  const [language, setLanguage] = useState("en");
  const [additionalInstructions, setAdditionalInstructions] = useState("");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useUniversalAI();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!keyword.trim()) return;
    const prompt = `Write a comprehensive SEO blog article about: "${keyword}"\n\nLanguage: ${language}\n${additionalInstructions ? `Additional instructions: ${additionalInstructions}` : ""}`;
    const res = await processAI("blog", prompt, language);
    if (res?.result) setResult(res.result);
  };

  const copyContent = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-purple-500" /> AI Blog Generator
          </CardTitle>
          <CardDescription>Generate SEO-optimized articles with FAQ schema. Uses GPT-4.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Target Keyword</Label>
            <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} placeholder="e.g. premium domain names for SEO" />
          </div>
          <div>
            <Label>Language</Label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {["en", "nl", "de", "fr", "es", "it", "pt", "pl", "ja", "zh", "ar", "tr", "hi"].map(l => (
                <option key={l} value={l}>{l.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Additional Instructions (optional)</Label>
            <Textarea value={additionalInstructions} onChange={(e) => setAdditionalInstructions(e.target.value)} placeholder="Tone, style, specific points to cover..." className="min-h-[100px]" />
          </div>
          <Button onClick={handleGenerate} disabled={isLoading || !keyword.trim()} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating...</> : "Generate Blog Article"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Generated Article</CardTitle>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-4">
              {typeof result === "object" ? (
                <>
                  {result.metaTitle && (
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-blue-600 font-medium">Meta Title</p>
                      <p className="text-sm font-medium">{result.metaTitle}</p>
                      <Button variant="ghost" size="sm" onClick={() => copyContent(result.metaTitle)}><Copy className="h-3 w-3" /></Button>
                    </div>
                  )}
                  {result.metaDescription && (
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-xs text-green-600 font-medium">Meta Description</p>
                      <p className="text-sm">{result.metaDescription}</p>
                    </div>
                  )}
                  <div className="prose prose-sm max-h-[400px] overflow-auto">
                    <div dangerouslySetInnerHTML={{ __html: result.content || JSON.stringify(result) }} />
                  </div>
                </>
              ) : (
                <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-4 rounded-lg max-h-[500px] overflow-auto">{result}</pre>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-20">Generated article will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogGeneratorTab;

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAIProcess } from "@/hooks/useAIProcess";
import { Languages, Copy, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LANGUAGES = [
  "nl", "en", "de", "fr", "es", "it", "pt", "pl", "ja", "zh",
  "ar", "tr", "hi", "sv", "no", "da", "fi", "cs", "el", "ru",
  "ro", "bg", "uk", "hr", "sk", "sr", "sl", "ko", "hu",
];

const TranslateTab = () => {
  const [content, setContent] = useState("");
  const [targetLang, setTargetLang] = useState("de");
  const [result, setResult] = useState("");
  const { processAI, isLoading } = useAIProcess();
  const { toast } = useToast();

  const handleTranslate = async () => {
    if (!content.trim()) return;
    const res = await processAI("translate", content, targetLang);
    if (res?.result) {
      setResult(typeof res.result === "string" ? res.result : JSON.stringify(res.result, null, 2));
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    toast({ title: "Copied to clipboard" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5 text-blue-500" /> Clone & Translate
          </CardTitle>
          <CardDescription>Translate page content with SEO optimization. Uses GPT-3.5.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Target Language</Label>
            <select
              value={targetLang}
              onChange={(e) => setTargetLang(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            >
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>{l.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Content to Translate (HTML/Text)</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your page content, HTML, or text here..."
              className="min-h-[300px] font-mono text-xs"
            />
          </div>
          <Button onClick={handleTranslate} disabled={isLoading || !content.trim()} className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Translating...</> : "Translate & Optimize"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Result</CardTitle>
            {result && (
              <Button variant="outline" size="sm" onClick={copyResult}>
                <Copy className="h-4 w-4 mr-1" /> Copy
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {result ? (
            <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-4 rounded-lg max-h-[500px] overflow-auto">
              {result}
            </pre>
          ) : (
            <p className="text-muted-foreground text-center py-20">Translation result will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default TranslateTab;

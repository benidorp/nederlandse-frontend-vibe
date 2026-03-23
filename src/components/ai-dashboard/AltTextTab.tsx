import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { Image, Loader2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AltTextTab = () => {
  const [descriptions, setDescriptions] = useState("");
  const [language, setLanguage] = useState("en");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useUniversalAI();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!descriptions.trim()) return;
    const res = await processAI("alt_text", `Generate SEO-optimized alt text for these images:\n${descriptions}`, language);
    if (res?.result) setResult(res.result);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5 text-orange-500" /> Alt Text Generator
          </CardTitle>
          <CardDescription>Generate SEO-optimized alt text for images. GPT-3.5.</CardDescription>
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
            <Label>Image Descriptions (one per line)</Label>
            <Textarea value={descriptions} onChange={(e) => setDescriptions(e.target.value)} placeholder="Hero image showing premium domain marketplace&#10;Screenshot of SEO analytics dashboard&#10;Logo of IAEE company" className="min-h-[250px]" />
          </div>
          <Button onClick={handleGenerate} disabled={isLoading || !descriptions.trim()} className="w-full bg-gradient-to-r from-orange-500 to-amber-500">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating...</> : "Generate Alt Text"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle className="text-lg">Generated Alt Text</CardTitle></CardHeader>
        <CardContent>
          {result ? (
            <pre className="whitespace-pre-wrap text-xs font-mono bg-muted/50 p-4 rounded-lg max-h-[500px] overflow-auto">
              {typeof result === "string" ? result : JSON.stringify(result, null, 2)}
            </pre>
          ) : (
            <p className="text-muted-foreground text-center py-20">Alt text results will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AltTextTab;

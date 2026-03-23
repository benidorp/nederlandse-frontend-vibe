import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { Code, Loader2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CodeAssistantTab = () => {
  const [request, setRequest] = useState("");
  const [codeType, setCodeType] = useState("json-ld");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useUniversalAI();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!request.trim()) return;
    const prompt = `Generate ${codeType} code for:\n${request}`;
    const res = await processAI("code_generate", prompt);
    if (res?.result) setResult(res.result);
  };

  const copyCode = () => {
    const text = typeof result === "object" ? (result.code || JSON.stringify(result, null, 2)) : result;
    navigator.clipboard.writeText(text);
    toast({ title: "Copied!" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="h-5 w-5 text-indigo-500" /> Code Assistant
          </CardTitle>
          <CardDescription>Generate CSS, HTML, JSON-LD schema & structured data. GPT-4.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Code Type</Label>
            <select value={codeType} onChange={(e) => setCodeType(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="json-ld">JSON-LD Schema</option>
              <option value="css">Custom CSS</option>
              <option value="html">HTML Block</option>
              <option value="structured-data">Structured Data</option>
            </select>
          </div>
          <div>
            <Label>Request</Label>
            <Textarea value={request} onChange={(e) => setRequest(e.target.value)} placeholder="Describe what code you need..." className="min-h-[250px]" />
          </div>
          <Button onClick={handleGenerate} disabled={isLoading || !request.trim()} className="w-full bg-gradient-to-r from-indigo-500 to-violet-500">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating...</> : "Generate Code"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Generated Code</CardTitle>
            {result && <Button variant="outline" size="sm" onClick={copyCode}><Copy className="h-4 w-4 mr-1" /> Copy</Button>}
          </div>
        </CardHeader>
        <CardContent>
          {result ? (
            <pre className="whitespace-pre-wrap text-xs font-mono bg-slate-900 text-green-400 p-4 rounded-lg max-h-[500px] overflow-auto">
              {typeof result === "object" ? (result.code || JSON.stringify(result, null, 2)) : result}
            </pre>
          ) : (
            <p className="text-muted-foreground text-center py-20">Generated code will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeAssistantTab;

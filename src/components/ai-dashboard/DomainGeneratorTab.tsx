import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUniversalAI } from "@/hooks/useUniversalAI";
import { Globe, Loader2, FileText, ExternalLink } from "lucide-react";

const DomainGeneratorTab = () => {
  const [domain, setDomain] = useState("");
  const [niche, setNiche] = useState("");
  const [keywords, setKeywords] = useState("");
  const [language, setLanguage] = useState("en");
  const [result, setResult] = useState<any>(null);
  const { processAI, isLoading } = useUniversalAI();

  const handleGenerate = async () => {
    if (!domain.trim() || !niche.trim()) return;
    const content = `Domain: ${domain}\nNiche: ${niche}\nKeywords: ${keywords}\nLanguage: ${language}`;
    const res = await processAI("domain_generate", content, language, { domain, niche, keywords });
    if (res?.result) setResult(res.result);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" /> Premium Domain Generator
          </CardTitle>
          <CardDescription>Generate a complete website from a premium/expired domain</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Domain Name</Label>
            <Input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="example.com" />
          </div>
          <div>
            <Label>Niche / Industry</Label>
            <Input value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g. Travel, Technology, Health" />
          </div>
          <div>
            <Label>Target Keywords (comma separated)</Label>
            <Textarea value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="premium hotels, luxury travel, best destinations" className="min-h-[80px]" />
          </div>
          <div>
            <Label>Language</Label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              {["en","nl","de","fr","es","it","pt","pl","ja","zh","ar","tr","hi","sv","no","da","fi","cs","el","ru","ro","bg","uk","hr","sk","sr","sl","ko","hu"].map(l => (
                <option key={l} value={l}>{l.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <Button onClick={handleGenerate} disabled={isLoading || !domain.trim() || !niche.trim()} className="w-full">
            {isLoading ? <><Loader2 className="h-4 w-4 animate-spin mr-2" /> Generating Site...</> : "🚀 Generate Website Structure"}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Generated Structure</CardTitle>
          <CardDescription>Pages, blog structure, and internal links</CardDescription>
        </CardHeader>
        <CardContent>
          {result ? (
            <div className="space-y-4">
              {result.pages && (
                <div>
                  <h4 className="font-medium text-sm mb-2">📄 Pages ({result.pages.length})</h4>
                  <div className="space-y-2">
                    {result.pages.map((p: any, i: number) => (
                      <div key={i} className="p-3 rounded-lg bg-muted/50 text-sm">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-primary" />
                          <span className="font-medium">{p.title}</span>
                          <span className="text-xs text-muted-foreground bg-muted px-1.5 rounded">{p.type}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">/{p.slug}</p>
                        {p.metaDescription && <p className="text-xs mt-1 italic">{p.metaDescription}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {result.blogStructure && (
                <div>
                  <h4 className="font-medium text-sm mb-2">📝 Blog Posts ({result.blogStructure.length})</h4>
                  {result.blogStructure.map((b: any, i: number) => (
                    <div key={i} className="text-sm p-2 rounded bg-muted/30">
                      <span className="font-medium">{b.title}</span>
                      <span className="text-xs text-muted-foreground ml-2">/{b.slug}</span>
                    </div>
                  ))}
                </div>
              )}
              {result.internalLinks && (
                <div>
                  <h4 className="font-medium text-sm mb-2">🔗 Internal Links ({result.internalLinks.length})</h4>
                  {result.internalLinks.map((l: any, i: number) => (
                    <div key={i} className="text-xs p-2 rounded bg-muted/30 flex items-center gap-2">
                      <ExternalLink className="h-3 w-3" />
                      <span>{l.from} → {l.to}</span>
                      <span className="text-muted-foreground">"{l.anchorText}"</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-20">Generated site structure will appear here</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DomainGeneratorTab;

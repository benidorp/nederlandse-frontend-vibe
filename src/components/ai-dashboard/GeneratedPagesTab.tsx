import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { FileText, Eye, Trash2, Copy, Globe, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DOMPurify from "dompurify";

interface GeneratedPage {
  id: string;
  title: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  language: string;
  domain: string | null;
  niche: string | null;
  status: string;
  html_content: string;
  created_at: string;
}

const GeneratedPagesTab = () => {
  const [pages, setPages] = useState<GeneratedPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPage, setSelectedPage] = useState<GeneratedPage | null>(null);
  const { toast } = useToast();

  const fetchPages = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("ai_generated_pages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);
    setPages((data as GeneratedPage[]) || []);
    setLoading(false);
  };

  useEffect(() => { fetchPages(); }, []);

  const deletePage = async (id: string) => {
    await supabase.from("ai_generated_pages").delete().eq("id", id);
    setPages((prev) => prev.filter((p) => p.id !== id));
    if (selectedPage?.id === id) setSelectedPage(null);
    toast({ title: "Page deleted" });
  };

  const copyHtml = (html: string) => {
    navigator.clipboard.writeText(html);
    toast({ title: "HTML copied to clipboard" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Page List */}
      <Card className="lg:col-span-1">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" /> Generated Pages
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={fetchPages}>
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
          </div>
          <CardDescription>{pages.length} pages generated</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 max-h-[600px] overflow-y-auto">
          {pages.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-8">No pages generated yet</p>
          ) : (
            pages.map((page) => (
              <button
                key={page.id}
                onClick={() => setSelectedPage(page)}
                className={`w-full text-left p-3 rounded-lg text-sm transition-colors ${
                  selectedPage?.id === page.id ? "bg-primary/10 border border-primary/30" : "bg-muted/50 hover:bg-muted"
                }`}
              >
                <div className="font-medium truncate">{page.title}</div>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Globe className="h-3 w-3" />
                  <span>{page.language.toUpperCase()}</span>
                  {page.domain && <span>· {page.domain}</span>}
                  <span className={`ml-auto px-1.5 rounded ${page.status === "published" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                    {page.status}
                  </span>
                </div>
              </button>
            ))
          )}
        </CardContent>
      </Card>

      {/* Page Preview */}
      <Card className="lg:col-span-2">
        <CardHeader>
          {selectedPage ? (
            <div>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{selectedPage.title}</CardTitle>
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" onClick={() => copyHtml(selectedPage.html_content)}>
                    <Copy className="h-3.5 w-3.5 mr-1" /> Copy HTML
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive" onClick={() => deletePage(selectedPage.id)}>
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
              <div className="flex gap-2 mt-1 text-xs text-muted-foreground">
                <span>/{selectedPage.slug}</span>
                {selectedPage.meta_title && <span>· {selectedPage.meta_title}</span>}
              </div>
            </div>
          ) : (
            <CardTitle className="text-lg">Page Preview</CardTitle>
          )}
        </CardHeader>
        <CardContent>
          {selectedPage ? (
            <div className="space-y-4">
              {selectedPage.meta_description && (
                <div className="p-3 rounded bg-muted/50 text-sm">
                  <span className="font-medium text-xs">Meta Description:</span>
                  <p className="text-muted-foreground mt-1">{selectedPage.meta_description}</p>
                </div>
              )}
              <div className="border rounded-lg p-4 max-h-[500px] overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(selectedPage.html_content, { ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'span', 'div', 'img', 'section', 'header', 'footer', 'nav', 'article'], ALLOWED_ATTR: ['href', 'class', 'id', 'src', 'alt', 'title'], ALLOW_DATA_ATTR: false }) }} />
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-20">Select a page to preview</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneratedPagesTab;

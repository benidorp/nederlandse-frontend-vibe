import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";

const AfEN = () => {
  const downloadTextFile = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const sampleDocument = `AFFILIATE DISCLOSURE

Effective Date: [Insert Date]

Welcome to [AffiliateWebsiteName].com. We are committed to full transparency regarding our affiliate relationships.

This Affiliate Disclosure explains how we earn commissions through affiliate partnerships.

Some links on this Website are affiliate links. When you click these links and make a purchase, we may earn a small commission at no additional cost to you.

Contact: [Insert Contact Email]`;

  return (
    <div className="min-h-screen bg-background">
      <HeaderEN />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Legal Documents</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          Download essential legal documents for your affiliate website. Each document is available as a downloadable .txt file.
        </p>

        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Affiliate Disclosure</h2>
            <Button
              onClick={() => downloadTextFile("affiliate-disclosure-en.txt", sampleDocument)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {sampleDocument}
          </p>
        </section>
      </main>
      
      <FooterEN />
    </div>
  );
};

export default AfEN;

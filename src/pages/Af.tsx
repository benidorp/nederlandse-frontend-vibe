import React from "react";
import { Helmet } from "react-helmet";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import jsPDF from "jspdf";
import type { AfTranslations } from "@/data/af-translations/types";
import enTranslations from "@/data/af-translations/en";

export interface AfLegalProps {
  lang?: string;
  canonicalPath?: string;
  pageTitle?: string;
  pageDescription?: string;
  translations?: AfTranslations;
}

export const AfContent = ({
  lang = "en",
  canonicalPath = "/af",
  pageTitle,
  pageDescription,
  translations,
}: AfLegalProps) => {
  const t = translations || enTranslations;
  const title = pageTitle || t.pageTitle;
  const description = pageDescription || t.pageDescription;

  const downloadTextFile = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadPDF = (pdfTitle: string, content: string) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxLineWidth = pageWidth - margin * 2;

    const cleanContent = content
      .replace(/\[Insert Date\]/g, "")
      .replace(/\[WebsiteName\]/g, "Your Website")
      .replace(/\[Insert Jurisdiction\]/g, "")
      .replace(/\[Insert Location\]/g, "")
      .replace(/\[Insert Contact Email\]/g, "")
      .replace(/\[Insert Business Address\]/g, "");

    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text(pdfTitle, margin, margin);

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");
    const lines = doc.splitTextToSize(cleanContent, maxLineWidth);

    let y = margin + 10;
    lines.forEach((line: string) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 4;
    });

    doc.save(`${pdfTitle.replace(/\s+/g, "-")}.pdf`);
  };

  const sections = [
    { key: "disclosure" as const, style: "default" },
    { key: "termsAndConditions" as const, style: "default" },
    { key: "disclaimer" as const, style: "default" },
    { key: "cookiePolicy" as const, style: "default" },
    { key: "privacyPolicy" as const, style: "default" },
    { key: "affiliateDisclaimerVariations" as const, style: "default" },
    { key: "photographyTerms" as const, style: "default" },
    { key: "implementationGuide" as const, style: "highlight" },
  ];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="noindex, nofollow" />
        <html lang={lang} />
        <link rel="canonical" href={`https://www.iaee.eu${canonicalPath}`} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeaderEN />

        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">{t.legalDocumentsHeading}</h1>
          <p className="text-lg mb-12 text-muted-foreground">{t.downloadDescription}</p>

          {sections.map(({ key, style }) => (
            <section
              key={key}
              className={
                style === "highlight"
                  ? "mb-12 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 shadow-sm"
                  : "mb-12 p-6 bg-card rounded-lg border border-border shadow-sm"
              }
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-foreground">{t.sectionTitles[key]}</h2>
                <div className="flex gap-2">
                  <Button
                    onClick={() => downloadTextFile(`${t.fileNames[key]}.txt`, t[key])}
                    variant="outline"
                    size="sm"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    .TXT
                  </Button>
                  <Button
                    onClick={() => downloadPDF(t.sectionTitles[key], t[key])}
                    variant="default"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>
              {key === "implementationGuide" ? (
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">{t[key]}</div>
              ) : (
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{t[key]}</p>
              )}
            </section>
          ))}
        </main>

        <FooterEN />
      </div>
    </>
  );
};

const Af = () => <AfContent />;
export default Af;

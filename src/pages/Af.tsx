import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AfLanguageSwitcher from "@/components/af/AfLanguageSwitcher";
import GTranslateWidget from "@/components/GTranslateWidget";
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

  const [activeLang, setActiveLang] = useState("en");

  const handleLanguageChange = useCallback((langCode: string) => {
    setActiveLang(langCode);

    // Trigger GTranslate language switch
    if (langCode === "en") {
      // Reset to original
      const restore = (window as any).doGTranslate;
      if (restore) {
        restore("en|en");
      } else {
        // Fallback: remove googtrans cookie and reload
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + window.location.hostname;
      }
    } else {
      const doTranslate = (window as any).doGTranslate;
      if (doTranslate) {
        doTranslate(`en|${langCode}`);
      }
    }
  }, []);

  // Extract translated text from a DOM section for downloads
  const getTranslatedSectionText = (sectionIndex: number): string => {
    const sections = document.querySelectorAll("[data-af-section]");
    if (sections[sectionIndex]) {
      const contentEl = sections[sectionIndex].querySelector("[data-af-content]");
      if (contentEl) {
        return contentEl.textContent || "";
      }
    }
    return "";
  };

  const getTranslatedSectionTitle = (sectionIndex: number): string => {
    const sections = document.querySelectorAll("[data-af-section]");
    if (sections[sectionIndex]) {
      const titleEl = sections[sectionIndex].querySelector("[data-af-title]");
      if (titleEl) {
        return titleEl.textContent || "";
      }
    }
    return "";
  };

  const downloadTextFile = (sectionIndex: number, fallbackFilename: string) => {
    const content = getTranslatedSectionText(sectionIndex);
    const title = getTranslatedSectionTitle(sectionIndex);
    const filename = title ? title.replace(/[^a-zA-Z0-9\s\u00C0-\u024F\u0400-\u04FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF\uAC00-\uD7AF]/g, "").replace(/\s+/g, "-").substring(0, 60) : fallbackFilename;
    
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const downloadPDF = (sectionIndex: number, fallbackTitle: string) => {
    const content = getTranslatedSectionText(sectionIndex);
    const pdfTitle = getTranslatedSectionTitle(sectionIndex) || fallbackTitle;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxLineWidth = pageWidth - margin * 2;

    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text(pdfTitle, margin, margin);

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");
    const lines = doc.splitTextToSize(content, maxLineWidth);

    let y = margin + 10;
    lines.forEach((line: string) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 4;
    });

    doc.save(`${pdfTitle.replace(/\s+/g, "-").substring(0, 60)}.pdf`);
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

  // Helper to render content as discrete <p> tags so GTranslate preserves formatting
  const renderFormattedContent = (text: string) => {
    const paragraphs = text.split(/\n\n+/);
    return paragraphs.map((paragraph, i) => {
      const lines = paragraph.split(/\n/);
      return (
        <p key={i} className="mb-3 text-muted-foreground leading-relaxed">
          {lines.map((line, j) => (
            <React.Fragment key={j}>
              {line}
              {j < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    });
  };

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
        <AfLanguageSwitcher activeLang={activeLang} onLanguageChange={handleLanguageChange} />
        <div className="gtranslate_wrapper" style={{ display: "none" }}></div>
        <GTranslateWidget defaultLanguage="en" inline={true} />

        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">{t.legalDocumentsHeading}</h1>
          <p className="text-lg mb-12 text-muted-foreground">{t.downloadDescription}</p>

          {sections.map(({ key, style }, index) => (
            <section
              key={key}
              data-af-section={key}
              className={
                style === "highlight"
                  ? "mb-12 p-6 bg-primary/5 rounded-lg border-2 border-primary/20 shadow-sm"
                  : "mb-12 p-6 bg-card rounded-lg border border-border shadow-sm"
              }
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-foreground" data-af-title>{t.sectionTitles[key]}</h2>
                <div className="flex gap-2">
                  <Button
                    onClick={() => downloadTextFile(index, t.fileNames[key])}
                    variant="outline"
                    size="sm"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    .TXT
                  </Button>
                  <Button
                    onClick={() => downloadPDF(index, t.sectionTitles[key])}
                    variant="default"
                    size="sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                </div>
              </div>
              <div data-af-content>
                {renderFormattedContent(t[key])}
              </div>
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

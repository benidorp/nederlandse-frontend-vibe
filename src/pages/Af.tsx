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

    // Try doGTranslate first (float widget), then fallback to select element (dropdown widget)
    const doTranslate = (window as any).doGTranslate;
    if (doTranslate) {
      doTranslate(`en|${langCode}`);
      return;
    }

    // Fallback: programmatically change the GTranslate dropdown select
    const select = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement;
    if (select) {
      const targetCode = langCode === "zh-CN" ? "zh" : langCode;
      select.value = targetCode;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, []);

  // Strip emoji/icon characters from text
  const stripEmojis = (text: string): string => {
    return text.replace(/[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}]/gu, '').replace(/\s{2,}/g, ' ').trim();
  };

  // Extract translated text from a DOM section for downloads
  const getTranslatedSectionText = (sectionIndex: number): string => {
    const sections = document.querySelectorAll("[data-af-section]");
    if (sections[sectionIndex]) {
      const contentEl = sections[sectionIndex].querySelector("[data-af-content]");
      if (contentEl) {
        // Preserve paragraph structure by extracting text from each <p> with double newlines between them
        const paragraphs = contentEl.querySelectorAll("p");
        if (paragraphs.length > 0) {
          return Array.from(paragraphs)
            .map((p) => {
              // Preserve <br> as single newlines within paragraphs
              const clone = p.cloneNode(true) as HTMLElement;
              clone.querySelectorAll('br').forEach(br => {
                const textNode = document.createTextNode('\n');
                br.parentNode?.replaceChild(textNode, br);
              });
              return stripEmojis((clone as HTMLElement).innerText);
            })
            .join("\n\n");
        } else {
          return stripEmojis((contentEl as HTMLElement).innerText);
        }
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

  // Scroll all af-sections into view so GTranslate translates everything, then run callback
  const ensureAllTranslated = (callback: () => void) => {
    const sections = document.querySelectorAll("[data-af-section]");
    if (sections.length === 0) { callback(); return; }

    const originalScroll = window.scrollY;

    // Do two full passes to ensure GTranslate catches everything
    const doPass = (passNum: number, onDone: () => void) => {
      let i = 0;
      const scrollNext = () => {
        if (i < sections.length) {
          sections[i].scrollIntoView({ behavior: "instant" as ScrollBehavior });
          i++;
          // Longer delay per section so GTranslate has time to translate
          setTimeout(scrollNext, 350);
        } else {
          onDone();
        }
      };
      // Scroll to top first
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      setTimeout(scrollNext, 200);
    };

    // First pass, then second pass, then wait and execute
    doPass(1, () => {
      doPass(2, () => {
        setTimeout(() => {
          window.scrollTo({ top: originalScroll, behavior: "instant" as ScrollBehavior });
          callback();
        }, 1500);
      });
    });
  };

  const downloadTextFile = (sectionIndex: number, fallbackFilename: string) => {
    ensureAllTranslated(() => {
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
    });
  };

  const downloadPDF = (sectionIndex: number, fallbackTitle: string) => {
    ensureAllTranslated(() => {
      const content = getTranslatedSectionText(sectionIndex);
      const pdfTitle = getTranslatedSectionTitle(sectionIndex) || fallbackTitle;

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxLineWidth = pageWidth - margin * 2;
    const lineHeight = 5;
    const paragraphSpacing = 8;

    doc.setFontSize(16);
    doc.setFont(undefined, "bold");
    doc.text(pdfTitle, margin, margin);

    doc.setFontSize(9);
    doc.setFont(undefined, "normal");

    // Split content into paragraphs (double newlines), then wrap each paragraph
    const paragraphs = content.split(/\n\n+/);
    let y = margin + 12;

    paragraphs.forEach((paragraph, pIndex) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return;

      // Handle single newlines within a paragraph as line breaks
      const subLines = trimmed.split(/\n/);
      subLines.forEach((subLine) => {
        const wrappedLines = doc.splitTextToSize(subLine, maxLineWidth);
        wrappedLines.forEach((line: string) => {
          if (y > pageHeight - margin) {
            doc.addPage();
            y = margin;
          }
          doc.text(line, margin, y);
          y += lineHeight;
        });
      });

      // Add extra spacing between paragraphs
      if (pIndex < paragraphs.length - 1) {
        y += paragraphSpacing;
      }
    });

    doc.save(`${pdfTitle.replace(/\s+/g, "-").substring(0, 60)}.pdf`);
    });
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
              {stripEmojis(line)}
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

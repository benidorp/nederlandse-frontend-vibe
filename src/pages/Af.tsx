import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Download, FileText, Loader2 } from "lucide-react";
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
  const [preparingDownload, setPreparingDownload] = useState<string | null>(null);
  const [translationReady, setTranslationReady] = useState(true);
  const [countdown, setCountdown] = useState(0);

  const TRANSLATION_WAIT_SECONDS = 20;

  // Slow auto-scroll through all sections over ~18 seconds to force GTranslate to translate everything
  const autoScrollAllSections = useCallback(async () => {
    const allSections = document.querySelectorAll("[data-af-section]");
    if (allSections.length === 0) return;

    const totalScrollTime = 18000; // 18 seconds for scrolling (2s initial wait already passed)
    const delayPerSection = Math.floor(totalScrollTime / (allSections.length + 2)); // +2 for top/bottom

    // Scroll to each section slowly to let GTranslate translate visible text
    for (let i = 0; i < allSections.length; i++) {
      allSections[i].scrollIntoView({ behavior: "smooth" as ScrollBehavior, block: "start" });
      await new Promise((r) => setTimeout(r, delayPerSection));
    }

    // Scroll to the very bottom to catch any remaining content
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" as ScrollBehavior });
    await new Promise((r) => setTimeout(r, delayPerSection));

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: "smooth" as ScrollBehavior });
    await new Promise((r) => setTimeout(r, delayPerSection));
  }, []);

  const handleLanguageChange = useCallback((langCode: string) => {
    setActiveLang(langCode);

    if (langCode !== "en") {
      setTranslationReady(false);
      setCountdown(TRANSLATION_WAIT_SECONDS);

      // Trigger GTranslate
      const doTranslate = (window as any).doGTranslate;
      if (doTranslate) {
        doTranslate(`en|${langCode}`);
      } else {
        const select = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement;
        if (select) {
          const targetCode = langCode === "zh-CN" ? "zh" : langCode;
          select.value = targetCode;
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }

      // Wait a moment for GTranslate to start, then auto-scroll all sections
      setTimeout(() => {
        autoScrollAllSections();
      }, 2000);
    } else {
      setTranslationReady(true);
      setCountdown(0);

      const doTranslate = (window as any).doGTranslate;
      if (doTranslate) {
        doTranslate(`en|en`);
      } else {
        const select = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement;
        if (select) {
          select.value = "en";
          select.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    }
  }, [autoScrollAllSections]);

  // Countdown timer for translation readiness
  useEffect(() => {
    if (countdown <= 0) {
      if (!translationReady && activeLang !== "en") {
        setTranslationReady(true);
      }
      return;
    }
    const timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, translationReady, activeLang]);

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

  const downloadTextFile = (sectionIndex: number, fallbackFilename: string, sectionKey: string) => {
    setPreparingDownload(`${sectionKey}-txt`);
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
    setPreparingDownload(null);
  };

  const downloadPDF = (sectionIndex: number, fallbackTitle: string, sectionKey: string) => {
    setPreparingDownload(`${sectionKey}-pdf`);
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

    const paragraphs = content.split(/\n\n+/);
    let y = margin + 12;

    paragraphs.forEach((paragraph, pIndex) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return;

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

      if (pIndex < paragraphs.length - 1) {
        y += paragraphSpacing;
      }
    });

    doc.save(`${pdfTitle.replace(/\s+/g, "-").substring(0, 60)}.pdf`);
    setPreparingDownload(null);
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
          <p className="text-lg mb-6 text-muted-foreground">{t.downloadDescription}</p>

          {!translationReady && (
            <div className="mb-12 p-5 bg-primary/5 border-2 border-primary/20 rounded-xl flex items-center gap-4 shadow-md">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 shrink-0">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-foreground font-semibold text-base">
                  ⏳ Downloads worden voorbereid...
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  De pagina wordt vertaald. Downloads zijn beschikbaar over{" "}
                  <span className="font-bold text-primary text-lg">{countdown}</span> seconden.
                </p>
              </div>
            </div>
          )}

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
                    onClick={() => downloadTextFile(index, t.fileNames[key], key)}
                    variant="outline"
                    size="sm"
                    disabled={preparingDownload !== null || !translationReady}
                  >
                    {preparingDownload === `${key}-txt` ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <FileText className="w-4 h-4 mr-2" />
                    )}
                    .TXT
                  </Button>
                  <Button
                    onClick={() => downloadPDF(index, t.sectionTitles[key], key)}
                    variant="default"
                    size="sm"
                    disabled={preparingDownload !== null || !translationReady}
                  >
                    {preparingDownload === `${key}-pdf` ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4 mr-2" />
                    )}
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

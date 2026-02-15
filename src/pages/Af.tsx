import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet";
import { Download, FileText, Loader2, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import AfLanguageSwitcher from "@/components/af/AfLanguageSwitcher";

import AfFloatingNav from "@/components/af/AfFloatingNav";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "sonner";
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
    toast.success("✅ TXT-bestand is succesvol gedownload!");
  };

  const downloadPDF = async (sectionIndex: number, fallbackTitle: string, sectionKey: string) => {
    setPreparingDownload(`${sectionKey}-pdf`);
    const pdfTitle = getTranslatedSectionTitle(sectionIndex) || fallbackTitle;

    try {
      const sections = document.querySelectorAll("[data-af-section]");
      const sectionEl = sections[sectionIndex] as HTMLElement;
      if (!sectionEl) {
        setPreparingDownload(null);
        toast.error("Sectie niet gevonden.");
        return;
      }

      const contentEl = sectionEl.querySelector("[data-af-content]") as HTMLElement;
      if (!contentEl) {
        setPreparingDownload(null);
        toast.error("Inhoud niet gevonden.");
        return;
      }

      // Create a temporary container for clean PDF rendering
      const tempContainer = document.createElement("div");
      tempContainer.style.cssText = "position:absolute;left:-9999px;top:0;width:800px;padding:40px;background:#fff;color:#000;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;";
      
      // Add title
      const titleEl = document.createElement("h1");
      titleEl.style.cssText = "font-size:22px;font-weight:bold;margin-bottom:20px;color:#000;";
      titleEl.textContent = pdfTitle;
      tempContainer.appendChild(titleEl);

      // Clone content
      const contentClone = contentEl.cloneNode(true) as HTMLElement;
      contentClone.style.cssText = "color:#000;font-size:14px;line-height:1.6;";
      // Style all paragraphs
      contentClone.querySelectorAll("p").forEach((p) => {
        (p as HTMLElement).style.cssText = "margin-bottom:10px;color:#000;font-size:14px;line-height:1.6;";
      });
      tempContainer.appendChild(contentClone);
      document.body.appendChild(tempContainer);

      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
        width: 800,
      });

      document.body.removeChild(tempContainer);

      const A4_WIDTH_MM = 210;
      const A4_HEIGHT_MM = 297;
      const MARGIN_MM = 15;
      const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_MM * 2;

      const imgWidth = CONTENT_WIDTH_MM;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const imgData = canvas.toDataURL("image/png");

      let yPosition = MARGIN_MM;
      let remainingHeight = imgHeight;
      const pageContentHeight = A4_HEIGHT_MM - MARGIN_MM * 2;

      // First page
      pdf.addImage(imgData, "PNG", MARGIN_MM, yPosition, imgWidth, imgHeight);

      // Add pages if content overflows
      while (remainingHeight > pageContentHeight) {
        remainingHeight -= pageContentHeight;
        pdf.addPage();
        // Offset the image upward to show the next portion
        const offset = -(imgHeight - remainingHeight - MARGIN_MM);
        pdf.addImage(imgData, "PNG", MARGIN_MM, offset, imgWidth, imgHeight);
      }

      pdf.save(`${pdfTitle.replace(/[^a-zA-Z0-9\s\u00C0-\u024F\u0400-\u04FF\u4E00-\u9FFF]/g, "").replace(/\s+/g, "-").substring(0, 60)}.pdf`);
      toast.success("✅ PDF-bestand is succesvol gedownload!");
    } catch (err) {
      console.error("PDF generation error:", err);
      toast.error("Er is een fout opgetreden bij het genereren van de PDF.");
    }
    setPreparingDownload(null);
  };

  const downloadAllTxt = () => {
    setPreparingDownload("all-txt");
    const allContent = sections.map((_, index) => {
      const title = getTranslatedSectionTitle(index);
      const content = getTranslatedSectionText(index);
      return `${"=".repeat(60)}\n${title}\n${"=".repeat(60)}\n\n${content}`;
    }).join("\n\n\n");

    const element = document.createElement("a");
    const file = new Blob([allContent], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "All-Legal-Documents.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setPreparingDownload(null);
    toast.success("✅ Alle documenten als TXT gedownload!");
  };

  const downloadAllPdf = async () => {
    setPreparingDownload("all-pdf");
    try {
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const A4_WIDTH_MM = 210;
      const A4_HEIGHT_MM = 297;
      const MARGIN_MM = 15;
      const CONTENT_WIDTH_MM = A4_WIDTH_MM - MARGIN_MM * 2;
      const pageContentHeight = A4_HEIGHT_MM - MARGIN_MM * 2;

      const allSections = document.querySelectorAll("[data-af-section]");

      for (let i = 0; i < allSections.length; i++) {
        if (i > 0) pdf.addPage();

        const sectionEl = allSections[i] as HTMLElement;
        const contentEl = sectionEl.querySelector("[data-af-content]") as HTMLElement;
        const titleText = getTranslatedSectionTitle(i);
        if (!contentEl) continue;

        const tempContainer = document.createElement("div");
        tempContainer.style.cssText = "position:absolute;left:-9999px;top:0;width:800px;padding:40px;background:#fff;color:#000;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;";

        const titleEl = document.createElement("h1");
        titleEl.style.cssText = "font-size:22px;font-weight:bold;margin-bottom:20px;color:#000;";
        titleEl.textContent = titleText;
        tempContainer.appendChild(titleEl);

        const contentClone = contentEl.cloneNode(true) as HTMLElement;
        contentClone.style.cssText = "color:#000;font-size:14px;line-height:1.6;";
        contentClone.querySelectorAll("p").forEach((p) => {
          (p as HTMLElement).style.cssText = "margin-bottom:10px;color:#000;font-size:14px;line-height:1.6;";
        });
        tempContainer.appendChild(contentClone);
        document.body.appendChild(tempContainer);

        const canvas = await html2canvas(tempContainer, { scale: 2, useCORS: true, backgroundColor: "#ffffff", width: 800 });
        document.body.removeChild(tempContainer);

        const imgWidth = CONTENT_WIDTH_MM;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL("image/png");

        let yPosition = MARGIN_MM;
        let remainingHeight = imgHeight;

        pdf.addImage(imgData, "PNG", MARGIN_MM, yPosition, imgWidth, imgHeight);
        while (remainingHeight > pageContentHeight) {
          remainingHeight -= pageContentHeight;
          pdf.addPage();
          const offset = -(imgHeight - remainingHeight - MARGIN_MM);
          pdf.addImage(imgData, "PNG", MARGIN_MM, offset, imgWidth, imgHeight);
        }
      }

      pdf.save("All-Legal-Documents.pdf");
      toast.success("✅ Alle documenten als PDF gedownload!");
    } catch (err) {
      console.error("PDF generation error:", err);
      toast.error("Er is een fout opgetreden bij het genereren van de PDF.");
    }
    setPreparingDownload(null);
  };

  // Dutch display overrides for section titles (prevents GTranslate from mistranslating)
  const dutchTitleOverrides: Record<string, string> = {
    disclosure: "Gebruikersvoorwaarden",
    disclaimer: "Disclaimer",
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
        

        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-foreground">{t.legalDocumentsHeading}</h1>
          
          {/* Document count badge */}
          <div className="flex items-center gap-3 mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <FileCheck className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="text-base font-bold text-foreground">
                📑 Deze pagina bevat <span className="text-primary">{sections.length} juridische documenten</span> — allemaal downloadbaar als PDF of TXT.
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                Gebruik de zwevende knop rechts om snel te navigeren en per stuk te downloaden.
              </p>
            </div>
          </div>

          <p className="text-lg mb-6 text-muted-foreground">{t.downloadDescription}</p>

          {/* Download All Section */}
          <div className="mb-12 p-6 bg-primary/10 border-2 border-primary/30 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-foreground mb-2">📦 Download alle documenten in één keer</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Klik op een van de knoppen hieronder om alle 8 juridische documenten tegelijk te downloaden als één gecombineerd bestand. 
              U kunt ook elk document apart downloaden via de knoppen bij elke sectie hieronder.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => downloadAllTxt()}
                variant="outline"
                size="default"
                disabled={preparingDownload !== null || !translationReady}
              >
                <Loader2 className={`w-4 h-4 mr-2 animate-spin ${preparingDownload === "all-txt" ? '' : 'hidden'}`} />
                <FileText className={`w-4 h-4 mr-2 ${preparingDownload === "all-txt" ? 'hidden' : ''}`} />
                Alle documenten als .TXT
              </Button>
              <Button
                onClick={() => downloadAllPdf()}
                variant="default"
                size="default"
                disabled={preparingDownload !== null || !translationReady}
              >
                <Loader2 className={`w-4 h-4 mr-2 animate-spin ${preparingDownload === "all-pdf" ? '' : 'hidden'}`} />
                <Download className={`w-4 h-4 mr-2 ${preparingDownload === "all-pdf" ? 'hidden' : ''}`} />
                Alle documenten als PDF
              </Button>
            </div>
          </div>

          <div className={`fixed top-0 left-0 right-0 z-[9999] bg-primary text-primary-foreground shadow-lg transition-transform duration-300 ${translationReady ? '-translate-y-full' : 'translate-y-0'}`}>
              <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4">
                <Loader2 className="w-6 h-6 animate-spin shrink-0" />
                <div className="text-center">
                  <p className="font-bold text-base">
                    ⏳ Even geduld — de pagina wordt vertaald en downloads worden voorbereid...
                  </p>
                  <p className="text-sm opacity-90 mt-0.5">
                    De pagina scrollt automatisch om alle tekst te vertalen. Downloads zijn beschikbaar over{" "}
                    <span className="font-black text-lg">{countdown}</span> seconden.
                  </p>
                </div>
              </div>
              <div className="h-1 bg-primary-foreground/20">
                <div
                  className="h-full bg-primary-foreground/80 transition-all duration-1000 ease-linear"
                  style={{ width: `${((TRANSLATION_WAIT_SECONDS - countdown) / TRANSLATION_WAIT_SECONDS) * 100}%` }}
                />
              </div>
            </div>

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
                <h2 className="text-2xl font-bold text-foreground" data-af-title>
                  {dutchTitleOverrides[key] ? (
                    <span className="notranslate">{dutchTitleOverrides[key]}</span>
                  ) : (
                    t.sectionTitles[key]
                  )}
                </h2>
                <div className="flex gap-2">
                  <Button
                    onClick={() => downloadTextFile(index, t.fileNames[key], key)}
                    variant="outline"
                    size="sm"
                    disabled={preparingDownload !== null || !translationReady}
                  >
                    <Loader2 className={`w-4 h-4 mr-2 animate-spin ${preparingDownload === `${key}-txt` ? '' : 'hidden'}`} />
                    <FileText className={`w-4 h-4 mr-2 ${preparingDownload === `${key}-txt` ? 'hidden' : ''}`} />
                    .TXT
                  </Button>
                  <Button
                    onClick={() => downloadPDF(index, t.sectionTitles[key], key)}
                    variant="default"
                    size="sm"
                    disabled={preparingDownload !== null || !translationReady}
                  >
                    <Loader2 className={`w-4 h-4 mr-2 animate-spin ${preparingDownload === `${key}-pdf` ? '' : 'hidden'}`} />
                    <Download className={`w-4 h-4 mr-2 ${preparingDownload === `${key}-pdf` ? 'hidden' : ''}`} />
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

        <AfFloatingNav
          sectionKeys={sections.map(s => s.key)}
          sectionTitles={t.sectionTitles}
          onDownloadTxt={(index) => downloadTextFile(index, t.fileNames[sections[index].key], sections[index].key)}
          onDownloadPdf={(index) => downloadPDF(index, t.sectionTitles[sections[index].key], sections[index].key)}
          disabled={preparingDownload !== null || !translationReady}
        />

        <FooterEN />
        
      </div>
    </>
  );
};

const Af = () => <AfContent />;
export default Af;

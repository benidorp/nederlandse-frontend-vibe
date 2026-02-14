import React, { useState } from "react";
import { ChevronRight, ChevronLeft, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AfFloatingNavProps {
  sectionKeys: string[];
  sectionTitles: Record<string, string>;
  onDownloadTxt: (index: number) => void;
  onDownloadPdf: (index: number) => void;
  disabled: boolean;
}

const sectionIcons: Record<string, string> = {
  disclosure: "📋",
  termsAndConditions: "📜",
  disclaimer: "⚠️",
  cookiePolicy: "🍪",
  privacyPolicy: "🔒",
  affiliateDisclaimerVariations: "🤝",
  photographyTerms: "📸",
  implementationGuide: "🛠️",
};

const AfFloatingNav: React.FC<AfFloatingNavProps> = ({
  sectionKeys,
  sectionTitles,
  onDownloadTxt,
  onDownloadPdf,
  disabled,
}) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (key: string) => {
    const el = document.querySelector(`[data-af-section="${key}"]`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] flex items-stretch">
      {/* Panel */}
      <div
        className={`bg-card border border-border shadow-2xl rounded-l-xl transition-all duration-300 overflow-hidden ${
          open ? "w-72 opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className="p-4 h-full max-h-[80vh] overflow-y-auto">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">
            📑 {sectionKeys.length} Documenten
          </p>
          <div className="space-y-1.5">
            {sectionKeys.map((key, index) => (
              <div
                key={key}
                className="group rounded-lg border border-border/50 hover:border-primary/40 bg-background hover:bg-primary/5 transition-colors"
              >
                <button
                  onClick={() => scrollToSection(key)}
                  className="w-full text-left px-3 py-2 text-sm font-medium text-foreground flex items-center gap-2"
                >
                  <span className="text-base">{sectionIcons[key] || "📄"}</span>
                  <span className="truncate flex-1">{sectionTitles[key]}</span>
                </button>
                <div className="flex gap-1 px-3 pb-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs px-2"
                    disabled={disabled}
                    onClick={() => onDownloadTxt(index)}
                  >
                    <FileText className="w-3 h-3 mr-1" />
                    TXT
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 text-xs px-2"
                    disabled={disabled}
                    onClick={() => onDownloadPdf(index)}
                  >
                    <Download className="w-3 h-3 mr-1" />
                    PDF
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle tab */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary text-primary-foreground px-1.5 py-6 rounded-l-lg shadow-lg hover:bg-primary/90 transition-colors flex flex-col items-center justify-center gap-1 self-center"
        aria-label="Toggle document navigation"
      >
        {open ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        <span className="text-[10px] font-bold writing-vertical [writing-mode:vertical-rl] rotate-180">
          📑 {sectionKeys.length} DOCS
        </span>
      </button>
    </div>
  );
};

export default AfFloatingNav;

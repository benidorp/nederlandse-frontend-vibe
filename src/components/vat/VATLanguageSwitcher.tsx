// VAT Calculator Language Switcher with Flags

interface LanguageOption {
  code: string;
  name: string;
  path: string;
}

const languages: LanguageOption[] = [
  { code: "nl", name: "Nederlands", path: "/btw-calculator-wereldwijd" },
  { code: "en", name: "English", path: "/vat-calculator-worldwide" },
  { code: "de", name: "Deutsch", path: "/mwst-rechner-weltweit" },
  { code: "fr", name: "Français", path: "/calculateur-tva-mondial" },
  { code: "es", name: "Español", path: "/calculadora-iva-mundial" },
  { code: "it", name: "Italiano", path: "/calcolatore-iva-mondiale" },
  { code: "pl", name: "Polski", path: "/kalkulator-vat-swiatowy" },
];

// SVG Flag components
const FlagNL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#AE1C28"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#21468B"/>
  </svg>
);

const FlagGB = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect fill="#012169" width="32" height="24"/>
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#FFFFFF" strokeWidth="4"/>
    <path d="M0,0 L32,24 M32,0 L0,24" stroke="#C8102E" strokeWidth="2"/>
    <path d="M16,0 V24 M0,12 H32" stroke="#FFFFFF" strokeWidth="6"/>
    <path d="M16,0 V24 M0,12 H32" stroke="#C8102E" strokeWidth="4"/>
  </svg>
);

const FlagDE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#000000"/>
    <rect y="8" width="32" height="8" fill="#DD0000"/>
    <rect y="16" width="32" height="8" fill="#FFCC00"/>
  </svg>
);

const FlagFR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#002395"/>
    <rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/>
    <rect x="21.33" width="10.67" height="24" fill="#ED2939"/>
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#AA151B"/>
    <rect y="6" width="32" height="12" fill="#F1BF00"/>
  </svg>
);

const FlagIT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#009246"/>
    <rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/>
    <rect x="21.33" width="10.67" height="24" fill="#CE2B37"/>
  </svg>
);

const FlagPL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/>
    <rect y="12" width="32" height="12" fill="#DC143C"/>
  </svg>
);

const flagComponents: Record<string, React.FC> = {
  nl: FlagNL,
  en: FlagGB,
  de: FlagDE,
  fr: FlagFR,
  es: FlagES,
  it: FlagIT,
  pl: FlagPL,
};

interface VATLanguageSwitcherProps {
  currentLanguage: string;
}

const VATLanguageSwitcher = ({ currentLanguage }: VATLanguageSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
      <span className="text-muted-foreground text-xs font-medium mr-1 hidden sm:inline">Select language:</span>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
        {languages.map((lang) => {
          const FlagComponent = flagComponents[lang.code];
          const isActive = currentLanguage === lang.code;
          
          return (
            <a
              key={lang.code}
              href={lang.path}
              className={`
                relative w-6 h-5 sm:w-7 sm:h-5 rounded-sm overflow-hidden border transition-all duration-200 
                hover:scale-110 hover:shadow-md bg-muted p-0.5
                ${isActive 
                  ? "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50" 
                  : "border-border opacity-85 hover:opacity-100 hover:border-primary/50"
                }
              `}
              title={lang.name}
            >
              <FlagComponent />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default VATLanguageSwitcher;

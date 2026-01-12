import { Link } from "react-router-dom";

interface LanguageOption {
  code: string;
  name: string;
  path: string;
}

const languages: LanguageOption[] = [
  { code: "nl", name: "Nederlands", path: "/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" },
  { code: "en", name: "English", path: "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" },
  { code: "de", name: "Deutsch", path: "/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" },
  { code: "fr", name: "Français", path: "/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" },
  { code: "es", name: "Español", path: "/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" },
  { code: "it", name: "Italiano", path: "/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" },
  { code: "pl", name: "Polski", path: "/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" },
  { code: "pt", name: "Português", path: "/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" },
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

const FlagPT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="12" height="24" fill="#006600"/>
    <rect x="12" width="20" height="24" fill="#FF0000"/>
    <circle cx="12" cy="12" r="5" fill="#FFCC00"/>
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
  pt: FlagPT,
};

interface LanguageSwitcherProps {
  currentLanguage: string;
}

const LanguageSwitcher = ({ currentLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 bg-gradient-to-b from-black via-slate-900 to-slate-800 border-b border-slate-700/50">
      <span className="text-slate-400 text-xs font-medium mr-1 hidden sm:inline">Select language:</span>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center">
        {languages.map((lang) => {
          const FlagComponent = flagComponents[lang.code];
          const isActive = currentLanguage === lang.code;
          
          return (
            <Link
              key={lang.code}
              to={lang.path}
              className={`
                relative w-6 h-5 sm:w-7 sm:h-5 rounded-sm overflow-hidden border transition-all duration-200 
                hover:scale-110 hover:shadow-md bg-slate-800 p-0.5
                ${isActive 
                  ? "border-amber-400 shadow-md shadow-amber-500/30 scale-105 ring-1 ring-amber-400/50" 
                  : "border-slate-600 opacity-85 hover:opacity-100 hover:border-slate-400"
                }
              `}
              title={lang.name}
            >
              <FlagComponent />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

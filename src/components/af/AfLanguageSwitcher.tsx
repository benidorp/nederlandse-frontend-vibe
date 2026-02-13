import React from "react";

const languages = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "sv", label: "Svenska" },
  { code: "pl", label: "Polski" },
  { code: "el", label: "Ελληνικά" },
  { code: "da", label: "Dansk" },
  { code: "no", label: "Norsk" },
  { code: "ro", label: "Română" },
  { code: "bg", label: "Български" },
  { code: "fi", label: "Suomi" },
  { code: "ru", label: "Русский" },
  { code: "zh-CN", label: "中文", flagCode: "zh" },
  { code: "hi", label: "हिन्दी" },
  { code: "ja", label: "日本語" },
  { code: "ar", label: "العربية" },
  { code: "ko", label: "한국어" },
  { code: "cs", label: "Čeština" },
  { code: "hu", label: "Magyar" },
  { code: "uk", label: "Українська" },
  { code: "sk", label: "Slovenčina" },
  { code: "hr", label: "Hrvatski" },
  { code: "sr", label: "Srpski" },
  { code: "sl", label: "Slovenščina" },
  { code: "nl", label: "Nederlands" },
  { code: "tr", label: "Türkçe" },
  { code: "th", label: "ไทย" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "id", label: "Bahasa Indonesia" },
];

// SVG Flag components
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
    <rect width="32" height="8" fill="#000000"/><rect y="8" width="32" height="8" fill="#DD0000"/><rect y="16" width="32" height="8" fill="#FFCC00"/>
  </svg>
);
const FlagFR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#002395"/><rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/><rect x="21.33" width="10.67" height="24" fill="#ED2939"/>
  </svg>
);
const FlagES = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#AA151B"/><rect y="6" width="32" height="12" fill="#F1BF00"/>
  </svg>
);
const FlagIT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#009246"/><rect x="10.67" width="10.67" height="24" fill="#FFFFFF"/><rect x="21.33" width="10.67" height="24" fill="#CE2B37"/>
  </svg>
);
const FlagPT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="12" height="24" fill="#006600"/><rect x="12" width="20" height="24" fill="#FF0000"/><circle cx="12" cy="12" r="5" fill="#FFCC00"/>
  </svg>
);
const FlagSE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#006AA7"/><rect x="9" width="4" height="24" fill="#FECC00"/><rect y="10" width="32" height="4" fill="#FECC00"/>
  </svg>
);
const FlagPL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/><rect y="12" width="32" height="12" fill="#DC143C"/>
  </svg>
);
const FlagGR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#0D5EAF"/>
    {[0,1,2,3,4,5,6,7,8].map(i => <rect key={i} y={i*2.67} width="32" height="2.67" fill={i%2===0?"#0D5EAF":"#FFFFFF"}/>)}
    <rect width="12" height="12" fill="#0D5EAF"/><rect x="4.5" y="0" width="3" height="12" fill="#FFFFFF"/><rect x="0" y="4.5" width="12" height="3" fill="#FFFFFF"/>
  </svg>
);
const FlagDK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#C60C30"/><rect x="9" width="4" height="24" fill="#FFFFFF"/><rect y="10" width="32" height="4" fill="#FFFFFF"/>
  </svg>
);
const FlagNO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#BA0C2F"/><rect x="8" width="6" height="24" fill="#FFFFFF"/><rect y="9" width="32" height="6" fill="#FFFFFF"/><rect x="9.5" width="3" height="24" fill="#00205B"/><rect y="10.5" width="32" height="3" fill="#00205B"/>
  </svg>
);
const FlagRO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#002B7F"/><rect x="10.67" width="10.67" height="24" fill="#FCD116"/><rect x="21.33" width="10.67" height="24" fill="#CE1126"/>
  </svg>
);
const FlagBG = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#00966E"/><rect y="16" width="32" height="8" fill="#D62612"/>
  </svg>
);
const FlagFI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><rect x="9" width="4" height="24" fill="#003580"/><rect y="10" width="32" height="4" fill="#003580"/>
  </svg>
);
const FlagRU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#0039A6"/><rect y="16" width="32" height="8" fill="#D52B1E"/>
  </svg>
);
const FlagZH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DE2910"/>
    <g fill="#FFDE00"><polygon points="6,4 7.2,7.8 3.2,5.6 8.8,5.6 4.8,7.8"/></g>
  </svg>
);
const FlagHI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF9933"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#138808"/><circle cx="16" cy="12" r="3" fill="#000080"/>
  </svg>
);
const FlagJA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><circle cx="16" cy="12" r="7" fill="#BC002D"/>
  </svg>
);
const FlagAR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE1126"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#000000"/><polygon points="0,0 12,12 0,24" fill="#007A3D"/>
  </svg>
);
const FlagKR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><circle cx="16" cy="12" r="6" fill="#CD2E3A"/><path d="M16,6 A6,6 0 0,1 16,18 A3,3 0 0,0 16,12 A3,3 0 0,1 16,6" fill="#0047A0"/>
  </svg>
);
const FlagCZ = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/><rect y="12" width="32" height="12" fill="#D7141A"/><polygon points="0,0 16,12 0,24" fill="#11457E"/>
  </svg>
);
const FlagHU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE2939"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#477050"/>
  </svg>
);
const FlagUA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#0057B7"/><rect y="12" width="32" height="12" fill="#FFD700"/>
  </svg>
);
const FlagSK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#0B4EA2"/><rect y="16" width="32" height="8" fill="#EE1C25"/>
  </svg>
);
const FlagHR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF0000"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#171796"/>
  </svg>
);
const FlagRS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#C6363C"/><rect y="8" width="32" height="8" fill="#0C4076"/><rect y="16" width="32" height="8" fill="#FFFFFF"/>
  </svg>
);
const FlagSI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#003DA5"/><rect y="16" width="32" height="8" fill="#ED1C24"/>
  </svg>
);
const FlagNL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#AE1C28"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#21468B"/>
  </svg>
);
const FlagTR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#E30A17"/><circle cx="13" cy="12" r="6" fill="#FFFFFF"/><circle cx="14.5" cy="12" r="5" fill="#E30A17"/><polygon points="18,12 20,13.5 19,11.5 21,10.5 18.8,10.5" fill="#FFFFFF"/>
  </svg>
);
const FlagTH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="4" fill="#ED1C24"/><rect y="4" width="32" height="4" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#241D4F"/><rect y="16" width="32" height="4" fill="#FFFFFF"/><rect y="20" width="32" height="4" fill="#ED1C24"/>
  </svg>
);
const FlagVN = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DA251D"/><polygon points="16,5 18,11 24,11 19,14.5 21,20.5 16,17 11,20.5 13,14.5 8,11 14,11" fill="#FFFF00"/>
  </svg>
);
const FlagID = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FF0000"/><rect y="12" width="32" height="12" fill="#FFFFFF"/>
  </svg>
);

const flagComponents: Record<string, React.FC> = {
  en: FlagGB, de: FlagDE, fr: FlagFR, es: FlagES, it: FlagIT, pt: FlagPT,
  sv: FlagSE, pl: FlagPL, el: FlagGR, da: FlagDK, no: FlagNO, ro: FlagRO,
  bg: FlagBG, fi: FlagFI, ru: FlagRU, "zh-CN": FlagZH, hi: FlagHI, ja: FlagJA,
  ar: FlagAR, ko: FlagKR, cs: FlagCZ, hu: FlagHU, uk: FlagUA, sk: FlagSK,
  hr: FlagHR, sr: FlagRS, sl: FlagSI, nl: FlagNL, tr: FlagTR, th: FlagTH,
  vi: FlagVN, id: FlagID,
};

interface AfLanguageSwitcherProps {
  activeLang: string;
  onLanguageChange: (langCode: string) => void;
}

const AfLanguageSwitcher = ({ activeLang, onLanguageChange }: AfLanguageSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
      <span className="text-muted-foreground text-xs font-medium mr-1 hidden sm:inline">Select language:</span>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center px-4">
        {languages.map(({ code, label }) => {
          const FlagComponent = flagComponents[code];
          const isActive = activeLang === code;

          return (
            <button
              key={code}
              onClick={() => onLanguageChange(code)}
              className={`
                relative w-7 h-5 sm:w-8 sm:h-6 rounded-sm overflow-hidden border transition-all duration-200 
                hover:scale-110 hover:shadow-md p-0.5 cursor-pointer
                ${isActive
                  ? "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50"
                  : "border-border opacity-85 hover:opacity-100 hover:border-muted-foreground"
                }
              `}
              title={label}
            >
              {FlagComponent && <FlagComponent />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AfLanguageSwitcher;

// Using native anchor tags for absolute URLs
import { Globe } from "lucide-react";

interface LanguageOption {
  code: string;
  name: string;
  path: string;
}

const languages: LanguageOption[] = [
  { code: "nl", name: "Nederlands", path: "https://www.iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" },
  { code: "en", name: "English", path: "https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" },
  { code: "de", name: "Deutsch", path: "https://www.iaee.eu/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" },
  { code: "fr", name: "Français", path: "https://www.iaee.eu/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" },
  { code: "es", name: "Español", path: "https://www.iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" },
  { code: "it", name: "Italiano", path: "https://www.iaee.eu/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" },
  { code: "pl", name: "Polski", path: "https://www.iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" },
  { code: "pt", name: "Português", path: "https://www.iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" },
  { code: "zh", name: "中文", path: "https://www.iaee.eu/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi" },
  { code: "ja", name: "日本語", path: "https://www.iaee.eu/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" },
  { code: "ar", name: "العربية", path: "https://www.iaee.eu/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" },
  { code: "tr", name: "Türkçe", path: "https://www.iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" },
  { code: "hi", name: "हिन्दी", path: "https://www.iaee.eu/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya" },
  { code: "sv", name: "Svenska", path: "https://www.iaee.eu/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde" },
  { code: "no", name: "Norsk", path: "https://www.iaee.eu/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi" },
  { code: "da", name: "Dansk", path: "https://www.iaee.eu/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi" },
  { code: "fi", name: "Suomi", path: "https://www.iaee.eu/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo" },
  { code: "cs", name: "Čeština", path: "https://www.iaee.eu/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota" },
  { code: "el", name: "Ελληνικά", path: "https://www.iaee.eu/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia" },
  { code: "ru", name: "Русский", path: "https://www.iaee.eu/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost" },
  { code: "ro", name: "Română", path: "https://www.iaee.eu/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo" },
  { code: "bg", name: "Български", path: "https://www.iaee.eu/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost" },
  { code: "uk", name: "Українська", path: "https://www.iaee.eu/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist" },
  { code: "hr", name: "Hrvatski", path: "https://www.iaee.eu/expireddomainnames/hr/kupite-premium-domene-visoki-autoritet-seo-vrijednost" },
  { code: "sk", name: "Slovenčina", path: "https://www.iaee.eu/expireddomainnames/sk/kupit-premium-domeny-vysoka-autorita-seo-hodnota" },
  { code: "sr", name: "Српски", path: "https://www.iaee.eu/expireddomainnames/sr/kupite-premium-domene-visoki-autoritet-seo-vrednost" },
  { code: "sl", name: "Slovenščina", path: "https://www.iaee.eu/expireddomainnames/sl/kupite-premium-domene-visoka-avtoriteta-seo-vrednost" },
  { code: "ko", name: "한국어", path: "https://www.iaee.eu/expireddomainnames/ko/peurimieom-domein-gumaehagi-nopun-gwonwi-seo-gachi" },
  { code: "hu", name: "Magyar", path: "https://www.iaee.eu/expireddomainnames/hu/premium-domain-vasarlas-magas-tekintely-seo-ertek" },
  { code: "th", name: "ไทย", path: "https://www.iaee.eu/expireddomainnames/th/sue-domain-premium-amnaj-sung-kha-seo" },
  { code: "vi", name: "Tiếng Việt", path: "https://www.iaee.eu/expireddomainnames/vi/mua-ten-mien-premium-uy-tin-cao-gia-tri-seo" },
  { code: "id", name: "Bahasa Indonesia", path: "https://www.iaee.eu/expireddomainnames/id/beli-domain-premium-otoritas-tinggi-nilai-seo" },
  { code: "et", name: "Eesti", path: "https://www.iaee.eu/expireddomainnames/et/osta-premium-domeenid-korge-autoriteet-seo-vaartus" },
  { code: "lv", name: "Latviešu", path: "https://www.iaee.eu/expireddomainnames/lv/pirkt-premium-domenu-augsta-autoritaate-seo-vertiba" },
  { code: "lt", name: "Lietuvių", path: "https://www.iaee.eu/expireddomainnames/lt/pirkti-premium-domenus-auksta-autoritetas-seo-verte" },
  { code: "is", name: "Íslenska", path: "https://www.iaee.eu/expireddomainnames/is/kaupa-premium-len-hatt-vald-seo-virdi" },
  { code: "sq", name: "Shqip", path: "https://www.iaee.eu/expireddomainnames/sq/blini-domain-premium-autoritet-larte-vlere-seo" },
  { code: "mk", name: "Македонски", path: "https://www.iaee.eu/expireddomainnames/mk/kupete-premium-domeni-visok-avtoritet-seo-vrednost" },
  { code: "bs", name: "Bosanski", path: "https://www.iaee.eu/expireddomainnames/bs/kupite-premium-domene-visoki-autoritet-seo-vrijednost" },
  { code: "lb", name: "Lëtzebuergesch", path: "https://www.iaee.eu/expireddomainnames/lb/kaaft-premium-domainen-hech-autoritaet-seo-wert" },
  { code: "bn", name: "বাংলা", path: "https://www.iaee.eu/expireddomainnames/bn/premium-domain-kinun-uccho-kartritwa-seo-mulya" },
  { code: "ms", name: "Bahasa Melayu", path: "https://www.iaee.eu/expireddomainnames/ms/beli-domain-premium-autoriti-tinggi-nilai-seo" },
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

const FlagZH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DE2910"/>
    <g fill="#FFDE00">
      <polygon points="6,4 7.2,7.8 3.2,5.6 8.8,5.6 4.8,7.8"/>
      <polygon points="11,2 11.4,3.2 10.2,2.4 11.8,2.4 10.6,3.2"/>
      <polygon points="13,4 13.4,5.2 12.2,4.4 13.8,4.4 12.6,5.2"/>
      <polygon points="13,7 13.4,8.2 12.2,7.4 13.8,7.4 12.6,8.2"/>
      <polygon points="11,9 11.4,10.2 10.2,9.4 11.8,9.4 10.6,10.2"/>
    </g>
  </svg>
);

const FlagJA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/>
    <circle cx="16" cy="12" r="7" fill="#BC002D"/>
  </svg>
);

const FlagAR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE1126"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#000000"/>
    <polygon points="0,0 12,12 0,24" fill="#007A3D"/>
  </svg>
);

const FlagTR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#E30A17"/>
    <circle cx="11" cy="12" r="6" fill="#FFFFFF"/>
    <circle cx="13" cy="12" r="4.8" fill="#E30A17"/>
    <polygon points="17,12 19.5,10.5 18,12 19.5,13.5" fill="#FFFFFF"/>
  </svg>
);

const FlagHI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF9933"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#138808"/>
    <circle cx="16" cy="12" r="3" fill="#000080"/>
  </svg>
);

// New flags for the 10 additional languages
const FlagSV = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#006AA7"/>
    <rect x="9" y="0" width="4" height="24" fill="#FECC00"/>
    <rect x="0" y="10" width="32" height="4" fill="#FECC00"/>
  </svg>
);

const FlagNO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#BA0C2F"/>
    <rect x="8" y="0" width="8" height="24" fill="#FFFFFF"/>
    <rect x="0" y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect x="10" y="0" width="4" height="24" fill="#00205B"/>
    <rect x="0" y="10" width="32" height="4" fill="#00205B"/>
  </svg>
);

const FlagDA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#C60C30"/>
    <rect x="9" y="0" width="4" height="24" fill="#FFFFFF"/>
    <rect x="0" y="10" width="32" height="4" fill="#FFFFFF"/>
  </svg>
);

const FlagFI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/>
    <rect x="8" y="0" width="6" height="24" fill="#003580"/>
    <rect x="0" y="9" width="32" height="6" fill="#003580"/>
  </svg>
);

const FlagCS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/>
    <rect y="12" width="32" height="12" fill="#D7141A"/>
    <polygon points="0,0 16,12 0,24" fill="#11457E"/>
  </svg>
);

const FlagEL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#0D5EAF"/>
    {[0,1,2,3,4,5,6,7,8].map(i => (
      <rect key={i} y={i * 2.67} width="32" height="2.67" fill={i % 2 === 0 ? "#0D5EAF" : "#FFFFFF"} />
    ))}
    <rect width="10.67" height="10.67" fill="#0D5EAF"/>
    <rect x="4.34" y="0" width="2" height="10.67" fill="#FFFFFF"/>
    <rect x="0" y="4.34" width="10.67" height="2" fill="#FFFFFF"/>
  </svg>
);

const FlagRU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#0039A6"/>
    <rect y="16" width="32" height="8" fill="#D52B1E"/>
  </svg>
);

const FlagRO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="10.67" height="24" fill="#002B7F"/>
    <rect x="10.67" width="10.67" height="24" fill="#FCD116"/>
    <rect x="21.33" width="10.67" height="24" fill="#CE1126"/>
  </svg>
);

const FlagBG = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#00966E"/>
    <rect y="16" width="32" height="8" fill="#D62612"/>
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#005BBB"/>
    <rect y="12" width="32" height="12" fill="#FFD500"/>
  </svg>
);

const FlagHR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF0000"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#171796"/>
    <rect x="12" y="6" width="8" height="12" fill="#FF0000" rx="1"/>
    <rect x="13" y="7" width="3" height="3" fill="#FFFFFF"/>
    <rect x="16" y="7" width="3" height="3" fill="#FF0000"/>
  </svg>
);

const FlagSK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#0B4EA2"/>
    <rect y="16" width="32" height="8" fill="#EE1C25"/>
    <path d="M4,6 L4,18 Q10,16 10,12 Q10,8 4,6Z" fill="#FFFFFF" stroke="#EE1C25" strokeWidth="0.5"/>
  </svg>
);

const FlagSR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#C6363C"/>
    <rect y="8" width="32" height="8" fill="#0C4076"/>
    <rect y="16" width="32" height="8" fill="#FFFFFF"/>
  </svg>
);

const FlagSL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#003DA5"/>
    <rect y="16" width="32" height="8" fill="#ED1C24"/>
    <path d="M4,4 L8,10 L12,4 Z" fill="#003DA5"/>
  </svg>
);

// New flags for the 15 additional languages
const FlagKO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/><circle cx="16" cy="12" r="6" fill="#CD2E3A"/><path d="M16,6 A6,6 0 0,1 16,18 A3,3 0 0,0 16,12 A3,3 0 0,1 16,6" fill="#0047A0"/>
  </svg>
);
const FlagHUNew = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE2939"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#477050"/>
  </svg>
);
const FlagTHNew = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="4" fill="#ED1C24"/><rect y="4" width="32" height="4" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#241D4F"/><rect y="16" width="32" height="4" fill="#FFFFFF"/><rect y="20" width="32" height="4" fill="#ED1C24"/>
  </svg>
);
const FlagVN = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DA251D"/><polygon points="16,5 18,11 24,11 19,14.5 21,20.5 16,17 11,20.5 13,14.5 8,11 14,11" fill="#FFFF00"/>
  </svg>
);
const FlagIDNew = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FF0000"/><rect y="12" width="32" height="12" fill="#FFFFFF"/>
  </svg>
);
const FlagEE = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#0072CE"/><rect y="8" width="32" height="8" fill="#000000"/><rect y="16" width="32" height="8" fill="#FFFFFF"/>
  </svg>
);
const FlagLV = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#9E3039"/><rect y="10" width="32" height="4" fill="#FFFFFF"/>
  </svg>
);
const FlagLT = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FDB913"/><rect y="8" width="32" height="8" fill="#006A44"/><rect y="16" width="32" height="8" fill="#C1272D"/>
  </svg>
);
const FlagISNew = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#003897"/><rect x="8" width="6" height="24" fill="#FFFFFF"/><rect y="9" width="32" height="6" fill="#FFFFFF"/><rect x="9.5" width="3" height="24" fill="#D72828"/><rect y="10.5" width="32" height="3" fill="#D72828"/>
  </svg>
);
const FlagAL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#E41E20"/><g fill="#000000" transform="translate(16,12) scale(0.4)"><polygon points="0,-20 5,-8 18,-12 8,-2 14,10 0,4 -14,10 -8,-2 -18,-12 -5,-8"/></g>
  </svg>
);
const FlagMK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#D20000"/><circle cx="16" cy="12" r="5" fill="#FFE600"/><line x1="0" y1="0" x2="32" y2="24" stroke="#FFE600" strokeWidth="2"/><line x1="32" y1="0" x2="0" y2="24" stroke="#FFE600" strokeWidth="2"/><line x1="16" y1="0" x2="16" y2="24" stroke="#FFE600" strokeWidth="2"/><line x1="0" y1="12" x2="32" y2="12" stroke="#FFE600" strokeWidth="2"/>
  </svg>
);
const FlagBA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#002395"/><polygon points="8,0 28,0 8,24" fill="#FECB00"/>
  </svg>
);
const FlagLU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#ED2939"/><rect y="8" width="32" height="8" fill="#FFFFFF"/><rect y="16" width="32" height="8" fill="#00A1DE"/>
  </svg>
);
const FlagBD = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#006A4E"/><circle cx="14" cy="12" r="6" fill="#F42A41"/>
  </svg>
);
const FlagMY = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#010066"/><rect y="4" width="32" height="4" fill="#FFFFFF"/><rect y="8" width="32" height="8" fill="#CC0000"/><rect y="16" width="32" height="4" fill="#FFFFFF"/>
    <rect width="16" height="12" fill="#010066"/><polygon points="8,2 9,5 12,5 9.5,7 10.5,10 8,8 5.5,10 6.5,7 4,5 7,5" fill="#FFE000"/>
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
  zh: FlagZH,
  ja: FlagJA,
  ar: FlagAR,
  tr: FlagTR,
  hi: FlagHI,
  sv: FlagSV,
  no: FlagNO,
  da: FlagDA,
  fi: FlagFI,
  cs: FlagCS,
  el: FlagEL,
  ru: FlagRU,
  ro: FlagRO,
  bg: FlagBG,
  uk: FlagUK,
  hr: FlagHR,
  sk: FlagSK,
  sr: FlagSR,
  sl: FlagSL,
  ko: FlagKO,
  hu: FlagHUNew,
  th: FlagTHNew,
  vi: FlagVN,
  id: FlagIDNew,
  et: FlagEE,
  lv: FlagLV,
  lt: FlagLT,
  is: FlagISNew,
  sq: FlagAL,
  mk: FlagMK,
  bs: FlagBA,
  lb: FlagLU,
  bn: FlagBD,
  ms: FlagMY,
};

interface LanguageSwitcherProps {
  currentLanguage: string;
}

const LanguageSwitcher = ({ currentLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 py-3 bg-slate-950/95 backdrop-blur-sm border-t border-amber-500/20 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      <Globe className="h-4 w-4 text-amber-400 mr-1 hidden sm:inline" />
      <span className="text-amber-300/80 text-xs font-semibold mr-2 hidden sm:inline tracking-wide uppercase">Language:</span>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center px-2 max-w-[90vw]">
        {languages.map((lang) => {
          const FlagComponent = flagComponents[lang.code];
          const isActive = currentLanguage === lang.code;
          
          return (
            <a
              key={lang.code}
              href={lang.path}
              className={`
                relative w-7 h-5 sm:w-8 sm:h-6 rounded overflow-hidden border-2 transition-all duration-200 
                hover:scale-110 hover:shadow-lg bg-slate-800 p-0.5
                ${isActive 
                  ? "border-amber-400 shadow-lg shadow-amber-500/40 scale-110 ring-2 ring-amber-400/50" 
                  : "border-slate-600 opacity-80 hover:opacity-100 hover:border-amber-400/60"
                }
              `}
              title={lang.name}
            >
              {FlagComponent && <FlagComponent />}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

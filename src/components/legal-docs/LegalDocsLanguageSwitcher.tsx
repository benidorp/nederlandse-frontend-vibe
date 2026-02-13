import { Link } from "react-router-dom";

const languageRoutes: Record<string, { path: string; label: string; code: string }> = {
  en: { path: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy", label: "English", code: "en" },
  de: { path: "/de/wesentliche-rechtliche-dokumente-affiliate-website-agb-datenschutz-impressum-cookies", label: "Deutsch", code: "de" },
  fr: { path: "/fr/documents-juridiques-essentiels-site-affiliation-conditions-politique-confidentialite-mentions-legales", label: "Français", code: "fr" },
  es: { path: "/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies", label: "Español", code: "es" },
  it: { path: "/it/documenti-legali-essenziali-sito-affiliazione-termini-privacy-cookie", label: "Italiano", code: "it" },
  pt: { path: "/pt/documentos-legais-essenciais-site-afiliados-termos-privacidade-cookies", label: "Português", code: "pt" },
  sv: { path: "/sv/juridiska-dokument-affiliate-webbplats-villkor-integritetspolicy-cookies", label: "Svenska", code: "sv" },
  pl: { path: "/pl/dokumenty-prawne-strona-afiliacyjna-regulamin-polityka-prywatnosci-cookies", label: "Polski", code: "pl" },
  el: { path: "/el/nomika-eggrafa-affiliate-website-oroi-politiki-aporritou-cookies", label: "Ελληνικά", code: "el" },
  da: { path: "/da/juridiske-dokumenter-affiliate-website-vilkaar-privatlivspolitik-cookies", label: "Dansk", code: "da" },
  no: { path: "/no/juridiske-dokumenter-affiliate-nettsted-vilkaar-personvern-cookies", label: "Norsk", code: "no" },
  ro: { path: "/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies", label: "Română", code: "ro" },
  bg: { path: "/bg/pravni-dokumenti-affiliate-sait-usloviya-politika-poveritelnost-biskvitki", label: "Български", code: "bg" },
  fi: { path: "/fi/juridiset-asiakirjat-affiliate-sivusto-ehdot-tietosuojakaytanto-evasteet", label: "Suomi", code: "fi" },
  ru: { path: "/ru/yuridicheskie-dokumenty-affiliate-sait-usloviya-politika-konfidencialnosti-cookies", label: "Русский", code: "ru" },
  zh: { path: "/zh/falv-wenjian-lianmeng-wangzhan-tiaokuan-yinsi-zhengce-cookies", label: "中文", code: "zh" },
  hi: { path: "/hi/kanooni-dastavez-affiliate-website-niyam-gopyata-niti-cookies", label: "हिन्दी", code: "hi" },
  ja: { path: "/ja/houritsumonsho-affiliate-saito-riyoukiyaku-privacy-policy-cookies", label: "日本語", code: "ja" },
  ar: { path: "/ar/wathaeq-qanuniya-mawqi-affiliate-shurut-siyasat-khususiya-cookies", label: "العربية", code: "ar" },
  ko: { path: "/ko/beobjeok-munseo-affiliate-websaiteu-iyongyakgwan-gaeinjeongbo-cookies", label: "한국어", code: "ko" },
  cs: { path: "/cs/pravni-dokumenty-affiliate-web-podminky-zasady-ochrany-soukromi-cookies", label: "Čeština", code: "cs" },
  hu: { path: "/hu/jogi-dokumentumok-affiliate-weboldal-felhasznalasi-feltetelek-adatvedelem-cookies", label: "Magyar", code: "hu" },
  uk: { path: "/uk/yurydychni-dokumenty-affiliate-sait-umovy-polityka-konfidentsiinosti-cookies", label: "Українська", code: "uk" },
  sk: { path: "/sk/pravne-dokumenty-affiliate-web-podmienky-ochrana-sukromia-cookies", label: "Slovenčina", code: "sk" },
  hr: { path: "/hr/pravni-dokumenti-affiliate-web-stranica-uvjeti-privatnost-kolacici", label: "Hrvatski", code: "hr" },
  sr: { path: "/sr/pravni-dokumenti-affiliate-sajt-uslovi-politika-privatnosti-kolacici", label: "Srpski", code: "sr" },
  sl: { path: "/sl/pravni-dokumenti-affiliate-spletna-stran-pogoji-zasebnost-piskotki", label: "Slovenščina", code: "sl" },
};

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

const flagComponents: Record<string, React.FC> = {
  en: FlagGB, de: FlagDE, fr: FlagFR, es: FlagES, it: FlagIT, pt: FlagPT,
  sv: FlagSE, pl: FlagPL, el: FlagGR, da: FlagDK, no: FlagNO, ro: FlagRO,
  bg: FlagBG, fi: FlagFI, ru: FlagRU, zh: FlagZH, hi: FlagHI, ja: FlagJA,
  ar: FlagAR, ko: FlagKR, cs: FlagCZ, hu: FlagHU, uk: FlagUA, sk: FlagSK,
  hr: FlagHR, sr: FlagRS, sl: FlagSI,
};

interface LegalDocsLanguageSwitcherProps {
  currentLang?: string;
}

const LegalDocsLanguageSwitcher = ({ currentLang = "en" }: LegalDocsLanguageSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
      <span className="text-muted-foreground text-xs font-medium mr-1 hidden sm:inline">Select language:</span>
      <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center px-4">
        {Object.entries(languageRoutes).map(([lang, { path, label }]) => {
          const FlagComponent = flagComponents[lang];
          const isActive = currentLang === lang;

          return (
            <Link
              key={lang}
              to={path}
              className={`
                relative w-7 h-5 sm:w-8 sm:h-6 rounded-sm overflow-hidden border transition-all duration-200 
                hover:scale-110 hover:shadow-md p-0.5
                ${isActive
                  ? "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50"
                  : "border-border opacity-85 hover:opacity-100 hover:border-muted-foreground"
                }
              `}
              title={label}
            >
              {FlagComponent && <FlagComponent />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LegalDocsLanguageSwitcher;
export { languageRoutes };

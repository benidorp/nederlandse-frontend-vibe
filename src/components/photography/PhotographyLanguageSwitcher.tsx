interface LanguageOption {
  code: string;
  name: string;
  path: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", path: "/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" },
  { code: "de", name: "Deutsch", path: "/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss" },
  { code: "fr", name: "Français", path: "/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause" },
  { code: "es", name: "Español", path: "/es/fotografia-documentos-legales-terminos-condiciones-privacidad-derechos-autor-aviso-legal" },
  { code: "it", name: "Italiano", path: "/it/fotografia-documenti-legali-termini-condizioni-privacy-diritto-autore-disclaimer" },
  { code: "sv", name: "Svenska", path: "/sv/fotografi-juridiska-dokument-villkor-integritetspolicy-upphovsratt-ansvarsfriskrivning" },
  { code: "pl", name: "Polski", path: "/pl/fotografia-dokumenty-prawne-regulamin-prywatnosc-prawa-autorskie-zastrzezenia" },
  { code: "el", name: "Ελληνικά", path: "/el/fotografia-nomika-engrafa-oroi-aporitou-pnevmatika-dikaiomata" },
  { code: "da", name: "Dansk", path: "/da/fotografi-juridiske-dokumenter-vilkaar-privatlivspolitik-ophavsret-ansvarsfraskrivelse" },
  { code: "no", name: "Norsk", path: "/no/fotografi-juridiske-dokumenter-vilkaar-personvern-opphavsrett-ansvarsfraskrivelse" },
  { code: "ro", name: "Română", path: "/ro/fotografie-documente-juridice-termeni-confidentialitate-drepturi-autor-declinare" },
  { code: "bg", name: "Български", path: "/bg/fotografiya-pravni-dokumenti-obshti-usloviya-poveritelnost-avtorski-prava" },
  { code: "fi", name: "Suomi", path: "/fi/valokuvaus-oikeudelliset-asiakirjat-kayttoehdot-tietosuoja-tekijanoikeus-vastuuvapaus" },
  { code: "ru", name: "Русский", path: "/ru/fotografiya-yuridicheskie-dokumenty-usloviya-konfidencialnost-avtorskie-prava" },
  { code: "zh", name: "中文", path: "/zh/sheying-falv-wenjian-tiaokuan-yinsi-banquan-baohu-mianze" },
  { code: "hi", name: "हिन्दी", path: "/hi/photography-kanooni-dastavez-niyam-gopyata-copyright-suraksha" },
  { code: "ja", name: "日本語", path: "/ja/shashin-houteki-bunsho-riyoukiyaku-privacy-chosakuken-hogo" },
  { code: "ar", name: "العربية", path: "/ar/taswir-wathaeq-qanuniya-shurut-khususiya-huquq-nashr-ikhla-masuliya" },
  { code: "ko", name: "한국어", path: "/ko/sajin-beobjeok-munseo-iyongyakgwan-gaeinjeongbo-jeojakkwon-boho" },
  { code: "cs", name: "Čeština", path: "/cs/fotografie-pravni-dokumenty-podminky-soukromi-autorska-prava-prohlaseni" },
  { code: "hu", name: "Magyar", path: "/hu/fotografia-jogi-dokumentumok-feltetelek-adatvedelem-szerzoi-jog-felelossegkizaras" },
  { code: "uk", name: "Українська", path: "/uk/fotografiya-yurydychni-dokumenty-umovy-konfidentsijnist-avtorski-prava" },
  { code: "sk", name: "Slovenčina", path: "/sk/fotografia-pravne-dokumenty-podmienky-sukromie-autorske-prava-vyhlasenie" },
  { code: "hr", name: "Hrvatski", path: "/hr/fotografija-pravni-dokumenti-uvjeti-privatnost-autorska-prava-odricanje" },
  { code: "sr", name: "Српски", path: "/sr/fotografija-pravni-dokumenti-uslovi-privatnost-autorska-prava-odricanje" },
  { code: "sl", name: "Slovenščina", path: "/sl/fotografija-pravni-dokumenti-pogoji-zasebnost-avtorske-pravice-omejitev" },
  { code: "tr", name: "Türkçe", path: "/tr/fotograf-yasal-belgeler-sartlar-gizlilik-telif-hakki-sorumluluk-reddi" },
];

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

const FlagSV = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#006AA7"/>
    <rect x="9" width="4" height="24" fill="#FECC00"/>
    <rect y="10" width="32" height="4" fill="#FECC00"/>
  </svg>
);

const FlagPL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/>
    <rect y="12" width="32" height="12" fill="#DC143C"/>
  </svg>
);

const FlagEL = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#0D5EAF"/>
    <rect y="2.67" width="32" height="2.67" fill="#FFFFFF"/>
    <rect y="8" width="32" height="2.67" fill="#FFFFFF"/>
    <rect y="13.33" width="32" height="2.67" fill="#FFFFFF"/>
    <rect y="18.67" width="32" height="2.67" fill="#FFFFFF"/>
    <rect width="10.67" height="10.67" fill="#0D5EAF"/>
    <rect x="4.33" width="2" height="10.67" fill="#FFFFFF"/>
    <rect y="4.33" width="10.67" height="2" fill="#FFFFFF"/>
  </svg>
);

const FlagDA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#C60C30"/>
    <rect x="9" width="4" height="24" fill="#FFFFFF"/>
    <rect y="10" width="32" height="4" fill="#FFFFFF"/>
  </svg>
);

const FlagNO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#EF2B2D"/>
    <rect x="8" width="6" height="24" fill="#FFFFFF"/>
    <rect y="9" width="32" height="6" fill="#FFFFFF"/>
    <rect x="9" width="4" height="24" fill="#002868"/>
    <rect y="10" width="32" height="4" fill="#002868"/>
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

const FlagFI = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/>
    <rect x="8" width="6" height="24" fill="#003580"/>
    <rect y="9" width="32" height="6" fill="#003580"/>
  </svg>
);

const FlagRU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#0039A6"/>
    <rect y="16" width="32" height="8" fill="#D52B1E"/>
  </svg>
);

const FlagZH = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#DE2910"/>
    <g fill="#FFDE00">
      <polygon points="6,4 7.2,7.8 3.2,5.6 8.8,5.6 4.8,7.8"/>
    </g>
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

const FlagJA = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/>
    <circle cx="16" cy="12" r="7" fill="#BC002D"/>
  </svg>
);

const FlagAR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#007A3D"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#000000"/>
    <polygon points="0,0 12,12 0,24" fill="#CE1126"/>
  </svg>
);

const FlagKO = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="24" fill="#FFFFFF"/>
    <circle cx="16" cy="12" r="6" fill="#CD2E3A"/>
    <path d="M16,6 A6,6 0 0,1 16,18 A3,3 0 0,1 16,12 A3,3 0 0,0 16,6" fill="#0047A0"/>
  </svg>
);

const FlagCS = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#FFFFFF"/>
    <rect y="12" width="32" height="12" fill="#D7141A"/>
    <polygon points="0,0 16,12 0,24" fill="#11457E"/>
  </svg>
);

const FlagHU = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#CE2939"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#477050"/>
  </svg>
);

const FlagUK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="12" fill="#005BBB"/>
    <rect y="12" width="32" height="12" fill="#FFD500"/>
  </svg>
);

const FlagSK = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FFFFFF"/>
    <rect y="8" width="32" height="8" fill="#0B4EA2"/>
    <rect y="16" width="32" height="8" fill="#EE1C25"/>
  </svg>
);

const FlagHR = () => (
  <svg viewBox="0 0 32 24" className="w-full h-full">
    <rect width="32" height="8" fill="#FF0000"/>
    <rect y="8" width="32" height="8" fill="#FFFFFF"/>
    <rect y="16" width="32" height="8" fill="#171796"/>
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

const flagComponents: Record<string, React.FC> = {
  en: FlagGB, de: FlagDE, fr: FlagFR, es: FlagES, it: FlagIT,
  sv: FlagSV, pl: FlagPL, el: FlagEL, da: FlagDA, no: FlagNO,
  ro: FlagRO, bg: FlagBG, fi: FlagFI, ru: FlagRU, zh: FlagZH,
  hi: FlagHI, ja: FlagJA, ar: FlagAR, ko: FlagKO, cs: FlagCS,
  hu: FlagHU, uk: FlagUK, sk: FlagSK, hr: FlagHR, sr: FlagSR,
  sl: FlagSL, tr: FlagTR,
};

interface PhotographyLanguageSwitcherProps {
  currentLanguage: string;
}

const PhotographyLanguageSwitcher = ({ currentLanguage }: PhotographyLanguageSwitcherProps) => {
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
                hover:scale-110 hover:shadow-md p-0.5
                ${isActive 
                  ? "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50" 
                  : "border-border opacity-85 hover:opacity-100 hover:border-muted-foreground"
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

export default PhotographyLanguageSwitcher;

import { Link, useLocation } from "react-router-dom";

// URL mapping for all 20 languages
const languageRoutes: Record<string, { path: string; label: string; flag: string }> = {
  en: {
    path: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    label: "English",
    flag: "🇬🇧"
  },
  de: {
    path: "/de/wesentliche-rechtliche-dokumente-affiliate-website-agb-datenschutz-impressum-cookies",
    label: "Deutsch",
    flag: "🇩🇪"
  },
  fr: {
    path: "/fr/documents-juridiques-essentiels-site-affiliation-conditions-politique-confidentialite-mentions-legales",
    label: "Français",
    flag: "🇫🇷"
  },
  es: {
    path: "/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies",
    label: "Español",
    flag: "🇪🇸"
  },
  it: {
    path: "/it/documenti-legali-essenziali-sito-affiliazione-termini-privacy-cookie",
    label: "Italiano",
    flag: "🇮🇹"
  },
  pt: {
    path: "/pt/documentos-legais-essenciais-site-afiliados-termos-privacidade-cookies",
    label: "Português",
    flag: "🇵🇹"
  },
  sv: {
    path: "/sv/juridiska-dokument-affiliate-webbplats-villkor-integritetspolicy-cookies",
    label: "Svenska",
    flag: "🇸🇪"
  },
  pl: {
    path: "/pl/dokumenty-prawne-strona-afiliacyjna-regulamin-polityka-prywatnosci-cookies",
    label: "Polski",
    flag: "🇵🇱"
  },
  el: {
    path: "/el/nomika-eggrafa-affiliate-website-oroi-politiki-aporritou-cookies",
    label: "Ελληνικά",
    flag: "🇬🇷"
  },
  da: {
    path: "/da/juridiske-dokumenter-affiliate-website-vilkaar-privatlivspolitik-cookies",
    label: "Dansk",
    flag: "🇩🇰"
  },
  no: {
    path: "/no/juridiske-dokumenter-affiliate-nettsted-vilkaar-personvern-cookies",
    label: "Norsk",
    flag: "🇳🇴"
  },
  ro: {
    path: "/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies",
    label: "Română",
    flag: "🇷🇴"
  },
  bg: {
    path: "/bg/pravni-dokumenti-affiliate-sait-usloviya-politika-poveritelnost-biskvitki",
    label: "Български",
    flag: "🇧🇬"
  },
  fi: {
    path: "/fi/juridiset-asiakirjat-affiliate-sivusto-ehdot-tietosuojakaytanto-evasteet",
    label: "Suomi",
    flag: "🇫🇮"
  },
  ru: {
    path: "/ru/yuridicheskie-dokumenty-affiliate-sait-usloviya-politika-konfidencialnosti-cookies",
    label: "Русский",
    flag: "🇷🇺"
  },
  zh: {
    path: "/zh/falv-wenjian-lianmeng-wangzhan-tiaokuan-yinsi-zhengce-cookies",
    label: "中文",
    flag: "🇨🇳"
  },
  hi: {
    path: "/hi/kanooni-dastavez-affiliate-website-niyam-gopyata-niti-cookies",
    label: "हिन्दी",
    flag: "🇮🇳"
  },
  ja: {
    path: "/ja/houritsumonsho-affiliate-saito-riyoukiyaku-privacy-policy-cookies",
    label: "日本語",
    flag: "🇯🇵"
  },
  ar: {
    path: "/ar/wathaeq-qanuniya-mawqi-affiliate-shurut-siyasat-khususiya-cookies",
    label: "العربية",
    flag: "🇸🇦"
  },
  ko: {
    path: "/ko/beobjeok-munseo-affiliate-websaiteu-iyongyakgwan-gaeinjeongbo-cookies",
    label: "한국어",
    flag: "🇰🇷"
  }
};

interface LegalDocsLanguageSwitcherProps {
  currentLang?: string;
}

const LegalDocsLanguageSwitcher = ({ currentLang = "en" }: LegalDocsLanguageSwitcherProps) => {
  return (
    <div className="bg-muted/50 border-b border-border">
      <div className="container py-3">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm font-medium text-muted-foreground mr-2">🌐</span>
          {Object.entries(languageRoutes).map(([lang, { path, label, flag }]) => (
            <Link
              key={lang}
              to={path}
              className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded-md transition-colors ${
                currentLang === lang
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-background hover:bg-muted text-foreground border border-border"
              }`}
              title={label}
            >
              <span className="text-base">{flag}</span>
              <span className="hidden sm:inline">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalDocsLanguageSwitcher;
export { languageRoutes };

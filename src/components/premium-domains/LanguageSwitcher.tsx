import { Link } from "react-router-dom";

interface LanguageOption {
  code: string;
  flag: string;
  name: string;
  path: string;
}

const languages: LanguageOption[] = [
  { code: "nl", flag: "🇳🇱", name: "Nederlands", path: "/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" },
  { code: "en", flag: "🇬🇧", name: "English", path: "/expireddomainnames/en/buy-premium-domain-names-high-authority-seo-value" },
  { code: "de", flag: "🇩🇪", name: "Deutsch", path: "/expireddomainnames/de/premium-domainnamen-kaufen-hohe-autoritaet-seo-wert" },
  { code: "fr", flag: "🇫🇷", name: "Français", path: "/expireddomainnames/fr/acheter-noms-domaine-premium-haute-autorite-valeur-seo" },
  { code: "es", flag: "🇪🇸", name: "Español", path: "/expireddomainnames/es/comprar-nombres-dominio-premium-alta-autoridad-valor-seo" },
  { code: "it", flag: "🇮🇹", name: "Italiano", path: "/expireddomainnames/it/acquistare-nomi-dominio-premium-alta-autorita-valore-seo" },
  { code: "pl", flag: "🇵🇱", name: "Polski", path: "/expireddomainnames/pl/kupic-premium-nazwy-domen-wysoki-autorytet-wartosc-seo" },
  { code: "pt", flag: "🇵🇹", name: "Português", path: "/expireddomainnames/pt/comprar-nomes-dominio-premium-alta-autoridade-valor-seo" },
];

interface LanguageSwitcherProps {
  currentLanguage: string;
}

const LanguageSwitcher = ({ currentLanguage }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
      <span className="text-slate-400 text-sm mr-2 hidden sm:inline">🌍</span>
      <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
        {languages.map((lang) => (
          <Link
            key={lang.code}
            to={lang.path}
            className={`
              text-xl sm:text-2xl transition-all duration-200 hover:scale-125 hover:drop-shadow-lg
              ${currentLanguage === lang.code 
                ? "scale-110 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" 
                : "opacity-70 hover:opacity-100"
              }
            `}
            title={lang.name}
          >
            {lang.flag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;

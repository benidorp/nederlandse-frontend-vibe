// VAT Calculator Language Switcher with Flags - All 42 languages
import { flagComponents } from "@/components/af/AfFlags";
import { vatCalcSlugs } from "@/data/vatCalcTranslations";

interface LanguageOption {
  code: string;
  name: string;
  path: string;
  flagCode: string; // key into flagComponents
}

const languages: LanguageOption[] = [
  { code: "nl", name: "Nederlands", path: `/${vatCalcSlugs.nl}`, flagCode: "nl" },
  { code: "en", name: "English", path: `/${vatCalcSlugs.en}`, flagCode: "en" },
  { code: "de", name: "Deutsch", path: `/${vatCalcSlugs.de}`, flagCode: "de" },
  { code: "fr", name: "Français", path: `/${vatCalcSlugs.fr}`, flagCode: "fr" },
  { code: "es", name: "Español", path: `/${vatCalcSlugs.es}`, flagCode: "es" },
  { code: "it", name: "Italiano", path: `/${vatCalcSlugs.it}`, flagCode: "it" },
  { code: "pt", name: "Português", path: `/${vatCalcSlugs.pt}`, flagCode: "pt" },
  { code: "pl", name: "Polski", path: `/${vatCalcSlugs.pl}`, flagCode: "pl" },
  { code: "tr", name: "Türkçe", path: `/${vatCalcSlugs.tr}`, flagCode: "tr" },
  { code: "sv", name: "Svenska", path: `/${vatCalcSlugs.sv}`, flagCode: "sv" },
  { code: "no", name: "Norsk", path: `/${vatCalcSlugs.no}`, flagCode: "no" },
  { code: "da", name: "Dansk", path: `/${vatCalcSlugs.da}`, flagCode: "da" },
  { code: "fi", name: "Suomi", path: `/${vatCalcSlugs.fi}`, flagCode: "fi" },
  { code: "cs", name: "Čeština", path: `/${vatCalcSlugs.cs}`, flagCode: "cs" },
  { code: "el", name: "Ελληνικά", path: `/${vatCalcSlugs.el}`, flagCode: "el" },
  { code: "ru", name: "Русский", path: `/${vatCalcSlugs.ru}`, flagCode: "ru" },
  { code: "ro", name: "Română", path: `/${vatCalcSlugs.ro}`, flagCode: "ro" },
  { code: "bg", name: "Български", path: `/${vatCalcSlugs.bg}`, flagCode: "bg" },
  { code: "uk", name: "Українська", path: `/${vatCalcSlugs.uk}`, flagCode: "uk" },
  { code: "hr", name: "Hrvatski", path: `/${vatCalcSlugs.hr}`, flagCode: "hr" },
  { code: "sk", name: "Slovenčina", path: `/${vatCalcSlugs.sk}`, flagCode: "sk" },
  { code: "sr", name: "Srpski", path: `/${vatCalcSlugs.sr}`, flagCode: "sr" },
  { code: "sl", name: "Slovenščina", path: `/${vatCalcSlugs.sl}`, flagCode: "sl" },
  { code: "ko", name: "한국어", path: `/${vatCalcSlugs.ko}`, flagCode: "ko" },
  { code: "hu", name: "Magyar", path: `/${vatCalcSlugs.hu}`, flagCode: "hu" },
  { code: "th", name: "ไทย", path: `/${vatCalcSlugs.th}`, flagCode: "th" },
  { code: "vi", name: "Tiếng Việt", path: `/${vatCalcSlugs.vi}`, flagCode: "vi" },
  { code: "id", name: "Indonesia", path: `/${vatCalcSlugs.id}`, flagCode: "id" },
  { code: "et", name: "Eesti", path: `/${vatCalcSlugs.et}`, flagCode: "et" },
  { code: "lv", name: "Latviešu", path: `/${vatCalcSlugs.lv}`, flagCode: "lv" },
  { code: "lt", name: "Lietuvių", path: `/${vatCalcSlugs.lt}`, flagCode: "lt" },
  { code: "is", name: "Íslenska", path: `/${vatCalcSlugs.is}`, flagCode: "is" },
  { code: "sq", name: "Shqip", path: `/${vatCalcSlugs.sq}`, flagCode: "sq" },
  { code: "mk", name: "Македонски", path: `/${vatCalcSlugs.mk}`, flagCode: "mk" },
  { code: "bs", name: "Bosanski", path: `/${vatCalcSlugs.bs}`, flagCode: "bs" },
  { code: "lb", name: "Lëtzebuergesch", path: `/${vatCalcSlugs.lb}`, flagCode: "lb" },
  { code: "bn", name: "বাংলা", path: `/${vatCalcSlugs.bn}`, flagCode: "bn" },
  { code: "ms", name: "Melayu", path: `/${vatCalcSlugs.ms}`, flagCode: "ms" },
  { code: "ar", name: "العربية", path: `/${vatCalcSlugs.ar}`, flagCode: "ar" },
  { code: "hi", name: "हिन्दी", path: `/${vatCalcSlugs.hi}`, flagCode: "hi" },
  { code: "ja", name: "日本語", path: `/${vatCalcSlugs.ja}`, flagCode: "ja" },
  { code: "zh", name: "中文", path: `/${vatCalcSlugs.zh}`, flagCode: "zh-CN" },
];

interface VATLanguageSwitcherProps {
  currentLanguage: string;
}

const VATLanguageSwitcher = ({ currentLanguage }: VATLanguageSwitcherProps) => {
  return (
    <div className="flex items-center justify-center gap-2 py-3 bg-gradient-to-b from-primary/10 via-background to-background border-b border-border/50">
      <span className="text-muted-foreground text-xs font-medium mr-1 hidden sm:inline">Select language:</span>
      <div className="flex items-center gap-1 sm:gap-1.5 flex-wrap justify-center px-2">
        {languages.map((lang) => {
          const FlagComponent = flagComponents[lang.flagCode] || flagComponents[lang.code];
          const isActive = currentLanguage === lang.code;

          return (
            <a
              key={lang.code}
              href={lang.path}
              className={`
                relative w-6 h-4 sm:w-7 sm:h-5 rounded-sm overflow-hidden border transition-all duration-200
                hover:scale-110 hover:shadow-md bg-muted p-0.5
                ${isActive
                  ? "border-primary shadow-md shadow-primary/30 scale-105 ring-1 ring-primary/50"
                  : "border-border opacity-85 hover:opacity-100 hover:border-primary/50"
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

export default VATLanguageSwitcher;

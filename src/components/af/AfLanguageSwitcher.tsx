import React from "react";
import { flagComponents } from "./AfFlags";

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
  { code: "zh-CN", label: "中文" },
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
  // New languages
  { code: "et", label: "Eesti" },
  { code: "lv", label: "Latviešu" },
  { code: "lt", label: "Lietuvių" },
  { code: "is", label: "Íslenska" },
  { code: "sq", label: "Shqip" },
  { code: "mk", label: "Македонски" },
  { code: "bs", label: "Bosanski" },
  { code: "lb", label: "Lëtzebuergesch" },
  { code: "bn", label: "বাংলা" },
  { code: "ms", label: "Bahasa Melayu" },
];

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

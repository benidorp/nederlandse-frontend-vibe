import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import { ExternalLink } from "lucide-react";

interface Language {
  name: string;
  nativeName: string;
  countryCode: string;
  languageCode: string;
  url: string;
}

const Languages = () => {
  const top10Languages: Language[] = [
    { name: "Hindi", nativeName: "हिन्दी", countryCode: "IN", languageCode: "hi", url: "https://www.iaee.eu/hi" },
    { name: "Chinese (Mandarin)", nativeName: "中文", countryCode: "CN", languageCode: "zh", url: "https://www.iaee.eu/zh" },
    { name: "English", nativeName: "English", countryCode: "GB", languageCode: "en", url: "https://www.iaee.eu/en" },
    { name: "Spanish", nativeName: "Español", countryCode: "ES", languageCode: "es", url: "https://www.iaee.eu/es" },
    { name: "Arabic", nativeName: "العربية", countryCode: "AR", languageCode: "ar", url: "https://www.iaee.eu/ar" },
    { name: "German", nativeName: "Deutsch", countryCode: "DE", languageCode: "de", url: "https://www.iaee.eu/de" },
    { name: "Italian", nativeName: "Italiano", countryCode: "IT", languageCode: "it", url: "https://www.iaee.eu/it" },
    { name: "Portuguese", nativeName: "Português", countryCode: "PT", languageCode: "pt", url: "https://www.iaee.eu/pt" },
    { name: "Japanese", nativeName: "日本語", countryCode: "JP", languageCode: "ja", url: "https://www.iaee.eu/ja" },
    { name: "French", nativeName: "Français", countryCode: "FR", languageCode: "fr", url: "https://www.iaee.eu/fr" },
  ];

  const europeLanguages: Language[] = [
    { name: "Albanian", nativeName: "Shqip", countryCode: "AL", languageCode: "sq", url: "https://www.iaee.eu/sq" },
    { name: "Armenian", nativeName: "Հայերեն", countryCode: "AM", languageCode: "hy", url: "https://www.iaee.eu/hy" },
    { name: "Azerbaijani", nativeName: "Azərbaycan", countryCode: "AZ", languageCode: "az", url: "https://www.iaee.eu/az" },
    { name: "Belarusian", nativeName: "Беларуская", countryCode: "BY", languageCode: "be", url: "https://www.iaee.eu/be" },
    { name: "Bosnian", nativeName: "Bosanski", countryCode: "BA", languageCode: "bs", url: "https://www.iaee.eu/bs" },
    { name: "Bulgarian", nativeName: "Български", countryCode: "BG", languageCode: "bg", url: "https://www.iaee.eu/bg" },
    { name: "Croatian", nativeName: "Hrvatski", countryCode: "HR", languageCode: "hr", url: "https://www.iaee.eu/hr" },
    { name: "Czech", nativeName: "Čeština", countryCode: "CZ", languageCode: "cs", url: "https://www.iaee.eu/cs" },
    { name: "Danish", nativeName: "Dansk", countryCode: "DK", languageCode: "da", url: "https://www.iaee.eu/da" },
    { name: "Dutch", nativeName: "Nederlands", countryCode: "NL", languageCode: "nl", url: "https://www.iaee.eu/nl" },
    { name: "English", nativeName: "English", countryCode: "GB", languageCode: "en", url: "https://www.iaee.eu/en" },
    { name: "Estonian", nativeName: "Eesti", countryCode: "EE", languageCode: "et", url: "https://www.iaee.eu/et" },
    { name: "Finnish", nativeName: "Suomi", countryCode: "FI", languageCode: "fi", url: "https://www.iaee.eu/fi" },
    { name: "French", nativeName: "Français", countryCode: "FR", languageCode: "fr", url: "https://www.iaee.eu/fr" },
    { name: "Georgian", nativeName: "ქართული", countryCode: "GE", languageCode: "ka", url: "https://www.iaee.eu/ka" },
    { name: "German", nativeName: "Deutsch", countryCode: "DE", languageCode: "de", url: "https://www.iaee.eu/de" },
    { name: "Greek", nativeName: "Ελληνικά", countryCode: "GR", languageCode: "el", url: "https://www.iaee.eu/el" },
    { name: "Hungarian", nativeName: "Magyar", countryCode: "HU", languageCode: "hu", url: "https://www.iaee.eu/hu" },
    { name: "Icelandic", nativeName: "Íslenska", countryCode: "IS", languageCode: "is", url: "https://www.iaee.eu/is" },
    { name: "Latvian", nativeName: "Latviešu", countryCode: "LV", languageCode: "lv", url: "https://www.iaee.eu/lv" },
    { name: "Lithuanian", nativeName: "Lietuvių", countryCode: "LT", languageCode: "lt", url: "https://www.iaee.eu/lt" },
    { name: "Luxembourgish", nativeName: "Lëtzebuergesch", countryCode: "LU", languageCode: "lb", url: "https://www.iaee.eu/lb" },
    { name: "Macedonian", nativeName: "Македонски", countryCode: "MK", languageCode: "mk", url: "https://www.iaee.eu/mk" },
    { name: "Maltese", nativeName: "Malti", countryCode: "MT", languageCode: "mt", url: "https://www.iaee.eu/mt" },
    { name: "Norwegian", nativeName: "Norsk", countryCode: "NO", languageCode: "no", url: "https://www.iaee.eu/no" },
    { name: "Polish", nativeName: "Polski", countryCode: "PL", languageCode: "pl", url: "https://www.iaee.eu/pl" },
    { name: "Portuguese", nativeName: "Português", countryCode: "PT", languageCode: "pt", url: "https://www.iaee.eu/pt" },
    { name: "Romanian", nativeName: "Română", countryCode: "RO", languageCode: "ro", url: "https://www.iaee.eu/ro" },
    { name: "Russian", nativeName: "Русский", countryCode: "RU", languageCode: "ru", url: "https://www.iaee.eu/ru" },
    { name: "Serbian", nativeName: "Српски", countryCode: "RS", languageCode: "sr", url: "https://www.iaee.eu/sr" },
    { name: "Slovak", nativeName: "Slovenčina", countryCode: "SK", languageCode: "sk", url: "https://www.iaee.eu/sk" },
    { name: "Slovenian", nativeName: "Slovenščina", countryCode: "SI", languageCode: "sl", url: "https://www.iaee.eu/sl" },
    { name: "Spanish", nativeName: "Español", countryCode: "ES", languageCode: "es", url: "https://www.iaee.eu/es" },
    { name: "Swedish", nativeName: "Svenska", countryCode: "SE", languageCode: "sv", url: "https://www.iaee.eu/sv" },
    { name: "Ukrainian", nativeName: "Українська", countryCode: "UA", languageCode: "uk", url: "https://www.iaee.eu/uk" },
  ];

  const asiaLanguages: Language[] = [
    { name: "Arabic", nativeName: "العربية", countryCode: "AR", languageCode: "ar", url: "https://www.iaee.eu/ar" },
    { name: "Bengali", nativeName: "বাংলা", countryCode: "BD", languageCode: "bn", url: "https://www.iaee.eu/bn" },
    { name: "Filipino", nativeName: "Filipino", countryCode: "PH", languageCode: "fil", url: "https://www.iaee.eu/fil" },
    { name: "Gujarati", nativeName: "ગુજરાતી", countryCode: "IN", languageCode: "gu", url: "https://www.iaee.eu/gu" },
    { name: "Hebrew", nativeName: "עברית", countryCode: "IL", languageCode: "he", url: "https://www.iaee.eu/he" },
    { name: "Hindi", nativeName: "हिन्दी", countryCode: "IN", languageCode: "hi", url: "https://www.iaee.eu/hi" },
    { name: "Indonesian", nativeName: "Bahasa Indonesia", countryCode: "ID", languageCode: "id", url: "https://www.iaee.eu/id" },
    { name: "Japanese", nativeName: "日本語", countryCode: "JP", languageCode: "ja", url: "https://www.iaee.eu/ja" },
    { name: "Javanese", nativeName: "Basa Jawa", countryCode: "ID", languageCode: "jv", url: "https://www.iaee.eu/jv" },
    { name: "Korean", nativeName: "한국어", countryCode: "KR", languageCode: "ko", url: "https://www.iaee.eu/ko" },
    { name: "Malayalam", nativeName: "മലയാളം", countryCode: "IN", languageCode: "ml", url: "https://www.iaee.eu/ml" },
    { name: "Marathi", nativeName: "मराठी", countryCode: "IN", languageCode: "mr", url: "https://www.iaee.eu/mr" },
    { name: "Myanmar (Burmese)", nativeName: "မြန်မာ", countryCode: "MM", languageCode: "my", url: "https://www.iaee.eu/my" },
    { name: "Nepali", nativeName: "नेपाली", countryCode: "NP", languageCode: "ne", url: "https://www.iaee.eu/ne" },
    { name: "Pashto", nativeName: "پښتو", countryCode: "AF", languageCode: "ps", url: "https://www.iaee.eu/ps" },
    { name: "Persian", nativeName: "فارسی", countryCode: "IR", languageCode: "fa", url: "https://www.iaee.eu/fa" },
    { name: "Sindhi", nativeName: "سنڌي", countryCode: "PK", languageCode: "sd", url: "https://www.iaee.eu/sd" },
    { name: "Tajik", nativeName: "Тоҷикӣ", countryCode: "TJ", languageCode: "tg", url: "https://www.iaee.eu/tg" },
    { name: "Tamil", nativeName: "தமிழ்", countryCode: "IN", languageCode: "ta", url: "https://www.iaee.eu/ta" },
    { name: "Telugu", nativeName: "తెలుగు", countryCode: "IN", languageCode: "te", url: "https://www.iaee.eu/te" },
    { name: "Thai", nativeName: "ไทย", countryCode: "TH", languageCode: "th", url: "https://www.iaee.eu/th" },
    { name: "Turkish", nativeName: "Türkçe", countryCode: "TR", languageCode: "tr", url: "https://www.iaee.eu/tr" },
    { name: "Urdu", nativeName: "اردو", countryCode: "PK", languageCode: "ur", url: "https://www.iaee.eu/ur" },
    { name: "Uzbek", nativeName: "Oʻzbekcha", countryCode: "UZ", languageCode: "uz", url: "https://www.iaee.eu/uz" },
    { name: "Vietnamese", nativeName: "Tiếng Việt", countryCode: "VN", languageCode: "vi", url: "https://www.iaee.eu/vi" },
  ];

  const africaLanguages: Language[] = [
    { name: "Amharic", nativeName: "አማርኛ", countryCode: "ET", languageCode: "am", url: "https://www.iaee.eu/am" },
    { name: "Igbo", nativeName: "Igbo", countryCode: "NG", languageCode: "ig", url: "https://www.iaee.eu/ig" },
    { name: "Swahili", nativeName: "Kiswahili", countryCode: "KE", languageCode: "sw", url: "https://www.iaee.eu/sw" },
    { name: "Yoruba", nativeName: "Yorùbá", countryCode: "NG", languageCode: "yo", url: "https://www.iaee.eu/yo" },
    { name: "Zulu", nativeName: "isiZulu", countryCode: "ZA", languageCode: "zu", url: "https://www.iaee.eu/zu" },
  ];

  const LanguageCard = ({ language, isLarge = false }: { language: Language; isLarge?: boolean }) => (
    <a
      href={language.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:bg-accent transition-all hover:shadow-md ${
        isLarge ? "min-h-[100px]" : ""
      }`}
    >
      <img
        src={`https://flagcdn.com/${language.countryCode.toLowerCase()}.svg`}
        alt={`${language.countryCode} flag`}
        className={`${isLarge ? "w-16 h-12" : "w-12 h-9"} object-cover rounded shadow-sm`}
      />
      <div className="flex-1">
        <h3 className={`${isLarge ? "text-xl" : "text-lg"} font-semibold text-foreground group-hover:text-primary transition-colors`}>
          {language.nativeName}
        </h3>
        <p className="text-sm text-muted-foreground">
          {language.name} ({language.countryCode})
        </p>
      </div>
      <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );

  return (
    <>
      <Helmet>
        <title>Languages - Legal Affiliate Agreement</title>
        <meta name="description" content="Access legal documents for affiliate websites in 65+ languages across Europe, Asia, and Africa." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <HeaderEN />
        <main className="container py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Language Overview
            </h1>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Select your language to access legal documents for affiliate websites
            </p>

            {/* Top 10 Most Spoken Languages */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Top 10 Most Spoken Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {top10Languages.map((lang) => (
                  <LanguageCard key={lang.languageCode} language={lang} isLarge />
                ))}
              </div>
            </section>

            {/* Europe */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
                🇪🇺 Europe
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {europeLanguages.map((lang) => (
                  <LanguageCard key={lang.languageCode} language={lang} />
                ))}
              </div>
            </section>

            {/* Asia */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
                🌏 Asia
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {asiaLanguages.map((lang) => (
                  <LanguageCard key={lang.languageCode} language={lang} />
                ))}
              </div>
            </section>

            {/* Africa */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground flex items-center gap-2">
                🌍 Africa
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {africaLanguages.map((lang) => (
                  <LanguageCard key={lang.languageCode} language={lang} />
                ))}
              </div>
            </section>
          </div>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Languages;

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
    { name: "Hindi", nativeName: "हिन्दी", countryCode: "IN", languageCode: "hi", url: "https://www.iaee.eu/hi/af" },
    { name: "Chinese (Mandarin)", nativeName: "中文", countryCode: "CN", languageCode: "zh", url: "https://www.iaee.eu/zh/af" },
    { name: "English", nativeName: "English", countryCode: "GB", languageCode: "en", url: "https://www.iaee.eu/en/af" },
    { name: "Spanish", nativeName: "Español", countryCode: "ES", languageCode: "es", url: "https://www.iaee.eu/es/af" },
    { name: "Arabic", nativeName: "العربية", countryCode: "AR", languageCode: "ar", url: "https://www.iaee.eu/ar/af" },
    { name: "German", nativeName: "Deutsch", countryCode: "DE", languageCode: "de", url: "https://www.iaee.eu/de/af" },
    { name: "Italian", nativeName: "Italiano", countryCode: "IT", languageCode: "it", url: "https://www.iaee.eu/it/af" },
    { name: "Portuguese", nativeName: "Português", countryCode: "PT", languageCode: "pt", url: "https://www.iaee.eu/pt/af" },
    { name: "Japanese", nativeName: "日本語", countryCode: "JP", languageCode: "ja", url: "https://www.iaee.eu/ja/af" },
    { name: "French", nativeName: "Français", countryCode: "FR", languageCode: "fr", url: "https://www.iaee.eu/fr/af" },
  ];

  const europeLanguages: Language[] = [
    { name: "Albanian", nativeName: "Shqip", countryCode: "AL", languageCode: "sq", url: "https://www.iaee.eu/sq/af" },
    { name: "Armenian", nativeName: "Հայերեն", countryCode: "AM", languageCode: "hy", url: "https://www.iaee.eu/hy/af" },
    { name: "Azerbaijani", nativeName: "Azərbaycan", countryCode: "AZ", languageCode: "az", url: "https://www.iaee.eu/az/af" },
    { name: "Belarusian", nativeName: "Беларуская", countryCode: "BY", languageCode: "be", url: "https://www.iaee.eu/be/af" },
    { name: "Bosnian", nativeName: "Bosanski", countryCode: "BA", languageCode: "bs", url: "https://www.iaee.eu/bs/af" },
    { name: "Bulgarian", nativeName: "Български", countryCode: "BG", languageCode: "bg", url: "https://www.iaee.eu/bg/af" },
    { name: "Croatian", nativeName: "Hrvatski", countryCode: "HR", languageCode: "hr", url: "https://www.iaee.eu/hr/af" },
    { name: "Czech", nativeName: "Čeština", countryCode: "CZ", languageCode: "cs", url: "https://www.iaee.eu/cs/af" },
    { name: "Danish", nativeName: "Dansk", countryCode: "DK", languageCode: "da", url: "https://www.iaee.eu/da/af" },
    { name: "Dutch", nativeName: "Nederlands", countryCode: "NL", languageCode: "nl", url: "https://www.iaee.eu/nl/af" },
    { name: "English", nativeName: "English", countryCode: "GB", languageCode: "en", url: "https://www.iaee.eu/en/af" },
    { name: "Estonian", nativeName: "Eesti", countryCode: "EE", languageCode: "et", url: "https://www.iaee.eu/et/af" },
    { name: "Finnish", nativeName: "Suomi", countryCode: "FI", languageCode: "fi", url: "https://www.iaee.eu/fi/af" },
    { name: "French", nativeName: "Français", countryCode: "FR", languageCode: "fr", url: "https://www.iaee.eu/fr/af" },
    { name: "Georgian", nativeName: "ქართული", countryCode: "GE", languageCode: "ka", url: "https://www.iaee.eu/ka/af" },
    { name: "German", nativeName: "Deutsch", countryCode: "DE", languageCode: "de", url: "https://www.iaee.eu/de/af" },
    { name: "Greek", nativeName: "Ελληνικά", countryCode: "GR", languageCode: "el", url: "https://www.iaee.eu/el/af" },
    { name: "Hungarian", nativeName: "Magyar", countryCode: "HU", languageCode: "hu", url: "https://www.iaee.eu/hu/af" },
    { name: "Icelandic", nativeName: "Íslenska", countryCode: "IS", languageCode: "is", url: "https://www.iaee.eu/is/af" },
    { name: "Latvian", nativeName: "Latviešu", countryCode: "LV", languageCode: "lv", url: "https://www.iaee.eu/lv/af" },
    { name: "Lithuanian", nativeName: "Lietuvių", countryCode: "LT", languageCode: "lt", url: "https://www.iaee.eu/lt/af" },
    { name: "Luxembourgish", nativeName: "Lëtzebuergesch", countryCode: "LU", languageCode: "lb", url: "https://www.iaee.eu/lb/af" },
    { name: "Macedonian", nativeName: "Македонски", countryCode: "MK", languageCode: "mk", url: "https://www.iaee.eu/mk/af" },
    { name: "Maltese", nativeName: "Malti", countryCode: "MT", languageCode: "mt", url: "https://www.iaee.eu/mt/af" },
    { name: "Norwegian", nativeName: "Norsk", countryCode: "NO", languageCode: "no", url: "https://www.iaee.eu/no/af" },
    { name: "Polish", nativeName: "Polski", countryCode: "PL", languageCode: "pl", url: "https://www.iaee.eu/pl/af" },
    { name: "Portuguese", nativeName: "Português", countryCode: "PT", languageCode: "pt", url: "https://www.iaee.eu/pt/af" },
    { name: "Romanian", nativeName: "Română", countryCode: "RO", languageCode: "ro", url: "https://www.iaee.eu/ro/af" },
    { name: "Russian", nativeName: "Русский", countryCode: "RU", languageCode: "ru", url: "https://www.iaee.eu/ru/af" },
    { name: "Serbian", nativeName: "Српски", countryCode: "RS", languageCode: "sr", url: "https://www.iaee.eu/sr/af" },
    { name: "Slovak", nativeName: "Slovenčina", countryCode: "SK", languageCode: "sk", url: "https://www.iaee.eu/sk/af" },
    { name: "Slovenian", nativeName: "Slovenščina", countryCode: "SI", languageCode: "sl", url: "https://www.iaee.eu/sl/af" },
    { name: "Spanish", nativeName: "Español", countryCode: "ES", languageCode: "es", url: "https://www.iaee.eu/es/af" },
    { name: "Swedish", nativeName: "Svenska", countryCode: "SE", languageCode: "sv", url: "https://www.iaee.eu/sv/af" },
    { name: "Ukrainian", nativeName: "Українська", countryCode: "UA", languageCode: "uk", url: "https://www.iaee.eu/uk/af" },
  ];

  const asiaLanguages: Language[] = [
    { name: "Arabic", nativeName: "العربية", countryCode: "AR", languageCode: "ar", url: "https://www.iaee.eu/ar/af" },
    { name: "Bengali", nativeName: "বাংলা", countryCode: "BD", languageCode: "bn", url: "https://www.iaee.eu/bn/af" },
    { name: "Filipino", nativeName: "Filipino", countryCode: "PH", languageCode: "fil", url: "https://www.iaee.eu/fil/af" },
    { name: "Gujarati", nativeName: "ગુજરાતી", countryCode: "IN", languageCode: "gu", url: "https://www.iaee.eu/gu/af" },
    { name: "Hebrew", nativeName: "עברית", countryCode: "IL", languageCode: "he", url: "https://www.iaee.eu/he/af" },
    { name: "Hindi", nativeName: "हिन्दी", countryCode: "IN", languageCode: "hi", url: "https://www.iaee.eu/hi/af" },
    { name: "Indonesian", nativeName: "Bahasa Indonesia", countryCode: "ID", languageCode: "id", url: "https://www.iaee.eu/id/af" },
    { name: "Japanese", nativeName: "日本語", countryCode: "JP", languageCode: "ja", url: "https://www.iaee.eu/ja/af" },
    { name: "Javanese", nativeName: "Basa Jawa", countryCode: "ID", languageCode: "jv", url: "https://www.iaee.eu/jv/af" },
    { name: "Korean", nativeName: "한국어", countryCode: "KR", languageCode: "ko", url: "https://www.iaee.eu/ko/af" },
    { name: "Malayalam", nativeName: "മലയാളം", countryCode: "IN", languageCode: "ml", url: "https://www.iaee.eu/ml/af" },
    { name: "Marathi", nativeName: "मराठी", countryCode: "IN", languageCode: "mr", url: "https://www.iaee.eu/mr/af" },
    { name: "Myanmar (Burmese)", nativeName: "မြန်မာ", countryCode: "MM", languageCode: "my", url: "https://www.iaee.eu/my/af" },
    { name: "Nepali", nativeName: "नेपाली", countryCode: "NP", languageCode: "ne", url: "https://www.iaee.eu/ne/af" },
    { name: "Pashto", nativeName: "پښتو", countryCode: "AF", languageCode: "ps", url: "https://www.iaee.eu/ps/af" },
    { name: "Persian", nativeName: "فارسی", countryCode: "IR", languageCode: "fa", url: "https://www.iaee.eu/fa/af" },
    { name: "Sindhi", nativeName: "سنڌي", countryCode: "PK", languageCode: "sd", url: "https://www.iaee.eu/sd/af" },
    { name: "Tajik", nativeName: "Тоҷикӣ", countryCode: "TJ", languageCode: "tg", url: "https://www.iaee.eu/tg/af" },
    { name: "Tamil", nativeName: "தமிழ்", countryCode: "IN", languageCode: "ta", url: "https://www.iaee.eu/ta/af" },
    { name: "Telugu", nativeName: "తెలుగు", countryCode: "IN", languageCode: "te", url: "https://www.iaee.eu/te/af" },
    { name: "Thai", nativeName: "ไทย", countryCode: "TH", languageCode: "th", url: "https://www.iaee.eu/th/af" },
    { name: "Turkish", nativeName: "Türkçe", countryCode: "TR", languageCode: "tr", url: "https://www.iaee.eu/tr/af" },
    { name: "Urdu", nativeName: "اردو", countryCode: "PK", languageCode: "ur", url: "https://www.iaee.eu/ur/af" },
    { name: "Uzbek", nativeName: "Oʻzbekcha", countryCode: "UZ", languageCode: "uz", url: "https://www.iaee.eu/uz/af" },
    { name: "Vietnamese", nativeName: "Tiếng Việt", countryCode: "VN", languageCode: "vi", url: "https://www.iaee.eu/vi/af" },
  ];

  const africaLanguages: Language[] = [
    { name: "Amharic", nativeName: "አማርኛ", countryCode: "ET", languageCode: "am", url: "https://www.iaee.eu/am/af" },
    { name: "Igbo", nativeName: "Igbo", countryCode: "NG", languageCode: "ig", url: "https://www.iaee.eu/ig/af" },
    { name: "Swahili", nativeName: "Kiswahili", countryCode: "KE", languageCode: "sw", url: "https://www.iaee.eu/sw/af" },
    { name: "Yoruba", nativeName: "Yorùbá", countryCode: "NG", languageCode: "yo", url: "https://www.iaee.eu/yo/af" },
    { name: "Zulu", nativeName: "isiZulu", countryCode: "ZA", languageCode: "zu", url: "https://www.iaee.eu/zu/af" },
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
        <meta name="robots" content="noindex" />
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

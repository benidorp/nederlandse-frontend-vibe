import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import HeaderEN from "@/components/en/HeaderEN";
import HeroEN from "@/components/en/HeroEN";
import ValuePropositionEN from "@/components/en/ValuePropositionEN";
import ServicesEN from "@/components/en/ServicesEN";
import BlogPostsEN from "@/components/en/BlogPostsEN";
import AffiliateQAEN from "@/components/en/AffiliateQAEN";
import FAQEN from "@/components/en/FAQEN";
import PricingEN from "@/components/en/PricingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

// All supported language codes
const supportedLanguages = [
  "sq", "ar", "hy", "az", "be", "bn", "bs", "bg", "zh", "hr", "cs", "da", "nl", "en",
  "et", "fil", "fi", "fr", "ka", "de", "el", "gu", "he", "hi", "hu", "is", "ig", "id",
  "it", "ja", "jv", "ko", "lv", "lt", "lb", "mk", "ml", "mt", "mr", "mn", "my", "ne",
  "no", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "sr", "sd", "sk", "sl", "es", "sv",
  "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi"
];

const languageNames: Record<string, string> = {
  sq: "Albanian", ar: "Arabic", hy: "Armenian", az: "Azerbaijani", be: "Belarusian",
  bn: "Bengali", bs: "Bosnian", bg: "Bulgarian", zh: "Chinese", hr: "Croatian",
  cs: "Czech", da: "Danish", nl: "Dutch", en: "English", et: "Estonian",
  fil: "Filipino", fi: "Finnish", fr: "French", ka: "Georgian", de: "German",
  el: "Greek", gu: "Gujarati", he: "Hebrew", hi: "Hindi", hu: "Hungarian",
  is: "Icelandic", ig: "Igbo", id: "Indonesian", it: "Italian", ja: "Japanese",
  jv: "Javanese", ko: "Korean", lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish",
  mk: "Macedonian", ml: "Malayalam", mt: "Maltese", mr: "Marathi", mn: "Mongolian",
  my: "Burmese", ne: "Nepali", no: "Norwegian", fa: "Persian", pl: "Polish",
  pt: "Portuguese", pa: "Punjabi", ro: "Romanian", ru: "Russian", sm: "Samoan",
  sr: "Serbian", sd: "Sindhi", sk: "Slovak", sl: "Slovenian", es: "Spanish",
  sv: "Swedish", tg: "Tajik", ta: "Tamil", te: "Telugu", th: "Thai",
  tr: "Turkish", uk: "Ukrainian", ur: "Urdu", uz: "Uzbek", vi: "Vietnamese"
};

const LanguagePage = () => {
  const { lang } = useParams<{ lang: string }>();

  // Redirect if language is not supported
  if (!lang || !supportedLanguages.includes(lang)) {
    return <Navigate to="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" replace />;
  }

  useEffect(() => {
    // Set GTranslate language when component mounts
    if ((window as any).doGTranslate) {
      (window as any).doGTranslate(`en|${lang}`);
    }
  }, [lang]);

  const langName = languageNames[lang] || lang.toUpperCase();

  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang={lang} />
        <title>Affiliate Website Protection - Essential Legal Documents ({langName})</title>
        <meta name="description" content="Professional legal documents for affiliate websites including terms and conditions, privacy policy, disclosure, and cookie policy." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="x-default" href="https://iaee.eu/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" />
        {supportedLanguages.map(langCode => (
          <link key={langCode} rel="alternate" hrefLang={langCode} href={`https://iaee.eu/${langCode}`} />
        ))}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://iaee.eu/${lang}`} />
      </Helmet>
      <GTranslateWidget defaultLanguage={lang} />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEN />
          <ValuePropositionEN />
          <ServicesEN />
          <BlogPostsEN />
          <AffiliateQAEN />
          <PricingEN />
          <ReviewsEN />
          <FAQEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default LanguagePage;

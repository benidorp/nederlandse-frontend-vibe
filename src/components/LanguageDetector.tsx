import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// All supported language codes from GTranslate
const supportedLanguages = [
  "sq", "ar", "hy", "az", "be", "bn", "bs", "bg", "zh", "hr", "cs", "da", "nl", "en",
  "et", "fil", "fi", "fr", "ka", "de", "el", "gu", "he", "hi", "hu", "is", "ig", "id",
  "it", "ja", "jv", "ko", "lv", "lt", "lb", "mk", "ml", "mt", "mr", "mn", "my", "ne",
  "no", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "sr", "sd", "sk", "sl", "es", "sv",
  "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi"
];

const LanguageDetector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only run on the main Dutch page
    if (location.pathname === "/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid") {
      const browserLang = navigator.language.split("-")[0].toLowerCase();
      
      // If browser language is supported and not Dutch, redirect
      if (supportedLanguages.includes(browserLang) && browserLang !== "nl") {
        navigate(`/${browserLang}`, { replace: true });
      }
    }
  }, [navigate, location.pathname]);

  return null;
};

export default LanguageDetector;

import { useEffect } from "react";

interface GTranslateWidgetProps {
  defaultLanguage?: string;
}

const GTranslateWidget = ({ defaultLanguage = "en" }: GTranslateWidgetProps) => {
  useEffect(() => {
    // Add GTranslate script
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    // Configure GTranslate
    script.onload = () => {
      (window as any).gtranslateSettings = {
        default_language: defaultLanguage,
        native_language_names: true,
        detect_browser_language: false, // Disabled to prevent conflicts with our URL-based system
        languages: [
          "sq", "ar", "hy", "az", "be", "bn", "bs", "bg", "zh", "hr", "cs", "da", "nl", "en",
          "et", "fil", "fi", "fr", "ka", "de", "el", "gu", "he", "hi", "hu", "is", "ig", "id",
          "it", "ja", "jv", "ko", "lv", "lt", "lb", "mk", "ml", "mt", "mr", "mn", "my", "ne",
          "no", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "sr", "sd", "sk", "sl", "es", "sv",
          "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi"
        ],
        wrapper_selector: ".gtranslate_wrapper",
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [defaultLanguage]);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslateWidget;

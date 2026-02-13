import { useEffect } from "react";

interface GTranslateWidgetProps {
  defaultLanguage?: string;
  detectBrowserLanguage?: boolean;
  inline?: boolean;
}

const GTranslateWidget = ({ defaultLanguage = "en", detectBrowserLanguage = false, inline = false }: GTranslateWidgetProps) => {
  useEffect(() => {
    // Configure GTranslate BEFORE loading the script
    (window as any).gtranslateSettings = {
      default_language: defaultLanguage,
      native_language_names: true,
      detect_browser_language: detectBrowserLanguage,
      languages: [
        "sq", "ar", "hy", "az", "be", "bn", "bs", "bg", "zh", "hr", "cs", "da", "nl", "en",
        "et", "fil", "fi", "fr", "ka", "de", "el", "gu", "he", "hi", "hu", "is", "ig", "id",
        "it", "ja", "jv", "ko", "lv", "lt", "lb", "mk", "ml", "mt", "mr", "mn", "my", "ne",
        "no", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "sr", "sd", "sk", "sl", "es", "sv",
        "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi"
      ],
      wrapper_selector: ".gtranslate_wrapper",
    };

    // Add GTranslate script AFTER settings are configured
    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Safely remove script only if it's still in the DOM
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      // Clean up gtranslate settings
      delete (window as any).gtranslateSettings;
    };
  }, [defaultLanguage]);

  return <div className={`gtranslate_wrapper${inline ? ' gtranslate-inline' : ''}`}></div>;
};

export default GTranslateWidget;

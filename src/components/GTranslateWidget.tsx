import { useEffect } from "react";

interface GTranslateWidgetProps {
  defaultLanguage?: string;
  detectBrowserLanguage?: boolean;
  inline?: boolean;
}

const GTranslateWidget = ({ defaultLanguage = "en", detectBrowserLanguage = false, inline = false }: GTranslateWidgetProps) => {
  useEffect(() => {
    // Remove any previous GTranslate elements to avoid duplicates
    const existingWidget = document.querySelector('.gt_float_switcher');
    if (existingWidget) existingWidget.remove();

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
      // Use dropdown widget type for inline placement
      ...(inline ? { switcher_horizontal_position: "inline" } : {}),
    };

    // Use dropdown widget for inline, float widget for fixed
    const script = document.createElement("script");
    script.src = inline
      ? "https://cdn.gtranslate.net/widgets/latest/dropdown.js"
      : "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

    // Manual browser language auto-detection fallback
    if (detectBrowserLanguage) {
      const browserLang = navigator.language.split("-")[0].toLowerCase();
      const supportedLangs = [
        "sq", "ar", "hy", "az", "be", "bn", "bs", "bg", "zh", "hr", "cs", "da", "nl", "en",
        "et", "fil", "fi", "fr", "ka", "de", "el", "gu", "he", "hi", "hu", "is", "ig", "id",
        "it", "ja", "jv", "ko", "lv", "lt", "lb", "mk", "ml", "mt", "mr", "mn", "my", "ne",
        "no", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "sr", "sd", "sk", "sl", "es", "sv",
        "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi"
      ];

      if (browserLang !== defaultLanguage && supportedLangs.includes(browserLang)) {
        // Wait for GTranslate to initialize, then trigger the translation
        const attemptAutoTranslate = (retries = 0) => {
          const select = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement;
          if (select) {
            // Find the option matching the browser language
            const options = Array.from(select.options);
            const matchingOption = options.find(opt => opt.value === browserLang);
            if (matchingOption) {
              select.value = browserLang;
              select.dispatchEvent(new Event('change', { bubbles: true }));
            }
          } else if (retries < 20) {
            setTimeout(() => attemptAutoTranslate(retries + 1), 500);
          }
        };
        // Start attempting after script likely loaded
        setTimeout(() => attemptAutoTranslate(), 1000);
      }
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      delete (window as any).gtranslateSettings;
    };
  }, [defaultLanguage, detectBrowserLanguage, inline]);

  return (
    <div className={`gtranslate_wrapper${inline ? ' gtranslate-inline' : ''}`}></div>
  );
};

export default GTranslateWidget;

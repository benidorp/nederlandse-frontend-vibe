import { useEffect, useRef } from "react";

interface GTranslateWidgetProps {
  defaultLanguage?: string;
  detectBrowserLanguage?: boolean;
  inline?: boolean;
}

const GTranslateWidget = ({ defaultLanguage = "en", detectBrowserLanguage = false, inline = false }: GTranslateWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Remove any previous GTranslate elements to avoid duplicates
    const existingWidget = document.querySelector('.gt_float_switcher');
    if (existingWidget) existingWidget.remove();

    // Create wrapper div outside React's control
    const wrapper = document.createElement('div');
    wrapper.className = `gtranslate_wrapper${inline ? ' gtranslate-inline' : ''}`;
    container.appendChild(wrapper);

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
      ...(inline ? { switcher_horizontal_position: "inline" } : {}),
    };

    const script = document.createElement("script");
    script.src = inline
      ? "https://cdn.gtranslate.net/widgets/latest/dropdown.js"
      : "https://cdn.gtranslate.net/widgets/latest/float.js";
    script.defer = true;
    document.body.appendChild(script);

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
        const attemptAutoTranslate = (retries = 0) => {
          const select = document.querySelector('.gtranslate_wrapper select') as HTMLSelectElement;
          if (select) {
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
        setTimeout(() => attemptAutoTranslate(), 1000);
      }
    }

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      // Clean up wrapper outside React's control
      if (container) container.innerHTML = '';
      delete (window as any).gtranslateSettings;
    };
  }, [defaultLanguage, detectBrowserLanguage, inline]);

  // Use a ref container so React never tries to reconcile GTranslate's DOM mutations
  return (
    <div ref={containerRef} />
  );
};

export default GTranslateWidget;

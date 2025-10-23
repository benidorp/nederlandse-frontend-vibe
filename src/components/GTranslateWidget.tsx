import { useEffect } from "react";

const GTranslateWidget = () => {
  useEffect(() => {
    // Initialize GTranslate
    const script = document.createElement('script');
    script.innerHTML = `
      window.gtranslateSettings = {
        "default_language": "en",
        "languages": ["en","nl","de","fr","es","it","pt","ru","ja","zh-CN","ar","hi","ko","tr","pl","sv","da","no","fi","cs","el","he","id","th","vi","ro","hu","uk","bg","hr","sk","sl","lt","lv","et","is","ga","mt","cy","sq","mk","sr","bs","af","az","be","ka","hy","kk","ky","mn","tg","tk","uz","bn","gu","kn","ml","mr","ne","pa","si","ta","te","ur","my","km","lo","am","ti","yo","ig","ha","zu","sw","mg"],
        "wrapper_selector": ".gtranslate_wrapper",
        "switcher_horizontal_position": "right",
        "switcher_vertical_position": "top"
      };
    `;
    document.head.appendChild(script);

    const gtranslateScript = document.createElement('script');
    gtranslateScript.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    gtranslateScript.defer = true;
    document.body.appendChild(gtranslateScript);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(gtranslateScript);
    };
  }, []);

  return <div className="gtranslate_wrapper"></div>;
};

export default GTranslateWidget;

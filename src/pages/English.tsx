import React from "react";
import { Helmet } from "react-helmet";
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

const English = () => {
  // Load GTranslate widget script
  React.useEffect(() => {
    // Add GTranslate settings
    (window as any).gtranslateSettings = {
      "default_language": "en",
      "detect_browser_language": true,
      "wrapper_selector": ".gtranslate_wrapper",
      "languages": [
        "sq", "ar", "hy", "az", "be", "bn", "bs", "bg", "zh", "hr", "cs", "da", "nl", "en",
        "et", "fil", "fi", "fr", "ka", "de", "el", "gu", "he", "hi", "hu", "is", "ig", "id",
        "it", "ja", "jv", "ko", "lv", "lt", "lb", "mk", "ml", "mt", "mr", "mn", "my", "ne",
        "no", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "sr", "sd", "sk", "sl", "es", "sv",
        "tg", "ta", "te", "th", "tr", "uk", "ur", "uz", "vi"
      ],
      "native_language_names": true
    };

    // Load the script
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
      delete (window as any).gtranslateSettings;
    };
  }, []);
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
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
        <div className="gtranslate_wrapper"></div>
        <FooterEN />
      </div>
    </>
  );
};

export default English;

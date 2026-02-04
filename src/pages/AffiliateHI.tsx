import HeaderHI from "@/components/hi/HeaderHI";
import HeroHI from "@/components/hi/HeroHI";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionHI from "@/components/hi/ValuePropositionHI";
import ServicesHI from "@/components/hi/ServicesHI";
import FAQHI from "@/components/hi/FAQHI";
import PricingHI from "@/components/hi/PricingHI";
import ReviewsHI from "@/components/hi/ReviewsHI";
import FooterHI from "@/components/hi/FooterHI";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateHI = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="वेबसाइटों के लिए आवश्यक कानूनी दस्तावेज़ | नियम, गोपनीयता, कुकीज़ – iaee.eu"
        description="आपकी वेबसाइट के लिए आवश्यक कानूनी दस्तावेज़ों का पूर्ण पैकेज: नियम और शर्तें, गोपनीयता नीति, एफिलिएट प्रकटीकरण, कुकी नीति और अस्वीकरण। वेबसाइटों के लिए कानूनी अनुपालन सरल बनाया गया। केवल €79 iaee.eu पर।"
        canonical="https://www.iaee.eu/hi/kanooni-dastavez-affiliate-website-niyam-gopyata-niti-cookies"
        lang="hi"
        ogType="product"
        serviceName="वेबसाइटों के लिए आवश्यक कानूनी दस्तावेज़"
        serviceDescription="वेबसाइटों के लिए आवश्यक कानूनी दस्तावेज़ों का पूर्ण पैकेज: नियम और शर्तें, गोपनीयता नीति, एफिलिएट प्रकटीकरण, कुकी नीति और अस्वीकरण।"
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "होम", url: "https://www.iaee.eu" },
          { name: "वेबसाइटों के लिए आवश्यक कानूनी दस्तावेज़", url: "https://www.iaee.eu/hi/kanooni-dastavez-affiliate-website-niyam-gopyata-niti-cookies" }
        ]}
        faqItems={[
          { question: "मेरी वेबसाइट के लिए कौन से आवश्यक कानूनी दस्तावेज़ शामिल हैं?", answer: "नियम और शर्तें, गोपनीयता नीति, एफिलिएट प्रकटीकरण, कुकी नीति, अस्वीकरण और कार्यान्वयन गाइड।" },
          { question: "क्या कानूनी दस्तावेज़ GDPR के अनुरूप हैं?", answer: "हां, सभी आवश्यक कानूनी दस्तावेज़ पूरी तरह से GDPR, CCPA और FTC के अनुरूप हैं अंतर्राष्ट्रीय उपयोग के लिए।" }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="hi" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderHI />
        <main>
          <HeroHI />
          <ValuePropositionHI />
          <ServicesHI />
          <PricingHI />
          <ReviewsHI />
          <FAQHI />
        </main>
        <FooterHI />
      </div>
    </>
  );
};

export default AffiliateHI;
import HeaderHI from "@/components/hi/HeaderHI";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterHI from "@/components/hi/FooterHI";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyHI = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="फ़ोटोग्राफ़ी वेबसाइटों के लिए आवश्यक कानूनी दस्तावेज़: नियम, गोपनीयता, कॉपीराइट और अस्वीकरण"
        description="फ़ोटोग्राफ़रों के लिए आवश्यक कानूनी दस्तावेज़: नियम और शर्तें, गोपनीयता नीति, कॉपीराइट सुरक्षा। मिनटों में तैयार €79 में।"
        canonical="https://www.iaee.eu/hi/photography-kanooni-dastavez-niyam-gopyata-copyright-suraksha"
        lang="hi"
        ogType="product"
        serviceName="फ़ोटोग्राफ़ी कानूनी दस्तावेज़"
        serviceDescription="फ़ोटोग्राफ़रों के लिए आवश्यक कानूनी दस्तावेज़: नियम, गोपनीयता नीति, कॉपीराइट सुरक्षा।"
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "होम", url: "https://www.iaee.eu" },
          { name: "फ़ोटोग्राफ़ी कानूनी दस्तावेज़", url: "https://www.iaee.eu/hi/photography-kanooni-dastavez-niyam-gopyata-copyright-suraksha" }
        ]}
        faqItems={[
          { question: "कौन से दस्तावेज़ शामिल हैं?", answer: "नियम और शर्तें, गोपनीयता नीति, कॉपीराइट सुरक्षा और अनुबंध।" },
          { question: "क्या दस्तावेज़ GDPR अनुपालन हैं?", answer: "हाँ, सभी दस्तावेज़ पूरी तरह GDPR अनुपालन हैं।" }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderHI />
        <PhotographyLanguageSwitcher currentLanguage="hi" />
        <main>
          <HeroPhotographyMulti lang="hi" />
          <ValuePropositionPhotographyMulti lang="hi" />
          <ServicesPhotographyMulti lang="hi" />
          <PhotographyQAMulti lang="hi" />
          <PricingPhotographyMulti lang="hi" />
          <ReviewsPhotographyMulti lang="hi" />
          <FAQPhotographyMulti lang="hi" />
        </main>
        <FooterHI />
      </div>
    </>
  );
};

export default PhotographyHI;

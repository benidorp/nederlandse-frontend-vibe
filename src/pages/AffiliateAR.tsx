import HeaderAR from "@/components/ar/HeaderAR";
import HeroAR from "@/components/ar/HeroAR";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionAR from "@/components/ar/ValuePropositionAR";
import ServicesAR from "@/components/ar/ServicesAR";
import FAQAR from "@/components/ar/FAQAR";
import PricingAR from "@/components/ar/PricingAR";
import ReviewsAR from "@/components/ar/ReviewsAR";
import FooterAR from "@/components/ar/FooterAR";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateAR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="الوثائق القانونية الأساسية للمواقع | الشروط، الخصوصية، ملفات تعريف الارتباط – iaee.eu"
        description="حزمة كاملة من الوثائق القانونية الأساسية لموقعك الإلكتروني: الشروط والأحكام، سياسة الخصوصية، إفصاح التسويق بالعمولة، سياسة ملفات تعريف الارتباط وإخلاء المسؤولية. الامتثال القانوني للمواقع بسهولة. فقط €79 على iaee.eu."
        canonical="https://www.iaee.eu/ar/wathaeq-qanuniya-mawqi-affiliate-shurut-siyasat-khususiya-cookies"
        lang="ar"
        ogType="product"
        serviceName="الوثائق القانونية الأساسية للمواقع"
        serviceDescription="حزمة كاملة من الوثائق القانونية الأساسية للمواقع: الشروط والأحكام، سياسة الخصوصية، إفصاح التسويق بالعمولة، سياسة ملفات تعريف الارتباط وإخلاء المسؤولية."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "الرئيسية", url: "https://www.iaee.eu" },
          { name: "الوثائق القانونية الأساسية للمواقع", url: "https://www.iaee.eu/ar/wathaeq-qanuniya-mawqi-affiliate-shurut-siyasat-khususiya-cookies" }
        ]}
        faqItems={[
          { question: "ما هي الوثائق القانونية الأساسية المتضمنة لموقعي؟", answer: "الشروط والأحكام، سياسة الخصوصية، إفصاح التسويق بالعمولة، سياسة ملفات تعريف الارتباط، إخلاء المسؤولية ودليل التنفيذ." },
          { question: "هل الوثائق القانونية متوافقة مع GDPR؟", answer: "نعم، جميع الوثائق القانونية الأساسية متوافقة تماماً مع GDPR وCCPA وFTC للاستخدام الدولي." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="ar" />
      <HiddenInternalLinks />
      <div className="min-h-screen" dir="rtl">
        <HeaderAR />
        <main>
          <HeroAR />
          <ValuePropositionAR />
          <ServicesAR />
          <PricingAR />
          <ReviewsAR />
          <FAQAR />
        </main>
        <FooterAR />
      </div>
    </>
  );
};

export default AffiliateAR;
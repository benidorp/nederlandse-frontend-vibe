import HeaderAR from "@/components/ar/HeaderAR";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterAR from "@/components/ar/FooterAR";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyAR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="الوثائق القانونية الأساسية لمواقع التصوير الفوتوغرافي: الشروط، الخصوصية، حقوق النشر وإخلاء المسؤولية"
        description="وثائق قانونية أساسية للمصورين: الشروط والأحكام، اتفاقيات التكليف، سياسة الخصوصية، حماية حقوق النشر. جاهزة في دقائق بـ €79."
        canonical="https://www.iaee.eu/ar/taswir-wathaeq-qanuniya-shurut-khususiya-huquq-nashr-ikhla-masuliya"
        lang="ar"
        ogType="product"
        serviceName="وثائق قانونية للتصوير الفوتوغرافي"
        serviceDescription="وثائق قانونية أساسية للمصورين: الشروط، سياسة الخصوصية، حماية حقوق النشر."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "الرئيسية", url: "https://www.iaee.eu" },
          { name: "وثائق قانونية للتصوير", url: "https://www.iaee.eu/ar/taswir-wathaeq-qanuniya-shurut-khususiya-huquq-nashr-ikhla-masuliya" }
        ]}
        faqItems={[
          { question: "ما هي الوثائق المضمنة؟", answer: "الشروط والأحكام، سياسة الخصوصية، حماية حقوق النشر والاتفاقيات." },
          { question: "هل الوثائق متوافقة مع GDPR؟", answer: "نعم، جميع الوثائق متوافقة تماماً مع GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderAR />
        <PhotographyLanguageSwitcher currentLanguage="ar" />
        <main>
          <HeroPhotographyMulti lang="ar" />
          <ValuePropositionPhotographyMulti lang="ar" />
          <ServicesPhotographyMulti lang="ar" />
          <PhotographyQAMulti lang="ar" />
          <PricingPhotographyMulti lang="ar" />
          <ReviewsPhotographyMulti lang="ar" />
          <FAQPhotographyMulti lang="ar" />
        </main>
        <FooterAR />
      </div>
    </>
  );
};

export default PhotographyAR;

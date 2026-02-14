import HeaderEN from "@/components/en/HeaderEN";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographySR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Основни правни документи за фотографске веб странице: Услови, приватност, ауторска права и одрицање"
        description="Основни правни документи за фотографе: услови коришћења, уговори, политика приватности, заштита ауторских права. Готово за минуте за €79."
        canonical="https://www.iaee.eu/sr/fotografija-pravni-dokumenti-uslovi-privatnost-autorska-prava-odricanje"
        lang="sr"
        ogType="product"
        serviceName="Фотографија Правни Документи"
        serviceDescription="Основни правни документи за фотографе: Услови, Приватност, Заштита ауторских права."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Почетна", url: "https://www.iaee.eu" },
          { name: "Фотографија Правни Документи", url: "https://www.iaee.eu/sr/fotografija-pravni-dokumenti-uslovi-privatnost-autorska-prava-odricanje" }
        ]}
        faqItems={[
          { question: "Који документи су укључени?", answer: "Услови коришћења, политика приватности, заштита ауторских права и уговори." },
          { question: "Да ли су документи усклађени са GDPR?", answer: "Да, сви документи су потпуно усклађени са GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="sr" />
        <main>
          <HeroPhotographyMulti lang="sr" />
          <ValuePropositionPhotographyMulti lang="sr" />
          <ServicesPhotographyMulti lang="sr" />
          <PhotographyQAMulti lang="sr" />
          <PricingPhotographyMulti lang="sr" />
          <ReviewsPhotographyMulti lang="sr" />
          <FAQPhotographyMulti lang="sr" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographySR;

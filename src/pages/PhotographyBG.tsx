import HeaderBG from "@/components/bg/HeaderBG";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterBG from "@/components/bg/FooterBG";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyBG = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Основни правни документи за фотографски уебсайтове: Общи условия, поверителност, авторски права и отказ от отговорност"
        description="Основни правни документи за фотографи: общи условия, договори, политика за поверителност, защита на авторски права. Готови за минути за €79."
        canonical="https://www.iaee.eu/bg/fotografiya-pravni-dokumenti-obshti-usloviya-poveritelnost-avtorski-prava"
        lang="bg"
        ogType="product"
        serviceName="Фотография Правни Документи"
        serviceDescription="Основни правни документи за фотографи: Общи условия, Политика за поверителност, Защита на авторски права."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Начало", url: "https://www.iaee.eu" },
          { name: "Фотография Правни Документи", url: "https://www.iaee.eu/bg/fotografiya-pravni-dokumenti-obshti-usloviya-poveritelnost-avtorski-prava" }
        ]}
        faqItems={[
          { question: "Какви документи са включени?", answer: "Общи условия, политика за поверителност, защита на авторски права и договори." },
          { question: "Документите съвместими ли са с GDPR?", answer: "Да, всички документи са напълно съвместими с GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderBG />
        <PhotographyLanguageSwitcher currentLanguage="bg" />
        <main>
          <HeroPhotographyMulti lang="bg" />
          <ValuePropositionPhotographyMulti lang="bg" />
          <ServicesPhotographyMulti lang="bg" />
          <PhotographyQAMulti lang="bg" />
          <PricingPhotographyMulti lang="bg" />
          <ReviewsPhotographyMulti lang="bg" />
          <FAQPhotographyMulti lang="bg" />
        </main>
        <FooterBG />
      </div>
    </>
  );
};

export default PhotographyBG;

import HeaderRU from "@/components/ru/HeaderRU";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterRU from "@/components/ru/FooterRU";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyRU = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Основные юридические документы для фотосайтов: Условия, конфиденциальность, авторские права и отказ от ответственности"
        description="Основные юридические документы для фотографов: условия, договоры, политика конфиденциальности, защита авторских прав. Готовы за минуты за €79."
        canonical="https://www.iaee.eu/ru/fotografiya-yuridicheskie-dokumenty-usloviya-konfidencialnost-avtorskie-prava"
        lang="ru"
        ogType="product"
        serviceName="Фотография Юридические Документы"
        serviceDescription="Основные юридические документы для фотографов: Условия, Политика конфиденциальности, Защита авторских прав."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Главная", url: "https://www.iaee.eu" },
          { name: "Фотография Юридические Документы", url: "https://www.iaee.eu/ru/fotografiya-yuridicheskie-dokumenty-usloviya-konfidencialnost-avtorskie-prava" }
        ]}
        faqItems={[
          { question: "Какие документы включены?", answer: "Условия, политика конфиденциальности, защита авторских прав и договоры." },
          { question: "Соответствуют ли документы GDPR?", answer: "Да, все документы полностью соответствуют GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderRU />
        <PhotographyLanguageSwitcher currentLanguage="ru" />
        <main>
          <HeroPhotographyMulti lang="ru" />
          <ValuePropositionPhotographyMulti lang="ru" />
          <ServicesPhotographyMulti lang="ru" />
          <PhotographyQAMulti lang="ru" />
          <PricingPhotographyMulti lang="ru" />
          <ReviewsPhotographyMulti lang="ru" />
          <FAQPhotographyMulti lang="ru" />
        </main>
        <FooterRU />
      </div>
    </>
  );
};

export default PhotographyRU;

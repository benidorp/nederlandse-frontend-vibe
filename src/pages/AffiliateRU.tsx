import HeaderEN from "@/components/en/HeaderEN";
import HeroEN from "@/components/en/HeroEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionEN from "@/components/en/ValuePropositionEN";
import ServicesEN from "@/components/en/ServicesEN";
import FAQEN from "@/components/en/FAQEN";
import PricingEN from "@/components/en/PricingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateRU = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Основные Юридические Документы для Сайтов | Условия, Конфиденциальность, Cookies – iaee.eu"
        description="Полный пакет основных юридических документов для вашего сайта: условия использования, политика конфиденциальности, раскрытие партнёрских отношений, политика cookies и отказ от ответственности. Юридическое соответствие для сайтов упрощено. Только €79 на iaee.eu."
        canonical="https://www.iaee.eu/ru/yuridicheskie-dokumenty-affiliate-sait-usloviya-politika-konfidencialnosti-cookies"
        lang="ru"
        ogType="product"
        serviceName="Основные Юридические Документы для Сайтов"
        serviceDescription="Полный пакет основных юридических документов для сайтов: условия использования, политика конфиденциальности, раскрытие партнёрских отношений, политика cookies и отказ от ответственности."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Главная", url: "https://www.iaee.eu" },
          { name: "Основные Юридические Документы для Сайтов", url: "https://www.iaee.eu/ru/yuridicheskie-dokumenty-affiliate-sait-usloviya-politika-konfidencialnosti-cookies" }
        ]}
        faqItems={[
          { question: "Какие основные юридические документы включены для моего сайта?", answer: "Условия использования, политика конфиденциальности, раскрытие партнёрских отношений, политика cookies, отказ от ответственности и руководство по внедрению." },
          { question: "Соответствуют ли юридические документы GDPR?", answer: "Да, все основные юридические документы полностью соответствуют GDPR, CCPA и FTC для международного использования." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="ru" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEN />
          <ValuePropositionEN />
          <ServicesEN />
          <PricingEN />
          <ReviewsEN />
          <FAQEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default AffiliateRU;
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

const AffiliateBG = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Основни Правни Документи за Уебсайтове | Условия, Поверителност, Бисквитки – iaee.eu"
        description="Пълен пакет от основни правни документи за вашия уебсайт: общи условия, политика за поверителност, разкриване на афилиация, политика за бисквитки и отказ от отговорност. Правно съответствие за уебсайтове опростено. Само €79 на iaee.eu."
        canonical="https://www.iaee.eu/bg/pravni-dokumenti-affiliate-sait-usloviya-politika-poveritelnost-biskvitki"
        lang="bg"
        ogType="product"
        serviceName="Основни Правни Документи за Уебсайтове"
        serviceDescription="Пълен пакет от основни правни документи за уебсайтове: общи условия, политика за поверителност, разкриване на афилиация, политика за бисквитки и отказ от отговорност."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Начало", url: "https://www.iaee.eu" },
          { name: "Основни Правни Документи за Уебсайтове", url: "https://www.iaee.eu/bg/pravni-dokumenti-affiliate-sait-usloviya-politika-poveritelnost-biskvitki" }
        ]}
        faqItems={[
          { question: "Какви основни правни документи са включени за моя уебсайт?", answer: "Общи условия, политика за поверителност, разкриване на афилиация, политика за бисквитки, отказ от отговорност и ръководство за внедряване." },
          { question: "Правните документи съвместими ли са с GDPR?", answer: "Да, всички основни правни документи са напълно съвместими с GDPR, CCPA и FTC за международна употреба." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="bg" />
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

export default AffiliateBG;
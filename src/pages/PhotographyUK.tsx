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

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyUK = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Основні юридичні документи для фотосайтів: Умови, конфіденційність, авторські права та відмова від відповідальності"
        description="Основні юридичні документи для фотографів: умови використання, договори, політика конфіденційності, захист авторських прав. Готово за хвилини за €79."
        canonical="https://www.iaee.eu/uk/fotografiya-yurydychni-dokumenty-umovy-konfidentsijnist-avtorski-prava"
        lang="uk"
        ogType="product"
        serviceName="Фотографія Юридичні Документи"
        serviceDescription="Основні юридичні документи для фотографів: Умови, Конфіденційність, Захист авторських прав."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Головна", url: "https://www.iaee.eu" },
          { name: "Фотографія Юридичні Документи", url: "https://www.iaee.eu/uk/fotografiya-yurydychni-dokumenty-umovy-konfidentsijnist-avtorski-prava" }
        ]}
        faqItems={[
          { question: "Які документи включені?", answer: "Умови, політика конфіденційності, захист авторських прав та договори." },
          { question: "Чи відповідають документи GDPR?", answer: "Так, усі документи повністю відповідають GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="uk" />
        <main>
          <HeroPhotographyMulti lang="uk" />
          <ValuePropositionPhotographyMulti lang="uk" />
          <ServicesPhotographyMulti lang="uk" />
          <PhotographyQAMulti lang="uk" />
          <PricingPhotographyMulti lang="uk" />
          <ReviewsPhotographyMulti lang="uk" />
          <FAQPhotographyMulti lang="uk" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographyUK;

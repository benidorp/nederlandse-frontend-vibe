import HeaderNO from "@/components/no/HeaderNO";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterNO from "@/components/no/FooterNO";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyNO = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Viktige juridiske dokumenter for fotografi-nettsteder: Vilkår, personvernregler, opphavsrettsbeskyttelse og ansvarsfraskrivelse"
        description="Viktige juridiske dokumenter for fotografer: vilkår, oppdragsavtaler, personvernregler, ansvarsfraskrivelse, opphavsrettsbeskyttelse. Klar på minutter for €79."
        canonical="https://www.iaee.eu/no/fotografi-juridiske-dokumenter-vilkaar-personvern-opphavsrett-ansvarsfraskrivelse"
        lang="no"
        ogType="product"
        serviceName="Fotografi Juridiske Dokumenter"
        serviceDescription="Viktige juridiske dokumenter for fotografer: Vilkår, Personvernregler, Opphavsrettsbeskyttelse og Modellrelease."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Hjem", url: "https://www.iaee.eu" },
          { name: "Fotografi Juridiske Dokumenter", url: "https://www.iaee.eu/no/fotografi-juridiske-dokumenter-vilkaar-personvern-opphavsrett-ansvarsfraskrivelse" }
        ]}
        faqItems={[
          { question: "Hvilke dokumenter er inkludert?", answer: "Vilkår, personvernregler, opphavsrettsbeskyttelse, modellrelease og oppdragsavtaler." },
          { question: "Er dokumentene GDPR-kompatible?", answer: "Ja, alle dokumenter er fullt GDPR-kompatible." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderNO />
        <PhotographyLanguageSwitcher currentLanguage="no" />
        <main>
          <HeroPhotographyMulti lang="no" />
          <ValuePropositionPhotographyMulti lang="no" />
          <ServicesPhotographyMulti lang="no" />
          <PhotographyQAMulti lang="no" />
          <PricingPhotographyMulti lang="no" />
          <ReviewsPhotographyMulti lang="no" />
          <FAQPhotographyMulti lang="no" />
        </main>
        <FooterNO />
      </div>
    </>
  );
};

export default PhotographyNO;

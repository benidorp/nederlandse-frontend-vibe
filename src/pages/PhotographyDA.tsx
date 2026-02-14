import HeaderDA from "@/components/da/HeaderDA";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterDA from "@/components/da/FooterDA";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyDA = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Vigtige juridiske dokumenter til fotografiwebsteder: Vilkår, privatlivspolitik, ophavsretsbeskyttelse og ansvarsfraskrivelse"
        description="Vigtige juridiske dokumenter til fotografer: vilkår, opgaveaftaler, privatlivspolitik, ansvarsfraskrivelse, ophavsretsbeskyttelse. Klar på minutter for €79."
        canonical="https://www.iaee.eu/da/fotografi-juridiske-dokumenter-vilkaar-privatlivspolitik-ophavsret-ansvarsfraskrivelse"
        lang="da"
        ogType="product"
        serviceName="Fotografi Juridiske Dokumenter"
        serviceDescription="Vigtige juridiske dokumenter til fotografer: Vilkår, Privatlivspolitik, Ophavsretsbeskyttelse og Modelrelease."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Hjem", url: "https://www.iaee.eu" },
          { name: "Fotografi Juridiske Dokumenter", url: "https://www.iaee.eu/da/fotografi-juridiske-dokumenter-vilkaar-privatlivspolitik-ophavsret-ansvarsfraskrivelse" }
        ]}
        faqItems={[
          { question: "Hvilke dokumenter er inkluderet?", answer: "Vilkår, privatlivspolitik, ophavsretsbeskyttelse, modelrelease og opgaveaftaler." },
          { question: "Er dokumenterne GDPR-kompatible?", answer: "Ja, alle dokumenter er fuldt GDPR-kompatible." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderDA />
        <PhotographyLanguageSwitcher currentLanguage="da" />
        <main>
          <HeroPhotographyMulti lang="da" />
          <ValuePropositionPhotographyMulti lang="da" />
          <ServicesPhotographyMulti lang="da" />
          <PhotographyQAMulti lang="da" />
          <PricingPhotographyMulti lang="da" />
          <ReviewsPhotographyMulti lang="da" />
          <FAQPhotographyMulti lang="da" />
        </main>
        <FooterDA />
      </div>
    </>
  );
};

export default PhotographyDA;

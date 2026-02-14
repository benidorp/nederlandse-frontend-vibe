import HeaderNO from "@/components/no/HeaderNO";
import HeroNO from "@/components/no/HeroNO";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionNO from "@/components/no/ValuePropositionNO";
import ServicesNO from "@/components/no/ServicesNO";
import FAQNO from "@/components/no/FAQNO";
import PricingNO from "@/components/no/PricingNO";
import ReviewsNO from "@/components/no/ReviewsNO";
import FooterNO from "@/components/no/FooterNO";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateNO = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essensielle Juridiske Dokumenter for Nettsteder | Vilkår, Personvern, Cookies – iaee.eu"
        description="Komplett pakke med essensielle juridiske dokumenter for ditt nettsted: vilkår og betingelser, personvernregler, affiliate-avsløring, informasjonskapsler og ansvarsfraskrivelse. Juridisk samsvar for nettsteder forenklet. Kun €79 på iaee.eu."
        canonical="https://www.iaee.eu/no/juridiske-dokumenter-affiliate-nettsted-vilkaar-personvern-cookies"
        lang="no"
        ogType="product"
        serviceName="Essensielle Juridiske Dokumenter for Nettsteder"
        serviceDescription="Komplett pakke med essensielle juridiske dokumenter for nettsteder: vilkår og betingelser, personvernregler, affiliate-avsløring, informasjonskapsler og ansvarsfraskrivelse."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Hjem", url: "https://www.iaee.eu" },
          { name: "Essensielle Juridiske Dokumenter for Nettsteder", url: "https://www.iaee.eu/no/juridiske-dokumenter-affiliate-nettsted-vilkaar-personvern-cookies" }
        ]}
        faqItems={[
          { question: "Hvilke essensielle juridiske dokumenter er inkludert for mitt nettsted?", answer: "Vilkår og betingelser, personvernregler, affiliate-avsløring, informasjonskapsler, ansvarsfraskrivelse og implementeringsguide." },
          { question: "Er de juridiske dokumentene GDPR-kompatible?", answer: "Ja, alle essensielle juridiske dokumenter er fullt GDPR-, CCPA- og FTC-kompatible for internasjonal bruk." }
        ]}
      />
      
      <LegalDocsLanguageSwitcher currentLang="no" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderNO />
        <main>
          <HeroNO />
          <ValuePropositionNO />
          <ServicesNO />
          <PricingNO />
          <ReviewsNO />
          <FAQNO />
        </main>
        <FooterNO />
      </div>
    </>
  );
};

export default AffiliateNO;

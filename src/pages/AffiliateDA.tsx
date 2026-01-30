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
import SEOIntroSection from "@/components/legal-docs/SEOIntroSection";
import { Helmet } from "react-helmet";

const AffiliateDA = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Væsentlige Juridiske Dokumenter til Hjemmesider | Vilkår, Privatlivspolitik, Cookies – iaee.eu"
        description="Komplet pakke med væsentlige juridiske dokumenter til din hjemmeside: vilkår og betingelser, privatlivspolitik, affiliate-oplysning, cookiepolitik og ansvarsfraskrivelse. Juridisk overholdelse for hjemmesider forenklet. Kun €79 på iaee.eu."
        canonical="https://www.iaee.eu/da/juridiske-dokumenter-affiliate-website-vilkaar-privatlivspolitik-cookies"
        lang="da"
        ogType="product"
        serviceName="Væsentlige Juridiske Dokumenter til Hjemmesider"
        serviceDescription="Komplet pakke med væsentlige juridiske dokumenter til hjemmesider: vilkår og betingelser, privatlivspolitik, affiliate-oplysning, cookiepolitik og ansvarsfraskrivelse."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Hjem", url: "https://www.iaee.eu" },
          { name: "Væsentlige Juridiske Dokumenter til Hjemmesider", url: "https://www.iaee.eu/da/juridiske-dokumenter-affiliate-website-vilkaar-privatlivspolitik-cookies" }
        ]}
        faqItems={[
          { question: "Hvilke væsentlige juridiske dokumenter er inkluderet til min hjemmeside?", answer: "Vilkår og betingelser, privatlivspolitik, affiliate-oplysning, cookiepolitik, ansvarsfraskrivelse og implementeringsguide." },
          { question: "Er de juridiske dokumenter GDPR-kompatible?", answer: "Ja, alle væsentlige juridiske dokumenter er fuldt GDPR-, CCPA- og FTC-kompatible til international brug." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="da" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="da" />
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

export default AffiliateDA;

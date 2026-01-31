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

const AffiliateSV = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Väsentliga Juridiska Dokument för Webbplatser | Villkor, Integritetspolicy, Cookies – iaee.eu"
        description="Komplett paket med väsentliga juridiska dokument för din webbplats: villkor, integritetspolicy, affiliate-avslöjande, cookiepolicy och ansvarsfriskrivning. Juridisk efterlevnad för webbplatser förenklad. Endast €79 på iaee.eu."
        canonical="https://www.iaee.eu/sv/juridiska-dokument-affiliate-webbplats-villkor-integritetspolicy-cookies"
        lang="sv"
        ogType="product"
        serviceName="Väsentliga Juridiska Dokument för Webbplatser"
        serviceDescription="Komplett paket med väsentliga juridiska dokument för webbplatser: villkor, integritetspolicy, affiliate-avslöjande, cookiepolicy och ansvarsfriskrivning."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Hem", url: "https://www.iaee.eu" },
          { name: "Väsentliga Juridiska Dokument för Webbplatser", url: "https://www.iaee.eu/sv/juridiska-dokument-affiliate-webbplats-villkor-integritetspolicy-cookies" }
        ]}
        faqItems={[
          { question: "Vilka väsentliga juridiska dokument ingår för min webbplats?", answer: "Villkor, integritetspolicy, affiliate-avslöjande, cookiepolicy, ansvarsfriskrivning och implementeringsguide." },
          { question: "Är de juridiska dokumenten GDPR-kompatibla?", answer: "Ja, alla väsentliga juridiska dokument är helt GDPR-, CCPA- och FTC-kompatibla för internationell användning." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="sv" />
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

export default AffiliateSV;
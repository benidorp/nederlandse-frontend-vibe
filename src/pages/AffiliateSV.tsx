import HeaderSV from "@/components/sv/HeaderSV";
import HeroSV from "@/components/sv/HeroSV";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionSV from "@/components/sv/ValuePropositionSV";
import ServicesSV from "@/components/sv/ServicesSV";
import FAQSV from "@/components/sv/FAQSV";
import PricingSV from "@/components/sv/PricingSV";
import ReviewsSV from "@/components/sv/ReviewsSV";
import FooterSV from "@/components/sv/FooterSV";
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
        <HeaderSV />
        <main>
          <HeroSV />
          <ValuePropositionSV />
          <ServicesSV />
          <PricingSV />
          <ReviewsSV />
          <FAQSV />
        </main>
        <FooterSV />
      </div>
    </>
  );
};

export default AffiliateSV;

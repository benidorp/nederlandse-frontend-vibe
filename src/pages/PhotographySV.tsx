import HeaderSV from "@/components/sv/HeaderSV";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterSV from "@/components/sv/FooterSV";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographySV = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Väsentliga juridiska dokument för fotografiwebbplatser: Villkor, integritetspolicy, upphovsrättsskydd och ansvarsfriskrivning"
        description="Väsentliga juridiska dokument för fotografer: villkor, uppdragsavtal, integritetspolicy, ansvarsfriskrivning, upphovsrättsskydd. Klart på minuter för €79."
        canonical="https://www.iaee.eu/sv/fotografi-juridiska-dokument-villkor-integritetspolicy-upphovsratt-ansvarsfriskrivning"
        lang="sv"
        ogType="product"
        serviceName="Fotografering Juridiska Dokument"
        serviceDescription="Väsentliga juridiska dokument för fotografer: Villkor, Integritetspolicy, Upphovsrättsskydd och Modellrelease."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Hem", url: "https://www.iaee.eu" },
          { name: "Fotografering Juridiska Dokument", url: "https://www.iaee.eu/sv/fotografi-juridiska-dokument-villkor-integritetspolicy-upphovsratt-ansvarsfriskrivning" }
        ]}
        faqItems={[
          { question: "Vilka dokument ingår?", answer: "Villkor, integritetspolicy, upphovsrättsskydd, modellrelease och uppdragsavtal." },
          { question: "Är dokumenten GDPR-kompatibla?", answer: "Ja, alla dokument är helt GDPR-kompatibla." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderSV />
        <PhotographyLanguageSwitcher currentLanguage="sv" />
        <main>
          <HeroPhotographyMulti lang="sv" />
          <ValuePropositionPhotographyMulti lang="sv" />
          <ServicesPhotographyMulti lang="sv" />
          <PhotographyQAMulti lang="sv" />
          <PricingPhotographyMulti lang="sv" />
          <ReviewsPhotographyMulti lang="sv" />
          <FAQPhotographyMulti lang="sv" />
        </main>
        <FooterSV />
      </div>
    </>
  );
};

export default PhotographySV;

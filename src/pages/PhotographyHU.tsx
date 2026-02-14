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
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyHU = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Alapvető jogi dokumentumok fotós weboldalakhoz: Feltételek, adatvédelem, szerzői jog és felelősségkizárás"
        description="Alapvető jogi dokumentumok fotósoknak: általános feltételek, szerződések, adatvédelmi irányelvek, szerzői jogi védelem. Percek alatt kész, €79."
        canonical="https://www.iaee.eu/hu/fotografia-jogi-dokumentumok-feltetelek-adatvedelem-szerzoi-jog-felelossegkizaras"
        lang="hu"
        ogType="product"
        serviceName="Fotográfia Jogi Dokumentumok"
        serviceDescription="Alapvető jogi dokumentumok fotósoknak: Feltételek, Adatvédelem, Szerzői jogi védelem."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Főoldal", url: "https://www.iaee.eu" },
          { name: "Fotográfia Jogi Dokumentumok", url: "https://www.iaee.eu/hu/fotografia-jogi-dokumentumok-feltetelek-adatvedelem-szerzoi-jog-felelossegkizaras" }
        ]}
        faqItems={[
          { question: "Milyen dokumentumok tartoznak bele?", answer: "Általános feltételek, adatvédelmi irányelvek, szerzői jogi védelem és szerződések." },
          { question: "GDPR-kompatibilisek a dokumentumok?", answer: "Igen, minden dokumentum teljes mértékben GDPR-kompatibilis." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="hu" />
        <main>
          <HeroPhotographyMulti lang="hu" />
          <ValuePropositionPhotographyMulti lang="hu" />
          <ServicesPhotographyMulti lang="hu" />
          <PhotographyQAMulti lang="hu" />
          <PricingPhotographyMulti lang="hu" />
          <ReviewsPhotographyMulti lang="hu" />
          <FAQPhotographyMulti lang="hu" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographyHU;

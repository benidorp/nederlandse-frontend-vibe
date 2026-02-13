import HeaderDE from "@/components/de/HeaderDE";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyDE from "@/components/photography-de/HeroPhotographyDE";
import ValuePropositionPhotographyDE from "@/components/photography-de/ValuePropositionPhotographyDE";
import ServicesPhotographyDE from "@/components/photography-de/ServicesPhotographyDE";
import PhotographyQADE from "@/components/photography-de/PhotographyQADE";
import PricingPhotographyDE from "@/components/photography-de/PricingPhotographyDE";
import ReviewsPhotographyDE from "@/components/photography-de/ReviewsPhotographyDE";
import FAQPhotographyDE from "@/components/photography-de/FAQPhotographyDE";
import FooterDE from "@/components/de/FooterDE";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyDE = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Wesentliche Rechtsdokumente für Fotografie-Websites: AGB, Datenschutzerklärung, Urheberrechtsschutz & Haftungsausschluss"
        description="Wesentliche Rechtsdokumente für Fotografen: AGB, Auftragsvereinbarungen, Datenschutzerklärung, Haftungsausschluss, Verzichtserklärung und Urheberrechtsschutz. In wenigen Minuten fertig für €79."
        canonical="https://www.iaee.eu/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss"
        lang="de"
        ogType="product"
        serviceName="Fotografie Rechtsdokumente"
        serviceDescription="Wesentliche Rechtsdokumente für Fotografen: AGB, Datenschutzerklärung, Urheberrechtsschutz und Model-Release."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Startseite", url: "https://www.iaee.eu" },
          { name: "Fotografie Rechtsdokumente", url: "https://www.iaee.eu/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss" }
        ]}
        faqItems={[
          { question: "Welche Dokumente sind enthalten?", answer: "AGB, Datenschutzerklärung, Urheberrechtsschutz, Model-Release und Auftragsvereinbarungen." },
          { question: "Sind die Dokumente DSGVO-konform?", answer: "Ja, alle Dokumente sind vollständig DSGVO-konform." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderDE />
        <main>
          <HeroPhotographyDE />
          <ValuePropositionPhotographyDE />
          <ServicesPhotographyDE />
          <PhotographyQADE />
          <PricingPhotographyDE />
          <ReviewsPhotographyDE />
          <FAQPhotographyDE />
        </main>
        <FooterDE />
      </div>
    </>
  );
};

export default PhotographyDE;

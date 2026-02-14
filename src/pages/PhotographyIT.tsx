import HeaderIT from "@/components/it/HeaderIT";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyIT from "@/components/photography-it/HeroPhotographyIT";
import ValuePropositionPhotographyIT from "@/components/photography-it/ValuePropositionPhotographyIT";
import ServicesPhotographyIT from "@/components/photography-it/ServicesPhotographyIT";
import PhotographyQAIT from "@/components/photography-it/PhotographyQAIT";
import PricingPhotographyIT from "@/components/photography-it/PricingPhotographyIT";
import ReviewsPhotographyIT from "@/components/photography-it/ReviewsPhotographyIT";
import FAQPhotographyIT from "@/components/photography-it/FAQPhotographyIT";
import FooterIT from "@/components/it/FooterIT";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyIT = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documenti Legali Essenziali per Siti di Fotografia: Termini, Privacy, Diritto d'Autore e Disclaimer"
        description="Documenti legali essenziali per fotografi: termini e condizioni, contratti di incarico, informativa sulla privacy, disclaimer, liberatoria e protezione del diritto d'autore. Pronto in pochi minuti per €79."
        canonical="https://www.iaee.eu/it/fotografia-documenti-legali-termini-condizioni-privacy-diritto-autore-disclaimer"
        lang="it"
        ogType="product"
        serviceName="Documenti Legali Fotografia"
        serviceDescription="Documenti legali essenziali per fotografi: termini e condizioni, informativa sulla privacy, protezione del diritto d'autore e liberatoria di modello."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Documenti Legali Fotografia", url: "https://www.iaee.eu/it/fotografia-documenti-legali-termini-condizioni-privacy-diritto-autore-disclaimer" }
        ]}
        faqItems={[
          { question: "Quali documenti sono inclusi?", answer: "Termini e condizioni, informativa sulla privacy, protezione del diritto d'autore, liberatoria di modello e contratti di incarico." },
          { question: "I documenti sono conformi al GDPR?", answer: "Sì, tutti i documenti sono pienamente conformi al GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderIT />
        <PhotographyLanguageSwitcher currentLanguage="it" />
        <main>
          <HeroPhotographyIT />
          <ValuePropositionPhotographyIT />
          <ServicesPhotographyIT />
          <PhotographyQAIT />
          <PricingPhotographyIT />
          <ReviewsPhotographyIT />
          <FAQPhotographyIT />
        </main>
        <FooterIT />
      </div>
    </>
  );
};

export default PhotographyIT;

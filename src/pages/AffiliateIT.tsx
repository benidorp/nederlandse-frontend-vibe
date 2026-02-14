import HeaderIT from "@/components/it/HeaderIT";
import HeroIT from "@/components/it/HeroIT";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionIT from "@/components/it/ValuePropositionIT";
import ServicesIT from "@/components/it/ServicesIT";
import FAQIT from "@/components/it/FAQIT";
import PricingIT from "@/components/it/PricingIT";
import ReviewsIT from "@/components/it/ReviewsIT";
import FooterIT from "@/components/it/FooterIT";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateIT = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documenti Legali Essenziali per Siti Web | Termini, Privacy, Cookie – iaee.eu"
        description="Pacchetto completo di documenti legali essenziali per il tuo sito web: termini e condizioni, informativa sulla privacy, divulgazione affiliazione, cookie policy e disclaimer. Conformità legale per siti web semplificata. Solo €79 su iaee.eu."
        canonical="https://www.iaee.eu/it/documenti-legali-essenziali-sito-affiliazione-termini-privacy-cookie"
        lang="it"
        ogType="product"
        serviceName="Documenti Legali Essenziali per Siti Web"
        serviceDescription="Pacchetto completo di documenti legali essenziali per siti web: termini e condizioni, informativa sulla privacy, divulgazione affiliazione, cookie policy e disclaimer."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Documenti Legali Essenziali per Siti Web", url: "https://www.iaee.eu/it/documenti-legali-essenziali-sito-affiliazione-termini-privacy-cookie" }
        ]}
        faqItems={[
          { question: "Quali documenti legali essenziali sono inclusi per il mio sito web?", answer: "Termini e condizioni, informativa sulla privacy, divulgazione affiliazione, cookie policy, disclaimer e guida all'implementazione." },
          { question: "I documenti legali sono conformi al GDPR?", answer: "Sì, tutti i documenti legali essenziali sono pienamente conformi a GDPR, CCPA e FTC per uso internazionale." }
        ]}
      />
      
      <LegalDocsLanguageSwitcher currentLang="it" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderIT />
        <main>
          <HeroIT />
          <ValuePropositionIT />
          <ServicesIT />
          <PricingIT />
          <ReviewsIT />
          <FAQIT />
        </main>
        <FooterIT />
      </div>
    </>
  );
};

export default AffiliateIT;
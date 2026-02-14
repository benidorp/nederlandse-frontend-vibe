import HeaderFR from "@/components/fr/HeaderFR";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyFR from "@/components/photography-fr/HeroPhotographyFR";
import ValuePropositionPhotographyFR from "@/components/photography-fr/ValuePropositionPhotographyFR";
import ServicesPhotographyFR from "@/components/photography-fr/ServicesPhotographyFR";
import PhotographyQAFR from "@/components/photography-fr/PhotographyQAFR";
import PricingPhotographyFR from "@/components/photography-fr/PricingPhotographyFR";
import ReviewsPhotographyFR from "@/components/photography-fr/ReviewsPhotographyFR";
import FAQPhotographyFR from "@/components/photography-fr/FAQPhotographyFR";
import FooterFR from "@/components/fr/FooterFR";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyFR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documents Juridiques Essentiels pour Sites de Photographie : CGV, Politique de Confidentialité, Droit d'Auteur & Clause"
        description="Documents juridiques essentiels pour photographes : CGV, contrats de mission, politique de confidentialité, clause de non-responsabilité, décharge et protection du droit d'auteur. Prêt en quelques minutes pour €79."
        canonical="https://www.iaee.eu/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause"
        lang="fr"
        ogType="product"
        serviceName="Documents Juridiques Photographie"
        serviceDescription="Documents juridiques essentiels pour photographes : CGV, politique de confidentialité, protection du droit d'auteur et décharge de modèle."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Accueil", url: "https://www.iaee.eu" },
          { name: "Documents Juridiques Photographie", url: "https://www.iaee.eu/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause" }
        ]}
        faqItems={[
          { question: "Quels documents sont inclus ?", answer: "CGV, politique de confidentialité, protection du droit d'auteur, décharge de modèle et contrats de mission." },
          { question: "Les documents sont-ils conformes au RGPD ?", answer: "Oui, tous les documents sont entièrement conformes au RGPD." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderFR />
        <PhotographyLanguageSwitcher currentLanguage="fr" />
        <main>
          <HeroPhotographyFR />
          <ValuePropositionPhotographyFR />
          <ServicesPhotographyFR />
          <PhotographyQAFR />
          <PricingPhotographyFR />
          <ReviewsPhotographyFR />
          <FAQPhotographyFR />
        </main>
        <FooterFR />
      </div>
    </>
  );
};

export default PhotographyFR;

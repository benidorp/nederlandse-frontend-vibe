import HeaderEN from "@/components/en/HeaderEN";
import HeroFR from "@/components/fr/HeroFR";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionFR from "@/components/fr/ValuePropositionFR";
import ServicesFR from "@/components/fr/ServicesFR";
import BlogPostsFR from "@/components/fr/BlogPostsFR";
import FAQFR from "@/components/fr/FAQFR";
import PricingEN from "@/components/en/PricingEN";
import ReviewsFR from "@/components/fr/ReviewsFR";
import FooterFR from "@/components/fr/FooterFR";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateFR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documents Juridiques Essentiels pour Sites Web | CGV, Politique de Confidentialité, Cookies – iaee.eu"
        description="Pack complet de documents juridiques essentiels pour votre site web: CGV, politique de confidentialité, divulgation d'affiliation, politique de cookies et mentions légales. Conformité juridique pour sites web simplifiée. Pour seulement €79 sur iaee.eu."
        canonical="https://www.iaee.eu/fr/documents-juridiques-essentiels-site-affiliation-conditions-politique-confidentialite-mentions-legales"
        lang="fr"
        ogType="product"
        serviceName="Documents Juridiques Essentiels pour Sites Web"
        serviceDescription="Pack complet de documents juridiques essentiels pour sites web: CGV, politique de confidentialité, divulgation d'affiliation, politique de cookies et mentions légales."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Accueil", url: "https://www.iaee.eu" },
          { name: "Documents Juridiques Essentiels pour Sites Web", url: "https://www.iaee.eu/fr/documents-juridiques-essentiels-site-affiliation-conditions-politique-confidentialite-mentions-legales" }
        ]}
        faqItems={[
          { question: "Quels documents juridiques essentiels sont inclus pour mon site web?", answer: "CGV, politique de confidentialité, divulgation d'affiliation, politique de cookies, mentions légales et guide d'implémentation." },
          { question: "Les documents juridiques sont-ils conformes au RGPD?", answer: "Oui, tous les documents juridiques essentiels sont entièrement conformes au RGPD, CCPA et FTC pour une utilisation internationale." }
        ]}
      />
      
      <LegalDocsLanguageSwitcher currentLang="fr" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroFR />
          <ValuePropositionFR />
          <ServicesFR />
          <BlogPostsFR />
          <PricingEN />
          <ReviewsFR />
          <FAQFR />
        </main>
        <FooterFR />
      </div>
    </>
  );
};

export default AffiliateFR;

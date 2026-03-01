import HeaderNonprofitFR from "@/components/nonprofit-fr/HeaderNonprofitFR";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import NonprofitLanguageSwitcher from "@/components/nonprofit-de/NonprofitLanguageSwitcher";
import HeroNonprofitFR from "@/components/nonprofit-fr/HeroNonprofitFR";
import ValuePropositionNonprofitFR from "@/components/nonprofit-fr/ValuePropositionNonprofitFR";
import ServicesNonprofitFR from "@/components/nonprofit-fr/ServicesNonprofitFR";
import PricingNonprofitFR from "@/components/nonprofit-fr/PricingNonprofitFR";
import ReviewsNonprofitFR from "@/components/nonprofit-fr/ReviewsNonprofitFR";
import FAQNonprofitFR from "@/components/nonprofit-fr/FAQNonprofitFR";
import FooterNonprofitFR from "@/components/nonprofit-fr/FooterNonprofitFR";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const NonprofitFR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documents juridiques essentiels pour les sites web d'associations et d'ONG : Conditions de don, Politique de confidentialité, Accords de bénévolat & Conformité RGPD"
        description="Protection juridique complète pour les associations. Politique de confidentialité conforme au RGPD, conditions de don, accords de bénévolat et déclaration de transparence. Protégez votre mission dès aujourd'hui pour 79 €."
        canonical="https://www.iaee.eu/fr/association-documents-juridiques-conditions-don-politique-confidentialite"
        lang="fr"
        ogType="product"
        serviceName="Documents juridiques pour associations"
        serviceDescription="Protection juridique complète pour les associations, y compris les conditions de don, la politique de confidentialité et les accords de bénévolat."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Accueil", url: "https://www.iaee.eu" },
          { name: "Documents juridiques pour associations", url: "https://www.iaee.eu/fr/association-documents-juridiques-conditions-don-politique-confidentialite" }
        ]}
        faqItems={[
          { question: "Quels documents sont inclus ?", answer: "Conditions de don, politique de confidentialité, accords de bénévolat et déclaration de transparence des dons." },
          { question: "Les documents sont-ils conformes au RGPD ?", answer: "Oui, tous les documents sont entièrement conformes au RGPD." }
        ]}
      />
      <HiddenInternalLinks />

      <div className="min-h-screen">
        <HeaderNonprofitFR />
        <NonprofitLanguageSwitcher activeLang="fr" />
        <main>
          <HeroNonprofitFR />
          <ValuePropositionNonprofitFR />
          <ServicesNonprofitFR />
          <PricingNonprofitFR />
          <ReviewsNonprofitFR />
          <FAQNonprofitFR />
        </main>
        <FooterNonprofitFR />
      </div>
    </>
  );
};

export default NonprofitFR;

import HeaderNonprofitDE from "@/components/nonprofit-de/HeaderNonprofitDE";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import NonprofitLanguageSwitcher from "@/components/nonprofit-de/NonprofitLanguageSwitcher";
import HeroNonprofitDE from "@/components/nonprofit-de/HeroNonprofitDE";
import ValuePropositionNonprofitDE from "@/components/nonprofit-de/ValuePropositionNonprofitDE";
import ServicesNonprofitDE from "@/components/nonprofit-de/ServicesNonprofitDE";
import PricingNonprofitDE from "@/components/nonprofit-de/PricingNonprofitDE";
import ReviewsNonprofitDE from "@/components/nonprofit-de/ReviewsNonprofitDE";
import FAQNonprofitDE from "@/components/nonprofit-de/FAQNonprofitDE";
import FooterNonprofitDE from "@/components/nonprofit-de/FooterNonprofitDE";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const NonprofitDE = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Wichtige Rechtsdokumente für gemeinnützige NGO- & Wohltätigkeits-Websites: Spendenbedingungen, Datenschutzrichtlinie, Freiwilligenvereinbarungen & DSGVO-Konformität"
        description="Vollständiger Rechtsschutz für gemeinnützige Organisationen. DSGVO-konforme Datenschutzrichtlinie, Spendenbedingungen, Freiwilligenvereinbarungen und Spendenoffenlegung. Schützen Sie Ihre Mission noch heute für €79."
        canonical="https://www.iaee.eu/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz"
        lang="de"
        hreflangLinks={[
          { lang: "en", url: "https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy" },
          { lang: "de", url: "https://www.iaee.eu/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz" },
          { lang: "fr", url: "https://www.iaee.eu/fr/association-documents-juridiques-conditions-don-politique-confidentialite" },
        ]}
        xDefaultUrl="https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy"
        ogType="product"
        serviceName="Rechtsdokumente für gemeinnützige Organisationen"
        serviceDescription="Vollständiger Rechtsschutz für gemeinnützige Organisationen einschließlich Spendenbedingungen, Datenschutzrichtlinie und Freiwilligenvereinbarungen."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Startseite", url: "https://www.iaee.eu" },
          { name: "Rechtsdokumente für gemeinnützige Organisationen", url: "https://www.iaee.eu/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz" }
        ]}
        faqItems={[
          { question: "Welche Dokumente sind enthalten?", answer: "Spendenbedingungen, Datenschutzrichtlinie, Freiwilligenvereinbarungen und Spendenoffenlegung." },
          { question: "Sind die Dokumente DSGVO-konform?", answer: "Ja, alle Dokumente sind vollständig DSGVO-konform." }
        ]}
      />
      <HiddenInternalLinks />

      <div className="min-h-screen">
        <HeaderNonprofitDE />
        <NonprofitLanguageSwitcher activeLang="de" />
        <main>
          <HeroNonprofitDE />
          <ValuePropositionNonprofitDE />
          <ServicesNonprofitDE />
          <PricingNonprofitDE />
          <ReviewsNonprofitDE />
          <FAQNonprofitDE />
        </main>
        <FooterNonprofitDE />
      </div>
    </>
  );
};

export default NonprofitDE;

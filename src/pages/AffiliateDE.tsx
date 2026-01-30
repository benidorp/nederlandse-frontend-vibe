import HeaderEN from "@/components/en/HeaderEN";
import HeroDE from "@/components/de/HeroDE";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionDE from "@/components/de/ValuePropositionDE";
import ServicesDE from "@/components/de/ServicesDE";
import BlogPostsDE from "@/components/de/BlogPostsDE";
import FAQDE from "@/components/de/FAQDE";
import PricingDE from "@/components/de/PricingDE";
import ReviewsDE from "@/components/de/ReviewsDE";
import FooterDE from "@/components/de/FooterDE";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import SEOIntroSection from "@/components/legal-docs/SEOIntroSection";
import { Helmet } from "react-helmet";

const AffiliateDE = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Wesentliche Rechtliche Dokumente für Websites | AGB, Datenschutzerklärung, Cookie-Richtlinie – iaee.eu"
        description="Vollständiges Paket wesentlicher rechtlicher Dokumente für Ihre Website: AGB, Datenschutzerklärung, Affiliate-Offenlegung, Cookie-Richtlinie und Impressum. Rechtliche Konformität für Websites leicht gemacht. Für nur €79 bei iaee.eu."
        canonical="https://www.iaee.eu/de/wesentliche-rechtliche-dokumente-affiliate-website-agb-datenschutz-impressum-cookies"
        lang="de"
        ogType="product"
        serviceName="Wesentliche Rechtliche Dokumente für Websites"
        serviceDescription="Vollständiges Paket wesentlicher rechtlicher Dokumente für Websites: AGB, Datenschutzerklärung, Affiliate-Offenlegung, Cookie-Richtlinie und Impressum."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Startseite", url: "https://www.iaee.eu" },
          { name: "Wesentliche Rechtliche Dokumente für Websites", url: "https://www.iaee.eu/de/wesentliche-rechtliche-dokumente-affiliate-website-agb-datenschutz-impressum-cookies" }
        ]}
        faqItems={[
          { question: "Welche wesentlichen rechtlichen Dokumente sind für meine Website enthalten?", answer: "AGB, Datenschutzerklärung, Affiliate-Offenlegung, Cookie-Richtlinie, Haftungsausschluss und Implementierungsleitfaden." },
          { question: "Sind die rechtlichen Dokumente DSGVO-konform?", answer: "Ja, alle wesentlichen rechtlichen Dokumente sind vollständig DSGVO-, CCPA- und FTC-konform für internationale Website-Nutzung." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="de" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="de" />
          <HeroDE />
          <ValuePropositionDE />
          <ServicesDE />
          <BlogPostsDE />
          <PricingDE />
          <ReviewsDE />
          <FAQDE />
        </main>
        <FooterDE />
      </div>
    </>
  );
};

export default AffiliateDE;

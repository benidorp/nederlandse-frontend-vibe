import HeaderEN from "@/components/en/HeaderEN";
import HeroEN from "@/components/en/HeroEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionEN from "@/components/en/ValuePropositionEN";
import ServicesEN from "@/components/en/ServicesEN";
import FAQEN from "@/components/en/FAQEN";
import PricingEN from "@/components/en/PricingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateEL = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Απαραίτητα Νομικά Έγγραφα για Ιστοσελίδες | Όροι, Πολιτική Απορρήτου, Cookies – iaee.eu"
        description="Πλήρες πακέτο απαραίτητων νομικών εγγράφων για την ιστοσελίδα σας: όροι και προϋποθέσεις, πολιτική απορρήτου, γνωστοποίηση affiliate, πολιτική cookies και αποποίηση ευθύνης. Νομική συμμόρφωση για ιστοσελίδες απλοποιημένη. Μόνο €79 στο iaee.eu."
        canonical="https://www.iaee.eu/el/nomika-eggrafa-affiliate-website-oroi-politiki-aporritou-cookies"
        lang="el"
        ogType="product"
        serviceName="Απαραίτητα Νομικά Έγγραφα για Ιστοσελίδες"
        serviceDescription="Πλήρες πακέτο απαραίτητων νομικών εγγράφων για ιστοσελίδες: όροι και προϋποθέσεις, πολιτική απορρήτου, γνωστοποίηση affiliate, πολιτική cookies και αποποίηση ευθύνης."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Αρχική", url: "https://www.iaee.eu" },
          { name: "Απαραίτητα Νομικά Έγγραφα για Ιστοσελίδες", url: "https://www.iaee.eu/el/nomika-eggrafa-affiliate-website-oroi-politiki-aporritou-cookies" }
        ]}
        faqItems={[
          { question: "Ποια απαραίτητα νομικά έγγραφα περιλαμβάνονται για την ιστοσελίδα μου;", answer: "Όροι και προϋποθέσεις, πολιτική απορρήτου, γνωστοποίηση affiliate, πολιτική cookies, αποποίηση ευθύνης και οδηγός υλοποίησης." },
          { question: "Τα νομικά έγγραφα είναι συμβατά με το GDPR;", answer: "Ναι, όλα τα απαραίτητα νομικά έγγραφα είναι πλήρως συμβατά με GDPR, CCPA και FTC για διεθνή χρήση." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="el" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEN />
          <ValuePropositionEN />
          <ServicesEN />
          <PricingEN />
          <ReviewsEN />
          <FAQEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default AffiliateEL;
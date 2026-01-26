import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotography from "@/components/photography/HeroPhotography";
import ValuePropositionPhotography from "@/components/photography/ValuePropositionPhotography";
import ServicesPhotography from "@/components/photography/ServicesPhotography";
import PhotographyQA from "@/components/photography/PhotographyQA";
import PricingPhotography from "@/components/photography/PricingPhotography";
import ReviewsPhotography from "@/components/photography/ReviewsPhotography";
import FAQPhotography from "@/components/photography/FAQPhotography";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Photography = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Legal Documents for Photography Websites | Terms, Privacy & Copyright"
        description="Essential legal documents for photographers including terms and conditions, assignment agreements, privacy policy, disclaimer, quitclaim, and copyright protection. Ready in minutes for €79."
        canonical="https://www.iaee.eu/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection"
        lang="en"
        ogType="product"
        serviceName="Photography Legal Documents"
        serviceDescription="Essential legal documents for photographers including Terms, Privacy Policy, Copyright Protection, and Model Release."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Photography Legal Documents", url: "https://www.iaee.eu/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Copyright Protection, Model Release, and Assignment Agreements." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroPhotography />
          <ValuePropositionPhotography />
          <ServicesPhotography />
          <PhotographyQA />
          <PricingPhotography />
          <ReviewsPhotography />
          <FAQPhotography />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Photography;

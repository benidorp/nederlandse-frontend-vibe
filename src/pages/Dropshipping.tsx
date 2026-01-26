import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroDropshipping from "@/components/dropshipping/HeroDropshipping";
import ValuePropositionDropshipping from "@/components/dropshipping/ValuePropositionDropshipping";
import ServicesDropshipping from "@/components/dropshipping/ServicesDropshipping";
import BlogPostsDropshipping from "@/components/dropshipping/BlogPostsDropshipping";
import FAQDropshipping from "@/components/dropshipping/FAQDropshipping";
import PricingDropshipping from "@/components/dropshipping/PricingDropshipping";
import ReviewsDropshipping from "@/components/dropshipping/ReviewsDropshipping";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Dropshipping = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for Dropshipping Businesses | Terms & Privacy"
        description="Complete legal protection package for dropshipping businesses including Terms & Conditions, Privacy Policy, Supplier Agreement, and Refund Policy. Ready in minutes for €79."
        canonical="https://iaee.eu/dropshipping-business-legal-documents-terms-conditions-privacy-policy-supplier-agreement-refund-policy"
        lang="en"
        ogType="product"
        serviceName="Essential Legal Documents for Dropshipping Businesses"
        serviceDescription="Complete legal protection package for dropshipping businesses including Terms & Conditions, Privacy Policy, Supplier Agreement, and Refund Policy."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://iaee.eu" },
          { name: "Dropshipping Legal Documents", url: "https://iaee.eu/dropshipping-business-legal-documents-terms-conditions-privacy-policy-supplier-agreement-refund-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Supplier Agreement, and Refund Policy." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroDropshipping />
          <ValuePropositionDropshipping />
          <ServicesDropshipping />
          <BlogPostsDropshipping />
          <PricingDropshipping />
          <ReviewsDropshipping />
          <FAQDropshipping />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Dropshipping;

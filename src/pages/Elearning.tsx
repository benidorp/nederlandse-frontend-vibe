import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroElearning from "@/components/elearning/HeroElearning";
import ValuePropositionElearning from "@/components/elearning/ValuePropositionElearning";
import ServicesElearning from "@/components/elearning/ServicesElearning";
import BlogPostsElearning from "@/components/elearning/BlogPostsElearning";
import FAQElearning from "@/components/elearning/FAQElearning";
import PricingElearning from "@/components/elearning/PricingElearning";
import ReviewsElearning from "@/components/elearning/ReviewsElearning";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Elearning = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="E-Learning Platform Legal Documents | Terms, Privacy Policy & GDPR Compliance"
        description="Complete legal protection for your online education platform. GDPR-compliant privacy policy, course terms, refund policy, and instructor agreements. Ready in minutes for €79."
        canonical="https://iaee.eu/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance"
        lang="en"
        ogType="product"
        serviceName="E-Learning Platform Legal Documents"
        serviceDescription="Complete legal protection for online education platforms including Terms, Privacy Policy, Course Terms, and GDPR Compliance."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://iaee.eu" },
          { name: "E-Learning Legal Documents", url: "https://iaee.eu/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Course Terms, Refund Policy, and Instructor Agreements." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <GTranslateWidget />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroElearning />
          <ValuePropositionElearning />
          <ServicesElearning />
          <PricingElearning />
          <ReviewsElearning />
          <FAQElearning />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Elearning;

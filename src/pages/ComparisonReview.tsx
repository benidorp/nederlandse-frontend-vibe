import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroComparisonReview from "@/components/comparison-review/HeroComparisonReview";
import ValuePropositionComparisonReview from "@/components/comparison-review/ValuePropositionComparisonReview";
import ServicesComparisonReview from "@/components/comparison-review/ServicesComparisonReview";
import ComparisonReviewQA from "@/components/comparison-review/ComparisonReviewQA";
import PricingComparisonReview from "@/components/comparison-review/PricingComparisonReview";
import ReviewsComparisonReview from "@/components/comparison-review/ReviewsComparisonReview";
import FAQComparisonReview from "@/components/comparison-review/FAQComparisonReview";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const ComparisonReview = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Legal Documents for Comparison & Review Websites | FTC-Compliant Disclosure"
        description="Essential legal documents for comparison and review websites including terms and conditions, FTC-compliant affiliate disclosure, privacy policy, liability disclaimer, and user content policies. Ready for €79."
        canonical="https://iaee.eu/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer"
        lang="en"
        ogType="product"
        serviceName="Comparison & Review Website Legal Documents"
        serviceDescription="Essential legal documents for comparison and review websites including FTC-compliant Affiliate Disclosure, Privacy Policy, and Disclaimer."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://iaee.eu" },
          { name: "Comparison & Review Legal Documents", url: "https://iaee.eu/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, FTC-compliant Affiliate Disclosure, Privacy Policy, Liability Disclaimer, and User Content Policies." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroComparisonReview />
          <ValuePropositionComparisonReview />
          <ServicesComparisonReview />
          <ComparisonReviewQA />
          <PricingComparisonReview />
          <ReviewsComparisonReview />
          <FAQComparisonReview />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default ComparisonReview;

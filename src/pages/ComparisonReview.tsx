import { Helmet } from "react-helmet";
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

const ComparisonReview = () => {
  return (
    <>
      <HiddenInternalLinks />
      <Helmet>
        <title>Legal Documents for Comparison & Review Websites: Terms & Conditions, Privacy Policy, Affiliate Disclosure & Disclaimer</title>
        <meta name="description" content="Essential legal documents for comparison and review websites including terms and conditions, FTC-compliant affiliate disclosure, privacy policy, liability disclaimer, and user content policies." />
        <meta name="keywords" content="review website legal documents, comparison site terms, affiliate disclosure FTC, review platform privacy policy, product review disclaimer, consumer review legal" />
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Product","name":"Comparison & Review Website Legal Documents","description":"Essential legal documents for comparison and review websites including FTC-compliant Affiliate Disclosure, Privacy Policy, and Disclaimer.","brand":{"@type":"Brand","name":"IAEE"},"offers":{"@type":"Offer","price":"79","priceCurrency":"EUR","availability":"https://schema.org/InStock"}}`}</script>
      </Helmet>
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

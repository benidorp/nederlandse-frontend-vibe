import HeaderEN from "@/components/en/HeaderEN";
import HeroEN from "@/components/en/HeroEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionEN from "@/components/en/ValuePropositionEN";
import ServicesEN from "@/components/en/ServicesEN";
import BlogPostsEN from "@/components/en/BlogPostsEN";
import AffiliateQAEN from "@/components/en/AffiliateQAEN";
import FAQEN from "@/components/en/FAQEN";
import PricingEN from "@/components/en/PricingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const English = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for Affiliate Websites | Terms & Conditions, Privacy Policy"
        description="Complete legal protection package for affiliate websites including Terms & Conditions, Privacy Policy, Affiliate Disclosure, and Cookie Policy. Ready in minutes for €79."
        canonical="https://iaee.eu/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy"
        lang="en"
        ogType="product"
        serviceName="Essential Legal Documents for Affiliate Websites"
        serviceDescription="Complete legal protection package for affiliate websites including Terms & Conditions, Privacy Policy, Affiliate Disclosure, and Cookie Policy."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://iaee.eu" },
          { name: "Affiliate Legal Documents", url: "https://iaee.eu/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Affiliate Disclosure, and Cookie Policy." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <GTranslateWidget />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEN />
          <ValuePropositionEN />
          <ServicesEN />
          <BlogPostsEN />
          <AffiliateQAEN />
          <PricingEN />
          <ReviewsEN />
          <FAQEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default English;

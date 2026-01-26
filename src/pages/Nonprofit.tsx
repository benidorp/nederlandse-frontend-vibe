import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroNonprofit from "@/components/nonprofit/HeroNonprofit";
import ValuePropositionNonprofit from "@/components/nonprofit/ValuePropositionNonprofit";
import ServicesNonprofit from "@/components/nonprofit/ServicesNonprofit";
import BlogPostsNonprofit from "@/components/nonprofit/BlogPostsNonprofit";
import NonprofitQA from "@/components/nonprofit/NonprofitQA";
import FAQNonprofit from "@/components/nonprofit/FAQNonprofit";
import PricingNonprofit from "@/components/nonprofit/PricingNonprofit";
import ReviewsNonprofit from "@/components/nonprofit/ReviewsNonprofit";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Nonprofit = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Non-Profit Legal Documents | Donation Terms, Privacy Policy & Volunteer Agreements"
        description="Complete legal protection for charitable organizations. GDPR-compliant privacy policy, donation terms, volunteer agreements, and fundraising disclosure. Protect your mission today for €79."
        canonical="https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy"
        lang="en"
        ogType="product"
        serviceName="Non-Profit Legal Documents"
        serviceDescription="Complete legal protection for charitable organizations including Donation Terms, Privacy Policy, and Volunteer Agreements."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Non-Profit Legal Documents", url: "https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Donation Terms, Privacy Policy, Volunteer Agreements, and Fundraising Disclosure." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroNonprofit />
          <ValuePropositionNonprofit />
          <ServicesNonprofit />
          <BlogPostsNonprofit />
          <NonprofitQA />
          <PricingNonprofit />
          <ReviewsNonprofit />
          <FAQNonprofit />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Nonprofit;

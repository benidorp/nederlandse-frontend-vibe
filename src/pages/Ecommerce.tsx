import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroEcommerce from "@/components/ecommerce/HeroEcommerce";
import ValuePropositionEcommerce from "@/components/ecommerce/ValuePropositionEcommerce";
import ServicesEcommerce from "@/components/ecommerce/ServicesEcommerce";
import BlogPostsEcommerce from "@/components/ecommerce/BlogPostsEcommerce";
import FAQEcommerce from "@/components/ecommerce/FAQEcommerce";
import PricingEcommerce from "@/components/ecommerce/PricingEcommerce";
import ReviewsEcommerce from "@/components/ecommerce/ReviewsEcommerce";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Ecommerce = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for E-commerce Websites | Terms & Privacy Policy"
        description="Complete legal protection package for e-commerce websites including Terms & Conditions, Privacy Policy, Return Policy, and Shipping Policy. Ready in minutes for €79."
        canonical="https://iaee.eu/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy"
        lang="en"
        ogType="product"
        serviceName="Essential Legal Documents for E-commerce Websites"
        serviceDescription="Complete legal protection package for e-commerce websites including Terms & Conditions, Privacy Policy, Return Policy, and Shipping Policy."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://iaee.eu" },
          { name: "E-commerce Legal Documents", url: "https://iaee.eu/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Return Policy, and Shipping Policy." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEcommerce />
          <ValuePropositionEcommerce />
          <ServicesEcommerce />
          <BlogPostsEcommerce />
          <PricingEcommerce />
          <ReviewsEcommerce />
          <FAQEcommerce />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default Ecommerce;

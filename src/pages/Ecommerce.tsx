import { Helmet } from "react-helmet";
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

const Ecommerce = () => {
  return (
    <>
      <HiddenInternalLinks />
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Essential Legal Documents for E-commerce Websites",
            "description": "Complete legal protection package for e-commerce websites including Terms & Conditions, Privacy Policy, Return Policy, and Shipping Policy.",
            "brand": {"@type": "Brand", "name": "IAEE"},
            "offers": {
              "@type": "Offer",
              "price": "79",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          }
        `}</script>
      </Helmet>
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

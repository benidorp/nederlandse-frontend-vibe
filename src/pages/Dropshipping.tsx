import { Helmet } from "react-helmet";
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

const Dropshipping = () => {
  return (
    <>
      <HiddenInternalLinks />
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/dropshipping-business-legal-documents-terms-conditions-privacy-policy-supplier-agreement-refund-policy" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Essential Legal Documents for Dropshipping Businesses",
            "description": "Complete legal protection package for dropshipping businesses including Terms & Conditions, Privacy Policy, Supplier Agreement, and Refund Policy.",
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

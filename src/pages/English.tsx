import { Helmet } from "react-helmet";
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

const English = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Essential Legal Documents for Affiliate Websites",
            "description": "Complete legal protection package for affiliate websites including Terms & Conditions, Privacy Policy, Affiliate Disclosure, and Cookie Policy.",
            "brand": {"@type": "Brand", "name": "IAEE"},
            "offers": {
              "@type": "Offer",
              "price": "79",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "127"
            }
          }
        `}</script>
      </Helmet>
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

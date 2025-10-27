import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HeroDropshipping from "@/components/dropshipping/HeroDropshipping";
import ValuePropositionDropshipping from "@/components/dropshipping/ValuePropositionDropshipping";
import ServicesDropshipping from "@/components/dropshipping/ServicesDropshipping";
import BlogPostsDropshipping from "@/components/dropshipping/BlogPostsDropshipping";
import DropshippingQA from "@/components/dropshipping/DropshippingQA";
import FAQDropshipping from "@/components/dropshipping/FAQDropshipping";
import PricingDropshipping from "@/components/dropshipping/PricingDropshipping";
import ReviewsDropshipping from "@/components/dropshipping/ReviewsDropshipping";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";

const Dropshipping = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/dropshipping-business-legal-documents-terms-conditions-privacy-policy-supplier-agreement-refund-policy" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroDropshipping />
          <ValuePropositionDropshipping />
          <ServicesDropshipping />
          <BlogPostsDropshipping />
          <DropshippingQA />
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

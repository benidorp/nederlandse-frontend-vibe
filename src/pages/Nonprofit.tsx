import { Helmet } from "react-helmet";
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

const Nonprofit = () => {
  return (
    <>
      <HiddenInternalLinks />
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <title>Non-Profit Legal Documents | Donation Terms, Privacy Policy & Volunteer Agreements</title>
        <meta name="description" content="Complete legal protection for charitable organizations. GDPR-compliant privacy policy, donation terms, volunteer agreements, and fundraising disclosure. Protect your mission today." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy" />
      </Helmet>
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

import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroElearning from "@/components/elearning/HeroElearning";
import ValuePropositionElearning from "@/components/elearning/ValuePropositionElearning";
import ServicesElearning from "@/components/elearning/ServicesElearning";
import BlogPostsElearning from "@/components/elearning/BlogPostsElearning";
import FAQElearning from "@/components/elearning/FAQElearning";
import PricingElearning from "@/components/elearning/PricingElearning";
import ReviewsElearning from "@/components/elearning/ReviewsElearning";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
const Elearning = () => {
  return <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <title>E-Learning Platform Legal Documents | Terms, Privacy Policy & GDPR Compliance</title>
        <meta name="description" content="Complete legal protection for your online education platform. GDPR-compliant privacy policy, course terms, refund policy, and instructor agreements. Ready in minutes." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"Product","name":"E-Learning Platform Legal Documents","description":"Complete legal protection for online education platforms including Terms, Privacy Policy, Course Terms, and GDPR Compliance.","brand":{"@type":"Brand","name":"IAEE"},"offers":{"@type":"Offer","price":"79","priceCurrency":"EUR","availability":"https://schema.org/InStock"}}`}</script>
      </Helmet>
      <GTranslateWidget />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroElearning />
          <ValuePropositionElearning />
          <ServicesElearning />
          <PricingElearning />
          <ReviewsElearning />
          <FAQElearning />
        </main>
        <FooterEN />
      </div>
    </>;
};
export default Elearning;
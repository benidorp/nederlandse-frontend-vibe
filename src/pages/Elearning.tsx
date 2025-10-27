import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import HeroElearning from "@/components/elearning/HeroElearning";
import ValuePropositionElearning from "@/components/elearning/ValuePropositionElearning";
import ServicesElearning from "@/components/elearning/ServicesElearning";
import BlogPostsElearning from "@/components/elearning/BlogPostsElearning";
import ElearningQA from "@/components/elearning/ElearningQA";
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
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroElearning />
          <ValuePropositionElearning />
          <ServicesElearning />
          
          <ElearningQA />
          <PricingElearning />
          <ReviewsElearning />
          <FAQElearning />
        </main>
        <FooterEN />
      </div>
    </>;
};
export default Elearning;
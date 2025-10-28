import { Helmet } from "react-helmet";
import HeaderFreelancers from "@/components/freelancers/HeaderFreelancers";
import HeroFreelancers from "@/components/freelancers/HeroFreelancers";
import ValuePropositionFreelancers from "@/components/freelancers/ValuePropositionFreelancers";
import ServicesFreelancers from "@/components/freelancers/ServicesFreelancers";
import PricingFreelancers from "@/components/freelancers/PricingFreelancers";
import ReviewsFreelancers from "@/components/freelancers/ReviewsFreelancers";
import FAQFreelancers from "@/components/freelancers/FAQFreelancers";
import BlogPostsFreelancers from "@/components/freelancers/BlogPostsFreelancers";
import FooterFreelancers from "@/components/freelancers/FooterFreelancers";
import GTranslateWidget from "@/components/GTranslateWidget";

const Freelancers = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Legal Documents for Freelancers & Independent Contractors | Terms & Conditions, Privacy Policy, Client Contracts</title>
        <meta name="description" content="Professional legal documents for freelancers, self-employed professionals, and independent contractors. Includes client contracts, terms of service, privacy policy, and liability disclaimers. Complete legal protection package." />
        <meta name="keywords" content="freelancer legal documents, independent contractor contracts, self-employed legal protection, freelance terms and conditions, client contracts, freelancer privacy policy, contractor agreements, freelance disclaimers" />
        <link rel="canonical" href="https://yourdomain.com/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" />
        
        <meta property="og:title" content="Legal Documents for Freelancers & Independent Contractors" />
        <meta property="og:description" content="Complete legal protection package for freelancers and self-employed professionals. Professional contracts and policies starting at €79." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Legal Documents Package for Freelancers & Independent Contractors",
            "description": "Complete legal protection package including client contracts, terms of service, privacy policy, and disclaimers for freelancers and self-employed professionals",
            "offers": {
              "@type": "Offer",
              "price": "79",
              "priceCurrency": "EUR"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <HeaderFreelancers />
        <main>
          <HeroFreelancers />
          <ValuePropositionFreelancers />
          <ServicesFreelancers />
          <PricingFreelancers />
          <ReviewsFreelancers />
          <FAQFreelancers />
          <BlogPostsFreelancers />
        </main>
        <FooterFreelancers />
        <GTranslateWidget />
      </div>
    </>
  );
};

export default Freelancers;

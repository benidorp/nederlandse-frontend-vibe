import HeaderFreelancers from "@/components/freelancers/HeaderFreelancers";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroFreelancers from "@/components/freelancers/HeroFreelancers";
import ValuePropositionFreelancers from "@/components/freelancers/ValuePropositionFreelancers";
import ServicesFreelancers from "@/components/freelancers/ServicesFreelancers";
import PricingFreelancers from "@/components/freelancers/PricingFreelancers";
import ReviewsFreelancers from "@/components/freelancers/ReviewsFreelancers";
import FAQFreelancers from "@/components/freelancers/FAQFreelancers";
import BlogPostsFreelancers from "@/components/freelancers/BlogPostsFreelancers";
import CTABoxFreelancers from "@/components/freelancers/CTABoxFreelancers";
import FooterFreelancers from "@/components/freelancers/FooterFreelancers";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Freelancers = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Legal Documents for Freelancers & Independent Contractors | Terms & Contracts"
        description="Professional legal documents for freelancers, self-employed professionals, and independent contractors. Includes client contracts, terms of service, privacy policy, and liability disclaimers. Complete legal protection for €79."
        canonical="https://www.iaee.eu/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy"
        lang="en"
        ogType="product"
        serviceName="Legal Documents Package for Freelancers & Independent Contractors"
        serviceDescription="Complete legal protection package including client contracts, terms of service, privacy policy, and disclaimers for freelancers and self-employed professionals."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Freelancer Legal Documents", url: "https://www.iaee.eu/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Client Contracts, Terms of Service, Privacy Policy, and Liability Disclaimers." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
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
          <CTABoxFreelancers />
        </main>
        <FooterFreelancers />
        <GTranslateWidget />
      </div>
    </>
  );
};

export default Freelancers;

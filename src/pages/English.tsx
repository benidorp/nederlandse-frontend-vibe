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
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import SEOIntroSection from "@/components/legal-docs/SEOIntroSection";
import { Helmet } from "react-helmet";

const English = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for Websites | Terms & Conditions, Privacy Policy, Cookie Policy – iaee.eu"
        description="Complete essential legal documents package for your website including Terms & Conditions, Privacy Policy, Affiliate Disclosure, Cookie Policy, and Disclaimer. Legal compliance for websites made easy. Ready in minutes for €79 at iaee.eu."
        canonical="https://www.iaee.eu/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy"
        lang="en"
        ogType="product"
        serviceName="Essential Legal Documents for Websites"
        serviceDescription="Complete essential legal documents package for websites including Terms & Conditions, Privacy Policy, Affiliate Disclosure, Cookie Policy, and Disclaimer. Legal compliance and website protection."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Essential Legal Documents for Websites", url: "https://www.iaee.eu/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" }
        ]}
        faqItems={[
          { question: "What essential legal documents are included for my website?", answer: "Terms & Conditions, Privacy Policy, Affiliate Disclosure, Cookie Policy, Disclaimer, and Implementation Guide." },
          { question: "Are the legal documents GDPR compliant?", answer: "Yes, all essential legal documents are fully GDPR, CCPA, and FTC compliant for international website use." },
          { question: "Can I use these documents for multiple websites?", answer: "Yes, one purchase covers unlimited use for all your current and future websites." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="en" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="en" />
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

import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import NonprofitLanguageSwitcher from "@/components/nonprofit-de/NonprofitLanguageSwitcher";
import HeroNonprofit from "@/components/nonprofit/HeroNonprofit";
import ValuePropositionNonprofit from "@/components/nonprofit/ValuePropositionNonprofit";
import ServicesNonprofit from "@/components/nonprofit/ServicesNonprofit";
import BlogPostsNonprofit from "@/components/nonprofit/BlogPostsNonprofit";
import NonprofitQA from "@/components/nonprofit/NonprofitQA";
import FAQNonprofit from "@/components/nonprofit/FAQNonprofit";
import PricingNonprofit from "@/components/nonprofit/PricingNonprofit";
import ReviewsNonprofit from "@/components/nonprofit/ReviewsNonprofit";
import FooterEN from "@/components/en/FooterEN";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const Nonprofit = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for Non-Profit & Charity Websites: Donation Terms, Privacy Policy, Volunteer Agreements & GDPR Compliance"
        description="Complete legal protection for charitable organizations. GDPR-compliant privacy policy, donation terms, volunteer agreements, and fundraising disclosure. Protect your mission today for €79."
        canonical="https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy"
        lang="en"
        hreflangLinks={[
          { lang: "en", url: "https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy" },
          { lang: "de", url: "https://www.iaee.eu/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz" },
          { lang: "fr", url: "https://www.iaee.eu/fr/association-documents-juridiques-conditions-don-politique-confidentialite" },
        ]}
        xDefaultUrl="https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy"
        ogType="product"
        serviceName="Non-Profit Legal Documents"
        serviceDescription="Complete legal protection for charitable organizations including Donation Terms, Privacy Policy, and Volunteer Agreements."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Non-Profit Legal Documents", url: "https://www.iaee.eu/nonprofit-charity-legal-documents-donation-terms-privacy-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Donation Terms, Privacy Policy, Volunteer Agreements, and Fundraising Disclosure." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderEN />
        <NonprofitLanguageSwitcher activeLang="en" />
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

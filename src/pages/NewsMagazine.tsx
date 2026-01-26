import HeaderNewsMagazine from "@/components/news-magazine/HeaderNewsMagazine";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroNewsMagazine from "@/components/news-magazine/HeroNewsMagazine";
import ValuePropositionNewsMagazine from "@/components/news-magazine/ValuePropositionNewsMagazine";
import ServicesNewsMagazine from "@/components/news-magazine/ServicesNewsMagazine";
import BlogPostsNewsMagazine from "@/components/news-magazine/BlogPostsNewsMagazine";
import FAQNewsMagazine from "@/components/news-magazine/FAQNewsMagazine";
import PricingNewsMagazine from "@/components/news-magazine/PricingNewsMagazine";
import ReviewsNewsMagazine from "@/components/news-magazine/ReviewsNewsMagazine";
import FooterNewsMagazine from "@/components/news-magazine/FooterNewsMagazine";
import CTABoxNewsMagazine from "@/components/news-magazine/CTABoxNewsMagazine";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const NewsMagazine = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for News & Magazine Websites | GDPR-Compliant"
        description="Complete legal protection for your news or magazine website. Get GDPR-compliant privacy policy, editorial guidelines, copyright policy, terms & conditions - ready in minutes for €79."
        canonical="https://www.iaee.eu/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy"
        lang="en"
        ogType="product"
        serviceName="News & Magazine Legal Documents"
        serviceDescription="Complete legal protection for news and magazine websites including Terms, Privacy Policy, Editorial Guidelines, and Copyright Policy."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "News & Magazine Legal Documents", url: "https://www.iaee.eu/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Editorial Guidelines, and Copyright Policy." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderNewsMagazine />
        <main>
          <HeroNewsMagazine />
          <ValuePropositionNewsMagazine />
          <ServicesNewsMagazine />
          <PricingNewsMagazine />
          <ReviewsNewsMagazine />
          <FAQNewsMagazine />
          <CTABoxNewsMagazine />
        </main>
        <FooterNewsMagazine />
      </div>
    </>
  );
};

export default NewsMagazine;

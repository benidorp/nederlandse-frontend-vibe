import HeaderEN from "@/components/en/HeaderEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroOnlineShop from "@/components/online-shop/HeroOnlineShop";
import ValuePropositionOnlineShop from "@/components/online-shop/ValuePropositionOnlineShop";
import ServicesOnlineShop from "@/components/online-shop/ServicesOnlineShop";
import BlogPostsOnlineShop from "@/components/online-shop/BlogPostsOnlineShop";
import FAQOnlineShop from "@/components/online-shop/FAQOnlineShop";
import PricingOnlineShop from "@/components/online-shop/PricingOnlineShop";
import ReviewsOnlineShop from "@/components/online-shop/ReviewsOnlineShop";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const OnlineShop = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Essential Legal Documents for E-Commerce & Online Shop Websites: Terms & Conditions, Privacy Policy, Cookie Policy & GDPR Compliance"
        description="Complete legal protection package for webshops including Terms & Conditions, Privacy Policy, Cookie Policy, and GDPR Compliance documents. Ready in minutes for €79."
        canonical="https://www.iaee.eu/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance"
        lang="en"
        ogType="product"
        serviceName="Essential Legal Documents for Online Shops"
        serviceDescription="Complete legal protection package for webshops including Terms & Conditions, Privacy Policy, Cookie Policy, and GDPR Compliance documents."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Online Shop Legal Documents", url: "https://www.iaee.eu/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" }
        ]}
        faqItems={[
          { question: "What documents are included?", answer: "Terms & Conditions, Privacy Policy, Cookie Policy, and GDPR Compliance documents." },
          { question: "Are the documents GDPR compliant?", answer: "Yes, all documents are fully GDPR compliant." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroOnlineShop />
          <ValuePropositionOnlineShop />
          <ServicesOnlineShop />
          <BlogPostsOnlineShop />
          <PricingOnlineShop />
          <ReviewsOnlineShop />
          <FAQOnlineShop />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default OnlineShop;

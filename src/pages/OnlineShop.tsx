import { Helmet } from "react-helmet";
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

const OnlineShop = () => {
  return (
    <>
      <HiddenInternalLinks />
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" />
      </Helmet>
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

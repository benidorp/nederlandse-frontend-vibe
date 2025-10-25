import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import BlogPosts from "@/components/BlogPosts";
import AffiliateQA from "@/components/AffiliateQA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import GTranslateWidget from "@/components/GTranslateWidget";

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="nl" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <ValueProposition />
          <Services />
          <BlogPosts />
          <AffiliateQA />
          <Pricing />
          <Reviews />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

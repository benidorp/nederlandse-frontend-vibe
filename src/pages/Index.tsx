import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import About from "@/components/About";
import Services from "@/components/Services";
import BlogPosts from "@/components/BlogPosts";
import AffiliateQA from "@/components/AffiliateQA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <About />
        <Services />
        <BlogPosts />
        <AffiliateQA />
        <FAQ />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

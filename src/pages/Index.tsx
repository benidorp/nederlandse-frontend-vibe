import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BlogPosts from "@/components/BlogPosts";
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
        <About />
        <Services />
        <BlogPosts />
        <FAQ />
        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import HeaderDE from "@/components/de/HeaderDE";
import HeroDE from "@/components/de/HeroDE";
import ValuePropositionDE from "@/components/de/ValuePropositionDE";
import ServicesDE from "@/components/de/ServicesDE";
import PricingDE from "@/components/de/PricingDE";
import ReviewsDE from "@/components/de/ReviewsDE";
import BlogPostsDE from "@/components/de/BlogPostsDE";
import FAQDE from "@/components/de/FAQDE";
import AffiliateQADE from "@/components/de/AffiliateQADE";
import FooterDE from "@/components/de/FooterDE";

const German = () => {
  return (
    <div className="min-h-screen">
      <HeaderDE />
      <main>
        <HeroDE />
        <ValuePropositionDE />
        <ServicesDE />
        <PricingDE />
        <ReviewsDE />
        <BlogPostsDE />
        <FAQDE />
        <AffiliateQADE />
      </main>
      <FooterDE />
    </div>
  );
};

export default German;

import HeaderDE from "@/components/de/HeaderDE";
import HeroDE from "@/components/de/HeroDE";
import ValuePropositionDE from "@/components/de/ValuePropositionDE";
import ServicesDE from "@/components/de/ServicesDE";
import PricingDE from "@/components/de/PricingDE";
import ReviewsDE from "@/components/de/ReviewsDE";
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
      </main>
      <FooterDE />
    </div>
  );
};

export default German;

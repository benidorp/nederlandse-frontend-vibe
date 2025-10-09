import HeaderES from "@/components/es/HeaderES";
import HeroES from "@/components/es/HeroES";
import AboutES from "@/components/es/AboutES";
import ServicesES from "@/components/es/ServicesES";
import PricingES from "@/components/es/PricingES";
import ReviewsES from "@/components/es/ReviewsES";
import FooterES from "@/components/es/FooterES";

const Espanol = () => {
  return (
    <div className="min-h-screen">
      <HeaderES />
      <main>
        <HeroES />
        <AboutES />
        <ServicesES />
        <PricingES />
        <ReviewsES />
      </main>
      <FooterES />
    </div>
  );
};

export default Espanol;

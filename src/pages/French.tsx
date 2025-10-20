import HeaderFR from "@/components/fr/HeaderFR";
import HeroFR from "@/components/fr/HeroFR";
import ValuePropositionFR from "@/components/fr/ValuePropositionFR";
import ServicesFR from "@/components/fr/ServicesFR";
import BlogPostsFR from "@/components/fr/BlogPostsFR";
import PricingFR from "@/components/fr/PricingFR";
import ReviewsFR from "@/components/fr/ReviewsFR";
import FAQFR from "@/components/fr/FAQFR";
import FooterFR from "@/components/fr/FooterFR";
import LegalFooterFR from "@/components/fr/LegalFooterFR";

const French = () => {
  return (
    <div className="min-h-screen">
      <HeaderFR />
      <main>
        <HeroFR />
        <ValuePropositionFR />
        <ServicesFR />
        <BlogPostsFR />
        <PricingFR />
        <ReviewsFR />
        <FAQFR />
        <LegalFooterFR />
      </main>
      <FooterFR />
    </div>
  );
};

export default French;

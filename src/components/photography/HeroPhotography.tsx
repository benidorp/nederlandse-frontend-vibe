import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const HeroPhotography = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
        }}
      />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Legal Documents for Photography Websites
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Protect your photography business with professionally crafted legal documents. Terms & Conditions, Assignment Agreements, Privacy Policy, Quitclaim, Copyright Protection & More.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("pricing")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPhotography;

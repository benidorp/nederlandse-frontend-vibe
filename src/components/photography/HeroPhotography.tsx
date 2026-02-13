import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";
const HeroPhotography = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative min-h-[600px] bg-navy">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              Essential Legal Documents for Photography Websites: Terms & Conditions, Privacy Policy, Copyright Protection & Disclaimer
            </h1>
            <p className="text-xl text-white/90 mb-8">Protect your photography business website with professionally crafted legal documents. Terms & Conditions, Assignment Agreements, Privacy Policy, Quitclaim, Copyright Protection & More.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("pricing")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Professional photography legal services" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroPhotography;
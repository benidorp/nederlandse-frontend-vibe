import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const HeroStreamingMedia = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-primary text-primary-foreground">
      <div className="container grid lg:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary-foreground/90 uppercase tracking-wide">
              Legal Protection for Content Creators
            </span>
          </div>
          
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
            Legal Documents for Streaming & Media Websites: Terms & Conditions, Privacy Policy, Content License & DMCA Policy
          </h1>
          
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Professional legal documents that protect your streaming platform and ensure compliance with copyright laws. 
            Our comprehensive package includes all essential agreements such as <strong>content licenses, user agreements, and DMCA policies</strong>—
            for complete legal coverage, trust, and creator protection.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("pricing")} 
              className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              View Packages
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection("services")} 
              className="border-primary-foreground/30 hover:bg-primary-foreground/10 text-slate-950"
            >
              More Information
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-50"></div>
          <img 
            src={heroImage} 
            alt="Professional legal consultant for streaming platforms" 
            className="relative rounded-lg shadow-2xl w-full object-cover ring-2 ring-primary/10" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroStreamingMedia;

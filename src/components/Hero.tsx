import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-secondary/30">
      <div className="container grid lg:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Juridische Zekerheid
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Juridische Documenten voor Affiliate Websites
          </h1>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Professionele juridische documenten die uw affiliate business beschermen en in lijn brengen met alle wettelijke vereisten. 
            Ons betaalbare pakket bevat alle essentiële overeenkomsten zoals <strong>algemene voorwaarden, privacybeleid en disclaimers</strong>—
            voor volledige naleving, vertrouwen en gemoedsrust.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollToSection("prijzen")} className="group">
              Bekijk Pakketten
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("diensten")}>
              Meer Informatie
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Professionele juridische consultant" 
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

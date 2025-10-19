import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lawyer-hero.jpg";

const HeroEN = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-medium text-primary">Complete Legal Protection for Affiliate Marketers</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              All Essential Legal Documents for Your Affiliate Website
            </h1>
            <p className="text-lg text-muted-foreground">
              Protect your affiliate business with professionally drafted legal documents. Privacy Policy, Disclosure, Terms & Conditions, and more – all compliant with GDPR/AVG and international legislation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")}
                className="text-lg px-8"
              >
                View Packages
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("services")}
                className="text-lg px-8"
              >
                More Information
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
            <img 
              src={heroImage} 
              alt="Legal documentation for affiliate websites" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEN;

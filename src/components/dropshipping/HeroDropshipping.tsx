import { Button } from "@/components/ui/button";
import lawyerHero from "@/assets/lawyer-hero.jpg";
const HeroDropshipping = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-[600px] flex items-center justify-center text-white" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${lawyerHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
      <div className="container relative z-10 text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">Protect Your Dropshipping Business with Essential Legal Documents.

      </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">Protect your dropshipping website business with professionally crafted legal documents. GDPR-compliant policies, clear terms & conditions, and supplier agreements—all ready to implement immediately.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-primary hover:bg-primary/90 text-white">
            View Packages
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
            More Information
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroDropshipping;
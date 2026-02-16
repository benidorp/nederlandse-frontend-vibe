import { Button } from "@/components/ui/button";
import heroImage from "@/assets/lawyer-hero.jpg";
const HeroNewsMagazine = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
           <h1 className="text-4xl font-bold text-white mb-6 leading-tight md:text-5xl">
            Essential Legal Documents for News & Magazine Websites: Terms & Conditions, Privacy Policy, Editorial Guidelines & Copyright Policy
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">GDPR-compliant privacy policy, editorial guidelines, copyright policy, and all essential legal documents. Ready in minutes, not weeks. Protect your publication and your readers.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection("pricing")} className="text-lg px-8">
              View Packages
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="text-lg px-8 bg-white/10 text-white border-white hover:bg-white hover:text-primary">
              More Information
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroNewsMagazine;
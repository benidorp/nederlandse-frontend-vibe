import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const HeroES = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[600px] flex items-center" style={{ background: 'linear-gradient(135deg, hsl(30 15% 55%), hsl(30 15% 65%))' }}>
      <div className="container grid lg:grid-cols-2 gap-8 items-center py-12">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm font-semibold text-white uppercase tracking-wide">
              Seguridad Jurídica
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Documentos Legales para Sitios Web de Afiliados: Política de Privacidad, Disclosure y Política de Cookies
          </h1>
          
          <p className="text-lg text-white/90 leading-relaxed">
            Documentos legales profesionales que protegen tu negocio de afiliados y cumplen con todos los requisitos legales.
            Nuestro paquete asequible incluye todos los acuerdos esenciales como <strong>términos y condiciones, política de privacidad y disclaimers</strong>—
            para un cumplimiento completo, confianza y tranquilidad.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => scrollToSection("precios")} className="group">
              Ver Paquetes
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("servicios")}>
              Más Información
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-50"></div>
          <img 
            src={heroImage} 
            alt="Consultor legal profesional" 
            className="relative rounded-lg shadow-2xl w-full object-cover ring-2 ring-primary/10"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroES;

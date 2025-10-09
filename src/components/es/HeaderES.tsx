import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeaderES = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary">Legal Affiliate Agreement</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection("sobre-mi")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Sobre Mí
          </button>
          <button 
            onClick={() => scrollToSection("servicios")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection("precios")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Precios
          </button>
          <Button onClick={() => scrollToSection("contacto")}>
            Contacto
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderES;

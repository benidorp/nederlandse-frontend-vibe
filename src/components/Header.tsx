import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90 text-primary-foreground">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary-foreground">Legal Affiliate Agreement</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection("home")} 
            className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection("over-mij")} 
            className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            Over Mij
          </button>
          <button 
            onClick={() => scrollToSection("diensten")} 
            className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            Diensten
          </button>
          <button 
            onClick={() => scrollToSection("prijzen")} 
            className="text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground transition-colors"
          >
            Prijzen
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

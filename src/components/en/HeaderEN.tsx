import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const HeaderEN = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
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
            Home
          </button>
          <button 
            onClick={() => scrollToSection("about-me")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection("services")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("pricing")} 
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Pricing
          </button>
          <Button onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default HeaderEN;

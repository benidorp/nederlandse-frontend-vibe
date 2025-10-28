import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const HeaderFreelancers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">FreelanceProtect</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </button>
          <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors">
            Reviews
          </button>
          <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </button>
          <Button onClick={() => scrollToSection("pricing")} size="sm">
            Get Started
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              Home
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              Pricing
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              Reviews
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors text-left">
              FAQ
            </button>
            <Button onClick={() => scrollToSection("pricing")} size="sm" className="w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderFreelancers;

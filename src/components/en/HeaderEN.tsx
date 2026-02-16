import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const MAIN_PAGE = "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy";

const HeaderEN = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLocalPage = location.pathname === MAIN_PAGE || location.pathname === "/" || location.pathname.toLowerCase().includes("photography") || location.pathname.toLowerCase().includes("fotografie");

  const scrollToSection = (id: string) => {
    if (isLocalPage) {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`${MAIN_PAGE}#${id}`);
    }
  };

  return <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" />
          <span className="text-xl font-bold text-primary">Essential Legal Documents For Websites</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("home")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about-me")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Me
          </button>
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("pricing")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Pricing
          </button>
          <Button onClick={() => scrollToSection("contact")}>
            Contact
          </Button>
        </nav>
      </div>
    </header>;
};
export default HeaderEN;
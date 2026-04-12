import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const HeaderEN = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="IAEE - Legal Documents for Websites" className="h-10 w-10" />
            <span className="text-xl font-bold text-primary">Essential Legal Documents For Websites</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className={`text-sm font-medium hover:text-primary transition-colors ${isHomePage ? "text-primary" : "text-foreground"}`}>
            Home
          </a>
          <a href="/about" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/about" ? "text-primary" : "text-foreground"}`}>
            About
          </a>
          <a href="/features" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/features" ? "text-primary" : "text-foreground"}`}>
            Features
          </a>
          <a href="/pricing" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/pricing" ? "text-primary" : "text-foreground"}`}>
            Pricing
          </a>
          <a href="/blog" className={`text-sm font-medium hover:text-primary transition-colors ${location.pathname === "/blog" ? "text-primary" : "text-foreground"}`}>
            Blog
          </a>
          <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>;
};
export default HeaderEN;
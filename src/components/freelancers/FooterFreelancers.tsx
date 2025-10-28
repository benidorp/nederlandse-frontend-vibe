const FooterFreelancers = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">FreelanceProtect</h3>
            <p className="text-sm text-muted-foreground">
              Professional legal documents for freelancers, self-employed professionals, and independent contractors worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal Documents</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Client Service Agreement</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Liability Disclaimer</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Contact Us</li>
              <li>Implementation Guide</li>
              <li>Documentation</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FreelanceProtect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFreelancers;

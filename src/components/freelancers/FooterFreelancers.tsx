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
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Client Service Agreement
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Liability Disclaimer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-muted-foreground hover:text-primary transition-colors">
                  Implementation Guide
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("faq")} className="text-muted-foreground hover:text-primary transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* All Pages Links */}
        <div className="mt-8 pt-8 border-t">
          <h3 className="font-semibold mb-4">All Legal Document Pages</h3>
          <nav aria-label="All pages" className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <a href="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Affiliate Website Legal Documents</a>
            <a href="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" className="text-sm text-muted-foreground hover:text-primary transition-colors">Photography Legal Documents</a>
            <a href="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Travel Booking Legal Documents</a>
            <a href="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Ecommerce Legal Documents</a>
            <a href="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">Online Shop Legal Documents</a>
            <a href="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dropshipping Legal Documents</a>
            <a href="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" className="text-sm text-muted-foreground hover:text-primary transition-colors">E-learning Legal Documents</a>
            <a href="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nonprofit Legal Documents</a>
            <a href="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" className="text-sm text-muted-foreground hover:text-primary transition-colors">Streaming Media Legal Documents</a>
            <a href="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Comparison Review Legal Documents</a>
            <a href="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">News Magazine Legal Documents</a>
            <a href="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Freelancers Legal Documents</a>
            <a href="/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" className="text-sm text-muted-foreground hover:text-primary transition-colors">Premium Domain Names</a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FreelanceProtect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFreelancers;

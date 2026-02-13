import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const FooterDE = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="kontakt" className="bg-primary/5 border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Legal Affiliate Agreement</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Professionelle Rechtsdokumente für Affiliate-Websites. Schützen Sie Ihr Unternehmen und stellen Sie die Compliance mit allen rechtlichen Anforderungen sicher.
            </p>
            <div className="flex gap-4">
              <a href="#" rel="nofollow" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" rel="nofollow" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" rel="nofollow" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" rel="nofollow" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">

                  Startseite
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("uber-mich")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">

                  Über Mich
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("dienstleistungen")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">

                  Dienstleistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("preise")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors">

                  Preise
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/policy ">
                  AGB
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/policy ">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors" href="/policy ">
                  Cookie-Richtlinie
                </a>
              </li>
              <li>
                <a href="/de/af" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Haftungsausschluss
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <a href="mailto:support@iaee.eu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  support@iaee.eu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Legal Affiliate Agreement. Alle Rechte vorbehalten.
          </p>
          
          {/* All Pages Links */}
          <div className="mt-8 pt-8 border-t border-border w-full">
            <h3 className="font-semibold mb-4">Alle rechtlichen Dokumentseiten</h3>
            <nav aria-label="Alle Seiten" className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
              <a href="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" className="text-sm text-muted-foreground hover:text-primary transition-colors">Premium Domains</a>
              <a href="/mwst-rechner-weltweit" className="text-sm text-muted-foreground hover:text-primary transition-colors">MwSt-Rechner</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>);

};

export default FooterDE;
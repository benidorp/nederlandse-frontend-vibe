import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

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
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("uber-mich")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Über Mich
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("dienstleistungen")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Dienstleistungen
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("preise")}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
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
                <a href="/de/af" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="/de/af" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="/de/af" className="text-sm text-muted-foreground hover:text-primary transition-colors">
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
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  +31 (0) 20 123 4567
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Amsterdam, Niederlande
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Legal Affiliate Agreement. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            <a href="/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              NL
            </a>
            <a href="/en" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              EN
            </a>
            <a href="/fr" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              FR
            </a>
            <a href="/de" className="text-sm text-primary font-semibold">
              DE
            </a>
          </div>
          
          {/* SEO Internal Linking - Hidden from view but crawlable */}
          <div className="sr-only">
            <nav aria-label="Zusätzliche Seiten">
              <a href="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy">Affiliate-Rechtsdokumente</a>
              <a href="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection">Fotografie-Rechtsdokumente</a>
              <a href="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer">Reise-Rechtsdokumente</a>
              <a href="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy">E-Commerce-Rechtsdokumente</a>
              <a href="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance">Online-Shop-Rechtsdokumente</a>
              <a href="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy">Dropshipping-Rechtsdokumente</a>
              <a href="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance">E-Learning-Rechtsdokumente</a>
              <a href="/nonprofit-charity-legal-documents-donation-terms-privacy-policy">Nonprofit-Rechtsdokumente</a>
              <a href="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license">Streaming-Rechtsdokumente</a>
              <a href="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer">Vergleichs-Rechtsdokumente</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterDE;

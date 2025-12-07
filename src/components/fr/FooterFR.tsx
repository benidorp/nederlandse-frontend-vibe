import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterFR = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" />
              <span className="text-lg font-bold">Legal Affiliate Agreement</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Documents juridiques professionnels pour les spécialistes du marketing d'affiliation. Entièrement conformes au RGPD et aux directives FTC.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("a-propos")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("tarifs")} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tarifs
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Juridique</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" rel="nofollow" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Politique de Confidentialité
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Conditions Générales
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Politique de Cookies
                </a>
              </li>
              <li>
                <a href="#" rel="nofollow" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Clause de Non-Responsabilité
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@legalaffiliateagreement.com" className="hover:text-primary transition-colors">
                  support@iaee.eu
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:+31201234567" className="hover:text-primary transition-colors">
                  +31 20 123 4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Amsterdam, Pays-Bas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Legal Affiliate Agreement. Tous droits réservés.
            </p>
          </div>
          
          {/* All Pages Links */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="font-semibold mb-4">Toutes les pages de documents juridiques</h3>
            <nav aria-label="Toutes les pages" className="grid grid-cols-2 md:grid-cols-3 gap-3">
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
              <a href="/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" className="text-sm text-muted-foreground hover:text-primary transition-colors">Noms de Domaine Premium</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFR;

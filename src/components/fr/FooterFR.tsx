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
            <div className="flex gap-4 text-sm">
              <a href="/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" className="text-muted-foreground hover:text-primary transition-colors">
                Nederlands
              </a>
              <a href="/en" className="text-muted-foreground hover:text-primary transition-colors">
                English
              </a>
              <span className="text-primary font-medium">Français</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFR;

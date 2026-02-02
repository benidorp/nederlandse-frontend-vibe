import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterPL = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <footer id="contact" className="bg-navy text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" />
              <span className="text-lg font-bold text-white">Legal Affiliate Agreement</span>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Profesjonalne dokumenty prawne dla marketerów afiliacyjnych. W pełni zgodne z wytycznymi RODO i FTC.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Strona Główna
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about-me")} className="text-sm text-white/70 hover:text-white transition-colors">
                  O Mnie
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Usługi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Cennik
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Informacje Prawne</h3>
            <ul className="space-y-2">
              <li>
                <a href="/policy#terms-and-conditions" className="text-sm text-white/80 hover:text-white transition-colors">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="/policy#privacy-policy" className="text-sm text-white/80 hover:text-white transition-colors">
                  Polityka Prywatności
                </a>
              </li>
              <li>
                <a href="/policy#disclaimer" className="text-sm text-white/80 hover:text-white transition-colors">
                  Wyłączenie Odpowiedzialności
                </a>
              </li>
              <li>
                <a href="/policy#cookie-policy" className="text-sm text-white/80 hover:text-white transition-colors">
                  Polityka Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:support@iaee.eu" className="hover:text-white transition-colors">support@iaee.eu</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/70">© 2026 Legal Affiliate Agreement. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPL;
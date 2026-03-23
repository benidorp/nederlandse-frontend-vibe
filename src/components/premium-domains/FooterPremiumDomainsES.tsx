import { Crown, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const FooterPremiumDomainsES = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Crown className="h-6 w-6 text-amber-400" />
              <span className="text-lg font-semibold text-white">Dominios Premium</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Su socio de confianza para nombres de dominio premium expirados con alta autoridad de dominio y backlinks de calidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("domains")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Portafolio de Dominios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("moz-explanation")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Sobre MOZ DA
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* All Pages - Domain Names Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Todas las Páginas</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Dominios Premium
                </Link>
              </li>
              <li>
                <Link to="/expireddomainnames/es/documentos-legales-dominios-premium" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Documentos Legales
                </Link>
              </li>
              <li>
                <Link to="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Afiliados
                </Link>
              </li>
              <li>
                <Link to="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Fotografía
                </Link>
              </li>
              <li>
                <Link to="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Viajes
                </Link>
              </li>
              <li>
                <Link to="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales E-commerce
                </Link>
              </li>
              <li>
                <Link to="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Tienda Online
                </Link>
              </li>
              <li>
                <Link to="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Dropshipping
                </Link>
              </li>
              <li>
                <Link to="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales E-learning
                </Link>
              </li>
              <li>
                <Link to="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales ONGs
                </Link>
              </li>
              <li>
                <Link to="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Streaming
                </Link>
              </li>
              <li>
                <Link to="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Reseñas
                </Link>
              </li>
              <li>
                <Link to="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Noticias
                </Link>
              </li>
              <li>
                <Link to="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Docs Legales Freelancers
                </Link>
              </li>
              <li>
                <Link to="/btw-calculator-wereldwijd" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Calculadora IVA
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@iaee.eu" 
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                support@iaee.eu
              </a>
              <p className="text-slate-500 text-xs">
                Respondemos dentro de 24 horas a su mensaje.
              </p>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <div className="flex items-center gap-3">
            <Crown className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-medium text-white">Dominios Premium</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} IAEE. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsES;
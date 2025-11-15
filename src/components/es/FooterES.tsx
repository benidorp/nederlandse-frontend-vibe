import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
const FooterES = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer id="contact" className="bg-navy text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Acuerdo Legal de Afiliados" className="h-10 w-10" />
              <span className="text-lg font-bold text-white">Acuerdo Legal de Afiliados</span>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Documentos legales profesionales para afiliados. Totalmente conforme con el RGPD y directrices FTC.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection("home")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about-me")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Sobre Mí
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing")} className="text-sm text-white/70 hover:text-white transition-colors">
                  Precios
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Información Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/policy#terms-and-conditions" className="text-sm text-white/80 hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/policy#privacy-policy" className="text-sm text-white/80 hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="/policy#disclaimer" className="text-sm text-white/80 hover:text-white transition-colors">
                  Exención de Responsabilidad
                </a>
              </li>
              <li>
                <a href="/policy#cookie-policy" className="text-sm text-white/80 hover:text-white transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Contacto</h3>
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
            <p className="text-sm text-white/70">© 2026 Acuerdo Legal de Afiliados. Todos los derechos reservados.</p>
          </div>
          
          {/* All Pages Links */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="font-semibold mb-4 text-white">Todas las Páginas de Documentos Legales</h3>
            <nav aria-label="All pages" className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Sitios Web de Afiliados</a>
              <a href="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Fotografía</a>
              <a href="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Reservas de Viajes</a>
              <a href="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Ecommerce</a>
              <a href="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Tiendas Online</a>
              <a href="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Dropshipping</a>
              <a href="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para E-learning</a>
              <a href="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Organizaciones sin Fines de Lucro</a>
              <a href="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Medios de Streaming</a>
              <a href="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Reseñas Comparativas</a>
              <a href="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Revistas de Noticias</a>
              <a href="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">Documentos Legales para Freelancers</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterES;
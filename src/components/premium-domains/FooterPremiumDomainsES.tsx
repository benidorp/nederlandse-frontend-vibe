import { Crown, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const FooterPremiumDomainsES = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold text-white">Dominios Premium</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Su socio de confianza para dominios premium con alta autoridad y valor SEO comprobado. 
              Más de 10 años de experiencia en el mercado de dominios.
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
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("domains")} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Dominios Disponibles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("why-premium")} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  ¿Qué es MOZ DA?
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-slate-400 hover:text-amber-400 transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="h-4 w-4 text-amber-400" />
                <a href="mailto:support@iaee.eu" className="hover:text-amber-400 transition-colors">
                  support@iaee.eu
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="h-4 w-4 text-amber-400 mt-1" />
                <span>Respondemos dentro de 24 horas</span>
              </li>
            </ul>
          </div>

          {/* All Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4">Todas las Páginas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Página Principal
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-affiliate-websites-terms-conditions-privacy-policy-disclosure-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Afiliados
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-ecommerce-online-shop-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para E-commerce
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-freelancers-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Freelancers
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-dropshipping-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Dropshipping
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-elearning-online-course-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para E-learning
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-travel-booking-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Viajes
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-streaming-media-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Streaming
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-photography-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Fotografía
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-nonprofit-charity-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para ONGs
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-news-magazine-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Noticias
                </Link>
              </li>
              <li>
                <Link to="/en/legal-documents-comparison-review-websites-terms-conditions-privacy-policy-cookies" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Documentos Legales para Comparativas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} IAEE Premium Domains. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsES;

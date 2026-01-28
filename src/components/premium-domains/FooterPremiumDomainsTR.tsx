import { Crown, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const FooterPremiumDomainsTR = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Crown className="h-6 w-6 text-amber-400" />
              <span className="text-lg font-semibold text-white">Premium Alan Adları</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Yüksek alan adı otoritesi ve kaliteli backlinklere sahip premium süresi dolmuş alan adları için güvenilir ortağınız.
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
            <h4 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("domains")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Alan Adı Portföyü
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("moz-explanation")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  MOZ DA Hakkında
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("faq")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Sıkça Sorulan Sorular
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* All Pages - Domain Names Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Tüm Sayfalar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Premium Alan Adları
                </Link>
              </li>
              <li>
                <Link to="/expireddomainnames/tr/premium-alan-adlari-yasal-belgeler" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Affiliate Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Fotoğrafçılık Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Seyahat Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  E-ticaret Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Online Mağaza Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Dropshipping Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  E-öğrenme Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Kar Amacı Gütmeyen Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Yayın Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  İnceleme Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Haber Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Serbest Çalışan Yasal Belgeler
                </Link>
              </li>
              <li>
                <Link to="/btw-calculator-wereldwijd" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  KDV Hesaplayıcı
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">İletişim</h4>
            <div className="space-y-3">
              <a 
                href="mailto:support@iaee.eu" 
                className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                support@iaee.eu
              </a>
              <p className="text-slate-500 text-xs">
                Mesajınıza 24 saat içinde yanıt veriyoruz.
              </p>
            </div>
          </div>
        </div>


        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
          <div className="flex items-center gap-3">
            <Crown className="h-5 w-5 text-amber-400" />
            <span className="text-sm font-medium text-white">Premium Alan Adları</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
            © {new Date().getFullYear()} IAEE. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsTR;

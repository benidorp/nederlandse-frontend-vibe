import { Link } from "react-router-dom";
import { ShoppingCart, Mail, Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const FooterPremiumDomainsHI = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold text-white">प्रीमियम डोमेन</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              उच्च अथॉरिटी और सिद्ध SEO मूल्य वाले प्रीमियम एक्सपायर्ड डोमेन में विशेषज्ञ।
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">त्वरित लिंक</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => scrollToSection("domains")} className="hover:text-amber-400 transition-colors">उपलब्ध डोमेन</button></li>
              <li><button onClick={() => scrollToSection("why-premium")} className="hover:text-amber-400 transition-colors">लाभ</button></li>
              <li><button onClick={() => scrollToSection("faq")} className="hover:text-amber-400 transition-colors">अक्सर पूछे जाने वाले प्रश्न</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition-colors">संपर्क करें</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">सभी पृष्ठ</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़</Link></li>
              <li><Link to="/expireddomainnames/nl/premium-domeinnamen-juridische-documenten" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (NL)</Link></li>
              <li><Link to="/expireddomainnames/en/legal-documents-premium-domains" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (EN)</Link></li>
              <li><Link to="/expireddomainnames/de/rechtliche-dokumente-premium-domains" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (DE)</Link></li>
              <li><Link to="/expireddomainnames/fr/documents-juridiques-domaines-premium" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (FR)</Link></li>
              <li><Link to="/expireddomainnames/es/documentos-legales-dominios-premium" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (ES)</Link></li>
              <li><Link to="/expireddomainnames/it/documenti-legali-domini-premium" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (IT)</Link></li>
              <li><Link to="/expireddomainnames/pl/dokumenty-prawne-domeny-premium" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (PL)</Link></li>
              <li><Link to="/expireddomainnames/pt/documentos-legais-dominios-premium" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (PT)</Link></li>
              <li><Link to="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (ZH)</Link></li>
              <li><Link to="/expireddomainnames/ja/houritsumonsho-puremiamudomein" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (JA)</Link></li>
              <li><Link to="/expireddomainnames/ar/wathaeq-qanuniya-nitaqat-mumayaza" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (AR)</Link></li>
              <li><Link to="/expireddomainnames/tr/yasal-belgeler-premium-alan-adlari" className="hover:text-amber-400 transition-colors">कानूनी दस्तावेज़ (TR)</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">संपर्क करें</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@expireddomainnames.co" className="hover:text-amber-400 transition-colors">info@expireddomainnames.co</a>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Stripe के माध्यम से सुरक्षित भुगतान</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Premium Domains. सर्वाधिकार सुरक्षित।</p>
          <p className="mt-2">
            उच्च अथॉरिटी एक्सपायर्ड डोमेन में निवेश करें। सिद्ध SEO मूल्य।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsHI;

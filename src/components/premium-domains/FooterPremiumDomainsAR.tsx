import { ShoppingCart, Mail, Shield, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const FooterPremiumDomainsAR = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black py-12 border-t border-slate-800" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold text-white">النطاقات المميزة</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              متخصصون في النطاقات المميزة منتهية الصلاحية ذات السلطة العالية وقيمة SEO المثبتة.
            </p>
            <div className="flex gap-3">
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
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><button onClick={() => scrollToSection("domains")} className="hover:text-amber-400 transition-colors">النطاقات المتاحة</button></li>
              <li><button onClick={() => scrollToSection("why-premium")} className="hover:text-amber-400 transition-colors">المزايا</button></li>
              <li><button onClick={() => scrollToSection("faq")} className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="hover:text-amber-400 transition-colors">اتصل بنا</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">جميع الصفحات</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link to="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" className="hover:text-amber-400 transition-colors">وثائق مواقع الأفيلييت</Link></li>
              <li><Link to="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" className="hover:text-amber-400 transition-colors">وثائق التصوير</Link></li>
              <li><Link to="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" className="hover:text-amber-400 transition-colors">وثائق السفر والفنادق</Link></li>
              <li><Link to="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" className="hover:text-amber-400 transition-colors">وثائق التجارة الإلكترونية</Link></li>
              <li><Link to="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" className="hover:text-amber-400 transition-colors">وثائق المتجر الإلكتروني</Link></li>
              <li><Link to="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" className="hover:text-amber-400 transition-colors">وثائق الدروبشيبينغ</Link></li>
              <li><Link to="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" className="hover:text-amber-400 transition-colors">وثائق التعلم الإلكتروني</Link></li>
              <li><Link to="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" className="hover:text-amber-400 transition-colors">وثائق المنظمات غير الربحية</Link></li>
              <li><Link to="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" className="hover:text-amber-400 transition-colors">وثائق البث والإعلام</Link></li>
              <li><Link to="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" className="hover:text-amber-400 transition-colors">وثائق مواقع المقارنة</Link></li>
              <li><Link to="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" className="hover:text-amber-400 transition-colors">وثائق الأخبار والمجلات</Link></li>
              <li><Link to="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" className="hover:text-amber-400 transition-colors">وثائق المستقلين</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">اتصل بنا</h4>
            <div className="space-y-2 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <a href="mailto:info@expireddomainnames.co" className="hover:text-amber-400 transition-colors">info@expireddomainnames.co</a>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>دفع آمن عبر Stripe</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Premium Domains. جميع الحقوق محفوظة.</p>
          <p className="mt-2">
            استثمر في نطاقات منتهية الصلاحية ذات سلطة عالية. قيمة SEO مثبتة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPremiumDomainsAR;
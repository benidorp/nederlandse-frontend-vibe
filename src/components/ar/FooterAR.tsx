import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterAR = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Legal Affiliate Agreement" className="h-8 w-8" />
              <span className="text-lg font-bold">Legal Affiliate Agreement</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              وثائق قانونية احترافية لمواقع الأفلييت. متوافقة مع GDPR وFTC والقانون الدولي.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">الرئيسية</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">الخدمات</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">الأسعار</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">اتصل بنا</h3>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@iaee.eu" className="hover:text-primary-foreground transition-colors">
                  info@iaee.eu
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Legal Affiliate Agreement. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterAR;
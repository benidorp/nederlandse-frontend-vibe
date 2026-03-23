import { Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const FooterHI = () => {
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
              एफिलिएट वेबसाइटों के लिए पेशेवर कानूनी दस्तावेज़। GDPR, FTC और अंतर्राष्ट्रीय कानून का अनुपालन।
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">त्वरित लिंक</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">होम</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">सेवाएं</a></li>
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">मूल्य निर्धारण</a></li>
              <li><a href="#faq" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">संपर्क</h3>
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
          <p>&copy; {currentYear} Legal Affiliate Agreement. सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterHI;
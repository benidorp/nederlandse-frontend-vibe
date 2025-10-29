import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import LegalFooterEN from "@/components/en/LegalFooterEN";
const FooterNewsMagazine = () => {
  return <footer id="contact" className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Legal Documents" className="h-10 w-10" />
              <span className="font-bold text-lg">Legal Docs</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional legal documents for news and magazine websites. GDPR-compliant, ready to use.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about-me" className="text-muted-foreground hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal Documents</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Editorial Policy</a></li>
              <li><a href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Copyright Policy</a></li>
              <li><a href="/policy" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>support@iaee.eu</span>
              </li>
              
              
            </ul>
          </div>
        </div>

        {/* SEO Internal Links - Screen Reader Only */}
        <div className="sr-only">
          <nav aria-label="Internal legal document pages">
            <a href="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy">Affiliate Website Legal Documents</a>
            <a href="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection">Photography Legal Documents</a>
            <a href="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer">Travel Booking Legal Documents</a>
            <a href="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy">Ecommerce Legal Documents</a>
            <a href="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance">Online Shop Legal Documents</a>
            <a href="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy">Dropshipping Legal Documents</a>
            <a href="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance">E-learning Legal Documents</a>
            <a href="/nonprofit-charity-legal-documents-donation-terms-privacy-policy">Nonprofit Legal Documents</a>
            <a href="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license">Streaming Media Legal Documents</a>
            <a href="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer">Comparison Review Legal Documents</a>
            <a href="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy">News Magazine Legal Documents</a>
          </nav>
        </div>

        
      </div>
    </footer>;
};
export default FooterNewsMagazine;
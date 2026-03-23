import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";
const FooterKO = () => {
  const scrollToSection = (id: string) => { const element = document.getElementById(id); element?.scrollIntoView({ behavior: "smooth" }); };
  return <footer id="contact" className="bg-navy text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4"><img src={logo} alt="Legal Affiliate Agreement" className="h-10 w-10" /><span className="text-lg font-bold text-white">Legal Affiliate Agreement</span></div>
            <p className="text-sm text-white/70 mb-4">제휴 마케터를 위한 전문 법적 문서. GDPR 및 FTC 완전 준수.</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">빠른 링크</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection("home")} className="text-sm text-white/70 hover:text-white transition-colors">홈</button></li>
              <li><button onClick={() => scrollToSection("about-me")} className="text-sm text-white/70 hover:text-white transition-colors">소개</button></li>
              <li><button onClick={() => scrollToSection("services")} className="text-sm text-white/70 hover:text-white transition-colors">서비스</button></li>
              <li><button onClick={() => scrollToSection("pricing")} className="text-sm text-white/70 hover:text-white transition-colors">가격</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">법적 정보</h3>
            <ul className="space-y-2">
              <li><a href="/policy#terms-and-conditions" className="text-sm text-white/80 hover:text-white transition-colors">이용약관</a></li>
              <li><a href="/policy#privacy-policy" className="text-sm text-white/80 hover:text-white transition-colors">개인정보보호정책</a></li>
              <li><a href="/policy#disclaimer" className="text-sm text-white/80 hover:text-white transition-colors">면책조항</a></li>
              <li><a href="/policy#cookie-policy" className="text-sm text-white/80 hover:text-white transition-colors">쿠키 정책</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-white">연락처</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/70"><Mail className="h-4 w-4 mt-0.5 flex-shrink-0" /><a href="mailto:support@iaee.eu" className="hover:text-white transition-colors">support@iaee.eu</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-sm text-white/70">© 2026 Legal Affiliate Agreement. 모든 권리 보유.</p></div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="font-semibold mb-4 text-white">모든 법적 문서 페이지</h3>
            <nav aria-label="All pages" className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <a href="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" className="text-sm text-white/70 hover:text-white transition-colors">Affiliate Website Legal Documents</a>
              <a href="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" className="text-sm text-white/70 hover:text-white transition-colors">Photography Legal Documents</a>
              <a href="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" className="text-sm text-white/70 hover:text-white transition-colors">Travel Booking Legal Documents</a>
              <a href="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" className="text-sm text-white/70 hover:text-white transition-colors">Ecommerce Legal Documents</a>
              <a href="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" className="text-sm text-white/70 hover:text-white transition-colors">Online Shop Legal Documents</a>
              <a href="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" className="text-sm text-white/70 hover:text-white transition-colors">Dropshipping Legal Documents</a>
              <a href="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" className="text-sm text-white/70 hover:text-white transition-colors">E-learning Legal Documents</a>
              <a href="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">Nonprofit Legal Documents</a>
              <a href="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" className="text-sm text-white/70 hover:text-white transition-colors">Streaming Media Legal Documents</a>
              <a href="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" className="text-sm text-white/70 hover:text-white transition-colors">Comparison Review Legal Documents</a>
              <a href="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" className="text-sm text-white/70 hover:text-white transition-colors">News Magazine Legal Documents</a>
              <a href="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" className="text-sm text-white/70 hover:text-white transition-colors">Freelancers Legal Documents</a>
              <a href="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" className="text-sm text-white/70 hover:text-white transition-colors">Premium Domain Names</a>
              <a href="/btw-calculator-wereldwijd" className="text-sm text-white/70 hover:text-white transition-colors">VAT Calculator</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterKO;
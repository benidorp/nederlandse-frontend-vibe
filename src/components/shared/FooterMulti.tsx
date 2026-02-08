import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const footerData: Record<string, Record<string, string>> = {
  cs: { brand: "Legal Affiliate Agreement", desc: "Profesionální právní dokumenty pro affiliate marketéry. Plně v souladu s GDPR a FTC.", quick: "Rychlé odkazy", home: "Domů", about: "O mně", services: "Služby", pricing: "Ceník", legal: "Právní informace", terms: "Obchodní podmínky", privacy: "Zásady ochrany osobních údajů", disclaimer: "Prohlášení", cookie: "Zásady cookies", contact: "Kontakt", allPages: "Všechny stránky právních dokumentů", copy: "© 2026 Legal Affiliate Agreement. Všechna práva vyhrazena." },
  hu: { brand: "Legal Affiliate Agreement", desc: "Professzionális jogi dokumentumok affiliate marketingeseknek. GDPR és FTC megfelelő.", quick: "Gyors linkek", home: "Főoldal", about: "Rólam", services: "Szolgáltatások", pricing: "Árak", legal: "Jogi információk", terms: "Általános feltételek", privacy: "Adatvédelmi irányelvek", disclaimer: "Nyilatkozat", cookie: "Cookie szabályzat", contact: "Kapcsolat", allPages: "Összes jogi dokumentum oldal", copy: "© 2026 Legal Affiliate Agreement. Minden jog fenntartva." },
  uk: { brand: "Legal Affiliate Agreement", desc: "Професійні юридичні документи для affiliate маркетологів. Відповідність GDPR та FTC.", quick: "Швидкі посилання", home: "Головна", about: "Про мене", services: "Послуги", pricing: "Ціни", legal: "Юридична інформація", terms: "Умови використання", privacy: "Політика конфіденційності", disclaimer: "Застереження", cookie: "Політика cookies", contact: "Контакт", allPages: "Усі сторінки юридичних документів", copy: "© 2026 Legal Affiliate Agreement. Усі права захищені." },
  sk: { brand: "Legal Affiliate Agreement", desc: "Profesionálne právne dokumenty pre affiliate marketérov. V súlade s GDPR a FTC.", quick: "Rýchle odkazy", home: "Domov", about: "O mne", services: "Služby", pricing: "Cenník", legal: "Právne informácie", terms: "Obchodné podmienky", privacy: "Zásady ochrany osobných údajov", disclaimer: "Vyhlásenie", cookie: "Zásady cookies", contact: "Kontakt", allPages: "Všetky stránky právnych dokumentov", copy: "© 2026 Legal Affiliate Agreement. Všetky práva vyhradené." },
  hr: { brand: "Legal Affiliate Agreement", desc: "Profesionalni pravni dokumenti za affiliate marketere. Usklađeni s GDPR i FTC.", quick: "Brze veze", home: "Početna", about: "O meni", services: "Usluge", pricing: "Cijene", legal: "Pravne informacije", terms: "Uvjeti korištenja", privacy: "Politika privatnosti", disclaimer: "Izjava o odricanju", cookie: "Politika kolačića", contact: "Kontakt", allPages: "Sve stranice pravnih dokumenata", copy: "© 2026 Legal Affiliate Agreement. Sva prava pridržana." },
  sr: { brand: "Legal Affiliate Agreement", desc: "Професионални правни документи за affiliate маркетере. Усклађени са GDPR и FTC.", quick: "Брзе везе", home: "Почетна", about: "О мени", services: "Услуге", pricing: "Цене", legal: "Правне информације", terms: "Услови коришћења", privacy: "Политика приватности", disclaimer: "Изјава о одрицању", cookie: "Политика колачића", contact: "Контакт", allPages: "Све странице правних докумената", copy: "© 2026 Legal Affiliate Agreement. Сва права задржана." },
  sl: { brand: "Legal Affiliate Agreement", desc: "Profesionalni pravni dokumenti za affiliate tržnike. Skladni z GDPR in FTC.", quick: "Hitre povezave", home: "Domov", about: "O meni", services: "Storitve", pricing: "Cenik", legal: "Pravne informacije", terms: "Splošni pogoji", privacy: "Pravilnik o zasebnosti", disclaimer: "Izjava o omejitvi odgovornosti", cookie: "Pravilnik o piškotkih", contact: "Kontakt", allPages: "Vse strani pravnih dokumentov", copy: "© 2026 Legal Affiliate Agreement. Vse pravice pridržane." },
};

interface FooterMultiProps { lang: string; }
const FooterMulti = ({ lang }: FooterMultiProps) => {
  const t = footerData[lang];
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  return (
    <footer id="contact" className="bg-navy text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4"><img src={logo} alt={t.brand} className="h-10 w-10" /><span className="text-lg font-bold text-white">{t.brand}</span></div>
            <p className="text-sm text-white/70 mb-4">{t.desc}</p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferrer" className="text-white/70 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          <div><h3 className="font-semibold mb-4 text-white">{t.quick}</h3><ul className="space-y-2">
            <li><button onClick={() => scrollToSection("home")} className="text-sm text-white/70 hover:text-white transition-colors">{t.home}</button></li>
            <li><button onClick={() => scrollToSection("about-me")} className="text-sm text-white/70 hover:text-white transition-colors">{t.about}</button></li>
            <li><button onClick={() => scrollToSection("services")} className="text-sm text-white/70 hover:text-white transition-colors">{t.services}</button></li>
            <li><button onClick={() => scrollToSection("pricing")} className="text-sm text-white/70 hover:text-white transition-colors">{t.pricing}</button></li>
          </ul></div>
          <div><h3 className="font-semibold mb-4 text-white">{t.legal}</h3><ul className="space-y-2">
            <li><a href="/policy#terms-and-conditions" className="text-sm text-white/80 hover:text-white transition-colors">{t.terms}</a></li>
            <li><a href="/policy#privacy-policy" className="text-sm text-white/80 hover:text-white transition-colors">{t.privacy}</a></li>
            <li><a href="/policy#disclaimer" className="text-sm text-white/80 hover:text-white transition-colors">{t.disclaimer}</a></li>
            <li><a href="/policy#cookie-policy" className="text-sm text-white/80 hover:text-white transition-colors">{t.cookie}</a></li>
          </ul></div>
          <div><h3 className="font-semibold mb-4 text-white">{t.contact}</h3><ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-white/70"><Mail className="h-4 w-4 mt-0.5 flex-shrink-0" /><a href="mailto:support@iaee.eu" className="hover:text-white transition-colors">support@iaee.eu</a></li>
          </ul></div>
        </div>
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-white/70">{t.copy}</p>
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="font-semibold mb-4 text-white">{t.allPages}</h3>
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
    </footer>
  );
};

export const FooterCS = () => <FooterMulti lang="cs" />;
export const FooterHU = () => <FooterMulti lang="hu" />;
export const FooterUK = () => <FooterMulti lang="uk" />;
export const FooterSK = () => <FooterMulti lang="sk" />;
export const FooterHR = () => <FooterMulti lang="hr" />;
export const FooterSR = () => <FooterMulti lang="sr" />;
export const FooterSL = () => <FooterMulti lang="sl" />;

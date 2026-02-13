import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import English from "./pages/English";
import Af from "./pages/Af";
import AfLegalEN from "./pages/AfLegalEN";
import AfLegalDE from "./pages/AfLegalDE";
import AfLegalFR from "./pages/AfLegalFR";
import AfLegalES from "./pages/AfLegalES";
import AfLegalIT from "./pages/AfLegalIT";
import AfLegalPT from "./pages/AfLegalPT";
import AfLegalSE from "./pages/AfLegalSE";
import AfLegalPL from "./pages/AfLegalPL";
import AfLegalGR from "./pages/AfLegalGR";
import AfLegalDK from "./pages/AfLegalDK";
import AfLegalNO from "./pages/AfLegalNO";
import AfLegalRO from "./pages/AfLegalRO";
import AfLegalBG from "./pages/AfLegalBG";
import AfLegalFI from "./pages/AfLegalFI";
import AfLegalRU from "./pages/AfLegalRU";
import AfLegalCN from "./pages/AfLegalCN";
import AfLegalHI from "./pages/AfLegalHI";
import AfLegalJP from "./pages/AfLegalJP";
import AfLegalSA from "./pages/AfLegalSA";
import AfLegalKR from "./pages/AfLegalKR";
import AfLegalCZ from "./pages/AfLegalCZ";
import AfLegalHU from "./pages/AfLegalHU";
import AfLegalUA from "./pages/AfLegalUA";
import AfLegalSK from "./pages/AfLegalSK";
import AfLegalHR from "./pages/AfLegalHR";
import AfLegalRS from "./pages/AfLegalRS";
import AfLegalSI from "./pages/AfLegalSI";
import Languages from "./pages/Languages";
import LegalEN from "./pages/LegalEN";
import Photography from "./pages/Photography";
import PhotographyDE from "./pages/PhotographyDE";
import PhotographyFR from "./pages/PhotographyFR";
import TravelBooking from "./pages/TravelBooking";
import Ecommerce from "./pages/Ecommerce";
import OnlineShop from "./pages/OnlineShop";
import Dropshipping from "./pages/Dropshipping";
import Elearning from "./pages/Elearning";
import Nonprofit from "./pages/Nonprofit";
import StreamingMedia from "./pages/StreamingMedia";
import ComparisonReview from "./pages/ComparisonReview";
import NewsMagazine from "./pages/NewsMagazine";
import Freelancers from "./pages/Freelancers";
import Spanish from "./pages/Spanish";
import VATCalculator from "./pages/VATCalculator";
import VATCalculatorEN from "./pages/VATCalculatorEN";
import VATCalculatorES from "./pages/VATCalculatorES";
import VATCalculatorDE from "./pages/VATCalculatorDE";
import VATCalculatorFR from "./pages/VATCalculatorFR";
import VATCalculatorIT from "./pages/VATCalculatorIT";
import VATCalculatorPL from "./pages/VATCalculatorPL";
import LanguageDetector from "./components/LanguageDetector";
import NotFound from "./pages/NotFound";
import PremiumDomains from "./pages/PremiumDomains";
import PremiumDomainsLegal from "./pages/PremiumDomainsLegal";
import PremiumDomainsEN from "./pages/PremiumDomainsEN";
import PremiumDomainsLegalEN from "./pages/PremiumDomainsLegalEN";
import PremiumDomainsES from "./pages/PremiumDomainsES";
import PremiumDomainsLegalES from "./pages/PremiumDomainsLegalES";
import PremiumDomainsFR from "./pages/PremiumDomainsFR";
import PremiumDomainsLegalFR from "./pages/PremiumDomainsLegalFR";
import PremiumDomainsDE from "./pages/PremiumDomainsDE";
import PremiumDomainsLegalDE from "./pages/PremiumDomainsLegalDE";
import PremiumDomainsIT from "./pages/PremiumDomainsIT";
import PremiumDomainsLegalIT from "./pages/PremiumDomainsLegalIT";
import PremiumDomainsPL from "./pages/PremiumDomainsPL";
import PremiumDomainsLegalPL from "./pages/PremiumDomainsLegalPL";
import PremiumDomainsPT from "./pages/PremiumDomainsPT";
import PremiumDomainsLegalPT from "./pages/PremiumDomainsLegalPT";
import PremiumDomainsZH from "./pages/PremiumDomainsZH";
import PremiumDomainsLegalZH from "./pages/PremiumDomainsLegalZH";
import PremiumDomainsJA from "./pages/PremiumDomainsJA";
import PremiumDomainsLegalJA from "./pages/PremiumDomainsLegalJA";
import PremiumDomainsAR from "./pages/PremiumDomainsAR";
import PremiumDomainsLegalAR from "./pages/PremiumDomainsLegalAR";
import PremiumDomainsTR from "./pages/PremiumDomainsTR";
import PremiumDomainsLegalTR from "./pages/PremiumDomainsLegalTR";
import PremiumDomainsHI from "./pages/PremiumDomainsHI";
import PremiumDomainsLegalHI from "./pages/PremiumDomainsLegalHI";

// Legal Documents Multi-language Pages
import AffiliateDE from "./pages/AffiliateDE";
import AffiliateFR from "./pages/AffiliateFR";
import AffiliateIT from "./pages/AffiliateIT";
import AffiliatePT from "./pages/AffiliatePT";
import AffiliateSV from "./pages/AffiliateSV";
import AffiliatePL from "./pages/AffiliatePL";
import AffiliateEL from "./pages/AffiliateEL";
import AffiliateDA from "./pages/AffiliateDA";
import AffiliateNO from "./pages/AffiliateNO";
import AffiliateRO from "./pages/AffiliateRO";
import AffiliateBG from "./pages/AffiliateBG";
import AffiliateFI from "./pages/AffiliateFI";
import AffiliateRU from "./pages/AffiliateRU";
import AffiliateZH from "./pages/AffiliateZH";
import AffiliateHI from "./pages/AffiliateHI";
import AffiliateJA from "./pages/AffiliateJA";
import AffiliateAR from "./pages/AffiliateAR";
import AffiliateKO from "./pages/AffiliateKO";
import AffiliateCS from "./pages/AffiliateCS";
import AffiliateHU from "./pages/AffiliateHU";
import AffiliateUK from "./pages/AffiliateUK";
import AffiliateSK from "./pages/AffiliateSK";
import AffiliateHR from "./pages/AffiliateHR";
import AffiliateSR from "./pages/AffiliateSR";
import AffiliateSL from "./pages/AffiliateSL";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageDetector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" element={<English />} />
          <Route path="/policy" element={<LegalEN />} />
          <Route path="/af" element={<Af />} />
          <Route path="/en/af" element={<AfLegalEN />} />
          <Route path="/de/af" element={<AfLegalDE />} />
          <Route path="/fr/af" element={<AfLegalFR />} />
          <Route path="/es/af" element={<AfLegalES />} />
          <Route path="/it/af" element={<AfLegalIT />} />
          <Route path="/pt/af" element={<AfLegalPT />} />
          <Route path="/se/af" element={<AfLegalSE />} />
          <Route path="/pl/af" element={<AfLegalPL />} />
          <Route path="/gr/af" element={<AfLegalGR />} />
          <Route path="/dk/af" element={<AfLegalDK />} />
          <Route path="/no/af" element={<AfLegalNO />} />
          <Route path="/ro/af" element={<AfLegalRO />} />
          <Route path="/bg/af" element={<AfLegalBG />} />
          <Route path="/fi/af" element={<AfLegalFI />} />
          <Route path="/ru/af" element={<AfLegalRU />} />
          <Route path="/cn/af" element={<AfLegalCN />} />
          <Route path="/hi/af" element={<AfLegalHI />} />
          <Route path="/jp/af" element={<AfLegalJP />} />
          <Route path="/sa/af" element={<AfLegalSA />} />
          <Route path="/kr/af" element={<AfLegalKR />} />
          <Route path="/cz/af" element={<AfLegalCZ />} />
          <Route path="/hu/af" element={<AfLegalHU />} />
          <Route path="/ua/af" element={<AfLegalUA />} />
          <Route path="/sk/af" element={<AfLegalSK />} />
          <Route path="/hr/af" element={<AfLegalHR />} />
          <Route path="/rs/af" element={<AfLegalRS />} />
          <Route path="/si/af" element={<AfLegalSI />} />
          <Route path="/docs-1" element={<Languages />} />
          <Route path="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" element={<Photography />} />
          <Route path="/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss" element={<PhotographyDE />} />
          <Route path="/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause" element={<PhotographyFR />} />
          <Route path="/must-have-legal-protection-for-every-hotel-and-travel-website-terms-conditions-privacy-policy-cancellation-policy-disclaimer" element={<TravelBooking />} />
          <Route path="/essential-legal-documents-ecommerce-website-terms-conditions-privacy-policy-return-policy-shipping-policy" element={<Ecommerce />} />
          <Route path="/webshop-online-business-legal-protection-terms-privacy-policy-cookie-policy-gdpr-compliance" element={<OnlineShop />} />
          <Route path="/dropshipping-business-legal-protection-terms-conditions-privacy-policy-supplier-agreement-refund-policy" element={<Dropshipping />} />
          <Route path="/elearning-platform-legal-documents-terms-privacy-policy-gdpr-compliance" element={<Elearning />} />
          <Route path="/nonprofit-charity-legal-documents-donation-terms-privacy-policy" element={<Nonprofit />} />
          <Route path="/streaming-media-legal-documents-terms-conditions-privacy-policy-dmca-content-license" element={<StreamingMedia />} />
          <Route path="/comparison-review-website-legal-documents-terms-privacy-affiliate-disclosure-disclaimer" element={<ComparisonReview />} />
          <Route path="/news-magazine-legal-documents-terms-conditions-privacy-policy-copyright-editorial-policy" element={<NewsMagazine />} />
          <Route path="/freelancers-self-employed-legal-documents-contracts-terms-privacy-policy" element={<Freelancers />} />
          
          {/* Essential Legal Documents - Multi-language Routes */}
          <Route path="/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies" element={<Spanish />} />
          <Route path="/de/wesentliche-rechtliche-dokumente-affiliate-website-agb-datenschutz-impressum-cookies" element={<AffiliateDE />} />
          <Route path="/fr/documents-juridiques-essentiels-site-affiliation-conditions-politique-confidentialite-mentions-legales" element={<AffiliateFR />} />
          <Route path="/it/documenti-legali-essenziali-sito-affiliazione-termini-privacy-cookie" element={<AffiliateIT />} />
          <Route path="/pt/documentos-legais-essenciais-site-afiliados-termos-privacidade-cookies" element={<AffiliatePT />} />
          <Route path="/sv/juridiska-dokument-affiliate-webbplats-villkor-integritetspolicy-cookies" element={<AffiliateSV />} />
          <Route path="/pl/dokumenty-prawne-strona-afiliacyjna-regulamin-polityka-prywatnosci-cookies" element={<AffiliatePL />} />
          <Route path="/el/nomika-eggrafa-affiliate-website-oroi-politiki-aporritou-cookies" element={<AffiliateEL />} />
          <Route path="/da/juridiske-dokumenter-affiliate-website-vilkaar-privatlivspolitik-cookies" element={<AffiliateDA />} />
          <Route path="/no/juridiske-dokumenter-affiliate-nettsted-vilkaar-personvern-cookies" element={<AffiliateNO />} />
          <Route path="/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies" element={<AffiliateRO />} />
          <Route path="/bg/pravni-dokumenti-affiliate-sait-usloviya-politika-poveritelnost-biskvitki" element={<AffiliateBG />} />
          <Route path="/fi/juridiset-asiakirjat-affiliate-sivusto-ehdot-tietosuojakaytanto-evasteet" element={<AffiliateFI />} />
          <Route path="/ru/yuridicheskie-dokumenty-affiliate-sait-usloviya-politika-konfidencialnosti-cookies" element={<AffiliateRU />} />
          <Route path="/zh/falv-wenjian-lianmeng-wangzhan-tiaokuan-yinsi-zhengce-cookies" element={<AffiliateZH />} />
          <Route path="/hi/kanooni-dastavez-affiliate-website-niyam-gopyata-niti-cookies" element={<AffiliateHI />} />
          <Route path="/ja/houritsumonsho-affiliate-saito-riyoukiyaku-privacy-policy-cookies" element={<AffiliateJA />} />
          <Route path="/ar/wathaeq-qanuniya-mawqi-affiliate-shurut-siyasat-khususiya-cookies" element={<AffiliateAR />} />
          <Route path="/ko/beobjeok-munseo-affiliate-websaiteu-iyongyakgwan-gaeinjeongbo-cookies" element={<AffiliateKO />} />
          <Route path="/cs/pravni-dokumenty-affiliate-web-podminky-zasady-ochrany-soukromi-cookies" element={<AffiliateCS />} />
          <Route path="/hu/jogi-dokumentumok-affiliate-weboldal-felhasznalasi-feltetelek-adatvedelem-cookies" element={<AffiliateHU />} />
          <Route path="/uk/yurydychni-dokumenty-affiliate-sait-umovy-polityka-konfidentsiinosti-cookies" element={<AffiliateUK />} />
          <Route path="/sk/pravne-dokumenty-affiliate-web-podmienky-ochrana-sukromia-cookies" element={<AffiliateSK />} />
          <Route path="/hr/pravni-dokumenti-affiliate-web-stranica-uvjeti-privatnost-kolacici" element={<AffiliateHR />} />
          <Route path="/sr/pravni-dokumenti-affiliate-sajt-uslovi-politika-privatnosti-kolacici" element={<AffiliateSR />} />
          <Route path="/sl/pravni-dokumenti-affiliate-spletna-stran-pogoji-zasebnost-piskotki" element={<AffiliateSL />} />
          
          {/* VAT Calculator Routes */}
          <Route path="/btw-calculator-wereldwijd" element={<VATCalculator />} />
          <Route path="/vat-calculator-worldwide" element={<VATCalculatorEN />} />
          <Route path="/calculadora-iva-mundial" element={<VATCalculatorES />} />
          <Route path="/mwst-rechner-weltweit" element={<VATCalculatorDE />} />
          <Route path="/calculateur-tva-mondial" element={<VATCalculatorFR />} />
          <Route path="/calcolatore-iva-mondiale" element={<VATCalculatorIT />} />
          <Route path="/kalkulator-vat-swiatowy" element={<VATCalculatorPL />} />
          
          {/* Premium Domains Routes */}
          <Route path="/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" element={<PremiumDomains />} />
          <Route path="/expireddomainnames/nl/premium-domeinnamen-juridische-documenten" element={<PremiumDomainsLegal />} />
          <Route path="/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" element={<PremiumDomainsEN />} />
          <Route path="/expireddomainnames/en/premium-domains-legal-documents" element={<PremiumDomainsLegalEN />} />
          <Route path="/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" element={<PremiumDomainsES />} />
          <Route path="/expireddomainnames/es/documentos-legales-dominios-premium" element={<PremiumDomainsLegalES />} />
          <Route path="/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" element={<PremiumDomainsFR />} />
          <Route path="/expireddomainnames/fr/documents-juridiques-domaines-premium" element={<PremiumDomainsLegalFR />} />
          <Route path="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" element={<PremiumDomainsDE />} />
          <Route path="/expireddomainnames/de/rechtliche-dokumente-premium-domains" element={<PremiumDomainsLegalDE />} />
          <Route path="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" element={<PremiumDomainsIT />} />
          <Route path="/expireddomainnames/it/documenti-legali-domini-premium" element={<PremiumDomainsLegalIT />} />
          <Route path="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" element={<PremiumDomainsPL />} />
          <Route path="/expireddomainnames/pl/dokumenty-prawne-domeny-premium" element={<PremiumDomainsLegalPL />} />
          <Route path="/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" element={<PremiumDomainsPT />} />
          <Route path="/expireddomainnames/pt/documentos-legais-dominios-premium" element={<PremiumDomainsLegalPT />} />
          <Route path="/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi" element={<PremiumDomainsZH />} />
          <Route path="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming" element={<PremiumDomainsLegalZH />} />
          <Route path="/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" element={<PremiumDomainsJA />} />
          <Route path="/expireddomainnames/ja/houritsumonsho-puremiamudomein" element={<PremiumDomainsLegalJA />} />
          <Route path="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" element={<PremiumDomainsAR />} />
          <Route path="/expireddomainnames/ar/wathaeq-qanuniya-nitaqat-mumayaza" element={<PremiumDomainsLegalAR />} />
          <Route path="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" element={<PremiumDomainsTR />} />
          <Route path="/expireddomainnames/tr/premium-alan-adlari-yasal-belgeler" element={<PremiumDomainsLegalTR />} />
          <Route path="/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya" element={<PremiumDomainsHI />} />
          <Route path="/expireddomainnames/hi/premium-domain-kanooni-dastavez" element={<PremiumDomainsLegalHI />} />
          
          {/* Redirects from old URLs */}
          <Route path="/expireddomeinnamen/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" element={<Navigate to="/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" replace />} />
          <Route path="/expireddomeinnamen/nl/premium-domeinnamen-juridische-documenten" element={<Navigate to="/expireddomainnames/nl/premium-domeinnamen-juridische-documenten" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LanguageDetector from "./components/LanguageDetector";

// Eagerly load Home for fastest initial paint
import Home from "./pages/Home";

// Lazy load all other pages for code splitting
const English = lazy(() => import("./pages/English"));
const Af = lazy(() => import("./pages/Af"));
const AfLegalEN = lazy(() => import("./pages/AfLegalEN"));
const AfLegalDE = lazy(() => import("./pages/AfLegalDE"));
const AfLegalFR = lazy(() => import("./pages/AfLegalFR"));
const AfLegalES = lazy(() => import("./pages/AfLegalES"));
const AfLegalIT = lazy(() => import("./pages/AfLegalIT"));
const AfLegalPT = lazy(() => import("./pages/AfLegalPT"));
const Languages = lazy(() => import("./pages/Languages"));
const LegalEN = lazy(() => import("./pages/LegalEN"));
const Photography = lazy(() => import("./pages/Photography"));
const PhotographyDE = lazy(() => import("./pages/PhotographyDE"));
const PhotographyFR = lazy(() => import("./pages/PhotographyFR"));
const PhotographyES = lazy(() => import("./pages/PhotographyES"));
const PhotographyIT = lazy(() => import("./pages/PhotographyIT"));
const PhotographySV = lazy(() => import("./pages/PhotographySV"));
const PhotographyPL = lazy(() => import("./pages/PhotographyPL"));
const PhotographyEL = lazy(() => import("./pages/PhotographyEL"));
const PhotographyDA = lazy(() => import("./pages/PhotographyDA"));
const PhotographyNO = lazy(() => import("./pages/PhotographyNO"));
const PhotographyRO = lazy(() => import("./pages/PhotographyRO"));
const PhotographyBG = lazy(() => import("./pages/PhotographyBG"));
const PhotographyFI = lazy(() => import("./pages/PhotographyFI"));
const PhotographyRU = lazy(() => import("./pages/PhotographyRU"));
const PhotographyZH = lazy(() => import("./pages/PhotographyZH"));
const PhotographyHI = lazy(() => import("./pages/PhotographyHI"));
const PhotographyJA = lazy(() => import("./pages/PhotographyJA"));
const PhotographyAR = lazy(() => import("./pages/PhotographyAR"));
const PhotographyKO = lazy(() => import("./pages/PhotographyKO"));
const PhotographyCS = lazy(() => import("./pages/PhotographyCS"));
const PhotographyHU = lazy(() => import("./pages/PhotographyHU"));
const PhotographyUK = lazy(() => import("./pages/PhotographyUK"));
const PhotographySK = lazy(() => import("./pages/PhotographySK"));
const PhotographyHR = lazy(() => import("./pages/PhotographyHR"));
const PhotographySR = lazy(() => import("./pages/PhotographySR"));
const PhotographySL = lazy(() => import("./pages/PhotographySL"));
const PhotographyTR = lazy(() => import("./pages/PhotographyTR"));
const TravelBooking = lazy(() => import("./pages/TravelBooking"));
const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const OnlineShop = lazy(() => import("./pages/OnlineShop"));
const Dropshipping = lazy(() => import("./pages/Dropshipping"));
const Elearning = lazy(() => import("./pages/Elearning"));
const Nonprofit = lazy(() => import("./pages/Nonprofit"));
const StreamingMedia = lazy(() => import("./pages/StreamingMedia"));
const ComparisonReview = lazy(() => import("./pages/ComparisonReview"));
const NewsMagazine = lazy(() => import("./pages/NewsMagazine"));
const Freelancers = lazy(() => import("./pages/Freelancers"));
const Spanish = lazy(() => import("./pages/Spanish"));
const VATCalculator = lazy(() => import("./pages/VATCalculator"));
const VATCalculatorEN = lazy(() => import("./pages/VATCalculatorEN"));
const VATCalculatorES = lazy(() => import("./pages/VATCalculatorES"));
const VATCalculatorDE = lazy(() => import("./pages/VATCalculatorDE"));
const VATCalculatorFR = lazy(() => import("./pages/VATCalculatorFR"));
const VATCalculatorIT = lazy(() => import("./pages/VATCalculatorIT"));
const VATCalculatorPL = lazy(() => import("./pages/VATCalculatorPL"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PremiumDomains = lazy(() => import("./pages/PremiumDomains"));
const PremiumDomainsLegal = lazy(() => import("./pages/PremiumDomainsLegal"));
const PremiumDomainsEN = lazy(() => import("./pages/PremiumDomainsEN"));
const PremiumDomainsLegalEN = lazy(() => import("./pages/PremiumDomainsLegalEN"));
const PremiumDomainsES = lazy(() => import("./pages/PremiumDomainsES"));
const PremiumDomainsLegalES = lazy(() => import("./pages/PremiumDomainsLegalES"));
const PremiumDomainsFR = lazy(() => import("./pages/PremiumDomainsFR"));
const PremiumDomainsLegalFR = lazy(() => import("./pages/PremiumDomainsLegalFR"));
const PremiumDomainsDE = lazy(() => import("./pages/PremiumDomainsDE"));
const PremiumDomainsLegalDE = lazy(() => import("./pages/PremiumDomainsLegalDE"));
const PremiumDomainsIT = lazy(() => import("./pages/PremiumDomainsIT"));
const PremiumDomainsLegalIT = lazy(() => import("./pages/PremiumDomainsLegalIT"));
const PremiumDomainsPL = lazy(() => import("./pages/PremiumDomainsPL"));
const PremiumDomainsLegalPL = lazy(() => import("./pages/PremiumDomainsLegalPL"));
const PremiumDomainsPT = lazy(() => import("./pages/PremiumDomainsPT"));
const PremiumDomainsLegalPT = lazy(() => import("./pages/PremiumDomainsLegalPT"));
const PremiumDomainsZH = lazy(() => import("./pages/PremiumDomainsZH"));
const PremiumDomainsLegalZH = lazy(() => import("./pages/PremiumDomainsLegalZH"));
const PremiumDomainsJA = lazy(() => import("./pages/PremiumDomainsJA"));
const PremiumDomainsLegalJA = lazy(() => import("./pages/PremiumDomainsLegalJA"));
const PremiumDomainsAR = lazy(() => import("./pages/PremiumDomainsAR"));
const PremiumDomainsLegalAR = lazy(() => import("./pages/PremiumDomainsLegalAR"));
const PremiumDomainsTR = lazy(() => import("./pages/PremiumDomainsTR"));
const PremiumDomainsLegalTR = lazy(() => import("./pages/PremiumDomainsLegalTR"));
const PremiumDomainsHI = lazy(() => import("./pages/PremiumDomainsHI"));
const PremiumDomainsLegalHI = lazy(() => import("./pages/PremiumDomainsLegalHI"));

// Legal Documents Multi-language Pages
const AffiliateDE = lazy(() => import("./pages/AffiliateDE"));
const AffiliateFR = lazy(() => import("./pages/AffiliateFR"));
const AffiliateIT = lazy(() => import("./pages/AffiliateIT"));
const AffiliatePT = lazy(() => import("./pages/AffiliatePT"));
const AffiliateSV = lazy(() => import("./pages/AffiliateSV"));
const AffiliatePL = lazy(() => import("./pages/AffiliatePL"));
const AffiliateEL = lazy(() => import("./pages/AffiliateEL"));
const AffiliateDA = lazy(() => import("./pages/AffiliateDA"));
const AffiliateNO = lazy(() => import("./pages/AffiliateNO"));
const AffiliateRO = lazy(() => import("./pages/AffiliateRO"));
const AffiliateBG = lazy(() => import("./pages/AffiliateBG"));
const AffiliateFI = lazy(() => import("./pages/AffiliateFI"));
const AffiliateRU = lazy(() => import("./pages/AffiliateRU"));
const AffiliateZH = lazy(() => import("./pages/AffiliateZH"));
const AffiliateHI = lazy(() => import("./pages/AffiliateHI"));
const AffiliateJA = lazy(() => import("./pages/AffiliateJA"));
const AffiliateAR = lazy(() => import("./pages/AffiliateAR"));
const AffiliateKO = lazy(() => import("./pages/AffiliateKO"));
const AffiliateCS = lazy(() => import("./pages/AffiliateCS"));
const AffiliateHU = lazy(() => import("./pages/AffiliateHU"));
const AffiliateUK = lazy(() => import("./pages/AffiliateUK"));
const AffiliateSK = lazy(() => import("./pages/AffiliateSK"));
const AffiliateHR = lazy(() => import("./pages/AffiliateHR"));
const AffiliateSR = lazy(() => import("./pages/AffiliateSR"));
const AffiliateSL = lazy(() => import("./pages/AffiliateSL"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageDetector />
        <Suspense fallback={<div className="min-h-screen" />}>
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
            <Route path="/docs-1" element={<Languages />} />
            
            {/* Photography Routes */}
            <Route path="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" element={<Photography />} />
            <Route path="/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss" element={<PhotographyDE />} />
            <Route path="/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause" element={<PhotographyFR />} />
            <Route path="/es/fotografia-documentos-legales-terminos-condiciones-privacidad-derechos-autor-aviso-legal" element={<PhotographyES />} />
            <Route path="/it/fotografia-documenti-legali-termini-condizioni-privacy-diritto-autore-disclaimer" element={<PhotographyIT />} />
            <Route path="/sv/fotografi-juridiska-dokument-villkor-integritetspolicy-upphovsratt-ansvarsfriskrivning" element={<PhotographySV />} />
            <Route path="/pl/fotografia-dokumenty-prawne-regulamin-prywatnosc-prawa-autorskie-zastrzezenia" element={<PhotographyPL />} />
            <Route path="/el/fotografia-nomika-engrafa-oroi-aporitou-pnevmatika-dikaiomata" element={<PhotographyEL />} />
            <Route path="/da/fotografi-juridiske-dokumenter-vilkaar-privatlivspolitik-ophavsret-ansvarsfraskrivelse" element={<PhotographyDA />} />
            <Route path="/no/fotografi-juridiske-dokumenter-vilkaar-personvern-opphavsrett-ansvarsfraskrivelse" element={<PhotographyNO />} />
            <Route path="/ro/fotografie-documente-juridice-termeni-confidentialitate-drepturi-autor-declinare" element={<PhotographyRO />} />
            <Route path="/bg/fotografiya-pravni-dokumenti-obshti-usloviya-poveritelnost-avtorski-prava" element={<PhotographyBG />} />
            <Route path="/fi/valokuvaus-oikeudelliset-asiakirjat-kayttoehdot-tietosuoja-tekijanoikeus-vastuuvapaus" element={<PhotographyFI />} />
            <Route path="/ru/fotografiya-yuridicheskie-dokumenty-usloviya-konfidencialnost-avtorskie-prava" element={<PhotographyRU />} />
            <Route path="/zh/sheying-falv-wenjian-tiaokuan-yinsi-banquan-baohu-mianze" element={<PhotographyZH />} />
            <Route path="/hi/photography-kanooni-dastavez-niyam-gopyata-copyright-suraksha" element={<PhotographyHI />} />
            <Route path="/ja/shashin-houteki-bunsho-riyoukiyaku-privacy-chosakuken-hogo" element={<PhotographyJA />} />
            <Route path="/ar/taswir-wathaeq-qanuniya-shurut-khususiya-huquq-nashr-ikhla-masuliya" element={<PhotographyAR />} />
            <Route path="/ko/sajin-beobjeok-munseo-iyongyakgwan-gaeinjeongbo-jeojakkwon-boho" element={<PhotographyKO />} />
            <Route path="/cs/fotografie-pravni-dokumenty-podminky-soukromi-autorska-prava-prohlaseni" element={<PhotographyCS />} />
            <Route path="/hu/fotografia-jogi-dokumentumok-feltetelek-adatvedelem-szerzoi-jog-felelossegkizaras" element={<PhotographyHU />} />
            <Route path="/uk/fotografiya-yurydychni-dokumenty-umovy-konfidentsijnist-avtorski-prava" element={<PhotographyUK />} />
            <Route path="/sk/fotografia-pravne-dokumenty-podmienky-sukromie-autorske-prava-vyhlasenie" element={<PhotographySK />} />
            <Route path="/hr/fotografija-pravni-dokumenti-uvjeti-privatnost-autorska-prava-odricanje" element={<PhotographyHR />} />
            <Route path="/sr/fotografija-pravni-dokumenti-uslovi-privatnost-autorska-prava-odricanje" element={<PhotographySR />} />
            <Route path="/sl/fotografija-pravni-dokumenti-pogoji-zasebnost-avtorske-pravice-omejitev" element={<PhotographySL />} />
            <Route path="/tr/fotograf-yasal-belgeler-sartlar-gizlilik-telif-hakki-sorumluluk-reddi" element={<PhotographyTR />} />

            {/* Other Industry Verticals */}
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

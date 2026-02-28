import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LanguageDetector from "./components/LanguageDetector";

// Retry wrapper for lazy imports - handles stale chunk errors after deployments
const lazyRetry = (importFn: () => Promise<any>) =>
  lazy(() =>
    importFn().catch(() => {
      // Force reload once to get fresh chunks
      const hasReloaded = sessionStorage.getItem("chunk-reload");
      if (!hasReloaded) {
        sessionStorage.setItem("chunk-reload", "true");
        window.location.reload();
        return { default: () => null };
      }
      sessionStorage.removeItem("chunk-reload");
      return importFn();
    })
  );

// Eagerly load Home for fastest initial paint
import Home from "./pages/Home";

// Lazy load all other pages for code splitting
const English = lazyRetry(() => import("./pages/English"));
const Af = lazyRetry(() => import("./pages/Af"));
const AfLegalEN = lazyRetry(() => import("./pages/AfLegalEN"));
const AfLegalDE = lazyRetry(() => import("./pages/AfLegalDE"));
const AfLegalFR = lazyRetry(() => import("./pages/AfLegalFR"));
const AfLegalES = lazyRetry(() => import("./pages/AfLegalES"));
const AfLegalIT = lazyRetry(() => import("./pages/AfLegalIT"));
const AfLegalPT = lazyRetry(() => import("./pages/AfLegalPT"));
const Languages = lazyRetry(() => import("./pages/Languages"));
const LegalEN = lazyRetry(() => import("./pages/LegalEN"));
const Photography = lazyRetry(() => import("./pages/Photography"));
const PhotographyDE = lazyRetry(() => import("./pages/PhotographyDE"));
const PhotographyFR = lazyRetry(() => import("./pages/PhotographyFR"));
const PhotographyES = lazyRetry(() => import("./pages/PhotographyES"));
const PhotographyIT = lazyRetry(() => import("./pages/PhotographyIT"));
const PhotographySV = lazyRetry(() => import("./pages/PhotographySV"));
const PhotographyPL = lazyRetry(() => import("./pages/PhotographyPL"));
const PhotographyEL = lazyRetry(() => import("./pages/PhotographyEL"));
const PhotographyDA = lazyRetry(() => import("./pages/PhotographyDA"));
const PhotographyNO = lazyRetry(() => import("./pages/PhotographyNO"));
const PhotographyRO = lazyRetry(() => import("./pages/PhotographyRO"));
const PhotographyBG = lazyRetry(() => import("./pages/PhotographyBG"));
const PhotographyFI = lazyRetry(() => import("./pages/PhotographyFI"));
const PhotographyRU = lazyRetry(() => import("./pages/PhotographyRU"));
const PhotographyZH = lazyRetry(() => import("./pages/PhotographyZH"));
const PhotographyHI = lazyRetry(() => import("./pages/PhotographyHI"));
const PhotographyJA = lazyRetry(() => import("./pages/PhotographyJA"));
const PhotographyAR = lazyRetry(() => import("./pages/PhotographyAR"));
const PhotographyKO = lazyRetry(() => import("./pages/PhotographyKO"));
const PhotographyCS = lazyRetry(() => import("./pages/PhotographyCS"));
const PhotographyHU = lazyRetry(() => import("./pages/PhotographyHU"));
const PhotographyUK = lazyRetry(() => import("./pages/PhotographyUK"));
const PhotographySK = lazyRetry(() => import("./pages/PhotographySK"));
const PhotographyHR = lazyRetry(() => import("./pages/PhotographyHR"));
const PhotographySR = lazyRetry(() => import("./pages/PhotographySR"));
const PhotographySL = lazyRetry(() => import("./pages/PhotographySL"));
const PhotographyTR = lazyRetry(() => import("./pages/PhotographyTR"));
const TravelBooking = lazyRetry(() => import("./pages/TravelBooking"));
const Ecommerce = lazyRetry(() => import("./pages/Ecommerce"));
const OnlineShop = lazyRetry(() => import("./pages/OnlineShop"));
const Dropshipping = lazyRetry(() => import("./pages/Dropshipping"));
const Elearning = lazyRetry(() => import("./pages/Elearning"));
const Nonprofit = lazyRetry(() => import("./pages/Nonprofit"));
const StreamingMedia = lazyRetry(() => import("./pages/StreamingMedia"));
const ComparisonReview = lazyRetry(() => import("./pages/ComparisonReview"));
const NewsMagazine = lazyRetry(() => import("./pages/NewsMagazine"));
const Freelancers = lazyRetry(() => import("./pages/Freelancers"));
const Spanish = lazyRetry(() => import("./pages/Spanish"));
const VATCalculator = lazyRetry(() => import("./pages/VATCalculator"));
const VATCalculatorEN = lazyRetry(() => import("./pages/VATCalculatorEN"));
const VATCalculatorES = lazyRetry(() => import("./pages/VATCalculatorES"));
const VATCalculatorDE = lazyRetry(() => import("./pages/VATCalculatorDE"));
const VATCalculatorFR = lazyRetry(() => import("./pages/VATCalculatorFR"));
const VATCalculatorIT = lazyRetry(() => import("./pages/VATCalculatorIT"));
const VATCalculatorPL = lazyRetry(() => import("./pages/VATCalculatorPL"));
const NotFound = lazyRetry(() => import("./pages/NotFound"));
const PremiumDomains = lazyRetry(() => import("./pages/PremiumDomains"));
const PremiumDomainsLegal = lazyRetry(() => import("./pages/PremiumDomainsLegal"));
const PremiumDomainsEN = lazyRetry(() => import("./pages/PremiumDomainsEN"));
const PremiumDomainsLegalEN = lazyRetry(() => import("./pages/PremiumDomainsLegalEN"));
const PremiumDomainsES = lazyRetry(() => import("./pages/PremiumDomainsES"));
const PremiumDomainsLegalES = lazyRetry(() => import("./pages/PremiumDomainsLegalES"));
const PremiumDomainsFR = lazyRetry(() => import("./pages/PremiumDomainsFR"));
const PremiumDomainsLegalFR = lazyRetry(() => import("./pages/PremiumDomainsLegalFR"));
const PremiumDomainsDE = lazyRetry(() => import("./pages/PremiumDomainsDE"));
const PremiumDomainsLegalDE = lazyRetry(() => import("./pages/PremiumDomainsLegalDE"));
const PremiumDomainsIT = lazyRetry(() => import("./pages/PremiumDomainsIT"));
const PremiumDomainsLegalIT = lazyRetry(() => import("./pages/PremiumDomainsLegalIT"));
const PremiumDomainsPL = lazyRetry(() => import("./pages/PremiumDomainsPL"));
const PremiumDomainsLegalPL = lazyRetry(() => import("./pages/PremiumDomainsLegalPL"));
const PremiumDomainsPT = lazyRetry(() => import("./pages/PremiumDomainsPT"));
const PremiumDomainsLegalPT = lazyRetry(() => import("./pages/PremiumDomainsLegalPT"));
const PremiumDomainsZH = lazyRetry(() => import("./pages/PremiumDomainsZH"));
const PremiumDomainsLegalZH = lazyRetry(() => import("./pages/PremiumDomainsLegalZH"));
const PremiumDomainsJA = lazyRetry(() => import("./pages/PremiumDomainsJA"));
const PremiumDomainsLegalJA = lazyRetry(() => import("./pages/PremiumDomainsLegalJA"));
const PremiumDomainsAR = lazyRetry(() => import("./pages/PremiumDomainsAR"));
const PremiumDomainsLegalAR = lazyRetry(() => import("./pages/PremiumDomainsLegalAR"));
const PremiumDomainsTR = lazyRetry(() => import("./pages/PremiumDomainsTR"));
const PremiumDomainsLegalTR = lazyRetry(() => import("./pages/PremiumDomainsLegalTR"));
const PremiumDomainsHI = lazyRetry(() => import("./pages/PremiumDomainsHI"));
const PremiumDomainsLegalHI = lazyRetry(() => import("./pages/PremiumDomainsLegalHI"));
const PremiumDomainsSV = lazyRetry(() => import("./pages/PremiumDomainsSV"));
const PremiumDomainsNO = lazyRetry(() => import("./pages/PremiumDomainsNO"));
const PremiumDomainsDA = lazyRetry(() => import("./pages/PremiumDomainsDA"));
const PremiumDomainsFI = lazyRetry(() => import("./pages/PremiumDomainsFI"));
const PremiumDomainsCS = lazyRetry(() => import("./pages/PremiumDomainsCS"));
const PremiumDomainsEL = lazyRetry(() => import("./pages/PremiumDomainsEL"));
const PremiumDomainsRU = lazyRetry(() => import("./pages/PremiumDomainsRU"));
const PremiumDomainsRO = lazyRetry(() => import("./pages/PremiumDomainsRO"));
const PremiumDomainsBG = lazyRetry(() => import("./pages/PremiumDomainsBG"));
const PremiumDomainsUK = lazyRetry(() => import("./pages/PremiumDomainsUK"));
const PremiumDomainsHR = lazyRetry(() => import("./pages/PremiumDomainsHR"));
const PremiumDomainsSK = lazyRetry(() => import("./pages/PremiumDomainsSK"));
const PremiumDomainsSR = lazyRetry(() => import("./pages/PremiumDomainsSR"));
const PremiumDomainsSL = lazyRetry(() => import("./pages/PremiumDomainsSL"));
const DomainProductPage = lazyRetry(() => import("./pages/DomainProductPage"));
const LaserEngraverArticle = lazyRetry(() => import("./pages/LaserEngraverArticle"));
const TelescopeArticle = lazyRetry(() => import("./pages/TelescopeArticle"));
const PrinterArticle = lazyRetry(() => import("./pages/PrinterArticle"));
const AIDashboard = lazyRetry(() => import("./pages/AIDashboard"));
const Login = lazyRetry(() => import("./pages/Login"));
const Signup = lazyRetry(() => import("./pages/Signup"));
const ForgotPassword = lazyRetry(() => import("./pages/ForgotPassword"));
const ResetPassword = lazyRetry(() => import("./pages/ResetPassword"));
import ProtectedRoute from "./components/ProtectedRoute";

// Legal Documents Multi-language Pages
const AffiliateDE = lazyRetry(() => import("./pages/AffiliateDE"));
const AffiliateFR = lazyRetry(() => import("./pages/AffiliateFR"));
const AffiliateIT = lazyRetry(() => import("./pages/AffiliateIT"));
const AffiliatePT = lazyRetry(() => import("./pages/AffiliatePT"));
const AffiliateSV = lazyRetry(() => import("./pages/AffiliateSV"));
const AffiliatePL = lazyRetry(() => import("./pages/AffiliatePL"));
const AffiliateEL = lazyRetry(() => import("./pages/AffiliateEL"));
const AffiliateDA = lazyRetry(() => import("./pages/AffiliateDA"));
const AffiliateNO = lazyRetry(() => import("./pages/AffiliateNO"));
const AffiliateRO = lazyRetry(() => import("./pages/AffiliateRO"));
const AffiliateBG = lazyRetry(() => import("./pages/AffiliateBG"));
const AffiliateFI = lazyRetry(() => import("./pages/AffiliateFI"));
const AffiliateRU = lazyRetry(() => import("./pages/AffiliateRU"));
const AffiliateZH = lazyRetry(() => import("./pages/AffiliateZH"));
const AffiliateHI = lazyRetry(() => import("./pages/AffiliateHI"));
const AffiliateJA = lazyRetry(() => import("./pages/AffiliateJA"));
const AffiliateAR = lazyRetry(() => import("./pages/AffiliateAR"));
const AffiliateKO = lazyRetry(() => import("./pages/AffiliateKO"));
const AffiliateCS = lazyRetry(() => import("./pages/AffiliateCS"));
const AffiliateHU = lazyRetry(() => import("./pages/AffiliateHU"));
const AffiliateUK = lazyRetry(() => import("./pages/AffiliateUK"));
const AffiliateSK = lazyRetry(() => import("./pages/AffiliateSK"));
const AffiliateHR = lazyRetry(() => import("./pages/AffiliateHR"));
const AffiliateSR = lazyRetry(() => import("./pages/AffiliateSR"));
const AffiliateSL = lazyRetry(() => import("./pages/AffiliateSL"));

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
            <Route path="/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde" element={<PremiumDomainsSV />} />
            <Route path="/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi" element={<PremiumDomainsNO />} />
            <Route path="/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi" element={<PremiumDomainsDA />} />
            <Route path="/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo" element={<PremiumDomainsFI />} />
            <Route path="/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota" element={<PremiumDomainsCS />} />
            <Route path="/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia" element={<PremiumDomainsEL />} />
            <Route path="/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost" element={<PremiumDomainsRU />} />
            <Route path="/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo" element={<PremiumDomainsRO />} />
            <Route path="/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost" element={<PremiumDomainsBG />} />
            <Route path="/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist" element={<PremiumDomainsUK />} />
            <Route path="/expireddomainnames/hr/kupite-premium-domene-visoki-autoritet-seo-vrijednost" element={<PremiumDomainsHR />} />
            <Route path="/expireddomainnames/sk/kupit-premium-domeny-vysoka-autorita-seo-hodnota" element={<PremiumDomainsSK />} />
            <Route path="/expireddomainnames/sr/kupite-premium-domene-visoki-autoritet-seo-vrednost" element={<PremiumDomainsSR />} />
            <Route path="/expireddomainnames/sl/kupite-premium-domene-visoka-avtoriteta-seo-vrednost" element={<PremiumDomainsSL />} />
            
            {/* Individual Domain Product Pages */}
            <Route path="/domains/:domainSlug" element={<DomainProductPage />} />
            
            {/* Laser Engraver Article */}
            <Route path="/nl/beste-laser-graveermachine-top-5-laser-engravers-beginners-thuisgebruik-business-review" element={<LaserEngraverArticle />} />
            <Route path="/nl/beste-laser-graveermachine-2026-reviews-koopgids" element={<Navigate to="/nl/beste-laser-graveermachine-top-5-laser-engravers-beginners-thuisgebruik-business-review" replace />} />
            
            {/* Telescope Article */}
            <Route path="/nl/beste-high-end-telescoop-kopen-vergelijken-beginners-professionals-top-premium-telescopen-astrofotografie-deep-sky-planeten-natuur-vogels-reviews" element={<TelescopeArticle />} />
            
            {/* 3D Printer Article */}
            <Route path="/nl/beste-3d-printer-kopen-vergelijken-reviews-top-3d-printers-beginners-thuisgebruik-professionele-projecten" element={<PrinterArticle />} />
            
            {/* Redirects from old URLs */}
            <Route path="/expireddomeinnamen/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" element={<Navigate to="/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" replace />} />
            <Route path="/expireddomeinnamen/nl/premium-domeinnamen-juridische-documenten" element={<Navigate to="/expireddomainnames/nl/premium-domeinnamen-juridische-documenten" replace />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* AI Dashboard (Protected) */}
            <Route path="/ai-dashboard" element={<ProtectedRoute><AIDashboard /></ProtectedRoute>} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

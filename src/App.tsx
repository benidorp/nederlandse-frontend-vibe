import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import English from "./pages/English";
import Af from "./pages/Af";
import Languages from "./pages/Languages";
import LegalEN from "./pages/LegalEN";
import Photography from "./pages/Photography";
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
          <Route path="/docs-1" element={<Languages />} />
          <Route path="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" element={<Photography />} />
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
          <Route path="/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies" element={<Spanish />} />
          <Route path="/btw-calculator-wereldwijd" element={<VATCalculator />} />
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

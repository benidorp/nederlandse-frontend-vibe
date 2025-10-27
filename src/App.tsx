import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import LanguageDetector from "./components/LanguageDetector";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LanguageDetector />
        <Routes>
          <Route path="/" element={<Navigate to="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" replace />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

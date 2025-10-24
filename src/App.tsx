import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import English from "./pages/English";
import Italian from "./pages/Italian";
import Af from "./pages/Af";
import Languages from "./pages/Languages";
import LegalEN from "./pages/LegalEN";
import Photography from "./pages/Photography";
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
          <Route path="/" element={<Navigate to="/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" replace />} />
          <Route path="/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" element={<Index />} />
          <Route path="/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy" element={<English />} />
          <Route path="/protezione-sito-web-affiliato-documenti-legali-essenziali-termini-condizioni-privacy-dichiarazione-cookie" element={<Italian />} />
          <Route path="/policy" element={<LegalEN />} />
          <Route path="/af" element={<Af />} />
          <Route path="/docs-1" element={<Languages />} />
          <Route path="/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" element={<Photography />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

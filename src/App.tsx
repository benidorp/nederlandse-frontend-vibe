import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import English from "./pages/English";
import French from "./pages/French";
import German from "./pages/German";
import Af from "./pages/Af";
import AfFR from "./pages/AfFR";
import AfDE from "./pages/AfDE";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" replace />} />
          <Route path="/affiliate-website-bescherming-essentiele-juridische-documenten-algemene-voorwaarden-privacyverklaring-disclosure-cookiebeleid" element={<Index />} />
          <Route path="/en/affiliate-website-protection-essential-legal-documents" element={<English />} />
          <Route path="/fr" element={<French />} />
          <Route path="/de" element={<German />} />
          <Route path="/af" element={<Af />} />
          <Route path="/fr/af" element={<AfFR />} />
          <Route path="/de/af" element={<AfDE />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

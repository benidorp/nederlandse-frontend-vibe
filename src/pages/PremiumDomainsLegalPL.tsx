import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsPL from "@/components/premium-domains/LegalFooterPremiumDomainsPL";
import FooterPremiumDomainsPL from "@/components/premium-domains/FooterPremiumDomainsPL";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalPL = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("pl");
  
  return (
    <>
      <SEOHead
        title="Dokumenty Prawne Domeny Premium | Regulamin, Prywatność, Zastrzeżenia"
        description="Dokumenty prawne dotyczące sprzedaży domen premium. Regulamin, polityka prywatności, zastrzeżenia prawne i polityka cookies dla zakupu wygasłych domen z wartością SEO."
        canonical="https://www.iaee.eu/expireddomainnames/pl/dokumenty-prawne-domeny-premium"
        lang="pl"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" : "https://www.iaee.eu/expireddomainnames/pl/dokumenty-prawne-domeny-premium"
        }))}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Domeny Premium</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Strona główna
                  </Button>
                </Link>
                <Link to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Wróć do Domen
                  </Button>
                </Link>
              </div>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="Strona główna" 
              homeHref="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo"
              className="mt-4 text-slate-400"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Dokumenty Prawne
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Wszystkie informacje prawne dotyczące sprzedaży wygasłych nazw domen premium. 
                Przeczytaj nasz regulamin, politykę prywatności, zastrzeżenia prawne i politykę cookies.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsPL />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Ważne Informacje</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">O Naszej Usłudze:</strong> Oferujemy wygasłe nazwy domen premium z istniejącym autorytetem domeny i backlinkami. Te domeny mogą zapewnić cenne korzyści SEO dla Twoich projektów internetowych.
                  </p>
                  <p>
                    <strong className="text-amber-400">Brak Gwarancji:</strong> Chociaż dążymy do oferowania wysokiej jakości domen, nie możemy zagwarantować konkretnych wyników SEO, rankingów ani utrzymania Domain Authority. Algorytmy wyszukiwarek i profile backlinków mogą się zmieniać.
                  </p>
                  <p>
                    <strong className="text-amber-400">Ostateczna Sprzedaż:</strong> Wszystkie sprzedaże domen są ostateczne. Po transferze jesteś w pełni odpowiedzialny za domenę, w tym za odnowienie, hosting i treści.
                  </p>
                  <p>
                    <strong className="text-amber-400">Kontakt:</strong> W przypadku pytań dotyczących naszych dokumentów prawnych lub sprzedaży domen możesz skontaktować się z nami pod adresem{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsPL />
      </div>
    </>
  );
};

export default PremiumDomainsLegalPL;
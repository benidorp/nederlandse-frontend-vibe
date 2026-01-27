import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomains from "@/components/premium-domains/LegalFooterPremiumDomains";
import FooterPremiumDomains from "@/components/premium-domains/FooterPremiumDomains";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegal = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("nl");
  
  return (
    <>
      <SEOHead
        title="Juridische Documenten Premium Domeinen | Algemene Voorwaarden, Privacy, Disclaimer"
        description="Juridische documenten voor premium domeinnamen verkoop. Algemene voorwaarden, privacybeleid, disclaimer en cookiebeleid voor de aankoop van expired domeinen met SEO-waarde."
        canonical="https://www.iaee.eu/expireddomainnames/nl/juridische-documenten-premium-domeinen"
        lang="nl"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde" : "https://www.iaee.eu/expireddomainnames/nl/juridische-documenten-premium-domeinen"
        }))}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Premium Domeinen</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link to="/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Terug naar Domeinen
                  </Button>
                </Link>
              </div>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="Home" 
              homeHref="/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde"
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
                Juridische Documenten
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Alle juridische informatie met betrekking tot de verkoop van premium expired domeinnamen. 
                Lees onze algemene voorwaarden, privacybeleid, disclaimer en cookiebeleid.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomains />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Belangrijke Informatie</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">Over Onze Dienst:</strong> Wij bieden premium expired domeinnamen aan met bestaande domeinautoriteit en backlinks. Deze domeinen kunnen waardevolle SEO-voordelen bieden voor uw online projecten.
                  </p>
                  <p>
                    <strong className="text-amber-400">Geen Garantie:</strong> Hoewel wij streven naar kwalitatieve domeinen, kunnen wij geen specifieke SEO-resultaten, rankings of behoud van Domain Authority garanderen. Zoekmachine algoritmes en backlink profielen kunnen wijzigen.
                  </p>
                  <p>
                    <strong className="text-amber-400">Definitieve Verkoop:</strong> Alle domeinverkopen zijn definitief. Na overdracht bent u volledig verantwoordelijk voor het domein, inclusief verlenging, hosting en content.
                  </p>
                  <p>
                    <strong className="text-amber-400">Contact:</strong> Voor vragen over onze juridische documenten of domeinverkoop kunt u contact opnemen via{" "}
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
        <FooterPremiumDomains />
      </div>
    </>
  );
};

export default PremiumDomainsLegal;
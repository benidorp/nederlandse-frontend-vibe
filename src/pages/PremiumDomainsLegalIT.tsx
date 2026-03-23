import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsIT from "@/components/premium-domains/LegalFooterPremiumDomainsIT";
import FooterPremiumDomainsIT from "@/components/premium-domains/FooterPremiumDomainsIT";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalIT = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("it");
  
  return (
    <>
      <SEOHead
        title="Documenti Legali Domini Premium | Termini e Condizioni, Privacy, Disclaimer"
        description="Documenti legali per la vendita di nomi di dominio premium. Termini e condizioni, informativa sulla privacy, disclaimer e politica sui cookie per l'acquisto di domini scaduti con valore SEO."
        canonical="https://www.iaee.eu/expireddomainnames/it/documenti-legali-domini-premium"
        lang="it"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/it/acquistare-domini-premium-alta-autorita-valore-seo" : "https://www.iaee.eu/expireddomainnames/it/documenti-legali-domini-premium"
        }))}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Domini Premium</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link to="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Torna ai Domini
                  </Button>
                </Link>
              </div>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="Home" 
              homeHref="/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo"
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
                Documenti Legali
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Tutte le informazioni legali riguardanti la vendita di nomi di dominio premium scaduti. 
                Legga i nostri termini e condizioni, informativa sulla privacy, disclaimer e politica sui cookie.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsIT />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Informazioni Importanti</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">Il Nostro Servizio:</strong> Offriamo nomi di dominio premium scaduti con autorità di dominio esistente e backlink. Questi domini possono fornire preziosi vantaggi SEO per i Suoi progetti online.
                  </p>
                  <p>
                    <strong className="text-amber-400">Nessuna Garanzia:</strong> Sebbene ci impegniamo per domini di qualità, non possiamo garantire risultati SEO specifici, ranking o mantenimento del Domain Authority. Gli algoritmi dei motori di ricerca e i profili di backlink possono cambiare.
                  </p>
                  <p>
                    <strong className="text-amber-400">Vendita Definitiva:</strong> Tutte le vendite di domini sono definitive. Dopo il trasferimento, Lei è pienamente responsabile per il dominio, inclusi rinnovo, hosting e contenuti.
                  </p>
                  <p>
                    <strong className="text-amber-400">Contatti:</strong> Per domande sui nostri documenti legali o sulle vendite di domini, ci contatti a{" "}
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
        <FooterPremiumDomainsIT />
      </div>
    </>
  );
};

export default PremiumDomainsLegalIT;
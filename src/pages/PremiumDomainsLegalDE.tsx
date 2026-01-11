import { Helmet } from "react-helmet";
import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsDE from "@/components/premium-domains/LegalFooterPremiumDomainsDE";
import FooterPremiumDomainsDE from "@/components/premium-domains/FooterPremiumDomainsDE";

const PremiumDomainsLegalDE = () => {
  return (
    <>
      <Helmet>
        <title>Rechtliche Dokumente Premium Domains | AGB, Datenschutz, Haftungsausschluss</title>
        <meta 
          name="description" 
          content="Rechtliche Dokumente für den Verkauf von Premium Domains. Allgemeine Geschäftsbedingungen, Datenschutzrichtlinie, Haftungsausschluss und Cookie-Richtlinie für den Kauf von Expired Domains mit SEO-Wert." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/de/rechtliche-dokumente-premium-domains" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Premium Domains</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Startseite
                  </Button>
                </Link>
                <Link to="/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Zurück zu Domains
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Rechtliche Dokumente
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Alle rechtlichen Informationen bezüglich des Verkaufs von Premium Expired Domains. 
                Lesen Sie unsere Allgemeinen Geschäftsbedingungen, Datenschutzrichtlinie, Haftungsausschluss und Cookie-Richtlinie.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsDE />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Wichtige Informationen</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">Über unseren Dienst:</strong> Wir bieten Premium Expired Domains mit bestehender Domain Authority und Backlinks an. Diese Domains können wertvolle SEO-Vorteile für Ihre Online-Projekte bieten.
                  </p>
                  <p>
                    <strong className="text-amber-400">Keine Garantie:</strong> Obwohl wir qualitativ hochwertige Domains anbieten, können wir keine spezifischen SEO-Ergebnisse, Rankings oder den Erhalt der Domain Authority garantieren. Suchalgorithmen und Backlink-Profile können sich ändern.
                  </p>
                  <p>
                    <strong className="text-amber-400">Endgültiger Verkauf:</strong> Alle Domain-Verkäufe sind endgültig. Nach der Übertragung sind Sie vollständig für die Domain verantwortlich, einschließlich Verlängerung, Hosting und Inhalte.
                  </p>
                  <p>
                    <strong className="text-amber-400">Kontakt:</strong> Für Fragen zu unseren rechtlichen Dokumenten oder zum Domain-Verkauf kontaktieren Sie uns unter{" "}
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
        <FooterPremiumDomainsDE />
      </div>
    </>
  );
};

export default PremiumDomainsLegalDE;

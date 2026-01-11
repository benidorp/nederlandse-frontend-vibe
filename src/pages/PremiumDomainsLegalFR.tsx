import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import LegalFooterPremiumDomainsFR from "@/components/premium-domains/LegalFooterPremiumDomainsFR";
import FooterPremiumDomainsFR from "@/components/premium-domains/FooterPremiumDomainsFR";

const PremiumDomainsLegalFR = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Documents Juridiques | Noms de Domaine Premium Expirés</title>
        <meta name="description" content="Informations juridiques importantes concernant l'achat de noms de domaine premium expirés. Lisez nos conditions générales, politique de confidentialité et avertissement." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <Link 
                to="/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux domaines
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Documents Juridiques
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Informations importantes concernant l'achat de noms de domaine premium expirés
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <LegalFooterPremiumDomainsFR />

      {/* Important Information */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Informations Importantes</h2>
            
            <div className="space-y-6 text-slate-300">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">À Propos de Notre Service</h3>
                <p>
                  Nous sommes une place de marché indépendante spécialisée dans les noms de domaine premium expirés. 
                  Nos domaines sont soigneusement sélectionnés pour leur autorité SEO, leurs backlinks de qualité 
                  et leur potentiel de croissance.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Aucune Garantie</h3>
                <p>
                  Les noms de domaine sont vendus « en l'état » sans garantie de performance future. 
                  Les métriques SEO telles que Domain Authority, backlinks et trafic sont historiques et peuvent varier 
                  après l'achat.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Politique de Vente</h3>
                <p>
                  Toutes les ventes sont définitives. En raison de la nature numérique des noms de domaine, 
                  nous n'offrons pas de remboursement après que le transfert a été initié. 
                  Assurez-vous de bien rechercher un domaine avant de l'acheter.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
                <p>
                  Des questions sur un domaine ou votre achat ? Contactez-nous à : 
                  <a href="mailto:info@expireddomainnames.nl" className="text-amber-400 hover:text-amber-300 ml-1">
                    info@expireddomainnames.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterPremiumDomainsFR />
    </div>
  );
};

export default PremiumDomainsLegalFR;

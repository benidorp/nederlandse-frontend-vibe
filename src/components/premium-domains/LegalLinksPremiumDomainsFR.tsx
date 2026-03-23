import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsFR = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Informations Juridiques
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/fr/documents-juridiques-domaines-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Conditions Générales
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/fr/documents-juridiques-domaines-premium"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Politique de Confidentialité
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/fr/documents-juridiques-domaines-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Avertissement
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/fr/documents-juridiques-domaines-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Politique de Cookies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsFR;

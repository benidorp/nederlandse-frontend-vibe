import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsIT = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Informazioni Legali
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/it/documenti-legali-domini-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Termini e Condizioni
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/it/documenti-legali-domini-premium"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Informativa sulla Privacy
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/it/documenti-legali-domini-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Disclaimer
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/it/documenti-legali-domini-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Politica sui Cookie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsIT;

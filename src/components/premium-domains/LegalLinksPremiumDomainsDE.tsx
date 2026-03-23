import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsDE = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Rechtliche Informationen
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/de/rechtliche-dokumente-premium-domains" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Allgemeine Geschäftsbedingungen
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/de/rechtliche-dokumente-premium-domains"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Datenschutzrichtlinie
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/de/rechtliche-dokumente-premium-domains" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Haftungsausschluss
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/de/rechtliche-dokumente-premium-domains" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Cookie-Richtlinie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsDE;
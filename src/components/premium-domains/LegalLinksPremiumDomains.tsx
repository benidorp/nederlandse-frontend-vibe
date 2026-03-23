import { Link } from "react-router-dom";

const LegalLinksPremiumDomains = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Juridische Informatie
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/nl/premium-domeinnamen-juridische-documenten" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Algemene Voorwaarden
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/nl/premium-domeinnamen-juridische-documenten"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Privacybeleid
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomeinnamen/nl/premium-domeinnamen-juridische-documenten" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Disclaimer
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomeinnamen/nl/premium-domeinnamen-juridische-documenten" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Cookiebeleid
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomains;

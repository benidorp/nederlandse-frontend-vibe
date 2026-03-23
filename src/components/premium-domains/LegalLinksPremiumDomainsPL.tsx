import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsPL = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Informacje Prawne
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/pl/dokumenty-prawne-domeny-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Regulamin
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/pl/dokumenty-prawne-domeny-premium"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Polityka Prywatności
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/pl/dokumenty-prawne-domeny-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Zastrzeżenia Prawne
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/pl/dokumenty-prawne-domeny-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Polityka Cookies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsPL;

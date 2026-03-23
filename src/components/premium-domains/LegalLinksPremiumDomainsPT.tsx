import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsPT = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Informação Legal
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/pt/documentos-legais-dominios-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Termos e Condições
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/pt/documentos-legais-dominios-premium"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Política de Privacidade
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/pt/documentos-legais-dominios-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Aviso Legal
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/pt/documentos-legais-dominios-premium" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Política de Cookies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsPT;

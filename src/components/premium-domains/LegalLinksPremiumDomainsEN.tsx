import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsEN = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          Legal Information
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/en/premium-domains-legal-documents" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Terms and Conditions
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/en/premium-domains-legal-documents"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Privacy Policy
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/en/premium-domains-legal-documents" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Disclaimer
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/en/premium-domains-legal-documents" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsEN;

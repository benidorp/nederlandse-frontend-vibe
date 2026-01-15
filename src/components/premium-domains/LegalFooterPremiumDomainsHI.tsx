import { Link } from "react-router-dom";

const LegalFooterPremiumDomainsHI = () => {
  return (
    <div className="border-t border-slate-800 mt-8 pt-6">
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
        <Link 
          to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
          className="hover:text-amber-400 transition-colors"
        >
          नियम और शर्तें
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
          className="hover:text-amber-400 transition-colors"
        >
          गोपनीयता नीति
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
          className="hover:text-amber-400 transition-colors"
        >
          कुकी नीति
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
          className="hover:text-amber-400 transition-colors"
        >
          अस्वीकरण
        </Link>
      </div>
    </div>
  );
};

export default LegalFooterPremiumDomainsHI;

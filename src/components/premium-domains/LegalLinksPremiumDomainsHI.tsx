import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsHI = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          कानूनी जानकारी
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            नियम और शर्तें
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            गोपनीयता नीति
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            अस्वीकरण
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            कुकी नीति
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsHI;

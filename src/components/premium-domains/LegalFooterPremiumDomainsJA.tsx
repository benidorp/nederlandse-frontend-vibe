import { Link } from "react-router-dom";

const LegalFooterPremiumDomainsJA = () => {
  return (
    <div className="border-t border-slate-800 mt-8 pt-6">
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
        <Link 
          to="/expireddomainnames/ja/houritsumonsho-puremiamudomein" 
          className="hover:text-amber-400 transition-colors"
        >
          利用規約
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/ja/houritsumonsho-puremiamudomein" 
          className="hover:text-amber-400 transition-colors"
        >
          プライバシーポリシー
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/ja/houritsumonsho-puremiamudomein" 
          className="hover:text-amber-400 transition-colors"
        >
          Cookieポリシー
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/ja/houritsumonsho-puremiamudomein" 
          className="hover:text-amber-400 transition-colors"
        >
          免責事項
        </Link>
      </div>
    </div>
  );
};

export default LegalFooterPremiumDomainsJA;

import { Link } from "react-router-dom";
import { FileText, Shield, Cookie, Scale } from "lucide-react";

const LegalLinksPremiumDomainsJA = () => {
  return (
    <section className="py-12 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">法的文書</h2>
          <p className="text-slate-400">当社のポリシーと利用規約</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Link
            to="/expireddomainnames/ja/houritsumonsho-puremiamudomein"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-amber-500/30 transition-all group"
          >
            <FileText className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 group-hover:text-white transition-colors">利用規約</span>
          </Link>
          
          <Link
            to="/expireddomainnames/ja/houritsumonsho-puremiamudomein"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-amber-500/30 transition-all group"
          >
            <Shield className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 group-hover:text-white transition-colors">プライバシーポリシー</span>
          </Link>
          
          <Link
            to="/expireddomainnames/ja/houritsumonsho-puremiamudomein"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-amber-500/30 transition-all group"
          >
            <Cookie className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 group-hover:text-white transition-colors">Cookieポリシー</span>
          </Link>
          
          <Link
            to="/expireddomainnames/ja/houritsumonsho-puremiamudomein"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-amber-500/30 transition-all group"
          >
            <Scale className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 group-hover:text-white transition-colors">免責事項</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsJA;

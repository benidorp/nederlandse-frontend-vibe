import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsZH = () => {
  return (
    <section className="py-12 bg-slate-900">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          法律信息
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            服务条款
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            隐私政策
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            免责声明
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/zh/fa-lv-wen-jian-you-zhi-yu-ming" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            Cookie政策
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsZH;

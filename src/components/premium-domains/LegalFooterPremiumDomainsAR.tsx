import { Link } from "react-router-dom";

const LegalFooterPremiumDomainsAR = () => {
  return (
    <div className="border-t border-slate-800 mt-8 pt-6" dir="rtl">
      <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
        <Link 
          to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
          className="hover:text-amber-400 transition-colors"
        >
          الشروط والأحكام
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
          className="hover:text-amber-400 transition-colors"
        >
          سياسة الخصوصية
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
          className="hover:text-amber-400 transition-colors"
        >
          سياسة ملفات تعريف الارتباط
        </Link>
        <span className="text-slate-700">|</span>
        <Link 
          to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
          className="hover:text-amber-400 transition-colors"
        >
          إخلاء المسؤولية
        </Link>
      </div>
    </div>
  );
};

export default LegalFooterPremiumDomainsAR;
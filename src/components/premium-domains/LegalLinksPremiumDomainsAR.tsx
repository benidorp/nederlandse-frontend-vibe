import { Link } from "react-router-dom";

const LegalLinksPremiumDomainsAR = () => {
  return (
    <section className="py-12 bg-slate-900" dir="rtl">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">
          المعلومات القانونية
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            الشروط والأحكام
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza"
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            سياسة الخصوصية
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            إخلاء المسؤولية
          </Link>
          <span className="text-slate-600">|</span>
          <Link 
            to="/expireddomainnames/ar/wathaaiq-qanuniya-nitaqat-mumayaza" 
            className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2"
          >
            سياسة ملفات تعريف الارتباط
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LegalLinksPremiumDomainsAR;
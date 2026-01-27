import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsAR from "@/components/premium-domains/LegalFooterPremiumDomainsAR";
import FooterPremiumDomainsAR from "@/components/premium-domains/FooterPremiumDomainsAR";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalAR = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("ar");
  
  return (
    <>
      <SEOHead
        title="الوثائق القانونية للنطاقات المميزة | الشروط والأحكام، الخصوصية، إخلاء المسؤولية"
        description="الوثائق القانونية لبيع أسماء النطاقات المميزة. الشروط والأحكام، سياسة الخصوصية، إخلاء المسؤولية وسياسة ملفات تعريف الارتباط لشراء النطاقات منتهية الصلاحية ذات قيمة SEO."
        canonical="https://www.iaee.eu/expireddomainnames/ar/wathaeq-qanuniya-nitaqat-premium"
        lang="ar"
        dir="rtl"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/ar/shira-nitaqat-muntahiya-seo" : "https://www.iaee.eu/expireddomainnames/ar/wathaeq-qanuniya-nitaqat-premium"
        }))}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900" dir="rtl">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">نطاقات مميزة</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="ml-2 h-4 w-4" />
                    الرئيسية
                  </Button>
                </Link>
                <Link to="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="ml-2 h-4 w-4" />
                    العودة للنطاقات
                  </Button>
                </Link>
              </div>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="الرئيسية" 
              homeHref="/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo"
              className="mt-4 text-slate-400"
            />
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                الوثائق القانونية
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                جميع المعلومات القانونية المتعلقة ببيع أسماء النطاقات المميزة منتهية الصلاحية. 
                اقرأ الشروط والأحكام، سياسة الخصوصية، إخلاء المسؤولية وسياسة ملفات تعريف الارتباط.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsAR />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">معلومات مهمة</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">حول خدمتنا:</strong> نقدم أسماء نطاقات مميزة منتهية الصلاحية مع سلطة نطاق وروابط خلفية موجودة. يمكن أن توفر هذه النطاقات فوائد SEO قيمة لمشاريعك عبر الإنترنت.
                  </p>
                  <p>
                    <strong className="text-amber-400">بدون ضمان:</strong> بينما نسعى للحصول على نطاقات عالية الجودة، لا يمكننا ضمان نتائج SEO محددة أو ترتيبات أو الاحتفاظ بسلطة النطاق. يمكن أن تتغير خوارزميات محركات البحث وملفات الروابط الخلفية.
                  </p>
                  <p>
                    <strong className="text-amber-400">بيع نهائي:</strong> جميع مبيعات النطاقات نهائية. بعد النقل، أنت مسؤول بالكامل عن النطاق، بما في ذلك التجديد والاستضافة والمحتوى.
                  </p>
                  <p>
                    <strong className="text-amber-400">الاتصال:</strong> للأسئلة حول وثائقنا القانونية أو مبيعات النطاقات، يرجى الاتصال بنا على{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsAR />
      </div>
    </>
  );
};

export default PremiumDomainsLegalAR;
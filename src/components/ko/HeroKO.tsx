import { FileText, Shield, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import nicoleProfile from "@/assets/nicole-profile.png";

const HeroKO = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100">
            <Shield className="w-5 h-5 text-green-500" />
            <span className="text-sm font-medium text-slate-700">500개 이상의 웹사이트가 신뢰</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-slate-800">웹사이트 필수</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              법적 문서
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            완전한 컴플라이언스 패키지 — 이용약관, 개인정보보호정책, 쿠키 정책, 제휴 공개 및 면책조항.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-slate-200">
              <FileText className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-slate-700">5개 법적 템플릿</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-slate-200">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-slate-700">GDPR 준수</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full border border-slate-200">
              <Scale className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-slate-700">FTC 준수</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={scrollToPricing} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg">
              전체 패키지 받기 — €79
            </Button>
          </div>

          <div className="flex items-center gap-6 justify-center text-sm text-slate-500">
            <span>4.9/5 평점</span>
            <span>즉시 다운로드</span>
            <span>안전한 결제</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroKO;

import { Check, Shield, Zap, Clock } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";

const PricingKO = () => {
  const features = ["이용약관", "개인정보보호정책 (GDPR 준수)", "쿠키 정책", "제휴 공개 (FTC 준수)", "면책조항", "구현 가이드", "즉시 다운로드", "무료 업데이트"];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">간단하고 투명한 가격</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">일회성 결제 — 구독 없음, 숨겨진 비용 없음</p>
        </div>
        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />전체 패키지
                </div>
                <div className="flex items-center justify-center gap-2 mb-2"><span className="text-5xl font-bold text-white">€79</span></div>
                <p className="text-slate-400">일회성 결제</p>
              </div>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center"><Check className="w-4 h-4 text-green-400" /></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <stripe-buy-button buy-button-id="buy_btn_1SKm3dFXIgtr666GOD7ZP6da" publishable-key="pk_live_51NlaLxFXIgtr666GaVnQ6XK0LqYVG4mFt0CqM6LetcxVZkFLMEBzZY9UCfKSSXGQp2FbYLZ9ZYo6V5XXclGQE4XY00v1e0OIJQ"></stripe-buy-button>
                <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                  <Shield className="w-4 h-4" /><span>안전한 결제</span><img src={stripeLogo} alt="Stripe" className="h-5 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingKO;

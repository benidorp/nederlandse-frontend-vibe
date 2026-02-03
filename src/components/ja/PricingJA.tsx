import { Check, Shield, Zap, Clock } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";

const PricingJA = () => {
  const features = [
    "利用規約",
    "プライバシーポリシー（GDPR準拠）",
    "Cookieポリシー",
    "アフィリエイト開示（FTC準拠）",
    "免責事項",
    "実装ガイド",
    "即時ダウンロード",
    "無料アップデート"
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            シンプルで透明な価格設定
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            一回払い — サブスクリプションなし、隠れた料金なし
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  完全パッケージ
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">€79</span>
                </div>
                <p className="text-slate-400">一回払い</p>
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <stripe-buy-button
                  buy-button-id="buy_btn_1SKm3dFXIgtr666GOD7ZP6da"
                  publishable-key="pk_live_51NlaLxFXIgtr666GaVnQ6XK0LqYVG4mFt0CqM6LetcxVZkFLMEBzZY9UCfKSSXGQp2FbYLZ9ZYo6V5XXclGQE4XY00v1e0OIJQ"
                ></stripe-buy-button>
                
                <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>安全な支払い</span>
                  <img src={stripeLogo} alt="Stripe" className="h-5 ml-1" />
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>即時アクセス</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>安全な支払い</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingJA;

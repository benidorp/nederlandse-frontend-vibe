import { FileText, Shield, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import nicoleProfile from "@/assets/nicole-profile.png";

const HeroZH = () => {
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-slate-700">500+网站信任</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-800">网站必备</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  法律文件
                </span>
                <br />
                <span className="text-slate-800">完整套餐</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                网站合规完整套餐 — 条款和条件、隐私政策、Cookie政策、联盟披露和免责声明。
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                <FileText className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-slate-700">5个法律模板</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-slate-700">符合GDPR</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200">
                <Scale className="w-4 h-4 text-purple-500" />
                <span className="text-sm font-medium text-slate-700">符合FTC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
              >
                获取完整套餐 — €79
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToPricing}
                className="border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl transition-all duration-300"
              >
                查看包含内容
              </Button>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span>4.9/5 评分</span>
              </div>
              <div className="h-4 w-px bg-slate-300"></div>
              <span>即时下载</span>
              <div className="h-4 w-px bg-slate-300"></div>
              <span>安全支付</span>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-800">法律套餐</h3>
                        <p className="text-sm text-slate-500">包含5个文件</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      完整
                    </div>
                  </div>

                  <div className="space-y-3">
                    {[
                      "条款和条件",
                      "隐私政策",
                      "Cookie政策",
                      "联盟披露",
                      "免责声明"
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 font-medium">{doc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-4 text-center text-white">
                    <p className="text-sm opacity-90">完整套餐</p>
                    <p className="text-3xl font-bold">€79</p>
                    <p className="text-sm opacity-90">一次性付款</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="font-semibold text-slate-800">GDPR</p>
                    <p className="text-xs text-slate-500">合规</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform rotate-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <img src={nicoleProfile} alt="用户" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-white text-xs font-bold">+</div>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">500+</p>
                    <p className="text-xs text-slate-500">客户</p>
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

export default HeroZH;

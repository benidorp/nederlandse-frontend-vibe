import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsZH from "@/components/premium-domains/LegalFooterPremiumDomainsZH";
import FooterPremiumDomainsZH from "@/components/premium-domains/FooterPremiumDomainsZH";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalZH = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("zh");
  
  return (
    <>
      <SEOHead
        title="优质域名法律文件 | 服务条款、隐私政策、免责声明"
        description="优质过期域名销售的法律文件。服务条款、隐私政策、免责声明和Cookie政策。"
        canonical="https://www.iaee.eu/expireddomainnames/zh/falv-wenjian-gaoji-yuming"
        lang="zh"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/zh/goumai-gaoji-yuming-seo-jiazhi" : "https://www.iaee.eu/expireddomainnames/zh/falv-wenjian-gaoji-yuming"
        }))}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">优质域名</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    首页
                  </Button>
                </Link>
                <Link to="/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    返回域名列表
                  </Button>
                </Link>
              </div>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="首页" 
              homeHref="/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi"
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
                法律文件
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                有关优质过期域名销售的所有法律信息。
                请阅读我们的服务条款、隐私政策、免责声明和Cookie政策。
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsZH />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">重要信息</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">关于我们的服务：</strong> 我们提供具有域名权重和现有外链的优质过期域名。这些域名可以为您的在线项目提供宝贵的SEO优势。
                  </p>
                  <p>
                    <strong className="text-amber-400">无担保：</strong> 虽然我们努力提供优质域名，但我们无法保证特定的SEO结果、排名或域名权重的维持。搜索引擎算法和外链配置可能会发生变化。
                  </p>
                  <p>
                    <strong className="text-amber-400">最终销售：</strong> 所有域名销售均为最终销售。转让后，您将对域名承担全部责任，包括续费、托管和内容。
                  </p>
                  <p>
                    <strong className="text-amber-400">联系我们：</strong> 如果您对我们的法律文件或域名销售有任何疑问，可以通过{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a> 联系我们
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsZH />
      </div>
    </>
  );
};

export default PremiumDomainsLegalZH;
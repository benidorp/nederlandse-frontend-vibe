import HeaderEN from "@/components/en/HeaderEN";
import HeroEN from "@/components/en/HeroEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionEN from "@/components/en/ValuePropositionEN";
import ServicesEN from "@/components/en/ServicesEN";
import FAQEN from "@/components/en/FAQEN";
import PricingEN from "@/components/en/PricingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateZH = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="网站必备法律文件 | 条款、隐私政策、Cookies – iaee.eu"
        description="为您的网站提供完整的必备法律文件包：条款和条件、隐私政策、联盟披露、Cookie政策和免责声明。网站法律合规变得简单。仅需€79，在iaee.eu获取。"
        canonical="https://www.iaee.eu/zh/falv-wenjian-lianmeng-wangzhan-tiaokuan-yinsi-zhengce-cookies"
        lang="zh"
        ogType="product"
        serviceName="网站必备法律文件"
        serviceDescription="为网站提供完整的必备法律文件包：条款和条件、隐私政策、联盟披露、Cookie政策和免责声明。"
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "首页", url: "https://www.iaee.eu" },
          { name: "网站必备法律文件", url: "https://www.iaee.eu/zh/falv-wenjian-lianmeng-wangzhan-tiaokuan-yinsi-zhengce-cookies" }
        ]}
        faqItems={[
          { question: "我的网站包含哪些必备法律文件？", answer: "条款和条件、隐私政策、联盟披露、Cookie政策、免责声明和实施指南。" },
          { question: "法律文件是否符合GDPR？", answer: "是的，所有必备法律文件完全符合GDPR、CCPA和FTC国际使用要求。" }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="zh" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <HeroEN />
          <ValuePropositionEN />
          <ServicesEN />
          <PricingEN />
          <ReviewsEN />
          <FAQEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default AffiliateZH;
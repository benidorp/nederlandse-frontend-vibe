import HeaderZH from "@/components/zh/HeaderZH";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterZH from "@/components/zh/FooterZH";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyZH = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="摄影网站必备法律文件：条款与条件、隐私政策、版权保护与免责声明"
        description="摄影师必备法律文件：条款与条件、委托协议、隐私政策、免责声明、版权保护。几分钟内完成，仅需€79。"
        canonical="https://www.iaee.eu/zh/sheying-falv-wenjian-tiaokuan-yinsi-banquan-baohu-mianze"
        lang="zh"
        ogType="product"
        serviceName="摄影法律文件"
        serviceDescription="摄影师必备法律文件：条款与条件、隐私政策、版权保护和模特授权书。"
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "首页", url: "https://www.iaee.eu" },
          { name: "摄影法律文件", url: "https://www.iaee.eu/zh/sheying-falv-wenjian-tiaokuan-yinsi-banquan-baohu-mianze" }
        ]}
        faqItems={[
          { question: "包含哪些文件？", answer: "条款与条件、隐私政策、版权保护、模特授权书和委托协议。" },
          { question: "文件是否符合GDPR？", answer: "是的，所有文件完全符合GDPR。" }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderZH />
        <PhotographyLanguageSwitcher currentLanguage="zh" />
        <main>
          <HeroPhotographyMulti lang="zh" />
          <ValuePropositionPhotographyMulti lang="zh" />
          <ServicesPhotographyMulti lang="zh" />
          <PhotographyQAMulti lang="zh" />
          <PricingPhotographyMulti lang="zh" />
          <ReviewsPhotographyMulti lang="zh" />
          <FAQPhotographyMulti lang="zh" />
        </main>
        <FooterZH />
      </div>
    </>
  );
};

export default PhotographyZH;

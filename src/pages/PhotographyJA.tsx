import HeaderJA from "@/components/ja/HeaderJA";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterJA from "@/components/ja/FooterJA";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyJA = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="写真ウェブサイトに必要な法的文書：利用規約、プライバシーポリシー、著作権保護、免責事項"
        description="写真家に必要な法的文書：利用規約、業務委託契約、プライバシーポリシー、著作権保護。数分で完了、€79。"
        canonical="https://www.iaee.eu/ja/shashin-houteki-bunsho-riyoukiyaku-privacy-chosakuken-hogo"
        lang="ja"
        ogType="product"
        serviceName="写真 法的文書"
        serviceDescription="写真家に必要な法的文書：利用規約、プライバシーポリシー、著作権保護。"
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "ホーム", url: "https://www.iaee.eu" },
          { name: "写真 法的文書", url: "https://www.iaee.eu/ja/shashin-houteki-bunsho-riyoukiyaku-privacy-chosakuken-hogo" }
        ]}
        faqItems={[
          { question: "どの文書が含まれていますか？", answer: "利用規約、プライバシーポリシー、著作権保護、契約書。" },
          { question: "文書はGDPR準拠ですか？", answer: "はい、すべての文書は完全にGDPR準拠です。" }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderJA />
        <PhotographyLanguageSwitcher currentLanguage="ja" />
        <main>
          <HeroPhotographyMulti lang="ja" />
          <ValuePropositionPhotographyMulti lang="ja" />
          <ServicesPhotographyMulti lang="ja" />
          <PhotographyQAMulti lang="ja" />
          <PricingPhotographyMulti lang="ja" />
          <ReviewsPhotographyMulti lang="ja" />
          <FAQPhotographyMulti lang="ja" />
        </main>
        <FooterJA />
      </div>
    </>
  );
};

export default PhotographyJA;

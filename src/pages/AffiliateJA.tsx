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

const AffiliateJA = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="ウェブサイト向け必須法的文書 | 利用規約、プライバシー、クッキー – iaee.eu"
        description="ウェブサイト向け必須法的文書の完全パッケージ：利用規約、プライバシーポリシー、アフィリエイト開示、クッキーポリシー、免責事項。ウェブサイトの法的コンプライアンスを簡単に。わずか€79でiaee.euにて。"
        canonical="https://www.iaee.eu/ja/houritsumonsho-affiliate-saito-riyoukiyaku-privacy-policy-cookies"
        lang="ja"
        ogType="product"
        serviceName="ウェブサイト向け必須法的文書"
        serviceDescription="ウェブサイト向け必須法的文書の完全パッケージ：利用規約、プライバシーポリシー、アフィリエイト開示、クッキーポリシー、免責事項。"
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "ホーム", url: "https://www.iaee.eu" },
          { name: "ウェブサイト向け必須法的文書", url: "https://www.iaee.eu/ja/houritsumonsho-affiliate-saito-riyoukiyaku-privacy-policy-cookies" }
        ]}
        faqItems={[
          { question: "私のウェブサイトにはどの必須法的文書が含まれていますか？", answer: "利用規約、プライバシーポリシー、アフィリエイト開示、クッキーポリシー、免責事項、実装ガイド。" },
          { question: "法的文書はGDPRに準拠していますか？", answer: "はい、すべての必須法的文書は国際利用のためにGDPR、CCPA、FTCに完全準拠しています。" }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="ja" />
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

export default AffiliateJA;
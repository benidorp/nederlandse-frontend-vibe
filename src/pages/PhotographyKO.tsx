import HeaderKO from "@/components/ko/HeaderKO";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterKO from "@/components/ko/FooterKO";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyKO = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="사진 웹사이트를 위한 필수 법적 문서: 이용약관, 개인정보 보호정책, 저작권 보호 및 면책조항"
        description="사진작가를 위한 필수 법적 문서: 이용약관, 위탁 계약, 개인정보 보호정책, 저작권 보호. 몇 분 안에 완료, €79."
        canonical="https://www.iaee.eu/ko/sajin-beobjeok-munseo-iyongyakgwan-gaeinjeongbo-jeojakkwon-boho"
        lang="ko"
        ogType="product"
        serviceName="사진 법적 문서"
        serviceDescription="사진작가를 위한 필수 법적 문서: 이용약관, 개인정보 보호정책, 저작권 보호."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "홈", url: "https://www.iaee.eu" },
          { name: "사진 법적 문서", url: "https://www.iaee.eu/ko/sajin-beobjeok-munseo-iyongyakgwan-gaeinjeongbo-jeojakkwon-boho" }
        ]}
        faqItems={[
          { question: "어떤 문서가 포함되어 있나요?", answer: "이용약관, 개인정보 보호정책, 저작권 보호 및 계약서." },
          { question: "문서가 GDPR을 준수하나요?", answer: "네, 모든 문서는 완전히 GDPR을 준수합니다." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderKO />
        <PhotographyLanguageSwitcher currentLanguage="ko" />
        <main>
          <HeroPhotographyMulti lang="ko" />
          <ValuePropositionPhotographyMulti lang="ko" />
          <ServicesPhotographyMulti lang="ko" />
          <PhotographyQAMulti lang="ko" />
          <PricingPhotographyMulti lang="ko" />
          <ReviewsPhotographyMulti lang="ko" />
          <FAQPhotographyMulti lang="ko" />
        </main>
        <FooterKO />
      </div>
    </>
  );
};

export default PhotographyKO;

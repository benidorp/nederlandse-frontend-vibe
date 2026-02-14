import HeaderKO from "@/components/ko/HeaderKO";
import HeroKO from "@/components/ko/HeroKO";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionKO from "@/components/ko/ValuePropositionKO";
import ServicesKO from "@/components/ko/ServicesKO";
import FAQKO from "@/components/ko/FAQKO";
import PricingKO from "@/components/ko/PricingKO";
import ReviewsKO from "@/components/ko/ReviewsKO";
import FooterKO from "@/components/ko/FooterKO";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateKO = () => {
  return (
    <>
      <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
      <SEOHead title="웹사이트 필수 법적 문서 | 이용약관, 개인정보보호, 쿠키 – iaee.eu" description="웹사이트를 위한 필수 법적 문서 완전 패키지: 이용약관, 개인정보보호정책, 제휴 공개, 쿠키 정책 및 면책조항. iaee.eu에서 단 €79." canonical="https://www.iaee.eu/ko/beobjeok-munseo-affiliate-websaiteu-iyongyakgwan-gaeinjeongbo-cookies" lang="ko" ogType="product" serviceName="웹사이트 필수 법적 문서" serviceDescription="웹사이트를 위한 필수 법적 문서 완전 패키지." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "홈", url: "https://www.iaee.eu" }, { name: "웹사이트 필수 법적 문서", url: "https://www.iaee.eu/ko/beobjeok-munseo-affiliate-websaiteu-iyongyakgwan-gaeinjeongbo-cookies" }]} faqItems={[{ question: "내 웹사이트에 어떤 필수 법적 문서가 포함되어 있나요?", answer: "이용약관, 개인정보보호정책, 제휴 공개, 쿠키 정책, 면책조항 및 구현 가이드." }, { question: "법적 문서가 GDPR을 준수하나요?", answer: "예, 모든 필수 법적 문서는 국제 사용을 위해 GDPR, CCPA 및 FTC를 완전히 준수합니다." }]} />
      
      <LegalDocsLanguageSwitcher currentLang="ko" />
      <HiddenInternalLinks />
      <div className="min-h-screen"><HeaderKO /><main><HeroKO /><ValuePropositionKO /><ServicesKO /><PricingKO /><ReviewsKO /><FAQKO /></main><FooterKO /></div>
    </>
  );
};

export default AffiliateKO;

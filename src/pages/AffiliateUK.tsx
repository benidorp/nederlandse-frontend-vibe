import HeaderUK from "@/components/uk/HeaderUK";
import HeroUK from "@/components/uk/HeroUK";
import ValuePropositionUK from "@/components/uk/ValuePropositionUK";
import ServicesUK from "@/components/uk/ServicesUK";
import { PricingUK } from "@/components/shared/PricingMulti";
import { ReviewsUK } from "@/components/shared/ReviewsMulti";
import { FAQUK } from "@/components/shared/FAQMulti";
import { FooterUK } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateUK = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Основні юридичні документи для веб-сайтів | Умови, Конфіденційність, Cookies – iaee.eu" description="Повний пакет юридичних документів для вашого сайту: Умови використання, Політика конфіденційності, Affiliate розкриття, Політика cookies. €79." canonical="https://www.iaee.eu/uk/yurydychni-dokumenty-affiliate-sait-umovy-polityka-konfidentsiinosti-cookies" lang="uk" ogType="product" serviceName="Основні юридичні документи для веб-сайтів" serviceDescription="Повний пакет юридичних документів." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Юридичні документи UK", url: "https://www.iaee.eu/uk/yurydychni-dokumenty-affiliate-sait-umovy-polityka-konfidentsiinosti-cookies" }]} faqItems={[{ question: "Які юридичні документи включені?", answer: "Умови використання, Політика конфіденційності, Affiliate розкриття, Політика cookies, Застереження та Посібник." }]} />
    <GTranslateWidget />
    <LegalDocsLanguageSwitcher currentLang="uk" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderUK /><main><HeroUK /><ValuePropositionUK /><ServicesUK /><PricingUK /><ReviewsUK /><FAQUK /></main><FooterUK /></div>
  </>
);
export default AffiliateUK;

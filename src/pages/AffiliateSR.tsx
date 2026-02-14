import HeaderSR from "@/components/sr/HeaderSR";
import HeroSR from "@/components/sr/HeroSR";
import ValuePropositionSR from "@/components/sr/ValuePropositionSR";
import ServicesSR from "@/components/sr/ServicesSR";
import { PricingSR } from "@/components/shared/PricingMulti";
import { ReviewsSR } from "@/components/shared/ReviewsMulti";
import { FAQSR } from "@/components/shared/FAQMulti";
import { FooterSR } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateSR = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Основни правни документи за веб сајтове | Услови, Приватност, Колачићи – iaee.eu" description="Комплетан пакет правних докумената за ваш сајт. €79." canonical="https://www.iaee.eu/sr/pravni-dokumenti-affiliate-sajt-uslovi-politika-privatnosti-cookies" lang="sr" ogType="product" serviceName="Основни правни документи за веб сајтове" serviceDescription="Комплетан пакет правних докумената." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Правни документи SR", url: "https://www.iaee.eu/sr/pravni-dokumenti-affiliate-sajt-uslovi-politika-privatnosti-cookies" }]} faqItems={[{ question: "Који правни документи су укључени?", answer: "Услови коришћења, Политика приватности, Affiliate изјава, Политика колачића, Изјава о одрицању и Водич." }]} />
    
    <LegalDocsLanguageSwitcher currentLang="sr" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderSR /><main><HeroSR /><ValuePropositionSR /><ServicesSR /><PricingSR /><ReviewsSR /><FAQSR /></main><FooterSR /></div>
  </>
);
export default AffiliateSR;

import HeaderSL from "@/components/sl/HeaderSL";
import HeroSL from "@/components/sl/HeroSL";
import ValuePropositionSL from "@/components/sl/ValuePropositionSL";
import ServicesSL from "@/components/sl/ServicesSL";
import { PricingSL } from "@/components/shared/PricingMulti";
import { ReviewsSL } from "@/components/shared/ReviewsMulti";
import { FAQSL } from "@/components/shared/FAQMulti";
import { FooterSL } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateSL = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Bistveni pravni dokumenti za spletne strani | Pogoji, Zasebnost, Piškotki – iaee.eu" description="Celoten paket pravnih dokumentov za vašo stran. €79." canonical="https://www.iaee.eu/sl/pravni-dokumenti-affiliate-spletna-stran-pogoji-pravilnik-zasebnosti-cookies" lang="sl" ogType="product" serviceName="Bistveni pravni dokumenti za spletne strani" serviceDescription="Celoten paket pravnih dokumentov." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Pravni dokumenti SL", url: "https://www.iaee.eu/sl/pravni-dokumenti-affiliate-spletna-stran-pogoji-pravilnik-zasebnosti-cookies" }]} faqItems={[{ question: "Kateri pravni dokumenti so vključeni?", answer: "Splošni pogoji, Pravilnik o zasebnosti, Affiliate razkritje, Pravilnik o piškotkih, Izjava in Vodnik." }]} />
    
    <LegalDocsLanguageSwitcher currentLang="sl" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderSL /><main><HeroSL /><ValuePropositionSL /><ServicesSL /><PricingSL /><ReviewsSL /><FAQSL /></main><FooterSL /></div>
  </>
);
export default AffiliateSL;

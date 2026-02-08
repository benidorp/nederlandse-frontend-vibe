import HeaderSK from "@/components/sk/HeaderSK";
import HeroSK from "@/components/sk/HeroSK";
import ValuePropositionSK from "@/components/sk/ValuePropositionSK";
import ServicesSK from "@/components/sk/ServicesSK";
import { PricingSK } from "@/components/shared/PricingMulti";
import { ReviewsSK } from "@/components/shared/ReviewsMulti";
import { FAQSK } from "@/components/shared/FAQMulti";
import { FooterSK } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateSK = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Základné právne dokumenty pre webové stránky | Podmienky, Súkromie, Cookies – iaee.eu" description="Kompletný balíček právnych dokumentov pre váš web. €79." canonical="https://www.iaee.eu/sk/pravne-dokumenty-affiliate-web-podmienky-zasady-ochrany-sukromia-cookies" lang="sk" ogType="product" serviceName="Základné právne dokumenty pre webové stránky" serviceDescription="Kompletný balíček právnych dokumentov." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Právne dokumenty SK", url: "https://www.iaee.eu/sk/pravne-dokumenty-affiliate-web-podmienky-zasady-ochrany-sukromia-cookies" }]} faqItems={[{ question: "Aké právne dokumenty sú zahrnuté?", answer: "Obchodné podmienky, Zásady ochrany osobných údajov, Affiliate vyhlásenie, Zásady cookies, Vyhlásenie a Sprievodca." }]} />
    <GTranslateWidget />
    <LegalDocsLanguageSwitcher currentLang="sk" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderSK /><main><HeroSK /><ValuePropositionSK /><ServicesSK /><PricingSK /><ReviewsSK /><FAQSK /></main><FooterSK /></div>
  </>
);
export default AffiliateSK;

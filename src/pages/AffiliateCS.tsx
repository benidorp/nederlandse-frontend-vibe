import HeaderCS from "@/components/cs/HeaderCS";
import HeroCS from "@/components/cs/HeroCS";
import ValuePropositionCS from "@/components/cs/ValuePropositionCS";
import ServicesCS from "@/components/cs/ServicesCS";
import { PricingCS } from "@/components/shared/PricingMulti";
import { ReviewsCS } from "@/components/shared/ReviewsMulti";
import { FAQCS } from "@/components/shared/FAQMulti";
import { FooterCS } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateCS = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Základní právní dokumenty pro webové stránky | Obchodní podmínky, Zásady ochrany osobních údajů, Cookies – iaee.eu" description="Kompletní balíček základních právních dokumentů pro váš web včetně Obchodních podmínek, Zásad ochrany osobních údajů, Affiliate prohlášení, Zásad cookies a Prohlášení. Právní soulad snadno za €79." canonical="https://www.iaee.eu/cs/pravni-dokumenty-affiliate-web-podminky-zasady-ochrany-soukromi-cookies" lang="cs" ogType="product" serviceName="Základní právní dokumenty pro webové stránky" serviceDescription="Kompletní balíček právních dokumentů pro webové stránky." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Právní dokumenty CS", url: "https://www.iaee.eu/cs/pravni-dokumenty-affiliate-web-podminky-zasady-ochrany-soukromi-cookies" }]} faqItems={[{ question: "Jaké právní dokumenty jsou zahrnuty?", answer: "Obchodní podmínky, Zásady ochrany osobních údajů, Affiliate prohlášení, Zásady cookies, Prohlášení a Průvodce implementací." }]} />
    <GTranslateWidget />
    <LegalDocsLanguageSwitcher currentLang="cs" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderCS /><main><HeroCS /><ValuePropositionCS /><ServicesCS /><PricingCS /><ReviewsCS /><FAQCS /></main><FooterCS /></div>
  </>
);
export default AffiliateCS;

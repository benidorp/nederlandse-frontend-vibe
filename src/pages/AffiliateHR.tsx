import HeaderHR from "@/components/hr/HeaderHR";
import HeroHR from "@/components/hr/HeroHR";
import ValuePropositionHR from "@/components/hr/ValuePropositionHR";
import ServicesHR from "@/components/hr/ServicesHR";
import { PricingHR } from "@/components/shared/PricingMulti";
import { ReviewsHR } from "@/components/shared/ReviewsMulti";
import { FAQHR } from "@/components/shared/FAQMulti";
import { FooterHR } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateHR = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Osnovni pravni dokumenti za web stranice | Uvjeti, Privatnost, Kolačići – iaee.eu" description="Kompletni paket pravnih dokumenata za vaš web. €79." canonical="https://www.iaee.eu/hr/pravni-dokumenti-affiliate-web-uvjeti-politika-privatnosti-cookies" lang="hr" ogType="product" serviceName="Osnovni pravni dokumenti za web stranice" serviceDescription="Kompletni paket pravnih dokumenata." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Pravni dokumenti HR", url: "https://www.iaee.eu/hr/pravni-dokumenti-affiliate-web-uvjeti-politika-privatnosti-cookies" }]} faqItems={[{ question: "Koji pravni dokumenti su uključeni?", answer: "Uvjeti korištenja, Politika privatnosti, Affiliate izjava, Politika kolačića, Izjava o odricanju i Vodič." }]} />
    <GTranslateWidget />
    <LegalDocsLanguageSwitcher currentLang="hr" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderHR /><main><HeroHR /><ValuePropositionHR /><ServicesHR /><PricingHR /><ReviewsHR /><FAQHR /></main><FooterHR /></div>
  </>
);
export default AffiliateHR;

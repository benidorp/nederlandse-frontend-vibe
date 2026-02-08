import HeaderHU from "@/components/hu/HeaderHU";
import HeroHU from "@/components/hu/HeroHU";
import ValuePropositionHU from "@/components/hu/ValuePropositionHU";
import ServicesHU from "@/components/hu/ServicesHU";
import { PricingHU } from "@/components/shared/PricingMulti";
import { ReviewsHU } from "@/components/shared/ReviewsMulti";
import { FAQHU } from "@/components/shared/FAQMulti";
import { FooterHU } from "@/components/shared/FooterMulti";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateHU = () => (
  <>
    <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
    <SEOHead title="Alapvető jogi dokumentumok weboldalakhoz | Feltételek, Adatvédelem, Cookies – iaee.eu" description="Teljes jogi dokumentumcsomag weboldalához: Általános feltételek, Adatvédelmi irányelvek, Affiliate nyilatkozat, Cookie szabályzat. €79-ért." canonical="https://www.iaee.eu/hu/jogi-dokumentumok-affiliate-weboldal-felhasznalasi-feltetelek-adatvedelmi-iranyelvek-cookies" lang="hu" ogType="product" serviceName="Alapvető jogi dokumentumok weboldalakhoz" serviceDescription="Teljes jogi dokumentumcsomag weboldalakhoz." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Home", url: "https://www.iaee.eu" }, { name: "Jogi dokumentumok HU", url: "https://www.iaee.eu/hu/jogi-dokumentumok-affiliate-weboldal-felhasznalasi-feltetelek-adatvedelmi-iranyelvek-cookies" }]} faqItems={[{ question: "Milyen jogi dokumentumok vannak benne?", answer: "Általános feltételek, Adatvédelmi irányelvek, Affiliate nyilatkozat, Cookie szabályzat, Nyilatkozat és Megvalósítási útmutató." }]} />
    <GTranslateWidget />
    <LegalDocsLanguageSwitcher currentLang="hu" />
    <HiddenInternalLinks />
    <div className="min-h-screen"><HeaderHU /><main><HeroHU /><ValuePropositionHU /><ServicesHU /><PricingHU /><ReviewsHU /><FAQHU /></main><FooterHU /></div>
  </>
);
export default AffiliateHU;

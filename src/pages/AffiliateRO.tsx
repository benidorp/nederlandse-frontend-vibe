import HeaderRO from "@/components/ro/HeaderRO";
import HeroRO from "@/components/ro/HeroRO";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionRO from "@/components/ro/ValuePropositionRO";
import ServicesRO from "@/components/ro/ServicesRO";
import FAQRO from "@/components/ro/FAQRO";
import PricingRO from "@/components/ro/PricingRO";
import ReviewsRO from "@/components/ro/ReviewsRO";
import FooterRO from "@/components/ro/FooterRO";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import { Helmet } from "react-helmet";

const AffiliateRO = () => {
  return (
    <>
      <Helmet><script async src="https://js.stripe.com/v3/buy-button.js"></script></Helmet>
      <SEOHead title="Documente Legale Esențiale pentru Site-uri | Termeni, Confidențialitate, Cookies – iaee.eu" description="Pachet complet de documente legale esențiale pentru site-ul dvs.: termeni și condiții, politică de confidențialitate, dezvăluire afiliere, politică cookies și declinare a responsabilității. Doar €79 pe iaee.eu." canonical="https://www.iaee.eu/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies" lang="ro" ogType="product" serviceName="Documente Legale Esențiale pentru Site-uri" serviceDescription="Pachet complet de documente legale esențiale pentru site-uri." servicePrice={79} serviceCurrency="EUR" breadcrumbs={[{ name: "Acasă", url: "https://www.iaee.eu" }, { name: "Documente Legale Esențiale", url: "https://www.iaee.eu/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies" }]} faqItems={[{ question: "Ce documente legale esențiale sunt incluse?", answer: "Termeni, politică de confidențialitate, dezvăluire afiliere, politică cookies, declinare a responsabilității și ghid de implementare." }, { question: "Documentele sunt conforme GDPR?", answer: "Da, toate documentele sunt complet conforme GDPR, CCPA și FTC." }]} />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="ro" />
      <HiddenInternalLinks />
      <div className="min-h-screen"><HeaderRO /><main><HeroRO /><ValuePropositionRO /><ServicesRO /><PricingRO /><ReviewsRO /><FAQRO /></main><FooterRO /></div>
    </>
  );
};

export default AffiliateRO;

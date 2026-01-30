import HeaderEN from "@/components/en/HeaderEN";
import HeroEN from "@/components/en/HeroEN";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionEN from "@/components/en/ValuePropositionEN";
import ServicesEN from "@/components/en/ServicesEN";
import FAQEN from "@/components/en/FAQEN";
import PricingEN from "@/components/en/PricingEN";
import ReviewsEN from "@/components/en/ReviewsEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
import SEOIntroSection from "@/components/legal-docs/SEOIntroSection";
import { Helmet } from "react-helmet";

const AffiliateRO = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documente Legale Esențiale pentru Site-uri | Termeni, Confidențialitate, Cookies – iaee.eu"
        description="Pachet complet de documente legale esențiale pentru site-ul dvs.: termeni și condiții, politică de confidențialitate, dezvăluire afiliere, politică cookies și declinare a responsabilității. Conformitate legală pentru site-uri simplificată. Doar €79 pe iaee.eu."
        canonical="https://www.iaee.eu/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies"
        lang="ro"
        ogType="product"
        serviceName="Documente Legale Esențiale pentru Site-uri"
        serviceDescription="Pachet complet de documente legale esențiale pentru site-uri: termeni și condiții, politică de confidențialitate, dezvăluire afiliere, politică cookies și declinare a responsabilității."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Acasă", url: "https://www.iaee.eu" },
          { name: "Documente Legale Esențiale pentru Site-uri", url: "https://www.iaee.eu/ro/documente-legale-site-afiliat-termeni-politica-confidentialitate-cookies" }
        ]}
        faqItems={[
          { question: "Ce documente legale esențiale sunt incluse pentru site-ul meu?", answer: "Termeni și condiții, politică de confidențialitate, dezvăluire afiliere, politică cookies, declinare a responsabilității și ghid de implementare." },
          { question: "Documentele legale sunt conforme cu GDPR?", answer: "Da, toate documentele legale esențiale sunt complet conforme cu GDPR, CCPA și FTC pentru utilizare internațională." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="ro" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="ro" />
          <HeroEN />
          <ValuePropositionEN />
          <ServicesEN />
          <PricingEN />
          <ReviewsEN />
          <FAQEN />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default AffiliateRO;

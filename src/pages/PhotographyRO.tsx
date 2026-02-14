import HeaderRO from "@/components/ro/HeaderRO";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterRO from "@/components/ro/FooterRO";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyRO = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documente juridice esențiale pentru site-uri de fotografie: Termeni, confidențialitate, drepturi de autor și declinare de responsabilitate"
        description="Documente juridice esențiale pentru fotografi: termeni și condiții, contracte, politica de confidențialitate, protecția drepturilor de autor. Gata în minute pentru €79."
        canonical="https://www.iaee.eu/ro/fotografie-documente-juridice-termeni-confidentialitate-drepturi-autor-declinare"
        lang="ro"
        ogType="product"
        serviceName="Fotografie Documente Juridice"
        serviceDescription="Documente juridice esențiale pentru fotografi: Termeni, Politica de confidențialitate, Protecția drepturilor de autor."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Acasă", url: "https://www.iaee.eu" },
          { name: "Fotografie Documente Juridice", url: "https://www.iaee.eu/ro/fotografie-documente-juridice-termeni-confidentialitate-drepturi-autor-declinare" }
        ]}
        faqItems={[
          { question: "Ce documente sunt incluse?", answer: "Termeni și condiții, politica de confidențialitate, protecția drepturilor de autor și contracte." },
          { question: "Sunt documentele conforme cu GDPR?", answer: "Da, toate documentele sunt complet conforme cu GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderRO />
        <PhotographyLanguageSwitcher currentLanguage="ro" />
        <main>
          <HeroPhotographyMulti lang="ro" />
          <ValuePropositionPhotographyMulti lang="ro" />
          <ServicesPhotographyMulti lang="ro" />
          <PhotographyQAMulti lang="ro" />
          <PricingPhotographyMulti lang="ro" />
          <ReviewsPhotographyMulti lang="ro" />
          <FAQPhotographyMulti lang="ro" />
        </main>
        <FooterRO />
      </div>
    </>
  );
};

export default PhotographyRO;

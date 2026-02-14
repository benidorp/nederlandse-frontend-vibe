import HeaderEN from "@/components/en/HeaderEN";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterEN from "@/components/en/FooterEN";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyHR = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Osnovni pravni dokumenti za fotografske web stranice: Uvjeti, privatnost, autorska prava i odricanje"
        description="Osnovni pravni dokumenti za fotografe: uvjeti korištenja, ugovori, politika privatnosti, zaštita autorskih prava. Gotovo za minute za €79."
        canonical="https://www.iaee.eu/hr/fotografija-pravni-dokumenti-uvjeti-privatnost-autorska-prava-odricanje"
        lang="hr"
        ogType="product"
        serviceName="Fotografija Pravni Dokumenti"
        serviceDescription="Osnovni pravni dokumenti za fotografe: Uvjeti, Privatnost, Zaštita autorskih prava."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Početna", url: "https://www.iaee.eu" },
          { name: "Fotografija Pravni Dokumenti", url: "https://www.iaee.eu/hr/fotografija-pravni-dokumenti-uvjeti-privatnost-autorska-prava-odricanje" }
        ]}
        faqItems={[
          { question: "Koji su dokumenti uključeni?", answer: "Uvjeti korištenja, politika privatnosti, zaštita autorskih prava i ugovori." },
          { question: "Jesu li dokumenti usklađeni s GDPR-om?", answer: "Da, svi dokumenti su potpuno usklađeni s GDPR-om." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="hr" />
        <main>
          <HeroPhotographyMulti lang="hr" />
          <ValuePropositionPhotographyMulti lang="hr" />
          <ServicesPhotographyMulti lang="hr" />
          <PhotographyQAMulti lang="hr" />
          <PricingPhotographyMulti lang="hr" />
          <ReviewsPhotographyMulti lang="hr" />
          <FAQPhotographyMulti lang="hr" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographyHR;

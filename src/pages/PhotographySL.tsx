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

const PhotographySL = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Bistveni pravni dokumenti za fotografske spletne strani: Pogoji, zasebnost, avtorske pravice in omejitev odgovornosti"
        description="Bistveni pravni dokumenti za fotografe: pogoji uporabe, pogodbe, pravilnik o zasebnosti, zaščita avtorskih pravic. Pripravljeno v minutah za €79."
        canonical="https://www.iaee.eu/sl/fotografija-pravni-dokumenti-pogoji-zasebnost-avtorske-pravice-omejitev"
        lang="sl"
        ogType="product"
        serviceName="Fotografija Pravni Dokumenti"
        serviceDescription="Bistveni pravni dokumenti za fotografe: Pogoji, Zasebnost, Zaščita avtorskih pravic."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Domov", url: "https://www.iaee.eu" },
          { name: "Fotografija Pravni Dokumenti", url: "https://www.iaee.eu/sl/fotografija-pravni-dokumenti-pogoji-zasebnost-avtorske-pravice-omejitev" }
        ]}
        faqItems={[
          { question: "Kateri dokumenti so vključeni?", answer: "Pogoji uporabe, pravilnik o zasebnosti, zaščita avtorskih pravic in pogodbe." },
          { question: "Ali so dokumenti skladni z GDPR?", answer: "Da, vsi dokumenti so popolnoma skladni z GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="sl" />
        <main>
          <HeroPhotographyMulti lang="sl" />
          <ValuePropositionPhotographyMulti lang="sl" />
          <ServicesPhotographyMulti lang="sl" />
          <PhotographyQAMulti lang="sl" />
          <PricingPhotographyMulti lang="sl" />
          <ReviewsPhotographyMulti lang="sl" />
          <FAQPhotographyMulti lang="sl" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographySL;

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

const PhotographySK = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Základné právne dokumenty pre fotografické weby: Podmienky, súkromie, autorské práva a vyhlásenie"
        description="Základné právne dokumenty pre fotografov: obchodné podmienky, zmluvy, ochrana súkromia, autorské práva. Hotovo za minúty za €79."
        canonical="https://www.iaee.eu/sk/fotografia-pravne-dokumenty-podmienky-sukromie-autorske-prava-vyhlasenie"
        lang="sk"
        ogType="product"
        serviceName="Fotografia Právne Dokumenty"
        serviceDescription="Základné právne dokumenty pre fotografov: Podmienky, Ochrana súkromia, Autorské práva."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Domov", url: "https://www.iaee.eu" },
          { name: "Fotografia Právne Dokumenty", url: "https://www.iaee.eu/sk/fotografia-pravne-dokumenty-podmienky-sukromie-autorske-prava-vyhlasenie" }
        ]}
        faqItems={[
          { question: "Aké dokumenty sú zahrnuté?", answer: "Obchodné podmienky, ochrana súkromia, autorské práva a zmluvy." },
          { question: "Sú dokumenty v súlade s GDPR?", answer: "Áno, všetky dokumenty sú plne v súlade s GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="sk" />
        <main>
          <HeroPhotographyMulti lang="sk" />
          <ValuePropositionPhotographyMulti lang="sk" />
          <ServicesPhotographyMulti lang="sk" />
          <PhotographyQAMulti lang="sk" />
          <PricingPhotographyMulti lang="sk" />
          <ReviewsPhotographyMulti lang="sk" />
          <FAQPhotographyMulti lang="sk" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographySK;

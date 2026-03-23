import HeaderFI from "@/components/fi/HeaderFI";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterFI from "@/components/fi/FooterFI";

import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyFI = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Olennaiset oikeudelliset asiakirjat valokuvaussivustoille: Käyttöehdot, tietosuoja, tekijänoikeus ja vastuuvapauslauseke"
        description="Olennaiset oikeudelliset asiakirjat valokuvaajille: käyttöehdot, sopimukset, tietosuojakäytäntö, tekijänoikeussuoja. Valmiina minuuteissa €79."
        canonical="https://www.iaee.eu/fi/valokuvaus-oikeudelliset-asiakirjat-kayttoehdot-tietosuoja-tekijanoikeus-vastuuvapaus"
        lang="fi"
        ogType="product"
        serviceName="Valokuvaus Oikeudelliset Asiakirjat"
        serviceDescription="Olennaiset oikeudelliset asiakirjat valokuvaajille: Käyttöehdot, Tietosuojakäytäntö, Tekijänoikeussuoja."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Etusivu", url: "https://www.iaee.eu" },
          { name: "Valokuvaus Oikeudelliset Asiakirjat", url: "https://www.iaee.eu/fi/valokuvaus-oikeudelliset-asiakirjat-kayttoehdot-tietosuoja-tekijanoikeus-vastuuvapaus" }
        ]}
        faqItems={[
          { question: "Mitä asiakirjoja sisältyy?", answer: "Käyttöehdot, tietosuojakäytäntö, tekijänoikeussuoja ja sopimukset." },
          { question: "Ovatko asiakirjat GDPR-yhteensopivia?", answer: "Kyllä, kaikki asiakirjat ovat täysin GDPR-yhteensopivia." }
        ]}
      />
      <HiddenInternalLinks />
      
      <div className="min-h-screen">
        <HeaderFI />
        <PhotographyLanguageSwitcher currentLanguage="fi" />
        <main>
          <HeroPhotographyMulti lang="fi" />
          <ValuePropositionPhotographyMulti lang="fi" />
          <ServicesPhotographyMulti lang="fi" />
          <PhotographyQAMulti lang="fi" />
          <PricingPhotographyMulti lang="fi" />
          <ReviewsPhotographyMulti lang="fi" />
          <FAQPhotographyMulti lang="fi" />
        </main>
        <FooterFI />
      </div>
    </>
  );
};

export default PhotographyFI;

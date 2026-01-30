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

const AffiliateFI = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Olennaiset Juridiset Asiakirjat Verkkosivustoille | Ehdot, Tietosuoja, Evästeet – iaee.eu"
        description="Täydellinen paketti olennaisia juridisia asiakirjoja verkkosivustollesi: käyttöehdot, tietosuojakäytäntö, affiliate-ilmoitus, evästekäytäntö ja vastuuvapauslauseke. Juridinen vaatimustenmukaisuus verkkosivustoille yksinkertaistettuna. Vain €79 osoitteessa iaee.eu."
        canonical="https://www.iaee.eu/fi/juridiset-asiakirjat-affiliate-sivusto-ehdot-tietosuojakaytanto-evasteet"
        lang="fi"
        ogType="product"
        serviceName="Olennaiset Juridiset Asiakirjat Verkkosivustoille"
        serviceDescription="Täydellinen paketti olennaisia juridisia asiakirjoja verkkosivustoille: käyttöehdot, tietosuojakäytäntö, affiliate-ilmoitus, evästekäytäntö ja vastuuvapauslauseke."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Etusivu", url: "https://www.iaee.eu" },
          { name: "Olennaiset Juridiset Asiakirjat Verkkosivustoille", url: "https://www.iaee.eu/fi/juridiset-asiakirjat-affiliate-sivusto-ehdot-tietosuojakaytanto-evasteet" }
        ]}
        faqItems={[
          { question: "Mitkä olennaiset juridiset asiakirjat sisältyvät verkkosivustolleni?", answer: "Käyttöehdot, tietosuojakäytäntö, affiliate-ilmoitus, evästekäytäntö, vastuuvapauslauseke ja toteutusopas." },
          { question: "Ovatko juridiset asiakirjat GDPR-yhteensopivia?", answer: "Kyllä, kaikki olennaiset juridiset asiakirjat ovat täysin GDPR-, CCPA- ja FTC-yhteensopivia kansainväliseen käyttöön." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="fi" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="fi" />
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

export default AffiliateFI;

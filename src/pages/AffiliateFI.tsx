import HeaderFI from "@/components/fi/HeaderFI";
import HeroFI from "@/components/fi/HeroFI";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionFI from "@/components/fi/ValuePropositionFI";
import ServicesFI from "@/components/fi/ServicesFI";
import FAQFI from "@/components/fi/FAQFI";
import PricingFI from "@/components/fi/PricingFI";
import ReviewsFI from "@/components/fi/ReviewsFI";
import FooterFI from "@/components/fi/FooterFI";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";
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
        <HeaderFI />
        <main>
          <HeroFI />
          <ValuePropositionFI />
          <ServicesFI />
          <PricingFI />
          <ReviewsFI />
          <FAQFI />
        </main>
        <FooterFI />
      </div>
    </>
  );
};

export default AffiliateFI;
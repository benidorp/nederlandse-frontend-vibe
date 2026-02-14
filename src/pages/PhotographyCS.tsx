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
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyCS = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Základní právní dokumenty pro fotografické weby: Obchodní podmínky, ochrana osobních údajů, autorská práva"
        description="Základní právní dokumenty pro fotografy: obchodní podmínky, smlouvy, zásady ochrany osobních údajů, ochrana autorských práv. Hotovo za minuty za €79."
        canonical="https://www.iaee.eu/cs/fotografie-pravni-dokumenty-podminky-soukromi-autorska-prava-prohlaseni"
        lang="cs"
        ogType="product"
        serviceName="Fotografie Právní Dokumenty"
        serviceDescription="Základní právní dokumenty pro fotografy: Obchodní podmínky, Ochrana osobních údajů, Autorská práva."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Domů", url: "https://www.iaee.eu" },
          { name: "Fotografie Právní Dokumenty", url: "https://www.iaee.eu/cs/fotografie-pravni-dokumenty-podminky-soukromi-autorska-prava-prohlaseni" }
        ]}
        faqItems={[
          { question: "Jaké dokumenty jsou zahrnuty?", answer: "Obchodní podmínky, ochrana osobních údajů, autorská práva a smlouvy." },
          { question: "Jsou dokumenty v souladu s GDPR?", answer: "Ano, všechny dokumenty jsou plně v souladu s GDPR." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <PhotographyLanguageSwitcher currentLanguage="cs" />
        <main>
          <HeroPhotographyMulti lang="cs" />
          <ValuePropositionPhotographyMulti lang="cs" />
          <ServicesPhotographyMulti lang="cs" />
          <PhotographyQAMulti lang="cs" />
          <PricingPhotographyMulti lang="cs" />
          <ReviewsPhotographyMulti lang="cs" />
          <FAQPhotographyMulti lang="cs" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default PhotographyCS;

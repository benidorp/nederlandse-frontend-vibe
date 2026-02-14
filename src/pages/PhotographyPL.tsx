import HeaderPL from "@/components/pl/HeaderPL";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyMulti from "@/components/photography-shared/HeroPhotographyMulti";
import ValuePropositionPhotographyMulti from "@/components/photography-shared/ValuePropositionPhotographyMulti";
import ServicesPhotographyMulti from "@/components/photography-shared/ServicesPhotographyMulti";
import PhotographyQAMulti from "@/components/photography-shared/PhotographyQAMulti";
import PricingPhotographyMulti from "@/components/photography-shared/PricingPhotographyMulti";
import ReviewsPhotographyMulti from "@/components/photography-shared/ReviewsPhotographyMulti";
import FAQPhotographyMulti from "@/components/photography-shared/FAQPhotographyMulti";
import FooterPL from "@/components/pl/FooterPL";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyPL = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Niezbędne dokumenty prawne dla stron fotograficznych: Regulamin, polityka prywatności, ochrona praw autorskich i zastrzeżenia"
        description="Niezbędne dokumenty prawne dla fotografów: regulamin, umowy zlecenia, polityka prywatności, zastrzeżenia, ochrona praw autorskich. Gotowe w minuty za €79."
        canonical="https://www.iaee.eu/pl/fotografia-dokumenty-prawne-regulamin-prywatnosc-prawa-autorskie-zastrzezenia"
        lang="pl"
        ogType="product"
        serviceName="Fotografia Dokumenty Prawne"
        serviceDescription="Niezbędne dokumenty prawne dla fotografów: Regulamin, Polityka prywatności, Ochrona praw autorskich i Zrzeczenie się roszczeń."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Strona główna", url: "https://www.iaee.eu" },
          { name: "Fotografia Dokumenty Prawne", url: "https://www.iaee.eu/pl/fotografia-dokumenty-prawne-regulamin-prywatnosc-prawa-autorskie-zastrzezenia" }
        ]}
        faqItems={[
          { question: "Jakie dokumenty są zawarte?", answer: "Regulamin, polityka prywatności, ochrona praw autorskich, zrzeczenie i umowy zlecenia." },
          { question: "Czy dokumenty są zgodne z RODO?", answer: "Tak, wszystkie dokumenty są w pełni zgodne z RODO." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderPL />
        <PhotographyLanguageSwitcher currentLanguage="pl" />
        <main>
          <HeroPhotographyMulti lang="pl" />
          <ValuePropositionPhotographyMulti lang="pl" />
          <ServicesPhotographyMulti lang="pl" />
          <PhotographyQAMulti lang="pl" />
          <PricingPhotographyMulti lang="pl" />
          <ReviewsPhotographyMulti lang="pl" />
          <FAQPhotographyMulti lang="pl" />
        </main>
        <FooterPL />
      </div>
    </>
  );
};

export default PhotographyPL;

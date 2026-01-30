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

const AffiliatePL = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Niezbędne Dokumenty Prawne dla Stron Internetowych | Regulamin, Polityka Prywatności, Cookies – iaee.eu"
        description="Kompletny pakiet niezbędnych dokumentów prawnych dla Twojej strony internetowej: regulamin, polityka prywatności, ujawnienie afiliacji, polityka cookies i wyłączenie odpowiedzialności. Zgodność prawna dla stron internetowych uproszczona. Tylko €79 na iaee.eu."
        canonical="https://www.iaee.eu/pl/dokumenty-prawne-strona-afiliacyjna-regulamin-polityka-prywatnosci-cookies"
        lang="pl"
        ogType="product"
        serviceName="Niezbędne Dokumenty Prawne dla Stron Internetowych"
        serviceDescription="Kompletny pakiet niezbędnych dokumentów prawnych dla stron internetowych: regulamin, polityka prywatności, ujawnienie afiliacji, polityka cookies i wyłączenie odpowiedzialności."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Strona główna", url: "https://www.iaee.eu" },
          { name: "Niezbędne Dokumenty Prawne dla Stron Internetowych", url: "https://www.iaee.eu/pl/dokumenty-prawne-strona-afiliacyjna-regulamin-polityka-prywatnosci-cookies" }
        ]}
        faqItems={[
          { question: "Jakie niezbędne dokumenty prawne są zawarte dla mojej strony internetowej?", answer: "Regulamin, polityka prywatności, ujawnienie afiliacji, polityka cookies, wyłączenie odpowiedzialności i przewodnik wdrożenia." },
          { question: "Czy dokumenty prawne są zgodne z RODO?", answer: "Tak, wszystkie niezbędne dokumenty prawne są w pełni zgodne z RODO, CCPA i FTC do użytku międzynarodowego." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="pl" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="pl" />
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

export default AffiliatePL;

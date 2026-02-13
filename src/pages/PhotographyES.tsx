import HeaderES from "@/components/es/HeaderES";
import PhotographyLanguageSwitcher from "@/components/photography/PhotographyLanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import HeroPhotographyES from "@/components/photography-es/HeroPhotographyES";
import ValuePropositionPhotographyES from "@/components/photography-es/ValuePropositionPhotographyES";
import ServicesPhotographyES from "@/components/photography-es/ServicesPhotographyES";
import PhotographyQAES from "@/components/photography-es/PhotographyQAES";
import PricingPhotographyES from "@/components/photography-es/PricingPhotographyES";
import ReviewsPhotographyES from "@/components/photography-es/ReviewsPhotographyES";
import FAQPhotographyES from "@/components/photography-es/FAQPhotographyES";
import FooterES from "@/components/es/FooterES";
import GTranslateWidget from "@/components/GTranslateWidget";
import SEOHead from "@/components/seo/SEOHead";
import { Helmet } from "react-helmet";

const PhotographyES = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documentos Legales Esenciales para Sitios de Fotografía: Términos, Privacidad, Derechos de Autor y Aviso Legal"
        description="Documentos legales esenciales para fotógrafos: términos y condiciones, contratos de encargo, política de privacidad, aviso legal, exención de responsabilidad y protección de derechos de autor. Listo en minutos por €79."
        canonical="https://www.iaee.eu/es/fotografia-documentos-legales-terminos-condiciones-privacidad-derechos-autor-aviso-legal"
        lang="es"
        ogType="product"
        serviceName="Documentos Legales Fotografía"
        serviceDescription="Documentos legales esenciales para fotógrafos: términos y condiciones, política de privacidad, protección de derechos de autor y autorización de modelo."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Inicio", url: "https://www.iaee.eu" },
          { name: "Documentos Legales Fotografía", url: "https://www.iaee.eu/es/fotografia-documentos-legales-terminos-condiciones-privacidad-derechos-autor-aviso-legal" }
        ]}
        faqItems={[
          { question: "¿Qué documentos están incluidos?", answer: "Términos y condiciones, política de privacidad, protección de derechos de autor, autorización de modelo y contratos de encargo." },
          { question: "¿Los documentos cumplen con el RGPD?", answer: "Sí, todos los documentos cumplen completamente con el RGPD." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderES />
        <PhotographyLanguageSwitcher currentLanguage="es" />
        <main>
          <HeroPhotographyES />
          <ValuePropositionPhotographyES />
          <ServicesPhotographyES />
          <PhotographyQAES />
          <PricingPhotographyES />
          <ReviewsPhotographyES />
          <FAQPhotographyES />
        </main>
        <FooterES />
      </div>
    </>
  );
};

export default PhotographyES;

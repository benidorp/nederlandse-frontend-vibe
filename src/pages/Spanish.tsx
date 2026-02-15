import { Helmet } from "react-helmet";
import HeaderES from "@/components/es/HeaderES";
import HeroES from "@/components/es/HeroES";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import ValuePropositionES from "@/components/es/ValuePropositionES";
import ServicesES from "@/components/es/ServicesES";
import BlogPostsES from "@/components/es/BlogPostsES";
import AffiliateQAES from "@/components/es/AffiliateQAES";
import FAQES from "@/components/es/FAQES";
import PricingES from "@/components/es/PricingES";
import ReviewsES from "@/components/es/ReviewsES";
import FooterES from "@/components/es/FooterES";

import SEOHead from "@/components/seo/SEOHead";
import LegalDocsLanguageSwitcher from "@/components/legal-docs/LegalDocsLanguageSwitcher";

const Spanish = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documentos Legales Esenciales para Sitios Web | Términos, Privacidad, Cookies – iaee.eu"
        description="Paquete completo de documentos legales esenciales para tu sitio web: términos y condiciones, política de privacidad, divulgación de afiliados, política de cookies y exención de responsabilidad. Cumplimiento legal para sitios web simplificado. Solo €79 en iaee.eu."
        canonical="https://www.iaee.eu/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies"
        lang="es"
        ogType="product"
        serviceName="Documentos Legales Esenciales para Sitios Web"
        serviceDescription="Paquete completo de documentos legales esenciales para sitios web: términos y condiciones, política de privacidad, divulgación de afiliados, política de cookies y exención de responsabilidad."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Inicio", url: "https://www.iaee.eu" },
          { name: "Documentos Legales Esenciales para Sitios Web", url: "https://www.iaee.eu/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies" }
        ]}
        faqItems={[
          { question: "¿Qué documentos legales esenciales están incluidos para mi sitio web?", answer: "Términos y condiciones, política de privacidad, divulgación de afiliados, política de cookies, exención de responsabilidad y guía de implementación." },
          { question: "¿Los documentos legales son compatibles con GDPR?", answer: "Sí, todos los documentos legales esenciales son totalmente compatibles con GDPR, CCPA y FTC para uso internacional." }
        ]}
      />
      
      <LegalDocsLanguageSwitcher currentLang="es" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderES />
        <main>
          <HeroES />
          <ValuePropositionES />
          <ServicesES />
          <BlogPostsES />
          <AffiliateQAES />
          <PricingES />
          <ReviewsES />
          <FAQES />
        </main>
        <FooterES />
      </div>
    </>
  );
};

export default Spanish;
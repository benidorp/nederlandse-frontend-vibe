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
import GTranslateWidget from "@/components/GTranslateWidget";

const Spanish = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
        <html lang="es" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <title>Documentos Legales para Sitios Web de Afiliados: Términos y Condiciones, Política de Privacidad, Divulgación y Política de Cookies</title>
        <meta name="description" content="Documentos legales profesionales que protegen tu negocio de afiliados y garantizan el cumplimiento de todos los requisitos legales. Paquete asequible con términos y condiciones, política de privacidad y exenciones de responsabilidad." />
        <link rel="canonical" href="https://iaee.eu/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies" />
      </Helmet>
      <GTranslateWidget />
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
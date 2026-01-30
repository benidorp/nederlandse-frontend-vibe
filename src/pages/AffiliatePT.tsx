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

const AffiliatePT = () => {
  return (
    <>
      <Helmet>
        <script async src="https://js.stripe.com/v3/buy-button.js"></script>
      </Helmet>
      <SEOHead
        title="Documentos Legais Essenciais para Sites | Termos, Privacidade, Cookies – iaee.eu"
        description="Pacote completo de documentos legais essenciais para o seu site: termos e condições, política de privacidade, divulgação de afiliados, política de cookies e isenção de responsabilidade. Conformidade legal para sites simplificada. Apenas €79 em iaee.eu."
        canonical="https://www.iaee.eu/pt/documentos-legais-essenciais-site-afiliados-termos-privacidade-cookies"
        lang="pt"
        ogType="product"
        serviceName="Documentos Legais Essenciais para Sites"
        serviceDescription="Pacote completo de documentos legais essenciais para sites: termos e condições, política de privacidade, divulgação de afiliados, política de cookies e isenção de responsabilidade."
        servicePrice={79}
        serviceCurrency="EUR"
        breadcrumbs={[
          { name: "Início", url: "https://www.iaee.eu" },
          { name: "Documentos Legais Essenciais para Sites", url: "https://www.iaee.eu/pt/documentos-legais-essenciais-site-afiliados-termos-privacidade-cookies" }
        ]}
        faqItems={[
          { question: "Quais documentos legais essenciais estão incluídos para o meu site?", answer: "Termos e condições, política de privacidade, divulgação de afiliados, política de cookies, isenção de responsabilidade e guia de implementação." },
          { question: "Os documentos legais são compatíveis com o GDPR?", answer: "Sim, todos os documentos legais essenciais são totalmente compatíveis com GDPR, CCPA e FTC para uso internacional." }
        ]}
      />
      <GTranslateWidget />
      <LegalDocsLanguageSwitcher currentLang="pt" />
      <HiddenInternalLinks />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          <SEOIntroSection lang="pt" />
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

export default AffiliatePT;

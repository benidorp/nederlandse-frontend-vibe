import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import LegalFooterPremiumDomainsES from "@/components/premium-domains/LegalFooterPremiumDomainsES";
import FooterPremiumDomainsES from "@/components/premium-domains/FooterPremiumDomainsES";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalES = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("es");
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <SEOHead
        title="Documentos Legales | Dominios Premium Expirados"
        description="Información legal importante sobre la compra de nombres de dominio premium expirados. Lea nuestros términos de venta, política de privacidad y descargo de responsabilidad."
        canonical="https://www.iaee.eu/expireddomainnames/es/documentos-legales-dominios-premium"
        lang="es"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" : "https://www.iaee.eu/expireddomainnames/es/documentos-legales-dominios-premium"
        }))}
      />

      {/* Header */}
      <header className="bg-slate-800/50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </Link>
              <Link 
                to="/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" 
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver a dominios
              </Link>
            </div>
            <Breadcrumbs 
              items={breadcrumbItems} 
              homeLabel="Inicio" 
              homeHref="/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo"
              className="mt-4 text-slate-400"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Documentos Legales
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Información importante sobre la compra de nombres de dominio premium expirados
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <LegalFooterPremiumDomainsES />

      {/* Important Information */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Información Importante</h2>
            
            <div className="space-y-6 text-slate-300">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Sobre Nuestro Servicio</h3>
                <p>
                  Somos un mercado independiente especializado en nombres de dominio premium expirados. 
                  Nuestros dominios son seleccionados cuidadosamente por su autoridad SEO, backlinks de calidad 
                  y potencial de crecimiento.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Sin Garantía</h3>
                <p>
                  Los nombres de dominio se venden "tal cual" sin garantía de rendimiento futuro. 
                  Las métricas SEO como Domain Authority, backlinks y tráfico son históricas y pueden variar 
                  después de la compra.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Política de Ventas</h3>
                <p>
                  Todas las ventas son definitivas. Debido a la naturaleza digital de los nombres de dominio, 
                  no ofrecemos reembolsos después de que la transferencia haya sido iniciada. 
                  Asegúrese de investigar un dominio a fondo antes de comprar.
                </p>
              </div>

              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h3 className="text-lg font-semibold text-white mb-3">Contacto</h3>
                <p>
                  ¿Preguntas sobre un dominio o su compra? Contáctenos en: 
                  <a href="mailto:info@expireddomainnames.nl" className="text-amber-400 hover:text-amber-300 ml-1">
                    info@expireddomainnames.nl
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterPremiumDomainsES />
    </div>
  );
};

export default PremiumDomainsLegalES;

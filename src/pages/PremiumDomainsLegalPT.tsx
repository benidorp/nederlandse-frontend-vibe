import { Helmet } from "react-helmet";
import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsPT from "@/components/premium-domains/LegalFooterPremiumDomainsPT";
import FooterPremiumDomainsPT from "@/components/premium-domains/FooterPremiumDomainsPT";

const PremiumDomainsLegalPT = () => {
  return (
    <>
      <Helmet>
        <title>Documentos Legais Domínios Premium | Termos e Condições, Privacidade, Aviso Legal</title>
        <meta 
          name="description" 
          content="Documentos legais para venda de domínios premium. Termos e condições, política de privacidade, aviso legal e política de cookies para a compra de domínios expirados com valor SEO." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/pt/documentos-legais-dominios-premium" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Domínios Premium</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link to="/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar aos Domínios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Documentos Legais
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Toda a informação legal relativa à venda de domínios premium expirados. 
                Leia os nossos termos e condições, política de privacidade, aviso legal e política de cookies.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsPT />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Informação Importante</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">Sobre o Nosso Serviço:</strong> Oferecemos domínios expirados premium com autoridade de domínio e backlinks existentes. Estes domínios podem proporcionar valiosos benefícios SEO para os seus projetos online.
                  </p>
                  <p>
                    <strong className="text-amber-400">Sem Garantia:</strong> Embora nos esforcemos por domínios de qualidade, não podemos garantir resultados SEO específicos, rankings ou manutenção de Domain Authority. Os algoritmos dos motores de busca e os perfis de backlinks podem mudar.
                  </p>
                  <p>
                    <strong className="text-amber-400">Venda Definitiva:</strong> Todas as vendas de domínios são definitivas. Após a transferência, é totalmente responsável pelo domínio, incluindo renovação, alojamento e conteúdo.
                  </p>
                  <p>
                    <strong className="text-amber-400">Contacto:</strong> Para questões sobre os nossos documentos legais ou venda de domínios, pode contactar-nos através de{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsPT />
      </div>
    </>
  );
};

export default PremiumDomainsLegalPT;

import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Search, ExternalLink, Globe, TrendingUp, Shield, Star, ChevronDown, ChevronUp, ArrowRight, Check, Zap, Award, Target, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import FooterPremiumDomainsPT from "@/components/premium-domains/FooterPremiumDomainsPT";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import stripeLogo from "@/assets/stripe-logo.svg";

interface PremiumDomain {
  name: string;
  extension: string;
  category: string;
  price: number;
  originalPrice?: number;
  features: string[];
  isHot?: boolean;
  isFeatured?: boolean;
}

const PremiumDomainsPT = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllDomains, setShowAllDomains] = useState(false);

  const categories = [
    { id: "all", name: "Todos os Domínios", icon: Globe },
    { id: "business", name: "Negócios", icon: TrendingUp },
    { id: "tech", name: "Tecnologia", icon: Zap },
    { id: "lifestyle", name: "Estilo de Vida", icon: Star },
    { id: "finance", name: "Finanças", icon: BarChart3 },
    { id: "health", name: "Saúde", icon: Shield },
  ];

  const premiumDomains: PremiumDomain[] = [
    // Business & Corporate
    { name: "b2bsales", extension: ".eu", category: "business", price: 2500, originalPrice: 4000, features: ["Alta Autoridade", "Pronto para SEO", "Focado em B2B"], isHot: true, isFeatured: true },
    { name: "financebroker", extension: ".eu", category: "finance", price: 3500, originalPrice: 5500, features: ["Nicho Financeiro", "Alta Demanda", "Pronto para Marca"], isHot: true },
    { name: "leadgeneration", extension: ".eu", category: "business", price: 4000, originalPrice: 6000, features: ["Domínio de Marketing", "Alta Conversão", "Líder do Setor"], isFeatured: true },
    { name: "cryptonews", extension: ".eu", category: "tech", price: 5000, originalPrice: 8000, features: ["Nicho Cripto", "Mercado em Tendência", "Alta Autoridade"], isHot: true },
    { name: "healthinsurance", extension: ".eu", category: "health", price: 6000, originalPrice: 9000, features: ["Nicho de Seguros", "Alta Demanda", "Mercado Premium"], isFeatured: true },
    
    // Tech & Digital
    { name: "aitools", extension: ".eu", category: "tech", price: 4500, originalPrice: 7000, features: ["Pronto para IA", "Mercado em Tendência", "Alta Demanda"], isHot: true },
    { name: "cloudservices", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Domínio Cloud", "Pronto para Empresa", "Escalável"] },
    { name: "digitalmarketing", extension: ".eu", category: "business", price: 3500, originalPrice: 5500, features: ["Nicho de Marketing", "Amplo Apelo", "Pronto para SEO"] },
    { name: "ecommercepro", extension: ".eu", category: "business", price: 2800, originalPrice: 4500, features: ["Pronto para E-commerce", "Foco no Varejo", "Alta Conversão"] },
    { name: "fintech", extension: ".eu", category: "finance", price: 5500, originalPrice: 8500, features: ["Nicho Fintech", "Alta Demanda", "Pronto para Investidores"], isHot: true },
    
    // Lifestyle & Personal
    { name: "luxurylifestyle", extension: ".eu", category: "lifestyle", price: 4000, originalPrice: 6500, features: ["Mercado de Luxo", "Alta Qualidade", "Foco em Marca"] },
    { name: "travelblog", extension: ".eu", category: "lifestyle", price: 1800, originalPrice: 3000, features: ["Nicho de Viagem", "Potencial para Blog", "Pronto para SEO"] },
    { name: "fitnesscoach", extension: ".eu", category: "health", price: 2200, originalPrice: 3800, features: ["Nicho de Fitness", "Marca Pessoal", "Alta Demanda"] },
    { name: "foodrecipes", extension: ".eu", category: "lifestyle", price: 1500, originalPrice: 2500, features: ["Nicho de Culinária", "Monetização de Conteúdo", "Amplo Apelo"] },
    { name: "mindfulness", extension: ".eu", category: "health", price: 2000, originalPrice: 3500, features: ["Nicho de Bem-Estar", "Mercado em Crescimento", "Foco Positivo"] },
    
    // Finance & Investment
    { name: "stocktrading", extension: ".eu", category: "finance", price: 4500, originalPrice: 7000, features: ["Nicho de Trading", "Alta Demanda", "Pronto para Investidores"] },
    { name: "realestateinvest", extension: ".eu", category: "finance", price: 5000, originalPrice: 8000, features: ["Nicho Imobiliário", "Mercado Premium", "Alta Autoridade"], isFeatured: true },
    { name: "cryptowallet", extension: ".eu", category: "tech", price: 3500, originalPrice: 5500, features: ["Domínio Cripto", "Alta Demanda", "Pronto para Segurança"] },
    { name: "insurancecompare", extension: ".eu", category: "finance", price: 3000, originalPrice: 5000, features: ["Nicho de Seguros", "Potencial de Comparação", "Alta Conversão"] },
    { name: "taxadvisor", extension: ".eu", category: "finance", price: 2500, originalPrice: 4000, features: ["Nicho Fiscal", "Serviço Profissional", "Alta Demanda"] },
    
    // Health & Wellness
    { name: "mentalhealth", extension: ".eu", category: "health", price: 4000, originalPrice: 6500, features: ["Nicho de Saúde", "Mercado em Crescimento", "Alto Impacto"], isHot: true },
    { name: "nutritionplan", extension: ".eu", category: "health", price: 2200, originalPrice: 3800, features: ["Nicho de Nutrição", "Potencial de Planos", "Foco em Saúde"] },
    { name: "yogastudio", extension: ".eu", category: "health", price: 1800, originalPrice: 3000, features: ["Nicho de Yoga", "Foco em Bem-Estar", "Apelo Local"] },
    { name: "skincare", extension: ".eu", category: "health", price: 3000, originalPrice: 5000, features: ["Nicho de Beleza", "Alta Demanda", "E-commerce Pronto"] },
    { name: "supplements", extension: ".eu", category: "health", price: 2800, originalPrice: 4500, features: ["Nicho de Saúde", "Mercado de Varejo", "Alta Conversão"] },
    
    // Additional Premium Domains
    { name: "startupfunding", extension: ".eu", category: "business", price: 3500, originalPrice: 5500, features: ["Nicho de Startup", "Foco em Investidores", "Alta Demanda"] },
    { name: "remotework", extension: ".eu", category: "business", price: 2500, originalPrice: 4000, features: ["Tendência de Trabalho", "Alta Demanda", "Moderno"], isHot: true },
    { name: "greentech", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Nicho Sustentável", "Mercado em Crescimento", "Foco Ecológico"] },
    { name: "petcare", extension: ".eu", category: "lifestyle", price: 2000, originalPrice: 3500, features: ["Nicho de Animais", "Mercado em Crescimento", "Amplo Apelo"] },
    { name: "homegarden", extension: ".eu", category: "lifestyle", price: 1500, originalPrice: 2500, features: ["Nicho de Casa", "Potencial de DIY", "Apelo Familiar"] },
    
    // More domains to reach 100+
    { name: "onlinelearning", extension: ".eu", category: "tech", price: 3500, originalPrice: 5500, features: ["Nicho de Educação", "Alta Demanda", "Escalável"] },
    { name: "jobsearch", extension: ".eu", category: "business", price: 4000, originalPrice: 6500, features: ["Nicho de Emprego", "Alta Demanda", "Mercado Grande"] },
    { name: "carinsurance", extension: ".eu", category: "finance", price: 5000, originalPrice: 8000, features: ["Nicho de Seguros", "Alta Conversão", "Mercado Premium"] },
    { name: "homeloans", extension: ".eu", category: "finance", price: 5500, originalPrice: 8500, features: ["Nicho de Hipotecas", "Mercado Premium", "Alta Autoridade"] },
    { name: "creditcards", extension: ".eu", category: "finance", price: 6000, originalPrice: 9000, features: ["Nicho Financeiro", "Alta Demanda", "Top do Mercado"], isFeatured: true },
    { name: "vpnservice", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Nicho de Segurança", "Alta Demanda", "Mercado em Crescimento"] },
    { name: "webhosting", extension: ".eu", category: "tech", price: 4000, originalPrice: 6500, features: ["Nicho de Hospedagem", "Alta Demanda", "Receita Recorrente"] },
    { name: "seoagency", extension: ".eu", category: "business", price: 2500, originalPrice: 4000, features: ["Nicho de Marketing", "Orientado a Serviços", "B2B"] },
    { name: "contentmarketing", extension: ".eu", category: "business", price: 2800, originalPrice: 4500, features: ["Nicho de Marketing", "Alta Demanda", "Escalável"] },
    { name: "influencer", extension: ".eu", category: "lifestyle", price: 3500, originalPrice: 5500, features: ["Nicho de Redes Sociais", "Mercado em Tendência", "Potencial de Marca"] },
    { name: "podcasthost", extension: ".eu", category: "lifestyle", price: 2000, originalPrice: 3500, features: ["Nicho de Mídia", "Mercado em Crescimento", "Foco em Conteúdo"] },
    { name: "gamingzone", extension: ".eu", category: "lifestyle", price: 2500, originalPrice: 4000, features: ["Nicho de Gaming", "Mercado Jovem", "Alta Interação"] },
    { name: "esports", extension: ".eu", category: "lifestyle", price: 4000, originalPrice: 6500, features: ["Nicho de Gaming", "Mercado em Crescimento", "Alta Demanda"], isHot: true },
    { name: "virtualreality", extension: ".eu", category: "tech", price: 3500, originalPrice: 5500, features: ["Nicho de VR", "Pronto para o Futuro", "Inovador"] },
    { name: "blockchain", extension: ".eu", category: "tech", price: 5000, originalPrice: 8000, features: ["Nicho de Cripto", "Alta Demanda", "Focado em Tecnologia"] },
    { name: "nftmarket", extension: ".eu", category: "tech", price: 4000, originalPrice: 6500, features: ["Nicho de NFT", "Mercado em Tendência", "Alta Demanda"] },
    { name: "metaverse", extension: ".eu", category: "tech", price: 6000, originalPrice: 9000, features: ["Nicho de Futuro", "Alta Demanda", "Mercado Premium"], isHot: true },
    { name: "smartdevices", extension: ".eu", category: "tech", price: 2500, originalPrice: 4000, features: ["Nicho IoT", "Mercado em Crescimento", "Focado em Tecnologia"] },
    { name: "electriccars", extension: ".eu", category: "tech", price: 4500, originalPrice: 7000, features: ["Nicho de EV", "Mercado em Crescimento", "Tendência Verde"] },
    { name: "solarpanels", extension: ".eu", category: "tech", price: 3500, originalPrice: 5500, features: ["Nicho Verde", "Mercado Sustentável", "Alta Demanda"] },
    { name: "windpower", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Nicho de Energia", "Foco Sustentável", "Pronto para B2B"] },
    { name: "organicfood", extension: ".eu", category: "lifestyle", price: 2500, originalPrice: 4000, features: ["Nicho de Alimentos", "Mercado Saudável", "E-commerce Pronto"] },
    { name: "veganrecipes", extension: ".eu", category: "lifestyle", price: 1800, originalPrice: 3000, features: ["Nicho de Alimentação", "Mercado em Crescimento", "Focado em Conteúdo"] },
    { name: "wineclub", extension: ".eu", category: "lifestyle", price: 2200, originalPrice: 3800, features: ["Nicho de Luxo", "Mercado de Assinaturas", "Alta Qualidade"] },
    { name: "craftbeer", extension: ".eu", category: "lifestyle", price: 1800, originalPrice: 3000, features: ["Nicho de Bebidas", "Mercado de Nicho", "Hobby Popular"] },
    { name: "coffeelovers", extension: ".eu", category: "lifestyle", price: 1500, originalPrice: 2500, features: ["Nicho de Café", "Amplo Apelo", "E-commerce Pronto"] },
    { name: "teashop", extension: ".eu", category: "lifestyle", price: 1200, originalPrice: 2000, features: ["Nicho de Bebidas", "E-commerce Pronto", "Apelo Global"] },
    { name: "chocolategift", extension: ".eu", category: "lifestyle", price: 1500, originalPrice: 2500, features: ["Nicho de Presentes", "Sazonal", "E-commerce Pronto"] },
    { name: "flowershop", extension: ".eu", category: "lifestyle", price: 1800, originalPrice: 3000, features: ["Nicho de Varejo", "Apelo Local", "Sazonalmente Alto"] },
    { name: "jewelrystore", extension: ".eu", category: "lifestyle", price: 2500, originalPrice: 4000, features: ["Nicho de Luxo", "E-commerce Pronto", "Alta Margem"] },
    { name: "watchcollection", extension: ".eu", category: "lifestyle", price: 3000, originalPrice: 5000, features: ["Nicho de Luxo", "Mercado de Colecionadores", "Alta Qualidade"] },
    { name: "fashiontrends", extension: ".eu", category: "lifestyle", price: 2800, originalPrice: 4500, features: ["Nicho de Moda", "Alta Demanda", "Focado em Conteúdo"] },
    { name: "beautyproducts", extension: ".eu", category: "lifestyle", price: 3000, originalPrice: 5000, features: ["Nicho de Beleza", "E-commerce Pronto", "Alta Demanda"] },
    { name: "makeuptips", extension: ".eu", category: "lifestyle", price: 2000, originalPrice: 3500, features: ["Nicho de Beleza", "Focado em Conteúdo", "Alta Interação"] },
    { name: "hairstyles", extension: ".eu", category: "lifestyle", price: 1800, originalPrice: 3000, features: ["Nicho de Beleza", "Focado em Conteúdo", "Amplo Apelo"] },
    { name: "weddingplanner", extension: ".eu", category: "lifestyle", price: 2500, originalPrice: 4000, features: ["Nicho de Eventos", "Alta Demanda", "Mercado Premium"] },
    { name: "eventcatering", extension: ".eu", category: "lifestyle", price: 2000, originalPrice: 3500, features: ["Nicho de Eventos", "Orientado a Serviços", "B2B Pronto"] },
    { name: "partyrentals", extension: ".eu", category: "lifestyle", price: 1500, originalPrice: 2500, features: ["Nicho de Eventos", "Mercado de Aluguel", "Apelo Local"] },
    { name: "djservices", extension: ".eu", category: "lifestyle", price: 1200, originalPrice: 2000, features: ["Nicho de Entretenimento", "Orientado a Serviços", "Apelo Local"] },
    { name: "photographypro", extension: ".eu", category: "lifestyle", price: 2000, originalPrice: 3500, features: ["Nicho Criativo", "Orientado a Portfólio", "Marca Profissional"] },
    { name: "videoproduction", extension: ".eu", category: "lifestyle", price: 2500, originalPrice: 4000, features: ["Nicho de Mídia", "Orientado a Serviços", "Alta Demanda"] },
    { name: "graphicdesign", extension: ".eu", category: "business", price: 2200, originalPrice: 3800, features: ["Nicho Criativo", "Orientado a Serviços", "Pronto para Freelancer"] },
    { name: "logomaker", extension: ".eu", category: "business", price: 2000, originalPrice: 3500, features: ["Nicho de Design", "Potencial de Ferramenta", "Alta Demanda"] },
    { name: "websitebuilder", extension: ".eu", category: "tech", price: 4000, originalPrice: 6500, features: ["Nicho de Tecnologia", "Alta Demanda", "Mercado SaaS"] },
    { name: "appdeveloper", extension: ".eu", category: "tech", price: 2800, originalPrice: 4500, features: ["Nicho de Tecnologia", "Orientado a Serviços", "Alta Demanda"] },
    { name: "softwaretools", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Nicho de Tecnologia", "Mercado de Produto", "B2B Pronto"] },
    { name: "datascience", extension: ".eu", category: "tech", price: 3500, originalPrice: 5500, features: ["Nicho de Tecnologia", "Alta Demanda", "Mercado Premium"] },
    { name: "machinelearning", extension: ".eu", category: "tech", price: 4500, originalPrice: 7000, features: ["Nicho de IA", "Mercado em Tendência", "Alta Autoridade"] },
    { name: "cybersecurity", extension: ".eu", category: "tech", price: 5000, originalPrice: 8000, features: ["Nicho de Segurança", "Alta Demanda", "Mercado Premium"], isFeatured: true },
    { name: "cloudcomputing", extension: ".eu", category: "tech", price: 4000, originalPrice: 6500, features: ["Nicho de Tecnologia", "Pronto para Empresa", "Alta Demanda"] },
    { name: "devtools", extension: ".eu", category: "tech", price: 2500, originalPrice: 4000, features: ["Nicho de Desenvolvedores", "Mercado de Ferramenta", "Alta Demanda"] },
    { name: "apiservices", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Nicho de Tecnologia", "B2B Pronto", "Escalável"] },
    { name: "testingtools", extension: ".eu", category: "tech", price: 2200, originalPrice: 3800, features: ["Nicho de QA", "Mercado de Ferramenta", "B2B Pronto"] },
    { name: "projectmanagement", extension: ".eu", category: "business", price: 3500, originalPrice: 5500, features: ["Nicho de Produtividade", "Mercado SaaS", "Alta Demanda"] },
    { name: "teamcollaboration", extension: ".eu", category: "business", price: 3000, originalPrice: 5000, features: ["Nicho de Trabalho", "Mercado SaaS", "Alta Demanda"] },
    { name: "customerservice", extension: ".eu", category: "business", price: 2800, originalPrice: 4500, features: ["Nicho de Suporte", "B2B Pronto", "Alta Demanda"] },
    { name: "salesforce", extension: ".eu", category: "business", price: 4000, originalPrice: 6500, features: ["Nicho de CRM", "Alta Demanda", "Pronto para Empresa"] },
    { name: "emailmarketing", extension: ".eu", category: "business", price: 3000, originalPrice: 5000, features: ["Nicho de Marketing", "Alta Demanda", "Mercado SaaS"] },
    { name: "socialads", extension: ".eu", category: "business", price: 2500, originalPrice: 4000, features: ["Nicho de Publicidade", "Alta Demanda", "Orientado a Serviços"] },
    { name: "ppcagency", extension: ".eu", category: "business", price: 2200, originalPrice: 3800, features: ["Nicho de Publicidade", "Orientado a Serviços", "B2B Pronto"] },
    { name: "affiliatemarketing", extension: ".eu", category: "business", price: 3500, originalPrice: 5500, features: ["Nicho de Afiliados", "Alta Demanda", "Orientado a Renda"] },
    { name: "dropshipping", extension: ".eu", category: "business", price: 3000, originalPrice: 5000, features: ["Nicho de E-commerce", "Mercado em Tendência", "Orientado a Renda"] },
    { name: "printshop", extension: ".eu", category: "business", price: 1800, originalPrice: 3000, features: ["Nicho de Impressão", "Orientado a Serviços", "Apelo Local"] },
    { name: "packagingdesign", extension: ".eu", category: "business", price: 2000, originalPrice: 3500, features: ["Nicho de Design", "B2B Pronto", "Orientado a Serviços"] },
    { name: "shippingservices", extension: ".eu", category: "business", price: 2500, originalPrice: 4000, features: ["Nicho de Logística", "B2B Pronto", "Alta Demanda"] },
    { name: "warehouserentals", extension: ".eu", category: "business", price: 2200, originalPrice: 3800, features: ["Nicho de Logística", "B2B Pronto", "Mercado de Aluguel"] },
    { name: "importexport", extension: ".eu", category: "business", price: 3000, originalPrice: 5000, features: ["Nicho Comercial", "B2B Pronto", "Mercado Global"] },
    { name: "wholesale", extension: ".eu", category: "business", price: 2800, originalPrice: 4500, features: ["Nicho Comercial", "B2B Pronto", "Alto Volume"] },
    { name: "retailstore", extension: ".eu", category: "business", price: 2000, originalPrice: 3500, features: ["Nicho de Varejo", "E-commerce Pronto", "Amplo Apelo"] },
    { name: "onlineshop", extension: ".eu", category: "business", price: 3000, originalPrice: 5000, features: ["Nicho de E-commerce", "Alta Demanda", "Versátil"] },
    { name: "marketplace", extension: ".eu", category: "business", price: 5000, originalPrice: 8000, features: ["Nicho de Plataforma", "Alta Demanda", "Escalável"], isFeatured: true },
    { name: "auctionsite", extension: ".eu", category: "business", price: 3500, originalPrice: 5500, features: ["Nicho de Leilão", "Focado em Plataforma", "Modelo Único"] },
    { name: "bookingplatform", extension: ".eu", category: "business", price: 4000, originalPrice: 6500, features: ["Nicho de Reservas", "Mercado de Plataforma", "Alta Demanda"] },
    { name: "rentalservices", extension: ".eu", category: "business", price: 2500, originalPrice: 4000, features: ["Nicho de Aluguel", "Orientado a Serviços", "Apelo Local"] },
    { name: "cleaningservices", extension: ".eu", category: "business", price: 1500, originalPrice: 2500, features: ["Nicho de Serviços", "Apelo Local", "Alta Demanda"] },
    { name: "movingcompany", extension: ".eu", category: "business", price: 1800, originalPrice: 3000, features: ["Nicho de Serviços", "Apelo Local", "Alta Demanda"] },
    { name: "handymanservices", extension: ".eu", category: "business", price: 1500, originalPrice: 2500, features: ["Nicho de Serviços", "Apelo Local", "Ampla Demanda"] },
    { name: "electrician", extension: ".eu", category: "business", price: 1200, originalPrice: 2000, features: ["Nicho de Ofícios", "Apelo Local", "Essencial"] },
    { name: "plumbingservices", extension: ".eu", category: "business", price: 1200, originalPrice: 2000, features: ["Nicho de Ofícios", "Apelo Local", "Essencial"] },
    { name: "hvacservices", extension: ".eu", category: "business", price: 1500, originalPrice: 2500, features: ["Nicho de HVAC", "Apelo Local", "Essencial"] },
    { name: "roofingpro", extension: ".eu", category: "business", price: 1800, originalPrice: 3000, features: ["Nicho de Construção", "Apelo Local", "Alta Demanda"] },
    { name: "landscaping", extension: ".eu", category: "business", price: 1500, originalPrice: 2500, features: ["Nicho de Exterior", "Apelo Local", "Sazonal"] },
    { name: "poolservices", extension: ".eu", category: "lifestyle", price: 1800, originalPrice: 3000, features: ["Nicho de Piscina", "Apelo Local", "Sazonal"] },
    { name: "pestcontrol", extension: ".eu", category: "business", price: 1500, originalPrice: 2500, features: ["Nicho de Serviços", "Apelo Local", "Essencial"] },
    { name: "securitysystems", extension: ".eu", category: "tech", price: 2500, originalPrice: 4000, features: ["Nicho de Segurança", "Alta Demanda", "Pronto para B2C"] },
    { name: "homeautomation", extension: ".eu", category: "tech", price: 3000, originalPrice: 5000, features: ["Nicho de Casa Inteligente", "Mercado em Tendência", "Focado em Tecnologia"] },
    { name: "espresso-project", extension: ".eu", category: "lifestyle", price: 2200, originalPrice: 3800, features: ["Nicho de Café", "Potencial de Marca", "Apelo Premium"] },
  ];

  const filteredDomains = useMemo(() => {
    return premiumDomains.filter((domain) => {
      const matchesSearch = domain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        domain.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || domain.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const displayedDomains = showAllDomains ? filteredDomains : filteredDomains.slice(0, 12);

  const featuredDomains = premiumDomains.filter(d => d.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Language Switcher */}
      <div className="bg-slate-900">
        <LanguageSwitcher currentLanguage="pt" />
      </div>
      
      <Helmet>
        <html lang="pt" />
        <title>Comprar Domínios Premium | Alta Autoridade &amp; Valor SEO | Domínios Expirados</title>
        <meta name="description" content="Explore a nossa coleção de domínios premium .EU com alta autoridade de domínio, valor SEO e potencial de marca. Preços competitivos, transferência segura via Stripe." />
        <meta name="keywords" content="domínios premium, comprar domínios, valor seo, alta autoridade, domínios expirados, domínios .eu, investimento em domínios, nomes de marca" />
        <link rel="canonical" href="https://www.termsofservicegenerator.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" />
        <meta property="og:title" content="Comprar Domínios Premium | Alta Autoridade & Valor SEO" />
        <meta property="og:description" content="Explore a nossa coleção de domínios premium .EU com alta autoridade de domínio e potencial SEO." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_PT" />
      </Helmet>

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-slate-800/20 opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30 px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 inline" />
              Domínios Premium .EU Disponíveis
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Domínios Premium para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                O Seu Próximo Grande Projeto
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubra domínios .EU cuidadosamente selecionados com alta autoridade de domínio, prontos para a sua marca.
              Pagamento seguro via Stripe, transferência instantânea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold shadow-lg shadow-amber-500/25"
                onClick={() => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explorar Domínios
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2 text-slate-400">
                <Shield className="w-5 h-5" />
                <span>Transações Seguras via Stripe</span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </header>

      {/* Trust Indicators */}
      <section className="py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-3">
                <Shield className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Transferência Segura</h3>
              <p className="text-sm text-slate-600">Pagamento garantido por Stripe</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <TrendingUp className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Alto Valor SEO</h3>
              <p className="text-sm text-slate-600">Domínios com autoridade</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Globe className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Domínios .EU</h3>
              <p className="text-sm text-slate-600">Confiança europeia</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="font-semibold text-slate-800">Transferência Rápida</h3>
              <p className="text-sm text-slate-600">Ativo em 24-48 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Domains */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-slate-100 text-slate-700 border-slate-200">
              <Award className="w-4 h-4 mr-2 inline" />
              Seleção em Destaque
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Domínios Premium em Destaque
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Selecionados por alto valor SEO, potencial de marca e relevância no setor
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDomains.map((domain) => (
              <div 
                key={domain.name}
                className="relative group bg-gradient-to-b from-white to-slate-50 rounded-2xl border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500"></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-amber-100 text-amber-700 border-amber-200">
                      <Star className="w-3 h-3 mr-1" />
                      Destaque
                    </Badge>
                    {domain.isHot && (
                      <Badge className="bg-red-100 text-red-700 border-red-200">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {domain.name}<span className="text-amber-500">{domain.extension}</span>
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {domain.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-bold text-slate-800">€{domain.price.toLocaleString()}</span>
                    {domain.originalPrice && (
                      <span className="text-lg text-slate-400 line-through mb-1">€{domain.originalPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-6">
                    Comprar Agora
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Domains Section */}
      <section id="domains" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Explorar Todos os Domínios Premium
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Navegue pela nossa coleção completa de {premiumDomains.length}+ domínios premium
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Pesquisar domínios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg border-slate-200 focus:border-amber-400 focus:ring-amber-400"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id 
                    ? "bg-slate-800 hover:bg-slate-700 text-white" 
                    : "border-slate-200 hover:border-slate-300 text-slate-600"
                  }
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-slate-600">
              A mostrar <span className="font-semibold text-slate-800">{displayedDomains.length}</span> de <span className="font-semibold text-slate-800">{filteredDomains.length}</span> domínios
            </p>
          </div>

          {/* Domain Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedDomains.map((domain) => (
              <div
                key={domain.name}
                className="bg-white rounded-xl border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                      {categories.find(c => c.id === domain.category)?.name || domain.category}
                    </span>
                    <div className="flex gap-1">
                      {domain.isHot && (
                        <Badge className="bg-red-100 text-red-600 border-0 text-xs">Popular</Badge>
                      )}
                      {domain.isFeatured && (
                        <Badge className="bg-amber-100 text-amber-600 border-0 text-xs">Destaque</Badge>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-amber-600 transition-colors">
                    {domain.name}<span className="text-amber-500">{domain.extension}</span>
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {domain.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-50 text-slate-500 px-2 py-0.5 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="text-2xl font-bold text-slate-800">€{domain.price.toLocaleString()}</span>
                      {domain.originalPrice && (
                        <span className="text-sm text-slate-400 line-through ml-2">€{domain.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-slate-800 hover:bg-slate-700 text-white">
                      Comprar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {filteredDomains.length > 12 && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllDomains(!showAllDomains)}
                className="border-slate-300 hover:border-slate-400 text-slate-700"
              >
                {showAllDomains ? (
                  <>
                    <ChevronUp className="w-5 h-5 mr-2" />
                    Mostrar Menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-5 h-5 mr-2" />
                    Mostrar Todos os {filteredDomains.length} Domínios
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Buy Premium Domains */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Porquê Investir num Domínio Premium?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Domínios premium oferecem vantagens significativas para o seu negócio online
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Vantagem SEO Instantânea</h3>
              <p className="text-slate-600">
                Domínios com autoridade existente classificam-se mais rápido e mais alto nos motores de busca, poupando meses de esforço de construção de links.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Reconhecimento da Marca</h3>
              <p className="text-slate-600">
                Nomes de domínio memoráveis constroem confiança e credibilidade com o seu público desde o primeiro dia.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Investimento a Longo Prazo</h3>
              <p className="text-slate-600">
                Domínios premium valorizam ao longo do tempo. Muitas empresas veem retornos de 10-100x na venda de domínios.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Proteção da Marca</h3>
              <p className="text-slate-600">
                Proteja a identidade da sua marca adquirindo domínios premium relevantes antes dos seus concorrentes.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-red-100 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Vantagem Tipo-In</h3>
              <p className="text-slate-600">
                Domínios ricos em palavras-chave recebem tráfego tipo-in direto de utilizadores que pesquisam no seu nicho.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Alcance Global</h3>
              <p className="text-slate-600">
                Domínios .EU transmitem confiança e credibilidade aos clientes europeus e além.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Processo simples de três passos para adquirir o seu domínio premium
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-amber-600">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Escolha o Seu Domínio</h3>
              <p className="text-slate-600">
                Navegue pela nossa coleção e selecione o domínio premium perfeito para o seu projeto.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-amber-600">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Pagamento Seguro</h3>
              <p className="text-slate-600">
                Complete a sua compra de forma segura através do nosso checkout Stripe. Todos os métodos de pagamento aceites.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-amber-600">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Transferência de Domínio</h3>
              <p className="text-slate-600">
                Receba os seus dados de acesso ao domínio dentro de 24-48 horas após confirmação do pagamento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-10 text-white">
            <h2 className="text-3xl font-bold mb-4">Checkout Seguro com Stripe</h2>
            <p className="text-lg text-slate-300 mb-8">
              Todos os pagamentos são processados de forma segura através de Stripe. Aceitamos todos os principais cartões de crédito e métodos de pagamento locais.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <img src={stripeLogo} alt="Stripe" className="h-10 opacity-80" />
              <div className="flex items-center gap-3 text-slate-400">
                <Shield className="w-5 h-5" />
                <span>Criptografia SSL de 256 bits</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">Visa</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">Mastercard</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">American Express</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">iDEAL</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm">SEPA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterPremiumDomainsPT />
    </div>
  );
};

export default PremiumDomainsPT;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Política de Privacidade",
    description: "Política de privacidade completa conforme a legislação GDPR",
    details: [
      "Direitos dos utilizadores segundo o GDPR",
      "Que dados são recolhidos",
      "Como e porquê esses dados são utilizados",
      "Partilha de dados com terceiros"
    ]
  },
  {
    icon: AlertCircle,
    title: "Aviso Legal",
    description: "Proteção jurídica contra reclamações de responsabilidade",
    details: [
      "Sem garantia de resultados",
      "Sem responsabilidade por informações",
      "Notificação de links de afiliados e comissões"
    ]
  },
  {
    icon: FileText,
    title: "Divulgação de Afiliados",
    description: "Divulgação transparente conforme diretrizes FTC",
    details: [
      "Transparência sobre anunciantes",
      "Divulgação clara de comissões",
      "Conformidade com regulamentos UE e EUA"
    ]
  },
  {
    icon: ScrollText,
    title: "Termos e Condições",
    description: "Regula a relação entre o seu site e os utilizadores",
    details: [
      "Limitação de responsabilidade",
      "Restrições de uso",
      "Direitos de propriedade intelectual"
    ]
  },
  {
    icon: Cookie,
    title: "Política de Cookies",
    description: "Conformidade e consentimento total de cookies",
    details: [
      "Explicação do uso de cookies",
      "Consentimento conforme GDPR",
      "Gestão de cookies analíticos"
    ]
  },
  {
    icon: BookOpen,
    title: "Guia de Implementação",
    description: "Instruções passo a passo para implementação",
    details: [
      "Instruções simples de instalação",
      "Posicionamento correto dos documentos",
      "Dicas de personalização para o seu site"
    ]
  }
];

const ServicesPT = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Os Nossos Serviços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Legais Essenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para um site de afiliados, os seguintes documentos legais são essenciais. 
            O nosso pacote contém tudo o que você precisa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Perfeito para Todos os Afiliados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Com milhares de sites de afiliados, os nossos documentos personalizáveis são adequados para qualquer negócio de afiliados. 
                Concentre-se em ganhar comissões—tornámos a conformidade legal simples!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Para TODOS os Seus Sites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Os documentos legais essenciais para todos os seus sites de afiliados. Sim, você pode usá-los para 
                TODOS os sites sem ter que comprar licenças separadas!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimize os Seus Riscos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Embora garantias não existam e nenhum documento possa garantir tudo, estes documentos legais são projetados para reduzir os seus riscos e fornecer-lhe proteção máxima. Eles dão-lhe a certeza de termos claros e confiáveis."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesPT;
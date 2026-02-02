import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionPT = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Documentos Legais Profissionais para Negócios de Afiliados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Todos os Documentos Legalmente Necessários para o Seu Site de Afiliados
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Como profissional de marketing de afiliados, você ganha comissões recomendando produtos. Mas sabia que é 
              <strong> legalmente obrigado</strong> a ter certos documentos legais no seu site? 
              Sem estes documentos, você arrisca multas elevadas e problemas legais.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Sobre Mim</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Especialista jurídica" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Especialista jurídica especializada em documentos legais claros, precisos e profissionais
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Olá, sou Nicole Henderson, uma redatora jurídica especializada em documentos legais claros, precisos e profissionais. Redijo contratos, políticas e acordos para empresas, organizações e indivíduos que protegem os seus interesses e garantem conformidade, tornando a documentação legal simples e sem stress.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Documentos Legais Profissionais para Negócios de Afiliados
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Para responder às muitas perguntas sobre requisitos legais para afiliados, desenvolvi documentos legais de alta qualidade especificamente para sites de afiliados. Estes documentos são projetados para uso nacional e internacional e fornecem proteção essencial por uma fração do custo habitual. Obtenha cobertura legal profissional a um preço acessível—proteja o seu negócio hoje!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                O Que Você Recebe: O Pacote Legal Completo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                O nosso pacote completo contém <strong>todos os documentos legais especificamente escritos para sites de afiliados</strong>. 
                Não são modelos genéricos, mas textos profissionais perfeitamente alinhados com o seu modelo de negócio de afiliados:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Política de Privacidade GDPR</h4>
                    <p className="text-sm text-muted-foreground">Totalmente conforme com a legislação europeia, incluindo uso de cookies e proteção de dados</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Divulgação de Afiliados</h4>
                    <p className="text-sm text-muted-foreground">Notificação transparente de que você ganha comissões, conforme regulamentos FTC e UE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Termos e Condições</h4>
                    <p className="text-sm text-foreground/80">Protege você de reclamações de responsabilidade e regula a relação com os visitantes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Aviso Legal</h4>
                    <p className="text-sm text-foreground/80">Limita a sua responsabilidade pelas recomendações que faz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Política de Cookies</h4>
                    <p className="text-sm text-foreground/80">Conforme com GDPR, explicação de cookies de rastreamento e análise</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Guia de Implementação</h4>
                    <p className="text-sm text-foreground/80">Instruções passo a passo para colocar tudo corretamente no seu site</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Pronto em Minutos</h3>
                <p className="text-sm text-foreground/80">
                  Baixe, preencha os dados do seu negócio e coloque os documentos no seu site. Sem necessidade de advogado, sem semanas de espera.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Para Todos os Seus Sites</h3>
                <p className="text-sm text-muted-foreground">
                  Uma compra, uso ilimitado. Use estes documentos para todos os seus sites de afiliados atuais e futuros!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Uso Internacional</h3>
                <p className="text-sm text-muted-foreground">
                  Os modelos estão disponíveis para download em vários idiomas para uso internacional, para que você possa implementá-los em todos os seus sites em todo o mundo.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Totalmente conforme com GDPR e legislação internacional. Opção de download em diferentes idiomas para uso internacional. Proteção completa para o seu negócio.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Por apenas <strong className="text-primary-foreground">€79 pagamento único</strong> você organiza todas as obrigações legais 
                para todos os seus sites de afiliados. Sem mensalidades, sem problemas com advogados, sem risco de multas. 
                Apenas todos os documentos de que você precisa, prontos para usar.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Peça Agora por €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Considere isto: uma hora com um advogado já custa mais de €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionPT;
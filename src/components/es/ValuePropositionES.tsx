import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionES = () => {
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
              Documentos Legales Profesionales para Negocios de Afiliados
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Todos los Documentos Legalmente Requeridos que Necesita Tu Sitio Web de Afiliados
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Como afiliado, estás <strong>legalmente obligado</strong> a ser transparente sobre tu modelo de negocio y cómo manejas los datos de los visitantes. 
              Sin los documentos legales adecuados, te arriesgas a multas elevadas y problemas legales.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-secondary/30 rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Sobre Mí</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Especialista legal" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Especialista legal especializada en documentos legales claros, precisos y profesionales
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hola, soy Nicole Henderson, redactora legal especializada en documentos legales claros, precisos y profesionales. Redacto contratos, políticas y acuerdos para empresas, organizaciones e individuos que protegen tus intereses y garantizan el cumplimiento, haciendo que el papeleo legal sea simple y sin estrés.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Documentos Legales Profesionales para Negocios de Afiliados
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Para responder a las muchas preguntas sobre requisitos legales para afiliados, he desarrollado documentos legales de alta calidad específicamente para sitios web de afiliados. Estos documentos están diseñados para uso nacional e internacional y proporcionan protección esencial a una fracción del costo habitual. ¡Obtén cobertura legal profesional a un precio asequible—asegura tu negocio hoy!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Lo Que Obtienes: El Paquete Legal Completo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Nuestro paquete completo contiene <strong>todos los documentos legales escritos específicamente para sitios web de afiliados</strong>. 
                No son plantillas genéricas, sino textos profesionales que se alinean perfectamente con tu modelo de negocio de afiliados:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Política de Privacidad RGPD</h4>
                    <p className="text-sm text-muted-foreground">Totalmente conforme con la legislación europea, incluido el uso de cookies y protección de datos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Divulgación de Afiliados</h4>
                    <p className="text-sm text-muted-foreground">Notificación transparente de que ganas comisiones, conforme con las regulaciones FTC y UE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Términos y Condiciones</h4>
                    <p className="text-sm text-foreground/80">Te protege de reclamos de responsabilidad y regula la relación con los visitantes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Exención de Responsabilidad Legal</h4>
                    <p className="text-sm text-foreground/80">Limita tu responsabilidad por las recomendaciones que haces</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Política de Cookies</h4>
                    <p className="text-sm text-foreground/80">Conforme al RGPD, explicación de cookies de seguimiento y análisis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Guía de Implementación</h4>
                    <p className="text-sm text-foreground/80">Instrucciones paso a paso para colocar todo correctamente en tu sitio web</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Listo en Minutos</h3>
                <p className="text-sm text-foreground/80">
                  Descarga, completa los detalles de tu negocio y coloca los documentos en tu sitio web. Sin necesidad de abogado, sin semanas de espera.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Para Todos Tus Sitios Web</h3>
                <p className="text-sm text-muted-foreground">
                  Una vez adquiridos, puedes usar estos documentos en todos tus sitios web de afiliados. Sin costos adicionales, sin licencias separadas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Uso Internacional</h3>
                <p className="text-sm text-muted-foreground">
                  Las plantillas están disponibles para descarga en múltiples idiomas para uso internacional, para que puedas implementarlas en todos tus sitios web en todo el mundo.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Totalmente conforme con el RGPD y la legislación internacional. Opción de descargar en diferentes idiomas para uso internacional. Protección completa para tu negocio.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Por solo <strong className="text-primary-foreground">€79 pago único</strong> organizas todas las obligaciones legales 
                para todos tus sitios web de afiliados. Sin tarifas mensuales, sin problemas con abogados, sin riesgo de multas. 
                Solo todos los documentos que necesitas, listos para usar.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Ordenar Ahora por €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Considera esto: una hora con un abogado ya cuesta más de €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionES;
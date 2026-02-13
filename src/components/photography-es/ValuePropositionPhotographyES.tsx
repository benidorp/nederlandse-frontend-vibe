import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-photography.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionPhotographyES = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por qué los documentos legales son indispensables para los fotógrafos</h2>
            <p className="text-lg text-muted-foreground">Como fotógrafo profesional, necesita una protección legal adecuada para su negocio, sus obras creativas y sus clientes. Ya sea que fotografíe retratos, bodas, trabajos comerciales o eventos, los documentos legales correctos le protegen contra la responsabilidad y los problemas de derechos de autor.</p>
          </div>

          <Card className="mb-12 bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img src={nicoleProfile} alt="Nicole Henderson - Experta legal" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <CardTitle className="text-2xl text-foreground">Sobre Nicole Henderson</CardTitle>
                  <CardDescription>Experta legal para profesiones creativas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Con años de experiencia ayudando a fotógrafos y profesionales creativos a proteger sus negocios,
                comprendo los desafíos legales únicos a los que se enfrenta. Desde la protección de derechos de autor hasta los contratos con clientes,
                he creado documentos legales completos diseñados específicamente para empresas de fotografía.
              </p>
              <p className="text-muted-foreground">
                Estos documentos están diseñados para ser fácilmente personalizables y al mismo tiempo ofrecer la máxima protección legal
                para su empresa de fotografía, sus obras creativas y sus relaciones con los clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Paquete legal completo para fotógrafos</CardTitle>
              </div>
              <CardDescription className="text-base">
                Todo lo que necesita para la protección legal de su empresa de fotografía
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "Términos y condiciones – diseñados especialmente para fotógrafos",
                  "Contrato de encargo (Presupuesto) – con plantillas y ejemplos de correo",
                  "Política de privacidad – conforme al RGPD para fotógrafos",
                  "Política de cookies – conformidad total con el RGPD",
                  "Aviso legal – protección de sus fotos y contenidos",
                  "Exención de responsabilidad – protección legal para acuerdos con personas",
                  "Protección de derechos de autor – cobertura internacional"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">¿Por qué elegir este paquete?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Listo en pocos minutos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Para todos sus sitios de fotografía</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Cobertura internacional</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Fácilmente personalizable</span>
                  </div>
                </div>
              </div>

              <Card className="bg-card border-primary">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <span className="text-4xl font-bold text-primary">€79</span>
                      <span className="text-muted-foreground ml-2">pago único</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Protección legal completa para su empresa de fotografía.
                      Uso ilimitado en todos sus sitios web. Sin cuotas recurrentes.
                    </p>
                    <Button size="lg" onClick={() => scrollToSection("precios")} className="w-full bg-primary hover:bg-primary/90">
                      Pedir el paquete completo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionPhotographyES;

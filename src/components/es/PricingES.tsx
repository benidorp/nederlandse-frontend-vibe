import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";

const includedItems = [
  "Política de Privacidad (conforme RGPD)",
  "Disclaimer",
  "Affiliate Disclosure (FTC)",
  "Términos y Condiciones",
  "Política de Cookies",
  "Guía de Implementación"
];

const PricingES = () => {
  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Precios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Esenciales para Afiliados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paquete completo con todos los documentos legales que necesitas para tu sitio web de afiliados
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">pago único</span>
              </div>
              <CardTitle className="text-2xl">Paquete Completo de Documentos</CardTitle>
              <CardDescription className="text-base">
                Todos los documentos legales esenciales para uso ilimitado
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t">
                <Button className="w-full" size="lg">
                  Comprar Ahora
                </Button>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Importante: Sin Devoluciones</h4>
                    <p className="text-sm text-muted-foreground">
                      Nuestros productos no se pueden devolver y no ofrecemos garantía de devolución de dinero.
                      Esto es lógico para documentos digitales que pueden copiarse fácilmente después de la descarga.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingES;

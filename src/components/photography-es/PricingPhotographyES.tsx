import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "Términos y condiciones para fotógrafos",
  "Contrato de encargo (Presupuesto) con plantillas",
  "Política de privacidad (conforme al RGPD)",
  "Política de cookies (conforme al RGPD)",
  "Aviso legal para protección de fotos y contenido",
  "Exención de responsabilidad para acuerdos con personas",
  "Protección de derechos de autor",
  "Guía de implementación"
];

const PricingPhotographyES = () => {
  return (
    <section id="precios" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Precios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Legales Esenciales para Fotógrafos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paquete completo con todos los documentos legales que necesita para su empresa de fotografía. Simplemente descargue el paquete en su propio idioma – o en varios idiomas – y prepare su sitio de fotografía para uso internacional.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-6 flex items-center justify-center gap-4" />
              <CardTitle className="text-2xl md:text-3xl mb-3">Paquete legal completo para sitios de fotografía</CardTitle>
              <CardDescription className="text-base md:text-lg">
                Todos los documentos legales esenciales para uso ilimitado en todos sus sitios de fotografía
              </CardDescription>
              <div className="flex justify-center mt-6">
                <img src="/images/iaee-logo.png" alt="IAEE - Documentos Legales Esenciales" className="h-20 w-20 object-contain" loading="eager" />
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="space-y-3">
                {includedItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t flex justify-center">
                <StripeBuyButton />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Pago seguro a través de Stripe • Convertido automáticamente a su moneda local
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-base font-medium">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Importante: Sin devoluciones</h4>
                    <p className="text-xs text-muted-foreground">
                      Nuestros productos no pueden ser devueltos y no ofrecemos garantía de reembolso.
                      Esto tiene sentido para documentos digitales que pueden copiarse fácilmente después de la descarga.
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

export default PricingPhotographyES;

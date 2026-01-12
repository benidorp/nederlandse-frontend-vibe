import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";

const includedItems = [
  "Política de Privacidad (conforme RGPD)",
  "Exención de Responsabilidad",
  "Divulgación de Afiliados (FTC)",
  "Términos y Condiciones",
  "Política de Cookies",
  "Guía de Implementación"
];

const PricingES = () => {
  return (
    <section id="pricing" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Precios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Esenciales para Afiliados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Paquete completo con todos los documentos legales que necesitas para tu sitio web de afiliados. Descarga el paquete fácilmente en tu propio idioma – o en varios idiomas – y prepara tu sitio web de afiliados para uso internacional.
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
                    <div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div 
                className="pt-6 border-t flex justify-center"
              >
                <div 
                  className="[&_stripe-buy-button]:scale-125 [&_stripe-buy-button]:origin-center"
                  dangerouslySetInnerHTML={{
                    __html: `<stripe-buy-button
                      buy-button-id="buy_btn_1SKm3dFXIgtr666GOD7ZP6da"
                      publishable-key="pk_live_51SK0ndFXIgtr666GrmKudtOsf3HHcaBw06Ei3x8LbGKOYQ3oZeIrmpMpTfoTBJ5c7tPyFfbRC7pugHMC0l6b3ZKP009fgyIrGc"
                    ></stripe-buy-button>`
                  }}
                />
              </div>

              {/* NordVPN Recommendation Section */}
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4 mt-4">
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-2">🔒 Protege tu Privacidad con NordVPN</h4>
                  <p className="text-white/90 text-sm mb-3">
                    ¿Qué es una VPN? Una <a href="https://www.anrdoezrs.net/click-100643838-14439598" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Red Privada Virtual (VPN)</a> encripta tu conexión a internet y oculta tu dirección IP, protegiendo tus datos personales de hackers, rastreadores y vigilancia.
                  </p>
                  <p className="text-white/80 text-xs mb-4">
                    Como afiliado, tu seguridad online es crucial. NordVPN te permite navegar de forma anónima, acceder a contenido global y proteger tus transacciones comerciales.
                  </p>
                  <a 
                    href="https://www.anrdoezrs.net/click-100643838-14439598" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm"
                  >
                    Obtén NordVPN Ahora →
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Pago seguro vía Stripe • Convertido automáticamente a tu moneda local
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Importante: Sin Devoluciones</h4>
                    <p className="text-xs text-muted-foreground">
                      Nuestros productos no se pueden devolver y no ofrecemos garantía de devolución de dinero. 
                      Esto tiene sentido para documentos digitales que se pueden copiar fácilmente después de la descarga.
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
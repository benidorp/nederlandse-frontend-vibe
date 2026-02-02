import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";

const includedItems = [
  "Política de Privacidade (Conforme GDPR)",
  "Aviso Legal",
  "Divulgação de Afiliados (FTC)",
  "Termos e Condições",
  "Política de Cookies",
  "Guia de Implementação"
];

const PricingPT = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Preços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Essenciais para Afiliados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pacote completo com todos os documentos legais necessários para o seu site de afiliados. Baixe o pacote facilmente no seu idioma – ou em vários idiomas – e prepare o seu site de afiliados para uso internacional.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">pagamento único</span>
              </div>
              <CardTitle className="text-2xl">Pacote de Documentos Completo</CardTitle>
              <CardDescription className="text-base">
                Todos os documentos legais essenciais para uso ilimitado
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

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Pagamento seguro via Stripe • Convertido automaticamente para a sua moeda local
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Importante: Sem Devoluções</h4>
                    <p className="text-xs text-muted-foreground">
                      Os nossos produtos não podem ser devolvidos e não oferecemos garantia de reembolso. 
                      Isto faz sentido para documentos digitais que podem ser facilmente copiados após o download.
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

export default PricingPT;
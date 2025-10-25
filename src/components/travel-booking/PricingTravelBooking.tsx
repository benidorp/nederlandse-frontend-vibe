import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";

const includedItems = [
  "Privacybeleid (AVG-compliant)",
  "Disclaimer", 
  "Annuleringsvoorwaarden",
  "Algemene Voorwaarden",
  "Cookiebeleid",
  "Implementatiegids"
];

const PricingTravelBooking = () => {
  return (
    <section id="prijzen" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Prijzen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essentiële Documenten voor Reisboekingswebsites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compleet pakket met alle juridische documenten die u nodig heeft voor uw reisboekingsplatform. Download het pakket eenvoudig in je eigen taal – of in meerdere talen – en maak je reiswebsite klaar voor internationaal gebruik.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">eenmalig</span>
              </div>
              <CardTitle className="text-2xl">Complete Documentenpakket</CardTitle>
              <CardDescription className="text-base">
                Alle essentiële juridische documenten voor onbeperkt gebruik
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

              <p className="text-base font-semibold text-center text-muted-foreground">
                Veilig betalen via Stripe, automatisch omgerekend naar uw eigen valuta.
              </p>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Belangrijk: Geen Retourneren</h4>
                    <p className="text-xs text-muted-foreground">
                      Onze producten kunnen niet worden geretourneerd en we bieden geen geld-terug-garantie. 
                      Dit is logisch voor digitale documenten die gemakkelijk kunnen worden gekopieerd na het downloaden.
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

export default PricingTravelBooking;

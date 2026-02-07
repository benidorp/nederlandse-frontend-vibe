import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "Informativa sulla Privacy (Conforme GDPR)",
  "Disclaimer",
  "Divulgazione Affiliazione (FTC)",
  "Termini e Condizioni",
  "Cookie Policy",
  "Guida all'Implementazione"
];

const PricingIT = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Prezzi</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documenti Essenziali per Affiliati
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pacchetto completo con tutti i documenti legali necessari per il tuo sito web affiliato. Scarica il pacchetto facilmente nella tua lingua – o in più lingue – e rendi il tuo sito affiliato pronto per l'uso internazionale.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">una tantum</span>
              </div>
              <CardTitle className="text-2xl">Pacchetto Documenti Completo</CardTitle>
              <CardDescription className="text-base">
                Tutti i documenti legali essenziali per uso illimitato
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

              <div className="pt-6 border-t flex justify-center">
                <StripeBuyButton />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Pagamento sicuro tramite Stripe • Conversione automatica nella tua valuta locale
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Importante: Nessun Reso</h4>
                    <p className="text-xs text-muted-foreground">
                      I nostri prodotti non possono essere restituiti e non offriamo garanzia di rimborso. 
                      Questo ha senso per documenti digitali che possono essere facilmente copiati dopo il download.
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

export default PricingIT;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";

const includedItems = [
  "Privacybeleid (AVG-compliant)",
  "Disclaimer",
  "Affiliate Disclosure (FTC)",
  "Algemene Voorwaarden",
  "Cookiebeleid",
  "Implementatiegids"
];

const Pricing = () => {
  return (
    <section id="prijzen" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Prijzen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essentiële Affiliate Documenten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compleet pakket met alle juridische documenten die u nodig heeft voor uw affiliate website
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

              <div className="pt-6 border-t">
                <Button className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow" size="lg">
                  Bestel Nu
                </Button>
              </div>

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

export default Pricing;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "Tietosuojakäytäntö (GDPR-yhteensopiva)",
  "Vastuuvapauslauseke",
  "Affiliate-tiedonanto (FTC)",
  "Käyttöehdot",
  "Evästekäytäntö",
  "Toteutusopas"
];

const PricingFI = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Hinnoittelu</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Olennaiset Affiliate-asiakirjat
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Täydellinen paketti kaikilla juridisilla asiakirjoilla, joita tarvitset affiliate-sivustollesi. Lataa paketti helposti omalla kielelläsi – tai useilla kielillä – ja tee affiliate-sivustostasi kansainväliseen käyttöön valmis.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">79 €</span>
                <span className="text-muted-foreground ml-2">kertamaksu</span>
              </div>
              <CardTitle className="text-2xl">Täydellinen Asiakirjapaketti</CardTitle>
              <CardDescription className="text-base">
                Kaikki olennaiset juridiset asiakirjat rajattomaan käyttöön
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
                  Turvallinen maksu Stripen kautta • Automaattisesti muunnettu paikalliseen valuuttaasi
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Tärkeää: Ei Palautuksia</h4>
                    <p className="text-xs text-muted-foreground">
                      Tuotteitamme ei voi palauttaa emmekä tarjoa rahat takaisin -takuuta. 
                      Tämä on järkevää digitaalisille asiakirjoille, jotka voidaan helposti kopioida latauksen jälkeen.
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

export default PricingFI;
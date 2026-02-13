import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const includedItems = [
  "AGB für Fotografen",
  "Auftragsvereinbarung (Offerte) mit Vorlagen",
  "Datenschutzerklärung (DSGVO-konform)",
  "Cookie-Richtlinie (DSGVO-konform)",
  "Haftungsausschluss für Foto- & Inhaltsschutz",
  "Verzichtserklärung für Personenvereinbarungen",
  "Urheberrechtsschutz (Auteursrecht)",
  "Implementierungsleitfaden"
];

const PricingPhotographyDE = () => {
  return (
    <section id="preise" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Preise</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wesentliche Rechtsdokumente für Fotografen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komplettpaket mit allen Rechtsdokumenten, die Sie für Ihr Fotografieunternehmen benötigen. Laden Sie das Paket einfach in Ihrer eigenen Sprache herunter – oder in mehreren Sprachen – und machen Sie Ihre Fotografie-Website fit für den internationalen Einsatz.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-8">
              <div className="mb-6 flex items-center justify-center gap-4" />
              <CardTitle className="text-2xl md:text-3xl mb-3">Komplettes Rechtspaket für Fotografie-Websites</CardTitle>
              <CardDescription className="text-base md:text-lg">
                Alle wesentlichen Rechtsdokumente für unbegrenzte Nutzung auf all Ihren Fotografie-Websites
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
                  Sichere Zahlung über Stripe • Automatisch in Ihre Landeswährung umgerechnet
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-base font-medium">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Wichtig: Keine Rückgabe</h4>
                    <p className="text-xs text-muted-foreground">
                      Unsere Produkte können nicht zurückgegeben werden und wir bieten keine Geld-zurück-Garantie.
                      Das ist bei digitalen Dokumenten sinnvoll, die nach dem Download leicht kopiert werden können.
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

export default PricingPhotographyDE;

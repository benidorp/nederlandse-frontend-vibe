import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";

const ValueProposition = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Professionele Juridische Documenten voor Affiliate Bedrijven
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alle Wettelijk Verplichte Documenten die Jouw Affiliate Website Nodig Heeft
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Als affiliate marketeer verdien je commissies door producten aan te bevelen. Maar wist je dat je 
              <strong> wettelijk verplicht</strong> bent om bepaalde juridische documenten op je website te hebben? 
              Zonder deze documenten loop je risico op hoge boetes en juridische problemen.
            </p>
            
            <div className="mt-10 p-8 bg-secondary/30 rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Over Mij</h3>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Juridisch specialist gespecialiseerd in heldere, precieze en professionele juridische documenten
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hallo, ik ben Nicole Henderson, een juridisch schrijver gespecialiseerd in duidelijke, nauwkeurige en professionele juridische documenten. Ik stel contracten, beleid en overeenkomsten op voor bedrijven, organisaties en particulieren die uw belangen beschermen en zorgen voor naleving, waardoor juridisch papierwerk eenvoudig en stressvrij wordt.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Professionele Juridische Documenten voor Affiliate Bedrijven
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Om de vele vragen over juridische vereisten voor affiliates te beantwoorden, heb ik hoogwaardige juridische documenten speciaal voor affiliate websites ontwikkeld. Deze documenten zijn ontworpen voor zowel nationaal als internationaal gebruik en bieden essentiële bescherming tegen een fractie van de gebruikelijke kosten. Krijg professionele juridische dekking tegen een betaalbare prijs—beveilig vandaag nog uw bedrijf!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Wat Je Krijgt: Het Volledige Juridische Pakket
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Ons complete pakket bevat <strong>alle juridische documenten die specifiek zijn geschreven voor affiliate websites</strong>. 
                Geen algemene templates, maar professionele teksten die perfect aansluiten bij jouw affiliate business model:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">AVG/GDPR Privacybeleid</h4>
                    <p className="text-sm text-muted-foreground">Volledig conform Europese wetgeving, inclusief cookiegebruik en gegevensbescherming</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Affiliate Disclosure</h4>
                    <p className="text-sm text-muted-foreground">Transparante melding dat je commissies verdient, conform FTC en EU regelgeving</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Algemene Voorwaarden</h4>
                    <p className="text-sm text-foreground/80">Beschermt je tegen aansprakelijkheidsclaims en regelt de relatie met bezoekers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Juridische Disclaimer</h4>
                    <p className="text-sm text-foreground/80">Beperkt jouw aansprakelijkheid voor de aanbevelingen die je doet</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Cookiebeleid</h4>
                    <p className="text-sm text-foreground/80">AVG-conform, uitleg over tracking en analytics cookies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-navy mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Implementatie Handleiding</h4>
                    <p className="text-sm text-foreground/80">Stap-voor-stap instructies om alles correct op je website te plaatsen</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary-foreground/30 bg-primary-foreground text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Klaar in Minuten</h3>
                <p className="text-sm text-foreground/80">
                  Download, vul je bedrijfsgegevens in, en plaats de documenten op je website. Geen advocaat nodig, geen weken wachten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary-foreground/30 bg-primary-foreground text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Voor Al Je Websites</h3>
                <p className="text-sm text-muted-foreground">
                  Één aankoop, onbeperkt gebruik. Gebruik deze documenten voor al je huidige en toekomstige affiliate websites!
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Stop met Zorgen, Start met Verdienen
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Voor slechts <strong className="text-primary-foreground">€79 eenmalig</strong> regel je alle juridische verplichtingen 
                voor al je affiliate websites. Geen maandelijkse kosten, geen gedoe met advocaten, geen risico op boetes. 
                Gewoon alle documenten die je nodig hebt, kant-en-klaar.
              </p>
              <Button size="lg" onClick={() => scrollToSection("prijzen")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Bestel Nu voor €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Bedenk je: één uur bij een advocaat kost al meer dan €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionSV = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Professionella Juridiska Dokument för Affiliate-företag
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alla Juridiskt Nödvändiga Dokument Din Affiliate-webbplats Behöver
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Som affiliate-marknadsförare tjänar du provisioner genom att rekommendera produkter. Men visste du att du är 
              <strong> juridiskt skyldig</strong> att ha vissa juridiska dokument på din webbplats? 
              Utan dessa dokument riskerar du höga böter och juridiska problem.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Om Mig</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Juridisk specialist" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Juridisk specialist specialiserad på tydliga, precisa och professionella juridiska dokument
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hej, jag är Nicole Henderson, en juridisk skribent som specialiserar mig på tydliga, korrekta och professionella juridiska dokument. Jag upprättar kontrakt, policyer och avtal för företag, organisationer och privatpersoner som skyddar dina intressen och säkerställer efterlevnad, vilket gör juridiskt pappersarbete enkelt och stressfritt.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Professionella Juridiska Dokument för Affiliate-företag
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    För att besvara de många frågorna om juridiska krav för affiliates har jag utvecklat högkvalitativa juridiska dokument specifikt för affiliate-webbplatser. Dessa dokument är utformade för både nationell och internationell användning och ger nödvändigt skydd till en bråkdel av den vanliga kostnaden. Få professionellt juridiskt skydd till ett överkomligt pris—säkra din verksamhet idag!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Vad Du Får: Det Kompletta Juridiska Paketet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Vårt kompletta paket innehåller <strong>alla juridiska dokument specifikt skrivna för affiliate-webbplatser</strong>. 
                Inga generiska mallar, utan professionella texter som passar perfekt för din affiliate-affärsmodell:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GDPR Integritetspolicy</h4>
                    <p className="text-sm text-muted-foreground">Fullt kompatibel med europeisk lagstiftning, inklusive cookie-användning och dataskydd</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Affiliate-upplysning</h4>
                    <p className="text-sm text-muted-foreground">Transparent meddelande om att du tjänar provisioner, i enlighet med FTC och EU-regler</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Villkor</h4>
                    <p className="text-sm text-foreground/80">Skyddar dig från ansvarskrav och reglerar förhållandet med besökare</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Juridisk Ansvarsfriskrivning</h4>
                    <p className="text-sm text-foreground/80">Begränsar ditt ansvar för de rekommendationer du gör</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Cookiepolicy</h4>
                    <p className="text-sm text-foreground/80">GDPR-kompatibel, förklaring av spårnings- och analyticscookies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Implementeringsguide</h4>
                    <p className="text-sm text-foreground/80">Steg-för-steg-instruktioner för att placera allt korrekt på din webbplats</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Klart på Minuter</h3>
                <p className="text-sm text-foreground/80">
                  Ladda ner, fyll i dina företagsuppgifter och placera dokumenten på din webbplats. Ingen advokat behövs, ingen väntan i veckor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">För Alla Dina Webbplatser</h3>
                <p className="text-sm text-muted-foreground">
                  Ett köp, obegränsad användning. Använd dessa dokument för alla dina nuvarande och framtida affiliate-webbplatser!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Internationell Användning</h3>
                <p className="text-sm text-muted-foreground">
                  Mallarna finns tillgängliga för nedladdning på flera språk för internationell användning, så du kan använda dem på alla dina webbplatser världen över.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Fullt kompatibel med GDPR och internationell lagstiftning. Möjlighet att ladda ner på olika språk för internationell användning. Komplett skydd för din verksamhet.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                För endast <strong className="text-primary-foreground">79 € engångsavgift</strong> ordnar du alla juridiska skyldigheter 
                för alla dina affiliate-webbplatser. Inga månadsavgifter, inget krångel med advokater, ingen risk för böter. 
                Bara alla dokument du behöver, redo att använda.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Beställ Nu för 79 €
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Tänk på detta: en timme med en advokat kostar redan mer än 200 €
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSV;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionNO = () => {
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
              Profesjonelle Juridiske Dokumenter for Affiliate-bedrifter
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alle Juridisk Nødvendige Dokumenter Ditt Affiliate-nettsted Trenger
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Som affiliate-markedsfører tjener du provisjoner ved å anbefale produkter. Men visste du at du er 
              <strong> juridisk forpliktet</strong> til å ha visse juridiske dokumenter på nettstedet ditt? 
              Uten disse dokumentene risikerer du høye bøter og juridiske problemer.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Om Meg</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Juridisk spesialist" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Juridisk spesialist som spesialiserer seg på tydelige, presise og profesjonelle juridiske dokumenter
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hei, jeg er Nicole Henderson, en juridisk skribent som spesialiserer meg på tydelige, nøyaktige og profesjonelle juridiske dokumenter. Jeg utarbeider kontrakter, retningslinjer og avtaler for bedrifter, organisasjoner og enkeltpersoner som beskytter dine interesser og sikrer samsvar, noe som gjør juridisk papirarbeid enkelt og stressfritt.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Profesjonelle Juridiske Dokumenter for Affiliate-bedrifter
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    For å svare på de mange spørsmålene om juridiske krav for affiliates, har jeg utviklet høykvalitets juridiske dokumenter spesielt for affiliate-nettsteder. Disse dokumentene er utformet for både nasjonal og internasjonal bruk og gir essensiell beskyttelse til en brøkdel av den vanlige kostnaden. Få profesjonell juridisk dekning til en overkommelig pris—sikre din virksomhet i dag!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Hva Du Får: Den Komplette Juridiske Pakken
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Vår komplette pakke inneholder <strong>alle juridiske dokumenter spesielt skrevet for affiliate-nettsteder</strong>. 
                Ikke generiske maler, men profesjonelle tekster som passer perfekt for din affiliate-forretningsmodell:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GDPR Personvernregler</h4>
                    <p className="text-sm text-muted-foreground">Fullt i samsvar med europeisk lovgivning, inkludert bruk av informasjonskapsler og databeskyttelse</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Affiliate-avsløring</h4>
                    <p className="text-sm text-muted-foreground">Transparent varsel om at du tjener provisjoner, i samsvar med FTC og EU-regler</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Vilkår og Betingelser</h4>
                    <p className="text-sm text-foreground/80">Beskytter deg mot ansvarskrav og regulerer forholdet med besøkende</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Juridisk Ansvarsfraskrivelse</h4>
                    <p className="text-sm text-foreground/80">Begrenser ditt ansvar for anbefalingene du gir</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Retningslinjer for Informasjonskapsler</h4>
                    <p className="text-sm text-foreground/80">GDPR-kompatibel, forklaring av sporings- og analyseinformasjonskapsler</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Implementeringsguide</h4>
                    <p className="text-sm text-foreground/80">Trinn-for-trinn-instruksjoner for å plassere alt riktig på nettstedet ditt</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Klar på Minutter</h3>
                <p className="text-sm text-foreground/80">
                  Last ned, fyll inn bedriftsopplysningene dine og plasser dokumentene på nettstedet ditt. Ingen advokat nødvendig, ingen ukers ventetid.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">For Alle Dine Nettsteder</h3>
                <p className="text-sm text-muted-foreground">
                  Ett kjøp, ubegrenset bruk. Bruk disse dokumentene for alle dine nåværende og fremtidige affiliate-nettsteder!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Internasjonal Bruk</h3>
                <p className="text-sm text-muted-foreground">
                  Malene er tilgjengelige for nedlasting på flere språk for internasjonal bruk, slik at du kan bruke dem på alle nettsteder verden over.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Fullt i samsvar med GDPR og internasjonal lovgivning. Mulighet for nedlasting på ulike språk for internasjonal bruk. Komplett beskyttelse for din virksomhet.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                For kun <strong className="text-primary-foreground">€79 engangsavgift</strong> ordner du alle juridiske forpliktelser 
                for alle dine affiliate-nettsteder. Ingen månedlige avgifter, ikke noe styr med advokater, ingen risiko for bøter. 
                Bare alle dokumentene du trenger, klare til bruk.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Bestill Nå for €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Tenk på dette: en time hos en advokat koster allerede mer enn €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionNO;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionDA = () => {
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
              Professionelle Juridiske Dokumenter til Affiliate-virksomheder
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alle Juridisk Nødvendige Dokumenter Din Affiliate-hjemmeside Har Brug For
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Som affiliate-markedsfører tjener du provisioner ved at anbefale produkter. Men vidste du, at du er 
              <strong> juridisk forpligtet</strong> til at have visse juridiske dokumenter på din hjemmeside? 
              Uden disse dokumenter risikerer du høje bøder og juridiske problemer.
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
                  Juridisk specialist specialiseret i klare, præcise og professionelle juridiske dokumenter
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hej, jeg er Nicole Henderson, en juridisk skribent, der specialiserer mig i klare, nøjagtige og professionelle juridiske dokumenter. Jeg udarbejder kontrakter, politikker og aftaler for virksomheder, organisationer og enkeltpersoner, der beskytter dine interesser og sikrer overholdelse, hvilket gør juridisk papirarbejde enkelt og stressfrit.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Professionelle Juridiske Dokumenter til Affiliate-virksomheder
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    For at besvare de mange spørgsmål om juridiske krav for affiliates har jeg udviklet højkvalitets juridiske dokumenter specifikt til affiliate-hjemmesider. Disse dokumenter er designet til både national og international brug og giver essentiel beskyttelse til en brøkdel af den normale pris. Få professionel juridisk dækning til en overkommelig pris—sikr din virksomhed i dag!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Hvad Du Får: Den Komplette Juridiske Pakke
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Vores komplette pakke indeholder <strong>alle juridiske dokumenter specifikt skrevet til affiliate-hjemmesider</strong>. 
                Ikke generiske skabeloner, men professionelle tekster, der passer perfekt til din affiliate-forretningsmodel:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">GDPR Privatlivspolitik</h4>
                    <p className="text-sm text-muted-foreground">Fuldt i overensstemmelse med europæisk lovgivning, inklusive cookiebrug og databeskyttelse</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Affiliate-oplysning</h4>
                    <p className="text-sm text-muted-foreground">Transparent meddelelse om, at du tjener provisioner, i overensstemmelse med FTC og EU-regler</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Vilkår og Betingelser</h4>
                    <p className="text-sm text-foreground/80">Beskytter dig mod ansvarskrav og regulerer forholdet med besøgende</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Juridisk Ansvarsfraskrivelse</h4>
                    <p className="text-sm text-foreground/80">Begrænser dit ansvar for de anbefalinger, du giver</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Cookiepolitik</h4>
                    <p className="text-sm text-foreground/80">GDPR-kompatibel, forklaring af sporings- og analysecookies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Implementeringsguide</h4>
                    <p className="text-sm text-foreground/80">Trin-for-trin-instruktioner til at placere alt korrekt på din hjemmeside</p>
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
                  Download, udfyld dine virksomhedsoplysninger og placer dokumenterne på din hjemmeside. Ingen advokat nødvendig, ingen ugers ventetid.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Til Alle Dine Hjemmesider</h3>
                <p className="text-sm text-muted-foreground">
                  Ét køb, ubegrænset brug. Brug disse dokumenter til alle dine nuværende og fremtidige affiliate-hjemmesider!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">International Brug</h3>
                <p className="text-sm text-muted-foreground">
                  Skabelonerne er tilgængelige til download på flere sprog til international brug, så du kan bruge dem på alle dine hjemmesider verden over.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Fuldt i overensstemmelse med GDPR og international lovgivning. Mulighed for download på forskellige sprog til international brug. Komplet beskyttelse for din virksomhed.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                For kun <strong className="text-primary-foreground">€79 engangsbeløb</strong> ordner du alle juridiske forpligtelser 
                for alle dine affiliate-hjemmesider. Ingen månedlige gebyrer, intet besvær med advokater, ingen risiko for bøder. 
                Bare alle dokumenter, du har brug for, klar til brug.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Bestil Nu for €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Tænk på dette: en time hos en advokat koster allerede mere end €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionDA;

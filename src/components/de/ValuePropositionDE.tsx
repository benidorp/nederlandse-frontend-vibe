import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionDE = () => {
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
              Professionelle Rechtsdokumente für Affiliate-Unternehmen
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Alle gesetzlich vorgeschriebenen Dokumente, die Ihre Affiliate-Website benötigt
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Als Affiliate-Marketer verdienen Sie Provisionen durch Produktempfehlungen. Aber wussten Sie, dass Sie 
              <strong> gesetzlich verpflichtet</strong> sind, bestimmte Rechtsdokumente auf Ihrer Website zu haben? 
              Ohne diese Dokumente riskieren Sie hohe Geldstrafen und rechtliche Probleme.
            </p>
            
            <div id="uber-mich" className="mt-10 p-8 bg-secondary/30 rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Über Mich</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Rechtsspezialistin" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Rechtsspezialistin für klare, präzise und professionelle Rechtsdokumente
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Hallo, ich bin Nicole Henderson, eine Rechtsautorin, die sich auf klare, präzise und professionelle Rechtsdokumente spezialisiert hat. Ich erstelle Verträge, Richtlinien und Vereinbarungen für Unternehmen, Organisationen und Privatpersonen, die Ihre Interessen schützen und die Einhaltung gewährleisten, wodurch der rechtliche Papierkram einfach und stressfrei wird.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Professionelle Rechtsdokumente für Affiliate-Unternehmen
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Um die vielen Fragen zu rechtlichen Anforderungen für Affiliates zu beantworten, habe ich hochwertige Rechtsdokumente speziell für Affiliate-Websites entwickelt. Diese Dokumente sind sowohl für nationale als auch internationale Nutzung konzipiert und bieten wesentlichen Schutz zu einem Bruchteil der üblichen Kosten. Erhalten Sie professionelle rechtliche Absicherung zu einem erschwinglichen Preis – sichern Sie Ihr Unternehmen noch heute!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Was Sie Bekommen: Das Vollständige Rechtspaket
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Unser komplettes Paket enthält <strong>alle Rechtsdokumente, die speziell für Affiliate-Websites geschrieben wurden</strong>. 
                Keine generischen Vorlagen, sondern professionelle Texte, die perfekt zu Ihrem Affiliate-Geschäftsmodell passen:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">DSGVO-Datenschutzerklärung</h4>
                    <p className="text-sm text-muted-foreground">Vollständig konform mit europäischer Gesetzgebung, einschließlich Cookie-Nutzung und Datenschutz</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Affiliate-Offenlegung</h4>
                    <p className="text-sm text-muted-foreground">Transparente Offenlegung, dass Sie Provisionen verdienen, konform mit FTC und EU-Vorschriften</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Allgemeine Geschäftsbedingungen</h4>
                    <p className="text-sm text-foreground/80">Schützt Sie vor Haftungsansprüchen und regelt die Beziehung zu Besuchern</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Haftungsausschluss</h4>
                    <p className="text-sm text-foreground/80">Begrenzt Ihre Haftung für die Empfehlungen, die Sie aussprechen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Cookie-Richtlinie</h4>
                    <p className="text-sm text-foreground/80">DSGVO-konform, Erklärung über Tracking- und Analytics-Cookies</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Implementierungsleitfaden</h4>
                    <p className="text-sm text-foreground/80">Schritt-für-Schritt-Anleitung zur korrekten Platzierung auf Ihrer Website</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Bereit in Minuten</h3>
                <p className="text-sm text-foreground/80">
                  Herunterladen, Ihre Unternehmensdaten eintragen und die Dokumente auf Ihrer Website platzieren. Kein Anwalt nötig, kein wochenlanges Warten.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Für Alle Ihre Websites</h3>
                <p className="text-sm text-muted-foreground">
                  Einmalige Zahlung, unbegrenzte Nutzung. Verwenden Sie diese Dokumente für alle Ihre aktuellen und zukünftigen Affiliate-Websites!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">International Einsetzbar</h3>
                <p className="text-sm text-muted-foreground">
                  Die Vorlagen sind in mehreren Sprachen zum Download verfügbar für internationale Nutzung, sodass Sie sie auf all Ihren Websites weltweit einsetzen können.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Vollständig DSGVO-konform und international gesetzeskonform. Wahl zum Download in verschiedenen Sprachen für internationale Nutzung. Vollständiger Schutz für Ihr Unternehmen.</h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Für nur <strong className="text-primary-foreground">€79 einmalig</strong> regeln Sie alle rechtlichen Verpflichtungen 
                für all Ihre Affiliate-Websites. Keine monatlichen Kosten, kein Aufwand mit Anwälten, kein Risiko von Geldstrafen. 
                Einfach alle Dokumente, die Sie brauchen, sofort einsatzbereit.
              </p>
              <Button size="lg" onClick={() => scrollToSection("preise")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Jetzt für €79 Bestellen
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Bedenken Sie: Eine Stunde bei einem Anwalt kostet bereits mehr als €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionDE;

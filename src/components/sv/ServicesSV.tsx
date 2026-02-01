import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Integritetspolicy",
    description: "Komplett integritetspolicy i enlighet med GDPR-lagstiftning",
    details: [
      "Användarrättigheter enligt GDPR",
      "Vilka uppgifter som samlas in",
      "Hur och varför dessa uppgifter används",
      "Delning av uppgifter med tredje part"
    ]
  },
  {
    icon: AlertCircle,
    title: "Ansvarsfriskrivning",
    description: "Juridiskt skydd mot ansvarskrav",
    details: [
      "Ingen garanti för resultat",
      "Inget ansvar för information",
      "Meddelande om affiliate-länkar och provisioner"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate-upplysning",
    description: "Transparent upplysning i enlighet med FTC-riktlinjer",
    details: [
      "Transparens om annonsörer",
      "Tydlig provisionsupplysning",
      "Efterlevnad av EU- och USA-regler"
    ]
  },
  {
    icon: ScrollText,
    title: "Villkor",
    description: "Reglerar förhållandet mellan din webbplats och användare",
    details: [
      "Ansvarsbegränsning",
      "Användningsrestriktioner",
      "Immateriella rättigheter"
    ]
  },
  {
    icon: Cookie,
    title: "Cookiepolicy",
    description: "Full cookie-efterlevnad och samtycke",
    details: [
      "Förklaring av cookie-användning",
      "GDPR-kompatibelt samtycke",
      "Hantering av analytiska cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementeringsguide",
    description: "Steg-för-steg-instruktioner för implementering",
    details: [
      "Enkla installationsinstruktioner",
      "Korrekt placering av dokument",
      "Anpassningstips för din webbplats"
    ]
  }
];

const ServicesSV = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Våra Tjänster</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nödvändiga Juridiska Dokument
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            För en affiliate-webbplats är följande juridiska dokument nödvändiga. 
            Vårt paket innehåller allt du behöver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Perfekt för Alla Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Med tusentals affiliate-webbplatser är våra anpassningsbara dokument lämpliga för varje affiliate-verksamhet. 
                Fokusera på att tjäna provisioner—vi har gjort juridisk efterlevnad enkel!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">För ALLA Dina Webbplatser</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                De nödvändiga juridiska dokumenten för alla dina affiliate-sajter. Ja, du kan använda dem för 
                ALLA webbplatser utan att behöva köpa separata licenser!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimera Dina Risker</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Även om garantier inte finns och inget dokument kan garantera allt, är dessa juridiska dokument utformade för att minska dina risker och ge dig maximalt skydd. De ger dig säkerheten av tydliga och pålitliga villkor."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSV;

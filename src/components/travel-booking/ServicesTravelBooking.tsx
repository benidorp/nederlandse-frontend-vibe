import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privacybeleid",
    description: "Compleet privacybeleid conform AVG/GDPR voor reisbranche",
    details: [
      "Bescherming van boekings- en reizigersgegevens",
      "Welke gegevens worden verzameld bij boekingen",
      "Hoe en waarom deze gegevens worden gebruikt",
      "Gegevensdeling met hotels en partners"
    ]
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Juridische bescherming tegen aansprakelijkheidsclaims",
    details: [
      "Geen garantie voor beschikbaarheid",
      "Prijswijzigingen voorbehoud",
      "Aansprakelijkheid voor diensten derden",
      "Force majeure en annuleringen"
    ]
  },
  {
    icon: FileText,
    title: "Annuleringsvoorwaarden",
    description: "Duidelijke regels voor annulering en wijziging",
    details: [
      "Annuleringstermijnen en kosten",
      "Wijzigingsvoorwaarden",
      "Restitutiebeleid",
      "No-show regelingen"
    ]
  },
  {
    icon: ScrollText,
    title: "Algemene Voorwaarden",
    description: "Regelt de relatie tussen uw platform en klanten",
    details: [
      "Boekingsvoorwaarden",
      "Betalingsverplichtingen",
      "Gebruiksrestricties platform",
      "Geschillenregeling"
    ]
  },
  {
    icon: Cookie,
    title: "Cookiebeleid",
    description: "Volledige cookie-naleving en toestemming",
    details: [
      "Uitleg over cookiegebruik",
      "AVG-conforme toestemming",
      "Boekings- en tracking cookies",
      "Derde partij cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementatiegids",
    description: "Stap-voor-stap instructies voor implementatie",
    details: [
      "Eenvoudige installatie-instructies",
      "Juiste plaatsing van documenten",
      "Aanpassingstips voor uw platform",
      "Checklists en best practices"
    ]
  }
];

const ServicesTravelBooking = () => {
  return (
    <section id="diensten" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Onze Diensten</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essentiële Juridische Documenten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voor een reisboekings- of hotelwebsite zijn de volgende juridische documenten essentieel. 
            Ons pakket bevat alles wat u nodig heeft.
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
              <CardTitle className="text-lg text-primary-foreground">Perfect voor Reisplatforms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Speciaal ontworpen voor reisboekings- en hotelwebsites. Alle documenten zijn afgestemd op de specifieke behoeften en regelgeving van de reisbranche.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Voor AL Uw Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                De essentiële juridische documenten voor al uw reisplatforms. Ja, u kunt ze gebruiken voor 
                ALLE websites zonder dat u aparte licenties hoeft aan te schaffen!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimaliseer Uw Risico's</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Hoewel garanties niet bestaan en geen enkel document alles kan garanderen, zijn deze juridische documenten ontworpen om je risico's te verkleinen en je maximale bescherming te bieden.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesTravelBooking;

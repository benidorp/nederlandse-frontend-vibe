import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privacybeleid",
    description: "Compleet privacybeleid conform AVG/GDPR wetgeving",
    details: [
      "Rechten van gebruikers onder de AVG",
      "Welke gegevens worden verzameld",
      "Hoe en waarom deze gegevens worden gebruikt",
      "Gegevensdeling met derde partijen"
    ]
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Juridische bescherming tegen aansprakelijkheidsclaims",
    details: [
      "Geen garantie voor resultaten",
      "Geen aansprakelijkheid voor informatie",
      "Melding van affiliate links en commissies"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate Disclosure",
    description: "Transparante melding conform FTC-richtlijnen",
    details: [
      "Transparantie over adverteerders",
      "Duidelijke commissiemelding",
      "Naleving van EU en VS regelgeving"
    ]
  },
  {
    icon: ScrollText,
    title: "Algemene Voorwaarden",
    description: "Regelt de relatie tussen uw website en gebruikers",
    details: [
      "Beperking van aansprakelijkheid",
      "Gebruiksrestricties",
      "Intellectuele eigendomsrechten"
    ]
  },
  {
    icon: Cookie,
    title: "Cookiebeleid",
    description: "Volledige cookie-naleving en toestemming",
    details: [
      "Uitleg over cookiegebruik",
      "AVG-conforme toestemming",
      "Beheer van analytische cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementatiegids",
    description: "Stap-voor-stap instructies voor implementatie",
    details: [
      "Eenvoudige installatie-instructies",
      "Juiste plaatsing van documenten",
      "Aanpassingstips voor uw website"
    ]
  }
];

const Services = () => {
  return (
    <section id="diensten" className="py-20 bg-gradient-to-b from-blue-50/40 to-blue-50/10">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Onze Diensten</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essentiële Juridische Documenten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voor een affiliate website zijn de volgende juridische documenten essentieel. 
            Ons pakket bevat alles wat u nodig heeft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50/50 to-blue-100/30 border-blue-200/40">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-100/60 to-blue-200/50 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
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
          <Card className="border-blue-200/50 bg-gradient-to-br from-blue-100/50 to-blue-50/30">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Perfect voor Alle Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Met duizenden affiliate websites zijn onze aanpasbare documenten geschikt voor elk affiliate bedrijf. 
                Focus op het verdienen van commissies—wij hebben juridische naleving eenvoudig gemaakt!
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200/50 bg-gradient-to-br from-blue-50/30 to-background">
            <CardHeader>
              <CardTitle className="text-lg">Voor AL Uw Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                De essentiële juridische documenten voor al uw affiliate site(s). Ja, u kunt ze gebruiken voor 
                ALLE websites zonder dat u aparte licenties hoeft aan te schaffen!
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200/50 bg-gradient-to-br from-blue-50/30 to-background">
            <CardHeader>
              <CardTitle className="text-lg">Minimaliseer Uw Risico's</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Hoewel we geen garanties kunnen geven, zijn deze juridische documenten zorgvuldig opgesteld 
                om uw risico's zoveel mogelijk te minimaliseren en u maximale bescherming te bieden.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;

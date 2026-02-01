import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Personvernregler",
    description: "Komplette personvernregler i samsvar med GDPR-lovgivning",
    details: [
      "Brukerrettigheter under GDPR",
      "Hvilke data som samles inn",
      "Hvordan og hvorfor disse dataene brukes",
      "Deling av data med tredjeparter"
    ]
  },
  {
    icon: AlertCircle,
    title: "Ansvarsfraskrivelse",
    description: "Juridisk beskyttelse mot ansvarskrav",
    details: [
      "Ingen garanti for resultater",
      "Ikke ansvarlig for informasjon",
      "Varsel om affiliate-lenker og provisjoner"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate-avsløring",
    description: "Transparent avsløring i samsvar med FTC-retningslinjer",
    details: [
      "Åpenhet om annonsører",
      "Tydelig provisjonsavsløring",
      "Samsvar med EU- og USA-regler"
    ]
  },
  {
    icon: ScrollText,
    title: "Vilkår og Betingelser",
    description: "Regulerer forholdet mellom nettstedet ditt og brukere",
    details: [
      "Ansvarsbegrensning",
      "Bruksbegrensninger",
      "Immaterielle rettigheter"
    ]
  },
  {
    icon: Cookie,
    title: "Retningslinjer for Informasjonskapsler",
    description: "Full samsvar og samtykke for informasjonskapsler",
    details: [
      "Forklaring av bruk av informasjonskapsler",
      "GDPR-kompatibelt samtykke",
      "Håndtering av analytiske informasjonskapsler"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementeringsguide",
    description: "Trinn-for-trinn-instruksjoner for implementering",
    details: [
      "Enkle installasjonsinstruksjoner",
      "Riktig plassering av dokumenter",
      "Tilpasningstips for nettstedet ditt"
    ]
  }
];

const ServicesNO = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Våre Tjenester</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nødvendige Juridiske Dokumenter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For et affiliate-nettsted er følgende juridiske dokumenter essensielle. 
            Vår pakke inneholder alt du trenger.
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
              <CardTitle className="text-lg text-primary-foreground">Perfekt for Alle Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Med tusenvis av affiliate-nettsteder er våre tilpassbare dokumenter egnet for enhver affiliate-virksomhet. 
                Fokuser på å tjene provisjoner—vi har gjort juridisk samsvar enkelt!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">For ALLE Dine Nettsteder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                De essensielle juridiske dokumentene for alle dine affiliate-sider. Ja, du kan bruke dem for 
                ALLE nettsteder uten å måtte kjøpe separate lisenser!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimer Dine Risikoer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Selv om garantier ikke finnes og ingen dokumenter kan garantere alt, er disse juridiske dokumentene designet for å redusere risikoen din og gi deg maksimal beskyttelse. De gir deg sikkerheten med klare og pålitelige vilkår."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesNO;

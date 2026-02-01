import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Privatlivspolitik",
    description: "Komplet privatlivspolitik i overensstemmelse med GDPR-lovgivning",
    details: [
      "Brugerrettigheder under GDPR",
      "Hvilke data der indsamles",
      "Hvordan og hvorfor disse data bruges",
      "Deling af data med tredjeparter"
    ]
  },
  {
    icon: AlertCircle,
    title: "Ansvarsfraskrivelse",
    description: "Juridisk beskyttelse mod ansvarskrav",
    details: [
      "Ingen garanti for resultater",
      "Ikke ansvarlig for information",
      "Meddelelse om affiliate-links og provisioner"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate-oplysning",
    description: "Transparent oplysning i overensstemmelse med FTC-retningslinjer",
    details: [
      "Åbenhed om annoncører",
      "Tydelig provisionsoplysning",
      "Overholdelse af EU- og USA-regler"
    ]
  },
  {
    icon: ScrollText,
    title: "Vilkår og Betingelser",
    description: "Regulerer forholdet mellem din hjemmeside og brugere",
    details: [
      "Ansvarsbegrænsning",
      "Brugsrestriktioner",
      "Immaterielle rettigheder"
    ]
  },
  {
    icon: Cookie,
    title: "Cookiepolitik",
    description: "Fuld cookie-overholdelse og samtykke",
    details: [
      "Forklaring af cookiebrug",
      "GDPR-kompatibelt samtykke",
      "Håndtering af analytiske cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementeringsguide",
    description: "Trin-for-trin-instruktioner til implementering",
    details: [
      "Enkle installationsinstruktioner",
      "Korrekt placering af dokumenter",
      "Tilpasningstips til din hjemmeside"
    ]
  }
];

const ServicesDA = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Vores Tjenester</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nødvendige Juridiske Dokumenter
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For en affiliate-hjemmeside er følgende juridiske dokumenter essentielle. 
            Vores pakke indeholder alt, du har brug for.
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
              <CardTitle className="text-lg text-primary-foreground">Perfekt til Alle Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Med tusindvis af affiliate-hjemmesider er vores tilpasselige dokumenter velegnede til enhver affiliate-virksomhed. 
                Fokuser på at tjene provisioner—vi har gjort juridisk overholdelse enkel!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Til ALLE Dine Hjemmesider</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                De essentielle juridiske dokumenter til alle dine affiliate-sider. Ja, du kan bruge dem til 
                ALLE hjemmesider uden at skulle købe separate licenser!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimer Dine Risici</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Selv om garantier ikke findes, og ingen dokumenter kan garantere alt, er disse juridiske dokumenter designet til at reducere dine risici og give dig maksimal beskyttelse. De giver dig sikkerheden med klare og pålidelige vilkår."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesDA;

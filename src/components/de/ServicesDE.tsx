import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Datenschutzerklärung",
    description: "Vollständige Datenschutzerklärung gemäß DSGVO-Gesetzgebung",
    details: [
      "Rechte der Nutzer gemäß DSGVO",
      "Welche Daten werden gesammelt",
      "Wie und warum diese Daten verwendet werden",
      "Datenweitergabe an Dritte"
    ]
  },
  {
    icon: AlertCircle,
    title: "Haftungsausschluss",
    description: "Rechtlicher Schutz vor Haftungsansprüchen",
    details: [
      "Keine Garantie für Ergebnisse",
      "Keine Haftung für Informationen",
      "Offenlegung von Affiliate-Links und Provisionen"
    ]
  },
  {
    icon: FileText,
    title: "Affiliate-Offenlegung",
    description: "Transparente Offenlegung gemäß FTC-Richtlinien",
    details: [
      "Transparenz über Werbepartner",
      "Klare Provisionsoffenlegung",
      "Einhaltung von EU- und US-Vorschriften"
    ]
  },
  {
    icon: ScrollText,
    title: "Allgemeine Geschäftsbedingungen",
    description: "Regelt die Beziehung zwischen Ihrer Website und Nutzern",
    details: [
      "Haftungsbeschränkung",
      "Nutzungsbeschränkungen",
      "Geistige Eigentumsrechte"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie-Richtlinie",
    description: "Vollständige Cookie-Compliance und Zustimmung",
    details: [
      "Erklärung zur Cookie-Nutzung",
      "DSGVO-konforme Zustimmung",
      "Verwaltung von Analytics-Cookies"
    ]
  },
  {
    icon: BookOpen,
    title: "Implementierungsleitfaden",
    description: "Schritt-für-Schritt-Anleitung zur Implementierung",
    details: [
      "Einfache Installationsanweisungen",
      "Korrekte Platzierung der Dokumente",
      "Anpassungstipps für Ihre Website"
    ]
  }
];

const ServicesDE = () => {
  return (
    <section id="dienstleistungen" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Unsere Dienstleistungen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wesentliche Rechtsdokumente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Für eine Affiliate-Website sind die folgenden Rechtsdokumente unerlässlich. 
            Unser Paket enthält alles, was Sie benötigen.
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
              <CardTitle className="text-lg text-primary-foreground">Perfekt für Alle Affiliates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Mit Tausenden von Affiliate-Websites sind unsere anpassbaren Dokumente für jedes Affiliate-Unternehmen geeignet. 
                Konzentrieren Sie sich auf das Verdienen von Provisionen – wir haben die rechtliche Compliance einfach gemacht!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Für ALLE Ihre Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Die wesentlichen Rechtsdokumente für alle Ihre Affiliate-Site(s). Ja, Sie können sie für 
                ALLE Websites verwenden, ohne separate Lizenzen erwerben zu müssen!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimieren Sie Ihre Risiken</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">„Obwohl keine Garantien existieren und kein Dokument alles garantieren kann, sind diese Rechtsdokumente darauf ausgelegt, Ihre Risiken zu minimieren und Ihnen maximalen Schutz zu bieten. Sie geben Ihnen die Sicherheit klarer und zuverlässiger Bedingungen."</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesDE;

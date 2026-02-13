import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen, Camera } from "lucide-react";

const services = [
  {
    icon: ScrollText,
    title: "Allgemeine Geschäftsbedingungen",
    description: "Umfassende AGB speziell für Fotografen entwickelt",
    details: ["Honorare und Zahlungsbedingungen", "Auftragsausführung und Lieferung", "Urheber- und Bildrechtsschutz", "Stornierungs- und Umbuchungsrichtlinien"]
  },
  {
    icon: FileText,
    title: "Auftragsvereinbarung (Offerte)",
    description: "Professionelle Vertragsvorlage mit E-Mail-Beispielen",
    details: ["Einsatzbereite Dokumentenvorlage", "Mustervereinbarung enthalten", "Kopierbare E-Mail-Vorlagen", "Anpassbar an Ihre Dienstleistungen"]
  },
  {
    icon: Shield,
    title: "Datenschutzerklärung",
    description: "DSGVO-konforme Datenschutzerklärung für Fotografen",
    details: ["Schutz von Kontaktformulardaten", "Umgang mit Kundeninformationen", "Fotografiespezifische Datenschutzbestimmungen", "Pflicht bei Website-Kontaktformularen"]
  },
  {
    icon: Cookie,
    title: "Cookie-Richtlinie",
    description: "Vollständige Cookie-Konformität gemäß DSGVO",
    details: ["Speziell für Fotografen entwickelt", "Vollständige DSGVO-Konformität", "Erklärung der Cookie-Nutzung", "Richtlinien zur Einwilligungsverwaltung"]
  },
  {
    icon: AlertCircle,
    title: "Haftungsausschluss",
    description: "Schutz Ihrer Fotos und Inhalte vor unbefugter Nutzung",
    details: ["Foto- und Inhaltsschutz", "Klare Eigentumserklärungen", "Warnungen bei Urheberrechtsverletzungen", "Nutzungseinschränkungen und Genehmigungen"]
  },
  {
    icon: Camera,
    title: "Verzichtserklärung",
    description: "Rechtlicher Schutz und klare Vereinbarungen mit Personen",
    details: ["Rechtliche Absicherung vor dem Shooting", "Klare Vereinbarungen mit Personen", "Model-Release-Bestimmungen", "Schutz der Bildrechte"]
  },
  {
    icon: BookOpen,
    title: "Urheberrechtsschutz (Auteursrecht)",
    description: "Internationale Urheberrechtsbedingungen für Ihre Fotografie",
    details: ["Weltweiter Urheberrechtsschutz", "Richtlinien zur Nutzungslizenzierung", "Anforderungen an die Namensnennung", "Durchsetzung bei Verstößen"]
  }
];

const ServicesPhotographyDE = () => {
  return (
    <section id="dienstleistungen" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Unsere Leistungen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wesentliche Rechtsdokumente für Fotografen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Für ein professionelles Fotografieunternehmen sind die folgenden Rechtsdokumente für Ihre Website unerlässlich. Unser Paket enthält alles, was Sie zum Schutz Ihrer Arbeit und Ihres Unternehmens benötigen.
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
              <CardTitle className="text-lg text-primary-foreground">Perfekt für alle Fotografen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Ob Porträt-, Hochzeits-, Werbe- oder Eventfotograf – unsere anpassbaren Dokumente sind für jedes Fotografieunternehmen geeignet. Konzentrieren Sie sich auf Ihre Kunst – wir machen die rechtliche Compliance einfach!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Für ALLE Ihre Fotografie-Websites</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Die wesentlichen Rechtsdokumente für alle Ihre Fotografie-Website(s). Ja, Sie können sie für ALLE Websites nutzen, ohne separate Lizenzen erwerben zu müssen!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Schützen Sie Ihre Arbeit & Ihr Unternehmen</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Garantien gibt es zwar nicht und kein Dokument kann alles garantieren, aber diese Rechtsdokumente sind darauf ausgelegt, Ihre Risiken zu minimieren und Ihnen maximalen Schutz für Ihr Fotografieunternehmen und Ihre kreativen Werke zu bieten.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesPhotographyDE;

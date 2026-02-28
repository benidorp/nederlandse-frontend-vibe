import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, Heart, Scale, CheckCircle } from "lucide-react";

const ServicesNonprofitDE = () => {
  const services = [
    {
      icon: FileText,
      title: "Spendenbedingungen",
      description: "Vollständiger rechtlicher Rahmen für die Annahme von Spenden, einschließlich einmaliger Zuwendungen, wiederkehrender Spenden und Großspenden. Umfasst Steuerabzugsfähigkeit, Rückerstattungsrichtlinien und Spenderrechte.",
      features: ["Einmalige & wiederkehrende Spenden", "Steuerabzugsinformationen", "Rückerstattungs- und Stornierungsbedingungen", "Großspendenvereinbarungen"]
    },
    {
      icon: Shield,
      title: "DSGVO-Datenschutzrichtlinie",
      description: "Umfassende Datenschutzrichtlinie speziell für gemeinnützige Organisationen, die Spenderdaten, Freiwilligeninformationen, Begünstigtendatenschutz und Fundraising-Kommunikation abdeckt.",
      features: ["Spenderdatenschutz", "Freiwilligeninformationen", "Begünstigtendatenschutz", "E-Mail-Marketing-Konformität"]
    },
    {
      icon: Users,
      title: "Freiwilligenvereinbarung",
      description: "Schützen Sie Ihre Organisation und Freiwillige mit klaren Vereinbarungen zu Verantwortlichkeiten, Haftung, Vertraulichkeit und Kündigungsverfahren.",
      features: ["Rollen und Verantwortlichkeiten", "Haftungsschutz", "Vertraulichkeitsklauseln", "Kündigungsverfahren"]
    },
    {
      icon: Heart,
      title: "Spendenoffenlegung",
      description: "Transparente Offenlegungserklärungen, die Spendern zeigen, wie ihre Beiträge verwendet werden, Verwaltungskosten und Anforderungen an die Wirkungsberichterstattung.",
      features: ["Transparenz der Mittelverwendung", "Verwaltungskostenoffenlegung", "Wirkungsberichterstattung", "Drittanbieter-Fundraising-Bedingungen"]
    },
    {
      icon: Scale,
      title: "Cookie-Richtlinie",
      description: "DSGVO-konforme Cookie-Richtlinie für Ihre gemeinnützige Website, die Analyse-, Spendenverfolgung- und Marketing-Cookies mit ordnungsgemäßen Einwilligungsmechanismen abdeckt.",
      features: ["Cookie-Kategorisierung", "Einwilligungsverwaltung", "Analyse-Tracking", "Drittanbieter-Cookies"]
    },
    {
      icon: CheckCircle,
      title: "Implementierungsleitfaden",
      description: "Schritt-für-Schritt-Anleitung zur Implementierung aller Rechtsdokumente auf Ihrer Website, einschließlich Platzierungsempfehlungen und Integration mit Spendenplattformen.",
      features: ["Platzierungsleitfaden", "Spendenplattform-Integration", "Aktualisierungsverfahren", "Compliance-Checkliste"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Alles, was Ihre gemeinnützige Website braucht</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ein komplettes Rechtspaket, speziell für Wohltätigkeitsorganisationen entwickelt,
              das Ihre Mission, Spender und Freiwillige schützt.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNonprofitDE;

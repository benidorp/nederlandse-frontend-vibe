import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-photography.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionPhotographyDE = () => {
  return (
    <section id="uber-mich" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Warum Rechtsdokumente für Fotografen unverzichtbar sind</h2>
            <p className="text-lg text-muted-foreground">Als professioneller Fotograf benötigen Sie einen angemessenen rechtlichen Schutz für Ihr Unternehmen, Ihre kreativen Werke und Ihre Kunden. Ob Sie Porträts, Hochzeiten, kommerzielle Arbeiten oder Veranstaltungen fotografieren – die richtigen Rechtsdokumente schützen Sie vor Haftung und Urheberrechtsproblemen.</p>
          </div>

          <Card className="mb-12 bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img src={nicoleProfile} alt="Nicole Henderson - Rechtsexpertin" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <CardTitle className="text-2xl text-foreground">Über Nicole Henderson</CardTitle>
                  <CardDescription>Rechtsexpertin für Kreativberufe</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Mit jahrelanger Erfahrung in der Unterstützung von Fotografen und Kreativprofis beim Schutz ihrer Unternehmen
                verstehe ich die einzigartigen rechtlichen Herausforderungen, denen Sie gegenüberstehen. Vom Urheberrechtsschutz bis zu Kundenverträgen
                habe ich umfassende Rechtsdokumente speziell für Fotografieunternehmen erstellt.
              </p>
              <p className="text-muted-foreground">
                Diese Dokumente sind so gestaltet, dass sie leicht anpassbar sind und gleichzeitig maximalen rechtlichen Schutz
                für Ihr Fotografieunternehmen, Ihre kreativen Werke und Ihre Kundenbeziehungen bieten.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Komplettes Rechtspaket für Fotografen</CardTitle>
              </div>
              <CardDescription className="text-base">
                Alles, was Sie für den rechtlichen Schutz Ihres Fotografieunternehmens benötigen
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "AGB – speziell für Fotografen entwickelt",
                  "Auftragsvereinbarung (Offerte) – mit Vorlagen und E-Mail-Beispielen",
                  "Datenschutzerklärung – DSGVO-konform für Fotografen",
                  "Cookie-Richtlinie – vollständige DSGVO-Konformität",
                  "Haftungsausschluss – Schutz Ihrer Fotos und Inhalte",
                  "Verzichtserklärung – rechtliche Absicherung für Vereinbarungen mit Personen",
                  "Urheberrechtsschutz (Auteursrecht) – internationale Abdeckung"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Warum dieses Paket wählen?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">In wenigen Minuten einsatzbereit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Für alle Ihre Fotografie-Websites</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Internationale Abdeckung</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Einfach anpassbar</span>
                  </div>
                </div>
              </div>

              <Card className="bg-card border-primary">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <span className="text-4xl font-bold text-primary">€79</span>
                      <span className="text-muted-foreground ml-2">einmalige Zahlung</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Kompletter Rechtsschutz für Ihr Fotografieunternehmen.
                      Für unbegrenzte Websites nutzbar. Keine wiederkehrenden Gebühren.
                    </p>
                    <Button size="lg" onClick={() => scrollToSection("preise")} className="w-full bg-primary hover:bg-primary/90">
                      Komplettpaket jetzt bestellen
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionPhotographyDE;

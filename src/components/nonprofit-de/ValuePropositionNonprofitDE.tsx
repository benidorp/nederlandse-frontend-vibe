import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Globe, Zap, FileText, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-nonprofit-clear.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionNonprofitDE = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Warum jede gemeinnützige Website rechtlichen Schutz braucht</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Eine gemeinnützige Organisation ohne ordnungsgemäße Rechtsdokumente zu betreiben, gefährdet Ihre Mission, Spender und Freiwillige.
              Schützen Sie alles, was Sie aufgebaut haben, mit umfassendem rechtlichen Schutz.
            </p>
          </div>

          <Card className="mb-12 overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-full min-h-[400px]">
                  <img src={nicoleProfile} alt="Nicole Henderson - Rechtsexpertin für gemeinnützige Organisationen" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80"></div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-lg">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">Über mich</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Nicole Henderson</h3>
                  <p className="text-lg font-semibold text-primary mb-4">Spezialisiert auf gemeinnütziges Recht & Wohltätigkeitsrecht</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Als Rechtsexpertin mit Schwerpunkt auf gemeinnützigen Organisationen und Wohltätigkeitsverbänden verstehe ich die einzigartigen
                    Herausforderungen, denen Sie gegenüberstehen. Vom Spenderschutz und der Einhaltung von Spendenvorschriften bis hin zu Freiwilligenvereinbarungen und
                    Förderanforderungen – ich habe ein komplettes Rechtspaket erstellt, das alle Ihre Bedürfnisse abdeckt und gleichzeitig
                    die Kosten niedrig hält, damit mehr Mittel für Ihre Mission verwendet werden können.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Dieses Paket wird von gemeinnützigen Organisationen in über 35 Ländern verwendet und bietet vollständigen
                    Rechtsschutz gemäß der aktuellen Gesetzgebung, einschließlich DSGVO-Konformität und Wohltätigkeitsvorschriften.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">400+ Organisationen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">35+ Länder</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">12+ Jahre Erfahrung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-12 border-2 border-primary/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/60 text-primary-foreground">
              <CardTitle className="text-3xl flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Komplettes Rechtspaket für gemeinnützige Organisationen
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Spendenbedingungen", description: "Vollständige Bedingungen für einmalige Spenden, wiederkehrende Spenden und Großspenden" },
                  { title: "DSGVO-Datenschutzrichtlinie", description: "Umfassende Datenschutzrichtlinie für Spenderdaten, Freiwilligeninformationen und Cookies" },
                  { title: "Freiwilligenvereinbarung", description: "Klare Vereinbarungen zum Schutz sowohl Ihrer Organisation als auch der Freiwilligen" },
                  { title: "Cookie-Richtlinie", description: "Vollständige Cookie-Einwilligungs- und Tracking-Richtlinie für Ihre Website" },
                  { title: "Spendenoffenlegung", description: "Transparente Offenlegung, wie Spenden verwendet und verwaltet werden" },
                  { title: "Implementierungsleitfaden", description: "Schritt-für-Schritt-Anleitung zur Implementierung aller Dokumente auf Ihrer Website" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">In Minuten einsatzbereit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sofort herunterladen und innerhalb von 30 Minuten auf Ihrer Website implementieren. Kein Warten, keine Anwälte nötig.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Einmalige Investition</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Eine Zahlung deckt unbegrenzte Spender, Freiwillige und Kampagnen ab. Mehr Mittel für Ihre Mission.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Internationale Nutzung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  DSGVO-konform und geeignet für globales Fundraising. Schützen Sie Ihre Organisation weltweit.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vollständiger Rechtsschutz für Ihre gemeinnützige Organisation
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Regeln Sie alle rechtlichen Verpflichtungen für Ihre Wohltätigkeitsorganisation. Keine monatlichen Gebühren, kein Ärger mit Anwälten,
                kein Risiko von Bußgeldern. Einfach alle Dokumente, die Sie brauchen, sofort einsatzbereit.
              </p>
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Jetzt bestellen
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                💡 Eine Stunde beim Anwalt kostet mehr – investieren Sie stattdessen in Ihre Mission
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionNonprofitDE;

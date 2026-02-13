import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-photography.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionPhotographyIT = () => {
  return (
    <section id="chi-siamo" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perché i documenti legali sono indispensabili per i fotografi</h2>
            <p className="text-lg text-muted-foreground">Come fotografo professionista, hai bisogno di una protezione legale adeguata per la tua attività, le tue opere creative e i tuoi clienti. Che tu fotografi ritratti, matrimoni, lavori commerciali o eventi – i documenti legali giusti ti proteggono dalla responsabilità e dai problemi di diritto d'autore.</p>
          </div>

          <Card className="mb-12 bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img src={nicoleProfile} alt="Nicole Henderson - Esperta legale" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <CardTitle className="text-2xl text-foreground">Chi è Nicole Henderson</CardTitle>
                  <CardDescription>Esperta legale per le professioni creative</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Con anni di esperienza nell'aiutare fotografi e professionisti creativi a proteggere le loro attività,
                comprendo le sfide legali uniche che affronti. Dalla protezione del diritto d'autore ai contratti con i clienti,
                ho creato documenti legali completi progettati specificamente per le attività di fotografia.
              </p>
              <p className="text-muted-foreground">
                Questi documenti sono progettati per essere facilmente personalizzabili offrendo al contempo la massima protezione legale
                per la tua attività fotografica, le tue opere creative e le tue relazioni con i clienti.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Pacchetto legale completo per fotografi</CardTitle>
              </div>
              <CardDescription className="text-base">
                Tutto ciò di cui hai bisogno per la protezione legale della tua attività fotografica
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "Termini e condizioni – progettati appositamente per fotografi",
                  "Contratto di incarico (Preventivo) – con modelli ed esempi di email",
                  "Informativa sulla privacy – conforme al GDPR per fotografi",
                  "Politica dei cookie – piena conformità al GDPR",
                  "Disclaimer – protezione delle tue foto e contenuti",
                  "Liberatoria – protezione legale per accordi con le persone",
                  "Protezione del diritto d'autore – copertura internazionale"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Perché scegliere questo pacchetto?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Pronto in pochi minuti</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Per tutti i tuoi siti di fotografia</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Copertura internazionale</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Facilmente personalizzabile</span>
                  </div>
                </div>
              </div>

              <Card className="bg-card border-primary">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <span className="text-4xl font-bold text-primary">€79</span>
                      <span className="text-muted-foreground ml-2">pagamento unico</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Protezione legale completa per la tua attività fotografica.
                      Utilizzo illimitato su tutti i tuoi siti web. Nessun costo ricorrente.
                    </p>
                    <Button size="lg" onClick={() => scrollToSection("prezzi")} className="w-full bg-primary hover:bg-primary/90">
                      Ordina il pacchetto completo
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

export default ValuePropositionPhotographyIT;

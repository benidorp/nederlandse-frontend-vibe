import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionIT = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Documenti Legali Professionali per Attività di Affiliazione
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tutti i Documenti Legalmente Richiesti per il Tuo Sito Web Affiliato
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Come affiliate marketer, guadagni commissioni consigliando prodotti. Ma sapevi che sei 
              <strong> legalmente obbligato</strong> ad avere determinati documenti legali sul tuo sito web? 
              Senza questi documenti, rischi multe elevate e problemi legali.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">Chi Sono</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Specialista legale" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Specialista legale specializzata in documenti legali chiari, precisi e professionali
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Ciao, sono Nicole Henderson, una redattrice legale specializzata in documenti legali chiari, accurati e professionali. Redigo contratti, politiche e accordi per aziende, organizzazioni e individui che proteggono i tuoi interessi e garantiscono la conformità, rendendo le pratiche legali semplici e senza stress.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Documenti Legali Professionali per Attività di Affiliazione
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Per rispondere alle numerose domande sui requisiti legali per gli affiliati, ho sviluppato documenti legali di alta qualità specificamente per i siti web affiliati. Questi documenti sono progettati sia per uso nazionale che internazionale e forniscono protezione essenziale a una frazione del costo abituale. Ottieni una copertura legale professionale a un prezzo accessibile—proteggi la tua attività oggi!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Cosa Ottieni: Il Pacchetto Legale Completo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Il nostro pacchetto completo contiene <strong>tutti i documenti legali specificamente scritti per siti web affiliati</strong>. 
                Non modelli generici, ma testi professionali perfettamente allineati al tuo modello di business di affiliazione:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Informativa sulla Privacy GDPR</h4>
                    <p className="text-sm text-muted-foreground">Pienamente conforme alla legislazione europea, incluso l'uso dei cookie e la protezione dei dati</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Divulgazione Affiliazione</h4>
                    <p className="text-sm text-muted-foreground">Notifica trasparente che guadagni commissioni, conforme alle normative FTC e UE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Termini e Condizioni</h4>
                    <p className="text-sm text-foreground/80">Ti protegge da richieste di responsabilità e regola il rapporto con i visitatori</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Disclaimer Legale</h4>
                    <p className="text-sm text-foreground/80">Limita la tua responsabilità per le raccomandazioni che fai</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Cookie Policy</h4>
                    <p className="text-sm text-foreground/80">Conforme al GDPR, spiegazione dei cookie di tracciamento e analisi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Guida all'Implementazione</h4>
                    <p className="text-sm text-foreground/80">Istruzioni passo-passo per posizionare tutto correttamente sul tuo sito web</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Pronto in Pochi Minuti</h3>
                <p className="text-sm text-foreground/80">
                  Scarica, inserisci i dati della tua attività e posiziona i documenti sul tuo sito web. Nessun avvocato necessario, nessuna attesa di settimane.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Per Tutti i Tuoi Siti Web</h3>
                <p className="text-sm text-muted-foreground">
                  Un acquisto, uso illimitato. Usa questi documenti per tutti i tuoi siti web affiliati attuali e futuri!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Uso Internazionale</h3>
                <p className="text-sm text-muted-foreground">
                  I modelli sono disponibili per il download in più lingue per uso internazionale, così puoi utilizzarli su tutti i tuoi siti web in tutto il mondo.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                Pienamente conforme al GDPR e alla legislazione internazionale. Opzione di download in diverse lingue per uso internazionale. Protezione completa per la tua attività.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Per soli <strong className="text-primary-foreground">€79 una tantum</strong> organizzi tutti gli obblighi legali 
                per tutti i tuoi siti web affiliati. Nessun canone mensile, nessuna seccatura con gli avvocati, nessun rischio di multe. 
                Solo tutti i documenti di cui hai bisogno, pronti all'uso.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Ordina Ora a €79
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Considera questo: un'ora con un avvocato costa già più di €200
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionIT;
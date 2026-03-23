import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen, Camera } from "lucide-react";

const services = [
  {
    icon: ScrollText,
    title: "Termini e Condizioni",
    description: "Termini e condizioni completi progettati appositamente per fotografi",
    details: ["Onorari e condizioni di pagamento", "Esecuzione e consegna degli incarichi", "Protezione del diritto d'autore e d'immagine", "Politiche di cancellazione e riprogrammazione"]
  },
  {
    icon: FileText,
    title: "Contratto di Incarico (Preventivo)",
    description: "Modello di contratto professionale con esempi di email",
    details: ["Modello di documento pronto all'uso", "Esempio di accordo incluso", "Modelli di email da copiare e incollare", "Personalizzabile secondo i tuoi servizi"]
  },
  {
    icon: Shield,
    title: "Informativa sulla Privacy",
    description: "Informativa sulla privacy conforme al GDPR per fotografi",
    details: ["Protezione dei dati dei moduli di contatto", "Gestione delle informazioni dei clienti", "Disposizioni specifiche per la fotografia", "Obbligatoria per i moduli di contatto"]
  },
  {
    icon: Cookie,
    title: "Politica dei Cookie",
    description: "Piena conformità ai cookie secondo il GDPR",
    details: ["Progettata appositamente per fotografi", "Piena conformità al GDPR", "Spiegazione dell'uso dei cookie", "Linee guida sulla gestione del consenso"]
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Protezione delle tue foto e contenuti contro l'uso non autorizzato",
    details: ["Protezione di foto e contenuti", "Dichiarazioni chiare di proprietà", "Avvertenze sulla violazione del diritto d'autore", "Restrizioni e autorizzazioni d'uso"]
  },
  {
    icon: Camera,
    title: "Liberatoria",
    description: "Protezione legale e accordi chiari con le persone",
    details: ["Protezione legale prima dello scatto", "Accordi chiari con le persone", "Disposizioni di rilascio del modello", "Protezione dei diritti d'immagine"]
  },
  {
    icon: BookOpen,
    title: "Protezione del Diritto d'Autore",
    description: "Condizioni internazionali sul diritto d'autore per la tua fotografia",
    details: ["Protezione mondiale del diritto d'autore", "Linee guida sulle licenze d'uso", "Requisiti di attribuzione", "Applicazione in caso di violazione"]
  }
];

const ServicesPhotographyIT = () => {
  return (
    <section id="servizi" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">I Nostri Servizi</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documenti Legali Essenziali per Fotografi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Per un'attività fotografica professionale, i seguenti documenti legali sono indispensabili per il tuo sito web. Il nostro pacchetto contiene tutto ciò di cui hai bisogno per proteggere il tuo lavoro e la tua attività.
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
              <CardTitle className="text-lg text-primary-foreground">Perfetto per tutti i fotografi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Che tu sia un fotografo di ritratti, matrimoni, commerciale o di eventi – i nostri documenti personalizzabili sono adatti a qualsiasi attività fotografica. Concentrati sulla tua arte – noi semplifichiamo la conformità legale!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Per TUTTI i tuoi siti di fotografia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                I documenti legali essenziali per tutti i tuoi sito/i di fotografia. Sì, puoi usarli per TUTTI i tuoi siti senza acquistare licenze separate!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Proteggi il tuo lavoro e la tua attività</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Le garanzie non esistono e nessun documento può garantire tutto, ma questi documenti legali sono progettati per minimizzare i tuoi rischi e offrirti la massima protezione per la tua attività fotografica e le tue opere creative.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesPhotographyIT;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Informativa sulla Privacy",
    description: "Informativa sulla privacy completa conforme alla legislazione GDPR",
    details: [
      "Diritti degli utenti ai sensi del GDPR",
      "Quali dati vengono raccolti",
      "Come e perché questi dati vengono utilizzati",
      "Condivisione dei dati con terze parti"
    ]
  },
  {
    icon: AlertCircle,
    title: "Disclaimer",
    description: "Protezione legale contro richieste di responsabilità",
    details: [
      "Nessuna garanzia per i risultati",
      "Nessuna responsabilità per le informazioni",
      "Notifica dei link di affiliazione e delle commissioni"
    ]
  },
  {
    icon: FileText,
    title: "Dichiarazione di Affiliazione",
    description: "Divulgazione trasparente conforme alle linee guida FTC",
    details: [
      "Trasparenza sugli inserzionisti",
      "Divulgazione chiara delle commissioni",
      "Conformità alle normative UE e USA"
    ]
  },
  {
    icon: ScrollText,
    title: "Termini e Condizioni",
    description: "Regola il rapporto tra il tuo sito web e gli utenti",
    details: [
      "Limitazione di responsabilità",
      "Restrizioni d'uso",
      "Diritti di proprietà intellettuale"
    ]
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "Completa conformità e consenso sui cookie",
    details: [
      "Spiegazione dell'uso dei cookie",
      "Consenso conforme GDPR",
      "Gestione dei cookie analitici"
    ]
  },
  {
    icon: BookOpen,
    title: "Guida all'Implementazione",
    description: "Istruzioni passo-passo per l'implementazione",
    details: [
      "Istruzioni di installazione semplici",
      "Posizionamento corretto dei documenti",
      "Suggerimenti per la personalizzazione del tuo sito web"
    ]
  }
];

const ServicesIT = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">I Nostri Servizi</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documenti Legali Essenziali
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Per un sito web di affiliazione, i seguenti documenti legali sono essenziali. 
            Il nostro pacchetto contiene tutto ciò di cui hai bisogno.
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
              <CardTitle className="text-lg text-primary-foreground">Perfetto per Tutti gli Affiliati</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Con migliaia di siti web di affiliazione, i nostri documenti personalizzabili sono adatti per ogni attività di affiliazione. 
                Concentrati sul guadagnare commissioni — abbiamo reso semplice la conformità legale!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Per TUTTI i Tuoi Siti Web</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                I documenti legali essenziali per tutti i tuoi siti di affiliazione. Sì, puoi usarli per 
                TUTTI i siti web senza dover acquistare licenze separate!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimizza i Tuoi Rischi</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Anche se le garanzie non esistono e nessun documento può garantire tutto, questi documenti legali sono progettati per ridurre i tuoi rischi e fornirti la massima protezione. Ti danno la certezza di termini chiari e affidabili."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesIT;
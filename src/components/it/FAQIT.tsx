import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SafeMarkdown from "@/components/ui/safe-markdown";

const faqItems = [
  {
    question: "Perché i documenti legali sono importanti per i siti affiliati",
    answer: `Come affiliate marketer, sei legalmente obbligato a essere trasparente sul tuo modello di business e su come gestisci i dati dei visitatori. Senza documenti legali adeguati, rischi:
    
• Multe pesanti da parte dei regolatori come le autorità per la protezione dei dati - fino a €20 milioni o il 4% del fatturato annuo
• Reclami dai consumatori per informazioni fuorvianti
• Rimozione dalle reti di affiliazione come Google AdSense
• Danni alla reputazione e perdita di fiducia dal tuo pubblico

Le principali legislazioni a cui devi conformarti sono il GDPR, la Direttiva ePrivacy e le normative sulla trasparenza del marketing di affiliazione come le linee guida FTC. Con i documenti giusti, ti proteggi e costruisci fiducia con i tuoi visitatori.`
  },
  {
    question: "Come integrare questi documenti sul tuo sito (footer, per post, vicino ai link)",
    answer: `Il posizionamento dei documenti legali è cruciale per la conformità e l'usabilità.

**Posizionamento nel footer (obbligatorio):**
Posiziona i link a tutti i tuoi documenti legali nel footer di ogni pagina:
• Informativa sulla Privacy
• Termini e Condizioni  
• Cookie Policy
• Disclaimer
• Divulgazione Affiliazione

**Per articolo/post:**
Per recensioni di prodotti e articoli con link affiliati:
• Breve divulgazione all'inizio dell'articolo (prime 150 parole)
• Marcatura evidente dei link affiliati, ad esempio: [PUBBLICITÀ] o [link affiliato]
• Link alla divulgazione completa in fondo all'articolo

**Vicino ai link affiliati:**
• Usa un'abbreviazione come * o [AFF] direttamente accanto al link
• Aggiungi un tooltip al passaggio del mouse con "link affiliato"
• Nelle box prodotto: piccolo disclaimer in fondo

**Best practice:**
• Usa colori contrastanti affinché le divulgazioni risaltino
• Rendi il testo comprensibile per un pubblico non legale
• Mobile-friendly - visibile senza scorrere
• Usa icone per un riconoscimento rapido

**Implementazione tecnica:**
La nostra guida all'implementazione contiene snippet di codice per WordPress, Shopify, Webflow e siti HTML, inclusi esempi di stile CSS.`
  },
  {
    question: "Domande Frequenti (FAQ)",
    answer: `**Questi modelli sono validi in tutta Europa?**
Sì, i nostri modelli sono conformi al GDPR che si applica in tutti i paesi UE. Alcuni paesi hanno regole aggiuntive - questo è menzionato nei modelli.

**Devo consultare un avvocato?**
I nostri modelli sono stati revisionati legalmente, ma ogni attività è unica. Per situazioni complesse raccomandiamo sempre di cercare consulenza legale.

**Posso usare questi modelli per più siti web?**
Sì! Con l'acquisto ottieni una licenza illimitata per tutti i tuoi siti web affiliati.

**E se vendo anche prodotti, non solo link affiliati?**
Allora hai bisogno di documenti aggiuntivi come Diritto di Recesso e Politica di Spedizione. Contattaci per un pacchetto personalizzato.

**Quanto spesso dovrei aggiornare i miei documenti?**
Almeno una volta all'anno, ma anche quando aggiungi nuovi strumenti o cambia la legislazione.

**Questi documenti mi proteggono da tutte le richieste legali?**
Nessun documento offre protezione al 100%, ma buoni documenti legali minimizzano significativamente i tuoi rischi e dimostrano che agisci con attenzione.

**Devo acquistare il banner dei cookie separatamente?**
Il nostro pacchetto contiene la cookie policy (testo), ma per il banner tecnico dei cookie raccomandiamo strumenti come Cookiebot o CookieYes.

**In quali lingue sono disponibili i modelli?**
I modelli possono essere scaricati in più lingue per uso internazionale, così puoi utilizzarli su tutti i tuoi siti web in tutto il mondo.`
  },
  {
    question: "Disclaimer legali e responsabilità",
    answer: `**Importante disclaimer:**

Questi modelli di documenti sono stati preparati e revisionati con cura, ma servono come punto di partenza per la tua conformità legale. Legal Affiliate Agreement non fornisce consulenza legale e non è responsabile per danni derivanti dall'uso di questi modelli.

**Limitazione di responsabilità:**
• I modelli sono generali e potrebbero non essere adatti a ogni situazione specifica
• La legislazione può cambiare dopo la pubblicazione dei modelli
• La corretta implementazione e adattamento è tua responsabilità
• In caso di dubbio, consulta sempre un avvocato specializzato

**Cosa non siamo:**
• Uno studio legale
• Responsabili per multe o reclami derivanti da uso improprio
• Responsabili per modifiche che apporti
• Un sostituto per la consulenza legale professionale in casi complessi

**Cosa offriamo:**
• Modelli preparati professionalmente come base solida
• Aggiornamenti regolari con importanti cambiamenti legislativi
• Istruzioni chiare per l'implementazione
• Supporto via email per domande sui modelli

**Termini di utilizzo:**
Utilizzando questi modelli, accetti i nostri termini e condizioni e il nostro disclaimer. Riconosci che la conformità legale rimane di tua responsabilità.

**Idoneità:**
Questi modelli sono sviluppati specificamente per siti web di marketing di affiliazione. Per altri modelli di business o paesi, potrebbero essere necessari documenti aggiuntivi o diversi.

**Consulenza professionale:**
Per strutture di affiliazione complesse, ricavi elevati (>€100.000/anno) o attività internazionali, raccomandiamo sempre di consultare un avvocato specializzato in diritto dei media o di internet.`
  }
];

const FAQIT = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domande Frequenti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trova risposte alle domande più comuni sui documenti legali per siti web affiliati
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <SafeMarkdown content={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQIT;
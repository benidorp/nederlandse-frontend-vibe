import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Perché i documenti legali sono importanti per i siti di affiliazione",
    answer: `Come affiliato marketer, sei legalmente obbligato a essere trasparente sul tuo modello di business e su come gestisci i dati dei visitatori. Senza documenti legali adeguati, rischi:
    
• Multe pesanti da parte di autorità di regolamentazione come le autorità per la protezione dei dati - fino a €20 milioni o 4% del fatturato annuo
• Richieste da parte dei consumatori per informazioni fuorvianti
• Rimozione da reti di affiliazione come Google AdSense
• Danno alla reputazione e perdita di fiducia del tuo pubblico

La principale legislazione a cui devi conformarti è il GDPR, la Direttiva ePrivacy e le normative sulla trasparenza del marketing di affiliazione come le linee guida FTC. Con i documenti giusti, proteggi te stesso e costruisci fiducia con i tuoi visitatori.`
  },
  {
    question: "Come integrare questi documenti sul tuo sito (footer, per post, vicino ai link)",
    answer: `Il posizionamento dei documenti legali è cruciale per la conformità e l'usabilità.

**Posizionamento nel footer (obbligatorio):**
Inserisci i link a tutti i tuoi documenti legali nel footer di ogni pagina:
• Informativa sulla Privacy
• Termini e Condizioni
• Cookie Policy
• Disclaimer
• Dichiarazione di Affiliazione

**Per articolo/post:**
Per recensioni di prodotti e articoli con link di affiliazione:
• Breve dichiarazione all'inizio dell'articolo (prime 150 parole)
• Marcatura prominente dei link di affiliazione, ad esempio: [AD] o [link affiliato]
• Link alla dichiarazione completa in fondo all'articolo

**Vicino ai link di affiliazione:**
• Usa un'abbreviazione come * o [AD] direttamente accanto al link
• Aggiungi un tooltip al passaggio del mouse con "link affiliato"
• Nelle schede prodotto: piccola clausola di esclusione in fondo

**Best practice:**
• Usa colori contrastanti in modo che le dichiarazioni risaltino
• Rendi il testo comprensibile per il pubblico non legale
• Mobile-friendly - visibile senza scorrere
• Usa icone per un riconoscimento rapido

**Implementazione tecnica:**
La nostra guida all'implementazione contiene snippet di codice per WordPress, Shopify, Webflow e siti web HTML, inclusi esempi di stile CSS.`
  },
  {
    question: "Domande Frequenti (FAQ)",
    answer: `**Questi modelli sono validi in tutta Europa?**
Sì, i nostri modelli sono conformi al GDPR che si applica in tutti i paesi dell'UE. Alcuni paesi hanno regole aggiuntive - questo è menzionato nei modelli.

**Devo consultare un avvocato?**
I nostri modelli sono esaminati legalmente, ma ogni attività è unica. Per situazioni complesse raccomandiamo sempre di cercare consulenza legale.

**Posso usare questi modelli per più siti web?**
Sì! Con l'acquisto ottieni una licenza illimitata per tutti i tuoi siti web di affiliazione.

**Cosa succede se vendo anche prodotti, non solo link di affiliazione?**
Allora hai bisogno di documenti aggiuntivi come Diritto di Recesso e Politica di Spedizione. Contattaci per un pacchetto personalizzato.

**Quanto spesso dovrei aggiornare i miei documenti?**
Almeno una volta all'anno, ma anche quando aggiungi nuovi strumenti o cambia la legislazione.

**Questi documenti mi proteggono contro tutte le richieste legali?**
Nessun documento offre protezione al 100%, ma buoni documenti legali riducono significativamente i tuoi rischi e dimostrano che agisci con attenzione.

**Devo acquistare il banner dei cookie separatamente?**
Il nostro pacchetto contiene la cookie policy (testo), ma per il banner tecnico dei cookie raccomandiamo strumenti come Cookiebot o CookieYes.

**In quali lingue sono disponibili i modelli?**
I modelli possono essere scaricati in più lingue per uso internazionale, così puoi distribuirli su tutti i tuoi siti web in tutto il mondo.`
  }
];

const FAQIT = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Domande Frequenti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Risposte alle domande più comuni sui documenti legali per affiliati
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground whitespace-pre-line">
                  {item.answer}
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
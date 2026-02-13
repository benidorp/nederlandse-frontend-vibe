import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "Perché ho bisogno di documenti legali come fotografo?",
    answer: "Come fotografo professionista, hai bisogno di protezione legale per diversi motivi: proteggere il tuo diritto d'autore, definire condizioni chiare con i clienti, rispettare il GDPR nella raccolta dei dati dei clienti, stabilire politiche di pagamento e cancellazione e proteggerti da richieste di risarcimento. Senza documenti legali adeguati, ti esponi a rischi finanziari e legali."
  },
  {
    question: "Cosa include il contratto di incarico (preventivo)?",
    answer: "Il contratto di incarico include un modello di contratto completo che puoi personalizzare per ogni cliente. Copre onorari, condizioni di pagamento, dettagli dell'incarico, tempi di consegna, diritto d'autore, diritti d'uso e politiche di cancellazione. Forniamo anche esempi di accordi e modelli di email pronti da copiare e incollare per comunicare con i tuoi clienti."
  },
  {
    question: "Come mi protegge la liberatoria come fotografo?",
    answer: "La liberatoria ti permette di stabilire accordi legali chiari con le persone fotografate prima dello scatto. Include autorizzazioni di modello, diritti d'immagine, permessi d'uso e rinunce di responsabilità. Questo ti protegge da future richieste e garantisce che tu abbia un consenso documentato per l'uso e la pubblicazione delle foto realizzate."
  },
  {
    question: "Posso usare questi documenti per diverse specialità fotografiche?",
    answer: "Sì! Che tu sia fotografo di ritratti, matrimoni, commerciale, di eventi o lavori in più specialità – questi documenti sono flessibili e adattabili a qualsiasi tipo di attività fotografica. Basta adattare i servizi specifici e le condizioni al tuo modello di business."
  },
  {
    question: "La protezione del diritto d'autore è valida a livello internazionale?",
    answer: "Sì, il documento di protezione del diritto d'autore è redatto tenendo conto della copertura internazionale e fa riferimento alla Convenzione di Berna e ad altri trattati internazionali sul diritto d'autore. Stabilisce la tua proprietà su tutte le opere fotografiche e definisce condizioni chiare per la licenza, l'attribuzione e l'applicazione in diversi paesi."
  },
  {
    question: "Ho bisogno di un'informativa sulla privacy se ho solo un modulo di contatto?",
    answer: "Sì! Secondo il GDPR e altre leggi sulla protezione dei dati, sei legalmente obbligato ad avere un'informativa sulla privacy se raccogli dati personali tramite il tuo sito web (anche solo un nome e un'email tramite un modulo di contatto). La nostra informativa sulla privacy specifica per fotografi copre tutti gli scenari comuni, inclusi moduli di contatto, sistemi di prenotazione e gestione dei dati dei clienti."
  },
  {
    question: "Posso personalizzare questi documenti per i miei servizi specifici?",
    answer: "Assolutamente! Tutti i documenti sono progettati per essere facilmente personalizzabili. Puoi adattare le condizioni ai tuoi servizi specifici, alla tua struttura tariffaria, ai metodi di consegna e alle politiche commerciali. I documenti forniscono una solida base legale dandoti al contempo la flessibilità di personalizzarli per la tua attività fotografica unica."
  },
  {
    question: "Come proteggono questi documenti le mie foto dal furto?",
    answer: "Il disclaimer e i documenti di protezione del diritto d'autore stabiliscono chiaramente che possiedi tutti i diritti sulle tue foto e definiscono cosa gli altri possono e non possono fare con le tue immagini. Contengono avvertenze contro l'uso, la riproduzione o la distribuzione non autorizzati. Sebbene nessun documento possa prevenire fisicamente il furto, questi documenti legali ti danno una posizione giuridica solida per far valere i tuoi diritti e chiedere risarcimenti se il tuo lavoro viene usato senza autorizzazione."
  },
  {
    question: "Ho bisogno di documenti separati per ogni sito web di fotografia?",
    answer: "No! Con un unico acquisto, puoi utilizzare questi documenti legali per tutti i tuoi siti di fotografia. Che tu abbia un sito portfolio o più siti per diversi servizi fotografici – la licenza permette un uso illimitato. Questo è estremamente conveniente per i fotografi con più presenze online."
  },
  {
    question: "E se lavoro con clienti internazionali?",
    answer: "I documenti sono redatti tenendo conto dell'applicabilità internazionale. Fanno riferimento a leggi e convenzioni internazionali quando applicabile (come il GDPR per i clienti europei, il diritto d'autore internazionale, ecc.). Puoi facilmente indicare quale giurisdizione si applica e adattare sezioni per i diversi mercati che servi."
  }
];

const PhotographyQAIT = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Domande e Risposte</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Domande frequenti sui documenti legali per fotografi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Domande comuni dei fotografi sulla protezione legale e la documentazione
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PhotographyQAIT;

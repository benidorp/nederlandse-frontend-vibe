import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqContent = {
  title: "Domande frequenti sui documenti legali per fotografi",
  questions: [
    { question: "Come posso usare legalmente musica o video nei miei contenuti fotografici?", answer: "Assicurati sempre di avere i diritti o le licenze per i clip musicali o video utilizzati nelle tue presentazioni o sui social media. Usa piattaforme royalty-free come Epidemic Sound, Artlist o Pexels. Non usare mai materiale protetto da diritto d'autore senza autorizzazione esplicita, poiché potrebbe comportare richieste di rimozione o sanzioni." },
    { question: "Cos'è una liberatoria in fotografia?", answer: "Una liberatoria è un'autorizzazione firmata con cui un modello o proprietario cede tutti i diritti o le future rivendicazioni sulle immagini, concedendo al fotografo pieni diritti d'uso. È essenziale per servizi commerciali, pubblicità o qualsiasi progetto in cui le immagini potrebbero essere vendute o pubblicate a livello internazionale." },
    { question: "Cos'è un'autorizzazione di proprietà e quando ne ho bisogno?", answer: "Un'autorizzazione di proprietà concede il permesso di fotografare una proprietà privata a fini commerciali. È necessaria per luoghi come case, uffici o monumenti riconoscibili. Senza questa autorizzazione, potresti incontrare restrizioni legali nella licenza commerciale o nella vendita di queste immagini." },
    { question: "Come dovrebbero gestire i fotografi la proprietà intellettuale?", answer: "Rivendica sempre il diritto d'autore nei tuoi contratti e metadati. Registra le tue immagini presso un ufficio del diritto d'autore se possibile. Aggiungi filigrane, dati EXIF e mantieni registri chiari delle licenze. Evita di usare il lavoro altrui senza permesso, anche solo come ispirazione." },
    { question: "Cosa sono i diritti morali in fotografia?", answer: "I diritti morali proteggono l'integrità e la reputazione di un fotografo. Includono il diritto all'attribuzione e il diritto di opporsi alla distorsione o all'uso improprio delle tue immagini. Questi diritti esistono automaticamente in molti paesi e devono essere rispettati da clienti e collaboratori." },
    { question: "Posso fotografare legalmente le persone in luoghi pubblici?", answer: "Nella maggior parte dei paesi, fotografare persone in pubblico per scopi editoriali o artistici è consentito, ma l'uso commerciale di queste immagini richiede un'autorizzazione di modello. Verifica sempre le leggi locali sulla privacy – variano considerevolmente da regione a regione." },
    { question: "Cos'è un accordo di riservatezza (NDA) per fotografi?", answer: "Un NDA impedisce ai clienti o collaboratori di condividere informazioni riservate sul tuo servizio fotografico, le tue tariffe o il tuo processo creativo. È comune nella fotografia di moda, pubblicitaria e aziendale per proteggere segreti commerciali e strategie di brand." },
    { question: "Come posso proteggere il mio portfolio online dal furto?", answer: "Aggiungi filigrane discrete alle tue immagini, disabilita il salvataggio con clic destro e integra metadati nei tuoi file. Usa anteprime a bassa risoluzione per la visualizzazione web. Servizi come Pixsy o Digimarc aiutano a tracciare e far rispettare l'uso non autorizzato delle immagini in tutto il mondo." },
    { question: "Come posso scrivere un disclaimer solido per la fotografia?", answer: "Il tuo disclaimer dovrebbe stabilire che tutte le foto appartengono al fotografo e non possono essere copiate o distribuite senza consenso scritto. Aggiungi una nota indicando che i colori e l'aspetto possono variare a seconda del dispositivo o delle impostazioni dello schermo per evitare rivendicazioni di falsa rappresentazione." },
    { question: "Quanto è importante il branding per i fotografi?", answer: "Un branding forte costruisce riconoscimento e fiducia. Include un logo coerente, una palette di colori, un tono di voce e uno stile di editing. Un'identità di marca chiara aiuta i clienti a ricordarti e ti posiziona come professionista nella tua nicchia." },
    { question: "Come possono i fotografi costruire un pubblico internazionale?", answer: "Usa strategicamente le piattaforme social (Instagram, Pinterest, Behance). Scrivi didascalie multilingue e usa hashtag internazionali. Collabora con creativi di tutto il mondo, partecipa a mostre online e ottimizza il tuo sito web per più lingue e valute." },
    { question: "Come raccontare una storia attraverso la mia fotografia?", answer: "Ogni immagine dovrebbe trasmettere emozione, contesto o narrazione. Usa composizione, illuminazione e soggetti in modo intenzionale. Le sequenze di immagini possono costruire storytelling visivo – ideale per lavori editoriali e documentari." },
    { question: "Come gestire eticamente la manipolazione delle immagini?", answer: "Il ritocco fotografico dovrebbe migliorare ma non ingannare. Evita di alterare le caratteristiche corporee in un modo che distorca la realtà, a meno che non sia per intento artistico. Indica sempre l'uso di compositi o elementi generati dall'IA per mantenere trasparenza e fiducia." },
    { question: "Cos'è la fotografia generata dall'IA ed è legale?", answer: "Gli strumenti di IA possono creare o modificare immagini, ma la proprietà del diritto d'autore è complessa. Le leggi differiscono per regione – nella maggior parte dei casi, solo gli elementi creati dall'uomo sono proteggibili dal diritto d'autore. Divulga chiaramente il coinvolgimento dell'IA ai clienti e evita di generare somiglianze senza consenso." },
    { question: "Come posso collaborare con i brand come fotografo?", answer: "Crea un media kit professionale con il tuo portfolio, statistiche del pubblico e tariffe. Avvicina i brand con proposte personalizzate che mostrino il beneficio reciproco. Concludi contratti chiari che specifichino deliverable, pagamento, esclusività e diritti di licenza." },
    { question: "Cosa devo includere in un'informativa sulla privacy per la fotografia?", answer: "Spiega come i dati dei clienti (nomi, foto, informazioni di contatto) vengono raccolti, conservati e utilizzati. Indica per quanto tempo i dati vengono conservati e come i clienti possono richiederne la cancellazione. Assicura la conformità al GDPR, CCPA o alle leggi locali sulla protezione dei dati." },
    { question: "Come posso tenere conto della sensibilità culturale in fotografia?", answer: "Informati sempre sulle usanze locali e ottieni il consenso prima di fotografare persone o siti religiosi. Evita di rafforzare stereotipi. La rappresentazione etica rafforza la tua reputazione e supporta uno storytelling visivo responsabile." },
    { question: "Quali sono i rischi degli strumenti di miglioramento delle immagini con IA?", answer: "L'IA può modificare eccessivamente o alterare dettagli importanti, riducendo l'autenticità. Alcuni strumenti potrebbero conservare le immagini caricate, mettendo a rischio la sicurezza dei dati. Usa software affidabile, leggi i termini di utilizzo e conserva gli originali come prova di paternità." },
    { question: "Come rendere la mia attività fotografica sostenibile nel lungo periodo?", answer: "Diversifica le fonti di reddito (stampe, workshop, corsi online, licenze stock). Costruisci una forte presenza online e adattati alle nuove tecnologie come IA e NFT. Continua a imparare e aggiorna regolarmente i tuoi contratti, il branding e l'attrezzatura." },
    { question: "Quali diritti conservo come fotografo quando vendo immagini?", answer: "Come fotografo, conservi per default il diritto d'autore sulle tue immagini conformemente ai trattati internazionali come la Convenzione di Berna. Puoi trasferire diritti d'uso (licenze) ai clienti proteggendo al contempo i diritti sottostanti. Definisci chiaramente nel tuo contratto cosa il cliente può fare (stampa, digitale, commerciale) e riservati il resto." },
    { question: "Qual è il miglior obiettivo per la fotografia di ritratto?", answer: "Un obiettivo a focale fissa con grande apertura, come un 50mm f/1.8 o un 85mm f/1.4, è ideale per i ritratti. Questi obiettivi producono un bellissimo sfocato di fondo (bokeh) e una compressione lusinghiera dei tratti del viso. Scegli obiettivi full frame per qualità professionale e nitidezza uniforme." },
    { question: "Come fare foto di paesaggio spettacolari?", answer: "Usa un'apertura piccola (f/8–f/16) per una grande profondità di campo, metti a fuoco a un terzo nella scena e usa un treppiede per la stabilità. I momenti migliori per i paesaggi sono l'alba e il tramonto. Aggiungi interesse nel primo piano per profondità e usa un filtro polarizzatore per migliorare il cielo." },
    { question: "Cos'è il bilanciamento del bianco in fotografia?", answer: "Il bilanciamento del bianco regola la temperatura del colore affinché i toni bianchi appaiano neutri in diverse condizioni di illuminazione. Le impostazioni comuni includono luce diurna, nuvoloso, tungsteno e fluorescente. Un bilanciamento del bianco corretto impedisce che le foto appaiano troppo blu o arancioni e assicura tonalità coerenti." },
    { question: "Cos'è il bokeh e come crearlo?", answer: "Il bokeh è la qualità estetica dello sfocato di fondo prodotto da un obiettivo a grande apertura (f/1.2–f/2.8). Usa una focale lunga e mantieni il soggetto lontano dallo sfondo. Gli obiettivi a focale fissa e le lamelle di diaframma arrotondate creano effetti bokeh più morbidi." },
    { question: "Cos'è la composizione in fotografia?", answer: "La composizione si riferisce a come gli elementi sono disposti in un'immagine. Una composizione forte guida lo sguardo dello spettatore e crea equilibrio. Le tecniche includono la regola dei terzi, linee guida, simmetria e spazio negativo per immagini d'impatto." }
  ]
};

const FAQPhotographyIT = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4">Domande e Risposte</Badge>
          <h1 className="text-4xl font-bold mb-4">Domande frequenti</h1>
          <p className="text-xl text-muted-foreground mb-12">Domande comuni dei fotografi sulla protezione legale e la documentazione per il tuo sito web</p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-all" className="border rounded-lg px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <h2 className="text-xl font-semibold text-left">{faqContent.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                {faqContent.questions.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPhotographyIT;

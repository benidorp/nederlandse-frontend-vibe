import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const VATFAQSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Veelgestelde vragen
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                Wat is het verschil tussen inclusief en exclusief BTW?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-3">
                  <strong>Exclusief BTW</strong> betekent dat het bedrag nog geen BTW bevat. De BTW moet hier nog bij opgeteld worden om tot het totaalbedrag te komen.
                </p>
                <p>
                  <strong>Inclusief BTW</strong> betekent dat de BTW al is inbegrepen in het bedrag. Om te weten hoeveel BTW er in zit, moet je deze eruit halen.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                Hoe kies ik het juiste BTW-tarief?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-3">
                  Elk land heeft een standaard BTW-tarief dat voor de meeste goederen en diensten geldt. Daarnaast kunnen er verlaagde tarieven zijn voor specifieke categorieën zoals:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Levensmiddelen</li>
                  <li>Medicijnen</li>
                  <li>Boeken en tijdschriften</li>
                  <li>Culturele diensten</li>
                </ul>
                <p className="mt-3">
                  Raadpleeg de belastingdienst van uw land voor specifieke informatie over welk tarief van toepassing is op uw product of dienst.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                Hoe gebruik ik deze calculator voor mijn BTW-aangifte?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-3">
                  De calculator toont een "Aangifte overzicht" met drie belangrijke bedragen:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li><strong>Totaal omzet excl. BTW:</strong> Dit is uw netto-omzet die u moet opgeven bij uw aangifte</li>
                  <li><strong>Totaal BTW ontvangen:</strong> Het BTW-bedrag dat u van uw klanten heeft ontvangen</li>
                  <li><strong>Totaal BTW af te dragen:</strong> Het bedrag dat u moet afdragen aan de belastingdienst (minus voorbelasting)</li>
                </ol>
                <p className="mt-3">
                  Let op: Dit is een vereenvoudigd overzicht. Voor uw daadwerkelijke aangifte moet u ook rekening houden met voorbelasting (BTW die u zelf betaald heeft op inkopen).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                Zijn de BTW-tarieven altijd actueel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>
                  We streven ernaar om de BTW-tarieven zo actueel mogelijk te houden. BTW-tarieven kunnen echter veranderen door nieuwe wetgeving. 
                  Controleer daarom altijd de actuele tarieven bij de belastingdienst van het betreffende land, vooral voor belangrijke financiële beslissingen of aangifte.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                Werkt deze calculator voor alle landen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-3">
                  Deze calculator bevat de BTW-tarieven van meer dan 40 landen wereldwijd, waaronder:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Alle EU-landen</li>
                  <li>Belangrijke Europese landen buiten de EU (UK, Zwitserland, Noorwegen)</li>
                  <li>Grote economieën wereldwijd (VS, Canada, Australië, Japan, China, etc.)</li>
                  <li>Belangrijke handelspartners in het Midden-Oosten, Azië en Zuid-Amerika</li>
                </ul>
                <p className="mt-3">
                  Let op: Sommige landen zoals de VS hebben geen landelijk BTW-systeem maar gebruiken sales tax per staat. In dat geval tonen we het federale niveau.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background px-6 rounded-lg border">
              <AccordionTrigger className="hover:no-underline">
                Kan ik deze berekeningen exporteren?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p>
                  Op dit moment kunt u de resultaten opslaan door een screenshot te maken of de gegevens handmatig over te nemen in uw administratie. 
                  We werken aan een export-functie zodat u de berekeningen in de toekomst kunt downloaden als PDF of CSV-bestand voor uw administratie.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VATFAQSection;

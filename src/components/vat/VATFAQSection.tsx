import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const VATFAQSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Veelgestelde vragen</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Alles over BTW-berekening
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Antwoorden op de meest gestelde vragen over internationale BTW
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Wat is BTW en waarom moet ik dit berekenen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-3">
                  BTW (Belasting over de Toegevoegde Waarde) is een indirecte belasting die consumenten betalen op goederen en diensten. 
                  Als ondernemer ben je verplicht om BTW te berekenen, in te zamelen en af te dragen aan de belastingdienst.
                </p>
                <p>
                  Deze calculator helpt je om snel en nauwkeurig de juiste BTW-bedragen te berekenen voor elk land wereldwijd, 
                  wat essentieel is voor correcte facturering en belastingaangifte.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Wat is het verschil tussen inclusief en exclusief BTW?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <p className="font-semibold text-foreground mb-2">Exclusief BTW (Netto bedrag)</p>
                    <p>
                      Dit is het bedrag zonder belasting. Als je een product verkoopt voor €100 excl. BTW 
                      (met 21% tarief), komt daar €21 BTW bij, voor een totaal van €121 incl. BTW.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="font-semibold text-foreground mb-2">Inclusief BTW (Bruto bedrag)</p>
                    <p>
                      Dit is het totaalbedrag inclusief belasting. Als een product €121 incl. BTW kost (met 21% tarief), 
                      is het bedrag excl. BTW €100 en de BTW zelf €21.
                    </p>
                  </div>
                  <p className="text-sm italic">
                    💡 Onze calculator kan beide richtingen berekenen - je kunt kiezen of je bedrag inclusief of exclusief BTW is.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Waarom verschillen BTW-tarieven per land?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-4">
                  Elk land bepaalt zijn eigen BTW-tarieven op basis van economisch beleid en overheidsdoelstellingen. 
                  EU-landen moeten minimaal 15% standaard BTW hanteren, maar kunnen zelf hogere percentages instellen.
                </p>
                <p className="mb-4">
                  Daarnaast hebben veel landen verlaagde tarieven voor essentiële producten zoals voedsel, boeken en medicijnen. 
                  Dit varieert van 0% tot 27% wereldwijd.
                </p>
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <p className="font-semibold text-foreground mb-2">Voorbeelden:</p>
                  <ul className="space-y-1">
                    <li>🇳🇱 Nederland: 21% (standaard) en 9% (verlaagd)</li>
                    <li>🇩🇪 Duitsland: 19% (standaard) en 7% (verlaagd)</li>
                    <li>🇭🇺 Hongarije: 27% (hoogste in EU)</li>
                    <li>🇱🇺 Luxemburg: 17% (laagste in EU)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Hoe kies ik het juiste BTW-tarief?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-3">
                  Het standaard tarief is het normale BTW-percentage dat van toepassing is op de meeste goederen en diensten. 
                  Het verlaagde tarief is een lager percentage voor specifieke categorieën zoals:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">🍎 Levensmiddelen</p>
                    <p className="text-sm">Basisvoedingsmiddelen</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">💊 Medicijnen</p>
                    <p className="text-sm">Geneesmiddelen en medische hulpmiddelen</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">📚 Boeken</p>
                    <p className="text-sm">Gedrukte en digitale publicaties</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">🎭 Cultuur</p>
                    <p className="text-sm">Culturele diensten en evenementen</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  💡 Raadpleeg de belastingdienst van het betreffende land voor specifieke informatie over welk tarief van toepassing is op jouw product of dienst.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Hoe gebruik ik deze calculator voor mijn BTW-aangifte?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-4">
                  De calculator toont een "Aangifte overzicht" met drie belangrijke bedragen die je nodig hebt:
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3 p-3 rounded-lg bg-muted/50 border">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">1</span>
                    <div>
                      <p className="font-semibold text-foreground">Totaal omzet excl. BTW</p>
                      <p className="text-sm">Dit is je netto-omzet die je moet opgeven bij je aangifte</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-lg bg-muted/50 border">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">2</span>
                    <div>
                      <p className="font-semibold text-foreground">Totaal BTW ontvangen</p>
                      <p className="text-sm">Het BTW-bedrag dat je van je klanten hebt ontvangen</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">3</span>
                    <div>
                      <p className="font-semibold text-foreground">Totaal BTW af te dragen</p>
                      <p className="text-sm">Het bedrag dat je moet afdragen aan de belastingdienst (minus voorbelasting)</p>
                    </div>
                  </div>
                </div>
                <p className="mt-4 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm">
                  ⚠️ <strong>Let op:</strong> Dit is een vereenvoudigd overzicht. Voor je daadwerkelijke aangifte moet je ook rekening houden 
                  met voorbelasting (BTW die je zelf betaald hebt op inkopen).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Zijn de BTW-tarieven altijd actueel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-3">
                  De BTW-tarieven in deze calculator worden regelmatig bijgewerkt om actueel te blijven. Echter, 
                  BTW-tarieven kunnen veranderen door nieuwe wetgeving.
                </p>
                <p className="mb-3">
                  We raden daarom aan om bij belangrijke transacties altijd de meest recente tarieven te controleren 
                  via de officiële website van de belastingdienst van het betreffende land.
                </p>
                <p className="text-sm p-3 rounded-lg bg-primary/5 border border-primary/20">
                  💼 Voor zakelijke doeleinden adviseren we om een accountant of belastingadviseur te raadplegen 
                  voor specifiek advies over je situatie.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Werkt deze calculator voor alle landen?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-4">
                  Deze calculator bevat de BTW-tarieven van <strong>meer dan 60 landen wereldwijd</strong>, waaronder:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <p className="font-semibold text-foreground mb-2">🇪🇺 Europa</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Alle 27 EU-landen</li>
                      <li>• UK, Zwitserland, Noorwegen</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <p className="font-semibold text-foreground mb-2">🌍 Wereldwijd</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Noord- en Zuid-Amerika</li>
                      <li>• Azië-Pacific regio</li>
                      <li>• Midden-Oosten & Afrika</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm p-3 rounded-lg bg-muted/50 border">
                  ℹ️ <strong>Let op:</strong> Sommige landen zoals de VS hebben geen landelijk BTW-systeem maar gebruiken 
                  sales tax per staat. In dat geval tonen we het federale niveau (vaak 0%).
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Kan ik deze calculator gebruiken voor internationale handel?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-4">
                  Ja, deze calculator is speciaal ontworpen voor internationale ondernemers. Met ondersteuning voor 60+ landen 
                  wereldwijd kun je eenvoudig BTW berekenen voor je internationale transacties. De calculator toont automatisch 
                  de juiste valuta per land.
                </p>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <p className="font-semibold text-foreground">⚠️ Belangrijk voor internationale handel:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Bij grensoverschrijdende handel binnen de EU gelden specifieke regels (zoals het verlegd BTW-regime voor B2B-transacties)</li>
                    <li>• Voor handel buiten de EU kunnen andere regels gelden</li>
                    <li>• Import/export kan additionele belastingen met zich meebrengen</li>
                  </ul>
                  <p className="text-sm mt-3">
                    💼 Raadpleeg altijd een belastingadviseur voor complexe internationale situaties.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VATFAQSection;

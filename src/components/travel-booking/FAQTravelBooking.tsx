import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Welke juridische documenten heeft mijn reisboekingswebsite nodig?",
    answer: "Een reisboekingsplatform heeft verschillende essentiële juridische documenten nodig: een AVG-compliant privacybeleid dat uitlegt hoe u met klantgegevens en boekingsinformatie omgaat, algemene voorwaarden die de rechten en plichten van beide partijen vastleggen, duidelijke annuleringsvoorwaarden, een disclaimer die uw aansprakelijkheid beperkt, en een cookiebeleid voor tracking en analytics. Deze documenten beschermen zowel uw bedrijf als uw klanten."
  },
  {
    question: "Waarom is een annuleringsbeleid zo belangrijk voor reisboekingswebsites?",
    answer: "Een duidelijk annuleringsbeleid is cruciaal omdat het duidelijkheid schept over wanneer klanten hun boeking kunnen annuleren, welke kosten daarbij komen kijken, en hoe restitutie wordt afgehandeld. Dit voorkomt geschillen en teleurstellingen. Bovendien bent u wettelijk verplicht om consumenten te informeren over hun herroepingsrecht, hoewel dit bij reisdiensten vaak beperkt is. Een goed annuleringsbeleid beschermt uw inkomsten en voorkomt juridische problemen."
  },
  {
    question: "Hoe beschermt een disclaimer mijn reisboekingsplatform?",
    answer: "Een disclaimer beperkt uw aansprakelijkheid voor zaken buiten uw controle, zoals prijswijzigingen van hotels, beschikbaarheid, force majeure gebeurtenissen, of fouten in informatie van derde partijen. Het verduidelijkt dat u bemiddelaar bent tussen klant en accommodatie, en niet verantwoordelijk voor de kwaliteit van de diensten zelf. Een goed opgestelde disclaimer kan u beschermen tegen kostbare juridische claims en schadevergoedingen."
  },
  {
    question: "Wat moet er in het privacybeleid van een reisboekingswebsite staan?",
    answer: "Het privacybeleid moet uitleggen welke persoonsgegevens u verzamelt (naam, adres, paspoortgegevens, betaalinformatie, reisvoorkeuren), waarom u deze nodig heeft, hoe lang u ze bewaart, en met wie u ze deelt (hotels, luchtvaartmaatschappijen, betalingsproviders). Ook moet u de rechten van klanten onder de AVG uitleggen: inzage, correctie, verwijdering en bezwaar. Transparantie over cookies en tracking is eveneens verplicht."
  },
  {
    question: "Zijn deze juridische documenten geschikt voor internationale reisboekingen?",
    answer: "Ja, onze documenten zijn ontworpen voor zowel nationale als internationale reisboekingen. Ze zijn AVG-compliant en houden rekening met internationale wetgeving. U kunt ze downloaden in meerdere talen, waardoor ze perfect geschikt zijn voor platforms die klanten uit verschillende landen bedienen. De templates bevatten ook clausules over wisselkoersen, internationale betalingen en verschillende rechtstelsels."
  },
  {
    question: "Moet ik verschillende voorwaarden hebben voor hotels, vluchten en pakketten?",
    answer: "Idealiter past u de voorwaarden aan per type boeking, maar onze basisdocumenten zijn breed genoeg om alle soorten reisboekingen te dekken. U kunt specifieke clausules toevoegen voor vluchten (bagage, inchecken), hotels (check-in/out tijden, extra kosten), of pakketten (gecombineerde diensten). De templates zijn flexibel en kunnen eenvoudig worden aangepast aan uw specifieke aanbod."
  },
  {
    question: "Hoe ga ik om met betalingen en restitutie in de algemene voorwaarden?",
    answer: "De algemene voorwaarden moeten duidelijk maken wanneer betaling verschuldigd is (bij boeking, uiterlijk voor aankomst), welke betaalmethoden u accepteert, wat er gebeurt bij wanbetaling, en hoe restitutie werkt bij annulering. Vermeld ook eventuele aanbetalingen, boekingskosten en administratiekosten. Transparantie over kosten voorkomt geschillen en is wettelijk verplicht volgens de Wet op het consumentenrecht."
  },
  {
    question: "Wat zijn de risico's als ik geen juridische documenten heb?",
    answer: "Zonder juridische documenten loopt u aanzienlijke risico's: AVG-boetes tot €20 miljoen of 4% van de omzet, aansprakelijkheid voor misleiding van consumenten, claims van klanten bij geschillen, vertrouwensverlies bij klanten, en problemen met betalingsproviders die compliance eisen. Ook kunnen toezichthouders uw website offline halen tot u aan de wettelijke vereisten voldoet. De kosten van deze risico's zijn vele malen hoger dan een investering in goede juridische documenten."
  },
  {
    question: "Hoe vaak moet ik mijn juridische documenten updaten?",
    answer: "Controleer uw documenten minimaal jaarlijks en update ze wanneer: wetgeving wijzigt (zoals nieuwe AVG-regels), uw diensten veranderen (nieuwe bestemmingen, betalingsmethoden), u met nieuwe partners werkt, of er significante rechtszaken in uw branche zijn geweest. Ook bij klachten of vragen van klanten over onduidelijkheden is het verstandig om uw documenten te herzien en waar nodig te verduidelijken."
  },
  {
    question: "Kan ik deze documenten gebruiken voor meerdere reisboekingswebsites?",
    answer: "Ja, absoluut! Na aankoop kunt u de documenten gebruiken voor alle reisboekingswebsites die u beheert, zowel nu als in de toekomst. Er zijn geen beperkingen op het aantal websites. U hoeft alleen uw bedrijfsgegevens in te vullen en eventueel kleine aanpassingen te maken per platform. Dit maakt het een zeer kosteneffectieve oplossing voor ondernemers met meerdere reisplatforms."
  },
  {
    question: "Hoe implementeer ik deze documenten op mijn website?",
    answer: "De implementatie is eenvoudig: download de documenten, vul uw specifieke bedrijfsgegevens in (naam, adres, contactgegevens), plaats ze als aparte pagina's op uw website (bijvoorbeeld /privacybeleid, /algemene-voorwaarden), en link ernaar vanuit uw footer en bij het boekingsproces. De bijgeleverde implementatiegids bevat stap-voor-stap instructies en best practices. Meestal bent u binnen een uur klaar."
  },
  {
    question: "Wat is het verschil tussen algemene voorwaarden en annuleringsvoorwaarden?",
    answer: "Algemene voorwaarden regelen alle aspecten van uw dienstverlening: accounts, boekingsproces, betalingen, aansprakelijkheid, intellectueel eigendom, en geschillen. Annuleringsvoorwaarden zijn specifieker en focussen alleen op: wanneer annulering mogelijk is, welke kosten daarbij komen kijken, hoe restitutie werkt, en wat er gebeurt bij no-show. Beide documenten zijn complementair en samen bieden ze volledige bescherming."
  },
  {
    question: "Moet ik klanten actief wijzen op de algemene voorwaarden bij boeking?",
    answer: "Ja, dit is wettelijk verplicht. Klanten moeten de mogelijkheid hebben om de voorwaarden te lezen voordat ze een boeking bevestigen. In de praktijk betekent dit: een link naar de voorwaarden bij het boekingsformulier, een checkbox waarmee klanten bevestigen dat ze de voorwaarden hebben gelezen en accepteren, en de voorwaarden in duidelijke taal beschikbaar op uw website. Zonder deze stappen kunnen uw voorwaarden niet rechtsgeldig zijn."
  },
  {
    question: "Hoe ga ik om met klantgegevens onder de AVG bij reisboekingen?",
    answer: "U moet persoonsgegevens minimaliseren (alleen verzamelen wat nodig is), veilig opslaan met encryptie, niet langer bewaren dan nodig (meestal 7 jaar voor fiscale doeleinden), transparant zijn over gebruik, toestemming vragen voor marketing, en klanten hun AVG-rechten geven. Bij een datalek moet u binnen 72 uur de Autoriteit Persoonsgegevens informeren. Deel gegevens alleen met vertrouwde partners via verwerkersovereenkomsten."
  },
  {
    question: "Wat zijn de specifieke uitdagingen voor reisboekingsplatforms qua privacy?",
    answer: "Reisplatforms verwerken gevoelige gegevens zoals paspoortinformatie, betaalgegevens, gezondheidsinfo (bijv. dieetwensen, allergieën), en locatiedata. U moet duidelijk maken waarom elk gegeven nodig is. Ook deelt u data met veel partijen (hotels, vliegmaatschappijen, verzekeraars) wat extra aandacht voor verwerkersovereenkomsten vereist. Internationale dataoverbrenging naar landen buiten de EU vraagt om extra waarborgen zoals Standard Contractual Clauses."
  },
  {
    question: "Kan ik eigen clausules toevoegen aan deze templates?",
    answer: "Ja, de templates zijn bedoeld als basis waarop u kunt bouwen. U kunt specifieke clausules toevoegen voor: uw unieke annuleringsbeleid, speciale diensten zoals reisverzekeringen, loyaliteitsprogramma's, partnerschappen met specifieke hotels, of niche-specifieke voorwaarden. Zorg wel dat toegevoegde clausules juridisch consistent blijven met de rest van het document. Bij twijfel kunt u altijd een advocaat laten meekijken."
  },
  {
    question: "Hoe bescherm ik mezelf tegen fraude door klanten?",
    answer: "Uw algemene voorwaarden kunnen clausules bevatten over: verificatie van identiteit, betaalveiligheid (alleen via beveiligde methoden), consequenties bij valse informatie, reservering van het recht om boekingen te weigeren bij vermoeden van fraude, en samenwerking met autoriteiten. Ook kunt u vermelden dat u chargeback fraude zult bestrijden. Een goed fraudebeleid in combinatie met technische maatregelen beschermt uw platform."
  },
  {
    question: "Wat moet ik doen bij klachten over accommodaties?",
    answer: "Uw disclaimer en voorwaarden moeten duidelijk maken dat u bemiddelaar bent, niet eigenaar van de accommodaties. Vermeld wel uw klachtenafhandelingsprocedure: hoe klanten contact kunnen opnemen, binnen welke termijn u reageert, en hoe u klachten onderzoekt. Geef aan dat u uw best doet om te bemiddelen, maar geen garanties kunt geven over de uitkomst. Een goede klachtenprocedure voorkomt escalatie en beschermt uw reputatie."
  },
  {
    question: "Zijn deze documenten geschikt voor zowel B2C als B2B reisboekingen?",
    answer: "De basisdocumenten zijn vooral gericht op B2C (consumenten), wat de meeste reisplatforms betreft. Voor B2B (zakelijke klanten) gelden andere regels: minder consumentenbescherming, meer ruimte voor maatwerk, andere aansprakelijkheidsregels. Als u ook aan bedrijven verkoopt, kunt u aparte B2B voorwaarden toevoegen met clausules over: betalingstermijnen, volumekortingen, extra services, en zakelijke aansprakelijkheid."
  },
  {
    question: "Hoe ga ik om met prijswijzigingen en beschikbaarheid?",
    answer: "Uw voorwaarden moeten duidelijk maken dat: prijzen onder voorbehoud zijn tot bevestiging, beschikbaarheid real-time kan wijzigen, u niet aansprakelijk bent voor fouten in gegevens van partners, en wat er gebeurt als prijzen na boeking wijzigen. Bij significante wijzigingen (>10%) heeft de klant vaak recht op annulering. Automatische prijsupdates en duidelijke communicatie zijn essentieel. Vermeld ook wisselkoersrisico's bij internationale boekingen."
  }
];

const FAQTravelBooking = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Veelgestelde Vragen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Veel Gestelde Vragen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Antwoorden op de meest gestelde vragen over juridische documenten voor reisboekingswebsites
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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

export default FAQTravelBooking;

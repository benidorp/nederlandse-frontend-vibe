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
    question: "Hvorfor juridiske dokumenter er viktige for affiliate-sider",
    answer: `Som affiliate-markedsfører er du juridisk forpliktet til å være transparent om forretningsmodellen din og hvordan du håndterer besøksdata. Uten riktige juridiske dokumenter risikerer du:
    
• Høye bøter fra tilsynsmyndigheter som datatilsynsmyndigheter - opptil 20 millioner euro eller 4% av årlig omsetning
• Krav fra forbrukere for villedende informasjon
• Fjerning fra affiliate-nettverk som Google AdSense
• Omdømmeskade og tap av tillit fra publikum

De viktigste lovene du må overholde er GDPR, ePrivacy-direktivet og regler rundt transparent affiliate-markedsføring som FTC-retningslinjer. Med de riktige dokumentene beskytter du deg selv og bygger tillit hos besøkende.`
  },
  {
    question: "Hvordan integrere disse dokumentene på nettstedet ditt (footer, per innlegg, nær lenker)",
    answer: `Plassering av juridiske dokumenter er avgjørende for samsvar og brukervennlighet.

**Footer-plassering (obligatorisk):**
Plasser lenker til alle juridiske dokumenter i footeren på hver side:
• Personvernregler
• Vilkår og Betingelser  
• Retningslinjer for Informasjonskapsler
• Ansvarsfraskrivelse
• Affiliate-avsløring

**Per artikkel/innlegg:**
For produktanmeldelser og artikler med affiliate-lenker:
• Kort avsløring i begynnelsen av artikkelen (første 150 ord)
• Tydelig merking av affiliate-lenker, for eksempel: [ANNONSE] eller [affiliate-lenke]
• Lenke til fullstendig avsløring nederst i artikkelen

**Nær affiliate-lenker:**
• Bruk en forkortelse som * eller [ANNONSE] direkte ved siden av lenken
• Legg til en tooltip ved hover med "affiliate-lenke"
• I produktbokser: liten ansvarsfraskrivelse nederst

**Beste praksis:**
• Bruk kontrasterende farger slik at avsløringer skiller seg ut
• Gjør teksten forståelig for ikke-juridisk publikum
• Mobilvennlig - synlig uten scrolling
• Bruk ikoner for rask gjenkjennelse

**Teknisk implementering:**
Vår implementeringsguide inneholder kodeeksempler for WordPress, Shopify, Webflow og HTML-nettsteder, inkludert CSS-stileksempler.`
  },
  {
    question: "Ofte Stilte Spørsmål (FAQ)",
    answer: `**Er disse malene gyldige i hele Europa?**
Ja, malene våre oppfyller GDPR som gjelder i alle EU-land. Noen land har tilleggsregler - dette er nevnt i malene.

**Trenger jeg å konsultere en advokat?**
Malene våre er juridisk gjennomgått, men hver virksomhet er unik. For komplekse situasjoner anbefaler vi alltid å søke juridisk rådgivning.

**Kan jeg bruke disse malene for flere nettsteder?**
Ja! Med kjøpet får du en ubegrenset lisens for alle dine egne affiliate-nettsteder.

**Hva om jeg også selger produkter, ikke bare affiliate-lenker?**
Da trenger du tilleggsdokumenter som Angrerett og Leveringspolicy. Kontakt oss for en tilpasset pakke.

**Hvor ofte bør jeg oppdatere dokumentene mine?**
Minst en gang i året, men også når du legger til nye verktøy eller lovgivning endres.

**Beskytter disse dokumentene meg mot alle juridiske krav?**
Ingen dokumenter tilbyr 100% beskyttelse, men gode juridiske dokumenter minimerer risikoen din betydelig og viser at du handler omsorgsfullt.

**Må jeg kjøpe cookie-banneret separat?**
Pakken vår inneholder retningslinjer for informasjonskapsler (tekst), men for det tekniske cookie-banneret anbefaler vi verktøy som Cookiebot eller CookieYes.

**På hvilke språk er malene tilgjengelige?**
Malene kan lastes ned på flere språk for internasjonal bruk, slik at du kan bruke dem på alle nettsteder verden over.`
  },
  {
    question: "Juridiske ansvarsfraskrivelser og forpliktelser",
    answer: `**Viktig ansvarsfraskrivelse:**

Disse dokumentmalene er nøye forberedt og gjennomgått, men fungerer som et utgangspunkt for din juridiske overholdelse. Legal Affiliate Agreement gir ikke juridisk rådgivning og er ikke ansvarlig for skader som oppstår ved bruk av disse malene.

**Ansvarsbegrensning:**
• Malene er generelle og passer kanskje ikke for enhver spesifikk situasjon
• Lovgivning kan endres etter publisering av maler
• Korrekt implementering og tilpasning er ditt ansvar
• Ved tvil, konsulter alltid en spesialisert advokat

**Hva vi ikke er:**
• Et advokatfirma
• Ansvarlige for bøter eller krav som oppstår ved feil bruk
• Ansvarlige for endringer du gjør
• En erstatning for profesjonell juridisk rådgivning i komplekse saker

**Hva vi tilbyr:**
• Profesjonelt forberedte maler som et solid grunnlag
• Regelmessige oppdateringer ved store lovendringer
• Klare implementeringsinstruksjoner
• E-poststøtte for spørsmål om malene

**Bruksvilkår:**
Ved å bruke disse malene godtar du våre vilkår og ansvarsfraskrivelse. Du bekrefter at juridisk overholdelse forblir ditt eget ansvar.

**Egnethet:**
Disse malene er spesielt utviklet for affiliate-markedsføringsnettsteder. For andre forretningsmodeller eller land kan tilleggs- eller andre dokumenter være nødvendig.

**Profesjonell rådgivning:**
For komplekse affiliate-strukturer, høye inntekter (>100 000 €/år) eller internasjonal virksomhet anbefaler vi alltid å konsultere en medie- eller internettadvokat.`
  }
];

const FAQNO = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ofte Stilte Spørsmål
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finn svar på de vanligste spørsmålene om juridiske dokumenter for affiliate-nettsteder
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <SafeMarkdown content={item.answer} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQNO;

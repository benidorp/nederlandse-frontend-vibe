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
    question: "Hvorfor juridiske dokumenter er vigtige for affiliate-sider",
    answer: `Som affiliate-markedsfører er du juridisk forpligtet til at være transparent om din forretningsmodel og hvordan du håndterer besøgsdata. Uden korrekte juridiske dokumenter risikerer du:
    
• Høje bøder fra tilsynsmyndigheder som datatilsynsmyndigheder - op til 20 millioner euro eller 4% af årlig omsætning
• Krav fra forbrugere for vildledende information
• Fjernelse fra affiliate-netværk som Google AdSense
• Omdømmeskade og tab af tillid fra dit publikum

De vigtigste love, du skal overholde, er GDPR, ePrivacy-direktivet og regler omkring transparent affiliate-markedsføring som FTC-retningslinjer. Med de rigtige dokumenter beskytter du dig selv og bygger tillid hos dine besøgende.`
  },
  {
    question: "Sådan integrerer du disse dokumenter på din side (footer, per indlæg, nær links)",
    answer: `Placering af juridiske dokumenter er afgørende for overholdelse og brugervenlighed.

**Footer-placering (obligatorisk):**
Placer links til alle dine juridiske dokumenter i footeren på hver side:
• Privatlivspolitik
• Vilkår og Betingelser  
• Cookiepolitik
• Ansvarsfraskrivelse
• Affiliate-oplysning

**Per artikel/indlæg:**
For produktanmeldelser og artikler med affiliate-links:
• Kort oplysning i begyndelsen af artiklen (første 150 ord)
• Tydelig markering af affiliate-links, for eksempel: [ANNONCE] eller [affiliate-link]
• Link til fuld oplysning i bunden af artiklen

**Nær affiliate-links:**
• Brug en forkortelse som * eller [ANNONCE] direkte ved siden af linket
• Tilføj en tooltip ved hover med "affiliate-link"
• I produktbokse: lille ansvarsfraskrivelse i bunden

**Bedste praksis:**
• Brug kontrasterende farver, så oplysninger skiller sig ud
• Gør teksten forståelig for ikke-juridisk publikum
• Mobilvenlig - synlig uden scrolling
• Brug ikoner til hurtig genkendelse

**Teknisk implementering:**
Vores implementeringsguide indeholder kodeeksempler til WordPress, Shopify, Webflow og HTML-hjemmesider, inklusive CSS-stileksempler.`
  },
  {
    question: "Ofte Stillede Spørgsmål (FAQ)",
    answer: `**Er disse skabeloner gyldige i hele Europa?**
Ja, vores skabeloner opfylder GDPR, der gælder i alle EU-lande. Nogle lande har yderligere regler - dette er nævnt i skabelonerne.

**Skal jeg konsultere en advokat?**
Vores skabeloner er juridisk gennemgået, men enhver virksomhed er unik. For komplekse situationer anbefaler vi altid at søge juridisk rådgivning.

**Kan jeg bruge disse skabeloner til flere hjemmesider?**
Ja! Med købet får du en ubegrænset licens til alle dine egne affiliate-hjemmesider.

**Hvad hvis jeg også sælger produkter, ikke kun affiliate-links?**
Så har du brug for yderligere dokumenter som Fortrydelsesret og Leveringspolitik. Kontakt os for en tilpasset pakke.

**Hvor ofte skal jeg opdatere mine dokumenter?**
Mindst én gang om året, men også når du tilføjer nye værktøjer, eller lovgivningen ændres.

**Beskytter disse dokumenter mig mod alle juridiske krav?**
Ingen dokumenter tilbyder 100% beskyttelse, men gode juridiske dokumenter minimerer dine risici betydeligt og viser, at du handler omhyggeligt.

**Skal jeg købe cookie-banneret separat?**
Vores pakke indeholder cookiepolitikken (tekst), men for det tekniske cookie-banner anbefaler vi værktøjer som Cookiebot eller CookieYes.

**På hvilke sprog er skabelonerne tilgængelige?**
Skabelonerne kan downloades på flere sprog til international brug, så du kan bruge dem på alle dine hjemmesider verden over.`
  },
  {
    question: "Juridiske ansvarsfraskrivelser og forpligtelser",
    answer: `**Vigtig ansvarsfraskrivelse:**

Disse dokumentskabeloner er omhyggeligt forberedt og gennemgået, men fungerer som et udgangspunkt for din juridiske overholdelse. Legal Affiliate Agreement yder ikke juridisk rådgivning og er ikke ansvarlig for skader, der opstår ved brug af disse skabeloner.

**Ansvarsbegrænsning:**
• Skabelonerne er generelle og passer måske ikke til enhver specifik situation
• Lovgivning kan ændres efter publicering af skabeloner
• Korrekt implementering og tilpasning er dit ansvar
• Ved tvivl, konsulter altid en specialiseret advokat

**Hvad vi ikke er:**
• Et advokatfirma
• Ansvarlige for bøder eller krav, der opstår ved forkert brug
• Ansvarlige for ændringer, du foretager
• En erstatning for professionel juridisk rådgivning i komplekse sager

**Hvad vi tilbyder:**
• Professionelt forberedte skabeloner som et solidt grundlag
• Regelmæssige opdateringer ved større lovændringer
• Klare implementeringsinstruktioner
• E-mail-support til spørgsmål om skabelonerne

**Brugsvilkår:**
Ved at bruge disse skabeloner accepterer du vores vilkår og ansvarsfraskrivelse. Du anerkender, at juridisk overholdelse forbliver dit eget ansvar.

**Egnethed:**
Disse skabeloner er specifikt udviklet til affiliate-markedsføringshjemmesider. For andre forretningsmodeller eller lande kan yderligere eller andre dokumenter være nødvendige.

**Professionel rådgivning:**
For komplekse affiliate-strukturer, høje indtægter (>100.000 €/år) eller international virksomhed anbefaler vi altid at konsultere en medie- eller internetadvokat.`
  }
];

const FAQDA = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ofte Stillede Spørgsmål
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find svar på de mest almindelige spørgsmål om juridiske dokumenter til affiliate-hjemmesider
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

export default FAQDA;

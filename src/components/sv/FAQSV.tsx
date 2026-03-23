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
    question: "Varför juridiska dokument är viktiga för affiliate-sajter",
    answer: `Som affiliate-marknadsförare är du juridiskt skyldig att vara transparent om din affärsmodell och hur du hanterar besökardata. Utan korrekta juridiska dokument riskerar du:
    
• Höga böter från tillsynsmyndigheter som dataskyddsmyndigheter - upp till 20 miljoner euro eller 4% av årsomsättningen
• Krav från konsumenter för vilseledande information
• Borttagning från affiliate-nätverk som Google AdSense
• Rykteskada och förlorat förtroende från din publik

De viktigaste lagarna du måste följa är GDPR, ePrivacy-direktivet och regler kring transparent affiliate-marknadsföring som FTC-riktlinjer. Med rätt dokument skyddar du dig själv och bygger förtroende hos dina besökare.`
  },
  {
    question: "Hur du integrerar dessa dokument på din sajt (footer, per inlägg, nära länkar)",
    answer: `Placeringen av juridiska dokument är avgörande för efterlevnad och användarvänlighet.

**Footer-placering (obligatorisk):**
Placera länkar till alla dina juridiska dokument i footern på varje sida:
• Integritetspolicy
• Villkor  
• Cookiepolicy
• Ansvarsfriskrivning
• Affiliate-upplysning

**Per artikel/inlägg:**
För produktrecensioner och artiklar med affiliate-länkar:
• Kort upplysning i början av artikeln (första 150 orden)
• Tydlig markering av affiliate-länkar, till exempel: [ANNONS] eller [affiliate-länk]
• Länk till fullständig upplysning längst ner i artikeln

**Nära affiliate-länkar:**
• Använd en förkortning som * eller [ANNONS] direkt bredvid länken
• Lägg till en tooltip vid hover med "affiliate-länk"
• I produktboxar: liten ansvarsfriskrivning längst ner

**Bästa praxis:**
• Använd kontrasterande färger så att upplysningar sticker ut
• Gör texten förståelig för icke-juridisk publik
• Mobilvänligt - synligt utan scrollning
• Använd ikoner för snabb igenkänning

**Teknisk implementering:**
Vår implementeringsguide innehåller kodexempel för WordPress, Shopify, Webflow och HTML-webbplatser, inklusive CSS-stilexempel.`
  },
  {
    question: "Vanliga Frågor (FAQ)",
    answer: `**Är dessa mallar giltiga i hela Europa?**
Ja, våra mallar uppfyller GDPR som gäller i alla EU-länder. Vissa länder har ytterligare regler - detta nämns i mallarna.

**Behöver jag anlita en advokat?**
Våra mallar är juridiskt granskade, men varje verksamhet är unik. För komplexa situationer rekommenderar vi alltid att söka juridisk rådgivning.

**Kan jag använda dessa mallar för flera webbplatser?**
Ja! Med köpet får du en obegränsad licens för alla dina egna affiliate-webbplatser.

**Vad händer om jag också säljer produkter, inte bara affiliate-länkar?**
Då behöver du ytterligare dokument som Ångerrätt och Leveranspolicy. Kontakta oss för ett anpassat paket.

**Hur ofta ska jag uppdatera mina dokument?**
Minst en gång per år, men även när du lägger till nya verktyg eller lagstiftning ändras.

**Skyddar dessa dokument mig mot alla juridiska krav?**
Inget dokument erbjuder 100% skydd, men bra juridiska dokument minimerar avsevärt dina risker och visar att du agerar omsorgsfullt.

**Behöver jag köpa cookie-bannern separat?**
Vårt paket innehåller cookiepolicyn (text), men för den tekniska cookie-bannern rekommenderar vi verktyg som Cookiebot eller CookieYes.

**På vilka språk finns mallarna tillgängliga?**
Mallarna kan laddas ner på flera språk för internationell användning, så du kan använda dem på alla dina webbplatser världen över.`
  },
  {
    question: "Juridiska ansvarsfriskrivningar och ansvar",
    answer: `**Viktig ansvarsfriskrivning:**

Dessa dokumentmallar har noggrant förberetts och granskats, men fungerar som en utgångspunkt för din juridiska efterlevnad. Legal Affiliate Agreement tillhandahåller inte juridisk rådgivning och ansvarar inte för skador som uppstår vid användning av dessa mallar.

**Ansvarsbegränsning:**
• Mallarna är generella och passar kanske inte för varje specifik situation
• Lagstiftning kan ändras efter publicering av mallar
• Korrekt implementering och anpassning är ditt ansvar
• Vid tvivel, konsultera alltid en specialiserad advokat

**Vad vi inte är:**
• En advokatbyrå
• Ansvariga för böter eller krav som uppstår vid felaktig användning
• Ansvariga för ändringar du gör
• En ersättning för professionell juridisk rådgivning i komplexa fall

**Vad vi erbjuder:**
• Professionellt förberedda mallar som en solid grund
• Regelbundna uppdateringar vid större lagändringar
• Tydliga implementeringsinstruktioner
• E-postsupport för frågor om mallarna

**Användarvillkor:**
Genom att använda dessa mallar godkänner du våra villkor och ansvarsfriskrivning. Du bekräftar att juridisk efterlevnad förblir ditt eget ansvar.

**Lämplighet:**
Dessa mallar är specifikt utvecklade för affiliate-marknadsföringswebbplatser. För andra affärsmodeller eller länder kan ytterligare eller andra dokument krävas.

**Professionell rådgivning:**
För komplexa affiliate-strukturer, höga intäkter (>100 000 €/år) eller internationell verksamhet rekommenderar vi alltid att konsultera en media- eller internetjurist.`
  }
];

const FAQSV = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vanliga Frågor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hitta svar på de vanligaste frågorna om juridiska dokument för affiliate-webbplatser
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

export default FAQSV;

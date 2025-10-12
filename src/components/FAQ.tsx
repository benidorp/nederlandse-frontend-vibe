import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Waarom juridische documenten belangrijk zijn voor affiliate sites",
    answer: `Als affiliate marketeer ben je wettelijk verplicht om transparant te zijn over je verdienmodel en hoe je omgaat met gegevens van bezoekers. Zonder de juiste juridische documenten loop je risico op:
    
• Hoge boetes van toezichthouders zoals de Autoriteit Persoonsgegevens (AP) - tot €20 miljoen of 4% van de jaaromzet
• Claims van consumenten bij misleidende informatie
• Verwijdering uit affiliate netwerken zoals Google AdSense
• Reputatieschade en verlies van vertrouwen bij je publiek

De belangrijkste wetgeving waar je aan moet voldoen is de AVG (GDPR), de ePrivacy-richtlijn, en de regelgeving rondom transparante affiliate marketing zoals de FTC-richtlijnen. Met de juiste documenten bescherm je jezelf én bouw je vertrouwen op bij je bezoekers.`
  },
  {
    question: "Privacyverklaring voor affiliate websites (gegevens, tracking, cookies)",
    answer: `Een privacyverklaring is verplicht onder de AVG zodra je persoonsgegevens verzamelt. Voor affiliate sites betekent dit meestal:

**Welke gegevens worden verzameld:**
• IP-adressen via analytics tools (Google Analytics, Plausible, etc.)
• Cookiegegevens voor tracking en retargeting
• E-mailadressen bij nieuwsbriefinschrijvingen
• Klikgedrag via affiliate links

**Doel van gegevensverzameling:**
• Websiteverkeer analyseren en optimaliseren
• Affiliate conversies tracken voor commissie-uitbetaling
• Gepersonaliseerde content en advertenties tonen
• Nieuwsbriefs versturen (met toestemming)

**Rechten van bezoekers:**
Je moet duidelijk maken dat bezoekers recht hebben op inzage, correctie, verwijdering en bezwaar tegen de verwerking van hun gegevens. Ook moet je een contactpersoon/DPO aanwijzen voor privacyvragen.

**Gegevensdeling:**
Vermelding van alle derde partijen waarmee data wordt gedeeld, zoals affiliate netwerken, analytics providers, en advertentieplatforms.`
  },
  {
    question: "Affiliate Disclosure / openbaarmaking (commissie, relaties)",
    answer: `Een affiliate disclosure is essentieel voor transparantie en juridische compliance. De FTC (Federal Trade Commission) en vergelijkbare EU-instanties eisen dat je duidelijk maakt wanneer je commissies verdient.

**Wat moet je vermelden:**
• Dat je commissie ontvangt bij aankopen via jouw links
• Dat dit geen invloed heeft op de prijs voor de klant
• Dat je producten eerlijk en onafhankelijk beoordeelt
• Specifieke relaties met bedrijven (sponsoring, partnerships)

**Waar plaats je de disclosure:**
• Direct zichtbaar aan het begin van elke artikel/review
• Dicht bij affiliate links (binnen één schermhoogte)
• In de footer van je website met link naar volledige disclosure
• In nieuwsbriefs waar je affiliate links deelt

**Voorbeeldtekst:**
"Deze pagina bevat affiliate links. Wanneer je via onze links een aankoop doet, ontvangen wij mogelijk een commissie zonder extra kosten voor jou. Dit helpt ons om deze website te onderhouden. Wij bevelen alleen producten aan die we zelf zouden gebruiken."

De disclosure moet opvallen, begrijpelijk zijn, en niet verborgen zitten in de kleine lettertjes.`
  },
  {
    question: "Cookiebeleid & toestemmingen (voor EU / AVG)",
    answer: `De ePrivacy-richtlijn en AVG vereisen expliciete toestemming voor het plaatsen van niet-essentiële cookies. Dit is bijzonder belangrijk voor affiliate sites die tracking gebruiken.

**Soorten cookies:**

*Essentiële cookies* (geen toestemming vereist):
• Sessiecookies voor inlogfunctionaliteit
• Beveiligingscookies
• Cookievoorkeuren opslaan

*Niet-essentiële cookies* (toestemming vereist):
• Analytics cookies (Google Analytics, Facebook Pixel)
• Affiliate tracking cookies
• Advertentiecookies voor retargeting
• Social media cookies

**Cookiebanner vereisten:**
• Moet verschijnen vóórdat cookies worden geplaatst
• Duidelijke optie om te accepteren of weigeren
• Geen "cookie walls" - toegang tot site mag niet geblokkeerd worden
• Mogelijkheid om later voorkeuren te wijzigen
• Gedetailleerde informatie over elk cookietype

**Aanbevolen tools:**
• Cookiebot (compliance scanner + banner)
• OneTrust
• CookieYes
• Complianz (WordPress plugin)

Je cookiebeleid moet regelmatig geüpdatet worden wanneer je nieuwe tracking tools of affiliate netwerken toevoegt.`
  },
  {
    question: "Template-voorbeelden en downloadopties",
    answer: `Onze juridische documentenpakketten bevatten volledig aanpasbare templates die specifiek zijn ontwikkeld voor affiliate websites.

**Wat zit er in het pakket:**
• Privacyverklaring template (MS Word + Google Docs)
• Affiliate Disclosure template (HTML + tekst)
• Cookiebeleid template met tabel
• Algemene Voorwaarden template
• Disclaimer template
• Implementatiegids met stap-voor-stap instructies

**Aanpassingsmogelijkheden:**
Alle templates zijn opgesteld in eenvoudig Nederlands en bevatten [VELDEN] die je moet vervangen met je eigen gegevens zoals bedrijfsnaam, contactgegevens, en specifieke affiliate programma's.

**Formaten:**
• Microsoft Word (.docx) - volledig bewerkbaar
• PDF - voor referentie
• HTML - klaar voor direct gebruik op je website
• Markdown - voor CMS systemen

**Updates:**
Bij aanschaf krijg je voor één jaar gratis toegang tot updates wanneer wetgeving wijzigt. Daarna kun je kiezen voor een verlengingsoptie.`
  },
  {
    question: "Hoe integreer je deze documenten op je site (footer, per post, dicht bij links)",
    answer: `De plaatsing van juridische documenten is cruciaal voor compliance én gebruiksvriendelijkheid.

**Footer plaatsing (verplicht):**
Plaats links naar al je juridische documenten in de footer van elke pagina:
• Privacyverklaring
• Algemene Voorwaarden  
• Cookiebeleid
• Disclaimer
• Affiliate Disclosure

**Per artikel/post:**
Bij productreviews en artikelen met affiliate links:
• Korte disclosure aan het begin van het artikel (eerste 150 woorden)
• Opvallende markering bij affiliate links, bijvoorbeeld: [AD] of [affiliate link]
• Link naar volledige disclosure onderaan artikel

**Dicht bij affiliate links:**
• Gebruik een afkorting zoals * of [AD] direct bij de link
• Voeg een tooltip toe bij hover met "affiliate link"
• In productboxen: klein disclaimertje onderaan

**Best practices:**
• Gebruik contrasterende kleuren zodat disclosures opvallen
• Maak tekst begrijpelijk voor niet-juridisch onderlegd publiek
• Mobile-vriendelijk - zichtbaar zonder scrollen
• Gebruik iconen voor snelle herkenning

**Technische implementatie:**
Onze implementatiegids bevat code snippets voor WordPress, Shopify, Webflow en HTML websites, inclusief CSS styling voorbeelden.`
  },
  {
    question: "Onderhoud & updates (wetgeving, wijzigingen)",
    answer: `Juridische documenten zijn geen "set and forget" - regelmatige updates zijn essentieel voor compliance.

**Wanneer moet je updaten:**

*Verplichte updates:*
• Bij wijzigingen in AVG/GDPR wetgeving
• Wanneer je nieuwe affiliate programma's toevoegt
• Bij toevoegen van nieuwe tracking tools of cookies
• Bij wijziging van je bedrijfsstructuur (bijv. KVK gegevens)
• Wanneer je nieuwe diensten aanbiedt (nieuwsbrief, webinars, etc.)

*Aanbevolen updates:*
• Jaarlijkse review van alle documenten
• Wanneer grote affiliate partners hun voorwaarden wijzigen
• Bij introductie van nieuwe AI-tools of technologieën
• Na privacy-incidenten in je sector

**Update proces:**
1. Review huidige documenten elk kwartaal
2. Check of nieuwe tools/partners zijn toegevoegd
3. Pas templates aan met nieuwe informatie
4. Update "laatste wijziging" datum
5. Informeer gebruikers bij grote wijzigingen (niet verplicht bij kleine updates)

**Onze support:**
• Jaar gratis updates bij wetgevingswijzigingen
• E-mail notificaties bij belangrijke wijzigingen
• Updated templates automatisch beschikbaar in je account
• Changelog met duidelijke uitleg van wijzigingen

**Archivering:**
Bewaar oude versies van je juridische documenten minimaal 7 jaar - dit kan belangrijk zijn bij eventuele geschillen.`
  },
  {
    question: "Veelgestelde vragen (FAQ)",
    answer: `**Zijn deze templates geldig in heel Europa?**
Ja, onze templates voldoen aan de AVG/GDPR die in alle EU-landen geldt. Sommige landen hebben aanvullende regels - dit wordt vermeld in de templates.

**Moet ik een advocaat raadplegen?**
Onze templates zijn juridisch gecheckt, maar elk bedrijf is uniek. Voor complexe situaties raden we altijd aan om juridisch advies in te winnen.

**Kan ik deze templates gebruiken voor meerdere websites?**
Ja! Bij aankoop krijg je een onbeperkte licentie voor al je eigen affiliate websites.

**Wat als ik ook producten verkoop, niet alleen affiliate links?**
Dan heb je aanvullende documenten nodig zoals Herroepingsrecht en Verzendbeleid. Neem contact op voor een op maat gemaakt pakket.

**Hoe vaak moet ik mijn documenten updaten?**
Minimaal 1x per jaar, maar ook wanneer je nieuwe tools toevoegt of wetgeving wijzigt.

**Beschermen deze documenten me tegen alle juridische claims?**
Geen enkel document biedt 100% bescherming, maar goede juridische documenten minimaliseren je risico's aanzienlijk en tonen aan dat je zorgvuldig handelt.

**Moet ik de cookiebanner apart aanschaffen?**
Ons pakket bevat het cookiebeleid (tekst), maar voor de technische cookiebanner raden we tools aan zoals Cookiebot of CookieYes.

**Kan ik de templates in het Engels gebruiken?**
Dit pakket is Nederlandstalig. Voor Engelstalige sites hebben we een apart pakket beschikbaar.`
  },
  {
    question: "Juridische disclaimers & aansprakelijkheden",
    answer: `**Belangrijke disclaimer:**

Deze documenttemplates zijn zorgvuldig opgesteld en gecontroleerd, maar dienen als startpunt voor je juridische compliance. Legal Affiliate Agreement geeft geen juridisch advies en is niet aansprakelijk voor schade voortvloeiend uit het gebruik van deze templates.

**Beperking van aansprakelijkheid:**
• Templates zijn algemeen en mogelijk niet geschikt voor elke specifieke situatie
• Wetgeving kan wijzigen na publicatie van templates
• Correcte implementatie en aanpassing is jouw verantwoordelijkheid
• Bij twijfel altijd een gespecialiseerde advocaat raadplegen

**Wat wij niet zijn:**
• Een advocatenkantoor
• Aansprakelijk voor boetes of claims die voortkomen uit incorrect gebruik
• Verantwoordelijk voor aanpassingen die jij aanbrengt
• Een vervanger voor professioneel juridisch advies in complexe zaken

**Wat wij wel bieden:**
• Professioneel opgestelde templates als solide basis
• Regelmatige updates bij grote wetgevingswijzigingen
• Duidelijke implementatie-instructies
• E-mail support voor vragen over de templates

**Gebruiksvoorwaarden:**
Door deze templates te gebruiken, ga je akkoord met onze algemene voorwaarden en disclaimer. Je erkent dat juridische compliance jouw eigen verantwoordelijkheid blijft.

**Geschiktheid:**
Deze templates zijn specifiek ontwikkeld voor affiliate marketingwebsites in Nederland en België. Voor andere bedrijfsmodellen of landen kunnen aanvullende of andere documenten nodig zijn.

**Professioneel advies:**
Bij complexe affiliate constructies, hoge omzetten (>€100.000/jaar), of internationale activiteiten raden we altijd aan om een media- of internetrechtadvocaat te raadplegen.`
  },
  {
    question: "Veelgestelde vragen over juridische documenten",
    answer: `Meest Gestelde Vragen over Juridische Documenten voor Affiliate Websites (2025) 🛡️

🔹 A. Algemeen – Juridische verplichtingen voor affiliate websites

### Welke juridische documenten zijn verplicht voor een affiliate website?
Affiliate websites hebben doorgaans een privacybeleid, cookiebeleid, disclaimer (affiliate disclosure) en algemene voorwaarden nodig om te voldoen aan privacywetgeving en consumentenbescherming.

### Waarom heb ik juridische documenten nodig voor mijn affiliate website?
Omdat je persoonsgegevens verzamelt, affiliate-links gebruikt en inkomsten genereert. Zonder deze documenten overtreed je vaak privacywetgeving zoals de AVG (EU) of CCPA (VS).

### Zijn juridische documenten verplicht als ik geen producten verkoop?
Ja, ook als je geen producten verkoopt maar affiliate-links gebruikt of bezoekersgegevens verzamelt (bijv. via Google Analytics), heb je een privacy- en cookiebeleid nodig.

### Wat gebeurt er als ik geen juridische documenten op mijn website plaats?
Je kunt boetes riskeren (zoals onder de AVG of CCPA), of aansprakelijk worden gesteld bij misleiding of privacyschending.

### Kan ik zelf juridische documenten schrijven voor mijn affiliate website?
Dat kan, maar het is af te raden tenzij je juridisch onderlegd bent. Het gebruik van professionele of op maat gemaakte sjablonen is aanbevolen.

🔹 B. Privacybeleid – Gegevensbescherming en AVG

### Is een privacybeleid verplicht voor affiliate websites?
Ja. Als je persoonsgegevens verzamelt (zoals IP-adressen, e-mails, cookies of analytische data), is een privacybeleid wettelijk verplicht.

### Wat moet er in een privacybeleid voor een affiliate website staan?
Onder meer: welke gegevens je verzamelt, waarom, hoe lang je ze bewaart, hoe bezoekers hun rechten kunnen uitoefenen, en of je data deelt met derden (zoals affiliate netwerken of Google).

### Hoe maak ik mijn affiliate privacybeleid AVG-conform?
Zorg dat het transparant, volledig en begrijpelijk is. Vermeld juridische grondslagen (zoals toestemming of gerechtvaardigd belang) en bied een contactpunt voor privacyverzoeken.

### Moet ik vermelden dat ik affiliate-links gebruik in mijn privacybeleid?
Ja, vermeld altijd dat externe partners via tracking cookies of pixels gegevens kunnen verzamelen voor analytische of commerciële doeleinden.

### Moet ik een DPO (Data Protection Officer) hebben als affiliate?
Niet verplicht, tenzij je grootschalig gegevens verwerkt. Wel moet je bereikbaar zijn voor privacyverzoeken via e-mail of contactformulier.

🔹 C. Cookiebeleid – Tracking en toestemming

### Heb ik een cookiebeleid nodig voor mijn affiliate website?
Ja, als je cookies of tracking gebruikt (zoals Google Analytics, Facebook Pixel, of affiliate tracking), ben je verplicht een cookiebeleid te publiceren.

### Wat moet ik in een cookiebeleid vermelden?
Welke cookies je gebruikt, hun doel, de bewaartermijn en hoe bezoekers cookies kunnen beheren of uitschakelen.

### Is een cookiebanner verplicht voor affiliate websites?
Ja, in de EU en UK is een cookie-banner verplicht vóórdat niet-essentiële cookies worden geplaatst.

### Wat is het verschil tussen essentiële en niet-essentiële cookies?
Essentiële cookies zijn nodig voor de werking van de website (zoals inloggen). Niet-essentiële cookies worden gebruikt voor analyse, advertenties of tracking.

### Hoe voldoe ik aan de AVG en ePrivacy-richtlijn met cookies?
Toon een duidelijke cookiebanner, vraag expliciete toestemming voor niet-essentiële cookies, en geef gebruikers controle over hun voorkeuren.

🔹 D. Disclaimer & Affiliate Disclosure – Transparantie en aansprakelijkheid

### Wat is een affiliate disclaimer?
Een korte verklaring waarin je aangeeft dat je een commissie ontvangt wanneer bezoekers via jouw links producten kopen.

### Is een affiliate disclaimer verplicht?
Ja. Zowel de FTC (VS) als de EU Consumentenrichtlijn eisen transparantie over commerciële samenwerkingen.

### Waar plaats ik mijn affiliate disclaimer?
Idealiter boven of onder content met affiliate-links, én in een aparte juridische pagina (zoals "Disclaimer" of "Affiliate Disclosure").

### Wat moet er in een goede affiliate disclaimer staan?
Dat je een vergoeding ontvangt via affiliate-links, dat dit geen extra kosten veroorzaakt voor de bezoeker, en dat men onafhankelijk blijft in aanbevelingen.

### Wat is het verschil tussen een disclaimer en affiliate disclosure?
De disclaimer beperkt jouw aansprakelijkheid, terwijl de affiliate disclosure verplicht is om transparantie te bieden over commerciële relaties.

🔹 E. Algemene Voorwaarden – Juridische basis van de website

### Heb ik algemene voorwaarden nodig voor mijn affiliate website?
Niet altijd wettelijk verplicht, maar sterk aanbevolen. Ze bepalen de regels voor websitegebruik, aansprakelijkheid en intellectueel eigendom.

### Wat moet er in algemene voorwaarden voor een affiliate site staan?
Onder meer: gebruiksregels, intellectuele eigendomsrechten, aansprakelijkheidsbeperkingen, vrijwaring, toepasselijk recht en contactgegevens.

### Kunnen algemene voorwaarden mij juridisch beschermen?
Ja. Ze beperken je aansprakelijkheid, verduidelijken verantwoordelijkheden, en voorkomen geschillen met gebruikers of adverteerders.

### Moet ik algemene voorwaarden laten goedkeuren door bezoekers?
Niet per se. Voor websites met aankopen of aanmeldingen is expliciete acceptatie aanbevolen (bijv. via een checkbox). Voor informatieve sites volstaat publicatie.

### Moet ik mijn juridische documenten vertalen voor internationale bezoekers?
Als je wereldwijd actief bent, is een Engelse versie sterk aanbevolen. Sommige landen eisen lokale taalversies (zoals Frankrijk of Brazilië).

✅ Extra tip:
Een affiliate website die voldoet aan internationale normen hoort de volgende documenten te bevatten:
• Privacybeleid (AVG/CCPA compliant)
• Cookiebeleid (met banner)
• Disclaimer + Affiliate Disclosure
• Algemene Voorwaarden`
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/30">Uitgebreide Informatie</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Alles wat je moet weten over juridische documenten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klik op de onderwerpen om meer te lezen over elk aspect van juridische compliance voor affiliate websites.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-primary/10 rounded-md px-3 py-1 shadow-sm hover:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left hover:text-primary text-sm font-medium py-2">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs leading-relaxed pt-1 pb-2">
                  <div 
                    className="whitespace-pre-line [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-3 [&_h3]:mb-1"
                    dangerouslySetInnerHTML={{ __html: item.answer.replace(/### (.*?)$/gm, '<h3>$1</h3>') }}
                  />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const legalDocuments = [
  {
    title: "Algemene Voorwaarden",
    content: `**Legal Affiliate Agreement - Algemene Voorwaarden**

Laatst bijgewerkt: ${new Date().toLocaleDateString('nl-NL')}

**1. Toepasselijkheid**
Deze algemene voorwaarden zijn van toepassing op alle diensten en producten aangeboden door Legal Affiliate Agreement.

**2. Gebruik van templates**
De aangeboden templates zijn bedoeld voor algemeen gebruik. Legal Affiliate Agreement geeft geen juridisch advies en raadt aan om bij complexe situaties professioneel juridisch advies in te winnen.

**3. Intellectueel eigendom**
Alle templates, content en materialen blijven eigendom van Legal Affiliate Agreement. Bij aankoop verkrijgen klanten een gebruikslicentie voor eigen websites.

**4. Aansprakelijkheid**
Legal Affiliate Agreement is niet aansprakelijk voor schade voortvloeiend uit het gebruik van templates. Correcte implementatie is de verantwoordelijkheid van de klant.

**5. Wijzigingen**
Wij behouden het recht om deze voorwaarden te wijzigen. Wijzigingen worden gecommuniceerd via email.

**6. Toepasselijk recht**
Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Nederland.`
  },
  {
    title: "Privacybeleid",
    content: `**Privacybeleid Legal Affiliate Agreement**

Laatst bijgewerkt: ${new Date().toLocaleDateString('nl-NL')}

Legal Affiliate Agreement respecteert uw privacy en handelt in overeenstemming met de AVG (GDPR).

**1. Welke gegevens verzamelen wij**
• Contactgegevens bij aanvragen (naam, email)
• Website gebruik data via analytics (geanonimiseerd)
• Cookies voor functionaliteit en analytics

**2. Doel van gegevensverzameling**
• Beantwoorden van vragen en aanvragen
• Verbeteren van onze website en diensten
• Verzenden van updates over producten (met toestemming)

**3. Gegevensdeling**
Wij verkopen of verhuren uw gegevens nooit aan derden. Gegevens worden alleen gedeeld met:
• Analytics providers (Google Analytics met IP-anonimisering)
• Email service providers voor nieuwsbrieven
• Payment processors voor betalingen

**4. Bewaartermijn**
• Contactgegevens: maximaal 2 jaar na laatste contact
• Analytics data: 26 maanden (Google Analytics standaard)
• Nieuwsbrief subscriptions: tot uitschrijving

**5. Uw rechten**
U heeft recht op:
• Inzage in uw persoonsgegevens
• Correctie van onjuiste gegevens
• Verwijdering van uw gegevens
• Bezwaar tegen verwerking
• Dataportabiliteit

**6. Cookies**
Wij gebruiken cookies voor:
• Essentiële website functionaliteit
• Analytics (met toestemming)
• Marketing (met toestemming)

Zie ons cookiebeleid voor details.

**7. Beveiliging**
Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen tegen ongeautoriseerde toegang.

**8. Contact**
Voor privacyvragen: privacy@legalaffiliateagreement.com

**9. Klachten**
U kunt een klacht indienen bij de Autoriteit Persoonsgegevens: www.autoriteitpersoonsgegevens.nl`
  },
  {
    title: "Disclaimer",
    content: `**Disclaimer Legal Affiliate Agreement**

**Algemene disclaimer**
De informatie op deze website is bedoeld voor algemene informatieve doeleinden. Legal Affiliate Agreement streeft naar accurate en actuele informatie, maar geeft geen garanties over de volledigheid, betrouwbaarheid of geschiktheid voor specifieke doeleinden.

**Geen juridisch advies**
Deze website en de aangeboden templates vormen geen juridisch advies. Voor juridische kwesties specifiek aan uw situatie raden wij aan om een gekwalificeerde advocaat te raadplegen.

**Affiliate disclosure**
Deze website kan affiliate links bevatten. Wanneer u via onze links een dienst afneemt of product koopt, kunnen wij een commissie ontvangen zonder extra kosten voor u. Dit beïnvloedt niet onze onafhankelijke meningen en aanbevelingen.

**Template gebruik**
De aangeboden templates zijn zorgvuldig opgesteld maar dienen als startpunt. Elke situatie is uniek en kan aanpassingen vereisen. Legal Affiliate Agreement is niet aansprakelijk voor schade voortvloeiend uit:
• Incorrect gebruik van templates
• Onvolledige aanpassingen
• Wijzigingen in wetgeving na publicatie
• Specifieke situaties die niet in templates worden gedekt

**Externe links**
Deze website bevat links naar externe websites. Legal Affiliate Agreement is niet verantwoordelijk voor de inhoud of privacy practices van deze externe sites.

**Wijzigingen**
Wij behouden het recht om de inhoud van deze website en disclaimer op elk moment te wijzigen zonder voorafgaande kennisgeving.

**Beperking aansprakelijkheid**
Legal Affiliate Agreement is niet aansprakelijk voor:
• Directe of indirecte schade
• Gederfde winst
• Verlies van data
• Boetes van toezichthouders

De maximale aansprakelijkheid is beperkt tot het bedrag betaald voor onze diensten.

**Intellectueel eigendom**
Alle content, templates en materialen zijn beschermd door auteursrecht. Ongeautoriseerd gebruik is verboden.

**Geschillen**
Op eventuele geschillen is Nederlands recht van toepassing.

**Contact**
Voor vragen over deze disclaimer: info@legalaffiliateagreement.com`
  }
];

const LegalFooter = () => {
  return (
    <div className="border-t border-border/50 pt-8 mt-8">
      <h4 className="text-sm font-semibold mb-4 text-foreground">Juridische Informatie</h4>
      <Accordion type="single" collapsible className="space-y-2">
        {legalDocuments.map((doc, index) => (
          <AccordionItem 
            key={index} 
            value={`legal-${index}`}
            className="border border-border/50 rounded-md px-4 bg-card/50"
          >
            <AccordionTrigger className="text-sm hover:text-primary py-3">
              {doc.title}
            </AccordionTrigger>
            <AccordionContent className="text-xs text-muted-foreground whitespace-pre-line leading-relaxed pb-4">
              {doc.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default LegalFooter;

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import jsPDF from "jspdf";
const legalDocuments = [{
  title: "Algemene Voorwaarden",
  content: `**ALGEMENE VOORWAARDEN – IAEE.EU**

**1. Overeenkomst met de voorwaarden**

Welkom bij IAEE.EU ("wij", "ons", "onze" of "de Website"). Door onze website te bezoeken of gebruiken, gaat u ("Gebruiker", "Klant", "U") akkoord met deze Algemene Voorwaarden ("Voorwaarden").

Deze Voorwaarden zijn wereldwijd van toepassing, inclusief voor gebruikers in de Europese Unie (EU), de Verenigde Staten (VS), het Verenigd Koninkrijk, Canada, Australië, Brazilië en andere rechtsgebieden.

Indien u niet akkoord gaat met deze Voorwaarden, dient u het gebruik van de website en onze diensten onmiddellijk te staken.

**2. Aard van de diensten**

IAEE.EU biedt toegang tot juridische documenten, sjablonen en verwante producten, waaronder:

• contracten en overeenkomsten
• beleidsdocumenten
• vrijwaringen
• algemene juridische sjablonen

Onze documenten worden uitsluitend aangeboden ter informatie en educatie en vormen geen juridisch advies.

**3. Geen juridisch advies of advocaat-cliëntrelatie**

IAEE.EU is geen advocatenkantoor en biedt geen juridische vertegenwoordiging of advies. Het gebruik van onze documenten of diensten creëert geen advocaat-cliëntrelatie.

Onze producten zijn bedoeld als algemene voorbeelden. Ze kunnen aanpassing vereisen om te voldoen aan lokale wetgeving of uw specifieke situatie. Wij adviseren u altijd een gekwalificeerde advocaat te raadplegen voordat u documenten gebruikt voor commerciële of juridische doeleinden.

**4. Gebruik van documenten**

Door documenten van IAEE.EU te kopen, downloaden of gebruiken, gaat u akkoord met het volgende:

• De documenten niet als juridisch advies te presenteren of door te verkopen.
• IAEE.EU niet aansprakelijk te houden voor het gebruik, de interpretatie of toepassing van de documenten.
• De documenten alleen te gebruiken binnen het toepasselijke rechtsgebied en met inachtneming van lokale wetgeving.
• De documenten aan te passen aan uw specifieke juridische situatie.

**5. Geen garanties en uitsluiting van aansprakelijkheid**

Voor zover wettelijk toegestaan, worden alle diensten en documenten aangeboden "zoals ze zijn" en "zoals beschikbaar", zonder enige vorm van garantie.

Wij garanderen niet dat:
• onze documenten in elk rechtsgebied geldig of toepasbaar zijn;
• onze inhoud foutloos, volledig of actueel is;
• onze website ononderbroken of vrij van technische problemen functioneert.

IAEE.EU wijst alle aansprakelijkheid af voor schade die voortvloeit uit het gebruik van onze website of documenten, inclusief directe, indirecte, incidentele of gevolgschade.

**6. Beperking van aansprakelijkheid (wereldwijd, inclusief VS)**

Voor zover maximaal toegestaan door wetgeving:

• Wij zijn niet aansprakelijk voor directe, indirecte, bijzondere of punitieve schade, winstderving, verlies van data of reputatieschade.
• Onze totale aansprakelijkheid is beperkt tot het bedrag dat u daadwerkelijk heeft betaald voor de betrokken dienst of het document.

Voor gebruikers in de Verenigde Staten:
• Wij wijzen alle impliciete garanties af, inclusief die van verhandelbaarheid of geschiktheid voor een bepaald doel.
• Indien de uitsluiting van aansprakelijkheid niet volledig wettelijk is toegestaan, is onze aansprakelijkheid beperkt tot het minimale niveau dat door de toepasselijke wet is toegestaan.

**7. Verantwoordelijkheid van de gebruiker**

U bent zelf volledig verantwoordelijk voor:
• de manier waarop u onze documenten gebruikt of aanpast;
• naleving van de toepasselijke wetgeving in uw land of rechtsgebied;
• eventuele gevolgen of geschillen voortvloeiend uit het gebruik van onze documenten.

**8. Betalingen en restitutiebeleid**

• Betalingen verlopen via beveiligde externe betalingsverwerkers. IAEE.EU slaat geen betalingsgegevens op.
• Alle verkopen zijn definitief. Restituties worden niet verleend, tenzij dit wettelijk vereist is.
• Technische problemen moeten binnen 7 dagen na aankoop worden gemeld via ons ondersteuningsteam.

**9. Intellectuele eigendomsrechten**

Alle inhoud, documenten, teksten, lay-out en materialen op IAEE.EU zijn beschermd door auteursrecht en intellectuele eigendomswetten.

Het is verboden om onze documenten of inhoud te kopiëren, door te verkopen, te herdistribueren of openbaar te maken zonder schriftelijke toestemming. Schending van deze rechten kan leiden tot juridische stappen.

**10. Gegevensbescherming en privacy**

Wij verwerken persoonsgegevens in overeenstemming met internationale privacywetgeving, waaronder:
• AVG (EU)
• CCPA (VS)
• PIPEDA (Canada)
• LGPD (Brazilië)

Wij verkopen of delen uw persoonsgegevens niet met derden, behalve waar noodzakelijk voor de uitvoering van onze diensten. Door gebruik te maken van onze website gaat u akkoord met ons Privacybeleid, waarin wordt uitgelegd hoe wij gegevens verzamelen, opslaan en verwerken.

**11. Links en affiliates van derden**

Onze website kan links bevatten naar externe websites en affiliate-partners. Wij onderschrijven of controleren deze websites niet en zijn niet verantwoordelijk voor de inhoud, nauwkeurigheid, producten of diensten die daar worden aangeboden.

Eventuele aankopen via affiliate-links vallen onder de voorwaarden en het beleid van de betreffende externe aanbieder.

**12. Internationale naleving**

Onze diensten zijn wereldwijd toegankelijk, maar wij garanderen niet dat onze inhoud of documenten voldoen aan de wetgeving in elk land. U bent zelf verantwoordelijk om te controleren of het gebruik van onze diensten is toegestaan binnen uw rechtsgebied.

**13. Vrijwaring**

U stemt ermee in om IAEE.EU, haar eigenaren, medewerkers, partners en affiliates te vrijwaren en schadeloos te stellen tegen alle claims, verliezen, aansprakelijkheden, kosten of schade (inclusief redelijke advocaatkosten) die voortvloeien uit:
• uw gebruik of misbruik van onze documenten;
• schending van deze Voorwaarden;
• geschillen of claims voortvloeiend uit uw gebruik van onze diensten.

**14. Overmacht**

Wij zijn niet aansprakelijk voor vertragingen of tekortkomingen die voortvloeien uit omstandigheden buiten onze redelijke controle, zoals:
• natuurrampen, oorlog, stakingen of overheidsmaatregelen;
• cyberaanvallen of netwerkstoringen;
• storingen van externe leveranciers of betalingsverwerkers.

**15. Toepasselijk recht en geschillenbeslechting**

**Voor gebruikers buiten de VS:**
Op deze Voorwaarden is Nederlands recht van toepassing. Geschillen worden exclusief voorgelegd aan de bevoegde rechtbank te Nederland.

**Voor gebruikers in de VS:**
• Deze Voorwaarden vallen onder het recht van de staat Delaware, VS.
• Geschillen worden beslecht via bindende arbitrage conform de regels van de American Arbitration Association (AAA).
• U doet afstand van uw recht op juryrechtspraak of deelname aan collectieve rechtszaken.

**16. Scheidbaarheid**

Indien enige bepaling van deze Voorwaarden ongeldig of niet-afdwingbaar wordt verklaard, blijven de overige bepalingen volledig van kracht.

**17. Wijzigingen**

Wij behouden ons het recht voor deze Voorwaarden op elk moment te wijzigen. De meest recente versie wordt altijd gepubliceerd op onze website. Voortgezet gebruik van de website na publicatie van wijzigingen geldt als aanvaarding van de bijgewerkte Voorwaarden.

**18. Contact**

Voor vragen, opmerkingen of klachten over deze Voorwaarden kunt u contact met ons opnemen via:

E-mail: support@iaee.eu
Website: https://iaee.eu`
}, {
  title: "Privacybeleid",
  content: `**PRIVACYBELEID – IAEE.EU**

Welkom bij IAEE.EU ("de Website", "wij", "ons" of "onze"). Wij respecteren uw privacy en nemen de bescherming van uw persoonsgegevens uiterst serieus. Dit privacybeleid legt uit welke informatie wij verzamelen, hoe wij die gebruiken, opslaan en beveiligen, en welke rechten u heeft onder de internationale privacywetgeving.

Dit beleid geldt wereldwijd, inclusief gebruikers in de Europese Unie (EU), Verenigde Staten (VS), Verenigd Koninkrijk (VK), Canada, Australië, Brazilië, China, en andere rechtsgebieden met relevante privacywetgeving.

**1. INFORMATIE DIE WIJ VERZAMELEN**

**1.1. Informatie die u zelf verstrekt**

• Accountgegevens: naam, e-mailadres, wachtwoord, telefoonnummer.
• Facturatiegegevens: betaalmethode, factuuradres (verwerkt via externe betalingsproviders; wij slaan geen betalingsgegevens op).
• Communicatie: berichten, ondersteuningstickets, feedback.

**1.2. Automatisch verzamelde informatie**

• Technische gegevens: IP-adres, browsertype, apparaatgegevens, bezochte pagina's, datum/tijd.
• Cookies & tracking: gebruikt voor websitefunctionaliteit, analyse en marketing (zie ons Cookiebeleid).

**1.3. Informatie van derden**

Wij kunnen beperkte informatie ontvangen van:
• Betalingsverwerkers (zoals Stripe, PayPal)
• Analyseplatforms (zoals Google Analytics, Meta Pixel)

**2. HOE WIJ UW GEGEVENS GEBRUIKEN**

Wij verwerken persoonsgegevens uitsluitend voor legitieme zakelijke doeleinden, waaronder:

• Het leveren van digitale producten en juridische sjablonen.
• Het afhandelen van betalingen en facturen.
• Het verbeteren van onze website en klantenservice.
• Het versturen van serviceberichten of marketingcommunicatie (alleen met toestemming).
• Het naleven van wettelijke verplichtingen (bijv. belastingwetgeving of fraudepreventie).

Wij gebruiken uw gegevens niet voor geautomatiseerde besluitvorming of profiling die juridische gevolgen heeft.

**3. WETTELIJKE GRONDSLAGEN VOOR VERWERKING**

**Voor EU/EER & VK (AVG / UK GDPR)**

• Contractuele noodzaak – om diensten te leveren die u hebt aangeschaft.
• Gerechtvaardigd belang – beveiliging, bedrijfsvoering, fraudeonderzoek.
• Wettelijke verplichting – naleving van financiële en boekhoudregels.
• Toestemming – voor marketing of cookies.

**Voor VS (CCPA / CPRA)**

• Recht op inzage, correctie, verwijdering en beperking.
• Wij verkopen geen persoonsgegevens.
• Gebruikers kunnen verzoeken indienen via support@iaee.eu.

**Voor Brazilië (LGPD)**

• Wettelijke basis: toestemming, wettelijke noodzaak of gerechtvaardigd belang.
• Gebruikersrechten: toegang, correctie, anonimisering, overdraagbaarheid.

**Voor China (PIPL)**

• Expliciete toestemming is vereist voor verwerking.
• Gegevens kunnen buiten China worden overgedragen onder naleving van PIPL.

**Voor Canada (PIPEDA)**

• Transparantie over gegevensverzameling.
• Toestemming vereist voor gevoelige gegevens.
• Gebruikers mogen inzage en correctie vragen.

**Voor Australië (Privacy Act)**

• Inzage- en correctierechten.
• Gegevensoverdracht toegestaan met passende beveiliging.

**4. UW PRIVACYRECHTEN**

Afhankelijk van uw rechtsgebied kunt u de volgende rechten uitoefenen:

• Toegang tot uw persoonsgegevens.
• Correctie van onjuiste gegevens.
• Verwijdering ("recht om vergeten te worden").
• Beperking of bezwaar tegen verwerking.
• Gegevensoverdraagbaarheid.
• Intrekking van toestemming.

Verzoeken kunnen worden ingediend via support@iaee.eu. Wij reageren binnen de wettelijke termijn van uw regio.

**5. GEGEVENSBEVEILIGING EN OPSLAG**

Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen:

• Versleutelde verbindingen (SSL/TLS).
• Firewall- en toegangsbeveiliging.
• Beperkte bewaarperiode (alleen zolang nodig voor het doel of wettelijk vereist).
• Betalingsinformatie wordt uitsluitend verwerkt door PCI-DSS-gecertificeerde providers.

**6. GEGEVENSDELING**

Wij delen geen persoonsgegevens met derden, behalve:

• Dienstverleners die namens ons werken (hosting, betalingen, analyses).
• Overheden of toezichthouders wanneer wettelijk verplicht.
• Zakelijke transacties (zoals fusies of overnames, met passende bescherming).

Wij verkopen uw persoonsgegevens nooit.

**7. COOKIES EN TRACKING**

Wij gebruiken cookies en soortgelijke technologieën voor:

• Websitefunctionaliteit en gebruikerservaring.
• Statistische analyse en marketingoptimalisatie.
• Veiligheid en fraudepreventie.

Meer informatie vindt u in ons Cookiebeleid. U kunt cookies beheren via uw browserinstellingen of onze cookietool.

**8. INTERNATIONALE GEGEVENSOVERDRACHT**

Gegevens kunnen worden opgeslagen of verwerkt buiten uw land. Wij gebruiken EU-standaardcontractbepalingen (SCC's) en vergelijkbare mechanismen om te zorgen voor een gelijkwaardig beschermingsniveau.

**9. VRIJWARING EN BEPERKING VAN AANSPRAKELIJKHEID**

De website IAEE.EU levert juridische sjablonen en documenten uitsluitend ter educatie en informatie. Wij verlenen geen juridisch advies en aanvaarden geen aansprakelijkheid voor:

• Onjuist gebruik van documenten of informatie.
• Fouten, onnauwkeurigheden of verouderde inhoud.
• Schade of verlies voortvloeiend uit het gebruik van onze website of diensten.

Gebruik van de website geschiedt volledig op eigen risico.

**10. WIJZIGINGEN IN DIT BELEID**

Wij kunnen dit privacybeleid van tijd tot tijd bijwerken. Wijzigingen worden op deze pagina gepubliceerd. Bij substantiële aanpassingen informeren wij gebruikers per e-mail.

**11. CONTACTGEGEVENS**

Voor vragen, klachten of verzoeken met betrekking tot dit privacybeleid kunt u contact opnemen via:

E-mail: support@iaee.eu
Website: https://iaee.eu`
}, {
  title: "Disclaimer",
  content: `**DISCLAIMER – IAEE.EU / LEGAL AFFILIATE AGREEMENT**

**1. Inleiding**

Welkom bij IAEE.EU ("wij", "ons", "onze" of "de Website").
Deze Disclaimer is van toepassing op al het gebruik van onze website, diensten en gelieerde platforms onder de naam Legal Affiliate Agreement. Door onze website te bezoeken of te gebruiken, stemt u in met deze disclaimer en de voorwaarden hierin vermeld.

IAEE.EU biedt toegang tot juridische documenten, sjablonen en informatie, vaak via samenwerkingen met externe leveranciers en affiliate-partners. Wij streven naar correcte, actuele en betrouwbare informatie, maar kunnen de volledigheid of geschiktheid daarvan niet garanderen.

**2. Geen juridisch advies**

De inhoud van deze website – inclusief alle juridische documenten, templates, handleidingen en informatie – vormt geen juridisch advies.
Alle informatie is uitsluitend bedoeld voor algemene informatieve en educatieve doeleinden.

Voor advies dat specifiek is afgestemd op uw persoonlijke of zakelijke situatie, dient u altijd een gekwalificeerde jurist of advocaat te raadplegen in uw rechtsgebied.

**3. Gebruik van templates en documenten**

De aangeboden juridische templates en documenten zijn ontwikkeld als algemene voorbeeldmodellen.
Hoewel deze zorgvuldig zijn opgesteld, kunnen ze niet garanderen dat ze volledig of toepasselijk zijn in uw specifieke situatie.

U bent zelf verantwoordelijk voor:
• het correct aanpassen van de templates aan uw behoeften;
• het naleven van relevante wet- en regelgeving;
• het verifiëren van juridische juistheid bij gebruik in uw rechtsgebied.

IAEE.EU en Legal Affiliate Agreement aanvaarden geen aansprakelijkheid voor:
• onjuist of onvolledig gebruik van de documenten;
• fouten of omissies in de inhoud;
• veranderingen in wetgeving na publicatie;
• schade of verlies (direct of indirect) voortvloeiend uit het gebruik van de materialen.

**4. Affiliate disclosure**

Onze website kan affiliate links bevatten. Dit betekent dat wij een commissie kunnen ontvangen wanneer u via een link op onze website een product of dienst aanschaft bij een externe partij.
Deze commissies brengen geen extra kosten voor u met zich mee en beïnvloeden niet onze onafhankelijke redactionele keuzes of aanbevelingen.

Wij zijn echter niet verantwoordelijk voor de kwaliteit, beschikbaarheid of juistheid van producten en diensten van derden. Alle transacties via affiliate-links vallen onder de voorwaarden en privacybeleid van de betreffende externe aanbieder.

**5. Externe websites en links**

Onze website kan verwijzingen of links bevatten naar websites van derden. Deze links worden uitsluitend ter informatie aangeboden.
Wij hebben geen controle over de inhoud, nauwkeurigheid of beveiliging van deze externe websites en aanvaarden geen enkele aansprakelijkheid voor schade of verlies als gevolg van uw gebruik ervan.

**6. Intellectueel eigendom**

Alle inhoud op deze website – waaronder teksten, logo's, lay-out, juridische templates, documenten en grafisch materiaal – is beschermd door auteursrecht en intellectuele eigendomsrechten.

Het is niet toegestaan om materiaal van deze website te kopiëren, te verspreiden, te publiceren, te verkopen of te hergebruiken zonder voorafgaande schriftelijke toestemming van IAEE.EU of Legal Affiliate Agreement.

**7. Beperking van aansprakelijkheid**

Voor zover toegestaan door toepasselijke wetgeving, is IAEE.EU / Legal Affiliate Agreement op geen enkele wijze aansprakelijk voor:
• directe of indirecte schade;
• winst- of inkomstenverlies;
• verlies van gegevens of reputatie;
• contractuele of buitencontractuele aansprakelijkheid;
• boetes of sancties van toezichthouders.

De totale aansprakelijkheid, indien wettelijk afdwingbaar, is beperkt tot het bedrag dat u daadwerkelijk heeft betaald voor onze diensten of producten.

Wij bieden onze informatie, documenten en producten aan "zoals ze zijn", zonder enige vorm van garantie, expliciet of impliciet.

**8. Geen garantie voor juistheid**

Hoewel wij redelijke inspanningen leveren om de inhoud actueel en correct te houden, kunnen fouten of onvolledigheden voorkomen.
Wij garanderen niet dat onze website of inhoud:
• foutloos of ononderbroken zal functioneren;
• vrij is van virussen of andere schadelijke componenten;
• of geschikt is voor specifieke juridische, zakelijke of persoonlijke doeleinden.

**9. Wijzigingen en updates**

Wij behouden ons het recht voor om deze Disclaimer, de inhoud van de website of onze diensten op elk moment en zonder voorafgaande kennisgeving te wijzigen.
De meest recente versie is altijd te raadplegen via https://iaee.eu.

**10. Toepasselijk recht en geschillen**

Op deze Disclaimer is Nederlands recht van toepassing.
Alle geschillen voortvloeiend uit of samenhangend met het gebruik van onze website zullen uitsluitend worden voorgelegd aan de bevoegde rechtbank in Nederland.

Voor gebruikers in de Verenigde Staten:
• Waar van toepassing zijn bepaalde aansprakelijkheidsbeperkingen mogelijk niet geldig in uw staat.
• Sommige rechtsgebieden staan geen volledige uitsluiting van aansprakelijkheid toe; in dat geval geldt onze aansprakelijkheid alleen voor zover wettelijk toegestaan.

**11. Contact**

Heeft u vragen of opmerkingen over deze disclaimer? Neem dan contact met ons op via:

E-mail: support@iaee.eu
Website: https://iaee.eu`
}, {
  title: "Cookiebeleid",
  content: `**COOKIEBELEID – IAEE.EU**

**1. Wat zijn cookies?**

Cookies zijn kleine tekstbestanden die op uw apparaat (computer, smartphone, tablet) worden geplaatst wanneer u onze website bezoekt. Deze bestanden helpen ons om uw voorkeuren te onthouden, uw gebruikservaring te verbeteren, de prestaties van de website te analyseren en marketinginspanningen te optimaliseren.

**2. Welke soorten cookies gebruiken wij?**

Wij gebruiken verschillende soorten cookies op IAEE.EU:

**2.1. Essentiële cookies (strikt noodzakelijk)**
Deze cookies zijn noodzakelijk voor de basisfunctionaliteit van de website.
• Voorbeelden: sessiecookies, beveiligingscookies, inloggegevens.
• U kunt deze niet weigeren; zonder deze cookies kan de website niet correct functioneren.

**2.2. Functionele cookies**
Deze cookies verbeteren uw gebruikservaring.
• Voorbeelden: taalvoorkeuren, regio-instellingen, eerdere bezoeken.

**2.3. Analytische cookies**
Wij gebruiken analytische cookies om te begrijpen hoe gebruikers de website gebruiken.
• Voorbeelden: Google Analytics, anonieme statistieken zoals paginaweergaven, klikgedrag en sessieduur.
• Deze cookies helpen ons om onze website te verbeteren en prestatieproblemen te identificeren.

**2.4. Marketing- en trackingcookies**
Deze cookies worden gebruikt voor gerichte advertenties en affiliate tracking.
• Voorbeelden: Meta Pixel, Google Ads-conversietracking, affiliate-campagnes.
• Deze cookies verzamelen gegevens over uw surfgedrag, maar bevatten geen persoonlijk identificeerbare informatie (PII), tenzij u zich vrijwillig aanmeldt.

**3. Cookies van derden**

Onze website kan cookies van externe partners bevatten:
• Betalingsverwerkers (zoals Stripe, PayPal) voor transactieafhandeling.
• Analytische platforms (Google Analytics, Meta Pixel) voor gegevensanalyse.
• Affiliate-partners en advertentienetwerken voor marketingdoeleinden.

Wij hebben geen controle over cookies van derden. Hun gebruik valt onder hun eigen privacybeleid en cookiebeleid.

**4. Uw cookievoorkeuren beheren**

U kunt cookies controleren en beheren via:

**4.1. Browserinstellingen**
De meeste browsers stellen u in staat om cookies te weigeren, te verwijderen of een melding te ontvangen voordat een cookie wordt geplaatst. Raadpleeg de handleiding van uw browser voor meer informatie.

Houd er rekening mee dat het weigeren van cookies invloed kan hebben op de functionaliteit en gebruikservaring van onze website.

**4.2. Opt-outtools**
Voor specifieke tracking- en analytische cookies kunt u zich afmelden via:
• Google Analytics Opt-out Browser Add-on: https://tools.google.com/dlpage/gaoptout
• Meta Pixel: beheer advertentievoorkeuren in uw Facebook-instellingen.

**5. Hoe lang blijven cookies bewaard?**

De bewaartermijn van cookies varieert:
• Sessiecookies: worden verwijderd wanneer u uw browser sluit.
• Permanente cookies: blijven op uw apparaat voor een bepaalde periode (variërend van enkele weken tot jaren), afhankelijk van het type en doel.

**6. Rechten van gebruikers**

Afhankelijk van uw locatie heeft u mogelijk rechten met betrekking tot cookies en gegevensverzameling:

**Voor EU/EER en VK (AVG / UK GDPR):**
• U heeft het recht om toestemming voor cookies te weigeren of in te trekken.
• U kunt vragen om opgeslagen gegevens in te zien, te corrigeren of te verwijderen.

**Voor VS (CCPA / CPRA):**
• U kunt zich afmelden voor de verkoop of het delen van persoonsgegevens (hoewel wij geen gegevens verkopen).
• U kunt de verwijdering van uw gegevens aanvragen.

**Voor andere rechtsgebieden:**
• Wij streven ernaar om te voldoen aan de lokale wetgeving inzake gegevensbescherming en cookies.

Neem contact met ons op via support@iaee.eu om uw rechten uit te oefenen.

**7. Wijzigingen in dit cookiebeleid**

Wij kunnen dit cookiebeleid van tijd tot tijd bijwerken om nieuwe technologieën of wettelijke vereisten weer te geven. De meest recente versie is altijd beschikbaar op onze website.

**8. Aansprakelijkheid en vrijwaring**

Wij zijn niet aansprakelijk voor technische storingen, datalekken of privacy-inbreuken als gevolg van cookies van derden. Het gebruik van cookies door externe partijen valt onder hun eigen beleid en verantwoordelijkheid.

**9. Internationale gebruikers**

Cookies kunnen informatie overdragen naar servers buiten uw land. Waar van toepassing gebruiken wij beschermingsmaatregelen zoals EU-standaardcontractbepalingen (SCC's) om een passend beschermingsniveau te waarborgen.

**10. Specifieke informatie voor cookiebanners en toestemming**

Bij uw eerste bezoek aan onze website kan een cookiebanner verschijnen waarin u wordt gevraagd om toestemming te geven voor niet-essentiële cookies. Uw keuze wordt onthouden voor toekomstige bezoeken.

U kunt uw voorkeuren op elk moment wijzigen via de browserinstellingen of de cookiebeheertool op onze website (indien beschikbaar).

**11. Contact**

Voor vragen over cookies, privacy of uw voorkeuren kunt u contact opnemen via:

E-mail: support@iaee.eu
Website: https://iaee.eu`
}];
const Footer = () => {
  const downloadPDF = (title: string, content: string) => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const maxLineWidth = pageWidth - margin * 2;
    
    // Clean up the content - remove markdown formatting
    const cleanContent = content
      .replace(/\*\*/g, '') // Remove bold markers
      .replace(/•/g, '-'); // Replace bullets with dashes
    
    // Add title
    doc.setFontSize(16);
    doc.text(title, margin, margin);
    
    // Add content
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(cleanContent, maxLineWidth);
    
    let y = margin + 10;
    lines.forEach((line: string) => {
      if (y > pageHeight - margin) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += 5;
    });
    
    // Download the PDF
    doc.save(`${title}.pdf`);
  };

  return <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Affiliate Agreement</h3>
            <p className="text-sm text-primary-foreground/80">
              Professionele juridische documenten voor affiliate websites. 
              Bescherm uw bedrijf met hoogwaardige juridische documentatie.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#over-mij" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Over Mij</a></li>
              <li><a href="#diensten" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Diensten</a></li>
              <li><a href="#prijzen" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Prijzen</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Juridische Informatie</h3>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {legalDocuments.map((doc, index) => <AccordionItem key={index} value={`legal-${index}`} className="bg-primary-foreground/10 border border-primary-foreground/20 rounded-md px-3 py-1">
                  <div className="flex items-center justify-between gap-2">
                    <AccordionTrigger className="text-xs text-primary-foreground hover:text-primary-foreground/80 py-2 text-left flex-1">
                      {doc.title}
                    </AccordionTrigger>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadPDF(doc.title, doc.content);
                      }}
                      className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10 h-7 px-2 shrink-0"
                      title="Download als PDF"
                    >
                      <Download className="h-3 w-3" />
                    </Button>
                  </div>
                  <AccordionContent className="text-xs text-primary-foreground/90 whitespace-pre-line leading-relaxed pb-3 pt-1 max-h-48 overflow-y-auto">
                    {doc.content}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-primary-foreground/80 mb-2">
              Voor vragen over onze juridische documenten,<br />
              neem gerust contact met ons op.
            </p>
            <a href="mailto:support@iaee.eu" className="text-sm text-primary-foreground hover:text-primary-foreground/80 transition-colors">
              support@iaee.eu
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Legal Affiliate Agreement. Alle rechten voorbehouden.
            </p>
            <a href="/es" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
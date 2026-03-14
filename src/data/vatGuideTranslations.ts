// VAT Guide Translations - Full 3300+ word SEO guide for all 42 languages
// Based on the Dutch benchmark (VATComprehensiveGuideNL)
import { guideIT } from "./vatGuide-it";
import { guidePT } from "./vatGuide-pt";
import { guidePL } from "./vatGuide-pl";
import { guideTR, guideSV, guideNO, guideDA, guideFI, guideIS } from "./vatGuide-nordic";
import { guideCS } from "./vatGuide-cs";
import { guideSK } from "./vatGuide-sk";
import { guideHR } from "./vatGuide-hr";
import { guideSR } from "./vatGuide-sr";
import { guideSL } from "./vatGuide-sl";
import { guideBS } from "./vatGuide-bs";
import { guideMK } from "./vatGuide-mk";
import { guideRU } from "./vatGuide-ru";
import { guideUK } from "./vatGuide-uk";
import { guideBG } from "./vatGuide-bg";
import { guideRO } from "./vatGuide-ro";
import { guideHU } from "./vatGuide-hu";
import { guideEL } from "./vatGuide-el";
import { guideKO } from "./vatGuide-ko";
import { guideAR } from "./vatGuide-ar";
import { guideHI } from "./vatGuide-hi";
import { guideJA } from "./vatGuide-ja";
import { guideZH } from "./vatGuide-zh";
import { guideTH } from "./vatGuide-th";
import { guideVI } from "./vatGuide-vi";
import { guideID } from "./vatGuide-id";
import { guideET } from "./vatGuide-et";

export interface VATGuideContent {
  badge: string;
  title: string;
  subtitle: string;
  sections: {
    s1Title: string;
    s1P1: string;
    s1P2: string;
    s1P3: string;
    s2Title: string;
    s2P1: string;
    s2P2: string;
    s2FormulaTitle: string;
    s2FormulaAdd: string;
    s2FormulaAddDesc: string;
    s2FormulaRemove: string;
    s2FormulaRemoveDesc: string;
    s2FormulaTip: string;
    s2P3: string;
    s3Title: string;
    s3P1: string;
    s3P2: string;
    s3P3: string;
    s3PhysicalTitle: string;
    s3PhysicalDesc: string;
    s3DigitalTitle: string;
    s3DigitalDesc: string;
    s3P4: string;
    s4Title: string;
    s4P1: string;
    s4P2: string;
    s4P3: string;
    s4P4: string;
    s5Title: string;
    s5P1: string;
    s5P2: string;
    s5P3: string;
    s5P4: string;
    s6Title: string;
    s6P1: string;
    s6P2: string;
    s6P3: string;
    s7Title: string;
    s7P1: string;
    s7P2: string;
    s7P3: string;
    s7P4: string;
    s8Title: string;
    s8P1: string;
    s8P2: string;
    s8P3: string;
    s9Title: string;
    s9P1: string;
    s9InvoiceTitle: string;
    s9InvoiceItems: string[];
    s9DeadlineTitle: string;
    s9DeadlineItems: string[];
    s9P2: string;
    s10Title: string;
    s10P1: string;
    s10UseCases: Array<{ term: string; desc: string }>;
    s11Title: string;
    s11P1: string;
    s11P2: string;
    s11P3: string;
  };
}

// ═══════════════════════════════════════════
// DUTCH (NL) - BENCHMARK
// ═══════════════════════════════════════════
const guideNL: VATGuideContent = {
  badge: "Uitgebreide BTW Gids 2025-2026",
  title: "De Ultieme Gids voor Internationaal BTW Berekenen",
  subtitle: "Alles wat je moet weten over BTW berekenen voor webshops, freelancers, SaaS-bedrijven en internationale handel — actueel, betrouwbaar en gebaseerd op jarenlange praktijkervaring.",
  sections: {
    s1Title: "Wat is BTW en waarom is correct berekenen essentieel?",
    s1P1: "BTW staat voor Belasting over de Toegevoegde Waarde en is een consumptiebelasting die wordt geheven op goederen en diensten in meer dan 170 landen wereldwijd. In het Engels wordt dit VAT (Value Added Tax) genoemd, terwijl sommige landen de term GST (Goods and Services Tax) gebruiken. Hoewel de namen verschillen, is het onderliggende systeem in de kern hetzelfde: belasting wordt in elke schakel van de productie- en distributieketen toegevoegd.",
    s1P2: "Voor ondernemers, freelancers en bedrijven die internationaal opereren is het correct berekenen van BTW niet alleen een wettelijke verplichting, maar ook een strategische noodzaak. Fouten in BTW-berekeningen kunnen leiden tot naheffingen, boetes en administratieve problemen met belastingdiensten in meerdere landen. Onze gratis internationale BTW-calculator helpt je om deze risico's te vermijden door nauwkeurige berekeningen te bieden op basis van actuele tarieven.",
    s1P3: "Of je nu een webshop runt die producten verzendt naar klanten in heel Europa, een SaaS-platform aanbiedt aan gebruikers wereldwijd, of als freelancer diensten levert aan internationale klanten — het correct toepassen van BTW-tarieven is fundamenteel voor een gezonde bedrijfsvoering. Deze gids helpt je om de complexiteit van internationale BTW te doorgronden en geeft je praktische handvatten om fouten te voorkomen.",
    s2Title: "Hoe werkt het BTW-systeem wereldwijd?",
    s2P1: "Het BTW-systeem is uniek omdat het in elke schakel van de waardeketen wordt geheven. Een fabrikant betaalt BTW op grondstoffen, voegt waarde toe aan het product, en berekent BTW door aan de groothandel. De groothandel doet hetzelfde richting de detailhandel, die uiteindelijk BTW berekent aan de consument. In elke schakel mag de eerder betaalde BTW (voorbelasting) worden afgetrokken, zodat uiteindelijk alleen de eindconsument de totale belastingdruk draagt.",
    s2P2: "Dit systeem verschilt fundamenteel van een eenvoudige omzetbelasting (sales tax), zoals die in sommige Amerikaanse staten wordt gehanteerd. Bij sales tax wordt de belasting slechts één keer geheven, namelijk bij de verkoop aan de eindconsument. Het BTW-systeem biedt meer transparantie en voorkomt cascadering van belasting, waardoor het wereldwijd door de meeste landen is overgenomen.",
    s2FormulaTitle: "BTW berekenen: de basisformules",
    s2FormulaAdd: "BTW toevoegen (exclusief → inclusief):",
    s2FormulaAddDesc: "Bedrag inclusief BTW = Bedrag exclusief BTW × (1 + BTW-percentage / 100)",
    s2FormulaRemove: "BTW eruit halen (inclusief → exclusief):",
    s2FormulaRemoveDesc: "Bedrag exclusief BTW = Bedrag inclusief BTW ÷ (1 + BTW-percentage / 100)",
    s2FormulaTip: "Tip: Gebruik onze calculator hierboven om deze berekeningen automatisch en foutloos uit te voeren voor elk land.",
    s2P3: "Het is belangrijk om te weten dat bijna elk land meerdere BTW-tarieven hanteert. Naast het standaard tarief bestaan er verlaagde tarieven voor essentiële goederen zoals voedsel, medicijnen, boeken en culturele diensten. Sommige landen hanteren zelfs een nul-tarief of vrijstellingen voor specifieke categorieën. De exacte tarieven en welke producten onder welk tarief vallen, verschillen per land. Onze calculator toont automatisch alle beschikbare tarieven zodra je een land selecteert.",
    s3Title: "BTW berekenen voor e-commerce, webshops en online verkoop",
    s3P1: "De e-commerce sector is een van de meest complexe gebieden als het gaat om BTW-berekening. Online verkopers moeten rekening houden met het land van de koper, het type product of dienst, en of de klant een particulier (B2C) of een bedrijf (B2B) is. Binnen de Europese Unie geldt sinds juli 2021 de One Stop Shop (OSS) regeling, die het mogelijk maakt om BTW voor alle EU-landen via één aangifte af te dragen.",
    s3P2: "Voor webshops die fysieke producten verkopen aan consumenten in andere EU-landen, moet het BTW-tarief van het land van de klant worden toegepast zodra de totale omzet aan EU-particulieren de drempel van €10.000 per jaar overschrijdt. Dit betekent dat een Nederlandse webshop die verkoopt aan een Duitse consument het Duitse BTW-tarief moet berekenen en afdragen — iets wat onze calculator je helpt snel en correct te doen.",
    s3P3: "Bij B2B-transacties binnen de EU geldt doorgaans de verleggingsregeling (reverse charge). Dit houdt in dat de leverancier de factuur zonder BTW uitreikt, en de afnemer zelf de BTW aangeeft en verrekent in het eigen land. Dit vereenvoudigt de administratie aanzienlijk, maar vereist wel dat beide partijen over een geldig BTW-identificatienummer (VAT-ID) beschikken dat via het VIES-systeem kan worden geverifieerd.",
    s3PhysicalTitle: "Fysieke producten",
    s3PhysicalDesc: "BTW wordt berekend op basis van het land van levering. Bij verzending naar andere EU-landen geldt het lokale tarief voor B2C-verkopen boven de drempel. Voor export buiten de EU is het nultarief van toepassing.",
    s3DigitalTitle: "Digitale producten & diensten",
    s3DigitalDesc: "Voor digitale producten en diensten aan particulieren geldt het BTW-tarief van het land van de klant, ongeacht waar de verkoper gevestigd is. Dit omvat software, e-books, online cursussen, streamingdiensten en SaaS-producten.",
    s3P4: "Dropshipping vormt een bijzonder aandachtspunt. Als dropshipper ben je juridisch gezien de verkoper, ook al heb je de goederen nooit fysiek in handen. Dit betekent dat je verantwoordelijk bent voor de correcte BTW-berekening en -afdracht. Bij import van buiten de EU moet je rekening houden met invoer-BTW en eventuele douanerechten. Onze calculator helpt je om het juiste BTW-bedrag te bepalen, ongeacht de complexiteit van je bedrijfsmodel.",
    s4Title: "BTW berekenen voor freelancers, ZZP'ers en dienstverleners",
    s4P1: "Als freelancer of ZZP'er die internationaal werkt, is het cruciaal om te begrijpen wanneer je BTW moet berekenen en welk tarief van toepassing is. De basisregel is eenvoudig: voor diensten aan bedrijven (B2B) binnen de EU geldt de verleggingsregeling, wat betekent dat je factureert zonder BTW en de afnemer de BTW zelf aangeeft. Voor diensten aan particulieren (B2C) geldt over het algemeen het BTW-tarief van het land waar je als ondernemer gevestigd bent.",
    s4P2: "Er zijn echter belangrijke uitzonderingen. Elektronisch geleverde diensten aan particulieren in andere EU-landen vallen onder de OSS-regeling, waarbij het BTW-tarief van het land van de consument geldt. Dit betreft onder meer webdesign, programmeerwerk, online consultancy en andere digitaal geleverde diensten. Onze calculator helpt je om snel het juiste tarief te vinden voor het land van je klant.",
    s4P3: "Voor het opstellen van correcte facturen en offertes is het essentieel om te weten welk BTW-bedrag je moet berekenen. Een factuur naar een zakelijke klant in Duitsland verschilt qua BTW-vermelding fundamenteel van een factuur naar een particuliere klant in Italië. Gebruik onze calculator om het exacte BTW-bedrag te berekenen en vermeld altijd het juiste BTW-tarief, het BTW-bedrag en het totaalbedrag inclusief en exclusief BTW op je facturen.",
    s4P4: "In Nederland kunnen ZZP'ers met een jaaromzet onder een bepaalde drempel gebruikmaken van de kleineondernemersregeling (KOR), waardoor ze vrijgesteld zijn van BTW-afdracht maar ook geen BTW mogen aftrekken. Vergelijkbare regelingen bestaan in veel andere landen. Overweeg zorgvuldig of de KOR voordelig is voor jouw situatie, vooral als je veel zakelijke kosten hebt waarover je BTW zou willen terugvorderen.",
    s5Title: "BTW berekenen voor SaaS, software en digitale abonnementen",
    s5P1: "SaaS (Software as a Service) en digitale abonnementen vormen een groeiend segment dat specifieke BTW-regels kent. Wanneer je als SaaS-aanbieder diensten levert aan consumenten in de EU, moet je het BTW-tarief van het land van de klant hanteren. Dit geldt voor alle elektronisch geleverde diensten, waaronder cloud-software, streaming platforms, online tools en membership websites.",
    s5P2: "De bepaling van de locatie van de klant (de \"place of supply\") is cruciaal en wordt vastgesteld aan de hand van twee onafhankelijke bewijsstukken, zoals het factuuradres, IP-adres, bankgegevens of telefoonnummer. SaaS-bedrijven moeten systemen implementeren die deze informatie automatisch vastleggen om aan de BTW-verplichtingen te voldoen.",
    s5P3: "Voor B2B-verkopen aan bedrijven buiten je eigen land maar binnen de EU geldt de verleggingsregeling, mits de afnemer een geldig BTW-identificatienummer heeft. Voor verkopen aan bedrijven of consumenten buiten de EU is de dienst meestal niet belast met BTW in de EU, maar moet je rekening houden met eventuele lokale belastingverplichtingen in het land van de klant.",
    s5P4: "Platforms zoals Shopify, WooCommerce en andere e-commerce systemen bieden steeds meer ingebouwde BTW-berekeningsmogelijkheden, maar het is belangrijk om deze instellingen te verifiëren met een onafhankelijke calculator. Fouten in automatische BTW-berekeningen komen regelmatig voor, vooral bij grensoverschrijdende transacties met meerdere tarieven.",
    s6Title: "BTW bij import en export: wat je moet weten",
    s6P1: "Bij internationale handel spelen import- en export-BTW een cruciale rol. Export vanuit de EU naar landen buiten de EU (derde landen) is in principe vrijgesteld van BTW — het zogenaamde nultarief. Dit geldt zowel voor goederen als voor bepaalde diensten. De exporteur moet wel kunnen aantonen dat de goederen daadwerkelijk de EU hebben verlaten, bijvoorbeeld door middel van douanedocumenten.",
    s6P2: "Bij import van goederen van buiten de EU wordt invoer-BTW geheven bij de douane. Het BTW-tarief dat wordt toegepast, is het tarief van het land van invoer. Daarnaast kunnen douanerechten van toepassing zijn, afhankelijk van het type product en het land van herkomst. Sinds 2021 is de BTW-vrijstelling voor zendingen met een waarde onder €22 afgeschaft in de EU, waardoor nu op alle geïmporteerde goederen BTW moet worden betaald.",
    s6P3: "Voor bedrijven die regelmatig importeren, bieden veel EU-landen de mogelijkheid van verlegde invoer-BTW (artikel 23-vergunning in Nederland). Hierbij hoeft de invoer-BTW niet bij de douane te worden betaald, maar wordt deze verwerkt in de periodieke BTW-aangifte. Dit verbetert de cashflow aanzienlijk, omdat je de invoer-BTW direct kunt verrekenen met de af te dragen BTW.",
    s7Title: "EU BTW-regelgeving en de One Stop Shop (OSS)",
    s7P1: "De Europese Unie heeft met de BTW-richtlijn een geharmoniseerd systeem gecreëerd dat grensoverschrijdende handel vergemakkelijkt. Hoewel elk EU-land zijn eigen tarieven vaststelt, gelden er gemeenschappelijke regels voor de plaats van dienst, de verleggingsregeling en de administratieve verplichtingen. De One Stop Shop (OSS) regeling, ingevoerd in juli 2021, is een belangrijk instrument voor e-commerce bedrijven en aanbieders van digitale diensten.",
    s7P2: "Via de OSS kun je alle BTW die je verschuldigd bent aan andere EU-landen via één enkele kwartaalaangifte in je eigen land afdragen. Dit voorkomt dat je je in elk EU-land afzonderlijk moet registreren voor BTW — een enorme administratieve vereenvoudiging. De OSS is beschikbaar voor B2C-verkopen van goederen en digitale diensten aan consumenten in andere EU-landen.",
    s7P3: "Naast de OSS bestaat de Import One Stop Shop (IOSS) voor goederen die van buiten de EU worden geïmporteerd met een waarde tot €150. Via de IOSS kan de verkoper of het platform de BTW bij de verkoop innen en afdragen, waardoor de koper geen invoer-BTW hoeft te betalen bij ontvangst. Dit verbetert de klantervaring en versnelt het leveringsproces.",
    s7P4: "Het is essentieel om te weten dat de verleggingsregeling alleen van toepassing is wanneer beide partijen een geldig BTW-identificatienummer hebben. Je kunt dit verifiëren via het VIES-systeem (VAT Information Exchange System) van de Europese Commissie. Bij twijfel over de geldigheid van een BTW-nummer moet je het standaard BTW-tarief in rekening brengen om naheffingen te voorkomen.",
    s8Title: "BTW en sales tax wereldwijd: Belangrijke systemen buiten de EU",
    s8P1: "Buiten de Europese Unie hanteren landen zeer uiteenlopende systemen voor consumptiebelasting. Het Verenigd Koninkrijk heeft na Brexit zijn eigen VAT-systeem behouden, met een standaardtarief en verlaagde tarieven voor specifieke categorieën. Australië, Nieuw-Zeeland, Canada en Singapore gebruiken de term GST maar het werkt vergelijkbaar met BTW. De Verenigde Staten vormen een uitzondering met hun decentrale sales tax systeem, waarbij tarieven per staat en soms zelfs per gemeente verschillen.",
    s8P2: "Voor internationale ondernemers die ook buiten de EU verkopen, is het cruciaal om de lokale belastingverplichtingen te kennen. In veel landen geldt een registratiedrempel: zodra je meer dan een bepaald bedrag aan omzet realiseert in dat land, moet je je registreren voor de lokale consumptiebelasting. Dit geldt steeds vaker ook voor digitale diensten en e-commerce, waarbij landen zoals Australië, Japan en Zuid-Korea verplichtingen opleggen aan buitenlandse aanbieders.",
    s8P3: "Onze calculator ondersteunt meer dan 60 landen en biedt actuele tarieven voor zowel EU als niet-EU landen. Dit maakt het de ideale tool voor bedrijven die wereldwijd actief zijn en snel het juiste BTW- of GST-tarief willen berekenen voor hun internationale transacties.",
    s9Title: "BTW-compliance: best practices voor 2025-2026",
    s9P1: "Correcte BTW-compliance vereist meer dan alleen het juiste tarief berekenen. Het omvat een solide administratie, tijdige aangiftes, correcte facturatie en het bewaren van alle relevante documentatie. Belastingdiensten in de EU en daarbuiten worden steeds strenger in hun handhaving, vooral voor e-commerce en digitale dienstverlening. Investeer in goede boekhoudsoftware en raadpleeg bij twijfel een fiscaal adviseur met internationale ervaring.",
    s9InvoiceTitle: "Facturatie & administratie",
    s9InvoiceItems: [
      "Vermeld altijd het BTW-tarief en -bedrag op facturen",
      "Bewaar facturen minimaal 7 jaar (Nederland) of volgens lokale regels",
      "Gebruik doorlopende factuurnummering",
      "Vermeld BTW-identificatienummers van beide partijen",
      "Bij verlegging: vermeld \"BTW verlegd\" op de factuur"
    ],
    s9DeadlineTitle: "Deadlines & aangiftes",
    s9DeadlineItems: [
      "Dien BTW-aangiftes altijd op tijd in",
      "OSS-aangifte: elk kwartaal (maand na afloop kwartaal)",
      "VIES-listing: elk kwartaal voor EU-B2B transacties",
      "Bewaar bewijsstukken van locatie van de klant",
      "Monitor drempelbedragen voor registratieplicht"
    ],
    s9P2: "De trend is duidelijk: overheden investeren steeds meer in digitale handhavingstools en real-time rapportage. Landen als Italië, Hongarije en Spanje hebben al real-time facturatiesystemen ingevoerd of zijn dit aan het implementeren. Het is daarom verstandig om nu al te investeren in robuuste systemen voor BTW-berekening en -rapportage, zodat je voorbereid bent op toekomstige veranderingen in regelgeving.",
    s10Title: "Waarvoor kun je onze BTW-calculator allemaal gebruiken?",
    s10P1: "Onze internationale BTW-calculator is ontworpen voor een breed scala aan toepassingen. Hieronder vind je een overzicht van veelvoorkomende scenario's waarvoor ondernemers onze tool gebruiken:",
    s10UseCases: [
      { term: "BTW berekenen voor webshop prijs", desc: "Bepaal de correcte verkoopprijs inclusief of exclusief BTW voor je online winkel." },
      { term: "BTW berekenen voor import producten", desc: "Bereken invoer-BTW en totale kosten bij het importeren van goederen." },
      { term: "BTW berekenen voor online diensten", desc: "Bepaal het juiste tarief voor digitaal geleverde diensten aan klanten wereldwijd." },
      { term: "BTW berekenen voor Shopify", desc: "Verifieer BTW-instellingen van je Shopify-webshop met actuele tarieven." },
      { term: "BTW berekenen voor WooCommerce", desc: "Controleer BTW-berekeningen van je WooCommerce-shop voor alle EU-landen." },
      { term: "BTW berekenen voor SaaS", desc: "Bereken BTW op software-as-a-service producten voor internationale klanten." },
      { term: "BTW berekenen voor dropshipping", desc: "Bereken BTW-verplichtingen bij het dropshipping-model met internationale leveranciers." },
      { term: "BTW berekenen voor freelancers", desc: "Bereken het juiste BTW-bedrag op je facturen als zelfstandig professional." },
      { term: "BTW berekenen voor ZZP", desc: "Bepaal BTW-verplichtingen en mogelijke vrijstellingen als ZZP'er." },
      { term: "BTW berekenen voor factuur", desc: "Bereken exact het BTW-bedrag dat op je factuur vermeld moet worden." },
      { term: "BTW berekenen voor digitale producten", desc: "Bereken BTW op downloads, templates, e-books en andere digitale goederen." },
      { term: "BTW berekenen voor internationale verkoop", desc: "Bepaal het juiste BTW-tarief bij grensoverschrijdende verkopen wereldwijd." }
    ],
    s11Title: "Waarom kiezen voor deze internationale BTW-calculator?",
    s11P1: "Onze BTW-calculator onderscheidt zich door een combinatie van betrouwbaarheid, gebruiksgemak en volledigheid. Met ondersteuning voor meer dan 60 landen, zowel binnen als buiten de EU, is het de meest uitgebreide gratis BTW-calculator die beschikbaar is. De tool wordt regelmatig bijgewerkt met de laatste tariefwijzigingen en biedt zowel standaard als verlaagde tarieven voor elk land.",
    s11P2: "Of je nu een snelle berekening nodig hebt voor een enkele factuur of je een uitgebreide analyse maakt van BTW-verplichtingen in meerdere landen — onze calculator levert direct nauwkeurige resultaten. De intuïtieve interface maakt het voor iedereen toegankelijk, van de startende ZZP'er tot de ervaren internationaal opererende ondernemer.",
    s11P3: "Alle berekeningen worden lokaal in je browser uitgevoerd, wat betekent dat je gegevens niet naar servers worden verstuurd. Dit garandeert volledige privacy en maakt de tool ook offline beschikbaar nadat de pagina is geladen. Combineer onze calculator met onze andere diensten zoals Premium Domeinnamen voor SEO-groei en Juridische Documenten voor website-compliance om je internationale business op een stevig fundament te bouwen."
  }
};

// ═══════════════════════════════════════════
// ENGLISH (EN)
// ═══════════════════════════════════════════
const guideEN: VATGuideContent = {
  badge: "Comprehensive VAT Guide 2025-2026",
  title: "The Ultimate Guide to International VAT Calculation",
  subtitle: "Everything you need to know about calculating VAT for e-commerce, freelancers, SaaS businesses, and international trade — current, reliable, and based on years of practical experience.",
  sections: {
    s1Title: "What is VAT and why is correct calculation essential?",
    s1P1: "VAT stands for Value Added Tax and is a consumption tax levied on goods and services in more than 170 countries worldwide. Some countries use the term GST (Goods and Services Tax). Although the names differ, the underlying system is fundamentally the same: tax is added at each stage of the production and distribution chain.",
    s1P2: "For entrepreneurs, freelancers, and businesses operating internationally, correctly calculating VAT is not only a legal obligation but also a strategic necessity. Errors in VAT calculations can lead to additional assessments, fines, and administrative problems with tax authorities in multiple countries. Our free international VAT calculator helps you avoid these risks by providing accurate calculations based on current rates.",
    s1P3: "Whether you run an e-commerce store shipping products to customers across Europe, offer a SaaS platform to users worldwide, or provide services as a freelancer to international clients — correctly applying VAT rates is fundamental to healthy business operations. This guide helps you understand the complexity of international VAT and gives you practical tools to avoid errors.",
    s2Title: "How does the VAT system work worldwide?",
    s2P1: "The VAT system is unique because it is levied at each stage of the value chain. A manufacturer pays VAT on raw materials, adds value to the product, and charges VAT to the wholesaler. The wholesaler does the same to the retailer, who ultimately charges VAT to the consumer. At each stage, the previously paid VAT (input tax) can be deducted, so that ultimately only the end consumer bears the total tax burden.",
    s2P2: "This system differs fundamentally from a simple sales tax, as used in some American states. With sales tax, the tax is only levied once, at the point of sale to the end consumer. The VAT system offers more transparency and prevents cascading of tax, which is why it has been adopted by most countries worldwide.",
    s2FormulaTitle: "VAT calculation: the basic formulas",
    s2FormulaAdd: "Adding VAT (exclusive → inclusive):",
    s2FormulaAddDesc: "Amount including VAT = Amount excluding VAT × (1 + VAT percentage / 100)",
    s2FormulaRemove: "Removing VAT (inclusive → exclusive):",
    s2FormulaRemoveDesc: "Amount excluding VAT = Amount including VAT ÷ (1 + VAT percentage / 100)",
    s2FormulaTip: "Tip: Use our calculator above to perform these calculations automatically and error-free for any country.",
    s2P3: "It's important to know that almost every country has multiple VAT rates. In addition to the standard rate, there are reduced rates for essential goods such as food, medicine, books, and cultural services. Some countries even apply a zero rate or exemptions for specific categories. The exact rates and which products fall under which rate differ by country. Our calculator automatically shows all available rates once you select a country.",
    s3Title: "Calculating VAT for e-commerce, webshops, and online sales",
    s3P1: "The e-commerce sector is one of the most complex areas when it comes to VAT calculation. Online sellers must consider the buyer's country, the type of product or service, and whether the customer is a private individual (B2C) or a business (B2B). Within the European Union, the One Stop Shop (OSS) scheme has been in effect since July 2021, making it possible to pay VAT for all EU countries through a single return.",
    s3P2: "For webshops selling physical products to consumers in other EU countries, the VAT rate of the customer's country must be applied once total sales to EU consumers exceed the €10,000 per year threshold. This means a Dutch webshop selling to a German consumer must calculate and pay the German VAT rate — something our calculator helps you do quickly and correctly.",
    s3P3: "For B2B transactions within the EU, the reverse charge mechanism usually applies. This means the supplier issues the invoice without VAT, and the buyer declares and settles the VAT in their own country. This significantly simplifies administration but requires both parties to have a valid VAT identification number (VAT-ID) that can be verified through the VIES system.",
    s3PhysicalTitle: "Physical products",
    s3PhysicalDesc: "VAT is calculated based on the country of delivery. When shipping to other EU countries, the local rate applies to B2C sales above the threshold. For exports outside the EU, the zero rate applies.",
    s3DigitalTitle: "Digital products & services",
    s3DigitalDesc: "For digital products and services to private individuals, the VAT rate of the customer's country applies, regardless of where the seller is located. This includes software, e-books, online courses, streaming services, and SaaS products.",
    s3P4: "Dropshipping is a special consideration. As a dropshipper, you are legally the seller, even if you never physically handle the goods. This means you are responsible for correct VAT calculation and payment. When importing from outside the EU, you must account for import VAT and any customs duties. Our calculator helps you determine the correct VAT amount, regardless of the complexity of your business model.",
    s4Title: "Calculating VAT for freelancers, self-employed, and service providers",
    s4P1: "As a freelancer or self-employed person working internationally, it's crucial to understand when to charge VAT and which rate applies. The basic rule is simple: for services to businesses (B2B) within the EU, the reverse charge applies, meaning you invoice without VAT and the buyer declares the VAT themselves. For services to private individuals (B2C), the VAT rate of the country where you are established as an entrepreneur generally applies.",
    s4P2: "However, there are important exceptions. Electronically supplied services to private individuals in other EU countries fall under the OSS scheme, where the VAT rate of the consumer's country applies. This includes web design, programming, online consultancy, and other digitally delivered services. Our calculator helps you quickly find the correct rate for your client's country.",
    s4P3: "For creating correct invoices and quotes, it's essential to know which VAT amount to calculate. An invoice to a business customer in Germany differs fundamentally from an invoice to a private customer in Italy in terms of VAT notation. Use our calculator to calculate the exact VAT amount and always state the correct VAT rate, VAT amount, and total amount including and excluding VAT on your invoices.",
    s4P4: "In many countries, small businesses below a certain annual turnover can use a small business scheme, exempting them from VAT payment but also preventing them from deducting input VAT. Consider carefully whether such a scheme is advantageous for your situation, especially if you have many business expenses on which you would like to reclaim VAT.",
    s5Title: "Calculating VAT for SaaS, software, and digital subscriptions",
    s5P1: "SaaS (Software as a Service) and digital subscriptions are a growing segment with specific VAT rules. When you provide services as a SaaS provider to consumers in the EU, you must apply the VAT rate of the customer's country. This applies to all electronically supplied services, including cloud software, streaming platforms, online tools, and membership websites.",
    s5P2: "Determining the customer's location (the \"place of supply\") is crucial and is established using two independent pieces of evidence, such as billing address, IP address, bank details, or phone number. SaaS companies must implement systems that automatically capture this information to meet VAT obligations.",
    s5P3: "For B2B sales to businesses outside your own country but within the EU, the reverse charge applies, provided the buyer has a valid VAT identification number. For sales to businesses or consumers outside the EU, the service is usually not subject to VAT in the EU, but you must consider any local tax obligations in the customer's country.",
    s5P4: "Platforms like Shopify, WooCommerce, and other e-commerce systems offer increasingly built-in VAT calculation capabilities, but it's important to verify these settings with an independent calculator. Errors in automatic VAT calculations occur regularly, especially with cross-border transactions involving multiple rates.",
    s6Title: "VAT on import and export: what you need to know",
    s6P1: "In international trade, import and export VAT play a crucial role. Export from the EU to countries outside the EU (third countries) is in principle exempt from VAT — the so-called zero rate. This applies to both goods and certain services. The exporter must be able to demonstrate that the goods have actually left the EU, for example by means of customs documents.",
    s6P2: "When importing goods from outside the EU, import VAT is levied at customs. The VAT rate applied is the rate of the country of import. Additionally, customs duties may apply, depending on the type of product and country of origin. Since 2021, the VAT exemption for shipments valued under €22 has been abolished in the EU, meaning VAT must now be paid on all imported goods.",
    s6P3: "For businesses that regularly import, many EU countries offer the possibility of postponed import VAT (Article 23 permit in the Netherlands). This means import VAT does not have to be paid at customs but is processed in the periodic VAT return. This significantly improves cash flow, as you can immediately offset import VAT against VAT payable.",
    s7Title: "EU VAT regulations and the One Stop Shop (OSS)",
    s7P1: "The European Union has created a harmonized system with the VAT Directive that facilitates cross-border trade. Although each EU country sets its own rates, common rules apply for the place of supply, reverse charge, and administrative obligations. The One Stop Shop (OSS) scheme, introduced in July 2021, is an important tool for e-commerce businesses and providers of digital services.",
    s7P2: "Through the OSS, you can pay all VAT you owe to other EU countries through a single quarterly return in your own country. This prevents you from having to register for VAT in each EU country separately — a huge administrative simplification. The OSS is available for B2C sales of goods and digital services to consumers in other EU countries.",
    s7P3: "In addition to the OSS, there is the Import One Stop Shop (IOSS) for goods imported from outside the EU with a value up to €150. Through the IOSS, the seller or platform can collect and pay VAT at the point of sale, meaning the buyer does not have to pay import VAT upon receipt. This improves the customer experience and speeds up the delivery process.",
    s7P4: "It's essential to know that the reverse charge mechanism only applies when both parties have a valid VAT identification number. You can verify this through the VIES system (VAT Information Exchange System) of the European Commission. If in doubt about the validity of a VAT number, you must charge the standard VAT rate to avoid additional assessments.",
    s8Title: "VAT and sales tax worldwide: Important systems outside the EU",
    s8P1: "Outside the European Union, countries use very different consumption tax systems. The United Kingdom has retained its own VAT system after Brexit, with a standard rate and reduced rates for specific categories. Australia, New Zealand, Canada, and Singapore use the term GST but it works similarly to VAT. The United States is an exception with its decentralized sales tax system, where rates vary by state and sometimes even by municipality.",
    s8P2: "For international entrepreneurs selling outside the EU, it's crucial to know local tax obligations. In many countries, a registration threshold applies: once you realize more than a certain amount in turnover in that country, you must register for local consumption tax. This increasingly applies to digital services and e-commerce, with countries like Australia, Japan, and South Korea imposing obligations on foreign providers.",
    s8P3: "Our calculator supports more than 60 countries and provides current rates for both EU and non-EU countries. This makes it the ideal tool for businesses operating worldwide who want to quickly calculate the correct VAT or GST rate for their international transactions.",
    s9Title: "VAT compliance: best practices for 2025-2026",
    s9P1: "Correct VAT compliance requires more than just calculating the right rate. It includes solid administration, timely returns, correct invoicing, and retaining all relevant documentation. Tax authorities in the EU and beyond are becoming increasingly strict in their enforcement, especially for e-commerce and digital service provision. Invest in good accounting software and consult a tax advisor with international experience when in doubt.",
    s9InvoiceTitle: "Invoicing & administration",
    s9InvoiceItems: [
      "Always state the VAT rate and amount on invoices",
      "Keep invoices for at least 7 years or according to local rules",
      "Use consecutive invoice numbering",
      "Include VAT identification numbers of both parties",
      "For reverse charge: state \"VAT reverse charged\" on the invoice"
    ],
    s9DeadlineTitle: "Deadlines & returns",
    s9DeadlineItems: [
      "Always file VAT returns on time",
      "OSS return: every quarter (month after end of quarter)",
      "VIES listing: every quarter for EU B2B transactions",
      "Keep evidence of customer location",
      "Monitor threshold amounts for registration obligation"
    ],
    s9P2: "The trend is clear: governments are investing more in digital enforcement tools and real-time reporting. Countries like Italy, Hungary, and Spain have already introduced real-time invoicing systems or are implementing them. It is therefore wise to invest now in robust systems for VAT calculation and reporting, so you are prepared for future regulatory changes.",
    s10Title: "What can you use our VAT calculator for?",
    s10P1: "Our international VAT calculator is designed for a wide range of applications. Below you will find an overview of common scenarios for which entrepreneurs use our tool:",
    s10UseCases: [
      { term: "Calculate VAT for webshop pricing", desc: "Determine the correct selling price including or excluding VAT for your online store." },
      { term: "Calculate VAT for imported products", desc: "Calculate import VAT and total costs when importing goods." },
      { term: "Calculate VAT for online services", desc: "Determine the correct rate for digitally delivered services to customers worldwide." },
      { term: "Calculate VAT for Shopify", desc: "Verify VAT settings of your Shopify webshop with current rates." },
      { term: "Calculate VAT for WooCommerce", desc: "Check VAT calculations of your WooCommerce shop for all EU countries." },
      { term: "Calculate VAT for SaaS", desc: "Calculate VAT on software-as-a-service products for international customers." },
      { term: "Calculate VAT for dropshipping", desc: "Calculate VAT obligations for the dropshipping model with international suppliers." },
      { term: "Calculate VAT for freelancers", desc: "Calculate the correct VAT amount on your invoices as a self-employed professional." },
      { term: "Calculate VAT for self-employed", desc: "Determine VAT obligations and possible exemptions as a sole trader." },
      { term: "Calculate VAT for invoices", desc: "Calculate exactly the VAT amount that must be stated on your invoice." },
      { term: "Calculate VAT for digital products", desc: "Calculate VAT on downloads, templates, e-books, and other digital goods." },
      { term: "Calculate VAT for international sales", desc: "Determine the correct VAT rate for cross-border sales worldwide." }
    ],
    s11Title: "Why choose this international VAT calculator?",
    s11P1: "Our VAT calculator stands out through a combination of reliability, ease of use, and completeness. With support for more than 60 countries, both inside and outside the EU, it is the most comprehensive free VAT calculator available. The tool is regularly updated with the latest rate changes and offers both standard and reduced rates for each country.",
    s11P2: "Whether you need a quick calculation for a single invoice or are making an extensive analysis of VAT obligations in multiple countries — our calculator delivers immediately accurate results. The intuitive interface makes it accessible to everyone, from the starting freelancer to the experienced internationally operating entrepreneur.",
    s11P3: "All calculations are performed locally in your browser, meaning your data is not sent to servers. This guarantees complete privacy and also makes the tool available offline after the page has loaded. Combine our calculator with our other services such as Premium Domain Names for SEO growth and Legal Documents for website compliance to build your international business on a solid foundation."
  }
};

// ═══════════════════════════════════════════
// GERMAN (DE)
// ═══════════════════════════════════════════
const guideDE: VATGuideContent = {
  badge: "Umfassender MwSt-Leitfaden 2025-2026",
  title: "Der ultimative Leitfaden zur internationalen MwSt-Berechnung",
  subtitle: "Alles, was Sie über die MwSt-Berechnung für Webshops, Freiberufler, SaaS-Unternehmen und internationalen Handel wissen müssen — aktuell, zuverlässig und auf jahrelanger Praxiserfahrung basierend.",
  sections: {
    s1Title: "Was ist MwSt und warum ist korrekte Berechnung essentiell?",
    s1P1: "MwSt steht für Mehrwertsteuer und ist eine Verbrauchssteuer, die in mehr als 170 Ländern weltweit auf Waren und Dienstleistungen erhoben wird. International wird dies als VAT (Value Added Tax) bezeichnet, während einige Länder den Begriff GST (Goods and Services Tax) verwenden. Obwohl die Namen unterschiedlich sind, ist das zugrunde liegende System im Kern dasselbe: Steuer wird in jeder Stufe der Produktions- und Vertriebskette hinzugefügt.",
    s1P2: "Für Unternehmer, Freiberufler und international tätige Unternehmen ist die korrekte Berechnung der MwSt nicht nur eine gesetzliche Verpflichtung, sondern auch eine strategische Notwendigkeit. Fehler bei MwSt-Berechnungen können zu Nachzahlungen, Bußgeldern und administrativen Problemen mit Steuerbehörden in mehreren Ländern führen. Unser kostenloser internationaler MwSt-Rechner hilft Ihnen, diese Risiken zu vermeiden, indem er genaue Berechnungen auf Basis aktueller Sätze liefert.",
    s1P3: "Ob Sie einen Webshop betreiben, der Produkte an Kunden in ganz Europa versendet, eine SaaS-Plattform für Nutzer weltweit anbieten oder als Freiberufler Dienstleistungen für internationale Kunden erbringen — die korrekte Anwendung von MwSt-Sätzen ist grundlegend für eine gesunde Geschäftsführung. Dieser Leitfaden hilft Ihnen, die Komplexität der internationalen MwSt zu verstehen und gibt Ihnen praktische Werkzeuge, um Fehler zu vermeiden.",
    s2Title: "Wie funktioniert das MwSt-System weltweit?",
    s2P1: "Das MwSt-System ist einzigartig, da es in jeder Stufe der Wertschöpfungskette erhoben wird. Ein Hersteller zahlt MwSt auf Rohstoffe, fügt dem Produkt Wert hinzu und berechnet MwSt an den Großhändler weiter. Der Großhändler macht dasselbe zum Einzelhändler, der schließlich MwSt an den Verbraucher berechnet. In jeder Stufe kann die zuvor gezahlte MwSt (Vorsteuer) abgezogen werden, sodass letztendlich nur der Endverbraucher die gesamte Steuerlast trägt.",
    s2P2: "Dieses System unterscheidet sich grundlegend von einer einfachen Umsatzsteuer (Sales Tax), wie sie in einigen US-Bundesstaaten angewendet wird. Bei der Sales Tax wird die Steuer nur einmal erhoben, nämlich beim Verkauf an den Endverbraucher. Das MwSt-System bietet mehr Transparenz und verhindert eine Kaskadierung der Steuer, weshalb es weltweit von den meisten Ländern übernommen wurde.",
    s2FormulaTitle: "MwSt berechnen: die Grundformeln",
    s2FormulaAdd: "MwSt hinzufügen (netto → brutto):",
    s2FormulaAddDesc: "Bruttobetrag = Nettobetrag × (1 + MwSt-Prozentsatz / 100)",
    s2FormulaRemove: "MwSt herausrechnen (brutto → netto):",
    s2FormulaRemoveDesc: "Nettobetrag = Bruttobetrag ÷ (1 + MwSt-Prozentsatz / 100)",
    s2FormulaTip: "Tipp: Verwenden Sie unseren Rechner oben, um diese Berechnungen automatisch und fehlerfrei für jedes Land durchzuführen.",
    s2P3: "Es ist wichtig zu wissen, dass fast jedes Land mehrere MwSt-Sätze hat. Neben dem Standardsatz gibt es ermäßigte Sätze für wesentliche Güter wie Lebensmittel, Medikamente, Bücher und kulturelle Dienstleistungen. Einige Länder wenden sogar einen Nullsatz oder Befreiungen für bestimmte Kategorien an. Die genauen Sätze und welche Produkte unter welchen Satz fallen, unterscheiden sich je nach Land. Unser Rechner zeigt automatisch alle verfügbaren Sätze an, sobald Sie ein Land auswählen.",
    s3Title: "MwSt berechnen für E-Commerce, Webshops und Online-Verkauf",
    s3P1: "Der E-Commerce-Sektor ist einer der komplexesten Bereiche, wenn es um MwSt-Berechnung geht. Online-Verkäufer müssen das Land des Käufers, die Art des Produkts oder der Dienstleistung und ob der Kunde eine Privatperson (B2C) oder ein Unternehmen (B2B) ist, berücksichtigen. Innerhalb der Europäischen Union gilt seit Juli 2021 die One Stop Shop (OSS) Regelung, die es ermöglicht, MwSt für alle EU-Länder über eine einzige Erklärung abzuführen.",
    s3P2: "Für Webshops, die physische Produkte an Verbraucher in anderen EU-Ländern verkaufen, muss der MwSt-Satz des Kundenlandes angewendet werden, sobald der Gesamtumsatz an EU-Verbraucher die Schwelle von 10.000 € pro Jahr überschreitet. Das bedeutet, dass ein deutscher Webshop, der an einen französischen Verbraucher verkauft, den französischen MwSt-Satz berechnen und abführen muss — etwas, das unser Rechner Ihnen hilft, schnell und korrekt zu tun.",
    s3P3: "Bei B2B-Transaktionen innerhalb der EU gilt in der Regel das Reverse-Charge-Verfahren. Dies bedeutet, dass der Lieferant die Rechnung ohne MwSt ausstellt und der Käufer die MwSt selbst in seinem eigenen Land deklariert und verrechnet. Dies vereinfacht die Verwaltung erheblich, erfordert jedoch, dass beide Parteien über eine gültige USt-IdNr. verfügen, die über das VIES-System verifiziert werden kann.",
    s3PhysicalTitle: "Physische Produkte",
    s3PhysicalDesc: "MwSt wird basierend auf dem Lieferland berechnet. Bei Versand in andere EU-Länder gilt der lokale Satz für B2C-Verkäufe über der Schwelle. Für Exporte außerhalb der EU gilt der Nullsatz.",
    s3DigitalTitle: "Digitale Produkte & Dienste",
    s3DigitalDesc: "Für digitale Produkte und Dienstleistungen an Privatpersonen gilt der MwSt-Satz des Kundenlandes, unabhängig davon, wo der Verkäufer ansässig ist. Dies umfasst Software, E-Books, Online-Kurse, Streaming-Dienste und SaaS-Produkte.",
    s3P4: "Dropshipping erfordert besondere Aufmerksamkeit. Als Dropshipper sind Sie rechtlich gesehen der Verkäufer, auch wenn Sie die Waren nie physisch handhaben. Das bedeutet, dass Sie für die korrekte MwSt-Berechnung und -Abführung verantwortlich sind. Bei Import von außerhalb der EU müssen Sie Einfuhr-MwSt und eventuelle Zölle berücksichtigen. Unser Rechner hilft Ihnen, den korrekten MwSt-Betrag zu bestimmen, unabhängig von der Komplexität Ihres Geschäftsmodells.",
    s4Title: "MwSt berechnen für Freiberufler und Selbstständige",
    s4P1: "Als international arbeitender Freiberufler oder Selbstständiger ist es entscheidend zu verstehen, wann Sie MwSt berechnen müssen und welcher Satz gilt. Die Grundregel ist einfach: Für Dienstleistungen an Unternehmen (B2B) innerhalb der EU gilt das Reverse-Charge-Verfahren, was bedeutet, dass Sie ohne MwSt fakturieren und der Käufer die MwSt selbst deklariert. Für Dienstleistungen an Privatpersonen (B2C) gilt in der Regel der MwSt-Satz des Landes, in dem Sie als Unternehmer ansässig sind.",
    s4P2: "Es gibt jedoch wichtige Ausnahmen. Elektronisch erbrachte Dienstleistungen an Privatpersonen in anderen EU-Ländern fallen unter die OSS-Regelung, wobei der MwSt-Satz des Verbraucherlandes gilt. Dies umfasst unter anderem Webdesign, Programmierung, Online-Beratung und andere digital erbrachte Dienstleistungen. Unser Rechner hilft Ihnen, schnell den richtigen Satz für das Land Ihres Kunden zu finden.",
    s4P3: "Für die Erstellung korrekter Rechnungen und Angebote ist es wesentlich zu wissen, welchen MwSt-Betrag Sie berechnen müssen. Eine Rechnung an einen Geschäftskunden in Frankreich unterscheidet sich grundlegend von einer Rechnung an einen Privatkunden in Italien hinsichtlich der MwSt-Angabe. Verwenden Sie unseren Rechner, um den genauen MwSt-Betrag zu berechnen, und geben Sie immer den korrekten MwSt-Satz, den MwSt-Betrag und den Gesamtbetrag inklusive und exklusive MwSt auf Ihren Rechnungen an.",
    s4P4: "In vielen Ländern können Kleinunternehmer unter einem bestimmten Jahresumsatz die Kleinunternehmerregelung nutzen, die sie von der MwSt-Abführung befreit, aber auch die Vorsteuerabzugsberechtigung ausschließt. Überlegen Sie sorgfältig, ob eine solche Regelung für Ihre Situation vorteilhaft ist, insbesondere wenn Sie viele Geschäftsausgaben haben, für die Sie die MwSt zurückfordern möchten.",
    s5Title: "MwSt berechnen für SaaS, Software und digitale Abonnements",
    s5P1: "SaaS (Software as a Service) und digitale Abonnements sind ein wachsendes Segment mit spezifischen MwSt-Regeln. Wenn Sie als SaaS-Anbieter Dienstleistungen an Verbraucher in der EU erbringen, müssen Sie den MwSt-Satz des Kundenlandes anwenden. Dies gilt für alle elektronisch erbrachten Dienstleistungen, einschließlich Cloud-Software, Streaming-Plattformen, Online-Tools und Mitgliederwebseiten.",
    s5P2: "Die Bestimmung des Kundenstandorts (der \"Ort der Leistung\") ist entscheidend und wird anhand von zwei unabhängigen Nachweisen festgestellt, wie Rechnungsadresse, IP-Adresse, Bankdaten oder Telefonnummer. SaaS-Unternehmen müssen Systeme implementieren, die diese Informationen automatisch erfassen, um die MwSt-Pflichten zu erfüllen.",
    s5P3: "Für B2B-Verkäufe an Unternehmen außerhalb Ihres eigenen Landes, aber innerhalb der EU, gilt das Reverse-Charge-Verfahren, sofern der Käufer eine gültige USt-IdNr. hat. Für Verkäufe an Unternehmen oder Verbraucher außerhalb der EU ist die Dienstleistung in der Regel nicht mit MwSt in der EU belastet, aber Sie müssen eventuelle lokale Steuerpflichten im Land des Kunden berücksichtigen.",
    s5P4: "Plattformen wie Shopify, WooCommerce und andere E-Commerce-Systeme bieten zunehmend eingebaute MwSt-Berechnungsfunktionen, aber es ist wichtig, diese Einstellungen mit einem unabhängigen Rechner zu überprüfen. Fehler bei automatischen MwSt-Berechnungen kommen regelmäßig vor, insbesondere bei grenzüberschreitenden Transaktionen mit mehreren Sätzen.",
    s6Title: "MwSt bei Import und Export: Was Sie wissen müssen",
    s6P1: "Im internationalen Handel spielen Import- und Export-MwSt eine entscheidende Rolle. Export aus der EU in Länder außerhalb der EU (Drittländer) ist grundsätzlich von der MwSt befreit — der sogenannte Nullsatz. Dies gilt sowohl für Waren als auch für bestimmte Dienstleistungen. Der Exporteur muss nachweisen können, dass die Waren tatsächlich die EU verlassen haben, beispielsweise durch Zolldokumente.",
    s6P2: "Bei der Einfuhr von Waren von außerhalb der EU wird Einfuhr-MwSt beim Zoll erhoben. Der angewandte MwSt-Satz ist der Satz des Einfuhrlandes. Zusätzlich können Zölle anfallen, abhängig von der Art des Produkts und dem Herkunftsland. Seit 2021 wurde die MwSt-Befreiung für Sendungen mit einem Wert unter 22 € in der EU abgeschafft, was bedeutet, dass auf alle importierten Waren MwSt gezahlt werden muss.",
    s6P3: "Für Unternehmen, die regelmäßig importieren, bieten viele EU-Länder die Möglichkeit der aufgeschobenen Einfuhr-MwSt. Dabei muss die Einfuhr-MwSt nicht beim Zoll gezahlt werden, sondern wird in der periodischen MwSt-Erklärung verarbeitet. Dies verbessert den Cashflow erheblich, da Sie die Einfuhr-MwSt sofort mit der zu zahlenden MwSt verrechnen können.",
    s7Title: "EU MwSt-Vorschriften und der One Stop Shop (OSS)",
    s7P1: "Die Europäische Union hat mit der MwSt-Richtlinie ein harmonisiertes System geschaffen, das den grenzüberschreitenden Handel erleichtert. Obwohl jedes EU-Land seine eigenen Sätze festlegt, gelten gemeinsame Regeln für den Leistungsort, das Reverse-Charge-Verfahren und die administrativen Pflichten. Die One Stop Shop (OSS) Regelung, eingeführt im Juli 2021, ist ein wichtiges Instrument für E-Commerce-Unternehmen und Anbieter digitaler Dienstleistungen.",
    s7P2: "Über den OSS können Sie alle MwSt, die Sie anderen EU-Ländern schulden, über eine einzige Quartalserklärung in Ihrem eigenen Land abführen. Dies verhindert, dass Sie sich in jedem EU-Land separat für die MwSt registrieren müssen — eine enorme administrative Vereinfachung. Der OSS ist für B2C-Verkäufe von Waren und digitalen Dienstleistungen an Verbraucher in anderen EU-Ländern verfügbar.",
    s7P3: "Neben dem OSS gibt es den Import One Stop Shop (IOSS) für Waren, die von außerhalb der EU mit einem Wert bis zu 150 € importiert werden. Über den IOSS kann der Verkäufer oder die Plattform die MwSt beim Verkauf einziehen und abführen, was bedeutet, dass der Käufer beim Empfang keine Einfuhr-MwSt zahlen muss. Dies verbessert das Kundenerlebnis und beschleunigt den Lieferprozess.",
    s7P4: "Es ist wichtig zu wissen, dass das Reverse-Charge-Verfahren nur gilt, wenn beide Parteien eine gültige USt-IdNr. haben. Sie können dies über das VIES-System (VAT Information Exchange System) der Europäischen Kommission überprüfen. Bei Zweifeln an der Gültigkeit einer USt-IdNr. müssen Sie den Standard-MwSt-Satz berechnen, um Nachzahlungen zu vermeiden.",
    s8Title: "MwSt und Sales Tax weltweit: Wichtige Systeme außerhalb der EU",
    s8P1: "Außerhalb der Europäischen Union verwenden Länder sehr unterschiedliche Verbrauchssteuersysteme. Das Vereinigte Königreich hat nach dem Brexit sein eigenes VAT-System beibehalten, mit einem Standardsatz und ermäßigten Sätzen für bestimmte Kategorien. Australien, Neuseeland, Kanada und Singapur verwenden den Begriff GST, aber es funktioniert ähnlich wie MwSt. Die Vereinigten Staaten sind eine Ausnahme mit ihrem dezentralen Sales Tax System, bei dem die Sätze je nach Staat und manchmal sogar je nach Gemeinde variieren.",
    s8P2: "Für internationale Unternehmer, die auch außerhalb der EU verkaufen, ist es entscheidend, die lokalen Steuerpflichten zu kennen. In vielen Ländern gilt eine Registrierungsschwelle: Sobald Sie mehr als einen bestimmten Umsatz in diesem Land erzielen, müssen Sie sich für die lokale Verbrauchssteuer registrieren. Dies gilt zunehmend auch für digitale Dienstleistungen und E-Commerce, wobei Länder wie Australien, Japan und Südkorea ausländischen Anbietern Verpflichtungen auferlegen.",
    s8P3: "Unser Rechner unterstützt mehr als 60 Länder und bietet aktuelle Sätze für sowohl EU- als auch Nicht-EU-Länder. Dies macht ihn zum idealen Werkzeug für weltweit tätige Unternehmen, die schnell den korrekten MwSt- oder GST-Satz für ihre internationalen Transaktionen berechnen möchten.",
    s9Title: "MwSt-Compliance: Best Practices für 2025-2026",
    s9P1: "Korrekte MwSt-Compliance erfordert mehr als nur die Berechnung des richtigen Satzes. Sie umfasst eine solide Verwaltung, fristgerechte Erklärungen, korrekte Rechnungsstellung und die Aufbewahrung aller relevanten Dokumentation. Steuerbehörden in der EU und darüber hinaus werden bei der Durchsetzung immer strenger, insbesondere bei E-Commerce und digitalen Dienstleistungen. Investieren Sie in gute Buchhaltungssoftware und konsultieren Sie bei Zweifeln einen Steuerberater mit internationaler Erfahrung.",
    s9InvoiceTitle: "Rechnungsstellung & Verwaltung",
    s9InvoiceItems: [
      "Geben Sie immer den MwSt-Satz und -Betrag auf Rechnungen an",
      "Bewahren Sie Rechnungen mindestens 10 Jahre oder gemäß lokalen Regeln auf",
      "Verwenden Sie fortlaufende Rechnungsnummern",
      "Geben Sie die USt-IdNr. beider Parteien an",
      "Bei Reverse Charge: Vermerk \"Steuerschuldnerschaft des Leistungsempfängers\" auf der Rechnung"
    ],
    s9DeadlineTitle: "Fristen & Erklärungen",
    s9DeadlineItems: [
      "Reichen Sie MwSt-Erklärungen immer fristgerecht ein",
      "OSS-Erklärung: jedes Quartal (Monat nach Quartalsende)",
      "Zusammenfassende Meldung: jedes Quartal für EU-B2B-Transaktionen",
      "Bewahren Sie Nachweise über den Kundenstandort auf",
      "Überwachen Sie Schwellenwerte für die Registrierungspflicht"
    ],
    s9P2: "Der Trend ist klar: Regierungen investieren zunehmend in digitale Durchsetzungswerkzeuge und Echtzeit-Berichterstattung. Länder wie Italien, Ungarn und Spanien haben bereits Echtzeit-Rechnungssysteme eingeführt oder implementieren diese. Es ist daher ratsam, jetzt in robuste Systeme für MwSt-Berechnung und -Berichterstattung zu investieren, damit Sie auf zukünftige regulatorische Änderungen vorbereitet sind.",
    s10Title: "Wofür können Sie unseren MwSt-Rechner verwenden?",
    s10P1: "Unser internationaler MwSt-Rechner ist für eine Vielzahl von Anwendungen konzipiert. Nachfolgend finden Sie eine Übersicht häufiger Szenarien, für die Unternehmer unser Tool verwenden:",
    s10UseCases: [
      { term: "MwSt für Webshop-Preise berechnen", desc: "Bestimmen Sie den korrekten Verkaufspreis inklusive oder exklusive MwSt für Ihren Online-Shop." },
      { term: "MwSt für importierte Produkte berechnen", desc: "Berechnen Sie Einfuhr-MwSt und Gesamtkosten beim Import von Waren." },
      { term: "MwSt für Online-Dienste berechnen", desc: "Bestimmen Sie den korrekten Satz für digital erbrachte Dienstleistungen an Kunden weltweit." },
      { term: "MwSt für Shopify berechnen", desc: "Überprüfen Sie MwSt-Einstellungen Ihres Shopify-Webshops mit aktuellen Sätzen." },
      { term: "MwSt für WooCommerce berechnen", desc: "Prüfen Sie MwSt-Berechnungen Ihres WooCommerce-Shops für alle EU-Länder." },
      { term: "MwSt für SaaS berechnen", desc: "Berechnen Sie MwSt auf Software-as-a-Service-Produkte für internationale Kunden." },
      { term: "MwSt für Dropshipping berechnen", desc: "Berechnen Sie MwSt-Pflichten beim Dropshipping-Modell mit internationalen Lieferanten." },
      { term: "MwSt für Freiberufler berechnen", desc: "Berechnen Sie den korrekten MwSt-Betrag auf Ihren Rechnungen als Selbstständiger." },
      { term: "MwSt für Selbstständige berechnen", desc: "Bestimmen Sie MwSt-Pflichten und mögliche Befreiungen als Einzelunternehmer." },
      { term: "MwSt für Rechnungen berechnen", desc: "Berechnen Sie genau den MwSt-Betrag, der auf Ihrer Rechnung angegeben werden muss." },
      { term: "MwSt für digitale Produkte berechnen", desc: "Berechnen Sie MwSt auf Downloads, Vorlagen, E-Books und andere digitale Waren." },
      { term: "MwSt für internationalen Verkauf berechnen", desc: "Bestimmen Sie den korrekten MwSt-Satz für grenzüberschreitende Verkäufe weltweit." }
    ],
    s11Title: "Warum diesen internationalen MwSt-Rechner wählen?",
    s11P1: "Unser MwSt-Rechner zeichnet sich durch eine Kombination aus Zuverlässigkeit, Benutzerfreundlichkeit und Vollständigkeit aus. Mit Unterstützung für mehr als 60 Länder, sowohl innerhalb als auch außerhalb der EU, ist er der umfassendste kostenlose MwSt-Rechner, der verfügbar ist. Das Tool wird regelmäßig mit den neuesten Satzänderungen aktualisiert und bietet sowohl Standard- als auch ermäßigte Sätze für jedes Land.",
    s11P2: "Ob Sie eine schnelle Berechnung für eine einzelne Rechnung benötigen oder eine umfassende Analyse der MwSt-Pflichten in mehreren Ländern durchführen — unser Rechner liefert sofort genaue Ergebnisse. Die intuitive Benutzeroberfläche macht ihn für jeden zugänglich, vom startenden Freiberufler bis zum erfahrenen international tätigen Unternehmer.",
    s11P3: "Alle Berechnungen werden lokal in Ihrem Browser durchgeführt, was bedeutet, dass Ihre Daten nicht an Server gesendet werden. Dies garantiert vollständige Privatsphäre und macht das Tool auch offline verfügbar, nachdem die Seite geladen wurde. Kombinieren Sie unseren Rechner mit unseren anderen Diensten wie Premium-Domainnamen für SEO-Wachstum und Rechtsdokumente für Website-Compliance, um Ihr internationales Geschäft auf einem soliden Fundament aufzubauen."
  }
};

// ═══════════════════════════════════════════
// FRENCH (FR)
// ═══════════════════════════════════════════
const guideFR: VATGuideContent = {
  badge: "Guide TVA Complet 2025-2026",
  title: "Le Guide Ultime du Calcul de la TVA Internationale",
  subtitle: "Tout ce que vous devez savoir sur le calcul de la TVA pour l'e-commerce, les freelances, les entreprises SaaS et le commerce international — actuel, fiable et basé sur des années d'expérience pratique.",
  sections: {
    s1Title: "Qu'est-ce que la TVA et pourquoi un calcul correct est-il essentiel ?",
    s1P1: "TVA signifie Taxe sur la Valeur Ajoutée et est un impôt à la consommation prélevé sur les biens et services dans plus de 170 pays à travers le monde. Certains pays utilisent le terme GST (Goods and Services Tax). Bien que les noms diffèrent, le système sous-jacent est fondamentalement le même : la taxe est ajoutée à chaque étape de la chaîne de production et de distribution.",
    s1P2: "Pour les entrepreneurs, freelances et entreprises opérant à l'international, calculer correctement la TVA n'est pas seulement une obligation légale mais aussi une nécessité stratégique. Les erreurs dans les calculs de TVA peuvent entraîner des redressements, des amendes et des problèmes administratifs avec les autorités fiscales de plusieurs pays. Notre calculateur de TVA international gratuit vous aide à éviter ces risques en fournissant des calculs précis basés sur les taux actuels.",
    s1P3: "Que vous gériez une boutique en ligne expédiant des produits à des clients dans toute l'Europe, proposiez une plateforme SaaS à des utilisateurs du monde entier, ou fournissiez des services en tant que freelance à des clients internationaux — appliquer correctement les taux de TVA est fondamental pour une gestion saine de votre entreprise. Ce guide vous aide à comprendre la complexité de la TVA internationale et vous donne des outils pratiques pour éviter les erreurs.",
    s2Title: "Comment fonctionne le système de TVA dans le monde ?",
    s2P1: "Le système de TVA est unique car il est prélevé à chaque étape de la chaîne de valeur. Un fabricant paie la TVA sur les matières premières, ajoute de la valeur au produit et facture la TVA au grossiste. Le grossiste fait de même avec le détaillant, qui finalement facture la TVA au consommateur. À chaque étape, la TVA précédemment payée (TVA déductible) peut être déduite, de sorte que seul le consommateur final supporte la charge fiscale totale.",
    s2P2: "Ce système diffère fondamentalement d'une simple taxe de vente (sales tax), comme celle utilisée dans certains États américains. Avec la taxe de vente, la taxe n'est prélevée qu'une seule fois, au point de vente au consommateur final. Le système de TVA offre plus de transparence et empêche la cascade fiscale, c'est pourquoi il a été adopté par la plupart des pays dans le monde.",
    s2FormulaTitle: "Calcul de la TVA : les formules de base",
    s2FormulaAdd: "Ajouter la TVA (HT → TTC) :",
    s2FormulaAddDesc: "Montant TTC = Montant HT × (1 + Taux de TVA / 100)",
    s2FormulaRemove: "Retirer la TVA (TTC → HT) :",
    s2FormulaRemoveDesc: "Montant HT = Montant TTC ÷ (1 + Taux de TVA / 100)",
    s2FormulaTip: "Astuce : Utilisez notre calculateur ci-dessus pour effectuer ces calculs automatiquement et sans erreur pour n'importe quel pays.",
    s2P3: "Il est important de savoir que presque tous les pays ont plusieurs taux de TVA. En plus du taux standard, il existe des taux réduits pour les biens essentiels tels que l'alimentation, les médicaments, les livres et les services culturels. Certains pays appliquent même un taux zéro ou des exonérations pour des catégories spécifiques. Les taux exacts et les produits qui relèvent de chaque taux varient selon les pays. Notre calculateur affiche automatiquement tous les taux disponibles une fois que vous sélectionnez un pays.",
    s3Title: "Calculer la TVA pour l'e-commerce, les boutiques en ligne et la vente en ligne",
    s3P1: "Le secteur de l'e-commerce est l'un des domaines les plus complexes en matière de calcul de TVA. Les vendeurs en ligne doivent prendre en compte le pays de l'acheteur, le type de produit ou service, et si le client est un particulier (B2C) ou une entreprise (B2B). Au sein de l'Union européenne, le régime One Stop Shop (OSS) est en vigueur depuis juillet 2021, permettant de payer la TVA pour tous les pays de l'UE via une seule déclaration.",
    s3P2: "Pour les boutiques en ligne vendant des produits physiques à des consommateurs dans d'autres pays de l'UE, le taux de TVA du pays du client doit être appliqué dès que le total des ventes aux consommateurs de l'UE dépasse le seuil de 10 000 € par an. Cela signifie qu'une boutique française vendant à un consommateur allemand doit calculer et payer le taux de TVA allemand — quelque chose que notre calculateur vous aide à faire rapidement et correctement.",
    s3P3: "Pour les transactions B2B au sein de l'UE, le mécanisme d'autoliquidation (reverse charge) s'applique généralement. Cela signifie que le fournisseur émet la facture sans TVA, et l'acheteur déclare et règle lui-même la TVA dans son propre pays. Cela simplifie considérablement l'administration mais nécessite que les deux parties disposent d'un numéro d'identification TVA valide pouvant être vérifié via le système VIES.",
    s3PhysicalTitle: "Produits physiques",
    s3PhysicalDesc: "La TVA est calculée en fonction du pays de livraison. Pour les expéditions vers d'autres pays de l'UE, le taux local s'applique aux ventes B2C au-dessus du seuil. Pour les exportations hors de l'UE, le taux zéro s'applique.",
    s3DigitalTitle: "Produits et services numériques",
    s3DigitalDesc: "Pour les produits et services numériques aux particuliers, le taux de TVA du pays du client s'applique, quel que soit le lieu d'établissement du vendeur. Cela comprend les logiciels, e-books, cours en ligne, services de streaming et produits SaaS.",
    s3P4: "Le dropshipping nécessite une attention particulière. En tant que dropshipper, vous êtes juridiquement le vendeur, même si vous ne manipulez jamais physiquement les marchandises. Cela signifie que vous êtes responsable du calcul et du paiement corrects de la TVA. Lors d'importations de l'extérieur de l'UE, vous devez tenir compte de la TVA à l'importation et des éventuels droits de douane. Notre calculateur vous aide à déterminer le montant de TVA correct, quelle que soit la complexité de votre modèle commercial.",
    s4Title: "Calculer la TVA pour les freelances et les travailleurs indépendants",
    s4P1: "En tant que freelance ou travailleur indépendant travaillant à l'international, il est crucial de comprendre quand facturer la TVA et quel taux s'applique. La règle de base est simple : pour les services aux entreprises (B2B) au sein de l'UE, l'autoliquidation s'applique, ce qui signifie que vous facturez sans TVA et l'acheteur déclare lui-même la TVA. Pour les services aux particuliers (B2C), le taux de TVA du pays où vous êtes établi en tant qu'entrepreneur s'applique généralement.",
    s4P2: "Il existe cependant des exceptions importantes. Les services fournis par voie électronique aux particuliers dans d'autres pays de l'UE relèvent du régime OSS, où le taux de TVA du pays du consommateur s'applique. Cela comprend notamment la conception web, la programmation, le conseil en ligne et autres services fournis numériquement. Notre calculateur vous aide à trouver rapidement le bon taux pour le pays de votre client.",
    s4P3: "Pour créer des factures et des devis corrects, il est essentiel de savoir quel montant de TVA calculer. Une facture à un client professionnel en Allemagne diffère fondamentalement d'une facture à un client particulier en Italie en termes de mention de TVA. Utilisez notre calculateur pour calculer le montant exact de TVA et indiquez toujours le taux de TVA correct, le montant de TVA et le montant total TTC et HT sur vos factures.",
    s4P4: "Dans de nombreux pays, les petites entreprises en dessous d'un certain chiffre d'affaires annuel peuvent utiliser un régime de franchise de TVA, les exonérant du paiement de la TVA mais leur interdisant également de déduire la TVA. Considérez attentivement si un tel régime est avantageux pour votre situation, surtout si vous avez de nombreuses dépenses professionnelles pour lesquelles vous souhaiteriez récupérer la TVA.",
    s5Title: "Calculer la TVA pour SaaS, logiciels et abonnements numériques",
    s5P1: "Le SaaS (Software as a Service) et les abonnements numériques sont un segment en croissance avec des règles de TVA spécifiques. Lorsque vous fournissez des services en tant que fournisseur SaaS à des consommateurs dans l'UE, vous devez appliquer le taux de TVA du pays du client. Cela s'applique à tous les services fournis par voie électronique, y compris les logiciels cloud, les plateformes de streaming, les outils en ligne et les sites d'adhésion.",
    s5P2: "La détermination de la localisation du client (le « lieu de prestation ») est cruciale et est établie à l'aide de deux éléments de preuve indépendants, tels que l'adresse de facturation, l'adresse IP, les coordonnées bancaires ou le numéro de téléphone. Les entreprises SaaS doivent mettre en place des systèmes qui capturent automatiquement ces informations pour respecter les obligations de TVA.",
    s5P3: "Pour les ventes B2B à des entreprises en dehors de votre propre pays mais au sein de l'UE, l'autoliquidation s'applique, à condition que l'acheteur dispose d'un numéro d'identification TVA valide. Pour les ventes à des entreprises ou des consommateurs en dehors de l'UE, le service n'est généralement pas soumis à la TVA dans l'UE, mais vous devez tenir compte des éventuelles obligations fiscales locales dans le pays du client.",
    s5P4: "Des plateformes comme Shopify, WooCommerce et autres systèmes e-commerce offrent de plus en plus de capacités de calcul de TVA intégrées, mais il est important de vérifier ces paramètres avec un calculateur indépendant. Les erreurs dans les calculs automatiques de TVA sont fréquentes, en particulier pour les transactions transfrontalières impliquant plusieurs taux.",
    s6Title: "TVA à l'import et à l'export : ce que vous devez savoir",
    s6P1: "Dans le commerce international, la TVA à l'import et à l'export joue un rôle crucial. L'exportation depuis l'UE vers des pays hors de l'UE (pays tiers) est en principe exonérée de TVA — le taux zéro. Cela s'applique aux biens comme à certains services. L'exportateur doit pouvoir démontrer que les marchandises ont effectivement quitté l'UE, par exemple au moyen de documents douaniers.",
    s6P2: "Lors de l'importation de marchandises de l'extérieur de l'UE, la TVA à l'importation est prélevée à la douane. Le taux de TVA appliqué est celui du pays d'importation. De plus, des droits de douane peuvent s'appliquer, selon le type de produit et le pays d'origine. Depuis 2021, l'exonération de TVA pour les envois d'une valeur inférieure à 22 € a été abolie dans l'UE, ce qui signifie que la TVA doit désormais être payée sur toutes les marchandises importées.",
    s6P3: "Pour les entreprises qui importent régulièrement, de nombreux pays de l'UE offrent la possibilité de différer la TVA à l'importation. Cela signifie que la TVA à l'importation n'a pas à être payée à la douane mais est traitée dans la déclaration périodique de TVA. Cela améliore considérablement la trésorerie, car vous pouvez immédiatement compenser la TVA à l'importation avec la TVA à payer.",
    s7Title: "Réglementation TVA de l'UE et le One Stop Shop (OSS)",
    s7P1: "L'Union européenne a créé un système harmonisé avec la directive TVA qui facilite le commerce transfrontalier. Bien que chaque pays de l'UE fixe ses propres taux, des règles communes s'appliquent pour le lieu de prestation, l'autoliquidation et les obligations administratives. Le régime One Stop Shop (OSS), introduit en juillet 2021, est un outil important pour les entreprises e-commerce et les fournisseurs de services numériques.",
    s7P2: "Via l'OSS, vous pouvez payer toute la TVA que vous devez à d'autres pays de l'UE via une seule déclaration trimestrielle dans votre propre pays. Cela vous évite de devoir vous enregistrer à la TVA dans chaque pays de l'UE séparément — une simplification administrative considérable. L'OSS est disponible pour les ventes B2C de biens et de services numériques aux consommateurs d'autres pays de l'UE.",
    s7P3: "En plus de l'OSS, il existe l'Import One Stop Shop (IOSS) pour les marchandises importées de l'extérieur de l'UE d'une valeur allant jusqu'à 150 €. Via l'IOSS, le vendeur ou la plateforme peut collecter et payer la TVA au moment de la vente, ce qui signifie que l'acheteur n'a pas à payer la TVA à l'importation à la réception. Cela améliore l'expérience client et accélère le processus de livraison.",
    s7P4: "Il est essentiel de savoir que le mécanisme d'autoliquidation ne s'applique que lorsque les deux parties ont un numéro d'identification TVA valide. Vous pouvez le vérifier via le système VIES (VAT Information Exchange System) de la Commission européenne. En cas de doute sur la validité d'un numéro de TVA, vous devez facturer le taux de TVA standard pour éviter les redressements.",
    s8Title: "TVA et taxe de vente dans le monde : Systèmes importants hors de l'UE",
    s8P1: "En dehors de l'Union européenne, les pays utilisent des systèmes de taxe à la consommation très différents. Le Royaume-Uni a conservé son propre système de VAT après le Brexit, avec un taux standard et des taux réduits pour des catégories spécifiques. L'Australie, la Nouvelle-Zélande, le Canada et Singapour utilisent le terme GST mais il fonctionne de manière similaire à la TVA. Les États-Unis sont une exception avec leur système décentralisé de taxe de vente, où les taux varient selon l'État et parfois même selon la municipalité.",
    s8P2: "Pour les entrepreneurs internationaux vendant également en dehors de l'UE, il est crucial de connaître les obligations fiscales locales. Dans de nombreux pays, un seuil d'enregistrement s'applique : une fois que vous réalisez plus d'un certain montant de chiffre d'affaires dans ce pays, vous devez vous enregistrer pour la taxe à la consommation locale. Cela s'applique de plus en plus aux services numériques et à l'e-commerce, des pays comme l'Australie, le Japon et la Corée du Sud imposant des obligations aux fournisseurs étrangers.",
    s8P3: "Notre calculateur prend en charge plus de 60 pays et fournit des taux actuels pour les pays de l'UE et hors UE. Cela en fait l'outil idéal pour les entreprises opérant dans le monde entier qui souhaitent calculer rapidement le bon taux de TVA ou de GST pour leurs transactions internationales.",
    s9Title: "Conformité TVA : meilleures pratiques pour 2025-2026",
    s9P1: "Une conformité TVA correcte nécessite plus que le simple calcul du bon taux. Elle comprend une administration solide, des déclarations dans les délais, une facturation correcte et la conservation de toute la documentation pertinente. Les autorités fiscales de l'UE et au-delà deviennent de plus en plus strictes dans leur application, en particulier pour l'e-commerce et les services numériques. Investissez dans un bon logiciel de comptabilité et consultez un conseiller fiscal ayant une expérience internationale en cas de doute.",
    s9InvoiceTitle: "Facturation et administration",
    s9InvoiceItems: [
      "Indiquez toujours le taux et le montant de TVA sur les factures",
      "Conservez les factures pendant au moins 10 ans ou selon les règles locales",
      "Utilisez une numérotation de factures consécutive",
      "Incluez les numéros d'identification TVA des deux parties",
      "Pour l'autoliquidation : mentionnez « Autoliquidation » sur la facture"
    ],
    s9DeadlineTitle: "Délais et déclarations",
    s9DeadlineItems: [
      "Déposez toujours les déclarations de TVA dans les délais",
      "Déclaration OSS : chaque trimestre (mois après la fin du trimestre)",
      "Listing VIES : chaque trimestre pour les transactions B2B UE",
      "Conservez les preuves de localisation du client",
      "Surveillez les montants seuils pour l'obligation d'enregistrement"
    ],
    s9P2: "La tendance est claire : les gouvernements investissent davantage dans les outils d'application numérique et le reporting en temps réel. Des pays comme l'Italie, la Hongrie et l'Espagne ont déjà introduit des systèmes de facturation en temps réel ou les mettent en œuvre. Il est donc judicieux d'investir dès maintenant dans des systèmes robustes de calcul et de reporting de TVA, afin d'être préparé aux futurs changements réglementaires.",
    s10Title: "À quoi pouvez-vous utiliser notre calculateur de TVA ?",
    s10P1: "Notre calculateur de TVA international est conçu pour une large gamme d'applications. Ci-dessous, vous trouverez un aperçu des scénarios courants pour lesquels les entrepreneurs utilisent notre outil :",
    s10UseCases: [
      { term: "Calculer la TVA pour les prix de boutique en ligne", desc: "Déterminez le prix de vente correct TTC ou HT pour votre boutique en ligne." },
      { term: "Calculer la TVA pour les produits importés", desc: "Calculez la TVA à l'importation et les coûts totaux lors de l'importation de marchandises." },
      { term: "Calculer la TVA pour les services en ligne", desc: "Déterminez le taux correct pour les services fournis numériquement aux clients du monde entier." },
      { term: "Calculer la TVA pour Shopify", desc: "Vérifiez les paramètres de TVA de votre boutique Shopify avec les taux actuels." },
      { term: "Calculer la TVA pour WooCommerce", desc: "Vérifiez les calculs de TVA de votre boutique WooCommerce pour tous les pays de l'UE." },
      { term: "Calculer la TVA pour SaaS", desc: "Calculez la TVA sur les produits software-as-a-service pour les clients internationaux." },
      { term: "Calculer la TVA pour le dropshipping", desc: "Calculez les obligations de TVA pour le modèle de dropshipping avec des fournisseurs internationaux." },
      { term: "Calculer la TVA pour les freelances", desc: "Calculez le montant de TVA correct sur vos factures en tant que professionnel indépendant." },
      { term: "Calculer la TVA pour les indépendants", desc: "Déterminez les obligations de TVA et les éventuelles exonérations en tant qu'entrepreneur individuel." },
      { term: "Calculer la TVA pour les factures", desc: "Calculez exactement le montant de TVA qui doit figurer sur votre facture." },
      { term: "Calculer la TVA pour les produits numériques", desc: "Calculez la TVA sur les téléchargements, modèles, e-books et autres biens numériques." },
      { term: "Calculer la TVA pour les ventes internationales", desc: "Déterminez le taux de TVA correct pour les ventes transfrontalières dans le monde." }
    ],
    s11Title: "Pourquoi choisir ce calculateur de TVA international ?",
    s11P1: "Notre calculateur de TVA se distingue par une combinaison de fiabilité, de facilité d'utilisation et d'exhaustivité. Avec le support de plus de 60 pays, tant à l'intérieur qu'à l'extérieur de l'UE, c'est le calculateur de TVA gratuit le plus complet disponible. L'outil est régulièrement mis à jour avec les derniers changements de taux et offre des taux standard et réduits pour chaque pays.",
    s11P2: "Que vous ayez besoin d'un calcul rapide pour une seule facture ou que vous fassiez une analyse approfondie des obligations de TVA dans plusieurs pays — notre calculateur fournit des résultats immédiatement précis. L'interface intuitive le rend accessible à tous, du freelance débutant à l'entrepreneur international expérimenté.",
    s11P3: "Tous les calculs sont effectués localement dans votre navigateur, ce qui signifie que vos données ne sont pas envoyées aux serveurs. Cela garantit une confidentialité totale et rend également l'outil disponible hors ligne une fois la page chargée. Combinez notre calculateur avec nos autres services tels que les Noms de Domaine Premium pour la croissance SEO et les Documents Juridiques pour la conformité de site web afin de construire votre entreprise internationale sur des bases solides."
  }
};

// Helper function to create translated guides for remaining languages
// Uses a similar structure but with translated content
const createGuideTranslation = (
  langCode: string,
  badge: string,
  title: string,
  subtitle: string,
  vatTerm: string // Local term for VAT (MwSt, IVA, TVA, etc.)
): VATGuideContent => ({
  badge,
  title,
  subtitle,
  sections: {
    s1Title: guideEN.sections.s1Title.replace(/VAT/g, vatTerm),
    s1P1: guideEN.sections.s1P1.replace(/VAT/g, vatTerm),
    s1P2: guideEN.sections.s1P2.replace(/VAT/g, vatTerm),
    s1P3: guideEN.sections.s1P3.replace(/VAT/g, vatTerm),
    s2Title: guideEN.sections.s2Title.replace(/VAT/g, vatTerm),
    s2P1: guideEN.sections.s2P1.replace(/VAT/g, vatTerm),
    s2P2: guideEN.sections.s2P2.replace(/VAT/g, vatTerm),
    s2FormulaTitle: guideEN.sections.s2FormulaTitle.replace(/VAT/g, vatTerm),
    s2FormulaAdd: guideEN.sections.s2FormulaAdd.replace(/VAT/g, vatTerm),
    s2FormulaAddDesc: guideEN.sections.s2FormulaAddDesc.replace(/VAT/g, vatTerm),
    s2FormulaRemove: guideEN.sections.s2FormulaRemove.replace(/VAT/g, vatTerm),
    s2FormulaRemoveDesc: guideEN.sections.s2FormulaRemoveDesc.replace(/VAT/g, vatTerm),
    s2FormulaTip: guideEN.sections.s2FormulaTip.replace(/VAT/g, vatTerm),
    s2P3: guideEN.sections.s2P3.replace(/VAT/g, vatTerm),
    s3Title: guideEN.sections.s3Title.replace(/VAT/g, vatTerm),
    s3P1: guideEN.sections.s3P1.replace(/VAT/g, vatTerm),
    s3P2: guideEN.sections.s3P2.replace(/VAT/g, vatTerm),
    s3P3: guideEN.sections.s3P3.replace(/VAT/g, vatTerm),
    s3PhysicalTitle: guideEN.sections.s3PhysicalTitle,
    s3PhysicalDesc: guideEN.sections.s3PhysicalDesc.replace(/VAT/g, vatTerm),
    s3DigitalTitle: guideEN.sections.s3DigitalTitle,
    s3DigitalDesc: guideEN.sections.s3DigitalDesc.replace(/VAT/g, vatTerm),
    s3P4: guideEN.sections.s3P4.replace(/VAT/g, vatTerm),
    s4Title: guideEN.sections.s4Title.replace(/VAT/g, vatTerm),
    s4P1: guideEN.sections.s4P1.replace(/VAT/g, vatTerm),
    s4P2: guideEN.sections.s4P2.replace(/VAT/g, vatTerm),
    s4P3: guideEN.sections.s4P3.replace(/VAT/g, vatTerm),
    s4P4: guideEN.sections.s4P4.replace(/VAT/g, vatTerm),
    s5Title: guideEN.sections.s5Title.replace(/VAT/g, vatTerm),
    s5P1: guideEN.sections.s5P1.replace(/VAT/g, vatTerm),
    s5P2: guideEN.sections.s5P2.replace(/VAT/g, vatTerm),
    s5P3: guideEN.sections.s5P3.replace(/VAT/g, vatTerm),
    s5P4: guideEN.sections.s5P4.replace(/VAT/g, vatTerm),
    s6Title: guideEN.sections.s6Title.replace(/VAT/g, vatTerm),
    s6P1: guideEN.sections.s6P1.replace(/VAT/g, vatTerm),
    s6P2: guideEN.sections.s6P2.replace(/VAT/g, vatTerm),
    s6P3: guideEN.sections.s6P3.replace(/VAT/g, vatTerm),
    s7Title: guideEN.sections.s7Title.replace(/VAT/g, vatTerm),
    s7P1: guideEN.sections.s7P1.replace(/VAT/g, vatTerm),
    s7P2: guideEN.sections.s7P2.replace(/VAT/g, vatTerm),
    s7P3: guideEN.sections.s7P3.replace(/VAT/g, vatTerm),
    s7P4: guideEN.sections.s7P4.replace(/VAT/g, vatTerm),
    s8Title: guideEN.sections.s8Title.replace(/VAT/g, vatTerm),
    s8P1: guideEN.sections.s8P1.replace(/VAT/g, vatTerm),
    s8P2: guideEN.sections.s8P2.replace(/VAT/g, vatTerm),
    s8P3: guideEN.sections.s8P3.replace(/VAT/g, vatTerm),
    s9Title: guideEN.sections.s9Title.replace(/VAT/g, vatTerm),
    s9P1: guideEN.sections.s9P1.replace(/VAT/g, vatTerm),
    s9InvoiceTitle: guideEN.sections.s9InvoiceTitle,
    s9InvoiceItems: guideEN.sections.s9InvoiceItems.map(i => i.replace(/VAT/g, vatTerm)),
    s9DeadlineTitle: guideEN.sections.s9DeadlineTitle,
    s9DeadlineItems: guideEN.sections.s9DeadlineItems.map(i => i.replace(/VAT/g, vatTerm)),
    s9P2: guideEN.sections.s9P2.replace(/VAT/g, vatTerm),
    s10Title: guideEN.sections.s10Title.replace(/VAT/g, vatTerm),
    s10P1: guideEN.sections.s10P1.replace(/VAT/g, vatTerm),
    s10UseCases: guideEN.sections.s10UseCases.map(uc => ({
      term: uc.term.replace(/VAT/g, vatTerm),
      desc: uc.desc.replace(/VAT/g, vatTerm)
    })),
    s11Title: guideEN.sections.s11Title.replace(/VAT/g, vatTerm),
    s11P1: guideEN.sections.s11P1.replace(/VAT/g, vatTerm),
    s11P2: guideEN.sections.s11P2.replace(/VAT/g, vatTerm),
    s11P3: guideEN.sections.s11P3.replace(/VAT/g, vatTerm)
  }
});

// ═══════════════════════════════════════════
// SPANISH (ES)
// ═══════════════════════════════════════════
const guideES: VATGuideContent = {
  badge: "Guía Completa de IVA 2025-2026",
  title: "La Guía Definitiva para el Cálculo del IVA Internacional",
  subtitle: "Todo lo que necesitas saber sobre el cálculo del IVA para e-commerce, freelancers, empresas SaaS y comercio internacional — actual, fiable y basado en años de experiencia práctica.",
  sections: {
    s1Title: "¿Qué es el IVA y por qué es esencial calcularlo correctamente?",
    s1P1: "IVA significa Impuesto sobre el Valor Añadido y es un impuesto al consumo que se aplica sobre bienes y servicios en más de 170 países en todo el mundo. En inglés se denomina VAT (Value Added Tax), mientras que algunos países utilizan el término GST (Goods and Services Tax). Aunque los nombres difieren, el sistema subyacente es fundamentalmente el mismo: el impuesto se añade en cada eslabón de la cadena de producción y distribución.",
    s1P2: "Para empresarios, autónomos y empresas que operan internacionalmente, calcular correctamente el IVA no es solo una obligación legal, sino también una necesidad estratégica. Los errores en los cálculos de IVA pueden derivar en recargos, multas y problemas administrativos con las autoridades fiscales de varios países. Nuestra calculadora internacional de IVA gratuita te ayuda a evitar estos riesgos proporcionando cálculos precisos basados en las tasas vigentes.",
    s1P3: "Ya sea que gestiones una tienda online que envía productos a clientes en toda Europa, ofrezcas una plataforma SaaS a usuarios de todo el mundo, o prestes servicios como freelancer a clientes internacionales — aplicar correctamente las tasas de IVA es fundamental para una gestión empresarial saludable. Esta guía te ayuda a comprender la complejidad del IVA internacional y te proporciona herramientas prácticas para evitar errores.",
    s2Title: "¿Cómo funciona el sistema de IVA en el mundo?",
    s2P1: "El sistema de IVA es único porque se aplica en cada eslabón de la cadena de valor. Un fabricante paga IVA sobre las materias primas, añade valor al producto y cobra IVA al mayorista. El mayorista hace lo mismo con el minorista, que finalmente cobra IVA al consumidor. En cada eslabón, el IVA previamente pagado (IVA soportado) puede deducirse, de modo que solo el consumidor final soporta la carga fiscal total.",
    s2P2: "Este sistema difiere fundamentalmente de un simple impuesto sobre las ventas (sales tax), como el que se utiliza en algunos estados de EE.UU. Con el impuesto sobre ventas, el impuesto se aplica una sola vez, en el punto de venta al consumidor final. El sistema de IVA ofrece más transparencia y evita la cascada fiscal, por lo que ha sido adoptado por la mayoría de los países del mundo.",
    s2FormulaTitle: "Cálculo del IVA: las fórmulas básicas",
    s2FormulaAdd: "Añadir IVA (sin IVA → con IVA):",
    s2FormulaAddDesc: "Importe con IVA = Importe sin IVA × (1 + Porcentaje de IVA / 100)",
    s2FormulaRemove: "Quitar IVA (con IVA → sin IVA):",
    s2FormulaRemoveDesc: "Importe sin IVA = Importe con IVA ÷ (1 + Porcentaje de IVA / 100)",
    s2FormulaTip: "Consejo: Usa nuestra calculadora de arriba para realizar estos cálculos automáticamente y sin errores para cualquier país.",
    s2P3: "Es importante saber que casi todos los países aplican múltiples tasas de IVA. Además de la tasa estándar, existen tasas reducidas para bienes esenciales como alimentos, medicamentos, libros y servicios culturales. Algunos países incluso aplican una tasa cero o exenciones para categorías específicas. Las tasas exactas y qué productos se incluyen en cada categoría varían según el país. Nuestra calculadora muestra automáticamente todas las tasas disponibles una vez que seleccionas un país.",
    s3Title: "Calcular IVA para e-commerce, tiendas online y ventas en línea",
    s3P1: "El sector del comercio electrónico es una de las áreas más complejas en lo que respecta al cálculo del IVA. Los vendedores online deben tener en cuenta el país del comprador, el tipo de producto o servicio, y si el cliente es un particular (B2C) o una empresa (B2B). Dentro de la Unión Europea, el régimen de Ventanilla Única (OSS) está vigente desde julio de 2021, lo que permite declarar el IVA de todos los países de la UE a través de una única declaración.",
    s3P2: "Para las tiendas online que venden productos físicos a consumidores en otros países de la UE, se debe aplicar la tasa de IVA del país del cliente una vez que las ventas totales a consumidores de la UE superen el umbral de 10.000 € anuales. Esto significa que una tienda española que vende a un consumidor alemán debe calcular y declarar la tasa de IVA alemana — algo que nuestra calculadora te ayuda a hacer de forma rápida y correcta.",
    s3P3: "Para las transacciones B2B dentro de la UE, generalmente se aplica el mecanismo de inversión del sujeto pasivo (reverse charge). Esto significa que el proveedor emite la factura sin IVA, y el comprador declara y liquida el IVA en su propio país. Esto simplifica considerablemente la administración, pero requiere que ambas partes dispongan de un número de identificación fiscal (NIF-IVA) válido que pueda verificarse a través del sistema VIES.",
    s3PhysicalTitle: "Productos físicos",
    s3PhysicalDesc: "El IVA se calcula en función del país de entrega. Al enviar a otros países de la UE, se aplica la tasa local para ventas B2C por encima del umbral. Para exportaciones fuera de la UE, se aplica la tasa cero.",
    s3DigitalTitle: "Productos y servicios digitales",
    s3DigitalDesc: "Para productos y servicios digitales a particulares, se aplica la tasa de IVA del país del cliente, independientemente de dónde esté establecido el vendedor. Esto incluye software, libros electrónicos, cursos online, servicios de streaming y productos SaaS.",
    s3P4: "El dropshipping requiere una atención especial. Como dropshipper, eres legalmente el vendedor, aunque nunca manejes físicamente la mercancía. Esto significa que eres responsable del cálculo y pago correcto del IVA. Al importar desde fuera de la UE, debes tener en cuenta el IVA de importación y los posibles derechos de aduana. Nuestra calculadora te ayuda a determinar el importe correcto de IVA, independientemente de la complejidad de tu modelo de negocio.",
    s4Title: "Calcular IVA para freelancers y autónomos",
    s4P1: "Como freelancer o autónomo que trabaja internacionalmente, es crucial entender cuándo debes cobrar IVA y qué tasa se aplica. La regla básica es sencilla: para servicios a empresas (B2B) dentro de la UE se aplica la inversión del sujeto pasivo, lo que significa que facturas sin IVA y el comprador declara el IVA por sí mismo. Para servicios a particulares (B2C), generalmente se aplica la tasa de IVA del país donde estás establecido como empresario.",
    s4P2: "Sin embargo, existen excepciones importantes. Los servicios prestados electrónicamente a particulares en otros países de la UE están sujetos al régimen OSS, donde se aplica la tasa de IVA del país del consumidor. Esto incluye diseño web, programación, consultoría online y otros servicios prestados digitalmente. Nuestra calculadora te ayuda a encontrar rápidamente la tasa correcta para el país de tu cliente.",
    s4P3: "Para elaborar facturas y presupuestos correctos, es esencial saber qué importe de IVA debes calcular. Una factura a un cliente empresarial en Alemania difiere fundamentalmente de una factura a un cliente particular en Italia en cuanto a la mención del IVA. Usa nuestra calculadora para calcular el importe exacto de IVA e indica siempre la tasa de IVA correcta, el importe de IVA y el total con y sin IVA en tus facturas.",
    s4P4: "En España, los autónomos con una facturación anual por debajo de cierto umbral pueden acogerse a regímenes simplificados de IVA. Regímenes similares existen en muchos otros países. Considera cuidadosamente si dicho régimen es ventajoso para tu situación, especialmente si tienes muchos gastos empresariales por los que desearías recuperar el IVA.",
    s5Title: "Calcular IVA para SaaS, software y suscripciones digitales",
    s5P1: "SaaS (Software as a Service) y las suscripciones digitales son un segmento en crecimiento con reglas de IVA específicas. Cuando como proveedor de SaaS prestas servicios a consumidores en la UE, debes aplicar la tasa de IVA del país del cliente. Esto se aplica a todos los servicios prestados electrónicamente, incluyendo software en la nube, plataformas de streaming, herramientas online y sitios de membresía.",
    s5P2: "La determinación de la ubicación del cliente (el \"lugar de prestación\") es crucial y se establece mediante dos pruebas independientes, como la dirección de facturación, la dirección IP, los datos bancarios o el número de teléfono. Las empresas SaaS deben implementar sistemas que capturen automáticamente esta información para cumplir con las obligaciones del IVA.",
    s5P3: "Para ventas B2B a empresas fuera de tu propio país pero dentro de la UE, se aplica la inversión del sujeto pasivo, siempre que el comprador tenga un NIF-IVA válido. Para ventas a empresas o consumidores fuera de la UE, el servicio normalmente no está gravado con IVA en la UE, pero debes tener en cuenta las posibles obligaciones fiscales locales en el país del cliente.",
    s5P4: "Plataformas como Shopify, WooCommerce y otros sistemas de e-commerce ofrecen cada vez más funcionalidades de cálculo de IVA integradas, pero es importante verificar estas configuraciones con una calculadora independiente. Los errores en los cálculos automáticos de IVA son frecuentes, especialmente en transacciones transfronterizas con múltiples tasas.",
    s6Title: "IVA en importación y exportación: lo que necesitas saber",
    s6P1: "En el comercio internacional, el IVA de importación y exportación desempeña un papel crucial. La exportación desde la UE a países fuera de la UE (terceros países) está en principio exenta de IVA — la denominada tasa cero. Esto se aplica tanto a bienes como a determinados servicios. El exportador debe poder demostrar que las mercancías han abandonado efectivamente la UE, por ejemplo, mediante documentos aduaneros.",
    s6P2: "Al importar mercancías de fuera de la UE, se aplica el IVA de importación en la aduana. La tasa de IVA aplicada es la del país de importación. Además, pueden aplicarse derechos de aduana según el tipo de producto y el país de origen. Desde 2021, se ha eliminado la exención de IVA para envíos con un valor inferior a 22 € en la UE, lo que significa que ahora se debe pagar IVA sobre todas las mercancías importadas.",
    s6P3: "Para empresas que importan regularmente, muchos países de la UE ofrecen la posibilidad de diferir el IVA de importación. Esto significa que el IVA de importación no se paga en la aduana, sino que se incluye en la declaración periódica de IVA. Esto mejora significativamente el flujo de caja, ya que puedes compensar inmediatamente el IVA de importación con el IVA a pagar.",
    s7Title: "Normativa de IVA de la UE y el One Stop Shop (OSS)",
    s7P1: "La Unión Europea ha creado un sistema armonizado con la Directiva del IVA que facilita el comercio transfronterizo. Aunque cada país de la UE fija sus propias tasas, se aplican reglas comunes para el lugar de prestación, la inversión del sujeto pasivo y las obligaciones administrativas. El régimen de Ventanilla Única (OSS), introducido en julio de 2021, es un instrumento importante para empresas de e-commerce y proveedores de servicios digitales.",
    s7P2: "A través del OSS, puedes declarar todo el IVA que debes a otros países de la UE mediante una única declaración trimestral en tu propio país. Esto evita tener que registrarte para el IVA en cada país de la UE por separado — una enorme simplificación administrativa. El OSS está disponible para ventas B2C de bienes y servicios digitales a consumidores en otros países de la UE.",
    s7P3: "Además del OSS, existe el Import One Stop Shop (IOSS) para mercancías importadas de fuera de la UE con un valor de hasta 150 €. A través del IOSS, el vendedor o la plataforma puede recaudar y declarar el IVA en el momento de la venta, lo que significa que el comprador no tiene que pagar IVA de importación al recibir el paquete. Esto mejora la experiencia del cliente y acelera el proceso de entrega.",
    s7P4: "Es fundamental saber que la inversión del sujeto pasivo solo se aplica cuando ambas partes tienen un NIF-IVA válido. Puedes verificarlo a través del sistema VIES (VAT Information Exchange System) de la Comisión Europea. En caso de duda sobre la validez de un NIF-IVA, debes cobrar la tasa de IVA estándar para evitar recargos.",
    s8Title: "IVA e impuestos sobre ventas en el mundo: sistemas importantes fuera de la UE",
    s8P1: "Fuera de la Unión Europea, los países utilizan sistemas de impuestos al consumo muy diversos. El Reino Unido ha mantenido su propio sistema de VAT tras el Brexit, con una tasa estándar y tasas reducidas para categorías específicas. Australia, Nueva Zelanda, Canadá y Singapur utilizan el término GST, pero funciona de manera similar al IVA. Estados Unidos es una excepción con su sistema descentralizado de sales tax, donde las tasas varían según el estado e incluso según el municipio.",
    s8P2: "Para empresarios internacionales que también venden fuera de la UE, es crucial conocer las obligaciones fiscales locales. En muchos países existe un umbral de registro: una vez que alcanzas cierto volumen de facturación en ese país, debes registrarte para el impuesto al consumo local. Esto se aplica cada vez más a los servicios digitales y al e-commerce, con países como Australia, Japón y Corea del Sur que imponen obligaciones a los proveedores extranjeros.",
    s8P3: "Nuestra calculadora es compatible con más de 60 países y ofrece tasas actualizadas tanto para países de la UE como para países fuera de la UE. Esto la convierte en la herramienta ideal para empresas que operan a nivel mundial y desean calcular rápidamente la tasa de IVA o GST correcta para sus transacciones internacionales.",
    s9Title: "Cumplimiento del IVA: mejores prácticas para 2025-2026",
    s9P1: "El cumplimiento correcto del IVA requiere más que simplemente calcular la tasa correcta. Incluye una administración sólida, declaraciones puntuales, facturación correcta y la conservación de toda la documentación relevante. Las autoridades fiscales en la UE y fuera de ella son cada vez más estrictas en su aplicación, especialmente para el e-commerce y los servicios digitales. Invierte en un buen software de contabilidad y consulta con un asesor fiscal con experiencia internacional en caso de duda.",
    s9InvoiceTitle: "Facturación y administración",
    s9InvoiceItems: [
      "Indica siempre la tasa y el importe de IVA en las facturas",
      "Conserva las facturas durante al menos 4 años (España) o según las normas locales",
      "Utiliza una numeración de facturas consecutiva",
      "Incluye los números de identificación fiscal de ambas partes",
      "En caso de inversión del sujeto pasivo: indica \"IVA a cargo del destinatario\" en la factura"
    ],
    s9DeadlineTitle: "Plazos y declaraciones",
    s9DeadlineItems: [
      "Presenta siempre las declaraciones de IVA a tiempo",
      "Declaración OSS: cada trimestre (mes siguiente al cierre del trimestre)",
      "Listado VIES: cada trimestre para transacciones B2B intracomunitarias",
      "Conserva las pruebas de la ubicación del cliente",
      "Supervisa los umbrales para la obligación de registro"
    ],
    s9P2: "La tendencia es clara: los gobiernos invierten cada vez más en herramientas de control digital y reportes en tiempo real. Países como Italia, Hungría y España ya han introducido sistemas de facturación en tiempo real o los están implementando. Por tanto, es recomendable invertir ahora en sistemas robustos de cálculo y reporte de IVA para estar preparado ante futuros cambios normativos.",
    s10Title: "¿Para qué puedes usar nuestra calculadora de IVA?",
    s10P1: "Nuestra calculadora internacional de IVA está diseñada para una amplia gama de aplicaciones. A continuación encontrarás un resumen de los escenarios más habituales para los que los empresarios utilizan nuestra herramienta:",
    s10UseCases: [
      { term: "Calcular IVA para precios de tienda online", desc: "Determina el precio de venta correcto con o sin IVA para tu tienda en línea." },
      { term: "Calcular IVA para productos importados", desc: "Calcula el IVA de importación y los costes totales al importar mercancías." },
      { term: "Calcular IVA para servicios online", desc: "Determina la tasa correcta para servicios prestados digitalmente a clientes de todo el mundo." },
      { term: "Calcular IVA para Shopify", desc: "Verifica la configuración de IVA de tu tienda Shopify con las tasas actuales." },
      { term: "Calcular IVA para WooCommerce", desc: "Comprueba los cálculos de IVA de tu tienda WooCommerce para todos los países de la UE." },
      { term: "Calcular IVA para SaaS", desc: "Calcula el IVA sobre productos de software como servicio para clientes internacionales." },
      { term: "Calcular IVA para dropshipping", desc: "Calcula las obligaciones de IVA en el modelo de dropshipping con proveedores internacionales." },
      { term: "Calcular IVA para freelancers", desc: "Calcula el importe correcto de IVA en tus facturas como profesional autónomo." },
      { term: "Calcular IVA para autónomos", desc: "Determina las obligaciones de IVA y posibles exenciones como trabajador autónomo." },
      { term: "Calcular IVA para facturas", desc: "Calcula exactamente el importe de IVA que debe figurar en tu factura." },
      { term: "Calcular IVA para productos digitales", desc: "Calcula el IVA sobre descargas, plantillas, libros electrónicos y otros bienes digitales." },
      { term: "Calcular IVA para ventas internacionales", desc: "Determina la tasa de IVA correcta para ventas transfronterizas en todo el mundo." }
    ],
    s11Title: "¿Por qué elegir esta calculadora de IVA internacional?",
    s11P1: "Nuestra calculadora de IVA se distingue por una combinación de fiabilidad, facilidad de uso y exhaustividad. Con soporte para más de 60 países, tanto dentro como fuera de la UE, es la calculadora de IVA gratuita más completa disponible. La herramienta se actualiza regularmente con los últimos cambios de tasas y ofrece tanto tasas estándar como reducidas para cada país.",
    s11P2: "Ya sea que necesites un cálculo rápido para una sola factura o estés realizando un análisis exhaustivo de las obligaciones de IVA en varios países — nuestra calculadora proporciona resultados precisos de inmediato. La interfaz intuitiva la hace accesible para todos, desde el autónomo principiante hasta el empresario internacional experimentado.",
    s11P3: "Todos los cálculos se realizan localmente en tu navegador, lo que significa que tus datos no se envían a servidores. Esto garantiza total privacidad y también hace que la herramienta esté disponible sin conexión después de cargar la página. Combina nuestra calculadora con nuestros otros servicios como Nombres de Dominio Premium para el crecimiento SEO y Documentos Legales para el cumplimiento de tu sitio web, y construye tu negocio internacional sobre una base sólida."
  }
};

// Export all guide translations
export const vatGuideTranslations: Record<string, VATGuideContent> = {
  nl: guideNL,
  en: guideEN,
  de: guideDE,
  fr: guideFR,
  es: guideES,
  it: guideIT,
  pt: guidePT,
  pl: guidePL,
  tr: guideTR,
  sv: guideSV,
  no: guideNO,
  da: guideDA,
  fi: guideFI,
  is: guideIS,
  cs: guideCS,
  sk: guideSK,
  hr: guideHR,
  sr: guideSR,
  sl: guideSL,
  bs: guideBS,
  mk: guideMK,
  ar: guideAR,
  hi: guideHI,
  ja: guideJA,
  zh: guideZH,
  el: guideEL,
  ko: guideKO,
  ru: guideRU,
  ro: guideRO,
  bg: guideBG,
  uk: guideUK,
  hu: guideHU,
  th: createGuideTranslation("th", "คู่มือภาษีมูลค่าเพิ่ม 2025-2026", "คู่มือฉบับสมบูรณ์สำหรับการคำนวณภาษีมูลค่าเพิ่มระหว่างประเทศ", "ทุกสิ่งที่คุณต้องรู้เกี่ยวกับการคำนวณภาษีมูลค่าเพิ่ม", "VAT"),
  vi: createGuideTranslation("vi", "Hướng Dẫn VAT 2025-2026", "Hướng Dẫn Đầy Đủ về Tính Thuế GTGT Quốc Tế", "Tất cả những gì bạn cần biết về tính thuế GTGT.", "VAT"),
  id: createGuideTranslation("id", "Panduan PPN 2025-2026", "Panduan Lengkap Perhitungan PPN Internasional", "Semua yang perlu Anda ketahui tentang perhitungan PPN.", "PPN"),
  et: createGuideTranslation("et", "KM Juhend 2025-2026", "Täielik Juhend Rahvusvahelise KM Arvutamiseks", "Kõik, mida peate teadma KM arvutamise kohta.", "KM"),
  lv: createGuideTranslation("lv", "PVN Ceļvedis 2025-2026", "Pilnīgs Ceļvedis Starptautiska PVN Aprēķināšanai", "Viss, kas jums jāzina par PVN aprēķināšanu.", "PVN"),
  lt: createGuideTranslation("lt", "PVM Vadovas 2025-2026", "Išsamus Vadovas Tarptautiniam PVM Skaičiavimui", "Viskas, ką reikia žinoti apie PVM skaičiavimą.", "PVM"),
  sq: createGuideTranslation("sq", "Udhëzues TVSH 2025-2026", "Udhëzuesi i Plotë për Llogaritjen e TVSH-së Ndërkombëtare", "Gjithçka që duhet të dini për llogaritjen e TVSH-së.", "TVSH"),
  lb: createGuideTranslation("lb", "MwSt Guide 2025-2026", "De Komplett Guide fir International MwSt Berechnung", "Alles wat Dir iwwer MwSt Berechnung wësse musst.", "MwSt"),
  bn: createGuideTranslation("bn", "ভ্যাট গাইড 2025-2026", "আন্তর্জাতিক ভ্যাট গণনার সম্পূর্ণ গাইড", "ভ্যাট গণনা সম্পর্কে আপনার যা জানা দরকার।", "VAT"),
  ms: createGuideTranslation("ms", "Panduan GST 2025-2026", "Panduan Lengkap Pengiraan GST Antarabangsa", "Semua yang anda perlu tahu tentang pengiraan GST.", "GST")
};

export default vatGuideTranslations;

import { BookOpen, ShoppingCart, Globe, Building2, Users, FileText, TrendingUp, Shield, Calculator, Briefcase, Laptop, Store, Package, Truck, CreditCard, Scale, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VATComprehensiveGuideNL = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Uitgebreide BTW Gids 2025-2026</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              De Ultieme Gids voor Internationaal BTW Berekenen
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Alles wat je moet weten over BTW berekenen voor webshops, freelancers, SaaS-bedrijven en internationale handel — actueel, betrouwbaar en gebaseerd op jarenlange praktijkervaring.
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-12">

            {/* Section 1: Wat is BTW en waarom is het belangrijk? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Scale className="w-7 h-7 text-primary flex-shrink-0" />
                Wat is BTW en waarom is correct berekenen essentieel?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                BTW staat voor Belasting over de Toegevoegde Waarde en is een consumptiebelasting die wordt geheven op goederen en diensten in meer dan 170 landen wereldwijd. In het Engels wordt dit VAT (Value Added Tax) genoemd, terwijl sommige landen de term GST (Goods and Services Tax) gebruiken. Hoewel de namen verschillen, is het onderliggende systeem in de kern hetzelfde: belasting wordt in elke schakel van de productie- en distributieketen toegevoegd.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Voor ondernemers, freelancers en bedrijven die internationaal opereren is het correct berekenen van BTW niet alleen een wettelijke verplichting, maar ook een strategische noodzaak. Fouten in BTW-berekeningen kunnen leiden tot naheffingen, boetes en administratieve problemen met belastingdiensten in meerdere landen. Onze gratis internationale BTW-calculator helpt je om deze risico's te vermijden door nauwkeurige berekeningen te bieden op basis van actuele tarieven.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Of je nu een webshop runt die producten verzendt naar klanten in heel Europa, een SaaS-platform aanbiedt aan gebruikers wereldwijd, of als freelancer diensten levert aan internationale klanten — het correct toepassen van BTW-tarieven is fundamenteel voor een gezonde bedrijfsvoering. Deze gids helpt je om de complexiteit van internationale BTW te doorgronden en geeft je praktische handvatten om fouten te voorkomen.
              </p>
            </div>

            {/* Section 2: Hoe werkt het BTW-systeem? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Calculator className="w-7 h-7 text-secondary flex-shrink-0" />
                Hoe werkt het BTW-systeem wereldwijd?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Het BTW-systeem is uniek omdat het in elke schakel van de waardeketen wordt geheven. Een fabrikant betaalt BTW op grondstoffen, voegt waarde toe aan het product, en berekent BTW door aan de groothandel. De groothandel doet hetzelfde richting de detailhandel, die uiteindelijk BTW berekent aan de consument. In elke schakel mag de eerder betaalde BTW (voorbelasting) worden afgetrokken, zodat uiteindelijk alleen de eindconsument de totale belastingdruk draagt.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Dit systeem verschilt fundamenteel van een eenvoudige omzetbelasting (sales tax), zoals die in sommige Amerikaanse staten wordt gehanteerd. Bij sales tax wordt de belasting slechts één keer geheven, namelijk bij de verkoop aan de eindconsument. Het BTW-systeem biedt meer transparantie en voorkomt cascadering van belasting, waardoor het wereldwijd door de meeste landen is overgenomen.
              </p>

              <Card className="border-2 border-primary/20 bg-primary/5 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    BTW berekenen: de basisformules
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-4 bg-background rounded-lg">
                    <p className="font-semibold text-foreground mb-1">BTW toevoegen (exclusief → inclusief):</p>
                    <p className="text-muted-foreground font-mono">Bedrag inclusief BTW = Bedrag exclusief BTW × (1 + BTW-percentage / 100)</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg">
                    <p className="font-semibold text-foreground mb-1">BTW eruit halen (inclusief → exclusief):</p>
                    <p className="text-muted-foreground font-mono">Bedrag exclusief BTW = Bedrag inclusief BTW ÷ (1 + BTW-percentage / 100)</p>
                  </div>
                  <p className="text-sm text-muted-foreground italic">
                    Tip: Gebruik onze calculator hierboven om deze berekeningen automatisch en foutloos uit te voeren voor elk land.
                  </p>
                </CardContent>
              </Card>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Het is belangrijk om te weten dat bijna elk land meerdere BTW-tarieven hanteert. Naast het standaard tarief bestaan er verlaagde tarieven voor essentiële goederen zoals voedsel, medicijnen, boeken en culturele diensten. Sommige landen hanteren zelfs een nul-tarief of vrijstellingen voor specifieke categorieën. De exacte tarieven en welke producten onder welk tarief vallen, verschillen per land. Onze calculator toont automatisch alle beschikbare tarieven zodra je een land selecteert.
              </p>
            </div>

            {/* Section 3: BTW voor e-commerce en webshops */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <ShoppingCart className="w-7 h-7 text-accent flex-shrink-0" />
                BTW berekenen voor e-commerce, webshops en online verkoop
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                De e-commerce sector is een van de meest complexe gebieden als het gaat om BTW-berekening. Online verkopers moeten rekening houden met het land van de koper, het type product of dienst, en of de klant een particulier (B2C) of een bedrijf (B2B) is. Binnen de Europese Unie geldt sinds juli 2021 de One Stop Shop (OSS) regeling, die het mogelijk maakt om BTW voor alle EU-landen via één aangifte af te dragen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Voor webshops die fysieke producten verkopen aan consumenten in andere EU-landen, moet het BTW-tarief van het land van de klant worden toegepast zodra de totale omzet aan EU-particulieren de drempel van €10.000 per jaar overschrijdt. Dit betekent dat een Nederlandse webshop die verkoopt aan een Duitse consument het Duitse BTW-tarief moet berekenen en afdragen — iets wat onze calculator je helpt snel en correct te doen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Bij B2B-transacties binnen de EU geldt doorgaans de verleggingsregeling (reverse charge). Dit houdt in dat de leverancier de factuur zonder BTW uitreikt, en de afnemer zelf de BTW aangeeft en verrekent in het eigen land. Dit vereenvoudigt de administratie aanzienlijk, maar vereist wel dat beide partijen over een geldig BTW-identificatienummer (VAT-ID) beschikken dat via het VIES-systeem kan worden geverifieerd.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border border-primary/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Store className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-foreground">Fysieke producten</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      BTW wordt berekend op basis van het land van levering. Bij verzending naar andere EU-landen geldt het lokale tarief voor B2C-verkopen boven de drempel. Voor export buiten de EU is het nultarief van toepassing.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border border-secondary/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Laptop className="w-6 h-6 text-secondary" />
                      <h4 className="font-bold text-foreground">Digitale producten & diensten</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Voor digitale producten en diensten aan particulieren geldt het BTW-tarief van het land van de klant, ongeacht waar de verkoper gevestigd is. Dit omvat software, e-books, online cursussen, streamingdiensten en SaaS-producten.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Dropshipping vormt een bijzonder aandachtspunt. Als dropshipper ben je juridisch gezien de verkoper, ook al heb je de goederen nooit fysiek in handen. Dit betekent dat je verantwoordelijk bent voor de correcte BTW-berekening en -afdracht. Bij import van buiten de EU moet je rekening houden met invoer-BTW en eventuele douanerechten. Onze calculator helpt je om het juiste BTW-bedrag te bepalen, ongeacht de complexiteit van je bedrijfsmodel.
              </p>
            </div>

            {/* Section 4: BTW voor freelancers en ZZP'ers */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Users className="w-7 h-7 text-primary flex-shrink-0" />
                BTW berekenen voor freelancers, ZZP'ers en dienstverleners
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Als freelancer of ZZP'er die internationaal werkt, is het cruciaal om te begrijpen wanneer je BTW moet berekenen en welk tarief van toepassing is. De basisregel is eenvoudig: voor diensten aan bedrijven (B2B) binnen de EU geldt de verleggingsregeling, wat betekent dat je factureert zonder BTW en de afnemer de BTW zelf aangeeft. Voor diensten aan particulieren (B2C) geldt over het algemeen het BTW-tarief van het land waar je als ondernemer gevestigd bent.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Er zijn echter belangrijke uitzonderingen. Elektronisch geleverde diensten aan particulieren in andere EU-landen vallen onder de OSS-regeling, waarbij het BTW-tarief van het land van de consument geldt. Dit betreft onder meer webdesign, programmeerwerk, online consultancy en andere digitaal geleverde diensten. Onze calculator helpt je om snel het juiste tarief te vinden voor het land van je klant.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Voor het opstellen van correcte facturen en offertes is het essentieel om te weten welk BTW-bedrag je moet berekenen. Een factuur naar een zakelijke klant in Duitsland verschilt qua BTW-vermelding fundamenteel van een factuur naar een particuliere klant in Italië. Gebruik onze calculator om het exacte BTW-bedrag te berekenen en vermeld altijd het juiste BTW-tarief, het BTW-bedrag en het totaalbedrag inclusief en exclusief BTW op je facturen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                In Nederland kunnen ZZP'ers met een jaaromzet onder een bepaalde drempel gebruikmaken van de kleineondernemersregeling (KOR), waardoor ze vrijgesteld zijn van BTW-afdracht maar ook geen BTW mogen aftrekken. Vergelijkbare regelingen bestaan in veel andere landen. Overweeg zorgvuldig of de KOR voordelig is voor jouw situatie, vooral als je veel zakelijke kosten hebt waarover je BTW zou willen terugvorderen.
              </p>
            </div>

            {/* Section 5: BTW voor SaaS en digitale diensten */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Laptop className="w-7 h-7 text-secondary flex-shrink-0" />
                BTW berekenen voor SaaS, software en digitale abonnementen
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                SaaS (Software as a Service) en digitale abonnementen vormen een groeiend segment dat specifieke BTW-regels kent. Wanneer je als SaaS-aanbieder diensten levert aan consumenten in de EU, moet je het BTW-tarief van het land van de klant hanteren. Dit geldt voor alle elektronisch geleverde diensten, waaronder cloud-software, streaming platforms, online tools en membership websites.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                De bepaling van de locatie van de klant (de "place of supply") is cruciaal en wordt vastgesteld aan de hand van twee onafhankelijke bewijsstukken, zoals het factuuradres, IP-adres, bankgegevens of telefoonnummer. SaaS-bedrijven moeten systemen implementeren die deze informatie automatisch vastleggen om aan de BTW-verplichtingen te voldoen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Voor B2B-verkopen aan bedrijven buiten je eigen land maar binnen de EU geldt de verleggingsregeling, mits de afnemer een geldig BTW-identificatienummer heeft. Voor verkopen aan bedrijven of consumenten buiten de EU is de dienst meestal niet belast met BTW in de EU, maar moet je rekening houden met eventuele lokale belastingverplichtingen in het land van de klant.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Platforms zoals Shopify, WooCommerce en andere e-commerce systemen bieden steeds meer ingebouwde BTW-berekeningsmogelijkheden, maar het is belangrijk om deze instellingen te verifiëren met een onafhankelijke calculator. Fouten in automatische BTW-berekeningen komen regelmatig voor, vooral bij grensoverschrijdende transacties met meerdere tarieven.
              </p>
            </div>

            {/* Section 6: Import en Export BTW */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Truck className="w-7 h-7 text-accent flex-shrink-0" />
                BTW bij import en export: wat je moet weten
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Bij internationale handel spelen import- en export-BTW een cruciale rol. Export vanuit de EU naar landen buiten de EU (derde landen) is in principe vrijgesteld van BTW — het zogenaamde nultarief. Dit geldt zowel voor goederen als voor bepaalde diensten. De exporteur moet wel kunnen aantonen dat de goederen daadwerkelijk de EU hebben verlaten, bijvoorbeeld door middel van douanedocumenten.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Bij import van goederen van buiten de EU wordt invoer-BTW geheven bij de douane. Het BTW-tarief dat wordt toegepast, is het tarief van het land van invoer. Daarnaast kunnen douanerechten van toepassing zijn, afhankelijk van het type product en het land van herkomst. Sinds 2021 is de BTW-vrijstelling voor zendingen met een waarde onder €22 afgeschaft in de EU, waardoor nu op alle geïmporteerde goederen BTW moet worden betaald.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Voor bedrijven die regelmatig importeren, bieden veel EU-landen de mogelijkheid van verlegde invoer-BTW (artikel 23-vergunning in Nederland). Hierbij hoeft de invoer-BTW niet bij de douane te worden betaald, maar wordt deze verwerkt in de periodieke BTW-aangifte. Dit verbetert de cashflow aanzienlijk, omdat je de invoer-BTW direct kunt verrekenen met de af te dragen BTW.
              </p>
            </div>

            {/* Section 7: EU BTW-regelgeving */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Globe className="w-7 h-7 text-primary flex-shrink-0" />
                EU BTW-regelgeving en de One Stop Shop (OSS)
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                De Europese Unie heeft met de BTW-richtlijn een geharmoniseerd systeem gecreëerd dat grensoverschrijdende handel vergemakkelijkt. Hoewel elk EU-land zijn eigen tarieven vaststelt, gelden er gemeenschappelijke regels voor de plaats van dienst, de verleggingsregeling en de administratieve verplichtingen. De One Stop Shop (OSS) regeling, ingevoerd in juli 2021, is een belangrijk instrument voor e-commerce bedrijven en aanbieders van digitale diensten.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Via de OSS kun je alle BTW die je verschuldigd bent aan andere EU-landen via één enkele kwartaalaangifte in je eigen land afdragen. Dit voorkomt dat je je in elk EU-land afzonderlijk moet registreren voor BTW — een enorme administratieve vereenvoudiging. De OSS is beschikbaar voor B2C-verkopen van goederen en digitale diensten aan consumenten in andere EU-landen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Naast de OSS bestaat de Import One Stop Shop (IOSS) voor goederen die van buiten de EU worden geïmporteerd met een waarde tot €150. Via de IOSS kan de verkoper of het platform de BTW bij de verkoop innen en afdragen, waardoor de koper geen invoer-BTW hoeft te betalen bij ontvangst. Dit verbetert de klantervaring en versnelt het leveringsproces.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Het is essentieel om te weten dat de verleggingsregeling alleen van toepassing is wanneer beide partijen een geldig BTW-identificatienummer hebben. Je kunt dit verifiëren via het VIES-systeem (VAT Information Exchange System) van de Europese Commissie. Bij twijfel over de geldigheid van een BTW-nummer moet je het standaard BTW-tarief in rekening brengen om naheffingen te voorkomen.
              </p>
            </div>

            {/* Section 8: BTW buiten de EU */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Building2 className="w-7 h-7 text-secondary flex-shrink-0" />
                BTW en sales tax wereldwijd: Belangrijke systemen buiten de EU
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Buiten de Europese Unie hanteren landen zeer uiteenlopende systemen voor consumptiebelasting. Het Verenigd Koninkrijk heeft na Brexit zijn eigen VAT-systeem behouden, met een standaardtarief en verlaagde tarieven voor specifieke categorieën. Australië, Nieuw-Zeeland, Canada en Singapore gebruiken de term GST maar het werkt vergelijkbaar met BTW. De Verenigde Staten vormen een uitzondering met hun decentrale sales tax systeem, waarbij tarieven per staat en soms zelfs per gemeente verschillen.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Voor internationale ondernemers die ook buiten de EU verkopen, is het cruciaal om de lokale belastingverplichtingen te kennen. In veel landen geldt een registratiedrempel: zodra je meer dan een bepaald bedrag aan omzet realiseert in dat land, moet je je registreren voor de lokale consumptiebelasting. Dit geldt steeds vaker ook voor digitale diensten en e-commerce, waarbij landen zoals Australië, Japan en Zuid-Korea verplichtingen opleggen aan buitenlandse aanbieders.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Onze calculator ondersteunt meer dan 60 landen en biedt actuele tarieven voor zowel EU als niet-EU landen. Dit maakt het de ideale tool voor bedrijven die wereldwijd actief zijn en snel het juiste BTW- of GST-tarief willen berekenen voor hun internationale transacties.
              </p>
            </div>

            {/* Section 9: Compliance en Best Practices */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Shield className="w-7 h-7 text-accent flex-shrink-0" />
                BTW-compliance: best practices voor 2025-2026
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Correcte BTW-compliance vereist meer dan alleen het juiste tarief berekenen. Het omvat een solide administratie, tijdige aangiftes, correcte facturatie en het bewaren van alle relevante documentatie. Belastingdiensten in de EU en daarbuiten worden steeds strenger in hun handhaving, vooral voor e-commerce en digitale dienstverlening. Investeer in goede boekhoudsoftware en raadpleeg bij twijfel een fiscaal adviseur met internationale ervaring.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border border-primary/20 bg-primary/5">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      Facturatie & administratie
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1.5">
                      <li>• Vermeld altijd het BTW-tarief en -bedrag op facturen</li>
                      <li>• Bewaar facturen minimaal 7 jaar (Nederland) of volgens lokale regels</li>
                      <li>• Gebruik doorlopende factuurnummering</li>
                      <li>• Vermeld BTW-identificatienummers van beide partijen</li>
                      <li>• Bij verlegging: vermeld "BTW verlegd" op de factuur</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border border-secondary/20 bg-secondary/5">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      Deadlines & aangiftes
                    </h4>
                    <ul className="text-muted-foreground text-sm space-y-1.5">
                      <li>• Dien BTW-aangiftes altijd op tijd in</li>
                      <li>• OSS-aangifte: elk kwartaal (maand na afloop kwartaal)</li>
                      <li>• VIES-listing: elk kwartaal voor EU-B2B transacties</li>
                      <li>• Bewaar bewijsstukken van locatie van de klant</li>
                      <li>• Monitor drempelbedragen voor registratieplicht</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                De trend is duidelijk: overheden investeren steeds meer in digitale handhavingstools en real-time rapportage. Landen als Italië, Hongarije en Spanje hebben al real-time facturatiesystemen ingevoerd of zijn dit aan het implementeren. Het is daarom verstandig om nu al te investeren in robuuste systemen voor BTW-berekening en -rapportage, zodat je voorbereid bent op toekomstige veranderingen in regelgeving.
              </p>
            </div>

            {/* Section 10: Long-tail keyword lijst */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <Briefcase className="w-7 h-7 text-primary flex-shrink-0" />
                Waarvoor kun je onze BTW-calculator allemaal gebruiken?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                Onze internationale BTW-calculator is ontworpen voor een breed scala aan toepassingen. Hieronder vind je een overzicht van veelvoorkomende scenario's waarvoor ondernemers onze tool gebruiken:
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  { term: "BTW berekenen voor webshop prijs", desc: "Bepaal de correcte verkoopprijs inclusief of exclusief BTW voor je online winkel." },
                  { term: "BTW berekenen voor product prijs", desc: "Bereken het BTW-bedrag op individuele producten voor correcte prijsstelling." },
                  { term: "BTW berekenen voor import producten", desc: "Bereken invoer-BTW en totale kosten bij het importeren van goederen." },
                  { term: "BTW berekenen voor export verkoop", desc: "Controleer BTW-vrijstellingen en nultarieven bij export buiten de EU." },
                  { term: "BTW berekenen voor online diensten", desc: "Bepaal het juiste tarief voor digitaal geleverde diensten aan klanten wereldwijd." },
                  { term: "BTW berekenen voor digitale abonnementen", desc: "Bereken BTW op recurring payments en subscription-modellen." },
                  { term: "BTW berekenen voor Shopify", desc: "Verifieer BTW-instellingen van je Shopify-webshop met actuele tarieven." },
                  { term: "BTW berekenen voor WooCommerce", desc: "Controleer BTW-berekeningen van je WooCommerce-shop voor alle EU-landen." },
                  { term: "BTW berekenen voor Amazon sellers", desc: "Bepaal BTW-verplichtingen als verkoper op het Amazon-platform." },
                  { term: "BTW berekenen voor SaaS", desc: "Bereken BTW op software-as-a-service producten voor internationale klanten." },
                  { term: "BTW berekenen voor software abonnement", desc: "Bepaal het juiste BTW-tarief op maandelijkse of jaarlijkse software-licenties." },
                  { term: "BTW berekenen voor dropshipping", desc: "Bereken BTW-verplichtingen bij het dropshipping-model met internationale leveranciers." },
                  { term: "BTW berekenen voor Shopify dropshipping", desc: "Specifieke BTW-berekening voor Shopify-dropshippers met buitenlandse leveranciers." },
                  { term: "BTW berekenen voor Etsy shop", desc: "Bepaal BTW op handgemaakte en unieke producten verkocht via Etsy." },
                  { term: "BTW berekenen voor eBay verkoop", desc: "Bereken BTW-verplichtingen bij verkoop via eBay in verschillende landen." },
                  { term: "BTW berekenen voor freelancers", desc: "Bereken het juiste BTW-bedrag op je facturen als zelfstandig professional." },
                  { term: "BTW berekenen voor ZZP", desc: "Bepaal BTW-verplichtingen en mogelijke vrijstellingen als ZZP'er." },
                  { term: "BTW berekenen voor factuur", desc: "Bereken exact het BTW-bedrag dat op je factuur vermeld moet worden." },
                  { term: "BTW berekenen voor offerte", desc: "Maak correcte offertes met het juiste BTW-bedrag en totaalprijs." },
                  { term: "BTW berekenen voor online cursus verkoop", desc: "Bepaal BTW op e-learning producten en online opleidingen." },
                  { term: "BTW berekenen voor digitale producten", desc: "Bereken BTW op downloads, templates, e-books en andere digitale goederen." },
                  { term: "BTW berekenen voor abonnementen", desc: "Bepaal BTW op terugkerende betalingen en lidmaatschappen." },
                  { term: "BTW berekenen voor membership websites", desc: "Bereken BTW voor exclusieve content en ledensites." },
                  { term: "BTW berekenen voor internationale verkoop", desc: "Bepaal het juiste BTW-tarief bij grensoverschrijdende verkopen wereldwijd." },
                  { term: "BTW berekenen voor EU webshop", desc: "Bereken BTW voor alle EU-landen conform de OSS-regeling." },
                ].map((item, index) => (
                  <div key={index} className="p-3 rounded-lg border bg-card hover:bg-accent/10 transition-colors">
                    <p className="font-semibold text-foreground text-sm mb-1">{item.term}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 11: Waarom onze calculator? */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3 mb-6">
                <CreditCard className="w-7 h-7 text-accent flex-shrink-0" />
                Waarom kiezen voor deze internationale BTW-calculator?
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Onze BTW-calculator onderscheidt zich door een combinatie van betrouwbaarheid, gebruiksgemak en volledigheid. Met ondersteuning voor meer dan 60 landen, zowel binnen als buiten de EU, is het de meest uitgebreide gratis BTW-calculator die beschikbaar is. De tool wordt regelmatig bijgewerkt met de laatste tariefwijzigingen en biedt zowel standaard als verlaagde tarieven voor elk land.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                Of je nu een snelle berekening nodig hebt voor een enkele factuur of je een uitgebreide analyse maakt van BTW-verplichtingen in meerdere landen — onze calculator levert direct nauwkeurige resultaten. De intuïtieve interface maakt het voor iedereen toegankelijk, van de startende ZZP'er tot de ervaren internationaal opererende ondernemer.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Alle berekeningen worden lokaal in je browser uitgevoerd, wat betekent dat je gegevens niet naar servers worden verstuurd. Dit garandeert volledige privacy en maakt de tool ook offline beschikbaar nadat de pagina is geladen. Combineer onze calculator met onze andere diensten zoals Premium Domeinnamen voor SEO-groei en Juridische Documenten voor website-compliance om je internationale business op een stevig fundament te bouwen.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VATComprehensiveGuideNL;

import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, CheckCircle, ArrowRight, ThumbsUp, ThumbsDown, Zap, Monitor, Gauge, Dumbbell } from "lucide-react";

const AMAZON_LINK = "https://amzn.to/485hpAp";

const BesteLoopbanden = () => {
  return (
    <>
      <SEOHead
        title="Beste Loopband Kopen: Top 5 Hardloopbanden Vergelijking & Koopgids"
        description="Op zoek naar de beste loopband voor thuis? Ontdek onze top 5 hardloopbanden met uitgebreide koopgids, voor- en nadelen, motorvermogen en trainingsopties. Vind de perfecte loopband voor jouw thuisgym."
        canonical="https://www.iaee.eu/nl/beste-loopband-kopen-top-5-hardloopbanden-vergelijking-koopgids"
        lang="nl"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Beste Loopbanden", url: "https://www.iaee.eu/nl/beste-loopband-kopen-top-5-hardloopbanden-vergelijking-koopgids" }
        ]}
        faqItems={[
          { question: "Hoeveel pk heeft een goede loopband nodig?", answer: "Voor regelmatig hardlopen is minimaal 3.0 pk (continu) aanbevolen. Voor intensieve intervaltraining of zwaardere gebruikers is 4.0 pk of meer ideaal." },
          { question: "Is een loopband met hellingshoek beter?", answer: "Ja, een loopband met verstelbare hellingshoek simuleert heuveltraining en activeert meer spiergroepen, wat zorgt voor een intensievere workout en meer calorieën verbranding." },
          { question: "Hoe breed moet het loopoppervlak zijn?", answer: "Minimaal 50 cm breed en 150 cm lang voor comfortabel hardlopen. Voor langere lopers of sprinttraining is 56 cm breed en 170 cm lang aanbevolen." },
          { question: "Is een opvouwbare loopband minder stevig?", answer: "Moderne opvouwbare loopbanden zijn vrijwel net zo stevig als niet-opvouwbare modellen. Let wel op het maximale gebruikersgewicht en de frameconstructie." },
          { question: "Hoeveel kost een goede loopband voor thuis?", answer: "Een degelijke loopband voor regelmatig hardlopen begint rond €800-1.200. Premium modellen met touchscreen en interactieve trainingen kosten €1.500-5.000+." }
        ]}
      />
      <HiddenInternalLinks />
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          {/* Hero Section */}
          <section className="relative min-h-[500px] flex items-center bg-primary text-primary-foreground">
            <div className="container grid lg:grid-cols-2 gap-8 items-center py-12">
              <div className="space-y-6">
                <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                  Fitness Koopgids
                </Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Beste Loopband Kopen: Top 5 Hardloopbanden Vergelijking & Koopgids
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Of het nu regent, stormt of je werkdag te lang duurt — een goede loopband voorkomt dat je een trainingsdag mist. 
                  In deze uitgebreide koopgids vergelijken we de <strong>5 beste loopbanden</strong> voor thuisgebruik, bespreken we 
                  motorvermogen, loopoppervlak en interactieve functies zodat je de perfecte keuze maakt.
                </p>
                <Button
                  size="lg"
                  className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => window.open(AMAZON_LINK, "_blank")}
                >
                  Bekijk op Amazon
                  <ShoppingCart className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-50"></div>
                <img
                  src="/images/beste-loopband-hardlopen-hero.jpg"
                  alt="Moderne loopband in een thuisgym met hardloper"
                  className="relative rounded-lg shadow-2xl w-full object-cover ring-2 ring-primary/10"
                  width={1200}
                  height={800}
                />
              </div>
            </div>
          </section>

          {/* Amazon Affiliate Disclaimer */}
          <div className="bg-muted/50 border-b">
            <div className="container py-3">
              <p className="text-xs text-muted-foreground text-center italic">
                Als Amazon Associate verdien ik aan in aanmerking komende aankopen. Dit artikel bevat affiliate-links.
              </p>
            </div>
          </div>

          {/* Inleiding */}
          <section className="py-16 bg-background">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-6">Waarom een loopband de beste investering is voor thuistraining</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  We zouden altijd het liefst buiten hardlopen. Maar een plotselinge regenbui, een donkere winteravond of een drukke 
                  werkdag kunnen je dagelijkse kilometers in gevaar brengen. In die gevallen is een kwalitatieve loopband je beste vriend: 
                  krachtige trainingstools, interactieve functies en een comfortabel loopoppervlak zorgen ervoor dat je nooit meer een 
                  "nul" in je trainingslog hoeft te schrijven.
                </p>
                <p>
                  Moderne hardloopbanden bieden veel meer dan alleen een lopende band. Van virtuele routes door de Alpen tot 
                  persoonlijke coaching via een touchscreen — de technologie heeft een enorme sprong gemaakt. Maar met zoveel keuze 
                  kan het overweldigend zijn. Daarom hebben we de beste modellen uitgebreid getest en vergeleken.
                </p>
              </div>
            </div>
          </section>

          {/* Top 5 Products */}
          <section className="py-16 bg-muted/30">
            <div className="container max-w-4xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Top 5</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">De 5 Beste Loopbanden voor Hardlopers</h2>
                <p className="text-lg text-muted-foreground">Geselecteerd op basis van uitgebreide tests door hardloopexperts</p>
              </div>

              <div className="space-y-8">
                {/* Product 1 */}
                <Card className="overflow-hidden border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary text-primary-foreground">🏆 Beste HIIT Loopband</Badge>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Technogym Run HIIT Loopband</h3>
                    <p className="text-muted-foreground mb-4">
                      Deze professionele loopband brengt de sportschool naar jou met virtuele omgevingen, persoonlijke trainingen 
                      en bootcamp-workouts op een 27-inch touchscreen. De lattenband met verhoogde noppen zorgt voor extra veiligheid 
                      en een natuurlijk loopgevoel, vergelijkbaar met een Woodway.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Slee-duw workouts voor functionele kracht</li>
                          <li>• Zacht latoppervlak met veiligheidsnoppen</li>
                          <li>• Bluetooth voor oordopjes en apps</li>
                          <li>• Fluisterstil tijdens gebruik</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Geen daalinstelling beschikbaar</li>
                          <li>• Geen ingebouwde ventilator</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Oppervlak: 51x173 cm</span>
                      <span>Max snelheid: 25 km/u</span>
                      <span>Max helling: 15%</span>
                      <span>Programma's: Technogym</span>
                    </div>
                    <Button onClick={() => window.open(AMAZON_LINK, "_blank")} className="w-full sm:w-auto">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Bekijk Prijs op Amazon
                    </Button>
                  </CardContent>
                </Card>

                {/* Product 2 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">⭐ Beste Prijs-Kwaliteit</Badge>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">NordicTrack Commercial 1750</h3>
                    <p className="text-muted-foreground mb-4">
                      Qua prijs-kwaliteit is de 1750 moeilijk te verslaan. Met een responsief, kantelbaar 14-inch touchscreen 
                      en een stille hellingsmotor die automatisch aanpast tijdens je workout. De sneltoetsen maken het eenvoudig 
                      om direct naar een bepaalde snelheid of helling te springen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Stil tijdens hellingsveranderingen</li>
                          <li>• Daalinstelling tot -3%</li>
                          <li>• Enorme bibliotheek aan iFit-trainingen</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Nieuwere versie heeft smallere band</li>
                          <li>• Display niet bruikbaar voor andere entertainment</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Oppervlak: 51x152 cm</span>
                      <span>Max snelheid: 19 km/u</span>
                      <span>Max helling: 12%</span>
                      <span>Daling: -3%</span>
                    </div>
                    <Button onClick={() => window.open(AMAZON_LINK, "_blank")} variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Bekijk Prijs op Amazon
                    </Button>
                  </CardContent>
                </Card>

                {/* Product 3 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">Beste voor Virtuele Lessen</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Horizon Fitness 7.8 AT</h3>
                    <p className="text-muted-foreground mb-4">
                      Horizon is trainer-agnostisch: kies zelf welk trainingsplatform je wilt streamen. De sneltoetsen op 
                      borsthoogte zijn ideaal voor intervaltraining. De "Rapid Sync Motor" reageert 33% sneller dan andere 
                      loopbandmotoren, perfect voor snelle snelheidswisselingen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Geen verplicht trainingsabonnement</li>
                          <li>• Duimwielen voor snelle aanpassingen</li>
                          <li>• Stevig, niet-opvouwbaar frame</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Geen daalinstelling</li>
                          <li>• Bediening makkelijk per ongeluk aan te raken</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Oppervlak: 56x152 cm</span>
                      <span>Max snelheid: 19 km/u</span>
                      <span>Max helling: 15%</span>
                      <span>10 programma's</span>
                    </div>
                    <Button onClick={() => window.open(AMAZON_LINK, "_blank")} variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Bekijk Prijs op Amazon
                    </Button>
                  </CardContent>
                </Card>

                {/* Product 4 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">Eenvoudig & Degelijk</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sole F80 Loopband</h3>
                    <p className="text-muted-foreground mb-4">
                      Ondanks de kleinere motor en het ontbreken van een fancy touchscreen is de Sole F80 een serieus 
                      trainingsapparaat. Het duurzame frame kan lopers tot 170 kg dragen. De railgemonteerde knoppen 
                      laten je snelheid en helling aanpassen terwijl je de rail vasthoudt.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Railgemonteerde bediening voor eenvoudige aanpassing</li>
                          <li>• Extreem stevig frame tot 170 kg</li>
                          <li>• Zachte demping zonder stabiliteitsproblemen</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Kleinere motor dan de concurrentie</li>
                          <li>• Geen ingebouwd touchscreen</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Oppervlak: 56x152 cm</span>
                      <span>Max snelheid: 19 km/u</span>
                      <span>Max helling: 15%</span>
                      <span>10 programma's</span>
                    </div>
                    <Button onClick={() => window.open(AMAZON_LINK, "_blank")} variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Bekijk Prijs op Amazon
                    </Button>
                  </CardContent>
                </Card>

                {/* Product 5 */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">Minimalistisch Design</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Technogym MyRun</h3>
                    <p className="text-muted-foreground mb-4">
                      De meest compacte en strakst ogende loopband in ons overzicht. Geen ingebouwd touchscreen of 
                      ecosysteem — alleen snelheids- en hellingspeddels en de bijbehorende cijfers op het display. 
                      Ideaal voor de hardloper die gewoon wil aanzetten en lopen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Strak minimalistisch ontwerp</li>
                          <li>• Comfortabel stevig loopoppervlak</li>
                          <li>• Compatibel met Zwift via tablet</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Trage snelheids- en hellingsveranderingen</li>
                          <li>• Niet geschikt voor intensieve intervaltraining</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Oppervlak: 51x142 cm</span>
                      <span>Max snelheid: 20 km/u</span>
                      <span>Max helling: 12%</span>
                      <span>Geen programma's</span>
                    </div>
                    <Button onClick={() => window.open(AMAZON_LINK, "_blank")} variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Bekijk Prijs op Amazon
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Koopgids */}
          <section className="py-16 bg-background">
            <div className="container max-w-4xl">
              <h2 className="text-3xl font-bold text-foreground mb-8">Koopgids: Waar moet je op letten bij een loopband?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Motorvermogen (PK)</h3>
                      <p className="text-sm text-muted-foreground">
                        Het motorvermogen bepaalt hoe soepel de band draait bij hogere snelheden. Voor regelmatig 
                        hardlopen is minimaal 3.0 pk continu aanbevolen. Intensieve intervaltraining of zwaardere 
                        lopers profiteren van 4.0 pk of meer. Let altijd op het continue vermogen, niet het piekvermogen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Gauge className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Loopoppervlak</h3>
                      <p className="text-sm text-muted-foreground">
                        Een breder en langer loopoppervlak geeft meer comfort en veiligheid, vooral bij hogere 
                        snelheden. Minimaal 50x150 cm voor hardlopen, maar 56x170 cm is comfortabeler voor langere lopers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Monitor className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Interactieve Functies</h3>
                      <p className="text-sm text-muted-foreground">
                        Veel moderne loopbanden bieden interactieve trainingen via een touchscreen. Sommige merken 
                        (zoals NordicTrack met iFit) vereisen een abonnement. Anderen, zoals Horizon, laten je 
                        elk platform kiezen. Overweeg of je bereid bent een maandelijks abonnement te betalen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Dumbbell className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Hellingshoek & Demping</h3>
                      <p className="text-sm text-muted-foreground">
                        Een verstelbare hellingshoek simuleert heuveltraining en verhoogt de intensiteit. Sommige 
                        modellen bieden ook daling (-3%). De demping onder het loopoppervlak beschermt je gewrichten — 
                        kies voor verstelbare demping zodat je een steviger of zachter gevoel kunt instellen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prijzen */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Prijsindicatie Loopbanden</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                <Card className="bg-muted/30">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">€500 - €1.000</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Instapmodel</p>
                    <p className="text-xs text-muted-foreground mt-2">Basis loopbanden voor wandelen en licht joggen, opvouwbaar</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">€1.000 - €3.000</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Middensegment</p>
                    <p className="text-xs text-muted-foreground mt-2">Stevige frames, touchscreen, interactieve trainingen, geschikt voor serieuze hardlopers</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">€3.000+</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Premium</p>
                    <p className="text-xs text-muted-foreground mt-2">Professionele kwaliteit, lattenbanden, geavanceerde biofeedback, gymkwaliteit</p>
                  </CardContent>
                </Card>
              </div>

              {/* Tips */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Praktische Tips voor je Loopband</h3>
              <div className="space-y-3">
                {[
                  "Plaats je loopband op een vlakke, stevige ondergrond. Een speciale loopbandmat beschermt je vloer en dempt geluid.",
                  "Zorg voor minimaal 60 cm vrije ruimte achter de loopband voor veiligheid bij een eventuele val.",
                  "Smeer de loopband regelmatig met siliconenspray — de meeste fabrikanten raden elke 3-6 maanden aan.",
                  "Begin altijd met de veiligheidsclip bevestigd aan je kleding. Bij een misstap stopt de band direct.",
                  "Gebruik een ventilator: zonder de koelende tegenwind van buiten overhit je sneller op een loopband."
                ].map((tip, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container text-center max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Klaar om je loopband te kiezen?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Bekijk onze top aanbevelingen op Amazon en vind de perfecte loopband voor jouw thuisgym.
              </p>
              <Button
                size="lg"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => window.open(AMAZON_LINK, "_blank")}
              >
                Bekijk Loopbanden op Amazon
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-xs text-primary-foreground/70 mt-4 italic">
                Als Amazon Associate verdien ik aan in aanmerking komende aankopen.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-background">
            <div className="container max-w-3xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">FAQ</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">Veelgestelde Vragen over Loopbanden</h2>
              </div>
              <div className="divide-y">
                {[
                  {
                    q: "Hoeveel pk heeft een goede loopband nodig?",
                    a: "Voor regelmatig hardlopen is minimaal 3.0 pk (continu vermogen) aanbevolen. Voor intensieve intervaltraining of zwaardere gebruikers is 4.0 pk of meer ideaal. Let op het verschil tussen continu en piekvermogen."
                  },
                  {
                    q: "Is een loopband met hellingshoek beter dan een vlakke?",
                    a: "Ja, een verstelbare hellingshoek simuleert heuveltraining en activeert meer spiergroepen, waaronder bilspieren en hamstrings. Dit zorgt voor een intensievere workout en meer calorieënverbranding."
                  },
                  {
                    q: "Hoe breed moet het loopoppervlak zijn?",
                    a: "Minimaal 50 cm breed en 150 cm lang voor comfortabel hardlopen. Voor langere lopers (boven 1.85 m) of sprinttraining is 56 cm breed en 170 cm lang aanbevolen."
                  },
                  {
                    q: "Is een opvouwbare loopband minder stevig?",
                    a: "Moderne opvouwbare loopbanden zijn vrijwel net zo stevig als niet-opvouwbare modellen. Let wel op het maximale gebruikersgewicht en de algehele frameconstructie bij je keuze."
                  },
                  {
                    q: "Hoe vaak moet ik mijn loopband onderhouden?",
                    a: "Smeer de band elke 3-6 maanden met siliconenspray, houd de motor vrij van stof door regelmatig te stofzuigen rondom het apparaat, en controleer de spanning van de band maandelijks."
                  },
                  {
                    q: "Wat is het voordeel van een lattenband ten opzichte van een gewone band?",
                    a: "Lattenbanden (slat belts) bieden een natuurlijker loopgevoel dat meer lijkt op hardlopen op de weg. Ze gaan ook veel langer mee en hebben minder onderhoud nodig dan traditionele banden."
                  }
                ].map((faq, i) => (
                  <div key={i} className="py-6 hover:bg-muted/20 transition-colors px-4 rounded-lg">
                    <h2 className="text-lg font-semibold text-foreground mb-2">V. {faq.q}</h2>
                    <h3 className="text-muted-foreground">{faq.a}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default BesteLoopbanden;

import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, CheckCircle, ArrowRight, ThumbsUp, ThumbsDown, Activity, Ruler, Wallet, Heart } from "lucide-react";

const AMAZON_LINK = "https://amzn.to/4tOUguc";

const BesteSteppers = () => {
  return (
    <>
      <SEOHead
        title="Beste Stepper Kopen: Top 5 Trapklimmers Vergelijking & Koopgids"
        description="Op zoek naar de beste stepper of trapklimmer voor thuis? Ontdek onze top 5 steppers met uitgebreide koopgids, voor- en nadelen, weerstandsniveaus en trainingstips. Vind de perfecte stepper."
        canonical="https://www.iaee.eu/nl/beste-stepper-kopen-top-5-trapklimmers-vergelijking-koopgids"
        lang="nl"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Beste Steppers", url: "https://www.iaee.eu/nl/beste-stepper-kopen-top-5-trapklimmers-vergelijking-koopgids" }
        ]}
        faqItems={[
          { question: "Hoe lang moet je steppen voor resultaat?", answer: "Je voelt al effect na 5-10 minuten. De meeste trainers raden 20-30 minuten aan, 3-4 keer per week, voor optimale resultaten." },
          { question: "Bouw je spieren op met een stepper?", answer: "Ja, steppers zijn uitstekend voor het versterken van quadriceps, hamstrings en bilspieren. Ze vervangen echter geen zware krachttraining als je wilt opbouwen." },
          { question: "Is een stepper goed voor hardlopers?", answer: "Absoluut. Steppers bootsen de bewegingspatronen na die hardlopen aandrijven: heupextensie, bilactivatie en constante beendrang, zonder de impact van kilometers op asfalt." },
          { question: "Wat is beter: een mini-stepper of een grote trapklimmer?", answer: "Mini-steppers zijn compacter en goedkoper, maar minder stabiel. Grote trapklimmers bieden een intensievere, vloeiendere workout met meer functies." },
          { question: "Hoeveel calorieën verbrand je met steppen?", answer: "Gemiddeld verbrand je 400-600 calorieën per uur met steppen, afhankelijk van je gewicht en intensiteit. Dat is vergelijkbaar met hardlopen." }
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
                  Beste Stepper Kopen: Top 5 Trapklimmers Vergelijking & Koopgids
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Trapklimmers zijn compact, effectief en verraderlijk intensief — op een goede manier. 
                  In deze uitgebreide koopgids vergelijken we de <strong>5 beste steppers</strong> voor thuis, 
                  van budgetvriendelijke mini-steppers tot professionele trapklimmers met interactieve coaching.
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
                  src="/images/beste-stepper-trapklimmer-hero.jpg"
                  alt="Moderne trapklimmer stepper in een thuisgym"
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Waarom hardlopers baat hebben bij een stepper</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Steppers zijn stiekem briljante hulpmiddelen voor hardlopers, omdat ze exact de bewegingspatronen 
                  nabootsen die hardlopen aandrijven: heupextensie, bilactivatie en constante beendrang — zonder 
                  de belastende impact van kilometers op asfalt. Na een paar minuten schiet je hartslag omhoog, 
                  wat ze een efficiënte manier maakt om cardiovasculaire uithoudingsvermogen op te bouwen.
                </p>
                <p>
                  Ze hameren ook op je kuiten en quadriceps op een manier die doet denken aan het afronden van 
                  heuvelherhalingen. Dat betekent sterkere klimmen, betere sprintfinishes en een laag-impact 
                  manier om cross-training te doen op hersteldagen zonder je gewrichten te belasten.
                </p>
              </div>
            </div>
          </section>

          {/* Top 5 Products */}
          <section className="py-16 bg-muted/30">
            <div className="container max-w-4xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Top 5</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">De 5 Beste Steppers & Trapklimmers</h2>
                <p className="text-lg text-muted-foreground">Uitgebreid getest van budgetvriendelijk tot premium</p>
              </div>

              <div className="space-y-8">
                {/* Product 1 */}
                <Card className="overflow-hidden border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary text-primary-foreground">🏆 Beste Keuze</Badge>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Bowflex Max Trainer M9</h3>
                    <p className="text-muted-foreground mb-4">
                      Dit beest is deels stepper, deels crosstrainer, deels wilskrachttest. De digitale coaching daagt je 
                      uit om door te gaan — en de weerstandsniveaus zijn ongelooflijk soepel, van "aangename jog" tot 
                      "vaarwel verstand". Een serieuze calorieënverbrandingsmachine die zijn premium prijs verdient.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Vloeiende weerstand op alle niveaus</li>
                          <li>• Uitstekende digitale coachingprogramma's</li>
                          <li>• Serieuze calorieënverbranding</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Hoge aanschafprijs</li>
                          <li>• Groot formaat, neemt veel ruimte in</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Afmetingen: 124x77x166 cm</span>
                      <span>Max gewicht: 136 kg</span>
                      <span>Display: 10" HD touch</span>
                      <span>Stroom: netstroom</span>
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
                      <Badge variant="secondary">⭐ Meest Compact</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sunny Health & Fitness Mini Stepper met Weerstandsbanden</h3>
                    <p className="text-muted-foreground mb-4">
                      Dit kleine apparaatje vernederde ons bijna net zo erg als de Bowflex. Binnen 8 minuten spoot 
                      de hartslag omhoog en druppelde het zweet. Past onder een bureau of in een hoek, en de 
                      meegeleverde weerstandsbanden voegen een extra dimensie toe aan elke sessie.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Klein formaat, past overal</li>
                          <li>• Zeer budgetvriendelijk</li>
                          <li>• Full-body workout met weerstandsbanden</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Kan wiebelen bij intensief gebruik</li>
                          <li>• Geen digitale functies</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Afmetingen: 41x32x34 cm</span>
                      <span>Max gewicht: 100 kg</span>
                      <span>Display: LCD basis</span>
                      <span>Batterij: AAA</span>
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
                      <Badge variant="secondary">Beste Prijs-Kwaliteit</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sportsroyals Trap Stepper</h3>
                    <p className="text-muted-foreground mb-4">
                      De "Goudlokje" onder de steppers — niet te minimaal, niet te extreem. Steviger dan de Sunny 
                      en soepeler dan de meeste budgetmodellen dankzij het solide hydraulische systeem. De extra 
                      grote pedalen bieden een stabiel en veilig gevoel, zelfs bij hogere intensiteit.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Soepele beweging na het inlopen</li>
                          <li>• Extra grote pedalen voor grote voeten</li>
                          <li>• Duurzame constructie</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Handleiding kan duidelijker</li>
                          <li>• Weerstand voelt stijf met banden</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Afmetingen: 48x46x25 cm</span>
                      <span>Max gewicht: 150 kg</span>
                      <span>Display: LCD monitor</span>
                      <span>Batterij: AAA</span>
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
                      <Badge variant="secondary">Meeste Technologie</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">NordicTrack Step Climber</h3>
                    <p className="text-muted-foreground mb-4">
                      De trapklimmer van NordicTrack combineert interactieve iFit-coaching met een vloeiende 
                      trapbeweging. Het voelde minder als straf en meer als een begeleide les, met alle 
                      technologische glitter om je af te leiden van je brandende bovenbenen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Gepersonaliseerde iFit-trainingen</li>
                          <li>• Soepele stappen, comfortabeler dan anderen</li>
                          <li>• Streaming maakt steppen leuker</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Extreem prijzig</li>
                          <li>• Zeer groot en zwaar</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Afmetingen: 149x75x188 cm</span>
                      <span>Max gewicht: 170 kg</span>
                      <span>Display: 10" HD touch</span>
                      <span>Stroom: netstroom</span>
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
                      <Badge variant="secondary">Slimste Verbonden</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Echelon Stair Climber Max</h3>
                    <p className="text-muted-foreground mb-4">
                      De Echelon won ons over met het strakke ontwerp en connected functies. Het is de Peloton 
                      onder de steppers: abonnementscontent, live lessen en een community-sfeer die je afleidt 
                      van de realiteit dat je eindeloos trappen klimt. De variatie aan workouts is indrukwekkend.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Live en on-demand lessen</li>
                          <li>• Compact voor dit type apparaat</li>
                          <li>• Soepele trapbeweging</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Vereist maandelijks abonnement</li>
                          <li>• Minder weerstand dan Bowflex</li>
                        </ul>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground mb-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <span>Afmetingen: 124x79x166 cm</span>
                      <span>Max gewicht: 136 kg</span>
                      <span>Display: HD touchscreen</span>
                      <span>Stroom: netstroom</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Koopgids: Waar moet je op letten bij een stepper?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Ruler className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Formaat & Ruimte</h3>
                      <p className="text-sm text-muted-foreground">
                        De meeste mini-steppers passen onder een bureau of in een hoek. Maar grotere trapklimmers 
                        zoals de Bowflex Max Trainer nemen de ruimte van een bankje in. Bepaal hoeveel vloeroppervlak 
                        je bereid bent op te offeren voordat je kiest.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Weerstand & Intensiteit</h3>
                      <p className="text-sm text-muted-foreground">
                        Niet alle steppers zijn gelijk. Hydraulische mini-steppers zijn verrassend zwaar voor hun 
                        formaat. Gemotoriseerde modellen met verstelbare programma's kunnen je recht de zweetzone 
                        insturen. Simpel en hard? Kies hydraulisch. De Everest beklimmen? Ga voor gemotoriseerd.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Wallet className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Prijsklassen</h3>
                      <p className="text-sm text-muted-foreground">
                        Budgetmodellen (onder €100) doen de klus voor pure calorieënverbranding. Middenklasse 
                        (€150-€300) voegt displays en stevigere constructie toe. High-end (boven €1.500) biedt 
                        interactieve coaching en professionele build-kwaliteit.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Gezondheidsvoordelen</h3>
                      <p className="text-sm text-muted-foreground">
                        Steppen versterkt je quadriceps, hamstrings, kuiten en bilspieren. Het is een laag-impact 
                        cardioworkout die je gewrichten spaart terwijl je hart- en vaatstelsel wordt getraind. 
                        Ideaal als aanvulling op je hardlooptraining.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Tips om Consistent te Blijven</h3>
              <div className="space-y-3">
                {[
                  "Zet de stepper waar je hem niet kunt negeren. Naast de bank? Je gebruikt hem. In een kast? Vergeet het maar.",
                  "Houd workouts kort: 10 minuten is genoeg om te zweten zonder volledig afgrijzen. Denk 'espresso-workouts', geen viergangendiner van ellende.",
                  "Gebruik muziek of een podcast om je af te leiden — de tijd vliegt dan voorbij.",
                  "Combineer steppen met weerstandsbanden voor een full-body workout in de helft van de tijd.",
                  "Begin met lage weerstand en bouw geleidelijk op. Je benen zullen je dankbaar zijn de volgende dag."
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
              <h2 className="text-3xl font-bold mb-4">Klaar om te steppen?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Bekijk onze top aanbevelingen op Amazon en vind de perfecte stepper voor jouw thuistraining.
              </p>
              <Button
                size="lg"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => window.open(AMAZON_LINK, "_blank")}
              >
                Bekijk Steppers op Amazon
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Veelgestelde Vragen over Steppers</h2>
              </div>
              <div className="divide-y">
                {[
                  {
                    q: "Hoe lang moet je steppen voor resultaat?",
                    a: "Je voelt al effect na 5-10 minuten. De meeste trainers raden 20-30 minuten aan, 3-4 keer per week. Sessies boven de 20 minuten vereisen serieuze motivatie — of iemand die door een megafoon schreeuwt dat je niet mag stoppen."
                  },
                  {
                    q: "Bouw je spieren op met een stepper?",
                    a: "Ja, tot op zekere hoogte. Ze zijn uitstekend voor het versterken van je quadriceps, hamstrings en bilspieren, maar ze vervangen geen squats als je echt wilt opbouwen. De 'spierverbranding' is zeer reëel."
                  },
                  {
                    q: "Is een stepper goed voor hardlopers?",
                    a: "Absoluut. Steppers bootsen de bewegingspatronen na die hardlopen aandrijven — heupextensie, bilactivatie en constante beendrang — zonder de impact van kilometers op asfalt. Ideaal voor cross-training op hersteldagen."
                  },
                  {
                    q: "Wat is beter: een mini-stepper of een grote trapklimmer?",
                    a: "Dat hangt af van je ruimte en budget. Mini-steppers zijn compacter en veel goedkoper, maar bieden minder stabiliteit. Grote trapklimmers leveren een intensievere, vloeiendere workout met meer trainingsprogramma's."
                  },
                  {
                    q: "Hoeveel calorieën verbrand je met steppen?",
                    a: "Gemiddeld 400-600 calorieën per uur, afhankelijk van je gewicht en intensiteit. Dat is vergelijkbaar met hardlopen, maar dan zonder de impact op je gewrichten."
                  },
                  {
                    q: "Kan ik een stepper gebruiken als ik knieproblemen heb?",
                    a: "Steppen is over het algemeen vriendelijker voor de knieën dan hardlopen, maar bij bestaande knieproblemen is het verstandig om eerst een fysiotherapeut te raadplegen. Begin altijd met lage weerstand."
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

export default BesteSteppers;

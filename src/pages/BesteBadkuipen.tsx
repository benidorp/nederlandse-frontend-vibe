import { Helmet } from "react-helmet";
import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, CheckCircle, ArrowRight, ThumbsUp, ThumbsDown, Bath, Droplets, Ruler, Shield } from "lucide-react";

const AMAZON_LINK = "https://amzn.to/4tIxYtZ";

const BesteBadkuipen = () => {
  return (
    <>
      <SEOHead
        title="Beste Inbouwbadkuip Kopen: Top 5 Nisbuizen Vergelijking & Koopgids"
        description="Op zoek naar de beste inbouwbadkuip? Ontdek onze top 5 nisbuizen met uitgebreide koopgids, voor- en nadelen, materialen en installatietips. Vind de perfecte badkuip voor jouw badkamer."
        canonical="https://www.iaee.eu/nl/beste-inbouwbadkuip-kopen-top-5-nisbuizen-vergelijking-koopgids"
        lang="nl"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Beste Inbouwbadkuipen", url: "https://www.iaee.eu/nl/beste-inbouwbadkuip-kopen-top-5-nisbuizen-vergelijking-koopgids" }
        ]}
        faqItems={[
          { question: "Hoe lang duurt het om een inbouwbadkuip te vervangen?", answer: "Onder ideale omstandigheden duurt het project drie tot vijf dagen. Als er funderingsproblemen zijn of je een muur moet weghalen, kan het een paar weken duren." },
          { question: "Wat kost een aannemer om een badkuip te vervangen?", answer: "Afhankelijk van je locatie kan het variëren van €2.500 tot €6.000 om iemand in te huren voor de klus." },
          { question: "Wat is de beste douchegordijnrail voor een inbouwbadkuip?", answer: "Een gebogen metalen douchegordijnrail creëert meer ruimte in het bad wanneer je doucht, en een metalen rail gaat langer mee dan een kunststof exemplaar." },
          { question: "Welk materiaal is het beste voor een badkuip?", answer: "Acryl is het populairst vanwege het lichte gewicht en de lagere prijs. Porselein biedt een klassieke uitstraling en staal is het meest duurzaam." },
          { question: "Wat is het verschil tussen linksdraaiende en rechtsdraaiende afvoer?", answer: "Ga in de nis staan waar het bad komt, met je gezicht naar de afvoer. Zit de afvoer links van het midden, dan heb je een linksdraaiend bad nodig, en andersom." }
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
                  Badkamer Koopgids
                </Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Beste Inbouwbadkuip Kopen: Top 5 Nisbuizen Vergelijking & Koopgids
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  Een inbouwbadkuip (nisbad) is de meest populaire keuze voor de gemiddelde badkamer. 
                  In deze uitgebreide koopgids vergelijken we de <strong>5 beste modellen</strong>, bespreken we materialen, 
                  afmetingen en geven we praktische installatietips zodat je de perfecte keuze maakt.
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
                  src="/images/beste-nisbuizen-badkuip-hero.jpg"
                  alt="Moderne inbouwbadkuip in een gerenoveerde badkamer"
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Wat is een inbouwbadkuip en waarom zou je er een willen?</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Een inbouwbadkuip, ook wel nisbad of alcove-bad genoemd, is ontworpen om in een driezijdige nis in je badkamer te passen. 
                  Er is een muur aan de voor-, achterkant en aan één zijkant. De andere zijde is open naar de badkamer — hier installeer je 
                  een douchedeur of douchegordijn. De meeste inbouwbadkuipen hebben tegenwoordig douchekoppen, waardoor het noodzakelijk is 
                  om een soort waterafscherming te installeren.
                </p>
                <p>
                  Kort gezegd: een inbouwbadkuip is het type bad waarmee de meeste mensen zijn opgegroeid. Het is het soort bad dat je in 
                  een gemiddelde hotelkamer vindt. Ze zijn vrij standaard qua afmetingen en zelfs kleine badkamers zijn ontworpen om er een 
                  in te plaatsen. Als ruimte een probleem is, is een nisbad waarschijnlijk je beste optie — en ze zijn ook goedkoper dan de 
                  meeste andere badkuipontwerpen.
                </p>
              </div>
            </div>
          </section>

          {/* Top 5 Products */}
          <section className="py-16 bg-muted/30">
            <div className="container max-w-4xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Top 5</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">De 5 Beste Inbouwbadkuipen</h2>
                <p className="text-lg text-muted-foreground">Onze selectie op basis van uitgebreid onderzoek en klantreviews</p>
              </div>

              <div className="space-y-8">
                {/* Product 1 */}
                <Card className="overflow-hidden border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary text-primary-foreground">🏆 Beste Keuze</Badge>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">American Standard 152cm Diep Weekbad</h3>
                    <p className="text-muted-foreground mb-4">
                      Een comfortabel bad dat het beste is voor kleinere personen. Het heeft een ontspannend ontwerp met contouren 
                      voor lumbale ondersteuning en gevormde armleuningen. De speciale deep-soak afvoer maakt het mogelijk om het bad 
                      tot 7,5 cm hoger te vullen dan een standaard bad.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Speciale deep-soak afvoer voor hoger waterniveau</li>
                          <li>• Brede lumbale ondersteuning en gevormde armleuningen</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Beenruimte is iets minder dan verwacht vanwege het unieke ontwerp</li>
                        </ul>
                      </div>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Kingston Brass 152cm Eigentijds Acryl Bad</h3>
                    <p className="text-muted-foreground mb-4">
                      Als je een budgetvriendelijke renovatie voor je badkamer overweegt, is dit betaalbare nisbad een uitstekende optie. 
                      Een no-nonsense model dat eenvoudig te installeren is dankzij de simpele constructie.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Eenvoudige installatie door simpele constructie</li>
                          <li>• Linksdraaiende afvoer met bijna 36 cm diepte</li>
                          <li>• Acryl versterkt met glasvezel en hars</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Verpak het bad in isolatie tijdens installatie om het water warm te houden</li>
                        </ul>
                      </div>
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
                      <Badge variant="secondary">Makkelijke Installatie</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">American Standard 152cm Bad met Porseleinen Afwerking</h3>
                    <p className="text-muted-foreground mb-4">
                      Dit nisbad heeft een glanzende porseleinen email afwerking en een ingebouwde overloopafvoer die de installatie vereenvoudigt.
                      Het gevormde stalen centrum voegt sterkte en duurzaamheid toe.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Gevormd stalen centrum voor sterkte</li>
                          <li>• Hoogglans oppervlak maakt schoonmaken makkelijk</li>
                          <li>• Geïsoleerde constructie houdt water warmer</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• De afwerking houdt bij sommige gebruikers niet zo goed stand</li>
                        </ul>
                      </div>
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
                      <Badge variant="secondary">Nivelleringsvoeten</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Swiss Madison 152cm Hoogglans Wit Bad</h3>
                    <p className="text-muted-foreground mb-4">
                      Dit betaalbare bad heeft een paar handige kenmerken die ervoor zorgen dat de installatie soepel verloopt. 
                      De verstelbare voeten maken het snel waterpas zetten mogelijk.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Verstelbare voeten voor snel waterpas zetten</li>
                          <li>• Driezijdige flens beschermt tegen lekkage</li>
                          <li>• 41 cm weekdiepte voor luxe ervaring</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Acryl oppervlak is minder duurzaam dan duurdere modellen</li>
                        </ul>
                      </div>
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
                      <Badge variant="secondary">Ruim Model</Badge>
                      <div className="flex gap-0.5">{[...Array(3)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}{[...Array(2)].map((_,i) => <Star key={i} className="h-4 w-4 text-muted" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">ProFlo 152 x 107 cm Weekbad</h3>
                    <p className="text-muted-foreground mb-4">
                      Een lichtgewicht bad dat ruim is, maar wel een hogere prijs heeft. Dit model is het meest geschikt voor 
                      ervaren installateurs vanwege de complexere installatie.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Lichtgewicht en ruim</li>
                          <li>• Extra brede afmetingen</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Niet glad en moeilijk te installeren</li>
                          <li>• Meerdere pogingen nodig voor correcte installatie</li>
                        </ul>
                      </div>
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Koopgids: Waar moet je op letten?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Ruler className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Linksdraaiend vs. Rechtsdraaiend</h3>
                      <p className="text-sm text-muted-foreground">
                        Ga in de nis staan met je gezicht naar de afvoer. Zit deze links van het midden, 
                        dan heb je een linksdraaiend bad nodig, en andersom. Het verplaatsen van de bestaande 
                        leidingen is duur en tijdrovend.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Ruler className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Afmetingen</h3>
                      <p className="text-sm text-muted-foreground">
                        De standaard inbouwbadkuip is 152 cm lang, 81 cm breed en 48 cm hoog. Let op: 
                        er kunnen variaties zijn van 5 tot 7,5 cm. Weekbadkuipen kunnen tot 25 cm breder zijn. 
                        Meet altijd de nis vóór aankoop.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Droplets className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Diepte</h3>
                      <p className="text-sm text-muted-foreground">
                        Hoe dieper het bad, hoe meer water het vasthoudt — ideaal voor weekbaden. 
                        Maar een dieper bad kan moeilijker zijn voor ouderen of mensen met een beperking. 
                        Laat iedereen die het bad zal gebruiken over een proefbarrière stappen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Fundering Controleren</h3>
                      <p className="text-sm text-muted-foreground">
                        Een betonnen fundering kan enorm veel gewicht dragen, maar een kruipruimte-fundering 
                        is beperkter. Water weegt 1 kg per liter — zorg dat de fundering het gewicht aankan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Materialen */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Materialen Vergelijking</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Staal</h4>
                    <p className="text-sm text-muted-foreground">
                      Klassieke keuze. Zeer duurzaam en sterk. Ouderwetse klauwtjesbaden waren van staal gemaakt. Zwaarder dan andere opties.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Porselein</h4>
                    <p className="text-sm text-muted-foreground">
                      Goedkoper en lichter dan staal. Lang de dominante keuze in de industrie. Klassieke uitstraling.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Acryl</h4>
                    <p className="text-sm text-muted-foreground">
                      De populairste keuze tegenwoordig. Licht, goedkoop en makkelijk te produceren. Gebruikt glasvezelplaten voor extra sterkte.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Glasvezel</h4>
                    <p className="text-sm text-muted-foreground">
                      Was ooit populair maar heeft de neiging om door te buigen bij belasting. Wordt zelden nog gebruikt.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Prijzen */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Prijsindicatie</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                <Card className="bg-muted/30">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">€350 - €450</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Budget</p>
                    <p className="text-xs text-muted-foreground mt-2">Porseleinen badkuipen met lage zijkanten, niet veel diepte</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">€450 - €600</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Middensegment</p>
                    <p className="text-xs text-muted-foreground mt-2">Weekbadkuipen, breder dan standaard, acryl is gangbaar</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">€600+</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Premium</p>
                    <p className="text-xs text-muted-foreground mt-2">Moderne kleuren, gleufoverlopen met geborsteld metaal, diepere modellen</p>
                  </CardContent>
                </Card>
              </div>

              {/* Tips */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Praktische Installatietips</h3>
              <div className="space-y-3">
                {[
                  "Vervang een bad nooit alleen — vanwege het formaat en gewicht is dit altijd een klus voor twee personen.",
                  "Zelfs acryl badkuipen zijn moeilijk te manoeuvreren door het gebrek aan handgrepen. Ondanks het lichtere gewicht kan het gevaarlijk zijn.",
                  "Bij het verwijderen van een oud bad: zaag het gipsboard ongeveer 15 cm boven de rand weg, helemaal rondom. Dit geeft je werkruimte.",
                  "Je hebt kit en een kitpistool nodig om het nieuwe bad af te dichten na installatie. Neem minstens drie tubes mee."
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
              <h2 className="text-3xl font-bold mb-4">Klaar om je nieuwe badkuip te kiezen?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Bekijk onze top aanbevelingen op Amazon en vind het perfecte bad voor jouw badkamer.
              </p>
              <Button
                size="lg"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => window.open(AMAZON_LINK, "_blank")}
              >
                Bekijk Badkuipen op Amazon
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Veelgestelde Vragen over Inbouwbadkuipen</h2>
              </div>
              <div className="divide-y">
                {[
                  {
                    q: "Hoe lang duurt het om een inbouwbadkuip te vervangen?",
                    a: "Onder ideale omstandigheden duurt het project drie tot vijf dagen. Als er funderingsproblemen zijn of je een muur moet weghalen, kan het een paar weken duren."
                  },
                  {
                    q: "Wat kost een aannemer om een badkuip te vervangen?",
                    a: "Afhankelijk van je locatie en de complexiteit van het project kan het variëren van €2.500 tot €6.000 om een professional in te huren voor de volledige klus."
                  },
                  {
                    q: "Wat is de beste douchegordijnrail voor een inbouwbadkuip?",
                    a: "Een gebogen metalen douchegordijnrail creëert meer ruimte in het bad wanneer je doucht. Een metalen rail gaat ook langer mee dan een exemplaar van kunststof."
                  },
                  {
                    q: "Welk materiaal is het beste voor een badkuip?",
                    a: "Dat hangt af van je prioriteiten. Acryl is het populairst vanwege het lichte gewicht en de lagere prijs. Porselein biedt een klassieke uitstraling, en gietijzeren baden met een emailcoating zijn het zwaarst maar ook het meest duurzaam."
                  },
                  {
                    q: "Hoe bepaal ik of ik een links- of rechtsdraaiende afvoer nodig heb?",
                    a: "Ga in de nis staan waar het bad komt, met je gezicht naar de afvoer. Zit de afvoer links van het midden van de nis, dan heb je een linksdraaiend bad nodig. Zit het rechts, dan heb je een rechtsdraaiend bad nodig."
                  },
                  {
                    q: "Kan ik een weekbad als inbouwbad gebruiken?",
                    a: "Ja, er zijn speciale weekbaden die als inbouwbad passen. Ze zijn wel breder dan standaard (soms tot 25 cm extra), dus meet altijd de nis vóór aankoop."
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

export default BesteBadkuipen;

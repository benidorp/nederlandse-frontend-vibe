import { Helmet } from "react-helmet";
import SEOHead from "@/components/seo/SEOHead";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, CheckCircle, ArrowRight, ThumbsUp, ThumbsDown, Volume2, Wifi, Headphones, Tv } from "lucide-react";

const AMAZON_LINK = "https://amzn.to/4ssPVM4";

const BesteSoundbars = () => {
  return (
    <>
      <SEOHead
        title="Beste Soundbar Kopen: Top 5 Soundbars voor TV Vergelijking & Koopgids"
        description="Op zoek naar de beste soundbar voor je TV? Ontdek onze top 5 soundbars met uitgebreide koopgids, Dolby Atmos, surround sound opties en budgettips. Vind de perfecte soundbar voor jouw woonkamer."
        canonical="https://www.iaee.eu/nl/beste-soundbar-kopen-top-5-soundbars-televisie-vergelijking-koopgids"
        lang="nl"
        ogType="article"
        breadcrumbs={[
          { name: "Home", url: "https://www.iaee.eu" },
          { name: "Beste Soundbars", url: "https://www.iaee.eu/nl/beste-soundbar-kopen-top-5-soundbars-televisie-vergelijking-koopgids" }
        ]}
        faqItems={[
          { question: "Kan ik een soundbar op meerdere apparaten aansluiten?", answer: "Ja, zolang de soundbar genoeg ingangen heeft. De meeste soundbars hebben meerdere fysieke ingangen en draadloze opties zoals Bluetooth en WiFi." },
          { question: "Moet de soundbar even breed zijn als mijn TV?", answer: "Nee, dat is een cosmetische keuze. Focus op de juiste functies in plaats van exact dezelfde breedte als je TV." },
          { question: "Wat betekent soundstage bij soundbars?", answer: "Soundstage verwijst naar de meeslepende geluidskwaliteit. Een goede soundbar geeft je het gevoel dat je midden in de actie zit." },
          { question: "Heb ik een receiver nodig voor een soundbar?", answer: "Nee. Soundbars zijn alles-in-één ontwerpen met ingebouwde versterking. Een receiver is alleen nodig voor passieve luidsprekers." }
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
                  Audio & Entertainment Koopgids
                </Badge>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                  Beste Soundbar Kopen: Top 5 Soundbars voor TV Vergelijking & Koopgids
                </h1>
                <p className="text-lg text-primary-foreground/90 leading-relaxed">
                  TV's zijn de laatste jaren enorm verbeterd qua beeldkwaliteit, maar de ingebouwde luidsprekers 
                  klinken nog steeds even dun. Een soundbar is dé oplossing: <strong>verbeterd geluid, slanke vormgeving</strong> en 
                  eenvoudige installatie. Ontdek welke soundbar het beste bij jouw woonkamer past.
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
                  src="/images/beste-soundbar-televisie-hero.jpg"
                  alt="Moderne soundbar onder een flatscreen TV in een stijlvolle woonkamer"
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
              <h2 className="text-3xl font-bold text-foreground mb-6">Waarom een soundbar de beste investering is voor je thuisbioscoop</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Moderne TV's leveren steeds meer pixels en geavanceerdere beeldkwaliteit met elke nieuwe generatie. 
                  Maar één ding is niet veranderd: de ingebouwde luidsprekersystemen klinken nog steeds even dun als altijd. 
                  Gelukkig bestaat er een oplossing voor wie teleurgesteld is in het geluid van gewone TV-luidsprekers: de soundbar.
                </p>
                <p>
                  Soundbars zijn dunne, rechthoekige luidsprekers die je aansluit op je TV en je contentbron. Ze leveren 
                  aanzienlijk verbeterd geluid zodat je je voelt alsof je in de bioscoop zit. De meeste soundbars passen 
                  naadloos bij elk interieur en kunnen aan de muur worden gemonteerd voor ruimtebesparing.
                </p>
                <p>
                  De soundbarmarkt is behoorlijk divers. Modellen variëren van compacte soundbars geschikt voor een studentenkamer 
                  tot enorme luidsprekers die een virtuele surround sound-ervaring creëren voor grote ruimtes. Bekende merken zijn 
                  onder andere Sonos, Bose, JBL, Yamaha, Samsung en LG.
                </p>
              </div>
            </div>
          </section>

          {/* Top 5 Products */}
          <section className="py-16 bg-muted/30">
            <div className="container max-w-4xl">
              <div className="text-center mb-12">
                <Badge variant="outline" className="mb-4">Top 5</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-4">De 5 Beste Soundbars</h2>
                <p className="text-lg text-muted-foreground">Onze selectie op basis van uitgebreid onderzoek, tests en klantreviews</p>
              </div>

              <div className="space-y-8">
                {/* Product 1 */}
                <Card className="overflow-hidden border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary text-primary-foreground">🏆 Beste Keuze</Badge>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sonos Ray Soundbar</h3>
                    <p className="text-muted-foreground mb-4">
                      Op basis van onze tests presteert de Ray beter dan concurrerende budget-soundbars dankzij het compacte en 
                      makkelijk te installeren ontwerp. Perfect als instapmodel voor het Sonos-ecosysteem. Helder geluid voor 
                      de prijs en een stijlvol minimalistisch design.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Compact en makkelijk te installeren</li>
                          <li>• Uitstekende geluidskwaliteit voor de prijs</li>
                          <li>• Past in het Sonos multiroom-ecosysteem</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Geen HDMI-ingang</li>
                          <li>• Geen Dolby Atmos-ondersteuning</li>
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
                    <h3 className="text-xl font-bold text-foreground mb-2">Panasonic SoundSlayer Gaming Soundbar</h3>
                    <p className="text-muted-foreground mb-4">
                      Speciaal ontworpen voor gamers. Tijdens onze tests bood deze soundbar een duidelijk voordeel bij gaming 
                      dankzij de nauwkeurige geluidsweergave. Het compacte formaat past perfect onder een gaming-monitor.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Speciaal ontworpen voor gaming</li>
                          <li>• Nauwkeurige positional audio</li>
                          <li>• Compact formaat past onder monitor</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Minder geschikt voor grote woonkamers</li>
                          <li>• Geen aparte subwoofer meegeleverd</li>
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
                      <Badge variant="secondary">🎬 Premium Geluid</Badge>
                      <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Sonos Arc Soundbar</h3>
                    <p className="text-muted-foreground mb-4">
                      Deze strakke en stijlvolle soundbar is de perfecte keuze als je je wilt onderdompelen in je favoriete 
                      films, muziek en videogames. Ondersteunt Dolby Atmos voor een echte bioscoopervaring thuis.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Dolby Atmos-ondersteuning</li>
                          <li>• Uitstekende geluidskwaliteit</li>
                          <li>• Strak, premium design</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Hogere prijs</li>
                          <li>• Vereist eARC voor volledige Atmos-ervaring</li>
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
                      <Badge variant="secondary">🔊 Veelzijdig</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Yamaha Audio YAS-209BL Soundbar</h3>
                    <p className="text-muted-foreground mb-4">
                      Of je nu technisch onderlegd bent of juist niet, deze budgetvriendelijke slimme speaker biedt indrukwekkend 
                      geluid ongeacht hoe je hem instelt. Inclusief draadloze subwoofer voor extra bas.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Draadloze subwoofer meegeleverd</li>
                          <li>• Alexa ingebouwd</li>
                          <li>• Uitstekende prijs-kwaliteitverhouding</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• DTS Virtual:X kan soms onnatuurlijk klinken</li>
                          <li>• App kan beter</li>
                        </ul>
                      </div>
                    </div>
                    <Button onClick={() => window.open(AMAZON_LINK, "_blank")} variant="outline">
                      <ShoppingCart className="mr-2 h-4 w-4" /> Bekijk Prijs op Amazon
                    </Button>
                  </CardContent>
                </Card>

                {/* Product 5 - Bonus pick */}
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">📺 Budget Tip</Badge>
                      <div className="flex gap-0.5">{[...Array(4)].map((_,i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}<Star className="h-4 w-4 text-muted" /></div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Samsung HW-B450 Soundbar met Subwoofer</h3>
                    <p className="text-muted-foreground mb-4">
                      Een betrouwbare en betaalbare optie van Samsung met een draadloze subwoofer. Past naadloos bij Samsung TV's 
                      maar werkt uitstekend met elk merk. Ideaal voor wie net begint met betere audio.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> Voordelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Zeer betaalbaar met subwoofer</li>
                          <li>• Bluetooth-connectiviteit</li>
                          <li>• Eenvoudige installatie</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground flex items-center gap-1"><ThumbsDown className="h-4 w-4 text-red-500" /> Nadelen</p>
                        <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                          <li>• Geen WiFi of spraakbesturing</li>
                          <li>• Beperkte geluidsmodi</li>
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
              <h2 className="text-3xl font-bold text-foreground mb-8">Koopgids: Waar moet je op letten bij een soundbar?</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Tv className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Hoe groot is je ruimte?</h3>
                      <p className="text-sm text-muted-foreground">
                        Kleinere soundbars bevatten doorgaans twee stereoluidsprekers. Grotere, krachtigere modellen 
                        bevatten meer luidsprekers en een subwoofer. Het aantal luidsprekers wordt weergegeven als bijv. 
                        5.1 of 7.1 — het ".1" geeft de subwoofer aan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Volume2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Surround Sound</h3>
                      <p className="text-sm text-muted-foreground">
                        Als je een thuisbioscoopliefhebber bent, zorg dan dat je product virtueel surround sound ondersteunt. 
                        Veel modellen hebben naar boven gerichte luidsprekers die geluid door de kamer kaatsen voor een 
                        meeslepende ervaring. Zoek naar Dolby Atmos of DTS Virtual:X ondersteuning.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Wifi className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Bedraad of Draadloos</h3>
                      <p className="text-sm text-muted-foreground">
                        De meeste soundbars bevatten een subwoofer voor rijke bas. Sommige subwoofers vereisen een 
                        bedrade verbinding, wat je plaatsingsopties beperkt. Als je budget het toelaat, raden we een 
                        soundbar met draadloze subwoofer aan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Bluetooth & Streaming</h3>
                      <p className="text-sm text-muted-foreground">
                        Een soundbar met Bluetooth-ondersteuning is ideaal als je ook muziek wilt streamen 
                        vanaf je telefoon via diensten als Spotify. Sommige modellen ondersteunen ook WiFi 
                        voor verliesloze audiokwaliteit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Functies */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Belangrijke Functies om op te letten</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Bluetooth</h4>
                    <p className="text-sm text-muted-foreground">
                      Stream muziek draadloos vanaf je telefoon. Essentieel als je de soundbar ook voor muziek wilt gebruiken.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Virtueel Surround</h4>
                    <p className="text-sm text-muted-foreground">
                      Creëert een meeslepende ervaring door geluid van muren te kaatsen. Niet zo goed als echte surround, maar dichtbij.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">Satellietluidsprekers</h4>
                    <p className="text-sm text-muted-foreground">
                      Sommige soundbars bevatten extra draadloze luidsprekers voor achterkanalen. Een mooi compromis tussen soundbar en volledig surround.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Prijzen */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Prijsindicatie Soundbars</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-12">
                <Card className="bg-muted/30">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">€50 - €100</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Budget</p>
                    <p className="text-xs text-muted-foreground mt-2">Basis, compacte modellen geschikt voor kleine ruimtes. Vaak zonder subwoofer.</p>
                  </CardContent>
                </Card>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-primary">€100 - €200</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Beste Waarde</p>
                    <p className="text-xs text-muted-foreground mt-2">Draadloze subwoofer, Bluetooth, genoeg kracht voor een gemiddelde woonkamer.</p>
                  </CardContent>
                </Card>
                <Card className="bg-muted/30">
                  <CardContent className="p-4 text-center">
                    <p className="text-2xl font-bold text-foreground">€200 - €800+</p>
                    <p className="text-sm font-semibold text-muted-foreground mt-1">Premium</p>
                    <p className="text-xs text-muted-foreground mt-2">High-end audio, Dolby Atmos, premium merken. Ideaal voor audioflielen.</p>
                  </CardContent>
                </Card>
              </div>

              {/* Tips */}
              <h3 className="text-2xl font-bold text-foreground mb-6">Praktische Tips</h3>
              <div className="space-y-3">
                {[
                  "Bij wandmontage: zoek altijd minimaal één stijl in de muur om de soundbar stevig te bevestigen.",
                  "Koop je een soundbar van hetzelfde merk als je TV? Dan kun je waarschijnlijk met één afstandsbediening volstaan.",
                  "Is een soundbar niet krachtig genoeg? Overweeg dan een soundbase — die biedt meer volume voor grotere ruimtes.",
                  "Surround sound is beter met eARC (enhanced Audio Return Channel) dan met gewone ARC. Je hebt een high-speed HDMI-kabel met Ethernet nodig voor eARC.",
                  "Je hebt geen receiver nodig voor een soundbar — ze hebben ingebouwde versterking.",
                  "Plaats je soundbar altijd evenwijdig aan je TV, niet onder een hoek. Het geluid wordt naar voren gestuurd."
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
              <h2 className="text-3xl font-bold mb-4">Klaar om je TV-geluid te upgraden?</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Bekijk onze top soundbar aanbevelingen op Amazon en geniet van bioscoopgeluid in je eigen woonkamer.
              </p>
              <Button
                size="lg"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                onClick={() => window.open(AMAZON_LINK, "_blank")}
              >
                Bekijk Soundbars op Amazon
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
                <h2 className="text-3xl font-bold text-foreground mb-4">Veelgestelde Vragen over Soundbars</h2>
              </div>
              <div className="divide-y">
                {[
                  {
                    q: "Kan ik een soundbar op meerdere apparaten aansluiten?",
                    a: "Ja, zolang de soundbar genoeg ingangen heeft. De meeste soundbars hebben meerdere fysieke ingangen (HDMI, optisch, 3.5mm) en draadloze opties zoals Bluetooth en WiFi."
                  },
                  {
                    q: "Moet mijn soundbar even breed zijn als mijn TV?",
                    a: "Nee, dat is een cosmetische keuze. Hoewel veel experts adviseren om een soundbar te kiezen die ongeveer even breed is als je TV, is dat puur esthetisch. Focus liever op de juiste functies."
                  },
                  {
                    q: "Wat betekent 'soundstage' bij soundbars?",
                    a: "Soundstage verwijst naar de meeslepende geluidskwaliteit van een soundbar. Een goede soundbar met brede soundstage geeft je het gevoel dat je midden in de actie van een film zit, waarbij je kunt horen uit welke richting geluiden komen."
                  },
                  {
                    q: "Heb ik een receiver nodig voor een soundbar?",
                    a: "Nee. Receivers zijn ontworpen om geluidssignalen te versterken voor passieve luidsprekers. Soundbars zijn alles-in-één ontwerpen met zowel de luidspreker als ingebouwde versterking."
                  },
                  {
                    q: "Wat is het verschil tussen Dolby Atmos en DTS Virtual:X?",
                    a: "Beide technologieën maken geluid meer dimensionaal. DTS Virtual:X creëert virtueel surround geluid door audio van muren te kaatsen. Dolby Atmos richt zich meer op hoogte-effecten en biedt een meer cinematische ervaring, vooral met plafondluidsprekers."
                  },
                  {
                    q: "Is een soundbar beter dan losse surround speakers?",
                    a: "Een soundbar is een uitstekend compromis: het biedt veel beter geluid dan TV-luidsprekers zonder de complexe installatie van een volledig surround systeem. Voor de meeste woonkamers is een goede soundbar meer dan voldoende."
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

export default BesteSoundbars;

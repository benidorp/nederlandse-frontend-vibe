import { Helmet } from "react-helmet";
import { useState, useMemo } from "react";
import { Calculator, Globe, TrendingUp, FileText, CheckCircle2 } from "lucide-react";
import FooterEN from "@/components/en/FooterEN";
import VATLanguageSwitcher from "@/components/vat/VATLanguageSwitcher";
import VATPromoBoxes from "@/components/vat/VATPromoBoxes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { vatRates, VATRate } from "@/data/vatRates";
import VATResults from "@/components/vat/VATResults";
import VATFAQSection from "@/components/vat/VATFAQSection";
const VATCalculator = () => {
  const [selectedCountry, setSelectedCountry] = useState<VATRate | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [includesVAT, setIncludesVAT] = useState<"yes" | "no">("no");
  const [selectedRate, setSelectedRate] = useState<number | null>(null);
  const handleCountryChange = (countryCode: string) => {
    const country = vatRates.find((c) => c.countryCode === countryCode);
    if (country) {
      setSelectedCountry(country);
      setSelectedRate(country.standardRate);
    }
  };
  const results = useMemo(() => {
    if (!selectedCountry || !amount || selectedRate === null) return null;
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return null;
    let amountExclVAT: number;
    let vatAmount: number;
    let amountInclVAT: number;
    if (includesVAT === "yes") {
      amountInclVAT = numAmount;
      amountExclVAT = numAmount / (1 + selectedRate / 100);
      vatAmount = numAmount - amountExclVAT;
    } else {
      amountExclVAT = numAmount;
      vatAmount = numAmount * (selectedRate / 100);
      amountInclVAT = numAmount + vatAmount;
    }
    return {
      country: selectedCountry,
      rate: selectedRate,
      amountExclVAT,
      vatAmount,
      amountInclVAT
    };
  }, [selectedCountry, amount, selectedRate, includesVAT]);
  return <>
      <Helmet>
        <html lang="nl" />
        <title>Wereldwijde BTW Calculator voor Ondernemers | BTW Berekenen Internationaal</title>
        <meta name="description" content="Bereken eenvoudig BTW voor elk land wereldwijd. Professionele BTW-calculator voor ondernemers met actuele tarieven, inclusief/exclusief berekeningen en overzichtelijke resultaten." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.iaee.eu/btw-calculator-wereldwijd" />
      </Helmet>
      
      <VATLanguageSwitcher currentLanguage="nl" />
      <div className="min-h-screen">
        <main>
          {/* Hero Section */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm shadow-lg">
                  <Globe className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Wereldwijd • 60+ Landen</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent lg:text-4xl">Gratis Internationale BTW Calculator (60+ landen) – Wereldwijd VAT & Sales Tax Berekenen
              </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Bereken eenvoudig en nauwkeurig de BTW (belasting toegevoegde waarde) voor elk land wereldwijd. 
                  Professionele BTW-calculator met actuele tarieven voor internationale ondernemers, freelancers en bedrijven.
                </p>

                <div className="flex flex-wrap gap-6 justify-center text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground font-bold text-lg">60+ Landen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground font-bold text-lg">Actuele Tarieven</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground text-lg font-bold">Direct Resultaat</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground text-lg font-bold">100% Gratis</span>
                  </div>
                </div>

                <div className="max-w-3xl mx-auto text-left space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg font-semibold">

Deze BTW-calculator is speciaal ontwikkeld voor internationale ondernemers, e-commerce bedrijven en freelancers die BTW moeten berekenen voor verschillende landen. Of je nu facturen maakt voor klanten in de EU, werkt met verschillende BTW-tarieven, of simpelweg wilt weten hoeveel BTW je moet betalen of terugkrijgen - onze calculator geeft je direct en accuraat antwoord.</p>
                  <p className="text-muted-foreground leading-relaxed text-lg font-semibold">
                    De tool ondersteunt alle EU-landen en daarbuiten, met zowel standaard als verlaagde BTW-tarieven. Perfect voor het opstellen van facturen, BTW-aangiftes, offertes en financiële rapportages. Alle bedragen worden automatisch berekend inclusief en exclusief BTW.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Hoe werkt de BTW calculator?</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    In 4 eenvoudige stappen bereken je de BTW voor elk land
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all group hover:shadow-colorful duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">1. Kies land</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Selecteer het land waarvoor je de BTW wilt berekenen uit onze lijst van 60+ landen.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all group hover:shadow-colorful duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">2. Kies tarief</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Selecteer het standaard of verlaagd tarief. Elk land heeft eigen BTW-percentages.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all group hover:shadow-colorful duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">3. Vul bedrag in</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Voer het bedrag in en geef aan of dit inclusief of exclusief BTW is.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 hover:border-info/50 transition-all group hover:shadow-colorful duration-300">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-info/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-info to-info/70 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Calculator className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">4. Zie resultaat</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        De calculator toont direct alle bedragen en een overzicht voor je aangifte.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 bg-background">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">BTW Calculator</h2>
                  <p className="text-lg text-muted-foreground">
                    Bereken direct de BTW voor jouw internationale transacties
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Card */}
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80 text-white">
                    <CardHeader className="space-y-1 pb-4">
                      <CardTitle className="text-3xl flex items-center gap-2 text-white font-bold">
                        <Calculator className="w-7 h-7 text-white" />
                        BTW Berekenen
                      </CardTitle>
                      <CardDescription className="text-lg text-white/90 font-medium">
                        Vul de onderstaande velden in om de BTW te berekenen
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Country Selection */}
                      <div className="space-y-3">
                        <Label htmlFor="country" className="text-lg font-bold text-white">
                          <Globe className="w-5 h-5 inline mr-2 text-white" />
                          Selecteer Land
                        </Label>
                        <Select onValueChange={handleCountryChange}>
                          <SelectTrigger id="country" className="h-14 text-lg font-medium bg-white/20 border-white/30 text-white placeholder:text-white/60 hover:bg-white/25 transition-colors">
                            <SelectValue placeholder="Kies een land..." />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {vatRates.map((country) => <SelectItem key={country.countryCode} value={country.countryCode}>
                                <span className="flex items-center gap-2">
                                  <span className="text-xl">{country.flag}</span>
                                  {country.country} ({country.currencySymbol})
                                </span>
                              </SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Rate Selection - always visible */}
                      <div className="space-y-3">
                        <Label className="text-lg font-bold text-white">
                          <TrendingUp className="w-5 h-5 inline mr-2 text-white" />
                          BTW-tarief
                        </Label>
                        {selectedCountry ?
                      <RadioGroup value={selectedRate?.toString()} onValueChange={(value) => setSelectedRate(parseFloat(value))}>
                            <div className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                              <RadioGroupItem value={selectedCountry.standardRate.toString()} id="standard" className="border-white/50 text-white" />
                              <Label htmlFor="standard" className="cursor-pointer flex-1 font-semibold text-white text-lg">
                                Standaard tarief: {selectedCountry.standardRate}%
                              </Label>
                            </div>
                            {selectedCountry.reducedRates.map((rate, index) => <div key={index} className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                                <RadioGroupItem value={rate.toString()} id={`reduced-${index}`} className="border-white/50 text-white" />
                                <Label htmlFor={`reduced-${index}`} className="cursor-pointer flex-1 font-semibold text-white text-lg">
                                  Verlaagd tarief: {rate}%
                                </Label>
                              </div>)}
                          </RadioGroup> :

                      <div className="p-4 rounded-lg border border-white/20 bg-white/10 text-white/70 text-base font-medium">
                            Selecteer eerst een land om tarieven te zien
                          </div>
                      }
                      </div>

                      {/* Include/Exclude VAT - always visible */}
                      <div className="space-y-3">
                        <Label className="text-lg font-bold text-white">Het bedrag is:</Label>
                        <RadioGroup value={includesVAT} onValueChange={(value: "yes" | "no") => setIncludesVAT(value)}>
                          <div className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                            <RadioGroupItem value="no" id="excl" className="border-white/50 text-white" />
                            <Label htmlFor="excl" className="cursor-pointer flex-1 font-semibold text-white text-lg">
                              Exclusief BTW
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                            <RadioGroupItem value="yes" id="incl" className="border-white/50 text-white" />
                            <Label htmlFor="incl" className="cursor-pointer flex-1 font-semibold text-white text-lg">
                              Inclusief BTW
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Amount Input - always visible */}
                      <div className="space-y-3">
                        <Label htmlFor="amount" className="text-lg font-bold text-white">
                          <FileText className="w-5 h-5 inline mr-2 text-white" />
                          Bedrag {selectedCountry ? `(${selectedCountry.currencySymbol})` : '(€)'}
                        </Label>
                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-4xl">
                            {selectedCountry ? selectedCountry.currencySymbol : '€'}
                          </span>
                          <Input id="amount" type="number" step="0.01" placeholder="0.00" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ fontSize: '3rem', lineHeight: '1' }} className="pl-16 h-24 font-bold bg-white border-white/40 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary/30 rounded-xl shadow-inner" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results Card */}
                  {results ? <VATResults key={`${results.country.countryCode}-${results.rate}`} results={results} /> : <Card className="flex items-center justify-center border-0 shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent">
                      <CardContent className="text-center py-16 px-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                          <Calculator className="w-20 h-20 mx-auto mb-6 text-white/80 relative" />
                        </div>
                        <p className="text-lg text-white font-medium mb-2">
                          Vul de gegevens in om de BTW te berekenen
                        </p>
                        <p className="text-sm text-white/60">
                          De resultaten verschijnen hier automatisch
                        </p>
                      </CardContent>
                    </Card>}
                </div>
              </div>
            </div>
          </section>

          {/* SEO Content Section */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-4xl mx-auto prose prose-lg">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Waarom een internationale BTW-calculator gebruiken?</h2>
                
                <p className="text-muted-foreground mb-4 text-lg font-semibold">
                  Als internationale ondernemer, e-commerce bedrijf of freelancer kom je regelmatig BTW tegen in verschillende landen. Elke land heeft eigen BTW-tarieven (ook wel VAT genoemd in het Engels), en deze kunnen flink verschillen. In Nederland is het standaard BTW-tarief 21%, maar in Hongarije bijvoorbeeld 27% en in Luxemburg slechts 17%. Deze verschillen maken het essentieel om een betrouwbare BTW-calculator te gebruiken.
                </p>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Voor wie is deze BTW-calculator geschikt?</h3>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li><strong>E-commerce ondernemers</strong>: Verkoop je producten in meerdere EU-landen? Bereken eenvoudig de juiste BTW per land voor je facturen en productprijzen.</li>
                  <li><strong>Freelancers & ZZP'ers</strong>: Werk je voor internationale klanten? Bepaal snel of je BTW moet berekenen en welk tarief van toepassing is.</li>
                  <li><strong>Accountants & Boekhouders</strong>: Verwerk internationale transacties correct met actuele BTW-tarieven voor al je cliënten.</li>
                  <li><strong>Import/Export bedrijven</strong>: Bereken de BTW voor grensoverschrijdende handel en zorg voor correcte aangifte.</li>
                  <li><strong>Online dienstverleners</strong>: Bied je digitale diensten aan in de EU? Gebruik de juiste BTW-tarieven per land.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">BTW berekenen: inclusief of exclusief?</h3>
                <p className="text-muted-foreground mb-4">
                  Een veelvoorkomende vraag is of een bedrag inclusief of exclusief BTW is. Onze calculator kan beide berekenen:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li><strong>Bedrag exclusief BTW</strong>: Je hebt een netto bedrag en wilt weten hoeveel BTW je moet optellen. Bijvoorbeeld: €100,- + 21% BTW = €121,-</li>
                  <li><strong>Bedrag inclusief BTW</strong>: Je hebt een bruto bedrag en wilt weten hoeveel BTW erin zit. Bijvoorbeeld: €121,- waarvan €21,- BTW.</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Standaard en verlaagde BTW-tarieven</h3>
                <p className="text-muted-foreground mb-4 font-semibold">
                  Vrijwel elk land heeft meerdere BTW-tarieven. Het standaard tarief geldt voor de meeste goederen en diensten. Daarnaast zijn er vaak één of meerdere verlaagde tarieven voor bijvoorbeeld:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>Levensmiddelen en voedingsmiddelen</li>
                  <li>Boeken, kranten en tijdschriften</li>
                  <li>Medicijnen en medische hulpmiddelen</li>
                  <li>Culturele diensten (musea, theater, etc.)</li>
                  <li>Personen- en goederenvervoer</li>
                  <li>Kinderopvang en onderwijs</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">BTW in de Europese Unie</h3>
                <p className="text-muted-foreground mb-4 font-semibold">
                  Binnen de EU gelden speciale BTW-regelingen. De BTW-richtlijn harmoniseert veel regels, maar elk land mag eigen tarieven vaststellen binnen bepaalde bandbreedtes. Voor grensoverschrijdende diensten binnen de EU gelden vaak specifieke regels:
                </p>
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li><strong>B2B (Business to Business)</strong>: Meestal verleggingsregeling - de afnemer berekent zelf de BTW</li>
                  <li><strong>B2C (Business to Consumer)</strong>: BTW volgens land van de klant (voor digitale diensten en e-commerce)</li>
                  <li><strong>OSS-regeling</strong>: Vereenvoudigde BTW-aangifte voor e-commerce binnen de EU</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Veelgestelde vragen over BTW berekenen</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Hoe vaak veranderen BTW-tarieven?</h4>
                    <p className="text-muted-foreground">
                      BTW-tarieven worden meestal aangepast per 1 januari van een nieuw jaar. Onze calculator wordt regelmatig bijgewerkt met de laatste tarieven voor 2025.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Kan ik deze calculator gebruiken voor mijn BTW-aangifte?</h4>
                    <p className="text-muted-foreground">
                      Ja, de bedragen die je berekent kun je direct gebruiken voor je BTW-aangifte. Let wel op dat je de juiste tarieven selecteert voor jouw specifieke goederen of diensten.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">Wat is het verschil tussen BTW en VAT?</h4>
                    <p className="text-muted-foreground">
                      BTW (Belasting Toegevoegde Waarde) en VAT (Value Added Tax) zijn hetzelfde. BTW is de Nederlandse term, VAT wordt internationaal gebruikt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Promo Boxes */}
          <VATPromoBoxes lang="nl" />

          {/* FAQ Section */}
          <VATFAQSection />
        </main>
        <FooterEN />
      </div>
    </>;};
export default VATCalculator;
import { Helmet } from "react-helmet";
import { useState, useMemo } from "react";
import { Calculator, Globe, TrendingUp, FileText, CheckCircle2 } from "lucide-react";
import FooterEN from "@/components/en/FooterEN";
import VATLanguageSwitcher from "@/components/vat/VATLanguageSwitcher";
import VATPromoBoxes from "@/components/vat/VATPromoBoxes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { vatRates, VATRate } from "@/data/vatRates";
import VATResultsEN from "@/components/vat/VATResultsEN";

const VATCalculatorPL = () => {
  const [selectedCountry, setSelectedCountry] = useState<VATRate | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [includesVAT, setIncludesVAT] = useState<"yes" | "no">("no");
  const [selectedRate, setSelectedRate] = useState<number | null>(null);

  const handleCountryChange = (countryCode: string) => {
    const country = vatRates.find(c => c.countryCode === countryCode);
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

    return { country: selectedCountry, rate: selectedRate, amountExclVAT, vatAmount, amountInclVAT };
  }, [selectedCountry, amount, selectedRate, includesVAT]);

  return (
    <>
      <Helmet>
        <html lang="pl" />
        <title>Światowy Kalkulator VAT dla Przedsiębiorców | Oblicz VAT Międzynarodowo</title>
        <meta name="description" content="Łatwo oblicz VAT dla każdego kraju na świecie. Profesjonalny kalkulator VAT dla przedsiębiorców z aktualnymi stawkami, obliczeniami brutto/netto i przejrzystymi wynikami." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.iaee.eu/kalkulator-vat-swiatowy" />
        <link rel="alternate" hrefLang="nl" href="https://www.iaee.eu/btw-calculator-wereldwijd" />
        <link rel="alternate" hrefLang="en" href="https://www.iaee.eu/vat-calculator-worldwide" />
        <link rel="alternate" hrefLang="de" href="https://www.iaee.eu/mwst-rechner-weltweit" />
        <link rel="alternate" hrefLang="fr" href="https://www.iaee.eu/calculateur-tva-mondial" />
        <link rel="alternate" hrefLang="es" href="https://www.iaee.eu/calculadora-iva-mundial" />
        <link rel="alternate" hrefLang="it" href="https://www.iaee.eu/calcolatore-iva-mondiale" />
        <link rel="alternate" hrefLang="pl" href="https://www.iaee.eu/kalkulator-vat-swiatowy" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iaee.eu/vat-calculator-worldwide" />
      </Helmet>
      
      <VATLanguageSwitcher currentLanguage="pl" />
      
      <div className="min-h-screen">
        <main>
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm shadow-lg">
                  <Globe className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Światowy • 60+ Krajów</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                  Światowy Kalkulator VAT
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Łatwo i dokładnie oblicz VAT (podatek od wartości dodanej) dla każdego kraju na świecie. 
                  Profesjonalny kalkulator VAT z aktualnymi stawkami dla międzynarodowych przedsiębiorców, freelancerów i firm.
                </p>

                <div className="flex flex-wrap gap-6 justify-center text-sm mb-8">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">60+ Krajów</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Stawki 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Natychmiastowy Wynik</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">100% Darmowy</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak Działa Kalkulator VAT?</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Oblicz VAT dla każdego kraju w 4 prostych krokach
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-all group hover:shadow-colorful duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mb-4 shadow-lg">
                        <Globe className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">1. Wybierz kraj</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Wybierz kraj, dla którego chcesz obliczyć VAT z naszej listy 60+ krajów.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 hover:border-secondary/50 transition-all group hover:shadow-colorful duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center mb-4 shadow-lg">
                        <TrendingUp className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">2. Wybierz stawkę</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Wybierz stawkę podstawową lub obniżoną. Każdy kraj ma własne stawki VAT.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 hover:border-accent/50 transition-all group hover:shadow-colorful duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mb-4 shadow-lg">
                        <FileText className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">3. Wprowadź kwotę</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Wprowadź kwotę i wskaż, czy jest brutto czy netto.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="relative overflow-hidden border-2 hover:border-info/50 transition-all group hover:shadow-colorful duration-300">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-info to-info/70 flex items-center justify-center mb-4 shadow-lg">
                        <Calculator className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold">4. Zobacz wynik</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Kalkulator natychmiast pokazuje wszystkie kwoty i podsumowanie dla Twojej deklaracji.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-background">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Kalkulator VAT</h2>
                  <p className="text-lg text-muted-foreground">
                    Natychmiast oblicz VAT dla swoich międzynarodowych transakcji
                  </p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-2 shadow-lg">
                    <CardHeader className="space-y-1 pb-4">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Calculator className="w-6 h-6 text-primary" />
                        Oblicz VAT
                      </CardTitle>
                      <CardDescription className="text-base">
                        Wypełnij poniższe pola, aby obliczyć VAT
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <Label htmlFor="country" className="text-base font-semibold">
                          <Globe className="w-4 h-4 inline mr-2" />
                          Wybierz Kraj
                        </Label>
                        <Select onValueChange={handleCountryChange}>
                          <SelectTrigger id="country" className="h-14 text-base">
                            <SelectValue placeholder="Wybierz kraj..." />
                          </SelectTrigger>
                          <SelectContent className="max-h-[300px]">
                            {vatRates.map((country) => (
                              <SelectItem key={country.countryCode} value={country.countryCode}>
                                <span className="flex items-center gap-2">
                                  <span className="text-xl">{country.flag}</span>
                                  {country.country} ({country.currencySymbol})
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedCountry && (
                        <>
                          <div className="space-y-3">
                            <Label className="text-base font-semibold">
                              <TrendingUp className="w-4 h-4 inline mr-2" />
                              Stawka VAT
                            </Label>
                            <RadioGroup 
                              value={selectedRate?.toString()} 
                              onValueChange={(value) => setSelectedRate(parseFloat(value))}
                            >
                              <div className="flex items-center space-x-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                <RadioGroupItem value={selectedCountry.standardRate.toString()} id="standard" />
                                <Label htmlFor="standard" className="cursor-pointer flex-1 font-medium">
                                  Stawka podstawowa: {selectedCountry.standardRate}%
                                </Label>
                              </div>
                              {selectedCountry.reducedRates.map((rate, index) => (
                                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                  <RadioGroupItem value={rate.toString()} id={`reduced-${index}`} />
                                  <Label htmlFor={`reduced-${index}`} className="cursor-pointer flex-1 font-medium">
                                    Stawka obniżona: {rate}%
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>

                          <div className="space-y-3">
                            <Label className="text-base font-semibold">Kwota jest:</Label>
                            <RadioGroup value={includesVAT} onValueChange={(value: "yes" | "no") => setIncludesVAT(value)}>
                              <div className="flex items-center space-x-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                <RadioGroupItem value="no" id="excl" />
                                <Label htmlFor="excl" className="cursor-pointer flex-1 font-medium">
                                  Netto (bez VAT)
                                </Label>
                              </div>
                              <div className="flex items-center space-x-2 p-3 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
                                <RadioGroupItem value="yes" id="incl" />
                                <Label htmlFor="incl" className="cursor-pointer flex-1 font-medium">
                                  Brutto (z VAT)
                                </Label>
                              </div>
                            </RadioGroup>
                          </div>

                          <div className="space-y-3">
                            <Label htmlFor="amount" className="text-base font-semibold">
                              <FileText className="w-4 h-4 inline mr-2" />
                              Kwota ({selectedCountry.currencySymbol})
                            </Label>
                            <div className="relative">
                              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-lg">
                                {selectedCountry.currencySymbol}
                              </span>
                              <Input
                                id="amount"
                                type="number"
                                step="0.01"
                                placeholder="0,00"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="pl-10 h-12 text-lg font-medium"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {!selectedCountry && (
                        <div className="text-center py-12 px-4">
                          <Globe className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                          <p className="text-lg text-muted-foreground font-medium">
                            Wybierz kraj, aby rozpocząć
                          </p>
                          <p className="text-sm text-muted-foreground mt-2">
                            Wybierz spośród 60+ krajów na świecie
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {results ? (
                    <VATResultsEN key={`${results.country.countryCode}-${results.rate}`} results={results} />
                  ) : (
                    <Card className="flex items-center justify-center border-2 shadow-lg">
                      <CardContent className="text-center py-16 px-6">
                        <Calculator className="w-20 h-20 mx-auto mb-6 text-primary" />
                        <p className="text-lg text-muted-foreground font-medium mb-2">
                          Wprowadź dane, aby obliczyć VAT
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Wyniki pojawią się tutaj automatycznie
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </section>

          <VATPromoBoxes lang="pl" />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default VATCalculatorPL;

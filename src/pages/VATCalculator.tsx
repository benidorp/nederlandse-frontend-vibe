import { Helmet } from "react-helmet";
import { useState } from "react";
import { Calculator } from "lucide-react";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";
import GTranslateWidget from "@/components/GTranslateWidget";
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
    const country = vatRates.find(c => c.countryCode === countryCode);
    if (country) {
      setSelectedCountry(country);
      setSelectedRate(country.standardRate);
    }
  };

  const calculateResults = () => {
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
      amountInclVAT,
    };
  };

  const results = calculateResults();

  return (
    <>
      <Helmet>
        <html lang="nl" />
        <title>Wereldwijde BTW Calculator voor Ondernemers | BTW Berekenen Internationaal</title>
        <meta name="description" content="Bereken eenvoudig BTW voor elk land wereldwijd. Professionele BTW-calculator voor ondernemers met actuele tarieven, inclusief/exclusief berekeningen en overzichtelijke resultaten." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://iaee.eu/btw-calculator-wereldwijd" />
      </Helmet>
      <GTranslateWidget />
      <div className="min-h-screen">
        <HeaderEN />
        <main>
          {/* Hero Section */}
          <section className="relative py-12 md:py-20 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
                  <Calculator className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Wereldwijde BTW-berekening</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Wereldwijde BTW-calculator voor Ondernemers
                </h1>
                
                <p className="text-xl text-muted-foreground mb-4">
                  Bereken eenvoudig de BTW voor elk land wereldwijd. Professionele tool voor internationale ondernemers met actuele tarieven en overzichtelijke resultaten.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator Section */}
          <section className="py-12 md:py-16 bg-background">
            <div className="container">
              <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
                {/* Input Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">BTW Berekenen</CardTitle>
                    <CardDescription>
                      Selecteer uw land en vul het bedrag in om de BTW te berekenen
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Country Selection */}
                    <div className="space-y-2">
                      <Label htmlFor="country">Selecteer Land</Label>
                      <Select onValueChange={handleCountryChange}>
                        <SelectTrigger id="country">
                          <SelectValue placeholder="Kies een land..." />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {vatRates.map((country) => (
                            <SelectItem key={country.countryCode} value={country.countryCode}>
                              {country.country} ({country.currencySymbol})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {selectedCountry && (
                      <>
                        {/* Rate Selection */}
                        <div className="space-y-2">
                          <Label>BTW-tarief</Label>
                          <RadioGroup 
                            value={selectedRate?.toString()} 
                            onValueChange={(value) => setSelectedRate(parseFloat(value))}
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value={selectedCountry.standardRate.toString()} id="standard" />
                              <Label htmlFor="standard" className="cursor-pointer">
                                Standaard tarief: {selectedCountry.standardRate}%
                              </Label>
                            </div>
                            {selectedCountry.reducedRates.map((rate, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <RadioGroupItem value={rate.toString()} id={`reduced-${index}`} />
                                <Label htmlFor={`reduced-${index}`} className="cursor-pointer">
                                  Verlaagd tarief: {rate}%
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        {/* Include/Exclude VAT */}
                        <div className="space-y-2">
                          <Label>Het bedrag is:</Label>
                          <RadioGroup value={includesVAT} onValueChange={(value: "yes" | "no") => setIncludesVAT(value)}>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="excl" />
                              <Label htmlFor="excl" className="cursor-pointer">
                                Exclusief BTW
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="incl" />
                              <Label htmlFor="incl" className="cursor-pointer">
                                Inclusief BTW
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        {/* Amount Input */}
                        <div className="space-y-2">
                          <Label htmlFor="amount">Bedrag ({selectedCountry.currencySymbol})</Label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                              {selectedCountry.currencySymbol}
                            </span>
                            <Input
                              id="amount"
                              type="number"
                              step="0.01"
                              placeholder="0.00"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="pl-8"
                            />
                          </div>
                        </div>

                      </>
                    )}

                    {!selectedCountry && (
                      <div className="text-center py-8 text-muted-foreground">
                        Selecteer eerst een land om te beginnen
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Results Card */}
                {results ? (
                  <VATResults results={results} />
                ) : (
                  <Card className="flex items-center justify-center">
                    <CardContent className="text-center py-12">
                      <Calculator className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <p className="text-muted-foreground">
                        Vul de gegevens in en klik op "Berekenen" om de resultaten te zien
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <VATFAQSection />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default VATCalculator;

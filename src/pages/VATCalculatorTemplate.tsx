import { Helmet } from "react-helmet";
import { useState, useMemo } from "react";
import { Calculator, Globe, TrendingUp, FileText, CheckCircle2 } from "lucide-react";
import FooterEN from "@/components/en/FooterEN";
import VATLanguageSwitcher from "@/components/vat/VATLanguageSwitcher";
import VATPromoBoxesTemplate from "@/components/vat/VATPromoBoxesTemplate";
import VATGuideTemplate from "@/components/vat/VATGuideTemplate";
import { vatGuideTranslations } from "@/data/vatGuideTranslations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { vatRates, VATRate } from "@/data/vatRates";
import VATResultsTemplate from "@/components/vat/VATResultsTemplate";
import VATFAQTemplate from "@/components/vat/VATFAQTemplate";
import { type VATCalcTranslation, vatCalcSlugs, getVatHreflangUrls } from "@/data/vatCalcTranslations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface VATCalculatorTemplateProps {
  t: VATCalcTranslation;
}

const VATCalculatorTemplate = ({ t }: VATCalculatorTemplateProps) => {
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
    return { country: selectedCountry, rate: selectedRate, amountExclVAT, vatAmount, amountInclVAT };
  }, [selectedCountry, amount, selectedRate, includesVAT]);

  // Hreflang URLs for all 42 languages
  const hreflangUrls = getVatHreflangUrls();

  // JSON-LD schemas
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: t.h1,
    description: t.metaDesc,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    inLanguage: t.htmlLang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "3156" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const isRTL = t.htmlLang === "ar";

  return (
    <>
      <Helmet>
        <html lang={t.htmlLang} dir={isRTL ? "rtl" : "ltr"} />
        <title>{t.title}</title>
        <meta name="description" content={t.metaDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={t.keywords} />
        <link rel="canonical" href={`https://www.iaee.eu/${t.slug}`} />
        {Object.entries(hreflangUrls).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        <link rel="alternate" hrefLang="x-default" href="https://www.iaee.eu/vat-calculator-worldwide" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <VATLanguageSwitcher currentLanguage={t.code} />
      <div className="min-h-screen">
        <main>
          {/* Hero Section - NL benchmark style */}
          <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="container relative">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 backdrop-blur-sm shadow-lg">
                  <Globe className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {t.badge}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent lg:text-5xl">
                  {t.h1}
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  {t.subtitle}
                </p>

                <div className="flex flex-wrap gap-6 justify-center text-sm mb-8">
                  {t.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground font-bold text-lg">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="max-w-3xl mx-auto text-left space-y-4">
                  {t.introParagraphs.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed text-lg font-semibold">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="py-12 md:py-16 bg-muted/30">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.howTitle}</h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.howSubtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.steps.map((step, i) => {
                    const icons = [Globe, TrendingUp, FileText, Calculator];
                    const colors = ["primary", "secondary", "accent", "info"];
                    const Icon = icons[i];
                    const color = colors[i];
                    return (
                      <Card key={i} className={`relative overflow-hidden border-2 hover:border-${color}/50 transition-all group hover:shadow-colorful duration-300`}>
                        <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${color}/20 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300`}></div>
                        <CardHeader>
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${color} to-${color}/70 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <CardTitle className="text-xl font-bold">{step.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Calculator Section - NL benchmark (colorful gradient card) */}
          <section className="py-12 md:py-20 bg-background">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
                    {t.calcSectionTitle}
                  </h2>
                  <p className="text-lg text-muted-foreground">{t.calcSectionSubtitle}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Input Card */}
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/80 text-white">
                    <CardHeader className="space-y-1 pb-4">
                      <CardTitle className="text-3xl flex items-center gap-2 text-white font-bold">
                        <Calculator className="w-7 h-7 text-white" />
                        {t.calcTitle}
                      </CardTitle>
                      <CardDescription className="text-lg text-white/90 font-medium">
                        {t.calcDesc}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Country Selection */}
                      <div className="space-y-3">
                        <Label htmlFor="country" className="text-lg font-bold text-white">
                          <Globe className="w-5 h-5 inline mr-2 text-white" />
                          {t.selectCountryLabel}
                        </Label>
                        <Select onValueChange={handleCountryChange}>
                          <SelectTrigger id="country" className="h-14 text-lg font-medium bg-white/20 border-white/30 text-white placeholder:text-white/60 hover:bg-white/25 transition-colors">
                            <SelectValue placeholder={t.chooseCountryPlaceholder} />
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

                      {/* Rate Selection */}
                      <div className="space-y-3">
                        <Label className="text-lg font-bold text-white">
                          <TrendingUp className="w-5 h-5 inline mr-2 text-white" />
                          {t.vatRateLabel}
                        </Label>
                        {selectedCountry ? (
                          <RadioGroup value={selectedRate?.toString()} onValueChange={(value) => setSelectedRate(parseFloat(value))}>
                            <div className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                              <RadioGroupItem value={selectedCountry.standardRate.toString()} id="standard" className="border-white/50 text-white" />
                              <Label htmlFor="standard" className="cursor-pointer flex-1 font-semibold text-white text-lg">
                                {t.standardRate}: {selectedCountry.standardRate}%
                              </Label>
                            </div>
                            {selectedCountry.reducedRates.map((rate, index) => (
                              <div key={index} className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                                <RadioGroupItem value={rate.toString()} id={`reduced-${index}`} className="border-white/50 text-white" />
                                <Label htmlFor={`reduced-${index}`} className="cursor-pointer flex-1 font-semibold text-white text-lg">
                                  {t.reducedRate}: {rate}%
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        ) : (
                          <div className="p-4 rounded-lg border border-white/20 bg-white/10 text-white/70 text-base font-medium">
                            {t.selectCountryFirst}
                          </div>
                        )}
                      </div>

                      {/* Include/Exclude VAT */}
                      <div className="space-y-3">
                        <Label className="text-lg font-bold text-white">{t.amountIsLabel}</Label>
                        <RadioGroup value={includesVAT} onValueChange={(value: "yes" | "no") => setIncludesVAT(value)}>
                          <div className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                            <RadioGroupItem value="no" id="excl" className="border-white/50 text-white" />
                            <Label htmlFor="excl" className="cursor-pointer flex-1 font-semibold text-white text-lg">
                              {t.exclVAT}
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 p-4 rounded-lg border border-white/30 bg-white/10 hover:bg-white/15 transition-colors">
                            <RadioGroupItem value="yes" id="incl" className="border-white/50 text-white" />
                            <Label htmlFor="incl" className="cursor-pointer flex-1 font-semibold text-white text-lg">
                              {t.inclVAT}
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      {/* Amount Input */}
                      <div className="space-y-3">
                        <Label htmlFor="amount" className="text-lg font-bold text-white">
                          <FileText className="w-5 h-5 inline mr-2 text-white" />
                          {t.amountLabel} {selectedCountry ? `(${selectedCountry.currencySymbol})` : "(€)"}
                        </Label>
                        <div className="relative">
                          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground font-bold text-4xl">
                            {selectedCountry ? selectedCountry.currencySymbol : "€"}
                          </span>
                          <Input
                            id="amount"
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            style={{ fontSize: "3rem", lineHeight: "1" }}
                            className="pl-16 h-24 font-bold bg-white border-white/40 text-foreground placeholder:text-muted-foreground/40 focus:border-primary focus:ring-primary/30 rounded-xl shadow-inner"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Results Card */}
                  {results ? (
                    <VATResultsTemplate key={`${results.country.countryCode}-${results.rate}`} results={results} t={t} />
                  ) : (
                    <Card className="flex items-center justify-center border-0 shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent">
                      <CardContent className="text-center py-16 px-6">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                          <Calculator className="w-20 h-20 mx-auto mb-6 text-white/80 relative" />
                        </div>
                        <p className="text-lg text-white font-medium mb-2">{t.fillInPrompt}</p>
                        <p className="text-sm text-white/60">{t.resultsAppearHere}</p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Promo Boxes */}
          <VATPromoBoxesTemplate t={t} />

          {/* Comprehensive Guide */}
          {vatGuideTranslations[t.code] && (
            <VATGuideTemplate guide={vatGuideTranslations[t.code]} />
          )}

          {/* FAQ Section */}
          <VATFAQTemplate t={t} />
        </main>
        <FooterEN />
      </div>
    </>
  );
};

export default VATCalculatorTemplate;

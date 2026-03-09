import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { VATRate } from "@/data/vatRates";
import { type VATCalcTranslation } from "@/data/vatCalcTranslations";

interface Props {
  results: {
    country: VATRate;
    rate: number;
    amountExclVAT: number;
    vatAmount: number;
    amountInclVAT: number;
  };
  t: VATCalcTranslation;
}

const VATResultsTemplate = ({ results, t }: Props) => {
  const { country, rate, amountExclVAT, vatAmount, amountInclVAT } = results;

  const fmt = (n: number) =>
    new Intl.NumberFormat(t.htmlLang, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  const exclPct = (amountExclVAT / amountInclVAT) * 100;
  const vatPct = (vatAmount / amountInclVAT) * 100;

  return (
    <Card className="border-2 shadow-lg bg-gradient-to-br from-card via-card to-primary/5">
      <CardHeader className="border-b bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="text-2xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <span className="text-lg text-white">✓</span>
          </div>
          {t.resultsTitle}
        </CardTitle>
        <p className="text-base text-muted-foreground mt-2 flex items-center gap-2">
          <span className="text-2xl">{country.flag}</span>
          <span className="font-semibold">{country.country}</span>
          <span className="text-primary">– {rate}%</span>
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div className="space-y-3">
          <div className="p-5 rounded-xl bg-gradient-to-br from-info/20 to-info/5 border-2 border-info/30 space-y-2 hover:shadow-colorful transition-all hover:scale-105 duration-300">
            <p className="text-sm font-semibold text-info uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-info"></span>
              {t.amountExclVAT}
            </p>
            <p className="text-4xl font-bold text-info">
              {country.currencySymbol} {fmt(amountExclVAT)}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-secondary/25 to-secondary/10 border-2 border-secondary/40 space-y-2 hover:shadow-colorful transition-all hover:scale-105 duration-300">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {t.vatAmountLabel} ({rate}%)
            </p>
            <p className="text-4xl font-bold text-secondary">
              {country.currencySymbol} {fmt(vatAmount)}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-accent/25 to-accent/10 border-2 border-accent/40 space-y-2 hover:shadow-colorful transition-all hover:scale-105 duration-300">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              {t.amountInclVAT}
            </p>
            <p className="text-4xl font-bold text-accent">
              {country.currencySymbol} {fmt(amountInclVAT)}
            </p>
          </div>
        </div>

        {/* Visual breakdown */}
        <div className="space-y-4 p-5 rounded-xl bg-muted/20 border">
          <h3 className="font-semibold text-lg">{t.visualBreakdown}</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-muted-foreground">{t.exclVATShort}</span>
              <span className="font-bold">{exclPct.toFixed(1)}%</span>
            </div>
            <div className="relative">
              <Progress value={exclPct} className="h-4" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                {country.currencySymbol} {fmt(amountExclVAT)}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-muted-foreground">VAT</span>
              <span className="font-bold text-primary">{vatPct.toFixed(1)}%</span>
            </div>
            <div className="relative">
              <Progress value={vatPct} className="h-4 [&>div]:bg-primary" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                {country.currencySymbol} {fmt(vatAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Tax return overview */}
        <div className="border-t pt-6 space-y-4 bg-gradient-to-br from-primary/5 to-transparent p-5 rounded-xl">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
              <span className="text-xs text-primary">📋</span>
            </div>
            {t.taxReturnTitle}
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-3 rounded-lg bg-background/50">
              <span className="text-muted-foreground font-medium">{t.totalRevenueExcl}</span>
              <span className="font-bold">{country.currencySymbol} {fmt(amountExclVAT)}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-background/50">
              <span className="text-muted-foreground font-medium">{t.totalVATReceived}</span>
              <span className="font-bold">{country.currencySymbol} {fmt(vatAmount)}</span>
            </div>
            <div className="flex justify-between border-t-2 border-primary/20 pt-3 p-3 rounded-lg bg-primary/5">
              <span className="font-bold text-base">{t.totalVATDue}</span>
              <span className="font-bold text-primary text-lg">{country.currencySymbol} {fmt(vatAmount)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(VATResultsTemplate);

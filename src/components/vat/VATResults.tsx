import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { VATRate } from "@/data/vatRates";

interface VATResultsProps {
  results: {
    country: VATRate;
    rate: number;
    amountExclVAT: number;
    vatAmount: number;
    amountInclVAT: number;
  };
}

const VATResults = ({ results }: VATResultsProps) => {
  const { country, rate, amountExclVAT, vatAmount, amountInclVAT } = results;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const exclPercentage = (amountExclVAT / amountInclVAT) * 100;
  const vatPercentage = (vatAmount / amountInclVAT) * 100;

  return (
    <Card className="border-2 shadow-lg">
      <CardHeader className="border-b bg-muted/30">
        <CardTitle className="text-2xl flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg">✓</span>
          </div>
          Resultaten
        </CardTitle>
        <p className="text-base text-muted-foreground mt-2">
          {country.country} - BTW {rate}%
        </p>
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        {/* Amount Details */}
        <div className="space-y-3">
          <div className="p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border space-y-2 hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Bedrag exclusief BTW</p>
            <p className="text-3xl font-bold">
              {country.currencySymbol} {formatCurrency(amountExclVAT)}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 space-y-2 hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">BTW bedrag ({rate}%)</p>
            <p className="text-3xl font-bold text-primary">
              {country.currencySymbol} {formatCurrency(vatAmount)}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border space-y-2 hover:shadow-md transition-shadow">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Bedrag inclusief BTW</p>
            <p className="text-3xl font-bold">
              {country.currencySymbol} {formatCurrency(amountInclVAT)}
            </p>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="space-y-4 p-5 rounded-xl bg-muted/20 border">
          <h3 className="font-semibold text-lg">Visuele verdeling</h3>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-muted-foreground">Exclusief BTW</span>
              <span className="font-bold">{exclPercentage.toFixed(1)}%</span>
            </div>
            <div className="relative">
              <Progress value={exclPercentage} className="h-4" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                {country.currencySymbol} {formatCurrency(amountExclVAT)}
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-muted-foreground">BTW</span>
              <span className="font-bold text-primary">{vatPercentage.toFixed(1)}%</span>
            </div>
            <div className="relative">
              <Progress value={vatPercentage} className="h-4 [&>div]:bg-primary" />
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-foreground">
                {country.currencySymbol} {formatCurrency(vatAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Tax Return Summary */}
        <div className="border-t pt-6 space-y-4 bg-gradient-to-br from-primary/5 to-transparent p-5 rounded-xl">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center">
              <span className="text-xs text-primary">📋</span>
            </div>
            Aangifte overzicht
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between p-3 rounded-lg bg-background/50">
              <span className="text-muted-foreground font-medium">Totaal omzet excl. BTW:</span>
              <span className="font-bold">{country.currencySymbol} {formatCurrency(amountExclVAT)}</span>
            </div>
            <div className="flex justify-between p-3 rounded-lg bg-background/50">
              <span className="text-muted-foreground font-medium">Totaal BTW ontvangen:</span>
              <span className="font-bold">{country.currencySymbol} {formatCurrency(vatAmount)}</span>
            </div>
            <div className="flex justify-between border-t-2 border-primary/20 pt-3 p-3 rounded-lg bg-primary/5">
              <span className="font-bold text-base">Totaal BTW af te dragen:</span>
              <span className="font-bold text-primary text-lg">{country.currencySymbol} {formatCurrency(vatAmount)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(VATResults);

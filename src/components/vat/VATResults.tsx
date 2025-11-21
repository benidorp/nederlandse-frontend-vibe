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
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Resultaten</CardTitle>
        <p className="text-sm text-muted-foreground">
          {country.country} - {rate}% BTW
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Amount Details */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-muted/50 space-y-1">
            <p className="text-sm text-muted-foreground">Bedrag exclusief BTW</p>
            <p className="text-2xl font-bold">
              {country.currencySymbol} {formatCurrency(amountExclVAT)}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-primary/10 space-y-1">
            <p className="text-sm text-muted-foreground">BTW bedrag ({rate}%)</p>
            <p className="text-2xl font-bold text-primary">
              {country.currencySymbol} {formatCurrency(vatAmount)}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-muted/50 space-y-1">
            <p className="text-sm text-muted-foreground">Bedrag inclusief BTW</p>
            <p className="text-2xl font-bold">
              {country.currencySymbol} {formatCurrency(amountInclVAT)}
            </p>
          </div>
        </div>

        {/* Visual Breakdown */}
        <div className="space-y-4">
          <h3 className="font-semibold">Visuele verdeling</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Exclusief BTW</span>
              <span className="font-medium">{exclPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={exclPercentage} className="h-3" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>BTW</span>
              <span className="font-medium text-primary">{vatPercentage.toFixed(1)}%</span>
            </div>
            <Progress value={vatPercentage} className="h-3 [&>div]:bg-primary" />
          </div>
        </div>

        {/* Tax Return Summary */}
        <div className="border-t pt-6 space-y-3">
          <h3 className="font-semibold">Aangifte overzicht</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Totaal omzet excl. BTW:</span>
              <span className="font-medium">{country.currencySymbol} {formatCurrency(amountExclVAT)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Totaal BTW ontvangen:</span>
              <span className="font-medium">{country.currencySymbol} {formatCurrency(vatAmount)}</span>
            </div>
            <div className="flex justify-between border-t pt-2">
              <span className="font-semibold">Totaal BTW af te dragen:</span>
              <span className="font-bold text-primary">{country.currencySymbol} {formatCurrency(vatAmount)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VATResults;

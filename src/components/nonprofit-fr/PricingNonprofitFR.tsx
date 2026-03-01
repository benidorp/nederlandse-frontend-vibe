import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

const PricingNonprofitFR = () => {
  const features = [
    "Conditions de don complètes",
    "Politique de confidentialité conforme au RGPD",
    "Modèle d'accord de bénévolat",
    "Politique de cookies",
    "Déclaration de transparence des dons",
    "Guide d'implémentation & liste de vérification"
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Tarification simple</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Investissez dans la protection de votre organisation
            </h2>
            <p className="text-xl text-muted-foreground">
              Investissement unique. Pas d'abonnement. Accès à vie.
            </p>
          </div>

          <Card className="border-4 border-primary/30 shadow-2xl bg-gradient-to-br from-card via-card to-primary/5">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="mb-4">
                <div className="inline-block bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                  Le plus populaire
                </div>
              </div>
              <div className="mb-4">
                <span className="text-5xl font-bold text-primary">€79</span>
                <span className="text-muted-foreground ml-2">paiement unique</span>
              </div>
              <CardTitle className="text-2xl">Package juridique pour associations</CardTitle>
              <p className="text-muted-foreground">Paiement unique • Accès immédiat</p>
              <div className="flex justify-center mt-6">
                <img src="/images/iaee-logo.png" alt="IAEE - Documents juridiques essentiels" className="h-20 w-20 object-contain" loading="eager" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pb-8">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mt-0.5 shadow-md">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t flex justify-center">
                <StripeBuyButton />
              </div>

              <div className="flex items-center justify-center gap-2 mt-4">
                <img src={stripeLogo} alt="Stripe" className="h-5 w-5" />
                <p className="text-sm font-medium text-muted-foreground">
                  Paiement sécurisé via Stripe • Converti automatiquement dans votre devise locale
                </p>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                <div className="flex gap-2">
                  <AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-0.5">Important : Pas de retour</h4>
                    <p className="text-xs text-muted-foreground">
                      Nos produits ne peuvent pas être retournés et nous n'offrons pas de garantie de remboursement.
                      Cela est logique pour les documents numériques qui peuvent être facilement copiés après le téléchargement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-muted-foreground">
            <p className="text-sm">
              💡 En comparaison : une heure chez l'avocat coûte 150 à 300 €. Ce package complet vous fait économiser des milliers d'euros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingNonprofitFR;

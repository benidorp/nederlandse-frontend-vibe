import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-photography.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionPhotographyFR = () => {
  return (
    <section id="a-propos" className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi les documents juridiques sont indispensables pour les photographes</h2>
            <p className="text-lg text-muted-foreground">En tant que photographe professionnel, vous avez besoin d'une protection juridique adéquate pour votre entreprise, vos œuvres créatives et vos clients. Que vous photographiez des portraits, des mariages, des travaux commerciaux ou des événements – les bons documents juridiques vous protègent contre la responsabilité et les problèmes de droits d'auteur.</p>
          </div>

          <Card className="mb-12 bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <img src={nicoleProfile} alt="Nicole Henderson - Experte juridique" className="w-20 h-20 rounded-full object-cover" />
                <div>
                  <CardTitle className="text-2xl text-foreground">À propos de Nicole Henderson</CardTitle>
                  <CardDescription>Experte juridique pour les professions créatives</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Avec des années d'expérience dans l'accompagnement des photographes et des professionnels créatifs pour protéger leurs entreprises,
                je comprends les défis juridiques uniques auxquels vous êtes confrontés. De la protection du droit d'auteur aux contrats clients,
                j'ai créé des documents juridiques complets spécifiquement conçus pour les entreprises de photographie.
              </p>
              <p className="text-muted-foreground">
                Ces documents sont conçus pour être facilement personnalisables tout en offrant une protection juridique maximale
                pour votre entreprise de photographie, vos œuvres créatives et vos relations clients.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-foreground">Pack juridique complet pour photographes</CardTitle>
              </div>
              <CardDescription className="text-base">
                Tout ce dont vous avez besoin pour la protection juridique de votre entreprise de photographie
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                {[
                  "CGV – spécialement conçues pour les photographes",
                  "Contrat de mission (Devis) – avec modèles et exemples d'e-mails",
                  "Politique de confidentialité – conforme au RGPD pour photographes",
                  "Politique de cookies – conformité RGPD complète",
                  "Clause de non-responsabilité – protection de vos photos et contenus",
                  "Décharge – protection juridique pour les accords avec les personnes",
                  "Protection du droit d'auteur – couverture internationale"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Pourquoi choisir ce pack ?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Prêt en quelques minutes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Pour tous vos sites de photographie</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Couverture internationale</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Facilement personnalisable</span>
                  </div>
                </div>
              </div>

              <Card className="bg-card border-primary">
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <div>
                      <span className="text-4xl font-bold text-primary">€79</span>
                      <span className="text-muted-foreground ml-2">paiement unique</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Protection juridique complète pour votre entreprise de photographie.
                      Utilisable sur un nombre illimité de sites. Aucun frais récurrent.
                    </p>
                    <Button size="lg" onClick={() => scrollToSection("tarifs")} className="w-full bg-primary hover:bg-primary/90">
                      Commander le pack complet
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionPhotographyFR;

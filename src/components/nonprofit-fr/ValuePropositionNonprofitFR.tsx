import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Globe, Zap, FileText, Shield } from "lucide-react";
import nicoleProfile from "@/assets/nicole-nonprofit-clear.png";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

const ValuePropositionNonprofitFR = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Pourquoi chaque site associatif a besoin d'une protection juridique</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gérer une association sans documents juridiques appropriés met en danger votre mission, vos donateurs et vos bénévoles.
              Protégez tout ce que vous avez construit avec une protection juridique complète.
            </p>
          </div>

          <Card className="mb-12 overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all">
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-full min-h-[400px]">
                  <img src={nicoleProfile} alt="Nicole Henderson - Experte juridique pour associations" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80"></div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2 rounded-full mb-6 shadow-lg">
                    <Shield className="w-5 h-5" />
                    <span className="font-semibold">À propos de moi</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-foreground">Nicole Henderson</h3>
                  <p className="text-lg font-semibold text-primary mb-4">Spécialisée en droit associatif et caritatif</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    En tant qu'experte juridique spécialisée dans les associations et organisations caritatives, je comprends les défis
                    uniques auxquels vous êtes confrontés. De la protection des donateurs et la conformité des collectes de fonds aux accords
                    de bénévolat et aux exigences de subventions – j'ai créé un package juridique complet qui couvre tous vos besoins
                    tout en maintenant les coûts bas pour que plus de fonds soient consacrés à votre mission.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ce package est utilisé par des associations dans plus de 35 pays et offre une protection
                    juridique complète conformément à la législation actuelle, y compris la conformité RGPD et les réglementations caritatives.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">400+ organisations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">35+ pays</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium">12+ ans d'expérience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="mb-12 border-2 border-primary/30 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-primary to-primary/60 text-primary-foreground">
              <CardTitle className="text-3xl flex items-center gap-3">
                <FileText className="w-8 h-8" />
                Package juridique complet pour associations
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Conditions de don", description: "Conditions complètes pour les dons uniques, les dons récurrents et les dons importants" },
                  { title: "Politique de confidentialité RGPD", description: "Politique de confidentialité complète pour les données des donateurs, les informations des bénévoles et les cookies" },
                  { title: "Accord de bénévolat", description: "Accords clairs pour protéger votre organisation et vos bénévoles" },
                  { title: "Politique de cookies", description: "Politique complète de consentement aux cookies et de suivi pour votre site web" },
                  { title: "Déclaration de transparence des dons", description: "Déclaration transparente montrant comment les dons sont utilisés et gérés" },
                  { title: "Guide d'implémentation", description: "Instructions étape par étape pour implémenter tous les documents sur votre site web" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/40 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                        <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Opérationnel en quelques minutes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Téléchargez immédiatement et implémentez sur votre site web en 30 minutes. Pas d'attente, pas d'avocat nécessaire.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Zap className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Investissement unique</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Un seul paiement couvre un nombre illimité de donateurs, bénévoles et campagnes. Plus de fonds pour votre mission.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                  <Globe className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">Utilisation internationale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conforme au RGPD et adapté à la collecte de fonds mondiale. Protégez votre organisation dans le monde entier.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="text-center bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border-2 border-primary/30 shadow-2xl">
            <CardContent className="pt-12 pb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Protection juridique complète pour votre association
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Réglez toutes vos obligations juridiques pour votre association. Pas de frais mensuels, pas de tracas avec les avocats,
                pas de risque d'amendes. Simplement tous les documents dont vous avez besoin, prêts à l'emploi.
              </p>
              <Button size="lg" onClick={() => scrollToSection('pricing')} className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Commander maintenant
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                💡 Une heure chez l'avocat coûte plus cher – investissez plutôt dans votre mission
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionNonprofitFR;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionFR = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Documents Juridiques Professionnels pour Entreprises d'Affiliation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tous les Documents Légalement Requis dont Votre Site d'Affiliation a Besoin
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              En tant que spécialiste du marketing d'affiliation, vous gagnez des commissions en recommandant des produits. Mais saviez-vous que vous êtes 
              <strong> légalement tenu</strong> d'avoir certains documents juridiques sur votre site web ? 
              Sans ces documents, vous risquez de lourdes amendes et des problèmes juridiques.
            </p>
            
            <div id="a-propos" className="mt-10 p-8 bg-secondary/30 rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">À Propos de Moi</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Spécialiste juridique" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Spécialiste juridique spécialisée dans des documents juridiques clairs, précis et professionnels
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Bonjour, je suis Nicole Henderson, rédactrice juridique spécialisée dans les documents juridiques clairs, précis et professionnels. Je rédige des contrats, des politiques et des accords pour les entreprises, les organisations et les particuliers qui protègent vos intérêts et assurent la conformité, rendant la paperasse juridique simple et sans stress.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Documents Juridiques Professionnels pour Entreprises d'Affiliation
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Pour répondre aux nombreuses questions sur les exigences juridiques pour les affiliés, j'ai développé des documents juridiques de haute qualité spécialement pour les sites d'affiliation. Ces documents sont conçus pour un usage national et international et offrent une protection essentielle à une fraction des coûts habituels. Obtenez une couverture juridique professionnelle à un prix abordable—sécurisez votre entreprise dès aujourd'hui !
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Ce Que Vous Obtenez : Le Forfait Juridique Complet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Notre forfait complet contient <strong>tous les documents juridiques spécialement rédigés pour les sites d'affiliation</strong>. 
                Pas de modèles génériques, mais des textes professionnels parfaitement adaptés à votre modèle commercial d'affiliation :
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Politique de Confidentialité RGPD</h4>
                    <p className="text-sm text-muted-foreground">Entièrement conforme à la législation européenne, y compris l'utilisation des cookies et la protection des données</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Divulgation d'Affiliation</h4>
                    <p className="text-sm text-muted-foreground">Notification transparente que vous gagnez des commissions, conforme aux réglementations FTC et UE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Conditions Générales</h4>
                    <p className="text-sm text-foreground/80">Vous protège contre les réclamations de responsabilité et régit la relation avec les visiteurs</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Clause de Non-Responsabilité Juridique</h4>
                    <p className="text-sm text-foreground/80">Limite votre responsabilité pour les recommandations que vous faites</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Politique de Cookies</h4>
                    <p className="text-sm text-foreground/80">Conforme au RGPD, explication sur les cookies de suivi et d'analyse</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Guide d'Implémentation</h4>
                    <p className="text-sm text-foreground/80">Instructions étape par étape pour placer correctement tout sur votre site web</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Prêt en Minutes</h3>
                <p className="text-sm text-foreground/80">
                  Téléchargez, remplissez vos informations commerciales et placez les documents sur votre site web. Pas besoin d'avocat, pas d'attente de semaines.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Pour Tous Vos Sites Web</h3>
                <p className="text-sm text-muted-foreground">
                  Un seul achat, utilisation illimitée. Utilisez ces documents pour tous vos sites d'affiliation actuels et futurs !
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Déployable Internationalement</h3>
                <p className="text-sm text-muted-foreground">
                  Les modèles sont téléchargeables en plusieurs langues pour une utilisation internationale, afin que vous puissiez les déployer sur tous vos sites web dans le monde entier.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Entièrement conforme au RGPD et à la législation internationale. Choix de téléchargement en différentes langues pour un usage international. Protection complète pour votre entreprise.</h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Pour seulement <strong className="text-primary-foreground">79€ en un seul paiement</strong>, vous réglez toutes les obligations juridiques 
                pour tous vos sites d'affiliation. Pas de frais mensuels, pas de tracas avec les avocats, pas de risque d'amendes. 
                Juste tous les documents dont vous avez besoin, prêts à l'emploi.
              </p>
              <Button size="lg" onClick={() => scrollToSection("tarifs")} className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Commander Maintenant pour 79€
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Pensez-y : une heure chez un avocat coûte déjà plus de 200€
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionFR;

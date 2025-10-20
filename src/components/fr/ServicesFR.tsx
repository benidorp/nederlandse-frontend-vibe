import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité complète conforme au RGPD",
    details: [
      "Droits des utilisateurs sous le RGPD",
      "Quelles données sont collectées",
      "Comment et pourquoi ces données sont utilisées",
      "Partage de données avec des tiers"
    ]
  },
  {
    icon: AlertCircle,
    title: "Clause de Non-Responsabilité",
    description: "Protection juridique contre les réclamations de responsabilité",
    details: [
      "Aucune garantie de résultats",
      "Aucune responsabilité pour les informations",
      "Notification des liens d'affiliation et des commissions"
    ]
  },
  {
    icon: FileText,
    title: "Divulgation d'Affiliation",
    description: "Notification transparente conforme aux directives FTC",
    details: [
      "Transparence sur les annonceurs",
      "Notification claire des commissions",
      "Conformité aux réglementations UE et US"
    ]
  },
  {
    icon: ScrollText,
    title: "Conditions Générales",
    description: "Régit la relation entre votre site web et les utilisateurs",
    details: [
      "Limitation de responsabilité",
      "Restrictions d'utilisation",
      "Droits de propriété intellectuelle"
    ]
  },
  {
    icon: Cookie,
    title: "Politique de Cookies",
    description: "Conformité totale et consentement aux cookies",
    details: [
      "Explication sur l'utilisation des cookies",
      "Consentement conforme au RGPD",
      "Gestion des cookies analytiques"
    ]
  },
  {
    icon: BookOpen,
    title: "Guide d'Implémentation",
    description: "Instructions étape par étape pour l'implémentation",
    details: [
      "Instructions d'installation simples",
      "Placement correct des documents",
      "Conseils de personnalisation pour votre site web"
    ]
  }
];

const ServicesFR = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Nos Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documents Juridiques Essentiels
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pour un site d'affiliation, les documents juridiques suivants sont essentiels. 
            Notre forfait contient tout ce dont vous avez besoin.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Parfait pour Tous les Affiliés</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Avec des milliers de sites d'affiliation, nos documents personnalisables conviennent à toute entreprise d'affiliation. 
                Concentrez-vous sur gagner des commissions—nous avons rendu la conformité juridique simple !
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Pour TOUS Vos Sites Web</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Les documents juridiques essentiels pour tous vos sites d'affiliation. Oui, vous pouvez les utiliser pour 
                TOUS les sites web sans avoir à acheter des licences séparées !
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimisez Vos Risques</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">Bien que les garanties n'existent pas et qu'aucun document ne puisse tout garantir, ces documents juridiques sont conçus pour réduire vos risques et vous offrir une protection maximale. Ils vous donnent la certitude de conditions claires et fiables.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesFR;

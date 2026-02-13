import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen, Camera } from "lucide-react";

const services = [
  {
    icon: ScrollText,
    title: "Conditions Générales de Vente",
    description: "CGV complètes spécialement conçues pour les photographes",
    details: ["Honoraires et conditions de paiement", "Exécution et livraison des missions", "Protection des droits d'auteur et d'image", "Politiques d'annulation et de report"]
  },
  {
    icon: FileText,
    title: "Contrat de Mission (Devis)",
    description: "Modèle de contrat professionnel avec exemples d'e-mails",
    details: ["Modèle de document prêt à l'emploi", "Exemple d'accord inclus", "Modèles d'e-mails à copier-coller", "Personnalisable selon vos services"]
  },
  {
    icon: Shield,
    title: "Politique de Confidentialité",
    description: "Politique de confidentialité conforme au RGPD pour photographes",
    details: ["Protection des données de formulaire de contact", "Gestion des informations clients", "Dispositions spécifiques à la photographie", "Obligatoire pour les formulaires de contact"]
  },
  {
    icon: Cookie,
    title: "Politique de Cookies",
    description: "Conformité complète aux cookies selon le RGPD",
    details: ["Spécialement conçue pour les photographes", "Conformité RGPD complète", "Explication de l'utilisation des cookies", "Directives de gestion du consentement"]
  },
  {
    icon: AlertCircle,
    title: "Clause de Non-Responsabilité",
    description: "Protection de vos photos et contenus contre l'utilisation non autorisée",
    details: ["Protection des photos et du contenu", "Déclarations de propriété claires", "Avertissements de violation du droit d'auteur", "Restrictions et autorisations d'utilisation"]
  },
  {
    icon: Camera,
    title: "Décharge",
    description: "Protection juridique et accords clairs avec les personnes",
    details: ["Protection juridique avant la séance photo", "Accords clairs avec les personnes", "Dispositions de décharge de modèle", "Protection des droits d'image"]
  },
  {
    icon: BookOpen,
    title: "Protection du Droit d'Auteur",
    description: "Conditions internationales de droit d'auteur pour votre photographie",
    details: ["Protection mondiale du droit d'auteur", "Directives de licence d'utilisation", "Exigences d'attribution", "Application en cas de violation"]
  }
];

const ServicesPhotographyFR = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Nos Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documents Juridiques Essentiels pour Photographes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pour une entreprise de photographie professionnelle, les documents juridiques suivants sont indispensables pour votre site web. Notre pack contient tout ce dont vous avez besoin pour protéger votre travail et votre entreprise.
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
              <CardTitle className="text-lg text-primary-foreground">Parfait pour tous les photographes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Que vous soyez photographe de portrait, de mariage, commercial ou événementiel – nos documents personnalisables conviennent à toute entreprise de photographie. Concentrez-vous sur votre art – nous simplifions la conformité juridique !
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Pour TOUS vos sites de photographie</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Les documents juridiques essentiels pour tous vos site(s) de photographie. Oui, vous pouvez les utiliser pour TOUS vos sites sans acheter de licences séparées !
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Protégez votre travail et votre entreprise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Les garanties n'existent pas et aucun document ne peut tout garantir, mais ces documents juridiques sont conçus pour minimiser vos risques et vous offrir une protection maximale pour votre entreprise de photographie et vos œuvres créatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesPhotographyFR;

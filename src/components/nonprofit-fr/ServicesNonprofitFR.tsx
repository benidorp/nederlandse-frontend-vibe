import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield, Users, Heart, Scale, CheckCircle } from "lucide-react";

const ServicesNonprofitFR = () => {
  const services = [
    {
      icon: FileText,
      title: "Conditions de don",
      description: "Cadre juridique complet pour l'acceptation des dons, y compris les dons uniques, les dons récurrents et les dons importants. Inclut la déductibilité fiscale, les politiques de remboursement et les droits des donateurs.",
      features: ["Dons uniques et récurrents", "Informations sur la déductibilité fiscale", "Conditions de remboursement et d'annulation", "Accords pour dons importants"]
    },
    {
      icon: Shield,
      title: "Politique de confidentialité RGPD",
      description: "Politique de confidentialité complète spécialement conçue pour les associations, couvrant les données des donateurs, les informations des bénévoles, la protection des bénéficiaires et les communications de collecte de fonds.",
      features: ["Protection des données des donateurs", "Informations des bénévoles", "Protection des bénéficiaires", "Conformité e-mail marketing"]
    },
    {
      icon: Users,
      title: "Accord de bénévolat",
      description: "Protégez votre organisation et vos bénévoles avec des accords clairs sur les responsabilités, la responsabilité civile, la confidentialité et les procédures de résiliation.",
      features: ["Rôles et responsabilités", "Protection de responsabilité", "Clauses de confidentialité", "Procédures de résiliation"]
    },
    {
      icon: Heart,
      title: "Déclaration de transparence des dons",
      description: "Déclarations de transparence montrant aux donateurs comment leurs contributions sont utilisées, les frais administratifs et les exigences de rapport d'impact.",
      features: ["Transparence de l'utilisation des fonds", "Divulgation des frais administratifs", "Rapport d'impact", "Conditions de collecte de fonds tiers"]
    },
    {
      icon: Scale,
      title: "Politique de cookies",
      description: "Politique de cookies conforme au RGPD pour votre site associatif, couvrant les cookies d'analyse, de suivi des dons et de marketing avec des mécanismes de consentement appropriés.",
      features: ["Catégorisation des cookies", "Gestion du consentement", "Suivi analytique", "Cookies tiers"]
    },
    {
      icon: CheckCircle,
      title: "Guide d'implémentation",
      description: "Instructions étape par étape pour implémenter tous les documents juridiques sur votre site web, y compris les recommandations de placement et l'intégration avec les plateformes de dons.",
      features: ["Guide de placement", "Intégration plateforme de dons", "Procédures de mise à jour", "Liste de vérification de conformité"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Tout ce dont votre site associatif a besoin</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un package juridique complet, spécialement conçu pour les associations,
              qui protège votre mission, vos donateurs et vos bénévoles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-lg">
                    <service.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNonprofitFR;

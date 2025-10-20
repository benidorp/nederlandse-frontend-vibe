import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "Pourquoi les documents juridiques sont importants pour les sites d'affiliation",
    answer: `En tant que spécialiste du marketing d'affiliation, vous êtes légalement tenu d'être transparent sur votre modèle de revenus et sur la manière dont vous traitez les données des visiteurs. Sans les bons documents juridiques, vous risquez :
    
• Des amendes élevées des régulateurs comme l'Autorité de protection des données - jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires annuel
• Des réclamations de consommateurs en cas d'informations trompeuses
• Suppression des réseaux d'affiliation comme Google AdSense
• Atteinte à la réputation et perte de confiance de votre public

La législation la plus importante à laquelle vous devez vous conformer est le RGPD, la directive ePrivacy et la réglementation sur le marketing d'affiliation transparent comme les directives FTC. Avec les bons documents, vous vous protégez et renforcez la confiance de vos visiteurs.`
  },
  {
    question: "Comment intégrer ces documents sur votre site (pied de page, par article, près des liens)",
    answer: `Le placement des documents juridiques est crucial pour la conformité et la convivialité.

**Placement dans le pied de page (obligatoire) :**
Placez des liens vers tous vos documents juridiques dans le pied de page de chaque page :
• Politique de Confidentialité
• Conditions Générales  
• Politique de Cookies
• Clause de Non-Responsabilité
• Divulgation d'Affiliation

**Par article/post :**
Pour les avis de produits et les articles avec des liens d'affiliation :
• Brève divulgation au début de l'article (premiers 150 mots)
• Marquage visible des liens d'affiliation, par exemple : [PUB] ou [lien d'affiliation]
• Lien vers la divulgation complète en bas de l'article

**Près des liens d'affiliation :**
• Utilisez une abréviation comme * ou [PUB] directement à côté du lien
• Ajoutez une info-bulle au survol avec "lien d'affiliation"
• Dans les boîtes produits : petite clause de non-responsabilité en bas

**Bonnes pratiques :**
• Utilisez des couleurs contrastées pour que les divulgations se démarquent
• Rendez le texte compréhensible pour le public non juridique
• Adapté aux mobiles - visible sans défilement
• Utilisez des icônes pour une reconnaissance rapide

**Implémentation technique :**
Notre guide d'implémentation contient des extraits de code pour WordPress, Shopify, Webflow et sites HTML, y compris des exemples de style CSS.`
  },
  {
    question: "Questions fréquemment posées (FAQ)",
    answer: `**Ces modèles sont-ils valides dans toute l'Europe ?**
Oui, nos modèles sont conformes au RGPD qui s'applique dans tous les pays de l'UE. Certains pays ont des règles supplémentaires - cela est mentionné dans les modèles.

**Dois-je consulter un avocat ?**
Nos modèles sont vérifiés juridiquement, mais chaque entreprise est unique. Pour les situations complexes, nous recommandons toujours de consulter un conseiller juridique.

**Puis-je utiliser ces modèles pour plusieurs sites web ?**
Oui ! Lors de l'achat, vous obtenez une licence illimitée pour tous vos propres sites d'affiliation.

**Et si je vends aussi des produits, pas seulement des liens d'affiliation ?**
Vous aurez besoin de documents supplémentaires comme le droit de rétractation et la politique d'expédition. Contactez-nous pour un package personnalisé.

**À quelle fréquence dois-je mettre à jour mes documents ?**
Au moins une fois par an, mais aussi lorsque vous ajoutez de nouveaux outils ou que la législation change.

**Ces documents me protègent-ils contre toutes les réclamations juridiques ?**
Aucun document n'offre une protection à 100%, mais de bons documents juridiques minimisent considérablement vos risques et montrent que vous agissez avec diligence.

**Dois-je acheter la bannière de cookies séparément ?**
Notre package contient la politique de cookies (texte), mais pour la bannière de cookies technique, nous recommandons des outils comme Cookiebot ou CookieYes.

**Dans quelles langues les modèles sont-ils disponibles ?**
Les modèles sont téléchargeables en plusieurs langues pour un usage international, afin que vous puissiez les déployer sur tous vos sites web dans le monde entier.`
  }
];

const FAQFR = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Questions Fréquemment Posées
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur les documents juridiques pour votre site d'affiliation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQFR;

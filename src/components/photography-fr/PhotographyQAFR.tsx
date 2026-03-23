import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "Pourquoi ai-je besoin de documents juridiques en tant que photographe ?",
    answer: "En tant que photographe professionnel, vous avez besoin d'une protection juridique pour plusieurs raisons : protéger vos droits d'auteur, définir des conditions claires avec vos clients, respecter le RGPD lors de la collecte de données clients, établir des politiques de paiement et d'annulation, et vous protéger contre les réclamations en responsabilité. Sans documents juridiques appropriés, vous vous exposez à des risques financiers et juridiques."
  },
  {
    question: "Que contient le contrat de mission (devis) ?",
    answer: "Le contrat de mission comprend un modèle de contrat complet que vous pouvez personnaliser pour chaque client. Il couvre les honoraires, les conditions de paiement, les détails de la mission, les délais de livraison, les droits d'auteur, les droits d'utilisation et les politiques d'annulation. Nous fournissons également des exemples d'accords et des modèles d'e-mails prêts à l'emploi que vous pouvez copier-coller pour communiquer avec vos clients."
  },
  {
    question: "Comment la décharge me protège-t-elle en tant que photographe ?",
    answer: "La décharge vous permet d'établir des accords juridiques clairs avec les personnes photographiées avant la séance. Elle comprend des autorisations de modèle, des droits d'image, des autorisations d'utilisation et des renonciations de responsabilité. Cela vous protège contre de futures réclamations et garantit que vous disposez d'un consentement documenté pour l'utilisation et la publication des photos réalisées."
  },
  {
    question: "Puis-je utiliser ces documents pour différentes spécialités photographiques ?",
    answer: "Oui ! Que vous soyez photographe de portrait, de mariage, commercial, événementiel ou que vous travailliez dans plusieurs spécialités – ces documents sont flexibles et adaptables à tout type d'entreprise de photographie. Il suffit d'adapter les services spécifiques et les conditions à votre modèle d'affaires."
  },
  {
    question: "La protection du droit d'auteur est-elle valable à l'international ?",
    answer: "Oui, le document de protection du droit d'auteur est rédigé en tenant compte de la couverture internationale et fait référence à la Convention de Berne et à d'autres traités internationaux sur le droit d'auteur. Il établit votre propriété sur toutes les œuvres photographiques et définit des conditions claires pour la licence, l'attribution et l'application dans différents pays."
  },
  {
    question: "Ai-je besoin d'une politique de confidentialité si j'ai seulement un formulaire de contact ?",
    answer: "Oui ! Selon le RGPD et d'autres lois sur la protection des données, vous êtes légalement tenu d'avoir une politique de confidentialité si vous collectez des données personnelles via votre site web (même seulement un nom et un e-mail via un formulaire de contact). Notre politique de confidentialité spécifique aux photographes couvre tous les scénarios courants, y compris les formulaires de contact, les systèmes de réservation et la gestion des données clients."
  },
  {
    question: "Puis-je personnaliser ces documents pour mes services spécifiques ?",
    answer: "Absolument ! Tous les documents sont conçus pour être facilement personnalisables. Vous pouvez adapter les conditions à vos services spécifiques, votre structure tarifaire, vos méthodes de livraison et vos politiques commerciales. Les documents fournissent une base juridique solide tout en vous donnant la flexibilité de les personnaliser pour votre entreprise de photographie unique."
  },
  {
    question: "Comment ces documents protègent-ils mes photos contre le vol ?",
    answer: "La clause de non-responsabilité et les documents de protection du droit d'auteur établissent clairement que vous possédez tous les droits sur vos photos et définissent ce que les autres peuvent et ne peuvent pas faire avec vos images. Ils contiennent des avertissements contre l'utilisation, la reproduction ou la distribution non autorisées. Bien qu'aucun document ne puisse physiquement empêcher le vol, ces documents juridiques vous donnent une position juridique solide pour faire valoir vos droits et demander des indemnités si votre travail est utilisé sans autorisation."
  },
  {
    question: "Ai-je besoin de documents séparés pour chaque site de photographie ?",
    answer: "Non ! Avec un seul achat, vous pouvez utiliser ces documents juridiques pour tous vos sites de photographie. Que vous ayez un site portfolio ou plusieurs sites pour différents services de photographie – la licence permet une utilisation illimitée. C'est extrêmement rentable pour les photographes ayant plusieurs présences en ligne."
  },
  {
    question: "Et si je travaille avec des clients internationaux ?",
    answer: "Les documents sont rédigés en tenant compte de l'applicabilité internationale. Ils font référence aux lois et conventions internationales le cas échéant (comme le RGPD pour les clients européens, le droit d'auteur international, etc.). Vous pouvez facilement indiquer quelle juridiction s'applique et adapter des sections pour les différents marchés que vous desservez."
  }
];

const PhotographyQAFR = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Questions & Réponses</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Questions fréquentes sur les documents juridiques pour photographes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Questions courantes des photographes sur la protection juridique et la documentation
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PhotographyQAFR;

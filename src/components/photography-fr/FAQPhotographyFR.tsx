import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqContent = {
  title: "Questions fréquentes sur les documents juridiques pour photographes",
  questions: [
    { question: "Comment puis-je utiliser légalement de la musique ou de la vidéo dans mes contenus photo ?", answer: "Assurez-vous toujours d'avoir les droits ou licences pour les clips musicaux ou vidéo utilisés dans vos diaporamas ou réseaux sociaux. Utilisez des plateformes libres de droits comme Epidemic Sound, Artlist ou Pexels. N'utilisez jamais de matériel protégé par le droit d'auteur sans autorisation explicite, car cela peut entraîner des demandes de retrait ou des amendes." },
    { question: "Qu'est-ce qu'une décharge en photographie ?", answer: "Une décharge est une autorisation signée par laquelle un modèle ou un propriétaire cède tous droits ou réclamations futures sur les images, accordant au photographe les droits d'utilisation complets. Elle est essentielle pour les séances commerciales, la publicité ou tout projet où les images pourraient être vendues ou publiées internationalement." },
    { question: "Qu'est-ce qu'une autorisation de propriété et quand en ai-je besoin ?", answer: "Une autorisation de propriété accorde la permission de photographier une propriété privée à des fins commerciales. Elle est requise pour des lieux comme des maisons, des bureaux ou des monuments reconnaissables. Sans cette autorisation, vous pouvez rencontrer des restrictions juridiques lors de la licence commerciale ou de la vente de ces images." },
    { question: "Comment les photographes doivent-ils gérer la propriété intellectuelle ?", answer: "Revendiquez toujours le droit d'auteur dans vos contrats et métadonnées. Enregistrez vos images auprès d'un bureau du droit d'auteur si possible. Ajoutez des filigranes, des données EXIF et tenez des registres de licence clairs. Évitez d'utiliser le travail d'autrui sans autorisation, même comme simple inspiration." },
    { question: "Que sont les droits moraux en photographie ?", answer: "Les droits moraux protègent l'intégrité et la réputation d'un photographe. Ils comprennent le droit à l'attribution et le droit de s'opposer à la déformation ou au mauvais usage de vos images. Ces droits existent automatiquement dans de nombreux pays et doivent être respectés par les clients et collaborateurs." },
    { question: "Puis-je légalement photographier des personnes dans des lieux publics ?", answer: "Dans la plupart des pays, photographier des personnes en public à des fins éditoriales ou artistiques est autorisé, mais l'utilisation commerciale de ces images nécessite une autorisation de modèle. Vérifiez toujours les lois locales sur la vie privée – elles varient considérablement selon la région." },
    { question: "Qu'est-ce qu'un accord de confidentialité (NDA) pour photographes ?", answer: "Un NDA empêche les clients ou collaborateurs de partager des informations confidentielles sur votre séance photo, vos tarifs ou votre processus créatif. Il est courant dans la photographie de mode, publicitaire et d'entreprise pour protéger les secrets commerciaux et les stratégies de marque." },
    { question: "Comment puis-je protéger mon portfolio en ligne contre le vol ?", answer: "Ajoutez un filigrane discret à vos images, désactivez l'enregistrement par clic droit et intégrez des métadonnées dans vos fichiers. Utilisez des aperçus en basse résolution pour l'affichage web. Des services comme Pixsy ou Digimarc aident à suivre et à faire respecter l'utilisation non autorisée d'images dans le monde entier." },
    { question: "Comment puis-je rédiger une clause de non-responsabilité solide pour la photographie ?", answer: "Votre clause de non-responsabilité doit stipuler que toutes les photos appartiennent au photographe et ne peuvent être copiées ou distribuées sans consentement écrit. Ajoutez une note indiquant que les couleurs et l'apparence peuvent varier selon l'appareil ou les paramètres d'écran pour éviter les réclamations pour fausse représentation." },
    { question: "Quelle est l'importance du branding pour les photographes ?", answer: "Un branding fort construit la reconnaissance et la confiance. Il comprend un logo cohérent, une palette de couleurs, un ton de voix et un style d'édition. Une identité de marque claire aide les clients à se souvenir de vous et vous positionne comme un professionnel dans votre niche." },
    { question: "Comment les photographes peuvent-ils construire un public international ?", answer: "Utilisez stratégiquement les plateformes de réseaux sociaux (Instagram, Pinterest, Behance). Rédigez des légendes multilingues et utilisez des hashtags internationaux. Collaborez avec des créatifs du monde entier, participez à des expositions en ligne et optimisez votre site web pour plusieurs langues et devises." },
    { question: "Comment raconter une histoire à travers ma photographie ?", answer: "Chaque image doit transmettre une émotion, un contexte ou un récit. Utilisez la composition, l'éclairage et les sujets de manière intentionnelle. Les séquences d'images peuvent construire un storytelling visuel – idéal pour les travaux éditoriaux et documentaires." },
    { question: "Comment gérer éthiquement la manipulation d'images ?", answer: "La retouche photo doit améliorer mais pas induire en erreur. Évitez de modifier les caractéristiques corporelles d'une manière qui déforme la réalité, sauf intention artistique. Indiquez toujours l'utilisation de composites ou d'éléments générés par IA pour maintenir la transparence et la confiance." },
    { question: "Qu'est-ce que la photographie générée par IA et est-elle légale ?", answer: "Les outils d'IA peuvent créer ou modifier des images, mais la propriété du droit d'auteur est complexe. Les lois diffèrent selon la région – dans la plupart des cas, seuls les éléments créés par l'homme sont protégeables par le droit d'auteur. Divulguez clairement l'implication de l'IA aux clients et évitez de générer des ressemblances sans consentement." },
    { question: "Comment puis-je collaborer avec des marques en tant que photographe ?", answer: "Créez un kit média professionnel avec votre portfolio, vos statistiques d'audience et vos tarifs. Approchez les marques avec des propositions sur mesure montrant le bénéfice mutuel. Concluez des contrats clairs précisant les livrables, le paiement, l'exclusivité et les droits de licence." },
    { question: "Que dois-je inclure dans une politique de confidentialité pour la photographie ?", answer: "Expliquez comment les données clients (noms, photos, coordonnées) sont collectées, stockées et utilisées. Indiquez combien de temps les données sont conservées et comment les clients peuvent demander leur suppression. Assurez la conformité avec le RGPD, le CCPA ou les lois locales sur la protection des données." },
    { question: "Comment puis-je tenir compte de la sensibilité culturelle en photographie ?", answer: "Renseignez-vous toujours sur les coutumes locales et obtenez un consentement avant de photographier des personnes ou des sites religieux. Évitez de renforcer les stéréotypes. La représentation éthique renforce votre réputation et soutient un storytelling visuel responsable." },
    { question: "Quels sont les risques des outils d'amélioration d'image par IA ?", answer: "L'IA peut sur-éditer ou altérer des détails importants, réduisant l'authenticité. Certains outils peuvent stocker les images téléchargées, mettant en danger la sécurité des données. Utilisez un logiciel de confiance, lisez les conditions d'utilisation et conservez les originaux comme preuve de paternité." },
    { question: "Comment rendre mon entreprise de photographie pérenne ?", answer: "Diversifiez vos sources de revenus (tirages, ateliers, cours en ligne, licences stock). Construisez une forte présence en ligne et adaptez-vous aux nouvelles technologies comme l'IA et les NFT. Continuez à apprendre et mettez régulièrement à jour vos contrats, votre branding et votre équipement." },
    { question: "Quels droits est-ce que je conserve en tant que photographe lors de la vente d'images ?", answer: "En tant que photographe, vous conservez par défaut le droit d'auteur sur vos images conformément aux traités internationaux comme la Convention de Berne. Vous pouvez transférer des droits d'utilisation (licences) aux clients tout en protégeant les droits sous-jacents. Définissez clairement dans votre contrat ce que le client peut faire (impression, numérique, commercial) et réservez-vous le reste." },
    { question: "Quel est le meilleur objectif pour la photographie de portrait ?", answer: "Un objectif à focale fixe avec une grande ouverture, comme un 50mm f/1.8 ou un 85mm f/1.4, est idéal pour les portraits. Ces objectifs produisent un beau flou d'arrière-plan (bokeh) et une compression flatteuse des traits du visage. Choisissez des objectifs plein format pour une qualité professionnelle et une netteté uniforme." },
    { question: "Comment faire de superbes photos de paysage ?", answer: "Utilisez une petite ouverture (f/8–f/16) pour une grande profondeur de champ, faites la mise au point à un tiers dans la scène et utilisez un trépied pour la stabilité. Les meilleurs moments pour les paysages sont le lever et le coucher du soleil. Ajoutez un intérêt au premier plan pour la profondeur et utilisez un filtre polarisant pour améliorer le ciel." },
    { question: "Qu'est-ce que la balance des blancs en photographie ?", answer: "La balance des blancs ajuste la température de couleur pour que les tons blancs apparaissent neutres sous différentes conditions d'éclairage. Les réglages courants incluent lumière du jour, nuageux, tungstène et fluorescent. Une balance des blancs correcte empêche les photos de paraître trop bleues ou orangées et assure des tonalités cohérentes." },
    { question: "Qu'est-ce que le bokeh et comment le créer ?", answer: "Le bokeh est la qualité esthétique du flou d'arrière-plan produit par un objectif à grande ouverture (f/1.2–f/2.8). Utilisez une longue focale et gardez votre sujet éloigné de l'arrière-plan. Les objectifs à focale fixe et les lamelles de diaphragme arrondies créent des effets de bokeh plus doux." },
    { question: "Qu'est-ce que la composition en photographie ?", answer: "La composition fait référence à la façon dont les éléments sont disposés dans une image. Une composition forte guide le regard du spectateur et crée un équilibre. Les techniques comprennent la règle des tiers, les lignes directrices, la symétrie et l'espace négatif pour des images percutantes." }
  ]
};

const FAQPhotographyFR = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4">Questions & Réponses</Badge>
          <h1 className="text-4xl font-bold mb-4">Questions fréquemment posées</h1>
          <p className="text-xl text-muted-foreground mb-12">Questions courantes des photographes sur la protection juridique et la documentation pour votre site web</p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-all" className="border rounded-lg px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <h2 className="text-xl font-semibold text-left">{faqContent.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                {faqContent.questions.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPhotographyFR;

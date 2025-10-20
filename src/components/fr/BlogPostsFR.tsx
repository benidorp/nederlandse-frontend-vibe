import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Marketing d'affiliation conforme au RGPD : Un guide complet pour 2024",
    excerpt: "Découvrez comment rendre votre site d'affiliation entièrement conforme au RGPD et éviter les amendes.",
    content: `Le Règlement Général sur la Protection des Données (RGPD) a un impact majeur sur la manière dont les spécialistes du marketing d'affiliation opèrent. Dans ce guide, nous couvrons tous les aspects essentiels :

**Données personnelles et marketing d'affiliation**
En tant que spécialiste du marketing d'affiliation, vous collectez souvent plus de données personnelles que vous ne le pensez. Les adresses IP, les données de cookies et le comportement de clic relèvent tous du RGPD. Il est crucial de savoir exactement quelles données vous collectez et pourquoi.

**Exigences de consentement**
Selon le RGPD, vous devez demander un consentement explicite pour les cookies non essentiels. Cela signifie que votre bannière de cookies doit apparaître avant le début du suivi, pas après. Les cases pré-cochées ne sont pas autorisées.

**Obligations de transparence**
Vous devez être clair sur :
• Quelles données vous collectez
• Pourquoi vous les collectez
• Avec qui vous les partagez (réseaux d'affiliation, plateformes d'analyse)
• Combien de temps vous les conservez

**Droits des visiteurs**
Les utilisateurs ont le droit d'accéder, de corriger, de supprimer et de transférer leurs données. Vous devez avoir un processus pour répondre à ces demandes dans les 30 jours.

**Amendes et application**
L'Autorité de protection des données peut infliger des amendes allant jusqu'à 20 millions d'euros ou 4% du chiffre d'affaires mondial. Même les petits sites d'affiliation ne sont pas exemptés de l'application.

**Étapes pratiques**
1. Effectuer un audit des données
2. Implémenter une bannière de cookies avec un vrai choix
3. Mettre à jour votre politique de confidentialité
4. Établir des processus pour les demandes des utilisateurs
5. Documenter votre conformité au RGPD`
  },
  {
    title: "Placement de la divulgation d'affiliation : Où, quand et à quelle fréquence ?",
    excerpt: "Apprenez les meilleures pratiques pour placer les divulgations d'affiliation selon la réglementation FTC et UE.",
    content: `La transparence sur vos commissions d'affiliation n'est pas seulement légalement obligatoire, elle renforce également la confiance de votre public.

**Directives FTC (également pertinentes dans l'UE)**
La Federal Trade Commission exige que les divulgations soient :
• Claires et visibles
• Proches des déclarations pertinentes
• Rédigées dans un langage compréhensible
• Non dissimulables

**Emplacements de placement**

*Au début de chaque article*
Placez une divulgation claire dans les 150 premiers mots :
"Cette page contient des liens d'affiliation. Si vous effectuez un achat via nos liens, nous recevons une commission sans frais supplémentaires pour vous."

*À chaque lien d'affiliation*
Utilisez des indicateurs visuels :
• Tags [PUB] ou [Affiliation]
• Astérisques (*) avec note de bas de page
• Badges ou icônes subtils
• Info-bulles au survol

*Dans le pied de page*
Chaque page doit contenir un lien vers votre politique complète de divulgation d'affiliation.

**Divulgations spécifiques au contenu**

*Avis de produits*
"J'ai acheté le Produit X avec mon propre argent / reçu de la marque. Les liens dans cet avis sont des liens d'affiliation qui me rapportent une commission."

*Tableaux de comparaison*
Placez une divulgation directement au-dessus ou en dessous du tableau, pas seulement dans le pied de page.

*Newsletters*
Indiquez dans chaque newsletter contenant des liens d'affiliation que vous gagnez des commissions.

**Ce qui ne fonctionne pas**
❌ Divulgation uniquement dans les conditions générales
❌ Petit texte gris en bas de page
❌ Formulations vagues comme "nous gagnons peut-être de l'argent"
❌ Divulgation après 3 pages de défilement

**Bonnes pratiques**
✅ Utiliser des couleurs contrastées
✅ Répéter la divulgation pour les longs articles
✅ Être spécifique sur les commissions
✅ Mettre à jour lors de changements de partenariats

**Protection juridique**
Une bonne divulgation vous protège contre :
• Amendes et avertissements FTC
• Réclamations de consommateurs
• Suppression des programmes d'affiliation
• Atteinte à la réputation`
  }
];

const BlogPostsFR = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Articles de Blog</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Guides et Ressources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guides approfondis sur les aspects juridiques du marketing d'affiliation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="p-6">
              <Accordion type="single" collapsible>
                <AccordionItem value={`post-${index}`} className="border-0">
                  <AccordionTrigger className="hover:no-underline text-left">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-muted-foreground">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                      {post.content}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsFR;

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsNonprofitFR = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      organization: "Hope Rising Foundation",
      role: "Directrice générale",
      rating: 5,
      text: "En tant que petite association, les frais juridiques ont toujours été un problème. Ce package nous a donné tout ce dont nous avions besoin à une fraction du coût. Nos donateurs ont maintenant une confiance totale dans notre transparence et notre protection des données."
    },
    {
      name: "James O'Connor",
      organization: "Bright Future Collective",
      role: "Directeur des opérations",
      rating: 5,
      text: "L'accord de bénévolat seul valait l'investissement. Depuis la mise en œuvre de ces documents, nous n'avons eu aucun problème, et notre conseil d'administration apprécie l'approche professionnelle de la conformité juridique."
    },
    {
      name: "Maria Santos",
      organization: "Hearts United Charity",
      role: "Fondatrice",
      rating: 5,
      text: "Parfait pour la collecte de fonds internationale ! La conformité RGPD signifiait que nous pouvions accepter en toute confiance des dons de supporters de l'UE. Le guide d'implémentation a rendu la configuration incroyablement facile."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              La confiance des associations du monde entier
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez ce que les associations disent de notre package juridique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsNonprofitFR;

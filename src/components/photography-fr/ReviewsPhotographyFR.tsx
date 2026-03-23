import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van der Berg",
    role: "Photographe de mariage",
    rating: 5,
    text: "En tant que photographe de mariage, j'avais besoin de documents juridiques professionnels pour mes clients. Ces modèles sont parfaits – le contrat de mission, la décharge de modèle et la protection du droit d'auteur protègent entièrement mon travail. Le guide d'implémentation a rendu l'installation sur mon site web super facile. Enfin, je peux travailler l'esprit tranquille !"
  },
  {
    name: "Mark Jansen",
    role: "Photographe commercial",
    rating: 5,
    text: "Pour mon entreprise de photographie, ces documents juridiques valent de l'or. La politique de confidentialité et la politique de cookies conformes au RGPD donnent confiance à mes clients, et la protection du droit d'auteur empêche l'utilisation de mes photos sans autorisation. Qualité professionnelle pour une fraction de ce que coûterait un avocat !"
  }
];

const ReviewsPhotographyFR = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Avis</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez pourquoi les photographes font confiance à nos documents juridiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">
                  « {review.text} »
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPhotographyFR;

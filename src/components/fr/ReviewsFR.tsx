import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie Dubois",
    role: "Spécialiste Marketing d'Affiliation",
    rating: 5,
    text: "Ces documents juridiques sont indispensables pour tout site web ! Ils sont rédigés de manière professionnelle, faciles à mettre en œuvre et spécialement adaptés aux entreprises d'affiliation. Le fait qu'ils soient adaptés à un usage international est un énorme avantage. Cela m'a fait gagner du temps, de l'argent et m'a évité la peine de rechercher moi-même les exigences juridiques. Hautement recommandé !"
  },
  {
    name: "Marc Laurent",
    role: "Entrepreneur en Ligne",
    rating: 5,
    text: "Ces documents juridiques sont exactement ce dont j'avais besoin pour mon site d'affiliation. Ils sont clairs, rédigés de manière professionnelle et couvrent tous les aspects juridiques essentiels. Le meilleur, c'est qu'ils sont directement utilisables et peuvent être mis en œuvre rapidement. Un excellent investissement pour tous ceux qui sont dans le secteur de l'affiliation !"
  }
];

const ReviewsFR = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Avis</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez pourquoi des centaines d'affiliés obtiennent leurs documents juridiques chez nous
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
                  "{review.text}"
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

export default ReviewsFR;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [{
  name: "Emma Nielsen",
  role: "Hotelejer",
  rating: 5,
  text: "At drive et boutiquehotel kræver ordentlig juridisk beskyttelse, og disse dokumenter gav præcis det, jeg havde brug for. Afbestillingsreglerne og vilkårene er krystalklare for gæsterne, og GDPR-overholdelsen gav mig ro i sindet. Professionel kvalitet til en brøkdel af, hvad en advokat ville koste!"
}, {
  name: "Lucas Jensen",
  role: "Grundlægger af Rejseplatform",
  rating: 5,
  text: "Som en, der administrerer en bookingplatform til ferieudlejning, var disse juridiske skabeloner en livredder. De dækker alt fra databeskyttelse til ansvarsfraskrivelser, og implementeringsguiden gjorde opsætningen utrolig nem. Den bedste investering, jeg har gjort for min rejsevirksomhed!"
}];

const ReviewsDA = () => {
  return <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Anmeldelser</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hvad Vores Kunder Siger</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Opdag hvorfor hoteleje og rejseplatforme stoler på vores juridiske dokumenter
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};

export default ReviewsDA;

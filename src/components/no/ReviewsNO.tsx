import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [{
  name: "Emma Johansen",
  role: "Hotelleier",
  rating: 5,
  text: "Å drive et boutiquehotell krever ordentlig juridisk beskyttelse, og disse dokumentene ga akkurat det jeg trengte. Avbestillingsreglene og vilkårene er krystallklare for gjestene, og GDPR-samsvaret ga meg trygghet. Profesjonell kvalitet til en brøkdel av hva en advokat ville kostet!"
}, {
  name: "Lucas Berg",
  role: "Grunnlegger av Reiseplattform",
  rating: 5,
  text: "Som en som håndterer en bookingplattform for ferieutleie, var disse juridiske malene en livredder. De dekker alt fra databeskyttelse til ansvarsfraskrivelser, og implementeringsguiden gjorde oppsettet utrolig enkelt. Den beste investeringen jeg har gjort for reisevirksomheten min!"
}];

const ReviewsNO = () => {
  return <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Anmeldelser</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Hva Våre Kunder Sier</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oppdag hvorfor hotelleiere og reiseplattformer stoler på våre juridiske dokumenter
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

export default ReviewsNO;

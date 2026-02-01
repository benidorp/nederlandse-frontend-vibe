import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [{
  name: "Emma Lindström",
  role: "Hotellägare",
  rating: 5,
  text: "Att driva ett boutiquehotell kräver ordentligt juridiskt skydd, och dessa dokument gav precis det jag behövde. Avbokningspolicyn och villkoren är kristallklara för gästerna, och GDPR-efterlevnaden gav mig sinnesfrid. Professionell kvalitet till en bråkdel av vad en advokat skulle ta betalt!"
}, {
  name: "Lucas Eriksson",
  role: "Grundare av Reseplattform",
  rating: 5,
  text: "Som någon som hanterar en bokningsplattform för semesteruthyrningar var dessa juridiska mallar en livräddare. De täcker allt från dataskydd till ansvarsfriskrivningar, och implementeringsguiden gjorde installationen otroligt enkel. Bästa investeringen jag gjort för min reseverksamhet!"
}];

const ReviewsSV = () => {
  return <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Recensioner</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vad Våra Kunder Säger</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upptäck varför hotellägare och reseplattformar litar på våra juridiska dokument
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

export default ReviewsSV;

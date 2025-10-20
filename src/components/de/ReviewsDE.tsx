import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van den Berg",
    role: "Affiliate-Marketerin",
    rating: 5,
    text: "Diese Rechtsdokumente sind ein Muss für jede Website! Sie sind professionell geschrieben, einfach zu implementieren und speziell auf Affiliate-Unternehmen zugeschnitten. Die Tatsache, dass sie für die internationale Nutzung geeignet sind, ist ein enormer Vorteil. Es hat mir Zeit, Geld und die Mühe erspart, rechtliche Anforderungen selbst herauszufinden. Sehr zu empfehlen!"
  },
  {
    name: "Mark Jansen",
    role: "Online-Unternehmer",
    rating: 5,
    text: "Diese Rechtsdokumente sind genau das, was ich für meine Affiliate-Website brauchte. Sie sind klar, professionell erstellt und decken alle wesentlichen rechtlichen Aspekte ab. Das Beste ist, dass sie sofort verwendbar sind und schnell implementiert werden können. Eine großartige Investition für jeden im Affiliate-Geschäft!"
  }
];

const ReviewsDE = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Bewertungen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was Unsere Kunden Sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie, warum Hunderte von Affiliates ihre Rechtsdokumente bei uns beziehen
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

export default ReviewsDE;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van der Berg",
    role: "Wedding Photographer",
    rating: 5,
    text: "Als trouwfotograaf had ik professionele juridische documenten nodig voor mijn klanten. Deze templates zijn perfect - de opdrachtsovereenkomst, de modelverklaring en het auteursrecht beschermen mijn werk volledig. De implementatiehandleiding maakte het installeren op mijn website super eenvoudig. Eindelijk kan ik met een gerust hart werken!"
  },
  {
    name: "Mark Jansen",
    role: "Commercial Photographer",
    rating: 5,
    text: "Voor mijn fotobedrijf zijn deze juridische documenten goud waard. De AVG-compliant privacy policy en cookie policy geven mijn klanten vertrouwen, en de copyright bescherming voorkomt dat mijn foto's zonder toestemming gebruikt worden. Professionele kwaliteit voor een fractie van wat een advocaat zou kosten!"
  }
];

const ReviewsPhotography = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why photographers trust our legal documents
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

export default ReviewsPhotography;

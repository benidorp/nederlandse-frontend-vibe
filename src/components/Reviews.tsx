import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van den Berg",
    role: "Affiliate Marketeer",
    rating: 5,
    text: "Deze juridische documenten zijn een must-have voor elke website! Ze zijn professioneel geschreven, eenvoudig te implementeren en speciaal afgestemd op affiliate bedrijven. Het feit dat ze geschikt zijn voor internationaal gebruik is een enorm pluspunt. Het heeft me tijd, geld en de moeite bespaard om zelf juridische vereisten uit te zoeken. Zeer aan te bevelen!"
  },
  {
    name: "Mark Jansen",
    role: "Online Ondernemer",
    rating: 5,
    text: "Deze juridische documenten zijn precies wat ik nodig had voor mijn affiliate website. Ze zijn duidelijk, professioneel opgesteld en dekken alle essentiële juridische aspecten. Het beste is dat ze direct te gebruiken zijn en snel kunnen worden geïmplementeerd. Een geweldige investering voor iedereen in de affiliate business!"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Recensies</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Wat Onze Klanten Zeggen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek waarom honderden affiliates hun juridische documenten bij ons afnemen
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

export default Reviews;

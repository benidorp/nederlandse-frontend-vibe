import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const reviews = [{
  name: "Sophie van den Berg",
  role: "Affiliate Marketer",
  rating: 5,
  text: "These legal documents are a must-have for every website! They are professionally written, easy to implement, and specifically tailored to affiliate businesses. The fact that they are suitable for international use is a huge plus. It has saved me time, money, and the effort of figuring out legal requirements myself. Highly recommended!"
}, {
  name: "Mark Jansen",
  role: "Online Entrepreneur",
  rating: 5,
  text: "These legal documents are exactly what I needed for my affiliate website. They are clear, professionally drafted, and cover all essential legal aspects. The best part is that they are ready to use and can be implemented quickly. A great investment for anyone in the affiliate business!"
}];
const ReviewsEN = () => {
  return <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why hundreds of affiliates get their legal documents from us
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
export default ReviewsEN;
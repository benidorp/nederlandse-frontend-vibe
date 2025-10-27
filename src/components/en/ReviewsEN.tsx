import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const reviews = [{
  name: "Emma Thompson",
  role: "Hotel Owner",
  rating: 5,
  text: "Running a boutique hotel requires proper legal protection, and these documents provided exactly what I needed. The cancellation policy and terms & conditions are crystal clear for guests, and the GDPR compliance gave me peace of mind. Professional quality at a fraction of what a lawyer would charge!"
}, {
  name: "Lucas Martinez",
  role: "Travel Platform Founder",
  rating: 5,
  text: "As someone managing a booking platform for vacation rentals, these legal templates were a lifesaver. They cover everything from data protection to liability disclaimers, and the implementation guide made setup incredibly straightforward. Best investment I made for my travel business!"
}];
const ReviewsEN = () => {
  return <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why hotel owners and travel platforms trust our legal documents
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
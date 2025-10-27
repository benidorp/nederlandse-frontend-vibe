import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "James Mitchell",
    role: "Dropshipping Entrepreneur",
    rating: 5,
    text: "Perfect for my dropshipping stores! All the legal documents I needed without the expensive lawyer fees. Saved me thousands and gave me peace of mind."
  },
  {
    name: "Sophie Chen",
    role: "E-commerce Store Owner",
    rating: 5,
    text: "As someone running multiple dropshipping stores, this package is a lifesaver. One purchase and I could protect all my businesses immediately."
  },
  {
    name: "Marcus Rodriguez",
    role: "Online Retailer",
    rating: 5,
    text: "The shipping policy is especially well-crafted for dropshipping with longer delivery times. My customers now have clear expectations upfront."
  }
];

const ReviewsDropshipping = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Customer Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Dropshippers Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of satisfied dropshipping entrepreneurs who protect their businesses with our legal documents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
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

export default ReviewsDropshipping;

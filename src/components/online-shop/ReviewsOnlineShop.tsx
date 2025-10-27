import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emma Thompson",
    role: "Beauty Products Webshop Owner",
    rating: 5,
    text: "Launching my beauty webshop was a dream come true, but the legal requirements felt overwhelming. These documents provided instant clarity and protection—from customer privacy to return handling, everything is professionally addressed. My customers appreciate the transparency and I sleep better knowing I'm fully compliant!"
  },
  {
    name: "James Anderson",
    role: "Multi-Store Online Retailer",
    rating: 5,
    text: "Running multiple webshops across different niches meant I needed comprehensive legal coverage. This package delivered perfectly. The cookie policy, GDPR compliance, and shipping terms are crystal clear. Being able to use these documents across all my online stores makes this an incredible value. Highly recommended for any serious webshop owner!"
  }
];

const ReviewsOnlineShop = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why webshop owners and online entrepreneurs trust our legal documents for their internet businesses
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

export default ReviewsOnlineShop;

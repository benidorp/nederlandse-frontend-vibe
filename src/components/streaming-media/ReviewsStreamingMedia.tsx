import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus Rodriguez",
    role: "Fitness Influencer & Live Stream Coach",
    rating: 5,
    text: "As a fitness coach running live workout sessions and on-demand video content, I needed solid legal protection. These documents gave me everything—from DMCA protection to clear user terms. The content license agreement was especially helpful for managing my community contributors. Worth every penny!"
  },
  {
    name: "Sophia Chen",
    role: "Independent Media Company Founder",
    rating: 5,
    text: "Running a streaming platform for educational content requires careful legal compliance. This package delivered exactly what I needed—GDPR-compliant privacy policies, clear copyright terms, and creator agreements. The implementation guide made setup incredibly easy, and having international language options was a huge bonus!"
  }
];

const ReviewsStreamingMedia = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover why content creators and media companies trust our legal documents
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

export default ReviewsStreamingMedia;

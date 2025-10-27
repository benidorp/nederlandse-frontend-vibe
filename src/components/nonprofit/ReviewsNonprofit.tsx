import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsNonprofit = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      organization: "Hope Rising Foundation",
      role: "Executive Director",
      rating: 5,
      text: "As a small charity, legal costs were always a concern. This package gave us everything we needed at a fraction of the cost. Our donors now have complete confidence in our transparency and data protection."
    },
    {
      name: "James O'Connor",
      organization: "Bright Future Collective",
      role: "Operations Manager",
      rating: 5,
      text: "The volunteer agreement alone was worth the investment. We've had no issues since implementing these documents, and our board loves the professional approach to legal compliance."
    },
    {
      name: "Maria Santos",
      organization: "Hearts United Charity",
      role: "Founder",
      rating: 5,
      text: "Perfect for international fundraising! The GDPR compliance meant we could confidently accept donations from EU supporters. The implementation guide made everything so easy to set up."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trusted by Non-Profits Worldwide
            </h2>
            <p className="text-xl text-muted-foreground">
              See what charitable organizations say about our legal package
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsNonprofit;

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsEN = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Affiliate Marketer",
      rating: 5,
      text: "Finally legal protection for my affiliate websites! Easy to implement and professionally written. Highly recommended!"
    },
    {
      name: "Michael Peters",
      role: "Online Entrepreneur",
      rating: 5,
      text: "Super clear documents that are easy to customize for my websites. Great value for money and saves a lot of time and legal fees."
    },
    {
      name: "Emma Davis",
      role: "Content Creator",
      rating: 5,
      text: "I was worried about GDPR compliance, but these documents gave me complete peace of mind. Professional and up-to-date!"
    },
    {
      name: "David Brown",
      role: "Affiliate Website Owner",
      rating: 5,
      text: "Excellent package with all necessary legal documents. Clear instructions and immediate download. Exactly what I needed!"
    },
    {
      name: "Lisa Anderson",
      role: "Digital Marketer",
      rating: 5,
      text: "Very complete and professionally written documents. I use them on all my affiliate websites. Great purchase!"
    },
    {
      name: "James Wilson",
      role: "Affiliate Specialist",
      rating: 5,
      text: "Clear legal documents that are easy to understand and implement. Saves a lot of money compared to hiring a lawyer!"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of satisfied affiliate marketers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{review.name}</p>
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

export default ReviewsEN;

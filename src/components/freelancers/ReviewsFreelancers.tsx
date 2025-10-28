import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Graphic Designer",
    rating: 5,
    text: "These documents gave me the confidence to work with international clients. The client service agreement is professional and covers everything I need. Best €79 I've spent on my freelance business!"
  },
  {
    name: "Marcus Chen",
    role: "Web Developer",
    rating: 5,
    text: "As a self-employed developer, I was worried about liability and payment disputes. This package put my mind at ease. The templates are clear, professional, and easy to customize."
  },
  {
    name: "Emma Rodriguez",
    role: "Content Writer",
    rating: 5,
    text: "I used to spend hours researching legal requirements. This package saved me so much time and stress. The implementation guide made everything super easy to set up."
  },
  {
    name: "James Thompson",
    role: "Marketing Consultant",
    rating: 5,
    text: "Worth every penny! Having proper contracts and disclaimers has already helped me avoid one potential dispute. These documents make me look professional and protect my business."
  },
  {
    name: "Lisa Andersson",
    role: "Virtual Assistant",
    rating: 5,
    text: "I work with multiple clients across different countries. Having GDPR-compliant policies and clear service agreements has been essential. Highly recommend for any freelancer!"
  },
  {
    name: "David Kumar",
    role: "Independent Contractor",
    rating: 5,
    text: "The complete package covers everything from privacy policies to client contracts. Much more affordable than hiring a lawyer, and the documents are high quality and comprehensive."
  }
];

const ReviewsFreelancers = () => {
  return (
    <section id="reviews" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Freelancers Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of freelancers, self-employed professionals, and independent contractors 
            who protect their business with our legal documents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsFreelancers;

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sophie Martinez",
    role: "Founder, TechLearn Academy",
    content: "As a tech education platform with 5,000+ students, we needed solid legal protection. These documents gave us everything we needed - from GDPR compliance to clear refund policies. Implemented in 20 minutes!",
    rating: 5,
    platform: "Online Coding Courses"
  },
  {
    name: "Michael Chen",
    role: "CEO, LanguagePro",
    content: "We run a language learning platform across 15 countries. The international GDPR compliance was crucial for us. The instructor agreement terms were particularly helpful for managing our 50+ teachers.",
    rating: 5,
    platform: "Language Learning Platform"
  },
  {
    name: "Emma Thompson",
    role: "Director, HealthEd Online",
    content: "For healthcare education, legal compliance is non-negotiable. These documents cover everything from student privacy to certificate issuance. Saved us at least €5,000 in legal fees.",
    rating: 5,
    platform: "Medical Education Courses"
  },
  {
    name: "David Wilson",
    role: "Founder, BusinessMasterclass",
    content: "We offer business courses and certification programs. The clear terms around certification and intellectual property protection were exactly what we needed. Professional quality at an unbeatable price.",
    rating: 5,
    platform: "Business & Leadership Courses"
  }
];

const ReviewsElearning = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">Trusted by Education Platforms</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Platform Owners Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of e-learning platforms that trust our legal documents
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/50">
                <CardContent className="pt-6">
                  {/* Quote icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">
                    "{review.content}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-primary/20 pt-4">
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                    <p className="text-xs text-primary font-semibold mt-1">{review.platform}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust indicator */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              ⭐ Rated 4.9/5 by 200+ E-Learning Platform Owners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsElearning;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Editor-in-Chief, Tech News Daily",
    rating: 5,
    text: "As an independent tech news site, we couldn't afford thousands in legal fees. This package gave us everything we needed - GDPR compliance, editorial guidelines, and copyright protection. Launched in one afternoon!",
    date: "2 weeks ago"
  },
  {
    name: "James Rodriguez",
    role: "Publisher, Lifestyle Magazine Network",
    rating: 5,
    text: "We run 5 different magazine websites and needed consistent legal documentation across all of them. One purchase covered everything. The editorial policy alone would have cost us €800 from our lawyer. Incredible value!",
    date: "1 month ago"
  },
  {
    name: "Emma Larsson",
    role: "Founder, Scandinavian Culture Magazine",
    rating: 5,
    text: "The multilingual support was a game-changer. We needed Swedish and English versions for our international audience. Having both GDPR compliance and editorial standards made us look so much more professional to advertisers.",
    date: "3 weeks ago"
  },
  {
    name: "Michael Chen",
    role: "Chief Editor, Business Insights Hub",
    rating: 5,
    text: "The copyright policy saved us immediately. A content scraper was republishing our articles, and having professional legal documentation helped us send a proper DMCA takedown. Worth every cent just for that!",
    date: "2 months ago"
  },
  {
    name: "Sophie Dubois",
    role: "Managing Director, Fashion & Lifestyle Journal",
    rating: 5,
    text: "We were worried about GDPR fines with our growing European readership. The privacy policy covered everything - newsletters, analytics, advertising cookies. Our legal consultant reviewed it and was impressed. Saved us €1,500 minimum.",
    date: "1 month ago"
  },
  {
    name: "David O'Connor",
    role: "Founder, Sports News Ireland",
    rating: 5,
    text: "The implementation guide was brilliant. Even though I'm not tech-savvy, I had all documents up and running in under an hour. The editorial policy especially helped establish credibility with our readers and sources.",
    date: "3 weeks ago"
  }
];

const ReviewsNewsMagazine = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reviews</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by News Publishers & Magazine Editors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of publishers who protect their publications with professional legal documentation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsNewsMagazine;

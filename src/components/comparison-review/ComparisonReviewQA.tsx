import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "FTC-compliant affiliate disclosures that protect against regulatory fines",
  "Liability disclaimers for product recommendations and comparisons",
  "GDPR and CCPA compliant privacy policies for international audiences",
  "User-generated content policies protecting against defamation claims",
  "Clear cookie consent mechanisms for tracking and analytics",
  "Protection against accuracy claims and third-party disputes",
  "Advertising and sponsorship disclosure templates",
  "Content ownership and usage rights documentation"
];

const ComparisonReviewQA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Why You Need This</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Essential Legal Protection for Review Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Protect your review platform from legal risks while maintaining credibility and compliance with advertising regulations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-primary/10">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 ${index % 2 === 0 ? 'bg-primary/10' : 'bg-destructive/10'} rounded-full flex items-center justify-center`}>
                      <CheckCircle2 className={`h-5 w-5 ${index % 2 === 0 ? 'text-primary' : 'text-destructive'}`} />
                    </div>
                  </div>
                  <p className="text-foreground leading-relaxed pt-2">{benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonReviewQA;

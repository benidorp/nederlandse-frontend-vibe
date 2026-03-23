import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van der Berg",
    role: "Hochzeitsfotografin",
    rating: 5,
    text: "Als Hochzeitsfotografin brauchte ich professionelle Rechtsdokumente für meine Kunden. Diese Vorlagen sind perfekt – die Auftragsvereinbarung, das Model-Release und der Urheberrechtsschutz schützen meine Arbeit vollständig. Der Implementierungsleitfaden hat die Installation auf meiner Website super einfach gemacht. Endlich kann ich mit ruhigem Gewissen arbeiten!"
  },
  {
    name: "Mark Jansen",
    role: "Werbefotograf",
    rating: 5,
    text: "Für mein Fotografieunternehmen sind diese Rechtsdokumente Gold wert. Die DSGVO-konforme Datenschutzerklärung und Cookie-Richtlinie geben meinen Kunden Vertrauen, und der Urheberrechtsschutz verhindert, dass meine Fotos ohne Erlaubnis verwendet werden. Professionelle Qualität für einen Bruchteil dessen, was ein Anwalt kosten würde!"
  }
];

const ReviewsPhotographyDE = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Bewertungen</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Erfahren Sie, warum Fotografen unseren Rechtsdokumenten vertrauen
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
                  „{review.text}"
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

export default ReviewsPhotographyDE;

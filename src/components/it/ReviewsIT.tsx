import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van den Berg",
    role: "Affiliato Marketer",
    rating: 5,
    text: "Questi documenti legali sono indispensabili per ogni sito web! Sono scritti professionalmente, facili da implementare e specificatamente adattati alle attività di affiliazione. Il fatto che siano adatti per uso internazionale è un enorme vantaggio. Mi hanno fatto risparmiare tempo, denaro e lo sforzo di capire i requisiti legali da sola. Altamente raccomandato!"
  },
  {
    name: "Mark Jansen",
    role: "Imprenditore Online",
    rating: 5,
    text: "Questi documenti legali sono esattamente ciò di cui avevo bisogno per il mio sito web di affiliazione. Sono chiari, redatti professionalmente e coprono tutti gli aspetti legali essenziali. La parte migliore è che sono pronti all'uso e possono essere implementati rapidamente. Un ottimo investimento per chiunque nel settore dell'affiliazione!"
  }
];

const ReviewsIT = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Recensioni</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri perché centinaia di affiliati ottengono i loro documenti legali da noi
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

export default ReviewsIT;
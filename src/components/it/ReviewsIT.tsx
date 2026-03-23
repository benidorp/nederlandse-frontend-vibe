import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emma Rossi",
    role: "Proprietaria di Hotel",
    rating: 5,
    text: "Gestire un boutique hotel richiede una protezione legale adeguata, e questi documenti hanno fornito esattamente ciò di cui avevo bisogno. La politica di cancellazione e i termini e condizioni sono cristallini per gli ospiti, e la conformità GDPR mi ha dato tranquillità. Qualità professionale a una frazione di quello che costerebbe un avvocato!"
  },
  {
    name: "Luca Bianchi",
    role: "Fondatore di Piattaforma di Viaggi",
    rating: 5,
    text: "Come qualcuno che gestisce una piattaforma di prenotazione per case vacanza, questi modelli legali sono stati una salvezza. Coprono tutto, dalla protezione dei dati ai disclaimer di responsabilità, e la guida all'implementazione ha reso la configurazione incredibilmente semplice. Il miglior investimento che ho fatto per la mia attività di viaggi!"
  }
];

const ReviewsIT = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Recensioni</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cosa Dicono i Nostri Clienti</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri perché proprietari di hotel e piattaforme di viaggio si fidano dei nostri documenti legali
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
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van der Berg",
    role: "Fotografa di matrimoni",
    rating: 5,
    text: "Come fotografa di matrimoni, avevo bisogno di documenti legali professionali per i miei clienti. Questi modelli sono perfetti – il contratto di incarico, la liberatoria del modello e la protezione del diritto d'autore proteggono completamente il mio lavoro. La guida all'implementazione ha reso l'installazione sul mio sito web semplicissima. Finalmente posso lavorare con la mente tranquilla!"
  },
  {
    name: "Mark Jansen",
    role: "Fotografo commerciale",
    rating: 5,
    text: "Per la mia attività fotografica, questi documenti legali valgono oro. L'informativa sulla privacy e la politica dei cookie conformi al GDPR danno fiducia ai miei clienti, e la protezione del diritto d'autore impedisce che le mie foto vengano usate senza permesso. Qualità professionale a una frazione del costo di un avvocato!"
  }
];

const ReviewsPhotographyIT = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Recensioni</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scopri perché i fotografi si fidano dei nostri documenti legali
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
                  «{review.text}»
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

export default ReviewsPhotographyIT;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anna Kowalska",
    role: "Właścicielka Hotelu",
    rating: 5,
    text: "Prowadzenie butikowego hotelu wymaga odpowiedniej ochrony prawnej, a te dokumenty dostarczyły dokładnie tego, czego potrzebowałam. Polityka anulowania i regulamin są krystalicznie czyste dla gości, a zgodność z RODO dała mi spokój ducha. Profesjonalna jakość za ułamek ceny prawnika!"
  },
  {
    name: "Piotr Nowak",
    role: "Założyciel Platformy Turystycznej",
    rating: 5,
    text: "Jako osoba zarządzająca platformą rezerwacyjną dla wynajmu wakacyjnego, te szablony prawne były ratunkiem. Obejmują wszystko od ochrony danych po wyłączenia odpowiedzialności, a przewodnik wdrożeniowy sprawił, że konfiguracja była niesamowicie prosta. Najlepsza inwestycja dla mojego biznesu turystycznego!"
  }
];

const ReviewsPL = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Opinie</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Co Mówią Nasi Klienci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dowiedz się, dlaczego właściciele hoteli i platformy turystyczne ufają naszym dokumentom prawnym
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

export default ReviewsPL;
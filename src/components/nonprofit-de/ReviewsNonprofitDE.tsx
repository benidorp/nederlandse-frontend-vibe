import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsNonprofitDE = () => {
  const reviews = [
    {
      name: "Sarah Mitchell",
      organization: "Hope Rising Foundation",
      role: "Geschäftsführerin",
      rating: 5,
      text: "Als kleine Wohltätigkeitsorganisation waren Rechtskosten immer ein Problem. Dieses Paket gab uns alles, was wir brauchten, zu einem Bruchteil der Kosten. Unsere Spender haben jetzt vollstes Vertrauen in unsere Transparenz und unseren Datenschutz."
    },
    {
      name: "James O'Connor",
      organization: "Bright Future Collective",
      role: "Betriebsleiter",
      rating: 5,
      text: "Allein die Freiwilligenvereinbarung war die Investition wert. Seit der Implementierung dieser Dokumente hatten wir keine Probleme mehr, und unser Vorstand schätzt den professionellen Ansatz bei der Einhaltung von Rechtsvorschriften."
    },
    {
      name: "Maria Santos",
      organization: "Hearts United Charity",
      role: "Gründerin",
      rating: 5,
      text: "Perfekt für internationales Fundraising! Die DSGVO-Konformität bedeutete, dass wir zuversichtlich Spenden von EU-Unterstützern annehmen konnten. Der Implementierungsleitfaden machte die Einrichtung unglaublich einfach."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vertraut von gemeinnützigen Organisationen weltweit
            </h2>
            <p className="text-xl text-muted-foreground">
              Erfahren Sie, was Wohltätigkeitsorganisationen über unser Rechtspaket sagen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsNonprofitDE;

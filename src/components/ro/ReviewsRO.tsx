import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const reviews = [{
  name: "Emma Thompson",
  role: "Proprietar de Hotel",
  rating: 5,
  text: "Conducerea unui hotel boutique necesită protecție juridică adecvată, iar aceste documente au oferit exact ceea ce aveam nevoie. Politica de anulare și termenii și condițiile sunt extrem de clare pentru oaspeți, iar conformitatea GDPR mi-a oferit liniște sufletească. Calitate profesională la o fracțiune din costul unui avocat!"
}, {
  name: "Lucas Martinez",
  role: "Fondator Platformă de Călătorii",
  rating: 5,
  text: "Ca administrator al unei platforme de rezervări pentru închirieri de vacanță, aceste șabloane juridice au fost salvatoare. Acoperă totul, de la protecția datelor la declarații de declinare a responsabilității, iar ghidul de implementare a făcut configurarea incredibil de simplă. Cea mai bună investiție pentru afacerea mea de turism!"
}];
const ReviewsRO = () => {
  return <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Recenzii</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ce Spun Clienții Noștri</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descoperiți de ce proprietarii de hoteluri și platformele de călătorii au încredere în documentele noastre juridice
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ReviewsRO;
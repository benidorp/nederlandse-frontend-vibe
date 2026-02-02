import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Emma Virtanen",
    role: "Hotellinomistaja",
    rating: 5,
    text: "Putiikkihotellin pyörittäminen vaatii asianmukaista juridista suojaa, ja nämä asiakirjat tarjosivat juuri sen, mitä tarvitsin. Peruutuskäytäntö ja käyttöehdot ovat kristallinkirkkaita vieraille, ja GDPR-vaatimustenmukaisuus antoi minulle mielenrauhan. Ammattimaista laatua murto-osalla siitä, mitä lakimies veloittaisi!"
  },
  {
    name: "Mikko Korhonen",
    role: "Matkailualustan Perustaja",
    rating: 5,
    text: "Loma-asuntojen varausjärjestelmää hallinnoivana nämä juridiset mallipohjat olivat pelastus. Ne kattavat kaiken tietosuojasta vastuuvapauslausekkeisiin, ja toteutusopas teki asennuksesta uskomattoman suoraviivaista. Paras sijoitus matkailuyritykselleni!"
  }
];

const ReviewsFI = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Arvostelut</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Mitä Asiakkaamme Sanovat</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tutustu miksi hotellinomistajat ja matkailualustat luottavat juridisiin asiakirjoihimme
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

export default ReviewsFI;
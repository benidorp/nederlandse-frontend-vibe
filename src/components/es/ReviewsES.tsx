import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sofía Martínez",
    role: "Marketing de Afiliados",
    rating: 5,
    text: "¡Estos documentos legales son imprescindibles para cualquier sitio web! Están escritos profesionalmente, son fáciles de implementar y están especialmente adaptados para negocios de afiliados. El hecho de que sean adecuados para uso internacional es una gran ventaja. Me ha ahorrado tiempo, dinero y el esfuerzo de investigar requisitos legales por mi cuenta. ¡Muy recomendable!"
  },
  {
    name: "Carlos González",
    role: "Emprendedor Online",
    rating: 5,
    text: "Estos documentos legales son exactamente lo que necesitaba para mi sitio web de afiliados. Son claros, redactados profesionalmente y cubren todos los aspectos legales esenciales. Lo mejor es que están listos para usar y se pueden implementar rápidamente. ¡Una excelente inversión para cualquiera en el negocio de afiliados!"
  }
];

const ReviewsES = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reseñas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué cientos de afiliados obtienen sus documentos legales con nosotros
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

export default ReviewsES;

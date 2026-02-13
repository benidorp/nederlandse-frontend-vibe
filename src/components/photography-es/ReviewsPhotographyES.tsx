import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophie van der Berg",
    role: "Fotógrafa de bodas",
    rating: 5,
    text: "Como fotógrafa de bodas, necesitaba documentos legales profesionales para mis clientes. Estas plantillas son perfectas – el contrato de encargo, la autorización de modelo y la protección de derechos de autor protegen completamente mi trabajo. La guía de implementación hizo que la instalación en mi sitio web fuera súper fácil. ¡Por fin puedo trabajar con tranquilidad!"
  },
  {
    name: "Mark Jansen",
    role: "Fotógrafo comercial",
    rating: 5,
    text: "Para mi empresa de fotografía, estos documentos legales valen oro. La política de privacidad y la política de cookies conformes al RGPD dan confianza a mis clientes, y la protección de derechos de autor evita que mis fotos se usen sin permiso. ¡Calidad profesional por una fracción de lo que costaría un abogado!"
  }
];

const ReviewsPhotographyES = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Opiniones</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra por qué los fotógrafos confían en nuestros documentos legales
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

export default ReviewsPhotographyES;

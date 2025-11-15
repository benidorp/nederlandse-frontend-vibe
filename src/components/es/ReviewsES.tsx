import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
const reviews = [{
  name: "Emma Thompson",
  role: "Propietaria de Hotel",
  rating: 5,
  text: "Dirigir un hotel boutique requiere una protección legal adecuada, y estos documentos proporcionaron exactamente lo que necesitaba. La política de cancelación y los términos y condiciones son muy claros para los huéspedes, y el cumplimiento del RGPD me dio tranquilidad. ¡Calidad profesional a una fracción de lo que cobraría un abogado!"
}, {
  name: "Lucas Martínez",
  role: "Fundador de Plataforma de Viajes",
  rating: 5,
  text: "Como alguien que gestiona una plataforma de reservas para alquileres vacacionales, estas plantillas legales fueron un salvavidas. Cubren todo, desde protección de datos hasta exenciones de responsabilidad, y la guía de implementación hizo que la configuración fuera increíblemente sencilla. ¡La mejor inversión que hice para mi negocio de viajes!"
}];
const ReviewsES = () => {
  return <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Reseñas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Lo Que Dicen Nuestros Clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre por qué los propietarios de hoteles y plataformas de viajes confían en nuestros documentos legales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  "{review.text}"
                </p>
                
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
export default ReviewsES;
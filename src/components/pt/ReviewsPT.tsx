import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria Santos",
    role: "Proprietária de Hotel",
    rating: 5,
    text: "Gerir um hotel boutique requer proteção legal adequada, e estes documentos forneceram exatamente o que eu precisava. A política de cancelamento e os termos e condições são cristalinos para os hóspedes, e a conformidade com o GDPR deu-me tranquilidade. Qualidade profissional por uma fração do que um advogado cobraria!"
  },
  {
    name: "João Silva",
    role: "Fundador de Plataforma de Viagens",
    rating: 5,
    text: "Como alguém que gere uma plataforma de reservas para alugueres de férias, estes modelos legais foram uma salvação. Cobrem tudo, desde proteção de dados até avisos de responsabilidade, e o guia de implementação tornou a configuração incrivelmente simples. O melhor investimento que fiz para o meu negócio de viagens!"
  }
];

const ReviewsPT = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Avaliações</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O Que os Nossos Clientes Dizem</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra porque proprietários de hotéis e plataformas de viagens confiam nos nossos documentos legais
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

export default ReviewsPT;
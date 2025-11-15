import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Política de Privacidad",
    description: "Política de privacidad completa conforme a la legislación RGPD",
    details: [
      "Derechos de usuario bajo RGPD",
      "Qué datos se recopilan",
      "Cómo y por qué se utilizan estos datos",
      "Compartir datos con terceros"
    ]
  },
  {
    icon: AlertCircle,
    title: "Exención de Responsabilidad",
    description: "Protección legal contra reclamaciones de responsabilidad",
    details: [
      "Sin garantía de resultados",
      "Sin responsabilidad por información",
      "Notificación de enlaces de afiliados y comisiones"
    ]
  },
  {
    icon: FileText,
    title: "Divulgación de Afiliados",
    description: "Divulgación transparente conforme a las directrices FTC",
    details: [
      "Transparencia sobre anunciantes",
      "Divulgación clara de comisiones",
      "Cumplimiento con regulaciones UE y EE.UU."
    ]
  },
  {
    icon: ScrollText,
    title: "Términos y Condiciones",
    description: "Regula la relación entre tu sitio web y los usuarios",
    details: [
      "Limitación de responsabilidad",
      "Restricciones de uso",
      "Derechos de propiedad intelectual"
    ]
  },
  {
    icon: Cookie,
    title: "Política de Cookies",
    description: "Cumplimiento completo de cookies y consentimiento",
    details: [
      "Explicación del uso de cookies",
      "Consentimiento conforme al RGPD",
      "Gestión de cookies analíticas"
    ]
  },
  {
    icon: BookOpen,
    title: "Guía de Implementación",
    description: "Instrucciones paso a paso para la implementación",
    details: [
      "Instrucciones de instalación simples",
      "Colocación correcta de documentos",
      "Consejos de personalización para tu sitio web"
    ]
  }
];

const ServicesES = () => {
  return (
    <section id="services" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Legales Esenciales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para un sitio web de afiliados, los siguientes documentos legales son esenciales. 
            Nuestro paquete contiene todo lo que necesitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-card text-foreground border-border">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-red-600 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Ahorra Miles</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Con miles de sitios web de afiliados, nuestros documentos personalizables son adecuados para cada negocio de afiliados. 
                ¡Concéntrate en ganar comisiones—hemos simplificado el cumplimiento legal!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Para TODOS Tus Sitios Web</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Los documentos legales esenciales para todos tus sitios de afiliados. Sí, puedes usarlos para 
                TODOS los sitios web sin tener que comprar licencias separadas!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimiza Tus Riesgos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Si bien las garantías no existen y ningún documento puede garantizar todo, estos documentos legales están diseñados para reducir tus riesgos y brindarte la máxima protección. Te dan la certeza de términos claros y confiables."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesES;
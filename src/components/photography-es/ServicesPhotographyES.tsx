import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen, Camera } from "lucide-react";

const services = [
  {
    icon: ScrollText,
    title: "Términos y Condiciones",
    description: "Términos y condiciones completos diseñados especialmente para fotógrafos",
    details: ["Honorarios y condiciones de pago", "Ejecución y entrega de encargos", "Protección de derechos de autor e imagen", "Políticas de cancelación y reprogramación"]
  },
  {
    icon: FileText,
    title: "Contrato de Encargo (Presupuesto)",
    description: "Plantilla de contrato profesional con ejemplos de correo electrónico",
    details: ["Plantilla de documento lista para usar", "Ejemplo de acuerdo incluido", "Plantillas de correo para copiar y pegar", "Personalizable según sus servicios"]
  },
  {
    icon: Shield,
    title: "Política de Privacidad",
    description: "Política de privacidad conforme al RGPD para fotógrafos",
    details: ["Protección de datos de formularios de contacto", "Gestión de información de clientes", "Disposiciones específicas de fotografía", "Obligatoria para formularios de contacto"]
  },
  {
    icon: Cookie,
    title: "Política de Cookies",
    description: "Conformidad completa con cookies según el RGPD",
    details: ["Diseñada especialmente para fotógrafos", "Conformidad total con el RGPD", "Explicación del uso de cookies", "Directrices de gestión del consentimiento"]
  },
  {
    icon: AlertCircle,
    title: "Aviso Legal",
    description: "Protección de sus fotos y contenidos contra el uso no autorizado",
    details: ["Protección de fotos y contenido", "Declaraciones claras de propiedad", "Advertencias de violación de derechos de autor", "Restricciones y permisos de uso"]
  },
  {
    icon: Camera,
    title: "Exención de Responsabilidad",
    description: "Protección legal y acuerdos claros con las personas",
    details: ["Protección legal antes de la sesión", "Acuerdos claros con las personas", "Disposiciones de autorización de modelo", "Protección de derechos de imagen"]
  },
  {
    icon: BookOpen,
    title: "Protección de Derechos de Autor",
    description: "Condiciones internacionales de derechos de autor para su fotografía",
    details: ["Protección mundial de derechos de autor", "Directrices de licencia de uso", "Requisitos de atribución", "Aplicación en caso de infracción"]
  }
];

const ServicesPhotographyES = () => {
  return (
    <section id="servicios" className="py-20 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Nuestros Servicios</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Documentos Legales Esenciales para Fotógrafos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Para una empresa de fotografía profesional, los siguientes documentos legales son indispensables para su sitio web. Nuestro paquete contiene todo lo que necesita para proteger su trabajo y su negocio.
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
              <CardTitle className="text-lg text-primary-foreground">Perfecto para todos los fotógrafos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Ya sea fotógrafo de retratos, bodas, comercial o de eventos – nuestros documentos personalizables son adecuados para cualquier empresa de fotografía. ¡Concéntrese en su arte – nosotros simplificamos el cumplimiento legal!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Para TODOS sus sitios de fotografía</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Los documentos legales esenciales para todos sus sitio(s) de fotografía. ¡Sí, puede usarlos para TODOS sus sitios sin comprar licencias separadas!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Proteja su trabajo y su negocio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Las garantías no existen y ningún documento puede garantizarlo todo, pero estos documentos legales están diseñados para minimizar sus riesgos y ofrecerle la máxima protección para su empresa de fotografía y sus obras creativas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesPhotographyES;

import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    question: "¿Por qué necesito documentos legales como fotógrafo?",
    answer: "Como fotógrafo profesional, necesita protección legal por varias razones: proteger sus derechos de autor, definir condiciones claras con los clientes, cumplir con el RGPD al recopilar datos de clientes, establecer políticas de pago y cancelación, y protegerse contra reclamaciones de responsabilidad. Sin documentos legales adecuados, se expone a riesgos financieros y legales."
  },
  {
    question: "¿Qué incluye el contrato de encargo (presupuesto)?",
    answer: "El contrato de encargo incluye una plantilla de contrato completa que puede personalizar para cada cliente. Cubre honorarios, condiciones de pago, detalles del encargo, plazos de entrega, derechos de autor, derechos de uso y políticas de cancelación. También proporcionamos ejemplos de acuerdos y plantillas de correo electrónico listas para copiar y pegar en la comunicación con sus clientes."
  },
  {
    question: "¿Cómo me protege la exención de responsabilidad como fotógrafo?",
    answer: "La exención de responsabilidad le permite establecer acuerdos legales claros con las personas fotografiadas antes de la sesión. Incluye autorizaciones de modelo, derechos de imagen, permisos de uso y renuncias de responsabilidad. Esto le protege contra futuras reclamaciones y garantiza que dispone de un consentimiento documentado para el uso y publicación de las fotos realizadas."
  },
  {
    question: "¿Puedo usar estos documentos para diferentes especialidades fotográficas?",
    answer: "¡Sí! Ya sea fotógrafo de retratos, bodas, comercial, eventos o trabaje en varias especialidades – estos documentos son flexibles y adaptables a cualquier tipo de empresa de fotografía. Simplemente adapte los servicios específicos y las condiciones a su modelo de negocio."
  },
  {
    question: "¿La protección de derechos de autor es válida internacionalmente?",
    answer: "Sí, el documento de protección de derechos de autor está redactado teniendo en cuenta la cobertura internacional y hace referencia al Convenio de Berna y otros tratados internacionales de derechos de autor. Establece su propiedad sobre todas las obras fotográficas y define condiciones claras para la licencia, atribución y aplicación en diferentes países."
  },
  {
    question: "¿Necesito una política de privacidad si solo tengo un formulario de contacto?",
    answer: "¡Sí! Según el RGPD y otras leyes de protección de datos, está legalmente obligado a tener una política de privacidad si recopila datos personales a través de su sitio web (incluso solo un nombre y un correo electrónico a través de un formulario de contacto). Nuestra política de privacidad específica para fotógrafos cubre todos los escenarios comunes, incluyendo formularios de contacto, sistemas de reserva y gestión de datos de clientes."
  },
  {
    question: "¿Puedo personalizar estos documentos para mis servicios específicos?",
    answer: "¡Absolutamente! Todos los documentos están diseñados para ser fácilmente personalizables. Puede adaptar las condiciones a sus servicios específicos, estructura de precios, métodos de entrega y políticas comerciales. Los documentos proporcionan una base legal sólida mientras le dan la flexibilidad de personalizarlos para su empresa de fotografía única."
  },
  {
    question: "¿Cómo protegen estos documentos mis fotos contra el robo?",
    answer: "El aviso legal y los documentos de protección de derechos de autor establecen claramente que usted posee todos los derechos sobre sus fotos y definen lo que otros pueden y no pueden hacer con sus imágenes. Contienen advertencias contra el uso, reproducción o distribución no autorizados. Aunque ningún documento puede prevenir físicamente el robo, estos documentos legales le dan una posición legal sólida para hacer valer sus derechos y reclamar indemnizaciones si su trabajo se utiliza sin autorización."
  },
  {
    question: "¿Necesito documentos separados para cada sitio web de fotografía?",
    answer: "¡No! Con una sola compra, puede utilizar estos documentos legales para todos sus sitios de fotografía. Ya tenga un sitio de portfolio o varios sitios para diferentes servicios de fotografía – la licencia permite un uso ilimitado. Esto es extremadamente rentable para fotógrafos con múltiples presencias en línea."
  },
  {
    question: "¿Y si trabajo con clientes internacionales?",
    answer: "Los documentos están redactados teniendo en cuenta la aplicabilidad internacional. Hacen referencia a leyes y convenciones internacionales cuando corresponde (como el RGPD para clientes europeos, derechos de autor internacionales, etc.). Puede indicar fácilmente qué jurisdicción se aplica y adaptar secciones para los diferentes mercados que atiende."
  }
];

const PhotographyQAES = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Preguntas y Respuestas</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas frecuentes sobre documentos legales para fotógrafos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Preguntas comunes de fotógrafos sobre protección legal y documentación
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PhotographyQAES;

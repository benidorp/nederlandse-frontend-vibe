import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const faqContent = {
  title: "Preguntas frecuentes sobre documentos legales para fotógrafos",
  questions: [
    { question: "¿Cómo puedo usar legalmente música o vídeo en mis contenidos fotográficos?", answer: "Asegúrese siempre de tener los derechos o licencias para los clips de música o vídeo utilizados en sus presentaciones o redes sociales. Use plataformas libres de derechos como Epidemic Sound, Artlist o Pexels. Nunca use material protegido por derechos de autor sin autorización explícita, ya que puede resultar en solicitudes de eliminación o multas." },
    { question: "¿Qué es una exención de responsabilidad en fotografía?", answer: "Una exención de responsabilidad es una autorización firmada por la cual un modelo o propietario cede todos los derechos o reclamaciones futuras sobre las imágenes, otorgando al fotógrafo los derechos de uso completos. Es esencial para sesiones comerciales, publicidad o cualquier proyecto donde las imágenes puedan venderse o publicarse internacionalmente." },
    { question: "¿Qué es una autorización de propiedad y cuándo la necesito?", answer: "Una autorización de propiedad otorga permiso para fotografiar propiedad privada con fines comerciales. Es necesaria para lugares como casas, oficinas o monumentos reconocibles. Sin esta autorización, puede encontrar restricciones legales al licenciar comercialmente o vender estas imágenes." },
    { question: "¿Cómo deben los fotógrafos gestionar la propiedad intelectual?", answer: "Reclame siempre los derechos de autor en sus contratos y metadatos. Registre sus imágenes en una oficina de derechos de autor si es posible. Añada marcas de agua, datos EXIF y mantenga registros claros de licencia. Evite usar el trabajo de otros sin permiso, incluso solo como inspiración." },
    { question: "¿Qué son los derechos morales en fotografía?", answer: "Los derechos morales protegen la integridad y la reputación de un fotógrafo. Incluyen el derecho a la atribución y el derecho a oponerse a la distorsión o mal uso de sus imágenes. Estos derechos existen automáticamente en muchos países y deben ser respetados por clientes y colaboradores." },
    { question: "¿Puedo fotografiar legalmente a personas en lugares públicos?", answer: "En la mayoría de los países, fotografiar personas en público con fines editoriales o artísticos está permitido, pero el uso comercial de estas imágenes requiere una autorización de modelo. Verifique siempre las leyes locales de privacidad – varían considerablemente según la región." },
    { question: "¿Qué es un acuerdo de confidencialidad (NDA) para fotógrafos?", answer: "Un NDA impide que clientes o colaboradores compartan información confidencial sobre su sesión fotográfica, sus tarifas o su proceso creativo. Es común en la fotografía de moda, publicitaria y corporativa para proteger secretos comerciales y estrategias de marca." },
    { question: "¿Cómo puedo proteger mi portfolio en línea contra el robo?", answer: "Añada marcas de agua discretas a sus imágenes, desactive el guardado con clic derecho e integre metadatos en sus archivos. Use vistas previas de baja resolución para la visualización web. Servicios como Pixsy o Digimarc ayudan a rastrear y hacer cumplir el uso no autorizado de imágenes en todo el mundo." },
    { question: "¿Cómo puedo redactar un aviso legal sólido para fotografía?", answer: "Su aviso legal debe estipular que todas las fotos pertenecen al fotógrafo y no pueden ser copiadas ni distribuidas sin consentimiento escrito. Añada una nota indicando que los colores y la apariencia pueden variar según el dispositivo o la configuración de pantalla para evitar reclamaciones por representación falsa." },
    { question: "¿Qué importancia tiene el branding para los fotógrafos?", answer: "Un branding fuerte construye reconocimiento y confianza. Incluye un logotipo coherente, paleta de colores, tono de voz y estilo de edición. Una identidad de marca clara ayuda a los clientes a recordarle y le posiciona como profesional en su nicho." },
    { question: "¿Cómo pueden los fotógrafos construir una audiencia internacional?", answer: "Use estratégicamente las plataformas de redes sociales (Instagram, Pinterest, Behance). Escriba leyendas multilingües y use hashtags internacionales. Colabore con creativos de todo el mundo, participe en exposiciones en línea y optimice su sitio web para múltiples idiomas y monedas." },
    { question: "¿Cómo contar una historia a través de mi fotografía?", answer: "Cada imagen debe transmitir emoción, contexto o narrativa. Use la composición, la iluminación y los sujetos de manera intencional. Las secuencias de imágenes pueden construir storytelling visual – ideal para trabajos editoriales y documentales." },
    { question: "¿Cómo gestionar éticamente la manipulación de imágenes?", answer: "La retouche fotográfica debe mejorar pero no inducir a error. Evite alterar las características corporales de una manera que distorsione la realidad, salvo intención artística. Indique siempre el uso de composiciones o elementos generados por IA para mantener la transparencia y la confianza." },
    { question: "¿Qué es la fotografía generada por IA y es legal?", answer: "Las herramientas de IA pueden crear o modificar imágenes, pero la propiedad de los derechos de autor es compleja. Las leyes difieren según la región – en la mayoría de los casos, solo los elementos creados por humanos son protegibles por derechos de autor. Divulgue claramente la participación de la IA a los clientes y evite generar semejanzas sin consentimiento." },
    { question: "¿Cómo puedo colaborar con marcas como fotógrafo?", answer: "Cree un kit de medios profesional con su portfolio, estadísticas de audiencia y tarifas. Aborde las marcas con propuestas personalizadas que muestren el beneficio mutuo. Cierre contratos claros que especifiquen entregables, pago, exclusividad y derechos de licencia." },
    { question: "¿Qué debo incluir en una política de privacidad para fotografía?", answer: "Explique cómo se recopilan, almacenan y utilizan los datos de los clientes (nombres, fotos, información de contacto). Indique cuánto tiempo se conservan los datos y cómo los clientes pueden solicitar su eliminación. Asegure el cumplimiento del RGPD, CCPA o las leyes locales de protección de datos." },
    { question: "¿Cómo puedo tener en cuenta la sensibilidad cultural en fotografía?", answer: "Infórmese siempre sobre las costumbres locales y obtenga consentimiento antes de fotografiar personas o sitios religiosos. Evite reforzar estereotipos. La representación ética fortalece su reputación y apoya un storytelling visual responsable." },
    { question: "¿Cuáles son los riesgos de las herramientas de mejora de imagen por IA?", answer: "La IA puede sobreeditar o alterar detalles importantes, reduciendo la autenticidad. Algunas herramientas pueden almacenar imágenes subidas, poniendo en riesgo la seguridad de los datos. Use software de confianza, lea los términos de uso y conserve los originales como prueba de autoría." },
    { question: "¿Cómo hacer mi negocio de fotografía sostenible a largo plazo?", answer: "Diversifique sus fuentes de ingresos (impresiones, talleres, cursos en línea, licencias stock). Construya una fuerte presencia en línea y adáptese a nuevas tecnologías como la IA y los NFT. Siga aprendiendo y actualice regularmente sus contratos, branding y equipo." },
    { question: "¿Qué derechos conservo como fotógrafo al vender imágenes?", answer: "Como fotógrafo, conserva por defecto los derechos de autor sobre sus imágenes conforme a tratados internacionales como el Convenio de Berna. Puede transferir derechos de uso (licencias) a clientes mientras protege los derechos subyacentes. Defina claramente en su contrato lo que el cliente puede hacer (impresión, digital, comercial) y resérvese el resto." },
    { question: "¿Cuál es el mejor objetivo para fotografía de retrato?", answer: "Un objetivo de focal fija con gran apertura, como un 50mm f/1.8 o un 85mm f/1.4, es ideal para retratos. Estos objetivos producen un hermoso desenfoque de fondo (bokeh) y una compresión favorecedora de los rasgos faciales. Elija objetivos de formato completo para calidad profesional y nitidez uniforme." },
    { question: "¿Cómo hacer fotos de paisaje impresionantes?", answer: "Use una apertura pequeña (f/8–f/16) para una gran profundidad de campo, enfoque a un tercio en la escena y use un trípode para estabilidad. Los mejores momentos para paisajes son el amanecer y el atardecer. Añada interés en primer plano para profundidad y use un filtro polarizador para mejorar el cielo." },
    { question: "¿Qué es el balance de blancos en fotografía?", answer: "El balance de blancos ajusta la temperatura de color para que los tonos blancos aparezcan neutros bajo diferentes condiciones de iluminación. Los ajustes comunes incluyen luz de día, nublado, tungsteno y fluorescente. Un balance de blancos correcto evita que las fotos parezcan demasiado azules o anaranjadas y asegura tonalidades consistentes." },
    { question: "¿Qué es el bokeh y cómo crearlo?", answer: "El bokeh es la calidad estética del desenfoque de fondo producido por un objetivo de gran apertura (f/1.2–f/2.8). Use una focal larga y mantenga su sujeto alejado del fondo. Los objetivos de focal fija y las láminas de diafragma redondeadas crean efectos de bokeh más suaves." },
    { question: "¿Qué es la composición en fotografía?", answer: "La composición se refiere a cómo se disponen los elementos en una imagen. Una composición fuerte guía la mirada del espectador y crea equilibrio. Las técnicas incluyen la regla de los tercios, líneas directrices, simetría y espacio negativo para imágenes impactantes." }
  ]
};

const FAQPhotographyES = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Badge className="mb-4">Preguntas y Respuestas</Badge>
          <h1 className="text-4xl font-bold mb-4">Preguntas frecuentes</h1>
          <p className="text-xl text-muted-foreground mb-12">Preguntas comunes de fotógrafos sobre protección legal y documentación para su sitio web</p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-all" className="border rounded-lg px-6 py-2">
              <AccordionTrigger className="hover:no-underline">
                <h2 className="text-xl font-semibold text-left">{faqContent.title}</h2>
              </AccordionTrigger>
              <AccordionContent className="pt-4 space-y-6">
                {faqContent.questions.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h2 className="text-lg font-semibold">{item.question}</h2>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPhotographyES;

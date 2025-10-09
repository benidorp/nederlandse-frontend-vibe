import { Badge } from "@/components/ui/badge";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const AboutES = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Sobre Mí</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nicole Henderson
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialista legal especializada en documentos legales claros, precisos y profesionales
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <p className="text-foreground leading-relaxed mb-6">
              Hola, soy Nicole Henderson, redactora legal especializada en documentos legales claros, precisos y profesionales.
              Redacto contratos, políticas y acuerdos para empresas, organizaciones e individuos que protegen tus intereses y garantizan el cumplimiento,
              haciendo que el papeleo legal sea simple y sin estrés.
            </p>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Documentos Legales Profesionales para Negocios de Afiliados
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Para responder a las muchas preguntas sobre requisitos legales para afiliados, he desarrollado documentos legales de alta calidad
                especialmente para sitios web de afiliados. Estos documentos están diseñados para uso nacional e internacional
                y ofrecen protección esencial a una fracción del costo habitual. Obtén cobertura legal profesional
                a un precio asequible: ¡asegura tu negocio hoy!
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutES;

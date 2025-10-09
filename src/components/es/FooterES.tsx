import { Link } from "react-router-dom";

const FooterES = () => {
  return (
    <footer id="contacto" className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Affiliate Agreement</h3>
            <p className="text-sm text-primary-foreground/80">
              Documentos legales profesionales para sitios web de afiliados.
              Protege tu negocio con documentación legal de alta calidad.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="#sobre-mi" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Sobre Mí</a></li>
              <li><a href="#servicios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Servicios</a></li>
              <li><a href="#precios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Precios</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="text-sm text-primary-foreground/80">
              Para preguntas sobre nuestros documentos legales,<br />
              no dudes en contactarnos.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex items-center justify-between">
            <p className="text-center text-sm text-primary-foreground/80">
              © {new Date().getFullYear()} Legal Affiliate Agreement. Todos los derechos reservados.
            </p>
            <Link to="/" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <span className="text-2xl">🇪🇸</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterES;

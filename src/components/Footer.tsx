const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal Affiliate Agreement</h3>
            <p className="text-sm text-primary-foreground/80">
              Professionele juridische documenten voor affiliate websites. 
              Bescherm uw bedrijf met hoogwaardige juridische documentatie.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Snelle Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#over-mij" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Over Mij</a></li>
              <li><a href="#diensten" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Diensten</a></li>
              <li><a href="#prijzen" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Prijzen</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-primary-foreground/80">
              Voor vragen over onze juridische documenten,<br />
              neem gerust contact met ons op.
            </p>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>© {new Date().getFullYear()} Legal Affiliate Agreement. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

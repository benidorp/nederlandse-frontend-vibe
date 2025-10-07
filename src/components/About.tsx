import { Badge } from "@/components/ui/badge";
import { Twitter, Linkedin, Instagram } from "lucide-react";

const About = () => {
  return (
    <section id="over-mij" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Over Mij</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nicole Henderson
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Juridisch specialist gespecialiseerd in heldere, precieze en professionele juridische documenten
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <p className="text-foreground leading-relaxed mb-6">
              Hallo, ik ben Nicole Henderson, een juridisch schrijver gespecialiseerd in duidelijke, nauwkeurige en professionele juridische documenten. 
              Ik stel contracten, beleid en overeenkomsten op voor bedrijven, organisaties en particulieren die uw belangen beschermen en zorgen voor naleving, 
              waardoor juridisch papierwerk eenvoudig en stressvrij wordt.
            </p>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Professionele Juridische Documenten voor Affiliate Bedrijven
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Om de vele vragen over juridische vereisten voor affiliates te beantwoorden, heb ik hoogwaardige juridische documenten 
                speciaal voor affiliate websites ontwikkeld. Deze documenten zijn ontworpen voor zowel nationaal als internationaal gebruik 
                en bieden essentiële bescherming tegen een fractie van de gebruikelijke kosten. Krijg professionele juridische dekking 
                tegen een betaalbare prijs—beveilig vandaag nog uw bedrijf!
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

export default About;

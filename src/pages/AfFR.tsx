import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderFR from "@/components/fr/HeaderFR";
import FooterFR from "@/components/fr/FooterFR";

const AfFR = () => {
  const downloadTextFile = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const sampleDocument = `DIVULGATION D'AFFILIATION

Date d'entrée en vigueur : [Insérer la date]

Bienvenue sur [NomDuSiteAffiliation].com. Nous nous engageons à une transparence totale concernant nos relations d'affiliation.

Cette Divulgation d'Affiliation explique comment nous gagnons des commissions grâce à des partenariats d'affiliation.

Certains liens sur ce site web sont des liens d'affiliation. Lorsque vous cliquez sur ces liens et effectuez un achat, nous pouvons gagner une petite commission sans frais supplémentaires pour vous.

Contact : [Insérer l'email de contact]`;

  return (
    <div className="min-h-screen bg-background">
      <HeaderFR />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Documents Juridiques</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          Téléchargez les documents juridiques essentiels pour votre site d'affiliation. Chaque document est disponible en fichier .txt téléchargeable.
        </p>

        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Divulgation d'Affiliation</h2>
            <Button
              onClick={() => downloadTextFile("divulgation-affiliation-fr.txt", sampleDocument)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Télécharger
            </Button>
          </div>
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {sampleDocument}
          </p>
        </section>
      </main>
      
      <FooterFR />
    </div>
  );
};

export default AfFR;

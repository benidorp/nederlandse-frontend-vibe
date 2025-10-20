import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeaderDE from "@/components/de/HeaderDE";
import FooterDE from "@/components/de/FooterDE";

const AfDE = () => {
  const downloadTextFile = (filename: string, content: string) => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const affiliateDisclosure = `AFFILIATE-OFFENLEGUNG

Gültigkeitsdatum: [Datum einfügen]
Zuletzt aktualisiert: [Datum einfügen]

Willkommen bei [AffiliateWebsiteName].com („Website", „wir", „unser" oder „uns"). Wir verpflichten uns zu vollständiger Transparenz bezüglich unserer Affiliate-Beziehungen. Diese Affiliate-Offenlegung erklärt, wie wir Provisionen durch Affiliate-Partnerschaften verdienen und unsere Verantwortlichkeiten in Bezug auf Drittanbieter-Dienste.`;

  const termsAndConditions = `ALLGEMEINE GESCHÄFTSBEDINGUNGEN

Gültigkeitsdatum: [Datum einfügen]
Zuletzt aktualisiert: [Datum einfügen]

Willkommen bei [AffiliateWebsiteName].com („Website", „wir", „unser" oder „uns"). Diese Allgemeinen Geschäftsbedingungen („Bedingungen") regeln Ihren Zugriff auf und die Nutzung unserer Website.`;

  return (
    <div className="min-h-screen bg-background">
      <HeaderDE />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Rechtsdokumente</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          Laden Sie die wesentlichen Rechtsdokumente für Ihre Affiliate-Website herunter.
        </p>

        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Affiliate-Offenlegung</h2>
            <Button
              onClick={() => downloadTextFile("affiliate-offenlegung.txt", affiliateDisclosure)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Herunterladen
            </Button>
          </div>
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {affiliateDisclosure}
          </p>
        </section>

        <section className="mb-12 p-6 bg-card rounded-lg border border-border shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-foreground">Allgemeine Geschäftsbedingungen</h2>
            <Button
              onClick={() => downloadTextFile("agb.txt", termsAndConditions)}
              variant="outline"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Herunterladen
            </Button>
          </div>
          <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
            {termsAndConditions}
          </p>
        </section>
      </main>
      
      <FooterDE />
    </div>
  );
};

export default AfDE;

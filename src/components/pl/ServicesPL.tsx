import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, AlertCircle, ScrollText, Cookie, BookOpen } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Polityka Prywatności",
    description: "Kompletna polityka prywatności zgodna z prawodawstwem RODO",
    details: [
      "Prawa użytkowników według RODO",
      "Jakie dane są zbierane",
      "Jak i dlaczego te dane są wykorzystywane",
      "Udostępnianie danych stronom trzecim"
    ]
  },
  {
    icon: AlertCircle,
    title: "Wyłączenie Odpowiedzialności",
    description: "Ochrona prawna przed roszczeniami odpowiedzialności",
    details: [
      "Brak gwarancji wyników",
      "Brak odpowiedzialności za informacje",
      "Powiadomienie o linkach afiliacyjnych i prowizjach"
    ]
  },
  {
    icon: FileText,
    title: "Ujawnienie Afiliacji",
    description: "Przejrzyste ujawnienie zgodne z wytycznymi FTC",
    details: [
      "Przejrzystość wobec reklamodawców",
      "Jasne ujawnienie prowizji",
      "Zgodność z przepisami UE i USA"
    ]
  },
  {
    icon: ScrollText,
    title: "Regulamin",
    description: "Reguluje relację między Twoją stroną a użytkownikami",
    details: [
      "Ograniczenie odpowiedzialności",
      "Ograniczenia użytkowania",
      "Prawa własności intelektualnej"
    ]
  },
  {
    icon: Cookie,
    title: "Polityka Cookies",
    description: "Pełna zgodność i zgoda dotycząca cookies",
    details: [
      "Wyjaśnienie użycia cookies",
      "Zgoda zgodna z RODO",
      "Zarządzanie cookies analitycznymi"
    ]
  },
  {
    icon: BookOpen,
    title: "Przewodnik Wdrożeniowy",
    description: "Instrukcje krok po kroku do wdrożenia",
    details: [
      "Proste instrukcje instalacji",
      "Prawidłowe umieszczenie dokumentów",
      "Wskazówki dostosowania do Twojej strony"
    ]
  }
];

const ServicesPL = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Nasze Usługi</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Niezbędne Dokumenty Prawne
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dla strony afiliacyjnej poniższe dokumenty prawne są niezbędne. 
            Nasz pakiet zawiera wszystko, czego potrzebujesz.
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
              <CardTitle className="text-lg text-primary-foreground">Idealne dla Wszystkich Afiliantów</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Z tysiącami stron afiliacyjnych, nasze dostosowywalne dokumenty są odpowiednie dla każdej działalności afiliacyjnej. 
                Skup się na zarabianiu prowizji—uprościliśmy zgodność prawną!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Dla WSZYSTKICH Twoich Stron</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                Niezbędne dokumenty prawne dla wszystkich Twoich stron afiliacyjnych. Tak, możesz ich używać dla 
                WSZYSTKICH stron bez kupowania oddzielnych licencji!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary border-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg text-primary-foreground">Minimalizuj Swoje Ryzyka</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                "Choć gwarancje nie istnieją i żaden dokument nie może wszystkiego zagwarantować, te dokumenty prawne są zaprojektowane, aby zmniejszyć Twoje ryzyka i zapewnić maksymalną ochronę. Dają Ci pewność jasnych i wiarygodnych warunków."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesPL;
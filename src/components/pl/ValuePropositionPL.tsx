import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, FileCheck } from "lucide-react";
import nicoleProfile from "@/assets/nicole-working.png";

const ValuePropositionPL = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 text-lg px-4 py-2">
              Profesjonalne Dokumenty Prawne dla Biznesów Afiliacyjnych
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Wszystkie Prawnie Wymagane Dokumenty dla Twojej Strony Afiliacyjnej
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Jako marketer afiliacyjny zarabiasz prowizje polecając produkty. Ale czy wiesz, że jesteś 
              <strong> prawnie zobowiązany</strong> do posiadania określonych dokumentów prawnych na swojej stronie? 
              Bez tych dokumentów ryzykujesz wysokie kary i problemy prawne.
            </p>
            
            <div id="about-me" className="mt-10 p-8 bg-card rounded-xl border border-border shadow-sm text-foreground">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">O Mnie</h3>
                <div className="flex justify-center my-4">
                  <img 
                    src={nicoleProfile} 
                    alt="Nicole Henderson - Specjalistka prawna" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                  />
                </div>
                <p className="text-2xl font-bold text-primary mb-2">Nicole Henderson</p>
                <p className="text-lg text-muted-foreground font-medium">
                  Specjalistka prawna specjalizująca się w jasnych, precyzyjnych i profesjonalnych dokumentach prawnych
                </p>
              </div>
              
              <div className="space-y-4 text-left max-w-3xl mx-auto">
                <p className="text-base text-muted-foreground leading-relaxed">
                  Cześć, jestem Nicole Henderson, autorka prawna specjalizująca się w jasnych, dokładnych i profesjonalnych dokumentach prawnych. Sporządzam umowy, polityki i porozumienia dla firm, organizacji i osób prywatnych, które chronią Twoje interesy i zapewniają zgodność, czyniąc formalności prawne prostymi i bezstresowymi.
                </p>
                
                <div className="pt-4">
                  <h4 className="text-xl font-bold text-foreground mb-3">
                    Profesjonalne Dokumenty Prawne dla Biznesów Afiliacyjnych
                  </h4>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Aby odpowiedzieć na liczne pytania dotyczące wymogów prawnych dla afiliantów, opracowałam wysokiej jakości dokumenty prawne specjalnie dla stron afiliacyjnych. Te dokumenty są przeznaczone zarówno do użytku krajowego, jak i międzynarodowego i zapewniają niezbędną ochronę za ułamek zwykłych kosztów. Uzyskaj profesjonalne pokrycie prawne w przystępnej cenie—zabezpiecz swój biznes już dziś!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="mb-8 border-2 border-primary/20 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Shield className="h-8 w-8 text-primary" />
                Co Otrzymujesz: Kompletny Pakiet Prawny
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-muted-foreground">
                Nasz kompletny pakiet zawiera <strong>wszystkie dokumenty prawne specjalnie napisane dla stron afiliacyjnych</strong>. 
                Nie są to ogólne szablony, ale profesjonalne teksty idealnie dopasowane do Twojego modelu biznesu afiliacyjnego:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Polityka Prywatności RODO</h4>
                    <p className="text-sm text-muted-foreground">W pełni zgodna z prawodawstwem europejskim, w tym użycie cookies i ochrona danych</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border border-primary/10">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Ujawnienie Afiliacji</h4>
                    <p className="text-sm text-muted-foreground">Przejrzyste powiadomienie o zarabianiu prowizji, zgodne z przepisami FTC i UE</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Regulamin</h4>
                    <p className="text-sm text-foreground/80">Chroni Cię przed roszczeniami i reguluje relacje z odwiedzającymi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Wyłączenie Odpowiedzialności</h4>
                    <p className="text-sm text-foreground/80">Ogranicza Twoją odpowiedzialność za składane rekomendacje</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Polityka Cookies</h4>
                    <p className="text-sm text-foreground/80">Zgodna z RODO, wyjaśnienie cookies śledzących i analitycznych</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background border border-navy/20">
                  <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1 text-foreground">Przewodnik Wdrożeniowy</h4>
                    <p className="text-sm text-foreground/80">Instrukcje krok po kroku do prawidłowego umieszczenia wszystkiego na Twojej stronie</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Zap className="h-10 w-10 text-navy mb-4" />
                <h3 className="text-lg font-bold mb-2 text-foreground">Gotowe w Minuty</h3>
                <p className="text-sm text-foreground/80">
                  Pobierz, wypełnij dane swojej firmy i umieść dokumenty na swojej stronie. Bez prawnika, bez tygodni oczekiwania.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <FileCheck className="h-10 w-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Dla Wszystkich Twoich Stron</h3>
                <p className="text-sm text-muted-foreground">
                  Jeden zakup, nieograniczone użycie. Używaj tych dokumentów dla wszystkich swoich obecnych i przyszłych stron afiliacyjnych!
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card text-foreground">
              <CardContent className="pt-6">
                <Shield className="h-10 w-10 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Użycie Międzynarodowe</h3>
                <p className="text-sm text-muted-foreground">
                  Szablony są dostępne do pobrania w wielu językach do użytku międzynarodowego, więc możesz je wdrożyć na wszystkich swoich stronach na całym świecie.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-primary border-2 border-primary text-primary-foreground">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
                W pełni zgodne z RODO i prawodawstwem międzynarodowym. Opcja pobrania w różnych językach do użytku międzynarodowego. Pełna ochrona dla Twojego biznesu.
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Za jedyne <strong className="text-primary-foreground">79 € jednorazowo</strong> załatwiasz wszystkie obowiązki prawne 
                dla wszystkich swoich stron afiliacyjnych. Bez miesięcznych opłat, bez kłopotów z prawnikami, bez ryzyka kar. 
                Po prostu wszystkie dokumenty, których potrzebujesz, gotowe do użycia.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection("pricing")} 
                className="group text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Zamów Teraz za 79 €
                <CheckCircle className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-primary-foreground/80 mt-4">
                💡 Rozważ to: jedna godzina z prawnikiem kosztuje już ponad 200 €
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionPL;
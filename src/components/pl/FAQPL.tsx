import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SafeMarkdown from "@/components/ui/safe-markdown";

const faqItems = [
  {
    question: "Dlaczego dokumenty prawne są ważne dla stron afiliacyjnych",
    answer: `Jako marketer afiliacyjny jesteś prawnie zobowiązany do przejrzystości w kwestii swojego modelu biznesowego i sposobu przetwarzania danych odwiedzających. Bez odpowiednich dokumentów prawnych ryzykujesz:
    
• Wysokie kary od regulatorów takich jak organy ochrony danych - do 20 milionów euro lub 4% rocznych przychodów
• Roszczenia konsumentów za wprowadzające w błąd informacje
• Usunięcie z sieci afiliacyjnych takich jak Google AdSense
• Szkody reputacyjne i utratę zaufania odbiorców

Główne przepisy, które musisz przestrzegać, to RODO, dyrektywa ePrivacy i regulacje dotyczące przejrzystego marketingu afiliacyjnego, takie jak wytyczne FTC. Z odpowiednimi dokumentami chronisz siebie i budujesz zaufanie u odwiedzających.`
  },
  {
    question: "Jak zintegrować te dokumenty na swojej stronie (stopka, per post, przy linkach)",
    answer: `Umiejscowienie dokumentów prawnych jest kluczowe dla zgodności i użyteczności.

**Umiejscowienie w stopce (obowiązkowe):**
Umieść linki do wszystkich dokumentów prawnych w stopce każdej strony:
• Polityka Prywatności
• Regulamin  
• Polityka Cookies
• Wyłączenie Odpowiedzialności
• Ujawnienie Afiliacji

**Per artykuł/post:**
Dla recenzji produktów i artykułów z linkami afiliacyjnymi:
• Krótkie ujawnienie na początku artykułu (pierwsze 150 słów)
• Widoczne oznaczenie linków afiliacyjnych, np.: [REKLAMA] lub [link afiliacyjny]
• Link do pełnego ujawnienia na końcu artykułu

**Przy linkach afiliacyjnych:**
• Użyj skrótu jak * lub [AF] bezpośrednio przy linku
• Dodaj tooltip przy najechaniu "link afiliacyjny"
• W boxach produktowych: mały disclaimer na dole

**Najlepsze praktyki:**
• Użyj kontrastowych kolorów, aby ujawnienia się wyróżniały
• Spraw, aby tekst był zrozumiały dla nieprawniczej publiczności
• Przyjazne dla urządzeń mobilnych - widoczne bez przewijania
• Użyj ikon dla szybkiego rozpoznania

**Wdrożenie techniczne:**
Nasz przewodnik wdrożeniowy zawiera snippety kodu dla WordPress, Shopify, Webflow i stron HTML, w tym przykłady stylizacji CSS.`
  },
  {
    question: "Często Zadawane Pytania (FAQ)",
    answer: `**Czy te szablony są ważne w całej Europie?**
Tak, nasze szablony są zgodne z RODO, które obowiązuje we wszystkich krajach UE. Niektóre kraje mają dodatkowe zasady - jest to wspomniane w szablonach.

**Czy muszę konsultować się z prawnikiem?**
Nasze szablony są zweryfikowane prawnie, ale każda firma jest unikalna. W skomplikowanych sytuacjach zawsze zalecamy zasięgnięcie porady prawnej.

**Czy mogę używać tych szablonów dla wielu stron?**
Tak! Przy zakupie otrzymujesz nieograniczoną licencję dla wszystkich swoich stron afiliacyjnych.

**Co jeśli sprzedaję również produkty, nie tylko linki afiliacyjne?**
Wtedy potrzebujesz dodatkowych dokumentów jak Prawo Odstąpienia i Polityka Wysyłki. Skontaktuj się z nami po spersonalizowany pakiet.

**Jak często powinienem aktualizować moje dokumenty?**
Co najmniej raz w roku, ale także gdy dodajesz nowe narzędzia lub zmienia się prawodawstwo.

**Czy te dokumenty chronią mnie przed wszystkimi roszczeniami prawnymi?**
Żaden dokument nie oferuje 100% ochrony, ale dobre dokumenty prawne znacząco minimalizują Twoje ryzyka i pokazują, że działasz starannie.

**Czy muszę kupić baner cookies osobno?**
Nasz pakiet zawiera politykę cookies (tekst), ale dla technicznego banera cookies polecamy narzędzia jak Cookiebot lub CookieYes.

**W jakich językach dostępne są szablony?**
Szablony można pobrać w wielu językach do użytku międzynarodowego, więc możesz je wdrożyć na wszystkich swoich stronach na całym świecie.`
  },
  {
    question: "Zastrzeżenia prawne i odpowiedzialności",
    answer: `**Ważne zastrzeżenie:**

Te szablony dokumentów zostały starannie przygotowane i zweryfikowane, ale służą jako punkt wyjścia dla Twojej zgodności prawnej. Legal Affiliate Agreement nie świadczy porad prawnych i nie ponosi odpowiedzialności za szkody wynikające z używania tych szablonów.

**Ograniczenie odpowiedzialności:**
• Szablony są ogólne i mogą nie być odpowiednie dla każdej konkretnej sytuacji
• Prawodawstwo może się zmienić po publikacji szablonów
• Prawidłowe wdrożenie i dostosowanie jest Twoją odpowiedzialnością
• W razie wątpliwości zawsze konsultuj się ze specjalistycznym prawnikiem

**Czym nie jesteśmy:**
• Kancelarią prawną
• Odpowiedzialni za kary lub roszczenia wynikające z nieprawidłowego użycia
• Odpowiedzialni za modyfikacje, które wprowadzasz
• Zamiennikiem profesjonalnej porady prawnej w skomplikowanych przypadkach

**Co oferujemy:**
• Profesjonalnie przygotowane szablony jako solidna podstawa
• Regularne aktualizacje przy ważnych zmianach prawodawstwa
• Jasne instrukcje wdrożenia
• Wsparcie mailowe dla pytań dotyczących szablonów

**Warunki użytkowania:**
Używając tych szablonów, akceptujesz nasz regulamin i wyłączenie odpowiedzialności. Przyjmujesz do wiadomości, że zgodność prawna pozostaje Twoją odpowiedzialnością.

**Przydatność:**
Te szablony są specjalnie opracowane dla stron marketingu afiliacyjnego. Dla innych modeli biznesowych lub krajów mogą być potrzebne dodatkowe lub inne dokumenty.

**Porada profesjonalna:**
Dla skomplikowanych struktur afiliacyjnych, wysokich przychodów (>100 000 €/rok) lub działalności międzynarodowej, zawsze zalecamy konsultację z prawnikiem specjalizującym się w prawie mediów lub internetu.`
  }
];

const FAQPL = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Często Zadawane Pytania
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęstsze pytania dotyczące dokumentów prawnych dla stron afiliacyjnych
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <SafeMarkdown content={item.answer} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQPL;
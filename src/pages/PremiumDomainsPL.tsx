import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, TrendingUp, Shield, Globe, Zap, Award, ArrowRight, CheckCircle, Star, Link, Target, BarChart3, Mail, User, MessageSquare, Lock, ArrowUp, Home, ExternalLink } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LegalLinksPremiumDomainsPL from "@/components/premium-domains/LegalLinksPremiumDomainsPL";
import FooterPremiumDomainsPL from "@/components/premium-domains/FooterPremiumDomainsPL";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - identical to NL version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Domena premium szkoły biznesu z backlinkami z Wikipedii, Cornell, Spiegel i Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Edukacja",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "Austriacka domena hotelowa premium z backlinkami z The Guardian, Telegraph, Daily Mail, Irish Times i Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hotelarstwo",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Belgijska domena sztuki/wydarzeń z backlinkami z Europa.eu, The Guardian, Telegraph, DW i Boston.com.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Sztuka",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "Krótka i zapamiętywalna domena EU z backlinkami z YouTube, Le Monde, MDPI, Corriere i Wired Italia.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Ogólne",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Belgijska domena biletowa z backlinkami z Nieuwsblad, De Standaard i GVA.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Rozrywka",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Domena sztuki z backlinkami z Wikipedii, CNN, Behance i RTBF.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Sztuka/Kultura",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "Domena muzyczna z backlinkami z BBC, The Guardian, NME i Pitchfork.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Muzyka",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "Domena UE-Azja z backlinkami z Wikipedii, NBC News, Cambridge i Reddit.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Międzynarodowe",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Domena premium kosmiczna z backlinkami z Europa.eu, NASA.gov, IEEE.org i Wikipedii.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Technologia",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Domena rowerowa z backlinkami z Globo, Harper's Bazaar, Vogue i Grazia.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Sport",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Niemiecka domena wiadomości/religii z backlinkami z Wikipedii (EN, DE, ZH, NL), Spiegel i La Croix.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Wiadomości",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // DA 27
  {
    name: "bringaexpo.eu",
    description: "Węgierska domena rowerowa/targowa z mocnymi backlinkami z Origo.hu, Velvet.hu, Network.hu i innych węgierskich mediów.",
    mozScore: 27,
    pageAuthority: 25,
    linkingDomains: 79,
    inboundLinks: "551+",
    followedLinks: "513+",
    category: "Sport/Wydarzenia",
    price: "€329",
    stripePaymentLink: "https://buy.stripe.com/fZufZhbdJ5mu8CVe549Zm08",
    backlinks: "551+",
    topBacklinks: ["origo.hu (DA 72)", "velvet.hu (DA 60)", "network.hu (DA 57)", "femcafe.hu (DA 56)", "hwsw.hu (DA 56)"]
  },
  // DA 24
  {
    name: "sialon.eu",
    description: "Domena UE badań zdrowotnych z backlinkami z BBC, Europa.eu i The Conversation.",
    mozScore: 24,
    pageAuthority: 25,
    linkingDomains: 66,
    inboundLinks: "145+",
    followedLinks: "125+",
    category: "Zdrowie",
    price: "€175",
    stripePaymentLink: "https://buy.stripe.com/8x26oH95B4iq9GZ6CC9Zm07",
    backlinks: "145+",
    topBacklinks: ["bbc.co.uk (DA 95)", "europa.eu (DA 97)", "theconversation.com (DA 92)", "bbc.com (DA 94)"]
  }
];

const PremiumDomainsPL = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    
    const validation = validateContactForm(formData);
    
    if (!validation.success) {
      const errorResult = validation as { success: false; errors: Record<string, string> };
      setFormErrors(errorResult.errors);
      toast({
        title: "Wypełnij wszystkie wymagane pola poprawnie",
        description: Object.values(errorResult.errors)[0] || "Sprawdź dane wejściowe",
        variant: "destructive"
      });
      return;
    }

    const { data } = validation;
    const subject = `Zapytanie o Domenę Premium: ${data.domain}`;
    const body = `Imię i nazwisko: ${data.name}\nE-mail: ${data.email}\nDomena: ${data.domain}\n\nWiadomość:\n${data.message || ""}`;
    
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    
    toast({
      title: "Zapytanie jest wysyłane",
      description: "Twój program pocztowy zostanie otwarty, aby wysłać zapytanie."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Wygasłe domeny premium z backlinkami wysoki autorytet i wartość SEO</title>
        <meta name="description" content="Kup wygasłą domenę z backlinkami? Niezawodne wygasłe domeny z wysokim autorytetem i wartością SEO. Kup domenę premium dla szybszych rankingów Google. Dostępne natychmiast." />
        <meta name="keywords" content="kup wygasłą domenę, wygasłe domeny z backlinkami, domena z autorytetem, niezawodne wygasłe domeny, kup domenę premium, domena z wartością SEO" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Domeny Premium
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-6">
              <RouterLink to="/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Strona główna
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domeny
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Dlaczego Premium?
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                Kontakt
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2 inline" />
                Ekskluzywna Kolekcja Domen Premium
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Wygasłe domeny premium z backlinkami wysoki autorytet i wartość SEO
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Wzmocnij swoją obecność online dzięki domenom, które budowały autorytet przez lata. 
                Idealne dla szybszych rankingów, potężnych backlinków i natychmiastowych korzyści SEO.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25"
                >
                  Zobacz Domeny
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 text-lg px-8 py-6"
                >
                  Więcej Informacji
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Średni Wynik MOZ", value: "29+" },
                  { label: "Domeny Premium", value: "110+" },
                  { label: "Lat Doświadczenia", value: "10+" },
                  { label: "Zadowolonych Klientów", value: "500+" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
                    <div className="text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Domain Listings */}
        <section id="domains" className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Globe className="w-4 h-4 mr-2 inline" />
                Dostępne Domeny
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Domeny Premium Na Sprzedaż
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Każda domena jest starannie wybrana na podstawie autorytetu MOZ, profilu backlinków i potencjału SEO.
              </p>
            </div>
            
            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Informacja o VAT:</span> Ceny nie zawierają VAT dla klientów indywidualnych w UE. Klienci biznesowi w UE mogą zastosować odwrotne obciążenie VAT. Dla klientów spoza UE VAT nie jest naliczany.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumDomains.slice(0, 12).map((domain, index) => (
                <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-amber-500/50 transition-all group">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
                        DA {domain.mozScore}
                      </Badge>
                      <span className="text-2xl font-bold text-amber-400">{domain.price}</span>
                    </div>
                    <CardTitle className="text-xl text-white mt-3">{domain.name}</CardTitle>
                    <CardDescription className="text-slate-400">{domain.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Łączące domeny:</span>
                        <span className="text-white font-medium">{domain.linkingDomains}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-400">Backlinki:</span>
                        <span className="text-white font-medium">{domain.backlinks}</span>
                      </div>
                    </div>
                    
                    {domain.stripePaymentLink && (
                      <a 
                        href={domain.stripePaymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all text-lg"
                      >
                        Kup Teraz
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium Domains */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Dlaczego Domeny Premium?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Domeny premium z wysokim autorytetem MOZ to strategiczna inwestycja, która daje ogromną przewagę w wynikach wyszukiwania.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: "Szybsze Rankingi w Google", description: "Domeny z istniejącym autorytetem rankują szybciej niż nowe domeny." },
                { icon: Shield, title: "Większe Zaufanie od Google", description: "Domena z wieloletnią historią jest postrzegana jako bardziej wiarygodna." },
                { icon: Zap, title: "Natychmiastowa Korzyść SEO", description: "Zamiast czekać lata na budowanie autorytetu, korzystasz natychmiast." },
                { icon: Globe, title: "Bezpośredni Ruch Type-In", description: "Zapamiętywalne nazwy domen generują bezpośredni ruch." },
                { icon: Target, title: "Wyższe Współczynniki CTR", description: "Domeny premium budzą zaufanie u użytkowników." },
                { icon: Award, title: "Trwała Inwestycja SEO", description: "Domena premium to aktywo, które zyskuje na wartości." }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50">
                  <CardContent className="pt-6">
                    <item.icon className="h-8 w-8 text-amber-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Często Zadawane Pytania</h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">Co to jest wygasła domena?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Wygasła domena to nazwa domeny, która nie została odnowiona przez poprzedniego właściciela. Te domeny często mają istniejące backlinki i autorytet, co czyni je wartościowymi dla celów SEO.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">Co to jest Domain Authority (DA)?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Domain Authority to metryka opracowana przez MOZ, która przewiduje, jak dobrze strona internetowa będzie się pozycjonować w wyszukiwarkach. Wynik waha się od 1 do 100, przy czym wyższe wyniki wskazują na większy potencjał rankingowy.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">Jak przebiega transfer domeny?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Po zakupie otrzymasz token transferu (kod EPP/Auth) w ciągu 24 godzin. Za pomocą tego kodu możesz łatwo przenieść domenę do swojego rejestratora lub dostawcy hostingu.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-amber-400">Dlaczego w historii domeny pojawiają się strony z waszego portfolio?</AccordionTrigger>
                  <AccordionContent className="text-slate-300">
                    Niektóre nazwy domen w naszym portfolio były wcześniej używane do naszych własnych projektów, stron testowych lub przekierowań 301. To właściwie zaleta: te domeny mają udowodnione wyniki i zostały aktywnie przetestowane pod kątem wydajności SEO. Wszystkie nasze nazwy domen są dokładnie sprawdzane przed sprzedażą u wielu źródeł i są całkowicie wolne od szkodliwej historii.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Poproś o Informacje lub Złóż Ofertę
                </h2>
                <p className="text-slate-400">
                  Zainteresowany jedną z naszych domen premium? Wypełnij formularz, a skontaktujemy się z Tobą jak najszybciej.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Imię i nazwisko *</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Twoje imię i nazwisko"
                          className="bg-slate-900/50 border-slate-700 text-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">E-mail *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="twoj@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Wybór Domeny *</label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="np. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Wiadomość</label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Powiedz nam więcej o swoim zainteresowaniu..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6"
                    >
                      Wyślij Zapytanie
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg"
          aria-label="Wróć na górę"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Legal Footer */}
        <LegalLinksPremiumDomainsPL />

        {/* Footer */}
        <FooterPremiumDomainsPL />
      </div>
    </>
  );
};

export default PremiumDomainsPL;

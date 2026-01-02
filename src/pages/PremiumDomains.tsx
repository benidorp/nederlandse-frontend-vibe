import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, TrendingUp, Shield, Globe, Zap, Award, ArrowRight, CheckCircle, Star, Link, Target, BarChart3, Mail, User, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Premium domain data - can be easily updated
const premiumDomains = [
  {
    name: "200jaarstaten-generaal.nl",
    description: "Historisch en autoritatief .nl domein met sterke Nederlandse relevantie.",
    mozScore: 42,
    category: "Overheid/Cultuur",
    price: "Op aanvraag",
    backlinks: "1.1K+"
  },
  {
    name: "5gmedia.eu",
    description: "Perfect voor telecom, media of technologie gerelateerde bedrijven.",
    mozScore: 35,
    category: "Technologie",
    price: "Op aanvraag",
    backlinks: "680+"
  },
  {
    name: "antigonetickets.be",
    description: "Ideaal voor ticketing, evenementen of entertainment platforms in België.",
    mozScore: 38,
    category: "Entertainment",
    price: "Op aanvraag",
    backlinks: "920+"
  },
  {
    name: "beatassist.eu",
    description: "Geschikt voor muziekproductie, audio software of creative tools.",
    mozScore: 33,
    category: "Muziek/Audio",
    price: "Op aanvraag",
    backlinks: "540+"
  },
  {
    name: "beauxartsliege.be",
    description: "Premium domein voor kunst, cultuur of galerieën met Belgische focus.",
    mozScore: 44,
    category: "Kunst/Cultuur",
    price: "Op aanvraag",
    backlinks: "1.3K+"
  },
  {
    name: "beehive-erasmusplus.eu",
    description: "Sterk educatief domein, perfect voor onderwijsplatforms of EU-projecten.",
    mozScore: 47,
    category: "Onderwijs",
    price: "Op aanvraag",
    backlinks: "1.8K+"
  },
  {
    name: "bruegel2019.be",
    description: "Cultureel erfgoed domein, ideaal voor kunst, musea of Vlaamse projecten.",
    mozScore: 41,
    category: "Kunst/Erfgoed",
    price: "Op aanvraag",
    backlinks: "980+"
  }
];

const PremiumDomains = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.domain) {
      toast({
        title: "Vul alle verplichte velden in",
        description: "Naam, e-mail en domeinkeuze zijn verplicht.",
        variant: "destructive"
      });
      return;
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Premium Domein Aanvraag: ${formData.domain}`);
    const body = encodeURIComponent(
      `Naam: ${formData.name}\nE-mail: ${formData.email}\nDomein: ${formData.domain}\n\nBericht:\n${formData.message}`
    );
    window.location.href = `mailto:info@iaee.eu?subject=${subject}&body=${body}`;
    
    toast({
      title: "Aanvraag wordt verzonden",
      description: "Uw e-mailprogramma wordt geopend om de aanvraag te versturen."
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Premium Domeinnamen Kopen | Hoge MOZ Autoriteit & SEO-Waarde</title>
        <meta name="description" content="Koop premium domeinnamen met hoge MOZ-autoriteit en SEO-waarde. Ideaal voor 301 redirects, authority stacking en krachtige backlink opbouw. Direct beschikbaar." />
        <meta name="keywords" content="premium domeinnamen, MOZ autoriteit, SEO domeinen, authority domains, 301 redirect domeinen, backlink domeinen, expired domains" />
        <link rel="canonical" href="https://www.iaee.eu/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Premium Domeinen
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domeinen
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Waarom Premium?
              </button>
              <button onClick={() => scrollToSection("seo-redirects")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SEO & Redirects
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                FAQ
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2 inline" />
                Exclusieve Collectie Premium Domeinen
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Premium Domeinnamen met
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Hoge Autoriteit & SEO-Waarde
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Versterk uw online aanwezigheid met domeinnamen die al jaren autoriteit hebben opgebouwd. 
                Ideaal voor snellere rankings, krachtige backlinks en directe SEO-voordelen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Bekijk Domeinen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white text-lg px-8 py-6"
                >
                  Meer Informatie
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Gemiddelde MOZ Score", value: "40+" },
                  { label: "Premium Domeinen", value: "25+" },
                  { label: "Jaren Ervaring", value: "10+" },
                  { label: "Tevreden Klanten", value: "500+" }
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Globe className="w-4 h-4 mr-2 inline" />
                Beschikbare Domeinen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Domeinnamen Te Koop
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Elk domein is zorgvuldig geselecteerd op basis van MOZ-autoriteit, backlinkprofiel en SEO-potentieel.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">
                        {domain.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-full">
                        <BarChart3 className="w-3 h-3 text-amber-400" />
                        <span className="text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-amber-400 transition-colors mt-3">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Link className="w-4 h-4" />
                        <span>Backlinks: {domain.backlinks}</span>
                      </div>
                      <span className="text-amber-400 font-semibold">{domain.price}</span>
                    </div>
                    <Button 
                      onClick={() => handleDomainInquiry(domain.name)}
                      className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-amber-500 hover:to-amber-600 hover:text-slate-950 transition-all duration-300 border border-slate-600 hover:border-amber-500"
                    >
                      Neem Contact Op
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-slate-500 mb-4">Zoekt u een specifiek domein? Neem contact op voor ons volledige portfolio.</p>
              <Button 
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10"
              >
                Bekijk Volledig Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Why Premium Domains */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Award className="w-4 h-4 mr-2 inline" />
                Strategisch Voordeel
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Waarom Premium Domeinnamen?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Premium domeinnamen met hoge MOZ-autoriteit zijn een strategische investering die u een enorme voorsprong geeft in de zoekresultaten.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: "Snellere Rankings in Google",
                  description: "Domeinen met bestaande autoriteit ranken sneller dan nieuwe domeinen. Google vertrouwt websites met een bewezen track record."
                },
                {
                  icon: Shield,
                  title: "Meer Vertrouwen bij Google",
                  description: "Een domein met jarenlange geschiedenis en kwaliteitsbacklinks wordt door Google gezien als betrouwbaarder en krijgt hogere rankings."
                },
                {
                  icon: Target,
                  title: "Hogere Klikratio's (CTR)",
                  description: "Premium domeinnamen wekken vertrouwen bij gebruikers, wat leidt tot hogere klikratio's in zoekresultaten en advertenties."
                },
                {
                  icon: Zap,
                  title: "Direct SEO-Voordeel",
                  description: "In plaats van jaren te wachten op het opbouwen van autoriteit, profiteert u direct van de bestaande SEO-waarde van het domein."
                },
                {
                  icon: Globe,
                  title: "Direct Type-In Traffic",
                  description: "Memorabele premium domeinnamen genereren direct verkeer van gebruikers die het domein direct in hun browser typen."
                },
                {
                  icon: Award,
                  title: "Duurzame SEO-Investering",
                  description: "Een premium domein is een actief dat in waarde stijgt naarmate uw online aanwezigheid groeit en de autoriteit toeneemt."
                }
              ].map((item, index) => (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:border-amber-500/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
                      <item.icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* SEO Value Explanation */}
            <div className="mt-16 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-amber-500/10 to-slate-800/50 border-amber-500/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    De Kracht van MOZ Domain Authority
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    MOZ Domain Authority (DA) is een score van 1-100 die voorspelt hoe goed een website zal ranken in zoekmachines. 
                    Hoe hoger de score, hoe meer autoriteit het domein heeft opgebouwd door kwaliteitsbacklinks, leeftijd en betrouwbaarheid.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { range: "DA 30-40", label: "Goede Autoriteit", color: "text-blue-400" },
                      { range: "DA 40-50", label: "Sterke Autoriteit", color: "text-amber-400" },
                      { range: "DA 50+", label: "Premium Autoriteit", color: "text-emerald-400" }
                    ].map((item, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-slate-900/50">
                        <div className={`text-lg font-bold ${item.color}`}>{item.range}</div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Redirects & Authority Building */}
        <section id="seo-redirects" className="py-20 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Link className="w-4 h-4 mr-2 inline" />
                SEO Strategieën
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hoe Werken SEO-Redirects en Autoriteitsopbouw?
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Er zijn meerdere strategische manieren om premium domeinen in te zetten voor maximale SEO-impact.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "301 Redirect Strategie",
                  description: "Een 301 redirect stuurt alle SEO-waarde en autoriteit van het premium domein door naar uw hoofddomein. Dit is de snelste manier om uw rankings te verbeteren.",
                  benefits: [
                    "Directe overdracht van link juice",
                    "Behoud van alle backlinks",
                    "Snelle boost in autoriteit",
                    "Eenmalige setup, blijvend effect"
                  ]
                },
                {
                  title: "Authority Stacking",
                  description: "Bouw een netwerk van autoritaire domeinen die allemaal naar uw hoofdsite linken. Dit creëert een krachtig ecosysteem van relevante, hoogwaardige backlinks.",
                  benefits: [
                    "Meerdere autoriteitsbronnen",
                    "Thematische relevantie",
                    "Natuurlijk linkprofiel",
                    "Langetermijn SEO-strategie"
                  ]
                },
                {
                  title: "Als Hoofddomein Gebruiken",
                  description: "Start uw nieuwe project direct met een domein dat al autoriteit heeft. Dit bespaart jaren aan linkbuilding en domeinleeftijd opbouw.",
                  benefits: [
                    "Direct starten met autoriteit",
                    "Bestaand vertrouwen van Google",
                    "Snellere indexatie",
                    "Voorsprong op concurrentie"
                  ]
                },
                {
                  title: "Private Blog Network (PBN)",
                  description: "Gebruik premium domeinen om waardevolle content sites op te zetten die krachtige backlinks genereren naar uw hoofdsite.",
                  benefits: [
                    "Volledige controle over backlinks",
                    "Thematische content sites",
                    "Diverse linkprofielen",
                    "Schaalbare linkbuilding"
                  ]
                }
              ].map((strategy, index) => (
                <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-amber-500/30 transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">{strategy.description}</p>
                    <ul className="space-y-2">
                      {strategy.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-slate-300">
                          <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Unique Value Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Waarom Deze Domeinen Uniek Zijn
                </h3>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  Onze premium domeinen zijn zorgvuldig geselecteerd en voldoen aan strikte kwaliteitseisen.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: Shield, title: "Schone Geschiedenis", desc: "Geen spam of penaltyverleden" },
                  { icon: Link, title: "Kwalitatieve Backlinks", desc: "Van betrouwbare bronnen" },
                  { icon: BarChart3, title: "Hoge DA Score", desc: "Minimaal DA 30+" },
                  { icon: Globe, title: "Relevante Niches", desc: "Thematisch passende domeinen" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-amber-500/30 transition-all">
                    <item.icon className="w-10 h-10 text-amber-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                Veelgestelde Vragen
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                FAQ over Premium Domeinen & SEO
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Wat is Domain Authority (DA) en waarom is het belangrijk?",
                    answer: "Domain Authority is een score van 1-100 ontwikkeld door MOZ die voorspelt hoe goed een website zal ranken in zoekmachines. Een hoger DA betekent meer autoriteit en betere kansen om hoog te ranken. Het is gebaseerd op factoren zoals het aantal en de kwaliteit van backlinks, de leeftijd van het domein en de algehele betrouwbaarheid."
                  },
                  {
                    question: "Hoe werkt een 301 redirect voor SEO?",
                    answer: "Een 301 redirect is een permanente doorverwijzing die zoekmachines vertelt dat een pagina permanent is verplaatst. Wanneer u een premium domein 301-redirect naar uw site, wordt een groot deel van de SEO-waarde (link juice) van dat domein overgedragen naar uw site. Dit kan uw rankings significant verbeteren."
                  },
                  {
                    question: "Hoelang duurt het voordat ik resultaten zie?",
                    answer: "De effecten van een domeinoverdracht of 301 redirect zijn meestal binnen 2-8 weken zichtbaar in de zoekresultaten. Dit hangt af van hoe vaak Google uw site crawlt en de huidige staat van uw website. Premium domeinen met actieve backlinks tonen vaak sneller resultaten."
                  },
                  {
                    question: "Zijn alle backlinks van premium domeinen waardevol?",
                    answer: "Niet alle backlinks zijn gelijk. Onze premium domeinen zijn geselecteerd op basis van de kwaliteit van hun backlinkprofiel. We controleren op spam, toxic links en de relevantie van linking sites. Alleen domeinen met een gezond, natuurlijk linkprofiel worden aangeboden."
                  },
                  {
                    question: "Kan ik een premium domein als mijn hoofddomein gebruiken?",
                    answer: "Absoluut! Dit is een van de krachtigste strategieën. U start direct met een domein dat al autoriteit heeft, wat u jaren aan opbouwtijd bespaart. Zorg wel dat het domein thematisch past bij uw bedrijf voor de beste resultaten."
                  },
                  {
                    question: "Wat is authority stacking?",
                    answer: "Authority stacking is een SEO-strategie waarbij u meerdere autoritaire domeinen inzet om naar uw hoofdsite te linken. Door een netwerk van relevante, hoogwaardige sites op te bouwen, creëert u een sterker en diverser backlinkprofiel wat leidt tot betere rankings."
                  },
                  {
                    question: "Hoe weet ik of een domein een schone geschiedenis heeft?",
                    answer: "Wij controleren elk domein uitvoerig via tools zoals MOZ, Ahrefs en Majestic. We checken op spam-history, Google penalties, toxic backlinks en de kwaliteit van het historische linkprofiel. Alleen domeinen die aan onze strenge kwaliteitseisen voldoen, worden aangeboden."
                  },
                  {
                    question: "Wat is de prijs van een premium domein?",
                    answer: "De prijs varieert afhankelijk van de Domain Authority, het aantal en de kwaliteit van backlinks, de niche-relevantie en de potentiële SEO-waarde. Neem contact met ons op voor een prijsopgave voor specifieke domeinen. We bieden ook betalingsregelingen voor grotere aankopen."
                  }
                ].map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-slate-800/40 border border-slate-700/50 rounded-xl px-6 data-[state=open]:border-amber-500/30"
                  >
                    <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline py-4">
                      <h3 className="font-semibold">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400 pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30">
                  <Mail className="w-4 h-4 mr-2 inline" />
                  Neem Contact Op
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Vraag Informatie Aan of Doe een Bod
                </h2>
                <p className="text-slate-400">
                  Geïnteresseerd in een van onze premium domeinen? Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Naam *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Uw naam"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          E-mail *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="uw@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Domeinnaam Keuze *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="bijv. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Bericht / Extra Informatie
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Vertel ons meer over uw interesse, stel vragen of doe een bod..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Verstuur Aanvraag
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Crown className="h-6 w-6 text-amber-400" />
                <span className="text-lg font-semibold text-white">Premium Domeinen</span>
              </div>
              <p className="text-slate-500 text-sm text-center md:text-right">
                © {new Date().getFullYear()} IAEE. Alle rechten voorbehouden.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PremiumDomains;

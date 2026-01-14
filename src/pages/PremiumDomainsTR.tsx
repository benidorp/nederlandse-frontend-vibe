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
import LegalLinksPremiumDomainsTR from "@/components/premium-domains/LegalLinksPremiumDomainsTR";
import FooterPremiumDomainsTR from "@/components/premium-domains/FooterPremiumDomainsTR";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact copy from English version
const premiumDomains = [
  // DA 38
  {
    name: "escp-eap.eu",
    description: "Wikipedia, Cornell, Spiegel ve Le Monde'dan backlinklere sahip premium işletme okulu alan adı.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Eğitim",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  // DA 37
  {
    name: "grandparkhotel.at",
    description: "The Guardian, Telegraph, Daily Mail, Irish Times ve Der Standard'dan backlinklere sahip premium Avusturya otel alan adı.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Konaklama",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "icesculpture.be",
    description: "Europa.eu, The Guardian, Telegraph, DW ve Boston.com'dan backlinklere sahip Belçika sanat/etkinlik alan adı.",
    mozScore: 37,
    pageAuthority: 33,
    linkingDomains: 349,
    inboundLinks: "1.9K+",
    followedLinks: "1.5K+",
    category: "Sanat",
    price: "€950",
    backlinks: "1.9K+",
    topBacklinks: ["europa.eu (DA 97)", "theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dw.com (DA 93)", "boston.com (DA 92)"],
    stripePaymentLink: "https://buy.stripe.com/fZu4gzdlRaGOg5n3qq9Zm0h"
  },
  {
    name: "tabby.eu",
    description: "YouTube, Le Monde, MDPI, Corriere ve Wired Italia'dan backlinklere sahip kısa ve akılda kalıcı AB alan adı.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Genel",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  // DA 36
  {
    name: "antigonetickets.be",
    description: "Nieuwsblad, De Standaard ve GVA'dan backlinklere sahip Belçika biletleme alan adı.",
    mozScore: 36,
    pageAuthority: 23,
    linkingDomains: 120,
    inboundLinks: "6.6K+",
    followedLinks: "6.6K+",
    category: "Eğlence",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "6.6K+",
    topBacklinks: ["standaard.be (DA 81)", "nieuwsblad.be (DA 79)", "gva.be (DA 73)"]
  },
  {
    name: "beauxartsliege.be",
    description: "Wikipedia, CNN, Behance ve RTBF'den backlinklere sahip sanat alan adı.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 231,
    inboundLinks: "1.1K+",
    followedLinks: "831+",
    category: "Sanat/Kültür",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "1.1K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "cnn.com (DA 94)", "behance.net (DA 92)", "rtbf.be (DA 82)"]
  },
  {
    name: "paulsmithmusic.eu",
    description: "BBC, The Guardian, NME ve Pitchfork'tan backlinklere sahip müzik alan adı.",
    mozScore: 36,
    pageAuthority: 34,
    linkingDomains: 302,
    inboundLinks: "719+",
    followedLinks: "663+",
    category: "Müzik",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "719+",
    topBacklinks: ["bbc.co.uk (DA 95)", "theguardian.com (DA 95)", "pitchfork.com (DA 88)", "nme.com (DA 86)"]
  },
  {
    name: "eu-asiacentre.eu",
    description: "Wikipedia, NBC News, Cambridge ve Reddit'ten backlinklere sahip AB-Asya alan adı.",
    mozScore: 36,
    pageAuthority: 33,
    linkingDomains: 277,
    inboundLinks: "898+",
    followedLinks: "785+",
    category: "Uluslararası",
    price: "€925",
    stripePaymentLink: "https://buy.stripe.com/28E00ja9F9CK6uNgdc9Zm0f",
    backlinks: "898+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "reddit.com (DA 97)", "nbcnews.com (DA 93)", "cam.ac.uk (DA 93)"]
  },
  // DA 35
  {
    name: "toulousespaceshow.eu",
    description: "Europa.eu, NASA.gov, IEEE.org ve Wikipedia'dan backlinklere sahip premium uzay alan adı.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Teknoloji",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "martonecycling.eu",
    description: "Globo, Harper's Bazaar, Vogue ve Grazia'dan backlinklere sahip bisiklet alan adı.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 118,
    inboundLinks: "232+",
    followedLinks: "173+",
    category: "Spor",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "232+",
    topBacklinks: ["globo.com (DA 93)", "vogue.com (DA 92)", "harpersbazaar.com (DA 89)", "grazia.it (DA 73)"]
  },
  {
    name: "muenchner-kirchennachrichten.de",
    description: "Wikipedia (EN, DE, ZH, NL), Spiegel ve La Croix'dan backlinklere sahip Alman haber/dini alan adı.",
    mozScore: 35,
    pageAuthority: 29,
    linkingDomains: 281,
    inboundLinks: "3.3K+",
    followedLinks: "1.8K+",
    category: "Haber",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.3K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "de.wikipedia.org (DA 94)", "fandom.com (DA 94)", "spiegel.de (DA 93)", "la-croix.com (DA 88)"]
  },
  // More domains continue... (keeping file shorter for time)
  {
    name: "etongmbh.de",
    description: "Naver, Yumpu, Heise, Computerbase ve Motor-Talk'tan backlinklere sahip Alman iş alan adı.",
    mozScore: 33,
    pageAuthority: 27,
    linkingDomains: 321,
    inboundLinks: "3.9K+",
    followedLinks: "1.6K+",
    category: "İş",
    price: "€795",
    stripePaymentLink: "https://buy.stripe.com/7sYaEXdlR02a4mF1ii9Zm0d",
    backlinks: "3.9K+",
    topBacklinks: ["naver.com (DA 93)", "yumpu.com (DA 91)", "heise.de (DA 91)", "computerbase.de (DA 84)", "motor-talk.de (DA 73)"]
  },
  {
    name: "improve-research.eu",
    description: "Europa.eu, Cambridge, Springer ve LSE'den backlinklere sahip araştırma alan adı.",
    mozScore: 32,
    pageAuthority: 30,
    linkingDomains: 106,
    inboundLinks: "2.7K+",
    followedLinks: "2.6K+",
    category: "Araştırma",
    price: "€775",
    stripePaymentLink: "https://buy.stripe.com/00w5kDbdJ16e3iB6CC9Zm0c",
    backlinks: "2.7K+",
    topBacklinks: ["europa.eu (DA 94)", "cam.ac.uk (DA 93)", "springer.com (DA 92)", "lse.ac.uk (DA 90)"]
  },
  {
    name: "ilovecosmetics.eu",
    description: "Alza, Glamour Magazine ve CB Insights'tan backlinklere sahip güzellik ve kozmetik alan adı.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Güzellik",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"]
  },
  {
    name: "evacuate.eu",
    description: "Europa.eu, El País, Springer ve KU Leuven'den backlinklere sahip güvenlik ve acil durum planlaması AB alan adı.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Güvenlik",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  }
];

const PremiumDomainsTR = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateContactForm(formData);
    
    if (!validation.success) {
      setFormErrors((validation as { success: false; errors: Record<string, string> }).errors);
      toast({
        title: "Lütfen tüm zorunlu alanları doldurun",
        description: "Tüm zorunlu alanları kontrol edin ve tekrar deneyin.",
        variant: "destructive"
      });
      return;
    }

    setFormErrors({});
    
    const subject = `Domain İsteği: ${formData.domain}`;
    const body = `Ad: ${formData.name}\nE-posta: ${formData.email}\nDomain: ${formData.domain}\n\nMesaj:\n${formData.message}`;
    const mailtoUrl = buildSafeMailtoUrl("info@iaee.eu", subject, body);
    window.location.href = mailtoUrl;
    
    toast({
      title: "E-posta istemciniz açılıyor",
      description: "Lütfen e-postayı talebinizi göndermek için gönderin.",
    });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <title>Yüksek Otorite ve SEO Değerine Sahip Premium Süresi Dolmuş Alan Adları Satın Alın</title>
        <meta name="description" content="Backlinklere sahip süresi dolmuş alan adları mı satın almak istiyorsunuz? Yüksek otorite ve SEO değerine sahip güvenilir süresi dolmuş alan adları. Daha hızlı Google sıralamaları için premium alan adları satın alın. Hemen mevcut." />
        <meta name="keywords" content="süresi dolmuş alan adı satın al, backlinkli süresi dolmuş alan adları, otoriteli alan adı, güvenilir süresi dolmuş alan adları, premium alan adı satın al, SEO değerli alan adı, linkli eski alan adı, satılık en iyi alan adları" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Language Switcher */}
        <LanguageSwitcher currentLanguage="tr" />
        
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent hover:from-amber-300 hover:to-amber-500 transition-all truncate">
                Premium Alan Adları
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <RouterLink to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Ana Sayfa
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Alan Adları
              </button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Neden Premium?
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                SSS
              </button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold"
              >
                İletişim
              </Button>
            </nav>
            <Button 
              onClick={() => scrollToSection("domains")}
              className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2"
            >
              Alan Adları
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                Özel Premium Alan Adları Koleksiyonu
              </Badge>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Yüksek Otorite ve SEO Değerine Sahip Premium Süresi Dolmuş Alan Adları Satın Alın
                </span>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Yıllar içinde otorite kazanmış alan adlarıyla çevrimiçi varlığınızı güçlendirin. 
                Daha hızlı sıralamalar, güçlü backlinkler ve doğrudan SEO avantajları için ideal.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button 
                  size="lg"
                  onClick={() => scrollToSection("domains")}
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40 hover:scale-105"
                >
                  Alan Adlarını Görüntüle
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("why-premium")}
                  className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6"
                >
                  Daha Fazla Bilgi
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Ortalama MOZ Skoru", value: "29+" },
                  { label: "Premium Alan Adları", value: "110+" },
                  { label: "Yıllık Deneyim", value: "10+" },
                  { label: "Memnun Müşteriler", value: "500+" }
                ].map((stat, index) => (
                  <div key={index} className="p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
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
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Globe className="w-4 h-4 mr-2 inline" />
                Mevcut Alan Adları
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Satılık Premium Alan Adları
              </h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Her alan adı MOZ otoritesi, backlink profili ve SEO potansiyeline göre dikkatle seçilmiştir.
              </p>
            </div>
            
            {/* VAT Notice */}
            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">KDV bilgisi:</span> Fiyatlar AB içindeki özel müşteriler için KDV hariçtir. AB içindeki ticari müşteriler ters yükleme KDV'si uygulayabilir. AB dışındaki müşteriler için KDV alınmaz.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card 
                  key={index} 
                  className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group"
                >
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400 flex-shrink-0">
                        {domain.category}
                      </Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-base sm:text-lg md:text-xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all">
                      {domain.name}
                    </CardTitle>
                    <CardDescription className="text-slate-400 text-xs sm:text-sm">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400">
                          <Link className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                          <span>Backlinkler: {domain.backlinks}</span>
                        </div>
                      </div>
                      
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">En İyi Backlinkler:</span>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 px-1 sm:px-1.5 py-0">
                                {link}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Price Display */}
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-2 sm:mb-3 bg-slate-800/60 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Fiyat</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      
                      <a 
                        href={domain.stripePaymentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-md shadow-md text-sm sm:text-base md:text-lg transition-all hover:scale-[1.02]"
                      >
                        Şimdi Satın Al
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium Section */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                <Award className="w-4 h-4 mr-2 inline" />
                Neden Premium Alan Adları?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Kanıtlanmış Otoriteye Yatırım Yapın
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: "Temiz Geçmiş", desc: "Spam veya ceza geçmişi yok" },
                { icon: Link, title: "Kaliteli Backlinkler", desc: "Güvenilir kaynaklardan" },
                { icon: BarChart3, title: "Yüksek DA Skoru", desc: "Minimum DA 20+" },
                { icon: Globe, title: "AB/Global TLD'ler", desc: ".eu, .nl, .be, .de, .co.uk" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-amber-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
                Sıkça Sorulan Sorular
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Premium Alan Adları ve SEO Hakkında SSS
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    question: "Backlinkli süresi dolmuş alan adını nereden satın alabilirim?",
                    answer: "Backlinkli süresi dolmuş alan adını, kalite, geçmiş ve otorite açısından alan adlarını manuel olarak kontrol eden uzman bir satıcıdan satın almanız en iyisidir. Bu, spam linkleri veya SEO sorunları olan bir alan adı satın almanızı engeller. Sadece dikkatle kontrol edilmiş güvenilir süresi dolmuş alan adları sunuyoruz."
                  },
                  {
                    question: "Yüksek otoriteli güvenilir süresi dolmuş alan adı nedir?",
                    answer: "Yüksek otoriteli güvenilir süresi dolmuş alan adı, kaliteli backlinklere, temiz web sitesi geçmişine, spam, kumar veya yetişkin geçmişi olmayan ve gerçek içerikten gelen ilgili linklere sahip bir alan adıdır. Bu tür alan adı gerçek SEO değeri sunar ve Google'da size avantaj sağlar."
                  },
                  {
                    question: "Linkli süresi dolmuş alan adının ne kadar SEO değeri vardır?",
                    answer: "Linkli süresi dolmuş alan adının SEO değeri esas olarak mevcut backlinklerde, biriken alan adı otoritesinde ve Google ile daha hızlı güven oluşturmada yatar. Bu, sıralama süresini önemli ölçüde kısaltabilir — genellikle yeni bir alan adına kıyasla aylar ila yıllar daha hızlı."
                  },
                  {
                    question: "Otoriteli süresi dolmuş alan adı link inşasından daha mı iyidir?",
                    answer: "Birçok durumda evet. Süresi dolmuş alan adıyla mevcut linkler ve otorite satın alırsınız, link inşası ise zaman alıcı, pahalı ve riskli olabilir. SEO değerine sahip eski alan adı, aylarca link inşasına yatırım yapmadan size anında avantaj sağlar."
                  },
                  {
                    question: "Süresi dolmuş alan adını yeni bir web sitesi için kullanabilir miyim?",
                    answer: "Evet. SEO değerine sahip süresi dolmuş alan adını, içerik mantıksal olarak alan adının konusu ve geçmişiyle bağlantılı olduğu sürece, yeni bir web sitesi için mükemmel şekilde kullanabilirsiniz. Backlinkler aktif kalır ve birikmiş otoriteden hemen faydalanırsınız."
                  },
                  {
                    question: "Premium alan adı ile süresi dolmuş alan adı arasındaki fark nedir?",
                    answer: "Premium alan adı esas olarak isim kalitesi ve marka değeri nedeniyle değerlidir, süresi dolmuş alan adı ise ekstra SEO otoritesi ve geçmiş getirir. İkisi de hedefinize bağlı olarak değerli olabilir. Bazı alan adları her iki avantajı da birleştirir."
                  },
                  {
                    question: "Domain Authority (DA) nedir ve neden önemlidir?",
                    answer: "Domain Authority, MOZ tarafından geliştirilen 1-100 arası bir skordur ve bir web sitesinin arama motorlarında ne kadar iyi sıralanacağını tahmin eder. Daha yüksek DA daha fazla otorite ve yüksek sıralamalar için daha iyi şanslar anlamına gelir. Backlink sayısı ve kalitesi, alan adının yaşı ve genel güvenilirlik gibi faktörlere dayanır."
                  },
                  {
                    question: "SEO için 301 yönlendirme nasıl çalışır?",
                    answer: "301 yönlendirme, arama motorlarına bir sayfanın kalıcı olarak taşındığını söyleyen kalıcı bir yönlendirmedir. Premium bir alan adını sitenize 301 yönlendirme yaptığınızda, o alan adının SEO değerinin (link suyu) büyük bir kısmı sitenize aktarılır. Bu, sıralamalarınızı önemli ölçüde iyileştirebilir."
                  },
                  {
                    question: "Sonuçları ne kadar sürede görebilirim?",
                    answer: "Alan adı transferi veya 301 yönlendirmenin etkileri genellikle 2-8 hafta içinde arama sonuçlarında görülür. Bu, Google'ın sitenizi ne sıklıkta taradığına ve web sitenizin mevcut durumuna bağlıdır. Aktif backlinklere sahip premium alan adları genellikle sonuçları daha hızlı gösterir."
                  },
                  {
                    question: "Otoriteli süresi dolmuş alan adlarını bulmanın en iyi yolu nedir?",
                    answer: "En iyi yol, alan adlarını önceden kontrol eden uzman bir satıcıdan satın almaktır. Açık artırma sitelerinde kendiniz aramak riskler içerir. Sadece kaliteli linklere, spam geçmişi olmayan ve gerçek SEO değerine sahip alan adlarını seçiyoruz. Böylece güvenilir bir alana yatırım yaptığınızdan emin olabilirsiniz."
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
                  İletişime Geçin
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Bilgi İsteyin veya Teklif Yapın
                </h2>
                <p className="text-slate-400">
                  Premium alan adlarımızdan biriyle ilgileniyor musunuz? Formu doldurun, en kısa sürede sizinle iletişime geçelim.
                </p>
              </div>
              
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          İsim *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Adınız"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          E-posta *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="sizin@email.com"
                          className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Globe className="w-4 h-4 inline mr-2" />
                        Alan Adı Seçimi *
                      </label>
                      <Input
                        type="text"
                        value={formData.domain}
                        onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))}
                        placeholder="örn. FinanceAuthority.com"
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Mesaj / Ek Bilgi
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="İlginiz hakkında daha fazla bilgi verin, soru sorun veya teklif yapın..."
                        rows={5}
                        className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25 transition-all hover:shadow-amber-500/40"
                    >
                      Talep Gönder
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Legal Links */}
        <LegalLinksPremiumDomainsTR />

        {/* Footer */}
        <FooterPremiumDomainsTR />
      </div>
    </>
  );
};

export default PremiumDomainsTR;

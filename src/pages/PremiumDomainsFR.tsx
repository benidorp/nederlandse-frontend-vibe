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
import LegalLinksPremiumDomainsFR from "@/components/premium-domains/LegalLinksPremiumDomainsFR";
import FooterPremiumDomainsFR from "@/components/premium-domains/FooterPremiumDomainsFR";
import stripeLogo from "@/assets/stripe-logo.svg";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";

// Premium domain data - exact copy from English version
const premiumDomains = [
  {
    name: "escp-eap.eu",
    description: "Domaine premium d'école de commerce avec des backlinks de Wikipedia, Cornell, Spiegel et Le Monde.",
    mozScore: 38,
    pageAuthority: 28,
    linkingDomains: 292,
    inboundLinks: "4.6K+",
    followedLinks: "4.2K+",
    category: "Éducation",
    price: "€1495",
    backlinks: "4.6K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "lemonde.fr (DA 93)", "cornell.edu (DA 92)", "spiegel.de (DA 90)"],
    stripePaymentLink: "https://buy.stripe.com/6oUeVdepVg18dXf9OO9Zm04"
  },
  {
    name: "grandparkhotel.at",
    description: "Domaine hôtelier autrichien premium avec des backlinks de The Guardian, Telegraph, Daily Mail et Der Standard.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 198,
    inboundLinks: "1.9K+",
    followedLinks: "1.7K+",
    category: "Hôtellerie",
    price: "€1750",
    backlinks: "1.9K+",
    topBacklinks: ["theguardian.com (DA 94)", "telegraph.co.uk (DA 94)", "dailymail.co.uk (DA 94)", "irishtimes.com (DA 91)", "derstandard.at (DA 82)"],
    stripePaymentLink: "https://buy.stripe.com/8x2dR9epV9CK5qJaSS9Zm0i"
  },
  {
    name: "tabby.eu",
    description: "Domaine EU court et mémorable avec des backlinks de YouTube, Le Monde, MDPI et Corriere.",
    mozScore: 37,
    pageAuthority: 27,
    linkingDomains: 166,
    inboundLinks: "3K+",
    followedLinks: "2.9K+",
    category: "Général",
    price: "€1950",
    stripePaymentLink: "https://buy.stripe.com/bJe7sL2HdcOWbP7bWW9Zm0g",
    backlinks: "3K+",
    topBacklinks: ["youtube.com (DA 100)", "lemonde.fr (DA 93)", "mdpi.com (DA 92)", "corriere.it (DA 92)", "wired.it (DA 90)"]
  },
  {
    name: "toulousespaceshow.eu",
    description: "Domaine spatial premium avec des backlinks de Europa.eu, NASA.gov, IEEE.org et Wikipedia.",
    mozScore: 35,
    pageAuthority: 31,
    linkingDomains: 397,
    inboundLinks: "3.4K+",
    followedLinks: "1.8K+",
    category: "Technologie",
    price: "€875",
    stripePaymentLink: "https://buy.stripe.com/aFa5kD81x16e1ate549Zm0e",
    backlinks: "3.4K+",
    topBacklinks: ["en.wikipedia.org (DA 97)", "nasa.gov (DA 95)", "europa.eu (DA 94)", "ieee.org (DA 93)"]
  },
  {
    name: "ilovecosmetics.eu",
    description: "Domaine beauté et cosmétiques avec des backlinks de Alza, Glamour Magazine et CB Insights.",
    mozScore: 30,
    pageAuthority: 36,
    linkingDomains: 472,
    inboundLinks: "1.6K+",
    followedLinks: "1.3K+",
    category: "Beauté",
    price: "€595",
    stripePaymentLink: "https://buy.stripe.com/fZu6oH6Xt3emg5n5yy9Zm0a",
    backlinks: "1.6K+",
    topBacklinks: ["alza.cz (DA 92)", "glamourmagazine.co.uk (DA 82)", "polyvore.com (DA 79)", "fave.co (DA 78)", "cbinsights.com (DA 77)"]
  },
  {
    name: "evacuate.eu",
    description: "Domaine EU sécurité et planification d'urgence avec des backlinks de Europa.eu, El País et Springer.",
    mozScore: 29,
    pageAuthority: 24,
    linkingDomains: 99,
    inboundLinks: "1.7K+",
    followedLinks: "1.7K+",
    category: "Sécurité",
    price: "€429",
    stripePaymentLink: "https://buy.stripe.com/6oU9ATgy37uC1at3qq9Zm09",
    backlinks: "1.7K+",
    topBacklinks: ["europa.eu (DA 97)", "elpais.com (DA 94)", "springer.com (DA 93)", "mdpi.com (DA 92)", "xataka.com (DA 90)"]
  }
];

const PremiumDomainsFR = () => {
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
    const validation = validateContactForm(formData);
    if (!validation.success) {
      toast({ title: "Veuillez corriger les erreurs", variant: "destructive" });
      return;
    }
    const { data } = validation;
    const subject = `Demande Domaine Premium: ${data.domain}`;
    const body = `Nom: ${data.name}\nEmail: ${data.email}\nDomaine: ${data.domain}\n\nMessage:\n${data.message || ""}`;
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    toast({ title: "Demande en cours d'envoi", description: "Votre client email va s'ouvrir." });
  };

  return (
    <>
      <Helmet>
        <title>Acheter des Noms de Domaine Expirés Premium avec Backlinks Haute Autorité & Valeur SEO</title>
        <meta name="description" content="Achetez des noms de domaine expirés avec backlinks ? Domaines expirés fiables avec haute autorité et valeur SEO. Achetez des noms de domaine premium pour un meilleur classement Google." />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Domaines Premium
              </span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-6">
              <RouterLink to="/" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Accueil
              </RouterLink>
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                Domaines
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">
                FAQ
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">
                Contact
              </Button>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-4 py-2">
                <Star className="w-4 h-4 mr-2 inline" />
                Collection Exclusive de Domaines Premium
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Achetez des Noms de Domaine Expirés Premium avec Backlinks Haute Autorité & Valeur SEO
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Renforcez votre présence en ligne avec des noms de domaine qui ont construit leur autorité au fil des années.
                Idéal pour des classements plus rapides, des backlinks puissants et des avantages SEO directs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg px-8 py-6">
                  Voir les Domaines
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Domain Listings */}
        <section id="domains" className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Noms de Domaine Premium à Vendre</h2>
              <p className="text-slate-400 max-w-3xl mx-auto">
                Chaque domaine est soigneusement sélectionné en fonction de l'autorité MOZ, du profil de backlinks et du potentiel SEO.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumDomains.map((domain, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-amber-500/50 transition-all">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline" className="text-xs border-slate-600 text-slate-400">{domain.category}</Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-1 rounded-full">
                        <BarChart3 className="w-3 h-3 text-amber-400" />
                        <span className="text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white mt-3">{domain.name}</CardTitle>
                    <CardDescription className="text-slate-400">{domain.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3 bg-slate-800/60 rounded-lg px-3 py-2">
                      <span className="text-sm font-medium text-slate-300">Prix</span>
                      <span className="text-lg font-bold text-amber-400">{domain.price}</span>
                    </div>
                    {domain.stripePaymentLink && (
                      <a href={domain.stripePaymentLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#F59E0B] hover:bg-[#D97706] text-slate-950 font-bold rounded-md transition-all text-lg">
                        Acheter Maintenant
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Demander des Informations ou Faire une Offre</h2>
                <p className="text-slate-400">Intéressé par l'un de nos domaines premium ? Remplissez le formulaire.</p>
              </div>
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nom *</label>
                        <Input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder="Votre nom" className="bg-slate-900/50 border-slate-700 text-white" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email *</label>
                        <Input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="votre@email.com" className="bg-slate-900/50 border-slate-700 text-white" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nom de Domaine *</label>
                      <Input type="text" value={formData.domain} onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))} placeholder="ex. exemple.eu" className="bg-slate-900/50 border-slate-700 text-white" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                      <Textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} placeholder="Décrivez votre intérêt..." rows={5} className="bg-slate-900/50 border-slate-700 text-white" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6">
                      Envoyer la Demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg" aria-label="Retour en haut">
          <ArrowUp className="w-6 h-6" />
        </button>

        <LegalLinksPremiumDomainsFR />
        <FooterPremiumDomainsFR />
      </div>
    </>
  );
};

export default PremiumDomainsFR;

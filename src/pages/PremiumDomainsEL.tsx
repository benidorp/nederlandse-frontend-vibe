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
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";
import { premiumDomains } from "./PremiumDomainsEN";

const HREFLANG_URLS: Record<string, string> = {
  nl: "https://www.iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde",
  en: "https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value",
  de: "https://www.iaee.eu/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert",
  fr: "https://www.iaee.eu/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo",
  es: "https://www.iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo",
  it: "https://www.iaee.eu/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo",
  pt: "https://www.iaee.eu/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo",
  pl: "https://www.iaee.eu/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo",
  ja: "https://www.iaee.eu/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi",
  zh: "https://www.iaee.eu/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi",
  ar: "https://www.iaee.eu/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo",
  tr: "https://www.iaee.eu/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri",
  hi: "https://www.iaee.eu/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya",
  sv: "https://www.iaee.eu/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde",
  no: "https://www.iaee.eu/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi",
  da: "https://www.iaee.eu/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi",
  fi: "https://www.iaee.eu/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo",
  cs: "https://www.iaee.eu/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota",
  el: "https://www.iaee.eu/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia",
  ru: "https://www.iaee.eu/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost",
  ro: "https://www.iaee.eu/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo",
  bg: "https://www.iaee.eu/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost",
  uk: "https://www.iaee.eu/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist",
};

const PremiumDomainsEL = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", domain: "", message: "" });
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
      toast({ title: "Διορθώστε τα σφάλματα στη φόρμα", description: Object.values(errorResult.errors)[0] || "Ελέγξτε τα στοιχεία σας", variant: "destructive" });
      return;
    }
    const { data } = validation;
    const subject = `Premium Domain Ερώτηση: ${data.domain}`;
    const body = `Όνομα: ${data.name}\nEmail: ${data.email}\nDomain: ${data.domain}\n\nΜήνυμα:\n${data.message || ""}`;
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    toast({ title: "Το αίτημα αποστέλλεται", description: "Ο πελάτης email σας θα ανοίξει για αποστολή του αιτήματος." });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <html lang="el" />
        <title>Αγοράστε Premium Ληγμένα Domains με Backlinks | Υψηλή Αυθεντία & SEO Αξία</title>
        <meta name="description" content="Αγοράστε ληγμένα domains με backlinks; Αξιόπιστα ληγμένα domains με υψηλή αυθεντία και SEO αξία. Αγοράστε premium ονόματα χώρου για ταχύτερη κατάταξη στο Google. Άμεσα διαθέσιμα." />
        <meta name="keywords" content="αγορά ληγμένου domain, ληγμένα domains με backlinks, domain με αυθεντία, αξιόπιστα ληγμένα domains, αγορά premium domains, domains με SEO αξία" />
        <link rel="canonical" href={HREFLANG_URLS.el} />
        <meta name="robots" content="index, follow" />
        {Object.entries(HREFLANG_URLS).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={HREFLANG_URLS.en} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Αγοράστε Premium Ληγμένα Domains με Backlinks | Υψηλή Αυθεντία & SEO Αξία" />
        <meta property="og:description" content="Αξιόπιστα ληγμένα domains με υψηλή αυθεντία και SEO αξία. Αγοράστε premium ονόματα χώρου για ταχύτερη κατάταξη στο Google." />
        <meta property="og:url" content={HREFLANG_URLS.el} />
        <meta property="og:locale" content="el_GR" />
        <meta property="og:site_name" content="IAEE Premium Domains" />
        <meta property="og:image" content="https://www.iaee.eu/images/premium-domains-og.jpg" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://iaee.eu/#organization",
                "name": "IAEE Premium Domains",
                "url": "https://iaee.eu",
                "logo": "https://iaee.eu/images/premium-domains-og.jpg",
                "description": "Ειδικός σε premium ληγμένα domains με υψηλή αυθεντία και SEO αξία"
              },
              {
                "@type": "WebPage",
                "url": "${HREFLANG_URLS.el}",
                "name": "Αγοράστε Premium Ληγμένα Domains με Backlinks | Υψηλή Αυθεντία & SEO Αξία",
                "inLanguage": "el"
              },
              {
                "@type": "ItemList",
                "name": "Premium Ληγμένα Domains",
                "numberOfItems": ${premiumDomains.length},
                "itemListElement": ${JSON.stringify(premiumDomains.slice(0, 10).map((domain, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "Product",
                    "name": domain.name,
                    "description": domain.description,
                    "image": "https://www.iaee.eu/images/premium-domains-logo.png",
                    "sku": domain.name,
                    "brand": { "@type": "Brand", "name": "IAEE Premium Domains" },
                    "offers": {
                      "@type": "Offer",
                      "price": domain.price.replace(/[^0-9]/g, ""),
                      "priceCurrency": "EUR",
                      "availability": "https://schema.org/InStock",
                      "seller": { "@type": "Organization", "name": "IAEE Premium Domains" }
                    }
                  }
                })))}
              }
            ]
          }
        `}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <LanguageSwitcher currentLanguage="el" />

        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent truncate">Premium Domains</span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Domains</button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Γιατί Premium;</button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">FAQ</button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">Επικοινωνία</Button>
            </nav>
            <Button onClick={() => scrollToSection("domains")} className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2">Domains</Button>
          </div>
        </header>

        {/* Hero */}
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />
                Αποκλειστική Συλλογή Premium Domains
              </Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Αγοράστε Premium Ληγμένα Domains με Backlinks Υψηλή Αυθεντία & SEO Αξία
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Ενισχύστε την online παρουσία σας με ονόματα χώρου που έχουν χτίσει αυθεντία με τα χρόνια. Ιδανικά για ταχύτερη κατάταξη, ισχυρά backlinks και άμεσα SEO πλεονεκτήματα.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25">
                  Δείτε τα Domains <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("why-premium")} className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
                  Περισσότερες Πληροφορίες
                </Button>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Μέση Βαθμολογία MOZ", value: "29+" },
                  { label: "Premium Domains", value: "110+" },
                  { label: "Χρόνια Εμπειρίας", value: "10+" },
                  { label: "Ικανοποιημένοι Πελάτες", value: "500+" }
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
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700"><Globe className="w-4 h-4 mr-2 inline" />Διαθέσιμα Domains</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Domains προς Πώληση</h2>
              <p className="text-slate-400 max-w-3xl mx-auto">Κάθε domain είναι προσεκτικά επιλεγμένο βάσει αυθεντίας MOZ, προφίλ backlinks και δυνατοτήτων SEO.</p>
            </div>

            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Ψάχνετε ένα domain με πραγματική SEO αξία;</strong> Σε εμάς αγοράζετε αξιόπιστα <strong className="text-amber-400">ληγμένα domains με backlinks</strong> και υψηλή αυθεντία, προσεκτικά ελεγμένα για ποιότητα και ιστορικό.</p>
              <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-amber-400">Εξειδικευόμαστε σε .EU και άλλες ευρωπαϊκές καταλήξεις domain</strong> και ξεχωρίζουμε σαφώς στο τμήμα των ευρωπαϊκών ονομάτων ιστού.</p>
              <p className="text-slate-300 leading-relaxed mb-4">Αυτά τα ληγμένα domains έχουν υπάρχοντα backlinks από <strong className="text-amber-400">αξιόπιστες εταιρείες, μέσα ενημέρωσης και κυβερνητικούς οργανισμούς</strong> — σημαντικοί σύνδεσμοι που είναι πολύ δύσκολο ή αδύνατο να αποκτηθούν για κανονικές ιστοσελίδες.</p>
            </div>

            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Πληροφορίες ΦΠΑ:</span> Οι τιμές είναι χωρίς ΦΠΑ για ιδιώτες πελάτες εντός ΕΕ. Επιχειρήσεις εντός ΕΕ μπορούν να εφαρμόσουν αντίστροφη χρέωση.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card key={index} className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                    <div className="mt-1 mb-2 flex justify-center">
                      <img src="/images/premium-domains-logo-en.png" alt={`Αγοράστε ${domain.name} - Premium Ληγμένο Domain με Υψηλή MOZ Αυθεντία & SEO Αξία`} className="w-20 h-auto object-contain" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400 flex-shrink-0">{domain.category}</Badge>
                      <div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                        <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                        <span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all">
                      <RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="hover:underline">{domain.name}</RouterLink>
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-slate-300">
                      {domain.description}
                      <RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="block mt-1 text-xs text-amber-400 hover:text-amber-300 underline">Δείτε λεπτομέρειες →</RouterLink>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400"><Link className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /><span>Backlinks: {domain.backlinks}</span></div>
                      </div>
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Αυθ. Σελίδας:</span><span className="text-white ml-1 font-medium">{domain.pageAuthority}</span></div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Συνδεδ. Domains:</span><span className="text-white ml-1 font-medium">{domain.linkingDomains}</span></div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Εισερχ. Links:</span><span className="text-white ml-1 font-medium">{domain.inboundLinks}</span></div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Followed Links:</span><span className="text-white ml-1 font-medium">{domain.followedLinks}</span></div>
                        </div>
                      )}
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Top Backlinks:</span>
                          <div className="flex flex-wrap gap-0.5 sm:gap-1">
                            {domain.topBacklinks.slice(0, 5).map((link, i) => (
                              <Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 px-1 sm:px-1.5 py-0">{link}</Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-2 sm:mb-3 bg-slate-800/60 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Τιμή</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      {domain.stripePaymentLink ? (
                        <a href={domain.stripePaymentLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md hover:bg-[#D97706] transition-colors text-sm sm:text-base md:text-lg">Αγορά Τώρα</a>
                      ) : (
                        <button onClick={() => handleDomainInquiry(domain.name)} className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-slate-700 text-white font-bold rounded-md hover:bg-slate-600 transition-colors text-sm sm:text-base">Ερώτηση</button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Premium */}
        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">Γιατί Premium Domains;</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Τα Πλεονεκτήματα των Premium Ληγμένων Domains</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Ανακαλύψτε γιατί τα ληγμένα domains με υψηλή αυθεντία είναι η πιο έξυπνη επένδυση για τη στρατηγική SEO σας.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Καθαρό Ιστορικό", desc: "Χωρίς spam ή ιστορικό ποινών" },
                { icon: Link, title: "Ποιοτικά Backlinks", desc: "Από αξιόπιστες πηγές" },
                { icon: BarChart3, title: "Υψηλή Βαθμολογία DA", desc: "Ελάχιστο DA 20+" },
                { icon: Globe, title: "EU/Παγκόσμια TLD", desc: ".eu, .nl, .be, .de, .co.uk" }
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

        {/* FAQ */}
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">Συχνές Ερωτήσεις</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ για Premium Domains & SEO</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Τι είναι ένα ληγμένο domain;", a: "Ένα ληγμένο domain είναι ένα όνομα χώρου που δεν ανανεώθηκε από τον προηγούμενο ιδιοκτήτη και είναι πλέον διαθέσιμο για εγγραφή. Αυτά τα domains διατηρούν συχνά τα χτισμένα backlinks και την αυθεντία τους." },
                  { q: "Γιατί είναι σημαντικά τα backlinks;", a: "Τα backlinks είναι ένας από τους σημαντικότερους παράγοντες κατάταξης στο Google. Domains με ποιοτικά backlinks από αυθεντικές ιστοσελίδες έχουν πλεονέκτημα στα αποτελέσματα αναζήτησης." },
                  { q: "Πώς λειτουργεί η ανακατεύθυνση 301 για SEO;", a: "Η ανακατεύθυνση 301 ανακατευθύνει μόνιμα τους επισκέπτες και τις μηχανές αναζήτησης από το παλιό domain στη νέα σας ιστοσελίδα, μεταφέροντας αξία συνδέσμων για καλύτερη κατάταξη." },
                  { q: "Είναι νόμιμο να αγοράζεις ληγμένα domains;", a: "Ναι, είναι απολύτως νόμιμο. Όταν ένα domain λήξει και δεν ανανεωθεί από τον ιδιοκτήτη, γίνεται διαθέσιμο σε οποιονδήποτε." },
                  { q: "Πόσο γρήγορα θα δω αποτελέσματα SEO;", a: "Τα αποτελέσματα ποικίλλουν, αλλά πολλοί πελάτες βλέπουν βελτιώσεις εντός 2-4 εβδομάδων μετά τη ρύθμιση ανακατεύθυνσης 301 ή τη δημιουργία ιστοσελίδας στο domain." },
                  { q: "Μπορώ να χρησιμοποιήσω το domain για οποιαδήποτε ιστοσελίδα;", a: "Ναι, μπορείτε να χρησιμοποιήσετε το domain για οποιονδήποτε νόμιμο σκοπό - ιστοσελίδα, blog, ηλεκτρονικό κατάστημα, portfolio ή ως ανακατεύθυνση 301 στην υπάρχουσα ιστοσελίδα σας." },
                  { q: "Τι είναι το MOZ Domain Authority;", a: "Το MOZ Domain Authority (DA) είναι μια βαθμολογία από 1 έως 100 που προβλέπει πόσο καλά θα κατατάσσεται μια ιστοσελίδα στα αποτελέσματα αναζήτησης. Υψηλότερη DA σημαίνει ισχυρότερη αυθεντία." },
                  { q: "Πώς μεταφέρω το domain στον καταχωρητή μου;", a: "Μετά την αγορά θα λάβετε κωδικό μεταφοράς (EPP/Auth code) μέσω email. Με αυτόν τον κωδικό μπορείτε εύκολα να μεταφέρετε το domain στον δικό σας καταχωρητή." },
                  { q: "Προσφέρετε υποστήριξη μετά την αγορά;", a: "Ναι, προσφέρουμε πλήρη υποστήριξη στο support@iaee.eu. Απαντάμε εντός 24 ωρών σε όλα τα ερωτήματα σχετικά με τη μεταφορά domain και την τεχνική ρύθμιση." },
                  { q: "Γιατί να αγοράσω από εξειδικευμένο πωλητή;", a: "Διότι λαμβάνετε προελεγμένη ποιότητα, αποφεύγετε κινδύνους, έχετε διαφάνεια για κάθε domain και εξοικονομείτε χρόνο και χρήμα από δική σας έρευνα." },
                ].map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-slate-800/40 border-slate-700/50 rounded-xl px-6">
                    <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-slate-400">{faq.a}</AccordionContent>
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
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30"><Mail className="w-4 h-4 mr-2 inline" />Επικοινωνήστε Μαζί Μας</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ζητήστε Πληροφορίες ή Κάντε Προσφορά</h2>
                <p className="text-slate-400">Ενδιαφέρεστε για κάποιο από τα premium domains μας; Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό.</p>
              </div>
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2"><User className="w-4 h-4 inline mr-2" />Όνομα *</label>
                        <Input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder="Το όνομά σας" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2"><Mail className="w-4 h-4 inline mr-2" />Email *</label>
                        <Input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="to@email.gr" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2"><Globe className="w-4 h-4 inline mr-2" />Όνομα Domain *</label>
                      <Input type="text" value={formData.domain} onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))} placeholder="π.χ. ParadeigmaDomain.eu" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2"><MessageSquare className="w-4 h-4 inline mr-2" />Μήνυμα</label>
                      <Textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} placeholder="Πείτε μας περισσότερα για το ενδιαφέρον σας..." rows={5} className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25">Αποστολή Αιτήματος <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Αγοράστε Ληγμένα Domains: Επενδύστε σε Αποδεδειγμένη SEO Αυθεντία</h2>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p><strong className="text-amber-400">Η αγορά ενός ληγμένου domain</strong> είναι ο πιο έξυπνος τρόπος να επωφεληθείτε άμεσα από χρόνια συσσωρευμένης <strong className="text-white">αυθεντίας domain</strong> και <strong className="text-white">ποιοτικών backlinks</strong>. Σε αντίθεση με ένα νέο domain, ένα premium ληγμένο domain έχει ήδη εμπιστοσύνη στο Google και σε άλλες μηχανές αναζήτησης.</p>
                  <p>Τα προσεκτικά επιλεγμένα <strong className="text-amber-400">premium domains μας</strong> έχουν αποδεδειγμένο ιστορικό με backlinks από αυθεντικές πηγές όπως Wikipedia, πανεπιστήμια, κυβερνητικά ιδρύματα και αξιόπιστα ειδησεογραφικά sites.</p>
                  <p>Είτε θέλετε να <strong className="text-white">ξεκινήσετε ηλεκτρονικό κατάστημα</strong>, να δημιουργήσετε μια <strong className="text-white">affiliate ιστοσελίδα</strong>, ή να δώσετε στην υπάρχουσα επιχείρησή σας ένα <strong className="text-white">SEO boost</strong>: ένα ληγμένο domain με υψηλό <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> σας δίνει αδιαμφισβήτητο πλεονέκτημα έναντι του ανταγωνισμού.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Final Contact */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Επικοινωνήστε Μαζί Μας</h2>
              <p className="text-slate-300 mb-8">Έχετε ερωτήσεις για κάποιο συγκεκριμένο domain ή θέλετε συμβουλή για ποιο ληγμένο domain ταιριάζει καλύτερα στο έργο σας;</p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-amber-400" />
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium">support@iaee.eu</a>
                  </div>
                  <p className="text-slate-400 text-sm">Απαντάμε στο μήνυμά σας εντός 24 ωρών.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl" aria-label="Πίσω στην κορυφή">
          <ArrowUp className="w-6 h-6" />
        </button>
        <HiddenInternalLinks />

        {/* Legal Links */}
        <section className="py-12 bg-slate-900">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Νομικές Πληροφορίες</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">Όροι Χρήσης</RouterLink>
              <span className="text-slate-600">|</span>
              <RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">Πολιτική Απορρήτου</RouterLink>
              <span className="text-slate-600">|</span>
              <RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">Αποποίηση Ευθυνών</RouterLink>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-3">
                <Crown className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium text-white">Premium Domains</span>
              </div>
              <p className="text-slate-500 text-sm text-center md:text-right">© {new Date().getFullYear()} IAEE. Με επιφύλαξη παντός δικαιώματος.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PremiumDomainsEL;

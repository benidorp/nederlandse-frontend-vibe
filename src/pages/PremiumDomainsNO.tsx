import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Shield, Globe, ArrowRight, CheckCircle, Star, Link, BarChart3, Mail, User, MessageSquare, ArrowUp } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";
import { premiumDomains } from "./PremiumDomainsEN";

const CANONICAL = "https://www.iaee.eu/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi";

const PremiumDomainsNO = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", domain: "", message: "" });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData);
    if (!validation.success) { toast({ title: "Vennligst korriger feilene", variant: "destructive" }); return; }
    const { data } = validation;
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", `Premium Domain Forespørsel: ${data.domain}`, `Navn: ${data.name}\nE-post: ${data.email}\nDomene: ${data.domain}\n\nMelding:\n${data.message || ""}`);
    toast({ title: "Forespørsel sendes", description: "E-postklienten din åpnes." });
  };

  return (
    <>
      <Helmet>
        <html lang="no" />
        <title>Kjøp Premium Utgåtte Domenenavn med Tilbakekoblinger | Høy Autoritet & SEO-Verdi</title>
        <meta name="description" content="Kjøp utgåtte domenenavn med tilbakekoblinger? Pålitelige utgåtte domener med høy autoritet og SEO-verdi. Kjøp premium domenenavn for raskere Google-rangering." />
        <link rel="canonical" href={CANONICAL} />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="nl" href="https://www.iaee.eu/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" />
        <link rel="alternate" hrefLang="en" href="https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
        <link rel="alternate" hrefLang="de" href="https://www.iaee.eu/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" />
        <link rel="alternate" hrefLang="fr" href="https://www.iaee.eu/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" />
        <link rel="alternate" hrefLang="es" href="https://www.iaee.eu/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" />
        <link rel="alternate" hrefLang="it" href="https://www.iaee.eu/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" />
        <link rel="alternate" hrefLang="sv" href="https://www.iaee.eu/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde" />
        <link rel="alternate" hrefLang="no" href={CANONICAL} />
        <link rel="alternate" hrefLang="da" href="https://www.iaee.eu/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi" />
        <link rel="alternate" hrefLang="fi" href="https://www.iaee.eu/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo" />
        <link rel="alternate" hrefLang="cs" href="https://www.iaee.eu/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota" />
        <link rel="alternate" hrefLang="el" href="https://www.iaee.eu/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia" />
        <link rel="alternate" hrefLang="ru" href="https://www.iaee.eu/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost" />
        <link rel="alternate" hrefLang="ro" href="https://www.iaee.eu/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo" />
        <link rel="alternate" hrefLang="bg" href="https://www.iaee.eu/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost" />
        <link rel="alternate" hrefLang="uk" href="https://www.iaee.eu/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist" />
        <link rel="alternate" hrefLang="x-default" href="https://www.iaee.eu/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" />
        <meta property="og:title" content="Kjøp Premium Utgåtte Domenenavn | Høy Autoritet & SEO-Verdi" />
        <meta property="og:url" content={CANONICAL} />
        <meta property="og:locale" content="nb_NO" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"WebPage","url":"${CANONICAL}","name":"Kjøp Premium Utgåtte Domenenavn","inLanguage":"no"}`}</script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <LanguageSwitcher currentLanguage="no" />
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi" className="flex items-center gap-2 sm:gap-3"><Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" /><span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">Premium Domener</span></RouterLink>
            <nav className="hidden md:flex items-center gap-4"><button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 text-sm font-medium">Domener</button><button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 text-sm font-medium">FAQ</button><Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold">Kontakt</Button></nav>
          </div>
        </header>
        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-3 sm:px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 py-1.5 text-xs sm:text-sm"><Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />Eksklusiv Samling av Premiumdomener</Badge>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight"><span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">Kjøp Premium Utgåtte Domenenavn med Tilbakekoblinger Høy Autoritet & SEO-Verdi</span></h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto">Styrk din tilstedeværelse på nettet med domenenavn som har bygget autoritet gjennom årene. Ideelt for raskere rangering, kraftige tilbakekoblinger og direkte SEO-fordeler.</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-6 py-5 shadow-lg">Vis Domener <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-2">
              {[{ l: "Gjennomsnittlig MOZ", v: "29+" },{ l: "Premium Domener", v: "110+" },{ l: "Års Erfaring", v: "10+" },{ l: "Fornøyde Kunder", v: "500+" }].map((s, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50"><div className="text-xl sm:text-2xl font-bold text-amber-400">{s.v}</div><div className="text-xs sm:text-sm text-slate-400 mt-1">{s.l}</div></div>
              ))}
            </div>
          </div></div>
        </section>
        <section id="domains" className="py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12"><Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700"><Globe className="w-4 h-4 mr-2 inline" />Tilgjengelige Domener</Badge><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Domenenavn Til Salgs</h2></div>
            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Leter du etter et domenenavn med virkelig SEO-verdi?</strong> Hos oss kjøper du pålitelige <strong className="text-amber-400">utgåtte domenenavn med tilbakekoblinger</strong> og høy autoritet.</p>
              <p className="text-slate-300 leading-relaxed"><strong className="text-amber-400">Vi spesialiserer oss på .EU og andre europeiske domeneendelser</strong> og skiller oss tydelig ut innen segmentet for europeiske webbnavn.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {premiumDomains.map((domain, index) => (
                <Card key={index} className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 group">
                  <CardHeader className="pb-2 p-3 sm:p-4 md:p-6">
                    <div className="mt-1 mb-2 flex justify-center"><img src="/images/premium-domains-logo-en.png" alt={`Kjøp ${domain.name} - Premium Utgått Domene med Høy MOZ Autoritet`} className="w-20 h-auto object-contain" /></div>
                    <div className="flex items-center justify-between gap-2"><Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400">{domain.category}</Badge><div className="flex items-center gap-1 bg-amber-500/10 px-1.5 py-0.5 rounded-full"><BarChart3 className="w-2.5 h-2.5 text-amber-400" /><span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span></div></div>
                    <CardTitle className="text-lg sm:text-xl text-white group-hover:text-amber-400 mt-2 break-all"><RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="hover:underline">{domain.name}</RouterLink></CardTitle>
                    <CardDescription className="text-sm text-slate-300">{domain.description}<RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="block mt-1 text-xs text-amber-400 hover:text-amber-300 underline">Se fullstendige detaljer →</RouterLink></CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-2 mb-3"><div className="flex items-center text-xs sm:text-sm text-slate-400"><Link className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" /><span>Tilbakekoblinger: {domain.backlinks}</span></div>
                    {domain.topBacklinks && domain.topBacklinks.length > 0 && (<div className="text-[10px] sm:text-xs"><span className="text-slate-500 block mb-1">Topp Tilbakekoblinger:</span><div className="flex flex-wrap gap-0.5">{domain.topBacklinks.slice(0, 5).map((l, i) => (<Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 px-1 py-0">{l}</Badge>))}</div></div>)}</div>
                    <div className="mt-auto pt-3 border-t border-slate-700/50">
                      <div className="flex items-center justify-between mb-2 bg-slate-800/60 rounded-lg px-2 py-1.5"><span className="text-xs font-medium text-slate-300">Pris</span><span className="text-base font-bold text-amber-400">{domain.price}</span></div>
                      {domain.stripePaymentLink ? (<a href={domain.stripePaymentLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md hover:bg-[#D97706] transition-colors text-sm">Kjøp Nå</a>) : (<button onClick={() => { setFormData(p => ({ ...p, domain: domain.name })); scrollToSection("contact"); }} className="w-full inline-flex items-center justify-center px-4 py-3 bg-slate-700 text-white font-bold rounded-md hover:bg-slate-600 text-sm">Forespørsel</button>)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl font-bold text-white mb-4">Ofte Stilte Spørsmål</h2></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">
            {[{ q: "Hva er et utgått domenenavn?", a: "Et utgått domenenavn er et domene som ikke ble fornyet av den forrige eieren og nå er tilgjengelig for registrering." },{ q: "Hvorfor er tilbakekoblinger viktige?", a: "Tilbakekoblinger er en av de viktigste rangeringsfaktorene for Google." },{ q: "Hvordan fungerer en 301-omdirigering?", a: "En 301-omdirigering overfører permanent besøkende og søkemotorer fra det gamle domenet til din nye nettside." },{ q: "Er det lovlig å kjøpe utgåtte domener?", a: "Ja, det er helt lovlig. Når et domene utløper, blir det tilgjengelig for alle å registrere." },{ q: "Hva er MOZ Domain Authority?", a: "MOZ Domain Authority (DA) er en poengsum fra 1-100 som forutsier hvor godt en nettside vil rangere i søkeresultatene." }
            ].map((f, i) => (<AccordionItem key={i} value={`faq-${i}`} className="bg-slate-800/40 border-slate-700/50 rounded-xl px-6"><AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline">{f.q}</AccordionTrigger><AccordionContent className="text-slate-400">{f.a}</AccordionContent></AccordionItem>))}
          </Accordion></div></div>
        </section>
        <section id="contact" className="py-20 bg-slate-900">
          <div className="container mx-auto px-4"><div className="max-w-2xl mx-auto">
            <div className="text-center mb-12"><h2 className="text-3xl font-bold text-white mb-4">Be Om Informasjon</h2><p className="text-slate-400">Interessert i et av våre premiumdomener? Fyll ut skjemaet.</p></div>
            <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50"><CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6"><div><label className="block text-sm font-medium text-slate-300 mb-2">Navn *</label><Input type="text" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} className="bg-slate-900/50 border-slate-700 text-white" required /></div><div><label className="block text-sm font-medium text-slate-300 mb-2">E-post *</label><Input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="bg-slate-900/50 border-slate-700 text-white" required /></div></div>
                <div><label className="block text-sm font-medium text-slate-300 mb-2">Domenenavn *</label><Input type="text" value={formData.domain} onChange={e => setFormData(p => ({ ...p, domain: e.target.value }))} className="bg-slate-900/50 border-slate-700 text-white" required /></div>
                <div><label className="block text-sm font-medium text-slate-300 mb-2">Melding</label><Textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} rows={5} className="bg-slate-900/50 border-slate-700 text-white resize-none" /></div>
                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-lg py-6">Send Forespørsel <ArrowRight className="ml-2 h-5 w-5" /></Button>
              </form>
            </CardContent></Card>
          </div></div>
        </section>
        <section className="py-16 bg-slate-950"><div className="container mx-auto px-4"><div className="max-w-2xl mx-auto text-center"><h2 className="text-2xl font-bold text-white mb-4">Kontakt Oss</h2><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"><div className="flex items-center justify-center gap-3"><Mail className="h-5 w-5 text-amber-400" /><a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300 text-lg font-medium">support@iaee.eu</a></div><p className="text-slate-400 text-sm mt-4">Vi svarer innen 24 timer.</p></div></div></div></section>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg" aria-label="Tilbake til toppen"><ArrowUp className="w-6 h-6" /></button>
        <HiddenInternalLinks />
        <footer className="py-12 bg-slate-950 border-t border-slate-800"><div className="container mx-auto px-4"><div className="flex flex-col md:flex-row items-center justify-between gap-4"><div className="flex items-center gap-3"><Crown className="h-5 w-5 text-amber-400" /><span className="text-sm font-medium text-white">Premium Domener</span></div><p className="text-slate-500 text-sm">© {new Date().getFullYear()} IAEE. Alle rettigheter forbeholdt.</p></div></div></footer>
      </div>
    </>
  );
};
export default PremiumDomainsNO;

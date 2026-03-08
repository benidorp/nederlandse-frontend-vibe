import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Crown, Shield, Globe, ArrowRight, Star, Link, BarChart3, Mail, User, MessageSquare, ArrowUp } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import HiddenInternalLinks from "@/components/HiddenInternalLinks";
import { validateContactForm, buildSafeMailtoUrl } from "@/lib/formValidation";
import { premiumDomains } from "@/pages/PremiumDomainsEN";
import { getTranslatedDomains } from "@/data/domainTranslations";
import SeoRedirectsSection from "@/components/premium-domains/shared/SeoRedirectsSection";
import TrusteeServiceSection from "@/components/premium-domains/shared/TrusteeServiceSection";
import EuDomainValueSection from "@/components/premium-domains/shared/EuDomainValueSection";
import InternalLanguageLinks from "@/components/premium-domains/shared/InternalLanguageLinks";
import { PREMIUM_DOMAINS_HREFLANG } from "@/data/premiumDomainsHreflang";

export interface PDPageConfig {
  lang: string;
  locale: string;
  brandName: string;
  title: string;
  metaDesc: string;
  heroBadge: string;
  heroTitle: string;
  heroSub: string;
  ctaBrowse: string;
  ctaMore: string;
  statLabels: string[];
  navDomains: string;
  navWhy: string;
  navFaq: string;
  navContact: string;
  gridBadge: string;
  gridTitle: string;
  gridSub: string;
  gridIntro: string[];
  vatInfo: string;
  buyNow: string;
  inquiryLabel: string;
  priceLabel: string;
  blLabel: string;
  paLabel: string;
  ldLabel: string;
  ibLabel: string;
  flLabel: string;
  topBlLabel: string;
  viewDetails: string;
  buyAlt: string;
  whyBadge: string;
  whyTitle: string;
  whySub: string;
  whyCards: { title: string; desc: string }[];
  faqBadge: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  contactBadge: string;
  contactTitle: string;
  contactSub: string;
  nameLabel: string;
  emailLabel: string;
  domainLabel: string;
  msgLabel: string;
  namePh: string;
  emailPh: string;
  domainPh: string;
  msgPh: string;
  submitBtn: string;
  formErrTitle: string;
  formErrCheck: string;
  sendingTitle: string;
  sendingDesc: string;
  emailSubjectPrefix: string;
  seoTitle: string;
  seoP1: string;
  seoP2: string;
  nordTitle: string;
  nordDesc: string;
  nordCta: string;
  contactBtmTitle: string;
  contactBtmSub: string;
  contactBtmNote: string;
  legalTitle: string;
  legalTerms: string;
  legalPrivacy: string;
  copyrightText: string;
  backToTopLabel: string;
}

const PremiumDomainsTemplate = ({ config: c }: { config: PDPageConfig }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", domain: "", message: "" });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const scrollToSection = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };
  const translatedDomains = getTranslatedDomains(premiumDomains, c.lang as any);
  const url = PREMIUM_DOMAINS_HREFLANG[c.lang] || "";
  const path = url.replace("https://www.iaee.eu", "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setFormErrors({});
    const validation = validateContactForm(formData);
    if (!validation.success) { const errorResult = validation as { success: false; errors: Record<string, string> }; setFormErrors(errorResult.errors); toast({ title: c.formErrTitle, description: Object.values(errorResult.errors)[0] || c.formErrCheck, variant: "destructive" }); return; }
    const { data } = validation;
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", `${c.emailSubjectPrefix}: ${data.domain}`, `${c.nameLabel}: ${data.name}\n${c.emailLabel}: ${data.email}\n${c.domainLabel}: ${data.domain}\n\n${c.msgLabel}:\n${data.message || ""}`);
    toast({ title: c.sendingTitle, description: c.sendingDesc });
  };
  const handleDomainInquiry = (domainName: string) => { setFormData(prev => ({ ...prev, domain: domainName })); scrollToSection("contact"); };

  return (
    <>
      <Helmet>
        <html lang={c.lang} />
        <title>{c.title}</title>
        <meta name="description" content={c.metaDesc} />
        <link rel="canonical" href={url} /><meta name="robots" content="index, follow" />
        {Object.entries(PREMIUM_DOMAINS_HREFLANG).map(([lang, href]) => (<link key={lang} rel="alternate" hrefLang={lang} href={href} />))}
        <link rel="alternate" hrefLang="x-default" href={PREMIUM_DOMAINS_HREFLANG.en} />
        <meta property="og:type" content="website" /><meta property="og:title" content={c.title} />
        <meta property="og:url" content={url} /><meta property="og:locale" content={c.locale} /><meta property="og:site_name" content="IAEE Premium Domains" />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@graph":[{"@type":"Organization","@id":"https://iaee.eu/#organization","name":"IAEE Premium Domains","url":"https://iaee.eu"},{"@type":"WebPage","url":"${url}","inLanguage":"${c.lang}"},{"@type":"ItemList","name":"${c.brandName}","numberOfItems":${premiumDomains.length},"itemListElement":${JSON.stringify(premiumDomains.slice(0,10).map((d,i)=>({"@type":"ListItem","position":i+1,"item":{"@type":"Product","name":d.name,"sku":d.name,"offers":{"@type":"Offer","price":d.price.replace(/[^0-9]/g,""),"priceCurrency":"EUR","availability":"https://schema.org/InStock"}}})))}}]}`}</script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20"><div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
          <RouterLink to={path} className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0"><Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" /><span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent truncate">{c.brandName}</span></RouterLink>
          <nav className="hidden md:flex items-center gap-4 lg:gap-6"><button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">{c.navDomains}</button><button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">{c.navWhy}</button><button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">{c.navFaq}</button><Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">{c.navContact}</Button></nav>
          <Button onClick={() => scrollToSection("domains")} className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2">{c.navDomains}</Button>
        </div></header>

        <section className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-3 sm:px-4 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 sm:mb-6 bg-amber-500/10 text-amber-400 border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"><Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 inline" />{c.heroBadge}</Badge>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2"><span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">{c.heroTitle}</span></h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">{c.heroSub}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25">{c.ctaBrowse} <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" /></Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("why-premium")} className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">{c.ctaMore}</Button>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
              {[{ label: c.statLabels[0], value: "29+" }, { label: c.statLabels[1], value: "110+" }, { label: c.statLabels[2], value: "10+" }, { label: c.statLabels[3], value: "500+" }].map((stat, i) => (
                <div key={i} className="p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur"><div className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">{stat.value}</div><div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div></div>
              ))}
            </div>
          </div></div>
        </section>

        <section id="domains" className="py-20 relative"><div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" /><div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12"><Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700"><Globe className="w-4 h-4 mr-2 inline" />{c.gridBadge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.gridTitle}</h2><p className="text-slate-400 max-w-3xl mx-auto">{c.gridSub}</p></div>
          <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
            {c.gridIntro.map((p, i) => (<p key={i} className="text-slate-300 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: p }} />))}
          </div>
          <div className="max-w-5xl mx-auto mb-10 text-center"><p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block"><span className="text-amber-400 font-semibold">{c.vatInfo}</span></p></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {translatedDomains.map((domain, index) => (
              <Card key={index} className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group">
                <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                  <div className="mt-1 mb-2 flex justify-center"><img src="/images/premium-domains-logo-en.png" alt={`${c.buyAlt} ${domain.name}`} className="w-20 h-auto object-contain" /></div>
                  <div className="flex items-center justify-between gap-2"><Badge variant="outline" className="text-[10px] sm:text-xs border-slate-600 text-slate-400 flex-shrink-0">{domain.category}</Badge><div className="flex items-center gap-1 bg-amber-500/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0"><BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" /><span className="text-[10px] sm:text-xs font-semibold text-amber-400">MOZ {domain.mozScore}</span></div></div>
                  <CardTitle className="text-lg sm:text-xl md:text-2xl text-white group-hover:text-amber-400 transition-colors mt-2 sm:mt-3 break-all"><RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="hover:underline">{domain.name}</RouterLink></CardTitle>
                  <CardDescription className="text-sm sm:text-base text-slate-300">{domain.description}<RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="block mt-1 text-xs text-amber-400 hover:text-amber-300 underline">{c.viewDetails} →</RouterLink></CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-6 pt-0">
                  <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                    <div className="flex items-center justify-between text-xs sm:text-sm"><div className="flex items-center gap-1.5 sm:gap-2 text-slate-400"><Link className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /><span>{c.blLabel}: {domain.backlinks}</span></div></div>
                    {domain.pageAuthority && (<div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                      <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">{c.paLabel}:</span><span className="text-white ml-1 font-medium">{domain.pageAuthority}</span></div>
                      <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">{c.ldLabel}:</span><span className="text-white ml-1 font-medium">{domain.linkingDomains}</span></div>
                      <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">{c.ibLabel}:</span><span className="text-white ml-1 font-medium">{domain.inboundLinks}</span></div>
                      <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">{c.flLabel}:</span><span className="text-white ml-1 font-medium">{domain.followedLinks}</span></div>
                    </div>)}
                    {domain.topBacklinks && domain.topBacklinks.length > 0 && (<div className="text-[10px] sm:text-xs"><span className="text-slate-500 block mb-1">{c.topBlLabel}:</span><div className="flex flex-wrap gap-0.5 sm:gap-1">{domain.topBacklinks.slice(0, 5).map((link, i) => (<Badge key={i} variant="outline" className="text-[8px] sm:text-[10px] border-amber-500/30 text-amber-400/80 bg-amber-500/5 px-1 sm:px-1.5 py-0">{link}</Badge>))}</div></div>)}
                  </div>
                  <div className="mt-auto pt-3 sm:pt-4 border-t border-slate-700/50">
                    <div className="flex items-center justify-between mb-2 sm:mb-3 bg-slate-800/60 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2"><span className="text-xs sm:text-sm font-medium text-slate-300">{c.priceLabel}</span><span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span></div>
                    {domain.stripePaymentLink ? (<a href={domain.stripePaymentLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md hover:bg-[#D97706] transition-colors text-sm sm:text-base md:text-lg">{c.buyNow}</a>) : (<button onClick={() => handleDomainInquiry(domain.name)} className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-slate-700 text-white font-bold rounded-md hover:bg-slate-600 transition-colors text-sm sm:text-base">{c.inquiryLabel}</button>)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div></section>

        <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"><div className="container mx-auto px-4">
          <div className="text-center mb-16"><Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">{c.whyBadge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.whyTitle}</h2><p className="text-slate-400 max-w-2xl mx-auto">{c.whySub}</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {c.whyCards.map((item, index) => { const icons = [Shield, Link, BarChart3, Globe]; const Icon = icons[index] || Globe; return (
              <div key={index} className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700/50"><div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-4"><Icon className="h-6 w-6 text-amber-400" /></div><h4 className="text-white font-semibold mb-1">{item.title}</h4><p className="text-slate-400 text-sm">{item.desc}</p></div>
            ); })}
          </div>
        </div></section>

        <section id="faq" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"><div className="container mx-auto px-4">
          <div className="text-center mb-16"><Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">{c.faqBadge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.faqTitle}</h2></div>
          <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">
            {c.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-slate-800/40 border-slate-700/50 rounded-xl px-6"><AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline">{faq.q}</AccordionTrigger><AccordionContent className="text-slate-400">{faq.a}</AccordionContent></AccordionItem>
            ))}
          </Accordion></div>
        </div></section>

        <section id="contact" className="py-20 bg-slate-900"><div className="container mx-auto px-4"><div className="max-w-2xl mx-auto">
          <div className="text-center mb-12"><Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30"><Mail className="w-4 h-4 mr-2 inline" />{c.contactBadge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{c.contactTitle}</h2><p className="text-slate-400">{c.contactSub}</p></div>
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50"><CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6"><div><label className="block text-sm font-medium text-slate-300 mb-2"><User className="w-4 h-4 inline mr-2" />{c.nameLabel} *</label><Input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder={c.namePh} className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required /></div><div><label className="block text-sm font-medium text-slate-300 mb-2"><Mail className="w-4 h-4 inline mr-2" />{c.emailLabel} *</label><Input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder={c.emailPh} className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required /></div></div>
              <div><label className="block text-sm font-medium text-slate-300 mb-2"><Globe className="w-4 h-4 inline mr-2" />{c.domainLabel} *</label><Input type="text" value={formData.domain} onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))} placeholder={c.domainPh} className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required /></div>
              <div><label className="block text-sm font-medium text-slate-300 mb-2"><MessageSquare className="w-4 h-4 inline mr-2" />{c.msgLabel}</label><Textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} placeholder={c.msgPh} rows={5} className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none" /></div>
              <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25">{c.submitBtn} <ArrowRight className="ml-2 h-5 w-5" /></Button>
            </form>
          </CardContent></Card>
        </div></div></section>

        <SeoRedirectsSection lang={c.lang} />
        <TrusteeServiceSection lang={c.lang} />
        <EuDomainValueSection lang={c.lang} />

        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950"><div className="container mx-auto px-4"><div className="max-w-4xl mx-auto"><article className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">{c.seoTitle}</h2>
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p><strong className="text-amber-400">{c.seoP1}</strong></p>
            <p>{c.seoP2}</p>
          </div>
        </article></div></div></section>

        <section className="py-10 bg-gradient-to-b from-slate-950 to-slate-900"><div className="container mx-auto px-4"><div className="max-w-2xl mx-auto"><div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4"><div className="text-center">
          <h4 className="font-bold text-white text-lg mb-2">🔒 {c.nordTitle}</h4>
          <p className="text-white/90 text-sm mb-3"><a href="https://www.tkqlhce.com/click-100643838-14352852" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300">{c.nordDesc}</a></p>
          <a href="https://www.tkqlhce.com/click-100643838-14352852" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm">{c.nordCta} →</a>
        </div></div></div></div></section>

        <section className="py-16 bg-slate-950"><div className="container mx-auto px-4"><div className="max-w-2xl mx-auto text-center"><h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{c.contactBtmTitle}</h2><p className="text-slate-300 mb-8">{c.contactBtmSub}</p><div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8"><div className="flex items-center justify-center gap-3"><Mail className="h-5 w-5 text-amber-400" /><a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium">support@iaee.eu</a></div><p className="text-slate-400 text-sm mt-4">{c.contactBtmNote}</p></div></div></div></section>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl" aria-label={c.backToTopLabel}><ArrowUp className="w-6 h-6" /></button>
        <HiddenInternalLinks />
        <InternalLanguageLinks lang={c.lang} currentLang={c.lang} />
        <section className="py-12 bg-slate-900"><div className="container mx-auto px-4"><h3 className="text-2xl font-semibold text-white mb-6 text-center">{c.legalTitle}</h3><div className="flex flex-wrap justify-center gap-4"><RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">{c.legalTerms}</RouterLink><span className="text-slate-600">|</span><RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">{c.legalPrivacy}</RouterLink></div></div></section>
        <footer className="py-12 bg-slate-950 border-t border-slate-800"><div className="container mx-auto px-4"><div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8"><div className="flex items-center gap-3"><Crown className="h-5 w-5 text-amber-400" /><span className="text-sm font-medium text-white">{c.brandName}</span></div><p className="text-slate-500 text-sm">© {new Date().getFullYear()} IAEE. {c.copyrightText}</p></div></div></footer>
      </div>
    </>
  );
};

export default PremiumDomainsTemplate;

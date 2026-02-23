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
import { getTranslatedDomains } from "@/data/domainTranslations";
import SeoRedirectsSection from "@/components/premium-domains/shared/SeoRedirectsSection";
import TrusteeServiceSection from "@/components/premium-domains/shared/TrusteeServiceSection";
import EuDomainValueSection from "@/components/premium-domains/shared/EuDomainValueSection";

const translatedDomains = getTranslatedDomains(premiumDomains, 'ru');

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

const PremiumDomainsRU = () => {
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
      toast({ title: "Пожалуйста, исправьте ошибки", description: Object.values(errorResult.errors)[0] || "Проверьте введённые данные", variant: "destructive" });
      return;
    }
    const { data } = validation;
    const subject = `Премиум Домен Запрос: ${data.domain}`;
    const body = `Имя: ${data.name}\nEmail: ${data.email}\nДомен: ${data.domain}\n\nСообщение:\n${data.message || ""}`;
    window.location.href = buildSafeMailtoUrl("support@iaee.eu", subject, body);
    toast({ title: "Запрос отправляется", description: "Ваш почтовый клиент откроется для отправки запроса." });
  };

  const handleDomainInquiry = (domainName: string) => {
    setFormData(prev => ({ ...prev, domain: domainName }));
    scrollToSection("contact");
  };

  return (
    <>
      <Helmet>
        <html lang="ru" />
        <title>Купить Премиум Истёкшие Домены с Обратными Ссылками | Высокий Авторитет & SEO Ценность</title>
        <meta name="description" content="Купить истёкшие домены с обратными ссылками? Надёжные истёкшие домены с высоким авторитетом и SEO ценностью. Купите премиум доменные имена для быстрого продвижения в Google. Доступны немедленно." />
        <meta name="keywords" content="купить истёкший домен, истёкшие домены с обратными ссылками, домен с авторитетом, надёжные истёкшие домены, купить премиум домены, домены с SEO ценностью" />
        <link rel="canonical" href={HREFLANG_URLS.ru} />
        <meta name="robots" content="index, follow" />
        {Object.entries(HREFLANG_URLS).map(([lang, url]) => (
          <link key={lang} rel="alternate" hrefLang={lang} href={url} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={HREFLANG_URLS.en} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Купить Премиум Истёкшие Домены с Обратными Ссылками | Высокий Авторитет & SEO Ценность" />
        <meta property="og:description" content="Надёжные истёкшие домены с высоким авторитетом и SEO ценностью. Купите премиум доменные имена для быстрого продвижения в Google." />
        <meta property="og:url" content={HREFLANG_URLS.ru} />
        <meta property="og:locale" content="ru_RU" />
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
                "description": "Специалист по премиум истёкшим доменам с высоким авторитетом и SEO ценностью"
              },
              {
                "@type": "WebPage",
                "url": "${HREFLANG_URLS.ru}",
                "name": "Купить Премиум Истёкшие Домены с Обратными Ссылками | Высокий Авторитет & SEO Ценность",
                "inLanguage": "ru"
              },
              {
                "@type": "ItemList",
                "name": "Премиум Истёкшие Домены",
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
        <LanguageSwitcher currentLanguage="ru" />

        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex items-center justify-between">
            <RouterLink to="/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-shrink-0">
              <Crown className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400 flex-shrink-0" />
              <span className="text-base sm:text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent truncate">Премиум Домены</span>
            </RouterLink>
            <nav className="hidden md:flex items-center gap-4 lg:gap-6">
              <button onClick={() => scrollToSection("domains")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Домены</button>
              <button onClick={() => scrollToSection("why-premium")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">Почему Премиум?</button>
              <button onClick={() => scrollToSection("faq")} className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium">FAQ</button>
              <Button onClick={() => scrollToSection("contact")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold">Контакт</Button>
            </nav>
            <Button onClick={() => scrollToSection("domains")} className="md:hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold text-xs px-3 py-2">Домены</Button>
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
                Эксклюзивная Коллекция Премиум Доменов
              </Badge>
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Купить Премиум Истёкшие Домены с Обратными Ссылками Высокий Авторитет & SEO Ценность
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Укрепите своё онлайн-присутствие доменными именами, которые годами накапливали авторитет. Идеально для быстрого ранжирования, мощных обратных ссылок и прямых SEO-преимуществ.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button size="lg" onClick={() => scrollToSection("domains")} className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 shadow-lg shadow-amber-500/25">
                  Смотреть Домены <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection("why-premium")} className="bg-slate-800 border-slate-600 text-slate-200 hover:bg-slate-700 hover:text-white text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6">
                  Подробнее
                </Button>
              </div>
              <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 px-2">
                {[
                  { label: "Средний Балл MOZ", value: "29+" },
                  { label: "Премиум Доменов", value: "110+" },
                  { label: "Лет Опыта", value: "10+" },
                  { label: "Довольных Клиентов", value: "500+" }
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
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700"><Globe className="w-4 h-4 mr-2 inline" />Доступные Домены</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Премиум Домены на Продажу</h2>
              <p className="text-slate-400 max-w-3xl mx-auto">Каждый домен тщательно отобран на основе авторитета MOZ, профиля обратных ссылок и SEO-потенциала.</p>
            </div>

            <div className="max-w-5xl mx-auto mb-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8">
              <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-white">Ищете доменное имя с реальной SEO ценностью?</strong> У нас вы покупаете надёжные <strong className="text-amber-400">истёкшие домены с обратными ссылками</strong> и высоким авторитетом, тщательно проверенные на качество и историю.</p>
              <p className="text-slate-300 leading-relaxed mb-4"><strong className="text-amber-400">Мы специализируемся на .EU и других европейских доменных расширениях</strong> и чётко выделяемся в сегменте европейских веб-имён.</p>
              <p className="text-slate-300 leading-relaxed mb-4">Эти истёкшие домены имеют существующие обратные ссылки от <strong className="text-amber-400">авторитетных компаний, медиаинститутов и государственных организаций</strong> — важные ссылки, которые для обычных сайтов очень трудно или невозможно получить.</p>
            </div>

            <div className="max-w-5xl mx-auto mb-10 text-center">
              <p className="text-sm text-slate-300 font-medium bg-slate-800/40 border border-slate-700/40 rounded-lg px-4 py-3 inline-block">
                <span className="text-amber-400 font-semibold">Информация об НДС:</span> Цены указаны без НДС для частных клиентов в ЕС. Корпоративные клиенты в ЕС могут применить обратное начисление НДС.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
              {translatedDomains.map((domain, index) => (
                <Card key={index} className="h-full flex flex-col bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 backdrop-blur hover:border-amber-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 group">
                  <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4 md:p-6">
                    <div className="mt-1 mb-2 flex justify-center">
                      <img src="/images/premium-domains-logo-en.png" alt={`Купить ${domain.name} - Премиум Истёкший Домен с Высоким MOZ Авторитетом & SEO Ценностью`} className="w-20 h-auto object-contain" />
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
                      <RouterLink to={`/domains/${domain.name.replace(/\./g, '-')}`} className="block mt-1 text-xs text-amber-400 hover:text-amber-300 underline">Подробнее →</RouterLink>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow p-3 sm:p-4 md:p-6 pt-0">
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-slate-400"><Link className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /><span>Обратные ссылки: {domain.backlinks}</span></div>
                      </div>
                      {domain.pageAuthority && (
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-[10px] sm:text-xs">
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Авт. Страницы:</span><span className="text-white ml-1 font-medium">{domain.pageAuthority}</span></div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Ссыл. Домены:</span><span className="text-white ml-1 font-medium">{domain.linkingDomains}</span></div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Вход. Ссылки:</span><span className="text-white ml-1 font-medium">{domain.inboundLinks}</span></div>
                          <div className="bg-slate-800/50 rounded px-1.5 sm:px-2 py-0.5 sm:py-1"><span className="text-slate-500">Followed Ссылки:</span><span className="text-white ml-1 font-medium">{domain.followedLinks}</span></div>
                        </div>
                      )}
                      {domain.topBacklinks && domain.topBacklinks.length > 0 && (
                        <div className="text-[10px] sm:text-xs">
                          <span className="text-slate-500 block mb-1">Топ Обратные Ссылки:</span>
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
                        <span className="text-xs sm:text-sm font-medium text-slate-300">Цена</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400">{domain.price}</span>
                      </div>
                      {domain.stripePaymentLink ? (
                        <a href={domain.stripePaymentLink} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-[#F59E0B] text-slate-950 font-bold rounded-md shadow-md hover:bg-[#D97706] transition-colors text-sm sm:text-base md:text-lg">Купить Сейчас</a>
                      ) : (
                        <button onClick={() => handleDomainInquiry(domain.name)} className="w-full inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-slate-700 text-white font-bold rounded-md hover:bg-slate-600 transition-colors text-sm sm:text-base">Запрос</button>
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
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">Почему Премиум Домены?</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Преимущества Премиум Истёкших Доменов</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Узнайте, почему истёкшие домены с высоким авторитетом являются самой умной инвестицией для вашей SEO-стратегии.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: Shield, title: "Чистая История", desc: "Без спама и истории штрафов" },
                { icon: Link, title: "Качественные Ссылки", desc: "Из надёжных источников" },
                { icon: BarChart3, title: "Высокий DA Балл", desc: "Минимум DA 20+" },
                { icon: Globe, title: "EU/Глобальные TLD", desc: ".eu, .nl, .be, .de, .co.uk" }
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
              <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">Часто Задаваемые Вопросы</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">FAQ о Премиум Доменах & SEO</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  { q: "Что такое истёкший домен?", a: "Это доменное имя, которое не было продлено предыдущим владельцем и теперь доступно для регистрации. Такие домены часто сохраняют накопленные обратные ссылки и авторитет." },
                  { q: "Почему важны обратные ссылки?", a: "Обратные ссылки — один из важнейших факторов ранжирования в Google. Домены с качественными обратными ссылками от авторитетных сайтов имеют преимущество в поисковой выдаче." },
                  { q: "Как работает 301 редирект для SEO?", a: "301 редирект перенаправляет посетителей и поисковые системы со старого домена на ваш новый сайт, передавая ценность ссылок для лучшего ранжирования." },
                  { q: "Легально ли покупать истёкшие домены?", a: "Да, это полностью легально. Когда домен истекает и не продлевается владельцем, он становится доступным для регистрации любым желающим." },
                  { q: "Как быстро я увижу SEO результаты?", a: "Результаты различаются, но многие клиенты видят улучшения в течение 2-4 недель после настройки 301 редиректа или создания сайта на домене." },
                  { q: "Могу ли я использовать домен для любого сайта?", a: "Да, вы можете использовать домен для любых законных целей — сайт, блог, интернет-магазин, портфолио или как 301 редирект на ваш существующий сайт." },
                  { q: "Что такое MOZ Domain Authority?", a: "MOZ Domain Authority (DA) — это оценка от 1 до 100, предсказывающая, как хорошо сайт будет ранжироваться в поисковой выдаче. Более высокий DA означает более сильный авторитет." },
                  { q: "Как перенести домен к моему регистратору?", a: "После покупки вы получите код переноса (EPP/Auth-код) по электронной почте. С этим кодом вы легко перенесёте домен к своему регистратору." },
                  { q: "Предоставляете ли вы поддержку после покупки?", a: "Да, мы предлагаем полную поддержку по адресу support@iaee.eu. Мы отвечаем в течение 24 часов на все вопросы о переносе домена и технической настройке." },
                  { q: "Почему стоит покупать у специализированного продавца?", a: "Потому что вы получаете предварительно проверенное качество, избегаете рисков, имеете прозрачность по каждому домену и экономите время и деньги на собственных исследованиях." },
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
                <Badge className="mb-4 bg-amber-500/10 text-amber-400 border-amber-500/30"><Mail className="w-4 h-4 mr-2 inline" />Свяжитесь с Нами</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Запросите Информацию или Сделайте Предложение</h2>
                <p className="text-slate-400">Заинтересованы в одном из наших премиум доменов? Заполните форму, и мы свяжемся с вами в ближайшее время.</p>
              </div>
              <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2"><User className="w-4 h-4 inline mr-2" />Имя *</label>
                        <Input type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} placeholder="Ваше имя" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2"><Mail className="w-4 h-4 inline mr-2" />Email *</label>
                        <Input type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} placeholder="vash@email.ru" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2"><Globe className="w-4 h-4 inline mr-2" />Доменное Имя *</label>
                      <Input type="text" value={formData.domain} onChange={(e) => setFormData(prev => ({ ...prev, domain: e.target.value }))} placeholder="напр. ПримерДомена.eu" className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2"><MessageSquare className="w-4 h-4 inline mr-2" />Сообщение</label>
                      <Textarea value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))} placeholder="Расскажите подробнее о вашем интересе..." rows={5} className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-500 resize-none" />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-lg py-6 shadow-lg shadow-amber-500/25">Отправить Запрос <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <SeoRedirectsSection lang="ru" />
        <TrusteeServiceSection lang="ru" />
        <EuDomainValueSection lang="ru" />

        {/* SEO Content */}
        <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Купить Истёкшие Домены: Инвестируйте в Доказанный SEO-Авторитет</h2>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p><strong className="text-amber-400">Покупка истёкшего домена</strong> — самый умный способ мгновенно воспользоваться годами накопленного <strong className="text-white">доменного авторитета</strong> и <strong className="text-white">качественных обратных ссылок</strong>. В отличие от нового домена, премиум истёкший домен уже пользуется доверием Google и других поисковых систем.</p>
                  <p>Наши тщательно отобранные <strong className="text-amber-400">премиум домены</strong> имеют проверенную репутацию с обратными ссылками от авторитетных источников — Wikipedia, университетов, государственных учреждений и авторитетных новостных изданий.</p>
                  <p>Хотите ли вы <strong className="text-white">запустить интернет-магазин</strong>, создать <strong className="text-white">партнёрский сайт</strong>, или дать вашему существующему бизнесу <strong className="text-white">SEO-ускорение</strong>: истёкший домен с высоким <strong className="text-amber-400">MOZ Domain Authority (DA)</strong> даёт вам бесспорное преимущество перед конкурентами.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* NordVPN Recommendation */}
        <section className="py-10 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-4">
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-2">🔒 Защитите Свою Конфиденциальность с NordVPN</h4>
                  <p className="text-white/90 text-sm mb-3">
                    Что такое VPN? <a href="https://www.tkqlhce.com/click-100643838-14352852" target="_blank" rel="nofollow noopener noreferrer" className="underline text-yellow-300 hover:text-yellow-200">Виртуальная частная сеть (VPN)</a> шифрует ваше интернет-соединение и скрывает ваш IP-адрес, защищая личные данные от хакеров и слежки.
                  </p>
                  <p className="text-white/80 text-xs mb-4">
                    Для владельцев премиум-доменов защита онлайн-идентичности критически важна. NordVPN позволяет анонимно просматривать сайты и защищать бизнес-транзакции.
                  </p>
                  <a href="https://www.tkqlhce.com/click-100643838-14352852" target="_blank" rel="nofollow noopener noreferrer" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2 px-6 rounded-full transition-colors text-sm">
                    Получить NordVPN →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Contact */}
        <section className="py-16 bg-slate-950">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Свяжитесь с Нами</h2>
              <p className="text-slate-300 mb-8">Есть вопросы о конкретном домене или хотите получить совет о том, какой истёкший домен лучше подходит для вашего проекта?</p>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-amber-400" />
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:text-amber-300 transition-colors text-lg font-medium">support@iaee.eu</a>
                  </div>
                  <p className="text-slate-400 text-sm">Мы ответим на ваше сообщение в течение 24 часов.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-50 p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl" aria-label="Наверх">
          <ArrowUp className="w-6 h-6" />
        </button>
        <HiddenInternalLinks />

        {/* Legal Links */}
        <section className="py-12 bg-slate-900">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">Юридическая Информация</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">Условия Использования</RouterLink>
              <span className="text-slate-600">|</span>
              <RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">Политика Конфиденциальности</RouterLink>
              <span className="text-slate-600">|</span>
              <RouterLink to="/expireddomainnames/en/premium-domains-legal-documents" className="text-slate-300 hover:text-amber-400 transition-colors text-sm underline underline-offset-2">Отказ от Ответственности</RouterLink>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-slate-950 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-3">
                <Crown className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium text-white">Премиум Домены</span>
              </div>
              <p className="text-slate-500 text-sm text-center md:text-right">© {new Date().getFullYear()} IAEE. Все права защищены.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PremiumDomainsRU;

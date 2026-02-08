import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle } from "lucide-react";
import stripeLogo from "@/assets/stripe-logo.svg";
import StripeBuyButton from "@/components/StripeBuyButton";

interface PricingLangProps { lang: string; }

const translations: Record<string, Record<string, string>> = {
  cs: { badge: "Ceník", title: "Základní affiliate dokumenty", desc: "Kompletní balíček se všemi právními dokumenty pro váš affiliate web. Stáhněte si balíček snadno ve svém jazyce — nebo ve více jazycích — a připravte svůj affiliate web na mezinárodní použití.", price: "€79", priceLabel: "jednorázově", cardTitle: "Kompletní balíček dokumentů", cardDesc: "Všechny základní právní dokumenty pro neomezené použití", i1: "Zásady ochrany osobních údajů (GDPR)", i2: "Prohlášení", i3: "Affiliate prohlášení (FTC)", i4: "Obchodní podmínky", i5: "Zásady cookies", i6: "Průvodce implementací", stripe: "Bezpečná platba přes Stripe • Automaticky převedeno do vaší měny", noReturn: "Důležité: Bez možnosti vrácení", noReturnDesc: "Naše produkty nelze vrátit a nenabízíme záruku vrácení peněz. To dává smysl u digitálních dokumentů, které lze po stažení snadno kopírovat." },
  hu: { badge: "Árak", title: "Alapvető affiliate dokumentumok", desc: "Teljes csomag minden jogi dokumentummal az affiliate weboldalához. Töltse le a csomagot saját nyelvén — vagy több nyelven — a nemzetközi használathoz.", price: "€79", priceLabel: "egyszeri", cardTitle: "Teljes dokumentumcsomag", cardDesc: "Minden alapvető jogi dokumentum korlátlan használatra", i1: "Adatvédelmi irányelvek (GDPR)", i2: "Nyilatkozat", i3: "Affiliate nyilatkozat (FTC)", i4: "Általános feltételek", i5: "Cookie szabályzat", i6: "Megvalósítási útmutató", stripe: "Biztonságos fizetés Stripe-on keresztül • Automatikusan átváltva a helyi pénznemre", noReturn: "Fontos: Nincs visszatérítés", noReturnDesc: "Termékeink nem visszaküldhetők és nem kínálunk pénzvisszafizetési garanciát. Ez digitális dokumentumok esetében logikus." },
  uk: { badge: "Ціни", title: "Основні affiliate документи", desc: "Повний пакет з усіма юридичними документами для вашого affiliate сайту. Завантажте пакет своєю мовою — або кількома мовами — для міжнародного використання.", price: "€79", priceLabel: "одноразово", cardTitle: "Повний пакет документів", cardDesc: "Усі основні юридичні документи для необмеженого використання", i1: "Політика конфіденційності (GDPR)", i2: "Застереження", i3: "Affiliate розкриття (FTC)", i4: "Умови використання", i5: "Політика cookies", i6: "Посібник з впровадження", stripe: "Безпечна оплата через Stripe • Автоматична конвертація у вашу валюту", noReturn: "Важливо: Без повернення", noReturnDesc: "Наші продукти не підлягають поверненню і ми не пропонуємо гарантію повернення коштів." },
  sk: { badge: "Cenník", title: "Základné affiliate dokumenty", desc: "Kompletný balíček so všetkými právnymi dokumentmi pre váš affiliate web.", price: "€79", priceLabel: "jednorázovo", cardTitle: "Kompletný balíček dokumentov", cardDesc: "Všetky základné právne dokumenty pre neobmedzené použitie", i1: "Zásady ochrany osobných údajov (GDPR)", i2: "Vyhlásenie", i3: "Affiliate vyhlásenie (FTC)", i4: "Obchodné podmienky", i5: "Zásady cookies", i6: "Sprievodca implementáciou", stripe: "Bezpečná platba cez Stripe • Automaticky prevedené do vašej meny", noReturn: "Dôležité: Bez možnosti vrátenia", noReturnDesc: "Naše produkty nie je možné vrátiť a neponúkame záruku vrátenia peňazí." },
  hr: { badge: "Cijene", title: "Osnovni affiliate dokumenti", desc: "Kompletni paket sa svim pravnim dokumentima za vaš affiliate web.", price: "€79", priceLabel: "jednokratno", cardTitle: "Kompletni paket dokumenata", cardDesc: "Svi osnovni pravni dokumenti za neograničenu upotrebu", i1: "Politika privatnosti (GDPR)", i2: "Izjava o odricanju", i3: "Affiliate izjava (FTC)", i4: "Uvjeti korištenja", i5: "Politika kolačića", i6: "Vodič za implementaciju", stripe: "Sigurno plaćanje putem Stripe • Automatski pretvoreno u vašu valutu", noReturn: "Važno: Bez povrata", noReturnDesc: "Naši proizvodi se ne mogu vratiti i ne nudimo jamstvo povrata novca." },
  sr: { badge: "Цене", title: "Основни affiliate документи", desc: "Комплетан пакет са свим правним документима за ваш affiliate сајт.", price: "€79", priceLabel: "једнократно", cardTitle: "Комплетан пакет докумената", cardDesc: "Сви основни правни документи за неограничену употребу", i1: "Политика приватности (GDPR)", i2: "Изјава о одрицању", i3: "Affiliate изјава (FTC)", i4: "Услови коришћења", i5: "Политика колачића", i6: "Водич за имплементацију", stripe: "Сигурно плаћање путем Stripe • Аутоматски претворено у вашу валуту", noReturn: "Важно: Без поврата", noReturnDesc: "Наши производи се не могу вратити и не нудимо гаранцију поврата новца." },
  sl: { badge: "Cenik", title: "Bistveni affiliate dokumenti", desc: "Celoten paket z vsemi pravnimi dokumenti za vašo affiliate stran.", price: "€79", priceLabel: "enkratno", cardTitle: "Celoten paket dokumentov", cardDesc: "Vsi bistveni pravni dokumenti za neomejeno uporabo", i1: "Pravilnik o zasebnosti (GDPR)", i2: "Izjava o omejitvi odgovornosti", i3: "Affiliate razkritje (FTC)", i4: "Splošni pogoji", i5: "Pravilnik o piškotkih", i6: "Vodnik za implementacijo", stripe: "Varno plačilo prek Stripe • Samodejno pretvorjeno v vašo valuto", noReturn: "Pomembno: Brez vračila", noReturnDesc: "Naših izdelkov ni mogoče vrniti in ne ponujamo garancije vračila denarja." },
};

const PricingMulti = ({ lang }: PricingLangProps) => {
  const t = translations[lang];
  const items = [t.i1, t.i2, t.i3, t.i4, t.i5, t.i6];
  return (
    <section id="pricing" className="py-20 bg-background"><div className="container">
      <div className="text-center mb-12"><Badge variant="outline" className="mb-4">{t.badge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.desc}</p></div>
      <div className="max-w-2xl mx-auto"><Card className="border-primary shadow-xl">
        <CardHeader className="text-center pb-8"><div className="mb-4"><span className="text-5xl font-bold text-primary">{t.price}</span><span className="text-muted-foreground ml-2">{t.priceLabel}</span></div><CardTitle className="text-2xl">{t.cardTitle}</CardTitle><CardDescription className="text-base">{t.cardDesc}</CardDescription></CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">{items.map((item, i) => (<div key={i} className="flex items-center gap-3"><div className="h-5 w-5 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0"><Check className="h-3 w-3 text-white" /></div><span className="text-foreground">{item}</span></div>))}</div>
          <div className="pt-6 border-t flex justify-center"><StripeBuyButton /></div>
          <div className="flex items-center justify-center gap-2 mt-4"><img src={stripeLogo} alt="Stripe" className="h-5 w-5" /><p className="text-sm font-medium text-muted-foreground">{t.stripe}</p></div>
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3"><div className="flex gap-2"><AlertTriangle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" /><div><h4 className="font-semibold text-sm text-foreground mb-0.5">{t.noReturn}</h4><p className="text-xs text-muted-foreground">{t.noReturnDesc}</p></div></div></div>
        </CardContent>
      </Card></div>
    </div></section>
  );
};

export const PricingCS = () => <PricingMulti lang="cs" />;
export const PricingHU = () => <PricingMulti lang="hu" />;
export const PricingUK = () => <PricingMulti lang="uk" />;
export const PricingSK = () => <PricingMulti lang="sk" />;
export const PricingHR = () => <PricingMulti lang="hr" />;
export const PricingSR = () => <PricingMulti lang="sr" />;
export const PricingSL = () => <PricingMulti lang="sl" />;

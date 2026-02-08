import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const reviewsData: Record<string, { badge: string; title: string; desc: string; reviews: { name: string; role: string; text: string }[] }> = {
  cs: { badge: "Recenze", title: "Co říkají naši zákazníci", desc: "Zjistěte, proč majitelé hotelů a cestovních platforem důvěřují našim právním dokumentům", reviews: [{ name: "Emma Thompson", role: "Majitelka hotelu", text: "Provoz butikového hotelu vyžaduje řádnou právní ochranu a tyto dokumenty poskytly přesně to, co jsem potřebovala. Storno podmínky a obchodní podmínky jsou pro hosty křišťálově jasné a soulad s GDPR mi dal klid." }, { name: "Lucas Martinez", role: "Zakladatel cestovní platformy", text: "Jako správce rezervační platformy byly tyto právní šablony záchranou. Pokrývají vše od ochrany dat po prohlášení o odpovědnosti a průvodce implementací zjednodušil nastavení." }] },
  hu: { badge: "Vélemények", title: "Mit mondanak ügyfeleink", desc: "Fedezze fel, miért bíznak szállodatulajdonosok és utazási platformok jogi dokumentumainkban", reviews: [{ name: "Emma Thompson", role: "Szállodatulajdonos", text: "Egy butikhotel üzemeltetése megfelelő jogi védelmet igényel, és ezek a dokumentumok pontosan azt nyújtották, amire szükségem volt. A lemondási feltételek és az általános feltételek kristálytiszták a vendégek számára." }, { name: "Lucas Martinez", role: "Utazási platform alapítója", text: "Foglalási platform kezelőjeként ezek a jogi sablonok megmentették az életemet. Mindent lefednek az adatvédelemtől a felelősségi nyilatkozatokig." }] },
  uk: { badge: "Відгуки", title: "Що кажуть наші клієнти", desc: "Дізнайтеся, чому власники готелів та туристичних платформ довіряють нашим юридичним документам", reviews: [{ name: "Emma Thompson", role: "Власниця готелю", text: "Управління бутик-готелем вимагає належного юридичного захисту, і ці документи надали саме те, що мені потрібно. Умови скасування та умови використання кристально зрозумілі для гостей." }, { name: "Lucas Martinez", role: "Засновник туристичної платформи", text: "Як менеджер платформи бронювання, ці юридичні шаблони стали порятунком. Вони охоплюють все від захисту даних до застережень про відповідальність." }] },
  sk: { badge: "Recenzie", title: "Čo hovoria naši zákazníci", desc: "Zistite, prečo majitelia hotelov a cestovných platforiem dôverujú našim právnym dokumentom", reviews: [{ name: "Emma Thompson", role: "Majiteľka hotela", text: "Prevádzka butikového hotela vyžaduje riadnu právnu ochranu a tieto dokumenty poskytli presne to, čo som potrebovala." }, { name: "Lucas Martinez", role: "Zakladateľ cestovnej platformy", text: "Ako správca rezervačnej platformy boli tieto právne šablóny záchranou. Pokrývajú všetko od ochrany dát po vyhlásenia o zodpovednosti." }] },
  hr: { badge: "Recenzije", title: "Što kažu naši klijenti", desc: "Otkrijte zašto vlasnici hotela i putničkih platformi vjeruju našim pravnim dokumentima", reviews: [{ name: "Emma Thompson", role: "Vlasnica hotela", text: "Vođenje boutique hotela zahtijeva odgovarajuću pravnu zaštitu, a ovi dokumenti pružili su upravo ono što mi je trebalo." }, { name: "Lucas Martinez", role: "Osnivač putničke platforme", text: "Kao upravitelj platforme za rezervacije, ovi pravni predlošci su bili spas. Pokrivaju sve od zaštite podataka do izjava o odricanju." }] },
  sr: { badge: "Рецензије", title: "Шта кажу наши клијенти", desc: "Откријте зашто власници хотела и путничких платформи верују нашим правним документима", reviews: [{ name: "Emma Thompson", role: "Власница хотела", text: "Вођење бутик хотела захтева одговарајућу правну заштиту, а ови документи пружили су управо оно што ми је требало." }, { name: "Lucas Martinez", role: "Оснивач путничке платформе", text: "Као управитељ платформе за резервације, ови правни шаблони су били спас." }] },
  sl: { badge: "Mnenja", title: "Kaj pravijo naše stranke", desc: "Odkrijte, zakaj lastniki hotelov in potovalnih platform zaupajo našim pravnim dokumentom", reviews: [{ name: "Emma Thompson", role: "Lastnica hotela", text: "Vodenje butičnega hotela zahteva ustrezno pravno zaščito in ti dokumenti so zagotovili natanko to, kar sem potrebovala." }, { name: "Lucas Martinez", role: "Ustanovitelj potovalne platforme", text: "Kot upravitelj platforme za rezervacije so bile te pravne predloge rešilne. Pokrivajo vse od zaščite podatkov do izjav o odgovornosti." }] },
};

interface ReviewsMultiProps { lang: string; }
const ReviewsMulti = ({ lang }: ReviewsMultiProps) => {
  const t = reviewsData[lang];
  return (
    <section className="py-20 bg-background"><div className="container">
      <div className="text-center mb-12"><Badge variant="outline" className="mb-4">{t.badge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.desc}</p></div>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {t.reviews.map((review, index) => (<Card key={index} className="hover:shadow-lg transition-shadow"><CardContent className="pt-6">
          <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
          <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
          <div className="border-t pt-4"><p className="font-semibold text-foreground">{review.name}</p><p className="text-sm text-muted-foreground">{review.role}</p></div>
        </CardContent></Card>))}
      </div>
    </div></section>
  );
};

export const ReviewsCS = () => <ReviewsMulti lang="cs" />;
export const ReviewsHU = () => <ReviewsMulti lang="hu" />;
export const ReviewsUK = () => <ReviewsMulti lang="uk" />;
export const ReviewsSK = () => <ReviewsMulti lang="sk" />;
export const ReviewsHR = () => <ReviewsMulti lang="hr" />;
export const ReviewsSR = () => <ReviewsMulti lang="sr" />;
export const ReviewsSL = () => <ReviewsMulti lang="sl" />;

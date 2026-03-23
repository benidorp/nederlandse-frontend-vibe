import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import SafeMarkdown from "@/components/ui/safe-markdown";

const faqData: Record<string, { badge: string; title: string; desc: string; items: { q: string; a: string }[] }> = {
  cs: { badge: "FAQ", title: "Často kladené otázky", desc: "Odpovědi na nejčastější otázky o právních dokumentech pro affiliate", items: [
    { q: "Proč jsou právní dokumenty důležité pro affiliate stránky", a: "Jako affiliate marketér jste ze zákona povinni být transparentní ohledně svého obchodního modelu a způsobu nakládání s daty návštěvníků. Bez řádných právních dokumentů riskujete:\n\n• Vysoké pokuty od regulátorů — až €20 milionů nebo 4 % ročního obratu\n• Nároky spotřebitelů za zavádějící informace\n• Vyřazení z affiliate sítí\n• Poškození reputace a ztrátu důvěry" },
    { q: "Jak integrovat dokumenty na svůj web", a: "**Umístění v patičce (povinné):**\nUmístěte odkazy na všechny právní dokumenty do patičky každé stránky.\n\n**V článcích:**\nKrátké prohlášení na začátku článku s affiliate odkazy.\n\n**U affiliate odkazů:**\nPoužijte zkratku jako * nebo [AD] přímo vedle odkazu." },
    { q: "Často kladené otázky (FAQ)", a: "**Jsou tyto šablony platné v celé Evropě?**\nAno, naše šablony jsou v souladu s GDPR.\n\n**Potřebuji konzultaci s právníkem?**\nNaše šablony jsou právně přezkoumány, ale pro složité situace doporučujeme právní poradenství.\n\n**Mohu použít šablony pro více webů?**\nAno! Při nákupu získáte neomezenou licenci.\n\n**V jakých jazycích jsou šablony dostupné?**\nŠablony lze stáhnout ve více jazycích pro mezinárodní použití." },
    { q: "Právní prohlášení a odpovědnost", a: "**Důležité prohlášení:**\nTyto šablony dokumentů byly pečlivě připraveny a přezkoumány, ale slouží jako výchozí bod pro váš právní soulad. Legal Affiliate Agreement neposkytuje právní poradenství a nenese odpovědnost za škody vzniklé použitím těchto šablon.\n\n**Co nabízíme:**\n• Profesionálně připravené šablony\n• Pravidelné aktualizace\n• Jasné pokyny k implementaci\n• E-mailovou podporu" },
  ]},
  hu: { badge: "GYIK", title: "Gyakran ismételt kérdések", desc: "Válaszok a jogi dokumentumokkal kapcsolatos leggyakoribb kérdésekre", items: [
    { q: "Miért fontosak a jogi dokumentumok az affiliate oldalakhoz", a: "Affiliate marketingesként jogilag köteles átláthatónak lenni üzleti modelljéről. Megfelelő jogi dokumentumok nélkül kockáztatja:\n\n• Magas bírságokat — akár €20 millió vagy az éves bevétel 4%-a\n• Fogyasztói igényeket félrevezető információkért\n• Kizárást az affiliate hálózatokból\n• Hírnév károsodást" },
    { q: "Hogyan integráljuk a dokumentumokat a weboldalra", a: "**Láblécben (kötelező):**\nHelyezze el a linkeket minden oldalon.\n\n**Cikkenként:**\nRövid nyilatkozat az affiliate linkeket tartalmazó cikkek elején.\n\n**Az affiliate linkek mellett:**\nHasználjon jelölést, mint * vagy [AD]." },
    { q: "Gyakran ismételt kérdések", a: "**Érvényesek ezek a sablonok egész Európában?**\nIgen, GDPR-nak megfelelnek.\n\n**Szükségem van ügyvédre?**\nSablonaink jogilag felülvizsgáltak.\n\n**Használhatom több weboldalon?**\nIgen! Korlátlan licensz.\n\n**Milyen nyelveken érhetők el?**\nTöbb nyelven letölthető." },
    { q: "Jogi nyilatkozatok és felelősség", a: "**Fontos nyilatkozat:**\nEzek a sablonok gondosan készültek, de kiindulópontként szolgálnak. A Legal Affiliate Agreement nem nyújt jogi tanácsadást.\n\n**Amit kínálunk:**\n• Professzionálisan készített sablonok\n• Rendszeres frissítések\n• Világos implementációs útmutatók\n• E-mail támogatás" },
  ]},
  uk: { badge: "FAQ", title: "Поширені запитання", desc: "Відповіді на найпоширеніші запитання про юридичні документи", items: [
    { q: "Чому юридичні документи важливі для affiliate сайтів", a: "Як affiliate маркетолог, ви зобов'язані бути прозорими. Без документів ви ризикуєте:\n\n• Високими штрафами — до €20 мільйонів\n• Претензіями споживачів\n• Видаленням з affiliate мереж\n• Втратою довіри" },
    { q: "Як інтегрувати документи на сайт", a: "**У підвалі (обов'язково):**\nРозмістіть посилання на кожній сторінці.\n\n**У статтях:**\nКоротке розкриття на початку.\n\n**Біля affiliate посилань:**\nВикористовуйте позначку * або [AD]." },
    { q: "Поширені запитання", a: "**Чи дійсні шаблони в Європі?**\nТак, відповідають GDPR.\n\n**Чи потрібен юрист?**\nШаблони перевірені юридично.\n\n**Можна використовувати для кількох сайтів?**\nТак! Необмежена ліцензія.\n\n**Якими мовами доступні?**\nКількома мовами." },
    { q: "Юридичні застереження та відповідальність", a: "**Важливе застереження:**\nЦі шаблони ретельно підготовлені, але є відправною точкою. Legal Affiliate Agreement не надає юридичних консультацій.\n\n**Що ми пропонуємо:**\n• Професійні шаблони\n• Регулярні оновлення\n• Чіткі інструкції\n• Email підтримку" },
  ]},
  sk: { badge: "FAQ", title: "Často kladené otázky", desc: "Odpovede na najčastejšie otázky o právnych dokumentoch", items: [
    { q: "Prečo sú právne dokumenty dôležité", a: "Ako affiliate marketér ste zo zákona povinný byť transparentný. Bez dokumentov riskujete:\n\n• Vysoké pokuty — až €20 miliónov\n• Nároky spotrebiteľov\n• Vylúčenie z affiliate sietí\n• Poškodenie reputácie" },
    { q: "Ako integrovať dokumenty na web", a: "**V päte (povinné):**\nUmiestnite odkazy na každej stránke.\n\n**V článkoch:**\nKrátke vyhlásenie na začiatku.\n\n**Pri affiliate odkazoch:**\nPoužite skratku * alebo [AD]." },
    { q: "Často kladené otázky", a: "**Sú šablóny platné v celej Európe?**\nÁno, v súlade s GDPR.\n\n**Potrebujem právnika?**\nŠablóny sú právne preverené.\n\n**Môžem použiť pre viac webov?**\nÁno! Neobmedzená licencia." },
    { q: "Právne vyhlásenia a zodpovednosť", a: "**Dôležité vyhlásenie:**\nTieto šablóny slúžia ako východiskový bod. Legal Affiliate Agreement neposkytuje právne poradenstvo.\n\n**Čo ponúkame:**\n• Profesionálne šablóny\n• Pravidelné aktualizácie\n• Jasné pokyny\n• E-mailovú podporu" },
  ]},
  hr: { badge: "FAQ", title: "Često postavljana pitanja", desc: "Odgovori na najčešća pitanja o pravnim dokumentima", items: [
    { q: "Zašto su pravni dokumenti važni", a: "Kao affiliate marketer zakonski ste obvezni biti transparentni. Bez dokumenata riskirate:\n\n• Visoke kazne — do €20 milijuna\n• Zahtjeve potrošača\n• Isključenje iz affiliate mreža\n• Oštećenje ugleda" },
    { q: "Kako integrirati dokumente na web", a: "**U podnožju (obvezno):**\nPostavite linkove na svakoj stranici.\n\n**U člancima:**\nKratka izjava na početku.\n\n**Kod affiliate linkova:**\nKoristite oznaku * ili [AD]." },
    { q: "Često postavljana pitanja", a: "**Jesu li predlošci valjani u cijeloj Europi?**\nDa, usklađeni s GDPR-om.\n\n**Trebam li odvjetnika?**\nPredlošci su pravno provjereni.\n\n**Mogu li koristiti za više stranica?**\nDa! Neograničena licenca." },
    { q: "Pravne izjave i odgovornost", a: "**Važna izjava:**\nOvi predlošci služe kao polazište. Legal Affiliate Agreement ne pruža pravne savjete.\n\n**Što nudimo:**\n• Profesionalne predloške\n• Redovita ažuriranja\n• Jasne upute\n• Email podršku" },
  ]},
  sr: { badge: "FAQ", title: "Често постављана питања", desc: "Одговори на најчешћа питања о правним документима", items: [
    { q: "Зашто су правни документи важни", a: "Као affiliate маркетер законски сте обавезни бити транспарентни. Без докумената ризикујете:\n\n• Високе казне — до €20 милиона\n• Захтеве потрошача\n• Искључење из affiliate мрежа\n• Оштећење угледа" },
    { q: "Како интегрисати документе на сајт", a: "**У подножју (обавезно):**\nПоставите линкове на свакој страници.\n\n**У чланцима:**\nКратка изјава на почетку.\n\n**Код affiliate линкова:**\nКористите ознаку * или [AD]." },
    { q: "Често постављана питања", a: "**Да ли су шаблони важећи у целој Европи?**\nДа, усклађени са GDPR-ом.\n\n**Треба ли ми адвокат?**\nШаблони су правно проверени.\n\n**Могу ли користити за више сајтова?**\nДа! Неограничена лиценца." },
    { q: "Правне изјаве и одговорност", a: "**Важна изјава:**\nОви шаблони служе као полазиште. Legal Affiliate Agreement не пружа правне савете.\n\n**Шта нудимо:**\n• Професионалне шаблоне\n• Редовна ажурирања\n• Јасна упутства\n• Email подршку" },
  ]},
  sl: { badge: "FAQ", title: "Pogosta vprašanja", desc: "Odgovori na najpogostejša vprašanja o pravnih dokumentih", items: [
    { q: "Zakaj so pravni dokumenti pomembni", a: "Kot affiliate tržnik ste zakonsko obvezani biti pregledni. Brez dokumentov tvegate:\n\n• Visoke globe — do €20 milijonov\n• Zahtevke potrošnikov\n• Izključitev iz affiliate mrež\n• Poškodovanje ugleda" },
    { q: "Kako integrirati dokumente na stran", a: "**V nogi (obvezno):**\nNamestite povezave na vsaki strani.\n\n**V člankih:**\nKratko razkritje na začetku.\n\n**Pri affiliate povezavah:**\nUporabite oznako * ali [AD]." },
    { q: "Pogosta vprašanja", a: "**Ali so predloge veljavne po vsej Evropi?**\nDa, skladne z GDPR.\n\n**Ali potrebujem odvetnika?**\nPredloge so pravno pregledane.\n\n**Ali lahko uporabim za več strani?**\nDa! Neomejena licenca." },
    { q: "Pravne izjave in odgovornost", a: "**Pomembna izjava:**\nTe predloge služijo kot izhodišče. Legal Affiliate Agreement ne nudi pravnih nasvetov.\n\n**Kaj ponujamo:**\n• Profesionalne predloge\n• Redne posodobitve\n• Jasna navodila\n• Email podporo" },
  ]},
};

interface FAQMultiProps { lang: string; }
const FAQMulti = ({ lang }: FAQMultiProps) => {
  const t = faqData[lang];
  return (
    <section className="py-20 bg-muted/50"><div className="container">
      <div className="text-center mb-12"><Badge variant="outline" className="mb-4">{t.badge}</Badge><h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2><p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.desc}</p></div>
      <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="w-full">
        {t.items.map((item, i) => (<AccordionItem key={i} value={`item-${i}`}><AccordionTrigger className="text-left text-lg font-semibold">{item.q}</AccordionTrigger><AccordionContent className="text-base text-muted-foreground"><SafeMarkdown content={item.a} /></AccordionContent></AccordionItem>))}
      </Accordion></div>
    </div></section>
  );
};

export const FAQCS = () => <FAQMulti lang="cs" />;
export const FAQHU = () => <FAQMulti lang="hu" />;
export const FAQUK = () => <FAQMulti lang="uk" />;
export const FAQSK = () => <FAQMulti lang="sk" />;
export const FAQHR = () => <FAQMulti lang="hr" />;
export const FAQSR = () => <FAQMulti lang="sr" />;
export const FAQSL = () => <FAQMulti lang="sl" />;

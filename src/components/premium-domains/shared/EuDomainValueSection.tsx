type Lang = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk';

const t: Record<Lang, {
  seoTitle: string; seoP1: string; seoP2: string; seoP3: string; seoP4: string; seoCta: string; seoCtaSub: string;
  euTitle: string; euP1: string; euP2: string; euP3: string; euP4: string; euP5: string; euP6: string;
}> = {
  sv: {
    seoTitle: "Köp Utgångna Domännamn: Investera i Bevisad SEO-Auktoritet",
    seoP1: "Att köpa ett utgånget domännamn är det smartaste sättet att omedelbart dra nytta av års ackumulerad domänauktoritet och kvalitativa bakåtlänkar.",
    seoP2: "Våra noggrant utvalda premiumdomäner har ett bevisat track record med bakåtlänkar från auktoritativa källor som Wikipedia, universitet, statliga institutioner och ansedda nyhetssajter.",
    seoP3: "Oavsett om du vill starta en webbshop, lansera en affiliatesajt eller ge ditt befintliga företag en SEO-boost: ett utgånget domännamn med hög MOZ Domain Authority ger dig en otvivelaktig fördel.",
    seoP4: "Varje premiumdomän i vår portfölj är kontrollerad för spamfri historik, relevanta bakåtlänkar och bra länkprofiler.",
    seoCta: "Redo att accelerera din onlineframgång?", seoCtaSub: "Utforska vårt portfölj av 110+ premium utgångna domännamn.",
    euTitle: "Varför Premium Europeiska .EU-Domännamn Har Sådant Värde",
    euP1: "Europeiska .EU-domäner representerar en exklusiv klass av digitala tillgångar. Till skillnad från .COM eller .NET som är tillgängliga för alla, kräver .EU-domäner en koppling till Europa — vilket skapar en naturlig tröskel som ökar deras värde.",
    euP2: "Många av dessa domäner härstammar från officiella EU-finansierade projekt, forskningsinitiativ och kulturella program. Denna institutionella bakgrund ger dem backlinks från Europa.eu, nationella universitet och myndigheter.",
    euP3: "Medan .COM-marknaden är övermättad med miljontals registrerade domäner, erbjuder .EU-segmentet fortfarande möjligheter att hitta domäner med genuin auktoritet och ren historik.",
    euP4: "Dessutom åtnjuter .EU-domäner särskilt förtroende bland europeiska konsumenter. Forskning visar att europeiska användare uppfattar .EU-webbplatser som mer tillförlitliga för europeiska tjänster.",
    euP5: "Med det växande fokuset på europeisk digital suveränitet och GDPR-efterlevnad positionerar en .EU-domän ditt varumärke som europeiskt medvetet och pålitligt.",
    euP6: "Att investera i en premium .EU-domän betyder att du förvärvar en digital tillgång med institutionellt stöd, geografisk relevans och inbyggd SEO-auktoritet."
  },
  no: {
    seoTitle: "Kjøp Utgåtte Domenenavn: Invester i Bevist SEO-Autoritet",
    seoP1: "Å kjøpe et utgått domenenavn er den smarteste måten å umiddelbart dra nytte av års akkumulert domeneautoritet og kvalitetstilbakekoblinger.",
    seoP2: "Våre nøye utvalgte premiumdomener har et bevist track record med tilbakekoblinger fra autoritative kilder som Wikipedia, universiteter og myndigheter.",
    seoP3: "Uansett om du vil starte en nettbutikk, lansere en affiliateside eller gi din eksisterende virksomhet en SEO-boost: et utgått domene med høy MOZ DA gir deg en ubestridelig fordel.",
    seoP4: "Hvert premiumdomene i vår portefølje er sjekket for spamfri historikk, relevante tilbakekoblinger og gode lenkeprofiler.",
    seoCta: "Klar til å akselerere din onlinesuksess?", seoCtaSub: "Utforsk vår portefølje med 110+ premium utgåtte domenenavn.",
    euTitle: "Hvorfor Premium Europeiske .EU-Domenenavn Har Slik Verdi",
    euP1: "Europeiske .EU-domener representerer en eksklusiv klasse digitale eiendeler med naturlig terskel som øker deres verdi.",
    euP2: "Mange av disse domenene stammer fra offisielle EU-finansierte prosjekter med tilbakekoblinger fra Europa.eu og universiteter.",
    euP3: ".EU-segmentet tilbyr fortsatt muligheter å finne domener med genuin autoritet.",
    euP4: ".EU-domener nyter spesiell tillit blant europeiske forbrukere.",
    euP5: "Med fokus på europeisk digital suverenitet posisjonerer en .EU-domene merkevaren din som europeisk bevisst.",
    euP6: "Å investere i et premium .EU-domene betyr å skaffe en digital eiendel med institusjonell støtte og innebygd SEO-autoritet."
  },
  da: {
    seoTitle: "Køb Udløbne Domænenavne: Invester i Bevist SEO-Autoritet",
    seoP1: "At købe et udløbt domænenavn er den smarteste måde at drage fordel af års akkumuleret domæneautoritet og kvalitetsbacklinks.",
    seoP2: "Vores omhyggeligt udvalgte premiumdomæner har dokumenteret track record med backlinks fra autoritative kilder.",
    seoP3: "Uanset om du vil starte en webshop, lancere et affiliatesite eller give din eksisterende virksomhed et SEO-boost.",
    seoP4: "Hvert premiumdomæne i vores portefølje er tjekket for spamfri historik og gode linkprofiler.",
    seoCta: "Klar til at accelerere din onlinesucces?", seoCtaSub: "Udforsk vores portefølje med 110+ premium udløbne domænenavne.",
    euTitle: "Hvorfor Premium Europæiske .EU-Domænenavne Har Sådan Værdi",
    euP1: "Europæiske .EU-domæner repræsenterer en eksklusiv klasse af digitale aktiver.", euP2: "Mange stammer fra officielle EU-finansierede projekter.",
    euP3: ".EU-segmentet tilbyder stadig muligheder for domæner med ægte autoritet.", euP4: ".EU-domæner nyder særlig tillid hos europæiske forbrugere.",
    euP5: "En .EU-domæne positionerer dit brand som europæisk bevidst.", euP6: "At investere i et premium .EU-domæne giver en digital aktiv med institutionel støtte."
  },
  fi: {
    seoTitle: "Osta Vanhentuneita Verkkotunnuksia: Investoi Todistettuun SEO-Auktoriteettiin",
    seoP1: "Vanhentuneen verkkotunnuksen ostaminen on älykkäin tapa hyötyä välittömästi vuosien kerääntyneestä auktoriteetista.",
    seoP2: "Huolellisesti valikoiduilla premium-verkkotunnuksillamme on todistetusti takalinkkejä arvovaltaisista lähteistä.",
    seoP3: "Haluatpa avata verkkokaupan, lanseerata affiliate-sivuston tai antaa yrityksellesi SEO-piristysruiskeen.",
    seoP4: "Jokainen portfolio-verkkotunnuksemme on tarkistettu roskapostittoman historian ja hyvien linkkiprofiilien varalta.",
    seoCta: "Valmis nopeuttamaan online-menestystäsi?", seoCtaSub: "Tutustu yli 110 premium-vanhentuneen verkkotunnuksen portfolioomme.",
    euTitle: "Miksi Premium Eurooppalaiset .EU-Verkkotunnukset Ovat Niin Arvokkaita",
    euP1: "Eurooppalaiset .EU-verkkotunnukset edustavat eksklusiivista digitaalisten omaisuuserien luokkaa.", euP2: "Monet ovat peräisin virallisista EU-rahoitteisista hankkeista.",
    euP3: ".EU-segmentti tarjoaa edelleen mahdollisuuksia löytää aitoa auktoriteettia.", euP4: ".EU-verkkotunnukset nauttivat erityistä luottamusta eurooppalaisten kuluttajien keskuudessa.",
    euP5: ".EU-verkkotunnus asemoi brändisi eurooppalaisesti tietoiseksi.", euP6: "Premium .EU-verkkotunnukseen investoiminen tarkoittaa institutionaalista tukea ja sisäänrakennettua auktoriteettia."
  },
  cs: {
    seoTitle: "Kupte Expirované Domény: Investujte do Prokázané SEO Autority",
    seoP1: "Koupě expirované domény je nejchytřejší způsob, jak okamžitě těžit z let nashromážděné autority.", seoP2: "Naše pečlivě vybrané prémiové domény mají prokázané zpětné odkazy z autoritativních zdrojů.",
    seoP3: "Ať chcete spustit e-shop, affiliate web nebo posílit svůj byznys v SEO.", seoP4: "Každá doména v portfoliu je prověřena na čistou historii a kvalitní profil odkazů.",
    seoCta: "Připraveni zrychlit svůj online úspěch?", seoCtaSub: "Prozkoumejte naše portfolio 110+ prémiových expirovaných domén.",
    euTitle: "Proč Mají Prémiové Evropské .EU Domény Takovou Hodnotu",
    euP1: "Evropské .EU domény představují exkluzivní třídu digitálních aktiv.", euP2: "Mnohé pocházejí z oficiálních EU projektů.", euP3: ".EU segment stále nabízí příležitosti.", euP4: ".EU domény požívají zvláštní důvěru.", euP5: ".EU doména pozicuje vaši značku jako evropsky uvědomělou.", euP6: "Investice do prémiové .EU domény znamená institucionální podporu."
  },
  el: {
    seoTitle: "Αγοράστε Ληγμένα Domains: Επενδύστε σε Αποδεδειγμένη SEO Εξουσία",
    seoP1: "Η αγορά ληγμένου domain είναι ο πιο έξυπνος τρόπος να επωφεληθείτε από χρόνια συσσωρευμένης εξουσίας.", seoP2: "Τα επιλεγμένα premium domains μας έχουν αποδεδειγμένα backlinks από αξιόπιστες πηγές.",
    seoP3: "Είτε θέλετε e-shop, affiliate site ή SEO boost για την επιχείρησή σας.", seoP4: "Κάθε domain στο χαρτοφυλάκιό μας ελέγχεται για καθαρό ιστορικό.",
    seoCta: "Έτοιμοι να επιταχύνετε την online επιτυχία σας;", seoCtaSub: "Εξερευνήστε τα 110+ premium ληγμένα domains μας.",
    euTitle: "Γιατί τα Premium Ευρωπαϊκά .EU Domains Έχουν Τέτοια Αξία",
    euP1: "Τα .EU domains αποτελούν μια αποκλειστική κατηγορία ψηφιακών περιουσιακών στοιχείων.", euP2: "Πολλά προέρχονται από επίσημα έργα ΕΕ.", euP3: "Το .EU segment προσφέρει ακόμη ευκαιρίες.", euP4: "Τα .EU domains απολαμβάνουν ιδιαίτερη εμπιστοσύνη.", euP5: "Ένα .EU domain τοποθετεί το brand σας ως ευρωπαϊκά συνειδητοποιημένο.", euP6: "Η επένδυση σε premium .EU domain σημαίνει θεσμική υποστήριξη."
  },
  ru: {
    seoTitle: "Купить Просроченные Домены: Инвестируйте в Доказанный SEO-Авторитет",
    seoP1: "Покупка просроченного домена — самый умный способ воспользоваться годами накопленного авторитета.", seoP2: "Наши тщательно отобранные премиум-домены имеют подтверждённые обратные ссылки от авторитетных источников.",
    seoP3: "Хотите запустить интернет-магазин, партнёрский сайт или усилить SEO вашего бизнеса.", seoP4: "Каждый домен в нашем портфеле проверен на чистую историю и качественный ссылочный профиль.",
    seoCta: "Готовы ускорить свой онлайн-успех?", seoCtaSub: "Изучите наш портфель из 110+ премиум-просроченных доменов.",
    euTitle: "Почему Премиум Европейские .EU Домены Настолько Ценны",
    euP1: ".EU домены представляют эксклюзивный класс цифровых активов.", euP2: "Многие происходят из официальных проектов ЕС.", euP3: ".EU сегмент по-прежнему предлагает возможности.", euP4: ".EU домены пользуются особым доверием.", euP5: ".EU домен позиционирует ваш бренд как европейски сознательный.", euP6: "Инвестиция в премиум .EU домен означает институциональную поддержку."
  },
  ro: {
    seoTitle: "Cumpără Domenii Expirate: Investește în Autoritate SEO Dovedită",
    seoP1: "Cumpărarea unui domeniu expirat este cel mai inteligent mod de a beneficia imediat de ani de autoritate acumulată.", seoP2: "Domeniile noastre premium selectate cu grijă au backlink-uri dovedite de la surse autoritare.",
    seoP3: "Fie că vrei să lansezi un magazin online, un site afiliat sau să îți impulsionezi SEO-ul.", seoP4: "Fiecare domeniu din portofoliul nostru este verificat pentru istoric curat și profil de linkuri bun.",
    seoCta: "Gata să îți accelerezi succesul online?", seoCtaSub: "Explorează portofoliul nostru de 110+ domenii premium expirate.",
    euTitle: "De Ce Domeniile Europene Premium .EU Au O Astfel de Valoare",
    euP1: "Domeniile europene .EU reprezintă o clasă exclusivă de active digitale.", euP2: "Multe provin din proiecte oficiale finanțate de UE.", euP3: "Segmentul .EU oferă încă oportunități.", euP4: "Domeniile .EU se bucură de încredere specială.", euP5: "Un domeniu .EU poziționează brandul tău ca fiind conștient european.", euP6: "Investiția într-un domeniu premium .EU înseamnă suport instituțional."
  },
  bg: {
    seoTitle: "Купете Изтекли Домейни: Инвестирайте в Доказан SEO Авторитет",
    seoP1: "Купуването на изтекъл домейн е най-умният начин да се възползвате от години натрупан авторитет.", seoP2: "Нашите грижливо подбрани премиум домейни имат доказани обратни връзки от авторитетни източници.",
    seoP3: "Искате ли да стартирате онлайн магазин, партньорски сайт или да подсилите SEO-то си.", seoP4: "Всеки домейн е проверен за чиста история и добър линк профил.",
    seoCta: "Готови да ускорите онлайн успеха си?", seoCtaSub: "Разгледайте нашето портфолио от 110+ премиум изтекли домейни.",
    euTitle: "Защо Премиум Европейските .EU Домейни Имат Такава Стойност",
    euP1: ".EU домейните представляват ексклузивен клас дигитални активи.", euP2: "Много произхождат от официални ЕС проекти.", euP3: ".EU сегментът все още предлага възможности.", euP4: ".EU домейните се ползват с особено доверие.", euP5: ".EU домейн позиционира бранда ви като европейски съзнателен.", euP6: "Инвестицията в премиум .EU домейн означава институционална подкрепа."
  },
  uk: {
    seoTitle: "Купити Прострочені Домени: Інвестуйте в Доведений SEO-Авторитет",
    seoP1: "Купівля простроченого домену — найрозумніший спосіб скористатися роками накопиченого авторитету.", seoP2: "Наші ретельно відібрані преміум-домени мають підтверджені зворотні посилання від авторитетних джерел.",
    seoP3: "Чи хочете запустити інтернет-магазин, партнерський сайт або підсилити SEO вашого бізнесу.", seoP4: "Кожен домен у нашому портфоліо перевірений на чисту історію та якісний посилальний профіль.",
    seoCta: "Готові прискорити свій онлайн-успіх?", seoCtaSub: "Дослідіть наше портфоліо з 110+ преміум-прострочених доменів.",
    euTitle: "Чому Преміум Європейські .EU Домени Настільки Цінні",
    euP1: ".EU домени представляють ексклюзивний клас цифрових активів.", euP2: "Багато походять з офіційних проєктів ЄС.", euP3: ".EU сегмент все ще пропонує можливості.", euP4: ".EU домени користуються особливою довірою.", euP5: ".EU домен позиціонує ваш бренд як європейськи свідомий.", euP6: "Інвестиція в преміум .EU домен означає інституційну підтримку."
  }
};

const EuDomainValueSection = ({ lang }: { lang: Lang }) => {
  const c = t[lang];
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">{c.seoTitle}</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p><strong className="text-amber-400">{c.seoP1}</strong></p>
                <p>{c.seoP2}</p>
                <p>{c.seoP3}</p>
                <p>{c.seoP4}</p>
                <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 border border-amber-500/20 rounded-xl p-6 mt-8">
                  <p className="text-center text-lg mb-0">
                    <strong className="text-amber-400">{c.seoCta}</strong><br />
                    <span className="text-slate-300">{c.seoCtaSub}</span>
                  </p>
                </div>
              </div>
            </article>

            <div className="bg-gradient-to-br from-slate-800/80 via-slate-900/90 to-slate-800/80 border border-amber-500/30 rounded-2xl p-8 md:p-10 mt-16 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">{c.euTitle}</h2>
              <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                <p>{c.euP1}</p>
                <p>{c.euP2}</p>
                <p>{c.euP3}</p>
                <p>{c.euP4}</p>
                <p>{c.euP5}</p>
                <p>{c.euP6}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EuDomainValueSection;

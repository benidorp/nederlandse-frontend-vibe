type Lang = 'en' | 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl' | 'ko' | 'hu' | 'th' | 'vi' | 'id' | 'et' | 'lv' | 'lt' | 'is' | 'sq' | 'mk' | 'bs' | 'lb' | 'bn' | 'ms';

const t: Record<Lang, {
  seoTitle: string; seoP1: string; seoP2: string; seoP3: string; seoP4: string; seoCta: string; seoCtaSub: string;
  euTitle: string; euP1: string; euP2: string; euP3: string; euP4: string; euP5: string; euP6: string;
}> = {
  en: {
    seoTitle: "Buy Expired Domains: Invest in Proven SEO Authority",
    seoP1: "Buying an expired domain is the smartest way to immediately benefit from years of accumulated domain authority and quality backlinks.",
    seoP2: "Our carefully selected premium domains have a proven track record with backlinks from authoritative sources like Wikipedia, universities, and government institutions.",
    seoP3: "Whether you want to start a webshop, launch an affiliate site, or boost your existing business SEO: an expired domain with high MOZ Domain Authority gives you an undeniable advantage.",
    seoP4: "Every premium domain in our portfolio is checked for spam-free history, relevant backlinks, and good link profiles.",
    seoCta: "Ready to accelerate your online success?", seoCtaSub: "Explore our portfolio of 110+ premium expired domain names.",
    euTitle: "Why Premium European .EU Domain Names Hold Such Value",
    euP1: "European .EU domains represent an exclusive class of digital assets. Unlike .COM or .NET which are available to everyone, .EU domains require a connection to Europe — creating a natural barrier that increases their value.",
    euP2: "Many of these domains originate from official EU-funded projects, research initiatives and cultural programs. This institutional background gives them backlinks from Europa.eu, national universities and government agencies.",
    euP3: "While the .COM market is oversaturated with millions of registered domains, the .EU segment still offers opportunities to find domains with genuine authority and clean history.",
    euP4: ".EU domains enjoy particular trust among European consumers. Research shows that European users perceive .EU websites as more reliable for European services.",
    euP5: "With the growing focus on European digital sovereignty and GDPR compliance, a .EU domain positions your brand as European-conscious and trustworthy.",
    euP6: "Investing in a premium .EU domain means acquiring a digital asset with institutional backing, geographic relevance, and built-in SEO authority."
  },
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
  },
  hr: {
    seoTitle: "Kupite Istekle Domene: Investirajte u Dokazani SEO Autoritet",
    seoP1: "Kupnja istekle domene najinteligentniji je način da odmah iskoristite godine akumuliranog autoriteta i kvalitetnih povratnih linkova.",
    seoP2: "Naše pažljivo odabrane premium domene imaju dokazan track record s povratnim linkovima iz autoritativnih izvora poput Wikipedije, sveučilišta i vladinih institucija.",
    seoP3: "Bilo da želite pokrenuti web trgovinu, affiliate stranicu ili pojačati SEO svog poslovanja: istekla domena s visokim MOZ DA daje vam neospornu prednost.",
    seoP4: "Svaka premium domena u našem portfelju provjerena je na čistu povijest, relevantne povratne linkove i dobre link profile.",
    seoCta: "Spremni ubrzati svoj online uspjeh?", seoCtaSub: "Istražite naš portfelj od 110+ premium isteklih domena.",
    euTitle: "Zašto Premium Europske .EU Domene Imaju Takvu Vrijednost",
    euP1: "Europske .EU domene predstavljaju ekskluzivnu klasu digitalnih sredstava.", euP2: "Mnoge potječu iz službenih EU projekata.", euP3: ".EU segment još uvijek nudi prilike za domene s pravim autoritetom.", euP4: ".EU domene uživaju posebno povjerenje među europskim potrošačima.", euP5: ".EU domena pozicionira vaš brend kao europski svjestan.", euP6: "Ulaganje u premium .EU domenu znači institucionalnu podršku i ugrađeni SEO autoritet."
  },
  sk: {
    seoTitle: "Kúpte Expirované Domény: Investujte do Preukázanej SEO Autority",
    seoP1: "Kúpa expirovanej domény je najinteligentnejší spôsob, ako okamžite ťažiť z rokov naakumulovanej autority a kvalitných spätných odkazov.",
    seoP2: "Naše starostlivo vybrané prémiové domény majú preukázaný track record so spätnými odkazmi z autoritatívnych zdrojov.",
    seoP3: "Či chcete spustiť e-shop, affiliate web alebo posilniť SEO vášho podnikania: expirovaná doména s vysokým MOZ DA vám dáva nespornú výhodu.",
    seoP4: "Každá prémiová doména v našom portfóliu je overená na čistú históriu a kvalitný profil odkazov.",
    seoCta: "Pripravení zrýchliť svoj online úspech?", seoCtaSub: "Preskúmajte naše portfólio 110+ prémiových expirovaných domén.",
    euTitle: "Prečo Majú Prémiové Európske .EU Domény Takú Hodnotu",
    euP1: "Európske .EU domény predstavujú exkluzívnu triedu digitálnych aktív.", euP2: "Mnohé pochádzajú z oficiálnych projektov EÚ.", euP3: ".EU segment stále ponúka príležitosti.", euP4: ".EU domény sa tešia osobitnej dôvere.", euP5: ".EU doména pozicionuje vašu značku ako európsky uvedomelú.", euP6: "Investícia do prémiovej .EU domény znamená inštitucionálnu podporu."
  },
  sr: {
    seoTitle: "Купите Истекле Домене: Инвестирајте у Доказани СЕО Ауторитет",
    seoP1: "Куповина истекле домене најпаметнији је начин да одмах искористите године акумулираног ауторитета и квалитетних повратних линкова.",
    seoP2: "Наши пажљиво одабрани премиум домени имају доказан рекорд са повратним линковима из ауторитативних извора.",
    seoP3: "Било да желите да покренете онлајн продавницу, партнерски сајт или да појачате СЕО свог пословања.",
    seoP4: "Сваки премиум домен у нашем портфолију проверен је на чисту историју и добар профил линкова.",
    seoCta: "Спремни да убрзате свој онлајн успех?", seoCtaSub: "Истражите наш портфолио од 110+ премиум истеклих домена.",
    euTitle: "Зашто Премиум Европски .EU Домени Имају Такву Вредност",
    euP1: ".EU домени представљају ексклузивну класу дигиталних средстава.", euP2: "Многи потичу из званичних ЕУ пројеката.", euP3: ".EU сегмент и даље нуди прилике.", euP4: ".EU домени уживају посебно поверење.", euP5: ".EU домен позиционира ваш бренд као европски свестан.", euP6: "Инвестиција у премиум .EU домен значи институционалну подршку."
  },
  sl: {
    seoTitle: "Kupite Potekle Domene: Investirajte v Dokazano SEO Avtoriteto",
    seoP1: "Nakup potekle domene je najpametnejši način, da takoj izkoristite leta akumulirane avtoritete in kakovostnih povratnih povezav.",
    seoP2: "Naše skrbno izbrane premium domene imajo dokazan track record s povratnimi povezavami iz avtoritativnih virov.",
    seoP3: "Ne glede na to, ali želite odpreti spletno trgovino, partnersko stran ali okrepiti SEO vašega podjetja.",
    seoP4: "Vsaka premium domena v našem portfelju je preverjena za čisto zgodovino in dober profil povezav.",
    seoCta: "Pripravljeni pospešiti svoj spletni uspeh?", seoCtaSub: "Raziščite naš portfelj 110+ premium poteklih domen.",
    euTitle: "Zakaj Imajo Premium Evropske .EU Domene Takšno Vrednost",
    euP1: "Evropske .EU domene predstavljajo ekskluziven razred digitalnih sredstev.", euP2: "Mnoge izvirajo iz uradnih EU projektov.", euP3: ".EU segment še vedno ponuja priložnosti.", euP4: ".EU domene uživajo posebno zaupanje.", euP5: ".EU domena pozicionira vašo blagovno znamko kot evropsko osveščeno.", euP6: "Naložba v premium .EU domeno pomeni institucionalno podporo."
  },
  ko: {
    seoTitle: "만료 도메인 구매: 검증된 SEO 권위에 투자하세요",
    seoP1: "만료 도메인 구매는 수년간 축적된 도메인 권위와 품질 백링크를 즉시 활용하는 가장 스마트한 방법입니다.",
    seoP2: "엄선된 프리미엄 도메인은 위키피디아, 대학교, 정부기관 등 권위 있는 출처의 백링크를 보유하고 있습니다.",
    seoP3: "웹숍 시작, 제휴 사이트 출시, 기존 비즈니스 SEO 강화 등 높은 MOZ DA를 가진 만료 도메인은 확실한 이점을 제공합니다.",
    seoP4: "포트폴리오의 모든 프리미엄 도메인은 스팸 없는 이력, 관련 백링크, 양호한 링크 프로필을 검증받았습니다.",
    seoCta: "온라인 성공을 가속화할 준비가 되셨나요?", seoCtaSub: "110개 이상의 프리미엄 만료 도메인 포트폴리오를 탐색하세요.",
    euTitle: "프리미엄 유럽 .EU 도메인이 높은 가치를 지니는 이유",
    euP1: ".EU 도메인은 독점적인 디지털 자산입니다. 누구나 등록 가능한 .COM과 달리, .EU 도메인은 유럽과의 연결이 필요해 가치가 높습니다.",
    euP2: "많은 도메인이 공식 EU 지원 프로젝트, 연구 이니셔티브에서 유래하여 Europa.eu, 대학교, 정부기관의 백링크를 보유합니다.",
    euP3: ".COM 시장이 과포화된 반면, .EU 세그먼트는 진정한 권위와 깨끗한 이력의 도메인을 찾을 기회를 제공합니다.",
    euP4: ".EU 도메인은 유럽 소비자들 사이에서 특히 높은 신뢰를 받습니다.",
    euP5: "유럽 디지털 주권과 GDPR 준수에 대한 관심이 커지면서, .EU 도메인은 브랜드를 유럽 친화적이고 신뢰할 수 있게 포지셔닝합니다.",
    euP6: "프리미엄 .EU 도메인 투자는 제도적 지원, 지리적 관련성, 내재된 SEO 권위를 가진 디지털 자산을 획득하는 것입니다."
  },
  hu: {
    seoTitle: "Lejárt Domainek Vásárlása: Fektessen be Bizonyított SEO Tekintélybe",
    seoP1: "Lejárt domain vásárlása a legokosabb módja az évek alatt felhalmozott domaintekintély és minőségi backlinkek azonnali kihasználásának.",
    seoP2: "Gondosan válogatott prémium domainjeinken Wikipédiáról, egyetemekről és kormányzati intézményekről származó backlinkek találhatók.",
    seoP3: "Akár webshopot indít, affiliate oldalt hoz létre, vagy meglévő vállalkozása SEO-ját erősíti – a magas MOZ DA domainnel vitathatatlan előnybe kerül.",
    seoP4: "Portfóliónk minden prémium domainjét ellenőrizzük a spammentes előzmények, releváns backlinkek és jó linkprofilok szempontjából.",
    seoCta: "Készen áll online sikere felgyorsítására?", seoCtaSub: "Fedezze fel 110+ prémium lejárt domain portfóliónkat.",
    euTitle: "Miért Olyan Értékesek a Prémium Európai .EU Domainek",
    euP1: "Az európai .EU domainek a digitális eszközök exkluzív kategóriáját képviselik.", euP2: "Sok közülük hivatalos EU-finanszírozott projektekből származik.", euP3: "Az .EU szegmens még mindig kínál lehetőségeket.", euP4: "Az .EU domainek különösen nagy bizalomnak örvendenek.", euP5: "Egy .EU domain európai tudatosságot és megbízhatóságot sugároz.", euP6: "Prémium .EU domainbe fektetni intézményi háttérrel rendelkező digitális eszköz megszerzését jelenti."
  },
  th: {
    seoTitle: "ซื้อโดเมนหมดอายุ: ลงทุนในอำนาจ SEO ที่พิสูจน์แล้ว",
    seoP1: "การซื้อโดเมนหมดอายุเป็นวิธีที่ชาญฉลาดที่สุดในการได้รับประโยชน์จากอำนาจโดเมนที่สะสมมาหลายปีและแบ็คลิงก์คุณภาพ",
    seoP2: "โดเมนพรีเมียมที่คัดสรรของเรามีแบ็คลิงก์จากแหล่งที่มีอำนาจ เช่น Wikipedia มหาวิทยาลัย และหน่วยงานรัฐบาล",
    seoP3: "ไม่ว่าจะเปิดร้านค้าออนไลน์ เว็บไซต์พันธมิตร หรือเพิ่ม SEO ของธุรกิจ โดเมนที่มี MOZ DA สูงให้ข้อได้เปรียบที่ไม่อาจปฏิเสธได้",
    seoP4: "โดเมนพรีเมียมทุกตัวในพอร์ตโฟลิโอถูกตรวจสอบประวัติปลอดสแปม แบ็คลิงก์ที่เกี่ยวข้อง และโปรไฟล์ลิงก์ที่ดี",
    seoCta: "พร้อมที่จะเร่งความสำเร็จออนไลน์ของคุณหรือยัง?", seoCtaSub: "สำรวจพอร์ตโฟลิโอ 110+ โดเมนพรีเมียมหมดอายุของเรา",
    euTitle: "ทำไมโดเมน .EU ของยุโรปพรีเมียมจึงมีค่ามาก",
    euP1: "โดเมน .EU เป็นสินทรัพย์ดิจิทัลระดับพิเศษ", euP2: "โดเมนหลายตัวมาจากโครงการที่ได้รับทุนสนับสนุนจาก EU", euP3: "กลุ่ม .EU ยังคงมีโอกาสค้นหาโดเมนที่มีอำนาจจริง", euP4: "โดเมน .EU ได้รับความไว้วางใจเป็นพิเศษจากผู้บริโภคในยุโรป", euP5: "โดเมน .EU ช่วยวางตำแหน่งแบรนด์ของคุณให้เป็นมิตรกับยุโรป", euP6: "การลงทุนในโดเมน .EU พรีเมียมคือการได้มาซึ่งสินทรัพย์ดิจิทัลที่มีการสนับสนุนจากสถาบัน"
  },
  vi: {
    seoTitle: "Mua Tên Miền Hết Hạn: Đầu Tư vào Uy Tín SEO Đã Được Chứng Minh",
    seoP1: "Mua tên miền hết hạn là cách thông minh nhất để tận dụng ngay uy tín domain và backlink chất lượng tích lũy nhiều năm.",
    seoP2: "Các tên miền cao cấp được chọn lọc kỹ có backlink từ các nguồn uy tín như Wikipedia, trường đại học và cơ quan chính phủ.",
    seoP3: "Dù bạn muốn mở cửa hàng trực tuyến, trang liên kết hay tăng SEO cho doanh nghiệp – tên miền có MOZ DA cao mang lại lợi thế rõ ràng.",
    seoP4: "Mỗi tên miền cao cấp trong danh mục đầu tư đều được kiểm tra lịch sử sạch, backlink liên quan và hồ sơ liên kết tốt.",
    seoCta: "Sẵn sàng đẩy nhanh thành công trực tuyến?", seoCtaSub: "Khám phá danh mục 110+ tên miền hết hạn cao cấp.",
    euTitle: "Tại Sao Tên Miền .EU Cao Cấp Của Châu Âu Có Giá Trị Cao",
    euP1: "Tên miền .EU đại diện cho một lớp tài sản số độc quyền.", euP2: "Nhiều tên miền có nguồn gốc từ các dự án EU chính thức.", euP3: "Phân khúc .EU vẫn còn cơ hội tìm kiếm tên miền có uy tín thực sự.", euP4: "Tên miền .EU được người tiêu dùng châu Âu tin tưởng đặc biệt.", euP5: "Tên miền .EU định vị thương hiệu của bạn là thân thiện với châu Âu.", euP6: "Đầu tư vào tên miền .EU cao cấp nghĩa là có được tài sản số có sự hỗ trợ thể chế."
  },
  id: {
    seoTitle: "Beli Domain Kedaluwarsa: Investasi pada Otoritas SEO yang Terbukti",
    seoP1: "Membeli domain kedaluwarsa adalah cara paling cerdas untuk langsung memanfaatkan otoritas domain dan backlink berkualitas yang terakumulasi bertahun-tahun.",
    seoP2: "Domain premium kami memiliki backlink dari sumber otoritatif seperti Wikipedia, universitas, dan lembaga pemerintah.",
    seoP3: "Baik untuk memulai toko online, situs afiliasi, atau meningkatkan SEO bisnis – domain dengan MOZ DA tinggi memberikan keunggulan jelas.",
    seoP4: "Setiap domain premium dalam portofolio kami diperiksa untuk riwayat bebas spam, backlink relevan, dan profil tautan yang baik.",
    seoCta: "Siap mempercepat kesuksesan online Anda?", seoCtaSub: "Jelajahi portofolio 110+ domain premium kedaluwarsa kami.",
    euTitle: "Mengapa Domain .EU Eropa Premium Sangat Bernilai",
    euP1: "Domain .EU mewakili kelas eksklusif aset digital.", euP2: "Banyak berasal dari proyek resmi yang didanai EU.", euP3: "Segmen .EU masih menawarkan peluang.", euP4: "Domain .EU menikmati kepercayaan khusus dari konsumen Eropa.", euP5: "Domain .EU memposisikan merek Anda sebagai sadar Eropa.", euP6: "Berinvestasi di domain .EU premium berarti memperoleh aset digital dengan dukungan institusional."
  },
  et: {
    seoTitle: "Ostke Aegunud Domeene: Investeerige Tõestatud SEO Autoriteeti",
    seoP1: "Aegunud domeeni ostmine on nutikam viis aastatega kogunenud autoriteedi ja kvaliteetsete tagasilinkide koheseks kasutamiseks.",
    seoP2: "Meie hoolikalt valitud premium domeenidel on tagasilingid autoriteetsetelt allikatelt nagu Wikipedia, ülikoolid ja valitsusasutused.",
    seoP3: "Olenemata sellest, kas soovite avada veebipoodi, partnerleht või tugevdada SEO-d – kõrge MOZ DA domeen annab vaieldamatu eelise.",
    seoP4: "Iga premium domeen on kontrollitud rämpspostivaba ajaloo, asjakohaste tagasilinkide ja hea lingiprofiili suhtes.",
    seoCta: "Valmis oma veebiedu kiirendama?", seoCtaSub: "Tutvuge meie 110+ premium aegunud domeeni portfelliga.",
    euTitle: "Miks on Premium Euroopa .EU Domeenid Nii Väärtuslikud",
    euP1: ".EU domeenid esindavad eksklusiivset digitaalsete varade klassi.", euP2: "Paljud pärinevad ametlikest EL-i projektidest.", euP3: ".EU segment pakub endiselt võimalusi.", euP4: ".EU domeenid nautivad erilist usaldust.", euP5: ".EU domeen positsioneerib teie brändi Euroopa-teadlikuna.", euP6: ".EU domeeni investeerimine tähendab institutsionaalse toega digitaalse vara omandamist."
  },
  lv: {
    seoTitle: "Pērciet Beigušos Domēnus: Investējiet Pierādītā SEO Autoritātē",
    seoP1: "Beidzies domēna iegāde ir gudrākais veids, kā nekavējoties izmantot gadu gaitā uzkrāto autoritāti un kvalitatīvās atpakaļsaites.",
    seoP2: "Mūsu rūpīgi atlasītajiem premium domēniem ir atpakaļsaites no autoritatīviem avotiem kā Wikipedia, universitātes un valdības iestādes.",
    seoP3: "Neatkarīgi no tā, vai vēlaties atvērt interneta veikalu, partneru vietni vai stiprināt SEO – domēns ar augstu MOZ DA dod neapstrīdamu priekšrocību.",
    seoP4: "Katrs premium domēns mūsu portfelī ir pārbaudīts attiecībā uz spama brīvu vēsturi un labu saišu profilu.",
    seoCta: "Gatavi paātrināt savu tiešsaistes panākumus?", seoCtaSub: "Izpētiet mūsu 110+ premium beigušos domēnu portfeli.",
    euTitle: "Kāpēc Premium Eiropas .EU Domēniem ir Tik Liela Vērtība",
    euP1: ".EU domēni pārstāv ekskluzīvu digitālo aktīvu klasi.", euP2: "Daudzi cēlušies no oficiāliem ES projektiem.", euP3: ".EU segments joprojām piedāvā iespējas.", euP4: ".EU domēni bauda īpašu uzticamību.", euP5: ".EU domēns pozicionē jūsu zīmolu kā Eiropai draudzīgu.", euP6: "Ieguldījums premium .EU domēnā nozīmē institucionāli atbalstīta digitālā aktīva iegūšanu."
  },
  lt: {
    seoTitle: "Pirkite Pasibaigusius Domenus: Investuokite į Įrodytą SEO Autoritetą",
    seoP1: "Pasibaigusio domeno pirkimas yra protingiausias būdas iš karto pasinaudoti metų eigą sukauptu autoritetu ir kokybiškais nuorodomis.",
    seoP2: "Mūsų atidžiai atrinktuose premium domenuose yra nuorodų iš autoritetingų šaltinių, tokių kaip Wikipedia, universitetai ir vyriausybės institucijos.",
    seoP3: "Nesvarbu, ar norite atidaryti internetinę parduotuvę, partnerių svetainę ar sustiprinti SEO – domenas su aukštu MOZ DA suteikia neginčijamą pranašumą.",
    seoP4: "Kiekvienas premium domenas mūsų portfelyje patikrintas dėl švaraus elgesio istorijos, aktualių nuorodų ir gero nuorodų profilio.",
    seoCta: "Pasirengę pagreitinti savo internetinę sėkmę?", seoCtaSub: "Naršykite mūsų 110+ premium pasibaigusių domenų portfelį.",
    euTitle: "Kodėl Premium Europos .EU Domenai Turi Tokią Vertę",
    euP1: ".EU domenai yra išskirtinė skaitmeninių turtų klasė.", euP2: "Daugelis kilę iš oficialių ES projektų.", euP3: ".EU segmentas vis dar siūlo galimybių.", euP4: ".EU domenai turi ypatingą pasitikėjimą.", euP5: ".EU domenas pozicionuoja jūsų prekės ženklą kaip europietiškai sąmoningą.", euP6: "Investavimas į premium .EU domeną reiškia institucinės paramos turinčio skaitmeninio turto įsigijimą."
  },
  is: {
    seoTitle: "Kauptu Útrunnin Lén: Fjárfestu í Sönnuðu SEO Valdi",
    seoP1: "Að kaupa útrunnin lén er snjallasta leiðin til að nýta strax ára safnað lénsvald og gæðabaktengla.",
    seoP2: "Vandlega valin úrvalslén okkar hafa baktengla frá valdamiklum aðilum eins og Wikipedia, háskólum og ríkisstofnunum.",
    seoP3: "Hvort sem þú vilt opna vefverslun, vistfélagasíðu eða styrkja SEO – lén með háu MOZ DA gefur óumdeildegan kost.",
    seoP4: "Hvert úrvalslén er athugað fyrir hreina sögu, viðeigandi baktengla og góð tengisnið.",
    seoCta: "Tilbúin/n til að flýta árangri á netinu?", seoCtaSub: "Skoðaðu safn okkar af 110+ úrvals útrunnum lénum.",
    euTitle: "Hvers Vegna Eru Úrvals Evrópsk .EU Lén Svona Verðmæt",
    euP1: ".EU lén tákna einkarétt stétt stafrænna eigna.", euP2: "Mörg eiga uppruna sinn í opinberum ESB-verkefnum.", euP3: ".EU hlutinn býður enn tækifæri.", euP4: ".EU lén njóta sérstaks trausts.", euP5: ".EU lén staðsetur vörumerkið þitt sem evrópsk meðvitað.", euP6: "Fjárfesting í úrvals .EU léni þýðir öflun stafrænnar eignar með stofnanalegum stuðningi."
  },
  sq: {
    seoTitle: "Blini Domene të Skaduara: Investoni në Autoritet SEO të Provuar",
    seoP1: "Blerja e një domeni të skaduar është mënyra më e zgjuar për të përfituar menjëherë nga vitet e autoritetit të akumuluar.",
    seoP2: "Domenet tona premium kanë backlinks nga burime autoritative si Wikipedia, universitete dhe institucione qeveritare.",
    seoP3: "Pavarësisht nëse doni të hapni dyqan online, faqe affiliate apo të forconi SEO-n – një domen me MOZ DA të lartë ju jep avantazh.",
    seoP4: "Çdo domen premium në portofolin tonë është kontrolluar për histori pa spam, backlinks relevante dhe profil të mirë linkesh.",
    seoCta: "Gati për të përshpejtuar suksesin tuaj online?", seoCtaSub: "Eksploroni portofolin tonë me 110+ domene premium të skaduara.",
    euTitle: "Pse Domenet .EU Premium Europiane Kanë Vlerë të Tillë",
    euP1: "Domenet .EU përfaqësojnë një klasë ekskluzive asetesh digjitale.", euP2: "Shumë rrjedhin nga projekte zyrtare të BE-së.", euP3: "Segmenti .EU ende ofron mundësi.", euP4: "Domenet .EU gëzojnë besim të veçantë.", euP5: "Një domen .EU pozicionon markën tuaj si të ndërgjegjshme europiane.", euP6: "Investimi në domen .EU premium do të thotë fitimi i një aseti digjital me mbështetje institucionale."
  },
  mk: {
    seoTitle: "Купете Истечени Домени: Инвестирајте во Докажан SEO Авторитет",
    seoP1: "Купувањето на истечен домен е најпаметниот начин веднаш да ги искористите годините на акумулиран авторитет.",
    seoP2: "Нашите внимателно избрани премиум домени имаат повратни линкови од авторитативни извори.",
    seoP3: "Без разлика дали сакате онлајн продавница, партнерска страница или SEO подобрување – домен со висок MOZ DA дава неоспорна предност.",
    seoP4: "Секој премиум домен е проверен за чиста историја и добар профил на линкови.",
    seoCta: "Подготвени да го забрзате вашиот онлајн успех?", seoCtaSub: "Истражете го нашиот портфолио од 110+ премиум истечени домени.",
    euTitle: "Зошто Премиум Европските .EU Домени Имаат Таква Вредност",
    euP1: ".EU домените претставуваат ексклузивна класа на дигитални средства.", euP2: "Многу потекнуваат од официјални ЕУ проекти.", euP3: ".EU сегментот сè уште нуди можности.", euP4: ".EU домените уживаат посебна доверба.", euP5: ".EU домен го позиционира вашиот бренд како европски свесен.", euP6: "Инвестирањето во премиум .EU домен значи добивање дигитално средство со институционална поддршка."
  },
  bs: {
    seoTitle: "Kupite Istekle Domene: Investirajte u Dokazani SEO Autoritet",
    seoP1: "Kupovina istekle domene najpametniji je način da odmah iskoristite godine akumuliranog autoriteta i kvalitetnih backlinkova.",
    seoP2: "Naši pažljivo odabrani premium domeni imaju backlinkove iz autoritativnih izvora kao Wikipedia, univerziteti i vladine institucije.",
    seoP3: "Bilo da želite pokrenuti web shop, affiliate stranicu ili poboljšati SEO – domena s visokim MOZ DA daje nespornu prednost.",
    seoP4: "Svaki premium domen u našem portfoliju provjeren je za čistu historiju i dobar link profil.",
    seoCta: "Spremni ubrzati svoj online uspjeh?", seoCtaSub: "Istražite naš portfolio od 110+ premium isteklih domena.",
    euTitle: "Zašto Premium Evropske .EU Domene Imaju Takvu Vrijednost",
    euP1: ".EU domene predstavljaju ekskluzivnu klasu digitalnih sredstava.", euP2: "Mnoge potiču iz službenih EU projekata.", euP3: ".EU segment još uvijek nudi prilike.", euP4: ".EU domene uživaju posebno povjerenje.", euP5: ".EU domena pozicionira vaš brend kao evropski svjestan.", euP6: "Ulaganje u premium .EU domenu znači stjecanje digitalnog sredstva s institucionalnom podrškom."
  },
  lb: {
    seoTitle: "Kaaft Ofgelafenen Domainen: Investéiert an Bewisen SEO Autoritéit",
    seoP1: "En ofgelafenen Domain ze kafen ass dee schlausten Aart fir direkt vun Joere vu gesammeltem Autoritéit a Qualitéitsbacklinks ze profitéieren.",
    seoP2: "Eis suergfälteg ausgewielte Premium Domainen hunn Backlinks vu autoritéitsstarke Quellen wéi Wikipedia, Universitéiten an Regierungsinstitutiouen.",
    seoP3: "Egal ob Dir e Webshop opmaache wëllt, eng Affiliate-Säit oder Ären SEO stäerken – en Domain mat héijem MOZ DA gëtt Iech en onbestreidbaart Avantage.",
    seoP4: "All Premium Domain an eisem Portfolio gëtt iwwerpréift fir spam-fräi Geschicht a gutt Linkprofiler.",
    seoCta: "Prett Ären Online-Erfolleg ze beschleunegen?", seoCtaSub: "Entdeckt eise Portfolio vu 110+ Premium ofgelafenen Domainen.",
    euTitle: "Firwat Premium Europäesch .EU Domainen Sou Wäertvoll Sinn",
    euP1: ".EU Domainen vertriede eng exklusiv Klass vun digitalen Aktivaen.", euP2: "Vill kommen aus offiziellen EU-finanzéierten Projeten.", euP3: "Den .EU Segment bitt nach Chancen.", euP4: ".EU Domainen genéissen besonnescht Vertrauen.", euP5: "En .EU Domain positionéiert Är Marque als europäesch bewosst.", euP6: "An en Premium .EU Domain ze investéieren heescht en digital Aktiv mat institutioneller Ënnerstëtzung ze kréien."
  },
  bn: {
    seoTitle: "মেয়াদোত্তীর্ণ ডোমেইন কিনুন: প্রমাণিত SEO কর্তৃত্বে বিনিয়োগ করুন",
    seoP1: "মেয়াদোত্তীর্ণ ডোমেইন কেনা বছরের পর বছর সঞ্চিত কর্তৃত্ব এবং মানসম্পন্ন ব্যাকলিংক থেকে তাৎক্ষণিক সুবিধা পাওয়ার সবচেয়ে বুদ্ধিমান উপায়।",
    seoP2: "আমাদের যত্ন সহকারে নির্বাচিত প্রিমিয়াম ডোমেইনে Wikipedia, বিশ্ববিদ্যালয় এবং সরকারি প্রতিষ্ঠানের ব্যাকলিংক রয়েছে।",
    seoP3: "ওয়েবশপ, অ্যাফিলিয়েট সাইট বা ব্যবসার SEO শক্তিশালী করতে – উচ্চ MOZ DA ডোমেইন অনস্বীকার্য সুবিধা দেয়।",
    seoP4: "পোর্টফোলিওর প্রতিটি প্রিমিয়াম ডোমেইন স্প্যাম-মুক্ত ইতিহাস এবং ভালো লিংক প্রোফাইলের জন্য পরীক্ষিত।",
    seoCta: "আপনার অনলাইন সাফল্য ত্বরান্বিত করতে প্রস্তুত?", seoCtaSub: "আমাদের 110+ প্রিমিয়াম মেয়াদোত্তীর্ণ ডোমেইন পোর্টফোলিও অন্বেষণ করুন।",
    euTitle: "কেন প্রিমিয়াম ইউরোপীয় .EU ডোমেইনের এত মূল্য",
    euP1: ".EU ডোমেইন ডিজিটাল সম্পদের একটি একচেটিয়া শ্রেণী।", euP2: "অনেকগুলো অফিসিয়াল EU প্রকল্প থেকে এসেছে।", euP3: ".EU সেগমেন্ট এখনও সুযোগ প্রদান করে।", euP4: ".EU ডোমেইন বিশেষ আস্থা উপভোগ করে।", euP5: ".EU ডোমেইন আপনার ব্র্যান্ডকে ইউরোপ-বান্ধব হিসেবে অবস্থান দেয়।", euP6: "প্রিমিয়াম .EU ডোমেইনে বিনিয়োগ মানে প্রাতিষ্ঠানিক সমর্থন সহ ডিজিটাল সম্পদ অর্জন।"
  },
  ms: {
    seoTitle: "Beli Domain Tamat Tempoh: Labur dalam Autoriti SEO yang Terbukti",
    seoP1: "Membeli domain tamat tempoh adalah cara paling bijak untuk memanfaatkan autoriti domain dan pautan balik berkualiti yang terkumpul selama bertahun-tahun.",
    seoP2: "Domain premium kami mempunyai pautan balik daripada sumber berwibawa seperti Wikipedia, universiti dan agensi kerajaan.",
    seoP3: "Sama ada untuk membuka kedai dalam talian, laman afiliasi atau meningkatkan SEO – domain dengan MOZ DA tinggi memberikan kelebihan jelas.",
    seoP4: "Setiap domain premium dalam portfolio kami diperiksa untuk sejarah bebas spam dan profil pautan yang baik.",
    seoCta: "Bersedia mempercepatkan kejayaan dalam talian anda?", seoCtaSub: "Terokai portfolio 110+ domain premium tamat tempoh kami.",
    euTitle: "Mengapa Domain .EU Eropah Premium Begitu Bernilai",
    euP1: "Domain .EU mewakili kelas eksklusif aset digital.", euP2: "Banyak berasal daripada projek rasmi EU.", euP3: "Segmen .EU masih menawarkan peluang.", euP4: "Domain .EU menikmati kepercayaan istimewa.", euP5: "Domain .EU memposisikan jenama anda sebagai mesra Eropah.", euP6: "Pelaburan dalam domain .EU premium bermakna memperoleh aset digital dengan sokongan institusi."
  }
};

const EuDomainValueSection = ({ lang }: { lang: string }) => {
  const c = t[lang as Lang] || t['en'];
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

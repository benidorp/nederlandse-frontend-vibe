import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, CheckCircle } from "lucide-react";

type Lang = 'en' | 'nl' | 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl' | 'ko' | 'hu' | 'th' | 'vi' | 'id' | 'et' | 'lv' | 'lt' | 'is' | 'sq' | 'mk' | 'bs' | 'lb' | 'bn' | 'ms';

const t: Record<Lang, {
  badge: string; title: string; subtitle: string;
  strategies: { title: string; desc: string; benefits: string[] }[];
}> = {
  en: {
    badge: "SEO Strategies", title: "How Do SEO Redirects and Authority Building Work?",
    subtitle: "There are several strategic ways to use premium domains for maximum SEO impact.",
    strategies: [
      { title: "301 Redirect Strategy", desc: "A 301 redirect transfers all SEO value and authority from the premium domain to your main domain. This is the fastest way to improve your rankings.", benefits: ["Direct transfer of link value", "Preservation of all backlinks", "Rapid authority increase", "One-time setup, lasting effect"] },
      { title: "Authority Stacking", desc: "Build a network of authoritative domains that all link to your main site. This creates a powerful ecosystem of relevant, high-quality backlinks.", benefits: ["Multiple authority sources", "Thematic relevance", "Natural link profile", "Long-term SEO strategy"] },
      { title: "Use as Main Domain", desc: "Launch your new project directly with a domain that already has authority. This saves years of link building.", benefits: ["Instant start with authority", "Existing Google trust", "Faster indexing", "Competitive advantage"] },
      { title: "Private Blog Network (PBN)", desc: "Use premium domains to create valuable content sites that generate powerful backlinks to your main site.", benefits: ["Full control over backlinks", "Thematic content sites", "Diversified link profiles", "Scalable link building"] }
    ]
  },
  sv: {
    badge: "SEO-Strategier", title: "Hur Fungerar SEO-Omdirigeringar och Auktoritetsbyggande?",
    subtitle: "Det finns flera strategiska sätt att använda premiumdomäner för maximal SEO-påverkan.",
    strategies: [
      { title: "301-Omdirigeringsstrategi", desc: "En 301-omdirigering överför all SEO-värde och auktoritet från premiumdomänen till din huvuddomän. Detta är det snabbaste sättet att förbättra dina rankningar.", benefits: ["Direkt överföring av länkvärde", "Bevarande av alla bakåtlänkar", "Snabb ökning av auktoritet", "Engångsinstallation, bestående effekt"] },
      { title: "Auktoritetsstackning", desc: "Bygg ett nätverk av auktoritativa domäner som alla länkar till din huvudsajt. Detta skapar ett kraftfullt ekosystem av relevanta, högkvalitativa bakåtlänkar.", benefits: ["Flera auktoritetskällor", "Tematisk relevans", "Naturlig länkprofil", "Långsiktig SEO-strategi"] },
      { title: "Använd som Huvuddomän", desc: "Starta ditt nya projekt direkt med en domän som redan har auktoritet. Detta sparar år av länkbyggande.", benefits: ["Starta omedelbart med auktoritet", "Befintligt förtroende från Google", "Snabbare indexering", "Fördel gentemot konkurrensen"] },
      { title: "Privat Bloggnätverk (PBN)", desc: "Använd premiumdomäner för att skapa värdefulla innehållssajter som genererar kraftfulla bakåtlänkar till din huvudsajt.", benefits: ["Full kontroll över bakåtlänkar", "Tematiska innehållssajter", "Diversifierade länkprofiler", "Skalbart länkbyggande"] }
    ]
  },
  no: {
    badge: "SEO-Strategier", title: "Hvordan Fungerer SEO-Omdirigeringer og Autoritetsbygging?",
    subtitle: "Det finnes flere strategiske måter å bruke premiumdomener for maksimal SEO-effekt.",
    strategies: [
      { title: "301-Omdirigeringsstrategi", desc: "En 301-omdirigering overfører all SEO-verdi og autoritet fra premiumdomenet til ditt hoveddomene.", benefits: ["Direkte overføring av lenkeverdi", "Bevaring av alle tilbakekoblinger", "Rask økning i autoritet", "Engangsoppsett, varig effekt"] },
      { title: "Autoritetsstabling", desc: "Bygg et nettverk av autoritative domener som alle lenker til din hovedside.", benefits: ["Flere autoritetskilder", "Tematisk relevans", "Naturlig lenkeprofil", "Langsiktig SEO-strategi"] },
      { title: "Bruk som Hoveddomene", desc: "Start ditt nye prosjekt direkte med et domene som allerede har autoritet.", benefits: ["Start umiddelbart med autoritet", "Eksisterende tillit fra Google", "Raskere indeksering", "Fordel over konkurrentene"] },
      { title: "Privat Blognettverk (PBN)", desc: "Bruk premiumdomener for å opprette verdifulle innholdssider som genererer kraftige tilbakekoblinger.", benefits: ["Full kontroll over tilbakekoblinger", "Tematiske innholdssider", "Diversifiserte lenkeprofiler", "Skalerbar lenkebygging"] }
    ]
  },
  da: {
    badge: "SEO-Strategier", title: "Hvordan Fungerer SEO-Omdirigeringer og Autoritetsopbygning?",
    subtitle: "Der er flere strategiske måder at bruge premiumdomæner for maksimal SEO-effekt.",
    strategies: [
      { title: "301-Omdirigeringsstrategi", desc: "En 301-omdirigering overfører al SEO-værdi og autoritet fra premiumdomænet til dit hoveddomæne.", benefits: ["Direkte overførsel af linkværdi", "Bevarelse af alle backlinks", "Hurtig stigning i autoritet", "Engangsopsætning, varig effekt"] },
      { title: "Autoritetsstabling", desc: "Byg et netværk af autoritative domæner, der alle linker til din hovedside.", benefits: ["Flere autoritetskilder", "Tematisk relevans", "Naturlig linkprofil", "Langsigtet SEO-strategi"] },
      { title: "Brug som Hoveddomæne", desc: "Start dit nye projekt direkte med et domæne, der allerede har autoritet.", benefits: ["Start straks med autoritet", "Eksisterende tillid fra Google", "Hurtigere indeksering", "Fordel over konkurrenterne"] },
      { title: "Privat Blognetværk (PBN)", desc: "Brug premiumdomæner til at oprette værdifulde indholdssider.", benefits: ["Fuld kontrol over backlinks", "Tematiske indholdssider", "Diversificerede linkprofiler", "Skalerbar linkopbygning"] }
    ]
  },
  fi: {
    badge: "SEO-Strategiat", title: "Miten SEO-Uudelleenohjaukset ja Auktoriteetin Rakentaminen Toimivat?",
    subtitle: "On useita strategisia tapoja käyttää premium-verkkotunnuksia maksimaalisen SEO-vaikutuksen saavuttamiseksi.",
    strategies: [
      { title: "301-Uudelleenohjausstrategia", desc: "301-uudelleenohjaus siirtää kaiken SEO-arvon ja auktoriteetin premium-verkkotunnuksesta pääverkkotunnukseesi.", benefits: ["Suora linkkiarvon siirto", "Kaikkien takalinkkien säilytys", "Nopea auktoriteetin kasvu", "Kertaluonteinen asennus, pysyvä vaikutus"] },
      { title: "Auktoriteetin Pinoaminen", desc: "Rakenna verkosto arvovaltaisista verkkotunnuksista, jotka kaikki linkittävät pääsivustollesi.", benefits: ["Useita auktoriteettilähteitä", "Temaattinen relevanssi", "Luonnollinen linkkiprofiili", "Pitkäaikainen SEO-strategia"] },
      { title: "Käytä Pääverkkotunnuksena", desc: "Aloita uusi projektisi suoraan verkkotunnuksella, jolla on jo auktoriteetti.", benefits: ["Aloita heti auktoriteetilla", "Googlen olemassa oleva luottamus", "Nopeampi indeksointi", "Etu kilpailijoihin nähden"] },
      { title: "Yksityinen Blogiverkosto (PBN)", desc: "Käytä premium-verkkotunnuksia luomaan arvokkaita sisältösivustoja.", benefits: ["Täysi hallinta takalinkeistä", "Temaattiset sisältösivustot", "Monipuoliset linkkiprofiilit", "Skaalautuva linkkien rakentaminen"] }
    ]
  },
  cs: {
    badge: "SEO Strategie", title: "Jak Fungují SEO Přesměrování a Budování Autority?",
    subtitle: "Existuje několik strategických způsobů, jak využít prémiové domény pro maximální SEO dopad.",
    strategies: [
      { title: "Strategie 301 Přesměrování", desc: "301 přesměrování přenáší veškerou SEO hodnotu a autoritu z prémiové domény na vaši hlavní doménu.", benefits: ["Přímý přenos hodnoty odkazů", "Zachování všech zpětných odkazů", "Rychlý nárůst autority", "Jednorázové nastavení, trvalý efekt"] },
      { title: "Vrstvení Autority", desc: "Vybudujte síť autoritativních domén, které všechny odkazují na váš hlavní web.", benefits: ["Více zdrojů autority", "Tematická relevance", "Přirozený profil odkazů", "Dlouhodobá SEO strategie"] },
      { title: "Použití jako Hlavní Doména", desc: "Spusťte svůj nový projekt přímo s doménou, která již má autoritu.", benefits: ["Okamžitý start s autoritou", "Existující důvěra od Google", "Rychlejší indexace", "Výhoda nad konkurencí"] },
      { title: "Privátní Blogová Síť (PBN)", desc: "Využijte prémiové domény k vytvoření hodnotných obsahových webů.", benefits: ["Plná kontrola nad zpětnými odkazy", "Tematické obsahové weby", "Diverzifikované profily odkazů", "Škálovatelné budování odkazů"] }
    ]
  },
  el: {
    badge: "Στρατηγικές SEO", title: "Πώς Λειτουργούν οι Ανακατευθύνσεις SEO και η Οικοδόμηση Εξουσίας;",
    subtitle: "Υπάρχουν πολλαπλοί στρατηγικοί τρόποι για να αξιοποιήσετε premium domains για μέγιστο SEO αντίκτυπο.",
    strategies: [
      { title: "Στρατηγική Ανακατεύθυνσης 301", desc: "Μια ανακατεύθυνση 301 μεταφέρει όλη την SEO αξία και εξουσία από το premium domain στον κύριο τομέα σας.", benefits: ["Άμεση μεταφορά αξίας συνδέσμων", "Διατήρηση όλων των backlinks", "Γρήγορη αύξηση εξουσίας", "Μία εγκατάσταση, μόνιμο αποτέλεσμα"] },
      { title: "Στοίβαξη Εξουσίας", desc: "Δημιουργήστε ένα δίκτυο αξιόπιστων domains που όλα συνδέονται με τον κύριο ιστότοπό σας.", benefits: ["Πολλαπλές πηγές εξουσίας", "Θεματική σχετικότητα", "Φυσικό προφίλ συνδέσμων", "Μακροπρόθεσμη στρατηγική SEO"] },
      { title: "Χρήση ως Κύριος Τομέας", desc: "Ξεκινήστε το νέο σας έργο απευθείας με ένα domain που ήδη έχει εξουσία.", benefits: ["Άμεση εκκίνηση με εξουσία", "Υπάρχουσα εμπιστοσύνη Google", "Ταχύτερη δεικτοδότηση", "Πλεονέκτημα έναντι ανταγωνισμού"] },
      { title: "Ιδιωτικό Δίκτυο Blog (PBN)", desc: "Χρησιμοποιήστε premium domains για δημιουργία πολύτιμων ιστότοπων περιεχομένου.", benefits: ["Πλήρης έλεγχος backlinks", "Θεματικοί ιστότοποι", "Ποικίλα προφίλ συνδέσμων", "Κλιμακούμενο link building"] }
    ]
  },
  ru: {
    badge: "SEO-Стратегии", title: "Как Работают SEO-Перенаправления и Построение Авторитета?",
    subtitle: "Существует несколько стратегических способов использования премиум-доменов для максимального SEO-эффекта.",
    strategies: [
      { title: "Стратегия 301-Перенаправления", desc: "301-перенаправление передаёт всю SEO-ценность и авторитет с премиум-домена на ваш основной домен.", benefits: ["Прямая передача ссылочного веса", "Сохранение всех обратных ссылок", "Быстрый рост авторитета", "Однократная настройка, долгосрочный эффект"] },
      { title: "Наращивание Авторитета", desc: "Постройте сеть авторитетных доменов, все из которых ссылаются на ваш основной сайт.", benefits: ["Множество источников авторитета", "Тематическая релевантность", "Естественный ссылочный профиль", "Долгосрочная SEO-стратегия"] },
      { title: "Использование как Основной Домен", desc: "Запустите свой новый проект сразу с доменом, который уже имеет авторитет.", benefits: ["Мгновенный старт с авторитетом", "Существующее доверие Google", "Более быстрая индексация", "Преимущество над конкурентами"] },
      { title: "Частная Сеть Блогов (PBN)", desc: "Используйте премиум-домены для создания ценных контентных сайтов.", benefits: ["Полный контроль над ссылками", "Тематические контентные сайты", "Разнообразные ссылочные профили", "Масштабируемое наращивание ссылок"] }
    ]
  },
  ro: {
    badge: "Strategii SEO", title: "Cum Funcționează Redirecționările SEO și Construirea Autorității?",
    subtitle: "Există mai multe modalități strategice de a utiliza domenii premium pentru impact SEO maxim.",
    strategies: [
      { title: "Strategia de Redirecționare 301", desc: "O redirecționare 301 transferă toată valoarea SEO și autoritatea de la domeniul premium la domeniul tău principal.", benefits: ["Transfer direct de valoare link", "Păstrarea tuturor backlink-urilor", "Creștere rapidă a autorității", "Configurare unică, efect durabil"] },
      { title: "Stivuirea Autorității", desc: "Construiește o rețea de domenii autoritare care toate fac link către site-ul tău principal.", benefits: ["Surse multiple de autoritate", "Relevanță tematică", "Profil natural de linkuri", "Strategie SEO pe termen lung"] },
      { title: "Folosire ca Domeniu Principal", desc: "Lansează noul tău proiect direct cu un domeniu care are deja autoritate.", benefits: ["Start imediat cu autoritate", "Încredere existentă de la Google", "Indexare mai rapidă", "Avantaj față de concurență"] },
      { title: "Rețea Privată de Bloguri (PBN)", desc: "Folosește domenii premium pentru a crea site-uri de conținut valoroase.", benefits: ["Control complet asupra backlink-urilor", "Site-uri de conținut tematice", "Profiluri de linkuri diversificate", "Construire scalabilă de linkuri"] }
    ]
  },
  bg: {
    badge: "SEO Стратегии", title: "Как Работят SEO Пренасочванията и Изграждането на Авторитет?",
    subtitle: "Има множество стратегически начини за използване на премиум домейни за максимален SEO ефект.",
    strategies: [
      { title: "Стратегия за 301 Пренасочване", desc: "301 пренасочването прехвърля цялата SEO стойност и авторитет от премиум домейна към основния ви домейн.", benefits: ["Директен трансфер на линк стойност", "Запазване на всички обратни връзки", "Бързо нарастване на авторитета", "Еднократна настройка, траен ефект"] },
      { title: "Натрупване на Авторитет", desc: "Изградете мрежа от авторитетни домейни, всички свързващи се с основния ви сайт.", benefits: ["Множество източници на авторитет", "Тематична релевантност", "Естествен линк профил", "Дългосрочна SEO стратегия"] },
      { title: "Използване като Основен Домейн", desc: "Стартирайте новия си проект директно с домейн, който вече има авторитет.", benefits: ["Незабавен старт с авторитет", "Съществуващо доверие от Google", "По-бързо индексиране", "Предимство пред конкуренцията"] },
      { title: "Частна Блог Мрежа (PBN)", desc: "Използвайте премиум домейни за създаване на ценни съдържателни сайтове.", benefits: ["Пълен контрол над обратните връзки", "Тематични съдържателни сайтове", "Разнообразни линк профили", "Мащабируемо изграждане на връзки"] }
    ]
  },
  uk: {
    badge: "SEO-Стратегії", title: "Як Працюють SEO-Переспрямування та Побудова Авторитету?",
    subtitle: "Існує кілька стратегічних способів використання преміум-доменів для максимального SEO-ефекту.",
    strategies: [
      { title: "Стратегія 301-Переспрямування", desc: "301-переспрямування передає всю SEO-цінність та авторитет з преміум-домену на ваш основний домен.", benefits: ["Пряма передача посилальної ваги", "Збереження всіх зворотних посилань", "Швидке зростання авторитету", "Одноразове налаштування, тривалий ефект"] },
      { title: "Нарощування Авторитету", desc: "Побудуйте мережу авторитетних доменів, які всі посилаються на ваш основний сайт.", benefits: ["Множинні джерела авторитету", "Тематична релевантність", "Природний посилальний профіль", "Довгострокова SEO-стратегія"] },
      { title: "Використання як Основний Домен", desc: "Запустіть свій новий проєкт одразу з доменом, який вже має авторитет.", benefits: ["Миттєвий старт з авторитетом", "Наявна довіра Google", "Швидша індексація", "Перевага над конкурентами"] },
      { title: "Приватна Мережа Блогів (PBN)", desc: "Використовуйте преміум-домени для створення цінних контентних сайтів.", benefits: ["Повний контроль над посиланнями", "Тематичні контентні сайти", "Різноманітні посилальні профілі", "Масштабоване нарощування посилань"] }
    ]
  },
  hr: {
    badge: "SEO Strategije", title: "Kako Funkcioniraju SEO Preusmjeravanja i Izgradnja Autoriteta?",
    subtitle: "Postoji više strateških načina korištenja premium domena za maksimalni SEO učinak.",
    strategies: [
      { title: "Strategija 301 Preusmjeravanja", desc: "301 preusmjeravanje prenosi svu SEO vrijednost i autoritet s premium domene na vašu glavnu domenu.", benefits: ["Izravan prijenos vrijednosti linkova", "Očuvanje svih povratnih linkova", "Brzi porast autoriteta", "Jednokratno postavljanje, trajan učinak"] },
      { title: "Slaganje Autoriteta", desc: "Izgradite mrežu autoritativnih domena koje sve povezuju na vašu glavnu stranicu.", benefits: ["Više izvora autoriteta", "Tematska relevantnost", "Prirodni profil linkova", "Dugoročna SEO strategija"] },
      { title: "Korištenje kao Glavna Domena", desc: "Pokrenite novi projekt odmah s domenom koja već ima autoritet.", benefits: ["Trenutni start s autoritetom", "Postojeće povjerenje Googlea", "Brže indeksiranje", "Prednost nad konkurencijom"] },
      { title: "Privatna Blog Mreža (PBN)", desc: "Koristite premium domene za stvaranje vrijednih sadržajnih stranica.", benefits: ["Potpuna kontrola nad povratnim linkovima", "Tematske sadržajne stranice", "Raznovrsni profili linkova", "Skalabilna izgradnja linkova"] }
    ]
  },
  sk: {
    badge: "SEO Stratégie", title: "Ako Fungujú SEO Presmerovania a Budovanie Autority?",
    subtitle: "Existuje niekoľko strategických spôsobov využitia prémiových domén pre maximálny SEO dopad.",
    strategies: [
      { title: "Stratégia 301 Presmerovania", desc: "301 presmerovanie prenáša všetku SEO hodnotu a autoritu z prémiovej domény na vašu hlavnú doménu.", benefits: ["Priamy prenos hodnoty odkazov", "Zachovanie všetkých spätných odkazov", "Rýchly nárast autority", "Jednorazové nastavenie, trvalý efekt"] },
      { title: "Vrstvenie Autority", desc: "Vybudujte sieť autoritatívnych domén, ktoré všetky odkazujú na váš hlavný web.", benefits: ["Viac zdrojov autority", "Tematická relevancia", "Prirodzený profil odkazov", "Dlhodobá SEO stratégia"] },
      { title: "Použitie ako Hlavná Doména", desc: "Spustite nový projekt priamo s doménou, ktorá už má autoritu.", benefits: ["Okamžitý štart s autoritou", "Existujúca dôvera od Google", "Rýchlejšia indexácia", "Výhoda nad konkurenciou"] },
      { title: "Súkromná Blogová Sieť (PBN)", desc: "Využite prémiové domény na vytvorenie hodnotných obsahových webov.", benefits: ["Plná kontrola nad spätnými odkazmi", "Tematické obsahové weby", "Diverzifikované profily odkazov", "Škálovateľné budovanie odkazov"] }
    ]
  },
  sr: {
    badge: "СЕО Стратегије", title: "Како Функционишу СЕО Преусмеравања и Изградња Ауторитета?",
    subtitle: "Постоји више стратешких начина коришћења премиум домена за максимални СЕО ефекат.",
    strategies: [
      { title: "Стратегија 301 Преусмеравања", desc: "301 преусмеравање преноси сву СЕО вредност и ауторитет са премиум домена на ваш главни домен.", benefits: ["Директан пренос вредности линкова", "Очување свих повратних линкова", "Брзи раст ауторитета", "Једнократно подешавање, трајан ефекат"] },
      { title: "Слагање Ауторитета", desc: "Изградите мрежу ауторитативних домена који сви повезују на ваш главни сајт.", benefits: ["Више извора ауторитета", "Тематска релевантност", "Природни профил линкова", "Дугорочна СЕО стратегија"] },
      { title: "Коришћење као Главни Домен", desc: "Покрените нови пројекат одмах са доменом који већ има ауторитет.", benefits: ["Тренутни старт са ауторитетом", "Постојеће поверење Гугла", "Брже индексирање", "Предност над конкуренцијом"] },
      { title: "Приватна Блог Мрежа (PBN)", desc: "Користите премиум домене за стварање вредних садржајних сајтова.", benefits: ["Потпуна контрола над повратним линковима", "Тематски садржајни сајтови", "Разноврсни профили линкова", "Скалабилна изградња линкова"] }
    ]
  },
  sl: {
    badge: "SEO Strategije", title: "Kako Delujejo SEO Preusmeritve in Gradnja Avtoritete?",
    subtitle: "Obstaja več strateških načinov uporabe premium domen za maksimalni SEO učinek.",
    strategies: [
      { title: "Strategija 301 Preusmeritve", desc: "301 preusmeritev prenese vso SEO vrednost in avtoriteto s premium domene na vašo glavno domeno.", benefits: ["Neposreden prenos vrednosti povezav", "Ohranitev vseh povratnih povezav", "Hitra rast avtoritete", "Enkratna nastavitev, trajen učinek"] },
      { title: "Kopičenje Avtoritete", desc: "Zgradite mrežo avtoritativnih domen, ki vse povezujejo na vašo glavno stran.", benefits: ["Več virov avtoritete", "Tematska relevantnost", "Naravni profil povezav", "Dolgoročna SEO strategija"] },
      { title: "Uporaba kot Glavna Domena", desc: "Zaženite nov projekt neposredno z domeno, ki že ima avtoriteto.", benefits: ["Takojšnji začetek z avtoriteto", "Obstoječe zaupanje Googla", "Hitrejše indeksiranje", "Prednost pred konkurenco"] },
      { title: "Zasebno Blog Omrežje (PBN)", desc: "Uporabite premium domene za ustvarjanje vrednih vsebinskih strani.", benefits: ["Popoln nadzor nad povratnimi povezavami", "Tematske vsebinske strani", "Raznovrstni profili povezav", "Razširljiva gradnja povezav"] }
    ]
  },
  ko: {
    badge: "SEO 전략", title: "SEO 리디렉션과 권위 구축은 어떻게 작동하나요?",
    subtitle: "프리미엄 도메인을 최대한 활용하는 여러 전략적 방법이 있습니다.",
    strategies: [
      { title: "301 리디렉션 전략", desc: "301 리디렉션은 프리미엄 도메인의 모든 SEO 가치와 권위를 메인 도메인으로 이전합니다.", benefits: ["링크 가치의 직접 이전", "모든 백링크 보존", "빠른 권위 상승", "일회 설정, 지속적 효과"] },
      { title: "권위 스태킹", desc: "메인 사이트로 연결되는 권위 있는 도메인 네트워크를 구축하세요.", benefits: ["다중 권위 소스", "주제 관련성", "자연스러운 링크 프로필", "장기 SEO 전략"] },
      { title: "메인 도메인으로 사용", desc: "이미 권위가 있는 도메인으로 새 프로젝트를 시작하세요.", benefits: ["즉시 권위로 시작", "기존 구글 신뢰", "더 빠른 인덱싱", "경쟁 우위"] },
      { title: "프라이빗 블로그 네트워크 (PBN)", desc: "프리미엄 도메인으로 강력한 백링크를 생성하는 콘텐츠 사이트를 만드세요.", benefits: ["백링크 완전 통제", "주제별 콘텐츠 사이트", "다양한 링크 프로필", "확장 가능한 링크 빌딩"] }
    ]
  },
  hu: {
    badge: "SEO Stratégiák", title: "Hogyan Működnek az SEO Átirányítások és Tekintélyépítés?",
    subtitle: "Többféle stratégiai mód létezik prémium domainek maximális SEO hatásához.",
    strategies: [
      { title: "301 Átirányítási Stratégia", desc: "A 301 átirányítás minden SEO értéket és tekintélyt átvisz a prémium domainről a fő domainre.", benefits: ["Link érték közvetlen átvitele", "Összes backlink megőrzése", "Gyors tekintély növekedés", "Egyszeri beállítás, tartós hatás"] },
      { title: "Tekintély Halmozás", desc: "Építsen tekintélyes domain hálózatot, amely a fő oldalára mutat.", benefits: ["Több tekintélyforrás", "Tematikus relevancia", "Természetes linkprofil", "Hosszú távú SEO stratégia"] },
      { title: "Fő Domainként Használat", desc: "Indítsa el új projektjét már tekintéllyel rendelkező domainnel.", benefits: ["Azonnali indulás tekintéllyel", "Meglévő Google bizalom", "Gyorsabb indexelés", "Versenyelőny"] },
      { title: "Privát Blog Hálózat (PBN)", desc: "Használjon prémium domaineket értékes tartalomoldalak létrehozásához.", benefits: ["Teljes kontroll a backlinkek felett", "Tematikus tartalomoldalak", "Változatos linkprofilok", "Skálázható linképítés"] }
    ]
  },
  th: {
    badge: "กลยุทธ์ SEO", title: "การเปลี่ยนเส้นทาง SEO และการสร้างอำนาจทำงานอย่างไร?",
    subtitle: "มีหลายวิธีเชิงกลยุทธ์ในการใช้โดเมนพรีเมียมเพื่อผลกระทบ SEO สูงสุด",
    strategies: [
      { title: "กลยุทธ์ 301 Redirect", desc: "301 redirect ถ่ายโอนค่า SEO และอำนาจทั้งหมดจากโดเมนพรีเมียมไปยังโดเมนหลัก", benefits: ["การถ่ายโอนค่าลิงก์โดยตรง", "รักษาแบ็คลิงก์ทั้งหมด", "เพิ่มอำนาจอย่างรวดเร็ว", "ตั้งค่าครั้งเดียว ผลลัพธ์ยาวนาน"] },
      { title: "การสะสมอำนาจ", desc: "สร้างเครือข่ายโดเมนที่มีอำนาจที่ลิงก์ไปยังเว็บไซต์หลัก", benefits: ["แหล่งอำนาจหลายแหล่ง", "ความเกี่ยวข้องตามหัวข้อ", "โปรไฟล์ลิงก์ธรรมชาติ", "กลยุทธ์ SEO ระยะยาว"] },
      { title: "ใช้เป็นโดเมนหลัก", desc: "เปิดตัวโปรเจกต์ใหม่ด้วยโดเมนที่มีอำนาจอยู่แล้ว", benefits: ["เริ่มต้นทันทีด้วยอำนาจ", "ความไว้วางใจจาก Google", "จัดทำดัชนีเร็วขึ้น", "ได้เปรียบในการแข่งขัน"] },
      { title: "เครือข่ายบล็อกส่วนตัว (PBN)", desc: "ใช้โดเมนพรีเมียมสร้างเว็บไซต์เนื้อหาที่มีคุณค่า", benefits: ["ควบคุมแบ็คลิงก์เต็มที่", "เว็บไซต์เนื้อหาตามหัวข้อ", "โปรไฟล์ลิงก์หลากหลาย", "การสร้างลิงก์ที่ขยายได้"] }
    ]
  },
  vi: {
    badge: "Chiến Lược SEO", title: "Chuyển Hướng SEO và Xây Dựng Uy Tín Hoạt Động Như Thế Nào?",
    subtitle: "Có nhiều cách chiến lược để sử dụng tên miền cao cấp nhằm đạt hiệu quả SEO tối đa.",
    strategies: [
      { title: "Chiến Lược 301 Redirect", desc: "301 redirect chuyển toàn bộ giá trị SEO và uy tín từ tên miền cao cấp sang tên miền chính.", benefits: ["Chuyển trực tiếp giá trị liên kết", "Bảo toàn tất cả backlink", "Tăng uy tín nhanh chóng", "Thiết lập một lần, hiệu quả lâu dài"] },
      { title: "Xếp Chồng Uy Tín", desc: "Xây dựng mạng lưới tên miền có uy tín liên kết đến trang web chính.", benefits: ["Nhiều nguồn uy tín", "Liên quan theo chủ đề", "Hồ sơ liên kết tự nhiên", "Chiến lược SEO dài hạn"] },
      { title: "Sử Dụng Làm Tên Miền Chính", desc: "Khởi động dự án mới với tên miền đã có uy tín.", benefits: ["Bắt đầu ngay với uy tín", "Sự tin tưởng Google sẵn có", "Lập chỉ mục nhanh hơn", "Lợi thế cạnh tranh"] },
      { title: "Mạng Blog Riêng (PBN)", desc: "Sử dụng tên miền cao cấp để tạo các trang nội dung có giá trị.", benefits: ["Kiểm soát hoàn toàn backlink", "Trang nội dung theo chủ đề", "Hồ sơ liên kết đa dạng", "Xây dựng liên kết mở rộng được"] }
    ]
  },
  id: {
    badge: "Strategi SEO", title: "Bagaimana Redirect SEO dan Pembangunan Otoritas Bekerja?",
    subtitle: "Ada beberapa cara strategis untuk menggunakan domain premium untuk dampak SEO maksimal.",
    strategies: [
      { title: "Strategi 301 Redirect", desc: "301 redirect mentransfer semua nilai SEO dan otoritas dari domain premium ke domain utama.", benefits: ["Transfer langsung nilai tautan", "Pelestarian semua backlink", "Peningkatan otoritas cepat", "Pengaturan sekali, efek bertahan lama"] },
      { title: "Penumpukan Otoritas", desc: "Bangun jaringan domain berwibawa yang menautkan ke situs utama.", benefits: ["Banyak sumber otoritas", "Relevansi tematik", "Profil tautan alami", "Strategi SEO jangka panjang"] },
      { title: "Gunakan Sebagai Domain Utama", desc: "Luncurkan proyek baru dengan domain yang sudah memiliki otoritas.", benefits: ["Mulai langsung dengan otoritas", "Kepercayaan Google yang ada", "Pengindeksan lebih cepat", "Keunggulan kompetitif"] },
      { title: "Jaringan Blog Pribadi (PBN)", desc: "Gunakan domain premium untuk membuat situs konten bernilai.", benefits: ["Kontrol penuh atas backlink", "Situs konten tematik", "Profil tautan beragam", "Pembangunan tautan skalabel"] }
    ]
  },
  et: {
    badge: "SEO Strateegiad", title: "Kuidas Töötavad SEO Ümbersuunamised ja Autoriteetide Ehitamine?",
    subtitle: "Premium domeenide kasutamiseks on mitmeid strateegilisi viise.",
    strategies: [
      { title: "301 Ümbersuunamise Strateegia", desc: "301 ümbersuunamine kannab kogu SEO väärtuse premium domeenilt põhidomeenile.", benefits: ["Lingi väärtuse otsene ülekanne", "Kõigi tagasilinkide säilitamine", "Kiire autoriteedi kasv", "Ühekordne seadistus, kestev efekt"] },
      { title: "Autoriteedi Kogumine", desc: "Ehitage autoriteetne domeenivõrgustik, mis viitab põhisaidile.", benefits: ["Mitu autoriteediallikat", "Temaatiline asjakohasus", "Loomulik lingiprofiil", "Pikaajaline SEO strateegia"] },
      { title: "Kasuta Põhidomeenina", desc: "Käivitage uus projekt domeeniga, millel on juba autoriteet.", benefits: ["Kohene start autoriteediga", "Olemasolev Google usaldus", "Kiirem indekseerimine", "Konkurentsieelis"] },
      { title: "Privaatne Blogi Võrgustik (PBN)", desc: "Kasutage premium domeene väärtuslike sisulehtede loomiseks.", benefits: ["Täielik kontroll tagasilinkide üle", "Temaatilised sisulehed", "Mitmekesised lingiprofiilid", "Skaleeritav lingiehitus"] }
    ]
  },
  lv: {
    badge: "SEO Stratēģijas", title: "Kā Darbojas SEO Novirzīšana un Autoritātes Veidošana?",
    subtitle: "Ir vairāki stratēģiski veidi, kā izmantot premium domēnus maksimālam SEO efektam.",
    strategies: [
      { title: "301 Novirzīšanas Stratēģija", desc: "301 novirzīšana pārnes visu SEO vērtību no premium domēna uz galveno domēnu.", benefits: ["Tiešs saišu vērtības pārvedums", "Visu atpakaļsaišu saglabāšana", "Ātra autoritātes pieaugums", "Vienreizēja iestatīšana, ilgstošs efekts"] },
      { title: "Autoritātes Uzkrāšana", desc: "Izveidojiet autoritatīvu domēnu tīklu, kas norāda uz galveno vietni.", benefits: ["Vairāki autoritātes avoti", "Tematiska atbilstība", "Dabisks saišu profils", "Ilgtermiņa SEO stratēģija"] },
      { title: "Izmantot kā Galveno Domēnu", desc: "Sāciet jaunu projektu ar domēnu, kuram jau ir autoritāte.", benefits: ["Tūlītējs sākums ar autoritāti", "Esoša Google uzticamība", "Ātrāka indeksēšana", "Konkurences priekšrocība"] },
      { title: "Privāts Blogu Tīkls (PBN)", desc: "Izmantojiet premium domēnus vērtīgu satura vietņu izveidei.", benefits: ["Pilna kontrole pār atpakaļsaitēm", "Tematiskas satura vietnes", "Dažādoti saišu profili", "Mērogojama saišu veidošana"] }
    ]
  },
  lt: {
    badge: "SEO Strategijos", title: "Kaip Veikia SEO Peradresavimai ir Autoriteto Kūrimas?",
    subtitle: "Yra keletas strateginių būdų naudoti premium domenus maksimaliam SEO poveikiui.",
    strategies: [
      { title: "301 Peradresavimo Strategija", desc: "301 peradresavimas perkelia visą SEO vertę iš premium domeno į pagrindinį domeną.", benefits: ["Tiesioginis nuorodų vertės perkėlimas", "Visų nuorodų išsaugojimas", "Greitas autoriteto augimas", "Vienkartinė sąranka, ilgalaikis efektas"] },
      { title: "Autoriteto Kaupimas", desc: "Sukurkite autoritetingų domenų tinklą, nukreipiantį į pagrindinę svetainę.", benefits: ["Keli autoriteto šaltiniai", "Teminė atitiktis", "Natūralus nuorodų profilis", "Ilgalaikė SEO strategija"] },
      { title: "Naudoti kaip Pagrindinį Domeną", desc: "Pradėkite naują projektą su domenu, kuris jau turi autoritetą.", benefits: ["Momentinis startas su autoritetu", "Esamas Google pasitikėjimas", "Greitesnis indeksavimas", "Konkurencinis pranašumas"] },
      { title: "Privatus Tinklaraščių Tinklas (PBN)", desc: "Naudokite premium domenus vertingų turinio svetainių kūrimui.", benefits: ["Pilna kontrolė nuorodų", "Teminės turinio svetainės", "Įvairūs nuorodų profiliai", "Plečiamas nuorodų kūrimas"] }
    ]
  },
  is: {
    badge: "SEO Aðferðir", title: "Hvernig Virka SEO Tilvísanir og Valdauppbygging?",
    subtitle: "Nokkrar stefnumarkandi leiðir eru til að nota úrvals lén fyrir hámarks SEO áhrif.",
    strategies: [
      { title: "301 Tilvísunarstefna", desc: "301 tilvísun flytur allt SEO gildi frá úrvalsléninu á aðallénið.", benefits: ["Bein yfirfærsla tengisgildis", "Varðveisla allra baktengla", "Hröð valdsaukning", "Einu sinni uppsetning, varanleg áhrif"] },
      { title: "Valdsstöflun", desc: "Byggðu net valdamikilla léna sem tengja á aðalsíðuna.", benefits: ["Margir valdsuppsprettur", "Þemaleg tengsl", "Náttúruleg tengiprófíll", "Langtíma SEO stefna"] },
      { title: "Nota sem Aðallén", desc: "Byrjaðu nýtt verkefni með léni sem þegar hefur vald.", benefits: ["Samstundis byrjun með valdi", "Núverandi Google traust", "Hraðari flokkun", "Samkeppnisforskot"] },
      { title: "Einkabloggnet (PBN)", desc: "Notaðu úrvalslén til að búa til verðmætar efnissíður.", benefits: ["Full stjórn á baktengum", "Þemasíður með efni", "Fjölbreytt tengiprófíl", "Skalanleg tengiuppbygging"] }
    ]
  },
  sq: {
    badge: "Strategji SEO", title: "Si Funksionojnë Ridrejtimet SEO dhe Ndërtimi i Autoritetit?",
    subtitle: "Ka disa mënyra strategjike për të përdorur domene premium për ndikim maksimal SEO.",
    strategies: [
      { title: "Strategjia 301 Redirect", desc: "301 redirect transferon vlerën SEO dhe autoritetin nga domeni premium tek domeni kryesor.", benefits: ["Transfer direkt i vlerës së linkut", "Ruajtja e të gjitha backlinks", "Rritje e shpejtë e autoritetit", "Vendosje një herë, efekt i qëndrueshëm"] },
      { title: "Grumbullimi i Autoritetit", desc: "Ndërtoni rrjet domenesh me autoritet që lidhen me faqen kryesore.", benefits: ["Burime të shumta autoriteti", "Relevancë tematike", "Profil natyral linkesh", "Strategji SEO afatgjatë"] },
      { title: "Përdorni si Domain Kryesor", desc: "Nisni projektin e ri me domen që ka autoritet.", benefits: ["Fillim i menjëhershëm me autoritet", "Besim ekzistues i Google", "Indeksim më i shpejtë", "Avantazh konkurrues"] },
      { title: "Rrjet Privat Blogjesh (PBN)", desc: "Përdorni domene premium për faqe përmbajtjeje të vlefshme.", benefits: ["Kontroll i plotë mbi backlinks", "Faqe përmbajtjeje tematike", "Profile të larmishme linkesh", "Ndërtim i shkallëzueshëm linkesh"] }
    ]
  },
  mk: {
    badge: "SEO Стратегии", title: "Како Функционираат SEO Пренасочувања и Градење Авторитет?",
    subtitle: "Постојат неколку стратешки начини за користење премиум домени за максимално SEO влијание.",
    strategies: [
      { title: "301 Пренасочување", desc: "301 пренасочувањето ја пренесува целата SEO вредност од премиум доменот на главниот домен.", benefits: ["Директен пренос на вредност", "Зачувување на сите линкови", "Брз раст на авторитет", "Еднократно поставување, траен ефект"] },
      { title: "Натрупување на Авторитет", desc: "Изградете мрежа од авторитативни домени кои водат до главната страница.", benefits: ["Повеќе извори на авторитет", "Тематска релевантност", "Природен линк профил", "Долгорочна SEO стратегија"] },
      { title: "Користете како Главен Домен", desc: "Започнете нов проект со домен кој веќе има авторитет.", benefits: ["Моментален старт со авторитет", "Постоечка Google доверба", "Побрзо индексирање", "Конкурентска предност"] },
      { title: "Приватна Блог Мрежа (PBN)", desc: "Користете премиум домени за вредни содржински страници.", benefits: ["Целосна контрола над линкови", "Тематски содржински страници", "Различни линк профили", "Скалабилно градење линкови"] }
    ]
  },
  bs: {
    badge: "SEO Strategije", title: "Kako Funkcionišu SEO Preusmjeravanja i Izgradnja Autoriteta?",
    subtitle: "Postoji nekoliko strateških načina korištenja premium domena za maksimalni SEO učinak.",
    strategies: [
      { title: "301 Preusmjeravanje", desc: "301 preusmjeravanje prenosi svu SEO vrijednost sa premium domene na glavnu domenu.", benefits: ["Direktan prijenos vrijednosti linkova", "Očuvanje svih backlinkova", "Brz rast autoriteta", "Jednokratno postavljanje, trajni efekt"] },
      { title: "Gomilanje Autoriteta", desc: "Izgradite mrežu autoritativnih domena koje vode na glavnu stranicu.", benefits: ["Više izvora autoriteta", "Tematska relevantnost", "Prirodni link profil", "Dugoročna SEO strategija"] },
      { title: "Glavni Domen", desc: "Pokrenite novi projekt s domenom koji već ima autoritet.", benefits: ["Trenutni početak s autoritetom", "Postojeće Google povjerenje", "Brže indeksiranje", "Konkurentska prednost"] },
      { title: "Privatna Blog Mreža (PBN)", desc: "Koristite premium domene za vrijedne stranice sa sadržajem.", benefits: ["Potpuna kontrola nad backlinkovima", "Tematske stranice sa sadržajem", "Raznoliki link profili", "Skalabilno građenje linkova"] }
    ]
  },
  lb: {
    badge: "SEO Strategien", title: "Wéi Funktionéieren SEO Viruleedungen an Autoritéitsopbau?",
    subtitle: "Et ginn e puer strategesch Weeër fir Premium Domainen ze benotze fir maximal SEO Impakt.",
    strategies: [
      { title: "301 Viruleedung", desc: "Eng 301 Viruleedung iwwerdréit all SEO Wäert vum Premium Domain op den Haaptdomain.", benefits: ["Direkten Transfer vum Linkwäert", "Erhale vun allen Backlinks", "Séier Autoritéitswuesstem", "Eemol opgesat, laangfristeg Effekt"] },
      { title: "Autoritéitsstapelung", desc: "Baut en Netzwierk vun autoritéitsstarke Domainen déi op d'Haaptsäit verlinken.", benefits: ["Méi Autoritéitsquellen", "Thematesch Relevanz", "Natierlechen Linkprofil", "Laangfristeg SEO Strategie"] },
      { title: "Als Haaptdomain benotzen", desc: "Start en neie Projet mat engem Domain deen scho Autoritéit huet.", benefits: ["Direkten Start mat Autoritéit", "Bestoend Google Vertrauen", "Méi schnell Indexéierung", "Competitiven Avantage"] },
      { title: "Privaten Blog Netzwierk (PBN)", desc: "Benotzt Premium Domainen fir wäertvoll Inhaltsiten.", benefits: ["Voll Kontroll iwwer Backlinks", "Thematesch Inhaltsiten", "Diversifizéiert Linkprofiler", "Skaléierbar Linkopbau"] }
    ]
  },
  bn: {
    badge: "SEO কৌশল", title: "SEO রিডাইরেক্ট এবং কর্তৃত্ব নির্মাণ কীভাবে কাজ করে?",
    subtitle: "প্রিমিয়াম ডোমেইন সর্বোচ্চ SEO প্রভাবের জন্য ব্যবহারের কৌশলগত উপায় রয়েছে।",
    strategies: [
      { title: "301 রিডাইরেক্ট কৌশল", desc: "301 রিডাইরেক্ট প্রিমিয়াম ডোমেইন থেকে প্রধান ডোমেইনে সমস্ত SEO মূল্য স্থানান্তর করে।", benefits: ["লিংক মূল্যের সরাসরি স্থানান্তর", "সমস্ত ব্যাকলিংক সংরক্ষণ", "দ্রুত কর্তৃত্ব বৃদ্ধি", "একবার সেটআপ, দীর্ঘস্থায়ী প্রভাব"] },
      { title: "কর্তৃত্ব স্ট্যাকিং", desc: "প্রধান সাইটে লিংক করা কর্তৃত্বশীল ডোমেইনের নেটওয়ার্ক তৈরি করুন।", benefits: ["একাধিক কর্তৃত্বের উৎস", "বিষয়ভিত্তিক প্রাসঙ্গিকতা", "প্রাকৃতিক লিংক প্রোফাইল", "দীর্ঘমেয়াদী SEO কৌশল"] },
      { title: "প্রধান ডোমেইন হিসেবে ব্যবহার", desc: "কর্তৃত্ব থাকা ডোমেইন দিয়ে নতুন প্রকল্প শুরু করুন।", benefits: ["কর্তৃত্ব সহ তাৎক্ষণিক শুরু", "বিদ্যমান Google বিশ্বাস", "দ্রুত ইনডেক্সিং", "প্রতিযোগিতামূলক সুবিধা"] },
      { title: "প্রাইভেট ব্লগ নেটওয়ার্ক (PBN)", desc: "মূল্যবান কনটেন্ট সাইট তৈরি করতে প্রিমিয়াম ডোমেইন ব্যবহার করুন।", benefits: ["ব্যাকলিংকের সম্পূর্ণ নিয়ন্ত্রণ", "বিষয়ভিত্তিক কনটেন্ট সাইট", "বৈচিত্র্যময় লিংক প্রোফাইল", "স্কেলেবল লিংক বিল্ডিং"] }
    ]
  },
  ms: {
    badge: "Strategi SEO", title: "Bagaimana Pengalihan SEO dan Pembinaan Autoriti Berfungsi?",
    subtitle: "Terdapat beberapa cara strategik untuk menggunakan domain premium bagi impak SEO maksimum.",
    strategies: [
      { title: "Strategi 301 Redirect", desc: "301 redirect memindahkan semua nilai SEO dari domain premium ke domain utama.", benefits: ["Pemindahan langsung nilai pautan", "Pemeliharaan semua pautan balik", "Peningkatan autoriti pantas", "Persediaan sekali, kesan berpanjangan"] },
      { title: "Penimbunan Autoriti", desc: "Bina rangkaian domain berwibawa yang memaut ke laman utama.", benefits: ["Pelbagai sumber autoriti", "Kerelevanan tematik", "Profil pautan semula jadi", "Strategi SEO jangka panjang"] },
      { title: "Guna Sebagai Domain Utama", desc: "Lancarkan projek baharu dengan domain yang mempunyai autoriti.", benefits: ["Mula serta-merta dengan autoriti", "Kepercayaan Google sedia ada", "Pengindeksan lebih pantas", "Kelebihan kompetitif"] },
      { title: "Rangkaian Blog Peribadi (PBN)", desc: "Gunakan domain premium untuk mencipta laman kandungan bernilai.", benefits: ["Kawalan penuh ke atas pautan balik", "Laman kandungan tematik", "Profil pautan pelbagai", "Pembinaan pautan berskala"] }
    ]
  }
};

const SeoRedirectsSection = ({ lang }: { lang: string }) => {
  const content = t[lang as Lang] || t['en'];
  return (
    <section id="seo-redirects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
            <Link className="w-4 h-4 mr-2 inline" />
            {content.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{content.title}</h2>
          <p className="text-slate-400 max-w-3xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {content.strategies.map((strategy, index) => (
            <Card key={index} className="bg-slate-800/40 border-slate-700/50 hover:border-amber-500/30 transition-all">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                <p className="text-slate-400 mb-4 leading-relaxed">{strategy.desc}</p>
                <ul className="space-y-2">
                  {strategy.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeoRedirectsSection;

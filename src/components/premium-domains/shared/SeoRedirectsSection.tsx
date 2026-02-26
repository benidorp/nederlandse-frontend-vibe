import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, CheckCircle } from "lucide-react";

type Lang = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl';

const t: Record<Lang, {
  badge: string; title: string; subtitle: string;
  strategies: { title: string; desc: string; benefits: string[] }[];
}> = {
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
  }
};

const SeoRedirectsSection = ({ lang }: { lang: Lang }) => {
  const content = t[lang];
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

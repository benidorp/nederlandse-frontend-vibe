import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, CheckCircle } from "lucide-react";

type Lang = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl';

const t: Record<Lang, {
  title: string; intro: string; globalAccess: string;
  whatIs: string; whatIsDesc: string; uses: string[]; meansTitle: string;
  means: string[]; meansNote: string;
  regTitle: string; inwxTitle: string; inwxExt: string; inwxHow: string; inwxCost: string;
  d101Title: string; d101Desc: string; d101Cost: string;
  netimTitle: string; netimDesc: string; netimCost: string;
  tableTitle: string; thReg: string; thExt: string; thCost: string;
  whyTitle: string; whyIntro: string; whyPoints: string[]; whyNote: string;
  investTitle: string; investIntro: string; investPoints: string[];
  investCta: string; investTagline: string;
}> = {
  sv: {
    title: "Premium .EU & Europeiska Tillägg med Historik — Vad är en Trustee-Tjänst?",
    intro: "Vi specialiserar oss på .EU och andra europeiska domäntillägg. Vår portfölj består av premium och utgångna domännamn med bevisad onlinehistorik.",
    globalAccess: "🌐 Globalt tillgänglig – även för icke-EU-köpare via trustee-registrering med en verifierad EU-adress.",
    whatIs: "🔐 Vad är en Trustee (Lokal Närvaro-Tjänst)?", whatIsDesc: "En trustee är en erkänd registrar som:",
    uses: ["Använder en fysisk adress inom EU för registrering", "Agerar som administrativ kontakt hos registret", "Säkerställer att domänen uppfyller alla EU-regler"],
    meansTitle: "Vad detta innebär för dig:", means: ["Du förblir fullständig ägare och administratör", "Fri användning för webbplats, e-post, varumärke eller omdirigeringar", "Inget EU-företag eller lokal adress krävs", "Helt lagligt och transparent"],
    meansNote: "För icke-EU-köpare är detta den standardmässiga och mest använda lösningen.",
    regTitle: "🧩 Trustee-Registrering via Erkända Registrarer",
    inwxTitle: "INWX — Mycket prisvärd trustee (från €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Under registrering erbjuds trustee-alternativet automatiskt. INWX använder en EU-adress för registrering. Du behåller full kontroll.", inwxCost: "€3 per år",
    d101Title: "101domain — Trustee direkt vid betalning", d101Desc: "Trustee erbjuds automatiskt. Lämplig för flera europeiska ccTLD:er.", d101Cost: "± $25 per år",
    netimTitle: "Netim — Trustee bara vid behov", netimDesc: "Aktiv bara för tillägg med krav. Transparent och professionell lösning.", netimCost: "€10–€30 per år",
    tableTitle: "📊 Översikt", thReg: "Registrar", thExt: "Tillägg", thCost: "Trustee-Kostnad",
    whyTitle: "💎 Varför Premium Europeiska Domäner Är Extra Värdefulla", whyIntro: "Våra domäner är mer än bara ett namn:",
    whyPoints: ["🔗 Onlinehistorik & omnämnanden", "🏛️ Ofta tidigare EU-projekt", "🌍 Förtroende hos europeiska besökare", "📉 Mindre konkurrens än .COM", "🔁 Perfekt för 301-omdirigeringar", "🧠 Intressant för varumärke, SEO och investeringar"],
    whyNote: "I praktiken är dessa europeiska namn ofta mer värdefulla och pålitliga än många .COM, .NET eller .ORG domäner.",
    investTitle: "🌍 Idealiskt för Internationella Investerare", investIntro: "För investerare utanför EU erbjuder europeiska domäner:",
    investPoints: ["Exklusivitet genom reglering", "Högre kvalitetströskel", "Stark geografisk positionering", "Attraktiv användning för internationella projekt"],
    investCta: "Via trustee-registrering är även premium utgångna .EU-domäner användbara globalt.", investTagline: "➡️ Europeisk auktoritet. Internationell tillämpbarhet."
  },
  no: {
    title: "Premium .EU & Europeiske Utvidelser med Historikk — Hva er en Trustee-Tjeneste?",
    intro: "Vi spesialiserer oss på .EU og andre europeiske domenetillegg. Vår portefølje består av premium og utgåtte domenenavn med bevist netthistorikk.",
    globalAccess: "🌐 Globalt tilgjengelig – også for ikke-EU-kjøpere via trustee-registrering med en verifisert EU-adresse.",
    whatIs: "🔐 Hva er en Trustee (Lokal Tilstedeværelse)?", whatIsDesc: "En trustee er en anerkjent registrar som:",
    uses: ["Bruker en fysisk adresse innenfor EU for registrering", "Fungerer som administrativ kontakt hos registeret", "Sikrer at domenet overholder alle EU-regler"],
    meansTitle: "Hva dette betyr for deg:", means: ["Du forblir full eier og administrator", "Fri bruk for nettside, e-post, merkevare eller omdirigeringer", "Inget EU-selskap eller lokal adresse nødvendig", "Helt lovlig og transparent"],
    meansNote: "For ikke-EU-kjøpere er dette den standard og mest brukte løsningen.",
    regTitle: "🧩 Trustee-Registrering via Anerkjente Registrarer",
    inwxTitle: "INWX — Veldig rimelig trustee (fra €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Under registrering tilbys trustee-alternativet automatisk.", inwxCost: "€3 per år",
    d101Title: "101domain — Trustee direkte ved betaling", d101Desc: "Trustee tilbys automatisk. Egnet for flere europeiske ccTLDer.", d101Cost: "± $25 per år",
    netimTitle: "Netim — Trustee bare ved behov", netimDesc: "Aktiv bare for utvidelser med krav.", netimCost: "€10–€30 per år",
    tableTitle: "📊 Oversikt", thReg: "Registrar", thExt: "Utvidelser", thCost: "Trustee-Kostnad",
    whyTitle: "💎 Hvorfor Premium Europeiske Domener Er Ekstra Verdifulle", whyIntro: "Våre domener er mer enn bare et navn:",
    whyPoints: ["🔗 Netthistorikk & omtaler", "🏛️ Ofte tidligere EU-prosjekter", "🌍 Tillit hos europeiske besøkende", "📉 Mindre konkurranse enn .COM", "🔁 Perfekt for 301-omdirigeringer", "🧠 Interessant for merkevare, SEO og investeringer"],
    whyNote: "I praksis er disse europeiske navnene ofte mer verdifulle enn mange .COM, .NET eller .ORG domener.",
    investTitle: "🌍 Ideelt for Internasjonale Investorer", investIntro: "For investorer utenfor EU tilbyr europeiske domener:",
    investPoints: ["Eksklusivitet gjennom regulering", "Høyere kvalitetsterskel", "Sterk geografisk posisjonering", "Attraktiv bruk for internasjonale prosjekter"],
    investCta: "Via trustee-registrering er også premium utgåtte .EU-domener brukbare globalt.", investTagline: "➡️ Europeisk autoritet. Internasjonal anvendbarhet."
  },
  da: {
    title: "Premium .EU & Europæiske Udvidelser med Historik — Hvad er en Trustee-Tjeneste?",
    intro: "Vi specialiserer os i .EU og andre europæiske domæneudvidelser. Vores portefølje består af premium og udløbne domænenavne med bevist onlinehistorik.",
    globalAccess: "🌐 Globalt tilgængelig – også for ikke-EU-købere via trustee-registrering med en verificeret EU-adresse.",
    whatIs: "🔐 Hvad er en Trustee (Lokal Tilstedeværelse)?", whatIsDesc: "En trustee er en anerkendt registrar, der:",
    uses: ["Bruger en fysisk adresse inden for EU til registrering", "Fungerer som administrativ kontakt hos registeret", "Sikrer at domænet overholder alle EU-regler"],
    meansTitle: "Hvad dette betyder for dig:", means: ["Du forbliver fuld ejer og administrator", "Fri brug til hjemmeside, e-mail, brand eller omdirigeringer", "Intet EU-firma eller lokal adresse påkrævet", "Helt lovligt og transparent"],
    meansNote: "For ikke-EU-købere er dette den standard og mest brugte løsning.",
    regTitle: "🧩 Trustee-Registrering via Anerkendte Registrarer",
    inwxTitle: "INWX — Meget overkommelig trustee (fra €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Under registrering tilbydes trustee-muligheden automatisk.", inwxCost: "€3 per år",
    d101Title: "101domain — Trustee direkte ved betaling", d101Desc: "Trustee tilbydes automatisk. Egnet til flere europæiske ccTLD'er.", d101Cost: "± $25 per år",
    netimTitle: "Netim — Trustee kun ved behov", netimDesc: "Aktiv kun for udvidelser med krav.", netimCost: "€10–€30 per år",
    tableTitle: "📊 Oversigt", thReg: "Registrar", thExt: "Udvidelser", thCost: "Trustee-Pris",
    whyTitle: "💎 Hvorfor Premium Europæiske Domæner Er Ekstra Værdifulde", whyIntro: "Vores domæner er mere end bare et navn:",
    whyPoints: ["🔗 Onlinehistorik & omtaler", "🏛️ Ofte tidligere EU-projekter", "🌍 Tillid hos europæiske besøgende", "📉 Mindre konkurrence end .COM", "🔁 Perfekt til 301-omdirigeringer", "🧠 Interessant for branding, SEO og investeringer"],
    whyNote: "I praksis er disse europæiske navne ofte mere værdifulde end mange .COM, .NET eller .ORG domæner.",
    investTitle: "🌍 Ideel for Internationale Investorer", investIntro: "For investorer uden for EU tilbyder europæiske domæner:",
    investPoints: ["Eksklusivitet gennem regulering", "Højere kvalitetstærskel", "Stærk geografisk positionering", "Attraktiv brug til internationale projekter"],
    investCta: "Via trustee-registrering er også premium udløbne .EU-domæner brugbare globalt.", investTagline: "➡️ Europæisk autoritet. International anvendelighed."
  },
  fi: {
    title: "Premium .EU & Eurooppalaiset Laajennukset Historioineen — Mikä on Trustee-Palvelu?",
    intro: "Olemme erikoistuneet .EU:hun ja muihin eurooppalaisiin verkkotunnuslaajennuksiin. Portfoliomme koostuu premium- ja vanhentuneista verkkotunnuksista, joilla on todistettu verkkohistoria.",
    globalAccess: "🌐 Maailmanlaajuisesti saatavilla – myös EU:n ulkopuolisille ostajille trustee-rekisteröinnin kautta.",
    whatIs: "🔐 Mikä on Trustee (Paikallinen Läsnäolo)?", whatIsDesc: "Trustee on tunnustettu rekisteröijä, joka:",
    uses: ["Käyttää fyysistä EU-osoitetta rekisteröintiin", "Toimii hallinnollisena yhteyshenkilönä rekisterissä", "Varmistaa verkkotunnuksen EU-sääntöjen noudattamisen"],
    meansTitle: "Mitä tämä tarkoittaa sinulle:", means: ["Pysyt täytenä omistajana ja ylläpitäjänä", "Vapaa käyttö verkkosivustolle, sähköpostille, brändäykselle", "EU-yritystä tai paikallista osoitetta ei tarvita", "Täysin laillista ja läpinäkyvää"],
    meansNote: "EU:n ulkopuolisille ostajille tämä on vakio- ja yleisimmin käytetty ratkaisu.",
    regTitle: "🧩 Trustee-Rekisteröinti Tunnustettujen Rekisteröijien Kautta",
    inwxTitle: "INWX — Erittäin edullinen trustee (alkaen €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Rekisteröinnin aikana trustee-vaihtoehto tarjotaan automaattisesti.", inwxCost: "€3 vuodessa",
    d101Title: "101domain — Trustee suoraan kassalla", d101Desc: "Trustee tarjotaan automaattisesti. Sopii useille eurooppalaisille ccTLD:ille.", d101Cost: "± $25 vuodessa",
    netimTitle: "Netim — Trustee vain tarvittaessa", netimDesc: "Aktiivinen vain vaatimuksen omaavilla laajennuksilla.", netimCost: "€10–€30 vuodessa",
    tableTitle: "📊 Yleiskatsaus", thReg: "Rekisteröijä", thExt: "Laajennukset", thCost: "Trustee-Hinta",
    whyTitle: "💎 Miksi Premium Eurooppalaiset Verkkotunnukset Ovat Erityisen Arvokkaita", whyIntro: "Verkkotunnuksemme ovat enemmän kuin nimi:",
    whyPoints: ["🔗 Verkkohistoria & maininnat", "🏛️ Usein entisiä EU-projekteja", "🌍 Luottamus eurooppalaisten kävijöiden keskuudessa", "📉 Vähemmän kilpailua kuin .COM", "🔁 Täydellinen 301-uudelleenohjauksiin", "🧠 Kiinnostava brändäykseen, SEO:hon ja sijoituksiin"],
    whyNote: "Käytännössä nämä eurooppalaiset nimet ovat usein arvokkaampia kuin monet .COM, .NET tai .ORG verkkotunnukset.",
    investTitle: "🌍 Ihanteellinen Kansainvälisille Sijoittajille", investIntro: "EU:n ulkopuolisille sijoittajille eurooppalaiset verkkotunnukset tarjoavat:",
    investPoints: ["Eksklusiivisuus sääntelyn kautta", "Korkeampi laatukynnys", "Vahva maantieteellinen asemointi", "Houkutteleva käyttö kansainvälisiin projekteihin"],
    investCta: "Trustee-rekisteröinnin kautta myös premium-vanhentuneet .EU-verkkotunnukset ovat käytettävissä maailmanlaajuisesti.", investTagline: "➡️ Eurooppalainen auktoriteetti. Kansainvälinen sovellettavuus."
  },
  cs: {
    title: "Premium .EU & Evropské Rozšíření s Historií — Co je Trustee Služba?",
    intro: "Specializujeme se na .EU a další evropské doménové rozšíření. Naše portfolio sestává z prémiových a expirovaných doménových jmen s prokázanou online historií.",
    globalAccess: "🌐 Globálně dostupné – i pro kupující mimo EU prostřednictvím trustee registrace.",
    whatIs: "🔐 Co je Trustee (Lokální Přítomnost)?", whatIsDesc: "Trustee je uznávaný registrátor, který:",
    uses: ["Používá fyzickou adresu v EU pro registraci", "Vystupuje jako administrativní kontakt u registru", "Zajišťuje soulad domény s pravidly EU"],
    meansTitle: "Co to pro vás znamená:", means: ["Zůstáváte plným vlastníkem a správcem", "Volné použití pro web, e-mail, značku", "Není potřeba EU firma nebo místní adresa", "Zcela legální a transparentní"],
    meansNote: "Pro kupující mimo EU je toto standardní a nejpoužívanější řešení.",
    regTitle: "🧩 Trustee Registrace přes Uznávané Registrátory",
    inwxTitle: "INWX — Velmi dostupný trustee (od €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Při registraci je trustee možnost nabídnuta automaticky.", inwxCost: "€3 ročně",
    d101Title: "101domain — Trustee přímo při platbě", d101Desc: "Trustee se nabízí automaticky.", d101Cost: "± $25 ročně",
    netimTitle: "Netim — Trustee pouze při potřebě", netimDesc: "Aktivní pouze pro rozšíření s povinností.", netimCost: "€10–€30 ročně",
    tableTitle: "📊 Přehled", thReg: "Registrátor", thExt: "Rozšíření", thCost: "Cena Trustee",
    whyTitle: "💎 Proč Jsou Prémiové Evropské Domény Extra Hodnotné", whyIntro: "Naše domény jsou víc než jen jméno:",
    whyPoints: ["🔗 Online historie & zmínky", "🏛️ Často bývalé EU projekty", "🌍 Důvěra u evropských návštěvníků", "📉 Méně konkurence než .COM", "🔁 Perfektní pro 301 přesměrování", "🧠 Zajímavé pro branding, SEO a investice"],
    whyNote: "V praxi jsou tyto evropské názvy často hodnotnější než mnoho .COM, .NET nebo .ORG domén.",
    investTitle: "🌍 Ideální pro Mezinárodní Investory", investIntro: "Pro investory mimo EU nabízejí evropské domény:",
    investPoints: ["Exkluzivitu díky regulaci", "Vyšší kvalitativní práh", "Silné geografické umístění", "Atraktivní využití pro mezinárodní projekty"],
    investCta: "Prostřednictvím trustee registrace jsou i prémiové expirované .EU domény využitelné celosvětově.", investTagline: "➡️ Evropská autorita. Mezinárodní aplikovatelnost."
  },
  el: {
    title: "Premium .EU & Ευρωπαϊκές Επεκτάσεις με Ιστορικό — Τι είναι η Υπηρεσία Trustee;",
    intro: "Ειδικευόμαστε σε .EU και άλλες ευρωπαϊκές επεκτάσεις domain. Το χαρτοφυλάκιό μας αποτελείται από premium και ληγμένα ονόματα domain με αποδεδειγμένο ιστορικό.",
    globalAccess: "🌐 Παγκοσμίως προσβάσιμο – ακόμα και για αγοραστές εκτός ΕΕ μέσω trustee εγγραφής.",
    whatIs: "🔐 Τι είναι ένας Trustee;", whatIsDesc: "Ένας trustee είναι αναγνωρισμένος registrar που:",
    uses: ["Χρησιμοποιεί φυσική διεύθυνση εντός ΕΕ", "Ενεργεί ως διοικητική επαφή στο μητρώο", "Εξασφαλίζει συμμόρφωση με κανόνες ΕΕ"],
    meansTitle: "Τι σημαίνει αυτό για εσάς:", means: ["Παραμένετε πλήρης ιδιοκτήτης", "Ελεύθερη χρήση για ιστοσελίδα, email, brand", "Δεν χρειάζεται εταιρεία ΕΕ", "Πλήρως νόμιμο και διαφανές"],
    meansNote: "Για αγοραστές εκτός ΕΕ αυτή είναι η τυπική λύση.",
    regTitle: "🧩 Trustee Εγγραφή μέσω Αναγνωρισμένων Registrars",
    inwxTitle: "INWX — Πολύ προσιτός trustee (από €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Κατά την εγγραφή η επιλογή trustee προσφέρεται αυτόματα.", inwxCost: "€3 ανά έτος",
    d101Title: "101domain — Trustee απευθείας στο checkout", d101Desc: "Ο trustee προσφέρεται αυτόματα.", d101Cost: "± $25 ανά έτος",
    netimTitle: "Netim — Trustee μόνο όταν απαιτείται", netimDesc: "Ενεργό μόνο για επεκτάσεις με υποχρέωση.", netimCost: "€10–€30 ανά έτος",
    tableTitle: "📊 Επισκόπηση", thReg: "Registrar", thExt: "Επεκτάσεις", thCost: "Κόστος Trustee",
    whyTitle: "💎 Γιατί τα Premium Ευρωπαϊκά Domains Είναι Ιδιαίτερα Πολύτιμα", whyIntro: "Τα domains μας είναι κάτι περισσότερο από ένα όνομα:",
    whyPoints: ["🔗 Online ιστορικό & αναφορές", "🏛️ Συχνά πρώην έργα ΕΕ", "🌍 Εμπιστοσύνη Ευρωπαίων επισκεπτών", "📉 Λιγότερος ανταγωνισμός από .COM", "🔁 Ιδανικό για 301 ανακατευθύνσεις", "🧠 Ενδιαφέρον για branding, SEO και επενδύσεις"],
    whyNote: "Στην πράξη, αυτά τα ευρωπαϊκά ονόματα είναι συχνά πιο πολύτιμα από πολλά .COM, .NET ή .ORG domains.",
    investTitle: "🌍 Ιδανικό για Διεθνείς Επενδυτές", investIntro: "Για επενδυτές εκτός ΕΕ, τα ευρωπαϊκά domains προσφέρουν:",
    investPoints: ["Αποκλειστικότητα μέσω ρύθμισης", "Υψηλότερο κατώφλι ποιότητας", "Ισχυρή γεωγραφική τοποθέτηση", "Ελκυστική χρήση για διεθνή έργα"],
    investCta: "Μέσω trustee εγγραφής, ακόμη και premium ληγμένα .EU domains μπορούν να χρησιμοποιηθούν παγκοσμίως.", investTagline: "➡️ Ευρωπαϊκή εξουσία. Διεθνής εφαρμοσιμότητα."
  },
  ru: {
    title: "Премиум .EU & Европейские Расширения с Историей — Что Такое Услуга Trustee?",
    intro: "Мы специализируемся на .EU и других европейских доменных расширениях. Наш портфель состоит из премиум и просроченных доменных имён с подтверждённой онлайн-историей.",
    globalAccess: "🌐 Глобально доступны – в том числе для покупателей из-за пределов ЕС через trustee-регистрацию.",
    whatIs: "🔐 Что такое Trustee (Локальное Присутствие)?", whatIsDesc: "Trustee — это признанный регистратор, который:",
    uses: ["Использует физический адрес в ЕС для регистрации", "Выступает административным контактом в реестре", "Обеспечивает соответствие домена правилам ЕС"],
    meansTitle: "Что это значит для вас:", means: ["Вы остаётесь полным владельцем и администратором", "Свободное использование для сайта, почты, бренда", "Не нужна компания в ЕС или местный адрес", "Полностью легально и прозрачно"],
    meansNote: "Для покупателей из-за пределов ЕС это стандартное и наиболее используемое решение.",
    regTitle: "🧩 Trustee-Регистрация через Признанных Регистраторов",
    inwxTitle: "INWX — Очень доступный trustee (от €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "При регистрации опция trustee предлагается автоматически.", inwxCost: "€3 в год",
    d101Title: "101domain — Trustee прямо при оплате", d101Desc: "Trustee предлагается автоматически.", d101Cost: "± $25 в год",
    netimTitle: "Netim — Trustee только при необходимости", netimDesc: "Активен только для расширений с обязательством.", netimCost: "€10–€30 в год",
    tableTitle: "📊 Обзор", thReg: "Регистратор", thExt: "Расширения", thCost: "Стоимость Trustee",
    whyTitle: "💎 Почему Премиум Европейские Домены Особенно Ценны", whyIntro: "Наши домены — это больше, чем просто имя:",
    whyPoints: ["🔗 Онлайн-история и упоминания", "🏛️ Часто бывшие проекты ЕС", "🌍 Доверие европейских посетителей", "📉 Меньше конкуренции, чем .COM", "🔁 Идеально для 301-перенаправлений", "🧠 Интересно для брендинга, SEO и инвестиций"],
    whyNote: "На практике эти европейские имена часто ценнее многих .COM, .NET или .ORG доменов.",
    investTitle: "🌍 Идеально для Международных Инвесторов", investIntro: "Для инвесторов за пределами ЕС европейские домены предлагают:",
    investPoints: ["Эксклюзивность благодаря регулированию", "Более высокий порог качества", "Сильное географическое позиционирование", "Привлекательное использование для международных проектов"],
    investCta: "Через trustee-регистрацию даже премиум-просроченные .EU домены доступны для использования по всему миру.", investTagline: "➡️ Европейский авторитет. Международная применимость."
  },
  ro: {
    title: "Premium .EU & Extensii Europene cu Istoric — Ce este un Serviciu Trustee?",
    intro: "Suntem specializați în .EU și alte extensii de domeniu europene. Portofoliul nostru constă din domenii premium și expirate cu istoric online dovedit.",
    globalAccess: "🌐 Accesibil global – inclusiv pentru cumpărători din afara UE prin înregistrare trustee.",
    whatIs: "🔐 Ce este un Trustee (Prezență Locală)?", whatIsDesc: "Un trustee este un registrar recunoscut care:",
    uses: ["Folosește o adresă fizică din UE pentru înregistrare", "Acționează ca contact administrativ la registru", "Asigură conformitatea domeniului cu regulile UE"],
    meansTitle: "Ce înseamnă asta pentru tine:", means: ["Rămâi proprietar și administrator complet", "Utilizare liberă pentru site, email, brand", "Nu ai nevoie de companie UE sau adresă locală", "Complet legal și transparent"],
    meansNote: "Pentru cumpărătorii din afara UE, aceasta este soluția standard și cea mai utilizată.",
    regTitle: "🧩 Înregistrare Trustee prin Registrari Recunoscuți",
    inwxTitle: "INWX — Trustee foarte accesibil (de la €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "La înregistrare, opțiunea trustee este oferită automat.", inwxCost: "€3 pe an",
    d101Title: "101domain — Trustee direct la plată", d101Desc: "Trustee-ul este oferit automat.", d101Cost: "± $25 pe an",
    netimTitle: "Netim — Trustee doar la nevoie", netimDesc: "Activ doar pentru extensii cu obligație.", netimCost: "€10–€30 pe an",
    tableTitle: "📊 Prezentare Generală", thReg: "Registrar", thExt: "Extensii", thCost: "Cost Trustee",
    whyTitle: "💎 De Ce Domeniile Europene Premium Sunt Deosebit de Valoroase", whyIntro: "Domeniile noastre sunt mai mult decât un nume:",
    whyPoints: ["🔗 Istoric online și mențiuni", "🏛️ Adesea foste proiecte UE", "🌍 Încredere la vizitatorii europeni", "📉 Mai puțină concurență decât .COM", "🔁 Perfect pentru redirecționări 301", "🧠 Interesant pentru branding, SEO și investiții"],
    whyNote: "În practică, aceste nume europene sunt adesea mai valoroase decât multe domenii .COM, .NET sau .ORG.",
    investTitle: "🌍 Ideal pentru Investitori Internaționali", investIntro: "Pentru investitorii din afara UE, domeniile europene oferă:",
    investPoints: ["Exclusivitate prin reglementare", "Prag de calitate mai ridicat", "Poziționare geografică puternică", "Utilizare atractivă pentru proiecte internaționale"],
    investCta: "Prin înregistrarea trustee, chiar și domeniile .EU expirate premium sunt utilizabile la nivel global.", investTagline: "➡️ Autoritate europeană. Aplicabilitate internațională."
  },
  bg: {
    title: "Премиум .EU & Европейски Разширения с История — Какво е Trustee Услуга?",
    intro: "Ние сме специализирани в .EU и други европейски домейн разширения. Нашето портфолио се състои от премиум и изтекли домейн имена с доказана онлайн история.",
    globalAccess: "🌐 Глобално достъпни – включително за купувачи извън ЕС чрез trustee регистрация.",
    whatIs: "🔐 Какво е Trustee (Местно Присъствие)?", whatIsDesc: "Trustee е признат регистратор, който:",
    uses: ["Използва физически адрес в ЕС за регистрация", "Действа като административен контакт в регистъра", "Осигурява съответствие на домейна с правилата на ЕС"],
    meansTitle: "Какво означава това за вас:", means: ["Оставате пълен собственик и администратор", "Свободно ползване за сайт, имейл, бранд", "Не се изисква фирма в ЕС или местен адрес", "Напълно легално и прозрачно"],
    meansNote: "За купувачи извън ЕС това е стандартното и най-използваното решение.",
    regTitle: "🧩 Trustee Регистрация чрез Признати Регистратори",
    inwxTitle: "INWX — Много достъпен trustee (от €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "При регистрация trustee опцията се предлага автоматично.", inwxCost: "€3 годишно",
    d101Title: "101domain — Trustee директно при плащане", d101Desc: "Trustee се предлага автоматично.", d101Cost: "± $25 годишно",
    netimTitle: "Netim — Trustee само при необходимост", netimDesc: "Активен само за разширения с изискване.", netimCost: "€10–€30 годишно",
    tableTitle: "📊 Преглед", thReg: "Регистратор", thExt: "Разширения", thCost: "Цена на Trustee",
    whyTitle: "💎 Защо Премиум Европейските Домейни са Особено Ценни", whyIntro: "Нашите домейни са повече от име:",
    whyPoints: ["🔗 Онлайн история и споменавания", "🏛️ Често бивши ЕС проекти", "🌍 Доверие от европейски посетители", "📉 По-малко конкуренция от .COM", "🔁 Перфектни за 301 пренасочвания", "🧠 Интересни за брандинг, SEO и инвестиции"],
    whyNote: "На практика тези европейски имена често са по-ценни от много .COM, .NET или .ORG домейни.",
    investTitle: "🌍 Идеално за Международни Инвеститори", investIntro: "За инвеститори извън ЕС европейските домейни предлагат:",
    investPoints: ["Ексклузивност чрез регулация", "По-висок праг на качество", "Силно географско позициониране", "Атрактивна употреба за международни проекти"],
    investCta: "Чрез trustee регистрация дори премиум изтекли .EU домейни са използваеми по целия свят.", investTagline: "➡️ Европейски авторитет. Международна приложимост."
  },
  uk: {
    title: "Преміум .EU & Європейські Розширення з Історією — Що Таке Trustee-Сервіс?",
    intro: "Ми спеціалізуємося на .EU та інших європейських доменних розширеннях. Наше портфоліо складається з преміум та прострочених доменних імен з підтвердженою онлайн-історією.",
    globalAccess: "🌐 Глобально доступні – також для покупців з-за меж ЄС через trustee-реєстрацію.",
    whatIs: "🔐 Що таке Trustee (Локальна Присутність)?", whatIsDesc: "Trustee — це визнаний реєстратор, який:",
    uses: ["Використовує фізичну адресу в ЄС для реєстрації", "Діє як адміністративний контакт у реєстрі", "Забезпечує відповідність домену правилам ЄС"],
    meansTitle: "Що це означає для вас:", means: ["Ви залишаєтеся повним власником та адміністратором", "Вільне використання для сайту, пошти, бренду", "Не потрібна компанія в ЄС або місцева адреса", "Повністю легально та прозоро"],
    meansNote: "Для покупців з-за меж ЄС це стандартне та найпоширеніше рішення.",
    regTitle: "🧩 Trustee-Реєстрація через Визнаних Реєстраторів",
    inwxTitle: "INWX — Дуже доступний trustee (від €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "При реєстрації опція trustee пропонується автоматично.", inwxCost: "€3 на рік",
    d101Title: "101domain — Trustee прямо при оплаті", d101Desc: "Trustee пропонується автоматично.", d101Cost: "± $25 на рік",
    netimTitle: "Netim — Trustee лише за потреби", netimDesc: "Активний лише для розширень з вимогою.", netimCost: "€10–€30 на рік",
    tableTitle: "📊 Огляд", thReg: "Реєстратор", thExt: "Розширення", thCost: "Вартість Trustee",
    whyTitle: "💎 Чому Преміум Європейські Домени Особливо Цінні", whyIntro: "Наші домени — це більше, ніж ім'я:",
    whyPoints: ["🔗 Онлайн-історія та згадки", "🏛️ Часто колишні проєкти ЄС", "🌍 Довіра європейських відвідувачів", "📉 Менше конкуренції, ніж .COM", "🔁 Ідеально для 301-переспрямувань", "🧠 Цікаво для брендингу, SEO та інвестицій"],
    whyNote: "На практиці ці європейські імена часто цінніші за багато .COM, .NET або .ORG доменів.",
    investTitle: "🌍 Ідеально для Міжнародних Інвесторів", investIntro: "Для інвесторів за межами ЄС європейські домени пропонують:",
    investPoints: ["Ексклюзивність завдяки регулюванню", "Вищий поріг якості", "Сильне географічне позиціонування", "Привабливе використання для міжнародних проєктів"],
    investCta: "Через trustee-реєстрацію навіть преміум-прострочені .EU домени доступні для використання по всьому світу.", investTagline: "➡️ Європейський авторитет. Міжнародна застосовність."
  }
};

const TrusteeServiceSection = ({ lang }: { lang: Lang }) => {
  const c = t[lang];
  return (
    <section id="trustee-service-section" className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="trustee-service" className="bg-gradient-to-br from-amber-500/10 to-slate-800/40 border border-amber-500/30 rounded-xl px-6">
              <AccordionTrigger className="text-left text-white hover:text-amber-400 hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <h3 className="text-lg sm:text-xl font-semibold">{c.title}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 pb-6 leading-relaxed">
                <div className="space-y-6">
                  <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <p className="text-sm sm:text-base mb-3"><span className="text-amber-400 font-semibold">.EU</span> {c.intro}</p>
                    <p className="text-amber-400 font-medium">{c.globalAccess}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">{c.whatIs}</h4>
                    <p className="mb-3">{c.whatIsDesc}</p>
                    <ul className="space-y-2 ml-4">{c.uses.map((u, i) => (<li key={i} className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" /><span>{u}</span></li>))}</ul>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <h4 className="text-white font-semibold mb-3">{c.meansTitle}</h4>
                    <div className="grid sm:grid-cols-2 gap-2">{c.means.map((m, i) => (<div key={i} className="flex items-center gap-2 text-sm"><span className="text-green-400">✔️</span><span>{m}</span></div>))}</div>
                    <p className="text-slate-400 text-sm mt-3">{c.meansNote}</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">{c.regTitle}</h4>
                    <div className="space-y-4">
                      <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                        <h5 className="text-amber-400 font-semibold mb-2">{c.inwxTitle}</h5>
                        <p className="text-sm mb-2"><span className="text-slate-400">{c.thExt}:</span> {c.inwxExt}</p>
                        <p className="text-sm mb-2">{c.inwxHow}</p>
                        <p className="text-sm"><span className="text-slate-400">💰</span> <span className="text-white font-medium">{c.inwxCost}</span></p>
                        <a href="https://www.inwx.com/en/offer/localpresence" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 inwx.com</a>
                      </div>
                      <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                        <h5 className="text-amber-400 font-semibold mb-2">{c.d101Title}</h5>
                        <p className="text-sm mb-2">{c.d101Desc}</p>
                        <p className="text-sm"><span className="text-slate-400">💰</span> <span className="text-white font-medium">{c.d101Cost}</span></p>
                        <a href="https://www.101domain.com/trustee_service.htm" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 101domain.com</a>
                      </div>
                      <div className="bg-slate-800/30 rounded-lg p-4 border border-slate-700/30">
                        <h5 className="text-amber-400 font-semibold mb-2">{c.netimTitle}</h5>
                        <p className="text-sm mb-2">{c.netimDesc}</p>
                        <p className="text-sm"><span className="text-slate-400">💰</span> <span className="text-white font-medium">{c.netimCost}</span></p>
                        <a href="https://www.netim.com/en/domain-name/services/trustee-service" target="_blank" rel="nofollow noopener noreferrer" className="text-amber-400 hover:text-amber-300 text-sm underline">🔗 netim.com</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">{c.tableTitle}</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border border-slate-700/50 rounded-lg overflow-hidden">
                        <thead className="bg-slate-800/70"><tr><th className="text-left px-4 py-2 text-amber-400 font-semibold">{c.thReg}</th><th className="text-left px-4 py-2 text-amber-400 font-semibold">{c.thExt}</th><th className="text-left px-4 py-2 text-amber-400 font-semibold">{c.thCost}</th></tr></thead>
                        <tbody className="divide-y divide-slate-700/30">
                          <tr className="bg-slate-800/30"><td className="px-4 py-2 text-white">INWX</td><td className="px-4 py-2">.EU · .IT · .FR · .DE</td><td className="px-4 py-2 text-green-400">€3 / yr</td></tr>
                          <tr className="bg-slate-800/50"><td className="px-4 py-2 text-white">101domain</td><td className="px-4 py-2">EU ccTLDs</td><td className="px-4 py-2">± $25 / yr</td></tr>
                          <tr className="bg-slate-800/30"><td className="px-4 py-2 text-white">Netim</td><td className="px-4 py-2">EU ccTLDs</td><td className="px-4 py-2">€10–€30 / yr</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">{c.whyTitle}</h4>
                    <p className="mb-3">{c.whyIntro}</p>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">{c.whyPoints.map((p, i) => (<div key={i} className="flex items-center gap-2"><span>{p}</span></div>))}</div>
                    <p className="text-slate-400 text-sm mt-3">{c.whyNote}</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-500/10 to-slate-800/30 rounded-xl p-5 border border-amber-500/20">
                    <h4 className="text-white font-semibold text-lg mb-3 flex items-center gap-2">{c.investTitle}</h4>
                    <p className="mb-3">{c.investIntro}</p>
                    <ul className="space-y-1 text-sm">{c.investPoints.map((p, i) => (<li key={i}>• {p}</li>))}</ul>
                    <p className="text-amber-400 font-medium mt-4">{c.investCta}</p>
                    <p className="text-white font-semibold mt-2">{c.investTagline}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TrusteeServiceSection;

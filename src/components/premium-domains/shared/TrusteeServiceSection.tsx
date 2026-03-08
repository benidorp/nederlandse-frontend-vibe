import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, CheckCircle } from "lucide-react";

type Lang = 'en' | 'nl' | 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl' | 'ko' | 'hu' | 'th' | 'vi' | 'id' | 'et' | 'lv' | 'lt' | 'is' | 'sq' | 'mk' | 'bs' | 'lb' | 'bn' | 'ms';

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
  en: {
    title: "Premium .EU & European Extensions with History — What is a Trustee Service?",
    intro: "We specialize in .EU and other European domain extensions. Our portfolio consists of premium and expired domain names with proven online history.",
    globalAccess: "🌐 Globally accessible – also for non-EU buyers via trustee registration with a verified EU address.",
    whatIs: "🔐 What is a Trustee (Local Presence Service)?", whatIsDesc: "A trustee is a recognized registrar that:",
    uses: ["Uses a physical address within the EU for registration", "Acts as administrative contact with the registry", "Ensures the domain complies with all EU rules"],
    meansTitle: "What this means for you:", means: ["You remain full owner and administrator", "Free use for website, email, brand or redirects", "No EU company or local address required", "Completely legal and transparent"],
    meansNote: "For non-EU buyers, this is the standard and most commonly used solution.",
    regTitle: "🧩 Trustee Registration via Recognized Registrars",
    inwxTitle: "INWX — Very affordable trustee (from €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "During registration, the trustee option is offered automatically. INWX uses an EU address for registration. You keep full control.", inwxCost: "€3 per year",
    d101Title: "101domain — Trustee directly at checkout", d101Desc: "Trustee is offered automatically. Suitable for multiple European ccTLDs.", d101Cost: "± $25 per year",
    netimTitle: "Netim — Trustee only when needed", netimDesc: "Active only for extensions with requirements. Transparent and professional solution.", netimCost: "€10–€30 per year",
    tableTitle: "📊 Overview", thReg: "Registrar", thExt: "Extensions", thCost: "Trustee Cost",
    whyTitle: "💎 Why Premium European Domains Are Extra Valuable", whyIntro: "Our domains are more than just a name:",
    whyPoints: ["🔗 Online history & mentions", "🏛️ Often former EU projects", "🌍 Trust among European visitors", "📉 Less competition than .COM", "🔁 Perfect for 301 redirects", "🧠 Interesting for branding, SEO and investments"],
    whyNote: "In practice, these European names are often more valuable and trustworthy than many .COM, .NET or .ORG domains.",
    investTitle: "🌍 Ideal for International Investors", investIntro: "For investors outside the EU, European domains offer:",
    investPoints: ["Exclusivity through regulation", "Higher quality threshold", "Strong geographic positioning", "Attractive use for international projects"],
    investCta: "Via trustee registration, premium expired .EU domains are usable globally.", investTagline: "➡️ European authority. International applicability."
  },
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
  },
  hr: {
    title: "Premium .EU & Europska Proširenja s Poviješću — Što je Trustee Usluga?",
    intro: "Specijalizirani smo za .EU i druga europska domenska proširenja. Naš portfelj sadrži premium i istekle domene s dokazanom online poviješću.",
    globalAccess: "🌐 Globalno dostupno – i za kupce izvan EU putem trustee registracije s verificiranom EU adresom.",
    whatIs: "🔐 Što je Trustee (Lokalna Prisutnost)?", whatIsDesc: "Trustee je priznati registrar koji:",
    uses: ["Koristi fizičku adresu unutar EU za registraciju", "Djeluje kao administrativni kontakt kod registra", "Osigurava usklađenost domene s EU pravilima"],
    meansTitle: "Što to znači za vas:", means: ["Ostajete potpuni vlasnik i administrator", "Slobodno korištenje za web, email, brend", "Ne treba vam EU tvrtka ili lokalna adresa", "Potpuno legalno i transparentno"],
    meansNote: "Za kupce izvan EU ovo je standardno i najčešće korišteno rješenje.",
    regTitle: "🧩 Trustee Registracija putem Priznatih Registrara",
    inwxTitle: "INWX — Vrlo pristupačan trustee (od €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Tijekom registracije trustee opcija se nudi automatski.", inwxCost: "€3 godišnje",
    d101Title: "101domain — Trustee izravno pri plaćanju", d101Desc: "Trustee se nudi automatski.", d101Cost: "± $25 godišnje",
    netimTitle: "Netim — Trustee samo po potrebi", netimDesc: "Aktivan samo za proširenja s obvezom.", netimCost: "€10–€30 godišnje",
    tableTitle: "📊 Pregled", thReg: "Registrar", thExt: "Proširenja", thCost: "Cijena Trustee",
    whyTitle: "💎 Zašto su Premium Europske Domene Posebno Vrijedne", whyIntro: "Naše domene su više od imena:",
    whyPoints: ["🔗 Online povijest i spominjanja", "🏛️ Često bivši EU projekti", "🌍 Povjerenje europskih posjetitelja", "📉 Manje konkurencije od .COM", "🔁 Savršeno za 301 preusmjeravanja", "🧠 Zanimljivo za brendiranje, SEO i ulaganja"],
    whyNote: "U praksi su ova europska imena često vrjednija od mnogih .COM, .NET ili .ORG domena.",
    investTitle: "🌍 Idealno za Međunarodne Ulagače", investIntro: "Za ulagače izvan EU europske domene nude:",
    investPoints: ["Ekskluzivnost kroz regulaciju", "Viši prag kvalitete", "Snažno geografsko pozicioniranje", "Atraktivna primjena za međunarodne projekte"],
    investCta: "Putem trustee registracije čak su i premium istekle .EU domene upotrebljive globalno.", investTagline: "➡️ Europski autoritet. Međunarodna primjenjivost."
  },
  sk: {
    title: "Prémiové .EU & Európske Rozšírenia s Históriou — Čo je Trustee Služba?",
    intro: "Špecializujeme sa na .EU a ďalšie európske doménové rozšírenia. Naše portfólio pozostáva z prémiových a expirovaných doménových mien s preukázanou online históriou.",
    globalAccess: "🌐 Globálne dostupné – aj pre kupujúcich mimo EÚ prostredníctvom trustee registrácie.",
    whatIs: "🔐 Čo je Trustee (Miestna Prítomnosť)?", whatIsDesc: "Trustee je uznaný registrátor, ktorý:",
    uses: ["Používa fyzickú adresu v EÚ na registráciu", "Vystupuje ako administratívny kontakt v registri", "Zabezpečuje súlad domény s pravidlami EÚ"],
    meansTitle: "Čo to pre vás znamená:", means: ["Zostávate plným vlastníkom a správcom", "Voľné použitie pre web, e-mail, značku", "Nepotrebujete firmu v EÚ ani miestnu adresu", "Úplne legálne a transparentné"],
    meansNote: "Pre kupujúcich mimo EÚ je toto štandardné a najpoužívanejšie riešenie.",
    regTitle: "🧩 Trustee Registrácia cez Uznávaných Registrátorov",
    inwxTitle: "INWX — Veľmi dostupný trustee (od €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Pri registrácii sa trustee možnosť ponúka automaticky.", inwxCost: "€3 ročne",
    d101Title: "101domain — Trustee priamo pri platbe", d101Desc: "Trustee sa ponúka automaticky.", d101Cost: "± $25 ročne",
    netimTitle: "Netim — Trustee iba pri potrebe", netimDesc: "Aktívny iba pre rozšírenia s povinnosťou.", netimCost: "€10–€30 ročne",
    tableTitle: "📊 Prehľad", thReg: "Registrátor", thExt: "Rozšírenia", thCost: "Cena Trustee",
    whyTitle: "💎 Prečo sú Prémiové Európske Domény Obzvlášť Hodnotné", whyIntro: "Naše domény sú viac ako len meno:",
    whyPoints: ["🔗 Online história a zmienky", "🏛️ Často bývalé projekty EÚ", "🌍 Dôvera európskych návštevníkov", "📉 Menej konkurencie ako .COM", "🔁 Perfektné pre 301 presmerovania", "🧠 Zaujímavé pre branding, SEO a investície"],
    whyNote: "V praxi sú tieto európske názvy často hodnotnejšie ako mnohé .COM, .NET alebo .ORG domény.",
    investTitle: "🌍 Ideálne pre Medzinárodných Investorov", investIntro: "Pre investorov mimo EÚ ponúkajú európske domény:",
    investPoints: ["Exkluzivitu vďaka regulácii", "Vyšší kvalitatívny prah", "Silné geografické umiestnenie", "Atraktívne využitie pre medzinárodné projekty"],
    investCta: "Prostredníctvom trustee registrácie sú aj prémiové expirované .EU domény využiteľné celosvetovo.", investTagline: "➡️ Európska autorita. Medzinárodná aplikovateľnosť."
  },
  sr: {
    title: "Премиум .EU & Европска Проширења са Историјом — Шта је Trustee Услуга?",
    intro: "Специјализовани смо за .EU и друга европска доменска проширења. Наш портфолио се састоји од премиум и истеклих домена са доказаном онлајн историјом.",
    globalAccess: "🌐 Глобално доступно – и за купце ван ЕУ путем trustee регистрације.",
    whatIs: "🔐 Шта је Trustee (Локално Присуство)?", whatIsDesc: "Trustee је признати регистратор који:",
    uses: ["Користи физичку адресу у ЕУ за регистрацију", "Делује као административни контакт у регистру", "Обезбеђује усклађеност домена са ЕУ правилима"],
    meansTitle: "Шта то значи за вас:", means: ["Остајете потпуни власник и администратор", "Слободно коришћење за сајт, имејл, бренд", "Није потребна ЕУ фирма или локална адреса", "Потпуно легално и транспарентно"],
    meansNote: "За купце ван ЕУ ово је стандардно и најкоришћеније решење.",
    regTitle: "🧩 Trustee Регистрација преко Признатих Регистратора",
    inwxTitle: "INWX — Веома приступачан trustee (од €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Током регистрације trustee опција се нуди аутоматски.", inwxCost: "€3 годишње",
    d101Title: "101domain — Trustee директно при плаћању", d101Desc: "Trustee се нуди аутоматски.", d101Cost: "± $25 годишње",
    netimTitle: "Netim — Trustee само по потреби", netimDesc: "Активан само за проширења са обавезом.", netimCost: "€10–€30 годишње",
    tableTitle: "📊 Преглед", thReg: "Регистратор", thExt: "Проширења", thCost: "Цена Trustee",
    whyTitle: "💎 Зашто су Премиум Европски Домени Посебно Вредни", whyIntro: "Наши домени су више од имена:",
    whyPoints: ["🔗 Онлајн историја и помињања", "🏛️ Често бивши ЕУ пројекти", "🌍 Поверење европских посетилаца", "📉 Мање конкуренције од .COM", "🔁 Савршено за 301 преусмеравања", "🧠 Занимљиво за брендирање, СЕО и инвестиције"],
    whyNote: "У пракси су ова европска имена често вреднија од многих .COM, .NET или .ORG домена.",
    investTitle: "🌍 Идеално за Међународне Инвеститоре", investIntro: "За инвеститоре ван ЕУ европски домени нуде:",
    investPoints: ["Ексклузивност кроз регулацију", "Виши праг квалитета", "Снажно географско позиционирање", "Атрактивна примена за међународне пројекте"],
    investCta: "Путем trustee регистрације чак су и премиум истекли .EU домени употребљиви глобално.", investTagline: "➡️ Европски ауторитет. Међународна применљивост."
  },
  sl: {
    title: "Premium .EU & Evropska Razširenja z Zgodovino — Kaj je Trustee Storitev?",
    intro: "Specializirani smo za .EU in druge evropske domenske razširitve. Naš portfelj sestoji iz premium in poteklih domen z dokazano spletno zgodovino.",
    globalAccess: "🌐 Globalno dostopno – tudi za kupce zunaj EU prek trustee registracije.",
    whatIs: "🔐 Kaj je Trustee (Lokalna Prisotnost)?", whatIsDesc: "Trustee je priznan registrar, ki:",
    uses: ["Uporablja fizični naslov v EU za registracijo", "Deluje kot administrativni kontakt pri registru", "Zagotavlja skladnost domene s pravili EU"],
    meansTitle: "Kaj to pomeni za vas:", means: ["Ostanete polni lastnik in upravitelj", "Prosta uporaba za spletno stran, e-pošto, blagovno znamko", "Ni potrebno podjetje v EU ali lokalni naslov", "Popolnoma legalno in transparentno"],
    meansNote: "Za kupce zunaj EU je to standardna in najpogosteje uporabljena rešitev.",
    regTitle: "🧩 Trustee Registracija prek Priznanih Registrarjev",
    inwxTitle: "INWX — Zelo dostopen trustee (od €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Med registracijo se trustee možnost ponudi samodejno.", inwxCost: "€3 letno",
    d101Title: "101domain — Trustee neposredno ob plačilu", d101Desc: "Trustee se ponudi samodejno.", d101Cost: "± $25 letno",
    netimTitle: "Netim — Trustee samo po potrebi", netimDesc: "Aktiven samo za razširitve z zahtevo.", netimCost: "€10–€30 letno",
    tableTitle: "📊 Pregled", thReg: "Registrar", thExt: "Razširitve", thCost: "Cena Trustee",
    whyTitle: "💎 Zakaj so Premium Evropske Domene Posebej Vredne", whyIntro: "Naše domene so več kot le ime:",
    whyPoints: ["🔗 Spletna zgodovina in omembe", "🏛️ Pogosto nekdanji EU projekti", "🌍 Zaupanje evropskih obiskovalcev", "📉 Manj konkurence kot .COM", "🔁 Popolno za 301 preusmeritve", "🧠 Zanimivo za blagovno znamko, SEO in naložbe"],
    whyNote: "V praksi so ta evropska imena pogosto vrednejša od mnogih .COM, .NET ali .ORG domen.",
    investTitle: "🌍 Idealno za Mednarodne Vlagatelje", investIntro: "Za vlagatelje zunaj EU evropske domene ponujajo:",
    investPoints: ["Ekskluzivnost skozi regulacijo", "Višji prag kakovosti", "Močno geografsko pozicioniranje", "Privlačna uporaba za mednarodne projekte"],
    investCta: "Prek trustee registracije so tudi premium potekle .EU domene uporabne po vsem svetu.", investTagline: "➡️ Evropska avtoriteta. Mednarodna uporabnost."
  },
  ko: {
    title: "프리미엄 .EU 및 유럽 확장자 — Trustee 서비스란?",
    intro: ".EU 및 기타 유럽 도메인 확장자를 전문으로 합니다. 검증된 온라인 이력을 가진 프리미엄 및 만료 도메인으로 구성됩니다.",
    globalAccess: "🌐 전 세계 접근 가능 – EU 외 구매자도 Trustee 등록으로 이용 가능.",
    whatIs: "🔐 Trustee(현지 대리 서비스)란?", whatIsDesc: "Trustee는 공인된 등록기관으로:",
    uses: ["EU 내 실제 주소를 등록에 사용", "레지스트리의 행정 연락처 역할", "도메인이 모든 EU 규칙을 준수하도록 보장"],
    meansTitle: "이것이 의미하는 바:", means: ["완전한 소유자 및 관리자로 유지", "웹사이트, 이메일, 브랜드 등 자유 사용", "EU 회사나 현지 주소 불필요", "완전히 합법적이고 투명"],
    meansNote: "EU 외 구매자에게 이것은 표준적이고 가장 많이 사용되는 솔루션입니다.",
    regTitle: "🧩 공인 등록기관을 통한 Trustee 등록",
    inwxTitle: "INWX — 매우 저렴한 Trustee (€3부터)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "등록 시 Trustee 옵션이 자동으로 제공됩니다. 완전한 통제권을 유지합니다.", inwxCost: "연 €3",
    d101Title: "101domain — 결제 시 직접 Trustee", d101Desc: "자동으로 제공됩니다. 여러 유럽 ccTLD에 적합.", d101Cost: "연 ± $25",
    netimTitle: "Netim — 필요 시에만 Trustee", netimDesc: "요구 사항이 있는 확장자에만 활성화.", netimCost: "연 €10–€30",
    tableTitle: "📊 개요", thReg: "등록기관", thExt: "확장자", thCost: "Trustee 비용",
    whyTitle: "💎 프리미엄 유럽 도메인이 특별히 가치 있는 이유", whyIntro: "우리의 도메인은 단순한 이름 이상입니다:",
    whyPoints: ["🔗 온라인 이력 및 언급", "🏛️ 종종 전 EU 프로젝트", "🌍 유럽 방문자의 신뢰", "📉 .COM보다 적은 경쟁", "🔁 301 리디렉션에 완벽", "🧠 브랜딩, SEO 및 투자에 흥미로움"],
    whyNote: "실제로 이러한 유럽 이름은 많은 .COM, .NET 또는 .ORG 도메인보다 더 가치 있고 신뢰할 수 있습니다.",
    investTitle: "🌍 국제 투자자에게 이상적", investIntro: "EU 외 투자자에게 유럽 도메인은:",
    investPoints: ["규제를 통한 독점성", "높은 품질 기준", "강력한 지리적 포지셔닝", "국제 프로젝트에 매력적인 사용"],
    investCta: "Trustee 등록을 통해 프리미엄 만료 .EU 도메인을 전 세계에서 사용할 수 있습니다.", investTagline: "➡️ 유럽의 권위. 국제적 적용 가능성."
  },
  hu: {
    title: "Prémium .EU & Európai Kiterjesztések — Mi az a Trustee Szolgáltatás?",
    intro: ".EU és más európai domain kiterjesztésekre specializálódtunk. Portfóliónk bizonyított online előzményekkel rendelkező prémium és lejárt domainekből áll.",
    globalAccess: "🌐 Globálisan elérhető – EU-n kívüli vásárlók számára is trustee regisztrációval.",
    whatIs: "🔐 Mi az a Trustee (Helyi Jelenlét Szolgáltatás)?", whatIsDesc: "A trustee egy elismert regisztrátor, amely:",
    uses: ["Fizikai EU-címet használ a regisztrációhoz", "Adminisztratív kapcsolattartóként működik", "Biztosítja az EU-szabályoknak való megfelelést"],
    meansTitle: "Mit jelent ez Önnek:", means: ["Teljes tulajdonos és adminisztrátor marad", "Szabadon használható weboldalhoz, emailhez, márkához", "Nincs szükség EU-cégre vagy helyi címre", "Teljesen legális és átlátható"],
    meansNote: "EU-n kívüli vásárlók számára ez a standard megoldás.",
    regTitle: "🧩 Trustee Regisztráció Elismert Regisztrátorokon Keresztül",
    inwxTitle: "INWX — Nagyon kedvező trustee (€3-tól)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Regisztráció során a trustee opció automatikusan elérhető.", inwxCost: "€3 évente",
    d101Title: "101domain — Trustee közvetlenül fizetéskor", d101Desc: "Automatikusan elérhető. Több európai ccTLD-hez.", d101Cost: "± $25 évente",
    netimTitle: "Netim — Trustee csak szükség esetén", netimDesc: "Csak követelményes kiterjesztéseknél aktív.", netimCost: "€10–€30 évente",
    tableTitle: "📊 Áttekintés", thReg: "Regisztrátor", thExt: "Kiterjesztések", thCost: "Trustee Költség",
    whyTitle: "💎 Miért Olyan Értékesek a Prémium Európai Domainek", whyIntro: "Domainjeinken több mint egy név:",
    whyPoints: ["🔗 Online előzmények és hivatkozások", "🏛️ Gyakran korábbi EU projektek", "🌍 Európai látogatók bizalma", "📉 Kevesebb verseny mint .COM", "🔁 Tökéletes 301 átirányításokhoz", "🧠 Érdekes a branding, SEO és befektetés szempontjából"],
    whyNote: "A gyakorlatban ezek az európai nevek gyakran értékesebbek sok .COM domainnél.",
    investTitle: "🌍 Ideális Nemzetközi Befektetőknek", investIntro: "EU-n kívüli befektetőknek az európai domainek:",
    investPoints: ["Exkluzivitás a szabályozás révén", "Magasabb minőségi küszöb", "Erős földrajzi pozícionálás", "Vonzó használat nemzetközi projektekhez"],
    investCta: "Trustee regisztrációval a prémium lejárt .EU domainek globálisan használhatók.", investTagline: "➡️ Európai tekintély. Nemzetközi alkalmazhatóság."
  },
  th: {
    title: "พรีเมียม .EU และส่วนขยายยุโรป — Trustee Service คืออะไร?",
    intro: "เราเชี่ยวชาญด้าน .EU และส่วนขยายโดเมนยุโรปอื่นๆ พอร์ตโฟลิโอประกอบด้วยโดเมนพรีเมียมและหมดอายุที่มีประวัติออนไลน์",
    globalAccess: "🌐 เข้าถึงได้ทั่วโลก – สำหรับผู้ซื้อนอก EU ผ่านการลงทะเบียน Trustee",
    whatIs: "🔐 Trustee คืออะไร?", whatIsDesc: "Trustee คือนายทะเบียนที่ได้รับการรับรอง:",
    uses: ["ใช้ที่อยู่จริงใน EU สำหรับการลงทะเบียน", "ทำหน้าที่เป็นผู้ติดต่อฝ่ายบริหาร", "รับรองว่าโดเมนเป็นไปตามกฎ EU"],
    meansTitle: "สิ่งนี้หมายถึง:", means: ["คุณยังคงเป็นเจ้าของและผู้ดูแลเต็มรูปแบบ", "ใช้งานได้อย่างอิสระ", "ไม่ต้องมีบริษัทใน EU", "ถูกกฎหมายและโปร่งใส"],
    meansNote: "สำหรับผู้ซื้อนอก EU นี่คือโซลูชันมาตรฐานที่ใช้กันมากที่สุด",
    regTitle: "🧩 การลงทะเบียน Trustee ผ่านนายทะเบียนที่ได้รับการรับรอง",
    inwxTitle: "INWX — Trustee ราคาย่อมเยา (ตั้งแต่ €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "ตัวเลือก Trustee จะถูกเสนอโดยอัตโนมัติระหว่างการลงทะเบียน", inwxCost: "€3 ต่อปี",
    d101Title: "101domain — Trustee ตอนชำระเงิน", d101Desc: "เสนอโดยอัตโนมัติ", d101Cost: "± $25 ต่อปี",
    netimTitle: "Netim — Trustee เมื่อจำเป็นเท่านั้น", netimDesc: "ใช้งานเฉพาะส่วนขยายที่มีข้อกำหนด", netimCost: "€10–€30 ต่อปี",
    tableTitle: "📊 ภาพรวม", thReg: "นายทะเบียน", thExt: "ส่วนขยาย", thCost: "ค่า Trustee",
    whyTitle: "💎 ทำไมโดเมนยุโรปพรีเมียมจึงมีค่าพิเศษ", whyIntro: "โดเมนของเราไม่ใช่แค่ชื่อ:",
    whyPoints: ["🔗 ประวัติออนไลน์", "🏛️ มักเป็นโครงการ EU เดิม", "🌍 ความไว้วางใจจากผู้เยี่ยมชมยุโรป", "📉 การแข่งขันน้อยกว่า .COM", "🔁 เหมาะสำหรับ 301 redirect", "🧠 น่าสนใจสำหรับ SEO และการลงทุน"],
    whyNote: "ในทางปฏิบัติ ชื่อยุโรปเหล่านี้มักมีค่ามากกว่าโดเมน .COM หลายตัว",
    investTitle: "🌍 เหมาะสำหรับนักลงทุนต่างประเทศ", investIntro: "สำหรับนักลงทุนนอก EU โดเมนยุโรปมี:",
    investPoints: ["ความเป็นเอกสิทธิ์ผ่านกฎระเบียบ", "เกณฑ์คุณภาพสูงกว่า", "ตำแหน่งทางภูมิศาสตร์ที่แข็งแกร่ง", "การใช้งานที่น่าสนใจสำหรับโครงการระหว่างประเทศ"],
    investCta: "ผ่านการลงทะเบียน Trustee โดเมน .EU พรีเมียมสามารถใช้ได้ทั่วโลก", investTagline: "➡️ อำนาจยุโรป การใช้งานระหว่างประเทศ"
  },
  vi: {
    title: "Tên miền .EU & Phần mở rộng Châu Âu — Dịch vụ Trustee là gì?",
    intro: "Chúng tôi chuyên về .EU và các phần mở rộng tên miền châu Âu khác với lịch sử trực tuyến đã được chứng minh.",
    globalAccess: "🌐 Truy cập toàn cầu – người mua ngoài EU cũng có thể sử dụng qua đăng ký Trustee.",
    whatIs: "🔐 Trustee là gì?", whatIsDesc: "Trustee là nhà đăng ký được công nhận:",
    uses: ["Sử dụng địa chỉ thực tại EU để đăng ký", "Hoạt động như liên hệ hành chính", "Đảm bảo tuân thủ quy tắc EU"],
    meansTitle: "Điều này có nghĩa:", means: ["Bạn vẫn là chủ sở hữu đầy đủ", "Sử dụng tự do cho website, email, thương hiệu", "Không cần công ty EU hay địa chỉ địa phương", "Hoàn toàn hợp pháp và minh bạch"],
    meansNote: "Đối với người mua ngoài EU, đây là giải pháp tiêu chuẩn và phổ biến nhất.",
    regTitle: "🧩 Đăng ký Trustee qua Nhà đăng ký Được công nhận",
    inwxTitle: "INWX — Trustee rất phải chăng (từ €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Tùy chọn Trustee được cung cấp tự động khi đăng ký.", inwxCost: "€3/năm",
    d101Title: "101domain — Trustee khi thanh toán", d101Desc: "Tự động cung cấp. Phù hợp nhiều ccTLD châu Âu.", d101Cost: "± $25/năm",
    netimTitle: "Netim — Trustee khi cần thiết", netimDesc: "Chỉ hoạt động cho phần mở rộng có yêu cầu.", netimCost: "€10–€30/năm",
    tableTitle: "📊 Tổng quan", thReg: "Nhà đăng ký", thExt: "Phần mở rộng", thCost: "Chi phí Trustee",
    whyTitle: "💎 Tại sao Tên miền Châu Âu Cao cấp Có giá trị Đặc biệt", whyIntro: "Tên miền của chúng tôi hơn cả một tên:",
    whyPoints: ["🔗 Lịch sử trực tuyến", "🏛️ Thường là dự án EU cũ", "🌍 Sự tin tưởng của khách châu Âu", "📉 Ít cạnh tranh hơn .COM", "🔁 Hoàn hảo cho 301 redirect", "🧠 Thú vị cho SEO và đầu tư"],
    whyNote: "Thực tế, những tên miền châu Âu này thường có giá trị hơn nhiều tên miền .COM.",
    investTitle: "🌍 Lý tưởng cho Nhà đầu tư Quốc tế", investIntro: "Cho nhà đầu tư ngoài EU, tên miền châu Âu cung cấp:",
    investPoints: ["Tính độc quyền qua quy định", "Ngưỡng chất lượng cao hơn", "Định vị địa lý mạnh mẽ", "Sử dụng hấp dẫn cho dự án quốc tế"],
    investCta: "Qua đăng ký Trustee, tên miền .EU cao cấp có thể sử dụng toàn cầu.", investTagline: "➡️ Uy tín châu Âu. Khả năng ứng dụng quốc tế."
  },
  id: {
    title: "Domain .EU & Ekstensi Eropa Premium — Apa itu Layanan Trustee?",
    intro: "Kami mengkhususkan diri pada .EU dan ekstensi domain Eropa lainnya dengan riwayat online yang terbukti.",
    globalAccess: "🌐 Dapat diakses secara global – juga untuk pembeli non-EU melalui registrasi Trustee.",
    whatIs: "🔐 Apa itu Trustee?", whatIsDesc: "Trustee adalah registrar yang diakui:",
    uses: ["Menggunakan alamat fisik di EU untuk registrasi", "Bertindak sebagai kontak administratif", "Memastikan domain mematuhi semua aturan EU"],
    meansTitle: "Artinya bagi Anda:", means: ["Anda tetap pemilik dan administrator penuh", "Penggunaan bebas untuk website, email, merek", "Tidak perlu perusahaan EU atau alamat lokal", "Sepenuhnya legal dan transparan"],
    meansNote: "Untuk pembeli non-EU, ini adalah solusi standar yang paling banyak digunakan.",
    regTitle: "🧩 Registrasi Trustee melalui Registrar Diakui",
    inwxTitle: "INWX — Trustee sangat terjangkau (dari €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Opsi trustee ditawarkan otomatis saat registrasi.", inwxCost: "€3 per tahun",
    d101Title: "101domain — Trustee langsung saat checkout", d101Desc: "Ditawarkan otomatis. Cocok untuk berbagai ccTLD Eropa.", d101Cost: "± $25 per tahun",
    netimTitle: "Netim — Trustee hanya saat diperlukan", netimDesc: "Aktif hanya untuk ekstensi dengan persyaratan.", netimCost: "€10–€30 per tahun",
    tableTitle: "📊 Ikhtisar", thReg: "Registrar", thExt: "Ekstensi", thCost: "Biaya Trustee",
    whyTitle: "💎 Mengapa Domain Eropa Premium Sangat Bernilai", whyIntro: "Domain kami lebih dari sekadar nama:",
    whyPoints: ["🔗 Riwayat online", "🏛️ Sering mantan proyek EU", "🌍 Kepercayaan pengunjung Eropa", "📉 Lebih sedikit persaingan dari .COM", "🔁 Sempurna untuk 301 redirect", "🧠 Menarik untuk SEO dan investasi"],
    whyNote: "Dalam praktiknya, nama Eropa ini sering lebih bernilai daripada banyak domain .COM.",
    investTitle: "🌍 Ideal untuk Investor Internasional", investIntro: "Untuk investor di luar EU, domain Eropa menawarkan:",
    investPoints: ["Eksklusivitas melalui regulasi", "Ambang kualitas lebih tinggi", "Posisi geografis yang kuat", "Penggunaan menarik untuk proyek internasional"],
    investCta: "Melalui registrasi trustee, domain .EU premium dapat digunakan secara global.", investTagline: "➡️ Otoritas Eropa. Penerapan internasional."
  },
  et: {
    title: "Premium .EU & Euroopa Laiendid — Mis on Trustee Teenus?",
    intro: "Oleme spetsialiseerunud .EU ja teistele Euroopa domeenilaiendidele tõestatud veebipärandiga.",
    globalAccess: "🌐 Globaalselt kättesaadav – ka EL-i-välistele ostjatele trustee registreerimise kaudu.",
    whatIs: "🔐 Mis on Trustee?", whatIsDesc: "Trustee on tunnustatud registripidaja, kes:",
    uses: ["Kasutab EL-i füüsilist aadressi registreerimiseks", "Tegutseb haldusliku kontaktina", "Tagab domeeni vastavuse EL-i reeglitele"],
    meansTitle: "Mida see teile tähendab:", means: ["Jääte täielikuks omanikuks", "Vaba kasutus veebilehe, e-posti, brändi jaoks", "EL-i ettevõte või kohalik aadress pole vajalik", "Täiesti seaduslik ja läbipaistev"],
    meansNote: "EL-i-väliste ostjate jaoks on see standardne lahendus.",
    regTitle: "🧩 Trustee Registreerimine Tunnustatud Registripidajate Kaudu",
    inwxTitle: "INWX — Väga soodne trustee (alates €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee valik pakutakse automaatselt.", inwxCost: "€3 aastas",
    d101Title: "101domain — Trustee otse maksmisel", d101Desc: "Pakutakse automaatselt.", d101Cost: "± $25 aastas",
    netimTitle: "Netim — Trustee ainult vajaduse korral", netimDesc: "Aktiivne ainult nõudmistega laiendite puhul.", netimCost: "€10–€30 aastas",
    tableTitle: "📊 Ülevaade", thReg: "Registripidaja", thExt: "Laiendid", thCost: "Trustee Hind",
    whyTitle: "💎 Miks on Premium Euroopa Domeenid Eriti Väärtuslikud", whyIntro: "Meie domeenid on enamat kui lihtsalt nimi:",
    whyPoints: ["🔗 Veebiajalugu", "🏛️ Sageli endised EL-i projektid", "🌍 Euroopa külastajate usaldus", "📉 Vähem konkurentsi kui .COM", "🔁 Ideaalne 301 ümbersuunamiseks", "🧠 Huvitav brändingu ja SEO jaoks"],
    whyNote: "Praktikas on need Euroopa nimed sageli väärtuslikumad kui paljud .COM domeenid.",
    investTitle: "🌍 Ideaalne Rahvusvahelistele Investoritele", investIntro: "EL-i-välistele investoritele pakuvad Euroopa domeenid:",
    investPoints: ["Eksklusiivsus regulatsiooni kaudu", "Kõrgem kvaliteedilävi", "Tugev geograafiline positsioneerimine", "Atraktiivne kasutus rahvusvahelistes projektides"],
    investCta: "Trustee registreerimise kaudu on premium .EU domeenid kasutatavad kogu maailmas.", investTagline: "➡️ Euroopa autoriteet. Rahvusvaheline rakendatavus."
  },
  lv: {
    title: "Premium .EU & Eiropas Paplašinājumi — Kas ir Trustee Pakalpojums?",
    intro: "Mēs specializējamies .EU un citos Eiropas domēnu paplašinājumos ar pierādītu tiešsaistes vēsturi.",
    globalAccess: "🌐 Pieejams globāli – arī pircējiem ārpus ES caur trustee reģistrāciju.",
    whatIs: "🔐 Kas ir Trustee?", whatIsDesc: "Trustee ir atzīts reģistrators, kas:",
    uses: ["Izmanto fizisku ES adresi reģistrācijai", "Darbojas kā administratīvais kontakts", "Nodrošina domēna atbilstību ES noteikumiem"],
    meansTitle: "Tas nozīmē:", means: ["Jūs paliekat pilntiesīgs īpašnieks", "Brīva izmantošana vietnei, e-pastam, zīmolam", "Nav nepieciešams ES uzņēmums vai vietējā adrese", "Pilnībā likumīgi un caurspīdīgi"],
    meansNote: "Pircējiem ārpus ES tas ir standarta risinājums.",
    regTitle: "🧩 Trustee Reģistrācija caur Atzītiem Reģistratoriem",
    inwxTitle: "INWX — Ļoti izdevīgs trustee (no €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee opcija tiek piedāvāta automātiski.", inwxCost: "€3 gadā",
    d101Title: "101domain — Trustee pie norēķina", d101Desc: "Piedāvāts automātiski.", d101Cost: "± $25 gadā",
    netimTitle: "Netim — Trustee tikai nepieciešamības gadījumā", netimDesc: "Aktīvs tikai paplašinājumiem ar prasībām.", netimCost: "€10–€30 gadā",
    tableTitle: "📊 Pārskats", thReg: "Reģistrators", thExt: "Paplašinājumi", thCost: "Trustee Izmaksas",
    whyTitle: "💎 Kāpēc Premium Eiropas Domēni ir Īpaši Vērtīgi", whyIntro: "Mūsu domēni ir vairāk nekā tikai vārds:",
    whyPoints: ["🔗 Tiešsaistes vēsture", "🏛️ Bieži bijušie ES projekti", "🌍 Eiropas apmeklētāju uzticība", "📉 Mazāka konkurence nekā .COM", "🔁 Ideāli 301 novirzīšanai", "🧠 Interesanti zīmolam un SEO"],
    whyNote: "Praksē šie Eiropas nosaukumi bieži ir vērtīgāki nekā daudzi .COM domēni.",
    investTitle: "🌍 Ideāli Starptautiskiem Investoriem", investIntro: "Investoriem ārpus ES Eiropas domēni piedāvā:",
    investPoints: ["Ekskluzivitāte caur regulējumu", "Augstāks kvalitātes slieksnis", "Spēcīga ģeogrāfiskā pozicionēšana", "Pievilcīga izmantošana starptautiskiem projektiem"],
    investCta: "Caur trustee reģistrāciju premium .EU domēni ir izmantojami globāli.", investTagline: "➡️ Eiropas autoritāte. Starptautiska piemērojamība."
  },
  lt: {
    title: "Premium .EU & Europos Plėtiniai — Kas yra Trustee Paslauga?",
    intro: "Specializuojamės .EU ir kitais Europos domenų plėtiniais su įrodyta interneto istorija.",
    globalAccess: "🌐 Pasiekiama globaliai – ir ne ES pirkėjams per trustee registraciją.",
    whatIs: "🔐 Kas yra Trustee?", whatIsDesc: "Trustee yra pripažintas registratorius, kuris:",
    uses: ["Naudoja fizinį ES adresą registracijai", "Veikia kaip administracinis kontaktas", "Užtikrina domeno atitiktį ES taisyklėms"],
    meansTitle: "Ką tai reiškia:", means: ["Liekate visateisiu savininku", "Laisvas naudojimas svetainei, el. paštui, prekės ženklui", "Nereikia ES įmonės ar vietinio adreso", "Visiškai legalu ir skaidru"],
    meansNote: "Ne ES pirkėjams tai yra standartinis sprendimas.",
    regTitle: "🧩 Trustee Registracija per Pripažintus Registratorius",
    inwxTitle: "INWX — Labai pigu trustee (nuo €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee parinktis siūloma automatiškai.", inwxCost: "€3 per metus",
    d101Title: "101domain — Trustee apmokėjimo metu", d101Desc: "Siūloma automatiškai.", d101Cost: "± $25 per metus",
    netimTitle: "Netim — Trustee tik prireikus", netimDesc: "Aktyvus tik plėtiniams su reikalavimais.", netimCost: "€10–€30 per metus",
    tableTitle: "📊 Apžvalga", thReg: "Registratorius", thExt: "Plėtiniai", thCost: "Trustee Kaina",
    whyTitle: "💎 Kodėl Premium Europos Domenai Ypatingai Vertingi", whyIntro: "Mūsų domenai yra daugiau nei tik vardas:",
    whyPoints: ["🔗 Interneto istorija", "🏛️ Dažnai buvę ES projektai", "🌍 Europos lankytojų pasitikėjimas", "📉 Mažiau konkurencijos nei .COM", "🔁 Puikiai tinka 301 peradresavimui", "🧠 Įdomu prekės ženklui ir SEO"],
    whyNote: "Praktikoje šie Europos vardai dažnai vertingesni nei daugelis .COM domenų.",
    investTitle: "🌍 Idealu Tarptautiniams Investuotojams", investIntro: "Ne ES investuotojams Europos domenai siūlo:",
    investPoints: ["Išskirtinumą per reguliavimą", "Aukštesnį kokybės slenkstį", "Stiprią geografinę poziciją", "Patrauklų naudojimą tarptautiniams projektams"],
    investCta: "Per trustee registraciją premium .EU domenai naudojami globaliai.", investTagline: "➡️ Europos autoritetas. Tarptautinis pritaikomumas."
  },
  is: {
    title: "Úrvals .EU & Evrópsk Viðbætur — Hvað er Trustee Þjónusta?",
    intro: "Við sérhæfum okkur í .EU og öðrum evrópskum lénsviðbótum með sannað netferil.",
    globalAccess: "🌐 Aðgengilegt um allan heim – einnig kaupendur utan ESB gegnum trustee skráningu.",
    whatIs: "🔐 Hvað er Trustee?", whatIsDesc: "Trustee er viðurkenndur skrásetjari sem:",
    uses: ["Notar raunverulegt heimilisfang innan ESB", "Kemur fram sem stjórnunarlegur tengiliður", "Tryggir að lénið uppfylli reglur ESB"],
    meansTitle: "Þetta þýðir:", means: ["Þú ert áfram fullur eigandi", "Frjáls notkun fyrir vefsíðu, tölvupóst, vörumerki", "Ekkert ESB-fyrirtæki eða staðbundið heimilisfang þarf", "Fullkomlega löglegt og gagnsætt"],
    meansNote: "Fyrir kaupendur utan ESB er þetta staðalið lausn.",
    regTitle: "🧩 Trustee Skráning gegnum Viðurkennda Skrásetjara",
    inwxTitle: "INWX — Mjög hagstæð trustee (frá €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee valkostur er boðinn sjálfkrafa.", inwxCost: "€3 á ári",
    d101Title: "101domain — Trustee við greiðslu", d101Desc: "Boðið sjálfkrafa.", d101Cost: "± $25 á ári",
    netimTitle: "Netim — Trustee aðeins þegar þörf er", netimDesc: "Virk aðeins fyrir viðbætur með kröfum.", netimCost: "€10–€30 á ári",
    tableTitle: "📊 Yfirlit", thReg: "Skrásetjari", thExt: "Viðbætur", thCost: "Trustee Kostnaður",
    whyTitle: "💎 Hvers Vegna Eru Evrópsk Úrvalslén Sérstaklega Verðmæt", whyIntro: "Lén okkar eru meira en bara nafn:",
    whyPoints: ["🔗 Netferill", "🏛️ Oft fyrrum ESB-verkefni", "🌍 Traust evrópskra gesta", "📉 Minni samkeppni en .COM", "🔁 Fullkomið fyrir 301 tilvísanir", "🧠 Áhugavert fyrir vörumerki og SEO"],
    whyNote: "Í reynd eru þessi evrópsku nöfn oft verðmætari en mörg .COM lén.",
    investTitle: "🌍 Ákjósanlegt fyrir Alþjóðlega Fjárfesta", investIntro: "Fyrir fjárfesta utan ESB bjóða evrópsk lén:",
    investPoints: ["Einkarétt gegnum reglugerðir", "Hærri gæðaþröskuldur", "Sterk landfræðileg staðsetning", "Aðlaðandi notkun fyrir alþjóðleg verkefni"],
    investCta: "Gegnum trustee skráningu eru úrvals .EU lén nothæf á heimsvísu.", investTagline: "➡️ Evrópskt vald. Alþjóðlegt gildi."
  },
  sq: {
    title: "Domene .EU & Shtesa Europiane Premium — Çfarë është Shërbimi Trustee?",
    intro: "Jemi të specializuar në .EU dhe shtesa të tjera europiane me histori online të provuar.",
    globalAccess: "🌐 E arritshme globalisht – edhe për blerës jashtë BE-së përmes regjistrimit Trustee.",
    whatIs: "🔐 Çfarë është Trustee?", whatIsDesc: "Trustee është regjistrues i njohur që:",
    uses: ["Përdor adresë fizike brenda BE-së", "Vepron si kontakt administrativ", "Siguron përputhshmërinë me rregullat e BE-së"],
    meansTitle: "Kjo do të thotë:", means: ["Mbeteni pronar i plotë", "Përdorim i lirë për website, email, markë", "Nuk nevojitet kompani BE-je apo adresë lokale", "Plotësisht ligjore dhe transparente"],
    meansNote: "Për blerës jashtë BE-së, kjo është zgjidhja standarde.",
    regTitle: "🧩 Regjistrimi Trustee përmes Regjistruesve të Njohur",
    inwxTitle: "INWX — Trustee shumë i përballueshëm (nga €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Opsioni trustee ofrohet automatikisht.", inwxCost: "€3 në vit",
    d101Title: "101domain — Trustee në pagesë", d101Desc: "Ofrohet automatikisht.", d101Cost: "± $25 në vit",
    netimTitle: "Netim — Trustee vetëm kur nevojitet", netimDesc: "Aktiv vetëm për shtesa me kërkesa.", netimCost: "€10–€30 në vit",
    tableTitle: "📊 Përmbledhje", thReg: "Regjistrues", thExt: "Shtesa", thCost: "Kosto Trustee",
    whyTitle: "💎 Pse Domenet Europiane Premium Janë Veçanërisht të Vlefshme", whyIntro: "Domenet tona janë më shumë se një emër:",
    whyPoints: ["🔗 Histori online", "🏛️ Shpesh projekte të mëparshme BE", "🌍 Besimi i vizitorëve europianë", "📉 Më pak konkurrencë se .COM", "🔁 Perfekte për 301 ridrejtim", "🧠 Interesante për SEO dhe investim"],
    whyNote: "Në praktikë, emrat europianë janë shpesh më të vlefshme se shumë domene .COM.",
    investTitle: "🌍 Ideale për Investitorë Ndërkombëtarë", investIntro: "Për investitorë jashtë BE-së, domenet europiane ofrojnë:",
    investPoints: ["Ekskluzivitet përmes rregullimit", "Prag më i lartë cilësie", "Pozicionim i fortë gjeografik", "Përdorim tërheqës për projekte ndërkombëtare"],
    investCta: "Përmes regjistrimit trustee, domenet .EU premium përdoren globalisht.", investTagline: "➡️ Autoritet europian. Zbatueshmëri ndërkombëtare."
  },
  mk: {
    title: "Премиум .EU & Европски Екстензии — Што е Trustee Услуга?",
    intro: "Специјализирани сме за .EU и други европски домен екстензии со докажана онлајн историја.",
    globalAccess: "🌐 Глобално достапно – и за купувачи надвор од ЕУ преку Trustee регистрација.",
    whatIs: "🔐 Што е Trustee?", whatIsDesc: "Trustee е признат регистрар кој:",
    uses: ["Користи физичка адреса во ЕУ", "Дејствува како административен контакт", "Обезбедува усогласеност со правилата на ЕУ"],
    meansTitle: "Што значи тоа:", means: ["Останувате целосен сопственик", "Слободна употреба за веб, емаил, бренд", "Не е потребна ЕУ компанија", "Целосно легално и транспарентно"],
    meansNote: "За купувачи надвор од ЕУ ова е стандардно решение.",
    regTitle: "🧩 Trustee Регистрација преку Признати Регистрари",
    inwxTitle: "INWX — Многу пристапна Trustee (од €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee опцијата се нуди автоматски.", inwxCost: "€3 годишно",
    d101Title: "101domain — Trustee при плаќање", d101Desc: "Се нуди автоматски.", d101Cost: "± $25 годишно",
    netimTitle: "Netim — Trustee само кога е потребно", netimDesc: "Активна само за екстензии со барања.", netimCost: "€10–€30 годишно",
    tableTitle: "📊 Преглед", thReg: "Регистрар", thExt: "Екстензии", thCost: "Trustee Цена",
    whyTitle: "💎 Зошто Премиум Европските Домени се Посебно Вредни", whyIntro: "Нашите домени се повеќе од име:",
    whyPoints: ["🔗 Онлајн историја", "🏛️ Често поранешни ЕУ проекти", "🌍 Доверба на европски посетители", "📉 Помалку конкуренција од .COM", "🔁 Совршено за 301 пренасочување", "🧠 Интересно за SEO и инвестиции"],
    whyNote: "Во пракса овие европски имиња често се повредни од многу .COM домени.",
    investTitle: "🌍 Идеално за Меѓународни Инвеститори", investIntro: "За инвеститори надвор од ЕУ, европските домени нудат:",
    investPoints: ["Ексклузивност преку регулатива", "Повисок праг на квалитет", "Силно географско позиционирање", "Атрактивна употреба за меѓународни проекти"],
    investCta: "Преку Trustee регистрација, премиум .EU домените се употребливи глобално.", investTagline: "➡️ Европски авторитет. Меѓународна применливост."
  },
  bs: {
    title: "Premium .EU & Evropske Ekstenzije — Šta je Trustee Usluga?",
    intro: "Specijalizirani smo za .EU i druge evropske domenske ekstenzije s dokazanom online historijom.",
    globalAccess: "🌐 Globalno dostupno – i za kupce van EU putem Trustee registracije.",
    whatIs: "🔐 Šta je Trustee?", whatIsDesc: "Trustee je priznat registrar koji:",
    uses: ["Koristi fizičku adresu u EU za registraciju", "Djeluje kao administrativni kontakt", "Osigurava usklađenost s EU pravilima"],
    meansTitle: "Šta to znači:", means: ["Ostajete puni vlasnik", "Slobodna upotreba za web, email, brend", "Nije potrebna EU kompanija", "Potpuno legalno i transparentno"],
    meansNote: "Za kupce van EU ovo je standardno rješenje.",
    regTitle: "🧩 Trustee Registracija putem Priznatih Registrara",
    inwxTitle: "INWX — Veoma pristupačan Trustee (od €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee opcija se nudi automatski.", inwxCost: "€3 godišnje",
    d101Title: "101domain — Trustee pri plaćanju", d101Desc: "Nudi se automatski.", d101Cost: "± $25 godišnje",
    netimTitle: "Netim — Trustee samo kad je potrebno", netimDesc: "Aktivna samo za ekstenzije sa zahtjevima.", netimCost: "€10–€30 godišnje",
    tableTitle: "📊 Pregled", thReg: "Registrar", thExt: "Ekstenzije", thCost: "Trustee Cijena",
    whyTitle: "💎 Zašto su Premium Evropske Domene Posebno Vrijedne", whyIntro: "Naše domene su više od imena:",
    whyPoints: ["🔗 Online historija", "🏛️ Često bivši EU projekti", "🌍 Povjerenje evropskih posjetilaca", "📉 Manje konkurencije od .COM", "🔁 Savršeno za 301 preusmjeravanje", "🧠 Interesantno za SEO i investicije"],
    whyNote: "U praksi su ova evropska imena često vrijednija od mnogih .COM domena.",
    investTitle: "🌍 Idealno za Međunarodne Investitore", investIntro: "Za investitore van EU, evropske domene nude:",
    investPoints: ["Ekskluzivnost kroz regulativu", "Viši prag kvaliteta", "Jaka geografska pozicija", "Atraktivna upotreba za međunarodne projekte"],
    investCta: "Putem Trustee registracije, premium .EU domene su upotrebljive globalno.", investTagline: "➡️ Evropski autoritet. Međunarodna primjenjivost."
  },
  lb: {
    title: "Premium .EU & Europäesch Extensiounen — Wat ass en Trustee Service?",
    intro: "Mir spezialiséieren eis op .EU an aner europäesch Domainextensiounen mat bewisener Online-Geschicht.",
    globalAccess: "🌐 Global zougänglech – och fir Keefer ausserhalb der EU duerch Trustee Registréierung.",
    whatIs: "🔐 Wat ass en Trustee?", whatIsDesc: "En Trustee ass en unerkannten Registrar deen:",
    uses: ["Eng physesch EU-Adress fir d'Registréierung benotzt", "Als administrativen Kontakt agéiert", "Sécherstellt datt den Domain den EU-Reegelen entsprëcht"],
    meansTitle: "Wat dat fir Iech bedeit:", means: ["Dir bleift vollstännegen Besëtzer", "Fräi Benotzung fir Websäit, E-Mail, Marque", "Kee EU-Betrib oder lokal Adress néideg", "Komplett legal an transparent"],
    meansNote: "Fir Keefer ausserhalb der EU ass dat d'Standard-Léisung.",
    regTitle: "🧩 Trustee Registréierung iwwer Unerkannten Registrarer",
    inwxTitle: "INWX — Ganz bëlleg Trustee (ab €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Trustee Optioun gëtt automatesch ugebueden.", inwxCost: "€3 d'Joer",
    d101Title: "101domain — Trustee direkt beim Bezuelen", d101Desc: "Gëtt automatesch ugebueden.", d101Cost: "± $25 d'Joer",
    netimTitle: "Netim — Trustee nëmmen wa néideg", netimDesc: "Aktiv nëmme fir Extensiounen mat Ufuerderungen.", netimCost: "€10–€30 d'Joer",
    tableTitle: "📊 Iwwersiicht", thReg: "Registrar", thExt: "Extensiounen", thCost: "Trustee Käschten",
    whyTitle: "💎 Firwat Premium Europäesch Domainen Extra Wäertvoll Sinn", whyIntro: "Eis Domainen si méi wéi nëmmen en Numm:",
    whyPoints: ["🔗 Online Geschicht", "🏛️ Dacks fréier EU Projeten", "🌍 Vertraue vun europäesche Besucher", "📉 Manner Konkurrenz wéi .COM", "🔁 Perfekt fir 301 Viruleedungen", "🧠 Interessant fir Branding, SEO an Investitiounen"],
    whyNote: "An der Praxis sinn des europäesch Nimm dacks méi wäertvoll wéi vill .COM Domainen.",
    investTitle: "🌍 Ideal fir International Investisseuren", investIntro: "Fir Investisseuren ausserhalb der EU bidden europäesch Domainen:",
    investPoints: ["Exklusivitéit duerch Reguléierung", "Héicheren Qualitéitsschwellwäert", "Staark geographesch Positioun", "Attraktiv Benotzung fir international Projeten"],
    investCta: "Duerch Trustee Registréierung sinn Premium .EU Domainen global benotzbar.", investTagline: "➡️ Europäesch Autoritéit. International Awennbarkeet."
  },
  bn: {
    title: "প্রিমিয়াম .EU ও ইউরোপীয় এক্সটেনশন — Trustee সেবা কী?",
    intro: "আমরা .EU এবং অন্যান্য ইউরোপীয় ডোমেইন এক্সটেনশনে বিশেষজ্ঞ।",
    globalAccess: "🌐 বিশ্বব্যাপী অ্যাক্সেসযোগ্য – EU-র বাইরের ক্রেতাদের জন্যও Trustee নিবন্ধনের মাধ্যমে।",
    whatIs: "🔐 Trustee কী?", whatIsDesc: "Trustee একটি স্বীকৃত রেজিস্ট্রার যা:",
    uses: ["নিবন্ধনের জন্য EU-তে প্রকৃত ঠিকানা ব্যবহার করে", "প্রশাসনিক যোগাযোগ হিসেবে কাজ করে", "EU নিয়ম মেনে চলা নিশ্চিত করে"],
    meansTitle: "এর অর্থ:", means: ["আপনি সম্পূর্ণ মালিক থাকবেন", "ওয়েবসাইট, ইমেইল, ব্র্যান্ডের জন্য মুক্ত ব্যবহার", "EU কোম্পানি বা স্থানীয় ঠিকানা প্রয়োজন নেই", "সম্পূর্ণ আইনি ও স্বচ্ছ"],
    meansNote: "EU-র বাইরের ক্রেতাদের জন্য এটি স্ট্যান্ডার্ড সমাধান।",
    regTitle: "🧩 স্বীকৃত রেজিস্ট্রারের মাধ্যমে Trustee নিবন্ধন",
    inwxTitle: "INWX — অত্যন্ত সাশ্রয়ী Trustee (€3 থেকে)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "নিবন্ধনের সময় Trustee বিকল্প স্বয়ংক্রিয়ভাবে প্রদান করা হয়।", inwxCost: "বছরে €3",
    d101Title: "101domain — চেকআউটে Trustee", d101Desc: "স্বয়ংক্রিয়ভাবে প্রদান করা হয়।", d101Cost: "বছরে ± $25",
    netimTitle: "Netim — প্রয়োজনে Trustee", netimDesc: "শুধু প্রয়োজনীয় এক্সটেনশনের জন্য সক্রিয়।", netimCost: "বছরে €10–€30",
    tableTitle: "📊 সারসংক্ষেপ", thReg: "রেজিস্ট্রার", thExt: "এক্সটেনশন", thCost: "Trustee খরচ",
    whyTitle: "💎 প্রিমিয়াম ইউরোপীয় ডোমেইন কেন বিশেষভাবে মূল্যবান", whyIntro: "আমাদের ডোমেইন শুধু নাম নয়:",
    whyPoints: ["🔗 অনলাইন ইতিহাস", "🏛️ প্রায়ই প্রাক্তন EU প্রকল্প", "🌍 ইউরোপীয় দর্শকদের আস্থা", "📉 .COM-এর চেয়ে কম প্রতিযোগিতা", "🔁 301 রিডাইরেক্টের জন্য আদর্শ", "🧠 SEO ও বিনিয়োগের জন্য আকর্ষণীয়"],
    whyNote: "বাস্তবে এই ইউরোপীয় নামগুলো অনেক .COM ডোমেইনের চেয়ে বেশি মূল্যবান।",
    investTitle: "🌍 আন্তর্জাতিক বিনিয়োগকারীদের জন্য আদর্শ", investIntro: "EU-র বাইরের বিনিয়োগকারীদের জন্য ইউরোপীয় ডোমেইন:",
    investPoints: ["নিয়ন্ত্রণের মাধ্যমে একচেটিয়াতা", "উচ্চতর মানের প্রান্তিক", "শক্তিশালী ভৌগোলিক অবস্থান", "আন্তর্জাতিক প্রকল্পের জন্য আকর্ষণীয়"],
    investCta: "Trustee নিবন্ধনের মাধ্যমে প্রিমিয়াম .EU ডোমেইন বিশ্বব্যাপী ব্যবহারযোগ্য।", investTagline: "➡️ ইউরোপীয় কর্তৃত্ব। আন্তর্জাতিক প্রয়োগযোগ্যতা।"
  },
  ms: {
    title: "Domain .EU & Sambungan Eropah Premium — Apa itu Perkhidmatan Trustee?",
    intro: "Kami pakar dalam .EU dan sambungan domain Eropah lain dengan sejarah dalam talian yang terbukti.",
    globalAccess: "🌐 Boleh diakses secara global – juga untuk pembeli bukan EU melalui pendaftaran Trustee.",
    whatIs: "🔐 Apa itu Trustee?", whatIsDesc: "Trustee adalah pendaftar diiktiraf yang:",
    uses: ["Menggunakan alamat fizikal di EU untuk pendaftaran", "Bertindak sebagai kenalan pentadbiran", "Memastikan domain mematuhi peraturan EU"],
    meansTitle: "Apa maksudnya:", means: ["Anda kekal pemilik penuh", "Penggunaan bebas untuk laman web, e-mel, jenama", "Tidak perlu syarikat EU atau alamat tempatan", "Sepenuhnya sah dan telus"],
    meansNote: "Untuk pembeli bukan EU, ini adalah penyelesaian standard.",
    regTitle: "🧩 Pendaftaran Trustee melalui Pendaftar Diiktiraf",
    inwxTitle: "INWX — Trustee sangat berpatutan (dari €3)", inwxExt: ".EU · .IT · .FR · .DE", inwxHow: "Pilihan trustee ditawarkan secara automatik.", inwxCost: "€3 setahun",
    d101Title: "101domain — Trustee semasa pembayaran", d101Desc: "Ditawarkan secara automatik.", d101Cost: "± $25 setahun",
    netimTitle: "Netim — Trustee hanya apabila perlu", netimDesc: "Aktif hanya untuk sambungan dengan keperluan.", netimCost: "€10–€30 setahun",
    tableTitle: "📊 Gambaran Keseluruhan", thReg: "Pendaftar", thExt: "Sambungan", thCost: "Kos Trustee",
    whyTitle: "💎 Mengapa Domain Eropah Premium Sangat Bernilai", whyIntro: "Domain kami lebih daripada sekadar nama:",
    whyPoints: ["🔗 Sejarah dalam talian", "🏛️ Sering projek EU terdahulu", "🌍 Kepercayaan pelawat Eropah", "📉 Kurang persaingan daripada .COM", "🔁 Sempurna untuk 301 pengalihan", "🧠 Menarik untuk SEO dan pelaburan"],
    whyNote: "Dalam amalan, nama Eropah ini sering lebih bernilai daripada banyak domain .COM.",
    investTitle: "🌍 Ideal untuk Pelabur Antarabangsa", investIntro: "Untuk pelabur di luar EU, domain Eropah menawarkan:",
    investPoints: ["Eksklusiviti melalui peraturan", "Ambang kualiti lebih tinggi", "Kedudukan geografi yang kukuh", "Penggunaan menarik untuk projek antarabangsa"],
    investCta: "Melalui pendaftaran trustee, domain .EU premium boleh digunakan secara global.", investTagline: "➡️ Autoriti Eropah. Kebolehgunaan antarabangsa."
  }
};

const TrusteeServiceSection = ({ lang }: { lang: string }) => {
  const c = t[lang as Lang] || t['en'];
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

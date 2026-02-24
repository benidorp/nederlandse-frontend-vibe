// Domain category and description translations for all 10 new languages
// Categories are translated, descriptions use a pattern-based translation system

type LangCode = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk';

// Category translations
const categoryTranslations: Record<LangCode, Record<string, string>> = {
  sv: {
    "Education": "Utbildning", "Hospitality": "Hotell & Gästfrihet", "Art": "Konst", "General": "Allmänt",
    "Entertainment": "Underhållning", "Art/Culture": "Konst/Kultur", "Music": "Musik", "International": "Internationellt",
    "Technology": "Teknik", "Sport": "Sport", "News": "Nyheter", "Business": "Affärer", "Tourism": "Turism",
    "Research": "Forskning", "Collaboration": "Samarbete", "Transport": "Transport", "Projects": "Projekt",
    "Digital": "Digitalt", "Sustainability": "Hållbarhet", "Energy": "Energi", "Food": "Mat", "Safety": "Säkerhet",
    "Real Estate": "Fastigheter", "Music/Audio": "Musik/Ljud", "Design": "Design", "Mobility": "Mobilitet",
    "Network": "Nätverk", "Environment": "Miljö", "Startups": "Startups", "Finance": "Finans",
    "Language/Culture": "Språk/Kultur", "Sport/Events": "Sport/Evenemang", "Healthcare": "Hälsovård",
    "Art/Design": "Konst/Design", "Events": "Evenemang", "Science": "Vetenskap", "Health": "Hälsa",
    "Media": "Media", "Government/Culture": "Regering/Kultur", "Portfolio": "Portfolio", "Government": "Regering",
    "Culture": "Kultur", "Innovation": "Innovation", "Lifestyle": "Livsstil", "Photography": "Fotografi",
    "Maritime": "Maritim", "Gaming": "Spel", "Sports": "Sporter", "Smart City": "Smart Stad",
    "Information": "Information", "Art/Heritage": "Konst/Kulturarv", "Design/Hospitality": "Design/Gästfrihet",
    "Beauty": "Skönhet"
  },
  no: {
    "Education": "Utdanning", "Hospitality": "Gjestfrihet", "Art": "Kunst", "General": "Generelt",
    "Entertainment": "Underholdning", "Art/Culture": "Kunst/Kultur", "Music": "Musikk", "International": "Internasjonalt",
    "Technology": "Teknologi", "Sport": "Sport", "News": "Nyheter", "Business": "Næringsliv", "Tourism": "Turisme",
    "Research": "Forskning", "Collaboration": "Samarbeid", "Transport": "Transport", "Projects": "Prosjekter",
    "Digital": "Digitalt", "Sustainability": "Bærekraft", "Energy": "Energi", "Food": "Mat", "Safety": "Sikkerhet",
    "Real Estate": "Eiendom", "Music/Audio": "Musikk/Lyd", "Design": "Design", "Mobility": "Mobilitet",
    "Network": "Nettverk", "Environment": "Miljø", "Startups": "Startups", "Finance": "Finans",
    "Language/Culture": "Språk/Kultur", "Sport/Events": "Sport/Arrangementer", "Healthcare": "Helsevesen",
    "Art/Design": "Kunst/Design", "Events": "Arrangementer", "Science": "Vitenskap", "Health": "Helse",
    "Media": "Media", "Government/Culture": "Regjering/Kultur", "Portfolio": "Portefølje", "Government": "Regjering",
    "Culture": "Kultur", "Innovation": "Innovasjon", "Lifestyle": "Livsstil", "Photography": "Fotografi",
    "Maritime": "Maritim", "Gaming": "Spill", "Sports": "Idretter", "Smart City": "Smart By",
    "Information": "Informasjon", "Art/Heritage": "Kunst/Kulturarv", "Design/Hospitality": "Design/Gjestfrihet",
    "Beauty": "Skjønnhet"
  },
  da: {
    "Education": "Uddannelse", "Hospitality": "Gæstfrihed", "Art": "Kunst", "General": "Generelt",
    "Entertainment": "Underholdning", "Art/Culture": "Kunst/Kultur", "Music": "Musik", "International": "Internationalt",
    "Technology": "Teknologi", "Sport": "Sport", "News": "Nyheder", "Business": "Forretning", "Tourism": "Turisme",
    "Research": "Forskning", "Collaboration": "Samarbejde", "Transport": "Transport", "Projects": "Projekter",
    "Digital": "Digitalt", "Sustainability": "Bæredygtighed", "Energy": "Energi", "Food": "Mad", "Safety": "Sikkerhed",
    "Real Estate": "Ejendomme", "Music/Audio": "Musik/Lyd", "Design": "Design", "Mobility": "Mobilitet",
    "Network": "Netværk", "Environment": "Miljø", "Startups": "Startups", "Finance": "Finans",
    "Language/Culture": "Sprog/Kultur", "Sport/Events": "Sport/Begivenheder", "Healthcare": "Sundhed",
    "Art/Design": "Kunst/Design", "Events": "Begivenheder", "Science": "Videnskab", "Health": "Sundhed",
    "Media": "Medier", "Government/Culture": "Regering/Kultur", "Portfolio": "Portfolio", "Government": "Regering",
    "Culture": "Kultur", "Innovation": "Innovation", "Lifestyle": "Livsstil", "Photography": "Fotografi",
    "Maritime": "Maritim", "Gaming": "Spil", "Sports": "Sportsgrene", "Smart City": "Smart By",
    "Information": "Information", "Art/Heritage": "Kunst/Kulturarv", "Design/Hospitality": "Design/Gæstfrihed",
    "Beauty": "Skønhed"
  },
  fi: {
    "Education": "Koulutus", "Hospitality": "Vieraanvaraisuus", "Art": "Taide", "General": "Yleinen",
    "Entertainment": "Viihde", "Art/Culture": "Taide/Kulttuuri", "Music": "Musiikki", "International": "Kansainvälinen",
    "Technology": "Teknologia", "Sport": "Urheilu", "News": "Uutiset", "Business": "Liiketoiminta", "Tourism": "Matkailu",
    "Research": "Tutkimus", "Collaboration": "Yhteistyö", "Transport": "Kuljetus", "Projects": "Projektit",
    "Digital": "Digitaalinen", "Sustainability": "Kestävyys", "Energy": "Energia", "Food": "Ruoka", "Safety": "Turvallisuus",
    "Real Estate": "Kiinteistöt", "Music/Audio": "Musiikki/Ääni", "Design": "Muotoilu", "Mobility": "Liikkuvuus",
    "Network": "Verkosto", "Environment": "Ympäristö", "Startups": "Startupit", "Finance": "Rahoitus",
    "Language/Culture": "Kieli/Kulttuuri", "Sport/Events": "Urheilu/Tapahtumat", "Healthcare": "Terveydenhuolto",
    "Art/Design": "Taide/Muotoilu", "Events": "Tapahtumat", "Science": "Tiede", "Health": "Terveys",
    "Media": "Media", "Government/Culture": "Hallinto/Kulttuuri", "Portfolio": "Portfolio", "Government": "Hallinto",
    "Culture": "Kulttuuri", "Innovation": "Innovaatio", "Lifestyle": "Elämäntapa", "Photography": "Valokuvaus",
    "Maritime": "Merenkulku", "Gaming": "Pelit", "Sports": "Urheilu", "Smart City": "Älykäs Kaupunki",
    "Information": "Tiedotus", "Art/Heritage": "Taide/Perintö", "Design/Hospitality": "Muotoilu/Vieraanvaraisuus",
    "Beauty": "Kauneus"
  },
  cs: {
    "Education": "Vzdělávání", "Hospitality": "Pohostinství", "Art": "Umění", "General": "Obecné",
    "Entertainment": "Zábava", "Art/Culture": "Umění/Kultura", "Music": "Hudba", "International": "Mezinárodní",
    "Technology": "Technologie", "Sport": "Sport", "News": "Zprávy", "Business": "Podnikání", "Tourism": "Cestovní ruch",
    "Research": "Výzkum", "Collaboration": "Spolupráce", "Transport": "Doprava", "Projects": "Projekty",
    "Digital": "Digitální", "Sustainability": "Udržitelnost", "Energy": "Energie", "Food": "Gastronomie", "Safety": "Bezpečnost",
    "Real Estate": "Nemovitosti", "Music/Audio": "Hudba/Audio", "Design": "Design", "Mobility": "Mobilita",
    "Network": "Síť", "Environment": "Životní prostředí", "Startups": "Startupy", "Finance": "Finance",
    "Language/Culture": "Jazyk/Kultura", "Sport/Events": "Sport/Akce", "Healthcare": "Zdravotnictví",
    "Art/Design": "Umění/Design", "Events": "Akce", "Science": "Věda", "Health": "Zdraví",
    "Media": "Média", "Government/Culture": "Vláda/Kultura", "Portfolio": "Portfolio", "Government": "Vláda",
    "Culture": "Kultura", "Innovation": "Inovace", "Lifestyle": "Životní styl", "Photography": "Fotografie",
    "Maritime": "Námořnictví", "Gaming": "Hry", "Sports": "Sporty", "Smart City": "Chytré město",
    "Information": "Informace", "Art/Heritage": "Umění/Dědictví", "Design/Hospitality": "Design/Pohostinství",
    "Beauty": "Krása"
  },
  el: {
    "Education": "Εκπαίδευση", "Hospitality": "Φιλοξενία", "Art": "Τέχνη", "General": "Γενικά",
    "Entertainment": "Ψυχαγωγία", "Art/Culture": "Τέχνη/Πολιτισμός", "Music": "Μουσική", "International": "Διεθνές",
    "Technology": "Τεχνολογία", "Sport": "Αθλητισμός", "News": "Ειδήσεις", "Business": "Επιχείρηση", "Tourism": "Τουρισμός",
    "Research": "Έρευνα", "Collaboration": "Συνεργασία", "Transport": "Μεταφορές", "Projects": "Έργα",
    "Digital": "Ψηφιακό", "Sustainability": "Βιωσιμότητα", "Energy": "Ενέργεια", "Food": "Τρόφιμα", "Safety": "Ασφάλεια",
    "Real Estate": "Ακίνητα", "Music/Audio": "Μουσική/Ήχος", "Design": "Σχεδιασμός", "Mobility": "Κινητικότητα",
    "Network": "Δίκτυο", "Environment": "Περιβάλλον", "Startups": "Startups", "Finance": "Οικονομικά",
    "Language/Culture": "Γλώσσα/Πολιτισμός", "Sport/Events": "Αθλητισμός/Εκδηλώσεις", "Healthcare": "Υγειονομική Περίθαλψη",
    "Art/Design": "Τέχνη/Σχεδιασμός", "Events": "Εκδηλώσεις", "Science": "Επιστήμη", "Health": "Υγεία",
    "Media": "Μέσα", "Government/Culture": "Κυβέρνηση/Πολιτισμός", "Portfolio": "Portfolio", "Government": "Κυβέρνηση",
    "Culture": "Πολιτισμός", "Innovation": "Καινοτομία", "Lifestyle": "Τρόπος Ζωής", "Photography": "Φωτογραφία",
    "Maritime": "Ναυτιλία", "Gaming": "Παιχνίδια", "Sports": "Αθλήματα", "Smart City": "Έξυπνη Πόλη",
    "Information": "Πληροφορίες", "Art/Heritage": "Τέχνη/Κληρονομιά", "Design/Hospitality": "Σχεδιασμός/Φιλοξενία",
    "Beauty": "Ομορφιά"
  },
  ru: {
    "Education": "Образование", "Hospitality": "Гостеприимство", "Art": "Искусство", "General": "Общее",
    "Entertainment": "Развлечения", "Art/Culture": "Искусство/Культура", "Music": "Музыка", "International": "Международное",
    "Technology": "Технологии", "Sport": "Спорт", "News": "Новости", "Business": "Бизнес", "Tourism": "Туризм",
    "Research": "Исследования", "Collaboration": "Сотрудничество", "Transport": "Транспорт", "Projects": "Проекты",
    "Digital": "Цифровое", "Sustainability": "Устойчивость", "Energy": "Энергетика", "Food": "Питание", "Safety": "Безопасность",
    "Real Estate": "Недвижимость", "Music/Audio": "Музыка/Аудио", "Design": "Дизайн", "Mobility": "Мобильность",
    "Network": "Сеть", "Environment": "Экология", "Startups": "Стартапы", "Finance": "Финансы",
    "Language/Culture": "Язык/Культура", "Sport/Events": "Спорт/Мероприятия", "Healthcare": "Здравоохранение",
    "Art/Design": "Искусство/Дизайн", "Events": "Мероприятия", "Science": "Наука", "Health": "Здоровье",
    "Media": "Медиа", "Government/Culture": "Власть/Культура", "Portfolio": "Портфолио", "Government": "Власть",
    "Culture": "Культура", "Innovation": "Инновации", "Lifestyle": "Стиль жизни", "Photography": "Фотография",
    "Maritime": "Морское", "Gaming": "Игры", "Sports": "Спорт", "Smart City": "Умный Город",
    "Information": "Информация", "Art/Heritage": "Искусство/Наследие", "Design/Hospitality": "Дизайн/Гостеприимство",
    "Beauty": "Красота"
  },
  ro: {
    "Education": "Educație", "Hospitality": "Ospitalitate", "Art": "Artă", "General": "General",
    "Entertainment": "Divertisment", "Art/Culture": "Artă/Cultură", "Music": "Muzică", "International": "Internațional",
    "Technology": "Tehnologie", "Sport": "Sport", "News": "Știri", "Business": "Afaceri", "Tourism": "Turism",
    "Research": "Cercetare", "Collaboration": "Colaborare", "Transport": "Transport", "Projects": "Proiecte",
    "Digital": "Digital", "Sustainability": "Sustenabilitate", "Energy": "Energie", "Food": "Gastronomie", "Safety": "Siguranță",
    "Real Estate": "Imobiliare", "Music/Audio": "Muzică/Audio", "Design": "Design", "Mobility": "Mobilitate",
    "Network": "Rețea", "Environment": "Mediu", "Startups": "Startup-uri", "Finance": "Finanțe",
    "Language/Culture": "Limbă/Cultură", "Sport/Events": "Sport/Evenimente", "Healthcare": "Sănătate",
    "Art/Design": "Artă/Design", "Events": "Evenimente", "Science": "Știință", "Health": "Sănătate",
    "Media": "Media", "Government/Culture": "Guvern/Cultură", "Portfolio": "Portofoliu", "Government": "Guvern",
    "Culture": "Cultură", "Innovation": "Inovație", "Lifestyle": "Stil de Viață", "Photography": "Fotografie",
    "Maritime": "Maritim", "Gaming": "Jocuri", "Sports": "Sporturi", "Smart City": "Oraș Inteligent",
    "Information": "Informații", "Art/Heritage": "Artă/Patrimoniu", "Design/Hospitality": "Design/Ospitalitate",
    "Beauty": "Frumusețe"
  },
  bg: {
    "Education": "Образование", "Hospitality": "Хотелиерство", "Art": "Изкуство", "General": "Общо",
    "Entertainment": "Развлечения", "Art/Culture": "Изкуство/Култура", "Music": "Музика", "International": "Международно",
    "Technology": "Технологии", "Sport": "Спорт", "News": "Новини", "Business": "Бизнес", "Tourism": "Туризъм",
    "Research": "Изследвания", "Collaboration": "Сътрудничество", "Transport": "Транспорт", "Projects": "Проекти",
    "Digital": "Дигитално", "Sustainability": "Устойчивост", "Energy": "Енергия", "Food": "Храна", "Safety": "Безопасност",
    "Real Estate": "Имоти", "Music/Audio": "Музика/Аудио", "Design": "Дизайн", "Mobility": "Мобилност",
    "Network": "Мрежа", "Environment": "Околна среда", "Startups": "Стартъпи", "Finance": "Финанси",
    "Language/Culture": "Език/Култура", "Sport/Events": "Спорт/Събития", "Healthcare": "Здравеопазване",
    "Art/Design": "Изкуство/Дизайн", "Events": "Събития", "Science": "Наука", "Health": "Здраве",
    "Media": "Медии", "Government/Culture": "Управление/Култура", "Portfolio": "Портфолио", "Government": "Управление",
    "Culture": "Култура", "Innovation": "Иновации", "Lifestyle": "Начин на живот", "Photography": "Фотография",
    "Maritime": "Морско", "Gaming": "Игри", "Sports": "Спортове", "Smart City": "Умен Град",
    "Information": "Информация", "Art/Heritage": "Изкуство/Наследство", "Design/Hospitality": "Дизайн/Хотелиерство",
    "Beauty": "Красота"
  },
  uk: {
    "Education": "Освіта", "Hospitality": "Гостинність", "Art": "Мистецтво", "General": "Загальне",
    "Entertainment": "Розваги", "Art/Culture": "Мистецтво/Культура", "Music": "Музика", "International": "Міжнародне",
    "Technology": "Технології", "Sport": "Спорт", "News": "Новини", "Business": "Бізнес", "Tourism": "Туризм",
    "Research": "Дослідження", "Collaboration": "Співпраця", "Transport": "Транспорт", "Projects": "Проєкти",
    "Digital": "Цифрове", "Sustainability": "Сталість", "Energy": "Енергетика", "Food": "Харчування", "Safety": "Безпека",
    "Real Estate": "Нерухомість", "Music/Audio": "Музика/Аудіо", "Design": "Дизайн", "Mobility": "Мобільність",
    "Network": "Мережа", "Environment": "Довкілля", "Startups": "Стартапи", "Finance": "Фінанси",
    "Language/Culture": "Мова/Культура", "Sport/Events": "Спорт/Події", "Healthcare": "Охорона здоров'я",
    "Art/Design": "Мистецтво/Дизайн", "Events": "Події", "Science": "Наука", "Health": "Здоров'я",
    "Media": "Медіа", "Government/Culture": "Влада/Культура", "Portfolio": "Портфоліо", "Government": "Влада",
    "Culture": "Культура", "Innovation": "Інновації", "Lifestyle": "Стиль життя", "Photography": "Фотографія",
    "Maritime": "Морське", "Gaming": "Ігри", "Sports": "Спорт", "Smart City": "Розумне Місто",
    "Information": "Інформація", "Art/Heritage": "Мистецтво/Спадщина", "Design/Hospitality": "Дизайн/Гостинність",
    "Beauty": "Краса"
  }
};

// Description translation patterns
const descriptionPatterns: Record<LangCode, {
  domainWith: string;        // "domain with backlinks from"
  premiumDomain: string;     // "Premium ... domain"
  shortMemorable: string;    // "Short and memorable"
  shortPowerful: string;     // "Short and powerful"
  strong: string;            // "strong"
  high: string;              // "high"
  and: string;               // "and"
  // Country adjectives
  belgian: string; dutch: string; german: string; french: string; british: string;
  austrian: string; hungarian: string; italian: string; welsh: string;
  // Type descriptors
  businessSchool: string; hotel: string; artEvent: string; ticketing: string;
  cycling: string; network: string; regional: string; center: string;
  // Prefix patterns
  euDomain: string; euProjectDomain: string;
}> = {
  sv: {
    domainWith: "domän med bakåtlänkar från",
    premiumDomain: "Premium",
    shortMemorable: "Kort och minnesvärd",
    shortPowerful: "Kort och kraftfull",
    strong: "starka",
    high: "hög",
    and: "och",
    belgian: "Belgisk", dutch: "Nederländsk", german: "Tysk", french: "Fransk", british: "Brittisk",
    austrian: "Österrikisk", hungarian: "Ungersk", italian: "Italiensk", welsh: "Walesisk",
    businessSchool: "handelshögskole", hotel: "hotell", artEvent: "konst/evenemang", ticketing: "biljett",
    cycling: "cykel", network: "nätverk", regional: "regional", center: "center",
    euDomain: "EU-domän", euProjectDomain: "EU-projektdomän"
  },
  no: {
    domainWith: "domene med tilbakekoblinger fra",
    premiumDomain: "Premium",
    shortMemorable: "Kort og minneverdig",
    shortPowerful: "Kort og kraftfull",
    strong: "sterke",
    high: "høy",
    and: "og",
    belgian: "Belgisk", dutch: "Nederlandsk", german: "Tysk", french: "Fransk", british: "Britisk",
    austrian: "Østerriksk", hungarian: "Ungarsk", italian: "Italiensk", welsh: "Walisisk",
    businessSchool: "handelshøyskole", hotel: "hotell", artEvent: "kunst/arrangement", ticketing: "billett",
    cycling: "sykkel", network: "nettverk", regional: "regional", center: "senter",
    euDomain: "EU-domene", euProjectDomain: "EU-prosjektdomene"
  },
  da: {
    domainWith: "domæne med backlinks fra",
    premiumDomain: "Premium",
    shortMemorable: "Kort og mindeværdigt",
    shortPowerful: "Kort og kraftfuldt",
    strong: "stærke",
    high: "høj",
    and: "og",
    belgian: "Belgisk", dutch: "Hollandsk", german: "Tysk", french: "Fransk", british: "Britisk",
    austrian: "Østrigsk", hungarian: "Ungarsk", italian: "Italiensk", welsh: "Walisisk",
    businessSchool: "handelsskole", hotel: "hotel", artEvent: "kunst/begivenhed", ticketing: "billet",
    cycling: "cykel", network: "netværk", regional: "regional", center: "center",
    euDomain: "EU-domæne", euProjectDomain: "EU-projektdomæne"
  },
  fi: {
    domainWith: "verkkotunnus takalinkeillä sivustoilta",
    premiumDomain: "Premium",
    shortMemorable: "Lyhyt ja mieleenpainuva",
    shortPowerful: "Lyhyt ja tehokas",
    strong: "vahvoja",
    high: "korkea",
    and: "ja",
    belgian: "Belgialainen", dutch: "Hollantilainen", german: "Saksalainen", french: "Ranskalainen", british: "Brittiläinen",
    austrian: "Itävaltalainen", hungarian: "Unkarilainen", italian: "Italialainen", welsh: "Walesilainen",
    businessSchool: "kauppakorkeakoulu", hotel: "hotelli", artEvent: "taide/tapahtuma", ticketing: "lipunmyynti",
    cycling: "pyöräily", network: "verkosto", regional: "alueellinen", center: "keskus",
    euDomain: "EU-verkkotunnus", euProjectDomain: "EU-hanke-verkkotunnus"
  },
  cs: {
    domainWith: "doména se zpětnými odkazy z",
    premiumDomain: "Prémiová",
    shortMemorable: "Krátká a zapamatovatelná",
    shortPowerful: "Krátká a silná",
    strong: "silné",
    high: "vysoký",
    and: "a",
    belgian: "Belgická", dutch: "Nizozemská", german: "Německá", french: "Francouzská", british: "Britská",
    austrian: "Rakouská", hungarian: "Maďarská", italian: "Italská", welsh: "Velšská",
    businessSchool: "obchodní školy", hotel: "hotelová", artEvent: "umění/akce", ticketing: "vstupenková",
    cycling: "cyklistická", network: "síťová", regional: "regionální", center: "centra",
    euDomain: "EU doména", euProjectDomain: "EU projektová doména"
  },
  el: {
    domainWith: "domain με backlinks από",
    premiumDomain: "Premium",
    shortMemorable: "Σύντομο και αξέχαστο",
    shortPowerful: "Σύντομο και ισχυρό",
    strong: "ισχυρά",
    high: "υψηλή",
    and: "και",
    belgian: "Βελγικό", dutch: "Ολλανδικό", german: "Γερμανικό", french: "Γαλλικό", british: "Βρετανικό",
    austrian: "Αυστριακό", hungarian: "Ουγγρικό", italian: "Ιταλικό", welsh: "Ουαλικό",
    businessSchool: "επιχειρηματικής σχολής", hotel: "ξενοδοχειακό", artEvent: "τέχνης/εκδηλώσεων", ticketing: "εισιτηρίων",
    cycling: "ποδηλασίας", network: "δικτύου", regional: "περιφερειακό", center: "κέντρου",
    euDomain: "EU domain", euProjectDomain: "EU domain έργου"
  },
  ru: {
    domainWith: "домен с обратными ссылками от",
    premiumDomain: "Премиум",
    shortMemorable: "Короткий и запоминающийся",
    shortPowerful: "Короткий и мощный",
    strong: "сильные",
    high: "высокий",
    and: "и",
    belgian: "Бельгийский", dutch: "Голландский", german: "Немецкий", french: "Французский", british: "Британский",
    austrian: "Австрийский", hungarian: "Венгерский", italian: "Итальянский", welsh: "Валлийский",
    businessSchool: "бизнес-школы", hotel: "гостиничный", artEvent: "искусства/мероприятий", ticketing: "билетный",
    cycling: "велосипедный", network: "сетевой", regional: "региональный", center: "центра",
    euDomain: "EU-домен", euProjectDomain: "EU-проектный домен"
  },
  ro: {
    domainWith: "domeniu cu backlink-uri de la",
    premiumDomain: "Premium",
    shortMemorable: "Scurt și memorabil",
    shortPowerful: "Scurt și puternic",
    strong: "puternice",
    high: "înalt",
    and: "și",
    belgian: "Belgian", dutch: "Olandez", german: "German", french: "Francez", british: "Britanic",
    austrian: "Austriac", hungarian: "Ungar", italian: "Italian", welsh: "Galez",
    businessSchool: "școală de afaceri", hotel: "hotelier", artEvent: "artă/evenimente", ticketing: "bilete",
    cycling: "ciclism", network: "rețea", regional: "regional", center: "centru",
    euDomain: "Domeniu EU", euProjectDomain: "Domeniu proiect EU"
  },
  bg: {
    domainWith: "домейн с обратни връзки от",
    premiumDomain: "Премиум",
    shortMemorable: "Кратък и запомнящ се",
    shortPowerful: "Кратък и мощен",
    strong: "силни",
    high: "висок",
    and: "и",
    belgian: "Белгийски", dutch: "Холандски", german: "Немски", french: "Френски", british: "Британски",
    austrian: "Австрийски", hungarian: "Унгарски", italian: "Италиански", welsh: "Уелски",
    businessSchool: "бизнес училище", hotel: "хотелски", artEvent: "изкуство/събития", ticketing: "билетен",
    cycling: "велосипеден", network: "мрежов", regional: "регионален", center: "център",
    euDomain: "EU домейн", euProjectDomain: "EU проектен домейн"
  },
  uk: {
    domainWith: "домен зі зворотними посиланнями від",
    premiumDomain: "Преміум",
    shortMemorable: "Короткий та запам'ятовуваний",
    shortPowerful: "Короткий та потужний",
    strong: "потужні",
    high: "високий",
    and: "та",
    belgian: "Бельгійський", dutch: "Нідерландський", german: "Німецький", french: "Французький", british: "Британський",
    austrian: "Австрійський", hungarian: "Угорський", italian: "Італійський", welsh: "Валлійський",
    businessSchool: "бізнес-школи", hotel: "готельний", artEvent: "мистецтва/подій", ticketing: "квитковий",
    cycling: "велосипедний", network: "мережевий", regional: "регіональний", center: "центру",
    euDomain: "EU-домен", euProjectDomain: "EU-проєктний домен"
  }
};

// Additional word translations for complete coverage
const wordTranslations: Record<LangCode, Record<string, string>> = {
  sv: { "domain": "domän", "with": "med", "from": "från", "backlinks": "bakåtlänkar", "strong": "starka", "art/event": "konst/evenemang", "ticketing": "biljett", "cycling": "cykel", "music": "musik", "entertainment": "underhållning", "tourism": "turism", "collaboration": "samarbete", "research": "forskning", "sustainability": "hållbarhet", "energy": "energi", "mobility": "mobilitet", "digital": "digitalt", "projects": "projekt", "sports": "sport", "sport": "sport", "news": "nyheter", "innovation": "innovation", "food": "mat", "safety": "säkerhet", "design": "design", "health": "hälsa", "science": "vetenskap", "culture": "kultur", "lifestyle": "livsstil", "photography": "fotografi", "gaming": "spel", "information": "information", "portfolio": "portfolio", "media": "media", "events": "evenemang", "smart city": "smart stad", "real estate": "fastigheter", "environment": "miljö", "finance": "finans", "government": "regering", "transport": "transport", "healthcare": "hälsovård", "startups": "startups", "maritime": "maritim", "beauty": "skönhet" },
  no: { "domain": "domene", "with": "med", "from": "fra", "backlinks": "tilbakekoblinger", "strong": "sterke", "art/event": "kunst/arrangement", "ticketing": "billett", "cycling": "sykkel", "music": "musikk", "entertainment": "underholdning", "tourism": "turisme", "collaboration": "samarbeid", "research": "forskning", "sustainability": "bærekraft", "energy": "energi", "mobility": "mobilitet", "digital": "digitalt", "projects": "prosjekter", "sports": "sport", "sport": "sport", "news": "nyheter", "innovation": "innovasjon", "food": "mat", "safety": "sikkerhet", "design": "design", "health": "helse", "science": "vitenskap", "culture": "kultur", "lifestyle": "livsstil", "photography": "fotografi", "gaming": "spill", "information": "informasjon", "portfolio": "portefølje", "media": "media", "events": "arrangementer", "smart city": "smart by", "real estate": "eiendom", "environment": "miljø", "finance": "finans", "government": "regjering", "transport": "transport", "healthcare": "helsevesen", "startups": "startups", "maritime": "maritim", "beauty": "skjønnhet" },
  da: { "domain": "domæne", "with": "med", "from": "fra", "backlinks": "backlinks", "strong": "stærke", "art/event": "kunst/begivenhed", "ticketing": "billet", "cycling": "cykel", "music": "musik", "entertainment": "underholdning", "tourism": "turisme", "collaboration": "samarbejde", "research": "forskning", "sustainability": "bæredygtighed", "energy": "energi", "mobility": "mobilitet", "digital": "digitalt", "projects": "projekter", "sports": "sport", "sport": "sport", "news": "nyheder", "innovation": "innovation", "food": "mad", "safety": "sikkerhed", "design": "design", "health": "sundhed", "science": "videnskab", "culture": "kultur", "lifestyle": "livsstil", "photography": "fotografi", "gaming": "spil", "information": "information", "portfolio": "portfolio", "media": "medier", "events": "begivenheder", "smart city": "smart by", "real estate": "ejendomme", "environment": "miljø", "finance": "finans", "government": "regering", "transport": "transport", "healthcare": "sundhed", "startups": "startups", "maritime": "maritim", "beauty": "skønhed" },
  fi: { "domain": "verkkotunnus", "with": "kanssa", "from": "sivustoilta", "backlinks": "takalinkit", "strong": "vahvoja", "art/event": "taide/tapahtuma", "ticketing": "lipunmyynti", "cycling": "pyöräily", "music": "musiikki", "entertainment": "viihde", "tourism": "matkailu", "collaboration": "yhteistyö", "research": "tutkimus", "sustainability": "kestävyys", "energy": "energia", "mobility": "liikkuvuus", "digital": "digitaalinen", "projects": "projektit", "sports": "urheilu", "sport": "urheilu", "news": "uutiset", "innovation": "innovaatio", "food": "ruoka", "safety": "turvallisuus", "design": "muotoilu", "health": "terveys", "science": "tiede", "culture": "kulttuuri", "lifestyle": "elämäntapa", "photography": "valokuvaus", "gaming": "pelit", "information": "tiedotus", "portfolio": "portfolio", "media": "media", "events": "tapahtumat", "smart city": "älykäs kaupunki", "real estate": "kiinteistöt", "environment": "ympäristö", "finance": "rahoitus", "government": "hallinto", "transport": "kuljetus", "healthcare": "terveydenhuolto", "startups": "startupit", "maritime": "merenkulku", "beauty": "kauneus" },
  cs: { "domain": "doména", "with": "s", "from": "z", "backlinks": "zpětné odkazy", "strong": "silné", "art/event": "umění/akce", "ticketing": "vstupenky", "cycling": "cyklistika", "music": "hudba", "entertainment": "zábava", "tourism": "cestovní ruch", "collaboration": "spolupráce", "research": "výzkum", "sustainability": "udržitelnost", "energy": "energie", "mobility": "mobilita", "digital": "digitální", "projects": "projekty", "sports": "sporty", "sport": "sport", "news": "zprávy", "innovation": "inovace", "food": "gastronomie", "safety": "bezpečnost", "design": "design", "health": "zdraví", "science": "věda", "culture": "kultura", "lifestyle": "životní styl", "photography": "fotografie", "gaming": "hry", "information": "informace", "portfolio": "portfolio", "media": "média", "events": "akce", "smart city": "chytré město", "real estate": "nemovitosti", "environment": "životní prostředí", "finance": "finance", "government": "vláda", "transport": "doprava", "healthcare": "zdravotnictví", "startups": "startupy", "maritime": "námořnictví", "beauty": "krása" },
  el: { "domain": "domain", "with": "με", "from": "από", "backlinks": "backlinks", "strong": "ισχυρά", "art/event": "τέχνης/εκδηλώσεων", "ticketing": "εισιτήρια", "cycling": "ποδηλασία", "music": "μουσική", "entertainment": "ψυχαγωγία", "tourism": "τουρισμός", "collaboration": "συνεργασία", "research": "έρευνα", "sustainability": "βιωσιμότητα", "energy": "ενέργεια", "mobility": "κινητικότητα", "digital": "ψηφιακό", "projects": "έργα", "sports": "αθλήματα", "sport": "αθλητισμός", "news": "ειδήσεις", "innovation": "καινοτομία", "food": "τρόφιμα", "safety": "ασφάλεια", "design": "σχεδιασμός", "health": "υγεία", "science": "επιστήμη", "culture": "πολιτισμός", "lifestyle": "τρόπος ζωής", "photography": "φωτογραφία", "gaming": "παιχνίδια", "information": "πληροφορίες", "portfolio": "portfolio", "media": "μέσα", "events": "εκδηλώσεις", "smart city": "έξυπνη πόλη", "real estate": "ακίνητα", "environment": "περιβάλλον", "finance": "οικονομικά", "government": "κυβέρνηση", "transport": "μεταφορές", "healthcare": "υγειονομική περίθαλψη", "startups": "startups", "maritime": "ναυτιλία", "beauty": "ομορφιά" },
  ru: { "domain": "домен", "with": "с", "from": "от", "backlinks": "обратные ссылки", "strong": "сильные", "art/event": "искусства/мероприятий", "ticketing": "билетный", "cycling": "велоспорт", "music": "музыка", "entertainment": "развлечения", "tourism": "туризм", "collaboration": "сотрудничество", "research": "исследования", "sustainability": "устойчивость", "energy": "энергетика", "mobility": "мобильность", "digital": "цифровой", "projects": "проекты", "sports": "спорт", "sport": "спорт", "news": "новости", "innovation": "инновации", "food": "питание", "safety": "безопасность", "design": "дизайн", "health": "здоровье", "science": "наука", "culture": "культура", "lifestyle": "стиль жизни", "photography": "фотография", "gaming": "игры", "information": "информация", "portfolio": "портфолио", "media": "медиа", "events": "мероприятия", "smart city": "умный город", "real estate": "недвижимость", "environment": "экология", "finance": "финансы", "government": "власть", "transport": "транспорт", "healthcare": "здравоохранение", "startups": "стартапы", "maritime": "морское", "beauty": "красота" },
  ro: { "domain": "domeniu", "with": "cu", "from": "de la", "backlinks": "backlink-uri", "strong": "puternice", "art/event": "artă/evenimente", "ticketing": "bilete", "cycling": "ciclism", "music": "muzică", "entertainment": "divertisment", "tourism": "turism", "collaboration": "colaborare", "research": "cercetare", "sustainability": "sustenabilitate", "energy": "energie", "mobility": "mobilitate", "digital": "digital", "projects": "proiecte", "sports": "sporturi", "sport": "sport", "news": "știri", "innovation": "inovație", "food": "gastronomie", "safety": "siguranță", "design": "design", "health": "sănătate", "science": "știință", "culture": "cultură", "lifestyle": "stil de viață", "photography": "fotografie", "gaming": "jocuri", "information": "informații", "portfolio": "portofoliu", "media": "media", "events": "evenimente", "smart city": "oraș inteligent", "real estate": "imobiliare", "environment": "mediu", "finance": "finanțe", "government": "guvern", "transport": "transport", "healthcare": "sănătate", "startups": "startup-uri", "maritime": "maritim", "beauty": "frumusețe" },
  bg: { "domain": "домейн", "with": "с", "from": "от", "backlinks": "обратни връзки", "strong": "силни", "art/event": "изкуство/събития", "ticketing": "билетен", "cycling": "велосипеден", "music": "музика", "entertainment": "развлечения", "tourism": "туризъм", "collaboration": "сътрудничество", "research": "изследвания", "sustainability": "устойчивост", "energy": "енергия", "mobility": "мобилност", "digital": "дигитално", "projects": "проекти", "sports": "спортове", "sport": "спорт", "news": "новини", "innovation": "иновации", "food": "храна", "safety": "безопасност", "design": "дизайн", "health": "здраве", "science": "наука", "culture": "култура", "lifestyle": "начин на живот", "photography": "фотография", "gaming": "игри", "information": "информация", "portfolio": "портфолио", "media": "медии", "events": "събития", "smart city": "умен град", "real estate": "имоти", "environment": "околна среда", "finance": "финанси", "government": "управление", "transport": "транспорт", "healthcare": "здравеопазване", "startups": "стартъпи", "maritime": "морско", "beauty": "красота" },
  uk: { "domain": "домен", "with": "з", "from": "від", "backlinks": "зворотні посилання", "strong": "потужні", "art/event": "мистецтва/подій", "ticketing": "квитковий", "cycling": "велоспорт", "music": "музика", "entertainment": "розваги", "tourism": "туризм", "collaboration": "співпраця", "research": "дослідження", "sustainability": "сталість", "energy": "енергетика", "mobility": "мобільність", "digital": "цифрове", "projects": "проєкти", "sports": "спорт", "sport": "спорт", "news": "новини", "innovation": "інновації", "food": "харчування", "safety": "безпека", "design": "дизайн", "health": "здоров'я", "science": "наука", "culture": "культура", "lifestyle": "стиль життя", "photography": "фотографія", "gaming": "ігри", "information": "інформація", "portfolio": "портфоліо", "media": "медіа", "events": "події", "smart city": "розумне місто", "real estate": "нерухомість", "environment": "довкілля", "finance": "фінанси", "government": "влада", "transport": "транспорт", "healthcare": "охорона здоров'я", "startups": "стартапи", "maritime": "морське", "beauty": "краса" }
};

// Translate a description from English to target language
function translateDescription(description: string, lang: LangCode): string {
  const p = descriptionPatterns[lang];
  const w = wordTranslations[lang];
  let result = description;
  
  // Replace full phrase patterns first (longest match first)
  result = result.replace(/domain with strong backlinks from/gi, `${p.domainWith}`);
  result = result.replace(/domain with high linking domains and backlinks from/gi, `${p.domainWith}`);
  result = result.replace(/domain with backlinks from/gi, `${p.domainWith}`);
  
  // Replace "Short and memorable/powerful"
  result = result.replace(/Short and memorable/gi, p.shortMemorable);
  result = result.replace(/Short and powerful/gi, p.shortPowerful);
  
  // Replace "Premium" at start
  result = result.replace(/^Premium\s/i, `${p.premiumDomain} `);
  
  // Replace EU domain patterns
  result = result.replace(/\bEU-FP7 project domain\b/gi, `EU-FP7 ${p.euProjectDomain}`);
  result = result.replace(/\bEU H2020 mobility domain\b/gi, `EU H2020 ${p.euDomain}`);
  result = result.replace(/\bEU project domain\b/gi, p.euProjectDomain);
  result = result.replace(/\bEU domain\b/gi, p.euDomain);
  
  // Replace country adjectives
  result = result.replace(/\bBelgian\b/g, p.belgian);
  result = result.replace(/\bDutch\b/g, p.dutch);
  result = result.replace(/\bGerman\b/g, p.german);
  result = result.replace(/\bFrench\b/g, p.french);
  result = result.replace(/\bBritish\b/g, p.british);
  result = result.replace(/\bAustrian\b/g, p.austrian);
  result = result.replace(/\bHungarian\b/g, p.hungarian);
  result = result.replace(/\bItalian\b/g, p.italian);
  result = result.replace(/\bWelsh\b/g, p.welsh);
  
  // Replace multi-word type descriptors
  result = result.replace(/\bbusiness school\b/gi, p.businessSchool);
  result = result.replace(/\bart\/event\b/gi, p.artEvent);
  
  // Replace single-word English descriptors (case-insensitive, word boundaries)
  const singleWords = ['hotel', 'ticketing', 'cycling', 'network', 'regional', 'center'];
  singleWords.forEach(word => {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    result = result.replace(regex, (p as any)[word] || w[word] || word);
  });
  
  // Replace connector "and" before capitalized words (source names)
  result = result.replace(/ and (?=[A-Z])/g, ` ${p.and} `);
  // Also replace remaining standalone "and"
  result = result.replace(/ and /g, ` ${p.and} `);
  
  // Replace remaining English words that might appear in descriptions
  // "with strong" → translated
  result = result.replace(/\bwith strong\b/gi, `${w['with']} ${p.strong}`);
  result = result.replace(/\bwith high\b/gi, `${w['with']} ${p.high}`);
  
  // Catch remaining "with" followed by non-translated content
  result = result.replace(/\bwith backlinks\b/gi, `${w['with']} ${w['backlinks']}`);
  result = result.replace(/\bwith\b/gi, w['with']);
  result = result.replace(/\bfrom\b/gi, w['from']);
  result = result.replace(/\bstrong\b/gi, p.strong);
  result = result.replace(/\bhigh\b/gi, p.high);
  
  // Replace "linking domains"
  const linkingDomainsTranslations: Record<LangCode, string> = {
    sv: 'länkande domäner', no: 'koblede domener', da: 'linkende domæner', fi: 'linkittävät verkkotunnukset',
    cs: 'odkazující domény', el: 'συνδεδεμένα domains', ru: 'ссылающиеся домены', ro: 'domenii cu legături',
    bg: 'свързващи домейни', uk: 'пов\'язані домени'
  };
  result = result.replace(/\blinking domains\b/gi, linkingDomainsTranslations[lang]);
  
  // Replace "street"
  result = result.replace(/\bstreet\b/gi, '');
  
  return result;
}

// Translate useCases array
const useCaseTranslations: Record<LangCode, Record<string, string>> = {
  sv: {
    "Nature Management & Rewilding NGO": "Naturförvaltning & Återförvilding",
    "Sustainable Agriculture Platform": "Hållbar Jordbruksplattform",
    "Ecotourism & Agritourism": "Ekoturism & Lantbruksturism",
    "Environmental Consultancy Firm": "Miljökonsultföretag",
    "Landscape Architecture Studio": "Landskapsarkitekturstudio",
    "Organic Farm Collective": "Ekologiskt Jordbrukskollektiv",
    "Climate Action Foundation": "Klimatstiftelse",
    "Permaculture Academy": "Permakulturakademi",
    "Forests & Biodiversity Initiative": "Skogs- & Biodiversitetsinitiativ",
    "Regenerative Agriculture Community": "Regenerativt Jordbruksgemenskap",
    "Beauty & Skincare E-commerce": "Skönhet & Hudvård E-handel",
    "Cosmetics Review Blog": "Kosmetikarecensionsblogg",
    "Make-up Artist Portfolio": "Makeupartistportfölj",
    "Natural Cosmetics Brand": "Naturligt Kosmetikamärke",
    "Beauty Influencer Platform": "Skönhetsinfluencerplattform",
    "Beauty Salon Chain": "Skönhetssalongkedja",
    "K-Beauty & J-Beauty Import": "K-Beauty & J-Beauty Import",
    "Vegan Cosmetics Webshop": "Vegansk Kosmetikawebbshop",
    "Beauty Box Subscription Service": "Skönhetsbox Prenumerationstjänst",
    "Cosmetics Ingredients Database": "Kosmetikaingredienserdatabas"
  },
  no: {
    "Nature Management & Rewilding NGO": "Naturforvaltning & Rewilding",
    "Sustainable Agriculture Platform": "Bærekraftig Jordbruksplattform",
    "Beauty & Skincare E-commerce": "Skjønnhet & Hudpleie Nettbutikk",
    "Cosmetics Review Blog": "Kosmetikkanmelderblogg",
    "Make-up Artist Portfolio": "Sminkekunstnerportefølje",
    "Natural Cosmetics Brand": "Naturlig Kosmetikkmerke",
    "Beauty Influencer Platform": "Skjønnhetsinfluencerplattform",
    "Beauty Salon Chain": "Skjønnhetssalongkjede",
    "Vegan Cosmetics Webshop": "Vegansk Kosmetikknettbutikk",
    "Beauty Box Subscription Service": "Skjønnhetsboks Abonnementstjeneste",
    "Cosmetics Ingredients Database": "Kosmetikkingredienserdatabase"
  },
  da: {
    "Nature Management & Rewilding NGO": "Naturforvaltning & Rewilding",
    "Sustainable Agriculture Platform": "Bæredygtig Landbrugsplatform",
    "Beauty & Skincare E-commerce": "Skønhed & Hudpleje E-handel",
    "Cosmetics Review Blog": "Kosmetikanmeldelsesblog",
    "Natural Cosmetics Brand": "Naturligt Kosmetikmærke",
    "Beauty Influencer Platform": "Skønhedsinfluencerplatform",
    "Vegan Cosmetics Webshop": "Vegansk Kosmetikwebshop",
    "Beauty Box Subscription Service": "Skønhedsboks Abonnementstjeneste",
    "Cosmetics Ingredients Database": "Kosmetikingrediensdatabase"
  },
  fi: {
    "Nature Management & Rewilding NGO": "Luonnonhoito & Villinnyttäminen",
    "Sustainable Agriculture Platform": "Kestävä Maatalousalusta",
    "Beauty & Skincare E-commerce": "Kauneus & Ihonhoito Verkkokauppa",
    "Natural Cosmetics Brand": "Luonnonkosmetiikkabrändi",
    "Vegan Cosmetics Webshop": "Vegaaninen Kosmetiikkaverkkokauppa",
    "Beauty Box Subscription Service": "Kauneuslaatikon Tilauspalvelu",
    "Cosmetics Ingredients Database": "Kosmetiikka-ainesosatietokanta"
  },
  cs: {
    "Nature Management & Rewilding NGO": "Správa Přírody & Rewilding",
    "Sustainable Agriculture Platform": "Platforma Udržitelného Zemědělství",
    "Beauty & Skincare E-commerce": "Krása & Péče o Pleť E-shop",
    "Natural Cosmetics Brand": "Značka Přírodní Kosmetiky",
    "Vegan Cosmetics Webshop": "Vegánský Kosmetický E-shop",
    "Beauty Box Subscription Service": "Kosmetický Box Předplatné",
    "Cosmetics Ingredients Database": "Databáze Kosmetických Ingrediencí"
  },
  el: {
    "Beauty & Skincare E-commerce": "Ομορφιά & Περιποίηση Δέρματος E-shop",
    "Natural Cosmetics Brand": "Φυσικά Καλλυντικά Μάρκα",
    "Vegan Cosmetics Webshop": "Vegan Καλλυντικά E-shop"
  },
  ru: {
    "Nature Management & Rewilding NGO": "Управление Природой & Ревайлдинг",
    "Sustainable Agriculture Platform": "Платформа Устойчивого Сельского Хозяйства",
    "Beauty & Skincare E-commerce": "Красота & Уход за Кожей Онлайн-магазин",
    "Natural Cosmetics Brand": "Бренд Натуральной Косметики",
    "Vegan Cosmetics Webshop": "Веганский Косметический Магазин",
    "Beauty Box Subscription Service": "Бьюти-бокс Подписка",
    "Cosmetics Ingredients Database": "База Данных Ингредиентов Косметики"
  },
  ro: {
    "Beauty & Skincare E-commerce": "Frumusețe & Îngrijire E-commerce",
    "Natural Cosmetics Brand": "Brand Cosmetice Naturale",
    "Vegan Cosmetics Webshop": "Magazin Online Cosmetice Vegane"
  },
  bg: {
    "Beauty & Skincare E-commerce": "Красота & Грижа за Кожата Онлайн Магазин",
    "Natural Cosmetics Brand": "Марка за Натурална Козметика",
    "Vegan Cosmetics Webshop": "Веган Козметичен Магазин"
  },
  uk: {
    "Beauty & Skincare E-commerce": "Краса & Догляд за Шкірою Інтернет-магазин",
    "Natural Cosmetics Brand": "Бренд Натуральної Косметики",
    "Vegan Cosmetics Webshop": "Веганський Косметичний Магазин"
  }
};

// Main export: get translated domains for a given language
export function getTranslatedDomains<T extends { name: string; description: string; category: string; useCases?: string[] }>(
  domains: T[],
  lang: LangCode
): T[] {
  const cats = categoryTranslations[lang];
  const ucTranslations = useCaseTranslations[lang] || {};
  
  return domains.map(domain => ({
    ...domain,
    description: translateDescription(domain.description, lang),
    category: cats[domain.category] || domain.category,
    useCases: domain.useCases?.map(uc => ucTranslations[uc] || uc)
  }));
}

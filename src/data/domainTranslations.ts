// Domain category and description translations for all 14 languages
// Categories are translated, descriptions use a pattern-based translation system

type LangCode = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl';

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
    "Beauty": "Skönhet", "Agriculture": "Jordbruk"
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
    "Beauty": "Skjønnhet", "Agriculture": "Jordbruk"
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
    "Beauty": "Skønhed", "Agriculture": "Landbrug"
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
    "Beauty": "Kauneus", "Agriculture": "Maatalous"
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
    "Beauty": "Krása", "Agriculture": "Zemědělství"
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
    "Beauty": "Ομορφιά", "Agriculture": "Γεωργία"
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
    "Beauty": "Красота", "Agriculture": "Сельское хозяйство"
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
    "Beauty": "Frumusețe", "Agriculture": "Agricultură"
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
    "Beauty": "Красота", "Agriculture": "Земеделие"
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
    "Beauty": "Краса", "Agriculture": "Сільське господарство"
  },
  hr: {
    "Education": "Obrazovanje", "Hospitality": "Ugostiteljstvo", "Art": "Umjetnost", "General": "Općenito",
    "Entertainment": "Zabava", "Art/Culture": "Umjetnost/Kultura", "Music": "Glazba", "International": "Međunarodno",
    "Technology": "Tehnologija", "Sport": "Sport", "News": "Vijesti", "Business": "Poslovanje", "Tourism": "Turizam",
    "Research": "Istraživanje", "Collaboration": "Suradnja", "Transport": "Prijevoz", "Projects": "Projekti",
    "Digital": "Digitalno", "Sustainability": "Održivost", "Energy": "Energija", "Food": "Hrana", "Safety": "Sigurnost",
    "Real Estate": "Nekretnine", "Music/Audio": "Glazba/Audio", "Design": "Dizajn", "Mobility": "Mobilnost",
    "Network": "Mreža", "Environment": "Okoliš", "Startups": "Startupovi", "Finance": "Financije",
    "Language/Culture": "Jezik/Kultura", "Sport/Events": "Sport/Događanja", "Healthcare": "Zdravstvo",
    "Art/Design": "Umjetnost/Dizajn", "Events": "Događanja", "Science": "Znanost", "Health": "Zdravlje",
    "Media": "Mediji", "Government/Culture": "Vlada/Kultura", "Portfolio": "Portfolio", "Government": "Vlada",
    "Culture": "Kultura", "Innovation": "Inovacije", "Lifestyle": "Životni stil", "Photography": "Fotografija",
    "Maritime": "Pomorstvo", "Gaming": "Igre", "Sports": "Sportovi", "Smart City": "Pametni Grad",
    "Information": "Informacije", "Art/Heritage": "Umjetnost/Baština", "Design/Hospitality": "Dizajn/Ugostiteljstvo",
    "Beauty": "Ljepota", "Agriculture": "Poljoprivreda"
  },
  sk: {
    "Education": "Vzdelávanie", "Hospitality": "Pohostinstvo", "Art": "Umenie", "General": "Všeobecné",
    "Entertainment": "Zábava", "Art/Culture": "Umenie/Kultúra", "Music": "Hudba", "International": "Medzinárodné",
    "Technology": "Technológia", "Sport": "Šport", "News": "Správy", "Business": "Podnikanie", "Tourism": "Cestovný ruch",
    "Research": "Výskum", "Collaboration": "Spolupráca", "Transport": "Doprava", "Projects": "Projekty",
    "Digital": "Digitálne", "Sustainability": "Udržateľnosť", "Energy": "Energia", "Food": "Gastronómia", "Safety": "Bezpečnosť",
    "Real Estate": "Nehnuteľnosti", "Music/Audio": "Hudba/Audio", "Design": "Dizajn", "Mobility": "Mobilita",
    "Network": "Sieť", "Environment": "Životné prostredie", "Startups": "Startupy", "Finance": "Financie",
    "Language/Culture": "Jazyk/Kultúra", "Sport/Events": "Šport/Podujatia", "Healthcare": "Zdravotníctvo",
    "Art/Design": "Umenie/Dizajn", "Events": "Podujatia", "Science": "Veda", "Health": "Zdravie",
    "Media": "Médiá", "Government/Culture": "Vláda/Kultúra", "Portfolio": "Portfólio", "Government": "Vláda",
    "Culture": "Kultúra", "Innovation": "Inovácie", "Lifestyle": "Životný štýl", "Photography": "Fotografia",
    "Maritime": "Námorníctvo", "Gaming": "Hry", "Sports": "Športy", "Smart City": "Inteligentné mesto",
    "Information": "Informácie", "Art/Heritage": "Umenie/Dedičstvo", "Design/Hospitality": "Dizajn/Pohostinstvo",
    "Beauty": "Krása", "Agriculture": "Poľnohospodárstvo"
  },
  sr: {
    "Education": "Образовање", "Hospitality": "Угоститељство", "Art": "Уметност", "General": "Опште",
    "Entertainment": "Забава", "Art/Culture": "Уметност/Култура", "Music": "Музика", "International": "Међународно",
    "Technology": "Технологија", "Sport": "Спорт", "News": "Вести", "Business": "Пословање", "Tourism": "Туризам",
    "Research": "Истраживање", "Collaboration": "Сарадња", "Transport": "Превоз", "Projects": "Пројекти",
    "Digital": "Дигитално", "Sustainability": "Одрживост", "Energy": "Енергија", "Food": "Храна", "Safety": "Безбедност",
    "Real Estate": "Некретнине", "Music/Audio": "Музика/Аудио", "Design": "Дизајн", "Mobility": "Мобилност",
    "Network": "Мрежа", "Environment": "Животна средина", "Startups": "Стартапови", "Finance": "Финансије",
    "Language/Culture": "Језик/Култура", "Sport/Events": "Спорт/Догађаји", "Healthcare": "Здравство",
    "Art/Design": "Уметност/Дизајн", "Events": "Догађаји", "Science": "Наука", "Health": "Здравље",
    "Media": "Медији", "Government/Culture": "Влада/Култура", "Portfolio": "Портфолио", "Government": "Влада",
    "Culture": "Култура", "Innovation": "Иновације", "Lifestyle": "Животни стил", "Photography": "Фотографија",
    "Maritime": "Поморство", "Gaming": "Игре", "Sports": "Спортови", "Smart City": "Паметни Град",
    "Information": "Информације", "Art/Heritage": "Уметност/Наслеђе", "Design/Hospitality": "Дизајн/Угоститељство",
    "Beauty": "Лепота", "Agriculture": "Пољопривреда"
  },
  sl: {
    "Education": "Izobraževanje", "Hospitality": "Gostinstvo", "Art": "Umetnost", "General": "Splošno",
    "Entertainment": "Zabava", "Art/Culture": "Umetnost/Kultura", "Music": "Glasba", "International": "Mednarodno",
    "Technology": "Tehnologija", "Sport": "Šport", "News": "Novice", "Business": "Poslovanje", "Tourism": "Turizem",
    "Research": "Raziskave", "Collaboration": "Sodelovanje", "Transport": "Prevoz", "Projects": "Projekti",
    "Digital": "Digitalno", "Sustainability": "Trajnost", "Energy": "Energija", "Food": "Hrana", "Safety": "Varnost",
    "Real Estate": "Nepremičnine", "Music/Audio": "Glasba/Zvok", "Design": "Oblikovanje", "Mobility": "Mobilnost",
    "Network": "Omrežje", "Environment": "Okolje", "Startups": "Zagonska podjetja", "Finance": "Finance",
    "Language/Culture": "Jezik/Kultura", "Sport/Events": "Šport/Dogodki", "Healthcare": "Zdravstvo",
    "Art/Design": "Umetnost/Oblikovanje", "Events": "Dogodki", "Science": "Znanost", "Health": "Zdravje",
    "Media": "Mediji", "Government/Culture": "Vlada/Kultura", "Portfolio": "Portfolio", "Government": "Vlada",
    "Culture": "Kultura", "Innovation": "Inovacije", "Lifestyle": "Življenjski slog", "Photography": "Fotografija",
    "Maritime": "Pomorstvo", "Gaming": "Igre", "Sports": "Športi", "Smart City": "Pametno Mesto",
    "Information": "Informacije", "Art/Heritage": "Umetnost/Dediščina", "Design/Hospitality": "Oblikovanje/Gostinstvo",
    "Beauty": "Lepota", "Agriculture": "Kmetijstvo"
  }
};

// Comprehensive phrase-level translations for descriptions
// These replace multi-word English phrases before single-word replacements
const phraseTranslations: Record<LangCode, Record<string, string>> = {
  sv: {
    "Premium business school domain with backlinks from": "Premium handelshögskoledomän med bakåtlänkar från",
    "Premium Austrian hotel domain with backlinks from": "Premium österrikiskt hotelldomän med bakåtlänkar från",
    "Belgian art/event domain with backlinks from": "Belgisk konst-/evenemangsdomän med bakåtlänkar från",
    "Short and memorable EU domain with backlinks from": "Kort och minnesvärd EU-domän med bakåtlänkar från",
    "Short and powerful Belgian domain with backlinks from": "Kort och kraftfull belgisk domän med bakåtlänkar från",
    "Short and powerful EU domain with backlinks from": "Kort och kraftfull EU-domän med bakåtlänkar från",
    "Belgian ticketing domain with backlinks from": "Belgisk biljettdomän med bakåtlänkar från",
    "Art domain with backlinks from": "Konstdomän med bakåtlänkar från",
    "Music domain with backlinks from": "Musikdomän med bakåtlänkar från",
    "EU-Asia domain with backlinks from": "EU-Asien-domän med bakåtlänkar från",
    "Premium space domain with backlinks from": "Premium rymddomän med bakåtlänkar från",
    "Cycling domain with backlinks from": "Cykeldomän med bakåtlänkar från",
    "German news/religious domain with backlinks from": "Tysk nyhets-/religionsdomän med bakåtlänkar från",
    "German business domain with strong commercial authority and backlinks from": "Tysk affärsdomän med stark kommersiell auktoritet och bakåtlänkar från",
    "French/European regional domain with backlinks from": "Fransk/europeisk regional domän med bakåtlänkar från",
    "Research domain with backlinks from": "Forskningsdomän med bakåtlänkar från",
    "French domain with backlinks from": "Fransk domän med bakåtlänkar från",
    "Educational EU domain with backlinks from": "Utbildnings-EU-domän med bakåtlänkar från",
    "Transport and logistics EU domain with backlinks from": "Transport- och logistik-EU-domän med bakåtlänkar från",
    "European project domain with backlinks from": "Europeiskt projektdomän med bakåtlänkar från",
    "European research project domain with backlinks from": "Europeiskt forskningsprojektdomän med bakåtlänkar från",
    "EU project domain with backlinks from": "EU-projektdomän med bakåtlänkar från",
    "Belgian entertainment/media domain with backlinks from": "Belgisk underhållnings-/mediedomän med bakåtlänkar från",
    "Dutch network domain with backlinks from": "Nederländsk nätverksdomän med bakåtlänkar från",
    "Digital transformation EU domain with backlinks from": "Digital transformations-EU-domän med bakåtlänkar från",
    "EU land management/sustainability domain with backlinks from": "EU markförvaltnings-/hållbarhetsdomän med bakåtlänkar från",
    "EU domain with backlinks from": "EU-domän med bakåtlänkar från",
    "Beauty and cosmetics domain with backlinks from": "Skönhets- och kosmetikdomän med bakåtlänkar från",
    "Historical/cultural EU domain with backlinks from": "Historisk/kulturell EU-domän med bakåtlänkar från",
    "Energy and infrastructure EU domain with backlinks from": "Energi- och infrastruktur-EU-domän med bakåtlänkar från",
    "HVAC and climate technology EU domain with backlinks from": "VVS- och klimatteknik-EU-domän med bakåtlänkar från",
    "EU catering/event domain with backlinks from": "EU catering-/evenemangsdomän med bakåtlänkar från",
    "Safety and emergency planning EU domain with backlinks from": "Säkerhets- och nödplaneringsdomän med bakåtlänkar från",
    "Sustainability domain with backlinks from": "Hållbarhetsdomän med bakåtlänkar från",
    "British real estate/hospitality domain with backlinks from": "Brittisk fastighets-/hotelldomän med bakåtlänkar från",
    "Educational EU study domain with backlinks from": "Utbildnings-EU-studiedomän med bakåtlänkar från",
    "Music production domain with backlinks from": "Musikproduktionsdomän med bakåtlänkar från",
    "Energy awareness EU project domain with backlinks from": "EU-energimedvetenhetsdomän med bakåtlänkar från",
    "Telecom/media domain with backlinks from": "Telekom-/mediedomän med bakåtlänkar från",
    "Financial innovation EU regional domain with backlinks from": "Finansiell innovations-EU-domän med bakåtlänkar från",
    "Design and innovation project domain with backlinks from": "Design- och innovationsprojektdomän med bakåtlänkar från",
    "EU mobility/parking domain with backlinks from": "EU mobilitets-/parkeringsdomän med bakåtlänkar från",
    "EU network domain with backlinks from": "EU-nätverksdomän med bakåtlänkar från",
    "EU domain with high linking domains and backlinks from": "EU-domän med många länkande domäner och bakåtlänkar från",
    "Italian entertainment domain with backlinks from": "Italiensk underhållningsdomän med bakåtlänkar från",
    "EU sustainability domain with backlinks from": "EU-hållbarhetsdomän med bakåtlänkar från",
    "Sustainable agriculture EU project domain with backlinks from": "EU-hållbart jordbruksprojektdomän med bakåtlänkar från",
    "Greek language/culture domain with strong backlinks from": "Grekisk språk-/kulturdomän med starka bakåtlänkar från",
    "Hungarian cycling/expo domain with strong backlinks from": "Ungersk cykel-/mässdomän med starka bakåtlänkar från",
    "Care and mobility EU project domain with backlinks from": "Vård- och mobilitets-EU-projektdomän med bakåtlänkar från",
    "Creative UK domain with backlinks from": "Kreativ brittisk domän med bakåtlänkar från",
    "Belgian center domain with backlinks from": "Belgisk centerdomän med bakåtlänkar från",
    "Belgian event domain with backlinks from": "Belgisk evenemangsdomän med bakåtlänkar från",
    "Education/youth project domain with backlinks from": "Utbildnings-/ungdomsprojektdomän med bakåtlänkar från",
    "Dutch domain with backlinks from": "Nederländsk domän med bakåtlänkar från",
    "International mobility/transport domain with backlinks from": "Internationell mobilitets-/transportdomän med bakåtlänkar från",
    "Digital archive EU project domain with backlinks from": "Digitalt arkiv-EU-projektdomän med bakåtlänkar från",
    "Baltic region EU cooperation domain with backlinks from": "Baltisk EU-samarbetsdomän med bakåtlänkar från",
    "and other Hungarian media websites": "och andra ungerska mediewebbplatser",
    "and Italian universities": "och italienska universitet",
    "and Spanish universities": "och spanska universitet",
    "and universities": "och universitet",
    "Polish government": "polska regeringen",
    "French government": "franska regeringen",
    "Council of Europe": "Europarådet",
    "other": "andra"
  },
  no: {
    "Premium business school domain with backlinks from": "Premium handelshøyskoledomene med tilbakekoblinger fra",
    "Premium Austrian hotel domain with backlinks from": "Premium østerriksk hotelldomene med tilbakekoblinger fra",
    "Belgian art/event domain with backlinks from": "Belgisk kunst-/arrangementsdomene med tilbakekoblinger fra",
    "Short and memorable EU domain with backlinks from": "Kort og minneverdig EU-domene med tilbakekoblinger fra",
    "Short and powerful Belgian domain with backlinks from": "Kort og kraftfullt belgisk domene med tilbakekoblinger fra",
    "Short and powerful EU domain with backlinks from": "Kort og kraftfullt EU-domene med tilbakekoblinger fra",
    "Belgian ticketing domain with backlinks from": "Belgisk billettdomene med tilbakekoblinger fra",
    "Art domain with backlinks from": "Kunstdomene med tilbakekoblinger fra",
    "Music domain with backlinks from": "Musikkdomene med tilbakekoblinger fra",
    "EU-Asia domain with backlinks from": "EU-Asia-domene med tilbakekoblinger fra",
    "Premium space domain with backlinks from": "Premium romfartsdomene med tilbakekoblinger fra",
    "Cycling domain with backlinks from": "Sykkeldomene med tilbakekoblinger fra",
    "German news/religious domain with backlinks from": "Tysk nyhets-/religionsdomene med tilbakekoblinger fra",
    "German business domain with strong commercial authority and backlinks from": "Tysk forretningsdomene med sterk kommersiell autoritet og tilbakekoblinger fra",
    "French/European regional domain with backlinks from": "Fransk/europeisk regionalt domene med tilbakekoblinger fra",
    "Research domain with backlinks from": "Forskningsdomene med tilbakekoblinger fra",
    "French domain with backlinks from": "Fransk domene med tilbakekoblinger fra",
    "Educational EU domain with backlinks from": "Utdannings-EU-domene med tilbakekoblinger fra",
    "Transport and logistics EU domain with backlinks from": "Transport- og logistikk-EU-domene med tilbakekoblinger fra",
    "European project domain with backlinks from": "Europeisk prosjektdomene med tilbakekoblinger fra",
    "European research project domain with backlinks from": "Europeisk forskningsprosjektdomene med tilbakekoblinger fra",
    "EU project domain with backlinks from": "EU-prosjektdomene med tilbakekoblinger fra",
    "Belgian entertainment/media domain with backlinks from": "Belgisk underholdnings-/mediedomene med tilbakekoblinger fra",
    "Dutch network domain with backlinks from": "Nederlandsk nettverksdomene med tilbakekoblinger fra",
    "Digital transformation EU domain with backlinks from": "Digital transformasjons-EU-domene med tilbakekoblinger fra",
    "EU land management/sustainability domain with backlinks from": "EU arealforvaltnings-/bærekraftdomene med tilbakekoblinger fra",
    "EU domain with backlinks from": "EU-domene med tilbakekoblinger fra",
    "Beauty and cosmetics domain with backlinks from": "Skjønnhets- og kosmetikkdomene med tilbakekoblinger fra",
    "Historical/cultural EU domain with backlinks from": "Historisk/kulturelt EU-domene med tilbakekoblinger fra",
    "Energy and infrastructure EU domain with backlinks from": "Energi- og infrastruktur-EU-domene med tilbakekoblinger fra",
    "HVAC and climate technology EU domain with backlinks from": "VVS- og klimateknologi-EU-domene med tilbakekoblinger fra",
    "EU catering/event domain with backlinks from": "EU catering-/arrangementsdomene med tilbakekoblinger fra",
    "Safety and emergency planning EU domain with backlinks from": "Sikkerhets- og beredskapsdomene med tilbakekoblinger fra",
    "Sustainability domain with backlinks from": "Bærekraftdomene med tilbakekoblinger fra",
    "British real estate/hospitality domain with backlinks from": "Britisk eiendoms-/gjestfrihetdomene med tilbakekoblinger fra",
    "Educational EU study domain with backlinks from": "Utdannings-EU-studiedomene med tilbakekoblinger fra",
    "Music production domain with backlinks from": "Musikkproduksjonsdomene med tilbakekoblinger fra",
    "Energy awareness EU project domain with backlinks from": "EU-energibevissthetsdomene med tilbakekoblinger fra",
    "Telecom/media domain with backlinks from": "Telekom-/mediedomene med tilbakekoblinger fra",
    "Financial innovation EU regional domain with backlinks from": "Finansiell innovasjons-EU-domene med tilbakekoblinger fra",
    "Design and innovation project domain with backlinks from": "Design- og innovasjonsprosjektdomene med tilbakekoblinger fra",
    "EU mobility/parking domain with backlinks from": "EU mobilitets-/parkeringsdomene med tilbakekoblinger fra",
    "EU network domain with backlinks from": "EU-nettverksdomene med tilbakekoblinger fra",
    "EU domain with high linking domains and backlinks from": "EU-domene med mange koblede domener og tilbakekoblinger fra",
    "Italian entertainment domain with backlinks from": "Italiensk underholdningsdomene med tilbakekoblinger fra",
    "EU sustainability domain with backlinks from": "EU-bærekraftdomene med tilbakekoblinger fra",
    "Sustainable agriculture EU project domain with backlinks from": "EU-bærekraftig jordbruksprosjektdomene med tilbakekoblinger fra",
    "Greek language/culture domain with strong backlinks from": "Gresk språk-/kulturdomene med sterke tilbakekoblinger fra",
    "Hungarian cycling/expo domain with strong backlinks from": "Ungarsk sykkel-/messedomene med sterke tilbakekoblinger fra",
    "Care and mobility EU project domain with backlinks from": "Omsorg- og mobilitets-EU-prosjektdomene med tilbakekoblinger fra",
    "Creative UK domain with backlinks from": "Kreativt britisk domene med tilbakekoblinger fra",
    "Belgian center domain with backlinks from": "Belgisk senterdomene med tilbakekoblinger fra",
    "Belgian event domain with backlinks from": "Belgisk arrangementsdomene med tilbakekoblinger fra",
    "Education/youth project domain with backlinks from": "Utdannings-/ungdomsprosjektdomene med tilbakekoblinger fra",
    "Dutch domain with backlinks from": "Nederlandsk domene med tilbakekoblinger fra",
    "International mobility/transport domain with backlinks from": "Internasjonalt mobilitets-/transportdomene med tilbakekoblinger fra",
    "Digital archive EU project domain with backlinks from": "Digitalt arkiv-EU-prosjektdomene med tilbakekoblinger fra",
    "Baltic region EU cooperation domain with backlinks from": "Baltisk EU-samarbeidsdomene med tilbakekoblinger fra",
    "and other Hungarian media websites": "og andre ungarske mediesider",
    "and Italian universities": "og italienske universiteter",
    "and Spanish universities": "og spanske universiteter",
    "and universities": "og universiteter",
    "Polish government": "polske myndigheter",
    "French government": "franske myndigheter",
    "Council of Europe": "Europarådet",
    "other": "andre"
  },
  da: {
    "Premium business school domain with backlinks from": "Premium handelsskoledomæne med backlinks fra",
    "Premium Austrian hotel domain with backlinks from": "Premium østrigsk hoteldomæne med backlinks fra",
    "Belgian art/event domain with backlinks from": "Belgisk kunst-/begivenhedsdomæne med backlinks fra",
    "Short and memorable EU domain with backlinks from": "Kort og mindeværdigt EU-domæne med backlinks fra",
    "Short and powerful Belgian domain with backlinks from": "Kort og kraftfuldt belgisk domæne med backlinks fra",
    "Short and powerful EU domain with backlinks from": "Kort og kraftfuldt EU-domæne med backlinks fra",
    "domain with backlinks from": "domæne med backlinks fra",
    "domain with strong backlinks from": "domæne med stærke backlinks fra",
    "domain with high linking domains and backlinks from": "domæne med mange linkende domæner og backlinks fra",
    "and other Hungarian media websites": "og andre ungarske mediewebsteder",
    "and Italian universities": "og italienske universiteter",
    "and Spanish universities": "og spanske universiteter",
    "and universities": "og universiteter",
    "Polish government": "polske myndigheder",
    "French government": "franske myndigheder",
    "Council of Europe": "Europarådet"
  },
  fi: {
    "domain with backlinks from": "verkkotunnus takalinkeillä sivustoilta",
    "domain with strong backlinks from": "verkkotunnus vahvoilla takalinkeillä sivustoilta",
    "domain with high linking domains and backlinks from": "verkkotunnus monilla linkittävillä verkkotunnuksilla ja takalinkeillä sivustoilta",
    "and other Hungarian media websites": "ja muilta unkarilaisilta mediasivustoilta",
    "and Italian universities": "ja italialaisilta yliopistoilta",
    "and Spanish universities": "ja espanjalaisilta yliopistoilta",
    "and universities": "ja yliopistoilta",
    "Polish government": "Puolan hallitus",
    "French government": "Ranskan hallitus",
    "Council of Europe": "Euroopan neuvosto"
  },
  cs: {
    "domain with backlinks from": "doména se zpětnými odkazy z",
    "domain with strong backlinks from": "doména se silnými zpětnými odkazy z",
    "domain with high linking domains and backlinks from": "doména s mnoha odkazujícími doménami a zpětnými odkazy z",
    "and other Hungarian media websites": "a dalších maďarských mediálních webů",
    "and Italian universities": "a italských univerzit",
    "and Spanish universities": "a španělských univerzit",
    "and universities": "a univerzit",
    "Polish government": "polská vláda",
    "French government": "francouzská vláda",
    "Council of Europe": "Rada Evropy"
  },
  el: {
    "domain with backlinks from": "domain με backlinks από",
    "domain with strong backlinks from": "domain με ισχυρά backlinks από",
    "domain with high linking domains and backlinks from": "domain με πολλά συνδεδεμένα domains και backlinks από",
    "and other Hungarian media websites": "και άλλα ουγγρικά ιστοτόπια μέσων",
    "and Italian universities": "και ιταλικά πανεπιστήμια",
    "and Spanish universities": "και ισπανικά πανεπιστήμια",
    "and universities": "και πανεπιστήμια",
    "Polish government": "πολωνική κυβέρνηση",
    "French government": "γαλλική κυβέρνηση",
    "Council of Europe": "Συμβούλιο της Ευρώπης"
  },
  ru: {
    "domain with backlinks from": "домен с обратными ссылками от",
    "domain with strong backlinks from": "домен с сильными обратными ссылками от",
    "domain with high linking domains and backlinks from": "домен с множеством ссылающихся доменов и обратными ссылками от",
    "and other Hungarian media websites": "и других венгерских медиа-сайтов",
    "and Italian universities": "и итальянских университетов",
    "and Spanish universities": "и испанских университетов",
    "and universities": "и университетов",
    "Polish government": "правительство Польши",
    "French government": "правительство Франции",
    "Council of Europe": "Совет Европы"
  },
  ro: {
    "domain with backlinks from": "domeniu cu backlink-uri de la",
    "domain with strong backlinks from": "domeniu cu backlink-uri puternice de la",
    "domain with high linking domains and backlinks from": "domeniu cu multe domenii cu legături și backlink-uri de la",
    "and other Hungarian media websites": "și alte site-uri media ungare",
    "and Italian universities": "și universități italiene",
    "and Spanish universities": "și universități spaniole",
    "and universities": "și universități",
    "Polish government": "guvernul polonez",
    "French government": "guvernul francez",
    "Council of Europe": "Consiliul Europei"
  },
  bg: {
    "domain with backlinks from": "домейн с обратни връзки от",
    "domain with strong backlinks from": "домейн със силни обратни връзки от",
    "domain with high linking domains and backlinks from": "домейн с много свързващи домейни и обратни връзки от",
    "and other Hungarian media websites": "и други унгарски медийни сайтове",
    "and Italian universities": "и италиански университети",
    "and Spanish universities": "и испански университети",
    "and universities": "и университети",
    "Polish government": "полско правителство",
    "French government": "френско правителство",
    "Council of Europe": "Съвет на Европа"
  },
  uk: {
    "domain with backlinks from": "домен зі зворотними посиланнями від",
    "domain with strong backlinks from": "домен з потужними зворотними посиланнями від",
    "domain with high linking domains and backlinks from": "домен з багатьма пов'язаними доменами та зворотними посиланнями від",
    "and other Hungarian media websites": "та інших угорських медіа-сайтів",
    "and Italian universities": "та італійських університетів",
    "and Spanish universities": "та іспанських університетів",
    "and universities": "та університетів",
    "Polish government": "уряд Польщі",
    "French government": "уряд Франції",
    "Council of Europe": "Рада Європи"
  },
  hr: {
    "domain with backlinks from": "domena s povratnim poveznicama od",
    "domain with strong backlinks from": "domena s jakim povratnim poveznicama od",
    "domain with high linking domains and backlinks from": "domena s mnogim povezujućim domenama i povratnim poveznicama od",
    "and other Hungarian media websites": "i drugih mađarskih medijskih stranica",
    "and Italian universities": "i talijanskih sveučilišta",
    "and Spanish universities": "i španjolskih sveučilišta",
    "and universities": "i sveučilišta",
    "Polish government": "poljska vlada",
    "French government": "francuska vlada",
    "Council of Europe": "Vijeće Europe"
  },
  sk: {
    "domain with backlinks from": "doména so spätnými odkazmi z",
    "domain with strong backlinks from": "doména so silnými spätnými odkazmi z",
    "domain with high linking domains and backlinks from": "doména s mnohými odkazujúcimi doménami a spätnými odkazmi z",
    "and other Hungarian media websites": "a ďalších maďarských mediálnych webov",
    "and Italian universities": "a talianskych univerzít",
    "and Spanish universities": "a španielskych univerzít",
    "and universities": "a univerzít",
    "Polish government": "poľská vláda",
    "French government": "francúzska vláda",
    "Council of Europe": "Rada Európy"
  },
  sr: {
    "domain with backlinks from": "домен са повратним везама од",
    "domain with strong backlinks from": "домен са јаким повратним везама од",
    "domain with high linking domains and backlinks from": "домен са многим повезујућим доменима и повратним везама од",
    "and other Hungarian media websites": "и других мађарских медијских сајтова",
    "and Italian universities": "и италијанских универзитета",
    "and Spanish universities": "и шпанских универзитета",
    "and universities": "и универзитета",
    "Polish government": "пољска влада",
    "French government": "француска влада",
    "Council of Europe": "Савет Европе"
  },
  sl: {
    "domain with backlinks from": "domena s povratnimi povezavami od",
    "domain with strong backlinks from": "domena z močnimi povratnimi povezavami od",
    "domain with high linking domains and backlinks from": "domena z mnogimi povezujočimi domenami in povratnimi povezavami od",
    "and other Hungarian media websites": "in drugih madžarskih medijskih spletnih mest",
    "and Italian universities": "in italijanskih univerz",
    "and Spanish universities": "in španskih univerz",
    "and universities": "in univerz",
    "Polish government": "poljska vlada",
    "French government": "francoska vlada",
    "Council of Europe": "Svet Evrope"
  }
};

// Single-word and adjective translations
const wordMap: Record<LangCode, Record<string, string>> = {
  sv: { "Premium": "Premium", "Short": "Kort", "and": "och", "memorable": "minnesvärd", "powerful": "kraftfull", "Belgian": "Belgisk", "Dutch": "Nederländsk", "German": "Tysk", "French": "Fransk", "British": "Brittisk", "Austrian": "Österrikisk", "Hungarian": "Ungersk", "Italian": "Italiensk", "Welsh": "Walesisk", "Greek": "Grekisk", "Creative": "Kreativ", "Educational": "Utbildnings", "Historical": "Historisk", "cultural": "kulturell", "Sustainable": "Hållbart", "Digital": "Digital", "Financial": "Finansiell", "International": "Internationell", "space": "rymd", "business": "affärs", "school": "skola", "hotel": "hotell", "art": "konst", "event": "evenemang", "ticketing": "biljett", "cycling": "cykel", "network": "nätverk", "regional": "regional", "center": "center", "news": "nyhets", "religious": "religions", "commercial": "kommersiell", "authority": "auktoritet", "strong": "starka", "high": "hög", "transport": "transport", "logistics": "logistik", "research": "forskning", "project": "projekt", "entertainment": "underhållning", "media": "medie", "transformation": "transformation", "land": "mark", "management": "förvaltning", "sustainability": "hållbarhet", "cosmetics": "kosmetik", "infrastructure": "infrastruktur", "climate": "klimat", "technology": "teknik", "catering": "catering", "safety": "säkerhet", "emergency": "nöd", "planning": "planering", "production": "produktion", "awareness": "medvetenhet", "innovation": "innovation", "mobility": "mobilitet", "parking": "parkering", "archive": "arkiv", "cooperation": "samarbete", "Baltic": "Baltisk", "region": "region", "agriculture": "jordbruk", "youth": "ungdom", "study": "studie", "care": "vård", "energy": "energi", "linking": "länkande", "domains": "domäner", "from": "från", "with": "med", "other": "andra" },
  no: { "Premium": "Premium", "Short": "Kort", "and": "og", "memorable": "minneverdig", "powerful": "kraftfull", "Belgian": "Belgisk", "Dutch": "Nederlandsk", "German": "Tysk", "French": "Fransk", "British": "Britisk", "Austrian": "Østerriksk", "Hungarian": "Ungarsk", "Italian": "Italiensk", "Welsh": "Walisisk", "Greek": "Gresk", "Creative": "Kreativt", "Educational": "Utdannings", "Historical": "Historisk", "cultural": "kulturelt", "from": "fra", "with": "med", "other": "andre", "strong": "sterke", "high": "høy" },
  da: { "Premium": "Premium", "Short": "Kort", "and": "og", "memorable": "mindeværdigt", "powerful": "kraftfuldt", "Belgian": "Belgisk", "Dutch": "Hollandsk", "German": "Tysk", "French": "Fransk", "British": "Britisk", "Austrian": "Østrigsk", "Hungarian": "Ungarsk", "Italian": "Italiensk", "Welsh": "Walisisk", "Greek": "Græsk", "Creative": "Kreativt", "Educational": "Uddannelses", "Historical": "Historisk", "cultural": "kulturelt", "from": "fra", "with": "med", "other": "andre", "strong": "stærke", "high": "høj" },
  fi: { "Premium": "Premium", "Short": "Lyhyt", "and": "ja", "memorable": "mieleenpainuva", "powerful": "tehokas", "Belgian": "Belgialainen", "Dutch": "Hollantilainen", "German": "Saksalainen", "French": "Ranskalainen", "British": "Brittiläinen", "Austrian": "Itävaltalainen", "Hungarian": "Unkarilainen", "Italian": "Italialainen", "Welsh": "Walesilainen", "Greek": "Kreikkalainen", "Creative": "Luova", "Educational": "Koulutus", "Historical": "Historiallinen", "cultural": "kulttuurinen", "from": "sivustoilta", "with": "kanssa", "other": "muut", "strong": "vahvoja", "high": "korkea" },
  cs: { "Premium": "Prémiová", "Short": "Krátká", "and": "a", "memorable": "zapamatovatelná", "powerful": "silná", "Belgian": "Belgická", "Dutch": "Nizozemská", "German": "Německá", "French": "Francouzská", "British": "Britská", "Austrian": "Rakouská", "Hungarian": "Maďarská", "Italian": "Italská", "Welsh": "Velšská", "Greek": "Řecká", "Creative": "Kreativní", "Educational": "Vzdělávací", "Historical": "Historická", "cultural": "kulturní", "from": "z", "with": "s", "other": "další", "strong": "silné", "high": "vysoký" },
  el: { "Premium": "Premium", "Short": "Σύντομο", "and": "και", "memorable": "αξέχαστο", "powerful": "ισχυρό", "Belgian": "Βελγικό", "Dutch": "Ολλανδικό", "German": "Γερμανικό", "French": "Γαλλικό", "British": "Βρετανικό", "Austrian": "Αυστριακό", "Hungarian": "Ουγγρικό", "Italian": "Ιταλικό", "Welsh": "Ουαλικό", "Greek": "Ελληνικό", "Creative": "Δημιουργικό", "Educational": "Εκπαιδευτικό", "Historical": "Ιστορικό", "cultural": "πολιτιστικό", "from": "από", "with": "με", "other": "άλλα", "strong": "ισχυρά", "high": "υψηλή" },
  ru: { "Premium": "Премиум", "Short": "Короткий", "and": "и", "memorable": "запоминающийся", "powerful": "мощный", "Belgian": "Бельгийский", "Dutch": "Голландский", "German": "Немецкий", "French": "Французский", "British": "Британский", "Austrian": "Австрийский", "Hungarian": "Венгерский", "Italian": "Итальянский", "Welsh": "Валлийский", "Greek": "Греческий", "Creative": "Креативный", "Educational": "Образовательный", "Historical": "Исторический", "cultural": "культурный", "from": "от", "with": "с", "other": "другие", "strong": "сильные", "high": "высокий" },
  ro: { "Premium": "Premium", "Short": "Scurt", "and": "și", "memorable": "memorabil", "powerful": "puternic", "Belgian": "Belgian", "Dutch": "Olandez", "German": "German", "French": "Francez", "British": "Britanic", "Austrian": "Austriac", "Hungarian": "Ungar", "Italian": "Italian", "Welsh": "Galez", "Greek": "Grec", "Creative": "Creativ", "Educational": "Educațional", "Historical": "Istoric", "cultural": "cultural", "from": "de la", "with": "cu", "other": "alte", "strong": "puternice", "high": "înalt" },
  bg: { "Premium": "Премиум", "Short": "Кратък", "and": "и", "memorable": "запомнящ се", "powerful": "мощен", "Belgian": "Белгийски", "Dutch": "Холандски", "German": "Немски", "French": "Френски", "British": "Британски", "Austrian": "Австрийски", "Hungarian": "Унгарски", "Italian": "Италиански", "Welsh": "Уелски", "Greek": "Гръцки", "Creative": "Творчески", "Educational": "Образователен", "Historical": "Исторически", "cultural": "културен", "from": "от", "with": "с", "other": "други", "strong": "силни", "high": "висок" },
  uk: { "Premium": "Преміум", "Short": "Короткий", "and": "та", "memorable": "запам'ятовуваний", "powerful": "потужний", "Belgian": "Бельгійський", "Dutch": "Нідерландський", "German": "Німецький", "French": "Французький", "British": "Британський", "Austrian": "Австрійський", "Hungarian": "Угорський", "Italian": "Італійський", "Welsh": "Валлійський", "Greek": "Грецький", "Creative": "Креативний", "Educational": "Освітній", "Historical": "Історичний", "cultural": "культурний", "from": "від", "with": "з", "other": "інші", "strong": "потужні", "high": "високий" },
  hr: { "Premium": "Premium", "Short": "Kratka", "and": "i", "memorable": "zapamtiva", "powerful": "moćna", "Belgian": "Belgijska", "Dutch": "Nizozemska", "German": "Njemačka", "French": "Francuska", "British": "Britanska", "Austrian": "Austrijska", "Hungarian": "Mađarska", "Italian": "Talijanska", "Welsh": "Velška", "Greek": "Grčka", "Creative": "Kreativna", "Educational": "Obrazovna", "Historical": "Povijesna", "cultural": "kulturna", "from": "od", "with": "s", "other": "druge", "strong": "jake", "high": "visok" },
  sk: { "Premium": "Prémiová", "Short": "Krátka", "and": "a", "memorable": "zapamätateľná", "powerful": "silná", "Belgian": "Belgická", "Dutch": "Holandská", "German": "Nemecká", "French": "Francúzska", "British": "Britská", "Austrian": "Rakúska", "Hungarian": "Maďarská", "Italian": "Talianska", "Welsh": "Waleská", "Greek": "Grécka", "Creative": "Kreatívna", "Educational": "Vzdelávacia", "Historical": "Historická", "cultural": "kultúrna", "from": "z", "with": "s", "other": "ďalšie", "strong": "silné", "high": "vysoký" },
  sr: { "Premium": "Премиум", "Short": "Кратак", "and": "и", "memorable": "упечатљив", "powerful": "моћан", "Belgian": "Белгијска", "Dutch": "Холандска", "German": "Немачка", "French": "Француска", "British": "Британска", "Austrian": "Аустријска", "Hungarian": "Мађарска", "Italian": "Италијанска", "Welsh": "Велшка", "Greek": "Грчка", "Creative": "Креативна", "Educational": "Образовна", "Historical": "Историјска", "cultural": "културна", "from": "од", "with": "са", "other": "друге", "strong": "јаке", "high": "висок" },
  sl: { "Premium": "Premium", "Short": "Kratka", "and": "in", "memorable": "zapomnljiva", "powerful": "močna", "Belgian": "Belgijska", "Dutch": "Nizozemska", "German": "Nemška", "French": "Francoska", "British": "Britanska", "Austrian": "Avstrijska", "Hungarian": "Madžarska", "Italian": "Italijanska", "Welsh": "Valižanska", "Greek": "Grška", "Creative": "Kreativna", "Educational": "Izobraževalna", "Historical": "Zgodovinska", "cultural": "kulturna", "from": "od", "with": "z", "other": "druge", "strong": "močne", "high": "visok" }
};

// Translate a description from English to target language
function translateDescription(description: string, lang: LangCode): string {
  let result = description;
  const phrases = phraseTranslations[lang];
  const words = wordMap[lang];
  
  // 1. Replace full phrase patterns first (longest match first)
  if (phrases) {
    // Sort by length descending so longer phrases match first
    const sortedPhrases = Object.entries(phrases).sort((a, b) => b[0].length - a[0].length);
    for (const [en, translated] of sortedPhrases) {
      result = result.replace(new RegExp(en.replace(/[.*+?^${}()|[\]\\\/]/g, '\\$&'), 'gi'), translated);
    }
  }
  
  // 2. Catch remaining generic patterns
  if (result.match(/domain with/i)) {
    const p = phrases || {};
    const generic = p["domain with backlinks from"];
    if (generic) {
      result = result.replace(/domain with strong backlinks from/gi, generic.replace('backlinks', words?.['strong'] ? `${words['strong']} backlinks` : 'backlinks'));
      result = result.replace(/domain with backlinks from/gi, generic);
    }
  }
  
  // 3. Replace remaining single English words (only if still present)
  if (words) {
    // Country/nationality adjectives (word boundary)
    const adjectives = ['Premium', 'Belgian', 'Dutch', 'German', 'French', 'British', 'Austrian', 'Hungarian', 'Italian', 'Welsh', 'Greek', 'Creative', 'Educational', 'Historical', 'International', 'Sustainable', 'Digital', 'Financial'];
    for (const adj of adjectives) {
      if (words[adj]) {
        result = result.replace(new RegExp(`\\b${adj}\\b`, 'g'), words[adj]);
      }
    }
    
    // Connector words
    result = result.replace(/ and (?=[A-Z])/g, ` ${words['and'] || 'and'} `);
    result = result.replace(/ and /g, ` ${words['and'] || 'and'} `);
    
    // Remaining common words
    const commonWords = ['cultural', 'from', 'with', 'strong', 'high', 'other'];
    for (const w of commonWords) {
      if (words[w]) {
        result = result.replace(new RegExp(`\\b${w}\\b`, 'gi'), words[w]);
      }
    }
  }
  
  // 4. Replace "Short and memorable/powerful" if not already caught
  if (words) {
    result = result.replace(/\bShort\b/g, words['Short'] || 'Short');
    result = result.replace(/\bmemorable\b/gi, words['memorable'] || 'memorable');
    result = result.replace(/\bpowerful\b/gi, words['powerful'] || 'powerful');
  }
  
  // 5. Replace "linking domains"
  const linkingDomainsTranslations: Record<LangCode, string> = {
    sv: 'länkande domäner', no: 'koblede domener', da: 'linkende domæner', fi: 'linkittävät verkkotunnukset',
    cs: 'odkazující domény', el: 'συνδεδεμένα domains', ru: 'ссылающиеся домены', ro: 'domenii cu legături',
    bg: 'свързващи домейни', uk: "пов'язані домени", hr: 'povezujuće domene', sk: 'odkazujúce domény',
    sr: 'повезујући домени', sl: 'povezujoče domene'
  };
  result = result.replace(/\blinking domains\b/gi, linkingDomainsTranslations[lang] || 'linking domains');
  
  return result;
}

// Translate useCases array
const useCaseTranslations: Record<string, Record<string, string>> = {
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
  hr: {
    "Beauty & Skincare E-commerce": "Ljepota i njega kože web-trgovina",
    "Natural Cosmetics Brand": "Marka prirodne kozmetike",
    "Vegan Cosmetics Webshop": "Veganska kozmetička web-trgovina",
    "Nature Management & Rewilding NGO": "Upravljanje prirodom i obnova divljine",
    "Sustainable Agriculture Platform": "Platforma održive poljoprivrede"
  },
  sk: {
    "Beauty & Skincare E-commerce": "Krása a starostlivosť o pleť e-shop",
    "Natural Cosmetics Brand": "Značka prírodnej kozmetiky",
    "Vegan Cosmetics Webshop": "Vegánsky kozmetický e-shop",
    "Nature Management & Rewilding NGO": "Správa prírody a rewilding",
    "Sustainable Agriculture Platform": "Platforma udržateľného poľnohospodárstva"
  },
  sr: {
    "Beauty & Skincare E-commerce": "Лепота и нега коже онлајн продавница",
    "Natural Cosmetics Brand": "Бренд природне козметике",
    "Vegan Cosmetics Webshop": "Веганска козметичка продавница",
    "Nature Management & Rewilding NGO": "Управљање природом и обнова дивљине",
    "Sustainable Agriculture Platform": "Платформа одрживе пољопривреде"
  },
  sl: {
    "Beauty & Skincare E-commerce": "Lepota in nega kože spletna trgovina",
    "Natural Cosmetics Brand": "Znamka naravne kozmetike",
    "Vegan Cosmetics Webshop": "Veganska kozmetična spletna trgovina",
    "Nature Management & Rewilding NGO": "Upravljanje narave in obnova divjine",
    "Sustainable Agriculture Platform": "Platforma trajnostnega kmetijstva"
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

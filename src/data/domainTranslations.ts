// Domain category and description translations for all 14 languages
// Categories are translated, descriptions use a pattern-based translation system

type LangCode = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl' | 'ko' | 'hu' | 'th' | 'vi' | 'id' | 'et' | 'lv' | 'lt' | 'is' | 'sq' | 'mk' | 'bs' | 'lb' | 'bn' | 'ms';

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
  },
  ko: {
    "Education": "교육", "Hospitality": "호스피탈리티", "Art": "예술", "General": "일반",
    "Entertainment": "엔터테인먼트", "Art/Culture": "예술/문화", "Music": "음악", "International": "국제",
    "Technology": "기술", "Sport": "스포츠", "News": "뉴스", "Business": "비즈니스", "Tourism": "관광",
    "Research": "연구", "Collaboration": "협업", "Transport": "교통", "Projects": "프로젝트",
    "Digital": "디지털", "Sustainability": "지속가능성", "Energy": "에너지", "Food": "식품", "Safety": "안전",
    "Real Estate": "부동산", "Music/Audio": "음악/오디오", "Design": "디자인", "Mobility": "모빌리티",
    "Network": "네트워크", "Environment": "환경", "Startups": "스타트업", "Finance": "금융",
    "Language/Culture": "언어/문화", "Sport/Events": "스포츠/이벤트", "Healthcare": "의료",
    "Art/Design": "예술/디자인", "Events": "이벤트", "Science": "과학", "Health": "건강",
    "Media": "미디어", "Government/Culture": "정부/문화", "Portfolio": "포트폴리오", "Government": "정부",
    "Culture": "문화", "Innovation": "혁신", "Lifestyle": "라이프스타일", "Photography": "사진",
    "Maritime": "해양", "Gaming": "게임", "Sports": "스포츠", "Smart City": "스마트 시티",
    "Information": "정보", "Art/Heritage": "예술/유산", "Design/Hospitality": "디자인/호스피탈리티",
    "Beauty": "뷰티", "Agriculture": "농업"
  },
  hu: {
    "Education": "Oktatás", "Hospitality": "Vendéglátás", "Art": "Művészet", "General": "Általános",
    "Entertainment": "Szórakoztatás", "Art/Culture": "Művészet/Kultúra", "Music": "Zene", "International": "Nemzetközi",
    "Technology": "Technológia", "Sport": "Sport", "News": "Hírek", "Business": "Üzlet", "Tourism": "Turizmus",
    "Research": "Kutatás", "Collaboration": "Együttműködés", "Transport": "Közlekedés", "Projects": "Projektek",
    "Digital": "Digitális", "Sustainability": "Fenntarthatóság", "Energy": "Energia", "Food": "Élelmiszer", "Safety": "Biztonság",
    "Real Estate": "Ingatlan", "Music/Audio": "Zene/Audió", "Design": "Design", "Mobility": "Mobilitás",
    "Network": "Hálózat", "Environment": "Környezet", "Startups": "Startupok", "Finance": "Pénzügy",
    "Language/Culture": "Nyelv/Kultúra", "Sport/Events": "Sport/Események", "Healthcare": "Egészségügy",
    "Art/Design": "Művészet/Design", "Events": "Események", "Science": "Tudomány", "Health": "Egészség",
    "Media": "Média", "Government/Culture": "Kormány/Kultúra", "Portfolio": "Portfólió", "Government": "Kormány",
    "Culture": "Kultúra", "Innovation": "Innováció", "Lifestyle": "Életstílus", "Photography": "Fotográfia",
    "Maritime": "Tengeri", "Gaming": "Játékok", "Sports": "Sportok", "Smart City": "Okos Város",
    "Information": "Információ", "Art/Heritage": "Művészet/Örökség", "Design/Hospitality": "Design/Vendéglátás",
    "Beauty": "Szépség", "Agriculture": "Mezőgazdaság"
  },
  th: {
    "Education": "การศึกษา", "Hospitality": "การบริการ", "Art": "ศิลปะ", "General": "ทั่วไป",
    "Entertainment": "ความบันเทิง", "Art/Culture": "ศิลปะ/วัฒนธรรม", "Music": "เพลง", "International": "ระหว่างประเทศ",
    "Technology": "เทคโนโลยี", "Sport": "กีฬา", "News": "ข่าว", "Business": "ธุรกิจ", "Tourism": "การท่องเที่ยว",
    "Research": "วิจัย", "Collaboration": "ความร่วมมือ", "Transport": "ขนส่ง", "Projects": "โครงการ",
    "Digital": "ดิจิทัล", "Sustainability": "ความยั่งยืน", "Energy": "พลังงาน", "Food": "อาหาร", "Safety": "ความปลอดภัย",
    "Real Estate": "อสังหาริมทรัพย์", "Music/Audio": "เพลง/เสียง", "Design": "ออกแบบ", "Mobility": "การเคลื่อนที่",
    "Network": "เครือข่าย", "Environment": "สิ่งแวดล้อม", "Startups": "สตาร์ทอัพ", "Finance": "การเงิน",
    "Language/Culture": "ภาษา/วัฒนธรรม", "Sport/Events": "กีฬา/อีเวนต์", "Healthcare": "สาธารณสุข",
    "Art/Design": "ศิลปะ/ออกแบบ", "Events": "อีเวนต์", "Science": "วิทยาศาสตร์", "Health": "สุขภาพ",
    "Media": "สื่อ", "Government/Culture": "รัฐบาล/วัฒนธรรม", "Portfolio": "พอร์ตโฟลิโอ", "Government": "รัฐบาล",
    "Culture": "วัฒนธรรม", "Innovation": "นวัตกรรม", "Lifestyle": "ไลฟ์สไตล์", "Photography": "ถ่ายภาพ",
    "Maritime": "การเดินเรือ", "Gaming": "เกม", "Sports": "กีฬา", "Smart City": "เมืองอัจฉริยะ",
    "Information": "ข้อมูล", "Art/Heritage": "ศิลปะ/มรดก", "Design/Hospitality": "ออกแบบ/การบริการ",
    "Beauty": "ความงาม", "Agriculture": "เกษตรกรรม"
  },
  vi: {
    "Education": "Giáo dục", "Hospitality": "Khách sạn", "Art": "Nghệ thuật", "General": "Tổng quát",
    "Entertainment": "Giải trí", "Art/Culture": "Nghệ thuật/Văn hóa", "Music": "Âm nhạc", "International": "Quốc tế",
    "Technology": "Công nghệ", "Sport": "Thể thao", "News": "Tin tức", "Business": "Kinh doanh", "Tourism": "Du lịch",
    "Research": "Nghiên cứu", "Collaboration": "Hợp tác", "Transport": "Vận tải", "Projects": "Dự án",
    "Digital": "Kỹ thuật số", "Sustainability": "Bền vững", "Energy": "Năng lượng", "Food": "Thực phẩm", "Safety": "An toàn",
    "Real Estate": "Bất động sản", "Music/Audio": "Âm nhạc/Âm thanh", "Design": "Thiết kế", "Mobility": "Di chuyển",
    "Network": "Mạng lưới", "Environment": "Môi trường", "Startups": "Khởi nghiệp", "Finance": "Tài chính",
    "Language/Culture": "Ngôn ngữ/Văn hóa", "Sport/Events": "Thể thao/Sự kiện", "Healthcare": "Y tế",
    "Art/Design": "Nghệ thuật/Thiết kế", "Events": "Sự kiện", "Science": "Khoa học", "Health": "Sức khỏe",
    "Media": "Truyền thông", "Government/Culture": "Chính phủ/Văn hóa", "Portfolio": "Danh mục", "Government": "Chính phủ",
    "Culture": "Văn hóa", "Innovation": "Đổi mới", "Lifestyle": "Phong cách sống", "Photography": "Nhiếp ảnh",
    "Maritime": "Hàng hải", "Gaming": "Trò chơi", "Sports": "Thể thao", "Smart City": "Thành phố thông minh",
    "Information": "Thông tin", "Art/Heritage": "Nghệ thuật/Di sản", "Design/Hospitality": "Thiết kế/Khách sạn",
    "Beauty": "Sắc đẹp", "Agriculture": "Nông nghiệp"
  },
  id: {
    "Education": "Pendidikan", "Hospitality": "Perhotelan", "Art": "Seni", "General": "Umum",
    "Entertainment": "Hiburan", "Art/Culture": "Seni/Budaya", "Music": "Musik", "International": "Internasional",
    "Technology": "Teknologi", "Sport": "Olahraga", "News": "Berita", "Business": "Bisnis", "Tourism": "Pariwisata",
    "Research": "Penelitian", "Collaboration": "Kolaborasi", "Transport": "Transportasi", "Projects": "Proyek",
    "Digital": "Digital", "Sustainability": "Keberlanjutan", "Energy": "Energi", "Food": "Makanan", "Safety": "Keselamatan",
    "Real Estate": "Properti", "Music/Audio": "Musik/Audio", "Design": "Desain", "Mobility": "Mobilitas",
    "Network": "Jaringan", "Environment": "Lingkungan", "Startups": "Startup", "Finance": "Keuangan",
    "Language/Culture": "Bahasa/Budaya", "Sport/Events": "Olahraga/Acara", "Healthcare": "Kesehatan",
    "Art/Design": "Seni/Desain", "Events": "Acara", "Science": "Ilmu Pengetahuan", "Health": "Kesehatan",
    "Media": "Media", "Government/Culture": "Pemerintah/Budaya", "Portfolio": "Portofolio", "Government": "Pemerintah",
    "Culture": "Budaya", "Innovation": "Inovasi", "Lifestyle": "Gaya Hidup", "Photography": "Fotografi",
    "Maritime": "Maritim", "Gaming": "Game", "Sports": "Olahraga", "Smart City": "Kota Pintar",
    "Information": "Informasi", "Art/Heritage": "Seni/Warisan", "Design/Hospitality": "Desain/Perhotelan",
    "Beauty": "Kecantikan", "Agriculture": "Pertanian"
  },
  et: {
    "Education": "Haridus", "Hospitality": "Külalislahkus", "Art": "Kunst", "General": "Üldine",
    "Entertainment": "Meelelahutus", "Art/Culture": "Kunst/Kultuur", "Music": "Muusika", "International": "Rahvusvaheline",
    "Technology": "Tehnoloogia", "Sport": "Sport", "News": "Uudised", "Business": "Äri", "Tourism": "Turism",
    "Research": "Teadus", "Collaboration": "Koostöö", "Transport": "Transport", "Projects": "Projektid",
    "Digital": "Digitaalne", "Sustainability": "Jätkusuutlikkus", "Energy": "Energia", "Food": "Toit", "Safety": "Ohutus",
    "Real Estate": "Kinnisvara", "Music/Audio": "Muusika/Heli", "Design": "Disain", "Mobility": "Mobiilsus",
    "Network": "Võrgustik", "Environment": "Keskkond", "Startups": "Idufirmad", "Finance": "Rahandus",
    "Language/Culture": "Keel/Kultuur", "Sport/Events": "Sport/Sündmused", "Healthcare": "Tervishoid",
    "Art/Design": "Kunst/Disain", "Events": "Sündmused", "Science": "Teadus", "Health": "Tervis",
    "Media": "Meedia", "Government/Culture": "Valitsus/Kultuur", "Portfolio": "Portfell", "Government": "Valitsus",
    "Culture": "Kultuur", "Innovation": "Innovatsioon", "Lifestyle": "Elustiil", "Photography": "Fotograafia",
    "Maritime": "Merendus", "Gaming": "Mängud", "Sports": "Spordialad", "Smart City": "Tark Linn",
    "Information": "Informatsioon", "Art/Heritage": "Kunst/Pärand", "Design/Hospitality": "Disain/Külalislahkus",
    "Beauty": "Ilu", "Agriculture": "Põllumajandus"
  },
  lv: {
    "Education": "Izglītība", "Hospitality": "Viesmīlība", "Art": "Māksla", "General": "Vispārīgi",
    "Entertainment": "Izklaide", "Art/Culture": "Māksla/Kultūra", "Music": "Mūzika", "International": "Starptautisks",
    "Technology": "Tehnoloģija", "Sport": "Sports", "News": "Ziņas", "Business": "Bizness", "Tourism": "Tūrisms",
    "Research": "Pētniecība", "Collaboration": "Sadarbība", "Transport": "Transports", "Projects": "Projekti",
    "Digital": "Digitāls", "Sustainability": "Ilgtspēja", "Energy": "Enerģija", "Food": "Pārtika", "Safety": "Drošība",
    "Real Estate": "Nekustamais īpašums", "Music/Audio": "Mūzika/Audio", "Design": "Dizains", "Mobility": "Mobilitāte",
    "Network": "Tīkls", "Environment": "Vide", "Startups": "Jaunuzņēmumi", "Finance": "Finanses",
    "Language/Culture": "Valoda/Kultūra", "Sport/Events": "Sports/Pasākumi", "Healthcare": "Veselības aprūpe",
    "Art/Design": "Māksla/Dizains", "Events": "Pasākumi", "Science": "Zinātne", "Health": "Veselība",
    "Media": "Mediji", "Government/Culture": "Valdība/Kultūra", "Portfolio": "Portfolio", "Government": "Valdība",
    "Culture": "Kultūra", "Innovation": "Inovācija", "Lifestyle": "Dzīvesveids", "Photography": "Fotogrāfija",
    "Maritime": "Jūrniecība", "Gaming": "Spēles", "Sports": "Sporta veidi", "Smart City": "Vieda Pilsēta",
    "Information": "Informācija", "Art/Heritage": "Māksla/Mantojums", "Design/Hospitality": "Dizains/Viesmīlība",
    "Beauty": "Skaistums", "Agriculture": "Lauksaimniecība"
  },
  lt: {
    "Education": "Švietimas", "Hospitality": "Svetingumas", "Art": "Menas", "General": "Bendras",
    "Entertainment": "Pramogos", "Art/Culture": "Menas/Kultūra", "Music": "Muzika", "International": "Tarptautinis",
    "Technology": "Technologija", "Sport": "Sportas", "News": "Naujienos", "Business": "Verslas", "Tourism": "Turizmas",
    "Research": "Mokslas", "Collaboration": "Bendradarbiavimas", "Transport": "Transportas", "Projects": "Projektai",
    "Digital": "Skaitmeninis", "Sustainability": "Tvarumas", "Energy": "Energija", "Food": "Maistas", "Safety": "Saugumas",
    "Real Estate": "Nekilnojamasis turtas", "Music/Audio": "Muzika/Garsas", "Design": "Dizainas", "Mobility": "Mobilumas",
    "Network": "Tinklas", "Environment": "Aplinka", "Startups": "Startuoliai", "Finance": "Finansai",
    "Language/Culture": "Kalba/Kultūra", "Sport/Events": "Sportas/Renginiai", "Healthcare": "Sveikatos priežiūra",
    "Art/Design": "Menas/Dizainas", "Events": "Renginiai", "Science": "Mokslas", "Health": "Sveikata",
    "Media": "Žiniasklaida", "Government/Culture": "Vyriausybė/Kultūra", "Portfolio": "Portfelis", "Government": "Vyriausybė",
    "Culture": "Kultūra", "Innovation": "Inovacijos", "Lifestyle": "Gyvenimo būdas", "Photography": "Fotografija",
    "Maritime": "Jūrinis", "Gaming": "Žaidimai", "Sports": "Sporto šakos", "Smart City": "Išmanus Miestas",
    "Information": "Informacija", "Art/Heritage": "Menas/Paveldas", "Design/Hospitality": "Dizainas/Svetingumas",
    "Beauty": "Grožis", "Agriculture": "Žemės ūkis"
  },
  is: {
    "Education": "Menntun", "Hospitality": "Gestrisni", "Art": "List", "General": "Almennt",
    "Entertainment": "Afþreying", "Art/Culture": "List/Menning", "Music": "Tónlist", "International": "Alþjóðlegt",
    "Technology": "Tækni", "Sport": "Íþróttir", "News": "Fréttir", "Business": "Viðskipti", "Tourism": "Ferðaþjónusta",
    "Research": "Rannsóknir", "Collaboration": "Samstarf", "Transport": "Samgöngur", "Projects": "Verkefni",
    "Digital": "Stafrænt", "Sustainability": "Sjálfbærni", "Energy": "Orka", "Food": "Matur", "Safety": "Öryggi",
    "Real Estate": "Fasteignir", "Music/Audio": "Tónlist/Hljóð", "Design": "Hönnun", "Mobility": "Hreyfanleiki",
    "Network": "Net", "Environment": "Umhverfi", "Startups": "Sprotafyrirtæki", "Finance": "Fjármál",
    "Language/Culture": "Tungumál/Menning", "Sport/Events": "Íþróttir/Viðburðir", "Healthcare": "Heilbrigðisþjónusta",
    "Art/Design": "List/Hönnun", "Events": "Viðburðir", "Science": "Vísindi", "Health": "Heilsa",
    "Media": "Miðlar", "Government/Culture": "Stjórnvöld/Menning", "Portfolio": "Safn", "Government": "Stjórnvöld",
    "Culture": "Menning", "Innovation": "Nýsköpun", "Lifestyle": "Lífsstíll", "Photography": "Ljósmyndun",
    "Maritime": "Siglingamál", "Gaming": "Tölvuleikir", "Sports": "Íþróttir", "Smart City": "Snjöll Borg",
    "Information": "Upplýsingar", "Art/Heritage": "List/Arfleifð", "Design/Hospitality": "Hönnun/Gestrisni",
    "Beauty": "Fegurð", "Agriculture": "Landbúnaður"
  },
  sq: {
    "Education": "Arsim", "Hospitality": "Mikpritje", "Art": "Art", "General": "Përgjithshme",
    "Entertainment": "Argëtim", "Art/Culture": "Art/Kulturë", "Music": "Muzikë", "International": "Ndërkombëtar",
    "Technology": "Teknologji", "Sport": "Sport", "News": "Lajme", "Business": "Biznes", "Tourism": "Turizëm",
    "Research": "Kërkime", "Collaboration": "Bashkëpunim", "Transport": "Transport", "Projects": "Projekte",
    "Digital": "Digjital", "Sustainability": "Qëndrueshmëri", "Energy": "Energji", "Food": "Ushqim", "Safety": "Siguri",
    "Real Estate": "Pasuri", "Music/Audio": "Muzikë/Audio", "Design": "Dizajn", "Mobility": "Lëvizshmëri",
    "Network": "Rrjet", "Environment": "Mjedis", "Startups": "Startup", "Finance": "Financa",
    "Language/Culture": "Gjuhë/Kulturë", "Sport/Events": "Sport/Ngjarje", "Healthcare": "Kujdes shëndetësor",
    "Art/Design": "Art/Dizajn", "Events": "Ngjarje", "Science": "Shkencë", "Health": "Shëndet",
    "Media": "Media", "Government/Culture": "Qeveri/Kulturë", "Portfolio": "Portfolio", "Government": "Qeveri",
    "Culture": "Kulturë", "Innovation": "Inovacion", "Lifestyle": "Stil jetese", "Photography": "Fotografi",
    "Maritime": "Detar", "Gaming": "Lojëra", "Sports": "Sporte", "Smart City": "Qytet i Zgjuar",
    "Information": "Informacion", "Art/Heritage": "Art/Trashëgimi", "Design/Hospitality": "Dizajn/Mikpritje",
    "Beauty": "Bukuri", "Agriculture": "Bujqësi"
  },
  mk: {
    "Education": "Образование", "Hospitality": "Угостителство", "Art": "Уметност", "General": "Општо",
    "Entertainment": "Забава", "Art/Culture": "Уметност/Култура", "Music": "Музика", "International": "Меѓународно",
    "Technology": "Технологија", "Sport": "Спорт", "News": "Вести", "Business": "Бизнис", "Tourism": "Туризам",
    "Research": "Истражување", "Collaboration": "Соработка", "Transport": "Транспорт", "Projects": "Проекти",
    "Digital": "Дигитално", "Sustainability": "Одржливост", "Energy": "Енергија", "Food": "Храна", "Safety": "Безбедност",
    "Real Estate": "Недвижности", "Music/Audio": "Музика/Аудио", "Design": "Дизајн", "Mobility": "Мобилност",
    "Network": "Мрежа", "Environment": "Животна средина", "Startups": "Стартапи", "Finance": "Финансии",
    "Language/Culture": "Јазик/Култура", "Sport/Events": "Спорт/Настани", "Healthcare": "Здравство",
    "Art/Design": "Уметност/Дизајн", "Events": "Настани", "Science": "Наука", "Health": "Здравје",
    "Media": "Медиуми", "Government/Culture": "Влада/Култура", "Portfolio": "Портфолио", "Government": "Влада",
    "Culture": "Култура", "Innovation": "Иновации", "Lifestyle": "Животен стил", "Photography": "Фотографија",
    "Maritime": "Поморство", "Gaming": "Игри", "Sports": "Спортови", "Smart City": "Паметен Град",
    "Information": "Информации", "Art/Heritage": "Уметност/Наследство", "Design/Hospitality": "Дизајн/Угостителство",
    "Beauty": "Убавина", "Agriculture": "Земјоделство"
  },
  bs: {
    "Education": "Obrazovanje", "Hospitality": "Ugostiteljstvo", "Art": "Umjetnost", "General": "Opće",
    "Entertainment": "Zabava", "Art/Culture": "Umjetnost/Kultura", "Music": "Muzika", "International": "Međunarodno",
    "Technology": "Tehnologija", "Sport": "Sport", "News": "Vijesti", "Business": "Poslovanje", "Tourism": "Turizam",
    "Research": "Istraživanje", "Collaboration": "Saradnja", "Transport": "Transport", "Projects": "Projekti",
    "Digital": "Digitalno", "Sustainability": "Održivost", "Energy": "Energija", "Food": "Hrana", "Safety": "Sigurnost",
    "Real Estate": "Nekretnine", "Music/Audio": "Muzika/Audio", "Design": "Dizajn", "Mobility": "Mobilnost",
    "Network": "Mreža", "Environment": "Okoliš", "Startups": "Startupovi", "Finance": "Finansije",
    "Language/Culture": "Jezik/Kultura", "Sport/Events": "Sport/Događaji", "Healthcare": "Zdravstvo",
    "Art/Design": "Umjetnost/Dizajn", "Events": "Događaji", "Science": "Nauka", "Health": "Zdravlje",
    "Media": "Mediji", "Government/Culture": "Vlada/Kultura", "Portfolio": "Portfolio", "Government": "Vlada",
    "Culture": "Kultura", "Innovation": "Inovacije", "Lifestyle": "Životni stil", "Photography": "Fotografija",
    "Maritime": "Pomorstvo", "Gaming": "Igre", "Sports": "Sportovi", "Smart City": "Pametan Grad",
    "Information": "Informacije", "Art/Heritage": "Umjetnost/Naslijeđe", "Design/Hospitality": "Dizajn/Ugostiteljstvo",
    "Beauty": "Ljepota", "Agriculture": "Poljoprivreda"
  },
  lb: {
    "Education": "Bildung", "Hospitality": "Gastronomie", "Art": "Konscht", "General": "Allgemeng",
    "Entertainment": "Ënnerhaltung", "Art/Culture": "Konscht/Kultur", "Music": "Musek", "International": "International",
    "Technology": "Technologie", "Sport": "Sport", "News": "Neiegkeeten", "Business": "Geschäft", "Tourism": "Tourismus",
    "Research": "Fuerschung", "Collaboration": "Zesummenaarbecht", "Transport": "Transport", "Projects": "Projeten",
    "Digital": "Digital", "Sustainability": "Nohaltegkeet", "Energy": "Energie", "Food": "Iessen", "Safety": "Sécherheet",
    "Real Estate": "Immobilien", "Music/Audio": "Musek/Audio", "Design": "Design", "Mobility": "Mobilitéit",
    "Network": "Netzwierk", "Environment": "Ëmwelt", "Startups": "Startups", "Finance": "Finanzen",
    "Language/Culture": "Sprooch/Kultur", "Sport/Events": "Sport/Evenementer", "Healthcare": "Gesondheetswiesen",
    "Art/Design": "Konscht/Design", "Events": "Evenementer", "Science": "Wëssenschaft", "Health": "Gesondheet",
    "Media": "Medien", "Government/Culture": "Regierung/Kultur", "Portfolio": "Portfolio", "Government": "Regierung",
    "Culture": "Kultur", "Innovation": "Innovatioun", "Lifestyle": "Liewensstil", "Photography": "Fotografie",
    "Maritime": "Maritim", "Gaming": "Spiller", "Sports": "Sportaarten", "Smart City": "Smart Stad",
    "Information": "Informatioun", "Art/Heritage": "Konscht/Ierfschaft", "Design/Hospitality": "Design/Gastronomie",
    "Beauty": "Schéinheet", "Agriculture": "Landwirtschaft"
  },
  bn: {
    "Education": "শিক্ষা", "Hospitality": "আতিথেয়তা", "Art": "শিল্প", "General": "সাধারণ",
    "Entertainment": "বিনোদন", "Art/Culture": "শিল্প/সংস্কৃতি", "Music": "সঙ্গীত", "International": "আন্তর্জাতিক",
    "Technology": "প্রযুক্তি", "Sport": "খেলাধুলা", "News": "সংবাদ", "Business": "ব্যবসা", "Tourism": "পর্যটন",
    "Research": "গবেষণা", "Collaboration": "সহযোগিতা", "Transport": "পরিবহন", "Projects": "প্রকল্প",
    "Digital": "ডিজিটাল", "Sustainability": "টেকসই", "Energy": "শক্তি", "Food": "খাদ্য", "Safety": "নিরাপত্তা",
    "Real Estate": "রিয়েল এস্টেট", "Music/Audio": "সঙ্গীত/অডিও", "Design": "ডিজাইন", "Mobility": "গতিশীলতা",
    "Network": "নেটওয়ার্ক", "Environment": "পরিবেশ", "Startups": "স্টার্টআপ", "Finance": "অর্থ",
    "Language/Culture": "ভাষা/সংস্কৃতি", "Sport/Events": "খেলাধুলা/ইভেন্ট", "Healthcare": "স্বাস্থ্যসেবা",
    "Art/Design": "শিল্প/ডিজাইন", "Events": "ইভেন্ট", "Science": "বিজ্ঞান", "Health": "স্বাস্থ্য",
    "Media": "মিডিয়া", "Government/Culture": "সরকার/সংস্কৃতি", "Portfolio": "পোর্টফোলিও", "Government": "সরকার",
    "Culture": "সংস্কৃতি", "Innovation": "উদ্ভাবন", "Lifestyle": "জীবনধারা", "Photography": "আলোকচিত্র",
    "Maritime": "সামুদ্রিক", "Gaming": "গেমিং", "Sports": "খেলাধুলা", "Smart City": "স্মার্ট সিটি",
    "Information": "তথ্য", "Art/Heritage": "শিল্প/ঐতিহ্য", "Design/Hospitality": "ডিজাইন/আতিথেয়তা",
    "Beauty": "সৌন্দর্য", "Agriculture": "কৃষি"
  },
  ms: {
    "Education": "Pendidikan", "Hospitality": "Hospitaliti", "Art": "Seni", "General": "Umum",
    "Entertainment": "Hiburan", "Art/Culture": "Seni/Budaya", "Music": "Muzik", "International": "Antarabangsa",
    "Technology": "Teknologi", "Sport": "Sukan", "News": "Berita", "Business": "Perniagaan", "Tourism": "Pelancongan",
    "Research": "Penyelidikan", "Collaboration": "Kerjasama", "Transport": "Pengangkutan", "Projects": "Projek",
    "Digital": "Digital", "Sustainability": "Kelestarian", "Energy": "Tenaga", "Food": "Makanan", "Safety": "Keselamatan",
    "Real Estate": "Hartanah", "Music/Audio": "Muzik/Audio", "Design": "Reka Bentuk", "Mobility": "Mobiliti",
    "Network": "Rangkaian", "Environment": "Alam Sekitar", "Startups": "Syarikat Permulaan", "Finance": "Kewangan",
    "Language/Culture": "Bahasa/Budaya", "Sport/Events": "Sukan/Acara", "Healthcare": "Penjagaan Kesihatan",
    "Art/Design": "Seni/Reka Bentuk", "Events": "Acara", "Science": "Sains", "Health": "Kesihatan",
    "Media": "Media", "Government/Culture": "Kerajaan/Budaya", "Portfolio": "Portfolio", "Government": "Kerajaan",
    "Culture": "Budaya", "Innovation": "Inovasi", "Lifestyle": "Gaya Hidup", "Photography": "Fotografi",
    "Maritime": "Maritim", "Gaming": "Permainan", "Sports": "Sukan", "Smart City": "Bandar Pintar",
    "Information": "Maklumat", "Art/Heritage": "Seni/Warisan", "Design/Hospitality": "Reka Bentuk/Hospitaliti",
    "Beauty": "Kecantikan", "Agriculture": "Pertanian"
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
  },
  ko: {
    "domain with backlinks from": "백링크가 있는 도메인:",
    "domain with strong backlinks from": "강력한 백링크가 있는 도메인:",
    "domain with high linking domains and backlinks from": "많은 연결 도메인과 백링크가 있는 도메인:",
    "and other Hungarian media websites": "및 기타 헝가리 미디어 웹사이트",
    "and Italian universities": "및 이탈리아 대학교",
    "and Spanish universities": "및 스페인 대학교",
    "and universities": "및 대학교",
    "Polish government": "폴란드 정부",
    "French government": "프랑스 정부",
    "Council of Europe": "유럽 평의회"
  },
  hu: {
    "domain with backlinks from": "domain backlinkekkel innen:",
    "domain with strong backlinks from": "domain erős backlinkekkel innen:",
    "domain with high linking domains and backlinks from": "domain sok hivatkozó domainnel és backlinkekkel innen:",
    "and other Hungarian media websites": "és más magyar médiás weboldalak",
    "and Italian universities": "és olasz egyetemek",
    "and Spanish universities": "és spanyol egyetemek",
    "and universities": "és egyetemek",
    "Polish government": "lengyel kormány",
    "French government": "francia kormány",
    "Council of Europe": "Európa Tanács"
  },
  th: {
    "domain with backlinks from": "โดเมนที่มีแบ็คลิงก์จาก",
    "domain with strong backlinks from": "โดเมนที่มีแบ็คลิงก์แข็งแกร่งจาก",
    "domain with high linking domains and backlinks from": "โดเมนที่มีโดเมนเชื่อมต่อจำนวนมากและแบ็คลิงก์จาก",
    "and other Hungarian media websites": "และเว็บไซต์สื่อฮังการีอื่นๆ",
    "and Italian universities": "และมหาวิทยาลัยอิตาลี",
    "and Spanish universities": "และมหาวิทยาลัยสเปน",
    "and universities": "และมหาวิทยาลัย",
    "Polish government": "รัฐบาลโปแลนด์",
    "French government": "รัฐบาลฝรั่งเศส",
    "Council of Europe": "สภายุโรป"
  },
  vi: {
    "domain with backlinks from": "tên miền có backlink từ",
    "domain with strong backlinks from": "tên miền có backlink mạnh từ",
    "domain with high linking domains and backlinks from": "tên miền có nhiều domain liên kết và backlink từ",
    "and other Hungarian media websites": "và các trang web truyền thông Hungary khác",
    "and Italian universities": "và các trường đại học Ý",
    "and Spanish universities": "và các trường đại học Tây Ban Nha",
    "and universities": "và các trường đại học",
    "Polish government": "chính phủ Ba Lan",
    "French government": "chính phủ Pháp",
    "Council of Europe": "Hội đồng Châu Âu"
  },
  id: {
    "domain with backlinks from": "domain dengan backlink dari",
    "domain with strong backlinks from": "domain dengan backlink kuat dari",
    "domain with high linking domains and backlinks from": "domain dengan banyak domain terhubung dan backlink dari",
    "and other Hungarian media websites": "dan situs media Hongaria lainnya",
    "and Italian universities": "dan universitas Italia",
    "and Spanish universities": "dan universitas Spanyol",
    "and universities": "dan universitas",
    "Polish government": "pemerintah Polandia",
    "French government": "pemerintah Prancis",
    "Council of Europe": "Dewan Eropa"
  },
  et: {
    "domain with backlinks from": "domeen tagasilinkidega saitidelt",
    "domain with strong backlinks from": "domeen tugevate tagasilinkidega saitidelt",
    "domain with high linking domains and backlinks from": "domeen paljude ühendavate domeenide ja tagasilinkidega saitidelt",
    "and other Hungarian media websites": "ja teistelt Ungari meedia veebisaitidelt",
    "and Italian universities": "ja Itaalia ülikoolidelt",
    "and Spanish universities": "ja Hispaania ülikoolidelt",
    "and universities": "ja ülikoolidelt",
    "Polish government": "Poola valitsus",
    "French government": "Prantsuse valitsus",
    "Council of Europe": "Euroopa Nõukogu"
  },
  lv: {
    "domain with backlinks from": "domēns ar atpakaļsaitēm no",
    "domain with strong backlinks from": "domēns ar spēcīgām atpakaļsaitēm no",
    "domain with high linking domains and backlinks from": "domēns ar daudziem saistītiem domēniem un atpakaļsaitēm no",
    "and other Hungarian media websites": "un citām ungāru mediju vietnēm",
    "and Italian universities": "un itāļu universitātēm",
    "and Spanish universities": "un spāņu universitātēm",
    "and universities": "un universitātēm",
    "Polish government": "Polijas valdība",
    "French government": "Francijas valdība",
    "Council of Europe": "Eiropas Padome"
  },
  lt: {
    "domain with backlinks from": "domenas su nuorodomis iš",
    "domain with strong backlinks from": "domenas su stipriomis nuorodomis iš",
    "domain with high linking domains and backlinks from": "domenas su daugeliu susietų domenų ir nuorodomis iš",
    "and other Hungarian media websites": "ir kitų vengrų žiniasklaidos svetainių",
    "and Italian universities": "ir Italijos universitetų",
    "and Spanish universities": "ir Ispanijos universitetų",
    "and universities": "ir universitetų",
    "Polish government": "Lenkijos vyriausybė",
    "French government": "Prancūzijos vyriausybė",
    "Council of Europe": "Europos Taryba"
  },
  is: {
    "domain with backlinks from": "lén með baktengla frá",
    "domain with strong backlinks from": "lén með sterkum baktengum frá",
    "domain with high linking domains and backlinks from": "lén með mörgum tengdum lénum og baktengum frá",
    "and other Hungarian media websites": "og öðrum ungverskum fjölmiðlavefsíðum",
    "and Italian universities": "og ítölskum háskólum",
    "and Spanish universities": "og spænskum háskólum",
    "and universities": "og háskólum",
    "Polish government": "pólsk stjórnvöld",
    "French government": "frönsk stjórnvöld",
    "Council of Europe": "Evrópuráðið"
  },
  sq: {
    "domain with backlinks from": "domen me backlinks nga",
    "domain with strong backlinks from": "domen me backlinks të forta nga",
    "domain with high linking domains and backlinks from": "domen me shumë domene të lidhura dhe backlinks nga",
    "and other Hungarian media websites": "dhe faqe të tjera mediatike hungareze",
    "and Italian universities": "dhe universitete italiane",
    "and Spanish universities": "dhe universitete spanjolle",
    "and universities": "dhe universitete",
    "Polish government": "qeveria polake",
    "French government": "qeveria franceze",
    "Council of Europe": "Këshilli i Europës"
  },
  mk: {
    "domain with backlinks from": "домен со линкови од",
    "domain with strong backlinks from": "домен со силни линкови од",
    "domain with high linking domains and backlinks from": "домен со многу поврзани домени и линкови од",
    "and other Hungarian media websites": "и други унгарски медиумски веб-страни",
    "and Italian universities": "и италијански универзитети",
    "and Spanish universities": "и шпански универзитети",
    "and universities": "и универзитети",
    "Polish government": "полска влада",
    "French government": "француска влада",
    "Council of Europe": "Совет на Европа"
  },
  bs: {
    "domain with backlinks from": "domena s povratnim linkovima od",
    "domain with strong backlinks from": "domena s jakim povratnim linkovima od",
    "domain with high linking domains and backlinks from": "domena s mnogim povezanim domenama i povratnim linkovima od",
    "and other Hungarian media websites": "i drugih mađarskih medijskih stranica",
    "and Italian universities": "i talijanskih univerziteta",
    "and Spanish universities": "i španskih univerziteta",
    "and universities": "i univerziteta",
    "Polish government": "poljska vlada",
    "French government": "francuska vlada",
    "Council of Europe": "Vijeće Evrope"
  },
  lb: {
    "domain with backlinks from": "Domain mat Backlinks vun",
    "domain with strong backlinks from": "Domain mat staarke Backlinks vun",
    "domain with high linking domains and backlinks from": "Domain mat villen verlinkte Domainen a Backlinks vun",
    "and other Hungarian media websites": "an aner ungarescher Mediësäiten",
    "and Italian universities": "an italieenesch Universitéiten",
    "and Spanish universities": "a spuenesch Universitéiten",
    "and universities": "an Universitéiten",
    "Polish government": "polnesch Regierung",
    "French government": "franséisch Regierung",
    "Council of Europe": "Europarot"
  },
  bn: {
    "domain with backlinks from": "ডোমেইন ব্যাকলিংক সহ:",
    "domain with strong backlinks from": "ডোমেইন শক্তিশালী ব্যাকলিংক সহ:",
    "domain with high linking domains and backlinks from": "ডোমেইন অনেক সংযুক্ত ডোমেইন এবং ব্যাকলিংক সহ:",
    "and other Hungarian media websites": "এবং অন্যান্য হাঙ্গেরিয়ান মিডিয়া ওয়েবসাইট",
    "and Italian universities": "এবং ইতালীয় বিশ্ববিদ্যালয়",
    "and Spanish universities": "এবং স্প্যানিশ বিশ্ববিদ্যালয়",
    "and universities": "এবং বিশ্ববিদ্যালয়",
    "Polish government": "পোল্যান্ড সরকার",
    "French government": "ফ্রান্স সরকার",
    "Council of Europe": "ইউরোপ কাউন্সিল"
  },
  ms: {
    "domain with backlinks from": "domain dengan pautan balik dari",
    "domain with strong backlinks from": "domain dengan pautan balik kuat dari",
    "domain with high linking domains and backlinks from": "domain dengan banyak domain dipautkan dan pautan balik dari",
    "and other Hungarian media websites": "dan laman web media Hungary lain",
    "and Italian universities": "dan universiti Itali",
    "and Spanish universities": "dan universiti Sepanyol",
    "and universities": "dan universiti",
    "Polish government": "kerajaan Poland",
    "French government": "kerajaan Perancis",
    "Council of Europe": "Majlis Eropah"
  }
};

// Single-word and adjective translations
const wordMap: Record<LangCode, Record<string, string>> = {
  sv: { "Premium": "Premium", "Short": "Kort", "and": "och", "memorable": "minnesvärd", "powerful": "kraftfull", "Belgian": "Belgisk", "Dutch": "Nederländsk", "German": "Tysk", "French": "Fransk", "British": "Brittisk", "Austrian": "Österrikisk", "Hungarian": "Ungersk", "Italian": "Italiensk", "Welsh": "Walesisk", "Greek": "Grekisk", "Creative": "Kreativ", "Educational": "Utbildnings", "Historical": "Historisk", "cultural": "kulturell", "Sustainable": "Hållbart", "Digital": "Digital", "Financial": "Finansiell", "International": "Internationell", "space": "rymd", "business": "affärs", "school": "skola", "hotel": "hotell", "art": "konst", "event": "evenemang", "ticketing": "biljett", "cycling": "cykel", "network": "nätverk", "regional": "regional", "center": "center", "news": "nyhets", "religious": "religions", "commercial": "kommersiell", "authority": "auktoritet", "strong": "starka", "high": "hög", "transport": "transport", "logistics": "logistik", "research": "forskning", "project": "projekt", "entertainment": "underhållning", "media": "medie", "transformation": "transformation", "land": "mark", "management": "förvaltning", "sustainability": "hållbarhet", "cosmetics": "kosmetik", "infrastructure": "infrastruktur", "climate": "klimat", "technology": "teknik", "catering": "catering", "safety": "säkerhet", "emergency": "nöd", "planning": "planering", "production": "produktion", "awareness": "medvetenhet", "innovation": "innovation", "mobility": "mobilitet", "parking": "parkering", "archive": "arkiv", "cooperation": "samarbete", "Baltic": "Baltisk", "region": "region", "agriculture": "jordbruk", "youth": "ungdom", "study": "studie", "care": "vård", "energy": "energi", "linking": "länkande", "domains": "domäner", "from": "från", "with": "med", "other": "andra", "domain": "domän", "Beauty": "Skönhet", "Telecom": "Telekom", "HVAC": "VVS", "European": "Europeisk", "expo": "expo", "EU": "EU", "Music": "Musik", "Art": "Konst", "Design": "Design", "Energy": "Energi", "Research": "Forskning", "Transport": "Transport", "Safety": "Säkerhet", "Care": "Vård", "Cycling": "Cykel" },
  no: { "Premium": "Premium", "Short": "Kort", "and": "og", "memorable": "minneverdig", "powerful": "kraftfull", "Belgian": "Belgisk", "Dutch": "Nederlandsk", "German": "Tysk", "French": "Fransk", "British": "Britisk", "Austrian": "Østerriksk", "Hungarian": "Ungarsk", "Italian": "Italiensk", "Welsh": "Walisisk", "Greek": "Gresk", "Creative": "Kreativt", "Educational": "Utdannings", "Historical": "Historisk", "cultural": "kulturelt", "from": "fra", "with": "med", "other": "andre", "strong": "sterke", "high": "høy", "Sustainable": "Bærekraftig", "Digital": "Digital", "Financial": "Finansiell", "International": "Internasjonal", "space": "rom", "business": "forretnings", "school": "skole", "hotel": "hotell", "art": "kunst", "event": "arrangement", "ticketing": "billett", "cycling": "sykkel", "network": "nettverk", "regional": "regional", "center": "senter", "news": "nyhets", "religious": "religiøs", "commercial": "kommersiell", "authority": "autoritet", "transport": "transport", "logistics": "logistikk", "research": "forskning", "project": "prosjekt", "entertainment": "underholdning", "media": "medie", "transformation": "transformasjon", "land": "land", "management": "forvaltning", "sustainability": "bærekraft", "cosmetics": "kosmetikk", "infrastructure": "infrastruktur", "climate": "klima", "technology": "teknologi", "catering": "catering", "safety": "sikkerhet", "emergency": "nød", "planning": "planlegging", "production": "produksjon", "awareness": "bevissthet", "innovation": "innovasjon", "mobility": "mobilitet", "parking": "parkering", "archive": "arkiv", "cooperation": "samarbeid", "Baltic": "Baltisk", "region": "region", "agriculture": "jordbruk", "youth": "ungdom", "study": "studie", "care": "omsorg", "energy": "energi", "linking": "koblede", "domains": "domener", "domain": "domene", "Beauty": "Skjønnhet", "Telecom": "Telekom", "HVAC": "VVS", "European": "Europeisk", "expo": "expo", "EU": "EU", "Music": "Musikk", "Art": "Kunst", "Design": "Design", "Energy": "Energi", "Research": "Forskning", "Transport": "Transport", "Safety": "Sikkerhet", "Care": "Omsorg", "Cycling": "Sykkel" },
  da: { "Premium": "Premium", "Short": "Kort", "and": "og", "memorable": "mindeværdigt", "powerful": "kraftfuldt", "Belgian": "Belgisk", "Dutch": "Hollandsk", "German": "Tysk", "French": "Fransk", "British": "Britisk", "Austrian": "Østrigsk", "Hungarian": "Ungarsk", "Italian": "Italiensk", "Welsh": "Walisisk", "Greek": "Græsk", "Creative": "Kreativt", "Educational": "Uddannelses", "Historical": "Historisk", "cultural": "kulturelt", "from": "fra", "with": "med", "other": "andre", "strong": "stærke", "high": "høj", "Sustainable": "Bæredygtigt", "Digital": "Digital", "Financial": "Finansiel", "International": "International", "space": "rum", "business": "forretnings", "school": "skole", "hotel": "hotel", "art": "kunst", "event": "begivenhed", "ticketing": "billet", "cycling": "cykling", "network": "netværk", "regional": "regional", "center": "center", "news": "nyheds", "religious": "religiøs", "commercial": "kommerciel", "authority": "autoritet", "transport": "transport", "logistics": "logistik", "research": "forskning", "project": "projekt", "entertainment": "underholdning", "media": "medie", "transformation": "transformation", "land": "land", "management": "forvaltning", "sustainability": "bæredygtighed", "cosmetics": "kosmetik", "infrastructure": "infrastruktur", "climate": "klima", "technology": "teknologi", "catering": "catering", "safety": "sikkerhed", "emergency": "nød", "planning": "planlægning", "production": "produktion", "awareness": "bevidsthed", "innovation": "innovation", "mobility": "mobilitet", "parking": "parkering", "archive": "arkiv", "cooperation": "samarbejde", "Baltic": "Baltisk", "region": "region", "agriculture": "landbrug", "youth": "ungdom", "study": "studie", "care": "pleje", "energy": "energi", "linking": "linkende", "domains": "domæner", "domain": "domæne", "Beauty": "Skønhed", "Telecom": "Telekom", "HVAC": "VVS", "European": "Europæisk", "expo": "expo", "EU": "EU", "Music": "Musik", "Art": "Kunst", "Design": "Design", "Energy": "Energi", "Research": "Forskning", "Transport": "Transport", "Safety": "Sikkerhed", "Care": "Pleje", "Cycling": "Cykling" },
  fi: { "Premium": "Premium", "Short": "Lyhyt", "and": "ja", "memorable": "mieleenpainuva", "powerful": "tehokas", "Belgian": "Belgialainen", "Dutch": "Hollantilainen", "German": "Saksalainen", "French": "Ranskalainen", "British": "Brittiläinen", "Austrian": "Itävaltalainen", "Hungarian": "Unkarilainen", "Italian": "Italialainen", "Welsh": "Walesilainen", "Greek": "Kreikkalainen", "Creative": "Luova", "Educational": "Koulutus", "Historical": "Historiallinen", "cultural": "kulttuurinen", "from": "sivustoilta", "with": "kanssa", "other": "muut", "strong": "vahvoja", "high": "korkea", "Sustainable": "Kestävä", "Digital": "Digitaalinen", "Financial": "Rahoitus", "International": "Kansainvälinen", "space": "avaruus", "business": "liike", "school": "koulu", "hotel": "hotelli", "art": "taide", "event": "tapahtuma", "ticketing": "lipunmyynti", "cycling": "pyöräily", "network": "verkosto", "regional": "alueellinen", "center": "keskus", "news": "uutis", "religious": "uskonnollinen", "commercial": "kaupallinen", "authority": "auktoriteetti", "transport": "kuljetus", "logistics": "logistiikka", "research": "tutkimus", "project": "projekti", "entertainment": "viihde", "media": "media", "transformation": "muutos", "land": "maa", "management": "hallinta", "sustainability": "kestävyys", "cosmetics": "kosmetiikka", "infrastructure": "infrastruktuuri", "climate": "ilmasto", "technology": "teknologia", "catering": "pitopalvelu", "safety": "turvallisuus", "emergency": "hätä", "planning": "suunnittelu", "production": "tuotanto", "awareness": "tietoisuus", "innovation": "innovaatio", "mobility": "liikkuvuus", "parking": "pysäköinti", "archive": "arkisto", "cooperation": "yhteistyö", "Baltic": "Baltian", "region": "alue", "agriculture": "maatalous", "youth": "nuoriso", "study": "tutkimus", "care": "hoiva", "energy": "energia", "linking": "linkittävät", "domains": "verkkotunnukset", "domain": "verkkotunnus", "Beauty": "Kauneus", "Telecom": "Televiestintä", "HVAC": "LVI", "European": "Eurooppalainen", "expo": "messut", "EU": "EU", "Music": "Musiikki", "Art": "Taide", "Design": "Muotoilu", "Energy": "Energia", "Research": "Tutkimus", "Transport": "Kuljetus", "Safety": "Turvallisuus", "Care": "Hoiva", "Cycling": "Pyöräily" },
  cs: { "Premium": "Prémiová", "Short": "Krátká", "and": "a", "memorable": "zapamatovatelná", "powerful": "silná", "Belgian": "Belgická", "Dutch": "Nizozemská", "German": "Německá", "French": "Francouzská", "British": "Britská", "Austrian": "Rakouská", "Hungarian": "Maďarská", "Italian": "Italská", "Welsh": "Velšská", "Greek": "Řecká", "Creative": "Kreativní", "Educational": "Vzdělávací", "Historical": "Historická", "cultural": "kulturní", "from": "z", "with": "s", "other": "další", "strong": "silné", "high": "vysoký", "Sustainable": "Udržitelná", "Digital": "Digitální", "Financial": "Finanční", "International": "Mezinárodní", "space": "vesmírná", "business": "obchodní", "school": "škola", "hotel": "hotelová", "art": "umělecká", "event": "akce", "ticketing": "vstupenková", "cycling": "cyklistická", "network": "síťová", "regional": "regionální", "center": "centrum", "news": "zpravodajská", "religious": "náboženská", "commercial": "komerční", "authority": "autorita", "transport": "dopravní", "logistics": "logistická", "research": "výzkumná", "project": "projektová", "entertainment": "zábavní", "media": "mediální", "transformation": "transformace", "land": "pozemková", "management": "správa", "sustainability": "udržitelnost", "cosmetics": "kosmetická", "infrastructure": "infrastruktura", "climate": "klimatická", "technology": "technologie", "catering": "cateringová", "safety": "bezpečnostní", "emergency": "nouzová", "planning": "plánování", "production": "produkce", "awareness": "osvěta", "innovation": "inovace", "mobility": "mobilita", "parking": "parkovací", "archive": "archivní", "cooperation": "spolupráce", "Baltic": "Baltská", "region": "region", "agriculture": "zemědělství", "youth": "mládežnická", "study": "studijní", "care": "péče", "energy": "energetická", "linking": "odkazující", "domains": "domény", "domain": "doména", "Beauty": "Krása", "Telecom": "Telekomunikační", "HVAC": "VZT", "European": "Evropská", "expo": "expo", "EU": "EU", "Music": "Hudba", "Art": "Umění", "Design": "Design", "Energy": "Energie", "Research": "Výzkum", "Transport": "Doprava", "Safety": "Bezpečnost", "Care": "Péče", "Cycling": "Cyklistika" },
  el: { "Premium": "Premium", "Short": "Σύντομο", "and": "και", "memorable": "αξέχαστο", "powerful": "ισχυρό", "Belgian": "Βελγικό", "Dutch": "Ολλανδικό", "German": "Γερμανικό", "French": "Γαλλικό", "British": "Βρετανικό", "Austrian": "Αυστριακό", "Hungarian": "Ουγγρικό", "Italian": "Ιταλικό", "Welsh": "Ουαλικό", "Greek": "Ελληνικό", "Creative": "Δημιουργικό", "Educational": "Εκπαιδευτικό", "Historical": "Ιστορικό", "cultural": "πολιτιστικό", "from": "από", "with": "με", "other": "άλλα", "strong": "ισχυρά", "high": "υψηλή", "Sustainable": "Βιώσιμο", "Digital": "Ψηφιακό", "Financial": "Χρηματοοικονομικό", "International": "Διεθνές", "space": "διαστημικό", "business": "επιχειρηματικό", "school": "σχολείο", "hotel": "ξενοδοχειακό", "art": "τέχνης", "event": "εκδήλωσης", "ticketing": "εισιτηρίων", "cycling": "ποδηλασίας", "network": "δίκτυο", "regional": "περιφερειακό", "center": "κέντρο", "news": "ειδησεογραφικό", "religious": "θρησκευτικό", "commercial": "εμπορικό", "authority": "αυθεντία", "transport": "μεταφορών", "logistics": "logistics", "research": "έρευνας", "project": "έργου", "entertainment": "ψυχαγωγίας", "media": "μέσων", "transformation": "μετασχηματισμού", "land": "γης", "management": "διαχείρισης", "sustainability": "βιωσιμότητα", "cosmetics": "καλλυντικών", "infrastructure": "υποδομής", "climate": "κλιματικής", "technology": "τεχνολογίας", "catering": "τροφοδοσίας", "safety": "ασφάλειας", "emergency": "έκτακτης ανάγκης", "planning": "σχεδιασμού", "production": "παραγωγής", "awareness": "ευαισθητοποίησης", "innovation": "καινοτομίας", "mobility": "κινητικότητας", "parking": "στάθμευσης", "archive": "αρχείου", "cooperation": "συνεργασίας", "Baltic": "Βαλτικό", "region": "περιοχή", "agriculture": "γεωργίας", "youth": "νεολαίας", "study": "μελέτης", "care": "φροντίδας", "energy": "ενέργειας", "linking": "συνδεδεμένα", "domains": "domains", "domain": "domain", "Beauty": "Ομορφιά", "Telecom": "Τηλεπικοινωνιών", "HVAC": "HVAC", "European": "Ευρωπαϊκό", "expo": "expo", "EU": "EU", "Music": "Μουσική", "Art": "Τέχνη", "Design": "Σχεδιασμός", "Energy": "Ενέργεια", "Research": "Έρευνα", "Transport": "Μεταφορές", "Safety": "Ασφάλεια", "Care": "Φροντίδα", "Cycling": "Ποδηλασία" },
  ru: { "Premium": "Премиум", "Short": "Короткий", "and": "и", "memorable": "запоминающийся", "powerful": "мощный", "Belgian": "Бельгийский", "Dutch": "Голландский", "German": "Немецкий", "French": "Французский", "British": "Британский", "Austrian": "Австрийский", "Hungarian": "Венгерский", "Italian": "Итальянский", "Welsh": "Валлийский", "Greek": "Греческий", "Creative": "Креативный", "Educational": "Образовательный", "Historical": "Исторический", "cultural": "культурный", "from": "от", "with": "с", "other": "другие", "strong": "сильные", "high": "высокий", "Sustainable": "Устойчивый", "Digital": "Цифровой", "Financial": "Финансовый", "International": "Международный", "space": "космический", "business": "бизнес", "school": "школа", "hotel": "гостиничный", "art": "художественный", "event": "мероприятий", "ticketing": "билетный", "cycling": "велосипедный", "network": "сетевой", "regional": "региональный", "center": "центр", "news": "новостной", "religious": "религиозный", "commercial": "коммерческий", "authority": "авторитет", "transport": "транспортный", "logistics": "логистический", "research": "исследовательский", "project": "проектный", "entertainment": "развлекательный", "media": "медиа", "transformation": "трансформации", "land": "земельный", "management": "управления", "sustainability": "устойчивость", "cosmetics": "косметический", "infrastructure": "инфраструктуры", "climate": "климатической", "technology": "технологий", "catering": "кейтеринг", "safety": "безопасности", "emergency": "экстренного", "planning": "планирования", "production": "производства", "awareness": "осведомлённости", "innovation": "инноваций", "mobility": "мобильности", "parking": "парковки", "archive": "архивный", "cooperation": "сотрудничества", "Baltic": "Балтийский", "region": "регион", "agriculture": "сельского хозяйства", "youth": "молодёжный", "study": "исследования", "care": "ухода", "energy": "энергетический", "linking": "ссылающиеся", "domains": "домены", "domain": "домен", "Beauty": "Красота", "Telecom": "Телеком", "HVAC": "ОВК", "European": "Европейский", "expo": "выставка", "EU": "ЕС", "Music": "Музыка", "Art": "Искусство", "Design": "Дизайн", "Energy": "Энергия", "Research": "Исследования", "Transport": "Транспорт", "Safety": "Безопасность", "Care": "Забота", "Cycling": "Велоспорт" },
  ro: { "Premium": "Premium", "Short": "Scurt", "and": "și", "memorable": "memorabil", "powerful": "puternic", "Belgian": "Belgian", "Dutch": "Olandez", "German": "German", "French": "Francez", "British": "Britanic", "Austrian": "Austriac", "Hungarian": "Ungar", "Italian": "Italian", "Welsh": "Galez", "Greek": "Grec", "Creative": "Creativ", "Educational": "Educațional", "Historical": "Istoric", "cultural": "cultural", "from": "de la", "with": "cu", "other": "alte", "strong": "puternice", "high": "înalt", "Sustainable": "Durabil", "Digital": "Digital", "Financial": "Financiar", "International": "Internațional", "space": "spațial", "business": "afaceri", "school": "școală", "hotel": "hotelier", "art": "artă", "event": "eveniment", "ticketing": "ticketing", "cycling": "ciclism", "network": "rețea", "regional": "regional", "center": "centru", "news": "știri", "religious": "religios", "commercial": "comercial", "authority": "autoritate", "transport": "transport", "logistics": "logistică", "research": "cercetare", "project": "proiect", "entertainment": "divertisment", "media": "media", "transformation": "transformare", "land": "teren", "management": "management", "sustainability": "sustenabilitate", "cosmetics": "cosmetice", "infrastructure": "infrastructură", "climate": "climatică", "technology": "tehnologie", "catering": "catering", "safety": "siguranță", "emergency": "urgență", "planning": "planificare", "production": "producție", "awareness": "conștientizare", "innovation": "inovație", "mobility": "mobilitate", "parking": "parcare", "archive": "arhivă", "cooperation": "cooperare", "Baltic": "Baltic", "region": "regiune", "agriculture": "agricultură", "youth": "tineret", "study": "studiu", "care": "îngrijire", "energy": "energie", "linking": "domenii legate", "domains": "domenii", "domain": "domeniu", "Beauty": "Frumusețe", "Telecom": "Telecom", "HVAC": "HVAC", "European": "European", "expo": "expo", "EU": "UE", "Music": "Muzică", "Art": "Artă", "Design": "Design", "Energy": "Energie", "Research": "Cercetare", "Transport": "Transport", "Safety": "Siguranță", "Care": "Îngrijire", "Cycling": "Ciclism" },
  bg: { "Premium": "Премиум", "Short": "Кратък", "and": "и", "memorable": "запомнящ се", "powerful": "мощен", "Belgian": "Белгийски", "Dutch": "Холандски", "German": "Немски", "French": "Френски", "British": "Британски", "Austrian": "Австрийски", "Hungarian": "Унгарски", "Italian": "Италиански", "Welsh": "Уелски", "Greek": "Гръцки", "Creative": "Творчески", "Educational": "Образователен", "Historical": "Исторически", "cultural": "културен", "from": "от", "with": "с", "other": "други", "strong": "силни", "high": "висок", "Sustainable": "Устойчив", "Digital": "Дигитален", "Financial": "Финансов", "International": "Международен", "space": "космически", "business": "бизнес", "school": "училище", "hotel": "хотелски", "art": "художествен", "event": "събитие", "ticketing": "билетен", "cycling": "колоездене", "network": "мрежов", "regional": "регионален", "center": "център", "news": "новинарски", "religious": "религиозен", "commercial": "търговски", "authority": "авторитет", "transport": "транспортен", "logistics": "логистичен", "research": "изследователски", "project": "проектен", "entertainment": "развлекателен", "media": "медиен", "transformation": "трансформация", "land": "поземлен", "management": "управление", "sustainability": "устойчивост", "cosmetics": "козметичен", "infrastructure": "инфраструктура", "climate": "климатичен", "technology": "технология", "catering": "кетъринг", "safety": "безопасност", "emergency": "авариен", "planning": "планиране", "production": "производство", "awareness": "осведоменост", "innovation": "иновация", "mobility": "мобилност", "parking": "паркиране", "archive": "архивен", "cooperation": "сътрудничество", "Baltic": "Балтийски", "region": "регион", "agriculture": "земеделие", "youth": "младежки", "study": "учебен", "care": "грижа", "energy": "енергиен", "linking": "свързващи", "domains": "домейни", "domain": "домейн", "Beauty": "Красота", "Telecom": "Телеком", "HVAC": "ОВК", "European": "Европейски", "expo": "изложение", "EU": "ЕС", "Music": "Музика", "Art": "Изкуство", "Design": "Дизайн", "Energy": "Енергия", "Research": "Изследвания", "Transport": "Транспорт", "Safety": "Безопасност", "Care": "Грижа", "Cycling": "Колоездене" },
  uk: { "Premium": "Преміум", "Short": "Короткий", "and": "та", "memorable": "запам'ятовуваний", "powerful": "потужний", "Belgian": "Бельгійський", "Dutch": "Нідерландський", "German": "Німецький", "French": "Французький", "British": "Британський", "Austrian": "Австрійський", "Hungarian": "Угорський", "Italian": "Італійський", "Welsh": "Валлійський", "Greek": "Грецький", "Creative": "Креативний", "Educational": "Освітній", "Historical": "Історичний", "cultural": "культурний", "from": "від", "with": "з", "other": "інші", "strong": "потужні", "high": "високий", "Sustainable": "Сталий", "Digital": "Цифровий", "Financial": "Фінансовий", "International": "Міжнародний", "space": "космічний", "business": "бізнес", "school": "школа", "hotel": "готельний", "art": "мистецький", "event": "подія", "ticketing": "квитковий", "cycling": "велосипедний", "network": "мережевий", "regional": "регіональний", "center": "центр", "news": "новинний", "religious": "релігійний", "commercial": "комерційний", "authority": "авторитет", "transport": "транспортний", "logistics": "логістичний", "research": "дослідницький", "project": "проєктний", "entertainment": "розважальний", "media": "медіа", "transformation": "трансформації", "land": "земельний", "management": "управління", "sustainability": "сталість", "cosmetics": "косметичний", "infrastructure": "інфраструктури", "climate": "кліматичний", "technology": "технологій", "catering": "кейтерінг", "safety": "безпеки", "emergency": "надзвичайний", "planning": "планування", "production": "виробництва", "awareness": "обізнаності", "innovation": "інновацій", "mobility": "мобільності", "parking": "паркування", "archive": "архівний", "cooperation": "співпраці", "Baltic": "Балтійський", "region": "регіон", "agriculture": "сільського господарства", "youth": "молодіжний", "study": "навчальний", "care": "догляду", "energy": "енергетичний", "linking": "пов'язані", "domains": "домени", "domain": "домен", "Beauty": "Краса", "Telecom": "Телеком", "HVAC": "ОВК", "European": "Європейський", "expo": "виставка", "EU": "ЄС", "Music": "Музика", "Art": "Мистецтво", "Design": "Дизайн", "Energy": "Енергія", "Research": "Дослідження", "Transport": "Транспорт", "Safety": "Безпека", "Care": "Догляд", "Cycling": "Велоспорт" },
  hr: { "Premium": "Premium", "Short": "Kratka", "and": "i", "memorable": "zapamtiva", "powerful": "moćna", "Belgian": "Belgijska", "Dutch": "Nizozemska", "German": "Njemačka", "French": "Francuska", "British": "Britanska", "Austrian": "Austrijska", "Hungarian": "Mađarska", "Italian": "Talijanska", "Welsh": "Velška", "Greek": "Grčka", "Creative": "Kreativna", "Educational": "Obrazovna", "Historical": "Povijesna", "cultural": "kulturna", "from": "od", "with": "s", "other": "druge", "strong": "jake", "high": "visok", "Sustainable": "Održiva", "Digital": "Digitalna", "Financial": "Financijska", "International": "Međunarodna", "space": "svemirska", "business": "poslovna", "school": "škola", "hotel": "hotelska", "art": "umjetnička", "event": "događaj", "ticketing": "ulaznice", "cycling": "biciklistička", "network": "mrežna", "regional": "regionalna", "center": "centar", "news": "vijesti", "religious": "vjerska", "commercial": "komercijalna", "authority": "autoritet", "transport": "prijevozna", "logistics": "logistička", "research": "istraživačka", "project": "projektna", "entertainment": "zabavna", "media": "medijska", "transformation": "transformacija", "land": "zemljišna", "management": "upravljanje", "sustainability": "održivost", "cosmetics": "kozmetička", "infrastructure": "infrastruktura", "climate": "klimatska", "technology": "tehnologija", "catering": "catering", "safety": "sigurnost", "emergency": "hitna", "planning": "planiranje", "production": "proizvodnja", "awareness": "svijest", "innovation": "inovacija", "mobility": "mobilnost", "parking": "parkiranje", "archive": "arhivska", "cooperation": "suradnja", "Baltic": "Baltička", "region": "regija", "agriculture": "poljoprivreda", "youth": "mladenačka", "study": "studijska", "care": "skrb", "energy": "energetska", "linking": "povezujuće", "domains": "domene", "domain": "domena", "Beauty": "Ljepota", "Telecom": "Telekom", "HVAC": "KGH", "European": "Europska", "expo": "sajam", "EU": "EU", "Music": "Glazba", "Art": "Umjetnost", "Design": "Dizajn", "Energy": "Energija", "Research": "Istraživanje", "Transport": "Prijevoz", "Safety": "Sigurnost", "Care": "Skrb", "Cycling": "Biciklizam" },
  sk: { "Premium": "Prémiová", "Short": "Krátka", "and": "a", "memorable": "zapamätateľná", "powerful": "silná", "Belgian": "Belgická", "Dutch": "Holandská", "German": "Nemecká", "French": "Francúzska", "British": "Britská", "Austrian": "Rakúska", "Hungarian": "Maďarská", "Italian": "Talianska", "Welsh": "Waleská", "Greek": "Grécka", "Creative": "Kreatívna", "Educational": "Vzdelávacia", "Historical": "Historická", "cultural": "kultúrna", "from": "z", "with": "s", "other": "ďalšie", "strong": "silné", "high": "vysoký", "Sustainable": "Udržateľná", "Digital": "Digitálna", "Financial": "Finančná", "International": "Medzinárodná", "space": "vesmírna", "business": "obchodná", "school": "škola", "hotel": "hotelová", "art": "umelecká", "event": "udalosť", "ticketing": "vstupenková", "cycling": "cyklistická", "network": "sieťová", "regional": "regionálna", "center": "centrum", "news": "spravodajská", "religious": "náboženská", "commercial": "komerčná", "authority": "autorita", "transport": "dopravná", "logistics": "logistická", "research": "výskumná", "project": "projektová", "entertainment": "zábavná", "media": "mediálna", "transformation": "transformácia", "land": "pozemková", "management": "správa", "sustainability": "udržateľnosť", "cosmetics": "kozmetická", "infrastructure": "infraštruktúra", "climate": "klimatická", "technology": "technológia", "catering": "catering", "safety": "bezpečnosť", "emergency": "núdzová", "planning": "plánovanie", "production": "produkcia", "awareness": "povedomie", "innovation": "inovácia", "mobility": "mobilita", "parking": "parkovacia", "archive": "archívna", "cooperation": "spolupráca", "Baltic": "Baltská", "region": "región", "agriculture": "poľnohospodárstvo", "youth": "mládežnícka", "study": "študijná", "care": "starostlivosť", "energy": "energetická", "linking": "odkazujúce", "domains": "domény", "domain": "doména", "Beauty": "Krása", "Telecom": "Telekomunikačná", "HVAC": "VZT", "European": "Európska", "expo": "expo", "EU": "EÚ", "Music": "Hudba", "Art": "Umenie", "Design": "Dizajn", "Energy": "Energia", "Research": "Výskum", "Transport": "Doprava", "Safety": "Bezpečnosť", "Care": "Starostlivosť", "Cycling": "Cyklistika" },
  sr: { "Premium": "Премиум", "Short": "Кратак", "and": "и", "memorable": "упечатљив", "powerful": "моћан", "Belgian": "Белгијска", "Dutch": "Холандска", "German": "Немачка", "French": "Француска", "British": "Британска", "Austrian": "Аустријска", "Hungarian": "Мађарска", "Italian": "Италијанска", "Welsh": "Велшка", "Greek": "Грчка", "Creative": "Креативна", "Educational": "Образовна", "Historical": "Историјска", "cultural": "културна", "from": "од", "with": "са", "other": "друге", "strong": "јаке", "high": "висок", "Sustainable": "Одржива", "Digital": "Дигитална", "Financial": "Финансијска", "International": "Међународна", "space": "свемирска", "business": "пословна", "school": "школа", "hotel": "хотелска", "art": "уметничка", "event": "догађај", "ticketing": "карте", "cycling": "бициклистичка", "network": "мрежна", "regional": "регионална", "center": "центар", "news": "вести", "religious": "верска", "commercial": "комерцијална", "authority": "ауторитет", "transport": "транспортна", "logistics": "логистичка", "research": "истраживачка", "project": "пројектна", "entertainment": "забавна", "media": "медијска", "transformation": "трансформација", "land": "земљишна", "management": "управљање", "sustainability": "одрживост", "cosmetics": "козметичка", "infrastructure": "инфраструктура", "climate": "климатска", "technology": "технологија", "catering": "кетеринг", "safety": "безбедност", "emergency": "хитна", "planning": "планирање", "production": "производња", "awareness": "свест", "innovation": "иновација", "mobility": "мобилност", "parking": "паркирање", "archive": "архивска", "cooperation": "сарадња", "Baltic": "Балтичка", "region": "регион", "agriculture": "пољопривреда", "youth": "омладинска", "study": "студијска", "care": "нега", "energy": "енергетска", "linking": "повезујући", "domains": "домени", "domain": "домен", "Beauty": "Лепота", "Telecom": "Телеком", "HVAC": "КГХ", "European": "Европска", "expo": "сајам", "EU": "ЕУ", "Music": "Музика", "Art": "Уметност", "Design": "Дизајн", "Energy": "Енергија", "Research": "Истраживања", "Transport": "Транспорт", "Safety": "Безбедност", "Care": "Нега", "Cycling": "Бициклизам" },
  sl: { "Premium": "Premium", "Short": "Kratka", "and": "in", "memorable": "zapomnljiva", "powerful": "močna", "Belgian": "Belgijska", "Dutch": "Nizozemska", "German": "Nemška", "French": "Francoska", "British": "Britanska", "Austrian": "Avstrijska", "Hungarian": "Madžarska", "Italian": "Italijanska", "Welsh": "Valižanska", "Greek": "Grška", "Creative": "Kreativna", "Educational": "Izobraževalna", "Historical": "Zgodovinska", "cultural": "kulturna", "from": "od", "with": "z", "other": "druge", "strong": "močne", "high": "visok", "Sustainable": "Trajnostna", "Digital": "Digitalna", "Financial": "Finančna", "International": "Mednarodna", "space": "vesoljska", "business": "poslovna", "school": "šola", "hotel": "hotelska", "art": "umetniška", "event": "dogodek", "ticketing": "vstopnična", "cycling": "kolesarska", "network": "omrežna", "regional": "regionalna", "center": "center", "news": "novičarska", "religious": "verska", "commercial": "komercialna", "authority": "avtoriteta", "transport": "prevozna", "logistics": "logistična", "research": "raziskovalna", "project": "projektna", "entertainment": "zabavna", "media": "medijska", "transformation": "transformacija", "land": "zemljiška", "management": "upravljanje", "sustainability": "trajnostnost", "cosmetics": "kozmetična", "infrastructure": "infrastruktura", "climate": "podnebna", "technology": "tehnologija", "catering": "catering", "safety": "varnost", "emergency": "nujna", "planning": "načrtovanje", "production": "produkcija", "awareness": "ozaveščenost", "innovation": "inovacija", "mobility": "mobilnost", "parking": "parkiranje", "archive": "arhivska", "cooperation": "sodelovanje", "Baltic": "Baltska", "region": "regija", "agriculture": "kmetijstvo", "youth": "mladinska", "study": "študijska", "care": "oskrba", "energy": "energetska", "linking": "povezujoče", "domains": "domene", "domain": "domena", "Beauty": "Lepota", "Telecom": "Telekom", "HVAC": "OHK", "European": "Evropska", "expo": "sejem", "EU": "EU", "Music": "Glasba", "Art": "Umetnost", "Design": "Oblikovanje", "Energy": "Energija", "Research": "Raziskave", "Transport": "Prevoz", "Safety": "Varnost", "Care": "Oskrba", "Cycling": "Kolesarstvo" },
  ko: { "Premium": "프리미엄", "Short": "짧은", "and": "및", "memorable": "기억에 남는", "powerful": "강력한", "Belgian": "벨기에", "Dutch": "네덜란드", "German": "독일", "French": "프랑스", "British": "영국", "Austrian": "오스트리아", "Hungarian": "헝가리", "Italian": "이탈리아", "Welsh": "웨일스", "Greek": "그리스", "Creative": "크리에이티브", "Educational": "교육", "Historical": "역사적", "cultural": "문화적", "from": "에서", "with": "와", "other": "기타", "strong": "강력한", "high": "높은", "Sustainable": "지속 가능한", "Digital": "디지털", "Financial": "금융", "International": "국제", "space": "우주", "business": "비즈니스", "school": "학교", "hotel": "호텔", "art": "예술", "event": "이벤트", "ticketing": "티켓팅", "cycling": "사이클링", "network": "네트워크", "regional": "지역", "center": "센터", "news": "뉴스", "religious": "종교", "commercial": "상업", "authority": "권위", "transport": "교통", "logistics": "물류", "research": "연구", "project": "프로젝트", "entertainment": "엔터테인먼트", "media": "미디어", "transformation": "전환", "land": "토지", "management": "관리", "sustainability": "지속가능성", "cosmetics": "화장품", "infrastructure": "인프라", "climate": "기후", "technology": "기술", "catering": "케이터링", "safety": "안전", "emergency": "비상", "planning": "계획", "production": "제작", "awareness": "인식", "innovation": "혁신", "mobility": "모빌리티", "parking": "주차", "archive": "아카이브", "cooperation": "협력", "Baltic": "발트해", "region": "지역", "agriculture": "농업", "youth": "청소년", "study": "연구", "care": "케어", "energy": "에너지", "linking": "연결", "domains": "도메인", "domain": "도메인", "Beauty": "뷰티", "Telecom": "텔레콤", "HVAC": "HVAC", "European": "유럽", "expo": "엑스포", "EU": "EU", "Music": "음악", "Art": "예술", "Design": "디자인", "Energy": "에너지", "Research": "연구", "Transport": "교통", "Safety": "안전", "Care": "케어", "Cycling": "사이클링" },
  hu: { "Premium": "Prémium", "Short": "Rövid", "and": "és", "memorable": "emlékezetes", "powerful": "erős", "Belgian": "Belga", "Dutch": "Holland", "German": "Német", "French": "Francia", "British": "Brit", "Austrian": "Osztrák", "Hungarian": "Magyar", "Italian": "Olasz", "Welsh": "Walesi", "Greek": "Görög", "Creative": "Kreatív", "Educational": "Oktatási", "Historical": "Történelmi", "cultural": "kulturális", "from": "innen:", "with": "val", "other": "más", "strong": "erős", "high": "magas", "Sustainable": "Fenntartható", "Digital": "Digitális", "Financial": "Pénzügyi", "International": "Nemzetközi", "space": "űr", "business": "üzleti", "school": "iskola", "hotel": "szálloda", "art": "művészeti", "event": "rendezvény", "ticketing": "jegyértékesítő", "cycling": "kerékpáros", "network": "hálózati", "regional": "regionális", "center": "központ", "news": "hírek", "religious": "vallási", "commercial": "kereskedelmi", "authority": "tekintély", "transport": "közlekedési", "logistics": "logisztikai", "research": "kutatási", "project": "projekt", "entertainment": "szórakoztatás", "media": "média", "transformation": "átalakulás", "land": "földterület", "management": "kezelés", "sustainability": "fenntarthatóság", "cosmetics": "kozmetikai", "infrastructure": "infrastruktúra", "climate": "klíma", "technology": "technológia", "catering": "vendéglátó", "safety": "biztonság", "emergency": "vészhelyzeti", "planning": "tervezés", "production": "termelés", "awareness": "tudatosság", "innovation": "innováció", "mobility": "mobilitás", "parking": "parkolás", "archive": "archívum", "cooperation": "együttműködés", "Baltic": "Balti", "region": "régió", "agriculture": "mezőgazdaság", "youth": "ifjúsági", "study": "tanulmány", "care": "gondozás", "energy": "energia", "linking": "hivatkozó", "domains": "domainek", "domain": "domain", "Beauty": "Szépség", "Telecom": "Telekommunikáció", "HVAC": "HVAC", "European": "Európai", "expo": "kiállítás", "EU": "EU", "Music": "Zene", "Art": "Művészet", "Design": "Design", "Energy": "Energia", "Research": "Kutatás", "Transport": "Közlekedés", "Safety": "Biztonság", "Care": "Gondozás", "Cycling": "Kerékpározás" },
  th: { "Premium": "พรีเมียม", "Short": "สั้น", "and": "และ", "memorable": "น่าจดจำ", "powerful": "ทรงพลัง", "Belgian": "เบลเยียม", "Dutch": "เนเธอร์แลนด์", "German": "เยอรมัน", "French": "ฝรั่งเศส", "British": "อังกฤษ", "Austrian": "ออสเตรีย", "Hungarian": "ฮังการี", "Italian": "อิตาลี", "Welsh": "เวลส์", "Greek": "กรีก", "Creative": "สร้างสรรค์", "Educational": "การศึกษา", "Historical": "ประวัติศาสตร์", "cultural": "วัฒนธรรม", "from": "จาก", "with": "กับ", "other": "อื่นๆ", "strong": "แข็งแกร่ง", "high": "สูง", "Sustainable": "ยั่งยืน", "Digital": "ดิจิทัล", "Financial": "การเงิน", "International": "นานาชาติ", "space": "อวกาศ", "business": "ธุรกิจ", "school": "โรงเรียน", "hotel": "โรงแรม", "art": "ศิลปะ", "event": "อีเวนต์", "ticketing": "จำหน่ายตั๋ว", "cycling": "จักรยาน", "network": "เครือข่าย", "regional": "ภูมิภาค", "center": "ศูนย์", "news": "ข่าว", "religious": "ศาสนา", "commercial": "พาณิชย์", "authority": "ผู้มีอำนาจ", "transport": "ขนส่ง", "logistics": "โลจิสติกส์", "research": "วิจัย", "project": "โครงการ", "entertainment": "บันเทิง", "media": "สื่อ", "transformation": "การเปลี่ยนแปลง", "land": "ที่ดิน", "management": "การจัดการ", "sustainability": "ความยั่งยืน", "cosmetics": "เครื่องสำอาง", "infrastructure": "โครงสร้างพื้นฐาน", "climate": "ภูมิอากาศ", "technology": "เทคโนโลยี", "catering": "จัดเลี้ยง", "safety": "ความปลอดภัย", "emergency": "ฉุกเฉิน", "planning": "การวางแผน", "production": "การผลิต", "awareness": "ความตระหนัก", "innovation": "นวัตกรรม", "mobility": "การเดินทาง", "parking": "ที่จอดรถ", "archive": "จดหมายเหตุ", "cooperation": "ความร่วมมือ", "Baltic": "บอลติก", "region": "ภูมิภาค", "agriculture": "เกษตรกรรม", "youth": "เยาวชน", "study": "การศึกษา", "care": "การดูแล", "energy": "พลังงาน", "linking": "เชื่อมต่อ", "domains": "โดเมน", "domain": "โดเมน", "Beauty": "ความงาม", "Telecom": "โทรคมนาคม", "HVAC": "HVAC", "European": "ยุโรป", "expo": "นิทรรศการ", "EU": "EU", "Music": "ดนตรี", "Art": "ศิลปะ", "Design": "ออกแบบ", "Energy": "พลังงาน", "Research": "วิจัย", "Transport": "ขนส่ง", "Safety": "ความปลอดภัย", "Care": "การดูแล", "Cycling": "จักรยาน" },
  vi: { "Premium": "Cao cấp", "Short": "Ngắn", "and": "và", "memorable": "dễ nhớ", "powerful": "mạnh mẽ", "Belgian": "Bỉ", "Dutch": "Hà Lan", "German": "Đức", "French": "Pháp", "British": "Anh", "Austrian": "Áo", "Hungarian": "Hungary", "Italian": "Ý", "Welsh": "Wales", "Greek": "Hy Lạp", "Creative": "Sáng tạo", "Educational": "Giáo dục", "Historical": "Lịch sử", "cultural": "văn hóa", "from": "từ", "with": "với", "other": "khác", "strong": "mạnh", "high": "cao", "Sustainable": "Bền vững", "Digital": "Kỹ thuật số", "Financial": "Tài chính", "International": "Quốc tế", "space": "không gian", "business": "kinh doanh", "school": "trường", "hotel": "khách sạn", "art": "nghệ thuật", "event": "sự kiện", "ticketing": "bán vé", "cycling": "xe đạp", "network": "mạng", "regional": "khu vực", "center": "trung tâm", "news": "tin tức", "religious": "tôn giáo", "commercial": "thương mại", "authority": "uy tín", "transport": "vận tải", "logistics": "hậu cần", "research": "nghiên cứu", "project": "dự án", "entertainment": "giải trí", "media": "truyền thông", "transformation": "chuyển đổi", "land": "đất đai", "management": "quản lý", "sustainability": "bền vững", "cosmetics": "mỹ phẩm", "infrastructure": "cơ sở hạ tầng", "climate": "khí hậu", "technology": "công nghệ", "catering": "phục vụ ăn uống", "safety": "an toàn", "emergency": "khẩn cấp", "planning": "quy hoạch", "production": "sản xuất", "awareness": "nhận thức", "innovation": "đổi mới", "mobility": "di chuyển", "parking": "đỗ xe", "archive": "lưu trữ", "cooperation": "hợp tác", "Baltic": "Baltic", "region": "vùng", "agriculture": "nông nghiệp", "youth": "thanh niên", "study": "nghiên cứu", "care": "chăm sóc", "energy": "năng lượng", "linking": "liên kết", "domains": "domain", "domain": "domain", "Beauty": "Làm đẹp", "Telecom": "Viễn thông", "HVAC": "HVAC", "European": "Châu Âu", "expo": "triển lãm", "EU": "EU", "Music": "Âm nhạc", "Art": "Nghệ thuật", "Design": "Thiết kế", "Energy": "Năng lượng", "Research": "Nghiên cứu", "Transport": "Vận tải", "Safety": "An toàn", "Care": "Chăm sóc", "Cycling": "Xe đạp" },
  id: { "Premium": "Premium", "Short": "Pendek", "and": "dan", "memorable": "mudah diingat", "powerful": "kuat", "Belgian": "Belgia", "Dutch": "Belanda", "German": "Jerman", "French": "Prancis", "British": "Inggris", "Austrian": "Austria", "Hungarian": "Hongaria", "Italian": "Italia", "Welsh": "Wales", "Greek": "Yunani", "Creative": "Kreatif", "Educational": "Pendidikan", "Historical": "Sejarah", "cultural": "budaya", "from": "dari", "with": "dengan", "other": "lainnya", "strong": "kuat", "high": "tinggi", "Sustainable": "Berkelanjutan", "Digital": "Digital", "Financial": "Keuangan", "International": "Internasional", "space": "luar angkasa", "business": "bisnis", "school": "sekolah", "hotel": "hotel", "art": "seni", "event": "acara", "ticketing": "tiket", "cycling": "bersepeda", "network": "jaringan", "regional": "regional", "center": "pusat", "news": "berita", "religious": "keagamaan", "commercial": "komersial", "authority": "otoritas", "transport": "transportasi", "logistics": "logistik", "research": "penelitian", "project": "proyek", "entertainment": "hiburan", "media": "media", "transformation": "transformasi", "land": "tanah", "management": "manajemen", "sustainability": "keberlanjutan", "cosmetics": "kosmetik", "infrastructure": "infrastruktur", "climate": "iklim", "technology": "teknologi", "catering": "katering", "safety": "keselamatan", "emergency": "darurat", "planning": "perencanaan", "production": "produksi", "awareness": "kesadaran", "innovation": "inovasi", "mobility": "mobilitas", "parking": "parkir", "archive": "arsip", "cooperation": "kerja sama", "Baltic": "Baltik", "region": "wilayah", "agriculture": "pertanian", "youth": "pemuda", "study": "studi", "care": "perawatan", "energy": "energi", "linking": "terhubung", "domains": "domain", "domain": "domain", "Beauty": "Kecantikan", "Telecom": "Telekomunikasi", "HVAC": "HVAC", "European": "Eropa", "expo": "expo", "EU": "EU", "Music": "Musik", "Art": "Seni", "Design": "Desain", "Energy": "Energi", "Research": "Penelitian", "Transport": "Transportasi", "Safety": "Keselamatan", "Care": "Perawatan", "Cycling": "Bersepeda" },
  et: { "Premium": "Premium", "Short": "Lühike", "and": "ja", "memorable": "meeldejääv", "powerful": "võimas", "Belgian": "Belgia", "Dutch": "Hollandi", "German": "Saksa", "French": "Prantsuse", "British": "Briti", "Austrian": "Austria", "Hungarian": "Ungari", "Italian": "Itaalia", "Welsh": "Walesi", "Greek": "Kreeka", "Creative": "Loominguline", "Educational": "Hariduslik", "Historical": "Ajalooline", "cultural": "kultuuriline", "from": "saitidelt", "with": "koos", "other": "muud", "strong": "tugevad", "high": "kõrge", "Sustainable": "Jätkusuutlik", "Digital": "Digitaalne", "Financial": "Finants", "International": "Rahvusvaheline", "space": "kosmose", "business": "äri", "school": "kool", "hotel": "hotelli", "art": "kunsti", "event": "ürituse", "ticketing": "piletimüügi", "cycling": "rattasõidu", "network": "võrgu", "regional": "piirkondlik", "center": "keskus", "news": "uudiste", "religious": "usundi", "commercial": "kaubanduslik", "authority": "autoriteet", "transport": "transpordi", "logistics": "logistika", "research": "teadus", "project": "projekti", "entertainment": "meelelahutus", "media": "meedia", "transformation": "ümberkujundamine", "land": "maa", "management": "haldamine", "sustainability": "jätkusuutlikkus", "cosmetics": "kosmeetika", "infrastructure": "infrastruktuur", "climate": "kliima", "technology": "tehnoloogia", "catering": "toitlustus", "safety": "ohutus", "emergency": "hädaolukorra", "planning": "planeerimine", "production": "tootmine", "awareness": "teadlikkus", "innovation": "innovatsioon", "mobility": "mobiilsus", "parking": "parkimine", "archive": "arhiivi", "cooperation": "koostöö", "Baltic": "Balti", "region": "piirkond", "agriculture": "põllumajandus", "youth": "noorsoo", "study": "õppe", "care": "hooldus", "energy": "energia", "linking": "ühendavad", "domains": "domeenid", "domain": "domeen", "Beauty": "Ilu", "Telecom": "Telekommunikatsioon", "HVAC": "HVAC", "European": "Euroopa", "expo": "mess", "EU": "EL", "Music": "Muusika", "Art": "Kunst", "Design": "Disain", "Energy": "Energia", "Research": "Teadus", "Transport": "Transport", "Safety": "Ohutus", "Care": "Hooldus", "Cycling": "Rattasõit" },
  lv: { "Premium": "Premium", "Short": "Īss", "and": "un", "memorable": "neaizmirstams", "powerful": "spēcīgs", "Belgian": "Beļģu", "Dutch": "Nīderlandes", "German": "Vācu", "French": "Franču", "British": "Britu", "Austrian": "Austrijas", "Hungarian": "Ungāru", "Italian": "Itāļu", "Welsh": "Velsiešu", "Greek": "Grieķu", "Creative": "Radošs", "Educational": "Izglītības", "Historical": "Vēsturisks", "cultural": "kultūras", "from": "no", "with": "ar", "other": "citi", "strong": "spēcīgas", "high": "augsts", "Sustainable": "Ilgtspējīgs", "Digital": "Digitāls", "Financial": "Finanšu", "International": "Starptautisks", "space": "kosmosa", "business": "biznesa", "school": "skola", "hotel": "viesnīcas", "art": "mākslas", "event": "pasākumu", "ticketing": "biļešu", "cycling": "riteņbraukšanas", "network": "tīkla", "regional": "reģionāls", "center": "centrs", "news": "ziņu", "religious": "reliģisks", "commercial": "komerciāls", "authority": "autoritāte", "transport": "transporta", "logistics": "loģistikas", "research": "pētniecības", "project": "projekta", "entertainment": "izklaides", "media": "mediju", "transformation": "transformācija", "land": "zemes", "management": "pārvaldības", "sustainability": "ilgtspējība", "cosmetics": "kosmētikas", "infrastructure": "infrastruktūra", "climate": "klimata", "technology": "tehnoloģija", "catering": "ēdināšanas", "safety": "drošības", "emergency": "ārkārtas", "planning": "plānošana", "production": "ražošana", "awareness": "izpratne", "innovation": "inovācija", "mobility": "mobilitāte", "parking": "stāvvieta", "archive": "arhīva", "cooperation": "sadarbība", "Baltic": "Baltijas", "region": "reģions", "agriculture": "lauksaimniecība", "youth": "jaunatnes", "study": "studiju", "care": "aprūpe", "energy": "enerģija", "linking": "saistītie", "domains": "domēni", "domain": "domēns", "Beauty": "Skaistums", "Telecom": "Telekomunikācija", "HVAC": "HVAC", "European": "Eiropas", "expo": "expo", "EU": "ES", "Music": "Mūzika", "Art": "Māksla", "Design": "Dizains", "Energy": "Enerģija", "Research": "Pētniecība", "Transport": "Transports", "Safety": "Drošība", "Care": "Aprūpe", "Cycling": "Riteņbraukšana" },
  lt: { "Premium": "Premium", "Short": "Trumpas", "and": "ir", "memorable": "įsimintinas", "powerful": "galingas", "Belgian": "Belgų", "Dutch": "Olandų", "German": "Vokiečių", "French": "Prancūzų", "British": "Britų", "Austrian": "Austrų", "Hungarian": "Vengrų", "Italian": "Italų", "Welsh": "Valų", "Greek": "Graikų", "Creative": "Kūrybinis", "Educational": "Švietimo", "Historical": "Istorinis", "cultural": "kultūrinis", "from": "iš", "with": "su", "other": "kiti", "strong": "stiprios", "high": "aukštas", "Sustainable": "Tvarus", "Digital": "Skaitmeninis", "Financial": "Finansų", "International": "Tarptautinis", "space": "kosmoso", "business": "verslo", "school": "mokykla", "hotel": "viešbučio", "art": "meno", "event": "renginio", "ticketing": "bilietų", "cycling": "dviračių", "network": "tinklo", "regional": "regioninis", "center": "centras", "news": "naujienų", "religious": "religinis", "commercial": "komercinis", "authority": "autoritetas", "transport": "transporto", "logistics": "logistikos", "research": "tyrimų", "project": "projekto", "entertainment": "pramogų", "media": "žiniasklaidos", "transformation": "transformacija", "land": "žemės", "management": "valdymo", "sustainability": "tvarumas", "cosmetics": "kosmetikos", "infrastructure": "infrastruktūra", "climate": "klimato", "technology": "technologijų", "catering": "maitinimo", "safety": "saugumas", "emergency": "avarinis", "planning": "planavimas", "production": "gamyba", "awareness": "sąmoningumas", "innovation": "inovacija", "mobility": "mobilumas", "parking": "parkavimas", "archive": "archyvo", "cooperation": "bendradarbiavimas", "Baltic": "Baltijos", "region": "regionas", "agriculture": "žemės ūkis", "youth": "jaunimo", "study": "studijų", "care": "priežiūra", "energy": "energetikos", "linking": "susieti", "domains": "domenai", "domain": "domenas", "Beauty": "Grožis", "Telecom": "Telekomunikacijų", "HVAC": "ŠVOK", "European": "Europos", "expo": "paroda", "EU": "ES", "Music": "Muzika", "Art": "Menas", "Design": "Dizainas", "Energy": "Energija", "Research": "Tyrimai", "Transport": "Transportas", "Safety": "Saugumas", "Care": "Priežiūra", "Cycling": "Dviračiai" },
  is: { "Premium": "Premium", "Short": "Stutt", "and": "og", "memorable": "minnistætt", "powerful": "öflugt", "Belgian": "Belgískt", "Dutch": "Hollenskt", "German": "Þýskt", "French": "Franskt", "British": "Breskt", "Austrian": "Austurríkt", "Hungarian": "Ungverskt", "Italian": "Ítalskt", "Welsh": "Velst", "Greek": "Grískt", "Creative": "Skapandi", "Educational": "Mennta", "Historical": "Sögulegt", "cultural": "menningarlegt", "from": "frá", "with": "með", "other": "önnur", "strong": "sterk", "high": "hátt", "Sustainable": "Sjálfbært", "Digital": "Stafrænt", "Financial": "Fjármála", "International": "Alþjóðlegt", "space": "geimfræði", "business": "viðskipta", "school": "skóli", "hotel": "hótel", "art": "listar", "event": "viðburðar", "ticketing": "miðasölu", "cycling": "hjólreiða", "network": "nets", "regional": "svæðisbundið", "center": "miðstöð", "news": "frétta", "religious": "trúar", "commercial": "viðskiptalegt", "authority": "vald", "transport": "flutninga", "logistics": "flutningastjórnun", "research": "rannsókna", "project": "verkefnis", "entertainment": "afþreyingar", "media": "fjölmiðla", "transformation": "umbreyting", "land": "lands", "management": "stjórnun", "sustainability": "sjálfbærni", "cosmetics": "snyrtivöru", "infrastructure": "innviðir", "climate": "loftslags", "technology": "tækni", "catering": "veitingaþjónustu", "safety": "öryggis", "emergency": "neyðar", "planning": "skipulagning", "production": "framleiðslu", "awareness": "vitundar", "innovation": "nýsköpun", "mobility": "hreyfanleika", "parking": "bílastæði", "archive": "skjalasafns", "cooperation": "samstarfs", "Baltic": "Eystrasalts", "region": "svæði", "agriculture": "landbúnaðar", "youth": "æskulýðs", "study": "náms", "care": "umönnunar", "energy": "orkumála", "linking": "tengd", "domains": "lén", "domain": "lén", "Beauty": "Fegurð", "Telecom": "Fjarskipta", "HVAC": "HVAC", "European": "Evrópskt", "expo": "sýning", "EU": "ESB", "Music": "Tónlist", "Art": "List", "Design": "Hönnun", "Energy": "Orka", "Research": "Rannsóknir", "Transport": "Flutningar", "Safety": "Öryggi", "Care": "Umönnun", "Cycling": "Hjólreiðar" },
  sq: { "Premium": "Premium", "Short": "I shkurtër", "and": "dhe", "memorable": "i paharrueshëm", "powerful": "i fuqishëm", "Belgian": "Belge", "Dutch": "Holandez", "German": "Gjerman", "French": "Francez", "British": "Britanik", "Austrian": "Austriak", "Hungarian": "Hungarez", "Italian": "Italian", "Welsh": "Uellsian", "Greek": "Grek", "Creative": "Kreativ", "Educational": "Arsimor", "Historical": "Historik", "cultural": "kulturor", "from": "nga", "with": "me", "other": "të tjera", "strong": "të forta", "high": "i lartë", "Sustainable": "I qëndrueshëm", "Digital": "Digjital", "Financial": "Financiar", "International": "Ndërkombëtar", "space": "hapësinor", "business": "biznesi", "school": "shkollë", "hotel": "hotel", "art": "arti", "event": "ngjarje", "ticketing": "biletash", "cycling": "çiklizëm", "network": "rrjeti", "regional": "rajonal", "center": "qendër", "news": "lajmesh", "religious": "fetar", "commercial": "tregtar", "authority": "autoritet", "transport": "transporti", "logistics": "logjistikë", "research": "kërkimi", "project": "projekti", "entertainment": "argëtimi", "media": "media", "transformation": "transformimi", "land": "toke", "management": "menaxhimi", "sustainability": "qëndrueshmëri", "cosmetics": "kozmetikë", "infrastructure": "infrastrukturë", "climate": "klimatik", "technology": "teknologji", "catering": "katering", "safety": "siguri", "emergency": "emergjence", "planning": "planifikim", "production": "prodhim", "awareness": "ndërgjegjësim", "innovation": "inovacion", "mobility": "mobilitet", "parking": "parkim", "archive": "arkiv", "cooperation": "bashkëpunim", "Baltic": "Baltik", "region": "rajon", "agriculture": "bujqësi", "youth": "rinor", "study": "studimi", "care": "kujdes", "energy": "energji", "linking": "domene të lidhura", "domains": "domene", "domain": "domen", "Beauty": "Bukuri", "Telecom": "Telekomunikacion", "HVAC": "HVAC", "European": "Evropian", "expo": "ekspozitë", "EU": "BE", "Music": "Muzikë", "Art": "Art", "Design": "Dizajn", "Energy": "Energji", "Research": "Kërkim", "Transport": "Transport", "Safety": "Siguri", "Care": "Kujdes", "Cycling": "Çiklizëm" },
  mk: { "Premium": "Премиум", "Short": "Кратко", "and": "и", "memorable": "незаборавно", "powerful": "моќно", "Belgian": "Белгиски", "Dutch": "Холандски", "German": "Германски", "French": "Француски", "British": "Британски", "Austrian": "Австриски", "Hungarian": "Унгарски", "Italian": "Италијански", "Welsh": "Велшки", "Greek": "Грчки", "Creative": "Креативен", "Educational": "Образовен", "Historical": "Историски", "cultural": "културен", "from": "од", "with": "со", "other": "други", "strong": "силни", "high": "висок", "Sustainable": "Одржлив", "Digital": "Дигитален", "Financial": "Финансиски", "International": "Меѓународен", "space": "вселенски", "business": "бизнис", "school": "училиште", "hotel": "хотелски", "art": "уметнички", "event": "настан", "ticketing": "билети", "cycling": "велосипедски", "network": "мрежен", "regional": "регионален", "center": "центар", "news": "вести", "religious": "верски", "commercial": "комерцијален", "authority": "авторитет", "transport": "транспортен", "logistics": "логистички", "research": "истражувачки", "project": "проектен", "entertainment": "забавен", "media": "медиумски", "transformation": "трансформација", "land": "земјишен", "management": "управување", "sustainability": "одржливост", "cosmetics": "козметички", "infrastructure": "инфраструктура", "climate": "климатски", "technology": "технологија", "catering": "кетеринг", "safety": "безбедност", "emergency": "итен", "planning": "планирање", "production": "производство", "awareness": "свесност", "innovation": "иновација", "mobility": "мобилност", "parking": "паркирање", "archive": "архивски", "cooperation": "соработка", "Baltic": "Балтички", "region": "регион", "agriculture": "земјоделство", "youth": "младински", "study": "студиски", "care": "грижа", "energy": "енергетски", "linking": "поврзани", "domains": "домени", "domain": "домен", "Beauty": "Убавина", "Telecom": "Телеком", "HVAC": "КГХ", "European": "Европски", "expo": "изложба", "EU": "ЕУ", "Music": "Музика", "Art": "Уметност", "Design": "Дизајн", "Energy": "Енергија", "Research": "Истражување", "Transport": "Транспорт", "Safety": "Безбедност", "Care": "Грижа", "Cycling": "Велосипедизам" },
  bs: { "Premium": "Premium", "Short": "Kratka", "and": "i", "memorable": "upečatljiva", "powerful": "moćna", "Belgian": "Belgijska", "Dutch": "Holandska", "German": "Njemačka", "French": "Francuska", "British": "Britanska", "Austrian": "Austrijska", "Hungarian": "Mađarska", "Italian": "Talijanska", "Welsh": "Velška", "Greek": "Grčka", "Creative": "Kreativna", "Educational": "Obrazovna", "Historical": "Historijska", "cultural": "kulturna", "from": "od", "with": "s", "other": "druge", "strong": "jake", "high": "visok", "Sustainable": "Održiva", "Digital": "Digitalna", "Financial": "Finansijska", "International": "Međunarodna", "space": "svemirska", "business": "poslovna", "school": "škola", "hotel": "hotelska", "art": "umjetnička", "event": "događaj", "ticketing": "ulaznice", "cycling": "biciklistička", "network": "mrežna", "regional": "regionalna", "center": "centar", "news": "vijesti", "religious": "vjerska", "commercial": "komercijalna", "authority": "autoritet", "transport": "transportna", "logistics": "logistička", "research": "istraživačka", "project": "projektna", "entertainment": "zabavna", "media": "medijska", "transformation": "transformacija", "land": "zemljišna", "management": "upravljanje", "sustainability": "održivost", "cosmetics": "kozmetička", "infrastructure": "infrastruktura", "climate": "klimatska", "technology": "tehnologija", "catering": "catering", "safety": "sigurnost", "emergency": "hitna", "planning": "planiranje", "production": "proizvodnja", "awareness": "svijest", "innovation": "inovacija", "mobility": "mobilnost", "parking": "parkiranje", "archive": "arhivska", "cooperation": "saradnja", "Baltic": "Baltička", "region": "regija", "agriculture": "poljoprivreda", "youth": "omladinska", "study": "studijska", "care": "njega", "energy": "energetska", "linking": "povezane", "domains": "domene", "domain": "domena", "Beauty": "Ljepota", "Telecom": "Telekomunikacijska", "HVAC": "KGH", "European": "Evropska", "expo": "sajam", "EU": "EU", "Music": "Muzika", "Art": "Umjetnost", "Design": "Dizajn", "Energy": "Energija", "Research": "Istraživanje", "Transport": "Transport", "Safety": "Sigurnost", "Care": "Njega", "Cycling": "Biciklizam" },
  lb: { "Premium": "Premium", "Short": "Kuerz", "and": "an", "memorable": "onvergiesslech", "powerful": "staark", "Belgian": "Belsch", "Dutch": "Hollännesch", "German": "Däitsch", "French": "Franséisch", "British": "Britesch", "Austrian": "Éisträichesch", "Hungarian": "Ungaresch", "Italian": "Italieenesch", "Welsh": "Walisesch", "Greek": "Griichesch", "Creative": "Kreativ", "Educational": "Bildungs", "Historical": "Historesch", "cultural": "kulturell", "from": "vun", "with": "mat", "other": "aner", "strong": "staark", "high": "héich", "Sustainable": "Nohalteg", "Digital": "Digital", "Financial": "Finanziell", "International": "International", "space": "Weltraum", "business": "Geschäfts", "school": "Schoul", "hotel": "Hotel", "art": "Konscht", "event": "Evenement", "ticketing": "Ticketen", "cycling": "Vëlo", "network": "Netzwierk", "regional": "regional", "center": "Zentrum", "news": "Noriichten", "religious": "reliéis", "commercial": "kommerziell", "authority": "Autoritéit", "transport": "Transport", "logistics": "Logistik", "research": "Fuerschung", "project": "Projet", "entertainment": "Ënnerhaalung", "media": "Medien", "transformation": "Transformatioun", "land": "Land", "management": "Gestioun", "sustainability": "Nohaltegkeet", "cosmetics": "Kosmetik", "infrastructure": "Infrastruktur", "climate": "Klima", "technology": "Technologie", "catering": "Catering", "safety": "Sécherheet", "emergency": "Noutfall", "planning": "Planung", "production": "Produktioun", "awareness": "Bewosstsinn", "innovation": "Innovatioun", "mobility": "Mobilitéit", "parking": "Parken", "archive": "Archiv", "cooperation": "Zesummenaarbecht", "Baltic": "Baltesch", "region": "Regioun", "agriculture": "Landwirtschaft", "youth": "Jugend", "study": "Studie", "care": "Fleeg", "energy": "Energie", "linking": "verlinkt", "domains": "Domainen", "domain": "Domain", "Beauty": "Schéinheet", "Telecom": "Telekommunikatioun", "HVAC": "HVAC", "European": "Europäesch", "expo": "Ausstellung", "EU": "EU", "Music": "Musek", "Art": "Konscht", "Design": "Design", "Energy": "Energie", "Research": "Fuerschung", "Transport": "Transport", "Safety": "Sécherheet", "Care": "Fleeg", "Cycling": "Vëlo" },
  bn: { "Premium": "প্রিমিয়াম", "Short": "সংক্ষিপ্ত", "and": "এবং", "memorable": "স্মরণীয়", "powerful": "শক্তিশালী", "Belgian": "বেলজিয়ান", "Dutch": "ডাচ", "German": "জার্মান", "French": "ফরাসি", "British": "ব্রিটিশ", "Austrian": "অস্ট্রিয়ান", "Hungarian": "হাঙ্গেরিয়ান", "Italian": "ইতালীয়", "Welsh": "ওয়েলশ", "Greek": "গ্রিক", "Creative": "সৃজনশীল", "Educational": "শিক্ষামূলক", "Historical": "ঐতিহাসিক", "cultural": "সাংস্কৃতিক", "from": "থেকে", "with": "সহ", "other": "অন্যান্য", "strong": "শক্তিশালী", "high": "উচ্চ", "Sustainable": "টেকসই", "Digital": "ডিজিটাল", "Financial": "আর্থিক", "International": "আন্তর্জাতিক", "space": "মহাকাশ", "business": "ব্যবসা", "school": "স্কুল", "hotel": "হোটেল", "art": "শিল্প", "event": "ইভেন্ট", "ticketing": "টিকেটিং", "cycling": "সাইক্লিং", "network": "নেটওয়ার্ক", "regional": "আঞ্চলিক", "center": "কেন্দ্র", "news": "সংবাদ", "religious": "ধর্মীয়", "commercial": "বাণিজ্যিক", "authority": "কর্তৃপক্ষ", "transport": "পরিবহন", "logistics": "লজিস্টিক", "research": "গবেষণা", "project": "প্রকল্প", "entertainment": "বিনোদন", "media": "মিডিয়া", "transformation": "রূপান্তর", "land": "ভূমি", "management": "ব্যবস্থাপনা", "sustainability": "টেকসইতা", "cosmetics": "প্রসাধনী", "infrastructure": "অবকাঠামো", "climate": "জলবায়ু", "technology": "প্রযুক্তি", "catering": "খাদ্য পরিষেবা", "safety": "নিরাপত্তা", "emergency": "জরুরি", "planning": "পরিকল্পনা", "production": "উৎপাদন", "awareness": "সচেতনতা", "innovation": "উদ্ভাবন", "mobility": "গতিশীলতা", "parking": "পার্কিং", "archive": "আর্কাইভ", "cooperation": "সহযোগিতা", "Baltic": "বাল্টিক", "region": "অঞ্চল", "agriculture": "কৃষি", "youth": "যুব", "study": "অধ্যয়ন", "care": "যত্ন", "energy": "শক্তি", "linking": "সংযুক্ত", "domains": "ডোমেইন", "domain": "ডোমেইন", "Beauty": "সৌন্দর্য", "Telecom": "টেলিকম", "HVAC": "HVAC", "European": "ইউরোপীয়", "expo": "প্রদর্শনী", "EU": "EU", "Music": "সংগীত", "Art": "শিল্প", "Design": "ডিজাইন", "Energy": "শক্তি", "Research": "গবেষণা", "Transport": "পরিবহন", "Safety": "নিরাপত্তা", "Care": "যত্ন", "Cycling": "সাইক্লিং" },
  ms: { "Premium": "Premium", "Short": "Pendek", "and": "dan", "memorable": "mudah diingat", "powerful": "berkuasa", "Belgian": "Belgium", "Dutch": "Belanda", "German": "Jerman", "French": "Perancis", "British": "British", "Austrian": "Austria", "Hungarian": "Hungary", "Italian": "Itali", "Welsh": "Wales", "Greek": "Greek", "Creative": "Kreatif", "Educational": "Pendidikan", "Historical": "Sejarah", "cultural": "budaya", "from": "dari", "with": "dengan", "other": "lain", "strong": "kuat", "high": "tinggi", "Sustainable": "Mampan", "Digital": "Digital", "Financial": "Kewangan", "International": "Antarabangsa", "space": "angkasa", "business": "perniagaan", "school": "sekolah", "hotel": "hotel", "art": "seni", "event": "acara", "ticketing": "tiket", "cycling": "berbasikal", "network": "rangkaian", "regional": "serantau", "center": "pusat", "news": "berita", "religious": "keagamaan", "commercial": "komersial", "authority": "autoriti", "transport": "pengangkutan", "logistics": "logistik", "research": "penyelidikan", "project": "projek", "entertainment": "hiburan", "media": "media", "transformation": "transformasi", "land": "tanah", "management": "pengurusan", "sustainability": "kemampanan", "cosmetics": "kosmetik", "infrastructure": "infrastruktur", "climate": "iklim", "technology": "teknologi", "catering": "katering", "safety": "keselamatan", "emergency": "kecemasan", "planning": "perancangan", "production": "pengeluaran", "awareness": "kesedaran", "innovation": "inovasi", "mobility": "mobiliti", "parking": "tempat letak kereta", "archive": "arkib", "cooperation": "kerjasama", "Baltic": "Baltik", "region": "wilayah", "agriculture": "pertanian", "youth": "belia", "study": "kajian", "care": "penjagaan", "energy": "tenaga", "linking": "dipautkan", "domains": "domain", "domain": "domain", "Beauty": "Kecantikan", "Telecom": "Telekomunikasi", "HVAC": "HVAC", "European": "Eropah", "expo": "ekspo", "EU": "EU", "Music": "Muzik", "Art": "Seni", "Design": "Reka Bentuk", "Energy": "Tenaga", "Research": "Penyelidikan", "Transport": "Pengangkutan", "Safety": "Keselamatan", "Care": "Penjagaan", "Cycling": "Berbasikal" }
};

// Translate a description from English to target language
function translateDescription(description: string, lang: string): string {
  let result = description;
  const phrases = phraseTranslations[lang as LangCode] as Record<string, string> | undefined;
  const words = wordMap[lang as LangCode] as Record<string, string> | undefined;
  
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
    sr: 'повезујући домени', sl: 'povezujoče domene',
    ko: '연결 도메인', hu: 'hivatkozó domainek', th: 'โดเมนเชื่อมต่อ', vi: 'domain liên kết',
    id: 'domain terhubung', et: 'ühendavad domeenid', lv: 'saistītie domēni', lt: 'susieti domenai',
    is: 'tengd lén', sq: 'domene të lidhura', mk: 'поврзани домени', bs: 'povezane domene',
    lb: 'verlinkt Domainen', bn: 'সংযুক্ত ডোমেইন', ms: 'domain dipautkan'
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
  lang: string
): T[] {
  // Fallback: return original data for unsupported languages
  if (!(lang in categoryTranslations)) return domains;
  const cats = categoryTranslations[lang];
  const ucTranslations = useCaseTranslations[lang] || {};
  
  return domains.map(domain => ({
    ...domain,
    description: translateDescription(domain.description, lang),
    category: cats[domain.category] || domain.category,
    useCases: domain.useCases?.map(uc => ucTranslations[uc] || uc)
  }));
}

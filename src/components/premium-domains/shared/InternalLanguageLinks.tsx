import { Globe } from "lucide-react";

type Lang = string;

const allLanguagePages = [
  { lang: 'nl', label: 'Nederlands', url: '/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde' },
  { lang: 'en', label: 'English', url: '/expireddomainnames/en/buy-premium-domains-high-authority-seo-value' },
  { lang: 'de', label: 'Deutsch', url: '/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert' },
  { lang: 'fr', label: 'Français', url: '/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo' },
  { lang: 'es', label: 'Español', url: '/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo' },
  { lang: 'it', label: 'Italiano', url: '/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo' },
  { lang: 'pt', label: 'Português', url: '/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo' },
  { lang: 'pl', label: 'Polski', url: '/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo' },
  { lang: 'ja', label: '日本語', url: '/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi' },
  { lang: 'zh', label: '中文', url: '/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi' },
  { lang: 'ar', label: 'العربية', url: '/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo' },
  { lang: 'tr', label: 'Türkçe', url: '/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri' },
  { lang: 'hi', label: 'हिन्दी', url: '/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya' },
  { lang: 'sv', label: 'Svenska', url: '/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde' },
  { lang: 'no', label: 'Norsk', url: '/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi' },
  { lang: 'da', label: 'Dansk', url: '/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi' },
  { lang: 'fi', label: 'Suomi', url: '/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo' },
  { lang: 'cs', label: 'Čeština', url: '/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota' },
  { lang: 'el', label: 'Ελληνικά', url: '/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia' },
  { lang: 'ru', label: 'Русский', url: '/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost' },
  { lang: 'ro', label: 'Română', url: '/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo' },
  { lang: 'bg', label: 'Български', url: '/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost' },
  { lang: 'uk', label: 'Українська', url: '/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist' },
  { lang: 'hr', label: 'Hrvatski', url: '/expireddomainnames/hr/kupite-premium-domene-visoki-autoritet-seo-vrijednost' },
  { lang: 'sk', label: 'Slovenčina', url: '/expireddomainnames/sk/kupit-premium-domeny-vysoka-autorita-seo-hodnota' },
  { lang: 'sr', label: 'Српски', url: '/expireddomainnames/sr/kupite-premium-domene-visoki-autoritet-seo-vrednost' },
  { lang: 'sl', label: 'Slovenščina', url: '/expireddomainnames/sl/kupite-premium-domene-visoka-avtoriteta-seo-vrednost' },
  { lang: 'ko', label: '한국어', url: '/expireddomainnames/ko/peurimieom-domein-gumaehagi-nopun-gwonwi-seo-gachi' },
  { lang: 'hu', label: 'Magyar', url: '/expireddomainnames/hu/premium-domain-vasarlas-magas-tekintely-seo-ertek' },
  { lang: 'th', label: 'ไทย', url: '/expireddomainnames/th/sue-domain-premium-amnaj-sung-kha-seo' },
  { lang: 'vi', label: 'Tiếng Việt', url: '/expireddomainnames/vi/mua-ten-mien-premium-uy-tin-cao-gia-tri-seo' },
  { lang: 'id', label: 'Bahasa Indonesia', url: '/expireddomainnames/id/beli-domain-premium-otoritas-tinggi-nilai-seo' },
  { lang: 'et', label: 'Eesti', url: '/expireddomainnames/et/osta-premium-domeenid-korge-autoriteet-seo-vaartus' },
  { lang: 'lv', label: 'Latviešu', url: '/expireddomainnames/lv/pirkt-premium-domenu-augsta-autoritaate-seo-vertiba' },
  { lang: 'lt', label: 'Lietuvių', url: '/expireddomainnames/lt/pirkti-premium-domenus-auksta-autoritetas-seo-verte' },
  { lang: 'is', label: 'Íslenska', url: '/expireddomainnames/is/kaupa-premium-len-hatt-vald-seo-virdi' },
  { lang: 'sq', label: 'Shqip', url: '/expireddomainnames/sq/blini-domain-premium-autoritet-larte-vlere-seo' },
  { lang: 'mk', label: 'Македонски', url: '/expireddomainnames/mk/kupete-premium-domeni-visok-avtoritet-seo-vrednost' },
  { lang: 'bs', label: 'Bosanski', url: '/expireddomainnames/bs/kupite-premium-domene-visoki-autoritet-seo-vrijednost' },
  { lang: 'lb', label: 'Lëtzebuergesch', url: '/expireddomainnames/lb/kaaft-premium-domainen-hech-autoritaet-seo-wert' },
  { lang: 'bn', label: 'বাংলা', url: '/expireddomainnames/bn/premium-domain-kinun-uccho-kartritwa-seo-mulya' },
  { lang: 'ms', label: 'Bahasa Melayu', url: '/expireddomainnames/ms/beli-domain-premium-autoriti-tinggi-nilai-seo' },
];

const defaultTitle = 'Available in 42 Languages';
const defaultSubtitle = 'Our premium domain marketplace is available in 42 languages. Find the perfect domain in your language.';

const titles: Record<Lang, string> = {
  nl: 'Beschikbaar in 42 Talen',
  en: 'Available in 42 Languages',
  de: 'Verfügbar in 42 Sprachen',
  fr: 'Disponible en 42 Langues',
  es: 'Disponible en 42 Idiomas',
  it: 'Disponibile in 42 Lingue',
  pt: 'Disponível em 42 Idiomas',
  pl: 'Dostępne w 42 Językach',
  ja: '42言語で利用可能',
  zh: '支持42种语言',
  ar: 'متاح بـ 42 لغة',
  tr: '42 Dilde Mevcut',
  hi: '42 भाषाओं में उपलब्ध',
  sv: 'Tillgänglig på 42 Språk',
  no: 'Tilgjengelig på 42 Språk',
  da: 'Tilgængelig på 42 Sprog',
  fi: 'Saatavilla 42 Kielellä',
  cs: 'Dostupné ve 42 Jazycích',
  el: 'Διαθέσιμο σε 42 Γλώσσες',
  ru: 'Доступно на 42 Языках',
  ro: 'Disponibil în 42 de Limbi',
  bg: 'Достъпно на 42 Езика',
  uk: 'Доступно 42 Мовами',
  hr: 'Dostupno na 42 Jezika',
  sk: 'Dostupné v 42 Jazykoch',
  sr: 'Доступно на 42 Језика',
  sl: 'Na Voljo v 42 Jezikih',
  ko: '42개 언어로 이용 가능',
  hu: 'Elérhető 42 Nyelven',
  th: 'มีให้บริการใน 42 ภาษา',
  vi: 'Có sẵn bằng 42 Ngôn ngữ',
  id: 'Tersedia dalam 42 Bahasa',
  et: 'Saadaval 42 Keeles',
  lv: 'Pieejams 42 Valodās',
  lt: 'Prieinama 42 Kalbomis',
  is: 'Fáanlegt á 42 Tungumálum',
  sq: 'E disponueshme në 42 Gjuhë',
  mk: 'Достапно на 42 Јазици',
  bs: 'Dostupno na 42 Jezika',
  lb: 'Verfügbar an 42 Sproochen',
  bn: '42টি ভাষায় উপলব্ধ',
  ms: 'Tersedia dalam 42 Bahasa',
};

const subtitles: Record<Lang, string> = {
  nl: 'Onze premium domeinmarktplaats is beschikbaar in 42 talen. Vind het perfecte domein in uw taal.',
  en: defaultSubtitle,
  de: 'Unser Premium-Domain-Marktplatz ist in 42 Sprachen verfügbar. Finden Sie die perfekte Domain in Ihrer Sprache.',
  fr: 'Notre marketplace de domaines premium est disponible en 42 langues. Trouvez le domaine parfait dans votre langue.',
  es: 'Nuestro marketplace de dominios premium está disponible en 42 idiomas. Encuentre el dominio perfecto en su idioma.',
  it: 'Il nostro marketplace di domini premium è disponibile in 42 lingue. Trova il dominio perfetto nella tua lingua.',
  pt: 'O nosso marketplace de domínios premium está disponível em 42 idiomas. Encontre o domínio perfeito no seu idioma.',
  pl: 'Nasz marketplace domen premium jest dostępny w 42 językach. Znajdź idealną domenę w swoim języku.',
  ja: 'プレミアムドメインマーケットプレイスは42言語でご利用いただけます。',
  zh: '我们的高级域名市场支持42种语言。用您的语言找到完美的域名。',
  ar: 'سوق النطاقات المميزة متاح بـ 42 لغة. اعثر على النطاق المثالي بلغتك.',
  tr: 'Premium domain pazarımız 42 dilde mevcuttur. Kendi dilinizde mükemmel domaini bulun.',
  hi: 'हमारा प्रीमियम डोमेन मार्केटप्लेस 42 भाषाओं में उपलब्ध है।',
  sv: 'Vårt utbud av premium domäner finns tillgängligt i 42 språk. Hitta det perfekta domännamnet på ditt språk.',
  no: 'Vårt utvalg av premium domener er tilgjengelig på 42 språk. Finn det perfekte domenenavnet på ditt språk.',
  da: 'Vores udvalg af premium domæner er tilgængeligt på 42 sprog. Find det perfekte domænenavn på dit sprog.',
  fi: 'Premium-verkkotunnusten valikoimamme on saatavilla 42 kielellä. Löydä täydellinen verkkotunnus omalla kielelläsi.',
  cs: 'Naše nabídka prémiových domén je dostupná ve 42 jazycích. Najděte ideální doménu ve svém jazyce.',
  el: 'Η συλλογή μας premium domains είναι διαθέσιμη σε 42 γλώσσες. Βρείτε το τέλειο domain στη γλώσσα σας.',
  ru: 'Наш каталог премиум-доменов доступен на 42 языках. Найдите идеальный домен на своём языке.',
  ro: 'Colecția noastră de domenii premium este disponibilă în 42 de limbi. Găsiți domeniul perfect în limba dvs.',
  bg: 'Нашата колекция от премиум домейни е достъпна на 42 езика. Намерете перфектния домейн на вашия език.',
  uk: 'Наша колекція преміум-доменів доступна 42 мовами. Знайдіть ідеальний домен вашою мовою.',
  hr: 'Naša kolekcija premium domena dostupna je na 42 jezika. Pronađite savršenu domenu na svom jeziku.',
  sk: 'Naša kolekcia prémiových domén je dostupná v 42 jazykoch. Nájdite ideálnu doménu vo svojom jazyku.',
  sr: 'Наша колекција премиум домена доступна је на 42 језика. Пронађите савршен домен на свом језику.',
  sl: 'Naša zbirka premium domen je na voljo v 42 jezikih. Poiščite popolno domeno v svojem jeziku.',
  ko: '프리미엄 도메인 마켓플레이스는 42개 언어로 이용 가능합니다.',
  hu: 'Prémium domain piacterünk 42 nyelven érhető el. Találja meg a tökéletes domaint a saját nyelvén.',
  th: 'ตลาดโดเมนพรีเมียมของเราให้บริการใน 42 ภาษา',
  vi: 'Chợ tên miền cao cấp của chúng tôi có sẵn bằng 42 ngôn ngữ.',
  id: 'Marketplace domain premium kami tersedia dalam 42 bahasa.',
  et: 'Meie premium domeenide turg on saadaval 42 keeles.',
  lv: 'Mūsu premium domēnu tirgus ir pieejams 42 valodās.',
  lt: 'Mūsų premium domenų turgus prieinamas 42 kalbomis.',
  is: 'Úrvals lénið okkar er fáanlegt á 42 tungumálum.',
  sq: 'Tregu ynë i domeneve premium është i disponueshëm në 42 gjuhë.',
  mk: 'Нашиот пазар за премиум домени е достапен на 42 јазици.',
  bs: 'Naš marketplace premium domena dostupan je na 42 jezika.',
  lb: 'Eise Premium-Domain-Marktplaz ass an 42 Sproochen verfügbar.',
  bn: 'আমাদের প্রিমিয়াম ডোমেইন মার্কেটপ্লেস 42টি ভাষায় উপলব্ধ।',
  ms: 'Pasaran domain premium kami tersedia dalam 42 bahasa.',
};

const InternalLanguageLinks = ({ currentLang }: { lang: Lang; currentLang: Lang }) => {
  const otherPages = allLanguagePages.filter(p => p.lang !== currentLang);
  
  return (
    <section className="py-12 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white">{titles[currentLang] || defaultTitle}</h3>
          </div>
          <p className="text-slate-400 text-sm mb-6">{subtitles[currentLang] || defaultSubtitle}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {otherPages.map(page => (
              <a
                key={page.lang}
                href={page.url}
                className="px-3 py-1.5 bg-slate-800/60 border border-slate-700/50 rounded-lg text-slate-300 hover:text-amber-400 hover:border-amber-500/50 transition-all text-sm"
              >
                {page.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternalLanguageLinks;

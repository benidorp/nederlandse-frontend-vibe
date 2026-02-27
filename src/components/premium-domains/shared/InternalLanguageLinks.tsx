import { Globe } from "lucide-react";

type Lang = 'sv' | 'no' | 'da' | 'fi' | 'cs' | 'el' | 'ru' | 'ro' | 'bg' | 'uk' | 'hr' | 'sk' | 'sr' | 'sl';

const allLanguagePages = [
  { lang: 'nl', label: 'Nederlands', url: '/expireddomainnames/nl/verlopen-premium-domeinnamen-kopen-seo-waarde' },
  { lang: 'en', label: 'English', url: '/expireddomainnames/en/buy-premium-domains-high-authority-seo-value' },
  { lang: 'de', label: 'Deutsch', url: '/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert' },
  { lang: 'fr', label: 'Français', url: '/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo' },
  { lang: 'es', label: 'Español', url: '/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo' },
  { lang: 'it', label: 'Italiano', url: '/expireddomainnames/it/acquistare-domini-premium-alta-autorita-valore-seo' },
  { lang: 'pt', label: 'Português', url: '/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo' },
  { lang: 'pl', label: 'Polski', url: '/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo' },
  { lang: 'ja', label: '日本語', url: '/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi' },
  { lang: 'zh', label: '中文', url: '/expireddomainnames/zh/goumai-gaoji-yuming-seo-jiazhi' },
  { lang: 'ar', label: 'العربية', url: '/expireddomainnames/ar/shira-nitaqat-muntahiya-seo' },
  { lang: 'tr', label: 'Türkçe', url: '/expireddomainnames/tr/premium-alan-adi-satin-al-seo-degeri' },
  { lang: 'hi', label: 'हिन्दी', url: '/expireddomainnames/hi/premium-domain-kharide-seo-value' },
  { lang: 'sv', label: 'Svenska', url: '/expireddomainnames/sv/kop-premium-domaner-hog-auktoritet-seo-varde' },
  { lang: 'no', label: 'Norsk', url: '/expireddomainnames/no/kjop-premium-domener-hoy-autoritet-seo-verdi' },
  { lang: 'da', label: 'Dansk', url: '/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi' },
  { lang: 'fi', label: 'Suomi', url: '/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo' },
  { lang: 'cs', label: 'Čeština', url: '/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota' },
  { lang: 'el', label: 'Ελληνικά', url: '/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia' },
  { lang: 'ru', label: 'Русский', url: '/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost' },
  { lang: 'ro', label: 'Română', url: '/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo' },
  { lang: 'bg', label: 'Български', url: '/expireddomainnames/bg/kupete-premium-domejni-visok-avtoritet-seo-stojnost' },
  { lang: 'uk', label: 'Українська', url: '/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist' },
  { lang: 'hr', label: 'Hrvatski', url: '/expireddomainnames/hr/kupite-premium-domene-visoki-autoritet-seo-vrijednost' },
  { lang: 'sk', label: 'Slovenčina', url: '/expireddomainnames/sk/kupit-premium-domeny-vysoka-autorita-seo-hodnota' },
  { lang: 'sr', label: 'Српски', url: '/expireddomainnames/sr/kupite-premium-domene-visoki-autoritet-seo-vrednost' },
  { lang: 'sl', label: 'Slovenščina', url: '/expireddomainnames/sl/kupite-premium-domene-visoka-avtoriteta-seo-vrednost' }
];

const titles: Record<Lang, string> = {
  sv: 'Tillgänglig på Alla Språk',
  no: 'Tilgjengelig på Alle Språk',
  da: 'Tilgængelig på Alle Sprog',
  fi: 'Saatavilla Kaikilla Kielillä',
  cs: 'Dostupné ve Všech Jazycích',
  el: 'Διαθέσιμο σε Όλες τις Γλώσσες',
  ru: 'Доступно на Всех Языках',
  ro: 'Disponibil în Toate Limbile',
  bg: 'Достъпно на Всички Езици',
  uk: 'Доступно Всіма Мовами',
  hr: 'Dostupno na Svim Jezicima',
  sk: 'Dostupné vo Všetkých Jazykoch',
  sr: 'Доступно на Свим Језицима',
  sl: 'Na Voljo v Vseh Jezikih'
};

const subtitles: Record<Lang, string> = {
  sv: 'Vårt utbud av premium domäner finns tillgängligt i 23 språk. Hitta det perfekta domännamnet på ditt språk.',
  no: 'Vårt utvalg av premium domener er tilgjengelig på 23 språk. Finn det perfekte domenenavnet på ditt språk.',
  da: 'Vores udvalg af premium domæner er tilgængeligt på 23 sprog. Find det perfekte domænenavn på dit sprog.',
  fi: 'Premium-verkkotunnusten valikoimamme on saatavilla 23 kielellä. Löydä täydellinen verkkotunnus omalla kielelläsi.',
  cs: 'Naše nabídka prémiových domén je dostupná ve 23 jazycích. Najděte ideální doménu ve svém jazyce.',
  el: 'Η συλλογή μας premium domains είναι διαθέσιμη σε 23 γλώσσες. Βρείτε το τέλειο domain στη γλώσσα σας.',
  ru: 'Наш каталог премиум-доменов доступен на 23 языках. Найдите идеальный домен на своём языке.',
  ro: 'Colecția noastră de domenii premium este disponibilă în 23 de limbi. Găsiți domeniul perfect în limba dvs.',
  bg: 'Нашата колекция от премиум домейни е достъпна на 23 езика. Намерете перфектния домейн на вашия език.',
  uk: 'Наша колекція преміум-доменів доступна 23 мовами. Знайдіть ідеальний домен вашою мовою.',
  hr: 'Naša kolekcija premium domena dostupna je na 27 jezika. Pronađite savršenu domenu na svom jeziku.',
  sk: 'Naša kolekcia prémiových domén je dostupná v 27 jazykoch. Nájdite ideálnu doménu vo svojom jazyku.',
  sr: 'Наша колекција премиум домена доступна је на 27 језика. Пронађите савршен домен на свом језику.',
  sl: 'Naša zbirka premium domen je na voljo v 27 jezikih. Poiščite popolno domeno v svojem jeziku.'
};

const InternalLanguageLinks = ({ currentLang }: { lang: Lang; currentLang: Lang }) => {
  const otherPages = allLanguagePages.filter(p => p.lang !== currentLang);
  
  return (
    <section className="py-12 bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white">{titles[currentLang]}</h3>
          </div>
          <p className="text-slate-400 text-sm mb-6">{subtitles[currentLang]}</p>
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

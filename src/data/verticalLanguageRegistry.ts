/**
 * Centralized Language Registry for all verticals.
 * 
 * When a new translation is added to any vertical, add the language entry here.
 * The VerticalLanguageSwitcher will automatically show the flag on ALL pages of that vertical.
 */

export interface VerticalLanguageEntry {
  code: string;
  name: string;
  path: string;
}

export type VerticalId = "nonprofit" | "photography" | "premium-domains" | "legal-docs" | "vat-calculator";

/**
 * Add new languages here per vertical. The switcher auto-updates on all pages.
 */
export const verticalLanguages: Record<VerticalId, VerticalLanguageEntry[]> = {
  "nonprofit": [
    { code: "en", name: "English", path: "/nonprofit-charity-legal-documents-donation-terms-privacy-policy" },
    { code: "de", name: "Deutsch", path: "/de/gemeinnuetzige-organisation-rechtliche-dokumente-spendenbedingungen-datenschutz" },
    { code: "fr", name: "Français", path: "/fr/association-documents-juridiques-conditions-don-politique-confidentialite" },
  ],

  "photography": [
    { code: "en", name: "English", path: "/photography-legal-documents-terms-conditions-privacy-policy-contract-copyright-protection" },
    { code: "de", name: "Deutsch", path: "/de/fotografie-rechtsdokumente-agb-datenschutz-urheberrecht-haftungsausschluss" },
    { code: "fr", name: "Français", path: "/fr/photographie-documents-juridiques-cgv-confidentialite-droit-auteur-clause" },
    { code: "es", name: "Español", path: "/es/fotografia-documentos-legales-terminos-condiciones-privacidad-derechos-autor-aviso-legal" },
    { code: "it", name: "Italiano", path: "/it/fotografia-documenti-legali-termini-condizioni-privacy-diritto-autore-disclaimer" },
    { code: "sv", name: "Svenska", path: "/sv/fotografi-juridiska-dokument-villkor-integritetspolicy-upphovsratt-ansvarsfriskrivning" },
    { code: "pl", name: "Polski", path: "/pl/fotografia-dokumenty-prawne-regulamin-prywatnosc-prawa-autorskie-zastrzezenia" },
    { code: "el", name: "Ελληνικά", path: "/el/fotografia-nomika-engrafa-oroi-aporitou-pnevmatika-dikaiomata" },
    { code: "da", name: "Dansk", path: "/da/fotografi-juridiske-dokumenter-vilkaar-privatlivspolitik-ophavsret-ansvarsfraskrivelse" },
    { code: "no", name: "Norsk", path: "/no/fotografi-juridiske-dokumenter-vilkaar-personvern-opphavsrett-ansvarsfraskrivelse" },
    { code: "ro", name: "Română", path: "/ro/fotografie-documente-juridice-termeni-confidentialitate-drepturi-autor-declinare" },
    { code: "bg", name: "Български", path: "/bg/fotografiya-pravni-dokumenti-obshti-usloviya-poveritelnost-avtorski-prava" },
    { code: "fi", name: "Suomi", path: "/fi/valokuvaus-oikeudelliset-asiakirjat-kayttoehdot-tietosuoja-tekijanoikeus-vastuuvapaus" },
    { code: "ru", name: "Русский", path: "/ru/fotografiya-yuridicheskie-dokumenty-usloviya-konfidencialnost-avtorskie-prava" },
    { code: "zh", name: "中文", path: "/zh/sheying-falv-wenjian-tiaokuan-yinsi-banquan-baohu-mianze" },
    { code: "hi", name: "हिन्दी", path: "/hi/photography-kanooni-dastavez-niyam-gopyata-copyright-suraksha" },
    { code: "ja", name: "日本語", path: "/ja/shashin-houteki-bunsho-riyoukiyaku-privacy-chosakuken-hogo" },
    { code: "ar", name: "العربية", path: "/ar/taswir-wathaeq-qanuniya-shurut-khususiya-huquq-nashr-ikhla-masuliya" },
    { code: "ko", name: "한국어", path: "/ko/sajin-beobjeok-munseo-iyongyakgwan-gaeinjeongbo-jeojakkwon-boho" },
    { code: "cs", name: "Čeština", path: "/cs/fotografie-pravni-dokumenty-podminky-soukromi-autorska-prava-prohlaseni" },
    { code: "hu", name: "Magyar", path: "/hu/fotografia-jogi-dokumentumok-feltetelek-adatvedelem-szerzoi-jog-felelossegkizaras" },
    { code: "uk", name: "Українська", path: "/uk/fotografiya-yurydychni-dokumenty-umovy-konfidentsijnist-avtorski-prava" },
    { code: "sk", name: "Slovenčina", path: "/sk/fotografia-pravne-dokumenty-podmienky-sukromie-autorske-prava-vyhlasenie" },
    { code: "hr", name: "Hrvatski", path: "/hr/fotografija-pravni-dokumenti-uvjeti-privatnost-autorska-prava-odricanje" },
    { code: "sr", name: "Српски", path: "/sr/fotografija-pravni-dokumenti-uslovi-privatnost-autorska-prava-odricanje" },
    { code: "sl", name: "Slovenščina", path: "/sl/fotografija-pravni-dokumenti-pogoji-zasebnost-avtorske-pravice-omejitev" },
    { code: "tr", name: "Türkçe", path: "/tr/fotograf-yasal-belgeler-sartlar-gizlilik-telif-hakki-sorumluluk-reddi" },
  ],

  "premium-domains": [
    { code: "nl", name: "Nederlands", path: "/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde" },
    { code: "en", name: "English", path: "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value" },
    { code: "de", name: "Deutsch", path: "/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert" },
    { code: "fr", name: "Français", path: "/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo" },
    { code: "es", name: "Español", path: "/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo" },
    { code: "it", name: "Italiano", path: "/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo" },
    { code: "pl", name: "Polski", path: "/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo" },
    { code: "pt", name: "Português", path: "/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo" },
    { code: "zh", name: "中文", path: "/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi" },
    { code: "ja", name: "日本語", path: "/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" },
    { code: "ar", name: "العربية", path: "/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo" },
    { code: "tr", name: "Türkçe", path: "/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" },
    { code: "hi", name: "हिन्दी", path: "/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya" },
    { code: "sv", name: "Svenska", path: "/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde" },
    { code: "no", name: "Norsk", path: "/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi" },
    { code: "da", name: "Dansk", path: "/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi" },
    { code: "fi", name: "Suomi", path: "/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo" },
    { code: "cs", name: "Čeština", path: "/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota" },
    { code: "el", name: "Ελληνικά", path: "/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia" },
    { code: "ru", name: "Русский", path: "/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost" },
    { code: "ro", name: "Română", path: "/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo" },
    { code: "bg", name: "Български", path: "/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost" },
    { code: "uk", name: "Українська", path: "/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist" },
    { code: "hr", name: "Hrvatski", path: "/expireddomainnames/hr/kupite-premium-domene-visoki-autoritet-seo-vrijednost" },
    { code: "sk", name: "Slovenčina", path: "/expireddomainnames/sk/kupit-premium-domeny-vysoka-autorita-seo-hodnota" },
    { code: "sr", name: "Српски", path: "/expireddomainnames/sr/kupite-premium-domene-visoki-autoritet-seo-vrednost" },
    { code: "sl", name: "Slovenščina", path: "/expireddomainnames/sl/kupite-premium-domene-visoka-avtoriteta-seo-vrednost" },
  ],

  "legal-docs": [], // populate when needed
  "vat-calculator": [], // populate when needed
};

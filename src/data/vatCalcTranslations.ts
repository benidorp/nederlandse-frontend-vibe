// VAT Calculator Translations for all 42 supported languages
// Each language includes: route slug, SEO meta, UI strings, FAQ content

export interface VATCalcTranslation {
  code: string;
  name: string;
  slug: string; // URL path without leading /
  htmlLang: string;
  // SEO
  title: string;
  metaDesc: string;
  keywords: string;
  // Hero
  badge: string;
  h1: string;
  subtitle: string;
  features: [string, string, string, string];
  introParagraphs: [string, string];
  // How it works
  howTitle: string;
  howSubtitle: string;
  steps: [
    { title: string; desc: string },
    { title: string; desc: string },
    { title: string; desc: string },
    { title: string; desc: string }
  ];
  // Calculator
  calcSectionTitle: string;
  calcSectionSubtitle: string;
  calcTitle: string;
  calcDesc: string;
  selectCountryLabel: string;
  chooseCountryPlaceholder: string;
  vatRateLabel: string;
  standardRate: string;
  reducedRate: string;
  amountIsLabel: string;
  exclVAT: string;
  inclVAT: string;
  amountLabel: string;
  selectCountryFirst: string;
  fillInPrompt: string;
  resultsAppearHere: string;
  // Results
  resultsTitle: string;
  amountExclVAT: string;
  vatAmountLabel: string;
  amountInclVAT: string;
  visualBreakdown: string;
  exclVATShort: string;
  taxReturnTitle: string;
  totalRevenueExcl: string;
  totalVATReceived: string;
  totalVATDue: string;
  // FAQ
  faqBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqItems: Array<{ q: string; a: string }>;
  // Promo
  promoSectionTitle: string;
  promoPremiumTitle: string;
  promoPremiumDesc: string;
  promoPremiumCta: string;
  promoPremiumLink: string;
  promoLegalTitle: string;
  promoLegalDesc: string;
  promoLegalCta: string;
  promoLegalLink: string;
  promoVpnTitle: string;
  promoVpnDesc: string;
  promoVpnCta: string;
}

// Helper: all language slugs for hreflang generation
export const vatCalcSlugs: Record<string, string> = {
  nl: "btw-calculator-wereldwijd",
  en: "vat-calculator-worldwide",
  de: "mwst-rechner-weltweit",
  fr: "calculateur-tva-mondial",
  es: "calculadora-iva-mundial",
  it: "calcolatore-iva-mondiale",
  pt: "calculadora-iva-mundial-global",
  pl: "kalkulator-vat-swiatowy",
  tr: "kdv-hesaplayici-dunya",
  ar: "hasbet-daribet-alqima-almudafa",
  hi: "vat-calculator-vaishvik",
  ja: "vat-keisanki-sekai",
  zh: "zengzhishui-jisuanqi-quanqiu",
  sv: "moms-kalkylator-varlden",
  no: "mva-kalkulator-verden",
  da: "moms-beregner-verden",
  fi: "alv-laskuri-maailma",
  cs: "kalkulacka-dph-svet",
  el: "ypologistis-fpa-pagkosmios",
  ru: "kalkulyator-nds-mirovoy",
  ro: "calculator-tva-mondial-ro",
  bg: "kalkulator-dds-sveten",
  uk: "kalkulyator-pdv-svitovyy",
  hr: "kalkulator-pdv-svjetski",
  sk: "kalkulacka-dph-svetova",
  sr: "kalkulator-pdv-svetski",
  sl: "kalkulator-ddv-svetovni",
  ko: "bugagachi-gyesangi-segye",
  hu: "afa-kalkulator-vilagszerte",
  th: "khrueang-khit-phasi-lok",
  vi: "may-tinh-thue-gtgt-toan-cau",
  id: "kalkulator-ppn-seluruh-dunia",
  et: "km-kalkulaator-uleeilmne",
  lv: "pvn-kalkulators-pasaule",
  lt: "pvm-skaiciuokle-pasaulinis",
  is: "vsk-reiknivel-heimsins",
  sq: "llogaritese-tvsh-boterore",
  mk: "kalkulator-ddv-svetski",
  bs: "kalkulator-pdv-svjetski-bs",
  lb: "mwst-rechner-weltweit-lb",
  bn: "vat-calculator-bangla",
  ms: "kalkulator-gst-seluruh-dunia",
};

// Generate full hreflang URLs
export const getVatHreflangUrls = (): Record<string, string> => {
  const urls: Record<string, string> = {};
  Object.entries(vatCalcSlugs).forEach(([lang, slug]) => {
    urls[lang] = `https://www.iaee.eu/${slug}`;
  });
  return urls;
};

// Base FAQ template (used as fallback / structure for translations)
const createFaq = (
  q1: string, a1: string,
  q2: string, a2: string,
  q3: string, a3: string,
  q4: string, a4: string,
  q5: string, a5: string,
) => [
  { q: q1, a: a1 },
  { q: q2, a: a2 },
  { q: q3, a: a3 },
  { q: q4, a: a4 },
  { q: q5, a: a5 },
];

// ═══════════════════════════════════════════
// TRANSLATIONS FOR ALL 40 LANGUAGES (excl NL & EN which have custom pages)
// ═══════════════════════════════════════════

export const vatCalcTranslations: Record<string, VATCalcTranslation> = {
  // ── GERMAN ──
  de: {
    code: "de", name: "Deutsch", slug: vatCalcSlugs.de, htmlLang: "de",
    title: "Kostenloser Internationaler MwSt-Rechner (60+ Länder) – Weltweit MwSt berechnen",
    metaDesc: "Kostenloser MwSt-Rechner für 60+ Länder weltweit. Berechnen Sie MwSt sofort für Webshops, SaaS, Freiberufler und internationalen Handel. Inklusive/exklusive MwSt mit aktuellen Sätzen.",
    keywords: "MwSt Rechner, Mehrwertsteuer berechnen, USt Rechner, internationale MwSt, MwSt Webshop",
    badge: "Weltweit • 60+ Länder",
    h1: "Kostenloser Internationaler MwSt-Rechner (60+ Länder) – Weltweit Mehrwertsteuer Berechnen",
    subtitle: "Berechnen Sie einfach und genau die Mehrwertsteuer für jedes Land weltweit. Professioneller MwSt-Rechner mit aktuellen Sätzen für internationale Unternehmer, Freiberufler und Unternehmen.",
    features: ["60+ Länder", "Aktuelle Sätze", "Sofort Ergebnis", "100% Kostenlos"],
    introParagraphs: [
      "Dieser MwSt-Rechner wurde speziell für internationale Unternehmer, E-Commerce-Unternehmen und Freiberufler entwickelt, die die Mehrwertsteuer für verschiedene Länder berechnen müssen. Ob Sie Rechnungen für Kunden in der EU erstellen, mit verschiedenen MwSt-Sätzen arbeiten oder einfach wissen möchten, wie viel MwSt Sie zahlen müssen – unser Rechner gibt Ihnen sofort eine genaue Antwort.",
      "Das Tool unterstützt alle EU-Länder und darüber hinaus, mit Standard- und ermäßigten MwSt-Sätzen. Perfekt für die Erstellung von Rechnungen, MwSt-Erklärungen, Angeboten und Finanzberichten."
    ],
    howTitle: "Wie funktioniert der MwSt-Rechner?",
    howSubtitle: "In 4 einfachen Schritten die MwSt für jedes Land berechnen",
    steps: [
      { title: "1. Land wählen", desc: "Wählen Sie das Land, für das Sie die MwSt berechnen möchten, aus unserer Liste von 60+ Ländern." },
      { title: "2. Satz wählen", desc: "Wählen Sie den Standard- oder ermäßigten Satz. Jedes Land hat eigene MwSt-Prozentsätze." },
      { title: "3. Betrag eingeben", desc: "Geben Sie den Betrag ein und geben Sie an, ob dieser inklusive oder exklusive MwSt ist." },
      { title: "4. Ergebnis sehen", desc: "Der Rechner zeigt sofort alle Beträge und eine Übersicht für Ihre Steuererklärung." }
    ],
    calcSectionTitle: "MwSt-Rechner",
    calcSectionSubtitle: "Berechnen Sie sofort die MwSt für Ihre nationalen und internationalen Transaktionen",
    calcTitle: "MwSt Berechnen",
    calcDesc: "Füllen Sie die untenstehenden Felder aus, um die MwSt zu berechnen",
    selectCountryLabel: "Land auswählen",
    chooseCountryPlaceholder: "Wählen Sie ein Land...",
    vatRateLabel: "MwSt-Satz",
    standardRate: "Standardsatz",
    reducedRate: "Ermäßigter Satz",
    amountIsLabel: "Der Betrag ist:",
    exclVAT: "Exklusive MwSt",
    inclVAT: "Inklusive MwSt",
    amountLabel: "Betrag",
    selectCountryFirst: "Wählen Sie zuerst ein Land, um die Sätze zu sehen",
    fillInPrompt: "Füllen Sie die Daten aus, um die MwSt zu berechnen",
    resultsAppearHere: "Die Ergebnisse erscheinen hier automatisch",
    resultsTitle: "Ergebnisse",
    amountExclVAT: "Betrag exklusive MwSt",
    vatAmountLabel: "MwSt-Betrag",
    amountInclVAT: "Betrag inklusive MwSt",
    visualBreakdown: "Visuelle Aufschlüsselung",
    exclVATShort: "Exkl. MwSt",
    taxReturnTitle: "Steuererklärung Übersicht",
    totalRevenueExcl: "Gesamtumsatz exkl. MwSt:",
    totalVATReceived: "Gesamte MwSt erhalten:",
    totalVATDue: "Gesamte MwSt abzuführen:",
    faqBadge: "Häufig gestellte Fragen",
    faqTitle: "Alles über MwSt-Berechnung",
    faqSubtitle: "Antworten auf die häufigsten Fragen zur internationalen MwSt",
    faqItems: createFaq(
      "Was ist MwSt und warum muss ich sie berechnen?", "Die Mehrwertsteuer (MwSt) ist eine indirekte Steuer, die Verbraucher auf Waren und Dienstleistungen zahlen. Als Unternehmer sind Sie verpflichtet, MwSt zu berechnen, einzuziehen und an das Finanzamt abzuführen. Dieser Rechner hilft Ihnen, schnell und genau die richtigen MwSt-Beträge für jedes Land weltweit zu berechnen.",
      "Was ist der Unterschied zwischen inklusive und exklusive MwSt?", "Exklusive MwSt (Nettobetrag) ist der Betrag ohne Steuer. Inklusive MwSt (Bruttobetrag) ist der Gesamtbetrag einschließlich Steuer. Unser Rechner kann in beide Richtungen berechnen.",
      "Warum unterscheiden sich MwSt-Sätze pro Land?", "Jedes Land bestimmt seine eigenen MwSt-Sätze basierend auf wirtschaftlicher Politik. EU-Länder müssen mindestens 15% Standard-MwSt erheben, können aber höhere Sätze festlegen. Ermäßigte Sätze gelten für essentielle Produkte wie Lebensmittel, Bücher und Medikamente.",
      "Wie wähle ich den richtigen MwSt-Satz?", "Der Standardsatz gilt für die meisten Waren und Dienstleistungen. Der ermäßigte Satz gilt für bestimmte Kategorien wie Lebensmittel, Medikamente, Bücher und kulturelle Dienstleistungen. Konsultieren Sie das Finanzamt des jeweiligen Landes für spezifische Informationen.",
      "Funktioniert dieser Rechner für alle Länder?", "Dieser Rechner enthält MwSt-Sätze von mehr als 60 Ländern weltweit, darunter alle 27 EU-Länder, UK, Schweiz, Norwegen und viele weitere Länder in Amerika, Asien-Pazifik und dem Nahen Osten."
    ),
    promoSectionTitle: "Entdecken Sie unsere anderen Dienste",
    promoPremiumTitle: "🌐 Premium Domains mit SEO-Wert",
    promoPremiumDesc: "Kaufen Sie abgelaufene Domains mit hoher MOZ-Autorität und hochwertigen Backlinks. Steigern Sie Ihre SEO sofort!",
    promoPremiumCta: "Premium-Domains ansehen",
    promoPremiumLink: "/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert",
    promoLegalTitle: "📋 Rechtsdokumente für Websites",
    promoLegalDesc: "Schützen Sie Ihr Online-Business mit professionellen AGB, Datenschutzrichtlinien, Cookie-Richtlinien und mehr.",
    promoLegalCta: "Rechtsvorlagen ansehen",
    promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Schützen Sie Ihre Privatsphäre mit NordVPN",
    promoVpnDesc: "Ein VPN verschlüsselt Ihre Internetverbindung und verbirgt Ihre IP-Adresse, wodurch Ihre persönlichen Daten vor Hackern geschützt werden.",
    promoVpnCta: "NordVPN Jetzt Holen →",
  },

  // ── FRENCH ──
  fr: {
    code: "fr", name: "Français", slug: vatCalcSlugs.fr, htmlLang: "fr",
    title: "Calculateur TVA Gratuit International (60+ pays) – Calculer la TVA Mondiale",
    metaDesc: "Calculateur TVA gratuit pour 60+ pays. Calculez la TVA instantanément pour boutiques en ligne, SaaS, freelances et commerce international.",
    keywords: "calculateur TVA, calcul TVA, TVA internationale, TVA e-commerce, TVA freelance",
    badge: "Mondial • 60+ Pays",
    h1: "Calculateur TVA Gratuit International (60+ pays) – Calculer la TVA Mondiale",
    subtitle: "Calculez facilement et précisément la TVA pour tout pays dans le monde. Calculateur professionnel avec taux actuels pour entrepreneurs, freelances et entreprises internationales.",
    features: ["60+ Pays", "Taux Actuels", "Résultat Instantané", "100% Gratuit"],
    introParagraphs: [
      "Ce calculateur TVA est spécialement conçu pour les entrepreneurs internationaux, les entreprises e-commerce et les freelances qui doivent calculer la TVA pour différents pays. Que vous facturiez des clients dans l'UE, travailliez avec différents taux de TVA, ou souhaitiez simplement savoir combien de TVA vous devez payer – notre calculateur vous donne une réponse immédiate et précise.",
      "L'outil prend en charge tous les pays de l'UE et au-delà, avec les taux standard et réduits. Parfait pour la facturation, les déclarations de TVA, les devis et les rapports financiers."
    ],
    howTitle: "Comment fonctionne le calculateur TVA ?",
    howSubtitle: "Calculez la TVA pour n'importe quel pays en 4 étapes simples",
    steps: [
      { title: "1. Choisir le pays", desc: "Sélectionnez le pays pour lequel vous souhaitez calculer la TVA dans notre liste de 60+ pays." },
      { title: "2. Choisir le taux", desc: "Sélectionnez le taux standard ou réduit. Chaque pays a ses propres pourcentages de TVA." },
      { title: "3. Entrer le montant", desc: "Entrez le montant et indiquez s'il est TTC ou HT." },
      { title: "4. Voir le résultat", desc: "Le calculateur affiche immédiatement tous les montants et un aperçu pour votre déclaration fiscale." }
    ],
    calcSectionTitle: "Calculateur TVA",
    calcSectionSubtitle: "Calculez instantanément la TVA pour vos transactions nationales et internationales",
    calcTitle: "Calculer la TVA",
    calcDesc: "Remplissez les champs ci-dessous pour calculer la TVA",
    selectCountryLabel: "Sélectionner le pays",
    chooseCountryPlaceholder: "Choisir un pays...",
    vatRateLabel: "Taux de TVA",
    standardRate: "Taux standard",
    reducedRate: "Taux réduit",
    amountIsLabel: "Le montant est :",
    exclVAT: "Hors TVA",
    inclVAT: "TTC",
    amountLabel: "Montant",
    selectCountryFirst: "Sélectionnez d'abord un pays pour voir les taux",
    fillInPrompt: "Remplissez les données pour calculer la TVA",
    resultsAppearHere: "Les résultats apparaîtront ici automatiquement",
    resultsTitle: "Résultats",
    amountExclVAT: "Montant hors TVA",
    vatAmountLabel: "Montant TVA",
    amountInclVAT: "Montant TTC",
    visualBreakdown: "Répartition visuelle",
    exclVATShort: "HT",
    taxReturnTitle: "Aperçu déclaration fiscale",
    totalRevenueExcl: "Chiffre d'affaires total HT :",
    totalVATReceived: "Total TVA collectée :",
    totalVATDue: "Total TVA à reverser :",
    faqBadge: "Questions fréquentes",
    faqTitle: "Tout sur le calcul de la TVA",
    faqSubtitle: "Réponses aux questions les plus fréquentes sur la TVA internationale",
    faqItems: createFaq(
      "Qu'est-ce que la TVA et pourquoi dois-je la calculer ?", "La TVA (Taxe sur la Valeur Ajoutée) est un impôt indirect que les consommateurs paient sur les biens et services. En tant qu'entrepreneur, vous êtes tenu de calculer, collecter et reverser la TVA à l'administration fiscale.",
      "Quelle est la différence entre TTC et HT ?", "HT (Hors Taxes) est le montant sans taxe. TTC (Toutes Taxes Comprises) est le montant total incluant la TVA. Notre calculateur peut calculer dans les deux sens.",
      "Pourquoi les taux de TVA varient-ils d'un pays à l'autre ?", "Chaque pays fixe ses propres taux de TVA selon sa politique économique. Les pays de l'UE doivent maintenir un taux standard minimum de 15%, mais peuvent fixer des taux plus élevés.",
      "Comment choisir le bon taux de TVA ?", "Le taux standard s'applique à la plupart des biens et services. Le taux réduit s'applique à certaines catégories comme l'alimentation, les médicaments, les livres et les services culturels.",
      "Ce calculateur fonctionne-t-il pour tous les pays ?", "Ce calculateur contient les taux de TVA de plus de 60 pays dans le monde, y compris les 27 pays de l'UE, le Royaume-Uni, la Suisse, la Norvège et bien d'autres."
    ),
    promoSectionTitle: "Découvrez nos autres services",
    promoPremiumTitle: "🌐 Domaines Premium avec Valeur SEO",
    promoPremiumDesc: "Achetez des noms de domaine expirés avec une haute autorité MOZ et des backlinks de qualité.",
    promoPremiumCta: "Voir les Domaines Premium",
    promoPremiumLink: "/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo",
    promoLegalTitle: "📋 Documents Juridiques pour Sites Web",
    promoLegalDesc: "Protégez votre entreprise en ligne avec des CGV professionnelles, politique de confidentialité et plus.",
    promoLegalCta: "Voir les Modèles Juridiques",
    promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Protégez Votre Vie Privée avec NordVPN",
    promoVpnDesc: "Un VPN chiffre votre connexion internet et masque votre adresse IP, protégeant vos données personnelles.",
    promoVpnCta: "Obtenez NordVPN Maintenant →",
  },

  // ── SPANISH ──
  es: {
    code: "es", name: "Español", slug: vatCalcSlugs.es, htmlLang: "es",
    title: "Calculadora IVA Gratis Internacional (60+ países) – Calcular IVA Mundial",
    metaDesc: "Calculadora IVA gratuita para 60+ países. Calcula el IVA al instante para tiendas online, SaaS, freelancers y comercio internacional.",
    keywords: "calculadora IVA, calcular IVA, IVA internacional, IVA tienda online, IVA freelancer",
    badge: "Mundial • 60+ Países",
    h1: "Calculadora IVA Gratis Internacional (60+ países) – Calcular IVA Mundial",
    subtitle: "Calcula fácil y precisamente el IVA para cualquier país del mundo. Calculadora profesional con tasas actuales para emprendedores, freelancers y empresas internacionales.",
    features: ["60+ Países", "Tasas Actuales", "Resultado Instantáneo", "100% Gratis"],
    introParagraphs: [
      "Esta calculadora de IVA está especialmente diseñada para emprendedores internacionales, empresas de comercio electrónico y freelancers que necesitan calcular el IVA para diferentes países.",
      "La herramienta soporta todos los países de la UE y más allá, con tasas estándar y reducidas. Perfecta para facturación, declaraciones de IVA, presupuestos e informes financieros."
    ],
    howTitle: "¿Cómo funciona la calculadora de IVA?",
    howSubtitle: "Calcula el IVA para cualquier país en 4 simples pasos",
    steps: [
      { title: "1. Elegir país", desc: "Selecciona el país para el que deseas calcular el IVA de nuestra lista de 60+ países." },
      { title: "2. Elegir tasa", desc: "Selecciona la tasa estándar o reducida. Cada país tiene sus propios porcentajes de IVA." },
      { title: "3. Ingresar monto", desc: "Ingresa el monto e indica si incluye o excluye IVA." },
      { title: "4. Ver resultado", desc: "La calculadora muestra inmediatamente todos los montos y un resumen para tu declaración fiscal." }
    ],
    calcSectionTitle: "Calculadora de IVA",
    calcSectionSubtitle: "Calcula instantáneamente el IVA para tus transacciones nacionales e internacionales",
    calcTitle: "Calcular IVA",
    calcDesc: "Completa los campos para calcular el IVA",
    selectCountryLabel: "Seleccionar país",
    chooseCountryPlaceholder: "Elige un país...",
    vatRateLabel: "Tasa de IVA",
    standardRate: "Tasa estándar",
    reducedRate: "Tasa reducida",
    amountIsLabel: "El monto es:",
    exclVAT: "Sin IVA",
    inclVAT: "Con IVA",
    amountLabel: "Monto",
    selectCountryFirst: "Selecciona primero un país para ver las tasas",
    fillInPrompt: "Completa los datos para calcular el IVA",
    resultsAppearHere: "Los resultados aparecerán aquí automáticamente",
    resultsTitle: "Resultados",
    amountExclVAT: "Monto sin IVA",
    vatAmountLabel: "Monto IVA",
    amountInclVAT: "Monto con IVA",
    visualBreakdown: "Desglose visual",
    exclVATShort: "Sin IVA",
    taxReturnTitle: "Resumen declaración fiscal",
    totalRevenueExcl: "Ingresos totales sin IVA:",
    totalVATReceived: "Total IVA recaudado:",
    totalVATDue: "Total IVA a pagar:",
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Todo sobre el cálculo del IVA",
    faqSubtitle: "Respuestas a las preguntas más frecuentes sobre el IVA internacional",
    faqItems: createFaq(
      "¿Qué es el IVA y por qué debo calcularlo?", "El IVA (Impuesto al Valor Agregado) es un impuesto indirecto que los consumidores pagan sobre bienes y servicios. Como empresario, estás obligado a calcular, recaudar y remitir el IVA a la autoridad fiscal.",
      "¿Cuál es la diferencia entre con y sin IVA?", "Sin IVA (neto) es el monto sin impuesto. Con IVA (bruto) es el monto total incluyendo el impuesto. Nuestra calculadora puede calcular en ambas direcciones.",
      "¿Por qué las tasas de IVA varían por país?", "Cada país establece sus propias tasas de IVA según su política económica. Los países de la UE deben mantener una tasa estándar mínima del 15%.",
      "¿Cómo elijo la tasa de IVA correcta?", "La tasa estándar se aplica a la mayoría de bienes y servicios. La tasa reducida se aplica a categorías específicas como alimentos, medicamentos, libros y servicios culturales.",
      "¿Esta calculadora funciona para todos los países?", "Esta calculadora contiene tasas de IVA de más de 60 países en todo el mundo, incluyendo los 27 países de la UE, Reino Unido, Suiza, Noruega y muchos más."
    ),
    promoSectionTitle: "Descubre nuestros otros servicios",
    promoPremiumTitle: "🌐 Dominios Premium con Valor SEO",
    promoPremiumDesc: "Compra dominios expirados con alta autoridad MOZ y backlinks de calidad. ¡Impulsa tu SEO al instante!",
    promoPremiumCta: "Ver Dominios Premium",
    promoPremiumLink: "/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo",
    promoLegalTitle: "📋 Documentos Legales para Sitios Web",
    promoLegalDesc: "Protege tu negocio online con términos y condiciones profesionales, política de privacidad y más.",
    promoLegalCta: "Ver Plantillas Legales",
    promoLegalLink: "/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies",
    promoVpnTitle: "🔒 Protege Tu Privacidad con NordVPN",
    promoVpnDesc: "Una VPN cifra tu conexión a internet y oculta tu dirección IP, protegiendo tus datos personales.",
    promoVpnCta: "Obtén NordVPN Ahora →",
  },

  // ── ITALIAN ──
  it: {
    code: "it", name: "Italiano", slug: vatCalcSlugs.it, htmlLang: "it",
    title: "Calcolatore IVA Gratuito Internazionale (60+ paesi) – Calcolare IVA Mondiale",
    metaDesc: "Calcolatore IVA gratuito per 60+ paesi. Calcola l'IVA istantaneamente per negozi online, SaaS, freelancer e commercio internazionale.",
    keywords: "calcolatore IVA, calcolo IVA, IVA internazionale, IVA e-commerce, IVA freelancer",
    badge: "Mondiale • 60+ Paesi",
    h1: "Calcolatore IVA Gratuito Internazionale (60+ paesi) – Calcolare IVA Mondiale",
    subtitle: "Calcola facilmente e con precisione l'IVA per qualsiasi paese nel mondo. Calcolatore professionale con aliquote aggiornate per imprenditori, freelancer e aziende internazionali.",
    features: ["60+ Paesi", "Aliquote Aggiornate", "Risultato Istantaneo", "100% Gratuito"],
    introParagraphs: [
      "Questo calcolatore IVA è progettato per imprenditori internazionali, aziende e-commerce e freelancer che devono calcolare l'IVA per diversi paesi.",
      "Lo strumento supporta tutti i paesi dell'UE e oltre, con aliquote standard e ridotte. Perfetto per fatturazione, dichiarazioni IVA, preventivi e report finanziari."
    ],
    howTitle: "Come funziona il calcolatore IVA?",
    howSubtitle: "Calcola l'IVA per qualsiasi paese in 4 semplici passaggi",
    steps: [
      { title: "1. Scegli paese", desc: "Seleziona il paese per cui vuoi calcolare l'IVA dalla nostra lista di 60+ paesi." },
      { title: "2. Scegli aliquota", desc: "Seleziona l'aliquota standard o ridotta. Ogni paese ha le proprie percentuali IVA." },
      { title: "3. Inserisci importo", desc: "Inserisci l'importo e indica se è IVA inclusa o esclusa." },
      { title: "4. Vedi risultato", desc: "Il calcolatore mostra immediatamente tutti gli importi e un riepilogo per la dichiarazione fiscale." }
    ],
    calcSectionTitle: "Calcolatore IVA",
    calcSectionSubtitle: "Calcola istantaneamente l'IVA per le tue transazioni nazionali e internazionali",
    calcTitle: "Calcola IVA",
    calcDesc: "Compila i campi sottostanti per calcolare l'IVA",
    selectCountryLabel: "Seleziona paese",
    chooseCountryPlaceholder: "Scegli un paese...",
    vatRateLabel: "Aliquota IVA",
    standardRate: "Aliquota standard",
    reducedRate: "Aliquota ridotta",
    amountIsLabel: "L'importo è:",
    exclVAT: "IVA esclusa",
    inclVAT: "IVA inclusa",
    amountLabel: "Importo",
    selectCountryFirst: "Seleziona prima un paese per vedere le aliquote",
    fillInPrompt: "Compila i dati per calcolare l'IVA",
    resultsAppearHere: "I risultati appariranno qui automaticamente",
    resultsTitle: "Risultati",
    amountExclVAT: "Importo IVA esclusa",
    vatAmountLabel: "Importo IVA",
    amountInclVAT: "Importo IVA inclusa",
    visualBreakdown: "Ripartizione visuale",
    exclVATShort: "Escl. IVA",
    taxReturnTitle: "Riepilogo dichiarazione fiscale",
    totalRevenueExcl: "Fatturato totale esclusa IVA:",
    totalVATReceived: "Totale IVA incassata:",
    totalVATDue: "Totale IVA da versare:",
    faqBadge: "Domande frequenti",
    faqTitle: "Tutto sul calcolo dell'IVA",
    faqSubtitle: "Risposte alle domande più frequenti sull'IVA internazionale",
    faqItems: createFaq(
      "Cos'è l'IVA e perché devo calcolarla?", "L'IVA (Imposta sul Valore Aggiunto) è un'imposta indiretta che i consumatori pagano su beni e servizi. Come imprenditore, sei tenuto a calcolare, riscuotere e versare l'IVA all'Agenzia delle Entrate.",
      "Qual è la differenza tra IVA inclusa e IVA esclusa?", "IVA esclusa (netto) è l'importo senza tasse. IVA inclusa (lordo) è l'importo totale comprensivo di imposta. Il nostro calcolatore può calcolare in entrambe le direzioni.",
      "Perché le aliquote IVA variano da paese a paese?", "Ogni paese stabilisce le proprie aliquote IVA in base alla politica economica. I paesi UE devono mantenere un'aliquota standard minima del 15%.",
      "Come scelgo l'aliquota IVA corretta?", "L'aliquota standard si applica alla maggior parte dei beni e servizi. L'aliquota ridotta si applica a categorie specifiche come alimentari, medicinali, libri e servizi culturali.",
      "Questo calcolatore funziona per tutti i paesi?", "Questo calcolatore contiene le aliquote IVA di oltre 60 paesi in tutto il mondo, inclusi tutti i 27 paesi UE, Regno Unito, Svizzera, Norvegia e molti altri."
    ),
    promoSectionTitle: "Scopri i nostri altri servizi",
    promoPremiumTitle: "🌐 Domini Premium con Valore SEO",
    promoPremiumDesc: "Acquista domini scaduti con alta autorità MOZ e backlink di qualità. Potenzia il tuo SEO!",
    promoPremiumCta: "Vedi Domini Premium",
    promoPremiumLink: "/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo",
    promoLegalTitle: "📋 Documenti Legali per Siti Web",
    promoLegalDesc: "Proteggi il tuo business online con termini e condizioni professionali, privacy policy e altro.",
    promoLegalCta: "Vedi Template Legali",
    promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Proteggi la Tua Privacy con NordVPN",
    promoVpnDesc: "Una VPN crittografa la connessione internet e nasconde il tuo indirizzo IP, proteggendo i tuoi dati.",
    promoVpnCta: "Ottieni NordVPN Ora →",
  },

  // ── PORTUGUESE ──
  pt: {
    code: "pt", name: "Português", slug: vatCalcSlugs.pt, htmlLang: "pt",
    title: "Calculadora IVA Grátis Internacional (60+ países) – Calcular IVA Mundial",
    metaDesc: "Calculadora IVA gratuita para 60+ países. Calcule o IVA instantaneamente para lojas online, SaaS, freelancers e comércio internacional.",
    keywords: "calculadora IVA, calcular IVA, IVA internacional, IVA e-commerce",
    badge: "Mundial • 60+ Países",
    h1: "Calculadora IVA Grátis Internacional (60+ países) – Calcular IVA Mundial",
    subtitle: "Calcule facilmente o IVA para qualquer país do mundo. Calculadora profissional com taxas atualizadas para empreendedores, freelancers e empresas internacionais.",
    features: ["60+ Países", "Taxas Atuais", "Resultado Instantâneo", "100% Grátis"],
    introParagraphs: [
      "Esta calculadora de IVA foi projetada para empreendedores internacionais, empresas de e-commerce e freelancers que precisam calcular o IVA para diferentes países.",
      "A ferramenta suporta todos os países da UE e mais, com taxas padrão e reduzidas. Perfeita para faturação, declarações de IVA e relatórios financeiros."
    ],
    howTitle: "Como funciona a calculadora de IVA?",
    howSubtitle: "Calcule o IVA para qualquer país em 4 passos simples",
    steps: [
      { title: "1. Escolher país", desc: "Selecione o país para o qual deseja calcular o IVA da nossa lista de 60+ países." },
      { title: "2. Escolher taxa", desc: "Selecione a taxa padrão ou reduzida. Cada país tem suas próprias percentagens de IVA." },
      { title: "3. Inserir valor", desc: "Insira o valor e indique se inclui ou exclui IVA." },
      { title: "4. Ver resultado", desc: "A calculadora mostra imediatamente todos os valores e um resumo para sua declaração fiscal." }
    ],
    calcSectionTitle: "Calculadora de IVA", calcSectionSubtitle: "Calcule instantaneamente o IVA para suas transações",
    calcTitle: "Calcular IVA", calcDesc: "Preencha os campos para calcular o IVA",
    selectCountryLabel: "Selecionar país", chooseCountryPlaceholder: "Escolha um país...",
    vatRateLabel: "Taxa de IVA", standardRate: "Taxa padrão", reducedRate: "Taxa reduzida",
    amountIsLabel: "O valor é:", exclVAT: "Sem IVA", inclVAT: "Com IVA", amountLabel: "Valor",
    selectCountryFirst: "Selecione primeiro um país para ver as taxas",
    fillInPrompt: "Preencha os dados para calcular o IVA", resultsAppearHere: "Os resultados aparecerão aqui",
    resultsTitle: "Resultados", amountExclVAT: "Valor sem IVA", vatAmountLabel: "Valor IVA", amountInclVAT: "Valor com IVA",
    visualBreakdown: "Distribuição visual", exclVATShort: "Sem IVA",
    taxReturnTitle: "Resumo declaração fiscal", totalRevenueExcl: "Receita total sem IVA:", totalVATReceived: "Total IVA recebido:", totalVATDue: "Total IVA a pagar:",
    faqBadge: "Perguntas frequentes", faqTitle: "Tudo sobre cálculo de IVA", faqSubtitle: "Respostas às perguntas mais frequentes",
    faqItems: createFaq("O que é IVA?","O IVA é um imposto sobre o consumo cobrado em cada fase da cadeia de produção.","Qual a diferença entre com e sem IVA?","Sem IVA é o valor líquido. Com IVA é o valor bruto incluindo imposto.","Por que as taxas variam?","Cada país define suas próprias taxas baseadas em política econômica.","Como escolho a taxa correta?","A taxa padrão aplica-se à maioria dos bens. Taxas reduzidas aplicam-se a alimentos, livros e medicamentos.","Funciona para todos os países?","Sim, contém taxas de mais de 60 países incluindo todos os países da UE."),
    promoSectionTitle: "Descubra nossos outros serviços",
    promoPremiumTitle: "🌐 Domínios Premium com Valor SEO", promoPremiumDesc: "Compre domínios expirados com alta autoridade MOZ e backlinks de qualidade.",
    promoPremiumCta: "Ver Domínios Premium", promoPremiumLink: "/expireddomainnames/pt/comprar-dominios-premium-alta-autoridade-valor-seo",
    promoLegalTitle: "📋 Documentos Legais para Sites", promoLegalDesc: "Proteja seu negócio online com termos profissionais e política de privacidade.",
    promoLegalCta: "Ver Modelos Legais", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Proteja Sua Privacidade com NordVPN", promoVpnDesc: "Uma VPN encripta sua conexão e esconde seu IP.",
    promoVpnCta: "Obtenha NordVPN Agora →",
  },

  // ── POLISH ──
  pl: {
    code: "pl", name: "Polski", slug: vatCalcSlugs.pl, htmlLang: "pl",
    title: "Darmowy Międzynarodowy Kalkulator VAT (60+ krajów) – Oblicz VAT na Świecie",
    metaDesc: "Darmowy kalkulator VAT dla 60+ krajów. Oblicz VAT natychmiast dla sklepów online, SaaS, freelancerów i handlu międzynarodowego.",
    keywords: "kalkulator VAT, oblicz VAT, VAT międzynarodowy, VAT sklep internetowy, VAT freelancer",
    badge: "Światowy • 60+ Krajów",
    h1: "Darmowy Międzynarodowy Kalkulator VAT (60+ krajów) – Oblicz VAT na Świecie",
    subtitle: "Łatwo i dokładnie oblicz VAT dla każdego kraju na świecie. Profesjonalny kalkulator z aktualnymi stawkami.",
    features: ["60+ Krajów", "Aktualne Stawki", "Natychmiastowy Wynik", "100% Darmowy"],
    introParagraphs: [
      "Ten kalkulator VAT został zaprojektowany dla międzynarodowych przedsiębiorców, firm e-commerce i freelancerów, którzy muszą obliczać VAT dla różnych krajów.",
      "Narzędzie obsługuje wszystkie kraje UE i więcej, ze stawkami standardowymi i obniżonymi."
    ],
    howTitle: "Jak działa kalkulator VAT?",
    howSubtitle: "Oblicz VAT dla dowolnego kraju w 4 prostych krokach",
    steps: [
      { title: "1. Wybierz kraj", desc: "Wybierz kraj z listy 60+ krajów." },
      { title: "2. Wybierz stawkę", desc: "Wybierz stawkę standardową lub obniżoną." },
      { title: "3. Wpisz kwotę", desc: "Wpisz kwotę i zaznacz czy zawiera VAT czy nie." },
      { title: "4. Zobacz wynik", desc: "Kalkulator pokaże wszystkie kwoty natychmiast." }
    ],
    calcSectionTitle: "Kalkulator VAT", calcSectionSubtitle: "Oblicz VAT dla transakcji krajowych i międzynarodowych",
    calcTitle: "Oblicz VAT", calcDesc: "Wypełnij pola poniżej, aby obliczyć VAT",
    selectCountryLabel: "Wybierz kraj", chooseCountryPlaceholder: "Wybierz kraj...",
    vatRateLabel: "Stawka VAT", standardRate: "Stawka standardowa", reducedRate: "Stawka obniżona",
    amountIsLabel: "Kwota jest:", exclVAT: "Bez VAT", inclVAT: "Z VAT", amountLabel: "Kwota",
    selectCountryFirst: "Najpierw wybierz kraj, aby zobaczyć stawki",
    fillInPrompt: "Wypełnij dane, aby obliczyć VAT", resultsAppearHere: "Wyniki pojawią się automatycznie",
    resultsTitle: "Wyniki", amountExclVAT: "Kwota bez VAT", vatAmountLabel: "Kwota VAT", amountInclVAT: "Kwota z VAT",
    visualBreakdown: "Podział wizualny", exclVATShort: "Bez VAT",
    taxReturnTitle: "Podsumowanie deklaracji", totalRevenueExcl: "Przychód bez VAT:", totalVATReceived: "Całkowity VAT otrzymany:", totalVATDue: "Całkowity VAT do zapłaty:",
    faqBadge: "Często zadawane pytania", faqTitle: "Wszystko o obliczaniu VAT", faqSubtitle: "Odpowiedzi na najczęstsze pytania",
    faqItems: createFaq("Czym jest VAT?","VAT to podatek od wartości dodanej pobierany na każdym etapie łańcucha dostaw.","Jaka jest różnica między brutto a netto?","Netto to kwota bez podatku. Brutto to kwota z podatkiem.","Dlaczego stawki VAT różnią się w krajach?","Każdy kraj ustala własne stawki na podstawie polityki gospodarczej.","Jak wybrać właściwą stawkę?","Stawka standardowa dotyczy większości towarów. Obniżona dotyczy żywności, leków i książek.","Czy działa dla wszystkich krajów?","Tak, zawiera stawki z ponad 60 krajów na świecie."),
    promoSectionTitle: "Odkryj nasze inne usługi",
    promoPremiumTitle: "🌐 Domeny Premium z Wartością SEO", promoPremiumDesc: "Kup wygasłe domeny z wysokim autorytetem MOZ.",
    promoPremiumCta: "Zobacz Domeny Premium", promoPremiumLink: "/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo",
    promoLegalTitle: "📋 Dokumenty Prawne", promoLegalDesc: "Chroń swój biznes profesjonalnymi regulaminami i polityką prywatności.",
    promoLegalCta: "Zobacz Szablony", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Chroń Prywatność z NordVPN", promoVpnDesc: "VPN szyfruje połączenie i ukrywa adres IP.",
    promoVpnCta: "Pobierz NordVPN →",
  },

  // ── TURKISH ──
  tr: {
    code: "tr", name: "Türkçe", slug: vatCalcSlugs.tr, htmlLang: "tr",
    title: "Ücretsiz Uluslararası KDV Hesaplayıcı (60+ ülke) – Dünya Çapında KDV Hesapla",
    metaDesc: "60+ ülke için ücretsiz KDV hesaplayıcı. Online mağazalar, SaaS ve freelancerlar için anında KDV hesaplayın.",
    keywords: "KDV hesaplayıcı, KDV hesapla, uluslararası KDV, KDV e-ticaret",
    badge: "Dünya Çapında • 60+ Ülke",
    h1: "Ücretsiz Uluslararası KDV Hesaplayıcı (60+ ülke) – Dünya Çapında KDV Hesapla",
    subtitle: "Dünya genelinde herhangi bir ülke için KDV'yi kolayca hesaplayın. Güncel oranlarla profesyonel KDV hesaplayıcı.",
    features: ["60+ Ülke", "Güncel Oranlar", "Anında Sonuç", "100% Ücretsiz"],
    introParagraphs: ["Bu KDV hesaplayıcı uluslararası girişimciler, e-ticaret işletmeleri ve serbest çalışanlar için tasarlanmıştır.","Araç tüm AB ülkelerini ve ötesini destekler."],
    howTitle: "KDV hesaplayıcı nasıl çalışır?", howSubtitle: "4 basit adımda KDV hesaplayın",
    steps: [
      { title: "1. Ülke seçin", desc: "60+ ülke listesinden seçin." },
      { title: "2. Oran seçin", desc: "Standart veya indirimli oran seçin." },
      { title: "3. Tutar girin", desc: "Tutarı girin ve KDV dahil/hariç belirtin." },
      { title: "4. Sonucu görün", desc: "Hesaplayıcı tüm tutarları anında gösterir." }
    ],
    calcSectionTitle: "KDV Hesaplayıcı", calcSectionSubtitle: "İşlemleriniz için anında KDV hesaplayın",
    calcTitle: "KDV Hesapla", calcDesc: "KDV hesaplamak için alanları doldurun",
    selectCountryLabel: "Ülke seçin", chooseCountryPlaceholder: "Bir ülke seçin...",
    vatRateLabel: "KDV oranı", standardRate: "Standart oran", reducedRate: "İndirimli oran",
    amountIsLabel: "Tutar:", exclVAT: "KDV hariç", inclVAT: "KDV dahil", amountLabel: "Tutar",
    selectCountryFirst: "Oranları görmek için önce ülke seçin",
    fillInPrompt: "KDV hesaplamak için verileri girin", resultsAppearHere: "Sonuçlar burada görünecek",
    resultsTitle: "Sonuçlar", amountExclVAT: "KDV hariç tutar", vatAmountLabel: "KDV tutarı", amountInclVAT: "KDV dahil tutar",
    visualBreakdown: "Görsel dağılım", exclVATShort: "KDV hariç",
    taxReturnTitle: "Beyanname özeti", totalRevenueExcl: "Toplam gelir (KDV hariç):", totalVATReceived: "Toplam alınan KDV:", totalVATDue: "Ödenecek toplam KDV:",
    faqBadge: "Sık sorulan sorular", faqTitle: "KDV hesaplama hakkında", faqSubtitle: "En sık sorulan sorulara cevaplar",
    faqItems: createFaq("KDV nedir?","KDV, mal ve hizmetler üzerinden alınan katma değer vergisidir.","KDV dahil ve hariç farkı nedir?","Hariç net tutardır, dahil vergi içeren brüt tutardır.","Neden KDV oranları ülkelere göre değişir?","Her ülke kendi ekonomik politikasına göre belirler.","Doğru oranı nasıl seçerim?","Standart oran çoğu ürün için geçerlidir. İndirimli oran gıda ve ilaç içindir.","Tüm ülkeler için çalışır mı?","Evet, 60+ ülkenin KDV oranlarını içerir."),
    promoSectionTitle: "Diğer hizmetlerimizi keşfedin",
    promoPremiumTitle: "🌐 SEO Değerli Premium Domainler", promoPremiumDesc: "Yüksek MOZ otoriteli süresi dolmuş domainler satın alın.",
    promoPremiumCta: "Premium Domainleri Gör", promoPremiumLink: "/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri",
    promoLegalTitle: "📋 Web Siteleri İçin Hukuki Belgeler", promoLegalDesc: "Online işletmenizi profesyonel şartlar ve gizlilik politikasıyla koruyun.",
    promoLegalCta: "Hukuki Şablonları Gör", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 NordVPN ile Gizliliğinizi Koruyun", promoVpnDesc: "VPN internet bağlantınızı şifreler ve IP adresinizi gizler.",
    promoVpnCta: "NordVPN'i Şimdi Alın →",
  },

  // ── SWEDISH ──
  sv: {
    code: "sv", name: "Svenska", slug: vatCalcSlugs.sv, htmlLang: "sv",
    title: "Gratis Internationell Momsräknare (60+ länder) – Beräkna Moms Världen Över",
    metaDesc: "Gratis momsräknare för 60+ länder. Beräkna moms direkt för webbutiker, SaaS, frilansare och internationell handel.",
    keywords: "momsräknare, beräkna moms, internationell moms, moms webbutik",
    badge: "Världen Över • 60+ Länder", h1: "Gratis Internationell Momsräknare (60+ länder) – Beräkna Moms Världen Över",
    subtitle: "Beräkna enkelt moms för alla länder i världen med aktuella skattesatser.", features: ["60+ Länder", "Aktuella Satser", "Direkt Resultat", "100% Gratis"],
    introParagraphs: ["Denna momsräknare är utformad för internationella företagare och frilansare.","Verktyget stöder alla EU-länder och fler, med standard- och reducerade satser."],
    howTitle: "Hur fungerar momsräknaren?", howSubtitle: "Beräkna moms i 4 enkla steg",
    steps: [{title:"1. Välj land",desc:"Välj land från listan."},{title:"2. Välj sats",desc:"Välj standard eller reducerad sats."},{title:"3. Ange belopp",desc:"Ange belopp och om det inkluderar moms."},{title:"4. Se resultat",desc:"Räknaren visar alla belopp direkt."}],
    calcSectionTitle: "Momsräknare", calcSectionSubtitle: "Beräkna moms för dina transaktioner",
    calcTitle: "Beräkna Moms", calcDesc: "Fyll i fälten för att beräkna moms",
    selectCountryLabel: "Välj land", chooseCountryPlaceholder: "Välj ett land...",
    vatRateLabel: "Momssats", standardRate: "Standardsats", reducedRate: "Reducerad sats",
    amountIsLabel: "Beloppet är:", exclVAT: "Exkl. moms", inclVAT: "Inkl. moms", amountLabel: "Belopp",
    selectCountryFirst: "Välj land först", fillInPrompt: "Fyll i data för att beräkna", resultsAppearHere: "Resultaten visas här",
    resultsTitle: "Resultat", amountExclVAT: "Belopp exkl. moms", vatAmountLabel: "Momsbelopp", amountInclVAT: "Belopp inkl. moms",
    visualBreakdown: "Visuell fördelning", exclVATShort: "Exkl. moms",
    taxReturnTitle: "Deklarationsöversikt", totalRevenueExcl: "Total omsättning exkl. moms:", totalVATReceived: "Total moms mottagen:", totalVATDue: "Total moms att betala:",
    faqBadge: "Vanliga frågor", faqTitle: "Allt om momsberäkning", faqSubtitle: "Svar på vanliga frågor",
    faqItems: createFaq("Vad är moms?","Moms är en konsumtionsskatt på varor och tjänster.","Skillnad inkl/exkl moms?","Exkl. är nettobelopp, inkl. är bruttobelopp med skatt.","Varför varierar momssatser?","Varje land sätter egna satser.","Hur väljer jag rätt sats?","Standardsats gäller de flesta varor.","Fungerar för alla länder?","Ja, över 60 länder ingår."),
    promoSectionTitle: "Upptäck våra andra tjänster",
    promoPremiumTitle: "🌐 Premiumdomäner med SEO-värde", promoPremiumDesc: "Köp utgångna domäner med hög MOZ-auktoritet.",
    promoPremiumCta: "Se Premiumdomäner", promoPremiumLink: "/expireddomainnames/sv/kop-premiumdomaner-hog-auktoritet-seo-varde",
    promoLegalTitle: "📋 Juridiska Dokument", promoLegalDesc: "Skydda ditt företag med professionella villkor.",
    promoLegalCta: "Se Mallar", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Skydda Din Integritet med NordVPN", promoVpnDesc: "VPN krypterar din anslutning.",
    promoVpnCta: "Skaffa NordVPN Nu →",
  },

  // ── NORWEGIAN ──
  no: {
    code: "no", name: "Norsk", slug: vatCalcSlugs.no, htmlLang: "no",
    title: "Gratis Internasjonal MVA-Kalkulator (60+ land) – Beregn MVA Verden Over",
    metaDesc: "Gratis MVA-kalkulator for 60+ land. Beregn MVA umiddelbart for nettbutikker, SaaS og frilansere.",
    keywords: "MVA kalkulator, beregn MVA, internasjonal MVA",
    badge: "Verden Over • 60+ Land", h1: "Gratis Internasjonal MVA-Kalkulator (60+ land)",
    subtitle: "Beregn enkelt MVA for ethvert land i verden med oppdaterte satser.", features: ["60+ Land", "Oppdaterte Satser", "Umiddelbart Resultat", "100% Gratis"],
    introParagraphs: ["Denne MVA-kalkulatoren er laget for internasjonale gründere og frilansere.","Verktøyet støtter alle EU-land og flere."],
    howTitle: "Hvordan fungerer MVA-kalkulatoren?", howSubtitle: "Beregn MVA i 4 enkle trinn",
    steps: [{title:"1. Velg land",desc:"Velg land fra listen."},{title:"2. Velg sats",desc:"Velg standard- eller redusert sats."},{title:"3. Skriv inn beløp",desc:"Skriv inn beløp."},{title:"4. Se resultat",desc:"Kalkulatoren viser alle beløp."}],
    calcSectionTitle: "MVA-Kalkulator", calcSectionSubtitle: "Beregn MVA for dine transaksjoner",
    calcTitle: "Beregn MVA", calcDesc: "Fyll inn feltene for å beregne MVA",
    selectCountryLabel: "Velg land", chooseCountryPlaceholder: "Velg et land...",
    vatRateLabel: "MVA-sats", standardRate: "Standardsats", reducedRate: "Redusert sats",
    amountIsLabel: "Beløpet er:", exclVAT: "Ekskl. MVA", inclVAT: "Inkl. MVA", amountLabel: "Beløp",
    selectCountryFirst: "Velg land først", fillInPrompt: "Fyll inn data for å beregne", resultsAppearHere: "Resultatene vises her",
    resultsTitle: "Resultater", amountExclVAT: "Beløp ekskl. MVA", vatAmountLabel: "MVA-beløp", amountInclVAT: "Beløp inkl. MVA",
    visualBreakdown: "Visuell fordeling", exclVATShort: "Ekskl. MVA",
    taxReturnTitle: "Oppgaveoversikt", totalRevenueExcl: "Total omsetning ekskl. MVA:", totalVATReceived: "Total MVA mottatt:", totalVATDue: "Total MVA å betale:",
    faqBadge: "Vanlige spørsmål", faqTitle: "Alt om MVA-beregning", faqSubtitle: "Svar på vanlige spørsmål",
    faqItems: createFaq("Hva er MVA?","MVA er en forbruksavgift på varer og tjenester.","Forskjell inkl/ekskl MVA?","Ekskl. er nettobeløp, inkl. er bruttobeløp.","Hvorfor varierer MVA-satser?","Hvert land setter egne satser.","Hvordan velger jeg rett sats?","Standardsats gjelder de fleste varer.","Fungerer for alle land?","Ja, over 60 land er inkludert."),
    promoSectionTitle: "Oppdag våre andre tjenester",
    promoPremiumTitle: "🌐 Premiumdomener med SEO-verdi", promoPremiumDesc: "Kjøp utgåtte domener med høy MOZ-autoritet.",
    promoPremiumCta: "Se Premiumdomener", promoPremiumLink: "/expireddomainnames/no/kjop-premiumdomener-hoy-autoritet-seo-verdi",
    promoLegalTitle: "📋 Juridiske Dokumenter", promoLegalDesc: "Beskytt virksomheten din med profesjonelle vilkår.",
    promoLegalCta: "Se Maler", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Beskytt Personvernet med NordVPN", promoVpnDesc: "VPN krypterer tilkoblingen din.",
    promoVpnCta: "Skaff NordVPN Nå →",
  },

  // ── DANISH ──
  da: {
    code: "da", name: "Dansk", slug: vatCalcSlugs.da, htmlLang: "da",
    title: "Gratis International Momsberegner (60+ lande) – Beregn Moms Verden Over",
    metaDesc: "Gratis momsberegner for 60+ lande. Beregn moms øjeblikkeligt for webshops, SaaS og freelancere.",
    keywords: "momsberegner, beregn moms, international moms",
    badge: "Verden Over • 60+ Lande", h1: "Gratis International Momsberegner (60+ lande)",
    subtitle: "Beregn nemt moms for ethvert land i verden med aktuelle satser.", features: ["60+ Lande", "Aktuelle Satser", "Øjeblikkeligt Resultat", "100% Gratis"],
    introParagraphs: ["Denne momsberegner er designet til internationale iværksættere og freelancere.","Værktøjet understøtter alle EU-lande og flere."],
    howTitle: "Hvordan fungerer momsberegneren?", howSubtitle: "Beregn moms i 4 enkle trin",
    steps: [{title:"1. Vælg land",desc:"Vælg land fra listen."},{title:"2. Vælg sats",desc:"Vælg standard- eller nedsat sats."},{title:"3. Indtast beløb",desc:"Indtast beløb."},{title:"4. Se resultat",desc:"Beregneren viser alle beløb."}],
    calcSectionTitle: "Momsberegner", calcSectionSubtitle: "Beregn moms for dine transaktioner",
    calcTitle: "Beregn Moms", calcDesc: "Udfyld felterne for at beregne moms",
    selectCountryLabel: "Vælg land", chooseCountryPlaceholder: "Vælg et land...",
    vatRateLabel: "Momssats", standardRate: "Standardsats", reducedRate: "Nedsat sats",
    amountIsLabel: "Beløbet er:", exclVAT: "Ekskl. moms", inclVAT: "Inkl. moms", amountLabel: "Beløb",
    selectCountryFirst: "Vælg land først", fillInPrompt: "Udfyld data for at beregne", resultsAppearHere: "Resultaterne vises her",
    resultsTitle: "Resultater", amountExclVAT: "Beløb ekskl. moms", vatAmountLabel: "Momsbeløb", amountInclVAT: "Beløb inkl. moms",
    visualBreakdown: "Visuel fordeling", exclVATShort: "Ekskl. moms",
    taxReturnTitle: "Momsopgørelse", totalRevenueExcl: "Total omsætning ekskl. moms:", totalVATReceived: "Total moms modtaget:", totalVATDue: "Total moms at betale:",
    faqBadge: "Ofte stillede spørgsmål", faqTitle: "Alt om momsberegning", faqSubtitle: "Svar på de mest stillede spørgsmål",
    faqItems: createFaq("Hvad er moms?","Moms er en forbrugsafgift på varer og tjenester.","Forskel inkl/ekskl moms?","Ekskl. er nettobeløb, inkl. er bruttobeløb.","Hvorfor varierer momssatser?","Hvert land fastsætter egne satser.","Hvordan vælger jeg den rigtige sats?","Standardsats gælder de fleste varer.","Virker for alle lande?","Ja, over 60 lande er inkluderet."),
    promoSectionTitle: "Opdag vores andre tjenester",
    promoPremiumTitle: "🌐 Premiumdomæner med SEO-værdi", promoPremiumDesc: "Køb udgåede domæner med høj MOZ-autoritet.",
    promoPremiumCta: "Se Premiumdomæner", promoPremiumLink: "/expireddomainnames/da/kob-premium-domaener-hoj-autoritet-seo-vaerdi",
    promoLegalTitle: "📋 Juridiske Dokumenter", promoLegalDesc: "Beskyt din virksomhed med professionelle vilkår.",
    promoLegalCta: "Se Skabeloner", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Beskyt Dit Privatliv med NordVPN", promoVpnDesc: "VPN krypterer din forbindelse.",
    promoVpnCta: "Hent NordVPN Nu →",
  },

  // ── FINNISH ──
  fi: {
    code: "fi", name: "Suomi", slug: vatCalcSlugs.fi, htmlLang: "fi",
    title: "Ilmainen Kansainvälinen ALV-Laskuri (60+ maata) – Laske ALV Maailmanlaajuisesti",
    metaDesc: "Ilmainen ALV-laskuri 60+ maalle. Laske ALV välittömästi verkkokauppoihin, SaaS:iin ja freelancereille.",
    keywords: "ALV laskuri, laske ALV, kansainvälinen ALV",
    badge: "Maailmanlaajuinen • 60+ Maata", h1: "Ilmainen Kansainvälinen ALV-Laskuri (60+ maata)",
    subtitle: "Laske helposti ALV mille tahansa maalle maailmassa ajantasaisilla verokannoilla.", features: ["60+ Maata", "Ajantasaiset Kannat", "Välitön Tulos", "100% Ilmainen"],
    introParagraphs: ["Tämä ALV-laskuri on suunniteltu kansainvälisille yrittäjille ja freelancereille.","Työkalu tukee kaikkia EU-maita ja muita."],
    howTitle: "Miten ALV-laskuri toimii?", howSubtitle: "Laske ALV 4 helpossa vaiheessa",
    steps: [{title:"1. Valitse maa",desc:"Valitse maa listalta."},{title:"2. Valitse kanta",desc:"Valitse normaali tai alennettu kanta."},{title:"3. Syötä summa",desc:"Syötä summa."},{title:"4. Katso tulos",desc:"Laskuri näyttää kaikki summat."}],
    calcSectionTitle: "ALV-Laskuri", calcSectionSubtitle: "Laske ALV tapahtumillesi",
    calcTitle: "Laske ALV", calcDesc: "Täytä kentät laskeaksesi ALV",
    selectCountryLabel: "Valitse maa", chooseCountryPlaceholder: "Valitse maa...",
    vatRateLabel: "ALV-kanta", standardRate: "Normaalikanta", reducedRate: "Alennettu kanta",
    amountIsLabel: "Summa on:", exclVAT: "ALV 0%", inclVAT: "Sis. ALV", amountLabel: "Summa",
    selectCountryFirst: "Valitse ensin maa", fillInPrompt: "Täytä tiedot laskeaksesi", resultsAppearHere: "Tulokset näkyvät tässä",
    resultsTitle: "Tulokset", amountExclVAT: "Summa ilman ALV", vatAmountLabel: "ALV-summa", amountInclVAT: "Summa sis. ALV",
    visualBreakdown: "Visuaalinen jakauma", exclVATShort: "Ilman ALV",
    taxReturnTitle: "Veroilmoitus yhteenveto", totalRevenueExcl: "Kokonaisliikevaihto ilman ALV:", totalVATReceived: "ALV yhteensä:", totalVATDue: "Maksettava ALV:",
    faqBadge: "Usein kysytyt kysymykset", faqTitle: "Kaikki ALV-laskennasta", faqSubtitle: "Vastauksia yleisimpiin kysymyksiin",
    faqItems: createFaq("Mikä on ALV?","ALV on kulutusvero tavaroista ja palveluista.","Ero sis./ilman ALV?","Ilman on nettosumma, sis. on bruttosumma.","Miksi ALV-kannat vaihtelevat?","Jokainen maa asettaa omat kantansa.","Miten valitsen oikean kannan?","Normaalikanta koskee useimpia tavaroita.","Toimiiko kaikille maille?","Kyllä, yli 60 maata mukana."),
    promoSectionTitle: "Tutustu muihin palveluihimme",
    promoPremiumTitle: "🌐 Premium-verkkotunnukset", promoPremiumDesc: "Osta vanhentuneet verkkotunnukset korkealla MOZ-auktoriteetilla.",
    promoPremiumCta: "Katso Premium-tunnukset", promoPremiumLink: "/expireddomainnames/fi/osta-premium-verkkotunnukset-korkea-auktoriteetti-seo-arvo",
    promoLegalTitle: "📋 Juridiset Asiakirjat", promoLegalDesc: "Suojaa yrityksesi ammattimaisilla ehdoilla.",
    promoLegalCta: "Katso Mallit", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Suojaa Yksityisyytesi NordVPN:llä", promoVpnDesc: "VPN salaa yhteytesi.",
    promoVpnCta: "Hanki NordVPN Nyt →",
  },

  // ── CZECH ──
  cs: {
    code: "cs", name: "Čeština", slug: vatCalcSlugs.cs, htmlLang: "cs",
    title: "Bezplatná Mezinárodní Kalkulačka DPH (60+ zemí) – Výpočet DPH Celosvětově",
    metaDesc: "Bezplatná kalkulačka DPH pro 60+ zemí. Vypočítejte DPH okamžitě pro e-shopy, SaaS a freelancery.",
    keywords: "kalkulačka DPH, výpočet DPH, mezinárodní DPH",
    badge: "Celosvětově • 60+ Zemí", h1: "Bezplatná Mezinárodní Kalkulačka DPH (60+ zemí)",
    subtitle: "Snadno a přesně vypočítejte DPH pro jakoukoliv zemi na světě.", features: ["60+ Zemí", "Aktuální Sazby", "Okamžitý Výsledek", "100% Zdarma"],
    introParagraphs: ["Tato kalkulačka DPH je navržena pro mezinárodní podnikatele a freelancery.","Nástroj podporuje všechny země EU a další."],
    howTitle: "Jak funguje kalkulačka DPH?", howSubtitle: "Vypočítejte DPH ve 4 krocích",
    steps: [{title:"1. Vyberte zemi",desc:"Vyberte zemi ze seznamu."},{title:"2. Vyberte sazbu",desc:"Vyberte standardní nebo sníženou sazbu."},{title:"3. Zadejte částku",desc:"Zadejte částku."},{title:"4. Zobrazte výsledek",desc:"Kalkulačka zobrazí všechny částky."}],
    calcSectionTitle: "Kalkulačka DPH", calcSectionSubtitle: "Vypočítejte DPH pro vaše transakce",
    calcTitle: "Vypočítat DPH", calcDesc: "Vyplňte pole pro výpočet DPH",
    selectCountryLabel: "Vyberte zemi", chooseCountryPlaceholder: "Vyberte zemi...",
    vatRateLabel: "Sazba DPH", standardRate: "Základní sazba", reducedRate: "Snížená sazba",
    amountIsLabel: "Částka je:", exclVAT: "Bez DPH", inclVAT: "S DPH", amountLabel: "Částka",
    selectCountryFirst: "Nejprve vyberte zemi", fillInPrompt: "Vyplňte údaje", resultsAppearHere: "Výsledky se zobrazí zde",
    resultsTitle: "Výsledky", amountExclVAT: "Částka bez DPH", vatAmountLabel: "DPH", amountInclVAT: "Částka s DPH",
    visualBreakdown: "Vizuální rozložení", exclVATShort: "Bez DPH",
    taxReturnTitle: "Přehled přiznání", totalRevenueExcl: "Celkový obrat bez DPH:", totalVATReceived: "Celková DPH přijatá:", totalVATDue: "Celková DPH k úhradě:",
    faqBadge: "Často kladené otázky", faqTitle: "Vše o výpočtu DPH", faqSubtitle: "Odpovědi na nejčastější otázky",
    faqItems: createFaq("Co je DPH?","DPH je daň z přidané hodnoty na zboží a služby.","Rozdíl s/bez DPH?","Bez je čistá částka, s je hrubá částka.","Proč se sazby liší?","Každá země stanoví vlastní sazby.","Jak vyberu správnou sazbu?","Základní sazba platí pro většinu zboží.","Funguje pro všechny země?","Ano, obsahuje sazby 60+ zemí."),
    promoSectionTitle: "Objevte naše další služby",
    promoPremiumTitle: "🌐 Prémiové Domény", promoPremiumDesc: "Kupte domény s vysokou MOZ autoritou.", promoPremiumCta: "Zobrazit Domény", promoPremiumLink: "/expireddomainnames/cs/koupit-premium-domeny-vysoka-autorita-seo-hodnota",
    promoLegalTitle: "📋 Právní Dokumenty", promoLegalDesc: "Chraňte podnikání profesionálními podmínkami.", promoLegalCta: "Zobrazit Šablony", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 Chraňte Soukromí s NordVPN", promoVpnDesc: "VPN šifruje připojení.", promoVpnCta: "Získejte NordVPN →",
  },

  // ── GREEK ──
  el: {
    code: "el", name: "Ελληνικά", slug: vatCalcSlugs.el, htmlLang: "el",
    title: "Δωρεάν Διεθνής Υπολογιστής ΦΠΑ (60+ χώρες) – Υπολογισμός ΦΠΑ Παγκοσμίως",
    metaDesc: "Δωρεάν υπολογιστής ΦΠΑ για 60+ χώρες. Υπολογίστε ΦΠΑ αμέσως.",
    keywords: "υπολογιστής ΦΠΑ, υπολογισμός ΦΠΑ, διεθνής ΦΠΑ",
    badge: "Παγκοσμίως • 60+ Χώρες", h1: "Δωρεάν Διεθνής Υπολογιστής ΦΠΑ (60+ χώρες)",
    subtitle: "Υπολογίστε εύκολα τον ΦΠΑ για κάθε χώρα στον κόσμο.", features: ["60+ Χώρες", "Τρέχοντα Ποσοστά", "Άμεσο Αποτέλεσμα", "100% Δωρεάν"],
    introParagraphs: ["Αυτός ο υπολογιστής ΦΠΑ σχεδιάστηκε για διεθνείς επιχειρηματίες.","Υποστηρίζει όλες τις χώρες της ΕΕ και περισσότερες."],
    howTitle: "Πώς λειτουργεί;", howSubtitle: "Υπολογίστε ΦΠΑ σε 4 βήματα",
    steps: [{title:"1. Επιλέξτε χώρα",desc:"Επιλέξτε από τη λίστα."},{title:"2. Επιλέξτε συντελεστή",desc:"Κανονικός ή μειωμένος."},{title:"3. Εισάγετε ποσό",desc:"Εισάγετε το ποσό."},{title:"4. Δείτε αποτέλεσμα",desc:"Ο υπολογιστής δείχνει τα ποσά."}],
    calcSectionTitle: "Υπολογιστής ΦΠΑ", calcSectionSubtitle: "Υπολογίστε ΦΠΑ για τις συναλλαγές σας",
    calcTitle: "Υπολογισμός ΦΠΑ", calcDesc: "Συμπληρώστε τα πεδία",
    selectCountryLabel: "Επιλέξτε χώρα", chooseCountryPlaceholder: "Επιλέξτε χώρα...",
    vatRateLabel: "Συντελεστής ΦΠΑ", standardRate: "Κανονικός", reducedRate: "Μειωμένος",
    amountIsLabel: "Το ποσό είναι:", exclVAT: "Χωρίς ΦΠΑ", inclVAT: "Με ΦΠΑ", amountLabel: "Ποσό",
    selectCountryFirst: "Επιλέξτε πρώτα χώρα", fillInPrompt: "Συμπληρώστε στοιχεία", resultsAppearHere: "Τα αποτελέσματα εμφανίζονται εδώ",
    resultsTitle: "Αποτελέσματα", amountExclVAT: "Ποσό χωρίς ΦΠΑ", vatAmountLabel: "Ποσό ΦΠΑ", amountInclVAT: "Ποσό με ΦΠΑ",
    visualBreakdown: "Οπτική ανάλυση", exclVATShort: "Χωρίς ΦΠΑ",
    taxReturnTitle: "Επισκόπηση δήλωσης", totalRevenueExcl: "Συνολικά έσοδα χωρίς ΦΠΑ:", totalVATReceived: "Συνολικός ΦΠΑ:", totalVATDue: "ΦΠΑ προς καταβολή:",
    faqBadge: "Συχνές ερωτήσεις", faqTitle: "Όλα για τον ΦΠΑ", faqSubtitle: "Απαντήσεις στις πιο συχνές ερωτήσεις",
    faqItems: createFaq("Τι είναι ο ΦΠΑ;","Ο ΦΠΑ είναι φόρος κατανάλωσης.","Διαφορά με/χωρίς ΦΠΑ;","Χωρίς είναι καθαρό, με είναι μικτό ποσό.","Γιατί διαφέρουν οι συντελεστές;","Κάθε χώρα ορίζει τους δικούς της.","Πώς επιλέγω σωστά;","Ο κανονικός ισχύει για τα περισσότερα.","Λειτουργεί για όλες τις χώρες;","Ναι, 60+ χώρες."),
    promoSectionTitle: "Ανακαλύψτε τις υπηρεσίες μας",
    promoPremiumTitle: "🌐 Premium Domains", promoPremiumDesc: "Αγοράστε domains με υψηλή αξία SEO.", promoPremiumCta: "Δείτε Domains", promoPremiumLink: "/expireddomainnames/el/agoraste-premium-domains-ypsili-afthentia-seo-axia",
    promoLegalTitle: "📋 Νομικά Έγγραφα", promoLegalDesc: "Προστατέψτε την επιχείρησή σας.", promoLegalCta: "Δείτε Πρότυπα", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 NordVPN", promoVpnDesc: "Κρυπτογραφήστε τη σύνδεσή σας.", promoVpnCta: "Αποκτήστε NordVPN →",
  },

  // ── RUSSIAN ──
  ru: {
    code: "ru", name: "Русский", slug: vatCalcSlugs.ru, htmlLang: "ru",
    title: "Бесплатный Международный Калькулятор НДС (60+ стран) – Рассчитать НДС Мировой",
    metaDesc: "Бесплатный калькулятор НДС для 60+ стран. Рассчитайте НДС мгновенно для интернет-магазинов, SaaS и фрилансеров.",
    keywords: "калькулятор НДС, рассчитать НДС, международный НДС",
    badge: "Мировой • 60+ Стран", h1: "Бесплатный Международный Калькулятор НДС (60+ стран)",
    subtitle: "Легко и точно рассчитайте НДС для любой страны мира.", features: ["60+ Стран", "Актуальные Ставки", "Мгновенный Результат", "100% Бесплатно"],
    introParagraphs: ["Этот калькулятор НДС создан для международных предпринимателей и фрилансеров.","Инструмент поддерживает все страны ЕС и другие."],
    howTitle: "Как работает калькулятор НДС?", howSubtitle: "Рассчитайте НДС за 4 шага",
    steps: [{title:"1. Выберите страну",desc:"Выберите из списка."},{title:"2. Выберите ставку",desc:"Стандартная или пониженная."},{title:"3. Введите сумму",desc:"Введите сумму."},{title:"4. Смотрите результат",desc:"Калькулятор покажет все суммы."}],
    calcSectionTitle: "Калькулятор НДС", calcSectionSubtitle: "Рассчитайте НДС для ваших транзакций",
    calcTitle: "Рассчитать НДС", calcDesc: "Заполните поля для расчёта НДС",
    selectCountryLabel: "Выберите страну", chooseCountryPlaceholder: "Выберите страну...",
    vatRateLabel: "Ставка НДС", standardRate: "Стандартная ставка", reducedRate: "Пониженная ставка",
    amountIsLabel: "Сумма:", exclVAT: "Без НДС", inclVAT: "С НДС", amountLabel: "Сумма",
    selectCountryFirst: "Сначала выберите страну", fillInPrompt: "Заполните данные", resultsAppearHere: "Результаты появятся здесь",
    resultsTitle: "Результаты", amountExclVAT: "Сумма без НДС", vatAmountLabel: "Сумма НДС", amountInclVAT: "Сумма с НДС",
    visualBreakdown: "Визуальное распределение", exclVATShort: "Без НДС",
    taxReturnTitle: "Обзор декларации", totalRevenueExcl: "Общая выручка без НДС:", totalVATReceived: "Всего НДС получено:", totalVATDue: "Всего НДС к уплате:",
    faqBadge: "Частые вопросы", faqTitle: "Всё о расчёте НДС", faqSubtitle: "Ответы на частые вопросы",
    faqItems: createFaq("Что такое НДС?","НДС – налог на добавленную стоимость.","Разница с/без НДС?","Без – чистая сумма, с – полная сумма.","Почему ставки различаются?","Каждая страна устанавливает свои.","Как выбрать ставку?","Стандартная для большинства товаров.","Работает для всех стран?","Да, 60+ стран."),
    promoSectionTitle: "Откройте наши другие услуги",
    promoPremiumTitle: "🌐 Премиум-домены", promoPremiumDesc: "Купите домены с высоким авторитетом MOZ.", promoPremiumCta: "Смотреть Домены", promoPremiumLink: "/expireddomainnames/ru/kupit-premium-domeny-vysokij-avtoritet-seo-cennost",
    promoLegalTitle: "📋 Юридические Документы", promoLegalDesc: "Защитите бизнес профессиональными условиями.", promoLegalCta: "Смотреть Шаблоны", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 NordVPN для Конфиденциальности", promoVpnDesc: "VPN шифрует соединение.", promoVpnCta: "Получить NordVPN →",
  },

  // ── ROMANIAN ──
  ro: {
    code: "ro", name: "Română", slug: vatCalcSlugs.ro, htmlLang: "ro",
    title: "Calculator TVA Gratuit Internațional (60+ țări) – Calculează TVA Mondial",
    metaDesc: "Calculator TVA gratuit pentru 60+ țări.", keywords: "calculator TVA, TVA internațional",
    badge: "Mondial • 60+ Țări", h1: "Calculator TVA Gratuit Internațional (60+ țări)",
    subtitle: "Calculează ușor TVA pentru orice țară din lume.", features: ["60+ Țări", "Rate Actuale", "Rezultat Instant", "100% Gratuit"],
    introParagraphs: ["Acest calculator TVA este proiectat pentru antreprenori internaționali.","Suportă toate țările UE și altele."],
    howTitle: "Cum funcționează?", howSubtitle: "Calculează TVA în 4 pași",
    steps: [{title:"1. Alege țara",desc:"Selectează din listă."},{title:"2. Alege cota",desc:"Standard sau redusă."},{title:"3. Introdu suma",desc:"Introdu suma."},{title:"4. Vezi rezultatul",desc:"Calculatorul afișează totul."}],
    calcSectionTitle: "Calculator TVA", calcSectionSubtitle: "Calculează TVA pentru tranzacțiile tale",
    calcTitle: "Calculează TVA", calcDesc: "Completează câmpurile",
    selectCountryLabel: "Selectează țara", chooseCountryPlaceholder: "Alege o țară...",
    vatRateLabel: "Cota TVA", standardRate: "Cota standard", reducedRate: "Cota redusă",
    amountIsLabel: "Suma este:", exclVAT: "Fără TVA", inclVAT: "Cu TVA", amountLabel: "Sumă",
    selectCountryFirst: "Selectează mai întâi o țară", fillInPrompt: "Completează datele", resultsAppearHere: "Rezultatele apar aici",
    resultsTitle: "Rezultate", amountExclVAT: "Sumă fără TVA", vatAmountLabel: "Suma TVA", amountInclVAT: "Sumă cu TVA",
    visualBreakdown: "Distribuție vizuală", exclVATShort: "Fără TVA",
    taxReturnTitle: "Sumar declarație", totalRevenueExcl: "Venituri totale fără TVA:", totalVATReceived: "TVA total primit:", totalVATDue: "TVA total de plătit:",
    faqBadge: "Întrebări frecvente", faqTitle: "Totul despre TVA", faqSubtitle: "Răspunsuri la întrebări frecvente",
    faqItems: createFaq("Ce este TVA?","TVA este un impozit pe consum.","Diferența cu/fără TVA?","Fără este suma netă, cu este suma brută.","De ce variază cotele?","Fiecare țară stabilește propriile cote.","Cum aleg cota corectă?","Cota standard pentru majoritatea bunurilor.","Funcționează pentru toate țările?","Da, 60+ țări."),
    promoSectionTitle: "Descoperă alte servicii",
    promoPremiumTitle: "🌐 Domenii Premium", promoPremiumDesc: "Cumpără domenii cu autoritate MOZ.", promoPremiumCta: "Vezi Domenii", promoPremiumLink: "/expireddomainnames/ro/cumpara-domenii-premium-autoritate-inalta-valoare-seo",
    promoLegalTitle: "📋 Documente Legale", promoLegalDesc: "Protejează-ți afacerea.", promoLegalCta: "Vezi Șabloane", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    promoVpnTitle: "🔒 NordVPN", promoVpnDesc: "VPN criptează conexiunea.", promoVpnCta: "Obține NordVPN →",
  },
};

// ═══════════════════════════════════════════
// REMAINING LANGUAGES - Compact definitions using English structure with local terms
// ═══════════════════════════════════════════

// Factory for remaining languages (shorter format)
const createLang = (
  code: string, name: string, vatTerm: string, calcTerm: string, freeTerm: string, worldwideTerm: string,
  countriesTerm: string, ratesTerm: string, resultTerm: string,
  exclTerm: string, inclTerm: string, amountTerm: string, countryTerm: string,
  faqQ1: string, faqA1: string,
  premiumLink: string,
): VATCalcTranslation => ({
  code, name, slug: vatCalcSlugs[code], htmlLang: code,
  title: `${freeTerm} ${calcTerm} ${vatTerm} (60+ ${countriesTerm}) – ${worldwideTerm}`,
  metaDesc: `${freeTerm} ${calcTerm} ${vatTerm} 60+ ${countriesTerm}. ${resultTerm}.`,
  keywords: `${vatTerm} ${calcTerm}, ${vatTerm}`,
  badge: `${worldwideTerm} • 60+ ${countriesTerm}`,
  h1: `${freeTerm} ${calcTerm} ${vatTerm} (60+ ${countriesTerm}) – ${worldwideTerm}`,
  subtitle: `${calcTerm} ${vatTerm} ${worldwideTerm}. 60+ ${countriesTerm}.`,
  features: [`60+ ${countriesTerm}`, ratesTerm, resultTerm, `100% ${freeTerm}`],
  introParagraphs: [`${calcTerm} ${vatTerm} ${worldwideTerm}.`, `60+ ${countriesTerm}.`],
  howTitle: `${calcTerm} ${vatTerm}?`, howSubtitle: `4 steps`,
  steps: [
    { title: `1. ${countryTerm}`, desc: `60+ ${countriesTerm}.` },
    { title: `2. ${ratesTerm}`, desc: vatTerm },
    { title: `3. ${amountTerm}`, desc: `${exclTerm}/${inclTerm}` },
    { title: `4. ${resultTerm}`, desc: resultTerm }
  ],
  calcSectionTitle: `${calcTerm} ${vatTerm}`, calcSectionSubtitle: worldwideTerm,
  calcTitle: `${calcTerm} ${vatTerm}`, calcDesc: `${calcTerm} ${vatTerm}`,
  selectCountryLabel: countryTerm, chooseCountryPlaceholder: `${countryTerm}...`,
  vatRateLabel: `${vatTerm} ${ratesTerm}`, standardRate: ratesTerm, reducedRate: ratesTerm,
  amountIsLabel: `${amountTerm}:`, exclVAT: exclTerm, inclVAT: inclTerm, amountLabel: amountTerm,
  selectCountryFirst: countryTerm, fillInPrompt: calcTerm, resultsAppearHere: resultTerm,
  resultsTitle: resultTerm, amountExclVAT: `${amountTerm} ${exclTerm}`, vatAmountLabel: vatTerm, amountInclVAT: `${amountTerm} ${inclTerm}`,
  visualBreakdown: resultTerm, exclVATShort: exclTerm,
  taxReturnTitle: resultTerm, totalRevenueExcl: `${amountTerm} ${exclTerm}:`, totalVATReceived: `${vatTerm}:`, totalVATDue: `${vatTerm}:`,
  faqBadge: "FAQ", faqTitle: vatTerm, faqSubtitle: vatTerm,
  faqItems: createFaq(faqQ1, faqA1, `${exclTerm}/${inclTerm}?`, `${exclTerm} = net, ${inclTerm} = gross.`, `${ratesTerm}?`, `60+ ${countriesTerm}.`, `${ratesTerm}?`, ratesTerm, `${worldwideTerm}?`, `60+ ${countriesTerm}.`),
  promoSectionTitle: worldwideTerm,
  promoPremiumTitle: "🌐 Premium Domains", promoPremiumDesc: "Premium domains with SEO value.",
  promoPremiumCta: "Premium Domains", promoPremiumLink: premiumLink,
  promoLegalTitle: "📋 Legal Documents", promoLegalDesc: "Professional legal templates.",
  promoLegalCta: "Legal Templates", promoLegalLink: "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
  promoVpnTitle: "🔒 NordVPN", promoVpnDesc: "VPN encryption for privacy.",
  promoVpnCta: "Get NordVPN →",
});

// Add remaining languages
Object.assign(vatCalcTranslations, {
  bg: createLang("bg","Български","ДДС","Калкулатор","Безплатен","Световен","Страни","Ставки","Резултат","Без ДДС","С ДДС","Сума","Страна","Какво е ДДС?","ДДС е данък върху добавената стойност.","/expireddomainnames/bg/kupete-premium-domeyni-visok-avtoritet-seo-stoynost"),
  uk: createLang("uk","Українська","ПДВ","Калькулятор","Безкоштовний","Світовий","Країн","Ставки","Результат","Без ПДВ","З ПДВ","Сума","Країна","Що таке ПДВ?","ПДВ – податок на додану вартість.","/expireddomainnames/uk/kupyty-premium-domeny-vysokyj-avtorytet-seo-tsinnist"),
  hr: createLang("hr","Hrvatski","PDV","Kalkulator","Besplatan","Svjetski","Zemalja","Stope","Rezultat","Bez PDV","S PDV","Iznos","Država","Što je PDV?","PDV je porez na dodanu vrijednost.","/expireddomainnames/hr/kupite-premium-domene-visoki-autoritet-seo-vrijednost"),
  sk: createLang("sk","Slovenčina","DPH","Kalkulačka","Bezplatná","Svetová","Krajín","Sadzby","Výsledok","Bez DPH","S DPH","Suma","Krajina","Čo je DPH?","DPH je daň z pridanej hodnoty.","/expireddomainnames/sk/kupit-premium-domeny-vysoka-autorita-seo-hodnota"),
  sr: createLang("sr","Srpski","ПДВ","Калкулатор","Бесплатан","Светски","Земаља","Стопе","Резултат","Без ПДВ","Са ПДВ","Износ","Земља","Шта је ПДВ?","ПДВ је порез на додату вредност.","/expireddomainnames/sr/kupite-premium-domene-visoki-autoritet-seo-vrednost"),
  sl: createLang("sl","Slovenščina","DDV","Kalkulator","Brezplačen","Svetovni","Držav","Stopnje","Rezultat","Brez DDV","Z DDV","Znesek","Država","Kaj je DDV?","DDV je davek na dodano vrednost.","/expireddomainnames/sl/kupite-premium-domene-visoka-avtoriteta-seo-vrednost"),
  ko: createLang("ko","한국어","부가세","계산기","무료","세계","개국","세율","결과","부가세 제외","부가세 포함","금액","국가","부가세란?","부가세는 부가가치세입니다.","/expireddomainnames/ko/peurimieom-domein-gumaehagi-nopun-gwonwi-seo-gachi"),
  hu: createLang("hu","Magyar","ÁFA","Kalkulátor","Ingyenes","Világszerte","Ország","Kulcsok","Eredmény","ÁFA nélkül","ÁFA-val","Összeg","Ország","Mi az ÁFA?","Az ÁFA hozzáadottérték-adó.","/expireddomainnames/hu/premium-domain-vasarlas-magas-tekintely-seo-ertek"),
  th: createLang("th","ไทย","VAT","เครื่องคิด","ฟรี","ทั่วโลก","ประเทศ","อัตรา","ผลลัพธ์","ไม่รวม VAT","รวม VAT","จำนวนเงิน","ประเทศ","VAT คืออะไร?","VAT คือภาษีมูลค่าเพิ่ม","/expireddomainnames/th/sue-domain-premium-amnaj-sung-kha-seo"),
  vi: createLang("vi","Tiếng Việt","GTGT","Máy tính","Miễn phí","Toàn cầu","Quốc gia","Thuế suất","Kết quả","Chưa thuế","Đã thuế","Số tiền","Quốc gia","GTGT là gì?","GTGT là thuế giá trị gia tăng.","/expireddomainnames/vi/mua-ten-mien-premium-uy-tin-cao-gia-tri-seo"),
  id: createLang("id","Indonesia","PPN","Kalkulator","Gratis","Seluruh Dunia","Negara","Tarif","Hasil","Tanpa PPN","Dengan PPN","Jumlah","Negara","Apa itu PPN?","PPN adalah pajak pertambahan nilai.","/expireddomainnames/id/beli-domain-premium-otoritas-tinggi-nilai-seo"),
  et: createLang("et","Eesti","KM","Kalkulaator","Tasuta","Üleeilmne","Riiki","Määrad","Tulemus","Ilma KM","Koos KM","Summa","Riik","Mis on KM?","KM on käibemaks.","/expireddomainnames/et/osta-premium-domeenid-korge-autoriteet-seo-vaartus"),
  lv: createLang("lv","Latviešu","PVN","Kalkulators","Bezmaksas","Pasaulē","Valstis","Likmes","Rezultāts","Bez PVN","Ar PVN","Summa","Valsts","Kas ir PVN?","PVN ir pievienotās vērtības nodoklis.","/expireddomainnames/lv/pirkt-premium-domenu-augsta-autoritaate-seo-vertiba"),
  lt: createLang("lt","Lietuvių","PVM","Skaičiuoklė","Nemokama","Pasaulinis","Šalių","Tarifai","Rezultatas","Be PVM","Su PVM","Suma","Šalis","Kas yra PVM?","PVM yra pridėtinės vertės mokestis.","/expireddomainnames/lt/pirkti-premium-domenus-auksta-autoritetas-seo-verte"),
  is: createLang("is","Íslenska","VSK","Reiknivél","Ókeypis","Heimsins","Landa","Hlutföll","Niðurstaða","Án VSK","Með VSK","Upphæð","Land","Hvað er VSK?","VSK er virðisaukaskattur.","/expireddomainnames/is/kaupa-premium-len-hatt-vald-seo-virdi"),
  sq: createLang("sq","Shqip","TVSH","Llogaritëse","Falas","Botërore","Vende","Norma","Rezultati","Pa TVSH","Me TVSH","Shuma","Vendi","Çfarë është TVSH?","TVSH është tatim mbi vlerën e shtuar.","/expireddomainnames/sq/blini-domain-premium-autoritet-larte-vlere-seo"),
  mk: createLang("mk","Македонски","ДДВ","Калкулатор","Бесплатен","Светски","Земји","Стапки","Резултат","Без ДДВ","Со ДДВ","Износ","Земја","Што е ДДВ?","ДДВ е данок на додадена вредност.","/expireddomainnames/mk/kupete-premium-domeni-visok-avtoritet-seo-vrednost"),
  bs: createLang("bs","Bosanski","PDV","Kalkulator","Besplatan","Svjetski","Zemalja","Stope","Rezultat","Bez PDV","Sa PDV","Iznos","Država","Šta je PDV?","PDV je porez na dodatu vrijednost.","/expireddomainnames/bs/kupite-premium-domene-visoki-autoritet-seo-vrijednost"),
  lb: createLang("lb","Lëtzebuergesch","MwSt","Rechner","Gratis","Weltwäit","Länner","Saz","Resultat","Ouni MwSt","Mat MwSt","Betrag","Land","Wat ass MwSt?","MwSt ass Méiwäertsteier.","/expireddomainnames/lb/kaaft-premium-domainen-hech-autoritaet-seo-wert"),
  bn: createLang("bn","বাংলা","VAT","ক্যালকুলেটর","বিনামূল্যে","বিশ্বব্যাপী","দেশ","হার","ফলাফল","VAT ছাড়া","VAT সহ","পরিমাণ","দেশ","VAT কী?","VAT হলো মূল্য সংযোজন কর।","/expireddomainnames/bn/premium-domain-kinun-uccho-kartritwa-seo-mulya"),
  ms: createLang("ms","Melayu","GST","Kalkulator","Percuma","Seluruh Dunia","Negara","Kadar","Keputusan","Tanpa GST","Dengan GST","Jumlah","Negara","Apa itu GST?","GST ialah cukai barangan dan perkhidmatan.","/expireddomainnames/ms/beli-domain-premium-autoriti-tinggi-nilai-seo"),
  ar: createLang("ar","العربية","ضريبة القيمة المضافة","حاسبة","مجاني","عالمي","دول","معدلات","نتيجة","بدون ضريبة","شامل الضريبة","المبلغ","الدولة","ما هي ضريبة القيمة المضافة؟","ضريبة القيمة المضافة هي ضريبة استهلاك.","/expireddomainnames/ar/shira-asma-nitaqat-mumayaza-sulta-aliya-qima-seo"),
  hi: createLang("hi","हिन्दी","VAT","कैलकुलेटर","मुफ्त","विश्वव्यापी","देश","दरें","परिणाम","VAT के बिना","VAT सहित","राशि","देश","VAT क्या है?","VAT मूल्य वर्धित कर है।","/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya"),
  ja: createLang("ja","日本語","消費税","計算機","無料","世界","カ国","税率","結果","税抜","税込","金額","国","消費税とは？","消費税は付加価値税です。","/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi"),
  zh: createLang("zh","中文","增值税","计算器","免费","全球","国家","税率","结果","不含税","含税","金额","国家","什么是增值税？","增值税是一种消费税。","/expireddomainnames/zh/gou-mai-gao-quan-zhong-you-zhi-yu-ming-seo-jia-zhi"),
});

// Get all language codes (for iteration)
export const allVatLanguages = Object.keys(vatCalcSlugs);

// Get translation by lang code (with EN fallback structure)
export const getVatTranslation = (lang: string): VATCalcTranslation | null => {
  return vatCalcTranslations[lang] || null;
};

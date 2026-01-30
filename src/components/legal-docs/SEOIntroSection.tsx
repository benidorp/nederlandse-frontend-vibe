import { Shield, CheckCircle, Globe, Scale } from "lucide-react";

interface SEOIntroSectionProps {
  lang: string;
  websiteName?: string;
  websiteUrl?: string;
}

const translations: Record<string, {
  title: string;
  subtitle: string;
  intro: string;
  complianceTitle: string;
  complianceItems: string[];
  essentialNote: string;
}> = {
  en: {
    title: "Essential Legal Documents for Your Website",
    subtitle: "Complete Legal Protection & Compliance Package",
    intro: "Every professional website requires legally compliant documentation to operate safely and build trust with visitors. Our comprehensive package provides all essential legal documents specifically designed for websites, ensuring full compliance with international regulations including GDPR, CCPA, and FTC guidelines.",
    complianceTitle: "Why These Documents Are Essential",
    complianceItems: [
      "Legal compliance with GDPR, CCPA & international privacy laws",
      "Protection against liability claims and legal disputes",
      "Building visitor trust through transparency",
      "Mandatory requirements for affiliate partnerships"
    ],
    essentialNote: "These essential legal documents for websites are mandatory for legal compliance and professional operation. Available at iaee.eu – your trusted source for website legal protection."
  },
  de: {
    title: "Wesentliche Rechtliche Dokumente für Ihre Website",
    subtitle: "Vollständiges Rechtsschutz- & Compliance-Paket",
    intro: "Jede professionelle Website benötigt rechtskonforme Dokumentation für einen sicheren Betrieb und um Vertrauen bei Besuchern aufzubauen. Unser umfassendes Paket enthält alle wesentlichen rechtlichen Dokumente, die speziell für Websites entwickelt wurden und die vollständige Einhaltung internationaler Vorschriften einschließlich DSGVO, CCPA und FTC-Richtlinien gewährleisten.",
    complianceTitle: "Warum Diese Dokumente Wesentlich Sind",
    complianceItems: [
      "Rechtliche Konformität mit DSGVO, CCPA & internationalen Datenschutzgesetzen",
      "Schutz vor Haftungsansprüchen und Rechtsstreitigkeiten",
      "Aufbau von Besuchervertrauen durch Transparenz",
      "Obligatorische Anforderungen für Affiliate-Partnerschaften"
    ],
    essentialNote: "Diese wesentlichen rechtlichen Dokumente für Websites sind obligatorisch für rechtliche Konformität und professionellen Betrieb. Verfügbar auf iaee.eu – Ihre vertrauenswürdige Quelle für Website-Rechtsschutz."
  },
  fr: {
    title: "Documents Juridiques Essentiels pour Votre Site Web",
    subtitle: "Pack Complet de Protection Juridique & Conformité",
    intro: "Tout site web professionnel nécessite une documentation juridiquement conforme pour fonctionner en toute sécurité et établir la confiance avec les visiteurs. Notre pack complet fournit tous les documents juridiques essentiels spécialement conçus pour les sites web, garantissant une conformité totale avec les réglementations internationales, notamment le RGPD, le CCPA et les directives de la FTC.",
    complianceTitle: "Pourquoi Ces Documents Sont Essentiels",
    complianceItems: [
      "Conformité juridique avec le RGPD, CCPA & lois internationales sur la protection des données",
      "Protection contre les réclamations en responsabilité et litiges juridiques",
      "Établir la confiance des visiteurs grâce à la transparence",
      "Exigences obligatoires pour les partenariats d'affiliation"
    ],
    essentialNote: "Ces documents juridiques essentiels pour sites web sont obligatoires pour la conformité légale et le fonctionnement professionnel. Disponible sur iaee.eu – votre source fiable pour la protection juridique de site web."
  },
  es: {
    title: "Documentos Legales Esenciales para Su Sitio Web",
    subtitle: "Paquete Completo de Protección Legal y Cumplimiento",
    intro: "Todo sitio web profesional requiere documentación legalmente conforme para operar de forma segura y generar confianza con los visitantes. Nuestro paquete integral proporciona todos los documentos legales esenciales diseñados específicamente para sitios web, garantizando el cumplimiento total de las regulaciones internacionales, incluyendo GDPR, CCPA y directrices de la FTC.",
    complianceTitle: "Por Qué Estos Documentos Son Esenciales",
    complianceItems: [
      "Cumplimiento legal con GDPR, CCPA y leyes internacionales de privacidad",
      "Protección contra reclamaciones de responsabilidad y disputas legales",
      "Generar confianza del visitante a través de la transparencia",
      "Requisitos obligatorios para asociaciones de afiliados"
    ],
    essentialNote: "Estos documentos legales esenciales para sitios web son obligatorios para el cumplimiento legal y la operación profesional. Disponible en iaee.eu – su fuente confiable para protección legal de sitios web."
  },
  it: {
    title: "Documenti Legali Essenziali per il Tuo Sito Web",
    subtitle: "Pacchetto Completo di Protezione Legale e Conformità",
    intro: "Ogni sito web professionale richiede documentazione legalmente conforme per operare in sicurezza e costruire fiducia con i visitatori. Il nostro pacchetto completo fornisce tutti i documenti legali essenziali progettati specificamente per i siti web, garantendo la piena conformità alle normative internazionali tra cui GDPR, CCPA e linee guida FTC.",
    complianceTitle: "Perché Questi Documenti Sono Essenziali",
    complianceItems: [
      "Conformità legale con GDPR, CCPA e leggi internazionali sulla privacy",
      "Protezione da richieste di responsabilità e controversie legali",
      "Costruire la fiducia dei visitatori attraverso la trasparenza",
      "Requisiti obbligatori per le partnership di affiliazione"
    ],
    essentialNote: "Questi documenti legali essenziali per siti web sono obbligatori per la conformità legale e il funzionamento professionale. Disponibile su iaee.eu – la tua fonte affidabile per la protezione legale del sito web."
  },
  pt: {
    title: "Documentos Legais Essenciais para o Seu Site",
    subtitle: "Pacote Completo de Proteção Legal e Conformidade",
    intro: "Todo site profissional requer documentação legalmente conforme para operar com segurança e construir confiança com os visitantes. Nosso pacote abrangente fornece todos os documentos legais essenciais projetados especificamente para sites, garantindo total conformidade com regulamentações internacionais, incluindo GDPR, CCPA e diretrizes da FTC.",
    complianceTitle: "Por Que Estes Documentos São Essenciais",
    complianceItems: [
      "Conformidade legal com GDPR, CCPA e leis internacionais de privacidade",
      "Proteção contra reclamações de responsabilidade e disputas legais",
      "Construir confiança do visitante através da transparência",
      "Requisitos obrigatórios para parcerias de afiliados"
    ],
    essentialNote: "Estes documentos legais essenciais para sites são obrigatórios para conformidade legal e operação profissional. Disponível em iaee.eu – sua fonte confiável para proteção legal de sites."
  },
  sv: {
    title: "Väsentliga Juridiska Dokument för Din Webbplats",
    subtitle: "Komplett Juridiskt Skydd & Efterlevnadspaket",
    intro: "Varje professionell webbplats kräver juridiskt kompatibel dokumentation för att fungera säkert och bygga förtroende med besökare. Vårt omfattande paket tillhandahåller alla väsentliga juridiska dokument speciellt utformade för webbplatser, vilket säkerställer full efterlevnad av internationella förordningar inklusive GDPR, CCPA och FTC-riktlinjer.",
    complianceTitle: "Varför Dessa Dokument Är Väsentliga",
    complianceItems: [
      "Juridisk efterlevnad av GDPR, CCPA & internationella integritetslagar",
      "Skydd mot ansvarskrav och juridiska tvister",
      "Bygga besökarförtroende genom transparens",
      "Obligatoriska krav för affiliatepartnerskap"
    ],
    essentialNote: "Dessa väsentliga juridiska dokument för webbplatser är obligatoriska för juridisk efterlevnad och professionell drift. Tillgänglig på iaee.eu – din pålitliga källa för juridiskt skydd för webbplatser."
  },
  pl: {
    title: "Niezbędne Dokumenty Prawne dla Twojej Strony Internetowej",
    subtitle: "Kompletny Pakiet Ochrony Prawnej i Zgodności",
    intro: "Każda profesjonalna strona internetowa wymaga prawnie zgodnej dokumentacji, aby działać bezpiecznie i budować zaufanie wśród odwiedzających. Nasz kompleksowy pakiet zawiera wszystkie niezbędne dokumenty prawne zaprojektowane specjalnie dla stron internetowych, zapewniając pełną zgodność z międzynarodowymi przepisami, w tym RODO, CCPA i wytycznymi FTC.",
    complianceTitle: "Dlaczego Te Dokumenty Są Niezbędne",
    complianceItems: [
      "Zgodność prawna z RODO, CCPA i międzynarodowymi przepisami o ochronie danych",
      "Ochrona przed roszczeniami odpowiedzialności i sporami prawnymi",
      "Budowanie zaufania odwiedzających poprzez przejrzystość",
      "Obowiązkowe wymagania dla partnerstw afiliacyjnych"
    ],
    essentialNote: "Te niezbędne dokumenty prawne dla stron internetowych są obowiązkowe dla zgodności prawnej i profesjonalnego działania. Dostępne na iaee.eu – Twoje zaufane źródło ochrony prawnej stron internetowych."
  },
  el: {
    title: "Απαραίτητα Νομικά Έγγραφα για την Ιστοσελίδα σας",
    subtitle: "Πλήρες Πακέτο Νομικής Προστασίας & Συμμόρφωσης",
    intro: "Κάθε επαγγελματική ιστοσελίδα απαιτεί νομικά συμμορφωμένη τεκμηρίωση για να λειτουργεί με ασφάλεια και να χτίζει εμπιστοσύνη με τους επισκέπτες. Το ολοκληρωμένο πακέτο μας παρέχει όλα τα απαραίτητα νομικά έγγραφα ειδικά σχεδιασμένα για ιστοσελίδες, εξασφαλίζοντας πλήρη συμμόρφωση με τους διεθνείς κανονισμούς συμπεριλαμβανομένων GDPR, CCPA και οδηγιών FTC.",
    complianceTitle: "Γιατί Αυτά τα Έγγραφα Είναι Απαραίτητα",
    complianceItems: [
      "Νομική συμμόρφωση με GDPR, CCPA & διεθνείς νόμους προστασίας δεδομένων",
      "Προστασία από αξιώσεις ευθύνης και νομικές διαφορές",
      "Χτίσιμο εμπιστοσύνης επισκεπτών μέσω διαφάνειας",
      "Υποχρεωτικές απαιτήσεις για συνεργασίες affiliate"
    ],
    essentialNote: "Αυτά τα απαραίτητα νομικά έγγραφα για ιστοσελίδες είναι υποχρεωτικά για νομική συμμόρφωση και επαγγελματική λειτουργία. Διαθέσιμα στο iaee.eu – η αξιόπιστη πηγή σας για νομική προστασία ιστοσελίδων."
  },
  da: {
    title: "Væsentlige Juridiske Dokumenter til Din Hjemmeside",
    subtitle: "Komplet Juridisk Beskyttelse & Compliance-pakke",
    intro: "Enhver professionel hjemmeside kræver juridisk kompatibel dokumentation for at fungere sikkert og opbygge tillid hos besøgende. Vores omfattende pakke indeholder alle væsentlige juridiske dokumenter specielt designet til hjemmesider, hvilket sikrer fuld overholdelse af internationale regler inklusive GDPR, CCPA og FTC-retningslinjer.",
    complianceTitle: "Hvorfor Disse Dokumenter Er Væsentlige",
    complianceItems: [
      "Juridisk overholdelse af GDPR, CCPA & internationale databeskyttelseslove",
      "Beskyttelse mod ansvarskrav og juridiske tvister",
      "Opbygge besøgendes tillid gennem gennemsigtighed",
      "Obligatoriske krav for affiliate-partnerskaber"
    ],
    essentialNote: "Disse væsentlige juridiske dokumenter til hjemmesider er obligatoriske for juridisk overholdelse og professionel drift. Tilgængelig på iaee.eu – din pålidelige kilde til juridisk beskyttelse af hjemmesider."
  },
  no: {
    title: "Essensielle Juridiske Dokumenter for Ditt Nettsted",
    subtitle: "Komplett Juridisk Beskyttelse & Samsvarspaket",
    intro: "Ethvert profesjonelt nettsted krever juridisk kompatibel dokumentasjon for å operere trygt og bygge tillit hos besøkende. Vår omfattende pakke gir alle essensielle juridiske dokumenter spesielt designet for nettsteder, og sikrer full overholdelse av internasjonale forskrifter inkludert GDPR, CCPA og FTC-retningslinjer.",
    complianceTitle: "Hvorfor Disse Dokumentene Er Essensielle",
    complianceItems: [
      "Juridisk samsvar med GDPR, CCPA & internasjonale personvernlover",
      "Beskyttelse mot ansvarskrav og juridiske tvister",
      "Bygge besøkendes tillit gjennom åpenhet",
      "Obligatoriske krav for affiliatepartnerskap"
    ],
    essentialNote: "Disse essensielle juridiske dokumentene for nettsteder er obligatoriske for juridisk samsvar og profesjonell drift. Tilgjengelig på iaee.eu – din pålitelige kilde for juridisk beskyttelse av nettsteder."
  },
  ro: {
    title: "Documente Legale Esențiale pentru Site-ul Dvs.",
    subtitle: "Pachet Complet de Protecție Juridică și Conformitate",
    intro: "Fiecare site web profesional necesită documentație conformă legal pentru a opera în siguranță și a construi încredere cu vizitatorii. Pachetul nostru complet oferă toate documentele legale esențiale proiectate special pentru site-uri web, asigurând conformitatea deplină cu reglementările internaționale, inclusiv GDPR, CCPA și directivele FTC.",
    complianceTitle: "De Ce Aceste Documente Sunt Esențiale",
    complianceItems: [
      "Conformitate legală cu GDPR, CCPA și legile internaționale de confidențialitate",
      "Protecție împotriva reclamațiilor de răspundere și disputelor legale",
      "Construirea încrederii vizitatorilor prin transparență",
      "Cerințe obligatorii pentru parteneriatele de afiliere"
    ],
    essentialNote: "Aceste documente legale esențiale pentru site-uri web sunt obligatorii pentru conformitatea legală și operarea profesională. Disponibil pe iaee.eu – sursa dvs. de încredere pentru protecția legală a site-urilor web."
  },
  bg: {
    title: "Основни Правни Документи за Вашия Уебсайт",
    subtitle: "Пълен Пакет за Правна Защита и Съответствие",
    intro: "Всеки професионален уебсайт изисква правно съвместима документация, за да работи безопасно и да изгражда доверие с посетителите. Нашият цялостен пакет предоставя всички основни правни документи, специално проектирани за уебсайтове, осигурявайки пълно съответствие с международните разпоредби, включително GDPR, CCPA и насоките на FTC.",
    complianceTitle: "Защо Тези Документи Са Основни",
    complianceItems: [
      "Правно съответствие с GDPR, CCPA и международните закони за поверителност",
      "Защита от искове за отговорност и правни спорове",
      "Изграждане на доверие на посетителите чрез прозрачност",
      "Задължителни изисквания за партньорства с афилиати"
    ],
    essentialNote: "Тези основни правни документи за уебсайтове са задължителни за правно съответствие и професионална работа. Налични на iaee.eu – вашият надежден източник за правна защита на уебсайтове."
  },
  fi: {
    title: "Olennaiset Juridiset Asiakirjat Verkkosivustollesi",
    subtitle: "Täydellinen Oikeudellinen Suoja ja Vaatimustenmukaisuuspaketti",
    intro: "Jokainen ammattimaiset verkkosivusto vaatii juridisesti yhteensopivaa dokumentaatiota toimiakseen turvallisesti ja rakentaakseen luottamusta vierailijoiden kanssa. Kattava pakettimme tarjoaa kaikki olennaiset juridiset asiakirjat, jotka on suunniteltu erityisesti verkkosivustoille, varmistaen täyden vaatimustenmukaisuuden kansainvälisten säännösten kanssa, mukaan lukien GDPR, CCPA ja FTC-ohjeet.",
    complianceTitle: "Miksi Nämä Asiakirjat Ovat Olennaisia",
    complianceItems: [
      "Juridinen vaatimustenmukaisuus GDPR:n, CCPA:n ja kansainvälisten tietosuojalakien kanssa",
      "Suoja vastuuvaatimuksilta ja oikeudellisilta kiistoilta",
      "Vierailijoiden luottamuksen rakentaminen läpinäkyvyyden kautta",
      "Pakolliset vaatimukset affiliate-kumppanuuksille"
    ],
    essentialNote: "Nämä olennaiset juridiset asiakirjat verkkosivustoille ovat pakollisia juridisen vaatimustenmukaisuuden ja ammattimaisen toiminnan kannalta. Saatavilla osoitteessa iaee.eu – luotettava lähteesi verkkosivuston oikeudelliseen suojaan."
  },
  ru: {
    title: "Основные Юридические Документы для Вашего Сайта",
    subtitle: "Полный Пакет Юридической Защиты и Соответствия",
    intro: "Каждому профессиональному веб-сайту требуется юридически соответствующая документация для безопасной работы и укрепления доверия посетителей. Наш комплексный пакет предоставляет все основные юридические документы, специально разработанные для веб-сайтов, обеспечивая полное соответствие международным нормам, включая GDPR, CCPA и руководства FTC.",
    complianceTitle: "Почему Эти Документы Необходимы",
    complianceItems: [
      "Юридическое соответствие GDPR, CCPA и международным законам о конфиденциальности",
      "Защита от претензий по ответственности и юридических споров",
      "Укрепление доверия посетителей через прозрачность",
      "Обязательные требования для партнерских программ"
    ],
    essentialNote: "Эти основные юридические документы для веб-сайтов обязательны для юридического соответствия и профессиональной работы. Доступны на iaee.eu – ваш надежный источник юридической защиты веб-сайтов."
  },
  zh: {
    title: "网站必备法律文件",
    subtitle: "完整法律保护与合规套餐",
    intro: "每个专业网站都需要符合法律规定的文件才能安全运营并与访问者建立信任。我们的综合套餐提供专为网站设计的所有必备法律文件，确保完全符合包括GDPR、CCPA和FTC指南在内的国际法规。",
    complianceTitle: "为什么这些文件是必备的",
    complianceItems: [
      "符合GDPR、CCPA和国际隐私法律",
      "防止责任索赔和法律纠纷",
      "通过透明度建立访客信任",
      "联盟合作的强制性要求"
    ],
    essentialNote: "这些网站必备法律文件是法律合规和专业运营的强制要求。可在 iaee.eu 获取——您值得信赖的网站法律保护来源。"
  },
  hi: {
    title: "आपकी वेबसाइट के लिए आवश्यक कानूनी दस्तावेज़",
    subtitle: "पूर्ण कानूनी सुरक्षा और अनुपालन पैकेज",
    intro: "प्रत्येक पेशेवर वेबसाइट को सुरक्षित रूप से संचालित करने और आगंतुकों के साथ विश्वास बनाने के लिए कानूनी रूप से अनुपालन दस्तावेज़ की आवश्यकता होती है। हमारा व्यापक पैकेज विशेष रूप से वेबसाइटों के लिए डिज़ाइन किए गए सभी आवश्यक कानूनी दस्तावेज़ प्रदान करता है, GDPR, CCPA और FTC दिशानिर्देशों सहित अंतर्राष्ट्रीय नियमों के साथ पूर्ण अनुपालन सुनिश्चित करता है।",
    complianceTitle: "ये दस्तावेज़ आवश्यक क्यों हैं",
    complianceItems: [
      "GDPR, CCPA और अंतर्राष्ट्रीय गोपनीयता कानूनों के साथ कानूनी अनुपालन",
      "दायित्व दावों और कानूनी विवादों से सुरक्षा",
      "पारदर्शिता के माध्यम से आगंतुक विश्वास बनाना",
      "एफिलिएट साझेदारी के लिए अनिवार्य आवश्यकताएं"
    ],
    essentialNote: "वेबसाइटों के लिए ये आवश्यक कानूनी दस्तावेज़ कानूनी अनुपालन और पेशेवर संचालन के लिए अनिवार्य हैं। iaee.eu पर उपलब्ध – वेबसाइट कानूनी सुरक्षा के लिए आपका विश्वसनीय स्रोत।"
  },
  ja: {
    title: "ウェブサイトに必須の法的文書",
    subtitle: "完全な法的保護とコンプライアンスパッケージ",
    intro: "すべてのプロフェッショナルなウェブサイトには、安全に運営し、訪問者との信頼を構築するために法的に準拠した文書が必要です。当社の包括的なパッケージは、ウェブサイト向けに特別に設計されたすべての必須法的文書を提供し、GDPR、CCPA、FTCガイドラインを含む国際規制への完全な準拠を保証します。",
    complianceTitle: "これらの文書が必須である理由",
    complianceItems: [
      "GDPR、CCPA、国際プライバシー法への法的準拠",
      "責任請求と法的紛争からの保護",
      "透明性を通じて訪問者の信頼を構築",
      "アフィリエイトパートナーシップの必須要件"
    ],
    essentialNote: "ウェブサイト向けのこれらの必須法的文書は、法的準拠とプロフェッショナルな運営に必須です。iaee.eu で入手可能 – ウェブサイト法的保護の信頼できる情報源。"
  },
  ar: {
    title: "الوثائق القانونية الأساسية لموقعك الإلكتروني",
    subtitle: "حزمة حماية قانونية وامتثال كاملة",
    intro: "يتطلب كل موقع ويب احترافي وثائق متوافقة قانونياً للعمل بأمان وبناء الثقة مع الزوار. توفر حزمتنا الشاملة جميع الوثائق القانونية الأساسية المصممة خصيصاً للمواقع الإلكترونية، مما يضمن الامتثال الكامل للوائح الدولية بما في ذلك GDPR و CCPA وإرشادات FTC.",
    complianceTitle: "لماذا هذه الوثائق أساسية",
    complianceItems: [
      "الامتثال القانوني لـ GDPR و CCPA وقوانين الخصوصية الدولية",
      "الحماية من مطالبات المسؤولية والنزاعات القانونية",
      "بناء ثقة الزوار من خلال الشفافية",
      "المتطلبات الإلزامية لشراكات التسويق بالعمولة"
    ],
    essentialNote: "هذه الوثائق القانونية الأساسية للمواقع الإلكترونية إلزامية للامتثال القانوني والتشغيل المهني. متاحة على iaee.eu – مصدرك الموثوق للحماية القانونية للمواقع الإلكترونية."
  },
  ko: {
    title: "웹사이트를 위한 필수 법적 문서",
    subtitle: "완전한 법적 보호 및 규정 준수 패키지",
    intro: "모든 전문 웹사이트는 안전하게 운영하고 방문자와 신뢰를 구축하기 위해 법적으로 호환되는 문서가 필요합니다. 당사의 포괄적인 패키지는 웹사이트를 위해 특별히 설계된 모든 필수 법적 문서를 제공하여 GDPR, CCPA 및 FTC 가이드라인을 포함한 국제 규정의 완전한 준수를 보장합니다.",
    complianceTitle: "이 문서들이 필수인 이유",
    complianceItems: [
      "GDPR, CCPA 및 국제 개인정보 보호법 준수",
      "책임 청구 및 법적 분쟁으로부터 보호",
      "투명성을 통한 방문자 신뢰 구축",
      "제휴 파트너십을 위한 필수 요구 사항"
    ],
    essentialNote: "웹사이트를 위한 이러한 필수 법적 문서는 법적 준수와 전문적인 운영을 위해 필수입니다. iaee.eu에서 이용 가능 – 웹사이트 법적 보호를 위한 신뢰할 수 있는 출처."
  }
};

const SEOIntroSection = ({ lang, websiteName = "iaee.eu", websiteUrl = "https://www.iaee.eu" }: SEOIntroSectionProps) => {
  const t = translations[lang] || translations.en;
  
  return (
    <section className="py-12 bg-gradient-to-b from-primary/5 to-background border-b border-border">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">{websiteName}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-primary font-medium mb-4">
              {t.subtitle}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t.intro}
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              {t.complianceTitle}
            </h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {t.complianceItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
            <p className="text-sm text-foreground flex items-center justify-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              {t.essentialNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOIntroSection;

import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "lv", locale: "lv_LV", brandName: "IAEE Premium Domēni",
  title: "Pirkt Premium Domēnu | Augsta Autoritāte SEO Vērtība | IAEE",
  metaDesc: "Pērciet premium domēnus ar augstu domēna autoritāti un SEO vērtību. Beigušies domēni ar MOZ DA 29+ tūlītējai zīmola veidošanai.",
  heroBadge: "Premium Domēnu Tirgus",
  heroTitle: "Pērciet Augstas Autoritātes Premium Domēnus",
  heroSub: "Atklājiet premium beigušos domēnus ar tūlītēju SEO spēku. Katram domēnam ir augsta autoritāte, verificētas atpakaļsaites un tūlītēja pārsūtīšana.",
  ctaBrowse: "Pārlūkot Domēnus", ctaMore: "Uzzināt Vairāk",
  statLabels: ["Premium Domēni", "Atpakaļsaites", "Kategorijas", "Apmierināti Klienti"],
  navDomains: "Domēni", navWhy: "Kāpēc Premium", navFaq: "BUJ", navContact: "Kontakti",
  gridBadge: "Premium Kolekcija", gridTitle: "Premium Domēni", gridSub: "Pārlūkojiet premium domēnus ar verificētu SEO vērtību.",
  gridIntro: [
    "Katram domēnam ir <strong>augsta domēna autoritāte (DA 29+)</strong> un <strong>verificēts atpakaļsaišu profils</strong>.",
    "Katrs domēns ietver MOZ rezultātu, lapas autoritāti, saistīto domēnu skaitu un labāko atpakaļsaišu informāciju.",
  ],
  vatInfo: "💡 ES klienti: Visās cenās iekļauts PVN (ES PVN regulējums)",
  buyNow: "Pirkt Tagad", inquiryLabel: "Pieprasīt", priceLabel: "Cena",
  blLabel: "Atpakaļsaites", paLabel: "PA", ldLabel: "Saistītie domēni", ibLabel: "Ienākošie", flLabel: "Sekotie", topBlLabel: "Labākās atpakaļsaites",
  viewDetails: "Skatīt detaļas", buyAlt: "Pirkt premium domēnu",
  whyBadge: "Kāpēc Premium", whyTitle: "Premium Domēnu Priekšrocības", whySub: "Premium domēni nodrošina ātrākus SEO rezultātus.",
  whyCards: [
    { title: "Tūlītēja Autoritāte", desc: "Uzlabojiet meklēšanas rangu ar augstu DA" },
    { title: "Verificētas Atpakaļsaites", desc: "Ietver simtiem kvalitatīvu atpakaļsaišu" },
    { title: "SEO Priekšrocība", desc: "Daudz ātrāks rangs nekā jauniem domēniem" },
    { title: "Globāla Atpazīstamība", desc: "Tūlītēja zīmola uzticamība" },
  ],
  faqBadge: "Biežāk Uzdotie Jautājumi", faqTitle: "BUJ",
  faqs: [
    { q: "Kas ir premium domēns?", a: "Premium domēns ir beidzies domēns ar augstu autoritāti, esošu atpakaļsaišu profilu un pierādītu SEO vērtību." },
    { q: "Kā notiek domēna pārsūtīšana?", a: "Pēc maksājuma mēs sākam pārsūtīšanu 24 stundu laikā. Viss process parasti aizņem 3-5 darba dienas." },
    { q: "Kāda ir atmaksas politika?", a: "Pilna atmaksa pieejama pirms domēna pārsūtīšanas sākšanas." },
    { q: "Kādas maksājumu metodes pieņemat?", a: "Mēs pieņemam visas galvenās kredītkartes un debetkartes caur Stripe." },
    { q: "Kā pārbaudīt domēna SEO vērtību?", a: "Katrs domēns ietver verificētus MOZ DA/PA rezultātus, atpakaļsaišu skaitu un saistīto domēnu datus." },
  ],
  contactBadge: "Sazinieties", contactTitle: "Kontakti", contactSub: "Jautājumi par premium domēniem? Sazinieties ar mums.",
  nameLabel: "Vārds", emailLabel: "E-pasts", domainLabel: "Interesējošais domēns", msgLabel: "Ziņojums",
  namePh: "Jānis Bērziņš", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Ievadiet savu ziņojumu...",
  submitBtn: "Sūtīt Ziņojumu", formErrTitle: "Formas Kļūda", formErrCheck: "Lūdzu pārbaudiet visus laukus.",
  sendingTitle: "Sūta...", sendingDesc: "E-pasta lietotne atvērsies.",
  emailSubjectPrefix: "Premium Domēna Pieprasījums",
  seoTitle: "Sāciet Tiešsaistes Panākumus ar Premium Domēniem",
  seoP1: "Premium beigušies domēni nodrošina tūlītēju SEO priekšrocību jauniem projektiem ar augstu autoritāti un esošām atpakaļsaitēm.",
  seoP2: "IAEE premium domēnu kolekcija ir izturējusi rūpīgu SEO analīzi, katram domēnam ir verificēts MOZ rezultāts un atpakaļsaišu profils.",
  nordTitle: "🛡️ NordVPN Ieteikums", nordDesc: "Iesakām NordVPN tiešsaistes drošībai un privātuma aizsardzībai.", nordCta: "Iegūt NordVPN",
  contactBtmTitle: "Gatavs sākt?", contactBtmSub: "Iegūstiet savu premium domēnu tagad.", contactBtmNote: "24 stundu atbildes garantija",
  legalTitle: "Juridiskā Informācija", legalTerms: "Lietošanas Noteikumi", legalPrivacy: "Privātuma Politika",
  copyrightText: "© 2025 IAEE Premium Domains. Visas tiesības aizsargātas.",
  backToTopLabel: "Atpakaļ uz augšu",
};

const PremiumDomainsLV = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsLV;

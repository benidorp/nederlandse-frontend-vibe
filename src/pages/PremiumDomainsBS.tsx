import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "bs", locale: "bs_BA", brandName: "IAEE Premium Domene",
  title: "Kupite Premium Domene | Visoki Autoritet SEO Vrijednost | IAEE",
  metaDesc: "Kupite premium domene sa visokim autoritetom domena i SEO vrijednošću. Istekle domene sa MOZ DA 29+ za instant brending i rangiranje.",
  heroBadge: "Premium Domen Tržište",
  heroTitle: "Kupite Premium Domene Visokog Autoriteta",
  heroSub: "Otkrijte premium istekle domene sa trenutnom SEO snagom. Svaka domena ima visok autoritet, verificirane povratne linkove i brz transfer.",
  ctaBrowse: "Pregledaj Domene", ctaMore: "Saznaj Više",
  statLabels: ["Premium Domene", "Povratni Linkovi", "Kategorije", "Zadovoljni Klijenti"],
  navDomains: "Domene", navWhy: "Zašto Premium", navFaq: "ČPP", navContact: "Kontakt",
  gridBadge: "Premium Kolekcija", gridTitle: "Premium Domene", gridSub: "Pregledajte premium domene sa verificiranom SEO vrijednošću.",
  gridIntro: [
    "Svaka domena ima <strong>visok autoritet domena (DA 29+)</strong> i <strong>verificiran profil povratnih linkova</strong>.",
    "Svaka domena uključuje MOZ rezultat, autoritet stranice, broj povezanih domena i informacije o vrhunskim povratnim linkovima.",
  ],
  vatInfo: "💡 EU klijenti: Sve cijene uključuju PDV (EU PDV regulacija)",
  buyNow: "Kupi Sada", inquiryLabel: "Upitaj", priceLabel: "Cijena",
  blLabel: "Povratni linkovi", paLabel: "PA", ldLabel: "Povezane domene", ibLabel: "Dolazni", flLabel: "Praćeni", topBlLabel: "Vrhunski linkovi",
  viewDetails: "Pogledaj detalje", buyAlt: "Kupi premium domenu",
  whyBadge: "Zašto Premium", whyTitle: "Prednosti Premium Domena", whySub: "Premium domene daju brže SEO rezultate.",
  whyCards: [
    { title: "Trenutni Autoritet", desc: "Poboljšajte rangiranje odmah sa visokim DA" },
    { title: "Verificirani Linkovi", desc: "Uključuje stotine kvalitetnih linkova" },
    { title: "SEO Prednost", desc: "Mnogo brže rangiranje od novih domena" },
    { title: "Globalna Prepoznatljivost", desc: "Trenutni kredibilitet brenda" },
  ],
  faqBadge: "Često Postavljena Pitanja", faqTitle: "ČPP",
  faqs: [
    { q: "Šta je premium domena?", a: "Premium domena je istekla domena sa visokim autoritetom, postojećim profilom linkova i dokazanom SEO vrijednošću." },
    { q: "Kako se vrši transfer domene?", a: "Nakon plaćanja započinjemo proces transfera u roku od 24 sata. Cijeli proces obično traje 3-5 radnih dana." },
    { q: "Kakva je politika povrata?", a: "Potpuni povrat moguć prije početka transfera domene." },
    { q: "Koje načine plaćanja prihvatate?", a: "Prihvatamo sve glavne kreditne i debitne kartice putem Stripe." },
    { q: "Kako verificirati SEO vrijednost domene?", a: "Svaka domena uključuje verificirane MOZ DA/PA rezultate, broj linkova i podatke povezanih domena." },
  ],
  contactBadge: "Kontaktirajte Nas", contactTitle: "Kontakt", contactSub: "Pitanja o premium domenama? Kontaktirajte nas.",
  nameLabel: "Ime", emailLabel: "Email", domainLabel: "Domena od interesa", msgLabel: "Poruka",
  namePh: "Amer Hodžić", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Unesite vašu poruku...",
  submitBtn: "Pošalji Poruku", formErrTitle: "Greška Forme", formErrCheck: "Molimo provjerite sva polja.",
  sendingTitle: "Šalje se...", sendingDesc: "Aplikacija za email će se otvoriti.",
  emailSubjectPrefix: "Upit za Premium Domenu",
  seoTitle: "Započnite Online Uspjeh sa Premium Domenama",
  seoP1: "Premium istekle domene daju trenutnu SEO prednost novim projektima sa visokim autoritetom i postojećim linkovima.",
  seoP2: "Kolekcija premium domena IAEE prošla je temeljitu SEO analizu, svaka domena ima verificiran MOZ rezultat i profil linkova.",
  nordTitle: "🛡️ NordVPN Preporuka", nordDesc: "Preporučujemo NordVPN za online sigurnost i zaštitu privatnosti.", nordCta: "Nabavi NordVPN",
  contactBtmTitle: "Spremni za početak?", contactBtmSub: "Nabavite svoju premium domenu sada.", contactBtmNote: "Garancija odgovora u 24 sata",
  legalTitle: "Pravne Informacije", legalTerms: "Uslovi Korištenja", legalPrivacy: "Politika Privatnosti",
  copyrightText: "© 2025 IAEE Premium Domains. Sva prava zadržana.",
  backToTopLabel: "Nazad na vrh",
};

const PremiumDomainsBS = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsBS;

import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "et", locale: "et_EE", brandName: "IAEE Premium Domeenid",
  title: "Osta Premium Domeene | Kõrge Autoriteet SEO Väärtus | IAEE",
  metaDesc: "Ostke premium domeene kõrge domeeni autoriteediga ja SEO väärtusega. Aegunud domeenid MOZ DA 29+ kohese brändi ja otsingutulemuste jaoks.",
  heroBadge: "Premium Domeenide Turg",
  heroTitle: "Ostke Kõrge Autoriteediga Premium Domeene",
  heroSub: "Avastage premium aegunud domeenid kohese SEO jõuga. Igal domeenil on kõrge autoriteet, kontrollitud tagasilingid ja kohene üleandmine.",
  ctaBrowse: "Sirvi Domeene", ctaMore: "Loe Lähemalt",
  statLabels: ["Premium Domeenid", "Tagasilingid", "Kategooriad", "Rahulolev Klient"],
  navDomains: "Domeenid", navWhy: "Miks Premium", navFaq: "KKK", navContact: "Kontakt",
  gridBadge: "Premium Kollektsioon", gridTitle: "Premium Domeenid", gridSub: "Sirvige kontrollitud SEO väärtusega premium domeene.",
  gridIntro: [
    "Igal domeenil on <strong>kõrge domeeni autoriteet (DA 29+)</strong> ja <strong>kontrollitud tagasilingide profiil</strong>.",
    "Iga domeen sisaldab MOZ skoori, lehe autoriteeti, ühendavate domeenide arvu ja parimate tagasilinkide infot.",
  ],
  vatInfo: "💡 EL kliendid: Kõik hinnad sisaldavad käibemaksu (EL käibemaksu regulatsioon)",
  buyNow: "Osta Kohe", inquiryLabel: "Küsi Lisa", priceLabel: "Hind",
  blLabel: "Tagasilingid", paLabel: "PA", ldLabel: "Ühendavad domeenid", ibLabel: "Sissetulev", flLabel: "Jälgitav", topBlLabel: "Parimad tagasilingid",
  viewDetails: "Vaata detaile", buyAlt: "Osta premium domeen",
  whyBadge: "Miks Premium", whyTitle: "Premium Domeenide Eelised", whySub: "Premium domeenid annavad kiiremaid SEO tulemusi.",
  whyCards: [
    { title: "Kohene Autoriteet", desc: "Tõstke otsingujärjestust kohe kõrge DA-ga" },
    { title: "Kontrollitud Tagasilingid", desc: "Sisaldab sadu kvaliteetseid tagasilinke" },
    { title: "SEO Eelis", desc: "Palju kiirem järjestus kui uutel domeenidel" },
    { title: "Globaalne Tuntus", desc: "Kohene brändi usaldusväärsus" },
  ],
  faqBadge: "Korduma Kippuvad Küsimused", faqTitle: "KKK",
  faqs: [
    { q: "Mis on premium domeen?", a: "Premium domeen on aegunud domeen kõrge autoriteediga, olemasoleva tagasilinkide profiiliga ja tõestatud SEO väärtusega." },
    { q: "Kuidas toimub domeeni üleandmine?", a: "Pärast maksmist alustame üleandmisprotsessi 24 tunni jooksul. Kogu protsess võtab tavaliselt 3-5 tööpäeva." },
    { q: "Milline on tagasimakse poliitika?", a: "Täielik tagasimakse on võimalik enne domeeni üleandmise alustamist." },
    { q: "Milliseid maksemeetodeid aktsepteerite?", a: "Aktsepteerime kõiki peamisi krediit- ja deebetkaarte Stripe'i kaudu." },
    { q: "Kuidas kontrollida domeeni SEO väärtust?", a: "Iga domeen sisaldab kontrollitud MOZ DA/PA skoori, tagasilinkide arvu ja ühendavate domeenide andmeid." },
  ],
  contactBadge: "Võtke Ühendust", contactTitle: "Kontakt", contactSub: "Küsimusi premium domeenide kohta? Võtke ühendust.",
  nameLabel: "Nimi", emailLabel: "E-post", domainLabel: "Huvipakkuv domeen", msgLabel: "Sõnum",
  namePh: "Jaan Tamm", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Sisestage oma sõnum...",
  submitBtn: "Saada Sõnum", formErrTitle: "Vormi Viga", formErrCheck: "Palun kontrollige kõiki välju.",
  sendingTitle: "Saatmine...", sendingDesc: "E-posti rakendus avaneb.",
  emailSubjectPrefix: "Premium Domeeni Päring",
  seoTitle: "Alustage Veebiedu Premium Domeenidega",
  seoP1: "Premium aegunud domeenid annavad uutele projektidele kohese SEO eelise kõrge autoriteedi ja olemasolevate tagasilinkide kaudu.",
  seoP2: "IAEE premium domeenide kollektsioon on läbinud põhjaliku SEO analüüsi, igal domeenil on kontrollitud MOZ skoor ja tagasilinkide profiil.",
  nordTitle: "🛡️ NordVPN Soovitus", nordDesc: "Soovitame NordVPN-i veebiturbe ja privaatsuse kaitseks.", nordCta: "Hangi NordVPN",
  contactBtmTitle: "Valmis alustama?", contactBtmSub: "Hankige oma premium domeen kohe.", contactBtmNote: "24-tunnise vastuse garantii",
  legalTitle: "Õiguslik Teave", legalTerms: "Kasutustingimused", legalPrivacy: "Privaatsuspoliitika",
  copyrightText: "© 2025 IAEE Premium Domains. Kõik õigused kaitstud.",
  backToTopLabel: "Tagasi üles",
};

const PremiumDomainsET = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsET;

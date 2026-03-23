import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "lt", locale: "lt_LT", brandName: "IAEE Premium Domenai",
  title: "Pirkti Premium Domenus | Aukštas Autoritetas SEO Vertė | IAEE",
  metaDesc: "Pirkite premium domenus su aukštu domeno autoritetu ir SEO verte. Pasibaigę domenai su MOZ DA 29+ greitam prekės ženklo kūrimui.",
  heroBadge: "Premium Domenų Turgus",
  heroTitle: "Pirkite Aukšto Autoriteto Premium Domenus",
  heroSub: "Atraskite premium pasibaigusius domenus su momentine SEO galia. Kiekvienas domenas turi aukštą autoritetą, patikrintas nuorodas ir greitą perdavimą.",
  ctaBrowse: "Naršyti Domenus", ctaMore: "Sužinoti Daugiau",
  statLabels: ["Premium Domenai", "Nuorodos", "Kategorijos", "Patenkinti Klientai"],
  navDomains: "Domenai", navWhy: "Kodėl Premium", navFaq: "DUK", navContact: "Kontaktai",
  gridBadge: "Premium Kolekcija", gridTitle: "Premium Domenai", gridSub: "Naršykite premium domenus su patikrinta SEO verte.",
  gridIntro: [
    "Kiekvienas domenas turi <strong>aukštą domeno autoritetą (DA 29+)</strong> ir <strong>patikrintą nuorodų profilį</strong>.",
    "Kiekvienas domenas apima MOZ balą, puslapio autoritetą, susietų domenų skaičių ir geriausių nuorodų informaciją.",
  ],
  vatInfo: "💡 ES klientai: Visos kainos su PVM (ES PVM reguliavimas)",
  buyNow: "Pirkti Dabar", inquiryLabel: "Užklausti", priceLabel: "Kaina",
  blLabel: "Nuorodos", paLabel: "PA", ldLabel: "Susieti domenai", ibLabel: "Įeinančios", flLabel: "Sekamos", topBlLabel: "Geriausios nuorodos",
  viewDetails: "Žiūrėti detales", buyAlt: "Pirkti premium domeną",
  whyBadge: "Kodėl Premium", whyTitle: "Premium Domenų Privalumai", whySub: "Premium domenai užtikrina greitesnius SEO rezultatus.",
  whyCards: [
    { title: "Momentinis Autoritetas", desc: "Pagerinkite paieškos reitingą su aukštu DA" },
    { title: "Patikrintos Nuorodos", desc: "Apima šimtus kokybiškų nuorodų" },
    { title: "SEO Pranašumas", desc: "Daug greitesnis reitingas nei nauji domenai" },
    { title: "Globalus Atpažinimas", desc: "Momentinė prekės ženklo patikimumas" },
  ],
  faqBadge: "Dažniausiai Užduodami Klausimai", faqTitle: "DUK",
  faqs: [
    { q: "Kas yra premium domenas?", a: "Premium domenas yra pasibaigęs domenas su aukštu autoritetu, esamu nuorodų profiliu ir įrodyta SEO verte." },
    { q: "Kaip vyksta domeno perdavimas?", a: "Po apmokėjimo pradedame perdavimo procesą per 24 valandas. Visas procesas paprastai trunka 3-5 darbo dienas." },
    { q: "Kokia grąžinimo politika?", a: "Pilnas grąžinimas galimas prieš pradedant domeno perdavimą." },
    { q: "Kokius mokėjimo būdus priimate?", a: "Priimame visas pagrindines kredito ir debeto korteles per Stripe." },
    { q: "Kaip patikrinti domeno SEO vertę?", a: "Kiekvienas domenas apima patikrintus MOZ DA/PA balus, nuorodų skaičių ir susietų domenų duomenis." },
  ],
  contactBadge: "Susisiekite", contactTitle: "Kontaktai", contactSub: "Klausimai apie premium domenus? Susisiekite su mumis.",
  nameLabel: "Vardas", emailLabel: "El. paštas", domainLabel: "Dominas", msgLabel: "Žinutė",
  namePh: "Jonas Jonaitis", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Įveskite savo žinutę...",
  submitBtn: "Siųsti Žinutę", formErrTitle: "Formos Klaida", formErrCheck: "Prašome patikrinti visus laukus.",
  sendingTitle: "Siunčiama...", sendingDesc: "El. pašto programa atsidarys.",
  emailSubjectPrefix: "Premium Domeno Užklausa",
  seoTitle: "Pradėkite Sėkmę Internete su Premium Domenais",
  seoP1: "Premium pasibaigę domenai suteikia momentinį SEO pranašumą naujiems projektams su aukštu autoritetu ir esamomis nuorodomis.",
  seoP2: "IAEE premium domenų kolekcija praėjo išsamią SEO analizę, kiekvienas domenas turi patikrintą MOZ balą ir nuorodų profilį.",
  nordTitle: "🛡️ NordVPN Rekomendacija", nordDesc: "Rekomenduojame NordVPN interneto saugumui ir privatumo apsaugai.", nordCta: "Gauti NordVPN",
  contactBtmTitle: "Pasiruošę pradėti?", contactBtmSub: "Gaukite savo premium domeną dabar.", contactBtmNote: "24 valandų atsakymo garantija",
  legalTitle: "Teisinė Informacija", legalTerms: "Naudojimo Sąlygos", legalPrivacy: "Privatumo Politika",
  copyrightText: "© 2025 IAEE Premium Domains. Visos teisės saugomos.",
  backToTopLabel: "Grįžti į viršų",
};

const PremiumDomainsLT = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsLT;

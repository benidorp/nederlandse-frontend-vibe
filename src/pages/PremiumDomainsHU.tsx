import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "hu", locale: "hu_HU", brandName: "IAEE Prémium Domainek",
  title: "Prémium Domain Vásárlás | Magas Tekintély SEO Érték | IAEE",
  metaDesc: "Vásároljon prémium domaineket magas domain tekintéllyel és SEO értékkel. Lejárt domainek MOZ DA 29+ értékkel az azonnali márkaépítéshez.",
  heroBadge: "Prémium Domain Piactér",
  heroTitle: "Vásároljon Magas Tekintélyű Prémium Domaineket",
  heroSub: "Fedezze fel a prémium lejárt domaineket azonnali SEO erővel. Minden domain magas tekintéllyel, ellenőrzött backlinkekkel rendelkezik.",
  ctaBrowse: "Domainek Böngészése", ctaMore: "Tudjon Meg Többet",
  statLabels: ["Prémium Domainek", "Backlinkek", "Kategóriák", "Elégedett Ügyfelek"],
  navDomains: "Domainek", navWhy: "Miért Prémium", navFaq: "GYIK", navContact: "Kapcsolat",
  gridBadge: "Prémium Kollekció", gridTitle: "Prémium Domainek", gridSub: "Böngésszen ellenőrzött SEO értékű prémium domainek között.",
  gridIntro: [
    "Minden domain <strong>magas domain tekintéllyel (DA 29+)</strong> és <strong>ellenőrzött backlink profillal</strong> rendelkezik.",
    "Minden domainhez MOZ pontszám, oldal tekintély, hivatkozó domainek száma és top backlink információ tartozik.",
  ],
  vatInfo: "💡 EU ügyfelek: Minden ár tartalmazza az ÁFÁ-t (EU ÁFA szabályozás)",
  buyNow: "Vásárlás Most", inquiryLabel: "Érdeklődés", priceLabel: "Ár",
  blLabel: "Backlinkek", paLabel: "PA", ldLabel: "Hivatkozó domainek", ibLabel: "Bejövő", flLabel: "Követett", topBlLabel: "Top backlinkek",
  viewDetails: "Részletek", buyAlt: "Prémium domain vásárlás",
  whyBadge: "Miért Prémium", whyTitle: "A Prémium Domainek Előnyei", whySub: "A prémium domainek gyorsabb SEO eredményeket nyújtanak.",
  whyCards: [
    { title: "Azonnali Tekintély", desc: "Magas DA-val azonnal javítsa keresési helyezését" },
    { title: "Ellenőrzött Backlinkek", desc: "Több száz minőségi backlink" },
    { title: "SEO Előny", desc: "Sokkal gyorsabb helyezés új domainekhez képest" },
    { title: "Globális Ismertség", desc: "Azonnali márka hitelesség" },
  ],
  faqBadge: "Gyakran Ismételt Kérdések", faqTitle: "GYIK",
  faqs: [
    { q: "Mi az a prémium domain?", a: "A prémium domain magas tekintéllyel, meglévő backlink profillal és bizonyított SEO értékkel rendelkező lejárt domain." },
    { q: "Hogyan történik a domain átadás?", a: "Fizetés után 24 órán belül megkezdődik az átadási folyamat. Az egész általában 3-5 munkanapot vesz igénybe." },
    { q: "Mi a visszatérítési szabályzat?", a: "A domain átadás megkezdése előtt teljes visszatérítés lehetséges." },
    { q: "Milyen fizetési módokat fogadnak el?", a: "A Stripe-on keresztül minden főbb hitel- és bankkártyát elfogadunk." },
    { q: "Hogyan ellenőrizhetem a domain SEO értékét?", a: "Minden domainhez ellenőrzött MOZ DA/PA pontszám, backlink szám és hivatkozó domain adatok tartoznak." },
  ],
  contactBadge: "Kapcsolat", contactTitle: "Lépjen Kapcsolatba", contactSub: "Kérdése van prémium domainekről? Keressen minket.",
  nameLabel: "Név", emailLabel: "E-mail", domainLabel: "Érdeklődési Domain", msgLabel: "Üzenet",
  namePh: "Kovács János", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Írja be üzenetét...",
  submitBtn: "Üzenet Küldése", formErrTitle: "Űrlap Hiba", formErrCheck: "Kérjük, ellenőrizze az összes mezőt.",
  sendingTitle: "Küldés...", sendingDesc: "Az e-mail kliens megnyílik.",
  emailSubjectPrefix: "Prémium Domain Érdeklődés",
  seoTitle: "Online Siker Prémium Domainekkel",
  seoP1: "A prémium lejárt domainek magas tekintélyükkel és meglévő backlinkeikkel azonnali SEO előnyt biztosítanak új projekteknek.",
  seoP2: "Az IAEE prémium domain gyűjteménye alapos SEO elemzésen esett át, minden domain ellenőrzött MOZ pontszámmal rendelkezik.",
  nordTitle: "🛡️ NordVPN Ajánlás", nordDesc: "Online biztonsághoz és adatvédelemhez ajánljuk a NordVPN-t.", nordCta: "NordVPN Beszerzése",
  contactBtmTitle: "Készen áll a kezdésre?", contactBtmSub: "Szerezze meg prémium domainját most.", contactBtmNote: "24 órán belüli válasz garantált",
  legalTitle: "Jogi Információk", legalTerms: "Felhasználási Feltételek", legalPrivacy: "Adatvédelmi Szabályzat",
  copyrightText: "© 2025 IAEE Premium Domains. Minden jog fenntartva.",
  backToTopLabel: "Vissza a tetejére",
};

const PremiumDomainsHU = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsHU;

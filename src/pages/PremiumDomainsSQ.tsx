import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "sq", locale: "sq_AL", brandName: "IAEE Domene Premium",
  title: "Blini Domene Premium | Autoritet i Lartë Vlerë SEO | IAEE",
  metaDesc: "Blini domene premium me autoritet të lartë domeni dhe vlerë SEO. Domene të skaduara me MOZ DA 29+ për branding dhe renditje të menjëhershme.",
  heroBadge: "Tregu i Domeneve Premium",
  heroTitle: "Blini Domene Premium me Autoritet të Lartë",
  heroSub: "Zbuloni domene premium të skaduara me fuqi SEO të menjëhershme. Çdo domen ka autoritet të lartë, backlinks të verifikuara dhe transferim të shpejtë.",
  ctaBrowse: "Shfleto Domenet", ctaMore: "Mëso Më Shumë",
  statLabels: ["Domene Premium", "Backlinks", "Kategori", "Klientë të Kënaqur"],
  navDomains: "Domenet", navWhy: "Pse Premium", navFaq: "Pyetje", navContact: "Kontakt",
  gridBadge: "Koleksioni Premium", gridTitle: "Domene Premium", gridSub: "Shfletoni domene premium me vlerë SEO të verifikuar.",
  gridIntro: [
    "Çdo domen ka <strong>autoritet të lartë domeni (DA 29+)</strong> dhe <strong>profil backlinks të verifikuar</strong>.",
    "Çdo domen përfshin pikët MOZ, autoritetin e faqes, numrin e domeneve të lidhura dhe informacionin e backlinks kryesore.",
  ],
  vatInfo: "💡 Klientët e BE: Të gjitha çmimet përfshijnë TVSH (rregullorja e TVSH-së së BE)",
  buyNow: "Bli Tani", inquiryLabel: "Pyet", priceLabel: "Çmimi",
  blLabel: "Backlinks", paLabel: "PA", ldLabel: "Domene të lidhura", ibLabel: "Hyrëse", flLabel: "Ndjekur", topBlLabel: "Backlinks kryesore",
  viewDetails: "Shiko detajet", buyAlt: "Bli domen premium",
  whyBadge: "Pse Premium", whyTitle: "Përparësitë e Domeneve Premium", whySub: "Domenet premium japin rezultate SEO më të shpejta.",
  whyCards: [
    { title: "Autoritet i Menjëhershëm", desc: "Përmirësoni renditjen e kërkimit me DA të lartë" },
    { title: "Backlinks të Verifikuara", desc: "Përfshijnë qindra backlinks cilësore" },
    { title: "Epërsi SEO", desc: "Renditje shumë më e shpejtë se domenet e reja" },
    { title: "Njohje Globale", desc: "Besueshmëri e menjëhershme e markës" },
  ],
  faqBadge: "Pyetjet e Shpeshta", faqTitle: "Pyetje të Shpeshta",
  faqs: [
    { q: "Çfarë është një domen premium?", a: "Një domen premium është domen i skaduar me autoritet të lartë, profil backlinks ekzistues dhe vlerë SEO të provuar." },
    { q: "Si kryhet transferimi i domenit?", a: "Pas pagesës, fillojmë procesin e transferimit brenda 24 orëve. I gjithë procesi zakonisht zgjat 3-5 ditë pune." },
    { q: "Cila është politika e rimbursimit?", a: "Rimbursim i plotë i disponueshëm para se të fillojë transferimi i domenit." },
    { q: "Cilat metoda pagese pranoni?", a: "Pranojmë të gjitha kartat kryesore të kreditit dhe debitit përmes Stripe." },
    { q: "Si të verifikoj vlerën SEO të domenit?", a: "Çdo domen përfshin pikë MOZ DA/PA, numrin e backlinks dhe të dhëna domenesh të verifikuara." },
  ],
  contactBadge: "Na Kontaktoni", contactTitle: "Kontakt", contactSub: "Pyetje rreth domeneve premium? Na kontaktoni.",
  nameLabel: "Emri", emailLabel: "Email", domainLabel: "Domini i interesit", msgLabel: "Mesazhi",
  namePh: "Arben Hoxha", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Shkruani mesazhin tuaj...",
  submitBtn: "Dërgo Mesazhin", formErrTitle: "Gabim Forme", formErrCheck: "Ju lutem kontrolloni të gjitha fushat.",
  sendingTitle: "Duke dërguar...", sendingDesc: "Aplikacioni i emailit do të hapet.",
  emailSubjectPrefix: "Pyetje për Domen Premium",
  seoTitle: "Filloni Suksesin Online me Domene Premium",
  seoP1: "Domenet premium të skaduara japin avantazh SEO të menjëhershëm për projekte të reja me autoritet të lartë dhe backlinks ekzistuese.",
  seoP2: "Koleksioni i domeneve premium të IAEE ka kaluar analizë të thellë SEO, çdo domen ka pikë MOZ dhe profil backlinks të verifikuar.",
  nordTitle: "🛡️ Rekomandim NordVPN", nordDesc: "Rekomandojmë NordVPN për siguri online dhe mbrojtje privatësie.", nordCta: "Merr NordVPN",
  contactBtmTitle: "Gati për të filluar?", contactBtmSub: "Merrni domenin tuaj premium tani.", contactBtmNote: "Garanci përgjigje brenda 24 orëve",
  legalTitle: "Informacion Ligjor", legalTerms: "Kushtet e Përdorimit", legalPrivacy: "Politika e Privatësisë",
  copyrightText: "© 2025 IAEE Premium Domains. Të gjitha të drejtat e rezervuara.",
  backToTopLabel: "Kthehu lart",
};

const PremiumDomainsSQ = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsSQ;

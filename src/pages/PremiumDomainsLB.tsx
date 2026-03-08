import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "lb", locale: "lb_LU", brandName: "IAEE Premium Domainen",
  title: "Kaaft Premium Domainen | Héich Autoritéit SEO Wäert | IAEE",
  metaDesc: "Kaaft Premium Domainen mat héijer Domainautoritéit a SEO Wäert. Ofgelaf Domainen mat MOZ DA 29+ fir direkt Branding an Ranking.",
  heroBadge: "Premium Domain Maartplaz",
  heroTitle: "Kaaft Premium Domainen mat Héijer Autoritéit",
  heroSub: "Entdeckt Premium ofgelaf Domainen mat direkter SEO Kraaft. All Domain huet héich Autoritéit, verifizéiert Backlinks an direkte Transfert.",
  ctaBrowse: "Domainen Duerchsichen", ctaMore: "Méi Erfahren",
  statLabels: ["Premium Domainen", "Backlinks", "Kategorien", "Zefridden Clienten"],
  navDomains: "Domainen", navWhy: "Firwat Premium", navFaq: "FAQ", navContact: "Kontakt",
  gridBadge: "Premium Kollektioun", gridTitle: "Premium Domainen", gridSub: "Duerchsicht Premium Domainen mat verifizéiertem SEO Wäert.",
  gridIntro: [
    "All Domain huet <strong>héich Domainautoritéit (DA 29+)</strong> an <strong>verifizéierte Backlink Profil</strong>.",
    "All Domain enthält MOZ Score, Säit Autoritéit, Zuel vu verlinkte Domainen an Top Backlink Informatiounen.",
  ],
  vatInfo: "💡 EU Clienten: All Präisser enthale MwSt (EU MwSt Reguléierung)",
  buyNow: "Elo Kaafen", inquiryLabel: "Nofroën", priceLabel: "Präis",
  blLabel: "Backlinks", paLabel: "PA", ldLabel: "Verlinkt Domainen", ibLabel: "Akommend", flLabel: "Gefollegt", topBlLabel: "Top Backlinks",
  viewDetails: "Detailer kucken", buyAlt: "Premium Domain kaafen",
  whyBadge: "Firwat Premium", whyTitle: "Virdeeler vu Premium Domainen", whySub: "Premium Domainen gi méi séier SEO Resultater.",
  whyCards: [
    { title: "Direkt Autoritéit", desc: "Verbessert d'Sichresultat direkt mat héijem DA" },
    { title: "Verifizéiert Backlinks", desc: "Enthält Honnerte vu qualitativ Backlinks" },
    { title: "SEO Virsprong", desc: "Vill méi séier Ranking wéi nei Domainen" },
    { title: "Global Unerkennung", desc: "Direkt Brand Glafwierdegkeet" },
  ],
  faqBadge: "Heefeg Gestallte Froen", faqTitle: "FAQ",
  faqs: [
    { q: "Wat ass eng Premium Domain?", a: "Eng Premium Domain ass eng ofgelaf Domain mat héijer Autoritéit, existéierendem Backlink Profil a bewisenem SEO Wäert." },
    { q: "Wéi funktionéiert den Domain Transfert?", a: "No der Bezuelung starten mir de Transfertprozess bannent 24 Stonnen. De ganze Prozess dauert normalerweis 3-5 Aarbechtsdeeg." },
    { q: "Wat ass d'Réckerstatungspolitik?", a: "Voll Réckerstattung méiglech ier den Domain Transfert ugeet." },
    { q: "Wéi eng Bezuelungsmethoden akzeptéiert Dir?", a: "Mir akzeptéieren all grouss Kredit- a Debitkarten iwwer Stripe." },
    { q: "Wéi kann ech de SEO Wäert vun enger Domain verifizéieren?", a: "All Domain enthält verifizéiert MOZ DA/PA Scores, Backlink Zuelen an Daten vun verlinkte Domainen." },
  ],
  contactBadge: "Kontaktéiert Eis", contactTitle: "Kontakt", contactSub: "Froen zu Premium Domainen? Kontaktéiert eis.",
  nameLabel: "Numm", emailLabel: "E-Mail", domainLabel: "Interesséiert Domain", msgLabel: "Noriicht",
  namePh: "Jean Muller", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Gitt Är Noriicht an...",
  submitBtn: "Noriicht Schécken", formErrTitle: "Formulaire Feeler", formErrCheck: "Kontrolléiert w.e.g. all Felder.",
  sendingTitle: "Gëtt geschéckt...", sendingDesc: "D'E-Mail Applikatioun geet op.",
  emailSubjectPrefix: "Premium Domain Ufro",
  seoTitle: "Start Ären Online Erfolleg mat Premium Domainen",
  seoP1: "Premium ofgelaf Domainen gi neie Projeten direkte SEO Virsprong mat héijer Autoritéit an existéierende Backlinks.",
  seoP2: "D'IAEE Premium Domain Kollektioun huet eng grëndlech SEO Analyse duerchgaang, all Domain huet verifizéiert MOZ Score a Backlink Profil.",
  nordTitle: "🛡️ NordVPN Empfielung", nordDesc: "Mir empfeelen NordVPN fir Online Sécherheet an Dateschutz.", nordCta: "NordVPN Kréien",
  contactBtmTitle: "Prett fir unzefänken?", contactBtmSub: "Kritt Är Premium Domain elo.", contactBtmNote: "24 Stonnen Äntwert Garantie",
  legalTitle: "Rechtlech Informatiounen", legalTerms: "Notzungsbedingungen", legalPrivacy: "Dateschutzpolitik",
  copyrightText: "© 2025 IAEE Premium Domains. All Rechter virbehal.",
  backToTopLabel: "Zréck no uewen",
};

const PremiumDomainsLB = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsLB;

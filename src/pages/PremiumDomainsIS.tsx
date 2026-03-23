import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "is", locale: "is_IS", brandName: "IAEE Premium Lén",
  title: "Kaupa Premium Lén | Hátt Vald SEO Virði | IAEE",
  metaDesc: "Kauptu premium lén með háu léna valdi og SEO virði. Útrunnin lén með MOZ DA 29+ fyrir strax vörumerkjabyggingu og leitarstöðu.",
  heroBadge: "Premium Léna Markaður",
  heroTitle: "Kauptu Hás Valds Premium Lén",
  heroSub: "Uppgötvaðu premium útrunnin lén með tafarlausu SEO afli. Hvert lén hefur hátt vald, staðfesta baktengi og strax flutning.",
  ctaBrowse: "Skoða Lén", ctaMore: "Læra Meira",
  statLabels: ["Premium Lén", "Baktenglar", "Flokkar", "Ánægðir Viðskiptavinir"],
  navDomains: "Lén", navWhy: "Af Hverju Premium", navFaq: "Algengar Spurningar", navContact: "Hafa Samband",
  gridBadge: "Premium Safn", gridTitle: "Premium Lén", gridSub: "Skoðaðu premium lén með staðfestu SEO virði.",
  gridIntro: [
    "Hvert lén hefur <strong>hátt léna vald (DA 29+)</strong> og <strong>staðfestan baktengla prófíl</strong>.",
    "Hvert lén inniheldur MOZ stig, síðu vald, fjölda tengdra léna og upplýsingar um helstu baktengi.",
  ],
  vatInfo: "💡 ESB viðskiptavinir: Öll verð innihalda VSK (ESB VSK reglugerð)",
  buyNow: "Kaupa Núna", inquiryLabel: "Fyrirspurn", priceLabel: "Verð",
  blLabel: "Baktenglar", paLabel: "PA", ldLabel: "Tengd lén", ibLabel: "Innkomandi", flLabel: "Fylgt", topBlLabel: "Helstu baktenglar",
  viewDetails: "Sjá nánari upplýsingar", buyAlt: "Kaupa premium lén",
  whyBadge: "Af Hverju Premium", whyTitle: "Kostir Premium Léna", whySub: "Premium lén gefa hraðari SEO árangur.",
  whyCards: [
    { title: "Tafarlaust Vald", desc: "Bættu leitarstöðu strax með háu DA" },
    { title: "Staðfestir Baktenglar", desc: "Inniheldur hundruð gæða baktengi" },
    { title: "SEO Forskot", desc: "Miklu hraðari röðun en ný lén" },
    { title: "Alþjóðleg Viðurkenning", desc: "Tafarlaus trúverðugleiki vörumerkis" },
  ],
  faqBadge: "Algengar Spurningar", faqTitle: "Algengar Spurningar",
  faqs: [
    { q: "Hvað er premium lén?", a: "Premium lén er útrunnið lén með háu valdi, núverandi baktengla prófíl og sannað SEO virði." },
    { q: "Hvernig fer léna flutningur fram?", a: "Eftir greiðslu byrjum við flutningsferlið innan 24 klukkustunda. Allt ferlið tekur venjulega 3-5 virka daga." },
    { q: "Hver er endurgreiðslustefnan?", a: "Full endurgreiðsla er möguleg áður en léna flutningur hefst." },
    { q: "Hvaða greiðslumáta samþykkið þið?", a: "Við samþykkjum öll helstu kredit- og debetkort í gegnum Stripe." },
    { q: "Hvernig staðfesti ég SEO virði léns?", a: "Hvert lén inniheldur staðfest MOZ DA/PA stig, fjölda baktengi og gögn tengdra léna." },
  ],
  contactBadge: "Hafa Samband", contactTitle: "Hafa Samband", contactSub: "Spurningar um premium lén? Hafðu samband.",
  nameLabel: "Nafn", emailLabel: "Netfang", domainLabel: "Lén sem vekur áhuga", msgLabel: "Skilaboð",
  namePh: "Jón Jónsson", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Skrifaðu skilaboðin þín...",
  submitBtn: "Senda Skilaboð", formErrTitle: "Villa í Formi", formErrCheck: "Vinsamlegast athugaðu alla reiti.",
  sendingTitle: "Sendir...", sendingDesc: "Tölvupóstforrit opnast.",
  emailSubjectPrefix: "Premium Léna Fyrirspurn",
  seoTitle: "Byrjaðu Árangur á Netinu með Premium Lénum",
  seoP1: "Premium útrunnin lén gefa nýjum verkefnum tafarlaust SEO forskot með háu valdi og núverandi baktengum.",
  seoP2: "Premium léna safn IAEE hefur gengist undir ítarlega SEO greiningu, hvert lén hefur staðfest MOZ stig og baktengla prófíl.",
  nordTitle: "🛡️ NordVPN Tilmæli", nordDesc: "Við mælum með NordVPN fyrir netöryggi og persónuvernd.", nordCta: "Fá NordVPN",
  contactBtmTitle: "Tilbúinn að byrja?", contactBtmSub: "Fáðu þitt premium lén núna.", contactBtmNote: "24 klukkustunda svartrygging",
  legalTitle: "Lagalegar Upplýsingar", legalTerms: "Notkunarskilmálar", legalPrivacy: "Persónuverndarstefna",
  copyrightText: "© 2025 IAEE Premium Domains. Öll réttindi áskilin.",
  backToTopLabel: "Til baka upp",
};

const PremiumDomainsIS = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsIS;

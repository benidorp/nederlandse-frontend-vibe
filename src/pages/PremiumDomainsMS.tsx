import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "ms", locale: "ms_MY", brandName: "IAEE Domain Premium",
  title: "Beli Domain Premium | Autoriti Tinggi Nilai SEO | IAEE",
  metaDesc: "Beli domain premium dengan autoriti domain tinggi dan nilai SEO. Domain tamat tempoh MOZ DA 29+ untuk penjenamaan dan kedudukan serta-merta.",
  heroBadge: "Pasaran Domain Premium",
  heroTitle: "Beli Domain Premium Autoriti Tinggi",
  heroSub: "Temui domain tamat tempoh premium dengan kuasa SEO serta-merta. Setiap domain mempunyai autoriti tinggi, pautan balik disahkan dan pemindahan segera.",
  ctaBrowse: "Layari Domain", ctaMore: "Ketahui Lebih Lanjut",
  statLabels: ["Domain Premium", "Pautan Balik", "Kategori", "Pelanggan Berpuas Hati"],
  navDomains: "Domain", navWhy: "Mengapa Premium", navFaq: "Soalan Lazim", navContact: "Hubungi",
  gridBadge: "Koleksi Premium", gridTitle: "Domain Premium", gridSub: "Layari domain premium dengan nilai SEO yang disahkan.",
  gridIntro: [
    "Setiap domain mempunyai <strong>autoriti domain tinggi (DA 29+)</strong> dan <strong>profil pautan balik yang disahkan</strong>.",
    "Setiap domain termasuk skor MOZ, autoriti halaman, bilangan domain yang dipautkan dan maklumat pautan balik teratas.",
  ],
  vatInfo: "💡 Pelanggan EU: Semua harga termasuk VAT (peraturan EU VAT)",
  buyNow: "Beli Sekarang", inquiryLabel: "Bertanya", priceLabel: "Harga",
  blLabel: "Pautan balik", paLabel: "PA", ldLabel: "Domain dipautkan", ibLabel: "Masuk", flLabel: "Diikuti", topBlLabel: "Pautan balik teratas",
  viewDetails: "Lihat butiran", buyAlt: "Beli domain premium",
  whyBadge: "Mengapa Premium", whyTitle: "Kelebihan Domain Premium", whySub: "Domain premium memberikan hasil SEO yang lebih cepat.",
  whyCards: [
    { title: "Autoriti Serta-merta", desc: "Tingkatkan kedudukan carian dengan DA tinggi" },
    { title: "Pautan Balik Disahkan", desc: "Termasuk ratusan pautan balik berkualiti" },
    { title: "Kelebihan SEO", desc: "Kedudukan lebih cepat berbanding domain baharu" },
    { title: "Pengiktirafan Global", desc: "Kredibiliti jenama serta-merta" },
  ],
  faqBadge: "Soalan Lazim", faqTitle: "Soalan Lazim",
  faqs: [
    { q: "Apakah domain premium?", a: "Domain premium ialah domain tamat tempoh dengan autoriti tinggi, profil pautan balik sedia ada dan nilai SEO yang terbukti." },
    { q: "Bagaimana pemindahan domain dilakukan?", a: "Selepas pembayaran, kami memulakan proses pemindahan dalam masa 24 jam. Keseluruhan proses biasanya mengambil masa 3-5 hari bekerja." },
    { q: "Apakah polisi bayaran balik?", a: "Bayaran balik penuh tersedia sebelum pemindahan domain dimulakan." },
    { q: "Kaedah pembayaran apa yang diterima?", a: "Kami menerima semua kad kredit dan debit utama melalui Stripe." },
    { q: "Bagaimana mengesahkan nilai SEO domain?", a: "Setiap domain disertakan skor MOZ DA/PA, bilangan pautan balik dan data domain yang dipautkan yang disahkan." },
  ],
  contactBadge: "Hubungi Kami", contactTitle: "Hubungi", contactSub: "Ada soalan tentang domain premium? Hubungi kami.",
  nameLabel: "Nama", emailLabel: "Emel", domainLabel: "Domain yang diminati", msgLabel: "Mesej",
  namePh: "Ahmad bin Ali", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Taip mesej anda...",
  submitBtn: "Hantar Mesej", formErrTitle: "Ralat Borang", formErrCheck: "Sila semak semua medan.",
  sendingTitle: "Menghantar...", sendingDesc: "Aplikasi emel akan dibuka.",
  emailSubjectPrefix: "Pertanyaan Domain Premium",
  seoTitle: "Mulakan Kejayaan Dalam Talian dengan Domain Premium",
  seoP1: "Domain tamat tempoh premium memberikan kelebihan SEO serta-merta untuk projek baharu dengan autoriti tinggi dan pautan balik sedia ada.",
  seoP2: "Koleksi domain premium IAEE telah melalui analisis SEO yang teliti, setiap domain mempunyai skor MOZ dan profil pautan balik yang disahkan.",
  nordTitle: "🛡️ Cadangan NordVPN", nordDesc: "Kami mencadangkan NordVPN untuk keselamatan dalam talian dan perlindungan privasi.", nordCta: "Dapatkan NordVPN",
  contactBtmTitle: "Bersedia untuk bermula?", contactBtmSub: "Dapatkan domain premium anda sekarang.", contactBtmNote: "Jaminan respons dalam 24 jam",
  legalTitle: "Maklumat Undang-undang", legalTerms: "Syarat Penggunaan", legalPrivacy: "Dasar Privasi",
  copyrightText: "© 2025 IAEE Premium Domains. Hak cipta terpelihara.",
  backToTopLabel: "Kembali ke atas",
};

const PremiumDomainsMS = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsMS;

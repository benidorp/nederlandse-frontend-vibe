import PremiumDomainsTemplate, { PDPageConfig } from "@/components/premium-domains/PremiumDomainsTemplate";

const config: PDPageConfig = {
  lang: "id", locale: "id_ID", brandName: "IAEE Domain Premium",
  title: "Beli Domain Premium | Otoritas Tinggi Nilai SEO | IAEE",
  metaDesc: "Beli domain premium dengan otoritas domain tinggi dan nilai SEO. Domain kedaluwarsa MOZ DA 29+ untuk branding dan peringkat instan.",
  heroBadge: "Marketplace Domain Premium",
  heroTitle: "Beli Domain Premium Otoritas Tinggi",
  heroSub: "Temukan domain kedaluwarsa premium dengan kekuatan SEO instan. Setiap domain memiliki otoritas tinggi, backlink terverifikasi, dan siap transfer.",
  ctaBrowse: "Jelajahi Domain", ctaMore: "Pelajari Lebih Lanjut",
  statLabels: ["Domain Premium", "Backlink", "Kategori", "Pelanggan Puas"],
  navDomains: "Domain", navWhy: "Mengapa Premium", navFaq: "FAQ", navContact: "Kontak",
  gridBadge: "Koleksi Premium", gridTitle: "Domain Premium", gridSub: "Jelajahi domain premium dengan nilai SEO terverifikasi.",
  gridIntro: [
    "Setiap domain memiliki <strong>otoritas domain tinggi (DA 29+)</strong> dan <strong>profil backlink terverifikasi</strong>.",
    "Setiap domain dilengkapi skor MOZ, otoritas halaman, jumlah domain terhubung, dan info backlink teratas.",
  ],
  vatInfo: "💡 Pelanggan EU: Semua harga sudah termasuk PPN (sesuai regulasi EU VAT)",
  buyNow: "Beli Sekarang", inquiryLabel: "Tanyakan", priceLabel: "Harga",
  blLabel: "Backlink", paLabel: "PA", ldLabel: "Domain terhubung", ibLabel: "Masuk", flLabel: "Diikuti", topBlLabel: "Backlink teratas",
  viewDetails: "Lihat detail", buyAlt: "Beli domain premium",
  whyBadge: "Mengapa Premium", whyTitle: "Keuntungan Domain Premium", whySub: "Domain premium memberikan hasil SEO lebih cepat.",
  whyCards: [
    { title: "Otoritas Instan", desc: "Tingkatkan peringkat pencarian langsung dengan DA tinggi" },
    { title: "Backlink Terverifikasi", desc: "Termasuk ratusan backlink berkualitas" },
    { title: "Keunggulan SEO", desc: "Peringkat jauh lebih cepat dari domain baru" },
    { title: "Pengakuan Global", desc: "Kredibilitas merek instan" },
  ],
  faqBadge: "Pertanyaan Umum", faqTitle: "FAQ",
  faqs: [
    { q: "Apa itu domain premium?", a: "Domain premium adalah domain kedaluwarsa dengan otoritas domain tinggi, profil backlink yang ada, dan nilai SEO yang terbukti." },
    { q: "Bagaimana proses transfer domain?", a: "Setelah pembayaran, kami memulai proses transfer dalam 24 jam. Seluruh proses memakan waktu sekitar 3-5 hari kerja." },
    { q: "Bagaimana kebijakan pengembalian dana?", a: "Pengembalian dana penuh tersedia sebelum transfer domain dimulai." },
    { q: "Metode pembayaran apa yang diterima?", a: "Kami menerima semua kartu kredit dan debit utama melalui Stripe." },
    { q: "Bagaimana memverifikasi nilai SEO domain?", a: "Setiap domain dilengkapi skor MOZ DA/PA, jumlah backlink, dan data domain terhubung yang terverifikasi." },
  ],
  contactBadge: "Hubungi Kami", contactTitle: "Kontak", contactSub: "Ada pertanyaan tentang domain premium? Hubungi kami.",
  nameLabel: "Nama", emailLabel: "Email", domainLabel: "Domain yang diminati", msgLabel: "Pesan",
  namePh: "Budi Santoso", emailPh: "email@example.com", domainPh: "example.eu", msgPh: "Ketik pesan Anda...",
  submitBtn: "Kirim Pesan", formErrTitle: "Kesalahan Formulir", formErrCheck: "Mohon periksa semua kolom.",
  sendingTitle: "Mengirim...", sendingDesc: "Aplikasi email akan terbuka.",
  emailSubjectPrefix: "Pertanyaan Domain Premium",
  seoTitle: "Mulai Sukses Online dengan Domain Premium",
  seoP1: "Domain kedaluwarsa premium memberikan keunggulan SEO instan untuk proyek baru dengan otoritas tinggi dan backlink yang ada.",
  seoP2: "Koleksi domain premium IAEE telah melalui analisis SEO menyeluruh, setiap domain memiliki skor MOZ dan profil backlink terverifikasi.",
  nordTitle: "🛡️ Rekomendasi NordVPN", nordDesc: "Kami merekomendasikan NordVPN untuk keamanan online dan perlindungan privasi.", nordCta: "Dapatkan NordVPN",
  contactBtmTitle: "Siap memulai?", contactBtmSub: "Dapatkan domain premium Anda sekarang.", contactBtmNote: "Jaminan respons dalam 24 jam",
  legalTitle: "Informasi Hukum", legalTerms: "Syarat Penggunaan", legalPrivacy: "Kebijakan Privasi",
  copyrightText: "© 2025 IAEE Premium Domains. Hak cipta dilindungi.",
  backToTopLabel: "Kembali ke atas",
};

const PremiumDomainsID = () => <PremiumDomainsTemplate config={config} />;
export default PremiumDomainsID;

import { VATGuideContent } from "./vatGuideTranslations";

export const guideID: VATGuideContent = {
  badge: "Panduan PPN Lengkap 2025-2026",
  title: "Panduan Lengkap Perhitungan PPN Internasional",
  subtitle: "Semua yang perlu Anda ketahui tentang perhitungan PPN untuk toko online, freelancer, bisnis SaaS, dan perdagangan internasional — terkini, terpercaya, dan berdasarkan pengalaman praktis.",
  sections: {
    s1Title: "Apa itu PPN dan mengapa perhitungan yang tepat itu penting?",
    s1P1: "PPN (Pajak Pertambahan Nilai) adalah pajak konsumsi yang dikenakan pada barang dan jasa di lebih dari 170 negara di seluruh dunia. Dalam bahasa Inggris disebut VAT (Value Added Tax), sementara beberapa negara menggunakan istilah GST (Goods and Services Tax). Meskipun namanya berbeda, sistem dasarnya sama: pajak ditambahkan di setiap tahap rantai produksi dan distribusi.",
    s1P2: "Bagi pengusaha, freelancer, dan bisnis yang beroperasi secara internasional, menghitung PPN dengan tepat bukan hanya kewajiban hukum tetapi juga kebutuhan strategis. Kesalahan dalam perhitungan PPN dapat menyebabkan tagihan pajak tambahan, denda, dan masalah administratif dengan otoritas pajak di berbagai negara. Kalkulator PPN internasional gratis kami membantu Anda menghindari risiko ini dengan perhitungan akurat berdasarkan tarif terbaru.",
    s1P3: "Baik Anda menjalankan toko online yang mengirim produk ke pelanggan di seluruh Eropa, menawarkan platform SaaS kepada pengguna di seluruh dunia, atau sebagai freelancer yang memberikan layanan kepada klien internasional — menerapkan tarif PPN yang benar adalah fondasi operasi bisnis yang sehat. Panduan ini membantu Anda memahami kompleksitas PPN internasional dan memberikan panduan praktis untuk mencegah kesalahan.",

    s2Title: "Bagaimana sistem PPN bekerja di seluruh dunia?",
    s2P1: "Sistem PPN unik karena dipungut di setiap tahap rantai nilai. Produsen membayar PPN untuk bahan baku, menambah nilai pada produk, dan membebankan PPN kepada pedagang grosir. Pedagang grosir melakukan hal yang sama kepada pengecer, yang akhirnya membebankan PPN kepada konsumen. Di setiap tahap, PPN yang telah dibayar sebelumnya (pajak masukan) dapat dikurangkan, sehingga hanya konsumen akhir yang menanggung seluruh beban pajak.",
    s2P2: "Sistem ini berbeda secara fundamental dari pajak penjualan (sales tax) sederhana, seperti yang diterapkan di beberapa negara bagian Amerika. Dengan sales tax, pajak hanya dipungut satu kali saat penjualan kepada konsumen akhir. Sistem PPN memberikan transparansi lebih tinggi dan mencegah pengenaan pajak berlapis, sehingga telah diadopsi oleh sebagian besar negara di dunia.",
    s2FormulaTitle: "Menghitung PPN: Rumus dasar",
    s2FormulaAdd: "Menambahkan PPN (belum termasuk → termasuk):",
    s2FormulaAddDesc: "Jumlah termasuk PPN = Jumlah belum termasuk PPN × (1 + Tarif PPN / 100)",
    s2FormulaRemove: "Mengeluarkan PPN (termasuk → belum termasuk):",
    s2FormulaRemoveDesc: "Jumlah belum termasuk PPN = Jumlah termasuk PPN ÷ (1 + Tarif PPN / 100)",
    s2FormulaTip: "Tips: Gunakan kalkulator kami di atas untuk melakukan perhitungan ini secara otomatis dan akurat untuk setiap negara.",
    s2P3: "Penting untuk diketahui bahwa hampir setiap negara menerapkan beberapa tarif PPN. Selain tarif standar, ada tarif yang dikurangi untuk barang kebutuhan pokok seperti makanan, obat-obatan, buku, dan layanan budaya. Beberapa negara bahkan menerapkan tarif nol atau pembebasan untuk kategori tertentu. Kalkulator kami secara otomatis menampilkan semua tarif yang tersedia saat Anda memilih suatu negara.",

    s3Title: "Menghitung PPN untuk e-commerce, toko online, dan penjualan online",
    s3P1: "Sektor e-commerce adalah salah satu area paling kompleks dalam hal perhitungan PPN. Penjual online harus mempertimbangkan negara pembeli, jenis produk atau layanan, dan apakah pelanggan adalah individu (B2C) atau bisnis (B2B). Di dalam Uni Eropa, sejak Juli 2021, sistem One Stop Shop (OSS) memungkinkan pelaporan PPN untuk semua negara UE melalui satu deklarasi.",
    s3P2: "Untuk toko online yang menjual produk fisik kepada konsumen di negara UE lain, tarif PPN negara pelanggan harus diterapkan ketika total penjualan kepada konsumen UE melebihi €10.000 per tahun. Ini berarti toko online Indonesia yang menjual ke konsumen Jerman harus menghitung dan membayar PPN dengan tarif Jerman — sesuatu yang kalkulator kami bantu lakukan dengan cepat dan tepat.",
    s3P3: "Untuk transaksi B2B dalam UE, umumnya berlaku mekanisme reverse charge. Artinya pemasok mengeluarkan faktur tanpa PPN dan pembeli sendiri yang melaporkan dan mengkreditkan PPN di negaranya. Ini sangat menyederhanakan administrasi, tetapi kedua belah pihak harus memiliki nomor identifikasi PPN yang valid yang dapat diverifikasi melalui sistem VIES.",
    s3PhysicalTitle: "Produk fisik",
    s3PhysicalDesc: "PPN dihitung berdasarkan negara pengiriman. Untuk pengiriman ke negara UE lain, tarif lokal berlaku untuk penjualan B2C di atas ambang batas. Untuk ekspor ke luar UE, berlaku tarif nol.",
    s3DigitalTitle: "Produk dan layanan digital",
    s3DigitalDesc: "Untuk produk dan layanan digital yang dijual kepada individu, berlaku tarif PPN negara pelanggan, di mana pun penjual berada. Ini mencakup perangkat lunak, e-book, kursus online, layanan streaming, dan produk SaaS.",
    s3P4: "Dropshipping menjadi perhatian khusus. Sebagai dropshipper, Anda secara hukum adalah penjual, meskipun Anda tidak pernah memegang barang secara fisik. Ini berarti Anda bertanggung jawab atas perhitungan dan pembayaran PPN yang benar. Untuk impor dari luar UE, Anda harus mempertimbangkan PPN impor dan bea masuk. Kalkulator kami membantu Anda menentukan jumlah PPN yang tepat, terlepas dari kompleksitas model bisnis Anda.",

    s4Title: "Menghitung PPN untuk freelancer dan penyedia layanan",
    s4P1: "Sebagai freelancer yang bekerja secara internasional, sangat penting untuk memahami kapan Anda harus membebankan PPN dan tarif mana yang berlaku. Aturan dasarnya sederhana: untuk layanan kepada bisnis (B2B) dalam UE, berlaku mekanisme reverse charge, artinya Anda mengeluarkan faktur tanpa PPN dan pembeli sendiri yang melaporkan PPN. Untuk layanan kepada individu (B2C), umumnya berlaku tarif PPN negara tempat Anda berdomisili.",
    s4P2: "Namun ada pengecualian penting. Layanan yang dikirimkan secara elektronik kepada individu di negara UE lain termasuk dalam regulasi OSS, di mana tarif PPN negara konsumen berlaku. Ini mencakup desain web, pemrograman, konsultasi online, dan layanan digital lainnya. Kalkulator kami membantu Anda menemukan tarif yang tepat untuk negara klien Anda dengan cepat.",
    s4P3: "Untuk menyusun faktur dan penawaran yang benar, penting untuk mengetahui jumlah PPN yang harus dihitung. Faktur untuk klien bisnis di Jerman berbeda dari faktur untuk klien individu di Italia dalam hal PPN. Gunakan kalkulator kami untuk menghitung jumlah PPN yang tepat dan selalu cantumkan tarif PPN, jumlah PPN, dan total termasuk serta belum termasuk PPN pada faktur Anda.",
    s4P4: "Di banyak negara, freelancer dengan omzet tahunan di bawah ambang batas tertentu dapat menggunakan skema pembebasan untuk usaha kecil, yang dibebaskan dari pembayaran PPN tetapi juga tidak dapat mengkreditkan PPN. Skema serupa ada di banyak negara. Pertimbangkan dengan cermat apakah skema ini menguntungkan untuk situasi Anda, terutama jika Anda memiliki banyak biaya bisnis yang ingin diklaim PPN-nya.",

    s5Title: "Menghitung PPN untuk SaaS, perangkat lunak, dan langganan digital",
    s5P1: "SaaS (Software as a Service) dan langganan digital adalah segmen yang berkembang dengan aturan PPN khusus. Ketika Anda sebagai penyedia SaaS memberikan layanan kepada konsumen di UE, Anda harus menerapkan tarif PPN negara pelanggan. Ini berlaku untuk semua layanan yang dikirimkan secara elektronik, termasuk perangkat lunak cloud, platform streaming, alat online, dan situs web keanggotaan.",
    s5P2: "Penentuan lokasi pelanggan (\"tempat penyediaan layanan\") sangat krusial dan ditentukan berdasarkan dua bukti independen, seperti alamat faktur, alamat IP, informasi bank, atau nomor telepon. Bisnis SaaS harus menerapkan sistem yang secara otomatis mencatat informasi ini untuk memenuhi kewajiban PPN.",
    s5P3: "Untuk penjualan B2B kepada bisnis di luar negara Anda tetapi dalam UE, berlaku mekanisme reverse charge jika pembeli memiliki nomor identifikasi PPN yang valid. Untuk penjualan kepada bisnis atau konsumen di luar UE, layanan umumnya tidak dikenakan PPN di UE, tetapi Anda harus mempertimbangkan kewajiban pajak lokal di negara pelanggan.",
    s5P4: "Platform seperti Shopify, WooCommerce, dan sistem e-commerce lainnya semakin banyak menyediakan kemampuan perhitungan PPN bawaan, tetapi penting untuk memverifikasi pengaturan ini dengan kalkulator independen. Kesalahan dalam perhitungan PPN otomatis sering terjadi, terutama dalam transaksi lintas batas dengan beberapa tarif.",

    s6Title: "PPN untuk impor dan ekspor: Yang perlu Anda ketahui",
    s6P1: "Dalam perdagangan internasional, PPN impor dan ekspor memainkan peran krusial. Ekspor dari UE ke negara di luar UE (negara ketiga) pada prinsipnya dibebaskan dari PPN — yang disebut tarif nol. Ini berlaku untuk barang maupun layanan tertentu. Eksportir harus dapat membuktikan bahwa barang benar-benar telah meninggalkan UE, misalnya dengan dokumen bea cukai.",
    s6P2: "Saat mengimpor barang dari luar UE, PPN impor dipungut di bea cukai. Tarif PPN yang diterapkan adalah tarif negara impor. Selain itu, mungkin berlaku bea masuk, tergantung pada jenis produk dan negara asal. Sejak 2021, pembebasan PPN untuk kiriman dengan nilai di bawah €22 telah dihapuskan di UE, sehingga semua barang impor harus membayar PPN.",
    s6P3: "Untuk bisnis yang rutin mengimpor, banyak negara UE menawarkan mekanisme reverse charge untuk PPN impor. Dengan ini, PPN impor tidak perlu dibayar di bea cukai tetapi diproses dalam deklarasi PPN periodik. Ini secara signifikan meningkatkan arus kas karena Anda dapat langsung mengkreditkan PPN impor dengan PPN yang harus dibayar.",

    s7Title: "Regulasi PPN UE dan One Stop Shop (OSS)",
    s7P1: "Uni Eropa telah menciptakan sistem yang terharmonisasi dengan Petunjuk PPN yang memfasilitasi perdagangan lintas batas. Meskipun setiap negara UE menetapkan tarifnya sendiri, ada aturan bersama untuk tempat penyediaan layanan, mekanisme reverse charge, dan kewajiban administratif. Sistem One Stop Shop (OSS), diluncurkan pada Juli 2021, adalah alat penting bagi bisnis e-commerce dan penyedia layanan digital.",
    s7P2: "Melalui OSS, Anda dapat membayar semua PPN yang terutang kepada negara UE lain melalui satu deklarasi kuartalan di negara Anda sendiri. Ini mencegah Anda harus mendaftar PPN secara terpisah di setiap negara UE — pengurangan beban administratif yang sangat signifikan. OSS tersedia untuk penjualan B2C barang dan layanan digital kepada konsumen di negara UE lain.",
    s7P3: "Selain OSS, ada Import One Stop Shop (IOSS) untuk barang yang diimpor dari luar UE dengan nilai hingga €150. Melalui IOSS, penjual atau platform dapat memungut dan membayar PPN saat penjualan, sehingga pembeli tidak perlu membayar PPN impor saat menerima barang. Ini meningkatkan pengalaman pelanggan dan mempercepat proses pengiriman.",
    s7P4: "Penting untuk diketahui bahwa mekanisme reverse charge hanya berlaku ketika kedua belah pihak memiliki nomor identifikasi PPN yang valid. Anda dapat memverifikasinya melalui sistem VIES (VAT Information Exchange System) dari Komisi Eropa. Jika ragu tentang validitas nomor PPN, Anda harus mengenakan tarif PPN standar untuk menghindari tagihan tambahan.",

    s8Title: "PPN dan pajak penjualan di seluruh dunia: Sistem penting di luar UE",
    s8P1: "Di luar Uni Eropa, negara-negara menggunakan sistem pajak konsumsi yang sangat bervariasi. Inggris setelah Brexit mempertahankan sistem PPN-nya sendiri, dengan tarif standar dan tarif yang dikurangi untuk kategori tertentu. Australia, Selandia Baru, Kanada, dan Singapura menggunakan istilah GST tetapi bekerja serupa dengan PPN. Amerika Serikat adalah pengecualian dengan sistem sales tax terdesentralisasi, di mana tarif berbeda per negara bagian dan terkadang per kota.",
    s8P2: "Bagi pengusaha internasional yang juga menjual di luar UE, sangat penting untuk mengetahui kewajiban pajak lokal. Di banyak negara ada ambang batas pendaftaran: ketika Anda mencapai omzet melebihi jumlah tertentu di negara tersebut, Anda harus mendaftar untuk pajak konsumsi lokal. Ini semakin sering berlaku untuk layanan digital dan e-commerce, dengan negara seperti Australia, Jepang, dan Korea Selatan menerapkan kewajiban bagi penyedia asing.",
    s8P3: "Kalkulator kami mendukung lebih dari 60 negara dan menyediakan tarif terbaru untuk negara UE maupun non-UE. Ini menjadikannya alat ideal bagi bisnis yang beroperasi secara global dan ingin menghitung tarif PPN atau GST yang tepat dengan cepat untuk transaksi internasional mereka.",

    s9Title: "Kepatuhan PPN: Praktik terbaik untuk 2025-2026",
    s9P1: "Kepatuhan PPN yang benar membutuhkan lebih dari sekadar menghitung tarif yang tepat. Ini mencakup administrasi yang solid, pelaporan tepat waktu, penagihan yang benar, dan penyimpanan semua dokumentasi yang relevan. Otoritas pajak di UE dan lainnya semakin ketat dalam penegakan, terutama untuk e-commerce dan layanan digital. Investasikan dalam perangkat lunak akuntansi yang baik dan konsultasikan dengan penasihat pajak yang berpengalaman internasional.",
    s9InvoiceTitle: "Penagihan dan administrasi",
    s9InvoiceItems: [
      "Selalu cantumkan tarif dan jumlah PPN pada faktur",
      "Simpan faktur minimal 7 tahun atau sesuai aturan lokal",
      "Gunakan sistem penomoran faktur berurutan",
      "Cantumkan nomor identifikasi PPN kedua belah pihak",
      "Saat reverse charge: cantumkan \"PPN dialihkan\" pada faktur"
    ],
    s9DeadlineTitle: "Tenggat waktu dan pelaporan",
    s9DeadlineItems: [
      "Selalu ajukan deklarasi PPN tepat waktu",
      "Deklarasi OSS: setiap kuartal (bulan setelah akhir kuartal)",
      "Daftar VIES: setiap kuartal untuk transaksi B2B di UE",
      "Simpan bukti lokasi pelanggan",
      "Pantau ambang batas untuk kewajiban pendaftaran"
    ],
    s9P2: "Trennya jelas: pemerintah semakin banyak berinvestasi dalam alat penegakan digital dan pelaporan real-time. Negara seperti Italia, Hungaria, dan Spanyol telah menerapkan atau sedang menerapkan sistem faktur real-time. Oleh karena itu bijaksana untuk berinvestasi sekarang dalam sistem yang kuat untuk perhitungan dan pelaporan PPN, agar Anda siap menghadapi perubahan regulasi di masa depan.",

    s10Title: "Untuk apa saja Anda bisa menggunakan kalkulator PPN kami?",
    s10P1: "Kalkulator PPN internasional kami dirancang untuk berbagai macam penggunaan. Di bawah ini adalah skenario umum di mana pengusaha menggunakan alat kami:",
    s10UseCases: [
      { term: "Menghitung PPN untuk harga toko online", desc: "Tentukan harga jual yang tepat termasuk atau belum termasuk PPN untuk toko online Anda." },
      { term: "Menghitung PPN untuk produk impor", desc: "Hitung PPN impor dan total biaya saat mengimpor barang." },
      { term: "Menghitung PPN untuk layanan online", desc: "Tentukan tarif yang tepat untuk layanan digital yang diberikan kepada klien di seluruh dunia." },
      { term: "Menghitung PPN untuk faktur freelancer", desc: "Hitung jumlah PPN yang tepat untuk faktur internasional Anda." },
      { term: "Menghitung PPN untuk langganan SaaS", desc: "Tentukan tarif PPN yang benar untuk langganan perangkat lunak di setiap negara." },
      { term: "Menghitung PPN untuk dropshipping", desc: "Hitung PPN untuk barang dropship termasuk bea impor." },
      { term: "Konversi harga termasuk PPN ke belum termasuk", desc: "Dengan cepat pisahkan PPN dari harga termasuk PPN untuk setiap negara." },
      { term: "Bandingkan tarif PPN antar negara", desc: "Lihat dan bandingkan tarif PPN berbagai negara secara instan." },
      { term: "Menghitung PPN untuk Shopify dan WooCommerce", desc: "Verifikasi perhitungan PPN dari platform e-commerce Anda." },
      { term: "Perhitungan PPN terbalik", desc: "Hitung harga belum termasuk PPN dari jumlah termasuk PPN untuk akuntansi dan penagihan." }
    ],

    s11Title: "Mengapa memilih kalkulator PPN internasional kami?",
    s11P1: "Kalkulator PPN kami berbeda dari alat sederhana lainnya karena mendukung lebih dari 60 negara dengan semua tarif terbaru. Baik Anda perlu menghitung PPN untuk transaksi di satu negara atau ingin membandingkan tarif di beberapa negara, alat kami memberikan jawaban akurat dalam hitungan detik.",
    s11P2: "Kalkulator ini sepenuhnya gratis dan berfungsi tanpa registrasi. Gunakan tanpa batas jumlah kali. Cocok untuk pengusaha perorangan, bisnis menengah, dan perusahaan besar yang membutuhkan alat terpercaya untuk perhitungan PPN sehari-hari.",
    s11P3: "Dengan antarmuka yang ramah pengguna, hasil instan, dan data tarif yang diperbarui secara berkala, kalkulator PPN internasional kami adalah alat yang tak tergantikan bagi setiap bisnis yang beroperasi secara internasional. Coba sekarang dan lihat betapa mudahnya menghitung PPN dengan tepat."
  }
};

import { VATGuideContent } from "./vatGuideTranslations";

export const guideMS: VATGuideContent = {
  badge: "Panduan GST Lengkap 2025-2026",
  title: "Panduan Lengkap Pengiraan GST Antarabangsa",
  subtitle: "Semua yang anda perlu tahu tentang pengiraan GST untuk kedai dalam talian, pekerja bebas, perniagaan SaaS dan perdagangan antarabangsa — terkini, boleh dipercayai dan berdasarkan pengalaman praktikal bertahun-tahun.",
  sections: {
    s1Title: "Apa itu GST dan mengapa pengiraan yang betul adalah penting?",
    s1P1: "GST bermaksud Cukai Barang dan Perkhidmatan dan merupakan cukai penggunaan yang dikenakan ke atas barangan dan perkhidmatan di lebih daripada 170 negara di seluruh dunia. Dalam bahasa Inggeris ia dipanggil VAT (Value Added Tax), dan sesetengah negara menggunakan istilah GST (Goods and Services Tax). Walaupun nama berbeza, prinsip asasnya sama: cukai ditambah pada setiap peringkat rantaian pengeluaran dan pengedaran.",
    s1P2: "Bagi usahawan, pekerja bebas dan syarikat yang beroperasi secara antarabangsa, pengiraan GST yang betul bukan sekadar kewajipan undang-undang, tetapi keperluan strategik. Kesilapan dalam pengiraan GST boleh menyebabkan surcaj cukai, denda dan masalah pentadbiran dengan pihak berkuasa cukai di pelbagai negara. Kalkulator GST antarabangsa percuma kami membantu anda mengelakkan risiko ini dengan menyediakan pengiraan tepat berdasarkan kadar terkini.",
    s1P3: "Sama ada anda mengendalikan kedai dalam talian yang menghantar barangan kepada pelanggan di seluruh Eropah, menawarkan platform SaaS untuk pengguna di seluruh dunia, atau sebagai pekerja bebas menyediakan perkhidmatan kepada pelanggan antarabangsa — menerapkan kadar GST yang betul adalah asas operasi perniagaan yang sihat. Panduan ini membantu anda memahami kerumitan GST antarabangsa dan memberi nasihat praktikal untuk mengelakkan kesilapan.",

    s2Title: "Bagaimana sistem GST berfungsi di seluruh dunia?",
    s2P1: "Sistem GST unik kerana cukai dikutip pada setiap peringkat rantaian nilai. Pengeluar membayar GST untuk bahan mentah, menambah nilai kepada produk dan mengenakan GST kepada pemborong. Pemborong melakukan perkara yang sama kepada peruncit, yang akhirnya mengenakan GST kepada pengguna. Pada setiap peringkat, GST yang telah dibayar sebelumnya (GST input) boleh ditolak, jadi hanya pengguna akhir yang menanggung beban cukai penuh.",
    s2P2: "Sistem ini berbeza secara asas daripada cukai jualan mudah (Sales Tax), seperti yang digunakan di beberapa negeri AS. Cukai Jualan hanya dikenakan sekali — semasa jualan kepada pengguna akhir. Sistem GST menjamin ketelusan yang lebih tinggi dan mencegah lata cukai, itulah sebabnya kebanyakan negara di dunia telah menerima pakainya.",
    s2FormulaTitle: "Pengiraan GST: formula asas",
    s2FormulaAdd: "Menambah GST (tanpa GST → dengan GST):",
    s2FormulaAddDesc: "Jumlah dengan GST = Jumlah tanpa GST × (1 + Kadar GST / 100)",
    s2FormulaRemove: "Menolak GST (dengan GST → tanpa GST):",
    s2FormulaRemoveDesc: "Jumlah tanpa GST = Jumlah dengan GST ÷ (1 + Kadar GST / 100)",
    s2FormulaTip: "Petua: gunakan kalkulator kami di atas untuk melakukan pengiraan ini secara automatik dan tanpa kesilapan untuk mana-mana negara.",
    s2P3: "Penting untuk diketahui bahawa hampir setiap negara menerapkan pelbagai kadar GST. Selain kadar standard, terdapat kadar yang dikurangkan untuk barangan keperluan seperti makanan, ubat-ubatan, buku dan perkhidmatan kebudayaan. Di sesetengah negara, kadar sifar atau pengecualian juga terpakai untuk kategori tertentu. Kalkulator kami secara automatik menunjukkan semua kadar yang tersedia apabila anda memilih negara.",

    s3Title: "Pengiraan GST untuk e-dagang, kedai dalam talian dan jualan internet",
    s3P1: "Sektor e-dagang adalah salah satu bidang paling kompleks dari segi pengiraan GST. Penjual dalam talian mesti mempertimbangkan negara pembeli, jenis produk atau perkhidmatan dan sama ada pelanggan adalah individu persendirian (B2C) atau perniagaan (B2B). Di Kesatuan Eropah, sejak Julai 2021, sistem One-Stop-Shop (OSS) digunakan, yang membolehkan pelaporan GST untuk semua negara EU dalam satu pengisytiharan.",
    s3P2: "Untuk kedai dalam talian yang menjual produk fizikal kepada pengguna di negara EU lain, kadar GST negara pelanggan mesti diterapkan apabila jumlah perolehan kepada individu EU melebihi 10,000 EUR setahun. Ini bermakna kedai dalam talian Malaysia yang menjual kepada pengguna Jerman mesti mengira dan membayar kadar GST Jerman — inilah yang kalkulator kami bantu lakukan dengan cepat dan tepat.",
    s3P3: "Untuk transaksi B2B dalam EU, mekanisme caj berbalik (Reverse Charge) biasanya terpakai. Ini bermakna pembekal mengeluarkan invois tanpa GST, dan pembeli sendiri mengisytiharkan dan memotong GST di negaranya. Ini memudahkan pentadbiran dengan ketara, tetapi kedua-dua pihak mesti mempunyai nombor pengenalan GST yang sah, yang boleh disahkan melalui sistem VIES.",
    s3PhysicalTitle: "Barangan fizikal",
    s3PhysicalDesc: "GST dikira berdasarkan negara penghantaran. Untuk penghantaran ke negara EU lain, kadar tempatan terpakai untuk jualan B2C melebihi ambang. Untuk eksport di luar EU, kadar sifar terpakai.",
    s3DigitalTitle: "Produk dan perkhidmatan digital",
    s3DigitalDesc: "Untuk produk dan perkhidmatan digital kepada individu persendirian, kadar GST negara pelanggan terpakai, tanpa mengira lokasi penjual. Ini termasuk perisian, e-buku, kursus dalam talian, perkhidmatan penstriman dan produk SaaS.",
    s3P4: "Dropshipping adalah perkara yang memerlukan perhatian khusus. Sebagai dropshipper, anda secara sah adalah penjual, walaupun anda tidak pernah memiliki barangan secara fizikal. Ini bermakna anda bertanggungjawab untuk pengiraan dan pembayaran GST yang betul. Apabila mengimport dari luar EU, GST import dan kemungkinan duti kastam perlu dipertimbangkan. Kalkulator kami membantu anda menentukan jumlah GST yang betul, tidak kira betapa kompleksnya model perniagaan anda.",

    s4Title: "Pengiraan GST untuk pekerja bebas dan penyedia perkhidmatan",
    s4P1: "Sebagai pekerja bebas yang bekerja secara antarabangsa, sangat penting untuk memahami bila anda perlu mengenakan GST dan kadar mana yang terpakai. Peraturan asasnya mudah: untuk perkhidmatan kepada perniagaan (B2B) dalam EU, caj berbalik terpakai, jadi anda mengeluarkan invois tanpa GST dan pembeli sendiri mengisytiharkan GST. Untuk perkhidmatan kepada individu persendirian (B2C), kadar GST negara tempat anda berdaftar sebagai perniagaan biasanya terpakai.",
    s4P2: "Namun, terdapat pengecualian penting. Perkhidmatan yang dibekalkan secara elektronik kepada individu persendirian di negara EU lain tertakluk kepada peraturan OSS, di mana kadar GST negara pengguna terpakai. Ini termasuk reka bentuk web, pengaturcaraan, perundingan dalam talian dan perkhidmatan lain yang dibekalkan secara digital. Kalkulator kami membantu anda mencari kadar yang betul dengan cepat untuk negara pelanggan anda.",
    s4P3: "Untuk membuat invois dan sebut harga yang betul, adalah penting untuk mengetahui berapa banyak GST yang perlu dikira. Invois kepada pelanggan perniagaan Jerman dari segi GST berbeza secara asas daripada invois kepada individu persendirian Itali. Gunakan kalkulator kami untuk mengira jumlah GST yang tepat dan sentiasa nyatakan kadar GST, jumlah GST dan jumlah keseluruhan dengan dan tanpa GST yang betul pada invois anda.",
    s4P4: "Di banyak negara, usahawan yang perolehan tahunannya di bawah ambang yang ditetapkan boleh menggunakan skim perniagaan kecil, yang dikecualikan daripada pembayaran GST tetapi tidak membenarkan pemotongan GST input. Nilai dengan teliti sama ada skim ini menguntungkan untuk situasi anda, terutamanya jika anda mempunyai banyak perbelanjaan perniagaan yang anda ingin menuntut semula GST.",

    s5Title: "Pengiraan GST untuk SaaS, perisian dan langganan digital",
    s5P1: "SaaS (Software as a Service) dan langganan digital adalah segmen yang berkembang dengan peraturan GST khusus. Apabila anda sebagai penyedia SaaS menyediakan perkhidmatan kepada pengguna di EU, anda mesti menerapkan kadar GST negara pelanggan. Ini terpakai untuk semua perkhidmatan yang dibekalkan secara elektronik, termasuk perisian awan, platform penstriman, alat dalam talian dan laman keahlian.",
    s5P2: "Penentuan lokasi pelanggan (\"tempat penyediaan perkhidmatan\") adalah penentu dan ditentukan berdasarkan dua bukti bebas, seperti alamat bil, alamat IP, data bank atau nombor telefon. Syarikat SaaS mesti melaksanakan sistem yang secara automatik menangkap maklumat ini untuk memenuhi keperluan GST.",
    s5P3: "Untuk jualan B2B kepada syarikat di luar negara sendiri tetapi dalam EU, caj berbalik terpakai jika pembeli mempunyai nombor pengenalan GST yang sah. Untuk jualan kepada syarikat atau pengguna di luar EU, perkhidmatan biasanya tidak tertakluk kepada GST EU, tetapi kewajipan cukai tempatan yang mungkin di negara pelanggan perlu dipertimbangkan.",
    s5P4: "Platform seperti Shopify, WooCommerce dan sistem e-dagang lain menawarkan keupayaan pengiraan GST bersepadu yang semakin meningkat, tetapi penting untuk mengesahkan tetapan ini dengan kalkulator bebas. Kesilapan dalam pengiraan GST automatik sering berlaku, terutamanya dalam transaksi merentas sempadan dengan pelbagai kadar.",

    s6Title: "GST semasa import dan eksport: apa yang perlu diketahui",
    s6P1: "Dalam perdagangan antarabangsa, GST import dan eksport memainkan peranan penting. Eksport dari EU ke negara di luar EU (negara ketiga) pada dasarnya dikecualikan daripada GST — yang dipanggil kadar sifar. Ini terpakai untuk barangan dan perkhidmatan tertentu. Pengeksport mesti boleh membuktikan bahawa barangan sebenarnya telah dieksport dari EU, contohnya melalui dokumen kastam.",
    s6P2: "Apabila mengimport barangan dari luar EU, GST import dikenakan di kastam. Kadar GST adalah kadar negara import. Selain itu, duti kastam mungkin dikenakan, bergantung pada jenis produk dan negara asal. Sejak 2021, EU telah memansuhkan pengecualian GST untuk penghantaran bernilai di bawah 22 EUR, jadi kini GST dikenakan ke atas semua barangan yang diimport.",
    s6P3: "Untuk syarikat yang kerap mengimport, banyak negara EU menawarkan kemungkinan untuk menangguhkan pembayaran GST import. Dalam kes ini, GST import tidak dibayar di kastam, tetapi dimasukkan dalam pengisytiharan GST berkala. Ini meningkatkan aliran tunai dengan ketara, kerana GST import boleh terus diimbangi dengan GST yang perlu dibayar.",

    s7Title: "Peraturan GST EU dan One-Stop-Shop (OSS)",
    s7P1: "Kesatuan Eropah telah mewujudkan sistem yang diselaraskan dengan Arahan GST untuk memudahkan perdagangan merentas sempadan. Walaupun setiap negara EU menetapkan kadarnya sendiri, peraturan umum terpakai untuk tempat penyediaan perkhidmatan, caj berbalik dan keperluan pentadbiran. One-Stop-Shop (OSS), diperkenalkan pada Julai 2021, adalah instrumen penting untuk syarikat e-dagang dan penyedia perkhidmatan digital.",
    s7P2: "Melalui OSS, anda boleh melaporkan semua GST yang perlu anda bayar kepada negara EU lain dalam satu pengisytiharan suku tahunan di negara anda. Ini menghapuskan keperluan untuk mendaftar GST secara berasingan di setiap negara EU — penyederhanaan pentadbiran yang besar. OSS boleh digunakan untuk jualan barangan B2C dan jualan perkhidmatan digital kepada pengguna di negara EU lain.",
    s7P3: "Selain OSS, terdapat Import One-Stop-Shop (IOSS) untuk barangan yang diimport dari luar EU dengan nilai sehingga 150 EUR. Melalui IOSS, penjual atau platform boleh mengutip dan melaporkan GST semasa jualan, jadi pembeli tidak perlu membayar GST import semasa menerima penghantaran. Ini meningkatkan pengalaman pelanggan dan mempercepatkan proses penghantaran.",
    s7P4: "Perlu diketahui bahawa caj berbalik hanya terpakai apabila kedua-dua pihak mempunyai nombor pengenalan GST yang sah. Ini boleh disahkan melalui sistem VIES Suruhanjaya Eropah (VAT Information Exchange System). Jika ragu tentang kesahihan nombor GST, kadar standard mesti diterapkan untuk mengelakkan surcaj cukai.",

    s8Title: "GST dan cukai jualan di seluruh dunia: sistem penting di luar EU",
    s8P1: "Di luar Kesatuan Eropah, negara menggunakan sistem cukai penggunaan yang sangat berbeza. United Kingdom selepas Brexit mengekalkan sistem GSTnya dengan kadar standard dan kadar yang dikurangkan untuk kategori tertentu. Australia, New Zealand, Kanada dan Singapura menggunakan istilah GST, tetapi ia berfungsi serupa dengan VAT. AS adalah pengecualian dengan sistem Cukai Jualannya yang terdesentralisasi, di mana kadar berbeza mengikut negeri dan juga majlis perbandaran.",
    s8P2: "Bagi usahawan antarabangsa yang juga menjual di luar EU, sangat penting untuk mengetahui keperluan cukai tempatan. Di banyak negara terdapat ambang pendaftaran: apabila jumlah perolehan tertentu dicapai di negara tersebut, seseorang perlu mendaftar untuk cukai penggunaan tempatan. Ini semakin terpakai untuk perkhidmatan digital dan e-dagang juga, kerana negara seperti Australia, Jepun dan Korea Selatan memperkenalkan kewajipan untuk penyedia perkhidmatan asing.",
    s8P3: "Kalkulator kami menyokong lebih daripada 60 negara dan menawarkan kadar terkini untuk negara EU dan bukan EU. Ini menjadikannya alat yang ideal untuk syarikat yang beroperasi di seluruh dunia dan ingin mengira kadar GST atau VAT yang betul dengan cepat untuk transaksi antarabangsa mereka.",

    s9Title: "Pematuhan GST: amalan terbaik 2025-2026",
    s9P1: "Pematuhan GST yang betul memerlukan lebih daripada sekadar mengira kadar yang betul. Ia merangkumi perakaunan yang kukuh, pengisytiharan tepat pada masanya, invois yang betul dan penyimpanan semua dokumentasi yang berkaitan. Pihak berkuasa cukai di EU dan di luar semakin ketat, terutamanya dalam bidang e-dagang dan perkhidmatan digital. Laburlah dalam perisian perakaunan yang baik dan rujuklah perunding cukai dengan pengalaman antarabangsa jika ragu-ragu.",
    s9InvoiceTitle: "Invois dan pentadbiran",
    s9InvoiceItems: [
      "Sentiasa nyatakan kadar GST dan jumlah pada invois anda",
      "Simpan invois sekurang-kurangnya 7 tahun atau mengikut keperluan tempatan",
      "Gunakan penomboran invois yang konsisten",
      "Nyatakan nombor pengenalan GST kedua-dua pihak",
      "Dalam kes caj berbalik: nyatakan 'Caj berbalik terpakai' pada invois"
    ],
    s9DeadlineTitle: "Tarikh akhir dan pengisytiharan",
    s9DeadlineItems: [
      "Sentiasa hantar pengisytiharan GST tepat pada masanya",
      "Pengisytiharan OSS: setiap suku tahun (bulan selepas akhir suku tahun)",
      "Senarai VIES: setiap suku tahun untuk transaksi B2B EU",
      "Simpan bukti lokasi pelanggan",
      "Pantau ambang kewajipan pendaftaran"
    ],
    s9P2: "Trend jelas: kerajaan semakin melabur dalam alat pengawasan digital dan pelaporan masa nyata. Negara seperti Itali, Hungary dan Sepanyol telah memperkenalkan atau sedang memperkenalkan sistem invois masa nyata. Oleh itu, adalah bijak untuk melabur sekarang dalam sistem pengiraan dan pelaporan GST yang boleh dipercayai, supaya anda bersedia untuk perubahan peraturan masa depan.",

    s10Title: "Untuk apa kalkulator GST kami boleh digunakan?",
    s10P1: "Kalkulator GST antarabangsa kami direka untuk spektrum penggunaan yang luas. Di bawah anda akan menemui gambaran keseluruhan senario yang paling biasa yang mana usahawan menggunakan alat kami:",
    s10UseCases: [
      { term: "Pengiraan GST untuk harga kedai dalam talian", desc: "Tentukan harga jualan yang betul dengan atau tanpa GST untuk kedai dalam talian anda." },
      { term: "Pengiraan GST untuk barangan import", desc: "Kira GST import dan jumlah kos apabila mengimport barangan." },
      { term: "Pengiraan GST untuk perkhidmatan dalam talian", desc: "Tentukan kadar yang betul untuk perkhidmatan yang dibekalkan secara digital kepada pelanggan di seluruh dunia." },
      { term: "Pengiraan GST untuk kedai Shopify", desc: "Sahkan tetapan GST kedai Shopify anda dengan kadar terkini." },
      { term: "Pengiraan GST untuk kedai WooCommerce", desc: "Sahkan pengiraan GST kedai WooCommerce anda untuk semua negara EU." },
      { term: "Pengiraan GST untuk produk SaaS", desc: "Kira GST untuk produk perisian-sebagai-perkhidmatan untuk pelanggan antarabangsa." },
      { term: "Pengiraan GST untuk model dropshipping", desc: "Kira kewajipan GST untuk model dropshipping dengan pembekal antarabangsa." },
      { term: "Pengiraan GST untuk pekerja bebas", desc: "Kira jumlah GST yang betul untuk invois anda sebagai pekerja bebas." },
      { term: "Pengiraan GST untuk yang bekerja sendiri", desc: "Tentukan kewajipan GST dan kemungkinan pengecualian sebagai orang yang bekerja sendiri." },
      { term: "Pengiraan GST untuk invois", desc: "Kira dengan tepat jumlah GST yang perlu dinyatakan pada invois." },
      { term: "Pengiraan GST untuk produk digital", desc: "Kira GST untuk muat turun, templat, e-buku dan produk digital lain." },
      { term: "Pengiraan GST untuk jualan antarabangsa", desc: "Tentukan kadar GST yang betul untuk jualan merentas sempadan di seluruh dunia." }
    ],

    s11Title: "Mengapa memilih kalkulator GST antarabangsa ini?",
    s11P1: "Kalkulator GST kami menonjol dengan gabungan kebolehpercayaan, kemudahan dan kelengkapan. Dengan sokongan lebih daripada 60 negara di dalam dan di luar EU, ia adalah kalkulator GST percuma yang paling komprehensif. Alat ini dikemas kini secara berkala dengan perubahan kadar terkini dan menawarkan kadar standard dan yang dikurangkan untuk setiap negara.",
    s11P2: "Sama ada anda memerlukan pengiraan cepat untuk satu invois atau melakukan analisis kewajipan GST terperinci merentas pelbagai negara — kalkulator kami memberikan hasil yang tepat dengan segera. Antara muka yang intuitif menjadikannya mudah diakses oleh semua orang, dari pekerja bebas pemula hingga usahawan antarabangsa yang berpengalaman.",
    s11P3: "Semua pengiraan dilakukan secara tempatan dalam pelayar anda, jadi data anda tidak dihantar ke pelayan. Ini menjamin privasi sepenuhnya dan menjadikan alat ini boleh diakses tanpa internet selepas halaman dimuatkan. Gabungkan kalkulator kami dengan perkhidmatan lain seperti Nama Domain Premium untuk pertumbuhan SEO dan Dokumen Undang-undang untuk pematuhan laman web, dan bina perniagaan antarabangsa anda di atas asas yang kukuh."
  }
};

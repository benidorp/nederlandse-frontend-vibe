import { VATGuideContent } from "./vatGuideTranslations";

export const guideSQ: VATGuideContent = {
  badge: "Udhëzues Gjithëpërfshirës i TVSH-së 2025-2026",
  title: "Udhëzuesi i Plotë për Llogaritjen e TVSH-së Ndërkombëtare",
  subtitle: "Gjithçka që duhet të dini për llogaritjen e TVSH-së për dyqanet online, profesionistët e lirë, bizneset SaaS dhe tregtinë ndërkombëtare — aktuale, e besueshme dhe e bazuar në përvojë praktike shumëvjeçare.",
  sections: {
    s1Title: "Çfarë është TVSH-ja dhe pse llogaritja e saktë është thelbësore?",
    s1P1: "TVSH do të thotë Tatimi mbi Vlerën e Shtuar dhe është një tatim konsumi që aplikohet mbi mallrat dhe shërbimet në më shumë se 170 vende në mbarë botën. Në anglisht quhet VAT (Value Added Tax), ndërsa disa vende përdorin termin GST (Goods and Services Tax). Edhe pse emrat ndryshojnë, sistemi bazë është i njëjtë: tatimi shtohet në çdo hallkë të zinxhirit të prodhimit dhe shpërndarjes.",
    s1P2: "Për sipërmarrësit, profesionistët e lirë dhe bizneset që operojnë ndërkombëtarisht, llogaritja e saktë e TVSH-së nuk është vetëm një detyrim ligjor, por edhe një domosdoshmëri strategjike. Gabimet në llogaritjet e TVSH-së mund të çojnë në shtesa tatimore, gjoba dhe probleme administrative me autoritetet tatimore në disa vende. Kalkulatori ynë falas ndërkombëtar i TVSH-së ju ndihmon të shmangni këto rreziqe duke ofruar llogaritje të sakta bazuar në normat më të fundit.",
    s1P3: "Pavarësisht nëse drejtoni një dyqan online që dërgon produkte klientëve në të gjithë Evropën, ofroni një platformë SaaS përdoruesve në mbarë botën, apo si profesionist i lirë ofroni shërbime klientëve ndërkombëtarë — aplikimi i normave të sakta të TVSH-së është themeli i një biznesi të shëndetshëm. Ky udhëzues do t'ju ndihmojë të kuptoni kompleksitetin e TVSH-së ndërkombëtare dhe do t'ju japë këshilla praktike për të shmangur gabimet.",

    s2Title: "Si funksionon sistemi i TVSH-së në mbarë botën?",
    s2P1: "Sistemi i TVSH-së është unik sepse tatimi mblidhet në çdo hallkë të zinxhirit të vlerës. Prodhuesi paguan TVSH për lëndët e para, shton vlerë produktit dhe ngarkon TVSH-në tek tregtari me shumicë. Tregtari me shumicë bën të njëjtën gjë ndaj tregtarit me pakicë, i cili përfundimisht ngarkon TVSH-në tek konsumatori. Në çdo hallkë, TVSH-ja e paguar më parë (tatimi i blerjes) mund të zbritet, kështu që vetëm konsumatori përfundimtar mbart barrën e plotë tatimore.",
    s2P2: "Ky sistem ndryshon thelbësisht nga një tatim i thjeshtë mbi shitjet (Sales Tax), siç përdoret në disa shtete të SHBA-ve. Në sistemin e Sales Tax, tatimi aplikohet vetëm një herë — kur i shitet konsumatorit përfundimtar. Sistemi i TVSH-së ofron më shumë transparencë dhe parandalon kaskadimin e tatimit, prandaj është adoptuar nga shumica e vendeve të botës.",
    s2FormulaTitle: "Llogaritja e TVSH-së: formulat bazë",
    s2FormulaAdd: "Shtimi i TVSH-së (pa TVSH → me TVSH):",
    s2FormulaAddDesc: "Shuma me TVSH = Shuma pa TVSH × (1 + norma e TVSH-së / 100)",
    s2FormulaRemove: "Heqja e TVSH-së (me TVSH → pa TVSH):",
    s2FormulaRemoveDesc: "Shuma pa TVSH = Shuma me TVSH ÷ (1 + norma e TVSH-së / 100)",
    s2FormulaTip: "Këshillë: përdorni kalkulatorin tonë më lart për t'i kryer këto llogaritje automatikisht dhe pa gabime për çdo vend.",
    s2P3: "Është e rëndësishme të dini se pothuajse çdo vend aplikon disa norma TVSH-je. Përveç normës standarde, ekzistojnë norma të reduktuara për mallra thelbësore si ushqimet, barnat, librat dhe shërbimet kulturore. Disa vende kanë edhe normë zero ose përjashtim për kategori specifike. Kalkulatori ynë shfaq automatikisht të gjitha normat e disponueshme sapo zgjidhni një vend.",

    s3Title: "Llogaritja e TVSH-së për e-tregti, dyqane online dhe shitje në internet",
    s3P1: "Sektori i e-tregtisë është një nga fushat më komplekse sa i përket llogaritjes së TVSH-së. Shitësit online duhet të marrin parasysh vendin e blerësit, llojin e produktit ose shërbimit, dhe nëse klienti është person privat (B2C) apo biznes (B2B). Brenda Bashkimit Evropian, që nga korriku 2021, funksionon sistemi One Stop Shop (OSS), i cili mundëson deklarimin e TVSH-së për të gjitha vendet e BE-së përmes një deklarate të vetme.",
    s3P2: "Për dyqanet online që shesin produkte fizike konsumatorëve në vende të tjera të BE-së, duhet të aplikohet norma e TVSH-së e vendit të klientit sapo qarkullimi total ndaj personave privatë në BE tejkalon 10,000 EUR në vit. Kjo do të thotë se një dyqan online shqiptar që shet tek një konsumator gjerman duhet të llogarisë dhe të paguajë normën gjermane të TVSH-së — diçka që kalkulatori ynë ju ndihmon ta bëni shpejt dhe saktë.",
    s3P3: "Për transaksionet B2B brenda BE-së, zakonisht aplikohet mekanizmi i ngarkesës së kundërt (Reverse Charge). Kjo do të thotë se furnizuesi lëshon faturë pa TVSH dhe blerësi vetë deklaron dhe kompenson TVSH-në në vendin e vet. Kjo thjeshton ndjeshëm administrimin, por të dy palët duhet të kenë numër identifikimi TVSH-je të vlefshëm, i cili mund të verifikohet përmes sistemit VIES.",
    s3PhysicalTitle: "Produkte fizike",
    s3PhysicalDesc: "TVSH-ja llogaritet bazuar në vendin e dorëzimit. Për dërgesat në vende të tjera të BE-së, aplikohet norma lokale për shitjet B2C mbi pragun. Për eksportin jashtë BE-së aplikohet norma zero.",
    s3DigitalTitle: "Produkte dhe shërbime dixhitale",
    s3DigitalDesc: "Për produktet dhe shërbimet dixhitale ndaj personave privatë, aplikohet norma e TVSH-së e vendit të klientit pavarësisht vendndodhjes së shitësit. Kjo përfshin softuer, libra elektronikë, kurse online, shërbime transmetimi dhe produkte SaaS.",
    s3P4: "Dropshipping-u është një çështje e veçantë vëmendjeje. Si dropshipper, ju ligjërisht jeni shitësi, edhe nëse nuk i keni pasur kurrë fizikisht mallrat. Kjo do të thotë se jeni përgjegjës për llogaritjen dhe pagimin e saktë të TVSH-së. Kur importoni nga jashtë BE-së, duhet të merrni parasysh TVSH-në e importit dhe detyrimet doganore të mundshme. Kalkulatori ynë ju ndihmon të përcaktoni shumën e saktë të TVSH-së, pavarësisht kompleksitetit të modelit tuaj të biznesit.",

    s4Title: "Llogaritja e TVSH-së për profesionistët e lirë dhe ofruesit e shërbimeve",
    s4P1: "Si profesionist i lirë që punon ndërkombëtarisht, është shumë e rëndësishme të kuptoni kur duhet të llogaritni TVSH-në dhe cila normë aplikohet. Rregulla bazë është e thjeshtë: për shërbime ndaj bizneseve (B2B) brenda BE-së aplikohet ngarkesa e kundërt, që do të thotë se faturoni pa TVSH dhe blerësi vetë deklaron TVSH-në. Për shërbime ndaj personave privatë (B2C), zakonisht aplikohet norma e TVSH-së e vendit ku jeni regjistruar si sipërmarrës.",
    s4P2: "Megjithatë, ekzistojnë përjashtime të rëndësishme. Shërbimet e ofruara elektronikisht personave privatë në vende të tjera të BE-së bien nën rregullimin OSS, ku aplikohet norma e TVSH-së e vendit të konsumatorit. Kjo përfshin dizajnin uebit, programimin, konsulencën online dhe shërbime të tjera të ofruara dixhitalisht. Kalkulatori ynë ju ndihmon të gjeni shpejt normën e saktë për vendin e klientit tuaj.",
    s4P3: "Për përgatitjen e faturave dhe ofertave korrekte, është thelbësore të dini çfarë shume TVSH-je duhet të llogaritni. Një faturë ndaj një klienti biznesi gjerman dallon thelbësisht nga një faturë ndaj një personi privat italian sa i përket TVSH-së. Përdorni kalkulatorin tonë për të llogarituar shumën e saktë të TVSH-së dhe gjithmonë shënoni normën e saktë të TVSH-së, shumën e TVSH-së dhe shumën totale me dhe pa TVSH në faturat tuaja.",
    s4P4: "Në Shqipëri, sipërmarrësit me qarkullim vjetor nën një prag të caktuar mund të përfitojnë nga skema e biznesit të vogël, e cila i liron nga pagimi i TVSH-së por nuk u lejon të zbresim TVSH-në e blerjes. Skema të ngjashme ekzistojnë në shumë vende të tjera. Vlerësoni me kujdes nëse kjo skemë është e dobishme për situatën tuaj, sidomos nëse keni shumë shpenzime biznesi për të cilat do të donit të rikuperonit TVSH-në.",

    s5Title: "Llogaritja e TVSH-së për SaaS, softuer dhe abonentime dixhitale",
    s5P1: "SaaS (Software as a Service) dhe abonimet dixhitale përbëjnë një segment në rritje me rregulla specifike TVSH-je. Kur si ofrues SaaS ofroni shërbime konsumatorëve në BE, duhet të aplikoni normën e TVSH-së e vendit të klientit. Kjo vlen për të gjitha shërbimet e ofruara elektronikisht, përfshirë softuerin cloud, platformat e transmetimit, mjetet online dhe faqet e anëtarësimit.",
    s5P2: "Përcaktimi i vendndodhjes së klientit (\"vendi i furnizimit\") është vendimtar dhe përcaktohet bazuar në dy prova të pavarura, si adresa e faturimit, adresa IP, të dhënat bankare ose numri i telefonit. Kompanitë SaaS duhet të implementojnë sisteme që regjistrojnë automatikisht këtë informacion për të përmbushur kërkesat e TVSH-së.",
    s5P3: "Për shitjet B2B ndaj kompanive jashtë vendit tuaj por brenda BE-së, aplikohet ngarkesa e kundërt, nëse blerësi ka numër identifikimi TVSH-je të vlefshëm. Për shitjet ndaj kompanive ose konsumatorëve jashtë BE-së, shërbimi zakonisht nuk tatohet me TVSH në BE, por duhet të merrni parasysh detyrimet tatimore lokale të mundshme në vendin e klientit.",
    s5P4: "Platformat si Shopify, WooCommerce dhe sisteme të tjera e-tregtie ofrojnë gjithnjë e më shumë mundësi llogaritjeje TVSH-je të integruara, por është e rëndësishme t'i verifikoni këto cilësime me një kalkulator të pavarur. Gabimet në llogaritjet automatike të TVSH-së janë të shpeshta, veçanërisht në transaksionet ndërkufitare me norma të shumëfishta.",

    s6Title: "TVSH-ja në import dhe eksport: çfarë duhet të dini",
    s6P1: "Në tregtinë ndërkombëtare, TVSH-ja e importit dhe eksportit luan rol vendimtar. Eksporti nga BE-ja në vende jashtë BE-së (vende të treta) në parim është i përjashtuar nga TVSH-ja — e ashtuquajtura normë zero. Kjo vlen si për mallra ashtu edhe për shërbime të caktuara. Eksportuesi duhet të mundë të provojë se mallrat kanë lënë realisht BE-në, p.sh. përmes dokumenteve doganore.",
    s6P2: "Kur importoni mallra nga jashtë BE-së, TVSH-ja e importit mblidhet në doganë. Norma e TVSH-së që aplikohet është ajo e vendit të importit. Gjithashtu mund të aplikohen detyrime doganore, në varësi të llojit të produktit dhe vendit të origjinës. Që nga viti 2021, BE-ja ka hequr përjashtimin e TVSH-së për dërgesat me vlerë nën 22 EUR, kështu që tani TVSH-ja duhet paguar për të gjitha mallrat e importuara.",
    s6P3: "Për bizneset që importojnë rregullisht, shumë vende të BE-së ofrojnë mundësinë e shtyrjes së pagimit të TVSH-së së importit. Në këtë rast, TVSH-ja e importit nuk paguhet në doganë, por përfshihet në deklaratën periodike të TVSH-së. Kjo përmirëson ndjeshëm rrjedhën e parave, sepse TVSH-ja e importit mund të kompensohet menjëherë me TVSH-në e pagueshme.",

    s7Title: "Rregullimi i TVSH-së në BE dhe One Stop Shop (OSS)",
    s7P1: "Bashkimi Evropian ka krijuar me Direktivën e TVSH-së një sistem të harmonizuar që lehtëson tregtinë ndërkufitare. Edhe pse çdo vend i BE-së përcakton normat e veta, ekzistojnë rregulla të përbashkëta për vendin e furnizimit, ngarkesën e kundërt dhe kërkesat administrative. Sistemi One Stop Shop (OSS), i prezantuar në korrik 2021, është instrument i rëndësishëm për bizneset e e-tregtisë dhe ofruesit e shërbimeve dixhitale.",
    s7P2: "Përmes OSS, ju mund të deklaroni të gjithë TVSH-në që u detyroheni vendeve të tjera të BE-së përmes një deklarate të vetme tremujore në vendin tuaj. Kjo eliminon nevojën për t'u regjistruar për TVSH-në në secilin vend të BE-së veçmas — një thjeshtzim i jashtëzakonshëm administrativ. OSS është i disponueshëm për shitjet B2C të mallrave dhe shërbimeve dixhitale ndaj konsumatorëve në vende të tjera të BE-së.",
    s7P3: "Përveç OSS, ekziston Import One Stop Shop (IOSS) për mallrat e importuara nga jashtë BE-së me vlerë deri në 150 EUR. Përmes IOSS, shitësi ose platforma mund të mbledhë dhe deklarojë TVSH-në në momentin e shitjes, që do të thotë se blerësi nuk ka nevojë të paguajë TVSH-në e importit kur merr dërgesën. Kjo përmirëson përvojën e klientit dhe përshpejton procesin e dorëzimit.",
    s7P4: "Është thelbësore të dini se ngarkesa e kundërt aplikohet vetëm kur të dy palët kanë numër identifikimi TVSH-je të vlefshëm. Këtë mund ta verifikoni përmes sistemit VIES (VAT Information Exchange System) të Komisionit Evropian. Në rast dyshimi për vlefshmërinë e numrit të TVSH-së, duhet të aplikoni normën standarde të TVSH-së për të shmangur shtesa tatimore.",

    s8Title: "TVSH-ja dhe tatimet mbi shitjet në botë: sisteme të rëndësishme jashtë BE-së",
    s8P1: "Jashtë Bashkimit Evropian, vendet përdorin sisteme shumë të ndryshme tatimesh konsumi. Mbretëria e Bashkuar ka ruajtur sistemin e vet të VAT-it pas Brexit-it, me normë standarde dhe norma të reduktuara për kategori specifike. Australia, Zelanda e Re, Kanada dhe Singapori përdorin termin GST, por funksionon ngjashëm me TVSH-në. SHBA-të janë përjashtim me sistemin e tyre të decentralizuar Sales Tax, ku normat ndryshojnë sipas shtetit dhe madje sipas komunës.",
    s8P2: "Për sipërmarrësit ndërkombëtarë që shesin edhe jashtë BE-së, është shumë e rëndësishme të njohin detyrimet tatimore lokale. Në shumë vende ekziston një prag regjistrimi: sapo arrini një vëllim të caktuar qarkullimi në atë vend, duhet të regjistroheni për tatimin lokal të konsumit. Kjo aplikohet gjithnjë e më shumë edhe për shërbimet dixhitale dhe e-tregtinë, ku vende si Australia, Japonia dhe Koreja e Jugut vendosin detyrime për ofruesit e huaj.",
    s8P3: "Kalkulatori ynë mbështet më shumë se 60 vende dhe ofron norma aktuale si për vendet e BE-së ashtu edhe jashtë BE-së. Kjo e bën atë mjetin ideale për bizneset që operojnë në mbarë botën dhe duan të llogaritësin shpejt normën e saktë të TVSH-së ose GST-së për transaksionet e tyre ndërkombëtare.",

    s9Title: "Pajtueshmëria me TVSH-në: praktikat më të mira 2025-2026",
    s9P1: "Pajtueshmëria korrekte me TVSH-në kërkon më shumë se thjesht llogaritjen e normës së saktë. Ajo përfshin një kontabilitet solid, deklarata të bëra në kohë, faturim korrekt dhe ruajtjen e gjithë dokumentacionit përkatës. Autoritetet tatimore në BE dhe jashtë saj po bëhen gjithnjë e më të rrepta, veçanërisht për e-tregtinë dhe shërbimet dixhitale. Investoni në softuer të mirë kontabiliteti dhe në rast dyshimi konsultohuni me një këshilltar tatimor me përvojë ndërkombëtare.",
    s9InvoiceTitle: "Faturimi dhe administrimi",
    s9InvoiceItems: [
      "Gjithmonë shënoni normën dhe shumën e TVSH-së në fatura",
      "Ruani faturat të paktën 10 vjet (Shqipëri) ose sipas rregullave lokale",
      "Përdorni numeracion faturash të vazhdueshëm",
      "Shënoni numrat e identifikimit të TVSH-së të të dy palëve",
      "Në rastin e ngarkesës së kundërt: shënoni 'TVSH ngarkesë e kundërt' në faturë"
    ],
    s9DeadlineTitle: "Afatet dhe deklaratat",
    s9DeadlineItems: [
      "Gjithmonë dorëzoni deklaratat e TVSH-së në kohë",
      "Deklarata OSS: çdo tremujor (muajin pas mbylljes së tremujorit)",
      "Lista VIES: çdo tremujor për transaksionet B2B në BE",
      "Ruani provat e vendndodhjes së klientit",
      "Monitoroni pragjet për detyrimin e regjistrimit"
    ],
    s9P2: "Tendenca është e qartë: qeveritë po investojnë gjithnjë e më shumë në mjete dixhitale mbikëqyrjeje dhe raportim në kohë reale. Vende si Italia, Hungaria dhe Spanja kanë prezantuar ose po prezantojnë sisteme faturimi në kohë reale. Prandaj është e mençur të investoni tani në sisteme të qëndrueshme llogaritjeje dhe raportimi TVSH-je, për t'u përgatitur për ndryshimet e ardhshme rregullatore.",

    s10Title: "Për çfarë mund të përdorni kalkulatorin tonë të TVSH-së?",
    s10P1: "Kalkulatori ynë ndërkombëtar i TVSH-së është projektuar për një gamë të gjerë zbatimesh. Më poshtë do të gjeni një përmbledhje të skenarëve më të zakonshëm për të cilët sipërmarrësit përdorin mjetin tonë:",
    s10UseCases: [
      { term: "Llogaritja e TVSH-së për çmimet e dyqanit online", desc: "Përcaktoni çmimin korrekt të shitjes me ose pa TVSH për dyqanin tuaj online." },
      { term: "Llogaritja e TVSH-së për produkte importi", desc: "Llogaritni TVSH-në e importit dhe kostot totale kur importoni mallra." },
      { term: "Llogaritja e TVSH-së për shërbime online", desc: "Përcaktoni normën e saktë për shërbime të ofruara dixhitalisht klientëve në mbarë botën." },
      { term: "Llogaritja e TVSH-së për Shopify", desc: "Verifikoni cilësimet e TVSH-së së dyqanit tuaj Shopify me normat aktuale." },
      { term: "Llogaritja e TVSH-së për WooCommerce", desc: "Kontrolloni llogaritjet e TVSH-së së dyqanit tuaj WooCommerce për të gjitha vendet e BE-së." },
      { term: "Llogaritja e TVSH-së për SaaS", desc: "Llogaritni TVSH-në për produktet softuer si shërbim për klientët ndërkombëtarë." },
      { term: "Llogaritja e TVSH-së për dropshipping", desc: "Llogaritni detyrimet e TVSH-së në modelin dropshipping me furnitorë ndërkombëtarë." },
      { term: "Llogaritja e TVSH-së për profesionistët e lirë", desc: "Llogaritni shumën e saktë të TVSH-së në faturat tuaja si profesionist i lirë." },
      { term: "Llogaritja e TVSH-së për të vetëpunësuarit", desc: "Përcaktoni detyrimet e TVSH-së dhe përjashtimet e mundshme si person i vetëpunësuar." },
      { term: "Llogaritja e TVSH-së për fatura", desc: "Llogaritni saktësisht shumën e TVSH-së që duhet të figurojë në faturë." },
      { term: "Llogaritja e TVSH-së për produkte dixhitale", desc: "Llogaritni TVSH-në për shkarkime, shabllone, libra elektronikë dhe mallra të tjera dixhitale." },
      { term: "Llogaritja e TVSH-së për shitje ndërkombëtare", desc: "Përcaktoni normën e saktë të TVSH-së për shitje ndërkufitare në mbarë botën." }
    ],

    s11Title: "Pse të zgjidhni këtë kalkulator ndërkombëtar të TVSH-së?",
    s11P1: "Kalkulatori ynë i TVSH-së dallohet me kombinimin e besueshmërisë, lehtësisë së përdorimit dhe gjithëpërfshirjes. Me mbështetje për më shumë se 60 vende, si brenda ashtu edhe jashtë BE-së, ai është kalkulatori falas më i plotë i TVSH-së i disponueshëm. Mjeti përditësohet rregullisht me ndryshimet më të fundit të normave dhe ofron norma standarde dhe të reduktuara për çdo vend.",
    s11P2: "Pavarësisht nëse ju nevojitet një llogaritje e shpejtë për një faturë ose po kryeni një analizë të thelluar të detyrimeve TVSH-je në disa vende — kalkulatori ynë ofron rezultate të sakta menjëherë. Ndërfaqja intuitive e bën atë të aksesueshme për të gjithë, nga profesionisti fillestar i lirë deri tek sipërmarrësi ndërkombëtar me përvojë.",
    s11P3: "Të gjitha llogaritjet kryhen lokalisht në shfletuesin tuaj, që do të thotë se të dhënat tuaja nuk dërgohen në servera. Kjo garanton privatësi të plotë dhe gjithashtu e bën mjetin të disponueshme pa internet pas ngarkimit të faqes. Kombinoni kalkulatorin tonë me shërbimet tona të tjera si Emra Premium Domeni për rritjen e SEO dhe Dokumente Ligjore për pajtueshmërinë e faqes suaj, dhe ndërtoni biznesin tuaj ndërkombëtar mbi baza solide."
  }
};

import { VATGuideContent } from "./vatGuideTranslations";

export const guideLV: VATGuideContent = {
  badge: "Visaptverošs PVN Ceļvedis 2025-2026",
  title: "Pilnīgs Ceļvedis Starptautiska PVN Aprēķināšanai",
  subtitle: "Viss, kas jums jāzina par PVN aprēķināšanu tīmekļa veikaliem, brīvajiem profesionāļiem, SaaS uzņēmumiem un starptautisko tirdzniecību — aktuāli, uzticami un balstīti uz ilggadēju praktisku pieredzi.",
  sections: {
    s1Title: "Kas ir PVN un kāpēc pareiza aprēķināšana ir būtiska?",
    s1P1: "PVN jeb Pievienotās Vērtības Nodoklis ir patēriņa nodoklis, kas tiek piemērots precēm un pakalpojumiem vairāk nekā 170 valstīs visā pasaulē. Angliski to sauc par VAT (Value Added Tax), savukārt dažas valstis lieto terminu GST (Goods and Services Tax). Lai arī nosaukumi atšķiras, pamatā sistēma ir viena: nodoklis tiek pievienots katrā ražošanas un izplatīšanas ķēdes posmā.",
    s1P2: "Uzņēmējiem, brīvajiem profesionāļiem un starptautiski strādājošiem uzņēmumiem pareiza PVN aprēķināšana nav tikai juridiska prasība, bet arī stratēģiska nepieciešamība. Kļūdas PVN aprēķinos var novest pie nodokļu piemaksām, sodiem un administratīvām problēmām ar nodokļu iestādēm vairākās valstīs. Mūsu bezmaksas starptautiskais PVN kalkulators palīdz jums izvairīties no šiem riskiem, nodrošinot precīzus aprēķinus, pamatojoties uz aktuālajām likmēm.",
    s1P3: "Neatkarīgi no tā, vai jūs vadāt tīmekļa veikalu, kas piegādā preces klientiem visā Eiropā, piedāvājat SaaS platformu lietotājiem visā pasaulē vai kā brīvais profesionālis sniedzat pakalpojumus starptautiskiem klientiem — pareizu PVN likmju piemērošana ir pamats veselīgai uzņēmējdarbībai. Šis ceļvedis palīdzēs jums izprast starptautiskā PVN sarežģītību un sniegs praktiskus padomus kļūdu novēršanai.",

    s2Title: "Kā PVN sistēma darbojas visā pasaulē?",
    s2P1: "PVN sistēma ir unikāla, jo nodoklis tiek iekasēts katrā vērtības ķēdes posmā. Ražotājs maksā PVN par izejmateriāliem, pievieno vērtību produktam un iekasē PVN no vairumtirgotāja. Vairumtirgotājs rīkojas līdzīgi attiecībā pret mazumtirgotāju, kurš galu galā iekasē PVN no patērētāja. Katrā posmā iepriekš samaksātais PVN (priekšnodoklis) var tikt atskaitīts, tāpēc tikai galapatērētājs uzņemas pilnu nodokļu slogu.",
    s2P2: "Šī sistēma būtiski atšķiras no vienkārša apgrozījuma nodokļa (Sales Tax), kādu izmanto dažos ASV štatos. Sales Tax nodoklis tiek iekasēts tikai vienu reizi — pārdodot galapatērētājam. PVN sistēma nodrošina lielāku pārskatāmību un novērš nodokļu kaskadēšanu, tāpēc to ir pieņēmusi lielākā daļa pasaules valstu.",
    s2FormulaTitle: "PVN aprēķināšana: pamatformulas",
    s2FormulaAdd: "PVN pievienošana (bez PVN → ar PVN):",
    s2FormulaAddDesc: "Summa ar PVN = Summa bez PVN × (1 + PVN likme / 100)",
    s2FormulaRemove: "PVN atņemšana (ar PVN → bez PVN):",
    s2FormulaRemoveDesc: "Summa bez PVN = Summa ar PVN ÷ (1 + PVN likme / 100)",
    s2FormulaTip: "Padoms: Izmantojiet mūsu kalkulatoru augstāk, lai veiktu šos aprēķinus automātiski un bez kļūdām jebkurai valstij.",
    s2P3: "Ir svarīgi zināt, ka gandrīz katra valsts piemēro vairākas PVN likmes. Papildus standarta likmei pastāv samazinātas likmes būtiskām precēm, piemēram, pārtikai, medikamentiem, grāmatām un kultūras pakalpojumiem. Dažās valstīs ir arī nulles likme vai atbrīvojumi noteiktām kategorijām. Mūsu kalkulators automātiski parāda visas pieejamās likmes, tiklīdz izvēlaties valsti.",

    s3Title: "PVN aprēķināšana e-komercijā, tīmekļa veikalos un tiešsaistes tirdzniecībā",
    s3P1: "E-komercijas nozare ir viena no sarežģītākajām jomām attiecībā uz PVN aprēķināšanu. Tiešsaistes pārdevējiem jāņem vērā pircēja valsts, produkta vai pakalpojuma veids un tas, vai klients ir privātpersona (B2C) vai uzņēmums (B2B). Eiropas Savienībā kopš 2021. gada jūlija darbojas vienas pieturas aģentūras (OSS) sistēma, kas ļauj deklarēt PVN visām ES valstīm vienā deklarācijā.",
    s3P2: "Tīmekļa veikaliem, kas pārdod fiziskas preces patērētājiem citās ES valstīs, jāpiemēro klienta valsts PVN likme, tiklīdz kopējais apgrozījums ES privātpersonām pārsniedz 10 000 EUR gadā. Tas nozīmē, ka Latvijas tīmekļa veikalam, kas pārdod Vācijas patērētājam, jāaprēķina un jāiemaksā Vācijas PVN likme — kaut kas, ko mūsu kalkulators palīdz veikt ātri un precīzi.",
    s3P3: "B2B darījumiem ES ietvaros parasti piemēro apgrieztās maksāšanas mehānismu (Reverse Charge). Tas nozīmē, ka piegādātājs izraksta rēķinu bez PVN, bet pircējs pats deklarē un ieskaita PVN savā valstī. Tas ievērojami vienkāršo administrēšanu, taču abām pusēm jābūt derīgam PVN identifikācijas numuram, kuru var pārbaudīt caur VIES sistēmu.",
    s3PhysicalTitle: "Fiziskās preces",
    s3PhysicalDesc: "PVN tiek aprēķināts, pamatojoties uz piegādes valsti. Sūtījumiem uz citām ES valstīm piemēro vietējo likmi B2C pārdošanai virs sliekšņa. Eksportam ārpus ES piemēro nulles likmi.",
    s3DigitalTitle: "Digitālie produkti un pakalpojumi",
    s3DigitalDesc: "Digitālajiem produktiem un pakalpojumiem privātpersonām piemēro klienta valsts PVN likmi neatkarīgi no pārdevēja atrašanās vietas. Tas ietver programmatūru, e-grāmatas, tiešsaistes kursus, straumēšanas pakalpojumus un SaaS produktus.",
    s3P4: "Dropshipping ir īpašs uzmanības jautājums. Kā dropshiperis jūs juridiski esat pārdevējs, pat ja nekad fiziski neesat turējis preces rokās. Tas nozīmē, ka esat atbildīgs par pareizu PVN aprēķināšanu un nomaksu. Importējot no ārpus ES, jāņem vērā importa PVN un iespējamie muitas nodokļi. Mūsu kalkulators palīdz noteikt pareizo PVN summu neatkarīgi no jūsu biznesa modeļa sarežģītības.",

    s4Title: "PVN aprēķināšana brīvajiem profesionāļiem un pakalpojumu sniedzējiem",
    s4P1: "Kā starptautiski strādājošam brīvajam profesionālim ir ļoti svarīgi saprast, kad jāaprēķina PVN un kāda likme ir piemērojama. Pamatnoteikums ir vienkāršs: pakalpojumiem uzņēmumiem (B2B) ES ietvaros piemēro apgrieztās maksāšanas mehānismu, kas nozīmē, ka jūs izrakstāt rēķinu bez PVN un pircējs pats deklarē PVN. Pakalpojumiem privātpersonām (B2C) parasti piemēro PVN likmi valstī, kurā esat reģistrēts kā uzņēmējs.",
    s4P2: "Tomēr pastāv svarīgi izņēmumi. Elektroniski sniegtie pakalpojumi privātpersonām citās ES valstīs ietilpst OSS regulējumā, kur piemēro patērētāja valsts PVN likmi. Tas attiecas uz tīmekļa dizainu, programmēšanu, tiešsaistes konsultācijām un citiem digitāli sniegtiem pakalpojumiem. Mūsu kalkulators palīdz ātri atrast pareizo likmi jūsu klienta valstij.",
    s4P3: "Pareizu rēķinu un piedāvājumu sagatavošanai ir būtiski zināt, kādu PVN summu jāaprēķina. Rēķins Vācijas biznesa klientam PVN ziņā būtiski atšķiras no rēķina Itālijas privātpersonai. Izmantojiet mūsu kalkulatoru, lai aprēķinātu precīzu PVN summu, un vienmēr norādiet pareizo PVN likmi, PVN summu un kopējo summu ar PVN un bez tā savos rēķinos.",
    s4P4: "Latvijā uzņēmēji ar gada apgrozījumu zem noteikta sliekšņa var izmantot mazo uzņēmumu režīmu, kas atbrīvo no PVN nomaksas, bet arī neļauj atskaitīt priekšnodokli. Līdzīgi režīmi pastāv daudzās citās valstīs. Rūpīgi izvērtējiet, vai šis režīms ir izdevīgs jūsu situācijai, jo īpaši, ja jums ir daudz biznesa izdevumu, par kuriem vēlaties atgūt PVN.",

    s5Title: "PVN aprēķināšana SaaS, programmatūrai un digitālajiem abonementiem",
    s5P1: "SaaS (Software as a Service) un digitālie abonementi veido augošu segmentu ar specifiskiem PVN noteikumiem. Kad kā SaaS pakalpojumu sniedzējs sniedzat pakalpojumus patērētājiem ES, jāpiemēro klienta valsts PVN likme. Tas attiecas uz visiem elektroniski sniegtajiem pakalpojumiem, tostarp mākoņprogrammatūru, straumēšanas platformām, tiešsaistes rīkiem un dalībnieku tīmekļa vietnēm.",
    s5P2: "Klienta atrašanās vietas noteikšana (\"piegādes vieta\") ir izšķiroša, un to nosaka, pamatojoties uz diviem neatkarīgiem pierādījumiem, piemēram, rēķina adresi, IP adresi, bankas datiem vai tālruņa numuru. SaaS uzņēmumiem jāievieš sistēmas, kas automātiski fiksē šo informāciju, lai izpildītu PVN prasības.",
    s5P3: "B2B pārdošanai uzņēmumiem ārpus savas valsts, bet ES ietvaros, piemēro apgrieztās maksāšanas mehānismu, ja pircējam ir derīgs PVN identifikācijas numurs. Pārdošanai uzņēmumiem vai patērētājiem ārpus ES pakalpojums parasti nav apliekams ar PVN ES, taču jāņem vērā iespējamās vietējās nodokļu saistības klienta valstī.",
    s5P4: "Platformas kā Shopify, WooCommerce un citas e-komercijas sistēmas piedāvā arvien vairāk iebūvētu PVN aprēķināšanas iespēju, taču ir svarīgi šos iestatījumus pārbaudīt ar neatkarīgu kalkulatoru. Kļūdas automātiskajos PVN aprēķinos ir bieži, īpaši pārrobežu darījumos ar vairākām likmēm.",

    s6Title: "PVN importā un eksportā: kas jums jāzina",
    s6P1: "Starptautiskajā tirdzniecībā importa un eksporta PVN ir izšķiroša nozīme. Eksports no ES uz valstīm ārpus ES (trešajām valstīm) principā ir atbrīvots no PVN — tā sauktā nulles likme. Tas attiecas gan uz precēm, gan uz noteiktiem pakalpojumiem. Eksportētājam jāspēj pierādīt, ka preces tiešām ir izvestas no ES, piemēram, ar muitas dokumentiem.",
    s6P2: "Importējot preces no ārpus ES, muitā tiek iekasēts importa PVN. Piemērojamā PVN likme ir importa valsts likme. Turklāt var tikt piemēroti muitas nodokļi atkarībā no produkta veida un izcelsmes valsts. Kopš 2021. gada ES ir atcelts PVN atbrīvojums sūtījumiem ar vērtību zem 22 EUR, tāpēc tagad PVN jāmaksā par visām importētajām precēm.",
    s6P3: "Uzņēmumiem, kas regulāri importē, daudzas ES valstis piedāvā iespēju atlikt importa PVN nomaksu. Šajā gadījumā importa PVN nav jāmaksā muitā, bet tas tiek iekļauts periodiskajā PVN deklarācijā. Tas ievērojami uzlabo naudas plūsmu, jo importa PVN var nekavējoties ieskaitīt pret maksājamo PVN.",

    s7Title: "ES PVN regulējums un vienas pieturas aģentūra (OSS)",
    s7P1: "Eiropas Savienība ar PVN direktīvu ir izveidojusi saskaņotu sistēmu, kas atvieglo pārrobežu tirdzniecību. Lai arī katra ES valsts nosaka savas likmes, pastāv kopīgi noteikumi par pakalpojuma sniegšanas vietu, apgrieztās maksāšanas mehānismu un administratīvajām prasībām. Vienas pieturas aģentūras (OSS) režīms, kas ieviests 2021. gada jūlijā, ir svarīgs instruments e-komercijas uzņēmumiem un digitālo pakalpojumu sniedzējiem.",
    s7P2: "Caur OSS jūs varat deklarēt visu PVN, kas jāmaksā citām ES valstīm, vienā ceturkšņa deklarācijā savā valstī. Tas novērš nepieciešamību reģistrēties PVN katras ES valsts atsevišķi — milzīgs administratīvais vienkāršojums. OSS ir pieejams B2C preču un digitālo pakalpojumu pārdošanai patērētājiem citās ES valstīs.",
    s7P3: "Papildus OSS pastāv Importa vienas pieturas aģentūra (IOSS) precēm, kas tiek importētas no ārpus ES ar vērtību līdz 150 EUR. Caur IOSS pārdevējs vai platforma var iekasēt un deklarēt PVN pārdošanas brīdī, kas nozīmē, ka pircējam nav jāmaksā importa PVN, saņemot sūtījumu. Tas uzlabo klientu pieredzi un paātrina piegādes procesu.",
    s7P4: "Ir būtiski zināt, ka apgrieztās maksāšanas mehānisms ir piemērojams tikai tad, ja abām pusēm ir derīgs PVN identifikācijas numurs. To var pārbaudīt caur Eiropas Komisijas VIES sistēmu (VAT Information Exchange System). Šaubu gadījumā par PVN numura derīgumu jāpiemēro standarta PVN likme, lai izvairītos no papildu nodokļu piemaksām.",

    s8Title: "PVN un apgrozījuma nodoklis pasaulē: svarīgas sistēmas ārpus ES",
    s8P1: "Ārpus Eiropas Savienības valstis izmanto ļoti dažādas patēriņa nodokļu sistēmas. Apvienotā Karaliste pēc Brexit ir saglabājusi savu PVN sistēmu ar standarta likmi un samazinātām likmēm noteiktām kategorijām. Austrālija, Jaunzēlande, Kanāda un Singapūra lieto terminu GST, bet tas darbojas līdzīgi PVN. ASV ir izņēmums ar savu decentralizēto Sales Tax sistēmu, kur likmes atšķiras pa štatiem un pat pa pašvaldībām.",
    s8P2: "Starptautiskiem uzņēmējiem, kas pārdod arī ārpus ES, ir ļoti svarīgi zināt vietējās nodokļu prasības. Daudzās valstīs pastāv reģistrācijas slieksnis: tiklīdz sasniedzat noteiktu apgrozījuma apjomu attiecīgajā valstī, jāreģistrējas vietējam patēriņa nodoklim. Tas arvien vairāk attiecas arī uz digitālajiem pakalpojumiem un e-komerciju, kur tādas valstis kā Austrālija, Japāna un Dienvidkoreja uzliek pienākumus ārvalstu pakalpojumu sniedzējiem.",
    s8P3: "Mūsu kalkulators atbalsta vairāk nekā 60 valstis un piedāvā aktuālas likmes gan ES, gan ārpus ES valstīm. Tas padara to par ideālu rīku uzņēmumiem, kas darbojas visā pasaulē un vēlas ātri aprēķināt pareizo PVN vai GST likmi saviem starptautiskajiem darījumiem.",

    s9Title: "PVN atbilstība: labākā prakse 2025-2026",
    s9P1: "Pareiza PVN atbilstība prasa vairāk nekā tikai pareizas likmes aprēķināšanu. Tā ietver stabilu grāmatvedību, savlaicīgas deklarācijas, pareizu rēķinu izrakstīšanu un visas attiecīgās dokumentācijas saglabāšanu. Nodokļu iestādes ES un ārpus tās kļūst arvien stingrākas savā uzraudzībā, īpaši e-komercijas un digitālo pakalpojumu jomā. Ieguldiet labā grāmatvedības programmatūrā un šaubu gadījumā konsultējieties ar nodokļu konsultantu ar starptautisku pieredzi.",
    s9InvoiceTitle: "Rēķinu izrakstīšana un administrēšana",
    s9InvoiceItems: [
      "Vienmēr norādiet PVN likmi un summu rēķinos",
      "Saglabājiet rēķinus vismaz 5 gadus (Latvija) vai saskaņā ar vietējiem noteikumiem",
      "Izmantojiet secīgu rēķinu numerāciju",
      "Norādiet abu pušu PVN identifikācijas numurus",
      "Apgrieztās maksāšanas gadījumā: rēķinā norādiet 'PVN apgrieztā maksāšana'"
    ],
    s9DeadlineTitle: "Termiņi un deklarācijas",
    s9DeadlineItems: [
      "Vienmēr iesniedziet PVN deklarācijas laicīgi",
      "OSS deklarācija: katru ceturksni (mēnesi pēc ceturkšņa beigām)",
      "VIES saraksts: katru ceturksni ES B2B darījumiem",
      "Saglabājiet pierādījumus par klienta atrašanās vietu",
      "Uzraugiet reģistrācijas pienākuma sliekšņus"
    ],
    s9P2: "Tendence ir skaidra: valdības arvien vairāk iegulda digitālajos uzraudzības rīkos un reāllaika ziņošanā. Tādas valstis kā Itālija, Ungārija un Spānija jau ir ieviesušas vai ievieš reāllaika rēķinu izrakstīšanas sistēmas. Tāpēc ir saprātīgi jau tagad ieguldīt izturīgās PVN aprēķināšanas un ziņošanas sistēmās, lai būtu gatavi nākotnes regulējuma izmaiņām.",

    s10Title: "Kam visam var izmantot mūsu PVN kalkulatoru?",
    s10P1: "Mūsu starptautiskais PVN kalkulators ir paredzēts plašam pielietojuma spektram. Zemāk atradīsiet pārskatu par biežākajiem scenārijiem, kuriem uzņēmēji izmanto mūsu rīku:",
    s10UseCases: [
      { term: "PVN aprēķināšana tīmekļa veikala cenām", desc: "Nosakiet pareizo pārdošanas cenu ar vai bez PVN savam tiešsaistes veikalam." },
      { term: "PVN aprēķināšana importa precēm", desc: "Aprēķiniet importa PVN un kopējās izmaksas, importējot preces." },
      { term: "PVN aprēķināšana tiešsaistes pakalpojumiem", desc: "Nosakiet pareizo likmi digitāli sniegtiem pakalpojumiem klientiem visā pasaulē." },
      { term: "PVN aprēķināšana Shopify veikalam", desc: "Pārbaudiet sava Shopify veikala PVN iestatījumus ar aktuālajām likmēm." },
      { term: "PVN aprēķināšana WooCommerce veikalam", desc: "Pārbaudiet sava WooCommerce veikala PVN aprēķinus visām ES valstīm." },
      { term: "PVN aprēķināšana SaaS produktiem", desc: "Aprēķiniet PVN programmatūras kā pakalpojuma produktiem starptautiskiem klientiem." },
      { term: "PVN aprēķināšana dropshipping modelim", desc: "Aprēķiniet PVN saistības dropshipping modelī ar starptautiskiem piegādātājiem." },
      { term: "PVN aprēķināšana brīvajiem profesionāļiem", desc: "Aprēķiniet pareizo PVN summu savos rēķinos kā brīvais profesionālis." },
      { term: "PVN aprēķināšana pašnodarbinātajiem", desc: "Nosakiet PVN saistības un iespējamos atbrīvojumus kā pašnodarbināta persona." },
      { term: "PVN aprēķināšana rēķiniem", desc: "Aprēķiniet precīzu PVN summu, kas jānorāda rēķinā." },
      { term: "PVN aprēķināšana digitālajiem produktiem", desc: "Aprēķiniet PVN lejupielādēm, veidnēm, e-grāmatām un citām digitālajām precēm." },
      { term: "PVN aprēķināšana starptautiskai pārdošanai", desc: "Nosakiet pareizo PVN likmi pārrobežu pārdošanai visā pasaulē." }
    ],

    s11Title: "Kāpēc izvēlēties šo starptautisko PVN kalkulatoru?",
    s11P1: "Mūsu PVN kalkulators izceļas ar uzticamības, lietošanas ērtuma un visaptverošuma kombināciju. Ar atbalstu vairāk nekā 60 valstīm gan ES, gan ārpus tās, tas ir vispilnīgākais bezmaksas PVN kalkulators. Rīks tiek regulāri atjaunināts ar jaunākajām likmju izmaiņām un piedāvā gan standarta, gan samazinātas likmes katrai valstij.",
    s11P2: "Neatkarīgi no tā, vai jums nepieciešams ātrs aprēķins vienam rēķinam vai veicat padziļinātu PVN saistību analīzi vairākās valstīs — mūsu kalkulators nekavējoties sniedz precīzus rezultātus. Intuitīvais interfeiss padara to pieejamu ikvienam, no iesācēja brīvā profesionāļa līdz pieredzējušam starptautiskam uzņēmējam.",
    s11P3: "Visi aprēķini tiek veikti lokāli jūsu pārlūkprogrammā, kas nozīmē, ka jūsu dati netiek nosūtīti uz serveriem. Tas garantē pilnīgu privātumu un arī padara rīku pieejamu bezsaistē pēc lapas ielādes. Apvienojiet mūsu kalkulatoru ar mūsu citiem pakalpojumiem, piemēram, Premium domēna vārdiem SEO izaugsmei un Juridiskajiem dokumentiem jūsu tīmekļa vietnes atbilstībai, un veidojiet savu starptautisko biznesu uz stabila pamata."
  }
};

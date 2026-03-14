import { VATGuideContent } from "./vatGuideTranslations";

export const guideLT: VATGuideContent = {
  badge: "Išsamus PVM Vadovas 2025-2026",
  title: "Pilnas Vadovas Tarptautiniam PVM Skaičiavimui",
  subtitle: "Viskas, ką reikia žinoti apie PVM skaičiavimą internetinėms parduotuvėms, laisvai samdomiems specialistams, SaaS verslams ir tarptautinei prekybai — aktualu, patikima ir paremta ilgamete praktine patirtimi.",
  sections: {
    s1Title: "Kas yra PVM ir kodėl teisingas skaičiavimas yra esminis?",
    s1P1: "PVM reiškia Pridėtinės Vertės Mokestį ir yra vartojimo mokestis, taikomas prekėms ir paslaugoms daugiau nei 170 šalių visame pasaulyje. Angliškai jis vadinamas VAT (Value Added Tax), o kai kurios šalys naudoja terminą GST (Goods and Services Tax). Nors pavadinimai skiriasi, pagrindinė sistema yra ta pati: mokestis pridedamas kiekviename gamybos ir platinimo grandinės etape.",
    s1P2: "Verslininkams, laisvai samdomiems specialistams ir tarptautiniu mastu veikiančioms įmonėms teisingas PVM skaičiavimas yra ne tik teisinė pareiga, bet ir strateginė būtinybė. Klaidos PVM skaičiavimuose gali lemti mokesčių priemokas, baudas ir administracines problemas su mokesčių institucijomis keliose šalyse. Mūsų nemokamas tarptautinis PVM skaičiuoklė padeda išvengti šių rizikų, teikdama tikslius skaičiavimus pagal naujausius tarifus.",
    s1P3: "Nesvarbu, ar valdote internetinę parduotuvę, pristatančią prekes klientams visoje Europoje, siūlote SaaS platformą vartotojams visame pasaulyje, ar kaip laisvas profesionalas teikiate paslaugas tarptautiniams klientams — teisingų PVM tarifų taikymas yra sveikos verslo veiklos pagrindas. Šis vadovas padės jums suprasti tarptautinio PVM sudėtingumą ir suteiks praktinius patarimus klaidoms išvengti.",

    s2Title: "Kaip PVM sistema veikia visame pasaulyje?",
    s2P1: "PVM sistema yra unikali, nes mokestis renkamas kiekviename vertės grandinės etape. Gamintojas moka PVM už žaliavas, prideda vertę produktui ir priskaičiuoja PVM didmenininkui. Didmenininkas daro tą patį mažmenininkui, kuris galiausiai priskaičiuoja PVM vartotojui. Kiekviename etape anksčiau sumokėtas PVM (pirkimo PVM) gali būti atskaitomas, todėl tik galutinis vartotojas prisiima visą mokesčių naštą.",
    s2P2: "Ši sistema iš esmės skiriasi nuo paprasto apyvartos mokesčio (Sales Tax), naudojamo kai kuriose JAV valstijose. Sales Tax mokestis taikomas tik vieną kartą — parduodant galutiniam vartotojui. PVM sistema užtikrina didesnį skaidrumą ir užkerta kelią mokesčių kaskadavimui, todėl ją priėmė dauguma pasaulio šalių.",
    s2FormulaTitle: "PVM skaičiavimas: pagrindinės formulės",
    s2FormulaAdd: "PVM pridėjimas (be PVM → su PVM):",
    s2FormulaAddDesc: "Suma su PVM = Suma be PVM × (1 + PVM tarifas / 100)",
    s2FormulaRemove: "PVM atėmimas (su PVM → be PVM):",
    s2FormulaRemoveDesc: "Suma be PVM = Suma su PVM ÷ (1 + PVM tarifas / 100)",
    s2FormulaTip: "Patarimas: naudokite mūsų skaičiuoklę aukščiau, kad šiuos skaičiavimus atliktumėte automatiškai ir be klaidų bet kuriai šaliai.",
    s2P3: "Svarbu žinoti, kad beveik kiekviena šalis taiko kelis PVM tarifus. Be standartinio tarifo egzistuoja sumažinti tarifai būtinoms prekėms, tokioms kaip maistas, vaistai, knygos ir kultūros paslaugos. Kai kuriose šalyse taip pat taikomas nulinis tarifas arba atleidimas tam tikroms kategorijoms. Mūsų skaičiuoklė automatiškai rodo visus galimus tarifus, kai pasirenkate šalį.",

    s3Title: "PVM skaičiavimas e. prekybai, internetinėms parduotuvėms ir pardavimams internetu",
    s3P1: "E. prekybos sektorius yra viena sudėtingiausių sričių PVM skaičiavimo atžvilgiu. Internetiniai pardavėjai turi atsižvelgti į pirkėjo šalį, produkto ar paslaugos tipą ir tai, ar klientas yra privatus asmuo (B2C), ar verslas (B2B). Europos Sąjungoje nuo 2021 m. liepos veikia vieno langelio sistema (OSS), leidžianti deklaruoti PVM visoms ES šalims viena deklaracija.",
    s3P2: "Internetinėms parduotuvėms, parduodančioms fizinius produktus vartotojams kitose ES šalyse, reikia taikyti kliento šalies PVM tarifą, kai bendra apyvarta ES privatiems asmenims viršija 10 000 EUR per metus. Tai reiškia, kad Lietuvos internetinė parduotuvė, parduodanti Vokietijos vartotojui, turi apskaičiuoti ir sumokėti Vokietijos PVM tarifą — tai, ką mūsų skaičiuoklė padeda atlikti greitai ir tiksliai.",
    s3P3: "B2B sandoriams ES viduje paprastai taikomas atvirkštinio apmokestinimo mechanizmas (Reverse Charge). Tai reiškia, kad tiekėjas išrašo sąskaitą be PVM, o pirkėjas pats deklaruoja ir įskaito PVM savo šalyje. Tai žymiai supaprastina administravimą, tačiau abi šalys turi turėti galiojantį PVM identifikacijos numerį, kurį galima patikrinti per VIES sistemą.",
    s3PhysicalTitle: "Fizinės prekės",
    s3PhysicalDesc: "PVM skaičiuojamas pagal pristatymo šalį. Siuntoms į kitas ES šalis taikomas vietinis tarifas B2C pardavimams virš ribos. Eksportui už ES ribų taikomas nulinis tarifas.",
    s3DigitalTitle: "Skaitmeniniai produktai ir paslaugos",
    s3DigitalDesc: "Skaitmeniniams produktams ir paslaugoms privatiems asmenims taikomas kliento šalies PVM tarifas, nepriklausomai nuo pardavėjo buvimo vietos. Tai apima programinę įrangą, el. knygas, internetinius kursus, transliacijos paslaugas ir SaaS produktus.",
    s3P4: "Dropshipping yra ypatingas dėmesio klausimas. Kaip dropshipperis jūs teisiškai esate pardavėjas, net jei niekada fiziškai neturėjote prekių. Tai reiškia, kad esate atsakingas už teisingą PVM skaičiavimą ir sumokėjimą. Importuojant iš už ES ribų, reikia atsižvelgti į importo PVM ir galimus muitus. Mūsų skaičiuoklė padeda nustatyti teisingą PVM sumą, nepriklausomai nuo jūsų verslo modelio sudėtingumo.",

    s4Title: "PVM skaičiavimas laisvai samdomiems specialistams ir paslaugų teikėjams",
    s4P1: "Kaip tarptautiniu mastu dirbančiam laisvam profesionalui labai svarbu suprasti, kada reikia skaičiuoti PVM ir koks tarifas taikomas. Pagrindinė taisyklė yra paprasta: paslaugoms verslams (B2B) ES viduje taikomas atvirkštinis apmokestinimas, todėl sąskaitą išrašote be PVM, o pirkėjas pats deklaruoja PVM. Paslaugoms privatiems asmenims (B2C) paprastai taikomas PVM tarifas šalies, kurioje esate registruotas kaip verslininkas.",
    s4P2: "Tačiau yra svarbių išimčių. Elektroniškai teikiamos paslaugos privatiems asmenims kitose ES šalyse patenka į OSS reguliavimą, kur taikomas vartotojo šalies PVM tarifas. Tai apima interneto dizainą, programavimą, internetines konsultacijas ir kitas skaitmeniniu būdu teikiamas paslaugas. Mūsų skaičiuoklė padeda greitai rasti teisingą tarifą jūsų kliento šaliai.",
    s4P3: "Teisingų sąskaitų ir pasiūlymų rengimui būtina žinoti, kokią PVM sumą reikia apskaičiuoti. Sąskaita Vokietijos verslo klientui PVM požiūriu iš esmės skiriasi nuo sąskaitos Italijos privačiam asmeniui. Naudokite mūsų skaičiuoklę tiksliai PVM sumai apskaičiuoti ir visada nurodykite teisingą PVM tarifą, PVM sumą ir bendrą sumą su PVM ir be jo savo sąskaitose.",
    s4P4: "Lietuvoje verslininkai, kurių metinė apyvarta nesiekia nustatytos ribos, gali naudotis mažos įmonės schema, atleidžiančia nuo PVM mokėjimo, tačiau neleidžiančia atskaityti pirkimo PVM. Panašios schemos egzistuoja daugelyje kitų šalių. Atidžiai įvertinkite, ar ši schema naudinga jūsų situacijai, ypač jei turite daug verslo išlaidų, už kurias norėtumėte susigrąžinti PVM.",

    s5Title: "PVM skaičiavimas SaaS, programinei įrangai ir skaitmeniniams prenumeratoms",
    s5P1: "SaaS (Software as a Service) ir skaitmeninės prenumeratos sudaro augantį segmentą su specifinėmis PVM taisyklėmis. Kai kaip SaaS paslaugų teikėjas teikiate paslaugas vartotojams ES, turite taikyti kliento šalies PVM tarifą. Tai taikoma visiems elektroniškai teikiamoms paslaugoms, įskaitant debesų programinę įrangą, transliacijos platformas, internetinius įrankius ir narystės svetaines.",
    s5P2: "Kliento buvimo vietos nustatymas (\"paslaugų teikimo vieta\") yra lemiamas ir nustatomas remiantis dviem nepriklausomais įrodymais, tokiais kaip sąskaitos adresas, IP adresas, banko duomenys ar telefono numeris. SaaS įmonės turi įdiegti sistemas, kurios automatiškai fiksuoja šią informaciją PVM reikalavimams įvykdyti.",
    s5P3: "B2B pardavimams įmonėms už savo šalies ribų, bet ES viduje, taikomas atvirkštinis apmokestinimas, jei pirkėjas turi galiojantį PVM identifikacijos numerį. Pardavimams įmonėms ar vartotojams už ES ribų paslauga paprastai neapmokestinama PVM ES, tačiau reikia atsižvelgti į galimas vietines mokestines prievoles kliento šalyje.",
    s5P4: "Platformos kaip Shopify, WooCommerce ir kitos e. prekybos sistemos siūlo vis daugiau integruotų PVM skaičiavimo galimybių, tačiau svarbu šiuos nustatymus patikrinti nepriklausoma skaičiuokle. Klaidos automatiniuose PVM skaičiavimuose pasitaiko dažnai, ypač tarpvalstybiniuose sandoriuose su keliais tarifais.",

    s6Title: "PVM importuojant ir eksportuojant: ką reikia žinoti",
    s6P1: "Tarptautinėje prekyboje importo ir eksporto PVM vaidina lemiamą vaidmenį. Eksportas iš ES į šalis už ES ribų (trečiąsias šalis) iš principo yra atleistas nuo PVM — vadinamasis nulinis tarifas. Tai taikoma tiek prekėms, tiek tam tikroms paslaugoms. Eksportuotojas turi galėti įrodyti, kad prekės iš tikrųjų išvežtos iš ES, pavyzdžiui, muitinės dokumentais.",
    s6P2: "Importuojant prekes iš už ES ribų, muitinėje imamas importo PVM. Taikomas PVM tarifas yra importo šalies tarifas. Be to, gali būti taikomi muitai, priklausomai nuo produkto tipo ir kilmės šalies. Nuo 2021 m. ES panaikintas PVM atleidimas siuntoms, kurių vertė mažesnė nei 22 EUR, todėl dabar PVM mokamas už visas importuojamas prekes.",
    s6P3: "Įmonėms, reguliariai importuojančioms, daugelis ES šalių siūlo galimybę atidėti importo PVM mokėjimą. Tokiu atveju importo PVM nemokamas muitinėje, o įtraukiamas į periodinę PVM deklaraciją. Tai žymiai pagerina pinigų srautą, nes importo PVM galima iš karto įskaityti su mokėtinu PVM.",

    s7Title: "ES PVM reguliavimas ir vieno langelio sistema (OSS)",
    s7P1: "Europos Sąjunga PVM direktyva sukūrė suderintą sistemą, palengvinančią tarpvalstybinę prekybą. Nors kiekviena ES šalis nustato savo tarifus, galioja bendros taisyklės dėl paslaugų teikimo vietos, atvirkštinio apmokestinimo ir administracinių reikalavimų. Vieno langelio sistema (OSS), įvesta 2021 m. liepos mėn., yra svarbus instrumentas e. prekybos įmonėms ir skaitmeninių paslaugų teikėjams.",
    s7P2: "Per OSS galite deklaruoti visą PVM, kurį turite sumokėti kitoms ES šalims, viena ketvirtine deklaracija savo šalyje. Tai pašalina būtinybę registruotis PVM kiekvienoje ES šalyje atskirai — milžiniškas administracinis supaprastinimas. OSS galima naudoti B2C prekių ir skaitmeninių paslaugų pardavimams vartotojams kitose ES šalyse.",
    s7P3: "Be OSS egzistuoja Importo vieno langelio sistema (IOSS) prekėms, importuojamoms iš už ES ribų, kurių vertė iki 150 EUR. Per IOSS pardavėjas ar platforma gali surinkti ir deklaruoti PVM pardavimo metu, todėl pirkėjui nereikia mokėti importo PVM gavus siuntą. Tai pagerina kliento patirtį ir pagreitina pristatymo procesą.",
    s7P4: "Būtina žinoti, kad atvirkštinis apmokestinimas taikomas tik tada, kai abi šalys turi galiojantį PVM identifikacijos numerį. Tai galima patikrinti per Europos Komisijos VIES sistemą (VAT Information Exchange System). Kilus abejonių dėl PVM numerio galiojimo, reikia taikyti standartinį PVM tarifą, kad būtų išvengta mokesčių priemokų.",

    s8Title: "PVM ir apyvartos mokesčiai pasaulyje: svarbios sistemos už ES ribų",
    s8P1: "Už Europos Sąjungos ribų šalys naudoja labai skirtingas vartojimo mokesčių sistemas. Jungtinė Karalystė po Brexit išlaikė savo PVM sistemą su standartiniu tarifu ir sumažintais tarifais konkrečioms kategorijoms. Australija, Naujoji Zelandija, Kanada ir Singapūras naudoja terminą GST, tačiau jis veikia panašiai kaip PVM. JAV yra išimtis su savo decentralizuota Sales Tax sistema, kur tarifai skiriasi pagal valstiją ir net savivaldybę.",
    s8P2: "Tarptautiniams verslininkams, taip pat parduodantiems už ES ribų, labai svarbu žinoti vietinius mokestinius reikalavimus. Daugelyje šalių egzistuoja registracijos riba: pasiekus tam tikrą apyvartos sumą toje šalyje, reikia registruotis vietiniam vartojimo mokesčiui. Tai vis dažniau taikoma ir skaitmeninėms paslaugoms bei e. prekybai, kai tokios šalys kaip Australija, Japonija ir Pietų Korėja nustato prievoles užsienio paslaugų teikėjams.",
    s8P3: "Mūsų skaičiuoklė palaiko daugiau nei 60 šalių ir siūlo naujausius tarifus tiek ES, tiek ne ES šalims. Tai daro ją idealia priemone įmonėms, veikiančioms visame pasaulyje ir norinčioms greitai apskaičiuoti teisingą PVM ar GST tarifą savo tarptautiniams sandoriams.",

    s9Title: "PVM atitiktis: geriausia praktika 2025-2026",
    s9P1: "Teisinga PVM atitiktis reikalauja daugiau nei tik teisingo tarifo apskaičiavimo. Ji apima tvirtą apskaitą, laiku pateiktas deklaracijas, teisingą sąskaitų išrašymą ir visos susijusios dokumentacijos saugojimą. Mokesčių institucijos ES ir už jos ribų tampa vis griežtesnės, ypač e. prekybos ir skaitmeninių paslaugų srityje. Investuokite į gerą apskaitos programinę įrangą ir abejojant pasitarkite su mokesčių konsultantu, turinčiu tarptautinės patirties.",
    s9InvoiceTitle: "Sąskaitų išrašymas ir administravimas",
    s9InvoiceItems: [
      "Visada nurodykite PVM tarifą ir sumą sąskaitose",
      "Saugokite sąskaitas mažiausiai 10 metų (Lietuva) arba pagal vietinius reikalavimus",
      "Naudokite nuoseklią sąskaitų numeraciją",
      "Nurodykite abiejų šalių PVM identifikacijos numerius",
      "Atvirkštinio apmokestinimo atveju: sąskaitoje nurodykite 'PVM atvirkštinis apmokestinimas'"
    ],
    s9DeadlineTitle: "Terminai ir deklaracijos",
    s9DeadlineItems: [
      "Visada pateikite PVM deklaracijas laiku",
      "OSS deklaracija: kas ketvirtį (mėnesį po ketvirčio pabaigos)",
      "VIES sąrašas: kas ketvirtį ES B2B sandoriams",
      "Saugokite kliento buvimo vietos įrodymus",
      "Stebėkite registracijos prievolės ribas"
    ],
    s9P2: "Tendencija aiški: vyriausybės vis daugiau investuoja į skaitmeninius priežiūros įrankius ir realaus laiko ataskaitų teikimą. Tokios šalys kaip Italija, Vengrija ir Ispanija jau įdiegė arba diegia realaus laiko sąskaitų išrašymo sistemas. Todėl protinga jau dabar investuoti į patikimas PVM skaičiavimo ir ataskaitų teikimo sistemas, kad būtumėte pasiruošę būsimiems reguliavimo pokyčiams.",

    s10Title: "Kam galima naudoti mūsų PVM skaičiuoklę?",
    s10P1: "Mūsų tarptautinė PVM skaičiuoklė sukurta plačiam taikymo spektrui. Žemiau rasite dažniausių scenarijų, kuriems verslininkai naudoja mūsų įrankį, apžvalgą:",
    s10UseCases: [
      { term: "PVM skaičiavimas internetinės parduotuvės kainoms", desc: "Nustatykite teisingą pardavimo kainą su PVM arba be jo savo internetinei parduotuvei." },
      { term: "PVM skaičiavimas importo prekėms", desc: "Apskaičiuokite importo PVM ir bendras išlaidas importuojant prekes." },
      { term: "PVM skaičiavimas internetinėms paslaugoms", desc: "Nustatykite teisingą tarifą skaitmeniniu būdu teikiamoms paslaugoms klientams visame pasaulyje." },
      { term: "PVM skaičiavimas Shopify parduotuvei", desc: "Patikrinkite savo Shopify parduotuvės PVM nustatymus pagal naujausius tarifus." },
      { term: "PVM skaičiavimas WooCommerce parduotuvei", desc: "Patikrinkite WooCommerce parduotuvės PVM skaičiavimus visoms ES šalims." },
      { term: "PVM skaičiavimas SaaS produktams", desc: "Apskaičiuokite PVM programinės įrangos kaip paslaugos produktams tarptautiniams klientams." },
      { term: "PVM skaičiavimas dropshipping modeliui", desc: "Apskaičiuokite PVM prievoles dropshipping modelyje su tarptautiniais tiekėjais." },
      { term: "PVM skaičiavimas laisviems profesionalams", desc: "Apskaičiuokite teisingą PVM sumą savo sąskaitose kaip laisvas profesionalas." },
      { term: "PVM skaičiavimas savarankiškai dirbantiems", desc: "Nustatykite PVM prievoles ir galimus atleidimus kaip savarankiškai dirbantis asmuo." },
      { term: "PVM skaičiavimas sąskaitoms", desc: "Tiksliai apskaičiuokite PVM sumą, kuri turi būti nurodyta sąskaitoje." },
      { term: "PVM skaičiavimas skaitmeniniams produktams", desc: "Apskaičiuokite PVM atsisiuntimams, šablonams, el. knygoms ir kitiems skaitmeniniams produktams." },
      { term: "PVM skaičiavimas tarptautiniams pardavimams", desc: "Nustatykite teisingą PVM tarifą tarpvalstybiniams pardavimams visame pasaulyje." }
    ],

    s11Title: "Kodėl rinktis šią tarptautinę PVM skaičiuoklę?",
    s11P1: "Mūsų PVM skaičiuoklė išsiskiria patikimumo, patogumo ir išsamumo deriniu. Palaikydama daugiau nei 60 šalių tiek ES, tiek už jos ribų, tai yra išsamiausia nemokama PVM skaičiuoklė. Įrankis reguliariai atnaujinamas naujausiais tarifų pakeitimais ir siūlo tiek standartinius, tiek sumažintus tarifus kiekvienai šaliai.",
    s11P2: "Nesvarbu, ar jums reikia greito skaičiavimo vienai sąskaitai, ar atliekate išsamią PVM prievolių analizę keliose šalyse — mūsų skaičiuoklė iš karto pateikia tikslius rezultatus. Intuityvi sąsaja daro ją prieinamą visiems, nuo pradedančiojo laisvo profesionalo iki patyrusio tarptautinio verslininko.",
    s11P3: "Visi skaičiavimai atliekami lokaliai jūsų naršyklėje, todėl jūsų duomenys nesiunčiami į serverius. Tai garantuoja visišką privatumą ir daro įrankį prieinamą be interneto po puslapio įkėlimo. Derinkite mūsų skaičiuoklę su kitomis paslaugomis, tokiomis kaip Premium domenų vardai SEO augimui ir Teisiniai dokumentai svetainės atitikčiai, ir kurkite savo tarptautinį verslą ant tvirto pagrindo."
  }
};

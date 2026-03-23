import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/lawyer-hero.jpg";

const translations: Record<string, { title: string; subtitle: string; cta1: string; cta2: string }> = {
  sv: { title: "Väsentliga juridiska dokument för fotografiwebbplatser: Villkor, integritetspolicy, upphovsrättsskydd och ansvarsfriskrivning", subtitle: "Skydda din fotograferingsverksamhet med professionellt utformade juridiska dokument. Villkor, uppdragsavtal, integritetspolicy, frisläppning, upphovsrättsskydd och mer.", cta1: "Kom igång", cta2: "Läs mer" },
  pl: { title: "Niezbędne dokumenty prawne dla stron fotograficznych: Regulamin, polityka prywatności, ochrona praw autorskich i zastrzeżenia", subtitle: "Chroń swoją działalność fotograficzną profesjonalnymi dokumentami prawnymi. Regulamin, umowy zlecenia, polityka prywatności, zrzeczenie się roszczeń, ochrona praw autorskich i więcej.", cta1: "Rozpocznij", cta2: "Dowiedz się więcej" },
  el: { title: "Βασικά νομικά έγγραφα για ιστοσελίδες φωτογραφίας: Όροι χρήσης, πολιτική απορρήτου, προστασία πνευματικών δικαιωμάτων και αποποίηση ευθύνης", subtitle: "Προστατέψτε την επιχείρηση φωτογραφίας σας με επαγγελματικά νομικά έγγραφα. Όροι, συμβάσεις ανάθεσης, πολιτική απορρήτου, παραίτηση, προστασία πνευματικών δικαιωμάτων και άλλα.", cta1: "Ξεκινήστε", cta2: "Μάθετε περισσότερα" },
  da: { title: "Vigtige juridiske dokumenter til fotografiwebsteder: Vilkår, privatlivspolitik, ophavsretsbeskyttelse og ansvarsfraskrivelse", subtitle: "Beskyt din fotografivirksomhed med professionelt udformede juridiske dokumenter. Vilkår, opgaveaftaler, privatlivspolitik, fraskrivelse, ophavsretsbeskyttelse og mere.", cta1: "Kom i gang", cta2: "Læs mere" },
  no: { title: "Viktige juridiske dokumenter for fotografi-nettsteder: Vilkår, personvernregler, opphavsrettsbeskyttelse og ansvarsfraskrivelse", subtitle: "Beskytt din fotografivirksomhet med profesjonelt utformede juridiske dokumenter. Vilkår, oppdragsavtaler, personvernregler, fraskrivelse, opphavsrettsbeskyttelse og mer.", cta1: "Kom i gang", cta2: "Les mer" },
  ro: { title: "Documente juridice esențiale pentru site-uri de fotografie: Termeni și condiții, politica de confidențialitate, protecția drepturilor de autor și declinare de responsabilitate", subtitle: "Protejați-vă afacerea de fotografie cu documente juridice profesionale. Termeni, contracte de atribuire, politică de confidențialitate, renunțare, protecția drepturilor de autor și mai mult.", cta1: "Începeți", cta2: "Aflați mai mult" },
  bg: { title: "Основни правни документи за фотографски уебсайтове: Общи условия, политика за поверителност, защита на авторските права и отказ от отговорност", subtitle: "Защитете фотографския си бизнес с професионални правни документи. Общи условия, договори за възлагане, политика за поверителност, отказ, защита на авторските права и още.", cta1: "Започнете", cta2: "Научете повече" },
  fi: { title: "Olennaiset oikeudelliset asiakirjat valokuvaussivustoille: Käyttöehdot, tietosuojakäytäntö, tekijänoikeussuoja ja vastuuvapauslauseke", subtitle: "Suojaa valokuvausliiketoimintasi ammattimaisesti laadituilla oikeudellisilla asiakirjoilla. Käyttöehdot, toimeksiantosopimukset, tietosuojakäytäntö, vastuuvapautus, tekijänoikeussuoja ja paljon muuta.", cta1: "Aloita", cta2: "Lue lisää" },
  ru: { title: "Основные юридические документы для фотосайтов: Условия использования, политика конфиденциальности, защита авторских прав и отказ от ответственности", subtitle: "Защитите свой фотобизнес профессиональными юридическими документами. Условия, договоры, политика конфиденциальности, отказ от претензий, защита авторских прав и многое другое.", cta1: "Начать", cta2: "Узнать больше" },
  zh: { title: "摄影网站必备法律文件：条款与条件、隐私政策、版权保护与免责声明", subtitle: "用专业法律文件保护您的摄影业务。条款与条件、委托协议、隐私政策、免责声明、版权保护等。", cta1: "立即开始", cta2: "了解更多" },
  hi: { title: "फ़ोटोग्राफ़ी वेबसाइटों के लिए आवश्यक कानूनी दस्तावेज़: नियम और शर्तें, गोपनीयता नीति, कॉपीराइट सुरक्षा और अस्वीकरण", subtitle: "पेशेवर कानूनी दस्तावेज़ों से अपने फ़ोटोग्राफ़ी व्यवसाय की रक्षा करें। नियम और शर्तें, असाइनमेंट समझौते, गोपनीयता नीति, छूट, कॉपीराइट सुरक्षा और बहुत कुछ।", cta1: "शुरू करें", cta2: "और जानें" },
  ja: { title: "写真ウェブサイトに必要な法的文書：利用規約、プライバシーポリシー、著作権保護、免責事項", subtitle: "プロの法的文書で写真ビジネスを保護しましょう。利用規約、業務委託契約、プライバシーポリシー、権利放棄、著作権保護など。", cta1: "始める", cta2: "詳しく見る" },
  ar: { title: "الوثائق القانونية الأساسية لمواقع التصوير الفوتوغرافي: الشروط والأحكام، سياسة الخصوصية، حماية حقوق النشر وإخلاء المسؤولية", subtitle: "احمِ أعمال التصوير الفوتوغرافي الخاصة بك بوثائق قانونية احترافية. الشروط والأحكام، اتفاقيات التكليف، سياسة الخصوصية، التنازل، حماية حقوق النشر والمزيد.", cta1: "ابدأ الآن", cta2: "اعرف المزيد" },
  ko: { title: "사진 웹사이트를 위한 필수 법적 문서: 이용약관, 개인정보 보호정책, 저작권 보호 및 면책조항", subtitle: "전문 법적 문서로 사진 사업을 보호하세요. 이용약관, 위탁 계약, 개인정보 보호정책, 권리 포기, 저작권 보호 등.", cta1: "시작하기", cta2: "자세히 보기" },
  cs: { title: "Základní právní dokumenty pro fotografické weby: Obchodní podmínky, zásady ochrany osobních údajů, ochrana autorských práv a prohlášení", subtitle: "Chraňte své fotografické podnikání profesionálními právními dokumenty. Obchodní podmínky, smlouvy o dílo, zásady ochrany osobních údajů, vzdání se nároku, ochrana autorských práv a další.", cta1: "Začít", cta2: "Zjistit více" },
  hu: { title: "Alapvető jogi dokumentumok fotós weboldalakhoz: Általános feltételek, adatvédelmi irányelvek, szerzői jogi védelem és felelősségkizárás", subtitle: "Védje fotóvállalkozását professzionális jogi dokumentumokkal. Általános feltételek, megbízási szerződések, adatvédelmi irányelvek, lemondó nyilatkozat, szerzői jogi védelem és még sok más.", cta1: "Kezdés", cta2: "További információ" },
  uk: { title: "Основні юридичні документи для фотосайтів: Умови використання, політика конфіденційності, захист авторських прав та відмова від відповідальності", subtitle: "Захистіть свій фотобізнес професійними юридичними документами. Умови, договори, політика конфіденційності, відмова від претензій, захист авторських прав та багато іншого.", cta1: "Розпочати", cta2: "Дізнатися більше" },
  sk: { title: "Základné právne dokumenty pre fotografické weby: Obchodné podmienky, zásady ochrany súkromia, ochrana autorských práv a vyhlásenie", subtitle: "Chráňte svoje fotografické podnikanie profesionálnymi právnymi dokumentmi. Obchodné podmienky, zmluvy o dielo, zásady ochrany súkromia, vzdanie sa nároku, ochrana autorských práv a ďalšie.", cta1: "Začať", cta2: "Zistiť viac" },
  hr: { title: "Osnovni pravni dokumenti za fotografske web stranice: Uvjeti korištenja, politika privatnosti, zaštita autorskih prava i odricanje od odgovornosti", subtitle: "Zaštitite svoju fotografsku djelatnost profesionalnim pravnim dokumentima. Uvjeti, ugovori o zadatku, politika privatnosti, odricanje, zaštita autorskih prava i još mnogo toga.", cta1: "Započnite", cta2: "Saznajte više" },
  sr: { title: "Основни правни документи за фотографске веб странице: Услови коришћења, политика приватности, заштита ауторских права и одрицање од одговорности", subtitle: "Заштитите свој фотографски бизнис професионалним правним документима. Услови, уговори, политика приватности, одрицање, заштита ауторских права и још много тога.", cta1: "Започните", cta2: "Сазнајте више" },
  sl: { title: "Bistveni pravni dokumenti za fotografske spletne strani: Pogoji uporabe, pravilnik o zasebnosti, zaščita avtorskih pravic in omejitev odgovornosti", subtitle: "Zaščitite svojo fotografsko dejavnost s profesionalnimi pravnimi dokumenti. Pogoji, pogodbe o naročilu, pravilnik o zasebnosti, odpoved, zaščita avtorskih pravic in več.", cta1: "Začnite", cta2: "Izvedi več" },
  tr: { title: "Fotoğraf Web Siteleri İçin Temel Yasal Belgeler: Şartlar ve Koşullar, Gizlilik Politikası, Telif Hakkı Koruması ve Sorumluluk Reddi", subtitle: "Profesyonel yasal belgelerle fotoğrafçılık işinizi koruyun. Şartlar ve Koşullar, Görev Sözleşmeleri, Gizlilik Politikası, Feragat, Telif Hakkı Koruması ve daha fazlası.", cta1: "Başlayın", cta2: "Daha fazla bilgi" },
};

interface HeroPhotographyMultiProps { lang: string; }

const HeroPhotographyMulti = ({ lang }: HeroPhotographyMultiProps) => {
  const t = translations[lang];
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="relative min-h-[600px] bg-navy">
      <div className="container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">{t.title}</h1>
            <p className="text-xl text-white/90 mb-8">{t.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => scrollToSection("pricing")} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("services")} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                {t.cta2}
              </Button>
            </div>
          </div>
          <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl">
            <img src={heroImage} alt="Professional photography legal services" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPhotographyMulti;

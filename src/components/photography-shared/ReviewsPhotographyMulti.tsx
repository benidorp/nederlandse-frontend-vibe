import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const translations: Record<string, { badge: string; title: string; desc: string; reviews: { name: string; role: string; text: string }[] }> = {
  sv: { badge: "Recensioner", title: "Vad våra kunder säger", desc: "Upptäck varför fotografer litar på våra juridiska dokument", reviews: [{ name: "Sophie van der Berg", role: "Bröllopsfotograf", text: "Som bröllopsfotograf behövde jag professionella juridiska dokument. Dessa mallar är perfekta - uppdragsavtalet, modellrelease och upphovsrättsskyddet skyddar mitt arbete fullt ut." }, { name: "Mark Jansen", role: "Kommersiell fotograf", text: "För mitt fotograferingsföretag är dessa juridiska dokument guld värda. Den GDPR-kompatibla integritetspolicyn och cookiepolicyn ger mina kunder förtroende." }] },
  pl: { badge: "Opinie", title: "Co mówią nasi klienci", desc: "Odkryj, dlaczego fotografowie ufają naszym dokumentom prawnym", reviews: [{ name: "Sophie van der Berg", role: "Fotograf ślubny", text: "Jako fotograf ślubny potrzebowałam profesjonalnych dokumentów prawnych. Te szablony są idealne - umowa zlecenia, release modela i ochrona praw autorskich w pełni chronią moją pracę." }, { name: "Mark Jansen", role: "Fotograf komercyjny", text: "Dla mojej firmy fotograficznej te dokumenty prawne są na wagę złota. Polityka prywatności zgodna z RODO daje moim klientom pewność." }] },
  el: { badge: "Κριτικές", title: "Τι λένε οι πελάτες μας", desc: "Ανακαλύψτε γιατί οι φωτογράφοι εμπιστεύονται τα νομικά μας έγγραφα", reviews: [{ name: "Sophie van der Berg", role: "Φωτογράφος γάμων", text: "Ως φωτογράφος γάμων, χρειαζόμουν επαγγελματικά νομικά έγγραφα. Αυτά τα πρότυπα είναι τέλεια και προστατεύουν πλήρως τη δουλειά μου." }, { name: "Mark Jansen", role: "Εμπορικός φωτογράφος", text: "Για την επιχείρησή μου, αυτά τα νομικά έγγραφα αξίζουν χρυσό. Η πολιτική απορρήτου GDPR δίνει εμπιστοσύνη στους πελάτες μου." }] },
  da: { badge: "Anmeldelser", title: "Hvad vores kunder siger", desc: "Oplev hvorfor fotografer stoler på vores juridiske dokumenter", reviews: [{ name: "Sophie van der Berg", role: "Bryllupsfotograf", text: "Som bryllupsfotograf havde jeg brug for professionelle juridiske dokumenter. Disse skabeloner er perfekte og beskytter mit arbejde fuldt ud." }, { name: "Mark Jansen", role: "Kommerciel fotograf", text: "For min fotografivirksomhed er disse juridiske dokumenter guld værd. GDPR-privatlivspolitikken giver mine kunder tillid." }] },
  no: { badge: "Anmeldelser", title: "Hva våre kunder sier", desc: "Oppdag hvorfor fotografer stoler på våre juridiske dokumenter", reviews: [{ name: "Sophie van der Berg", role: "Bryllupsfotograf", text: "Som bryllupsfotograf trengte jeg profesjonelle juridiske dokumenter. Disse malene er perfekte og beskytter arbeidet mitt fullt ut." }, { name: "Mark Jansen", role: "Kommersiell fotograf", text: "For min fotografivirksomhet er disse juridiske dokumentene gull verdt. GDPR-personvernreglene gir kundene mine tillit." }] },
  ro: { badge: "Recenzii", title: "Ce spun clienții noștri", desc: "Descoperiți de ce fotografii au încredere în documentele noastre juridice", reviews: [{ name: "Sophie van der Berg", role: "Fotograf de nuntă", text: "Ca fotograf de nuntă, aveam nevoie de documente juridice profesionale. Aceste șabloane sunt perfecte și îmi protejează pe deplin munca." }, { name: "Mark Jansen", role: "Fotograf comercial", text: "Pentru afacerea mea de fotografie, aceste documente valorează aur. Politica de confidențialitate GDPR le dă clienților mei încredere." }] },
  bg: { badge: "Отзиви", title: "Какво казват нашите клиенти", desc: "Открийте защо фотографите се доверяват на нашите правни документи", reviews: [{ name: "Sophie van der Berg", role: "Сватбен фотограф", text: "Като сватбен фотограф имах нужда от професионални правни документи. Тези шаблони са перфектни и напълно защитават работата ми." }, { name: "Mark Jansen", role: "Търговски фотограф", text: "За моя фотографски бизнес тези правни документи са безценни. GDPR политиката за поверителност дава увереност на клиентите ми." }] },
  fi: { badge: "Arvostelut", title: "Mitä asiakkaamme sanovat", desc: "Tutustu miksi valokuvaajat luottavat oikeudellisiin asiakirjoihimme", reviews: [{ name: "Sophie van der Berg", role: "Häävalokuvaaja", text: "Häävalokuvaajana tarvitsin ammattimaiset oikeudelliset asiakirjat. Nämä mallit ovat täydellisiä ja suojaavat työtäni täysin." }, { name: "Mark Jansen", role: "Kaupallinen valokuvaaja", text: "Valokuvausliiketoiminnassani nämä oikeudelliset asiakirjat ovat kullan arvoisia." }] },
  ru: { badge: "Отзывы", title: "Что говорят наши клиенты", desc: "Узнайте, почему фотографы доверяют нашим юридическим документам", reviews: [{ name: "Sophie van der Berg", role: "Свадебный фотограф", text: "Как свадебный фотограф, мне были нужны профессиональные юридические документы. Эти шаблоны идеальны и полностью защищают мою работу." }, { name: "Mark Jansen", role: "Коммерческий фотограф", text: "Для моего фотобизнеса эти юридические документы на вес золота. GDPR-совместимая политика конфиденциальности вселяет доверие клиентов." }] },
  zh: { badge: "评价", title: "客户怎么说", desc: "了解摄影师为何信赖我们的法律文件", reviews: [{ name: "Sophie van der Berg", role: "婚礼摄影师", text: "作为婚礼摄影师，我需要专业的法律文件。这些模板非常完美，完全保护了我的作品。" }, { name: "Mark Jansen", role: "商业摄影师", text: "对于我的摄影业务来说，这些法律文件价值连城。GDPR隐私政策让我的客户充满信心。" }] },
  hi: { badge: "समीक्षाएं", title: "हमारे ग्राहक क्या कहते हैं", desc: "जानें कि फ़ोटोग्राफ़र हमारे कानूनी दस्तावेज़ों पर क्यों भरोसा करते हैं", reviews: [{ name: "Sophie van der Berg", role: "वेडिंग फ़ोटोग्राफ़र", text: "एक वेडिंग फ़ोटोग्राफ़र के रूप में, मुझे पेशेवर कानूनी दस्तावेज़ चाहिए थे। ये टेम्पलेट बिल्कुल सही हैं और मेरे काम की पूरी तरह रक्षा करते हैं।" }, { name: "Mark Jansen", role: "कमर्शियल फ़ोटोग्राफ़र", text: "मेरे फ़ोटोग्राफ़ी व्यवसाय के लिए ये कानूनी दस्तावेज़ अमूल्य हैं।" }] },
  ja: { badge: "レビュー", title: "お客様の声", desc: "写真家が当社の法的文書を信頼する理由", reviews: [{ name: "Sophie van der Berg", role: "ウェディングフォトグラファー", text: "ウェディングフォトグラファーとして、プロの法的文書が必要でした。これらのテンプレートは完璧で、私の作品を完全に保護します。" }, { name: "Mark Jansen", role: "コマーシャルフォトグラファー", text: "私の写真ビジネスにとって、これらの法的文書は金の価値があります。" }] },
  ar: { badge: "المراجعات", title: "ماذا يقول عملاؤنا", desc: "اكتشف لماذا يثق المصورون بوثائقنا القانونية", reviews: [{ name: "Sophie van der Berg", role: "مصورة حفلات زفاف", text: "كمصورة زفاف، كنت بحاجة إلى وثائق قانونية احترافية. هذه القوالب مثالية وتحمي عملي بالكامل." }, { name: "Mark Jansen", role: "مصور تجاري", text: "لأعمال التصوير الخاصة بي، هذه الوثائق القانونية لا تقدر بثمن." }] },
  ko: { badge: "리뷰", title: "고객의 말", desc: "사진작가들이 우리 법적 문서를 신뢰하는 이유", reviews: [{ name: "Sophie van der Berg", role: "웨딩 사진작가", text: "웨딩 사진작가로서 전문 법적 문서가 필요했습니다. 이 템플릿은 완벽하고 제 작품을 완전히 보호합니다." }, { name: "Mark Jansen", role: "상업 사진작가", text: "제 사진 비즈니스를 위해 이 법적 문서는 금만큼 가치가 있습니다." }] },
  cs: { badge: "Recenze", title: "Co říkají naši zákazníci", desc: "Zjistěte, proč fotografové důvěřují našim právním dokumentům", reviews: [{ name: "Sophie van der Berg", role: "Svatební fotografka", text: "Jako svatební fotografka jsem potřebovala profesionální právní dokumenty. Tyto šablony jsou perfektní a plně chrání mou práci." }, { name: "Mark Jansen", role: "Komerční fotograf", text: "Pro mé fotografické podnikání jsou tyto právní dokumenty k nezaplacení." }] },
  hu: { badge: "Vélemények", title: "Mit mondanak ügyfeleink", desc: "Fedezze fel, miért bíznak fotósok jogi dokumentumainkban", reviews: [{ name: "Sophie van der Berg", role: "Esküvői fotós", text: "Esküvői fotósként professzionális jogi dokumentumokra volt szükségem. Ezek a sablonok tökéletesek és teljes mértékben védik a munkámat." }, { name: "Mark Jansen", role: "Kereskedelmi fotós", text: "Fotóvállalkozásomban ezek a jogi dokumentumok aranyat érnek." }] },
  uk: { badge: "Відгуки", title: "Що кажуть наші клієнти", desc: "Дізнайтеся, чому фотографи довіряють нашим юридичним документам", reviews: [{ name: "Sophie van der Berg", role: "Весільний фотограф", text: "Як весільний фотограф, мені потрібні були професійні юридичні документи. Ці шаблони ідеальні та повністю захищають мою роботу." }, { name: "Mark Jansen", role: "Комерційний фотограф", text: "Для мого фотобізнесу ці юридичні документи безцінні." }] },
  sk: { badge: "Recenzie", title: "Čo hovoria naši zákazníci", desc: "Zistite, prečo fotografovia dôverujú našim právnym dokumentom", reviews: [{ name: "Sophie van der Berg", role: "Svadobná fotografka", text: "Ako svadobná fotografka som potrebovala profesionálne právne dokumenty. Tieto šablóny sú perfektné a plne chránia moju prácu." }, { name: "Mark Jansen", role: "Komerčný fotograf", text: "Pre moje fotografické podnikanie sú tieto právne dokumenty na nezaplatenie." }] },
  hr: { badge: "Recenzije", title: "Što kažu naši klijenti", desc: "Otkrijte zašto fotografi vjeruju našim pravnim dokumentima", reviews: [{ name: "Sophie van der Berg", role: "Fotografkinja vjenčanja", text: "Kao fotografkinja vjenčanja, trebala sam profesionalne pravne dokumente. Ovi predlošci su savršeni i u potpunosti štite moj rad." }, { name: "Mark Jansen", role: "Komercijalni fotograf", text: "Za moj fotografski posao ovi pravni dokumenti vrijede zlata." }] },
  sr: { badge: "Рецензије", title: "Шта кажу наши клијенти", desc: "Откријте зашто фотографи верују нашим правним документима", reviews: [{ name: "Sophie van der Berg", role: "Фотограф венчања", text: "Као фотограф венчања, били су ми потребни професионални правни документи. Ови шаблони су савршени и потпуно штите мој рад." }, { name: "Mark Jansen", role: "Комерцијални фотограф", text: "За мој фотографски бизнис ови правни документи су непроцењиви." }] },
  sl: { badge: "Mnenja", title: "Kaj pravijo naše stranke", desc: "Odkrijte, zakaj fotografi zaupajo našim pravnim dokumentom", reviews: [{ name: "Sophie van der Berg", role: "Poročna fotografinja", text: "Kot poročna fotografinja sem potrebovala profesionalne pravne dokumente. Te predloge so popolne in v celoti ščitijo moje delo." }, { name: "Mark Jansen", role: "Komercialni fotograf", text: "Za mojo fotografsko dejavnost so ti pravni dokumenti neprecenljivi." }] },
  tr: { badge: "Yorumlar", title: "Müşterilerimiz ne diyor", desc: "Fotoğrafçıların yasal belgelerimize neden güvendiğini keşfedin", reviews: [{ name: "Sophie van der Berg", role: "Düğün fotoğrafçısı", text: "Düğün fotoğrafçısı olarak profesyonel yasal belgelere ihtiyacım vardı. Bu şablonlar mükemmel ve çalışmamı tamamen koruyor." }, { name: "Mark Jansen", role: "Ticari fotoğrafçı", text: "Fotoğrafçılık işim için bu yasal belgeler paha biçilmez." }] },
};

interface Props { lang: string; }

const ReviewsPhotographyMulti = ({ lang }: Props) => {
  const t = translations[lang];
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">{t.badge}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.desc}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{review.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPhotographyMulti;

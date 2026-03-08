import { Card, CardContent } from "@/components/ui/card";

type Lang = "en" | "nl" | "de" | "fr" | "es" | "it" | "pt" | "pl" | "tr" | "ar" | "hi" | "ja" | "zh" | "sv" | "no" | "da" | "fi" | "cs" | "el" | "ru" | "ro" | "bg" | "uk" | "hr" | "sk" | "sr" | "sl" | "ko" | "hu" | "th" | "vi" | "id" | "et" | "lv" | "lt" | "is" | "sq" | "mk" | "bs" | "lb" | "bn" | "ms";

interface MozData {
  title: string;
  desc: string;
  good: string;
  strong: string;
  premium: string;
}

const translations: Record<Lang, MozData> = {
  en: { title: "The Power of MOZ Domain Authority", desc: "MOZ Domain Authority (DA) is a score from 1-100 that predicts how well a website will rank in search engines. The higher the score, the more authority the domain has built through quality backlinks, age and reliability.", good: "Good Authority", strong: "Strong Authority", premium: "Premium Authority" },
  nl: { title: "De Kracht van MOZ Domeinautoriteit", desc: "MOZ Domain Authority (DA) is een score van 1-100 die voorspelt hoe goed een website zal scoren in zoekmachines. Hoe hoger de score, hoe meer autoriteit het domein heeft opgebouwd door kwaliteitsbacklinks, leeftijd en betrouwbaarheid.", good: "Goede Autoriteit", strong: "Sterke Autoriteit", premium: "Premium Autoriteit" },
  de: { title: "Die Kraft der MOZ Domain Authority", desc: "MOZ Domain Authority (DA) ist ein Score von 1-100, der vorhersagt, wie gut eine Website in Suchmaschinen ranken wird. Je höher der Score, desto mehr Autorität hat die Domain durch Qualitäts-Backlinks, Alter und Zuverlässigkeit aufgebaut.", good: "Gute Autorität", strong: "Starke Autorität", premium: "Premium Autorität" },
  fr: { title: "La Puissance de l'Autorité de Domaine MOZ", desc: "MOZ Domain Authority (DA) est un score de 1 à 100 qui prédit la performance d'un site web dans les moteurs de recherche. Plus le score est élevé, plus le domaine a construit d'autorité grâce à des backlinks de qualité, l'ancienneté et la fiabilité.", good: "Bonne Autorité", strong: "Forte Autorité", premium: "Autorité Premium" },
  es: { title: "El Poder de la Autoridad de Dominio MOZ", desc: "MOZ Domain Authority (DA) es una puntuación de 1 a 100 que predice qué tan bien se posicionará un sitio web en los motores de búsqueda. Cuanto mayor sea la puntuación, más autoridad ha construido el dominio a través de backlinks de calidad, antigüedad y fiabilidad.", good: "Buena Autoridad", strong: "Fuerte Autoridad", premium: "Autoridad Premium" },
  it: { title: "Il Potere della Domain Authority MOZ", desc: "MOZ Domain Authority (DA) è un punteggio da 1 a 100 che prevede quanto bene un sito web si classificherà nei motori di ricerca. Più alto è il punteggio, più autorità il dominio ha costruito attraverso backlink di qualità, età e affidabilità.", good: "Buona Autorità", strong: "Forte Autorità", premium: "Autorità Premium" },
  pt: { title: "O Poder da Autoridade de Domínio MOZ", desc: "MOZ Domain Authority (DA) é uma pontuação de 1 a 100 que prevê quão bem um site será classificado nos motores de busca. Quanto maior a pontuação, mais autoridade o domínio construiu através de backlinks de qualidade, idade e confiabilidade.", good: "Boa Autoridade", strong: "Forte Autoridade", premium: "Autoridade Premium" },
  pl: { title: "Siła MOZ Domain Authority", desc: "MOZ Domain Authority (DA) to wynik od 1 do 100, który przewiduje, jak dobrze strona internetowa będzie się pozycjonować w wyszukiwarkach. Im wyższy wynik, tym większy autorytet domena zbudowała dzięki jakościowym backlinkom, wiekowi i wiarygodności.", good: "Dobry Autorytet", strong: "Silny Autorytet", premium: "Premium Autorytet" },
  tr: { title: "MOZ Domain Authority'nin Gücü", desc: "MOZ Domain Authority (DA), bir web sitesinin arama motorlarında ne kadar iyi sıralanacağını tahmin eden 1-100 arası bir puandır. Puan ne kadar yüksekse, alan adı kaliteli geri bağlantılar, yaş ve güvenilirlik ile o kadar fazla otorite oluşturmuştur.", good: "İyi Otorite", strong: "Güçlü Otorite", premium: "Premium Otorite" },
  ar: { title: "قوة سلطة النطاق MOZ", desc: "سلطة النطاق MOZ (DA) هي نقاط من 1 إلى 100 تتنبأ بمدى جودة ترتيب موقع الويب في محركات البحث. كلما ارتفعت النقاط، زادت السلطة التي بناها النطاق من خلال الروابط الخلفية عالية الجودة والعمر والموثوقية.", good: "سلطة جيدة", strong: "سلطة قوية", premium: "سلطة متميزة" },
  hi: { title: "MOZ डोमेन अथॉरिटी की शक्ति", desc: "MOZ Domain Authority (DA) 1-100 का एक स्कोर है जो भविष्यवाणी करता है कि एक वेबसाइट सर्च इंजन में कितनी अच्छी रैंक करेगी। स्कोर जितना अधिक होगा, डोमेन ने गुणवत्ता बैकलिंक्स, उम्र और विश्वसनीयता के माध्यम से उतनी अधिक अथॉरिटी बनाई है।", good: "अच्छा अधिकार", strong: "मजबूत अधिकार", premium: "प्रीमियम अधिकार" },
  ja: { title: "MOZドメインオーソリティの力", desc: "MOZ Domain Authority (DA) は、ウェブサイトが検索エンジンでどれだけ上位にランクされるかを予測する1〜100のスコアです。スコアが高いほど、質の高いバックリンク、ドメインの年齢、信頼性を通じてより多くの権威を築いています。", good: "良い権威", strong: "強い権威", premium: "プレミアム権威" },
  zh: { title: "MOZ域名权威的力量", desc: "MOZ Domain Authority (DA) 是1-100的评分，预测网站在搜索引擎中的排名表现。分数越高，域名通过优质反向链接、域龄和可靠性积累的权威性越高。", good: "良好权威", strong: "强劲权威", premium: "顶级权威" },
  sv: { title: "Kraften i MOZ Domain Authority", desc: "MOZ Domain Authority (DA) är en poäng från 1-100 som förutsäger hur väl en webbplats kommer att ranka i sökmotorer. Ju högre poäng, desto mer auktoritet har domänen byggt upp genom kvalitetslänkar, ålder och tillförlitlighet.", good: "Bra Auktoritet", strong: "Stark Auktoritet", premium: "Premium Auktoritet" },
  no: { title: "Kraften i MOZ Domain Authority", desc: "MOZ Domain Authority (DA) er en poengsum fra 1-100 som forutsier hvor godt et nettsted vil rangere i søkemotorer. Jo høyere poengsum, desto mer autoritet har domenet bygget gjennom kvalitetslenker, alder og pålitelighet.", good: "God Autoritet", strong: "Sterk Autoritet", premium: "Premium Autoritet" },
  da: { title: "Kraften i MOZ Domain Authority", desc: "MOZ Domain Authority (DA) er en score fra 1-100, der forudsiger, hvor godt en hjemmeside vil rangere i søgemaskiner. Jo højere score, desto mere autoritet har domænet opbygget gennem kvalitetslinks, alder og pålidelighed.", good: "God Autoritet", strong: "Stærk Autoritet", premium: "Premium Autoritet" },
  fi: { title: "MOZ Domain Authorityn voima", desc: "MOZ Domain Authority (DA) on 1-100 pistemäärä, joka ennustaa kuinka hyvin verkkosivusto sijoittuu hakukoneissa. Mitä korkeampi pistemäärä, sitä enemmän auktoriteettia verkkotunnus on rakentanut laadukkaiden takalinkkien, iän ja luotettavuuden kautta.", good: "Hyvä Auktoriteetti", strong: "Vahva Auktoriteetti", premium: "Premium Auktoriteetti" },
  cs: { title: "Síla MOZ Domain Authority", desc: "MOZ Domain Authority (DA) je skóre od 1 do 100, které předpovídá, jak dobře se web umístí ve vyhledávačích. Čím vyšší skóre, tím více autority doména vybudovala prostřednictvím kvalitních zpětných odkazů, stáří a spolehlivosti.", good: "Dobrá Autorita", strong: "Silná Autorita", premium: "Premium Autorita" },
  el: { title: "Η Δύναμη του MOZ Domain Authority", desc: "Το MOZ Domain Authority (DA) είναι μια βαθμολογία από 1-100 που προβλέπει πόσο καλά θα κατατάσσεται ένας ιστότοπος στις μηχανές αναζήτησης. Όσο υψηλότερη η βαθμολογία, τόσο περισσότερη αυθεντία έχει χτίσει το domain μέσω ποιοτικών backlinks, ηλικίας και αξιοπιστίας.", good: "Καλή Αυθεντία", strong: "Ισχυρή Αυθεντία", premium: "Premium Αυθεντία" },
  ru: { title: "Сила MOZ Domain Authority", desc: "MOZ Domain Authority (DA) — это оценка от 1 до 100, которая предсказывает, насколько хорошо сайт будет ранжироваться в поисковых системах. Чем выше оценка, тем больше авторитета домен накопил благодаря качественным обратным ссылкам, возрасту и надёжности.", good: "Хороший Авторитет", strong: "Сильный Авторитет", premium: "Премиум Авторитет" },
  ro: { title: "Puterea MOZ Domain Authority", desc: "MOZ Domain Authority (DA) este un scor de la 1 la 100 care prezice cât de bine se va clasifica un site web în motoarele de căutare. Cu cât scorul este mai mare, cu atât mai multă autoritate a construit domeniul prin backlink-uri de calitate, vârstă și fiabilitate.", good: "Autoritate Bună", strong: "Autoritate Puternică", premium: "Autoritate Premium" },
  bg: { title: "Силата на MOZ Domain Authority", desc: "MOZ Domain Authority (DA) е резултат от 1 до 100, който предвижда колко добре уебсайт ще се класира в търсачките. Колкото по-висок е резултатът, толкова повече авторитет е изградил домейнът чрез качествени обратни връзки, възраст и надеждност.", good: "Добър Авторитет", strong: "Силен Авторитет", premium: "Премиум Авторитет" },
  uk: { title: "Сила MOZ Domain Authority", desc: "MOZ Domain Authority (DA) — це оцінка від 1 до 100, яка прогнозує, наскільки добре сайт буде ранжуватися в пошукових системах. Чим вища оцінка, тим більше авторитету домен накопичив завдяки якісним зворотним посиланням, віку та надійності.", good: "Хороший Авторитет", strong: "Сильний Авторитет", premium: "Преміум Авторитет" },
  hr: { title: "Snaga MOZ Domain Authorityja", desc: "MOZ Domain Authority (DA) je ocjena od 1 do 100 koja predviđa koliko će se dobro web stranica pozicionirati u tražilicama. Što je veća ocjena, to je više autoriteta domena izgradila kroz kvalitetne povratne veze, starost i pouzdanost.", good: "Dobar Autoritet", strong: "Jak Autoritet", premium: "Premium Autoritet" },
  sk: { title: "Sila MOZ Domain Authority", desc: "MOZ Domain Authority (DA) je skóre od 1 do 100, ktoré predpovedá, ako dobre sa web stránka umiestni vo vyhľadávačoch. Čím vyššie skóre, tým väčšiu autoritu doména vybudovala prostredníctvom kvalitných spätných odkazov, veku a spoľahlivosti.", good: "Dobrá Autorita", strong: "Silná Autorita", premium: "Premium Autorita" },
  sr: { title: "Snaga MOZ Domain Authority-ja", desc: "MOZ Domain Authority (DA) je ocena od 1 do 100 koja predviđa koliko će se dobro sajt pozicionirati u pretraživačima. Što je veća ocena, to je više autoriteta domen izgradio kroz kvalitetne povratne linkove, starost i pouzdanost.", good: "Dobar Autoritet", strong: "Jak Autoritet", premium: "Premium Autoritet" },
  sl: { title: "Moč MOZ Domain Authority", desc: "MOZ Domain Authority (DA) je ocena od 1 do 100, ki napoveduje, kako dobro se bo spletna stran uvrstila v iskalnike. Višja kot je ocena, več avtoritete je domena zgradila s kakovostnimi povratnimi povezavami, starostjo in zanesljivostjo.", good: "Dobra Avtoriteta", strong: "Močna Avtoriteta", premium: "Premium Avtoriteta" },
  ko: { title: "MOZ 도메인 권위의 힘", desc: "MOZ Domain Authority (DA)는 웹사이트가 검색 엔진에서 얼마나 잘 순위를 매길지 예측하는 1-100 점수입니다. 점수가 높을수록 품질 백링크, 도메인 연령 및 신뢰성을 통해 더 많은 권위를 구축한 것입니다.", good: "좋은 권위", strong: "강한 권위", premium: "프리미엄 권위" },
  hu: { title: "A MOZ Domain Authority ereje", desc: "A MOZ Domain Authority (DA) egy 1-100 közötti pontszám, amely előrejelzi, mennyire jól fog rangsorolni egy weboldal a keresőmotorokban. Minél magasabb a pontszám, annál nagyobb tekintélyt épített ki a domain minőségi visszahivatkozások, kor és megbízhatóság révén.", good: "Jó Tekintély", strong: "Erős Tekintély", premium: "Prémium Tekintély" },
  th: { title: "พลังของ MOZ Domain Authority", desc: "MOZ Domain Authority (DA) เป็นคะแนนตั้งแต่ 1-100 ที่ทำนายว่าเว็บไซต์จะจัดอันดับได้ดีแค่ไหนในเครื่องมือค้นหา ยิ่งคะแนนสูง ยิ่งแสดงว่าโดเมนสร้างความน่าเชื่อถือผ่านแบ็คลิงก์คุณภาพ อายุ และความน่าเชื่อถือมากขึ้น", good: "อำนาจดี", strong: "อำนาจแข็งแกร่ง", premium: "อำนาจพรีเมียม" },
  vi: { title: "Sức mạnh của MOZ Domain Authority", desc: "MOZ Domain Authority (DA) là điểm từ 1-100 dự đoán mức độ xếp hạng của trang web trong công cụ tìm kiếm. Điểm càng cao, tên miền càng xây dựng được nhiều uy tín thông qua backlink chất lượng, tuổi đời và độ tin cậy.", good: "Uy Tín Tốt", strong: "Uy Tín Mạnh", premium: "Uy Tín Cao Cấp" },
  id: { title: "Kekuatan MOZ Domain Authority", desc: "MOZ Domain Authority (DA) adalah skor dari 1-100 yang memprediksi seberapa baik peringkat website di mesin pencari. Semakin tinggi skor, semakin banyak otoritas yang telah dibangun domain melalui backlink berkualitas, usia dan keandalan.", good: "Otoritas Baik", strong: "Otoritas Kuat", premium: "Otoritas Premium" },
  et: { title: "MOZ Domain Authority jõud", desc: "MOZ Domain Authority (DA) on skoor 1-100, mis ennustab, kui hästi veebisait otsingumootorites positsioneerub. Mida kõrgem on skoor, seda rohkem autoriteeti on domeen üles ehitanud kvaliteetsete tagasiviidete, vanuse ja usaldusväärsuse kaudu.", good: "Hea Autoriteet", strong: "Tugev Autoriteet", premium: "Premium Autoriteet" },
  lv: { title: "MOZ Domain Authority spēks", desc: "MOZ Domain Authority (DA) ir vērtējums no 1 līdz 100, kas prognozē, cik labi tīmekļa vietne tiks novērtēta meklētājprogrammās. Jo augstāks vērtējums, jo vairāk autoritātes domēns ir uzbūvējis caur kvalitatīvām atpakaļsaitēm, vecumu un uzticamību.", good: "Laba Autoritāte", strong: "Spēcīga Autoritāte", premium: "Premium Autoritāte" },
  lt: { title: "MOZ Domain Authority galia", desc: "MOZ Domain Authority (DA) yra balas nuo 1 iki 100, kuris numato, kaip gerai svetainė bus reitinguojama paieškos varikliuose. Kuo aukštesnis balas, tuo daugiau autoriteto domenas sukūrė per kokybiškus atgalinius nuorodas, amžių ir patikimumą.", good: "Geras Autoritetas", strong: "Stiprus Autoritetas", premium: "Premium Autoritetas" },
  is: { title: "Kraftur MOZ Domain Authority", desc: "MOZ Domain Authority (DA) er stig frá 1-100 sem spáir hversu vel vefsíða mun raðast í leitarvélum. Því hærra sem stigið er, því meiri heimild hefur lénið byggt upp með gæða bakvísunum, aldri og áreiðanleika.", good: "Góð Heimild", strong: "Sterk Heimild", premium: "Premium Heimild" },
  sq: { title: "Fuqia e MOZ Domain Authority", desc: "MOZ Domain Authority (DA) është një rezultat nga 1-100 që parashikon sa mirë do të renditet një faqe interneti në motorët e kërkimit. Sa më i lartë rezultati, aq më shumë autoritet ka ndërtuar domain-i përmes backlink-eve cilësore, moshës dhe besueshmërisë.", good: "Autoritet i Mirë", strong: "Autoritet i Fortë", premium: "Autoritet Premium" },
  mk: { title: "Моќта на MOZ Domain Authority", desc: "MOZ Domain Authority (DA) е резултат од 1 до 100 кој предвидува колку добро ќе се рангира веб-страница во пребарувачите. Колку е повисок резултатот, толку повеќе авторитет доменот изградил преку квалитетни повратни врски, старост и доверливост.", good: "Добар Авторитет", strong: "Силен Авторитет", premium: "Премиум Авторитет" },
  bs: { title: "Snaga MOZ Domain Authorityja", desc: "MOZ Domain Authority (DA) je ocjena od 1 do 100 koja predviđa koliko će se dobro web stranica pozicionirati u pretraživačima. Što je veća ocjena, to je više autoriteta domena izgradila kroz kvalitetne povratne linkove, starost i pouzdanost.", good: "Dobar Autoritet", strong: "Jak Autoritet", premium: "Premium Autoritet" },
  lb: { title: "D'Kraaft vun MOZ Domain Authority", desc: "MOZ Domain Authority (DA) ass e Score vun 1-100 dee virausseet wéi gutt eng Websäit an de Sichmotoren ranken wäert. Wat méi héich de Score, wat méi Autoriteit den Domain opgebaut huet duerch Qualitéitsbacklinks, Alter an Zouverlässegkeet.", good: "Gutt Autoritéit", strong: "Staark Autoritéit", premium: "Premium Autoritéit" },
  bn: { title: "MOZ ডোমেইন অথরিটির শক্তি", desc: "MOZ Domain Authority (DA) হল 1-100 এর একটি স্কোর যা ভবিষ্যদ্বাণী করে একটি ওয়েবসাইট সার্চ ইঞ্জিনে কতটা ভালো র‍্যাঙ্ক করবে। স্কোর যত বেশি, ডোমেইন মানসম্পন্ন ব্যাকলিংক, বয়স এবং নির্ভরযোগ্যতার মাধ্যমে তত বেশি কর্তৃত্ব তৈরি করেছে।", good: "ভালো কর্তৃত্ব", strong: "শক্তিশালী কর্তৃত্ব", premium: "প্রিমিয়াম কর্তৃত্ব" },
  ms: { title: "Kuasa MOZ Domain Authority", desc: "MOZ Domain Authority (DA) ialah skor dari 1-100 yang meramalkan sejauh mana sesebuah laman web akan mendapat kedudukan dalam enjin carian. Semakin tinggi skor, semakin banyak autoriti yang telah dibina oleh domain melalui pautan balik berkualiti, usia dan kebolehpercayaan.", good: "Autoriti Baik", strong: "Autoriti Kuat", premium: "Autoriti Premium" },
};

const MozExplanationCard = ({ lang }: { lang: string }) => {
  const t = translations[lang as Lang] || translations.en;

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <Card className="bg-slate-950 border-amber-500/30">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-4">{t.title}</h3>
          <p className="text-slate-300 leading-relaxed mb-6">{t.desc}</p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="rounded-lg bg-black border border-cyan-500/50 p-4 text-center">
              <div className="text-xl font-bold text-cyan-400 mb-1">DA 20-25</div>
              <div className="text-sm font-medium text-white">{t.good}</div>
            </div>
            <div className="rounded-lg bg-black border border-yellow-500/50 p-4 text-center">
              <div className="text-xl font-bold text-yellow-400 mb-1">DA 25-30</div>
              <div className="text-sm font-medium text-white">{t.strong}</div>
            </div>
            <div className="rounded-lg bg-black border border-green-500/50 p-4 text-center">
              <div className="text-xl font-bold text-green-400 mb-1">DA 30+</div>
              <div className="text-sm font-medium text-white">{t.premium}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MozExplanationCard;

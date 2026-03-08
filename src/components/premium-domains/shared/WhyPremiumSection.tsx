import { TrendingUp, Shield, Target, Zap, Globe, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import MozExplanationCard from "./MozExplanationCard";

type Lang = "en" | "nl" | "de" | "fr" | "es" | "it" | "pt" | "pl" | "tr" | "ar" | "hi" | "ja" | "zh" | "sv" | "no" | "da" | "fi" | "cs" | "el" | "ru" | "ro" | "bg" | "uk" | "hr" | "sk" | "sr" | "sl" | "ko" | "hu" | "th" | "vi" | "id" | "et" | "lv" | "lt" | "is" | "sq" | "mk" | "bs" | "lb" | "bn" | "ms";

interface WhyCard { title: string; desc: string }
interface WhyData { badge: string; title: string; sub: string; cards: WhyCard[] }

const translations: Record<Lang, WhyData> = {
  en: { badge: "Strategic Advantage", title: "Why Premium Domain Names?", sub: "Premium domain names with high MOZ authority are a strategic investment that gives you an enormous advantage in search results.", cards: [
    { title: "Faster Rankings in Google", desc: "Domains with existing authority rank faster than new domains. Google trusts websites with a proven track record." },
    { title: "More Trust from Google", desc: "A domain with years of history and quality backlinks is seen by Google as more reliable and gets higher rankings." },
    { title: "Higher Click-Through Rates (CTR)", desc: "Premium domain names inspire trust in users, leading to higher click-through rates in search results and advertisements." },
    { title: "Immediate SEO Advantage", desc: "Instead of waiting years to build authority, you immediately benefit from the domain's existing SEO value." },
    { title: "Direct Type-In Traffic", desc: "Memorable premium domain names generate direct traffic from users who type the domain directly into their browser." },
    { title: "Sustainable SEO Investment", desc: "A premium domain is an asset that increases in value as your online presence grows and authority increases." },
  ]},
  nl: { badge: "Strategisch Voordeel", title: "Waarom Premium Domeinnamen?", sub: "Premium domeinnamen met hoge MOZ autoriteit zijn een strategische investering die u een enorm voordeel geeft in zoekresultaten.", cards: [
    { title: "Sneller Ranken in Google", desc: "Domeinen met bestaande autoriteit ranken sneller dan nieuwe domeinen. Google vertrouwt websites met een bewezen staat van dienst." },
    { title: "Meer Vertrouwen van Google", desc: "Een domein met jarenlange geschiedenis en kwaliteitsbacklinks wordt door Google als betrouwbaarder beschouwd en krijgt hogere rankings." },
    { title: "Hogere Click-Through Rates (CTR)", desc: "Premium domeinnamen wekken vertrouwen bij gebruikers, wat leidt tot hogere doorklikpercentages in zoekresultaten en advertenties." },
    { title: "Direct SEO Voordeel", desc: "In plaats van jaren te wachten om autoriteit op te bouwen, profiteert u direct van de bestaande SEO-waarde van het domein." },
    { title: "Direct Type-In Verkeer", desc: "Memorabele premium domeinnamen genereren direct verkeer van gebruikers die het domein rechtstreeks in hun browser typen." },
    { title: "Duurzame SEO Investering", desc: "Een premium domein is een asset dat in waarde stijgt naarmate uw online aanwezigheid groeit en autoriteit toeneemt." },
  ]},
  de: { badge: "Strategischer Vorteil", title: "Warum Premium-Domainnamen?", sub: "Premium-Domainnamen mit hoher MOZ-Autorität sind eine strategische Investition, die Ihnen einen enormen Vorteil in den Suchergebnissen verschafft.", cards: [
    { title: "Schnellere Rankings bei Google", desc: "Domains mit bestehender Autorität ranken schneller als neue Domains. Google vertraut Websites mit einer bewährten Erfolgsbilanz." },
    { title: "Mehr Vertrauen von Google", desc: "Eine Domain mit jahrelanger Geschichte und Qualitäts-Backlinks wird von Google als zuverlässiger angesehen und erhält höhere Rankings." },
    { title: "Höhere Klickraten (CTR)", desc: "Premium-Domainnamen wecken Vertrauen bei Nutzern, was zu höheren Klickraten in Suchergebnissen und Anzeigen führt." },
    { title: "Sofortiger SEO-Vorteil", desc: "Anstatt Jahre zu warten, um Autorität aufzubauen, profitieren Sie sofort vom bestehenden SEO-Wert der Domain." },
    { title: "Direkter Type-In-Traffic", desc: "Einprägsame Premium-Domainnamen generieren direkten Traffic von Nutzern, die die Domain direkt in ihren Browser eingeben." },
    { title: "Nachhaltige SEO-Investition", desc: "Eine Premium-Domain ist ein Asset, das an Wert gewinnt, wenn Ihre Online-Präsenz wächst und die Autorität zunimmt." },
  ]},
  fr: { badge: "Avantage Stratégique", title: "Pourquoi des Noms de Domaine Premium ?", sub: "Les noms de domaine premium avec une haute autorité MOZ sont un investissement stratégique qui vous donne un énorme avantage dans les résultats de recherche.", cards: [
    { title: "Classement Plus Rapide sur Google", desc: "Les domaines avec une autorité existante se classent plus rapidement que les nouveaux domaines. Google fait confiance aux sites avec un historique prouvé." },
    { title: "Plus de Confiance de Google", desc: "Un domaine avec des années d'histoire et des backlinks de qualité est considéré par Google comme plus fiable et obtient des classements plus élevés." },
    { title: "Taux de Clics Plus Élevés (CTR)", desc: "Les noms de domaine premium inspirent confiance aux utilisateurs, ce qui entraîne des taux de clics plus élevés dans les résultats de recherche." },
    { title: "Avantage SEO Immédiat", desc: "Au lieu d'attendre des années pour construire l'autorité, vous bénéficiez immédiatement de la valeur SEO existante du domaine." },
    { title: "Trafic Direct Type-In", desc: "Les noms de domaine premium mémorables génèrent du trafic direct des utilisateurs qui tapent le domaine directement dans leur navigateur." },
    { title: "Investissement SEO Durable", desc: "Un domaine premium est un actif qui prend de la valeur à mesure que votre présence en ligne grandit et que l'autorité augmente." },
  ]},
  es: { badge: "Ventaja Estratégica", title: "¿Por Qué Nombres de Dominio Premium?", sub: "Los nombres de dominio premium con alta autoridad MOZ son una inversión estratégica que le da una enorme ventaja en los resultados de búsqueda.", cards: [
    { title: "Rankings Más Rápidos en Google", desc: "Los dominios con autoridad existente se posicionan más rápido que los nuevos. Google confía en sitios web con un historial probado." },
    { title: "Más Confianza de Google", desc: "Un dominio con años de historia y backlinks de calidad es visto por Google como más confiable y obtiene rankings más altos." },
    { title: "Mayores Tasas de Clics (CTR)", desc: "Los nombres de dominio premium inspiran confianza en los usuarios, lo que lleva a mayores tasas de clics en los resultados de búsqueda." },
    { title: "Ventaja SEO Inmediata", desc: "En lugar de esperar años para construir autoridad, se beneficia inmediatamente del valor SEO existente del dominio." },
    { title: "Tráfico Directo Type-In", desc: "Los nombres de dominio premium memorables generan tráfico directo de usuarios que escriben el dominio directamente en su navegador." },
    { title: "Inversión SEO Sostenible", desc: "Un dominio premium es un activo que aumenta de valor a medida que crece su presencia en línea y aumenta la autoridad." },
  ]},
  it: { badge: "Vantaggio Strategico", title: "Perché Nomi di Dominio Premium?", sub: "I nomi di dominio premium con alta autorità MOZ sono un investimento strategico che offre un enorme vantaggio nei risultati di ricerca.", cards: [
    { title: "Posizionamento Più Veloce su Google", desc: "I domini con autorità esistente si posizionano più velocemente dei nuovi domini. Google si fida dei siti web con un track record comprovato." },
    { title: "Più Fiducia da Google", desc: "Un dominio con anni di storia e backlink di qualità è visto da Google come più affidabile e ottiene posizionamenti più alti." },
    { title: "Tassi di Clic Più Alti (CTR)", desc: "I nomi di dominio premium ispirano fiducia negli utenti, portando a tassi di clic più elevati nei risultati di ricerca." },
    { title: "Vantaggio SEO Immediato", desc: "Invece di aspettare anni per costruire autorità, benefici immediatamente del valore SEO esistente del dominio." },
    { title: "Traffico Diretto Type-In", desc: "I nomi di dominio premium memorabili generano traffico diretto dagli utenti che digitano il dominio direttamente nel browser." },
    { title: "Investimento SEO Sostenibile", desc: "Un dominio premium è un asset che aumenta di valore man mano che la tua presenza online cresce e l'autorità aumenta." },
  ]},
  pt: { badge: "Vantagem Estratégica", title: "Por Que Nomes de Domínio Premium?", sub: "Nomes de domínio premium com alta autoridade MOZ são um investimento estratégico que lhe dá uma enorme vantagem nos resultados de pesquisa.", cards: [
    { title: "Rankings Mais Rápidos no Google", desc: "Domínios com autoridade existente classificam-se mais rápido que novos domínios. O Google confia em sites com histórico comprovado." },
    { title: "Mais Confiança do Google", desc: "Um domínio com anos de história e backlinks de qualidade é visto pelo Google como mais confiável e obtém rankings mais altos." },
    { title: "Taxas de Clique Mais Altas (CTR)", desc: "Nomes de domínio premium inspiram confiança nos utilizadores, levando a taxas de clique mais altas nos resultados de pesquisa." },
    { title: "Vantagem SEO Imediata", desc: "Em vez de esperar anos para construir autoridade, beneficia imediatamente do valor SEO existente do domínio." },
    { title: "Tráfego Direto Type-In", desc: "Nomes de domínio premium memoráveis geram tráfego direto de utilizadores que digitam o domínio diretamente no navegador." },
    { title: "Investimento SEO Sustentável", desc: "Um domínio premium é um ativo que aumenta de valor à medida que a sua presença online cresce e a autoridade aumenta." },
  ]},
  pl: { badge: "Strategiczna Przewaga", title: "Dlaczego Domeny Premium?", sub: "Domeny premium z wysokim autorytetem MOZ to strategiczna inwestycja dająca ogromną przewagę w wynikach wyszukiwania.", cards: [
    { title: "Szybsze Pozycjonowanie w Google", desc: "Domeny z istniejącym autorytetem pozycjonują się szybciej niż nowe domeny. Google ufa stronom z udokumentowaną historią." },
    { title: "Więcej Zaufania od Google", desc: "Domena z wieloletnią historią i jakościowymi backlinkami jest postrzegana przez Google jako bardziej wiarygodna." },
    { title: "Wyższy Współczynnik Klikalności (CTR)", desc: "Domeny premium budzą zaufanie użytkowników, prowadząc do wyższego współczynnika klikalności w wynikach wyszukiwania." },
    { title: "Natychmiastowa Przewaga SEO", desc: "Zamiast czekać latami na budowanie autorytetu, natychmiast korzystasz z istniejącej wartości SEO domeny." },
    { title: "Bezpośredni Ruch Type-In", desc: "Zapamiętywalne domeny premium generują bezpośredni ruch od użytkowników wpisujących domenę w przeglądarkę." },
    { title: "Trwała Inwestycja SEO", desc: "Domena premium to aktywo, które zyskuje na wartości wraz z rozwojem Twojej obecności online." },
  ]},
  tr: { badge: "Stratejik Avantaj", title: "Neden Premium Alan Adları?", sub: "Yüksek MOZ otoritesine sahip premium alan adları, arama sonuçlarında muazzam bir avantaj sağlayan stratejik bir yatırımdır.", cards: [
    { title: "Google'da Daha Hızlı Sıralama", desc: "Mevcut otoriteye sahip alan adları yeni alan adlarından daha hızlı sıralanır." },
    { title: "Google'dan Daha Fazla Güven", desc: "Yıllarca geçmişe ve kaliteli geri bağlantılara sahip bir alan adı Google tarafından daha güvenilir olarak görülür." },
    { title: "Daha Yüksek Tıklama Oranları (CTR)", desc: "Premium alan adları kullanıcılarda güven uyandırır ve daha yüksek tıklama oranlarına yol açar." },
    { title: "Anında SEO Avantajı", desc: "Otorite oluşturmak için yıllarca beklemek yerine, mevcut SEO değerinden hemen yararlanırsınız." },
    { title: "Doğrudan Type-In Trafiği", desc: "Akılda kalıcı premium alan adları, doğrudan tarayıcıya yazan kullanıcılardan trafik oluşturur." },
    { title: "Sürdürülebilir SEO Yatırımı", desc: "Premium alan adı, çevrimiçi varlığınız büyüdükçe değeri artan bir varlıktır." },
  ]},
  ar: { badge: "ميزة استراتيجية", title: "لماذا أسماء النطاقات المميزة؟", sub: "أسماء النطاقات المميزة ذات سلطة MOZ العالية هي استثمار استراتيجي يمنحك ميزة هائلة في نتائج البحث.", cards: [
    { title: "ترتيب أسرع في Google", desc: "النطاقات ذات السلطة الموجودة تحتل مرتبة أسرع من النطاقات الجديدة." },
    { title: "المزيد من الثقة من Google", desc: "نطاق بسنوات من التاريخ وروابط خلفية عالية الجودة يُعتبر أكثر موثوقية." },
    { title: "معدلات نقر أعلى (CTR)", desc: "أسماء النطاقات المميزة تلهم الثقة لدى المستخدمين مما يؤدي لمعدلات نقر أعلى." },
    { title: "ميزة SEO فورية", desc: "بدلاً من الانتظار سنوات لبناء السلطة، تستفيد فوراً من قيمة SEO الحالية." },
    { title: "حركة مرور مباشرة", desc: "أسماء النطاقات المميزة التي لا تُنسى تولد حركة مرور مباشرة." },
    { title: "استثمار SEO مستدام", desc: "النطاق المميز هو أصل يزداد قيمة مع نمو تواجدك عبر الإنترنت." },
  ]},
  hi: { badge: "रणनीतिक लाभ", title: "प्रीमियम डोमेन नाम क्यों?", sub: "उच्च MOZ अथॉरिटी वाले प्रीमियम डोमेन नाम एक रणनीतिक निवेश हैं जो आपको खोज परिणामों में भारी लाभ देते हैं।", cards: [
    { title: "Google में तेज़ रैंकिंग", desc: "मौजूदा अथॉरिटी वाले डोमेन नए डोमेन से तेज़ रैंक करते हैं।" },
    { title: "Google से अधिक विश्वास", desc: "वर्षों के इतिहास और गुणवत्ता बैकलिंक वाला डोमेन अधिक विश्वसनीय माना जाता है।" },
    { title: "उच्च क्लिक-थ्रू दरें (CTR)", desc: "प्रीमियम डोमेन नाम उपयोगकर्ताओं में विश्वास जगाते हैं।" },
    { title: "तत्काल SEO लाभ", desc: "अथॉरिटी बनाने के लिए वर्षों इंतजार करने के बजाय, आप तुरंत लाभ उठाते हैं।" },
    { title: "सीधा Type-In ट्रैफ़िक", desc: "यादगार प्रीमियम डोमेन नाम सीधा ट्रैफ़िक उत्पन्न करते हैं।" },
    { title: "टिकाऊ SEO निवेश", desc: "प्रीमियम डोमेन एक संपत्ति है जो मूल्य में बढ़ती है।" },
  ]},
  ja: { badge: "戦略的優位性", title: "なぜプレミアムドメイン名？", sub: "高いMOZオーソリティを持つプレミアムドメイン名は、検索結果で大きな優位性をもたらす戦略的投資です。", cards: [
    { title: "Googleでの高速ランキング", desc: "既存のオーソリティを持つドメインは新しいドメインよりも速くランクインします。" },
    { title: "Googleからの信頼向上", desc: "年数の歴史と質の高いバックリンクを持つドメインはGoogleからより信頼されます。" },
    { title: "高いクリック率（CTR）", desc: "プレミアムドメイン名はユーザーに信頼を与え、高いクリック率につながります。" },
    { title: "即座のSEOアドバンテージ", desc: "オーソリティ構築に何年も待つ代わりに、既存のSEO価値を即座に活用できます。" },
    { title: "ダイレクトType-Inトラフィック", desc: "記憶に残るプレミアムドメイン名はブラウザ直接入力からのトラフィックを生成します。" },
    { title: "持続可能なSEO投資", desc: "プレミアムドメインはオンラインプレゼンスの成長とともに価値が増す資産です。" },
  ]},
  zh: { badge: "战略优势", title: "为什么选择优质域名？", sub: "具有高MOZ权威的优质域名是一项战略投资，能在搜索结果中给您带来巨大优势。", cards: [
    { title: "在Google中更快排名", desc: "具有现有权威的域名比新域名排名更快。" },
    { title: "获得Google更多信任", desc: "拥有多年历史和优质反向链接的域名被Google视为更可靠。" },
    { title: "更高的点击率（CTR）", desc: "优质域名激发用户信任，带来更高的点击率。" },
    { title: "即时SEO优势", desc: "无需等待数年建立权威，立即受益于域名现有的SEO价值。" },
    { title: "直接输入流量", desc: "令人难忘的优质域名产生直接输入浏览器的流量。" },
    { title: "可持续的SEO投资", desc: "优质域名是随着在线业务增长而增值的资产。" },
  ]},
  sv: { badge: "Strategisk Fördel", title: "Varför Premium Domännamn?", sub: "Premium domännamn med hög MOZ-auktoritet är en strategisk investering som ger dig en enorm fördel i sökresultaten.", cards: [
    { title: "Snabbare Ranking i Google", desc: "Domäner med befintlig auktoritet rankar snabbare än nya domäner." },
    { title: "Mer Förtroende från Google", desc: "En domän med års historia och kvalitetslänkar ses som mer pålitlig av Google." },
    { title: "Högre Klickfrekvens (CTR)", desc: "Premium domännamn inspirerar förtroende hos användare och leder till högre klickfrekvens." },
    { title: "Omedelbar SEO-Fördel", desc: "Istället för att vänta år på att bygga auktoritet drar du omedelbart nytta av befintligt SEO-värde." },
    { title: "Direkt Type-In-Trafik", desc: "Minnesvärda premium domännamn genererar direkt trafik från användare som skriver domänen i webbläsaren." },
    { title: "Hållbar SEO-Investering", desc: "En premium domän är en tillgång som ökar i värde när din online-närvaro växer." },
  ]},
  no: { badge: "Strategisk Fordel", title: "Hvorfor Premium Domenenavn?", sub: "Premium domenenavn med høy MOZ-autoritet er en strategisk investering som gir deg en enorm fordel i søkeresultatene.", cards: [
    { title: "Raskere Rangering i Google", desc: "Domener med eksisterende autoritet rangerer raskere enn nye domener." },
    { title: "Mer Tillit fra Google", desc: "Et domene med års historie og kvalitetslenker anses som mer pålitelig av Google." },
    { title: "Høyere Klikkfrekvens (CTR)", desc: "Premium domenenavn inspirerer tillit hos brukere og fører til høyere klikkfrekvens." },
    { title: "Umiddelbar SEO-Fordel", desc: "I stedet for å vente i årevis drar du umiddelbart nytte av eksisterende SEO-verdi." },
    { title: "Direkte Type-In-Trafikk", desc: "Minneverdige premium domenenavn genererer direkte trafikk fra brukere som skriver domenet i nettleseren." },
    { title: "Bærekraftig SEO-Investering", desc: "Et premium domene er en eiendel som øker i verdi når din online tilstedeværelse vokser." },
  ]},
  da: { badge: "Strategisk Fordel", title: "Hvorfor Premium Domænenavne?", sub: "Premium domænenavne med høj MOZ-autoritet er en strategisk investering der giver dig en enorm fordel i søgeresultaterne.", cards: [
    { title: "Hurtigere Rangering i Google", desc: "Domæner med eksisterende autoritet rangerer hurtigere end nye domæner." },
    { title: "Mere Tillid fra Google", desc: "Et domæne med års historie og kvalitetslinks anses for mere pålideligt af Google." },
    { title: "Højere Klikrate (CTR)", desc: "Premium domænenavne skaber tillid hos brugerne og fører til højere klikrater." },
    { title: "Øjeblikkelig SEO-Fordel", desc: "I stedet for at vente i årevis drager du øjeblikkeligt fordel af eksisterende SEO-værdi." },
    { title: "Direkte Type-In Trafik", desc: "Mindeværdige premium domænenavne genererer direkte trafik fra brugere der skriver domænet i browseren." },
    { title: "Bæredygtig SEO-Investering", desc: "Et premium domæne er et aktiv der stiger i værdi efterhånden som din online tilstedeværelse vokser." },
  ]},
  fi: { badge: "Strateginen Etu", title: "Miksi Premium-Verkkotunnukset?", sub: "Korkean MOZ-auktoriteetin premium-verkkotunnukset ovat strateginen investointi, joka antaa valtavan edun hakutuloksissa.", cards: [
    { title: "Nopeampi Sijoittuminen Googlessa", desc: "Olemassa olevan auktoriteetin verkkotunnukset sijoittuvat nopeammin kuin uudet." },
    { title: "Enemmän Luottamusta Googlelta", desc: "Vuosien historiaa ja laadukkaita takalinkkejä omaava verkkotunnus nähdään luotettavampana." },
    { title: "Korkeampi Klikkausprosentti (CTR)", desc: "Premium-verkkotunnukset herättävät luottamusta käyttäjissä ja johtavat korkeampiin klikkausprosentteihin." },
    { title: "Välitön SEO-Etu", desc: "Vuosien auktoriteetin rakentamisen sijaan hyödyt heti olemassa olevasta SEO-arvosta." },
    { title: "Suora Type-In-Liikenne", desc: "Mieleenpainuvat premium-verkkotunnukset tuottavat suoraa liikennettä käyttäjiltä jotka kirjoittavat osoitteen selaimeen." },
    { title: "Kestävä SEO-Investointi", desc: "Premium-verkkotunnus on omaisuuserä, jonka arvo kasvaa online-näkyvyytesi kasvaessa." },
  ]},
  cs: { badge: "Strategická Výhoda", title: "Proč Prémiové Domény?", sub: "Prémiové domény s vysokou MOZ autoritou jsou strategickou investicí, která vám dává obrovskou výhodu ve výsledcích vyhledávání.", cards: [
    { title: "Rychlejší Pozice v Google", desc: "Domény s existující autoritou se umisťují rychleji než nové domény." },
    { title: "Větší Důvěra od Google", desc: "Doména s letitou historií a kvalitními zpětnými odkazy je Googlem vnímána jako spolehlivější." },
    { title: "Vyšší Míra Prokliku (CTR)", desc: "Prémiové domény vzbuzují důvěru u uživatelů a vedou k vyšší míře prokliku." },
    { title: "Okamžitá SEO Výhoda", desc: "Místo čekání roky na budování autority okamžitě těžíte ze stávající SEO hodnoty." },
    { title: "Přímý Type-In Provoz", desc: "Zapamatovatelné prémiové domény generují přímý provoz od uživatelů zadávajících doménu do prohlížeče." },
    { title: "Udržitelná SEO Investice", desc: "Prémiová doména je aktivum, které roste na hodnotě s růstem vaší online přítomnosti." },
  ]},
  el: { badge: "Στρατηγικό Πλεονέκτημα", title: "Γιατί Premium Domain Names;", sub: "Τα premium domain names με υψηλή αυθεντία MOZ είναι μια στρατηγική επένδυση που σας δίνει τεράστιο πλεονέκτημα στα αποτελέσματα αναζήτησης.", cards: [
    { title: "Ταχύτερη Κατάταξη στο Google", desc: "Τα domains με υπάρχουσα αυθεντία κατατάσσονται ταχύτερα από τα νέα domains." },
    { title: "Περισσότερη Εμπιστοσύνη από το Google", desc: "Ένα domain με χρόνια ιστορικό θεωρείται πιο αξιόπιστο από το Google." },
    { title: "Υψηλότερα Ποσοστά Κλικ (CTR)", desc: "Τα premium domain names εμπνέουν εμπιστοσύνη στους χρήστες." },
    { title: "Άμεσο SEO Πλεονέκτημα", desc: "Αντί να περιμένετε χρόνια, επωφεληθείτε αμέσως από την υπάρχουσα αξία SEO." },
    { title: "Άμεση Type-In Κίνηση", desc: "Τα αξέχαστα premium domain names δημιουργούν άμεση κίνηση." },
    { title: "Βιώσιμη SEO Επένδυση", desc: "Ένα premium domain είναι ένα περιουσιακό στοιχείο που αυξάνεται σε αξία." },
  ]},
  ru: { badge: "Стратегическое Преимущество", title: "Почему Премиум Домены?", sub: "Премиум домены с высоким авторитетом MOZ — это стратегическая инвестиция, дающая огромное преимущество в результатах поиска.", cards: [
    { title: "Быстрее в Рейтинге Google", desc: "Домены с существующим авторитетом ранжируются быстрее новых доменов." },
    { title: "Больше Доверия от Google", desc: "Домен с многолетней историей и качественными обратными ссылками считается более надёжным." },
    { title: "Более Высокий CTR", desc: "Премиум домены вызывают доверие у пользователей, что приводит к более высокому CTR." },
    { title: "Мгновенное SEO Преимущество", desc: "Вместо того, чтобы годами наращивать авторитет, вы сразу пользуетесь существующей SEO-ценностью." },
    { title: "Прямой Type-In Трафик", desc: "Запоминающиеся премиум домены генерируют прямой трафик." },
    { title: "Устойчивая SEO Инвестиция", desc: "Премиум домен — это актив, который растёт в цене." },
  ]},
  ro: { badge: "Avantaj Strategic", title: "De Ce Domenii Premium?", sub: "Domeniile premium cu autoritate MOZ ridicată sunt o investiție strategică ce oferă un avantaj enorm în rezultatele căutărilor.", cards: [
    { title: "Clasare Mai Rapidă în Google", desc: "Domeniile cu autoritate existentă se clasează mai rapid decât domeniile noi." },
    { title: "Mai Multă Încredere de la Google", desc: "Un domeniu cu ani de istorie este considerat mai fiabil de Google." },
    { title: "Rate de Clic Mai Mari (CTR)", desc: "Domeniile premium inspiră încredere utilizatorilor și duc la rate de clic mai mari." },
    { title: "Avantaj SEO Imediat", desc: "În loc să așteptați ani pentru a construi autoritate, beneficiați imediat de valoarea SEO existentă." },
    { title: "Trafic Direct Type-In", desc: "Domeniile premium memorabile generează trafic direct." },
    { title: "Investiție SEO Durabilă", desc: "Un domeniu premium este un activ care crește în valoare." },
  ]},
  bg: { badge: "Стратегическо Предимство", title: "Защо Премиум Домейни?", sub: "Премиум домейните с висок MOZ авторитет са стратегическа инвестиция, даваща огромно предимство в резултатите от търсенето.", cards: [
    { title: "По-бързо Класиране в Google", desc: "Домейните с наличен авторитет се класират по-бързо от новите." },
    { title: "Повече Доверие от Google", desc: "Домейн с години история се разглежда от Google като по-надежден." },
    { title: "По-висок CTR", desc: "Премиум домейните вдъхват доверие на потребителите." },
    { title: "Незабавно SEO Предимство", desc: "Вместо да чакате години, веднага се възползвате от съществуващата SEO стойност." },
    { title: "Директен Type-In Трафик", desc: "Запомнящите се премиум домейни генерират директен трафик." },
    { title: "Устойчива SEO Инвестиция", desc: "Премиум домейнът е актив, чиято стойност расте." },
  ]},
  uk: { badge: "Стратегічна Перевага", title: "Чому Преміум Домени?", sub: "Преміум домени з високим авторитетом MOZ — це стратегічна інвестиція для величезної переваги в результатах пошуку.", cards: [
    { title: "Швидше Ранжування в Google", desc: "Домени з наявним авторитетом ранжуються швидше за нові домени." },
    { title: "Більше Довіри від Google", desc: "Домен з роками історії вважається Google надійнішим." },
    { title: "Вищий CTR", desc: "Преміум домени викликають довіру у користувачів." },
    { title: "Миттєва SEO Перевага", desc: "Замість років очікування ви одразу користуєтесь існуючою SEO-цінністю." },
    { title: "Прямий Type-In Трафік", desc: "Запам'ятовувані преміум домени генерують прямий трафік." },
    { title: "Стійка SEO Інвестиція", desc: "Преміум домен — це актив, що зростає в ціні." },
  ]},
  hr: { badge: "Strateška Prednost", title: "Zašto Premium Domene?", sub: "Premium domene s visokim MOZ autoritetom su strateška investicija koja vam daje ogromnu prednost u rezultatima pretraživanja.", cards: [
    { title: "Brže Rangiranje u Googleu", desc: "Domene s postojećim autoritetom se rangiraju brže od novih domena." },
    { title: "Više Povjerenja od Googlea", desc: "Domena s godinama povijesti smatra se pouzdanijom." },
    { title: "Veće Stope Klikanja (CTR)", desc: "Premium domene ulijevaju povjerenje korisnicima." },
    { title: "Trenutna SEO Prednost", desc: "Umjesto čekanja godinama, odmah koristite postojeću SEO vrijednost." },
    { title: "Izravni Type-In Promet", desc: "Pamtljive premium domene generiraju izravan promet." },
    { title: "Održiva SEO Investicija", desc: "Premium domena je imovina koja raste u vrijednosti." },
  ]},
  sk: { badge: "Strategická Výhoda", title: "Prečo Prémiové Domény?", sub: "Prémiové domény s vysokou MOZ autoritou sú strategickou investíciou pre obrovskú výhodu vo výsledkoch vyhľadávania.", cards: [
    { title: "Rýchlejšie Pozície v Google", desc: "Domény s existujúcou autoritou sa umiestňujú rýchlejšie ako nové domény." },
    { title: "Väčšia Dôvera od Google", desc: "Doména s rokmi histórie je Googlom vnímaná ako spoľahlivejšia." },
    { title: "Vyššia Miera Prekliku (CTR)", desc: "Prémiové domény vzbudzujú dôveru u používateľov." },
    { title: "Okamžitá SEO Výhoda", desc: "Namiesto čakania roky okamžite ťažíte z existujúcej SEO hodnoty." },
    { title: "Priamy Type-In Návštevnosť", desc: "Zapamätateľné prémiové domény generujú priamu návštevnosť." },
    { title: "Udržateľná SEO Investícia", desc: "Prémiová doména je aktívum, ktoré rastie na hodnote." },
  ]},
  sr: { badge: "Strateška Prednost", title: "Zašto Premium Domeni?", sub: "Premium domeni sa visokim MOZ autoritetom su strateška investicija za ogromnu prednost u rezultatima pretrage.", cards: [
    { title: "Brže Rangiranje u Google-u", desc: "Domeni sa postojećim autoritetom se rangiraju brže od novih domena." },
    { title: "Više Poverenja od Google-a", desc: "Domen sa godinama istorije smatra se pouzdanijim." },
    { title: "Veće Stope Klika (CTR)", desc: "Premium domeni ulijevaju poverenje korisnicima." },
    { title: "Trenutna SEO Prednost", desc: "Umesto čekanja godinama, odmah koristite postojeću SEO vrednost." },
    { title: "Direktan Type-In Saobraćaj", desc: "Upečatljivi premium domeni generišu direktan saobraćaj." },
    { title: "Održiva SEO Investicija", desc: "Premium domen je imovina koja raste u vrednosti." },
  ]},
  sl: { badge: "Strateška Prednost", title: "Zakaj Premium Domene?", sub: "Premium domene z visoko MOZ avtoriteto so strateška naložba za ogromno prednost v rezultatih iskanja.", cards: [
    { title: "Hitrejše Uvrščanje v Google", desc: "Domene z obstoječo avtoriteto se uvrščajo hitreje od novih domen." },
    { title: "Več Zaupanja od Google", desc: "Domena z leti zgodovine velja za bolj zanesljivo." },
    { title: "Višje Stopnje Klikov (CTR)", desc: "Premium domene vzbujajo zaupanje pri uporabnikih." },
    { title: "Takojšnja SEO Prednost", desc: "Namesto čakanja leta takoj izkoristite obstoječo SEO vrednost." },
    { title: "Neposredni Type-In Promet", desc: "Nepozabne premium domene ustvarjajo neposreden promet." },
    { title: "Trajnostna SEO Naložba", desc: "Premium domena je sredstvo, ki raste v vrednosti." },
  ]},
  ko: { badge: "전략적 이점", title: "왜 프리미엄 도메인인가?", sub: "높은 MOZ 권위를 가진 프리미엄 도메인은 검색 결과에서 엄청난 이점을 제공하는 전략적 투자입니다.", cards: [
    { title: "Google에서 더 빠른 순위", desc: "기존 권위를 가진 도메인은 새 도메인보다 더 빨리 순위가 올라갑니다." },
    { title: "Google의 더 많은 신뢰", desc: "수년간의 역사를 가진 도메인은 Google에서 더 신뢰할 수 있다고 봅니다." },
    { title: "높은 클릭률 (CTR)", desc: "프리미엄 도메인은 사용자에게 신뢰를 주어 높은 클릭률로 이어집니다." },
    { title: "즉각적인 SEO 이점", desc: "권위 구축에 수년을 기다리는 대신 기존 SEO 가치를 즉시 활용합니다." },
    { title: "직접 Type-In 트래픽", desc: "기억에 남는 프리미엄 도메인은 직접 입력 트래픽을 생성합니다." },
    { title: "지속 가능한 SEO 투자", desc: "프리미엄 도메인은 온라인 존재감이 성장하면서 가치가 증가하는 자산입니다." },
  ]},
  hu: { badge: "Stratégiai Előny", title: "Miért Prémium Domainek?", sub: "A magas MOZ tekintélyű prémium domainek stratégiai befektetést jelentenek, amely hatalmas előnyt biztosít a keresési eredményekben.", cards: [
    { title: "Gyorsabb Rangsorolás a Google-ban", desc: "A meglévő tekintélyű domainek gyorsabban rangsorolnak az újaknál." },
    { title: "Több Bizalom a Google-tól", desc: "Az évek történetével rendelkező domain megbízhatóbbnak számít." },
    { title: "Magasabb Átkattintási Arány (CTR)", desc: "A prémium domainek bizalmat keltenek a felhasználókban." },
    { title: "Azonnali SEO Előny", desc: "Ahelyett, hogy éveket várnál, azonnal kihasználod a meglévő SEO értéket." },
    { title: "Közvetlen Type-In Forgalom", desc: "Az emlékezetes prémium domainek közvetlen forgalmat generálnak." },
    { title: "Fenntartható SEO Befektetés", desc: "A prémium domain egy olyan eszköz, amelynek értéke nő az online jelenléteddel." },
  ]},
  th: { badge: "ข้อได้เปรียบเชิงกลยุทธ์", title: "ทำไมต้องโดเมนพรีเมียม?", sub: "โดเมนพรีเมียมที่มี MOZ authority สูงเป็นการลงทุนเชิงกลยุทธ์ที่ให้ข้อได้เปรียบมหาศาลในผลการค้นหา", cards: [
    { title: "จัดอันดับเร็วขึ้นใน Google", desc: "โดเมนที่มี authority อยู่แล้วจัดอันดับเร็วกว่าโดเมนใหม่" },
    { title: "ได้รับความไว้วางใจจาก Google มากขึ้น", desc: "โดเมนที่มีประวัติหลายปีถูกมองว่าน่าเชื่อถือมากกว่า" },
    { title: "อัตราคลิกสูงขึ้น (CTR)", desc: "โดเมนพรีเมียมสร้างความไว้วางใจในผู้ใช้" },
    { title: "ข้อได้เปรียบ SEO ทันที", desc: "แทนที่จะรอหลายปี คุณได้ประโยชน์จากค่า SEO ที่มีอยู่ทันที" },
    { title: "ทราฟฟิก Type-In โดยตรง", desc: "โดเมนพรีเมียมที่จำง่ายสร้างทราฟฟิกโดยตรง" },
    { title: "การลงทุน SEO ที่ยั่งยืน", desc: "โดเมนพรีเมียมเป็นสินทรัพย์ที่มีมูลค่าเพิ่มขึ้น" },
  ]},
  vi: { badge: "Lợi Thế Chiến Lược", title: "Tại Sao Tên Miền Premium?", sub: "Tên miền premium với quyền hạn MOZ cao là đầu tư chiến lược mang lại lợi thế to lớn trong kết quả tìm kiếm.", cards: [
    { title: "Xếp Hạng Nhanh Hơn trên Google", desc: "Tên miền có sẵn quyền hạn xếp hạng nhanh hơn tên miền mới." },
    { title: "Nhiều Tin Cậy Hơn từ Google", desc: "Tên miền với lịch sử nhiều năm được Google coi là đáng tin cậy hơn." },
    { title: "Tỷ Lệ Nhấp Chuột Cao Hơn (CTR)", desc: "Tên miền premium tạo sự tin tưởng cho người dùng." },
    { title: "Lợi Thế SEO Ngay Lập Tức", desc: "Thay vì chờ đợi nhiều năm, bạn ngay lập tức hưởng lợi từ giá trị SEO hiện có." },
    { title: "Lưu Lượng Type-In Trực Tiếp", desc: "Tên miền premium dễ nhớ tạo lưu lượng truy cập trực tiếp." },
    { title: "Đầu Tư SEO Bền Vững", desc: "Tên miền premium là tài sản tăng giá trị theo sự phát triển trực tuyến." },
  ]},
  id: { badge: "Keunggulan Strategis", title: "Mengapa Nama Domain Premium?", sub: "Nama domain premium dengan otoritas MOZ tinggi adalah investasi strategis yang memberikan keunggulan besar di hasil pencarian.", cards: [
    { title: "Peringkat Lebih Cepat di Google", desc: "Domain dengan otoritas yang ada mendapat peringkat lebih cepat dari domain baru." },
    { title: "Lebih Dipercaya Google", desc: "Domain dengan sejarah bertahun-tahun dianggap lebih dapat diandalkan oleh Google." },
    { title: "Rasio Klik Lebih Tinggi (CTR)", desc: "Nama domain premium menginspirasi kepercayaan pada pengguna." },
    { title: "Keuntungan SEO Langsung", desc: "Alih-alih menunggu bertahun-tahun, Anda langsung mendapat manfaat dari nilai SEO yang ada." },
    { title: "Lalu Lintas Type-In Langsung", desc: "Nama domain premium yang mudah diingat menghasilkan lalu lintas langsung." },
    { title: "Investasi SEO Berkelanjutan", desc: "Domain premium adalah aset yang nilainya meningkat seiring pertumbuhan online Anda." },
  ]},
  et: { badge: "Strateegiline Eelis", title: "Miks Premium Domeenid?", sub: "Kõrge MOZ autoriteediga premium domeenid on strateegiline investeering, mis annab tohutu eelise otsingutulemustes.", cards: [
    { title: "Kiirem Positsioneerimine Google'is", desc: "Olemasoleva autoriteediga domeenid positsioneeruvad kiiremini kui uued." },
    { title: "Rohkem Usaldust Google'ilt", desc: "Aastatepikkuse ajalooga domeeni peetakse Google'i poolt usaldusväärsemaks." },
    { title: "Kõrgem Klikkimäär (CTR)", desc: "Premium domeenid tekitavad kasutajates usaldust." },
    { title: "Kohene SEO Eelis", desc: "Aastaid ootamise asemel kasutad kohe olemasolevat SEO väärtust." },
    { title: "Otsene Type-In Liiklus", desc: "Meeldejäävad premium domeenid genereerivad otsest liiklust." },
    { title: "Jätkusuutlik SEO Investeering", desc: "Premium domeen on vara, mille väärtus kasvab." },
  ]},
  lv: { badge: "Stratēģiskā Priekšrocība", title: "Kāpēc Premium Domēni?", sub: "Premium domēni ar augstu MOZ autoritāti ir stratēģisks ieguldījums, kas dod milzīgu priekšrocību meklēšanas rezultātos.", cards: [
    { title: "Ātrāka Pozicionēšanās Google", desc: "Domēni ar esošu autoritāti pozicionējas ātrāk nekā jauni domēni." },
    { title: "Vairāk Uzticēšanās no Google", desc: "Domēns ar gadu vēsturi tiek uzskatīts par uzticamāku." },
    { title: "Augstāka Klikšķu Likme (CTR)", desc: "Premium domēni rada uzticēšanos lietotājos." },
    { title: "Tūlītēja SEO Priekšrocība", desc: "Tā vietā, lai gaidītu gadiem, jūs nekavējoties gūstat labumu no esošās SEO vērtības." },
    { title: "Tieša Type-In Datplūsma", desc: "Iegaumējami premium domēni ģenerē tiešu datplūsmu." },
    { title: "Ilgtspējīgs SEO Ieguldījums", desc: "Premium domēns ir aktīvs, kura vērtība pieaug." },
  ]},
  lt: { badge: "Strateginis Pranašumas", title: "Kodėl Premium Domenai?", sub: "Premium domenai su aukštu MOZ autoritetu yra strateginė investicija, suteikianti didžiulį pranašumą paieškos rezultatuose.", cards: [
    { title: "Greitesnis Reitingavimas Google", desc: "Domenai su esamu autoritetu reitinguojasi greičiau nei nauji domenai." },
    { title: "Daugiau Pasitikėjimo iš Google", desc: "Domenas su metų istorija laikomas patikimesniu." },
    { title: "Didesnis Paspaudimų Rodiklis (CTR)", desc: "Premium domenai sukuria pasitikėjimą vartotojuose." },
    { title: "Greitas SEO Pranašumas", desc: "Vietoj metų laukimo iš karto naudojatės esama SEO verte." },
    { title: "Tiesioginis Type-In Srautas", desc: "Įsimintini premium domenai generuoja tiesioginį srautą." },
    { title: "Tvari SEO Investicija", desc: "Premium domenas yra turtas, kurio vertė auga." },
  ]},
  is: { badge: "Strategískt Forskot", title: "Af Hverju Premium Lén?", sub: "Premium lén með háa MOZ heimild eru stefnumarkandi fjárfesting sem gefur gríðarlegt forskot í leitarniðurstöðum.", cards: [
    { title: "Hraðari Röðun á Google", desc: "Lén með núverandi heimild raðast hraðar en ný lén." },
    { title: "Meira Traust frá Google", desc: "Lén með ára sögu er talið áreiðanlegra af Google." },
    { title: "Hærra Smellihlutfall (CTR)", desc: "Premium lén vekja traust hjá notendum." },
    { title: "Tafarlaust SEO Forskot", desc: "Í stað þess að bíða í mörg ár nýtir þú strax núverandi SEO gildi." },
    { title: "Beint Type-In Umferð", desc: "Eftirminnileg premium lén skapa beina umferð." },
    { title: "Sjálfbær SEO Fjárfesting", desc: "Premium lén er eign sem eykst í verðmæti." },
  ]},
  sq: { badge: "Avantazh Strategjik", title: "Pse Domaine Premium?", sub: "Domainët premium me autoritet të lartë MOZ janë investim strategjik që jep avantazh të madh në rezultatet e kërkimit.", cards: [
    { title: "Renditje Më e Shpejtë në Google", desc: "Domainët me autoritet ekzistues renditen më shpejt se domainët e reja." },
    { title: "Më Shumë Besim nga Google", desc: "Një domain me vite histori konsiderohet më i besueshëm nga Google." },
    { title: "Norma Më e Lartë Klikimesh (CTR)", desc: "Domainët premium frymëzojnë besim tek përdoruesit." },
    { title: "Avantazh SEO i Menjëhershëm", desc: "Në vend që të prisni vite, përfitoni menjëherë nga vlera SEO ekzistuese." },
    { title: "Trafik Direkt Type-In", desc: "Domainët premium të paharrueshëm gjenerojnë trafik direkt." },
    { title: "Investim SEO i Qëndrueshëm", desc: "Një domain premium është një aset që rritet në vlerë." },
  ]},
  mk: { badge: "Стратешка Предност", title: "Зошто Премиум Домени?", sub: "Премиум домените со висок MOZ авторитет се стратешка инвестиција за огромна предност во резултатите од пребарување.", cards: [
    { title: "Побрзо Рангирање во Google", desc: "Домените со постоечки авторитет се рангираат побрзо од новите." },
    { title: "Повеќе Доверба од Google", desc: "Домен со години историја се смета за подоверлив." },
    { title: "Повисока CTR", desc: "Премиум домените создаваат доверба кај корисниците." },
    { title: "Моментална SEO Предност", desc: "Наместо да чекате години, веднаш ја искористувате постоечката SEO вредност." },
    { title: "Директен Type-In Сообраќај", desc: "Запомнувачките премиум домени генерираат директен сообраќај." },
    { title: "Одржлива SEO Инвестиција", desc: "Премиум доменот е средство чија вредност расте." },
  ]},
  bs: { badge: "Strateška Prednost", title: "Zašto Premium Domene?", sub: "Premium domene sa visokim MOZ autoritetom su strateška investicija za ogromnu prednost u rezultatima pretraživanja.", cards: [
    { title: "Brže Rangiranje u Googleu", desc: "Domene sa postojećim autoritetom se rangiraju brže od novih domena." },
    { title: "Više Povjerenja od Googlea", desc: "Domena sa godinama povijesti smatra se pouzdanijom." },
    { title: "Veće Stope Klikanja (CTR)", desc: "Premium domene ulijevaju povjerenje korisnicima." },
    { title: "Trenutna SEO Prednost", desc: "Umjesto čekanja godinama, odmah koristite postojeću SEO vrijednost." },
    { title: "Direktan Type-In Promet", desc: "Pamtljive premium domene generiraju direktan promet." },
    { title: "Održiva SEO Investicija", desc: "Premium domena je imovina koja raste u vrijednosti." },
  ]},
  lb: { badge: "Strategesch Virdeel", title: "Firwat Premium Domainen?", sub: "Premium Domainen mat héijer MOZ Autoritéit sinn eng strategesch Investitioun déi Iech en enormen Virdeel an de Sichresultater gëtt.", cards: [
    { title: "Méi Séier Ranken am Google", desc: "Domainen mat existéierender Autoritéit ranken méi séier wéi nei Domainen." },
    { title: "Méi Vertrauen vum Google", desc: "En Domain mat Jore Geschicht gëtt als méi zouverlässeg ugesinn." },
    { title: "Méi Héich Klickraten (CTR)", desc: "Premium Domainen wierken Vertrauen bei Benotzer." },
    { title: "Direkt SEO Virdeel", desc: "Amplaz Jore ze waarden, profitéiert Dir direkt vun der existéierender SEO-Wäert." },
    { title: "Direkt Type-In Traffic", desc: "Onvergiessbar Premium Domainen generéieren direkt Traffic." },
    { title: "Nohalteg SEO Investitioun", desc: "En Premium Domain ass en Asset dee a Wäert klëmmt." },
  ]},
  bn: { badge: "কৌশলগত সুবিধা", title: "কেন প্রিমিয়াম ডোমেইন?", sub: "উচ্চ MOZ কর্তৃত্বের প্রিমিয়াম ডোমেইন নাম একটি কৌশলগত বিনিয়োগ যা সার্চ ফলাফলে বিশাল সুবিধা দেয়।", cards: [
    { title: "Google-এ দ্রুত র‍্যাঙ্কিং", desc: "বিদ্যমান কর্তৃত্বের ডোমেইন নতুন ডোমেইনের চেয়ে দ্রুত র‍্যাঙ্ক করে।" },
    { title: "Google থেকে আরো বিশ্বাস", desc: "বছরের ইতিহাস সহ ডোমেইন আরো নির্ভরযোগ্য বলে বিবেচিত হয়।" },
    { title: "উচ্চতর ক্লিক-থ্রু হার (CTR)", desc: "প্রিমিয়াম ডোমেইন ব্যবহারকারীদের মধ্যে বিশ্বাস তৈরি করে।" },
    { title: "তাৎক্ষণিক SEO সুবিধা", desc: "বছর অপেক্ষা না করে, আপনি বিদ্যমান SEO মূল্য থেকে সাথে সাথে উপকৃত হন।" },
    { title: "সরাসরি Type-In ট্রাফিক", desc: "স্মরণীয় প্রিমিয়াম ডোমেইন সরাসরি ট্রাফিক তৈরি করে।" },
    { title: "টেকসই SEO বিনিয়োগ", desc: "প্রিমিয়াম ডোমেইন এমন একটি সম্পদ যার মূল্য বৃদ্ধি পায়।" },
  ]},
  ms: { badge: "Kelebihan Strategik", title: "Mengapa Nama Domain Premium?", sub: "Nama domain premium dengan autoriti MOZ tinggi adalah pelaburan strategik yang memberikan kelebihan besar dalam hasil carian.", cards: [
    { title: "Kedudukan Lebih Pantas di Google", desc: "Domain dengan autoriti sedia ada mendapat kedudukan lebih pantas daripada domain baharu." },
    { title: "Lebih Dipercayai Google", desc: "Domain dengan sejarah bertahun-tahun dianggap lebih boleh dipercayai." },
    { title: "Kadar Klik Lebih Tinggi (CTR)", desc: "Nama domain premium mengilhamkan kepercayaan pada pengguna." },
    { title: "Kelebihan SEO Serta-merta", desc: "Daripada menunggu bertahun-tahun, anda serta-merta mendapat manfaat daripada nilai SEO sedia ada." },
    { title: "Trafik Type-In Langsung", desc: "Nama domain premium yang mudah diingat menjana trafik langsung." },
    { title: "Pelaburan SEO Mampan", desc: "Domain premium adalah aset yang nilainya meningkat." },
  ]},
};

const icons = [TrendingUp, Shield, Target, Zap, Globe, Award];

const WhyPremiumSection = ({ lang, configCards, configBadge, configTitle, configSub }: { 
  lang: string; 
  configCards?: { title: string; desc: string }[];
  configBadge?: string;
  configTitle?: string;
  configSub?: string;
}) => {
  const t = translations[lang as Lang] || translations.en;
  // Use 6-card translated version, falling back to config if translation not available
  const cards = t.cards.length === 6 ? t.cards : (configCards && configCards.length >= 4 ? [...configCards, ...(t.cards.slice(4))] : t.cards);
  const badge = configBadge || t.badge;
  const title = configTitle || t.title;
  const sub = configSub || t.sub;

  return (
    <>
      <section id="why-premium" className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-800 text-amber-400 border-slate-700">
              <Award className="w-4 h-4 mr-2 inline" />
              {badge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-slate-400 max-w-3xl mx-auto">{sub}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {cards.map((item, index) => {
              const Icon = icons[index] || Globe;
              return (
                <Card key={index} className="bg-slate-800/30 border-slate-700/50 hover:border-amber-500/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-amber-600/20 transition-all">
                      <Icon className="h-6 w-6 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <MozExplanationCard lang={lang} />
        </div>
      </section>
    </>
  );
};

export default WhyPremiumSection;

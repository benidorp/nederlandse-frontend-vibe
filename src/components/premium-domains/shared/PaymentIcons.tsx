import { Lock } from "lucide-react";

type Lang = "en" | "nl" | "de" | "fr" | "es" | "it" | "pt" | "pl" | "tr" | "ar" | "hi" | "ja" | "zh" | "sv" | "no" | "da" | "fi" | "cs" | "el" | "ru" | "ro" | "bg" | "uk" | "hr" | "sk" | "sr" | "sl" | "ko" | "hu" | "th" | "vi" | "id" | "et" | "lv" | "lt" | "is" | "sq" | "mk" | "bs" | "lb" | "bn" | "ms";

const translations: Record<Lang, { secure: string; currency: string; token: string; spam: string; howTransfer: string }> = {
  en: { secure: "Secure payment via Stripe", currency: "Automatically converted to your local currency", token: "After payment you will receive the transfer token (EPP/Auth code) at your email address within 24 hours.", spam: "Also check your spam folder.", howTransfer: "How does the transfer work?" },
  nl: { secure: "Veilige betaling via Stripe", currency: "Automatisch omgerekend naar uw lokale valuta", token: "Na betaling ontvangt u de transfertoken (EPP/Auth code) op uw e-mailadres binnen 24 uur.", spam: "Controleer ook uw spamfolder.", howTransfer: "Hoe werkt de overdracht?" },
  de: { secure: "Sichere Zahlung über Stripe", currency: "Automatisch in Ihre lokale Währung umgerechnet", token: "Nach der Zahlung erhalten Sie den Transfer-Token (EPP/Auth-Code) innerhalb von 24 Stunden an Ihre E-Mail-Adresse.", spam: "Überprüfen Sie auch Ihren Spam-Ordner.", howTransfer: "Wie funktioniert der Transfer?" },
  fr: { secure: "Paiement sécurisé via Stripe", currency: "Automatiquement converti dans votre devise locale", token: "Après le paiement, vous recevrez le jeton de transfert (code EPP/Auth) à votre adresse e-mail dans les 24 heures.", spam: "Vérifiez également votre dossier spam.", howTransfer: "Comment fonctionne le transfert ?" },
  es: { secure: "Pago seguro a través de Stripe", currency: "Convertido automáticamente a su moneda local", token: "Después del pago, recibirá el token de transferencia (código EPP/Auth) en su dirección de correo electrónico en un plazo de 24 horas.", spam: "Compruebe también su carpeta de spam.", howTransfer: "¿Cómo funciona la transferencia?" },
  it: { secure: "Pagamento sicuro tramite Stripe", currency: "Convertito automaticamente nella tua valuta locale", token: "Dopo il pagamento riceverai il token di trasferimento (codice EPP/Auth) al tuo indirizzo email entro 24 ore.", spam: "Controlla anche la cartella spam.", howTransfer: "Come funziona il trasferimento?" },
  pt: { secure: "Pagamento seguro via Stripe", currency: "Convertido automaticamente para a sua moeda local", token: "Após o pagamento, receberá o token de transferência (código EPP/Auth) no seu endereço de email dentro de 24 horas.", spam: "Verifique também a sua pasta de spam.", howTransfer: "Como funciona a transferência?" },
  pl: { secure: "Bezpieczna płatność przez Stripe", currency: "Automatycznie przeliczane na Twoją walutę lokalną", token: "Po dokonaniu płatności otrzymasz token transferowy (kod EPP/Auth) na swój adres e-mail w ciągu 24 godzin.", spam: "Sprawdź również folder spam.", howTransfer: "Jak działa transfer?" },
  tr: { secure: "Stripe ile güvenli ödeme", currency: "Otomatik olarak yerel para biriminize dönüştürülür", token: "Ödeme sonrası transfer tokeninizi (EPP/Auth kodu) 24 saat içinde e-posta adresinize alacaksınız.", spam: "Spam klasörünüzü de kontrol edin.", howTransfer: "Transfer nasıl çalışır?" },
  ar: { secure: "دفع آمن عبر Stripe", currency: "يتم التحويل تلقائيًا إلى عملتك المحلية", token: "بعد الدفع ستتلقى رمز النقل (EPP/Auth) على بريدك الإلكتروني خلال 24 ساعة.", spam: "تحقق أيضًا من مجلد البريد العشوائي.", howTransfer: "كيف يعمل النقل؟" },
  hi: { secure: "Stripe के माध्यम से सुरक्षित भुगतान", currency: "स्वचालित रूप से आपकी स्थानीय मुद्रा में परिवर्तित", token: "भुगतान के बाद आपको 24 घंटे के भीतर अपने ईमेल पते पर ट्रांसफर टोकन (EPP/Auth कोड) प्राप्त होगा।", spam: "अपना स्पैम फ़ोल्डर भी जांचें।", howTransfer: "ट्रांसफर कैसे काम करता है?" },
  ja: { secure: "Stripeによる安全な決済", currency: "自動的に現地通貨に変換されます", token: "お支払い後、24時間以内にメールアドレスに転送トークン（EPP/Authコード）が届きます。", spam: "迷惑メールフォルダもご確認ください。", howTransfer: "転送はどのように行われますか？" },
  zh: { secure: "通过Stripe安全支付", currency: "自动转换为您当地的货币", token: "付款后，您将在24小时内通过电子邮件收到转移令牌（EPP/Auth代码）。", spam: "请同时检查您的垃圾邮件文件夹。", howTransfer: "转移是如何进行的？" },
  sv: { secure: "Säker betalning via Stripe", currency: "Konverteras automatiskt till din lokala valuta", token: "Efter betalning får du överföringstoken (EPP/Auth-kod) till din e-postadress inom 24 timmar.", spam: "Kontrollera även din skräppostmapp.", howTransfer: "Hur fungerar överföringen?" },
  no: { secure: "Sikker betaling via Stripe", currency: "Automatisk konvertert til din lokale valuta", token: "Etter betaling mottar du overføringstoken (EPP/Auth-kode) på e-postadressen din innen 24 timer.", spam: "Sjekk også søppelpostmappen din.", howTransfer: "Hvordan fungerer overføringen?" },
  da: { secure: "Sikker betaling via Stripe", currency: "Automatisk konverteret til din lokale valuta", token: "Efter betaling modtager du overførselstoken (EPP/Auth-kode) på din e-mailadresse inden for 24 timer.", spam: "Tjek også din spam-mappe.", howTransfer: "Hvordan fungerer overførslen?" },
  fi: { secure: "Turvallinen maksu Stripen kautta", currency: "Muunnetaan automaattisesti paikalliseen valuuttaasi", token: "Maksun jälkeen saat siirtotokenin (EPP/Auth-koodin) sähköpostiosoitteeseesi 24 tunnin kuluessa.", spam: "Tarkista myös roskapostikansio.", howTransfer: "Miten siirto toimii?" },
  cs: { secure: "Bezpečná platba přes Stripe", currency: "Automaticky převedeno na vaši místní měnu", token: "Po platbě obdržíte přenosový token (EPP/Auth kód) na vaši e-mailovou adresu do 24 hodin.", spam: "Zkontrolujte také složku se spamem.", howTransfer: "Jak funguje přenos?" },
  el: { secure: "Ασφαλής πληρωμή μέσω Stripe", currency: "Αυτόματη μετατροπή στο τοπικό σας νόμισμα", token: "Μετά την πληρωμή θα λάβετε το token μεταφοράς (EPP/Auth κωδικό) στη διεύθυνση email σας εντός 24 ωρών.", spam: "Ελέγξτε επίσης τον φάκελο ανεπιθύμητης αλληλογραφίας.", howTransfer: "Πώς λειτουργεί η μεταφορά;" },
  ru: { secure: "Безопасная оплата через Stripe", currency: "Автоматически конвертируется в вашу местную валюту", token: "После оплаты вы получите токен переноса (EPP/Auth код) на ваш email в течение 24 часов.", spam: "Также проверьте папку спам.", howTransfer: "Как работает перенос?" },
  ro: { secure: "Plată sigură prin Stripe", currency: "Convertit automat în moneda dvs. locală", token: "După plată veți primi tokenul de transfer (codul EPP/Auth) la adresa dvs. de email în 24 de ore.", spam: "Verificați și folderul de spam.", howTransfer: "Cum funcționează transferul?" },
  bg: { secure: "Сигурно плащане чрез Stripe", currency: "Автоматично конвертирано във вашата местна валута", token: "След плащането ще получите токен за трансфер (EPP/Auth код) на вашия имейл адрес в рамките на 24 часа.", spam: "Проверете и папката за спам.", howTransfer: "Как работи трансферът?" },
  uk: { secure: "Безпечна оплата через Stripe", currency: "Автоматично конвертується у вашу місцеву валюту", token: "Після оплати ви отримаєте токен переносу (EPP/Auth код) на вашу електронну адресу протягом 24 годин.", spam: "Також перевірте папку спаму.", howTransfer: "Як працює перенесення?" },
  hr: { secure: "Sigurno plaćanje putem Stripea", currency: "Automatski pretvoreno u vašu lokalnu valutu", token: "Nakon plaćanja primit ćete token za prijenos (EPP/Auth kod) na vašu email adresu unutar 24 sata.", spam: "Provjerite i mapu neželjene pošte.", howTransfer: "Kako funkcionira prijenos?" },
  sk: { secure: "Bezpečná platba cez Stripe", currency: "Automaticky prevedené na vašu miestnu menu", token: "Po platbe dostanete prenosový token (EPP/Auth kód) na vašu emailovú adresu do 24 hodín.", spam: "Skontrolujte aj priečinok so spamom.", howTransfer: "Ako funguje prenos?" },
  sr: { secure: "Sigurno plaćanje putem Stripe-a", currency: "Automatski konvertovano u vašu lokalnu valutu", token: "Nakon plaćanja dobićete token za transfer (EPP/Auth kod) na vašu email adresu u roku od 24 sata.", spam: "Proverite i folder za neželjenu poštu.", howTransfer: "Kako funkcioniše transfer?" },
  sl: { secure: "Varno plačilo prek Stripe", currency: "Samodejno pretvorjeno v vašo lokalno valuto", token: "Po plačilu boste prejeli prenosni žeton (EPP/Auth kodo) na vaš e-poštni naslov v 24 urah.", spam: "Preverite tudi mapo z neželeno pošto.", howTransfer: "Kako deluje prenos?" },
  ko: { secure: "Stripe를 통한 안전한 결제", currency: "자동으로 현지 통화로 변환됩니다", token: "결제 후 24시간 이내에 이메일 주소로 이전 토큰(EPP/Auth 코드)을 받으실 수 있습니다.", spam: "스팸 폴더도 확인하세요.", howTransfer: "이전은 어떻게 작동하나요?" },
  hu: { secure: "Biztonságos fizetés a Stripe-on keresztül", currency: "Automatikusan átváltva a helyi pénznemedre", token: "Fizetés után 24 órán belül megkapod az átviteli tokent (EPP/Auth kódot) az e-mail címedre.", spam: "Ellenőrizd a spam mappát is.", howTransfer: "Hogyan működik az átvitel?" },
  th: { secure: "ชำระเงินอย่างปลอดภัยผ่าน Stripe", currency: "แปลงเป็นสกุลเงินท้องถิ่นของคุณโดยอัตโนมัติ", token: "หลังชำระเงิน คุณจะได้รับโทเค็นการโอน (รหัส EPP/Auth) ทางอีเมลภายใน 24 ชั่วโมง", spam: "ตรวจสอบโฟลเดอร์สแปมด้วย", howTransfer: "การโอนทำงานอย่างไร?" },
  vi: { secure: "Thanh toán an toàn qua Stripe", currency: "Tự động chuyển đổi sang đồng tiền địa phương của bạn", token: "Sau khi thanh toán, bạn sẽ nhận được mã chuyển (EPP/Auth code) qua email trong vòng 24 giờ.", spam: "Kiểm tra cả thư mục spam.", howTransfer: "Chuyển nhượng hoạt động như thế nào?" },
  id: { secure: "Pembayaran aman melalui Stripe", currency: "Otomatis dikonversi ke mata uang lokal Anda", token: "Setelah pembayaran, Anda akan menerima token transfer (kode EPP/Auth) di alamat email Anda dalam 24 jam.", spam: "Periksa juga folder spam Anda.", howTransfer: "Bagaimana cara transfer bekerja?" },
  et: { secure: "Turvaline makse Stripe'i kaudu", currency: "Automaatselt konverteeritud teie kohalikku valuutasse", token: "Pärast makset saate ülekandetokeni (EPP/Auth koodi) oma e-posti aadressile 24 tunni jooksul.", spam: "Kontrollige ka oma rämpsposti kausta.", howTransfer: "Kuidas ülekanne toimib?" },
  lv: { secure: "Droša maksājuma caur Stripe", currency: "Automātiski konvertēts jūsu vietējā valūtā", token: "Pēc maksājuma jūs saņemsiet pārsūtīšanas marķieri (EPP/Auth kodu) uz savu e-pasta adresi 24 stundu laikā.", spam: "Pārbaudiet arī surogātpasta mapi.", howTransfer: "Kā darbojas pārsūtīšana?" },
  lt: { secure: "Saugus mokėjimas per Stripe", currency: "Automatiškai konvertuojama į jūsų vietinę valiutą", token: "Po mokėjimo per 24 valandas el. paštu gausite perdavimo ženklą (EPP/Auth kodą).", spam: "Patikrinkite ir šlamšto aplanką.", howTransfer: "Kaip veikia perdavimas?" },
  is: { secure: "Örugg greiðsla í gegnum Stripe", currency: "Sjálfkrafa breytt í staðbundna gjaldmiðil þinn", token: "Eftir greiðslu færðu flutningsmerki (EPP/Auth kóða) á netfangið þitt innan 24 klukkustunda.", spam: "Athugaðu einnig ruslpóstmöppuna.", howTransfer: "Hvernig virkar flutningurinn?" },
  sq: { secure: "Pagesë e sigurt përmes Stripe", currency: "Konvertohet automatikisht në monedhën tuaj lokale", token: "Pas pagesës do të merrni tokenin e transferimit (kodin EPP/Auth) në adresën tuaj email brenda 24 orëve.", spam: "Kontrolloni edhe dosjen e spam-it.", howTransfer: "Si funksionon transferimi?" },
  mk: { secure: "Безбедно плаќање преку Stripe", currency: "Автоматски конвертирано во вашата локална валута", token: "По плаќањето ќе го добиете токенот за трансфер (EPP/Auth код) на вашата email адреса во рок од 24 часа.", spam: "Проверете ја и папката за спам.", howTransfer: "Како функционира трансферот?" },
  bs: { secure: "Sigurno plaćanje putem Stripea", currency: "Automatski konvertovano u vašu lokalnu valutu", token: "Nakon plaćanja dobićete token za transfer (EPP/Auth kod) na vašu email adresu u roku od 24 sata.", spam: "Provjerite i folder za neželjenu poštu.", howTransfer: "Kako funkcionira transfer?" },
  lb: { secure: "Sécher Bezuelen iwwer Stripe", currency: "Automatesch an Är lokal Währung ëmgerechent", token: "No der Bezuelung kritt Dir den Transfer-Token (EPP/Auth Code) op Är Email-Adress bannent 24 Stonnen.", spam: "Kontrolléiert och Ären Spam-Dossier.", howTransfer: "Wéi funktionéiert den Transfer?" },
  bn: { secure: "Stripe-এর মাধ্যমে নিরাপদ পেমেন্ট", currency: "স্বয়ংক্রিয়ভাবে আপনার স্থানীয় মুদ্রায় রূপান্তরিত", token: "পেমেন্টের পর আপনি 24 ঘন্টার মধ্যে আপনার ইমেইল ঠিকানায় ট্রান্সফার টোকেন (EPP/Auth কোড) পাবেন।", spam: "আপনার স্প্যাম ফোল্ডারও চেক করুন।", howTransfer: "ট্রান্সফার কিভাবে কাজ করে?" },
  ms: { secure: "Pembayaran selamat melalui Stripe", currency: "Ditukar secara automatik ke mata wang tempatan anda", token: "Selepas pembayaran, anda akan menerima token pemindahan (kod EPP/Auth) di alamat e-mel anda dalam masa 24 jam.", spam: "Semak juga folder spam anda.", howTransfer: "Bagaimana pemindahan berfungsi?" },
};

const PaymentIcons = ({ lang }: { lang: string }) => {
  const t = translations[lang as Lang] || translations.en;

  return (
    <div className="flex flex-col items-center gap-1.5 sm:gap-2 text-center" data-nosnippet>
      <div className="flex items-center justify-center gap-0.5 sm:gap-1 flex-wrap">
        {/* VISA */}
        <div className="flex items-center bg-[#1A1F71] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
          <span className="text-white font-bold text-[5px] sm:text-[7px] italic tracking-tight" style={{ fontFamily: 'Arial' }}>VISA</span>
        </div>
        {/* Mastercard */}
        <div className="flex items-center bg-[#000000] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
          <svg className="h-2 sm:h-2.5 w-3 sm:w-4" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="10" r="8" fill="#EB001B" /><circle cx="21" cy="10" r="8" fill="#F79E1B" />
            <path d="M16 3.5C18.5 5.5 20 7.5 20 10C20 12.5 18.5 14.5 16 16.5C13.5 14.5 12 12.5 12 10C12 7.5 13.5 5.5 16 3.5Z" fill="#FF5F00" />
          </svg>
        </div>
        {/* PayPal */}
        <div className="flex items-center bg-[#003087] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
          <span className="text-white font-bold text-[5px] sm:text-[7px] italic" style={{ fontFamily: 'Arial' }}>Pay</span>
          <span className="text-[#00ADEF] font-bold text-[5px] sm:text-[7px] italic" style={{ fontFamily: 'Arial' }}>Pal</span>
        </div>
        {/* Amazon Pay */}
        <div className="flex items-center bg-[#232F3E] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
          <svg className="h-2 sm:h-2.5 w-6 sm:w-8" viewBox="0 0 60 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="2" y="13" fill="#FF9900" fontSize="10" fontWeight="bold" fontFamily="Arial">amazon</text>
            <path d="M2 16C8 18 16 19 24 18C28 17.5 32 16.5 35 15" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            <path d="M34 13L36 15L34 17" stroke="#FF9900" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x="38" y="13" fill="white" fontSize="8" fontFamily="Arial">pay</text>
          </svg>
        </div>
        {/* Apple Pay */}
        <div className="flex items-center bg-black rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
          <svg className="h-2 sm:h-2.5 w-5 sm:w-6" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 4C9.5 4 10.3 3.5 10.8 2.7C11.3 2 11.5 1 11.4 0C10.5 0.1 9.4 0.6 8.8 1.4C8.3 2 7.9 3 8 4C9 4 9.5 4 8.5 4Z" fill="white" />
            <path d="M11.4 4.3C9.8 4.2 8.4 5.2 7.6 5.2C6.8 5.2 5.6 4.3 4.3 4.4C2.6 4.4 1 5.3 0.2 6.9C-1.5 10 0.1 14.5 1.7 17C2.5 18.2 3.5 19.6 4.8 19.5C6 19.5 6.5 18.7 8 18.7C9.5 18.7 10 19.5 11.3 19.5C12.6 19.5 13.5 18.2 14.3 17C15.2 15.7 15.6 14.4 15.6 14.3C15.6 14.3 12.5 13.1 12.5 9.6C12.5 6.5 15 5.1 15.1 5C13.8 3.1 11.8 4.3 11.4 4.3Z" fill="white" />
            <text x="18" y="14" fill="white" fontSize="10" fontWeight="500" fontFamily="Arial">Pay</text>
          </svg>
        </div>
        {/* GPay */}
        <div className="flex items-center bg-white rounded px-0.5 sm:px-1 py-0.5 border border-slate-300 h-3 sm:h-4">
          <span className="font-bold text-[5px] sm:text-[7px]" style={{ fontFamily: 'Arial' }}>
            <span style={{ color: '#4285F4' }}>G</span>
            <span style={{ color: '#5F6368' }}>Pay</span>
          </span>
        </div>
        {/* Klarna */}
        <div className="flex items-center bg-[#FFB3C7] rounded px-0.5 sm:px-1 py-0.5 h-3 sm:h-4">
          <span className="text-black font-bold text-[5px] sm:text-[7px]" style={{ fontFamily: 'Arial' }}>Klarna</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2">
        <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
        <div className="flex items-center bg-[#635BFF] rounded px-1.5 sm:px-2 py-0.5">
          <span className="text-white font-bold text-xs sm:text-sm" style={{ fontFamily: 'Arial' }}>stripe</span>
        </div>
      </div>
      <div data-nosnippet>
        <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-1.5 sm:mt-2">
          {t.secure}<br />{t.currency}
        </p>
        <p className="text-[8px] sm:text-[10px] text-slate-400 leading-tight mt-2 sm:mt-3">
          {t.token}<br />{t.spam}
        </p>
        <a href="#domain-transfer" className="text-[8px] sm:text-[10px] text-amber-400 hover:text-amber-300 underline mt-1.5 sm:mt-2">
          {t.howTransfer}
        </a>
      </div>
    </div>
  );
};

export default PaymentIcons;

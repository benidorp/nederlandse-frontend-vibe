import { Helmet } from "react-helmet";
import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FooterPremiumDomainsHI from "@/components/premium-domains/FooterPremiumDomainsHI";

const legalDocuments = [
  {
    title: "नियम और शर्तें",
    content: `**1. परिचय**

ये नियम और शर्तें प्रीमियम एक्सपायर्ड डोमेन नामों की बिक्री को नियंत्रित करती हैं। इन डोमेन को खरीदकर, आप इन शर्तों को स्वीकार करने की पुष्टि करते हैं।

**2. परिभाषाएं**

"डोमेन" का अर्थ है प्रीमियम एक्सपायर्ड डोमेन नाम जो हमारी वेबसाइट पर बिक्री के लिए पेश किया गया है।
"खरीदार" का अर्थ है वह व्यक्ति या संस्था जो डोमेन खरीदती है।
"विक्रेता" का अर्थ है प्रीमियम डोमेन, डोमेन का मालिक और विक्रेता।
"MOZ Domain Authority" का अर्थ है Moz.com द्वारा विकसित सर्च इंजन रैंकिंग स्कोर।
"बैकलिंक्स" का अर्थ है डोमेन की ओर इशारा करने वाले इनबाउंड लिंक।

**3. बिक्री की प्रकृति**

3.1. सभी डोमेन बिक्री "जैसा है" आधार पर होती है।
3.2. ऐतिहासिक डेटा सूचनात्मक उद्देश्यों के लिए है और भविष्य के SEO प्रदर्शन का संकेत नहीं है।
3.3. Domain Authority स्कोर समय के साथ उतार-चढ़ाव कर सकते हैं।
3.4. बैकलिंक प्रोफाइल बाहरी कारकों के कारण बदल सकते हैं।

**4. खरीद प्रक्रिया**

4.1. भुगतान हमारे सुरक्षित भुगतान प्रोसेसर (Stripe) के माध्यम से संसाधित किया जाता है।
4.2. भुगतान की पुष्टि के बाद, ट्रांसफर टोकन 24 घंटे के भीतर भेजा जाता है।
4.3. खरीदार डोमेन ट्रांसफर पूरा करने के लिए जिम्मेदार है।
4.4. डोमेन सफल भुगतान के बाद 30 दिनों के लिए आरक्षित रहता है।

**5. रिफंड नीति**

5.1. सभी बिक्री अंतिम हैं।
5.2. ट्रांसफर टोकन भेजने के बाद कोई रिफंड नहीं दिया जाता।
5.3. खरीदार ट्रांसफर शुरू करने से पहले डोमेन विवरण सत्यापित करने के लिए जिम्मेदार है।

**6. दायित्व की सीमा**

6.1. हम कोई विशिष्ट SEO परिणाम या रैंकिंग की गारंटी नहीं देते।
6.2. हम Domain Authority या बैकलिंक स्थिति में परिवर्तनों के लिए जिम्मेदार नहीं हैं।
6.3. हमारी अधिकतम देयता डोमेन के लिए भुगतान की गई कीमत तक सीमित है।

**7. बौद्धिक संपदा**

7.1. खरीदार गारंटी देता है कि डोमेन का उपयोग तीसरे पक्ष के अधिकारों का उल्लंघन नहीं करेगा।
7.2. विक्रेता डोमेन के बारे में ज्ञात ट्रेडमार्क दावों का खुलासा करेगा।

**8. लागू कानून**

ये शर्तें नीदरलैंड के कानून द्वारा शासित होती हैं। विवाद नीदरलैंड की अदालतों में हल किए जाएंगे।

**9. संपर्क जानकारी**

इन शर्तों के बारे में प्रश्नों के लिए, कृपया संपर्क करें: support@iaee.eu`
  },
  {
    title: "गोपनीयता नीति",
    content: `**1. परिचय**

यह गोपनीयता नीति बताती है कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं जब आप हमारी वेबसाइट पर जाते हैं और प्रीमियम डोमेन नाम खरीदते हैं।

**2. एकत्रित जानकारी**

हम एकत्र कर सकते हैं:
- नाम और ईमेल पता
- भुगतान जानकारी (Stripe द्वारा सुरक्षित रूप से संसाधित)
- आईपी पता और ब्राउज़र जानकारी
- संचार जानकारी

**3. जानकारी का उपयोग**

आपकी जानकारी का उपयोग किया जाता है:
- डोमेन खरीद को संसाधित करने के लिए
- ट्रांसफर टोकन वितरित करने के लिए
- ग्राहक सहायता प्रदान करने के लिए
- हमारी सेवाओं में सुधार करने के लिए

**4. डेटा साझाकरण**

हम आपकी जानकारी इनके साथ साझा करते हैं:
- भुगतान प्रोसेसर (Stripe)
- कानून द्वारा आवश्यक होने पर

हम आपकी व्यक्तिगत जानकारी तीसरे पक्षों को नहीं बेचते।

**5. डेटा सुरक्षा**

हम आपकी जानकारी की सुरक्षा के लिए SSL एन्क्रिप्शन और सुरक्षित भुगतान प्रसंस्करण का उपयोग करते हैं।

**6. आपके अधिकार**

GDPR के तहत आपको इसका अधिकार है:
- अपने डेटा तक पहुंच
- अपने डेटा में सुधार
- अपने डेटा को हटाना
- डेटा प्रसंस्करण पर आपत्ति

**7. संपर्क**

गोपनीयता संबंधी प्रश्नों के लिए: support@iaee.eu`
  },
  {
    title: "अस्वीकरण",
    content: `**1. SEO प्रदर्शन**

प्रदर्शित Domain Authority स्कोर और बैकलिंक मेट्रिक्स तीसरे पक्ष के उपकरणों (Moz, Ahrefs, आदि) पर आधारित हैं और यह:
- समय के साथ बदल सकते हैं
- भविष्य के परिणामों की गारंटी नहीं हैं
- सर्च इंजन अपडेट से प्रभावित हो सकते हैं

**2. कोई गारंटी नहीं**

हम इसकी गारंटी नहीं देते:
- विशिष्ट सर्च इंजन रैंकिंग
- ट्रैफिक वृद्धि
- Domain Authority का बनाए रखना
- बैकलिंक स्थिरता

**3. उचित परिश्रम**

खरीदारों को सलाह दी जाती है:
- खरीद से पहले डोमेन इतिहास सत्यापित करें
- स्पैम जोखिमों के लिए बैकलिंक प्रोफाइल की जांच करें
- डोमेन इतिहास के लिए archive.org की जांच करें

**4. बाहरी कारक**

SEO प्रदर्शन कई कारकों से प्रभावित होता है:
- गूगल एल्गोरिथम अपडेट
- प्रतिस्पर्धी गतिविधि
- कंटेंट गुणवत्ता
- तकनीकी कार्यान्वयन

**5. निवेश जोखिम**

डोमेन नाम निवेश में जोखिम शामिल है। पिछला प्रदर्शन भविष्य के परिणामों का संकेत नहीं है।`
  },
  {
    title: "कुकी नीति",
    content: `**1. कुकीज़ क्या हैं**

कुकीज़ छोटी टेक्स्ट फाइलें हैं जो आपके डिवाइस पर संग्रहीत होती हैं। वे वेबसाइटों को आपकी प्राथमिकताओं और पिछली यात्राओं को याद रखने में मदद करती हैं।

**2. हम कुकीज़ का उपयोग कैसे करते हैं**

हम कुकीज़ का उपयोग करते हैं:
- आवश्यक वेबसाइट कार्यक्षमता के लिए
- एनालिटिक्स के लिए (Google Analytics)
- भुगतान प्रसंस्करण के लिए (Stripe)

**3. कुकी के प्रकार**

- आवश्यक कुकीज़: वेबसाइट संचालन के लिए आवश्यक
- एनालिटिक्स कुकीज़: विज़िटर व्यवहार को समझने में मदद करती हैं
- मार्केटिंग कुकीज़: विज्ञापन ट्रैकिंग के लिए उपयोग की जाती हैं

**4. कुकीज़ प्रबंधित करना**

आप अपने ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ प्रबंधित कर सकते हैं। कुकीज़ अक्षम करने से वेबसाइट कार्यक्षमता प्रभावित हो सकती है।

**5. तृतीय-पक्ष कुकीज़**

हमारी वेबसाइट तृतीय-पक्ष सेवाओं से कुकीज़ का उपयोग कर सकती है:
- Google Analytics
- Stripe (भुगतान प्रसंस्करण)

**6. अपडेट**

यह नीति समय-समय पर अपडेट की जा सकती है। परिवर्तन पोस्ट होने पर प्रभावी होते हैं।`
  }
];

const PremiumDomainsLegalHI = () => {
  return (
    <>
      <Helmet>
        <title>कानूनी दस्तावेज़ प्रीमियम डोमेन | नियम और शर्तें, गोपनीयता, अस्वीकरण</title>
        <meta 
          name="description" 
          content="प्रीमियम डोमेन नामों की बिक्री के लिए कानूनी दस्तावेज़। SEO मूल्य वाले एक्सपायर्ड डोमेन की खरीद के लिए नियम और शर्तें, गोपनीयता नीति, अस्वीकरण और कुकी नीति।" 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/hi/premium-domain-kharidein-kanuni-dastavez" />
        <html lang="hi" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">प्रीमियम डोमेन</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    होम
                  </Button>
                </Link>
                <Link to="/expireddomainnames/hi/premium-domain-kharidein-uchch-authority-seo-mulya">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    डोमेन पर वापस जाएं
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Crown className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                कानूनी दस्तावेज़
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                प्रीमियम एक्सपायर्ड डोमेन नामों की बिक्री से संबंधित सभी कानूनी जानकारी। 
                हमारे नियम और शर्तें, गोपनीयता नीति, अस्वीकरण और कुकी नीति पढ़ें।
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">कानूनी दस्तावेज़</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {legalDocuments.map((doc, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-slate-800/50 border border-slate-700 rounded-lg px-6">
                    <AccordionTrigger className="text-white hover:text-amber-400 text-lg font-semibold">
                      {doc.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 leading-relaxed">
                      <div className="prose prose-invert max-w-none">
                        {doc.content.split('\n').map((line, lineIndex) => {
                          if (line.startsWith('**') && line.endsWith('**')) {
                            return <h3 key={lineIndex} className="text-amber-400 font-semibold mt-4 mb-2">{line.replace(/\*\*/g, '')}</h3>;
                          }
                          return <p key={lineIndex} className="mb-2">{line}</p>;
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">महत्वपूर्ण जानकारी</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">हमारी सेवा के बारे में:</strong> हम मौजूदा डोमेन अथॉरिटी और बैकलिंक्स के साथ प्रीमियम एक्सपायर्ड डोमेन नाम प्रदान करते हैं। ये डोमेन आपके ऑनलाइन प्रोजेक्ट्स के लिए मूल्यवान SEO लाभ प्रदान कर सकते हैं।
                  </p>
                  <p>
                    <strong className="text-amber-400">कोई गारंटी नहीं:</strong> जबकि हम गुणवत्ता वाले डोमेन के लिए प्रयास करते हैं, हम कोई विशिष्ट SEO परिणाम, रैंकिंग या Domain Authority के बनाए रखने की गारंटी नहीं दे सकते। सर्च इंजन एल्गोरिदम और बैकलिंक प्रोफाइल बदल सकते हैं।
                  </p>
                  <p>
                    <strong className="text-amber-400">अंतिम बिक्री:</strong> सभी डोमेन बिक्री अंतिम हैं। ट्रांसफर के बाद, आप डोमेन के लिए पूरी तरह जिम्मेदार हैं, जिसमें नवीनीकरण, होस्टिंग और कंटेंट शामिल है।
                  </p>
                  <p>
                    <strong className="text-amber-400">संपर्क:</strong> हमारे कानूनी दस्तावेज़ों या डोमेन बिक्री के बारे में प्रश्नों के लिए, कृपया संपर्क करें{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsHI />
      </div>
    </>
  );
};

export default PremiumDomainsLegalHI;

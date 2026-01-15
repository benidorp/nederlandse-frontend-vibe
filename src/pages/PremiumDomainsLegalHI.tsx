import { Helmet } from "react-helmet";
import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsHI from "@/components/premium-domains/LegalFooterPremiumDomainsHI";
import FooterPremiumDomainsHI from "@/components/premium-domains/FooterPremiumDomainsHI";

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
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/hi/premium-domain-kanooni-dastavez" />
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
        <LegalFooterPremiumDomainsHI />

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
                    <strong className="text-amber-400">कोई गारंटी नहीं:</strong> हालांकि हम गुणवत्ता वाले डोमेन के लिए प्रयास करते हैं, हम विशिष्ट SEO परिणामों, रैंकिंग या डोमेन अथॉरिटी बनाए रखने की गारंटी नहीं दे सकते। सर्च इंजन एल्गोरिथम और बैकलिंक प्रोफाइल बदल सकते हैं।
                  </p>
                  <p>
                    <strong className="text-amber-400">अंतिम बिक्री:</strong> सभी डोमेन बिक्री अंतिम हैं। ट्रांसफर के बाद, आप डोमेन के लिए पूरी तरह से जिम्मेदार हैं, जिसमें नवीनीकरण, होस्टिंग और सामग्री शामिल है।
                  </p>
                  <p>
                    <strong className="text-amber-400">संपर्क:</strong> हमारे कानूनी दस्तावेज़ों या डोमेन बिक्री के बारे में प्रश्नों के लिए, कृपया हमसे संपर्क करें{" "}
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

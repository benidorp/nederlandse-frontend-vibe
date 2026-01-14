import { Helmet } from "react-helmet";
import { Crown, ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalFooterPremiumDomainsTR from "@/components/premium-domains/LegalFooterPremiumDomainsTR";
import FooterPremiumDomainsTR from "@/components/premium-domains/FooterPremiumDomainsTR";

const PremiumDomainsLegalTR = () => {
  return (
    <>
      <Helmet>
        <title>Yasal Belgeler Premium Alan Adları | Şartlar ve Koşullar, Gizlilik, Sorumluluk Reddi</title>
        <meta 
          name="description" 
          content="Premium alan adı satışları için yasal belgeler. Şartlar ve koşullar, gizlilik politikası, sorumluluk reddi ve SEO değerine sahip süresi dolmuş alan adlarının satın alınması için çerez politikası." 
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/tr/premium-alan-adlari-yasal-belgeler" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
        {/* Header */}
        <header className="py-6 border-b border-slate-800 bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" className="flex items-center gap-3">
                <Crown className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold text-white">Premium Alan Adları</span>
              </Link>
              <div className="flex items-center gap-3">
                <Link to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <Home className="mr-2 h-4 w-4" />
                    Ana Sayfa
                  </Button>
                </Link>
                <Link to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri">
                  <Button variant="outline" className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Alan Adlarına Geri Dön
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
                Yasal Belgeler
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Premium süresi dolmuş alan adlarının satışıyla ilgili tüm yasal bilgiler. 
                Şartlar ve koşullarımızı, gizlilik politikamızı, sorumluluk reddimizi ve çerez politikamızı okuyun.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Section */}
        <LegalFooterPremiumDomainsTR />

        {/* Additional Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Önemli Bilgiler</h2>
                <div className="space-y-4 text-slate-300">
                  <p>
                    <strong className="text-amber-400">Hizmetimiz Hakkında:</strong> Mevcut alan adı otoritesine ve backlinklere sahip premium süresi dolmuş alan adları sunuyoruz. Bu alan adları çevrimiçi projeleriniz için değerli SEO faydaları sağlayabilir.
                  </p>
                  <p>
                    <strong className="text-amber-400">Garanti Yok:</strong> Kaliteli alan adları için çalışsak da, belirli SEO sonuçlarını, sıralamaları veya Alan Adı Otoritesinin korunmasını garanti edemeyiz. Arama motoru algoritmaları ve backlink profilleri değişebilir.
                  </p>
                  <p>
                    <strong className="text-amber-400">Nihai Satış:</strong> Tüm alan adı satışları nihaidir. Transferden sonra, yenileme, hosting ve içerik dahil alan adından tamamen siz sorumlusunuz.
                  </p>
                  <p>
                    <strong className="text-amber-400">İletişim:</strong> Yasal belgelerimiz veya alan adı satışları hakkında sorularınız için lütfen{" "}
                    <a href="mailto:support@iaee.eu" className="text-amber-400 hover:underline">
                      support@iaee.eu
                    </a> adresinden bize ulaşın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <FooterPremiumDomainsTR />
      </div>
    </>
  );
};

export default PremiumDomainsLegalTR;

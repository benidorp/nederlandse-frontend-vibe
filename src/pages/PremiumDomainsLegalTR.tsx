import { Helmet } from "react-helmet";
import { Crown, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import LegalFooterPremiumDomainsTR from "@/components/premium-domains/LegalFooterPremiumDomainsTR";
import FooterPremiumDomainsTR from "@/components/premium-domains/FooterPremiumDomainsTR";

const PremiumDomainsLegalTR = () => {
  return (
    <>
      <Helmet>
        <title>Yasal Belgeler - Premium Alan Adları | Şartlar, Gizlilik, Çerez Politikası</title>
        <meta name="description" content="Premium süresi dolmuş alan adlarının satışıyla ilgili tüm yasal belgeler ve önemli bilgiler. Şartlar ve Koşullar, Gizlilik Politikası, Sorumluluk Reddi ve Çerez Politikası." />
        <link rel="canonical" href="https://iaee.eu/expireddomainnames/tr/premium-alan-adlari-yasal-belgeler" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-amber-500/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" className="flex items-center gap-3">
              <Crown className="h-8 w-8 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                Premium Alan Adları
              </span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link to="/" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <Home className="h-4 w-4" />
                Ana Sayfa
              </Link>
              <Link to="/expireddomainnames/tr/premium-alan-adlari-yuksek-otorite-seo-degeri" className="text-slate-300 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" />
                Alan Adlarına Geri Dön
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  Yasal Belgeler
                </span>
              </h1>
              <p className="text-slate-400 text-lg">
                Premium süresi dolmuş alan adlarının satışıyla ilgili önemli yasal bilgiler ve belgeler.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Documents Accordion */}
        <LegalFooterPremiumDomainsTR />

        {/* Important Information Section */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center">Önemli Bilgiler</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Hizmetimiz Hakkında</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Premium Alan Adları olarak, yüksek alan adı otoritesine ve kaliteli backlinklere sahip premium süresi dolmuş alan adları satışında uzmanlaşmış bir pazar yeri işletiyoruz. Her alan adı dikkatle seçilir ve kalite için kontrol edilir.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">SEO Garantisi Yok</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    SEO ajansı veya danışmanı DEĞİLİZ. Sıralamalar, trafik veya SEO sonuçları hakkında herhangi bir garanti vermiyoruz. Alan adı otoritesi satın almadan önce ve sonra değişebilir.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Satış Politikası</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Tüm satışlar nihai ve geri döndürülemezdir. Alan adları ödeme sonrasında 48 saat içinde transfer edilir. Transfer sonrası artık alan adından sorumlu değiliz.
                  </p>
                </div>
                
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-amber-400 mb-3">Bizimle İletişime Geçin</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Yasal belgelerimiz veya hizmetlerimiz hakkında sorularınız mı var? Lütfen bizimle iletişime geçin: info@iaeecommunity.com
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

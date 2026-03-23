import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, FileText, Shield, Globe, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { type VATCalcTranslation } from "@/data/vatCalcTranslations";

interface Props {
  t: VATCalcTranslation;
}

const VATPromoBoxesTemplate = ({ t }: Props) => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.promoSectionTitle}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Premium Domains Box */}
            <Card className="group relative overflow-hidden border-2 border-amber-500/30 bg-gradient-to-br from-amber-500/10 via-background to-background hover:border-amber-500/50 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 text-2xl">{t.promoPremiumTitle}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed font-bold text-lg">{t.promoPremiumDesc}</p>
                    <Link
                      to={t.promoPremiumLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group-hover:translate-x-1"
                    >
                      {t.promoPremiumCta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-amber-500" />
                    <span>DA 20-38</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="w-4 h-4 text-amber-500" />
                    <span>110+ Domains</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Documents Box */}
            <Card className="group relative overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <CardContent className="p-6 relative">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground mb-2 text-2xl">{t.promoLegalTitle}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed font-bold text-lg">{t.promoLegalDesc}</p>
                    <Link
                      to={t.promoLegalLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group-hover:translate-x-1"
                    >
                      {t.promoLegalCta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>GDPR</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4 text-primary" />
                    <span>15+ Templates</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* NordVPN Promo Box */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg p-6">
            <div className="text-center">
              <h3 className="font-bold text-white mb-3 text-2xl">{t.promoVpnTitle}</h3>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed font-semibold text-xl">
                {t.promoVpnDesc}
              </p>
              <a
                href="https://www.tkqlhce.com/click-100643838-14352852"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2.5 px-8 rounded-full transition-colors text-sm shadow-lg hover:shadow-xl"
              >
                {t.promoVpnCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VATPromoBoxesTemplate;

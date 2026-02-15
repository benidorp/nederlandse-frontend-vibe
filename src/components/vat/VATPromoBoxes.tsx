import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, FileText, Shield, Globe, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

interface VATPromoBoxesProps {
  lang: "nl" | "en" | "de" | "fr" | "es" | "it" | "pl";
}

const translations = {
  nl: {
    premiumDomainsTitle: "🌐 Premium Domeinnamen met SEO Waarde",
    premiumDomainsDesc:
    "Koop verlopen domeinnamen met hoge MOZ autoriteit en kwalitatieve backlinks. Boost je SEO direct!",
    premiumDomainsCta: "Bekijk Premium Domeinen",
    premiumDomainsLink: "/expireddomainnames/nl/premium-domeinnamen-kopen-hoge-autoriteit-seo-waarde",
    legalDocsTitle: "📋 Juridische Documenten voor Websites",
    legalDocsDesc:
    "Bescherm je online business met professionele algemene voorwaarden, privacybeleid, cookie policy en meer.",
    legalDocsCta: "Bekijk Juridische Templates",
    legalDocsLink:
    "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    vpnTitle: "🔒 Bescherm Je Privacy met NordVPN",
    vpnDesc: "Een VPN versleutelt je internetverbinding en verbergt je IP-adres, waardoor je persoonlijke gegevens worden beschermd tegen hackers, trackers en surveillance.",
    vpnCta: "Haal NordVPN Nu →",
    sectionTitle: "Ontdek Onze Andere Diensten"
  },
  en: {
    premiumDomainsTitle: "🌐 Premium Domains with SEO Value",
    premiumDomainsDesc:
    "Buy expired domain names with high MOZ authority and quality backlinks. Boost your SEO instantly!",
    premiumDomainsCta: "View Premium Domains",
    premiumDomainsLink: "/expireddomainnames/en/buy-premium-domains-high-authority-seo-value",
    legalDocsTitle: "📋 Legal Documents for Websites",
    legalDocsDesc:
    "Protect your online business with professional terms and conditions, privacy policy, cookie policy and more.",
    legalDocsCta: "View Legal Templates",
    legalDocsLink:
    "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    vpnTitle: "🔒 Protect Your Privacy with NordVPN",
    vpnDesc: "A VPN encrypts your internet connection and hides your IP address, protecting your personal data from hackers, trackers and surveillance.",
    vpnCta: "Get NordVPN Now →",
    sectionTitle: "Discover Our Other Services"
  },
  de: {
    premiumDomainsTitle: "🌐 Premium-Domains mit SEO-Wert",
    premiumDomainsDesc:
    "Kaufen Sie abgelaufene Domains mit hoher MOZ-Autorität und hochwertigen Backlinks. Steigern Sie Ihre SEO sofort!",
    premiumDomainsCta: "Premium-Domains ansehen",
    premiumDomainsLink: "/expireddomainnames/de/premium-domains-kaufen-hohe-autoritaet-seo-wert",
    legalDocsTitle: "📋 Rechtsdokumente für Websites",
    legalDocsDesc:
    "Schützen Sie Ihr Online-Business mit professionellen AGB, Datenschutzrichtlinien, Cookie-Richtlinien und mehr.",
    legalDocsCta: "Rechtsvorlagen ansehen",
    legalDocsLink:
    "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    vpnTitle: "🔒 Schützen Sie Ihre Privatsphäre mit NordVPN",
    vpnDesc: "Ein VPN verschlüsselt Ihre Internetverbindung und verbirgt Ihre IP-Adresse, wodurch Ihre persönlichen Daten vor Hackern, Trackern und Überwachung geschützt werden.",
    vpnCta: "NordVPN Jetzt Holen →",
    sectionTitle: "Entdecken Sie unsere anderen Dienste"
  },
  fr: {
    premiumDomainsTitle: "🌐 Domaines Premium avec Valeur SEO",
    premiumDomainsDesc:
    "Achetez des noms de domaine expirés avec une haute autorité MOZ et des backlinks de qualité. Boostez votre SEO instantanément !",
    premiumDomainsCta: "Voir les Domaines Premium",
    premiumDomainsLink: "/expireddomainnames/fr/acheter-domaines-premium-haute-autorite-valeur-seo",
    legalDocsTitle: "📋 Documents Juridiques pour Sites Web",
    legalDocsDesc:
    "Protégez votre entreprise en ligne avec des conditions générales professionnelles, politique de confidentialité, politique de cookies et plus.",
    legalDocsCta: "Voir les Modèles Juridiques",
    legalDocsLink:
    "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    vpnTitle: "🔒 Protégez Votre Vie Privée avec NordVPN",
    vpnDesc: "Un VPN chiffre votre connexion internet et masque votre adresse IP, protégeant vos données personnelles contre les pirates, les trackers et la surveillance.",
    vpnCta: "Obtenez NordVPN Maintenant →",
    sectionTitle: "Découvrez Nos Autres Services"
  },
  es: {
    premiumDomainsTitle: "🌐 Dominios Premium con Valor SEO",
    premiumDomainsDesc:
    "Compra nombres de dominio expirados con alta autoridad MOZ y backlinks de calidad. ¡Impulsa tu SEO al instante!",
    premiumDomainsCta: "Ver Dominios Premium",
    premiumDomainsLink: "/expireddomainnames/es/comprar-dominios-premium-alta-autoridad-valor-seo",
    legalDocsTitle: "📋 Documentos Legales para Sitios Web",
    legalDocsDesc:
    "Protege tu negocio online con términos y condiciones profesionales, política de privacidad, política de cookies y más.",
    legalDocsCta: "Ver Plantillas Legales",
    legalDocsLink:
    "/es/documentos-legales-sitios-web-afiliados-terminos-condiciones-politica-privacidad-divulgacion-cookies",
    vpnTitle: "🔒 Protege Tu Privacidad con NordVPN",
    vpnDesc: "Una VPN cifra tu conexión a internet y oculta tu dirección IP, protegiendo tus datos personales de hackers, rastreadores y vigilancia.",
    vpnCta: "Obtén NordVPN Ahora →",
    sectionTitle: "Descubre Nuestros Otros Servicios"
  },
  it: {
    premiumDomainsTitle: "🌐 Domini Premium con Valore SEO",
    premiumDomainsDesc:
    "Acquista nomi di dominio scaduti con alta autorità MOZ e backlink di qualità. Potenzia il tuo SEO istantaneamente!",
    premiumDomainsCta: "Vedi Domini Premium",
    premiumDomainsLink: "/expireddomainnames/it/acquista-domini-premium-alta-autorita-valore-seo",
    legalDocsTitle: "📋 Documenti Legali per Siti Web",
    legalDocsDesc:
    "Proteggi il tuo business online con termini e condizioni professionali, privacy policy, cookie policy e altro.",
    legalDocsCta: "Vedi Template Legali",
    legalDocsLink:
    "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    vpnTitle: "🔒 Proteggi la Tua Privacy con NordVPN",
    vpnDesc: "Una VPN crittografa la tua connessione internet e nasconde il tuo indirizzo IP, proteggendo i tuoi dati personali da hacker, tracker e sorveglianza.",
    vpnCta: "Ottieni NordVPN Ora →",
    sectionTitle: "Scopri I Nostri Altri Servizi"
  },
  pl: {
    premiumDomainsTitle: "🌐 Domeny Premium z Wartością SEO",
    premiumDomainsDesc:
    "Kup wygasłe domeny z wysokim autorytetem MOZ i jakościowymi backlinkami. Wzmocnij swoje SEO natychmiast!",
    premiumDomainsCta: "Zobacz Domeny Premium",
    premiumDomainsLink: "/expireddomainnames/pl/kup-domeny-premium-wysoki-autorytet-wartosc-seo",
    legalDocsTitle: "📋 Dokumenty Prawne dla Stron Internetowych",
    legalDocsDesc:
    "Chroń swój biznes online profesjonalnymi regulaminami, polityką prywatności, polityką cookies i więcej.",
    legalDocsCta: "Zobacz Szablony Prawne",
    legalDocsLink:
    "/affiliate-website-protection-essential-legal-documents-terms-conditions-privacy-policy-disclosure-cookie-policy",
    vpnTitle: "🔒 Chroń Swoją Prywatność z NordVPN",
    vpnDesc: "VPN szyfruje twoje połączenie internetowe i ukrywa twój adres IP, chroniąc twoje dane osobowe przed hakerami, trackerami i inwigilacją.",
    vpnCta: "Pobierz NordVPN Teraz →",
    sectionTitle: "Odkryj Nasze Inne Usługi"
  }
};

const VATPromoBoxes = ({ lang }: VATPromoBoxesProps) => {
  const t = translations[lang];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t.sectionTitle}</span>
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
                    <h3 className="font-bold text-foreground mb-2 text-2xl">{t.premiumDomainsTitle}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed font-bold text-base">{t.premiumDomainsDesc}</p>
                    <Link
                      to={t.premiumDomainsLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group-hover:translate-x-1">

                      {t.premiumDomainsCta}
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
                    <h3 className="font-bold text-foreground mb-2 text-2xl">{t.legalDocsTitle}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed font-bold text-base">{t.legalDocsDesc}</p>
                    <Link
                      to={t.legalDocsLink}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg group-hover:translate-x-1">

                      {t.legalDocsCta}
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
              <h3 className="font-bold text-white text-xl mb-3">{t.vpnTitle}</h3>
              <p className="text-white/90 mb-4 max-w-2xl mx-auto leading-relaxed font-semibold text-lg">
                {t.vpnDesc}
              </p>
              <a
                href="https://www.tkqlhce.com/click-100643838-14352852"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-2.5 px-8 rounded-full transition-colors text-sm shadow-lg hover:shadow-xl">

                {t.vpnCta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default VATPromoBoxes;
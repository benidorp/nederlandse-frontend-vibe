import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Shield, Cookie, Scale, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FooterPremiumDomainsJA from "@/components/premium-domains/FooterPremiumDomainsJA";
import LanguageSwitcher from "@/components/premium-domains/LanguageSwitcher";
import { SEOHead, PREMIUM_DOMAINS_LEGAL_HREFLANG, getLegalPageBreadcrumbs } from "@/components/seo";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

const PremiumDomainsLegalJA = () => {
  const breadcrumbItems = getLegalPageBreadcrumbs("ja");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <SEOHead
        title="法的文書 - プレミアムドメイン | 利用規約・プライバシーポリシー"
        description="プレミアムドメインの法的文書。利用規約、プライバシーポリシー、Cookieポリシー、免責事項をご確認ください。"
        canonical="https://www.iaee.eu/expireddomainnames/ja/houritsu-bunsho-premium-domain"
        lang="ja"
        robots="noindex, nofollow"
        hreflangLinks={PREMIUM_DOMAINS_LEGAL_HREFLANG}
        xDefaultUrl="https://www.iaee.eu/expireddomainnames/en/premium-domains-legal-documents"
        breadcrumbs={breadcrumbItems.map((item, i) => ({
          name: item.label,
          url: i === 0 ? "https://www.iaee.eu/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" : "https://www.iaee.eu/expireddomainnames/ja/houritsu-bunsho-premium-domain"
        }))}
        faqItems={[
          { question: "利用規約の内容は？", answer: "プレミアム期限切れドメインの販売、移転、返金ポリシーをカバーしています。" },
          { question: "プライバシーはどのように扱われますか？", answer: "最小限のデータのみを収集し、個人情報を第三者と共有することはありません。" }
        ]}
      />

      <LanguageSwitcher currentLanguage="ja" />

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi" 
              className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>ドメインに戻る</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>ホーム</span>
            </Link>
          </div>
          <Breadcrumbs 
            items={breadcrumbItems} 
            homeLabel="ホーム" 
            homeHref="/expireddomainnames/ja/puremiamudomein-kounyuu-seo-kachi"
            className="mt-4 text-slate-400"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            法的文書
          </h1>

          <div className="space-y-8">
            {/* Terms and Conditions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <FileText className="w-6 h-6 text-amber-400" />
                  利用規約
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>当ウェブサイトを利用することで、これらの利用規約に同意したものとみなされます。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">1. サービスの説明</h3>
                <p>当社はプレミアム期限切れドメインの販売を行っています。各ドメインにはMOZ指標（Domain Authority、Page Authority、バックリンク）に関する情報が含まれています。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">2. 支払いと配送</h3>
                <p>支払いはStripeを通じて安全に処理されます。支払い確認後、ドメインの移転手続きを開始します。移転には通常5〜7営業日かかります。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">3. 返金ポリシー</h3>
                <p>ドメイン移転完了後の返金はできません。技術的な問題が発生した場合は、サポートまでご連絡ください。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">4. 免責事項</h3>
                <p>MOZ指標は参考情報です。SEOの結果は保証されません。ドメインの価値は時間とともに変動する可能性があります。</p>
              </CardContent>
            </Card>

            {/* Privacy Policy */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Shield className="w-6 h-6 text-amber-400" />
                  プライバシーポリシー
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>お客様のプライバシーは当社にとって重要です。このポリシーでは、お客様の情報をどのように収集、使用、保護するかを説明します。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">収集する情報</h3>
                <p>お問い合わせフォームを通じて提供されたお名前、メールアドレス、その他の連絡先情報を収集します。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">情報の使用目的</h3>
                <p>お客様の情報は、お問い合わせへの対応、ドメイン取引の処理、サービスの改善のために使用されます。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">情報の保護</h3>
                <p>お客様の個人情報は適切なセキュリティ対策により保護されています。第三者への販売や共有は行いません。</p>
              </CardContent>
            </Card>

            {/* Cookie Policy */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Cookie className="w-6 h-6 text-amber-400" />
                  Cookieポリシー
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>当ウェブサイトではCookieを使用してユーザーエクスペリエンスを向上させています。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">使用するCookie</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>必須Cookie：ウェブサイトの基本機能に必要</li>
                  <li>分析Cookie：訪問者の行動を理解するために使用</li>
                  <li>機能Cookie：設定や好みを記憶</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-white mt-6">Cookieの管理</h3>
                <p>ブラウザの設定でCookieを無効にすることができます。ただし、一部の機能が正常に動作しなくなる可能性があります。</p>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <Scale className="w-6 h-6 text-amber-400" />
                  免責事項
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-4">
                <p>当ウェブサイトの情報は一般的な情報提供を目的としています。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">SEO指標について</h3>
                <p>表示されているMOZ指標（DA、PA、バックリンク）は変動する可能性があります。これらは参考情報であり、将来のSEOパフォーマンスを保証するものではありません。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">投資リスク</h3>
                <p>ドメインへの投資にはリスクが伴います。ご購入前に十分な調査を行うことをお勧めします。</p>
                
                <h3 className="text-lg font-semibold text-white mt-6">責任の制限</h3>
                <p>当社は、ドメインの使用から生じるいかなる損害についても責任を負いません。</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <FooterPremiumDomainsJA />
    </div>
  );
};

export default PremiumDomainsLegalJA;
import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesJA = () => {
  const documents = [
    {
      icon: FileText,
      title: "利用規約",
      description: "サイトの利用、ユーザーの権利、義務、法的枠組みをカバーする包括的な利用規約。",
      features: ["サイト利用ルール", "知的財産権", "責任制限", "解約条件"]
    },
    {
      icon: Shield,
      title: "プライバシーポリシー",
      description: "データ収集、使用、保護を説明するGDPR準拠のポリシー。",
      features: ["データ収集", "使用目的", "ユーザーの権利", "データセキュリティ"]
    },
    {
      icon: Cookie,
      title: "Cookieポリシー",
      description: "サイトでのCookieと追跡技術の使用に関する詳細な説明。",
      features: ["Cookieの種類", "使用目的", "Cookie管理", "サードパーティCookie"]
    },
    {
      icon: Users,
      title: "アフィリエイト開示",
      description: "FTCガイドラインに従ったアフィリエイト関係の透明な開示。",
      features: ["コミッション構造", "広告主との関係", "商品配置", "レビューポリシー"]
    },
    {
      icon: AlertTriangle,
      title: "免責事項",
      description: "サイトのコンテンツと推奨事項に対する法的保護。",
      features: ["コンテンツの正確性", "専門的アドバイス", "外部リンク", "コンテンツの変更"]
    },
    {
      icon: BookOpen,
      title: "実装ガイド",
      description: "すべての文書のインストールとカスタマイズに関するステップバイステップの手順。",
      features: ["インストール手順", "カスタマイズのヒント", "ベストプラクティス", "メンテナンスのヒント"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            パッケージに含まれるもの
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            1つの完全なパッケージでウェブサイトに必要なすべての法的文書を取得
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <doc.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {doc.title}
              </h3>
              <p className="text-slate-600 mb-4">
                {doc.description}
              </p>
              <ul className="space-y-2">
                {doc.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesJA;

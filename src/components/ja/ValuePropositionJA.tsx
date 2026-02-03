import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionJA = () => {
  const benefits = [
    {
      icon: Shield,
      title: "法的保護",
      description: "ビジネスを法的責任から保護し、コンプライアンスを確保する包括的な文書。"
    },
    {
      icon: FileText,
      title: "プロフェッショナルテンプレート",
      description: "ウェブサイトとデジタルビジネス向けに特別に調整された法的文書。"
    },
    {
      icon: Clock,
      title: "即時アクセス",
      description: "購入後すぐにダウンロード。待ち時間なし、遅延なし — 今日から実装可能。"
    },
    {
      icon: Globe,
      title: "国際コンプライアンス",
      description: "GDPR、CCPA、FTC準拠。国際的なウェブサイトに適合。"
    },
    {
      icon: CheckCircle,
      title: "簡単な実装",
      description: "明確な指示とカスタマイズ可能なテンプレートでインストールが簡単。"
    },
    {
      icon: Award,
      title: "信頼できる品質",
      description: "世界中の何百ものウェブサイトオーナーが使用し、優れた評価を獲得。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            なぜ当社の法的パッケージを選ぶのか？
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            プロフェッショナルな文書でウェブサイトの完全な法的保護を
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionJA;

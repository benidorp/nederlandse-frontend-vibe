import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionZH = () => {
  const benefits = [
    {
      icon: Shield,
      title: "法律保护",
      description: "全面的文件保护您的业务免受法律责任，确保合规。"
    },
    {
      icon: FileText,
      title: "专业模板",
      description: "专为网站和数字业务定制的法律文件。"
    },
    {
      icon: Clock,
      title: "即时访问",
      description: "购买后立即下载。无需等待，无延迟 — 今天就可以实施。"
    },
    {
      icon: Globe,
      title: "国际合规",
      description: "符合GDPR、CCPA和FTC。适合国际网站。"
    },
    {
      icon: CheckCircle,
      title: "简单实施",
      description: "清晰的说明和可定制的模板使安装变得简单。"
    },
    {
      icon: Award,
      title: "可靠质量",
      description: "全球数百位网站所有者使用，获得优秀评价。"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            为什么选择我们的法律套餐？
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            为您的网站提供专业文件的完整法律保护
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

export default ValuePropositionZH;

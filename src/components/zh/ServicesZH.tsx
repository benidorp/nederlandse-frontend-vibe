import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesZH = () => {
  const documents = [
    {
      icon: FileText,
      title: "条款和条件",
      description: "涵盖网站使用、用户权利、义务和法律框架的全面使用条款。",
      features: ["网站使用规则", "知识产权", "责任限制", "终止条款"]
    },
    {
      icon: Shield,
      title: "隐私政策",
      description: "符合GDPR的政策，解释数据收集、使用和保护。",
      features: ["数据收集", "使用目的", "用户权利", "数据安全"]
    },
    {
      icon: Cookie,
      title: "Cookie政策",
      description: "详细解释网站上cookie和跟踪技术的使用。",
      features: ["Cookie类型", "使用目的", "Cookie管理", "第三方Cookie"]
    },
    {
      icon: Users,
      title: "联盟披露",
      description: "根据FTC指南透明披露联盟关系。",
      features: ["佣金结构", "广告商关系", "产品展示", "评论政策"]
    },
    {
      icon: AlertTriangle,
      title: "免责声明",
      description: "对网站内容和建议的法律保护。",
      features: ["内容准确性", "专业建议", "外部链接", "内容更改"]
    },
    {
      icon: BookOpen,
      title: "实施指南",
      description: "安装和自定义所有文件的分步说明。",
      features: ["安装说明", "自定义提示", "最佳实践", "维护建议"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            套餐包含内容
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            一个完整套餐中获取网站所需的所有法律文件
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

export default ServicesZH;

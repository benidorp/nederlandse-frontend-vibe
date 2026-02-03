import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionKO = () => {
  const benefits = [
    { icon: Shield, title: "법적 보호", description: "법적 책임으로부터 비즈니스를 보호하고 규정 준수를 보장하는 포괄적인 문서." },
    { icon: FileText, title: "전문 템플릿", description: "웹사이트와 디지털 비즈니스를 위해 특별히 맞춤화된 법적 문서." },
    { icon: Clock, title: "즉시 액세스", description: "구매 후 즉시 다운로드. 대기 없음, 지연 없음 — 오늘 바로 구현." },
    { icon: Globe, title: "국제 규정 준수", description: "GDPR, CCPA 및 FTC 준수. 국제 웹사이트에 적합." },
    { icon: CheckCircle, title: "쉬운 구현", description: "명확한 지침과 맞춤 가능한 템플릿으로 설치가 간단합니다." },
    { icon: Award, title: "신뢰할 수 있는 품질", description: "전 세계 수백 명의 웹사이트 소유자가 사용하며 우수한 평가를 받았습니다." }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">왜 저희 법적 패키지를 선택해야 할까요?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">전문 문서로 웹사이트에 완전한 법적 보호 제공</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{benefit.title}</h3>
              <p className="text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionKO;

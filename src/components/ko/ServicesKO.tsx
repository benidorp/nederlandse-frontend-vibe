import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesKO = () => {
  const documents = [
    { icon: FileText, title: "이용약관", description: "사이트 사용, 사용자 권리, 의무 및 법적 프레임워크를 다루는 포괄적인 이용 약관.", features: ["사이트 이용 규칙", "지적 재산권", "책임 제한", "해지 조건"] },
    { icon: Shield, title: "개인정보보호정책", description: "데이터 수집, 사용 및 보호를 설명하는 GDPR 준수 정책.", features: ["데이터 수집", "사용 목적", "사용자 권리", "데이터 보안"] },
    { icon: Cookie, title: "쿠키 정책", description: "사이트에서 쿠키 및 추적 기술 사용에 대한 자세한 설명.", features: ["쿠키 유형", "사용 목적", "쿠키 관리", "제3자 쿠키"] },
    { icon: Users, title: "제휴 공개", description: "FTC 가이드라인에 따른 제휴 관계의 투명한 공개.", features: ["수수료 구조", "광고주 관계", "제품 배치", "리뷰 정책"] },
    { icon: AlertTriangle, title: "면책조항", description: "사이트 콘텐츠 및 권장 사항에 대한 법적 보호.", features: ["콘텐츠 정확성", "전문적 조언", "외부 링크", "콘텐츠 변경"] },
    { icon: BookOpen, title: "구현 가이드", description: "모든 문서의 설치 및 사용자 정의에 대한 단계별 지침.", features: ["설치 지침", "사용자 정의 팁", "모범 사례", "유지 관리 팁"] }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">패키지에 포함된 내용</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">하나의 완전한 패키지로 웹사이트에 필요한 모든 법적 문서 받기</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <doc.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{doc.title}</h3>
              <p className="text-slate-600 mb-4">{doc.description}</p>
              <ul className="space-y-2">
                {doc.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
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

export default ServicesKO;

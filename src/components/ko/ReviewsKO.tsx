import { Star } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ReviewsKO = () => {
  const reviews = [
    { name: "김민수", role: "사이트 소유자", content: "이 법적 문서로 변호사 비용 수백 유로를 절약했습니다. 전문적이고 완전합니다.", rating: 5, image: nicoleProfile },
    { name: "이지영", role: "블로거", content: "사용하기 매우 쉽고 포괄적입니다. 제 사이트가 이제 완전히 법적으로 보호됩니다.", rating: 5, image: nicoleProfile },
    { name: "박준호", role: "디지털 기업가", content: "문서 품질이 우수합니다. 제휴 공개는 제 블로그에 필요한 것이었습니다.", rating: 5, image: nicoleProfile },
    { name: "최수진", role: "전자상거래 소유자", content: "GDPR 준수이며 구현이 쉽습니다. 모든 사이트에 자신있게 추천합니다.", rating: 5, image: nicoleProfile }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">고객 후기</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">수천 명의 웹사이트 소유자가 저희 법적 문서를 신뢰합니다</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">{[...Array(review.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />))}</div>
              <p className="text-slate-600 mb-4 italic">"{review.content}"</p>
              <div className="flex items-center gap-3">
                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                <div><p className="font-semibold text-slate-800">{review.name}</p><p className="text-sm text-slate-500">{review.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsKO;

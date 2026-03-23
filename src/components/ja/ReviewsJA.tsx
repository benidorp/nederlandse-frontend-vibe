import { Star } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ReviewsJA = () => {
  const reviews = [
    {
      name: "田中様",
      role: "サイトオーナー",
      content: "これらの法的文書で弁護士費用を数百ユーロ節約できました。プロフェッショナルで完全です。",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "佐藤様",
      role: "ブロガー",
      content: "非常に使いやすく包括的です。私のサイトは今、完全に法的に保護されています。",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "山田様",
      role: "デジタル起業家",
      content: "文書の品質が素晴らしい。アフィリエイト開示は私のブログに必要なものでした。",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "鈴木様",
      role: "ECサイトオーナー",
      content: "GDPR準拠で実装が簡単。どんなサイトにも自信を持ってお勧めします。",
      rating: 5,
      image: nicoleProfile
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            お客様の声
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            何千ものサイトオーナーが当社の法的文書を信頼しています
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">「{review.content}」</p>
              <div className="flex items-center gap-3">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-800">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsJA;

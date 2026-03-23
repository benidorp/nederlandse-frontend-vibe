import { Star } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ReviewsZH = () => {
  const reviews = [
    {
      name: "王女士",
      role: "网站所有者",
      content: "这些法律文件为我节省了数百欧元的律师费。专业且完整。",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "李先生",
      role: "博主",
      content: "非常易于使用且全面。我的网站现在完全受到法律保护。",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "张先生",
      role: "数字企业家",
      content: "文件质量出色。联盟披露正是我博客所需要的。",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "刘女士",
      role: "电商店主",
      content: "符合GDPR且易于实施。强烈推荐给任何网站。",
      rating: 5,
      image: nicoleProfile
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            客户评价
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            数千位网站所有者信任我们的法律文件
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
              <p className="text-slate-600 mb-4 italic">"{review.content}"</p>
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

export default ReviewsZH;

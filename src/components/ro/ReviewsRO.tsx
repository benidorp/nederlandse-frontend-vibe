import { Star } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ReviewsRO = () => {
  const reviews = [
    {
      name: "Maria A.",
      role: "Proprietar Site",
      content: "Aceste documente legale mi-au economisit sute de euro în taxe de avocat. Profesionale și complete.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Ion B.",
      role: "Blogger",
      content: "Foarte ușor de utilizat și cuprinzător. Site-ul meu este acum complet protejat legal.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Andrei C.",
      role: "Antreprenor Digital",
      content: "Calitate excelentă a documentelor. Dezvăluirea de afiliere este exact ce aveam nevoie pentru blogul meu.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Elena D.",
      role: "Proprietar E-commerce",
      content: "Conform GDPR și ușor de implementat. Recomand cu încredere pentru orice site.",
      rating: 5,
      image: nicoleProfile
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Mii de proprietari de site-uri au încredere în documentele noastre legale
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

export default ReviewsRO;

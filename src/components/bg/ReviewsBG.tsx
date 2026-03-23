import { Star } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ReviewsBG = () => {
  const reviews = [
    {
      name: "Мария А.",
      role: "Собственик на Уебсайт",
      content: "Тези правни документи ми спестиха стотици евро в адвокатски хонорари. Професионални и пълни.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Иван Б.",
      role: "Блогър",
      content: "Много лесно за използване и изчерпателно. Моят уебсайт вече е напълно правно защитен.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Георги В.",
      role: "Дигитален Предприемач",
      content: "Отлично качество на документите. Афилиейт разкриването е точно това, от което имах нужда за моя блог.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Елена Г.",
      role: "Собственик на E-commerce",
      content: "GDPR съвместими и лесни за внедряване. Препоръчвам с увереност за всеки уебсайт.",
      rating: 5,
      image: nicoleProfile
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Какво Казват Нашите Клиенти
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Хиляди собственици на уебсайтове се доверяват на нашите правни документи
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

export default ReviewsBG;

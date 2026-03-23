import { Star } from "lucide-react";
import nicoleProfile from "@/assets/nicole-profile.png";

const ReviewsEL = () => {
  const reviews = [
    {
      name: "Μαρία Α.",
      role: "Ιδιοκτήτρια Ιστοσελίδας",
      content: "Αυτά τα νομικά έγγραφα εξοικονόμησαν εκατοντάδες ευρώ σε δικηγορικές αμοιβές. Επαγγελματικά και πλήρη.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Γιώργος Β.",
      role: "Blogger",
      content: "Πολύ εύκολο στη χρήση και ολοκληρωμένο. Η ιστοσελίδα μου είναι τώρα πλήρως νομικά προστατευμένη.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Νίκος Γ.",
      role: "Ψηφιακός Επιχειρηματίας",
      content: "Άριστη ποιότητα εγγράφων. Η γνωστοποίηση συνεργατών είναι ακριβώς αυτό που χρειαζόμουν για το blog μου.",
      rating: 5,
      image: nicoleProfile
    },
    {
      name: "Ελένη Δ.",
      role: "Ιδιοκτήτρια E-commerce",
      content: "Συμβατό με GDPR και εύκολο στην εφαρμογή. Το συνιστώ ανεπιφύλακτα για κάθε ιστοσελίδα.",
      rating: 5,
      image: nicoleProfile
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Τι Λένε οι Πελάτες μας
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Χιλιάδες ιδιοκτήτες ιστοσελίδων εμπιστεύονται τα νομικά μας έγγραφα
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

export default ReviewsEL;

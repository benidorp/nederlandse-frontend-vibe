import { Shield, FileText, Clock, Globe, CheckCircle, Award } from "lucide-react";

const ValuePropositionEL = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Νομική Προστασία",
      description: "Ολοκληρωμένα έγγραφα που προστατεύουν την επιχείρησή σας από νομικές υποχρεώσεις και διασφαλίζουν συμμόρφωση."
    },
    {
      icon: FileText,
      title: "Επαγγελματικά Πρότυπα",
      description: "Τα νομικά έγγραφα είναι προσαρμοσμένα για ιστοσελίδες και ψηφιακές επιχειρήσεις."
    },
    {
      icon: Clock,
      title: "Άμεση Πρόσβαση",
      description: "Λήψη αμέσως μετά την αγορά. Χωρίς αναμονή, χωρίς καθυστερήσεις — εγκαταστήστε σήμερα."
    },
    {
      icon: Globe,
      title: "Διεθνής Συμμόρφωση",
      description: "Συμβατό με GDPR, CCPA και FTC. Κατάλληλο για διεθνείς ιστοσελίδες."
    },
    {
      icon: CheckCircle,
      title: "Εύκολη Εφαρμογή",
      description: "Σαφείς οδηγίες και προσαρμόσιμες φόρμες καθιστούν την εγκατάσταση απλή."
    },
    {
      icon: Award,
      title: "Αξιόπιστη Ποιότητα",
      description: "Χρησιμοποιείται από εκατοντάδες ιδιοκτήτες ιστοσελίδων παγκοσμίως με εξαιρετικές κριτικές."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Γιατί να Επιλέξετε το Νομικό μας Πακέτο;
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Πλήρης νομική προστασία για την ιστοσελίδα σας με επαγγελματικά έγγραφα
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

export default ValuePropositionEL;

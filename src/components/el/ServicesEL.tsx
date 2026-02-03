import { FileText, Shield, Cookie, Users, AlertTriangle, BookOpen } from "lucide-react";

const ServicesEL = () => {
  const documents = [
    {
      icon: FileText,
      title: "Όροι & Προϋποθέσεις",
      description: "Ολοκληρωμένοι όροι χρήσης που καλύπτουν χρήση ιστοσελίδας, δικαιώματα χρηστών, υποχρεώσεις και νομικό πλαίσιο.",
      features: ["Κανόνες χρήσης ιστοσελίδας", "Δικαιώματα πνευματικής ιδιοκτησίας", "Περιορισμός ευθύνης", "Όροι τερματισμού"]
    },
    {
      icon: Shield,
      title: "Πολιτική Απορρήτου",
      description: "Συμβατή με GDPR πολιτική που εξηγεί τη συλλογή, χρήση και προστασία δεδομένων.",
      features: ["Συλλογή δεδομένων", "Σκοποί χρήσης", "Δικαιώματα χρηστών", "Ασφάλεια δεδομένων"]
    },
    {
      icon: Cookie,
      title: "Πολιτική Cookies",
      description: "Λεπτομερής εξήγηση χρήσης cookies και τεχνολογιών παρακολούθησης στην ιστοσελίδα.",
      features: ["Τύποι cookies", "Σκοποί χρήσης", "Διαχείριση cookies", "Cookies τρίτων"]
    },
    {
      icon: Users,
      title: "Γνωστοποίηση Συνεργατών",
      description: "Διαφανής γνωστοποίηση σχέσεων affiliate σύμφωνα με τις κατευθυντήριες γραμμές FTC.",
      features: ["Δομή προμηθειών", "Σχέσεις με διαφημιζόμενους", "Τοποθέτηση προϊόντων", "Πολιτική αξιολογήσεων"]
    },
    {
      icon: AlertTriangle,
      title: "Αποποίηση Ευθύνης",
      description: "Νομική προστασία για το περιεχόμενο και τις συστάσεις της ιστοσελίδας σας.",
      features: ["Ακρίβεια περιεχομένου", "Επαγγελματικές συμβουλές", "Εξωτερικοί σύνδεσμοι", "Αλλαγές περιεχομένου"]
    },
    {
      icon: BookOpen,
      title: "Οδηγός Εφαρμογής",
      description: "Βήμα προς βήμα οδηγίες για εγκατάσταση και προσαρμογή όλων των εγγράφων.",
      features: ["Οδηγίες εγκατάστασης", "Συμβουλές προσαρμογής", "Βέλτιστες πρακτικές", "Συμβουλές συντήρησης"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Τι Περιλαμβάνεται στο Πακέτο
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Λάβετε όλα τα απαραίτητα νομικά έγγραφα για την ιστοσελίδα σας σε ένα πλήρες πακέτο
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

export default ServicesEL;

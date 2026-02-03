import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQEL = () => {
  const faqs = [
    {
      question: "Ποια νομικά έγγραφα περιλαμβάνονται στο πακέτο;",
      answer: "Το πακέτο περιλαμβάνει Όρους & Προϋποθέσεις, Πολιτική Απορρήτου (συμβατή με GDPR), Πολιτική Cookies, Γνωστοποίηση Συνεργατών (συμβατή με FTC), Αποποίηση Ευθύνης και Οδηγό Εφαρμογής."
    },
    {
      question: "Τα έγγραφα είναι συμβατά με το GDPR;",
      answer: "Ναι, όλα τα έγγραφα είναι πλήρως συμβατά με GDPR, CCPA και τις κατευθυντήριες γραμμές FTC για διεθνή χρήση."
    },
    {
      question: "Πώς λαμβάνω τα έγγραφα μετά την αγορά;",
      answer: "Μετά την πληρωμή, λαμβάνετε άμεση πρόσβαση για λήψη όλων των εγγράφων. Θα λάβετε επίσης email επιβεβαίωσης με τον σύνδεσμο λήψης."
    },
    {
      question: "Μπορώ να προσαρμόσω τα έγγραφα για την ιστοσελίδα μου;",
      answer: "Ναι, όλα τα έγγραφα είναι πλήρως προσαρμόσιμα. Περιλαμβάνεται λεπτομερής οδηγός για εύκολη προσαρμογή."
    },
    {
      question: "Είναι τα έγγραφα κατάλληλα για κάθε τύπο ιστοσελίδας;",
      answer: "Ναι, τα έγγραφα είναι κατάλληλα για blogs, ηλεκτρονικά καταστήματα, ιστοσελίδες affiliates και περισσότερα. Ο οδηγός εφαρμογής βοηθά στην προσαρμογή."
    },
    {
      question: "Λαμβάνω δωρεάν ενημερώσεις;",
      answer: "Ναι, λαμβάνετε δωρεάν ενημερώσεις όταν αλλάζει η νομοθεσία. Τα έγγραφα διατηρούνται πάντα ενημερωμένα."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Απαντήσεις στις πιο συχνές ερωτήσεις για το νομικό μας πακέτο
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-slate-50 rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQEL;

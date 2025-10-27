import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, CheckCircle } from "lucide-react";

const qaItems = [
  {
    question: "Why does my e-learning platform need legal documents?",
    answer: "Without proper legal documents, you risk fines for GDPR violations, liability issues with student data, disputes over course refunds, and intellectual property theft of your course content."
  },
  {
    question: "Are these documents suitable for all types of online courses?",
    answer: "Yes! Whether you offer video courses, live webinars, certification programs, or subscription-based learning - these documents cover all e-learning business models and course types."
  },
  {
    question: "Do I need different documents for each course?",
    answer: "No, you only need one set of legal documents for your entire platform. The terms cover all your courses, regardless of topic, price, or format."
  },
  {
    question: "What about instructor agreements?",
    answer: "The package includes terms for working with instructors, covering content ownership, revenue sharing, and responsibilities - perfect for marketplaces with multiple instructors."
  }
];

const ElearningQA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Common Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions About Legal Protection for E-Learning
            </h2>
          </div>

          {/* Q&A Items */}
          <div className="space-y-6">
            {qaItems.map((item, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all shadow-lg hover:shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-md">
                        <CheckCircle className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3 text-foreground">{item.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElearningQA;

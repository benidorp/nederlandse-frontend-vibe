import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, CheckCircle2 } from "lucide-react";

const qaItems = [
  {
    question: "Who needs these legal documents?",
    answer: "Any event organizer, ticketing platform, festival producer, concert promoter, conference organizer, or venue operator selling tickets online needs proper legal documentation to comply with consumer protection laws and limit liability."
  },
  {
    question: "What makes these templates event-specific?",
    answer: "Unlike generic templates, these are specifically designed for ticketing operations including refund scenarios, event cancellations, age verification, capacity limits, safety protocols, and attendee behavior policies."
  },
  {
    question: "How do I implement these documents?",
    answer: "Simply download the templates, fill in your event/company details, customize specific policies (like refund windows), and publish them on your website. Link to them during checkout and in confirmation emails."
  },
  {
    question: "Are these compliant with European regulations?",
    answer: "Yes, all documents are fully GDPR-compliant and align with EU consumer protection directives, including the Consumer Rights Directive for ticket sales and distance selling regulations."
  }
];

const EventTicketingQA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-primary/10 text-primary">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium">Common Questions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions About Event Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions from event organizers about legal protection and documentation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {qaItems.map((item, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTicketingQA;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

const questions = [
  {
    question: "Why do I need legal documents as a photographer?",
    answer: "As a professional photographer, you need legal protection for multiple reasons: to protect your copyright, define clear terms with clients, comply with GDPR when collecting client data, establish payment and cancellation policies, and protect yourself from liability claims. Without proper legal documents, you're exposed to financial and legal risks."
  },
  {
    question: "What's included in the Assignment Agreement (Offerte)?",
    answer: "The Assignment Agreement includes a complete template contract that you can customize for each client. It covers service fees, payment terms, assignment details, delivery timelines, copyright ownership, usage rights, and cancellation policies. We also provide sample agreements and ready-to-use email templates that you can copy and paste when communicating with clients."
  },
  {
    question: "How does the Quitclaim protect me as a photographer?",
    answer: "The Quitclaim allows you to establish clear legal agreements with the people you photograph before the shoot. It covers model releases, portrait rights, usage permissions, and liability waivers. This protects you from future claims and ensures you have documented consent for using and publishing the photos you create."
  },
  {
    question: "Can I use these documents for multiple photography specialties?",
    answer: "Yes! Whether you're a portrait photographer, wedding photographer, commercial photographer, event photographer, or work in multiple specialties, these documents are designed to be flexible and customizable for any type of photography business. Simply adjust the specific services and terms to match your business model."
  },
  {
    question: "Is the Copyright Protection internationally valid?",
    answer: "Yes, the Copyright Protection (Auteursrecht) document is designed with international coverage in mind, referencing the Berne Convention and other international copyright treaties. It establishes your ownership of all photographic works and sets clear terms for licensing, attribution, and enforcement across different countries."
  },
  {
    question: "Do I need a Privacy Policy if I only have a contact form?",
    answer: "Yes! Under GDPR and other privacy laws, if you collect any personal information through your website (even just a name and email via a contact form), you are legally required to have a Privacy Policy. Our photographer-specific Privacy Policy covers all common scenarios including contact forms, booking systems, and client data management."
  },
  {
    question: "Can I customize these documents for my specific services?",
    answer: "Absolutely! All documents are designed to be easily customizable. You can adjust the terms to match your specific services, pricing structure, delivery methods, and business policies. The documents provide a solid legal foundation while giving you the flexibility to personalize them for your unique photography business."
  },
  {
    question: "How do these documents protect my photos from being stolen?",
    answer: "The Disclaimer and Copyright Protection documents clearly establish that you own all rights to your photos and define what others can and cannot do with your images. They include warnings about unauthorized use, reproduction, or distribution. While no document can physically prevent theft, these legal documents give you a strong legal position to enforce your rights and pursue compensation if your work is used without permission."
  },
  {
    question: "Do I need different documents for each photography website I have?",
    answer: "No! With one purchase, you can use these legal documents across all your photography websites. Whether you have one portfolio site or multiple websites for different photography services, the license allows unlimited use. This makes it extremely cost-effective for photographers with multiple online presences."
  },
  {
    question: "What if I work with clients internationally?",
    answer: "The documents are designed with international applicability in mind. They reference international laws and conventions where applicable (like GDPR for European clients, international copyright law, etc.). You can easily specify which jurisdiction's laws apply and customize sections for different markets you serve."
  }
];

const PhotographyQA = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Q&A</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions About Photography Legal Documents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Common questions from photographers about legal protection and documentation
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6">
          {questions.map((item, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-red-600 flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{item.question}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotographyQA;

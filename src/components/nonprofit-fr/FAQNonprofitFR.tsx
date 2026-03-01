import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQNonprofitFR = () => {
  const faqs = [
    {
      question: "Ces documents conviennent-ils à tous les types d'associations ?",
      answer: "Oui ! Ces documents sont conçus pour les associations, fondations, ONG, entreprises sociales et organisations de bénévoles. Ils couvrent toutes les exigences juridiques essentielles pour l'acceptation de dons et la gestion des bénévoles."
    },
    {
      question: "Ces documents fonctionnent-ils pour la collecte de fonds internationale ?",
      answer: "Absolument. Les documents sont conformes au RGPD et contiennent des dispositions pour les dons internationaux, les transferts de données transfrontaliers et les programmes de bénévolat mondiaux. Ils sont utilisés par des organisations dans plus de 35 pays."
    },
    {
      question: "Comment implémenter ces documents sur mon site web ?",
      answer: "Chaque document est accompagné d'un guide d'implémentation complet. Téléchargez simplement les documents, personnalisez-les avec les détails de votre organisation et ajoutez-les au pied de page de votre site web. Le guide contient des instructions spécifiques pour les plateformes web et systèmes de dons populaires."
    },
    {
      question: "Puis-je personnaliser ces documents pour mon organisation ?",
      answer: "Absolument ! Les documents sont fournis dans un format modifiable pour que vous puissiez ajouter le nom, le logo et les détails spécifiques de votre organisation. Le langage juridique essentiel reste protégé tout en permettant la personnalisation nécessaire."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions fréquemment posées
            </h2>
            <p className="text-xl text-muted-foreground">Tout ce que vous devez savoir sur la protection de votre association.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 border-primary/20 rounded-lg px-6 hover:border-primary/40 transition-all">
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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

export default FAQNonprofitFR;

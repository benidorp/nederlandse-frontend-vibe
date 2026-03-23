import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const VATFAQSectionEN = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything About VAT Calculation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Answers to the most frequently asked questions about international VAT
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                What is VAT and why do I need to calculate it?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-3">
                  VAT (Value Added Tax) is an indirect tax that consumers pay on goods and services. 
                  As an entrepreneur, you are required to calculate, collect and remit VAT to the tax authorities.
                </p>
                <p>
                  This calculator helps you quickly and accurately calculate the correct VAT amounts for any country worldwide, 
                  which is essential for correct invoicing and tax returns.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                What is the difference between including and excluding VAT?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50 border">
                    <p className="font-semibold text-foreground mb-2">Excluding VAT (Net amount)</p>
                    <p>
                      This is the amount without tax. If you sell a product for €100 excl. VAT 
                      (with 21% rate), €21 VAT is added, for a total of €121 incl. VAT.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                    <p className="font-semibold text-foreground mb-2">Including VAT (Gross amount)</p>
                    <p>
                      This is the total amount including tax. If a product costs €121 incl. VAT (with 21% rate), 
                      the amount excl. VAT is €100 and the VAT itself is €21.
                    </p>
                  </div>
                  <p className="text-sm italic">
                    💡 Our calculator can calculate both directions - you can choose whether your amount includes or excludes VAT.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Why do VAT rates differ per country?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-4">
                  Each country determines its own VAT rates based on economic policy and government objectives. 
                  EU countries must maintain a minimum 15% standard VAT, but can set their own higher percentages.
                </p>
                <p className="mb-4">
                  Additionally, many countries have reduced rates for essential products such as food, books and medicines. 
                  This varies from 0% to 27% worldwide.
                </p>
                <div className="p-4 rounded-lg bg-muted/50 border">
                  <p className="font-semibold text-foreground mb-2">Examples:</p>
                  <ul className="space-y-1">
                    <li>🇳🇱 Netherlands: 21% (standard) and 9% (reduced)</li>
                    <li>🇩🇪 Germany: 19% (standard) and 7% (reduced)</li>
                    <li>🇭🇺 Hungary: 27% (highest in EU)</li>
                    <li>🇱🇺 Luxembourg: 17% (lowest in EU)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                How do I choose the right VAT rate?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-3">
                  The standard rate is the normal VAT percentage that applies to most goods and services. 
                  The reduced rate is a lower percentage for specific categories such as:
                </p>
                <div className="grid md:grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">🍎 Food</p>
                    <p className="text-sm">Basic foodstuffs</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">💊 Medicines</p>
                    <p className="text-sm">Drugs and medical devices</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">📚 Books</p>
                    <p className="text-sm">Printed and digital publications</p>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border">
                    <p className="font-medium text-foreground mb-1">🎭 Culture</p>
                    <p className="text-sm">Cultural services and events</p>
                  </div>
                </div>
                <p className="text-sm italic">
                  💡 Consult the tax authority of the relevant country for specific information about which rate applies to your product or service.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-background px-6 rounded-xl border-2 shadow-sm hover:shadow-md transition-all">
              <AccordionTrigger headingLevel="h3" className="hover:no-underline text-left font-semibold py-5">
                Can I use this calculator for international trade?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                <p className="mb-4">
                  Yes, this calculator is specially designed for international entrepreneurs. With support for 60+ countries 
                  worldwide, you can easily calculate VAT for your international transactions. The calculator automatically shows 
                  the correct currency per country.
                </p>
                <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20 space-y-2">
                  <p className="font-semibold text-foreground">⚠️ Important for international trade:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• For cross-border trade within the EU, specific rules apply (such as reverse charge for B2B transactions)</li>
                    <li>• For trade outside the EU, other rules may apply</li>
                    <li>• Import/export may involve additional taxes</li>
                  </ul>
                  <p className="text-sm mt-3">
                    💼 Always consult a tax advisor for complex international situations.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default VATFAQSectionEN;

import { Card, CardContent } from "@/components/ui/card";
import { 
  Globe, TrendingUp, Shield, Building2, Calculator, 
  CheckCircle2, AlertTriangle, BookOpen, Users, Scale,
  FileText, Banknote, MapPin, Clock, Target, Lightbulb
} from "lucide-react";

const VATComprehensiveGuideEN = () => {
  return (
    <div className="space-y-16">
      {/* Section 1: What is VAT */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">What is VAT and How Does It Work?</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Value Added Tax (VAT) is a consumption tax applied to goods and services at each stage of production or distribution. 
                Unlike sales tax, which is only charged at the final point of sale, VAT is collected incrementally throughout the 
                supply chain. This fundamental difference makes VAT one of the most efficient and widely adopted taxation systems 
                in the world, used by over 170 countries globally.
              </p>
              
              <p className="leading-relaxed">
                The concept of VAT originated in France during the 1950s and has since become the preferred indirect taxation 
                method for governments worldwide. The European Union mandates VAT for all member states, while countries like 
                the United Kingdom, Australia, Canada, and many others have adopted similar systems under different names 
                such as Goods and Services Tax (GST).
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-2 border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      How VAT Collection Works
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Businesses collect VAT on behalf of the government when selling goods or services. They then deduct 
                      the VAT they paid on their own purchases (input VAT) from the VAT they collected (output VAT). 
                      The difference is remitted to tax authorities, ensuring tax is only paid on the value added at each stage.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-secondary/20 bg-secondary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-secondary" />
                      Who Bears the Cost?
                    </h3>
                    <p className="text-sm leading-relaxed">
                      Ultimately, the final consumer bears the full cost of VAT. Businesses act as intermediaries, 
                      collecting and remitting the tax while remaining tax-neutral themselves. This makes VAT a 
                      transparent and predictable tax system for both governments and businesses.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="leading-relaxed">
                Understanding VAT is essential for any business engaged in domestic or international trade. Whether you're 
                a freelancer invoicing clients, an e-commerce entrepreneur shipping products globally, or a multinational 
                corporation managing complex supply chains, accurate VAT calculation ensures compliance with tax regulations 
                and helps maintain healthy profit margins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: UK VAT Explained */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <span className="text-2xl">🇬🇧</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">UK VAT: Complete Guide for Businesses</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                The United Kingdom operates one of the most established VAT systems in the world. Following Brexit, 
                UK VAT rules have diverged somewhat from EU regulations, making it crucial for businesses trading 
                with or within the UK to understand the current framework. The standard UK VAT rate is 20%, with 
                reduced rates of 5% and 0% applying to specific categories of goods and services.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 border my-8">
                <h3 className="font-bold text-foreground mb-4 text-xl">UK VAT Rate Structure</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-background rounded-lg p-4 border">
                    <p className="text-3xl font-bold text-primary mb-2">20%</p>
                    <p className="font-semibold text-foreground">Standard Rate</p>
                    <p className="text-sm mt-2">Most goods and services including electronics, clothing, professional services, and entertainment.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <p className="text-3xl font-bold text-secondary mb-2">5%</p>
                    <p className="font-semibold text-foreground">Reduced Rate</p>
                    <p className="text-sm mt-2">Domestic fuel and power, children's car seats, energy-saving materials for homes.</p>
                  </div>
                  <div className="bg-background rounded-lg p-4 border">
                    <p className="text-3xl font-bold text-accent mb-2">0%</p>
                    <p className="font-semibold text-foreground">Zero Rate</p>
                    <p className="text-sm mt-2">Most food items, children's clothing, books, newspapers, and public transport.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8">VAT Registration Thresholds in the UK</h3>
              <p className="leading-relaxed">
                Businesses must register for VAT when their taxable turnover exceeds the registration threshold, 
                which is reviewed annually. Below this threshold, VAT registration is voluntary but can be beneficial 
                for businesses that primarily sell to other VAT-registered businesses or have significant input VAT to reclaim.
              </p>

              <div className="flex items-start gap-4 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl my-6">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Important: Post-Brexit Changes</p>
                  <p className="text-sm leading-relaxed">
                    Since Brexit, UK businesses no longer benefit from the EU's simplified VAT rules. Selling to EU consumers 
                    may require registration in individual EU countries under the One-Stop Shop (OSS) scheme, and goods 
                    imported from the EU are now subject to import VAT. Consult with a tax professional for guidance on 
                    cross-border transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: EU VAT System */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">🇪🇺</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">European Union VAT: Harmonised Yet Diverse</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                The European Union has created a harmonised VAT framework while allowing member states flexibility in setting 
                their own rates within established parameters. All EU countries must maintain a minimum standard VAT rate of 15%, 
                though most have opted for higher rates ranging from 17% in Luxembourg to 27% in Hungary—the highest standard 
                rate in the EU.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">VAT Rates Across Major EU Economies</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {[
                  { flag: "🇩🇪", country: "Germany", standard: "19%", reduced: "7%" },
                  { flag: "🇫🇷", country: "France", standard: "20%", reduced: "5.5%, 10%" },
                  { flag: "🇮🇹", country: "Italy", standard: "22%", reduced: "4%, 5%, 10%" },
                  { flag: "🇪🇸", country: "Spain", standard: "21%", reduced: "4%, 10%" },
                  { flag: "🇳🇱", country: "Netherlands", standard: "21%", reduced: "9%" },
                  { flag: "🇧🇪", country: "Belgium", standard: "21%", reduced: "6%, 12%" },
                  { flag: "🇵🇱", country: "Poland", standard: "23%", reduced: "5%, 8%" },
                  { flag: "🇸🇪", country: "Sweden", standard: "25%", reduced: "6%, 12%" },
                  { flag: "🇦🇹", country: "Austria", standard: "20%", reduced: "10%, 13%" },
                ].map((item, index) => (
                  <Card key={index} className="border hover:border-primary/30 transition-colors">
                    <CardContent className="pt-4 pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{item.flag}</span>
                        <span className="font-semibold text-foreground">{item.country}</span>
                      </div>
                      <p className="text-sm">Standard: <span className="font-bold text-primary">{item.standard}</span></p>
                      <p className="text-sm">Reduced: <span className="text-muted-foreground">{item.reduced}</span></p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8">The EU One-Stop Shop (OSS) System</h3>
              <p className="leading-relaxed">
                The One-Stop Shop simplifies VAT compliance for businesses selling to consumers across the EU. Instead of 
                registering for VAT in every member state where you have customers, you can register in a single country 
                and report all EU sales through one quarterly declaration. This system is particularly beneficial for 
                e-commerce businesses and digital service providers.
              </p>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 my-6">
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Pro Tip: Understanding the €10,000 Threshold
                </h4>
                <p className="text-sm leading-relaxed">
                  Businesses with annual cross-border B2C sales below €10,000 within the EU can apply their home country's 
                  VAT rate to all EU sales. Once this threshold is exceeded, VAT must be charged at the rate applicable 
                  in each customer's country. The OSS makes managing this complexity significantly easier.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8">Reverse Charge Mechanism for B2B Transactions</h3>
              <p className="leading-relaxed">
                When businesses sell to VAT-registered customers in other EU countries, the reverse charge mechanism 
                typically applies. The seller issues an invoice without VAT, and the buyer accounts for VAT in their 
                own country. This eliminates the need for sellers to register for VAT in every country where they have 
                business customers, streamlining international B2B commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Worldwide VAT Systems */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-info/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-info" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Global VAT & GST: A Worldwide Perspective</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Beyond Europe and the UK, VAT and similar consumption taxes exist in virtually every major economy. 
                Understanding these systems is essential for businesses engaged in international trade, whether 
                you're exporting goods, providing digital services, or managing a global supply chain.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Major Global VAT/GST Systems</h3>

              <div className="space-y-6 my-8">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🇦🇺</span>
                      <h4 className="text-xl font-bold text-foreground">Australia - Goods and Services Tax (GST)</h4>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Australia operates a 10% GST on most goods and services. The system is administered by the 
                      Australian Taxation Office (ATO) and applies to businesses with annual turnover exceeding 
                      AUD 75,000. Notable exemptions include basic food items, medical services, and educational courses.
                    </p>
                    <p className="text-sm bg-muted/50 p-3 rounded-lg">
                      <strong>Key Feature:</strong> Australia requires foreign businesses selling low-value goods 
                      (under AUD 1,000) to consumers to register for and collect GST, capturing e-commerce sales 
                      that previously escaped taxation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🇨🇦</span>
                      <h4 className="text-xl font-bold text-foreground">Canada - GST/HST/PST System</h4>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Canada has a complex multi-layered system with federal GST (5%) and various provincial taxes. 
                      Some provinces harmonise their sales tax with federal GST (HST), while others maintain separate 
                      Provincial Sales Tax (PST). This results in combined rates ranging from 5% to 15% depending on location.
                    </p>
                    <p className="text-sm bg-muted/50 p-3 rounded-lg">
                      <strong>Key Feature:</strong> Non-resident businesses providing digital services to Canadian 
                      consumers must register for GST/HST collection, with a simplified registration process available.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🇯🇵</span>
                      <h4 className="text-xl font-bold text-foreground">Japan - Consumption Tax</h4>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Japan's consumption tax currently stands at 10%, with a reduced rate of 8% for food and 
                      non-alcoholic beverages. The system underwent significant changes recently, including the 
                      introduction of a qualified invoice system for input tax credits.
                    </p>
                    <p className="text-sm bg-muted/50 p-3 rounded-lg">
                      <strong>Key Feature:</strong> Japan requires foreign e-commerce businesses to register and 
                      collect consumption tax when selling digital services to Japanese consumers.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🇸🇬</span>
                      <h4 className="text-xl font-bold text-foreground">Singapore - Goods and Services Tax</h4>
                    </div>
                    <p className="leading-relaxed mb-4">
                      Singapore's GST is currently 9%, having been raised as part of planned fiscal measures. 
                      The city-state's efficient tax administration and low rate make it an attractive base for 
                      regional businesses, though compliance requirements remain stringent.
                    </p>
                    <p className="text-sm bg-muted/50 p-3 rounded-lg">
                      <strong>Key Feature:</strong> Singapore's Overseas Vendor Registration regime requires 
                      foreign suppliers of digital services to register when annual B2C sales exceed SGD 1 million.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8">Countries Without VAT</h3>
              <p className="leading-relaxed">
                A handful of countries operate without VAT or similar consumption taxes. The United States notably 
                relies on state-level sales taxes rather than a federal VAT, creating complexity for businesses 
                with customers across multiple states. Other VAT-free jurisdictions include many Gulf states 
                (though some have recently introduced VAT), Hong Kong, and certain small nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: VAT Calculation Methods */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">How to Calculate VAT: Methods and Formulas</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Accurate VAT calculation is fundamental to business operations, affecting pricing, invoicing, and 
                financial reporting. Whether you're adding VAT to a net price or extracting VAT from a gross amount, 
                understanding the mathematical formulas ensures precision in every transaction.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-background rounded-xl p-6 border-2 border-primary/30">
                  <h3 className="text-xl font-bold text-foreground mb-4">Adding VAT to a Net Amount</h3>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 font-mono text-center">
                    <p className="text-lg">Gross = Net × (1 + VAT rate)</p>
                  </div>
                  <p className="text-sm mb-4">
                    <strong>Example:</strong> A product costs £100 excluding VAT (UK 20% rate)
                  </p>
                  <div className="space-y-2 text-sm bg-primary/5 p-4 rounded-lg">
                    <p>Net amount: £100.00</p>
                    <p>VAT (20%): £100 × 0.20 = £20.00</p>
                    <p className="font-bold text-foreground">Gross amount: £120.00</p>
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 border-2 border-secondary/30">
                  <h3 className="text-xl font-bold text-foreground mb-4">Extracting VAT from a Gross Amount</h3>
                  <div className="bg-muted/50 rounded-lg p-4 mb-4 font-mono text-center">
                    <p className="text-lg">Net = Gross ÷ (1 + VAT rate)</p>
                  </div>
                  <p className="text-sm mb-4">
                    <strong>Example:</strong> A product costs €121 including VAT (Netherlands 21% rate)
                  </p>
                  <div className="space-y-2 text-sm bg-secondary/5 p-4 rounded-lg">
                    <p>Gross amount: €121.00</p>
                    <p>Net amount: €121 ÷ 1.21 = €100.00</p>
                    <p className="font-bold text-foreground">VAT amount: €21.00</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8">VAT Calculation for Multiple Rates</h3>
              <p className="leading-relaxed">
                When a transaction includes items subject to different VAT rates, each category must be calculated 
                separately. This commonly occurs in retail, hospitality, and mixed-supply businesses where standard 
                and reduced rates apply to different products within the same invoice.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 border my-6">
                <h4 className="font-bold text-foreground mb-4">Mixed-Rate Invoice Example (Germany)</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-semibold">Item</th>
                        <th className="text-right py-2 font-semibold">Net</th>
                        <th className="text-right py-2 font-semibold">Rate</th>
                        <th className="text-right py-2 font-semibold">VAT</th>
                        <th className="text-right py-2 font-semibold">Gross</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2">Electronics</td>
                        <td className="text-right">€500.00</td>
                        <td className="text-right">19%</td>
                        <td className="text-right">€95.00</td>
                        <td className="text-right">€595.00</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Books</td>
                        <td className="text-right">€50.00</td>
                        <td className="text-right">7%</td>
                        <td className="text-right">€3.50</td>
                        <td className="text-right">€53.50</td>
                      </tr>
                      <tr className="font-bold">
                        <td className="py-2">Total</td>
                        <td className="text-right">€550.00</td>
                        <td className="text-right">—</td>
                        <td className="text-right">€98.50</td>
                        <td className="text-right">€648.50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8">Rounding Rules and Precision</h3>
              <p className="leading-relaxed">
                Different jurisdictions have varying requirements for rounding VAT calculations. Most countries 
                require rounding to two decimal places (cents or pence), but the method—whether rounding up, 
                down, or to the nearest cent—may differ. Always verify local requirements and maintain consistency 
                in your accounting practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: VAT for Different Business Types */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">VAT Considerations by Business Type</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                VAT requirements and strategies vary significantly depending on your business model, customer base, 
                and operational geography. Understanding the specific implications for your business type helps 
                ensure compliance while optimising your tax position.
              </p>

              <div className="space-y-6 my-8">
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">E-Commerce and Online Retail</h3>
                    <p className="leading-relaxed mb-4">
                      E-commerce businesses face unique VAT challenges, particularly when selling across borders. 
                      The destination principle—where VAT is charged based on the customer's location rather than 
                      the seller's—applies to most B2C e-commerce transactions, requiring careful tracking of 
                      customer locations and applicable rates.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>Implement geolocation or address verification for accurate rate determination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>Consider marketplace facilitator rules where platforms collect VAT on your behalf</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>Maintain records of customer locations for audit purposes</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-secondary">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Freelancers and Consultants</h3>
                    <p className="leading-relaxed mb-4">
                      Service providers often benefit from simplified VAT arrangements, but must carefully consider 
                      whether their services are subject to VAT, exempt, or zero-rated. B2B services to foreign 
                      clients typically fall under the reverse charge mechanism, while B2C services may require 
                      registration in the customer's country.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <span>Verify VAT registration thresholds in your jurisdiction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <span>Understand place-of-supply rules for your specific service category</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                        <span>Consider voluntary registration for input VAT recovery</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-accent">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">Import/Export Businesses</h3>
                    <p className="leading-relaxed mb-4">
                      International trade involves complex VAT considerations including import VAT, customs duties, 
                      and export exemptions. Understanding the interaction between VAT and customs regimes is 
                      essential for managing cash flow and maintaining competitive pricing.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span>Exports are typically zero-rated—maintain documentation for proof of export</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span>Consider postponed VAT accounting schemes to improve cash flow on imports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                        <span>Explore bonded warehouse arrangements for inventory efficiency</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-info">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">SaaS and Digital Services</h3>
                    <p className="leading-relaxed mb-4">
                      Digital service providers must navigate complex rules that often require charging VAT based 
                      on where the customer is located. This applies to software subscriptions, streaming services, 
                      online courses, and digital content. Most major jurisdictions now require foreign digital 
                      service providers to register for VAT when selling to consumers.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-info flex-shrink-0 mt-1" />
                        <span>Implement robust customer location verification using multiple data points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-info flex-shrink-0 mt-1" />
                        <span>Leverage simplified registration schemes like EU OSS or Australia's vendor registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-info flex-shrink-0 mt-1" />
                        <span>Consider using payment processors that handle VAT compliance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Common VAT Mistakes */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-destructive" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Common VAT Mistakes to Avoid</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                VAT errors can result in penalties, interest charges, and damaged relationships with tax authorities. 
                Understanding common pitfalls helps businesses maintain compliance and avoid costly corrections.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                {[
                  {
                    title: "Incorrect Rate Application",
                    description: "Applying the wrong VAT rate, especially when rates differ for similar products (e.g., takeaway vs. eat-in food), is one of the most frequent errors.",
                    solution: "Maintain a product categorisation system and verify rates regularly against official guidance."
                  },
                  {
                    title: "Missing Registration Deadlines",
                    description: "Failing to register for VAT when crossing the threshold can result in backdated VAT liability and penalties.",
                    solution: "Monitor turnover monthly and register promptly when approaching thresholds."
                  },
                  {
                    title: "Incorrect Input VAT Claims",
                    description: "Claiming VAT on non-deductible expenses (entertainment, employee cars) or without proper invoices is a common audit finding.",
                    solution: "Implement invoice verification procedures and maintain an approved expense categories list."
                  },
                  {
                    title: "Place of Supply Errors",
                    description: "Misidentifying where a service is 'supplied' for VAT purposes can lead to charging VAT when exempt, or vice versa.",
                    solution: "Document customer locations and understand the specific rules for your service category."
                  },
                  {
                    title: "Currency Conversion Mistakes",
                    description: "Using incorrect exchange rates when converting foreign currency transactions for VAT returns can accumulate significant errors.",
                    solution: "Use consistent exchange rate sources and document the rates applied to each transaction."
                  },
                  {
                    title: "Incomplete Records",
                    description: "Insufficient documentation to support VAT claims or calculations can result in disallowed deductions during audits.",
                    solution: "Implement robust record-keeping systems and retain documents for the required statutory period."
                  },
                ].map((item, index) => (
                  <Card key={index} className="border hover:border-destructive/30 transition-colors">
                    <CardContent className="pt-6">
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm mb-3">{item.description}</p>
                      <div className="bg-primary/5 p-3 rounded-lg text-sm">
                        <strong className="text-primary">Solution:</strong> {item.solution}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: VAT Compliance Best Practices */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">VAT Compliance Best Practices</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Proactive VAT management reduces compliance risk while potentially improving cash flow. 
                Implementing systematic processes ensures accuracy and demonstrates good faith to tax authorities.
              </p>

              <div className="space-y-4 my-8">
                {[
                  {
                    icon: Clock,
                    title: "Timely Filing and Payment",
                    content: "Submit VAT returns and payments before deadlines. Consider setting up direct debits for payments and calendar reminders for filing dates. Many jurisdictions offer early filing incentives or impose significant late penalties."
                  },
                  {
                    icon: FileText,
                    title: "Maintain Comprehensive Records",
                    content: "Keep all invoices, receipts, and supporting documentation for the legally required period (typically 6-10 years). Digital record-keeping systems should include backup procedures and audit trails."
                  },
                  {
                    icon: Target,
                    title: "Regular Reconciliation",
                    content: "Reconcile VAT accounts monthly, comparing calculated VAT with ledger balances and bank statements. Investigate and resolve discrepancies promptly before they compound."
                  },
                  {
                    icon: TrendingUp,
                    title: "Stay Updated on Rate Changes",
                    content: "VAT rates and rules change regularly. Subscribe to official tax authority communications and consider using VAT software that updates rates automatically."
                  },
                  {
                    icon: Scale,
                    title: "Seek Professional Advice",
                    content: "For complex transactions, international trade, or significant business changes, consult with qualified tax professionals. The cost of advice is typically far less than the cost of errors."
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-background rounded-xl border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Calculate VAT Accurately?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Use our free international VAT calculator above to instantly compute VAT for any country worldwide. 
              Whether you're invoicing clients in the UK, shipping products across the EU, or managing global 
              transactions, our calculator provides accurate results with current rates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>60+ Countries Supported</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Current Rates</span>
              </div>
              <div className="flex items-center gap-2 bg-background px-4 py-2 rounded-full border">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>100% Free Forever</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VATComprehensiveGuideEN;

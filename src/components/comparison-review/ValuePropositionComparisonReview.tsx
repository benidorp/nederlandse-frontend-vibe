import { Badge } from "@/components/ui/badge";
import nicoleImage from "@/assets/nicole-comparison-review.png";

const ValuePropositionComparisonReview = () => {
  return (
    <section id="about-me" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-2xl opacity-50"></div>
            <img 
              src={nicoleImage} 
              alt="Nicole Henderson - Legal Expert for Review Websites" 
              className="relative rounded-lg shadow-2xl w-full object-cover ring-2 ring-primary/10 brightness-110" 
            />
          </div>
          
          <div className="space-y-6">
            <Badge variant="outline" className="mb-2">About Nicole Henderson</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Trusted Legal Partner for Comparison & Review Platforms
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                With over 12 years of experience in digital media law and consumer protection, I specialize in helping comparison and review website owners navigate the complex landscape of advertising regulations, affiliate marketing compliance, and liability protection.
              </p>
              
              <p className="leading-relaxed">
                I understand the unique challenges review platforms face—from managing affiliate relationships and disclosure requirements to protecting against defamation claims while maintaining editorial freedom. My legal documents are specifically crafted to address these challenges while keeping your business compliant with FTC guidelines and international advertising laws.
              </p>
              
              <p className="leading-relaxed">
                Whether you're running a tech review blog, price comparison site, or consumer advocacy platform, my tailored legal solutions ensure you can publish honest reviews and comparisons with confidence, knowing you're fully protected against legal risks while maintaining transparency with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionComparisonReview;

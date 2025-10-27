import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Shield, FileText, Users, Award, Lock } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Course Terms & Conditions",
    description: "Comprehensive terms covering course enrollment, access rights, completion requirements, certification, and refund conditions specifically for online education."
  },
  {
    icon: Shield,
    title: "Student Privacy Policy (GDPR)",
    description: "Complete GDPR-compliant privacy policy for educational platforms, covering student data, learning progress tracking, analytics, and communication."
  },
  {
    icon: FileText,
    title: "Intellectual Property Protection",
    description: "Protect your course content, videos, materials, and resources. Clear policies on content ownership, usage rights, and copyright infringement."
  },
  {
    icon: Users,
    title: "Instructor Agreement Terms",
    description: "Legal framework for working with course instructors, covering revenue sharing, content ownership, exclusivity, and responsibilities."
  },
  {
    icon: Award,
    title: "Certificate & Accreditation Policy",
    description: "Terms for issuing certificates, diplomas, and credentials. Clear conditions for course completion and certification requirements."
  },
  {
    icon: Lock,
    title: "Cookie & Tracking Policy",
    description: "Complete cookie consent and tracking policy for your learning management system, covering analytics, progress tracking, and marketing cookies."
  }
];

const ServicesElearning = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with gradient badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Complete Legal Coverage</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
              Everything Your E-Learning Platform Needs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              All essential legal documents for your online education platform, professionally crafted 
              by legal specialists in digital education and e-learning.
            </p>
          </div>

          {/* Services Grid with enhanced styling */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesElearning;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Scale, Shield, Users } from "lucide-react";

const blogPosts = [
  {
    icon: Scale,
    title: "5 Legal Mistakes E-Learning Platforms Make",
    description: "Common legal pitfalls in online education and how to avoid them. From missing refund policies to unclear instructor agreements.",
    readTime: "5 min read"
  },
  {
    icon: Shield,
    title: "GDPR for E-Learning: Complete Guide",
    description: "Everything you need to know about student data protection, learning analytics, and GDPR compliance for educational platforms.",
    readTime: "7 min read"
  },
  {
    icon: BookOpen,
    title: "Course Refund Policies: Best Practices",
    description: "How to create fair refund policies that protect both your business and your students. Includes templates and examples.",
    readTime: "6 min read"
  },
  {
    icon: Users,
    title: "Legal Framework for Course Marketplaces",
    description: "Essential legal documents when working with multiple instructors. Revenue sharing, content ownership, and liability protection.",
    readTime: "8 min read"
  }
];

const BlogPostsElearning = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/60 text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-lg">
              <BookOpen className="w-5 h-5" />
              <span className="font-semibold">Legal Resources</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              E-Learning Legal Knowledge Base
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn about legal requirements for online education platforms
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => {
              const Icon = post.icon;
              return (
                <Card 
                  key={index} 
                  className="border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 cursor-pointer bg-gradient-to-br from-card to-card/50"
                >
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mb-4 shadow-lg">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.description}
                    </p>
                    <p className="text-sm text-primary font-semibold">{post.readTime}</p>
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

export default BlogPostsElearning;

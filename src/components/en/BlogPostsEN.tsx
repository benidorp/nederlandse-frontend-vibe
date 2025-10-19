import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const BlogPostsEN = () => {
  const posts = [
    {
      title: "Why Every Affiliate Marketer Needs a Privacy Policy",
      description: "Learn why a privacy policy is not optional and how to ensure you comply with GDPR/AVG.",
      date: "March 15, 2024",
      category: "Legal Requirements"
    },
    {
      title: "FTC Guidelines for Affiliate Disclosure: What You Need to Know",
      description: "Everything about FTC guidelines and how to properly disclose your affiliate relationships.",
      date: "March 10, 2024",
      category: "Affiliate Marketing"
    },
    {
      title: "GDPR for Affiliate Marketers: A Complete Guide",
      description: "How GDPR/AVG affects your affiliate business and what steps you need to take.",
      date: "March 5, 2024",
      category: "Privacy & Data Protection"
    },
    {
      title: "Cookie Policies: Everything You Need to Know",
      description: "Why you need a cookie policy and what it should contain according to current legislation.",
      date: "February 28, 2024",
      category: "Legal Compliance"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Legal Insights for Affiliate Marketers
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed about legal requirements and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-primary">{post.category}</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsEN;

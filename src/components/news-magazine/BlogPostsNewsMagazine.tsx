import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "GDPR Compliance for News Websites: Complete 2025 Guide",
    excerpt: "Everything news publishers need to know about GDPR compliance, reader data protection, and avoiding hefty fines.",
    date: "March 15, 2025",
    category: "Legal Compliance"
  },
  {
    title: "Editorial Policy Best Practices for Digital Publishers",
    excerpt: "How professional editorial guidelines establish credibility, protect your reputation, and build reader trust.",
    date: "March 10, 2025",
    category: "Editorial Standards"
  },
  {
    title: "Copyright Protection for Online Magazine Content",
    excerpt: "Protect your articles, images, and creative work from unauthorized use with proper copyright policies and DMCA procedures.",
    date: "March 5, 2025",
    category: "Copyright Law"
  }
];

const BlogPostsNewsMagazine = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Resources</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Articles for Publishers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights on legal compliance, editorial standards, and copyright protection for news and magazine websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsNewsMagazine;

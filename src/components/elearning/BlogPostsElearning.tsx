import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Scale, Shield, Users } from "lucide-react";
const blogPosts = [{
  icon: Scale,
  title: "5 Legal Mistakes E-Learning Platforms Make",
  description: "Common legal pitfalls in online education and how to avoid them. From missing refund policies to unclear instructor agreements.",
  readTime: "5 min read"
}, {
  icon: Shield,
  title: "GDPR for E-Learning: Complete Guide",
  description: "Everything you need to know about student data protection, learning analytics, and GDPR compliance for educational platforms.",
  readTime: "7 min read"
}, {
  icon: BookOpen,
  title: "Course Refund Policies: Best Practices",
  description: "How to create fair refund policies that protect both your business and your students. Includes templates and examples.",
  readTime: "6 min read"
}, {
  icon: Users,
  title: "Legal Framework for Course Marketplaces",
  description: "Essential legal documents when working with multiple instructors. Revenue sharing, content ownership, and liability protection.",
  readTime: "8 min read"
}];
const BlogPostsElearning = () => {
  return <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        
      </div>
    </section>;
};
export default BlogPostsElearning;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Essential Legal Documents Every Freelancer Needs",
    description: "Learn which legal documents are crucial for protecting your freelance business and why you can't afford to skip them.",
    date: "March 15, 2024"
  },
  {
    title: "How to Write a Professional Client Contract",
    description: "Step-by-step guide to creating client service agreements that protect both you and your clients.",
    date: "March 10, 2024"
  },
  {
    title: "GDPR Compliance for Freelancers: What You Need to Know",
    description: "Understanding data protection requirements when working with international clients, especially in the EU.",
    date: "March 5, 2024"
  },
  {
    title: "Avoiding Payment Disputes: Best Practices for Freelancers",
    description: "How proper contracts and clear terms can help you get paid on time and avoid client disputes.",
    date: "February 28, 2024"
  },
  {
    title: "Liability Protection for Independent Contractors",
    description: "Why disclaimers and limitation of liability clauses are essential for your freelance business.",
    date: "February 20, 2024"
  },
  {
    title: "Setting Up Your Freelance Business: Legal Checklist",
    description: "Complete legal checklist for starting your freelance career the right way from day one.",
    date: "February 15, 2024"
  }
];

const BlogPostsFreelancers = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Freelance Legal Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert advice and insights on legal protection for freelancers and independent contractors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{post.description}</p>
                <div className="flex items-center text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  Read more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPostsFreelancers;

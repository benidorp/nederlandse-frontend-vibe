import { Badge } from "@/components/ui/badge";

const BlogPostsTravelBookingEN = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Insights</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Legal Information for Travel Booking Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Important information about legal requirements for your travel booking website.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsTravelBookingEN;

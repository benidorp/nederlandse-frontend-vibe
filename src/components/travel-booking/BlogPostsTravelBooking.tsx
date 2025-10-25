import { Badge } from "@/components/ui/badge";

const BlogPostsTravelBooking = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Insights</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Juridische Informatie voor Reisboekingsplatforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Belangrijke informatie over juridische vereisten voor uw reisboekingswebsite.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogPostsTravelBooking;

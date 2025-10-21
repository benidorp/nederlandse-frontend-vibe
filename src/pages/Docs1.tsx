import { Helmet } from "react-helmet";
import HeaderEN from "@/components/en/HeaderEN";
import FooterEN from "@/components/en/FooterEN";

const Docs1 = () => {
  return (
    <>
      <Helmet>
        <title>Documentation - Legal Documents for Affiliate Websites</title>
        <meta name="description" content="Complete documentation and legal resources for affiliate website protection" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <HeaderEN />
        
        <main className="flex-1">
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  Essential legal documentation and resources for affiliate websites.
                </p>
                
                <div className="space-y-8 mt-12">
                  <div className="border-l-4 border-primary pl-6">
                    <h2 className="text-2xl font-semibold mb-3">Getting Started</h2>
                    <p className="text-muted-foreground">
                      Learn about the essential legal documents required for affiliate websites and how to implement them effectively.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <h2 className="text-2xl font-semibold mb-3">Legal Requirements</h2>
                    <p className="text-muted-foreground">
                      Understand the legal obligations for affiliate marketers including disclosure requirements, privacy policies, and terms of service.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <h2 className="text-2xl font-semibold mb-3">Best Practices</h2>
                    <p className="text-muted-foreground">
                      Discover industry best practices for maintaining compliance and protecting your affiliate business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <FooterEN />
      </div>
    </>
  );
};

export default Docs1;

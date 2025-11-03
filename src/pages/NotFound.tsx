import { Helmet } from "react-helmet";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="description" content="The page you are looking for does not exist." />
        <meta name="robots" content="noindex, nofollow" />
        <html lang="en" />
      </Helmet>
      <main className="min-h-screen flex items-center justify-center">
        <section>
          <h1>404 - Page Not Found</h1>
          <p>This page does not exist.</p>
        </section>
      </main>
    </>
  );
};

export default NotFound;

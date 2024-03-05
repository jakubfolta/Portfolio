import * as React from "react";
import { Link } from "gatsby";
import Layout from '../containers/Layout';
import { Seo } from '../components/SEO';

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
      <br />
      <p>
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <Seo title="Upsss - Folta | Software Engineer" />
    </>
  );
};

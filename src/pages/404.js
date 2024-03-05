import React from 'react';
import Layout from '../containers/Layout';
import { Seo } from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <Seo title="Upsss - Folta | Software Engineer" />
    </>
  )
}

export default NotFoundPage;

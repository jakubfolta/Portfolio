import React from 'react';

import Layout from '../containers/Layout';
import ProjectsList from '../components/Projects/ProjectsList';
import Footer from '../components/Footer';

const Portfolio = () => (
  <Layout>
    <section className="section">
      <h2 className="heading-primary page__heading">My portfolio</h2>
      <ProjectsList />
    </section>
    <Footer
      title="Let's chat"
      text="Wanna contact me or chat about a project? Feel free to drop me an email at" />
  </Layout>
);

export default Portfolio;

import React from 'react';

import Layout from '../containers/Layout';
import ProjectsList from '../components/Projects/ProjectsList';
import Footer from '../components/Footer';
import ArrowRight from '../components/Arrows/ArrowRight';
import ArrowLeft from '../components/Arrows/ArrowLeft';
import { Seo } from '../components/SEO';
import Logo from '../components/Logo';

const Portfolio = () => (
  <Layout>
    <Logo hidden={true} />
    <section className="section">
      <h2 className="heading-primary page__heading">My portfolio</h2>
      <ProjectsList />
    </section>
    <Footer
      title="Let's chat"
      text="Wanna contact me or chat about a project? Feel free to drop me an email at" />
    {/* <ArrowRight
      page="/scrolls/"
      pageName="Scrolls" /> */}
    <ArrowRight
      page="/contact/"
      pageName="Contact" />
    <ArrowLeft
      page="/about/"
      pageName="About" />
  </Layout>
);

export default Portfolio;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <Seo title="Folta - Portfolio | Software Engineer" />
    </>
  )
}

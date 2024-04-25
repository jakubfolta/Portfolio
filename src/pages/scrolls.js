import React from 'react';

import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import ScrollsList from '../components/Scrolls/ScrollsList';
import Footer from '../components/Footer';
import ArrowRight from '../components/Arrows/ArrowRight';
import ArrowLeft from '../components/Arrows/ArrowLeft';
import { Seo } from '../components/SEO';

const Scrolls = () => (
  <Layout>
    <Logo hidden={true} />
    <section className="section">
      <h2 className="heading-primary page__heading">Scrolls</h2>
      <ScrollsList />
    </section>
    <Footer
      title="Let's chat"
      text="Wanna contact me or chat about a project? Feel free to drop me an email at" />
    <ArrowRight
      page="/contact/"
      pageName="Contact" />
    <ArrowLeft
      page="/portfolio/"
      pageName="Portfolio" />
  </Layout>
);

export default Scrolls;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <Seo title="Folta - Scrolls | Software Engineer" />
    </>
  )
}

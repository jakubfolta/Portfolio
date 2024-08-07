import React from 'react';

import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import Socials from '../components/Socials';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import ArrowRight from '../components/Arrows/ArrowRight';
import { Seo } from '../components/SEO';

const HomeIndex = () => (
  <Layout>
    <Logo />
    <Socials />
    <section className="section section--home">
      <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
      <p className="section__text">I am passionate Software Engineer from Poland. <br />Take a look at my <AniLink fade duration={1.3} to="/portfolio/" className="link" title="Check my projects">web portfolio page</AniLink> or send me an <a className="link" href="mailto:jakubfolta@yahoo.co.uk" target="_top">email</a>.</p>
    </section>
    <ArrowRight
      page="/about/"
      pageName="About" />
  </Layout>
);

export default HomeIndex;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <Seo title="Folta | Software Engineer" />
    </>
  );
};
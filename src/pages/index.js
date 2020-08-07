import React from 'react';

import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import Socials from '../components/Socials';
import ArrowRight from '../components/Arrows/ArrowRight';

const HomeIndex = () => (
  <Layout title="Folta | Front End Developer">
    <Logo />
    <Socials />
    <section className="section section--home">
      <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
      <p className="section__text">I am passionate Front End Developer based in London. <br />Take a look at my <Link to="/portfolio" className="link" title="Check my projects">web portfolio page</Link> or send me an <a className="link" href="mailto:jakubfolta@yahoo.co.uk" target="_top">email</a>.</p>
    </section>
    <ArrowRight
      page="/about/"
      pageName="About" />
  </Layout>
)

export default HomeIndex;
import React from 'react';

import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import Socials from '../components/Socials';

const HomeIndex = () => (
  <Layout>
    <Logo />
    <Socials />
    <section className="section section--home">
      <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
      <p className="section__text">I am passionate Front End Developer based in London.</p>
      <p className="section__text">Take a look at my <Link to="/portfolio" className="link">web portfolio page</Link> or send me an <a className="link" href="mailto:jakubfolta@yahoo.co.uk" target="_top">email</a>.</p>
    </section>
  </Layout>
)


export default HomeIndex;

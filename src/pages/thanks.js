import React from 'react';

import Layout from '../containers/Layout';
import { Link } from 'gatsby';

const Thanks = () => (
  <Layout title="Thanks - Folta | Front End Developer">
    <section className="section section--thanks">
      <h2 className="heading-primary page__heading">Thanks for your message!</h2>
      <p className="section__text section__text--thanks-1">I'll get back to you in a <span className="section__thanks-flash">flash</span> <span className="section__thanks-wink">;)</span></p> <br />
      <p className="section__text section__text--thanks-2">
        Now relax, go back to the <Link to="/" className="link" title="Start again ;)">main haven</Link> or check other pages.
      </p>
    </section>
  </Layout>
);

export default Thanks;
import React from "react";

import Layout from '../containers/Layout';
import Header from '../components/Header';
import SocialsList from '../components/Socials/SocialsList';

const Portfolio = () => {
  return (
    <Layout>
      <Header>
        <SocialsList />
      </Header>
      <div className="header__box">
        <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
          <p className="header__text">I am Front End Developer.</p>
          <p className="header__text">Take a look at my <span>web portfolio page</span>.</p>
      </div>
    </Layout>
  )
}

export default Portfolio;

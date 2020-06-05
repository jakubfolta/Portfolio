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
      <h1 className="heading-primary">Hello, <br /> <span>Welcome to my haven!</span></h1>
      <h2 className="heading-secondary">My name is Jakub Folta.</h2>
      <h2 className="heading-secondary">I am Front End Developer.</h2>
      <h2 className="heading-secondary">Take a look at my <span>web portfolio page</span>.</h2>

    </Layout>
  )
}

export default Portfolio;

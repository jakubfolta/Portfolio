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
      <p>Hello my first portfolio!</p>
    </Layout>
  )
}

export default Portfolio;

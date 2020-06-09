import React from "react";

import Layout from '../containers/Layout';
import Logo from '../components/Logo';

const HomeIndex = () => {
  return (
    <Layout>
      <Logo />
      <div className="header__box">
        <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
          <p className="header__text">I am Front End Developer.</p>
          <p className="header__text">Take a look at my <span>web portfolio page</span>.</p>
      </div>
    </Layout>
  )
};

export default HomeIndex;

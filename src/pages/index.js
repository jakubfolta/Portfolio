import React, { Component } from 'react';

import { Link } from 'gatsby';
import Layout from '../containers/layout';
import Logo from '../components/Logo';
import Socials from '../components/Socials';

class HomeIndex extends Component {
  state = {
    menuClicked: false
  }

  navVisibilityHandler = () => {
    this.setState(prevState => {
      return {menuClicked: !prevState.menuClicked}
    });
  }

  render() {
    return (
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <Logo />
        <Socials />
        <section className="page__box">
          <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
          <p className="page__text">I am passionate Front End Developer based in London.</p>
          <p className="page__text">Take a look at my <Link to="/portfolio" className="page__link">web portfolio page</Link> or send me an <a className="page__link" href="mailto:jakubfolta@yahoo.co.uk">email</a>.</p>
        </section>
      </Layout>
    )
  }
};

export default HomeIndex;

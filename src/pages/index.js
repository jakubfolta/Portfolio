import React, { Component } from 'react';

import { Link } from 'gatsby';
import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SocialsList from '../components/Socials/SocialsList';
import Backdrop from '../components/Backdrop';
import NavigationList from '../components/Navigation/NavigationList';

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
      <Layout>
        <Backdrop
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
        <NavigationList show={this.state.menuClicked} />
        <Logo />
        <main className="header__box">
          <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
          <p className="header__text">I am passionate Front End Developer based in London.</p>
          <p className="header__text">Take a look at my <Link to="/portfolio" className="header__link">web portfolio page</Link> or send me an <a className="header__link" href="mailto:jakubfolta@yahoo.co.uk">email</a>.</p>
        </main>
        <Header>
          <SocialsList />
        </Header>
        <Menu
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
      </Layout>
    )
  }
};

export default HomeIndex;

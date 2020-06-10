import React, { Component } from "react";

import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Menu from '../components/Menu';
import SocialsList from '../components/Socials/SocialsList';
import Backdrop from '../components/Backdrop';

class HomeIndex extends Component {
  state = {
    menuClicked: false
  }

  menuClickedHandler = () => {
    this.setState(prevState => {
      return {menuClicked: !prevState.menuClicked}
    });
  }

  render() {
    return (
      <Layout>
        <Backdrop show={this.state.menuClicked} />
        <Logo />
        <main className="header__box">
          <h1 className="heading-primary">Hello, my name is Jakub Folta.</h1>
            <p className="header__text">I am Front End Developer.</p>
            <p className="header__text">Take a look at my <span>web portfolio page</span>.</p>
        </main>
        <Header>
          <SocialsList />
        </Header>
        <Menu
          show={this.state.menuClicked}
          clicked={this.menuClickedHandler} />
      </Layout>
    )
  }
};

export default HomeIndex;

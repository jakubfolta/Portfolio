import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Menu from '../components/Menu';
import Backdrop from '../components/Backdrop';
import NavigationList from '../components/Navigation/NavigationList';

class Contact extends Component {
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
        <section className="header__box">
            <p className="header__text">I am Front End Developer.</p>
            <p className="header__text">Take a look at my <span>web portfolio page</span>.</p>
        </section>
        <Menu
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
      </Layout>
    )
  }
};

export default Contact;

import React, { Component } from 'react';

import Layout from '../containers/layout';

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
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <section className="page__box">
            <p className="page__text">I am Front End Developer.</p>
            <p className="page__text">Take a look at my <span>web portfolio page</span>.</p>
        </section>
      </Layout>
    )
  }
};

export default Contact;

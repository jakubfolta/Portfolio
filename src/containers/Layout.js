import React, { Component, Fragment } from 'react';

import Header from '../components/Header';
import SocialsList from '../components/Socials/SocialsList';
import '../styles/sass/main.scss';
import 'typeface-architects-daughter';

class Layout extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <Header>
          <SocialsList />
        </Header>
        <main className="layout">
          {this.props.children}
        </main>
      </Fragment>
    )
  }
};

export default Layout;
import React, { Component, Fragment } from 'react';
import '../styles/sass/main.scss';

import Header from '../components/Header';

class Layout extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <Header />
        <main className="Layout">
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout;
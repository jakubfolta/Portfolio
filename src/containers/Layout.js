import React, { Component, Fragment } from 'react';
import '../styles/sass/main.scss';

class Layout extends Component {
  state = {

  }

  render() {
    return (
      <Fragment>
        <main className="layout">
          {this.props.children}
        </main>
      </Fragment>
    )
  }
}

export default Layout;
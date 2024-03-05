import React, { Component, Fragment } from 'react';

import '../styles/sass/main.scss';
import 'typeface-architects-daughter';
import 'typeface-montserrat';
import Menu from '../components/Menu';
import Backdrop from '../components/Backdrop';
import NavigationList from '../components/Navigation/NavigationList';

class Layout extends Component {
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
      <>
        <Backdrop
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
        <NavigationList show={this.state.menuClicked} />
        <main className="layout">
          {this.props.children}
          <Menu
            show={this.state.menuClicked}
            clicked={this.navVisibilityHandler} />
        </main>
      </>
    )
  }
};

export default Layout;
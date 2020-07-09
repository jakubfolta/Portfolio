import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Menu from '../components/Menu';
import Backdrop from '../components/Backdrop';
import NavigationList from '../components/Navigation/NavigationList';
import ProjectsList from '../components/Projects/ProjectsList';

class Portfolio extends Component {
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
        <ProjectsList />
        <Menu
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
      </Layout>
    )
  }
};

export default Portfolio;

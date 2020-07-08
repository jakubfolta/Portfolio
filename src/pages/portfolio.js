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
        <section className="header__box">
          <h1 className="heading-primary">My projects.</h1>
        </section>
        <Menu
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
        <ProjectsList />
      </Layout>
    )
  }
};

export default Portfolio;

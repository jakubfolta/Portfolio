import React, { Component } from 'react';

import Layout from '../containers/layout';
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
        <section>
          <h2 className="heading-primary projects__heading">My portfolio</h2>
          <ProjectsList />
        </section>
        <footer>
          <h3 class="projects__footer-heading">Let's chat</h3>
          <p className="projects__footer-text">Wanna contact me or chat about a project? Feel free to drop me an email at <a className="projects__footer-link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
        </footer>
        <Menu
          show={this.state.menuClicked}
          clicked={this.navVisibilityHandler} />
      </Layout>
    )
  }
};

export default Portfolio;

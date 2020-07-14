import React, { Component } from 'react';

import Layout from '../containers/layout';
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
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <section className="section">
          <h2 className="heading-primary page__heading">My portfolio</h2>
          <ProjectsList />
        </section>
        <footer>
          <h3 className="projects__footer-heading">Let's chat</h3>
          <p className="projects__footer-text">Wanna contact me or chat about a project? Feel free to drop me an email at <a className="projects__footer-link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
        </footer>
      </Layout>
    )
  }
};

export default Portfolio;

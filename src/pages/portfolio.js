import React, { Component } from 'react';

import Layout from '../containers/layout';
import ProjectsList from '../components/Projects/ProjectsList';
import Footer from '../components/Footer';

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
        <Footer
          title="Let's chat"
          text="Wanna contact me or chat about a project? Feel free to drop me an email at" />
      </Layout>
    )
  }
};

export default Portfolio;

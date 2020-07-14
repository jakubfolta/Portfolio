import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';

class About extends Component {
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
            <p className="section__text">I am Front End Developer.</p>
            <p className="section__text">Take a look at my <span>web portfolio page</span>.</p>
        </section>
      </Layout>
    )
  }
};

export const data = graphql`
  query AboutQuery {
    allMarkdownRemark (
      filter: {fileAbsolutePath: {regex: "/about/"}}
    ) {
      edges {
        node {
          excerpt
        }
      }
    }
  }
`

export default About;

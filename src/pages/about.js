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
    const data = this.props.data.allMarkdownRemark.edges[0].node.excerpt;

    return (
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <section className="section">
            <h2 className="heading-primary page__heading">About me</h2>
            <p className="section__text">{data}</p>
        </section>
      </Layout>
    )
  }
};

export default About;

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

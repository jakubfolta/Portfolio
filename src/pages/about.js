import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/layout';
import Footer from '../components/Footer';
import { FaReadme } from 'react-icons/fa';

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
    const data = this.props.data.allMarkdownRemark.edges[0].node;

    return (
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <section className="section">
            <h2 className="heading-primary page__heading">About me</h2>
            <p className="section__text">{data.frontmatter.foreword}</p>
            <p className="section__text">{data.frontmatter.extension}</p>
            <p className="section__text">{data.frontmatter.conclusion}</p>
            <div className="buttons-container">
              <a className="button" href={data.frontmatter.file.publicURL} alt="Source code" target="_blank" rel="noopener noreferrer"><FaReadme /><span>Resume</span></a>
            </div>
        </section>
        <Footer
          title="Intrigued?"
          text="Wanna talk about my path or get some more information? Feel free to drop me an email at" />
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
        excerpt (pruneLength: 1000)
        frontmatter {
          foreword
          extension
          conclusion
          file {
            publicURL
          }
        }
      }
    }
  }
}
`

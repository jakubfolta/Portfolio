import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import Footer from '../components/Footer';
import { FaReadme } from 'react-icons/fa';

class About extends Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges[0].node;

    return (
      <Layout title="Folta | Front End Developer">
        <section className="section">
          <h2 className="heading-primary page__heading">About me</h2>
          <p className="section__text">I'm <span className="highlight">Jacob</span>, passionate self-taught <br/>Web / Front-End Developer.</p><br/>
          <p className="section__text">{data.frontmatter.extension1}</p>
          <p className="section__text">{data.frontmatter.extension2}</p>
          <p className="section__text">{data.frontmatter.extension3}</p>
          <p className="section__text">{data.frontmatter.extension4}</p>
          <p className="section__text">{data.frontmatter.conclusion}</p>
          <p className="section__text">My favorite quote</p>
          <blockquote className="quote">{data.frontmatter.quote}</blockquote>
          <div className="buttons-container">
            <a className="button" href={data.frontmatter.cv.publicURL} alt="Resume" target="_blank" rel="noopener noreferrer"><FaReadme /><span>Resume</span></a>
          </div>
          <p className="section__text">My current stack of languages / technologies:</p>
          <p className="section__text">{data.frontmatter.stack}</p>
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
          extension1
          extension2
          extension3
          extension4
          conclusion
          quote
          stack
          cv {
            publicURL
          }
          foundations {
            publicURL
          }
          html {
            publicURL
          }
        }
      }
    }
  }
}
`







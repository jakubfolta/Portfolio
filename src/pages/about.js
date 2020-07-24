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
          <p className="section__text">I'm <span className="highlight highlight--1">Jacob</span>, passionate self-taught <br/><span className="highlight highlight--2">Web / Front-End Developer</span>.</p><br/>

          <p className="section__text">In my life I've tried many different professions but never really loved what I was doing. Fortunately, in August 2018 I became interested in <br/><span className="highlight highlight--3">code</span>. From that moment on I started my journey with my new <br/><span className="highlight highlight--4">passion</span>.</p><br/>

          <p className="section__text">I've worked through many courses like: <a className="link" href="https://kodilla.com/en/bootcamp/webdeveloper?type=wdp" target="_top">Kodilla (Web Developer Bootcamp),</a>

          <a className="link" href="https://www.udemy.com/course/advanced-css-and-sass/" target="_top">Advanced CSS and Sass: Flexbox,
          Grid, Animations,</a>

          <a className="link" href="https://www.udemy.com/the-complete-javascript-course/" target="_top">The Complete JavaScript Course 2020,</a>

          <a className="link" href="https://www.udemy.com/react-the-complete-guide-incl-redux/" target="_top">React - The Complete Guide (incl Hooks, React Router, Redux)</a> and read / watch countless articles and youtube tutorials about Front-end Development. Recently I also obtained <a className="link" href={data.frontmatter.foundations.publicURL} target="_blank" rel="noopener noreferrer">CIW Web Foundations Associate,</a>

          <a className="link" href={data.frontmatter.html.publicURL} target="_blank" rel="noopener noreferrer">CIW Advanced HTML5 and CSS3 Specialist</a> and CIW JavaScript Specialist certificates.</p><br/>

          <p className="section__text">{data.frontmatter.extension}</p><br/>

          <p className="section__text">To document my journey I push all my code to <a className="link" href="https://github.com/jakubfolta" target="_blank" rel="noopener noreferrer">Github</a> and publish posts on <a className="link" href="https://www.instagram.com/jakub.folta/" target="_blank" rel="noopener noreferrer">Instagram.</a></p><br/>

          <p className="section__text">{data.frontmatter.conclusion}</p><br/>

          <p className="section__text quote-title"><span className="highlight highlight--5">My favorite quote</span></p>
          <blockquote className="quote">{data.frontmatter.quote}</blockquote>

          <p className="section__text stack-title"><span className="highlight highlight--5">My stack of languages / technologies:</span></p>
          <p className="section__text technologies">{data.frontmatter.stack}</p>
          <div className="buttons-container">
            <a className="button" href={data.frontmatter.cv.publicURL} target="_blank" rel="noopener noreferrer"><FaReadme /><span>Resume</span></a>
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
        frontmatter {
          extension
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







import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from '../containers/Layout';
import Logo from '../components/Logo';
import { FaReadme } from 'react-icons/fa';
import Footer from '../components/Footer';
import ArrowRight from '../components/Arrows/ArrowRight';
import ArrowLeft from '../components/Arrows/ArrowLeft';
import { Seo } from '../components/SEO';

class About extends Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges[0].node;

    return (
      <Layout>
        <Logo hidden={true} />
        <section className="section">
          <h2 className="heading-primary page__heading">About me</h2>
          <p className="section__text">I'm <span className="highlight highlight--1">Jacob</span>, passionate self-taught <br/><span className="highlight highlight--2 highlight--before">Software</span> <span className="highlight highlight--2 highlight--after">Engineer.</span></p>

          <p className="section__text">In my life I've tried many different professions but never really loved what I was doing. Fortunately, in August 2018 I became interested in <span className="highlight highlight--3">code</span>. From that moment on I started my journey with my new <span className="highlight highlight--4">passion</span>.</p>

          <p className="section__text">I've worked through many courses like: <a className="link" href="https://kodilla.com/en/bootcamp/webdeveloper?type=wdp" target="_top">Kodilla (Web Developer Bootcamp), </a><a className="link" href="https://www.udemy.com/course/advanced-css-and-sass/" target="_top">Advanced CSS and Sass: Flexbox,
          Grid, Animations, </a><a className="link" href="https://www.udemy.com/the-complete-javascript-course/" target="_top">The Complete JavaScript Course 2020, </a><a className="link" href="https://www.udemy.com/react-the-complete-guide-incl-redux/" target="_top">React - The Complete Guide (incl Hooks, React Router, Redux)</a> and read / watch countless articles and youtube tutorials about Front-end Development. I also obtained <a className="link" href={data.frontmatter.foundations.publicURL} target="_blank" rel="noopener noreferrer">CIW Web Foundations Associate, </a><a className="link" href={data.frontmatter.html.publicURL} target="_blank" rel="noopener noreferrer">CIW Advanced HTML5 and CSS3 Specialist, </a><a className="link" href={data.frontmatter.js.publicURL} target="_blank" rel="noopener noreferrer">CIW JavaScript Specialist</a> and <a className="link" href={data.frontmatter.user.publicURL} target="_blank" rel="noopener noreferrer">CIW User Interface Designer</a> certificates.</p>

          <p className="section__text">{data.frontmatter.extension}</p>

          <p className="section__text">To document my journey I push all my code to <a className="link" href="https://github.com/jakubfolta" target="_blank" rel="noopener noreferrer">Github</a> and publish posts on <a className="link" href="https://www.instagram.com/jakub.folta/" target="_blank" rel="noopener noreferrer">Instagram.</a></p>

          <p className="section__text quote-title"><span className="highlight highlight--5 highlight--before">My</span> favorite <span className="highlight highlight--5 highlight--after">quote</span></p>
          <blockquote className="quote">{data.frontmatter.quote}</blockquote>

          <p className="section__text activity-title"><span className="highlight highlight--5">Current activity</span></p>
          <p className="section__text activity">{data.frontmatter.activity}</p>

          <p className="section__text certificates-title"><span className="highlight highlight--5">AWS certificates</span></p>
          <div className="section__text">
            <a className="link" href="https://www.credly.com/badges/329a3be7-10e7-4702-9682-ea97df13e983/linked_in_profile" target="_top">AWS Certified Cloud Practitioner</a><br/>
            <a className="link" href="https://www.credly.com/badges/30f7cffd-2a07-4b31-b800-dd1b16c2417a/linked_in_profile" target="_top">AWS Certified Solutions Architect – Associate</a><br/>
            <a className="link" href="https://www.credly.com/badges/4958ba51-e270-4482-8785-3de997342dfc/public_url" target="_top">AWS Certified Developer – Associate</a>
            
            <p className="section__text--todo">AWS Certified Security Specialty | In progress</p>
            <p>AWS Certified Solutions Architect - Professional | To do</p>
          </div>

          <p className="section__text stack-title">
          <span className="highlight highlight--5 highlight--before">My</span> stack of languages / <span className="highlight highlight--5 highlight--after">technologies:</span>
          </p>
          <p className="section__text technologies">{data.frontmatter.stack}</p>

          <div className="buttons-container">
            <a className="button" href={data.frontmatter.cv.publicURL} target="_blank" rel="noopener noreferrer"><FaReadme /><span>Resume</span></a>
          </div>
        </section>
        <Footer
          title="Intrigued?"
          text="Wanna talk about my path or get some more information? Feel free to drop me an email at" />
        <ArrowRight
          page="/portfolio/"
          pageName="Portfolio" />
        <ArrowLeft
          page="/"
          pageName="Main" />
      </Layout>
    );
  }
};

export default About;

export const Head = () => {
  return (
    <>
      <html lang="en" />
      <Seo title="Folta | Software Engineer" />
    </>
  );
};

export const data = graphql`
query AboutQuery {
  allMarkdownRemark (
    filter: {fileAbsolutePath: {regex: "/about/"}}
  ) {
    edges {
      node {
        frontmatter {
          extension
          quote
          stack
          activity
          cv {
            publicURL
          }
          foundations {
            publicURL
          }
          html {
            publicURL
          }
          js {
            publicURL
          }
          user {
            publicURL
          }
        }
      }
    }
  }
}
`;

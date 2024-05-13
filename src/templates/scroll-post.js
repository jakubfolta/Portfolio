import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Layout from "../containers/Layout";
import Logo from "../components/Logo";
import Footer from "../components/Footer";
import ArrowLeft from "../components/Arrows/ArrowLeft";
import ArrowTop from "../components/Arrows/ArrowTop";
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ScrollPost = ({ data }) => {
  const [isScrollTresholdCrossed, setIsScrollTresholdCrossed] = useState(false);
  const [isTresholdCrossedFirstTime, setIsTresholdCrossedFirstTime] = useState(false);

  const scroll = data.markdownRemark;

  useEffect(() => {
    let isTreshold = false;

    const handleScroll = () => {
      if (window.scrollY >= 200 && !isTreshold) {
        isTreshold = true;
        setIsScrollTresholdCrossed(true);
        setIsTresholdCrossedFirstTime(true);
      } else if (window.scrollY < 200 && isTreshold) {
        isTreshold = false;
        setIsScrollTresholdCrossed(false);
      }
    };

    document.addEventListener('scrollend', handleScroll);
    return () => document.removeEventListener('scrollend', handleScroll);
  }, []);

  return (
    <Layout>
      <Logo hidden={true} />
      <section className="section scroll">
        <div className="scroll__heading-container">
          <h1 className="scroll__main-heading">{scroll.frontmatter.title}</h1>
          <span className="scroll__written">written by  </span>
          <AniLink
            fade
            duration={1.3}
            to={"/about/"}
            className="scroll__author">Jakub Folta</AniLink>
        </div>
        <div className="scroll__content" dangerouslySetInnerHTML={{ __html: scroll.html }} />
        <div className="scroll__author--container">
          <p className="scroll__author--heading">About the Scroll Author</p>
          <p className="scroll__author--description"><span>Jakub Folta</span> writes about Web Development, AWS, and shares his tips and insights from his rebranding journey. He is a proud father of two boys, a lifelong student of personal development, a gamer, an anime lover, and a collector - Geek ;)</p>
          <AniLink
            id="learn-more"
            fade
            duration={1.3}
            to={"/about/"}>Click it to learn more →</AniLink>
        </div>
      </section>
      <Footer
        title="Let's chat"
        text="Wanna contact me or chat about a project? Feel free to drop me an email at" />
      <ArrowLeft
        page="/scrolls/"
        pageName="Scrolls" />
      <ArrowTop
        pageName="Top"
        isScrollTresholdCrossed={isScrollTresholdCrossed}
        isTresholdCrossedFirstTime={isTresholdCrossedFirstTime} />
    </Layout>
  );
};

export const query = graphql`
  query ScrollQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default ScrollPost;
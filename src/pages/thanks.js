import React, { Component } from 'react';

import Layout from '../containers/layout';
import { Link } from 'gatsby';
import { IconContext } from 'react-icons';
import { FaAngleDoubleDown } from 'react-icons/fa';

class Thanks extends Component {
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
        <section className="section section--thanks">
          <h2 className="heading-primary page__heading">Thanks for your message!</h2>
          <p className="section__text section__text--first">I'll get back to you in a <span className="section__flash">flash</span> <span className="section__wink">;)</span></p> <br />
          <p className="section__text section__text--second">
            Now go back to the <Link to="/" className="link">main haven</Link> or check other pages
            <IconContext.Provider value={{className: "thanks-page__icon"}}>
              <FaAngleDoubleDown />
            </IconContext.Provider>
          </p>
        </section>
      </Layout>
    )
  }
};

export default Thanks;
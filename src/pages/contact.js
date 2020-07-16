import React, { Component } from 'react';

import Layout from '../containers/layout';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
  state = {
    menuClicked: false,
    name: '',
    email: '',
    validForm: false
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
        <section className="section section--contact">
          <h2 className="heading-primary page__heading">So, let's talk ;)</h2>
          <p className="section__text">Either you want to ask me about something or just to get my attention, fill up this complicated form below or simply send me an email to <a className="link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
          <ContactForm
            textValue={this.state.name}
            emailValue={this.state.email}
            change={e => this.onChangeHandler(e)}
            formIsValid={!this.state.validForm} />
        </section>
      </Layout>
    )
  }
};

export default Contact;

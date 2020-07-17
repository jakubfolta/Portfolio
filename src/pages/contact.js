import React, { Component } from 'react';

import Layout from '../containers/layout';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
  state = {
    menuClicked: false,
    form: {
      name: {
        value: '',
        valid: false,
        minLength: 2
      },
      email: {
        value: '',
        valid: false
      },
      validForm: false
    }
  }

  navVisibilityHandler = () => {
    this.setState(prevState => {
      return {menuClicked: !prevState.menuClicked}
    });
  }

  onChangeHandler = (e) => {
    const type = e.target.name;
    const updatedForm = {...this.state.form};
    const updatedFormElement = {...updatedForm[type]};

    updatedFormElement.value = e.target.value;
    updatedForm[type] = updatedFormElement;

    this.setState({form: updatedForm});
    // console.log(formElement);
  }

  render() {
    const form = this.state.form;
    console.log(form);
    return (
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <section className="section section--contact">
          <h2 className="heading-primary page__heading">So, let's talk ;)</h2>
          <p className="section__text">Either you want to ask me about something or just to get my attention, fill up this complicated form below or simply send me an email to <a className="link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
          <ContactForm
            textValue={form.name.value}
            emailValue={form.email.value}
            change={e => this.onChangeHandler(e)}
            formIsValid={!form.validForm} />
        </section>
      </Layout>
    )
  }
};

export default Contact;

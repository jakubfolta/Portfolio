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
        rules: {
          minLength: 2
        }
      },
      email: {
        value: '',
        valid: false,
        rules: {
          isEmail: true
        }
      }
    },
    validForm: false
  }

  navVisibilityHandler = () => {
    this.setState(prevState => {
      return {menuClicked: !prevState.menuClicked}
    });
  }

  checkValidity = (value, rules) => {
    let isValid = false;

    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength;
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value);
    }

    return isValid;
  }

  onChangeHandler = (e) => {
    const type = e.target.name;
    const updatedForm = {...this.state.form};
    const updatedFormElement = {...updatedForm[type]};

    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.rules);
    updatedForm[type] = updatedFormElement;

    let valid = true;
    for (let e in updatedForm) {
      valid = updatedForm[e].valid && valid;
    }

    this.setState({form: updatedForm, validForm: valid});
    // console.log(formElement);
  }

  render() {
    const form = this.state.form;


    // console.log(form);
    return (
      <Layout
        show={this.state.menuClicked}
        clicked={this.navVisibilityHandler} >
        <section className="section section--contact">
          <h2 className="heading-primary page__heading">So, let's talk ;)</h2>
          <p className="section__text">Either you want to ask me about something or just to get my attention, fill up this complicated form below or simply send me an email to <a className="link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
          <ContactForm
            textValue={form.name.value}
            textValid={form.name.valid}
            emailValue={form.email.value}
            emailValid={form.email.valid}
            change={e => this.onChangeHandler(e)}
            formIsValid={!form.validForm} />
        </section>
      </Layout>
    )
  }
};

export default Contact;

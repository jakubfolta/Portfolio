import React, { Component } from 'react';

import Layout from '../containers/Layout';
import ContactForm from '../components/ContactForm';

class Contact extends Component {
  state = {
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

  onFocusHandler = (e) => {
    const focusedElement = document.getElementById(e.target.id).parentElement;
    const focusedElementVerticalLength = focusedElement.offsetTop;
    const paddingTop = 20;

    setTimeout(() => {
      window.scrollTo(0, focusedElementVerticalLength - paddingTop);
    }, 1000)
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
    const type = e.target.id;
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
  }

  render() {
    const form = this.state.form;

    return (
      <Layout title="Let's talk | Folta">
        <section className="section section--contact">
          <h2 className="heading-primary page__heading">So, let's talk ;)</h2>
          <p className="section__text">Either you want to ask me about something or just to get my attention, fill up this complicated form below or simply send me an email to <a className="link" href="mailto:jakubfolta@yahoo.co.uk" target="_top">jakubfolta@yahoo.co.uk</a>.</p>
          <ContactForm
            textValue={form.name.value}
            textValid={form.name.valid}
            emailValue={form.email.value}
            emailValid={form.email.valid}
            onChange={e => this.onChangeHandler(e)}
            onFocus={e => this.onFocusHandler(e)}
            formIsValid={this.state.validForm} />
        </section>
      </Layout>
    )
  }
};

export default Contact;

import React from 'react';

import { FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ContactForm = props => {
  const textClasses = ['form__input', props.textValid ? 'form__input--valid' : ''];
  const emailClasses = ['form__input', props.emailValid ? 'form__input--valid' : ''];

  return (
    <form className="form" method="post" action="/" >
      <div className="form__group">
        <IconContext.Provider value={{className: "form__icon"}}>
          <FaUser />
        </IconContext.Provider>
        <input
          className={textClasses.join(' ')}
          type="text"
          name="name"
          placeholder="Full name"
          id="name"
          required
          autoComplete="off"
          value={props.textValue}
          onChange={props.change} />
        <label
          className="form__label"
          htmlFor="name">Full name</label>
      </div>

      <div className="form__group">
        <IconContext.Provider value={{className: "form__icon"}}>
          <FaEnvelope />
        </IconContext.Provider>
        <input
          className={emailClasses.join(' ')}
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          required
          autoComplete="off"
          value={props.emailValue}
          onChange={props.change} />
        <label
          className="form__label"
          htmlFor="email">Email</label>
      </div>

      <div className="form__group">
        <IconContext.Provider value={{className: "form__icon"}}>
          <FaEdit />
        </IconContext.Provider>
        <textarea
          className="form__textarea"
          name="message"
          id="message"
          placeholder="Message..."></textarea>
        <label
          className="form__label form__label--textarea"
          htmlFor="message">Message</label>
      </div>

      <input
        className={['form__submit', !props.formIsValid ? 'form__submit--on' : '' ].join(' ')}
        type="submit"
        value="Send"
        disabled={props.formIsValid} />
    </form>
  )
};

export default ContactForm;
import React from 'react';

import { FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ContactForm = props => {
  const classes = ['form__input', props.textValid ? 'form__input--valid' : '']


  return (
    <form className="form" method="post" action="/" noValidate>
      <div className="form__group">
        <IconContext.Provider value={{className: "form__icon"}}>
          <FaUser />
        </IconContext.Provider>
        <input
          className={classes.join(' ')}
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
          className="form__input"
          type="email"
          name="email"
          placeholder="Email"
          id="email"
          required
          autoComplete="off"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
          className="form__label"
          htmlFor="message"></label>
      </div>

      <input
        className="form__submit"
        type="submit"
        value="Send"
        disabled={props.formIsValid} />
    </form>
  )
};

export default ContactForm;
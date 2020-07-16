import React from 'react';

import { FaUser, FaEnvelope, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const ContactForm = () => (
  <form className="form" method="post" action="/">
    <div className="form__group">
      <IconContext.Provider value={{className: "form__icon"}}>
        <FaUser />
      </IconContext.Provider>
      <input className="form__input" type="text" name="name" placeholder="Full name" id="name" required autocomplete="off"/>
      <label className="form__label" for="name">Full name</label>
    </div>

    <div className="form__group">
      <IconContext.Provider value={{className: "form__icon"}}>
        <FaEnvelope />
      </IconContext.Provider>
      <input className="form__input" type="email" name="email" placeholder="Email" id="email" required autocomplete="off" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
      <label className="form__label" for="email">Email</label>
    </div>

    <div className="form__group">
      <IconContext.Provider value={{className: "form__icon"}}>
        <FaEdit />
      </IconContext.Provider>
      <textarea className="form__textarea" name="message" id="message" placeholder="Message..."></textarea>
      <label className="form__label" for="message"></label>
    </div>

    <input className="form__submit" type="submit" value="Send" />
  </form>
);

export default ContactForm;
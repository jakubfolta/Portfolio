import React from 'react';

import { FaReadme } from 'react-icons/fa';

const ContactForm = () => (
  <form className="form" method="post" action="">
    <div className="form__group">
      <FaReadme />
      <label className="form__label" for="name">Your name</label>
      <input className="form__text" type="text" name="name" placeholder="Your name" id="name" required autofocus />
    </div>

    <div className="form__group">
      <FaReadme />
      <label className="form__label" for="email">Your email</label>
      <input className="form__email" type="email" name="email" placeholder="Your email" id="email" required />
    </div>

    <div className="form__group">
      <label className="form__label" for="message"></label>
      <textarea className="form__textarea" name="message" id="message" placeholder="Message..." rows="10" cols="30"></textarea>
    </div>
  </form>
);

export default ContactForm;
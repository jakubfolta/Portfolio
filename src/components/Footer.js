import React from 'react';

const Footer = props => (
  <footer className="footer">
    <h3 className="footer__heading">{props.title}</h3>
    <p className="footer__text">{props.text} <a className="link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
  </footer>
);

export default Footer;
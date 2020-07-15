import React from 'react';

const Footer = props => (
  <footer>
    <h3 className="footer-heading">{props.title}</h3>
    <p className="footer-text">{props.text} <a className="link" href="mailto:jakubfolta@yahoo.co.uk">jakubfolta@yahoo.co.uk</a>.</p>
  </footer>
);

export default Footer;
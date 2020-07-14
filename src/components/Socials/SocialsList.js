import React, { Fragment } from 'react';

import SocialsItem from './SocialsItem';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const SocialsList = () => (
  <Fragment>
    <p className="followMe">Follow me</p>
    <ul className="socials__list">
      <SocialsItem link="https://www.facebook.com/jakub.folta.58/" color="#3B5998">
        <FaFacebookSquare />
      </SocialsItem>

      <SocialsItem link="https://github.com/jakubfolta" color="#24292e">
        <FaGithubSquare />
      </SocialsItem>

      <SocialsItem link="https://www.linkedin.com/in/jakubfolta/" color="#0E76A8">
        <FaLinkedin />
      </SocialsItem>

      <SocialsItem link="https://www.instagram.com/jakub.folta/" color="#125688">
        <FaInstagramSquare />
      </SocialsItem>
    </ul>
  </Fragment>
);

export default SocialsList;
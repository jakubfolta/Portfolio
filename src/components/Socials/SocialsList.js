import React, { Fragment } from 'react';

import SocialsItem from './SocialsItem';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const SocialsList = () => (
  <Fragment>
    <p className="followMe">Follow me</p>
    <ul className="socials__list">
      <SocialsItem
        link="https://github.com/jakubfolta"
        color="#24292e"
        title="Follow on Github"
        value="Follow on Github">
        <FaGithubSquare />
      </SocialsItem>

      <SocialsItem
        link="https://www.linkedin.com/in/jakubfolta/" color="#0E76A8"
        title="Follow on LinkedIn"
        value="Follow on LinkedIn">
        <FaLinkedin />
      </SocialsItem>

      <SocialsItem
        link="https://www.instagram.com/jakub.folta/" color="#125688"
        title="Follow on Instagram"
        value="Follow on Instagram">
        <FaInstagramSquare />
      </SocialsItem>
    </ul>
  </Fragment>
);

export default SocialsList;
import React from 'react';

import SocialsItem from './SocialsItem';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const SocialsList = () => (
  <ul className="socialsList">
    <SocialsItem link="#" color="#3B5998">
      <FaFacebookSquare />
    </SocialsItem>

    <SocialsItem link="#" color="#171515">
      <FaGithubSquare />
    </SocialsItem>

    <SocialsItem link="#" color="#0976B4">
      <FaLinkedin />
    </SocialsItem>

    <SocialsItem link="#" color="#125688">
      <FaInstagramSquare />
    </SocialsItem>
  </ul>
)

export default SocialsList;
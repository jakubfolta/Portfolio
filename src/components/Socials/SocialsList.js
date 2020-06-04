import React from 'react';

import SocialsItem from './SocialsItem';
import { IconContext } from "react-icons";
import { FaFacebookSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

const Socials = () => (
  <ul className="socialsList">
    <SocialsItem link="#" >
      <IconContext.Provider value={{color: '#3b5998'}}>
        <div>
          <FaFacebookSquare />
        </div>
      </IconContext.Provider>
    </SocialsItem>

    <SocialsItem link="#" >
      <IconContext.Provider value={{color: '#1877f2'}}>
        <div>
          <FaGithubSquare />
        </div>
      </IconContext.Provider>
    </SocialsItem>

    <SocialsItem link="#" >
      <IconContext.Provider value={{color: '#1877f2'}}>
        <div>
          <FaLinkedin />
        </div>
      </IconContext.Provider>
    </SocialsItem>

    <SocialsItem link="#" >
      <IconContext.Provider value={{color: '#1877f2'}}>
        <div>
          <FaInstagramSquare />
        </div>
      </IconContext.Provider>
    </SocialsItem>

  </ul>
)

export default Socials;
import React from 'react';

import Img from 'gatsby-image';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const ProjectItem = props => (
  <li className="projects__item">
    <h3 className="projects__item-title">{props.title}</h3>
    <div className="projects__image-container">
      <Img className="projects__image" fluid={props.image} alt="Screenshot of project" />
    </div>

    <div className="projects__description-container">
      <p className="projects__description-text">{props.description}</p>
      <p className="projects__description-technologies">{props.technologies.join(' - ')}</p>
    </div>


    <div className="projects__buttons-container">
      <a className="projects__button" href={props.githublink} alt="Source code" target="_blank" rel="noopener noreferrer"><FaGithub />Source</a>

      <a className="projects__button" href={props.demolink} alt="Demo" target="_blank" rel="noopener noreferrer"><FaLink />Demo</a>
    </div>
  </li>
);

export default ProjectItem;
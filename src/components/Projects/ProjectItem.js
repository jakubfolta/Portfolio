import React from 'react';

import Img from 'gatsby-image';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const ProjectItem = props => (
  <li className="projects__item">
    <h3 className="projects__item-title">{props.title}</h3>
    <div className="projects__item-container">
      <div className="projects__image-container">
        <Img className="projects__image" fluid={props.image} alt="Screenshot of project" />
      </div>

      <div className="projects__description-container">
        <p className="projects__description-text">{props.description}</p>
        <p className="projects__description-technologies">{props.technologies.join(' - ')}</p>

        <div className="buttons-container">
          <a className="button" href={props.githublink} alt="Source code" target="_blank" rel="noopener noreferrer"><FaGithub /><span>Source</span></a>
          <a className="button" href={props.visitlink} alt="Demo" target="_blank" rel="noopener noreferrer"><FaLink /><span>Visit</span></a>
        </div>
      </div>
    </div>
  </li>
);

export default ProjectItem;
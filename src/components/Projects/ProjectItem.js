import React from 'react';

import Img from 'gatsby-image';

const ProjectItem = props => (
  <li className="projects__item">
    <h3 className="projects__description-title">{props.title}</h3>
    <div className="projects__image-container">
      <Img className="projects__image" fluid={props.image} alt="Screenshot of project" />
    </div>

    <div className="projects__description-container">
      <p className="projects__description-text">{props.description}</p>
    </div>

    <p className="projects__technologies">{props.technologies.join(' - ')}</p>

    <div></div>
  </li>
);

export default ProjectItem;
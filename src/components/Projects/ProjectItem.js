import React from 'react';

const ProjectItem = props => (
  <li className="projects__item">
    <h3 className="projects__description-title">{props.title}</h3>
    <div className="projects__image-container">
      <img className="projects__image" src="https://picsum.photos/300/200" alt="Screenshot of project" />
    </div>

    <div className="projects__description-container">
      <p className="projects__description-text">{props.description}</p>
    </div>

    <p className="projects__technologies">{props.technologies}</p>

    <div></div>
  </li>
);

export default ProjectItem;
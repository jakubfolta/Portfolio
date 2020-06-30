import React from 'react';

const ProjectItem = props => (
  <li className="projects__item">
    <div className="projects__image-container">
      <img className="projects__image" src="https://picsum.photos/200/300" alt="Screenshot of project" />
    </div>

    <div className="projects__description-container">
      <h3 className="projects__description-title">props.title</h3>
      <p className="projects__description-text">props.description</p>
    </div>
  </li>
);

export default ProjectItem;
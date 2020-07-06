import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ProjectItem from './ProjectItem';

const ProjectsList = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            projects {
              title,
              description,
              technologies
            }
          }
        }
      }
    `
  );

  const projects = data.site.siteMetadata.projects.map( (project, i) =>
    <ProjectItem
     key={i}
     title={project.title}
     description={project.description}
     technologies={project.technologies} /> )

  return (
    <ul className="projects__list">
      {projects}
    </ul>
  )
};

export default ProjectsList;
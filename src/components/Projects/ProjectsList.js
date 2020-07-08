import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ProjectItem from './ProjectItem';

const ProjectsList = () => {
  const data = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                description
                technologies
              }
              excerpt
            }
          }
        }
      }
    `
  );

  const projects = data.allMarkdownRemark.edges.map( (project, i) =>
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
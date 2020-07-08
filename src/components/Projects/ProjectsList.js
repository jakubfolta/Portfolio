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

  const projects = data.allMarkdownRemark.edges.map(project =>
    <ProjectItem
     key={project.node.id}
     title={project.node.frontmatter.title}
     description={project.node.excerpt}
     technologies={project.node.frontmatter.technologies} /> )

  return (
    <ul className="projects__list">
      {projects}
    </ul>
  )
};

export default ProjectsList;
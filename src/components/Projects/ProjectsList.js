import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ProjectItem from './ProjectItem';

const ProjectsList = () => {
  const data = useStaticQuery(
    graphql`
      query ProjectsQuery {
        allMarkdownRemark (sort: {fields: frontmatter___number, order: DESC}) {
          edges {
            node {
              id
              excerpt
              frontmatter {
                title
                technologies
                github
                demo
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
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
     image={project.node.frontmatter.image.childImageSharp.fluid}
     technologies={project.node.frontmatter.technologies}
     githublink={project.node.frontmatter.github}
     visitlink={project.node.frontmatter.demo} /> )

  return (
    <Fragment>
        <ul className="projects__list">
          {projects}
        </ul>
    </Fragment>
  )
};

export default ProjectsList;
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
              description
            }
          }
        }
      }
    `
  );

  console.log(data);

  const projects = data.site.siteMetadata.projects.map(project =>
    <ProjectItem
     title={project.title}
     description={project.description} /> )

  // console.log(projects);

  return (

    <ul className="projects__list">
      {/* <ProjectItem
        title="Example"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." /> */}
        {projects}
      </ul>
  )
};

export default ProjectsList;
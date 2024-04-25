import React from 'react';

import { GatsbyImage } from 'gatsby-plugin-image';
import { FaGithub } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';

const ProjectItem = props => (
  <li className="projects__item">
    <h3 className="projects__item-title">{props.title}</h3>
    <div className="projects__item-container">
      <div className="projects__image-container">
        {props.githublink
          ? <a href={props.visitlink} alt="Demo" target="_blank" rel="noopener noreferrer">
              <GatsbyImage className="projects__image" image={props.image} alt="Screenshot of project" />
            </a>
          : <GatsbyImage className="projects__image" image={props.image} alt="Screenshot of project" />
          
          // <AniLink
          //   fade
          //   duration={.5}
          //   to={props.visitlink}>
          //   <GatsbyImage className="projects__image" image={props.image} alt="Screenshot of project" />
          // </AniLink>
        }
      </div>

      <div className="projects__description-container">
        <p className="projects__description-text">{props.description}</p>
        <p className="projects__description-technologies">{props.technologies.join(' - ')}</p>

        <div className="buttons-container">
          {props.githublink 
            ? <>
                <a className="button" href={props.githublink} alt="Source code" target="_blank" rel="noopener noreferrer"><FaGithub /><span>Source</span></a>
                <a className="button" href={props.visitlink} alt="Demo" target="_blank" rel="noopener noreferrer"><FaLink /><span>Visit</span></a>
              </>
            : <a
                href='/'
                style={{pointerEvents: 'none'}}
                className="button">
                <FaLink /><span>Visit - soon...</span>
              </a>
            // <AniLink
            //   fade
            //   duration={.5}
            //   to={props.visitlink}
            //   className="button">
            //   <FaLink /><span>Visit</span>
            // </AniLink>
          }
        </div>
      </div>
    </div>
  </li>
);

export default ProjectItem;
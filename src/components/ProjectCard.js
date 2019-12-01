import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";

export default ({ project }) => {
  return (
    <ProjectCard>
      <div>
        <Slide bottom>
          <img src={project.image} alt="screenshot of a  project I worked on" />
        </Slide>
      </div>

      <div>
          <Slide bottom>
        <span>
            <a href={project.gitHubLink}>
              <h6>{project.stack}</h6>
            </a>
            <a href={project.hostedSite}>
              <Heading>{project.title}</Heading>
            </a>
            <p>{project.description}</p>
        </span>
          </Slide>
      </div>
    </ProjectCard>
  );
};

const ProjectCard = styled.div`
  display: flex;
  div {
    width: 50%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    /* align-items: center; */
    padding: 0 2.3rem;
    /* height: 100%; */
    /* margin: 0 auto; */
  }
  img {
    height: 70%;
    width: 70%;
    border-radius: 1.5rem;
    /* align-self: flex-start; */
    border: 3px solid lightgray;
  }

  p {
    font-size: 1.7rem;
    /* width: 70%; */
    text-align: center;
  }
`;

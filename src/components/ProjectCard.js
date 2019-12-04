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

    padding: 0 2.3rem;

    img {
      height: 25rem;
      margin: 3rem 0;
      width: 70%;
      border-radius: 1.5rem;
      border: 3px solid lightgray;
      align-self: flex-end;
    }

    span {
      width: 70%;
      text-align: center;
      justify-self: center;

      p {
        font-size: 1.7rem;
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      img {
        width: 100%;
        height: 80%;
      }

      span {
        width: 100%;
        height: 70%;

        p {
          font-size: 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    margin: 0 -1.5rem;

    div {
      /* border: 1px solid; */
      width: 100%;
      padding: 0;
      img {
        width: 100%;
        height: 80%;
      }

      span {
        width: 100%;
        height: 70%;

        p {
          font-size: 1rem;
        }
      }
    }
  }
`;

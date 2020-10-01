import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";

export default ({ project }) => {
  return (
    <ProjectCard>
      <div>
        <ImageContainer>
          <Slide bottom>
            <img
              src={project.image[0]}
              alt="screenshot of a  project I worked on"
            />
          </Slide>
          {project.image[1] && (
            <Slide bottom>
              <img
                src={project.image[1]}
                alt="screenshot of a  project I worked on"
              />
            </Slide>
          )}
        </ImageContainer>
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

const ImageContainer = styled.div`
  display: flex !important;
  flex-direction: row !important;
  width: 100% !important;
  align-items: center !important;
  justify-content: center img {
    width: 50%;
    border-radius: 1.5rem;
    align-self: flex-end;
  }
`;

const ProjectCard = styled.div`
  display: flex;
  padding-bottom: 2rem;
  div {
    width: 50%;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 2.3rem;

    span {
      width: 100%;
      text-align: center;
      justify-self: center;

      p {
        font-size: 1.7rem;
        text-align: center;
      }

      h1 {
        color: darkred;
        transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s;

        &:hover {
          color: darkseagreen;
          transition-duration: 0.3s;
          -webkit-transition-duration: 0.3s;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      width: 100%;
      img {
        width: 100%;
      }

      span {
        width: 100%;
        height: 70%;

        p {
          font-size: 1rem;
          margin-bottom: 2.2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    margin: 0 -1.5rem;

    div {
      width: 100%;
      padding: 0;
      img {
        width: 50%;
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

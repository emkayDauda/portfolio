import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import projects from "../utils/ProjectDetails";
import ProjectCard from "./ProjectCard";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide bottom>
      <Projects>
        <Heading>Projects I've Worked on</Heading>
        {projects.map(p => (
          <ProjectCard project={p} />
        ))}
      </Projects>
    </Slide>
  );
};

const Projects = styled.div`
  img {
    align-self: flex-end;
  }

  span {
    width: 70%;
    text-align: center;
    justify-self: center;
  }
  > div:nth-child(odd) {
    flex-direction: row-reverse;

    img {
      align-self: flex-start;
    }
    span {
      align-self: flex-end;
      margin-right: 0;
    }
  }
  margin: 3rem 0;
`;

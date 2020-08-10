import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import projects from "../utils/ProjectDetails";
import ProjectCard from "./ProjectCard";

export default () => {
  return (
    <Projects id="Projects">
      <Heading>Projects I've Worked on</Heading>
      <br />
      <span />
        {projects.map((p) => (
          <ProjectCard id={Math.random()} project={p} />
        ))}
    </Projects>
  );
};

const Projects = styled.div`
  margin-bottom: 3rem;
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

  @media only screen and (max-width: 500px) {
    > div:nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";

export default ({ screenshot, stack, projectTitle, projectDescription }) => {
  return (
    <ProjectCard>
      <div>
        <img src={screenshot} alt="screenshot of a  project I worked on" />
      </div>

      <div>
          <p>{stack}</p>
          <Heading>{projectTitle}</Heading>
          <p>{projectDescription}</p>
      </div>
    </ProjectCard>
  );
};

const ProjectCard = styled.div`
  display: flex;
  >div {
      width: 50%;
  }
`;

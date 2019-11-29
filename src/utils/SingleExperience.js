import React from "react";
import styled from "styled-components";

export default ({ companyName, companyWebsite, tagline, points }) => {
  return (
    <ExperienceBody>
      <a href={companyWebsite}>{companyName}</a>
      <p>{tagline}</p>
      <ul>
        {points.map(p => {
          return <ListItem>{p}</ListItem>;
        })}
      </ul>
    </ExperienceBody>
  );
};

const ExperienceBody = styled.div`
  a {
    text-decoration: none;
    font-size: 2.2rem;
  }
`;

const ListItem = styled.li`
    list-style: circle;
    list-style-position: inside;
`
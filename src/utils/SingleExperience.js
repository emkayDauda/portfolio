import React from "react";
import styled from "styled-components";

export default ({ companyName, companyWebsite, tagline, points }) => {
  return (
    <ExperienceBody>
      <a href={companyWebsite}>{companyName}</a>
      <p>{tagline}</p>
      <ul>
        {points.map(p => {
          return <ListItem><span>{p}</span></ListItem>;
        })}
      </ul>
    </ExperienceBody>
  );
};

const ExperienceBody = styled.div`

  a {
    text-decoration: none;
    font-size: 2.8rem;
    color: darkred;

    &:hover {
      color: lightskyblue;
    }
  }

  p {
    line-height: 1.3rem;
  }
`;

const ListItem = styled.li`
    list-style: disc;
    list-style-position: inside;
    color: darkred;
    margin: 1.9rem 0;

    span {
      color: gray;
    }
`
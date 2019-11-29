import React from "react";
import styled from "styled-components";
import { Heading, Button } from "react-bulma-components";

export default () => {
  return (
    <HeaderDiv>
      <h5>
        H<span>i</span> there. <span>I</span> am
      </h5>
      <Heading>Maaruf Dauda</Heading>
      <Heading>A Mobile and Web Developer.</Heading>
      <p>
        I craft beautiful Android apps with the best programming language to
        ever grace our plane, Kotlin. I can use Java too, if you insist. <br />
        <br /> These days, I am learning Full-Stack Web Development at Lambda
        School, along with principles of Data Science.
      </p>

      <Button color='primary' >Get In Touch</Button >
    </HeaderDiv>
  );
};

const HeaderDiv = styled.div`
  margin: 3rem 0;
  h1 {
    line-height: 1rem;
    margin: 0;
    padding: 0;
  }

  h5 {
    margin: 0.8rem 0;
  }

  span {
    color: darkseagreen;
  }

  p {
    width: 50%;
    padding-right: 3.5rem;
    margin-bottom: 1.6rem;
  }
`;

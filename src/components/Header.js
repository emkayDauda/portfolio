import React from "react";
import styled from "styled-components";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide bottom>
      <HeaderDiv>
        <h5>
          H<span>i</span> there{" "}
          <span role="img" aria-label="hand-waving">
            👋🏽
          </span>
          . My <span>name</span> is
        </h5>
        <h4>Maaruf Dauda.</h4>
        <h5>
          I build <span>stuff</span> for the web and your phone.
        </h5>
        <p>
          I craft beautiful Android apps with the best programming language to
          ever grace our plane, Kotlin. I can use Java too, if you insist.{" "}
          <br />
          <br /> These days, I am learning Full-Stack Web Development at Lambda
          School, along with principles of Data Science.
        </p>

        <a href='mailto:mkdauda.work@gmail.com' ><button>Get In Touch</button></a>
      </HeaderDiv>
    </Slide>
  );
};

const HeaderDiv = styled.div`
  padding: 3rem 0;
  margin-bottom: 7rem;
  h1 {
    line-height: 1rem;
    margin: 0;
    padding: 0;

  }

  h4 {
    font-family: "Sulphur Point", serif;
    font-size: 5rem;
    padding-left: 0;
    line-height: 4.3rem;
  }

  h5 {
    /* border: 1px solid; */
    margin: 0.1rem 0;
    font-size: 2.5rem;
  }

  span {
    color: darkseagreen;
  }

  p {
    width: 35%;
    padding-right: 3.5rem;
    margin: 1.6rem 0;
  }

  button {
    
    border: .13rem solid darkred;
    background: none;
    font-family: "Lato", serif;
    border-radius: .3rem;
    padding: 1.4rem 1.6rem;
    margin: 2.7rem 0;

    &:hover {
      cursor: pointer;
      color: white;
      background: darkred;
    }
  }
`;

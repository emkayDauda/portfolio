import React from "react";
import styled from "styled-components";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide bottom>
      <HeaderDiv>
        <h2>
          H<span>i</span> there{" "}
          <span role="img" aria-label="hand-waving">
            👋🏽
          </span>
          . My <span>name</span> is
        </h2>
        <h4>Maaruf Dauda.</h4>
        <h5>
          <span>I build stuff for the web and your phone.</span>
        </h5>
        <p>
          I craft beautiful Android apps with the best programming language to
          ever grace our planet, Kotlin. I can use Java too, if you insist.{" "}
          <br />
          <br /> These days, I am building the future of consumer payments and
          energy acquisition at BuyPowerInc (YC W17).
        </p>

        <a href="mailto:mkdauda.work@gmail.com">
          <button>Get In Touch</button>
        </a>
      </HeaderDiv>
    </Slide>
  );
};

const HeaderDiv = styled.div`
  padding: 3rem 0;
  margin-bottom: 7rem;

  h2 {
    font-size: 1.1rem;
    margin: 1rem 0;
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
    color: green;
  }

  p {
    width: 35%;
    /* padding-right: 3.5rem; */
    margin: 1.6rem 0;
  }

  button {
    border: 0.13rem solid darkred;
    background: none;
    font-family: "Lato", serif;
    border-radius: 0.3rem;
    padding: 1.4rem 2.4rem;
    margin: 2.7rem 0;

    &:hover {
      cursor: pointer;
      color: white;
      background: darkred;
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      width: 70%;
    }

    button {
      margin: 2.7rem auto;
      justify-self: center;
    }
  }

  @media only screen and (max-width: 500px) {
    p {
      width: 100%;
    }

    h4 {
      font-size: 2.5rem;
      line-height: 2.4rem;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";
export default () => {
  return (
    <Slide bottom>
      <ContactSection id="Contact">
        <Heading>
          Wanna chat? <span>Hit me up...</span>
        </Heading>
        <p>
          I am currently open for contract or freelance opportunities on
          ReactJS, Node or Native Android projects. <br />
          <br />I also try to be a nice person, so feel free to send me a mail
          just to say Hi.
        </p>

        <a href="mailto:mkdauda.work@gmail.com">
          <button>Get In Touch</button>
        </a>
      </ContactSection>
    </Slide>
  );
};

const ContactSection = styled.div`
  padding: 6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;

    span {
      color: darkseagreen;
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }

  p {
    width: 40%;
    margin: 0 auto;
    text-align: center;
    font-size: 1.4rem;
  }

  a {
    margin: 2.7rem 0;
    button {
      border: 0.13rem solid darkred;
      background: none;
      font-family: "Lato", serif;
      border-radius: 0.3rem;
      padding: 1.4rem 1.6rem;
      /* margin: 2.7rem auto; */

      &:hover {
        cursor: pointer;
        color: white;
        background: darkred;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    p {
      width: 80%;
    }
  }

  @media only screen and (max-width: 500px) {
    p {
      width: 100%;
      margin: 0 -2rem;
    }
  }
`;

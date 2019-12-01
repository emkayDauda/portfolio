import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";
export default () => {
  return (
    <Slide bottom>
      <ContactSection>
        <Heading>
          Convinced? <span>Hit me up...</span>
        </Heading>
      </ContactSection>
    </Slide>
  );
};

const ContactSection = styled.div`
  h1 {
    text-align: center;

    span {
      color: green;
      font-size: 1.2rem;
      margin-left: 0.5rem;
    }
  }
`;

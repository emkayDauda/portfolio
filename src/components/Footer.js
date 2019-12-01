import React from "react";
import styled from "styled-components";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide>
      <FooterDiv>
        <a href="https://github.com/emkayDauda">
          <p>
            Built with{" "}
            <span role="img" aria-label="React">
            🍵
            </span>{" "}
            and{" "}
            <span role="img" aria-label="love">
              💚
            </span>{" "}
            by <span>Maaruf Dauda.</span>
          </p>
        </a>
      </FooterDiv>
    </Slide>
  );
};

const FooterDiv = styled.footer`
  width: 100%;
  display: flex;
  background: darkred;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem 0;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    /* font-family: "Lato", sans-serif; */
  }
  p {
    span:nth-child(3) {
      font-size: 2rem;
      font-family: "Tangerine", cursive;
    }
  }
`;

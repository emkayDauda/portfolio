import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";

import { Slide } from "react-reveal";
import facebook from "./FooterIcons/004-facebook.svg";
import linkedin from "./FooterIcons/003-linkedin.svg";
import twitter from "./FooterIcons/002-twitter.svg";
import github from "./FooterIcons/005-github.svg";
import instagram from "./FooterIcons/001-instagram.svg";

export default () => {
  return (
    <Slide>
      <FooterDiv>
        <div>
          <a href="https://github.com/emkaydauda">
            <img src={github} alt="" />
          </a>

          <a href="https://twitter.com/emkaydauda">
            <img src={twitter} alt="" />
          </a>
          <a href="https://linkedin.com/in/maarufdauda/">
            <img src={linkedin} alt="" />
          </a>

          <a href="https://dev.to/emkaydauda">
            <FontAwesomeIcon  title="emkaydauda's DEV Profile" icon={faDev} />
          </a>

          <a href="https://instagram.com/mkdauda">
            <img src={instagram} alt="" />
          </a>

          {/* <a href="https://facebook.com/mkdauda">
            <img src={facebook} alt="" />
          </a> */}
        </div>
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
  padding: 1.2rem 0 0;

  > div {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    a {
      height: 1.4rem;
      width: 1.4rem;
      font-size: 1.4rem;

      svg {
      vertical-align: 0;
      }

      img {
        height: 1.4rem;
        width: 1.4rem;
      }
    }
  }

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

  @media only screen and (max-width: 768px) {
    > div {
      width: 40%;
    }
  }

  @media only screen and (max-width: 500px) {
    > div {
      width: 80%;
    }
  }
`;

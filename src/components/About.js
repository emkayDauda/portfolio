import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide bottom>
      <HeaderDiv id="About">
        <div>
          <Heading>Why even should you talk to me?</Heading>
          <p>
            <br />I have six years of experience with the{" "}
            <span>semi-colon.</span>
            Admittedly, the first two of those were spent drifting from one{" "}
            <span>shiny new tech</span>nology to another. <br /> <br />
            These days, however, I boast proudly of a solid four years of
            experience with <span>Native Android Development</span>, two years
            of experience of experience with{" "}
            <span>Hybrid Mobile (Flutter) Development </span>
            and almost one year of experience with <span>
              Full-Stack Web
            </span>{" "}
            technologies which I've just happened to pick up at{" "}
            <span>Lambda School.</span>
          </p>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/emkaydauda/image/upload/c_fill,h_2900,w_3024/v1574869041/IMG_1752.jpg"
            alt="A lovely one of me"
          />
        </div>
      </HeaderDiv>
    </Slide>
  );
};

const HeaderDiv = styled.div`
  display: flex;
  margin: 4rem 0;
  > div {
    width: 50%;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.7rem;
      /* padding-right: 1rem; */

      span {
        color: green;
      }
    }
  }

  p {
  }

  img {
    width: 100%;
    border-radius: 2rem;
  }
`;

import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide bottom>
      <AboutDiv id="About">
        <div>
          <Heading>Why even should you talk to me?</Heading>
          <p>
            <br />I have six years of experience with the{" "}
            <span>semi-colon. </span>
            Admittedly, the first two of those were spent drifting from one{" "}
            <span>shiny new tech</span>nology to another. <br /> <br />
            These days, however, I boast proudly of a solid four years of
            experience with <span>Native Android Development</span>, two years
            of experience with <span>Hybrid Mobile (Flutter) Development </span>
            and about six months of experience with <span>
              Full-Stack Web
            </span>{" "}
            technologies which I've just happened to pick up at{" "}
            <span>Lambda School.</span>
          </p>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/emkaydauda/image/upload/c_fill,e_grayscale,h_2900,q_100,w_3024/v1574869041/IMG_1752.jpg"
            alt="A lovely one of me"
          />
        </div>
      </AboutDiv>
    </Slide>
  );
};

const AboutDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4rem 0;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.7rem;

      span {
        color: green;
      }
    }
  }

  img {
    width: 80%;
    border-radius: 2rem;
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;

    > div {
      p {
        font-size: 1.5rem;
      }
    }

    img {
      margin: 2rem 0;
      width: 60%;
    }
  }

  @media only screen and (max-width: 500px) {
    > div {
      h1 {
        text-align: center;
      }

      p {
        font-size: 1.2rem;
      }
    }

    img {
      margin: 2rem 0;
      width: 60%;
    }
  }
`;

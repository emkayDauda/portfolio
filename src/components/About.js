import React from "react";
import styled from "styled-components";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";

export default () => {
  return (
    <Slide bottom>
      <HeaderDiv>
        <div>
          <Heading>Why even should you talk to me?</Heading>
          <p>
            <br />I have six years of experience with the semi-colon.
            Admittedly, two of those were spent drifting from one shiny new
            technology to another. <br /> <br />
            These days, however, I boast proudly of a solid four years of
            experience with Native Android Development, two years of experience
            of experience with Hybrid Mobile (Flutter) development and almost
            one year of experience with Full-Stack Web technologies which I just
            happened to pick up at Lambda School.
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

  > div {
    width: 50%;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.7rem;
    }
  }

  p {
    padding-right: 1.4rem;
  }

  img {
    width: 100%;
    border-radius: 2rem;
  }
`;

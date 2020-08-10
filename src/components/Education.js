import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import { Heading } from "react-bulma-components";
import { Slide } from "react-reveal";

import Experience from "../utils/SingleExperience";
import workPoints from "../utils/workPlacePoints";

import { spring, AnimatedSwitch } from "react-router-transition";

import "../utils/NavLink.css";

export default () => {
  return (
    <Slide bottom>
      <EducationDiv>
        <Heading id="Education">Education</Heading>
        <div>
          <RouterNav>
            <StyledLink activeClassName="active" exact to="/">
              Lambda School
            </StyledLink>

            <StyledLink activeClassName="active" to="/education/lautech">
              Lautech
            </StyledLink>
          </RouterNav>

          <Wrapper>
            <CustomSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={(styles) => {
                return {
                  opacity: styles.opacity,
                  transform: `scale(${styles.scale})`,
                };
              }}
            >
              <Route
                exact
                path={["/", "/experience/:x"]}
                render={() => (
                  <Experience
                    companyName="Lambda School"
                    companyWebsite="https://www.lambdaschool.com"
                    tagline="August, 2019 - February, 2020"
                    points={workPoints.lambda}
                  />
                )}
              />

              <Route
                path="/education/lautech"
                render={() => (
                  <Experience
                    companyName="Lautech"
                    companyWebsite="https://www.lautech.edu.ng/"
                    tagline="July, 2014 - February, 2020"
                    points={workPoints.lautech}
                  />
                )}
              />

              
            </CustomSwitch>
          </Wrapper>
        </div>
      </EducationDiv>
    </Slide>
  );
};

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const EducationDiv = styled.div`
  > div {
    display: flex;
  }
  margin: 7rem 9rem 5.5rem;

  @media only screen and (max-width: 768px) {
    margin: 7rem 0rem 5.5rem;
  }

  @media only screen and (max-width: 500px) {
    > div {
      position: relative;
      flex-direction: column;
    }
  }
`;

const RouterNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 4rem;

  @media only screen and (max-width: 500px) {
    flex-direction: row;
    width: calc(100% + 4.4rem);
    max-height: 100%;
    overflow-x: scroll !important;
    margin: 0 -2.3rem;

    a {
      &:first-of-type {
        margin-left: 0.5rem;
      }
      &:last-of-type {
        margin-right: 0.5rem;
      }
    }
  }
`;

const StyledLink = styled(NavLink)`
  border-left: 2px solid darkred;
  padding-bottom: 0;
  padding: 1rem 0.5rem;
  /* text-align: right; */
  outline: 0;
  &:hover {
    background: darkred;
    color: white;
    -webkit-transition-duration: 0.5s; /* Safari 4.0 - 8.0 */
    transition-duration: 0.5s;
  }

  @media only screen and (max-width: 500px) {
    border-top: 2px solid darkred;
    border-left: none;
    width: max-content;
    word-wrap: none;
    white-space: nowrap;
    line-height: 1rem;

    padding: 1rem 2rem 1.5rem;
  }
`;

const CustomSwitch = styled(AnimatedSwitch)`
  position: relative;
  min-height: 30rem;
  > div {
    position: absolute;
  }
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

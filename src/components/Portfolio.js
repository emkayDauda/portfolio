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
      <PortfolioDiv>
        <Heading id="Experience">Previous Experience</Heading>
        <div>
          <RouterNav>
            <StyledLink activeClassName="active" exact to="/">
              Lambda School
            </StyledLink>

            <StyledLink activeClassName="active" to="/experience/myFlex">
              myFlex.ng
            </StyledLink>
            <StyledLink activeClassName="active" to="/experience/jhaki">
              Jhaki
            </StyledLink>
            <StyledLink activeClassName="active" to="/experience/hng">
              Hotels.ng
            </StyledLink>
          </RouterNav>
          <Wrapper>
            <CustomSwitch
              atEnter={bounceTransition.atEnter}
              atLeave={bounceTransition.atLeave}
              atActive={bounceTransition.atActive}
              mapStyles={styles => {
                return {
                  opacity: styles.opacity,
                  transform: `scale(${styles.scale})`
                };
              }}
            >
              <Route
                exact
                path="/"
                render={() => (
                  <Experience
                    companyName="Lambda School"
                    companyWebsite="https://www.lambdaschool.com"
                    tagline="aTagLine"
                    points={workPoints.lambda}
                  />
                )}
              />

              <Route
                path="/experience/myFlex"
                render={() => (
                  <Experience
                    companyName="myFlex.ng"
                    companyWebsite="https://www.myflex.ng"
                    tagline="aTagLine"
                    points={workPoints.myflex}
                  />
                )}
              />

              <Route
                path="/experience/jhaki"
                render={() => (
                  <Experience
                    companyName="Jhaki"
                    companyWebsite="https://www.jhaki.com"
                    tagline="aTagLine"
                    points={workPoints.lambda}
                  />
                )}
              />

              <Route
                path="/experience/hng"
                render={() => (
                  <Experience
                    companyName="Hotels.ng"
                    companyWebsite="https://www.hotels.ng"
                    tagline="aTagLine"
                    points={workPoints.lambda}
                  />
                )}
              />
            </CustomSwitch>

            {/* <AnimatedRoute
            path="/experience/myFlex"
            component={() => (
              <Experience
                companyName="myFlex.ng"
                companyWebsite=""
                tagline="aTagLine"
                points={workPoints.lambda}
              />
            )}
            atEnter={{ offset: 100 }}
            atLeave={{ offset: 100 }}
            atActive={{ offset: 0 }}
            mapStyles={styles => ({
              transform: `translateX(${styles.offset}%)`
            })}
          /> */}
          </Wrapper>
        </div>
      </PortfolioDiv>
    </Slide>
  );
};

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

const StyledLink = styled(NavLink)`
  border-left: 2px solid darkred;
  padding-bottom: 0;
  /* line-height:0; */
  padding: 1rem 0.5rem;
  outline: 0;
  &:hover {
    background: darkred;
    color: white;
    -webkit-transition-duration: 0.5s; /* Safari 4.0 - 8.0 */
    transition-duration: 0.5s;
  }
`;

const CustomSwitch = styled(AnimatedSwitch)`
  position: relative;
  > div {
    position: absolute;
  }
`;

const PortfolioDiv = styled.div`
  > div {
    display: flex;
  }
  margin: 9rem;
`;

const RouterNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 4rem;
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

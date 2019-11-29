import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";
import { Heading } from "react-bulma-components";

import Experience from "../utils/SingleExperience";
import workPoints from "../utils/workPlacePoints";

import { spring, AnimatedSwitch } from "react-router-transition";

export default () => {
  return (
    <>
      <Heading>Previous Experience</Heading>
      <CustomRouter>
        <RouterNav>
          <NavLink exact to="/">
            Lambda School
          </NavLink>

          <NavLink to="/experience/myFlex">myFlex.ng</NavLink>
          <NavLink to="/experience/jhaki">Jhaki</NavLink>
          <NavLink to="/experience/hng">Hotels.ng</NavLink>
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
                  points={workPoints.lambda}
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
      </CustomRouter>
    </>
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

const CustomSwitch = styled(AnimatedSwitch)`
  position: relative;
  > div {
    position: absolute;
  }
`;

const CustomRouter = styled.div`
  display: flex;
`;

const RouterNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 25%;

  a {
    padding: 1.4rem 0;
  }
`;

const Wrapper = styled.div`
  flex-grow: 1;
`;

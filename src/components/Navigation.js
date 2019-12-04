import React from "react";
import styled from "styled-components";
import Sticky from "react-headroom";
import { Slide, Fade } from "react-reveal";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { reveal as Menu } from "react-burger-menu";
import Logo from "../utils/Splash";

const Nav = () => {
  return (
    <Fade>
      <NavBody>
        <img
          src="https://res.cloudinary.com/emkaydauda/image/upload/c_fill,h_3024,w_3024/v1574869041/IMG_1752.jpg"
          alt="A lovely one of me"
        />

        <div>
          <Slide top>
            <FancyLink offset="100" href="#About">
              About
            </FancyLink>
            <FancyLink offset="100" href="#Experience">
              Experience
            </FancyLink>
            <FancyLink offset="100" href="#Projects">
              Projects
            </FancyLink>
            <FancyLink offset="100" href="#Contact">
              Contact
            </FancyLink>
            <FancierLink href="#Resume">Resume</FancierLink>
          </Slide>
        </div>
      </NavBody>
    </Fade>
  );
};

export default () => {
  return (
    <Sticky>
      <Nav />
    </Sticky>
  );
};

const NavBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.8rem;
  height: 4rem;
  align-items: center;
  background: whitesmoke;
  box-shadow: 0 10px 30px -10px darkgray;

  img {
    margin: auto 0;
    height: 2.1rem;
    width: 2.1rem;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const FancyLink = styled(AnchorLink)`
  text-decoration: none;
  font-size: 1rem;
  color: darkred;
  margin: auto 1.5rem;
  border: 1px solid darkred;
  padding: 0.1rem 0.8rem;
  border-radius: 0.3rem;
  font-weight: bold;
  outline: 0;

  &:hover {
    transition-duration: 0.5s;
    -webkit-transition-duration: 0.5s;
    background: darkred;
    color: white;
  }

  @media only screen and (max-width: 800px) {
    padding: 0.3rem 0.1rem;
    margin: 1rem 0.3rem;
    text-align: center;
  }
`;

const FancierLink = styled(FancyLink)`
  padding: 0.5rem 0.8rem;
`;
const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  /* align-items: flex-end; */
`;

const Header = styled.header`
  height: 40%;
  /* background: darkred; */
  margin: 0 -2rem;
  /* border-radius: 3rem; */
`;
export const BurgerMenu = props => {
  const setMenuOpen = props.setMenuOpen;
  return (
    <NavLinks>
      <Menu {...props} right>
        <Header>
          <Logo />
        </Header>
        <FancyLink
          onClick={() => setMenuOpen(false)}
          offset="100"
          href="#About"
        >
          About
        </FancyLink>
        <FancyLink
          onClick={() => setMenuOpen(false)}
          offset="100"
          href="#Experience"
        >
          Experience
        </FancyLink>
        <FancyLink
          onClick={() => setMenuOpen(false)}
          offset="100"
          href="#Projects"
        >
          Projects
        </FancyLink>
        <FancyLink
          onClick={() => setMenuOpen(false)}
          offset="100"
          href="#Contact"
        >
          Contact
        </FancyLink>
        <FancierLink onClick={() => setMenuOpen(false)} href="#Resume">
          Resume
        </FancierLink>
      </Menu>
    </NavLinks>
  );
};

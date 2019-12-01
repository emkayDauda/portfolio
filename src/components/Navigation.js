import React from "react";
import styled from "styled-components";
import Sticky from "react-stickynode";

const Nav = () => {
  return (
    <NavBody>
      <img
        src="https://res.cloudinary.com/emkaydauda/image/upload/c_fill,h_3024,w_3024/v1574869041/IMG_1752.jpg"
        alt="A lovely one of me"
      />

      <div>
        <FancyLink href="#">About</FancyLink>
        <FancyLink href="#">Experience</FancyLink>
        <FancyLink href="#">Projects</FancyLink>
        <FancyLink href="#">Contact</FancyLink>
        <FancierLink href="#">Resume</FancierLink>
      </div>
    </NavBody>
  );
};

export default () => {
  return (
    <Sticky>
      {status => {
        if (status.status === Sticky.STATUS_FIXED) {
          return <Nav />;
        }
        if (status.status === Sticky.STATUS_ORIGINAL) {
          return <Nav />;
        }
        return <Nav />;
      }}
    </Sticky>
  );
};

const NavBody = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.8rem;
  height: 4rem;
  align-items: center;
  background: darkslateblue;
  margin-bottom: 0.3rem;

  img {
    margin: auto 0;
    height: 2.1rem;
    width: 2.1rem;
  }

  div {
    justify-content: space-between;
  }
`;

const FancyLink = styled.a`
  text-decoration: none;
  font-size: 1rem;
  color: whitesmoke;
  margin: auto 1.5rem;
  border: 1px solid;
  padding: 0.1rem 0.8rem;
  border-radius: 0.3rem;
  font-weight: bold;
  background: #251d52;
`;

const FancierLink = styled(FancyLink)`
  padding: 0.5rem 0.8rem;
`;

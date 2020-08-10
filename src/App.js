import React, { useState, useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import "react-bulma-components/dist/react-bulma-components.min.css";
import Navigation, { BurgerMenu } from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./utils/Splash";
import { useSwipeable } from "react-swipeable";
import ReactGA from "react-ga";

import "./App.css";

const trackingID = "UA-169143608-1";

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const config = {
    delta: 130, // min distance(px) before a swipe starts
    preventDefaultTouchmoveEvent: true, // preventDefault on touchmove, *See Details*
    trackTouch: true, // track touch input
    trackMouse: false, // track mouse input
    rotationAngle: 0, // set a rotation angle
  };

  const openMenu = () => {
    if (!menuOpen) setMenuOpen(true);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => openMenu(),
    ...config,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 4 * 1000);
  }, []);

  ReactGA.initialize(trackingID);

  return (
    <>
      {loading ? (
        <div style={{ height: "100vh" }}>
          <Logo />
        </div>
      ) : (
        <div id="outer-container" style={{ height: "100% " }}>
          <Navigation />
          <BurgerMenu
            setMenuOpen={setMenuOpen}
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            isOpen={menuOpen}
            onStateChange={(state) => setMenuOpen(state.isOpen)}
          />
          <Body id="page-wrap" {...handlers}>
            <Header />
            <About />
            <Router>
              <Portfolio />
            </Router>
            <Router>
              <Education />
            </Router>
            <Projects />
            <Contact />
          </Body>
          <Footer />
        </div>
      )}
    </>
  );
}

const Body = styled.div`
  padding: 0 2.3rem;
  background: whitesmoke;

  a {
    outline: none;
  }

  /* font-family: 'Lato', sans-serif; */
  /* font-family: 'Tangerine', cursive; */
`;

export default App;

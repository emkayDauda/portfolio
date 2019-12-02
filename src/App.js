import React, { useState, useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import "react-bulma-components/dist/react-bulma-components.min.css";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Logo from "./utils/Splash";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 0 * 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div />
      ) : (
        <div>
          <Navigation />
          <Body>
            <Header />
            <About />
            <Router>
              <Portfolio />
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

  /* font-family: 'Lato', sans-serif; */
  /* font-family: 'Tangerine', cursive; */
`;

export default App;

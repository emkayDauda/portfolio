import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import styled from "styled-components";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

import "react-bulma-components/dist/react-bulma-components.min.css";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <Navigation />
      <Body>
        <Header />
        <About />
        <Router>
          <Portfolio />
        </Router>
      </Body>
    </div>
  );
}

const Body = styled.div`
  padding: 0 2.3rem;
`;

export default App;

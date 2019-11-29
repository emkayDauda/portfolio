import React from "react";
import About from "./components/About";

import "react-bulma-components/dist/react-bulma-components.min.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <About />
    </div>
  );
}

export default App;

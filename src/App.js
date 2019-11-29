import React from "react";
import Header from "./components/Header";

import "react-bulma-components/dist/react-bulma-components.min.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
    </div>
  );
}

export default App;

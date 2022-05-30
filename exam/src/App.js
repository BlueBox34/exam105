import React from "react";
import Aboutme from "./component/Aboutme.js";
import Home from "./component/Home.js";
import Gallery from "./component/Gallery.js";
import NavHome from "./component/Nav.js";
// import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <header className="App-header">
      <Home />
      <Aboutme />
      <Gallery />
    </header>
  );
}

export default App;

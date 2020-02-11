import React from "react";
import logo from "./logo.svg";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import AboutCard from "./components/Section-card/AboutCard";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="Image-container"></div>
      <AboutCard />
    </div>
  );
}

export default App;

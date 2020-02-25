import React from "react";
import logo from "./logo.svg";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import AboutCard from "./components/Section-card/AboutCard";
import SkillsCard from "./components/Skills/SkillsCard";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="Image-container"></div>
      <AboutCard />
      <SkillsCard />
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import AboutCard from "./components/Section-card/AboutCard";
import SkillsCard from "./components/Skills/SkillsCard";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="Image-container"></div>
      <Route path="/about" component={AboutCard} />
      <Route path="/skills" component={SkillsCard} />
    </div>
  );
}

export default App;

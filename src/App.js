import React from "react";
import logo from "./logo.svg";

import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import AboutCard from "./components/About/AboutCard";
import SkillsCard from "./components/Skills/SkillsCard";
import ProjectCard from "./components/Project/ProjectCard";
import Home from "./components/Home/Home";
import { ImageContainer } from "./components/Style";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <ImageContainer>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutCard} />
        <Route path="/skills" component={SkillsCard} />
        <Route path="/projects" component={ProjectCard} />
      </ImageContainer>
    </div>
  );
}

export default App;

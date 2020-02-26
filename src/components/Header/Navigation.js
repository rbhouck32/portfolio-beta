import React from "react";
import { Anchor, NavWrap, NavCleanLink } from "../Style";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavWrap>
      <NavCleanLink to="/about">
        <Anchor>About</Anchor>
      </NavCleanLink>
      <NavCleanLink to="/skills">
        <Anchor>Skills</Anchor>
      </NavCleanLink>
      <NavCleanLink to="/projects">
        <Anchor>Projects</Anchor>
      </NavCleanLink>
    </NavWrap>
  );
};

export default Navigation;

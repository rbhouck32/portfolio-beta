import React from "react";
import { Anchor, NavWrap } from "../Style";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavWrap>
      <Link to="/about">
        <Anchor>About</Anchor>
      </Link>
      <Anchor href="#">Skills</Anchor>
      <Anchor href="#">Projects</Anchor>
    </NavWrap>
  );
};

export default Navigation;

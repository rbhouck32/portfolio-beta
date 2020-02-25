import React from "react";
import { Anchor, NavWrap } from "../Style";

const Navigation = () => {
  return (
    <NavWrap>
      <Anchor href="#">About</Anchor>
      <Anchor href="#">Skills</Anchor>
      <Anchor href="#">Projects</Anchor>
    </NavWrap>
  );
};

export default Navigation;

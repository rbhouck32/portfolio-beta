import React from "react";
import styled from "styled-components";

const StyledNav = styled.a`
  font-family: "Courier New";
  text-decoration: none;
  color: #8b7878;
  font-weight: bold;
  padding: 0px 5px;
  letter-spacing: 2.5px;
`;

const NavWrap = styled.div`
  position: absolute;
  margin: 125px;
  bottom: 0;
  right: 0;
`;

const Navigation = () => {
  return (
    <NavWrap>
      <StyledNav href="#">About</StyledNav>
      <StyledNav href="#">Skills</StyledNav>
      <StyledNav href="#">Projects</StyledNav>
    </NavWrap>
  );
};

export default Navigation;

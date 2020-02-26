import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import { HeaderWrap, FlexHeader, NavCleanLink } from "../Style";
import { Link } from "react-router-dom";

const TitleH1 = styled.h1`
  color: #8b7878;
  font-family: "Pacifico", cursive;
  font-size: 4rem;
  text-shadow: 0px 4px 4px rgba(96, 96, 96, 0.25);
`;

const StyledTag = styled.p`
  font-family: "Courier New";
  color: #8b7878;
  font-weight: bold;
  letter-spacing: 2.5px;
  position: absolute;
  bottom: 10px;
  left: 100px;
`;

const CleanLink = styled.a`
  text-decoration: none;
  color: #8b7878;
  font-family: "Pacifico", cursive;
  font-size: 4rem;
  text-shadow: 0px 4px 4px rgba(96, 96, 96, 0.25);
  :hover {
    color: #3b252c;
    border-bottom: 3px solid #3b252c;
  }
`;

const HeaderContainer = () => {
  return (
    <HeaderWrap>
      <FlexHeader>
        <StyledTag>Aspiring Web Developer</StyledTag>
      </FlexHeader>
      <FlexHeader>
        <NavCleanLink to="/">
          <TitleH1>
            <CleanLink href="#">Rob Houck</CleanLink>
          </TitleH1>
        </NavCleanLink>
      </FlexHeader>
      <Navigation />
    </HeaderWrap>
  );
};

export default HeaderContainer;

import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

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
  padding: 112px;
`;

const FlexDiv = styled.div`
  width: 33%;
`;

const HeaderContainer = () => {
  return (
    <div className="Header-wrap">
      <FlexDiv>
        <StyledTag>Aspiring Web Developer</StyledTag>
      </FlexDiv>
      <FlexDiv>
        <TitleH1>Rob Houck</TitleH1>
      </FlexDiv>
      <Navigation />
    </div>
  );
};

export default HeaderContainer;

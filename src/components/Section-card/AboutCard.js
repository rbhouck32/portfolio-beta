import React from "react";
import styled from "styled-components";

const StyledTag = styled.p`
  font-family: "Courier New";
  color: #8b7878;
  font-weight: bold;
  line-height: 1.25;
`;

const CardTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
`;

const AboutDiv = styled.div`
  margin: 0 155px;
  margin-top: 10px;
`;

const AboutCard = () => {
  return (
    <AboutDiv>
      <CardTitle>About</CardTitle>
      <StyledTag>
        My Name is Rob Houck I currently reside in Cleveland, OH and am looking
        to make a career change. For the last twelve years I have found myself
        exploring the Cleveland culinary scene. After many great years I decided
        I needed a change. In October of 2019 I decided to take a leap of faith
        and enrolled in the Lambda School Full Stack Web Development program.
      </StyledTag>
    </AboutDiv>
  );
};

export default AboutCard;

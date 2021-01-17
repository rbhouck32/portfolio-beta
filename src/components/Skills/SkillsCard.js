import React from "react";
import {
  FlexCardLeft,
  FlexCardRight,
  Title,
  ListElement,
  FlexWrap,
  ListLink,
  LogosCard,
} from "./Style";
import styled from "styled-components";

const SkillsCard = () => {
  return (
    <>
      <FlexWrap>
        <FlexCardLeft>
          <Title>Technical Skills</Title>
          <ul>
            <ListElement>HTML5</ListElement>
            <ListElement>CSS</ListElement>
            <ListElement>JavaScript</ListElement>
            <ListElement>React</ListElement>
            <ListElement>Node.JS</ListElement>
            <ListElement>
              <ListLink href="https://github.com/rbhouck32">GitHub</ListLink>
            </ListElement>
          </ul>
        </FlexCardLeft>
        <FlexCardRight>
          <Title>Soft Skills</Title>
          <ul>
            <ListElement>Works Well Under Pressure</ListElement>
            <ListElement>
              Ability To Work in a Fast Paced Environment
            </ListElement>
            <ListElement>Managerial Experience</ListElement>
            <ListElement>The Ability to Multi-task</ListElement>
          </ul>
        </FlexCardRight>
      </FlexWrap>
      <img alt="logo" src="./src/assets/react_logo.jpg" />
    </>
  );
};

export default SkillsCard;

import React from "react";
import { FlexCard, Title, ListElement, FlexWrap } from "../Style";
import styled from "styled-components";

const ListLink = styled.a`
  font-family: "Courier New";
  color: #ff8f8f;
  font-weight: bold;
  padding: 0px 0px;
  letter-spacing: 2.5px;
`;

const SkillsCard = () => {
  return (
    <FlexWrap>
      <FlexCard>
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
      </FlexCard>
      <FlexCard>
        <Title>Soft Skills</Title>
        <ul>
          <ListElement>Works Well Under Pressure</ListElement>
          <ListElement>Ability To Work in a Fast Paced Environment</ListElement>
          <ListElement>Managerial Experience</ListElement>
          <ListElement>The Ability to Multi-task</ListElement>
        </ul>
      </FlexCard>
    </FlexWrap>
  );
};

export default SkillsCard;

import styled from "styled-components";

export const Paragraph = styled.p`
  font-family: "Courier New";
  color: #8b7878;
  font-weight: bold;
  line-height: 1.25;
`;

export const Title = styled.h3`
  font-family: "Montserrat", sans-serif;
`;

export const Card = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px solid #ccafaf;
`;

export const ListElement = styled.li`
  font-family: "Courier New";
  color: #8b7878;
  font-weight: bold;
  line-height: 1.25;
`;

export const Anchor = styled.a`
  font-family: "Courier New";
  text-decoration: none;
  color: #8b7878;
  font-weight: bold;
  padding: 0px 10px;
  letter-spacing: 2.5px;

  :hover {
    border-bottom: 1px solid black;
    color: #804747;
  }
`;

export const NavWrap = styled.div`
  position: absolute;
  margin: 125px;
  bottom: 0;
  right: 0;
`;

export const FlexWrap = styled.div`
  display: flex;
`;

export const FlexCard = styled.div`
  width: 30%;
  margin: 0 auto;
  margin-top: 10px;
  border-bottom: 1px solid #ccafaf;
`;

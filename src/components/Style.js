import styled from "styled-components";
import img from "../assets/cle-script.webp";
import { Link } from "react-router-dom";







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
  bottom: 20px;
  right: 100px;
`;





export const ImageContainer = styled.div`
  background: url(${img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.65;
  height: 100vh;
`;

export const HeaderWrap = styled.div`
  display: flex;
  border-bottom: 2px solid #222;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 20%;
  background-color: #eee;
`;

export const FlexHeader = styled.div`
  width: 33%;
`;

export const NavCleanLink = styled(Link)`
  text-decoration: none;
`;

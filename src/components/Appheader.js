import React from "react";
import "./Header.css";
import Logo from "./surveylogo.png";
import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

function Appheader() {
  return (
    <Header>
      <img className="logo" src={Logo} alt="Survey"></img>
    </Header>
  );
}

export default Appheader;

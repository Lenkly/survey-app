import React from "react";
import "./Header.css";
import { useTheme } from "emotion-theming";

import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

function Appheader() {
  const theme = useTheme();
  return (
    <Header>
      <img className="logo" src={theme.images.header} alt="Survey"></img>
    </Header>
  );
}

export default Appheader;

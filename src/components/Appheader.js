import React from "react";
import "./Header.css";
import { useTheme } from "emotion-theming";

import styled from "@emotion/styled";

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

const SwitchColorButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`;

function Appheader({ onSwitchColorButtonClick }) {
  const theme = useTheme();
  return (
    <Header>
      <SwitchColorButton onClick={onSwitchColorButtonClick}>
        <span role="img" aria-label="Switch theme">
          🌗
        </span>
      </SwitchColorButton>
      <img className="logo" src={theme.images.header} alt="Survey"></img>
    </Header>
  );
}

export default Appheader;

import React from "react";
import { Global, css } from "@emotion/core";

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          height: 100vh;
          color: white;
          background: ${theme.colors.backgroundPrimary};
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
      `}
    />
  );
}

export default GlobalStyles;

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Global, css } from "@emotion/core";

ReactDOM.render(
  <>
    <Global
      styles={css`
        *,
        *:after,
        *:before {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          height: 100vh;
          color: white;
          background: linear-gradient(
            152deg,
            rgba(221, 0, 26, 1) 0%,
            rgba(235, 104, 164, 1) 37%,
            rgba(255, 88, 223, 1) 41%,
            rgba(230, 230, 61, 1) 80%,
            rgba(255, 177, 0, 1) 100%
          );
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
      `}
    />

    <App />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

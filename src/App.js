import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appheader from "./components/Appheader";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";
import styled from "@emotion/styled";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider } from "emotion-theming";
//import daylight from "./themes/daylight";
import nightshine from "./themes/nightshine";

const Main = styled.main`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
  align-items: center;
`;

function App() {
  return (
    <ThemeProvider theme={nightshine}>
      <Router>
        <GlobalStyles />
        <Appheader />
        <Main>
          <Switch>
            <Route exact path="/">
              <Add />
            </Route>
            <Route path="/polls/:pollId/vote">
              <Vote />
            </Route>
            <Route path="/polls/:pollId">
              <Result />
            </Route>
          </Switch>
        </Main>
      </Router>
    </ThemeProvider>
  );
}
export default App;

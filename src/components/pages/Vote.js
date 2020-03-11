import React from "react";
import Result from "./Result";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Vote() {
  return (
    <>
      <Router>
        <div>
          <Link to="/result">Result</Link>

          <Switch>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </div>
      </Router>
      <div>Vote</div>
    </>
  );
}

export default Vote;

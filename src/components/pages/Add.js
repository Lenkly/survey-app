import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Vote from "./Vote";

function Add() {
  return (
    <>
      <Router>
        <div>
          <Link to="/vote">Vote</Link>

          <Switch>
            <Route path="/vote">
              <Vote />
            </Route>
          </Switch>
        </div>
      </Router>
      <div>Add</div>
    </>
  );
}

export default Add;

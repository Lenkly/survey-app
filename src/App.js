import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Add from "./components/pages/Add";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <div>
            <main>{/* <Add /> */}</main>
            <Link to="/add">Add</Link>

            <Switch>
              <Route path="/add">
                <Add />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}
export default App;

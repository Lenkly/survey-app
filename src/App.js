import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Add from "./pages/Add";
import Vote from "./pages/Vote";
import Result from "./pages/Result";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <main className="main">
          <Switch>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
export default App;

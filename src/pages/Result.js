import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Result() {
  return (
    <Card>
      Result <Link to="/add">Add</Link>
    </Card>
  );
}

export default Result;

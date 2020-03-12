import React from "react";
// import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import "./Add.css";

function Add() {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };
    alert(JSON.stringify(poll));
  }
  return (
    <Card>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="add-form__input-question"
          type="text"
          placeholder="Enter your question..."
          value={question}
          onChange={event => {
            setQuestion(event.target.value);
          }}
        />
        <input
          className="add-form__input"
          type="text"
          placeholder="First answer"
          value={answerOne}
          onChange={event => {
            setAnswerOne(event.target.value);
          }}
        />
        <input
          className="add-form__input"
          type="text"
          placeholder="Second answer"
          value={answerTwo}
          onChange={event => {
            setAnswerTwo(event.target.value);
          }}
        />
        <input
          className="add-form__input"
          type="text"
          placeholder="Third answer"
          value={answerThree}
          onChange={event => {
            setAnswerThree(event.target.value);
          }}
        />
        {/* Add <Link to="/vote">Vote!!</Link> */}
        <Button>Create Poll</Button>
      </form>
    </Card>
  );
}

export default Add;

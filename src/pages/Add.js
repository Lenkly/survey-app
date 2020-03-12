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
  async function handleSubmit(event) {
    event.preventDefault();
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree
    };
    const response = await fetch("http://localhost:4000/polls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(poll)
    });
    const createdPoll = await response.json();
    alert(`Created poll with the id ${createdPoll.id}`);
  }
  return (
    <>
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
        </form>
      </Card>

      <Button>Create Poll</Button>
    </>
  );
}

export default Add;

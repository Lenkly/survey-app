import React from "react";
// import { Link } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import styled from "@emotion/styled";
import Form from "../components/Form";
import { postPoll } from "../api/polls";
import { useHistory } from "react-router-dom";

const Input = styled.input`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const QuestionInput = styled(Input)`
  width: 100%;
  font-weight: 500;
  background: none;
  border: none;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  color: white;
  margin-bottom: 40px;
  padding-bottom: 5px;
`;

const AnswerInput = styled(Input)`
  width: 100%;
  margin-bottom: 30px;
  background: none;
  border: none;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  color: white;
  padding-bottom: 5px;
`;

function Add() {
  const history = useHistory();
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const poll = {
      question: question,
      answerOne: answerOne,
      answerTwo: answerTwo,
      answerThree: answerThree,
      votes: []
    };
    // const response = await fetch(
    //   process.env.REACT_APP_POLLS_API ||
    //     "https://my-json-server.typicode.com/Lenkly/survey-app/polls",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(poll)
    //   }
    // );
    //   const createdPoll = await response.json();
    //   alert(`Created poll with the id ${createdPoll.id}`);
    const createdPoll = await postPoll(poll);
    history.push(`/polls/${createdPoll.id}/vote`);
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Card>
          <QuestionInput
            type="text"
            placeholder="Enter your question..."
            value={question}
            onChange={event => {
              setQuestion(event.target.value);
            }}
          />
          <AnswerInput
            type="text"
            placeholder="First answer"
            value={answerOne}
            onChange={event => {
              setAnswerOne(event.target.value);
            }}
          />
          <AnswerInput
            type="text"
            placeholder="Second answer"
            value={answerTwo}
            onChange={event => {
              setAnswerTwo(event.target.value);
            }}
          />
          <AnswerInput
            type="text"
            placeholder="Third answer"
            value={answerThree}
            onChange={event => {
              setAnswerThree(event.target.value);
            }}
          />
          {/* Add <Link to="/vote">Vote!!</Link> */}
        </Card>

        <Button disabled={isLoading}>Create Poll</Button>
      </Form>
    </>
  );
}

export default Add;

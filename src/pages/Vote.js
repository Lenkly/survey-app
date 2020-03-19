import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../components/Card";
//import styled from "@emotion/styled";
import Button from "../components/Button";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import { patchPoll } from "../api/polls";

const POLLS_API_URL =
  process.env.REACT_APP_POLLS_API ||
  "https://my-json-server.typicode.com/Lenkly/survey-app/polls";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);

  React.useEffect(() => {
    async function getPoll() {
      const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await response.json();
      setPoll(poll);
    }

    getPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    // await fetch(`${POLLS_API_URL}/${pollId}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(newPoll)
    // });
    const patchedPoll = await patchPoll(poll);
    history.push(`/polls/${patchedPoll.id}`);
  }
  const options = ["answerOne", "answerTwo", "answerThree"];
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Card>
          <h2>{poll?.question}</h2>
          {options.map(option => (
            <RadioInput
              key={option}
              checked={answer === option}
              onChange={event => setAnswer(event.target.value)}
              value={option}
              label={poll?.[option]}
              name="answer"
            />
          ))}
          {/* <Label>
          <input
            type="radio"
            name="answer"
            value="answerOne"
            checked={answer === "answerOne"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerOne}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerTwo"
            checked={answer === "answerTwo"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerTwo}
        </Label>
        <Label>
          <input
            type="radio"
            name="answer"
            value="answerThree"
            checked={answer === "answerThree"}
            onChange={event => setAnswer(event.target.value)}
          />
          {poll?.answerThree}
        </Label> */}
        </Card>
        <Button>Vote</Button>
      </Form>
    </>
  );
}

export default Vote;

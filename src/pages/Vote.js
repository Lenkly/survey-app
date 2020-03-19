import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Card from "../components/Card";
//import styled from "@emotion/styled";
import Button from "../components/Button";
import Form from "../components/Form";
import RadioInput from "../components/RadioInput";
import { patchPoll, getPoll } from "../api/polls";

function Vote() {
  const { pollId } = useParams();
  const history = useHistory();
  const [poll, setPoll] = React.useState(null);
  const [answer, setAnswer] = React.useState(null);
  const [isLoadingPatchPoll, setIsLoadingPatchPoll] = React.useState(false);
  const [isLoadingGetPoll, setIsLoadingGetPoll] = React.useState(false);

  React.useEffect(() => {
    async function doGetPoll() {
      setIsLoadingGetPoll(true);
      //const response = await fetch(`${POLLS_API_URL}/${pollId}`);
      const poll = await getPoll(pollId);
      setPoll(poll);
      setIsLoadingGetPoll(false);
    }

    doGetPoll();
  }, [pollId]);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoadingPatchPoll(true);

    const newPoll = { ...poll };
    newPoll.votes.push(answer);

    await patchPoll(pollId, newPoll);
    history.push(`/polls/${poll.id}`);

    if (isLoadingGetPoll) {
      return <div>Loading...</div>;
    }

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
        <Button disabled={isLoadingPatchPoll}>Vote</Button>
      </Form>
    </>
  );
}

export default Vote;

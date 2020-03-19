import React from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import { getPoll } from "../api/polls";

function Result() {
  const { pollId } = useParams();
  const [poll, setPoll] = React.useState(null);

  React.useEffect(() => {
    async function doGetPoll() {
      const poll = await getPoll();
      setPoll(poll);
    }

    doGetPoll();
    pollId.then(poll => setPoll(poll));
  }, [pollId]);

  return (
    <Card>
      <h2>{poll?.question}</h2>
      <div>{poll?.answerOne}</div>
      <div>{poll?.answerTwo}</div>
      <div>{poll?.answerThree}</div>
    </Card>
  );
}

export default Result;
// poll && poll.question = poll?.question gibt es die Variable? Falls nicht, ist es falsy

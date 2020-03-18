import React from "react";

function Countdown({ seconds, onClick }) {
  const [secondsLeft, setSecondsLeft] = React.useState(seconds);

  React.useEffect(() => {
    if (secondsLeft === 0) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [secondsLeft]);

  React.useEffect(() => {
    setSecondsLeft(seconds);
  }, [seconds]);

  return <div onClick={onClick}>{secondsLeft}</div>;
}

export default Countdown;
